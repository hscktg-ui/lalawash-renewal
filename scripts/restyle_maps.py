"""Restyle branch map backgrounds without regenerating Korean text glyphs."""

from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter


def restyle(src_path: str, dst_path: str) -> None:
    im = Image.open(src_path).convert("RGBA")
    w, h = im.size
    px = im.load()

    # Soft brand wash destinations (sample corners → bilinear-ish via y/x)
    def bg_color(x: int, y: int) -> tuple[int, int, int]:
        t = y / max(h - 1, 1)
        u = x / max(w - 1, 1)
        r = 246 + (236 - 246) * t
        g = 250 + (244 - 250) * t
        b = 253 + (250 - 253) * t
        r = r * (1 - 0.02 * u) + 226 * 0.02 * u
        g = g * (1 - 0.025 * u) + 238 * 0.025 * u
        b = b * (1 - 0.045 * u) + 248 * 0.045 * u
        return int(r), int(g), int(b)

    mask = Image.new("L", (w, h), 0)
    mp = mask.load()
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a < 200:
                continue
            mx = max(r, g, b)
            mn = min(r, g, b)
            chroma = mx - mn
            luma = 0.299 * r + 0.587 * g + 0.114 * b
            # mottled paper only — leave white map, dark labels, brand markers
            if chroma < 32 and 165 < luma < 238:
                mp[x, y] = 255

    mask = mask.filter(ImageFilter.GaussianBlur(radius=1.2))
    mp = mask.load()

    out = Image.new("RGBA", (w, h))
    op = out.load()
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            m = mp[x, y] / 255.0
            if m <= 0.01:
                op[x, y] = (r, g, b, a)
                continue
            nr, ng, nb = bg_color(x, y)
            op[x, y] = (
                int(r * (1 - m) + nr * m),
                int(g * (1 - m) + ng * m),
                int(b * (1 - m) + nb * m),
                255,
            )

    rgb = out.convert("RGB")
    rgb = ImageEnhance.Contrast(rgb).enhance(1.04)
    rgb = ImageEnhance.Color(rgb).enhance(1.05)
    Path(dst_path).parent.mkdir(parents=True, exist_ok=True)
    rgb.save(dst_path, "PNG", optimize=True)
    print(dst_path, rgb.size, Path(dst_path).stat().st_size)


if __name__ == "__main__":
    root = Path(__file__).resolve().parents[1]
    restyle(str(root / "public/_center-map-src.png"), str(root / "public/maps/center-map.png"))
    restyle(str(root / "public/_center-map-alt-src.png"), str(root / "public/maps/center-map-alt.png"))
    print("done")
