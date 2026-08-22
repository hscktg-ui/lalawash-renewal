# -*- coding: utf-8 -*-
import os
from pathlib import Path

import fitz

pdf = Path(r"D:\다운로드") / "라라워시_장례식장_제안서_A4세로_12면(수정7).pdf"
out_dir = Path(r"D:\Projects\lalawash-renewal\public\pdf-assets\funeral-proposal")
txt_out = Path(r"D:\Projects\lalawash-renewal\tmp-funeral-proposal.txt")
out_dir.mkdir(parents=True, exist_ok=True)

doc = fitz.open(pdf)
parts = []
for i, page in enumerate(doc):
    text = page.get_text("text")
    parts.append(f"===== PAGE {i + 1} =====\n{text}\n")
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
    pix.save(str(out_dir / f"page-{i + 1:02d}.jpg"))
    for img_i, img in enumerate(page.get_images(full=True)):
        xref = img[0]
        try:
            base = doc.extract_image(xref)
            ext = base["ext"]
            (out_dir / f"p{i + 1:02d}-img{img_i:02d}.{ext}").write_bytes(base["image"])
        except Exception as e:
            print("img err", i + 1, img_i, e)

txt_out.write_text("\n".join(parts), encoding="utf-8")
print("pages", len(doc))
print("text_chars", sum(len(p) for p in parts))
print("files", len(list(out_dir.iterdir())))
print("pdf_exists", pdf.exists(), pdf)
