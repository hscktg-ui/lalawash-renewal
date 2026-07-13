# -*- coding: utf-8 -*-
"""Compress scraped notice images for web."""
from __future__ import annotations

from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1] / "public" / "notices"
MAX_W = 1400
QUALITY = 78


def compress(path: Path) -> None:
    try:
        im = Image.open(path)
    except Exception as e:
        print("open fail", path, e)
        return
    im = im.convert("RGB") if im.mode in ("RGBA", "P") else im
    w, h = im.size
    if w > MAX_W:
        nh = int(h * MAX_W / w)
        im = im.resize((MAX_W, nh), Image.Resampling.LANCZOS)
    out = path.with_suffix(".jpg")
    im.save(out, "JPEG", quality=QUALITY, optimize=True)
    if out != path and path.exists():
        path.unlink()
    print(path.name, "->", out.name, out.stat().st_size)


def main() -> None:
    files = list(ROOT.rglob("*"))
    files = [p for p in files if p.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"}]
    before = sum(p.stat().st_size for p in files)
    for p in files:
        compress(p)
    after_files = [p for p in ROOT.rglob("*") if p.is_file()]
    after = sum(p.stat().st_size for p in after_files)
    print(f"before={before/1e6:.1f}MB after={after/1e6:.1f}MB files={len(after_files)}")


if __name__ == "__main__":
    main()
