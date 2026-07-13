# -*- coding: utf-8 -*-
"""Scrape lalawash.co.kr/notice with images → public/notices + seed JSON/TS."""

from __future__ import annotations

import html
import json
import re
import urllib.request
from pathlib import Path
from urllib.parse import urlparse

UA = {"User-Agent": "Mozilla/5.0 (compatible; LalawashRenewal/1.0)"}
ROOT = Path(__file__).resolve().parents[1]
OUT_IMG = ROOT / "public" / "notices"
OUT_JSON = ROOT / "src" / "data" / "legacyNotices.json"
OUT_TS = ROOT / "src" / "data" / "seedNotices.ts"

FOOTER_MARKERS = (
    "시흥작은자리점",
    "E-mail.",
    "Add.",
    "사업자등록번호",
    "상담문의",
    "전화걸기",
    "All Rights Reserved",
    "공지사항 사이트에서",
    "대표자 이메일",
    "월~금",
    "로그인",
    "마이페이지",
)

# site chrome / partner logos that appear on every page
SKIP_IMG_SUBSTR = (
    "/7cb1f4968be4e",
    "/5a8e84771e920",  # site logo
    "/8ce43e22c4308",
    "/fd97d36b03ac0",
    "/f94b686c391df",
    "/0ab03593ff6e3",
    "/5f051377a0809",  # gg
    "/9d2534da00f8f",  # gpsc
    "/c70294a143493",
    "/de47929d260ca",
    "favicon",
    "apple-touch",
)


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=45) as r:
        return r.read()


def fetch_text(url: str) -> str:
    return fetch(url).decode("utf-8", "ignore")


def clean(s: str) -> str:
    s = re.sub(r"<[^>]+>", " ", s)
    s = html.unescape(s)
    return re.sub(r"\s+", " ", s).strip()


def collect_ids() -> list[tuple[str, str, str]]:
    """Return (idx, date_raw, title_rest)."""
    out: list[tuple[str, str, str]] = []
    seen: set[str] = set()
    for q in ("", "?page=2", "?page=3", "?page=4", "?page=5"):
        try:
            raw = fetch_text("https://lalawash.co.kr/notice" + q)
        except Exception as e:
            print("list fail", q, e)
            break
        for m in re.finditer(r"bmode=view&(?:amp;)?idx=(\d+)", raw):
            idx = m.group(1)
            if idx in seen:
                continue
            chunk = raw[m.start() : m.start() + 2000]
            tm = re.search(r"\[(20\d{2}\.[^\]]+)\]\s*([^<\n]{4,180})", chunk)
            if not tm:
                continue
            seen.add(idx)
            out.append((idx, tm.group(1), clean(tm.group(2)).rstrip(" :")))
    return out


def normalize_date(date_raw: str) -> str:
    parts = re.split(r"[.\-/]", date_raw)
    y = parts[0]
    mo = int(parts[1]) if len(parts) > 1 else 1
    d = int(parts[2]) if len(parts) > 2 else 1
    return f"{y}-{mo:02d}-{d:02d}"


def prefer_full_url(url: str) -> str:
    """Prefer /upload/ over /thumbnail/ when possible (same filename often exists)."""
    if "/thumbnail/" in url:
        # keep thumbnail if that is what the post used; still usable
        return url
    return url


def is_content_image(url: str) -> bool:
    if not url:
        return False
    low = url.lower()
    if not any(low.endswith(ext) or f".{ext}?" in low for ext in ("jpg", "jpeg", "png", "webp", "gif")):
        if not re.search(r"\.(jpg|jpeg|png|webp|gif)(\?|$)", low):
            return False
    if any(s in url for s in SKIP_IMG_SUBSTR):
        return False
    if "cdn.imweb.me" not in url and "imweb.me" not in url:
        # allow other hosts but skip data/svg
        if url.startswith("data:"):
            return False
    return True


def extract_fr_view_html(raw: str) -> str:
    blocks = re.findall(
        r'class=["\'][^"\']*fr-view[^"\']*["\'][^>]*>([\s\S]*?)</div>',
        raw,
        re.I,
    )
    if not blocks:
        return ""
    # pick the longest block as main body
    return max(blocks, key=len)


def extract_body_and_images(raw: str, title: str) -> tuple[str, list[str]]:
    fr = extract_fr_view_html(raw)
    images: list[str] = []
    body = ""

    if fr:
        for u in re.findall(r"""(?:src|data-src)=["']([^"']+)["']""", fr, re.I):
            u = prefer_full_url(html.unescape(u).strip())
            if is_content_image(u) and u not in images:
                images.append(u)

        paras = [clean(t) for t in re.findall(r"<p[^>]*>([\s\S]*?)</p>", fr, re.I)]
        kept: list[str] = []
        for p in paras:
            if len(p) < 20:
                continue
            if any(x in p for x in FOOTER_MARKERS):
                continue
            if p in kept:
                continue
            kept.append(p)
            if sum(len(x) for x in kept) > 3200:
                break
        body = "\n\n".join(kept)

    if not body:
        md = re.search(
            r'property=["\']og:description["\'][^>]*content=["\']([^"\']+)["\']',
            raw,
            re.I,
        )
        if not md:
            md = re.search(
                r'name=["\']description["\'][^>]*content=["\']([^"\']+)["\']',
                raw,
                re.I,
            )
        if md:
            body = clean(md.group(1))

    if not images:
        og = re.search(
            r'property=["\']og:image["\'][^>]*content=["\']([^"\']+)["\']',
            raw,
            re.I,
        )
        if og:
            u = html.unescape(og.group(1).strip())
            if is_content_image(u):
                images.append(u)

    if not body:
        body = title
    return body, images


def ext_from_url(url: str) -> str:
    path = urlparse(url).path
    ext = Path(path).suffix.lower()
    if ext in {".jpg", ".jpeg", ".png", ".webp", ".gif"}:
        return ".jpg" if ext == ".jpeg" else ext
    return ".jpg"


def download_images(idx: str, urls: list[str], limit: int = 6) -> list[str]:
    """Download to public/notices/legacy-{idx}/NN.ext and return public paths."""
    if not urls:
        return []
    dest_dir = OUT_IMG / f"legacy-{idx}"
    dest_dir.mkdir(parents=True, exist_ok=True)
    local_paths: list[str] = []
    for i, url in enumerate(urls[:limit], start=1):
        ext = ext_from_url(url)
        name = f"{i:02d}{ext}"
        dest = dest_dir / name
        try:
            data = fetch(url)
            if len(data) < 800:
                print("  skip tiny", url)
                continue
            dest.write_bytes(data)
            local_paths.append(f"/notices/legacy-{idx}/{name}")
            print(f"  img {name} {len(data)}b")
        except Exception as e:
            print("  img fail", url[:80], e)
    return local_paths


def main() -> None:
    rows = collect_ids()
    print("ids", len(rows))
    notices: list[dict] = []

    for idx, date_raw, title_rest in rows:
        title = f"[{date_raw}] {title_rest}"
        date_s = normalize_date(date_raw)
        url = f"https://lalawash.co.kr/notice/?bmode=view&idx={idx}"
        try:
            raw = fetch_text(url)
            body, remote_imgs = extract_body_and_images(raw, title)
        except Exception as e:
            print("fail", idx, e)
            body, remote_imgs = title, []

        print(date_s, title[:48], "imgs", len(remote_imgs))
        local_imgs = download_images(idx, remote_imgs)

        ntype = "news"
        if any(k in title for k in ("총회", "공고", "공문")):
            ntype = "official"

        body = body.strip()
        if "(이전 홈페이지" not in body and "(이전 사이트" not in body:
            body += "\n\n(이전 홈페이지 게시판에서 옮긴 글입니다.)"

        notice: dict = {
            "id": f"legacy-{idx}",
            "type": ntype,
            "title": title[:140],
            "body": body[:4500],
            "author": "라라워시",
            "pinned": False,
            "createdAt": f"{date_s}T00:00:00.000Z",
            "updatedAt": f"{date_s}T00:00:00.000Z",
        }
        if local_imgs:
            notice["coverImage"] = local_imgs[0]
            notice["images"] = local_imgs
        notices.append(notice)

    pinned = {
        "id": "seed-site-migrate",
        "type": "notice",
        "title": "홈페이지가 새로 열렸습니다",
        "body": (
            "라라워시 공식 홈페이지가 리뉴얼되었습니다.\n"
            "이전 사이트의 소식·공지와 사진은 이 게시판으로 옮겨 두었습니다.\n"
            "일상 현장 이야기는 네이버 블로그에서도 이어집니다.\n"
            "회원사(조합원·가맹) 전용몰은 하단 안내를 참고해 주세요."
        ),
        "author": "라라워시",
        "pinned": True,
        "createdAt": "2026-07-13T10:00:00.000Z",
        "updatedAt": "2026-07-13T10:00:00.000Z",
    }
    blog = {
        "id": "seed-blog",
        "type": "news",
        "title": "현장 소식은 블로그에서도 볼 수 있습니다",
        "body": "지점·축제·장례·급식 현장 이야기는 네이버 블로그와 인스타그램에서 전해 드립니다.",
        "author": "라라워시",
        "pinned": False,
        "createdAt": "2026-07-13T10:05:00.000Z",
        "updatedAt": "2026-07-13T10:05:00.000Z",
    }

    all_n = [pinned, blog] + notices
    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(json.dumps(all_n, ensure_ascii=False, indent=2), encoding="utf-8")

    payload = json.dumps(all_n, ensure_ascii=False, indent=2)
    ts = (
        "import type { Notice } from '../lib/content'\n\n"
        "/** 이전 홈페이지 공지 이관(이미지 포함) + 리뉴얼 안내 */\n"
        f"export const SEED_NOTICES: Notice[] = {payload}\n"
    )
    OUT_TS.write_text(ts, encoding="utf-8")

    with_img = sum(1 for n in notices if n.get("images"))
    print("saved", OUT_JSON, "total", len(all_n), "with images", with_img)


if __name__ == "__main__":
    main()
