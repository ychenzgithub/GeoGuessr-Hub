import re, json

with open('GeoGuessr/离岛 36de4db74b03809cb579d23bf7e47732.md', 'r', encoding='utf-8') as f:
    lines = [l.strip() for l in f.readlines() if l.strip()]

islands = []
for line in lines:
    if not line.startswith('|') or '中英文名' in line or '---' in line:
        continue
    cols = [c.strip() for c in line.split('|')[1:-1]]
    if len(cols) >= 4 and cols[0]:
        name_part = cols[0]
        parts = [p.strip() for p in name_part.split('/')]
        name_zh = parts[0]
        name_en = parts[1] if len(parts) > 1 else parts[0]
        location = cols[1]
        sovereign = cols[2]
        meta = cols[3]
        islands.append({
            "nameZh": name_zh,
            "nameEn": name_en,
            "location": location,
            "sovereign": sovereign,
            "meta": meta
        })

print(f"Extracted {len(islands)} remote islands:")
for isl in islands[:5]:
    print(f" - {isl['nameZh']} ({isl['nameEn']}) [{isl['sovereign']}]: {isl['meta'][:60]}...")
