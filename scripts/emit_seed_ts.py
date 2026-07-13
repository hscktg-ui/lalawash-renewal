# -*- coding: utf-8 -*-
import json
from pathlib import Path

root = Path(__file__).resolve().parents[1]
data = json.loads((root / "src/data/legacyNotices.json").read_text(encoding="utf-8"))
payload = json.dumps(data, ensure_ascii=False, indent=2)
ts = (
    "import type { Notice } from '../lib/content'\n\n"
    "/** 이전 홈페이지 공지 이관 + 리뉴얼 안내 */\n"
    f"export const SEED_NOTICES: Notice[] = {payload}\n"
)
(root / "src/data/seedNotices.ts").write_text(ts, encoding="utf-8")
print("ok", len(data))
