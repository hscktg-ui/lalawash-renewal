# -*- coding: utf-8 -*-
"""Build notice seed from old site list + detail meta/body."""

from __future__ import annotations

import html
import json
import re
import urllib.request
from pathlib import Path

UA = {"User-Agent": "Mozilla/5.0"}
ROOT = Path(__file__).resolve().parents[1]
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
)


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=40) as r:
        return r.read().decode("utf-8", "ignore")


def clean(s: str) -> str:
    s = re.sub(r"<[^>]+>", " ", s)
    s = html.unescape(s)
    return re.sub(r"\s+", " ", s).strip()


def collect_ids() -> list[tuple[str, str, str]]:
    """Return (idx, date_raw, title)."""
    out: list[tuple[str, str, str]] = []
    seen: set[str] = set()
    for q in ("", "?page=2", "?page=3", "?page=4"):
        try:
            raw = fetch("https://lalawash.co.kr/notice" + q)
        except Exception:
            break
        for m in re.finditer(r"bmode=view&(?:amp;)?idx=(\d+)", raw):
            idx = m.group(1)
            if idx in seen:
                continue
            chunk = raw[m.start() : m.start() + 1800]
            tm = re.search(r"\[(20\d{2}\.[^\]]+)\]\s*([^<\n]{4,160})", chunk)
            if not tm:
                continue
            seen.add(idx)
            out.append((idx, tm.group(1), clean(tm.group(2)).rstrip(" :")))
    return out


def detail_body(idx: str, title: str) -> str:
    url = f"https://lalawash.co.kr/notice/?bmode=view&idx={idx}"
    raw = fetch(url)
    # prefer og:description
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
        desc = clean(md.group(1))
        if len(desc) > 40 and desc not in title:
            return desc

    for tag in ("script", "style", "noscript"):
        raw = re.sub(rf"<{tag}[\s\S]*?</{tag}>", " ", raw, flags=re.I)

    paras = [clean(t) for t in re.findall(r"<p[^>]*>([\s\S]*?)</p>", raw, re.I)]
    kept: list[str] = []
    for p in paras:
        if len(p) < 30:
            continue
        if any(x in p for x in FOOTER_MARKERS):
            continue
        if p.startswith("[20") and p != title and not p.startswith(title[:12]):
            # other post titles in sidebar
            if kept:
                break
            continue
        if p in kept:
            continue
        kept.append(p)
        if sum(len(x) for x in kept) > 900:
            break
    return "\n\n".join(kept) if kept else title


def normalize_date(date_raw: str) -> str:
    parts = re.split(r"[.\-/]", date_raw)
    y = parts[0]
    mo = int(parts[1]) if len(parts) > 1 else 1
    d = int(parts[2]) if len(parts) > 2 else 1
    return f"{y}-{mo:02d}-{d:02d}"


def main() -> None:
    rows = collect_ids()
    print("ids", len(rows))
    notices = []
    for idx, date_raw, title_rest in rows:
        title = f"[{date_raw}] {title_rest}"
        date_s = normalize_date(date_raw)
        try:
            body = detail_body(idx, title)
        except Exception as e:
            print("fail", idx, e)
            body = title
        ntype = "news"
        if any(k in title for k in ("총회", "공고", "공문")):
            ntype = "official"
        body = body.strip()
        if "(이전 사이트" not in body:
            body += "\n\n(이전 홈페이지 게시판에서 옮긴 글입니다. 사진·현장 이야기는 블로그에서도 볼 수 있습니다.)"
        notices.append(
            {
                "id": f"legacy-{idx}",
                "type": ntype,
                "title": title[:140],
                "body": body[:3500],
                "author": "라라워시",
                "pinned": False,
                "createdAt": f"{date_s}T00:00:00.000Z",
                "updatedAt": f"{date_s}T00:00:00.000Z",
            }
        )
        print(date_s, title[:50], len(body))

    pinned = {
        "id": "seed-site-migrate",
        "type": "notice",
        "title": "홈페이지가 새로 열렸습니다",
        "body": (
            "라라워시 공식 홈페이지가 리뉴얼되었습니다.\n"
            "이전 사이트의 소식·공지는 이 게시판으로 옮겨 두었습니다.\n"
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
    out = ROOT / "src" / "data" / "legacyNotices.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(all_n, ensure_ascii=False, indent=2), encoding="utf-8")
    print("saved", out, len(all_n))


if __name__ == "__main__":
    main()
