from pathlib import Path

from PIL import Image

root = Path(r"D:\Projects\lalawash-renewal\public\spec-assets")
for path in sorted(root.glob("*.jpg")):
    with Image.open(path) as im:
        im = im.convert("RGB")
        w, h = im.size
        max_w = 1200
        if w > max_w:
            h = int(h * max_w / w)
            w = max_w
            im = im.resize((w, h), Image.Resampling.LANCZOS)
        im.save(path, "JPEG", quality=82, optimize=True)
        print(f"{path.name}\t{path.stat().st_size}")
