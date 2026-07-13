# -*- coding: utf-8 -*-
"""Scrape lalawash.co.kr/notice into JSON for migration."""

from __future__ import annotations

import html
import json
import re
import urllib.request
from pathlib import Path

UA = {"User-Agent": "Mozilla/5.0"}
ROOT = Path(__file__).resolve().parents[1]


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=40) as r:
        return r.read().decode("utf-8", "ignore")


def collect_ids() -> list[str]:
    ids: list[str] = []
    for q in ("", "?page=2", "?page=3", "?page=4"):
        try:
            raw = fetch("https://lalawash.co.kr/notice" + q)
        except Exception:
            break
        found = re.findall(r"bmode=view&(?:amp;)?idx=(\d+)", raw)
        if not found:
            break
        for i in found:
            if i not in ids:
                ids.append(i)
    return ids


def parse_date(raw: str) -> str:
    m = re.search(r"(20\d{2})[.\-/](\d{1,2})[.\-/](\d{1,2})", raw)
    if not m:
        return "2026-01-01"
    y, mo, d = m.groups()
    return f"{y}-{int(mo):02d}-{int(d):02d}"


def clean_text(s: str) -> str:
    s = re.sub(r"<[^>]+>", " ", s)
    s = html.unescape(s)
    s = re.sub(r"\s+", " ", s).strip()
    return s


SKIP = (
    "메뉴",
    "상담문의",
    "월~금",
    "라라워시 지점",
    "고양점",
    "로그인",
    "알림",
    "조회",
    "공감",
    "댓글",
    "글쓰기",
    "검색",
    "마이페이지",
    "로그아웃",
    "전화걸기",
    "사업자등록번호",
    "All Rights Reserved",
)


def parse_detail(idx: str) -> dict:
    url = f"https://lalawash.co.kr/notice/?bmode=view&idx={idx}"
    raw = fetch(url)

    title = ""
    for pat in (
        r'property=["\']og:title["\'][^>]*content=["\']([^"\']+)["\']',
        r'content=["\']([^"\']+)["\'][^>]*property=["\']og:title["\']',
        r"<h[123][^>]*>([^<]{6,160})</h[123]>",
    ):
        m = re.search(pat, raw, re.I)
        if m:
            title = clean_text(m.group(1))
            break
    if not title:
        m = re.search(r"<title>([^<]+)</title>", raw, re.I)
        title = clean_text(m.group(1)) if m else f"공지 {idx}"
    title = re.sub(r"\s*\|\s*라라워시.*$", "", title).strip()
    title = title.replace("라라워시 뉴스 및 보도자료", "").strip() or f"공지 {idx}"

    date_s = parse_date(raw)

    body_html = raw
    for tag in ("script", "style", "noscript"):
        body_html = re.sub(rf"<{tag}[\s\S]*?</{tag}>", " ", body_html, flags=re.I)

    texts = re.findall(
        r"<(?:p|div|li|span)[^>]*>([\s\S]*?)</(?:p|div|li|span)>",
        body_html,
        re.I,
    )
    cleaned: list[str] = []
    for t in texts:
        t = clean_text(t)
        if len(t) < 25:
            continue
        if any(x in t for x in SKIP):
            continue
        if t == title or t in cleaned:
            continue
        cleaned.append(t)

    body = "\n\n".join(cleaned[:14])
    if len(body) < 40:
        md = re.search(
            r'name=["\']description["\'][^>]*content=["\']([^"\']+)["\']',
            raw,
            re.I,
        )
        body = clean_text(md.group(1)) if md else title

    # classify: official if 공문/총회/주주 in title
    ntype = "news"
    if any(k in title for k in ("공문", "총회", "임시총회", "정기총회", "주주")):
        ntype = "official"
    elif any(k in title for k in ("공지", "안내")):
        ntype = "notice"

    return {
        "id": f"legacy-{idx}",
        "type": ntype,
        "title": title[:140],
        "body": body[:4500],
        "author": "라라워시",
        "pinned": False,
        "createdAt": f"{date_s}T00:00:00.000Z",
        "updatedAt": f"{date_s}T00:00:00.000Z",
    }


def main() -> None:
    ids = collect_ids()
    print("ids", len(ids))
    notices = []
    for idx in ids:
        try:
            n = parse_detail(idx)
            notices.append(n)
            print(idx, n["createdAt"][:10], n["title"][:50], len(n["body"]))
        except Exception as e:
            print("fail", idx, e)

    out = ROOT / "scripts" / "legacy-notices.json"
    out.write_text(json.dumps(notices, ensure_ascii=False, indent=2), encoding="utf-8")
    print("saved", out, len(notices))


if __name__ == "__main__":
    main()
