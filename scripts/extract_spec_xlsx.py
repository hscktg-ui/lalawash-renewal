from pathlib import Path

import openpyxl

src = Path(r"D:\user\Documents\카카오톡 받은 파일\홈페이지 용기 사양.xlsx")
out = Path(r"D:\Projects\lalawash-renewal\public\spec-assets")
out.mkdir(parents=True, exist_ok=True)

wb = openpyxl.load_workbook(src)
for sheet_name in wb.sheetnames:
    ws = wb[sheet_name]
    images = getattr(ws, "_images", []) or []
    print(f"=== {sheet_name} {len(images)}")
    for i, img in enumerate(images):
        a = img.anchor
        row = col = None
        if getattr(a, "_from", None) is not None:
            row = a._from.row + 1
            col = a._from.col + 1
        data = img._data()
        slug = {
            "장례용기": "funeral",
            "축제용기": "festival",
            "식판": "sikpan",
            "다회용컵": "cup",
            "유아식판": "kids",
        }[sheet_name]
        name = f"{slug}-{i + 1:02d}-r{row}.jpg"
        dest = out / name
        dest.write_bytes(data)
        print(f"  {name} row={row} col={col} bytes={len(data)}")
