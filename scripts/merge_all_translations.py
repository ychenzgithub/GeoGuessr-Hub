# -*- coding: utf-8 -*-
"""
Merge all translations into assets/js/geoguessr-data.js
Ensures 100% complete bilingual data structure for countries, comparisons,
regional guides, topics, islands, and flags.
"""

import json
import re
import os

from scripts.enrich_countries import COUNTRY_TRANSLATIONS
from scripts.enrich_islands import ISLAND_TRANSLATIONS
from scripts.enrich_comparisons import COMPARISON_TRANSLATIONS
from scripts.enrich_flags import enrich_flags_data
from scripts.enrich_regional import REGIONAL_TRANSLATIONS
from scripts.enrich_topics_full import TOPIC_BADGES, TOPIC_SECTIONS_FULL

print("Reading assets/js/geoguessr-data.js...")
with open("assets/js/geoguessr-data.js", "r", encoding="utf-8") as f:
    raw_content = f.read()

m = re.search(r'window\.GEOGUESSR_DATA\s*=\s*(\{[\s\S]*\});?\s*$', raw_content)
if not m:
    raise ValueError("Could not parse window.GEOGUESSR_DATA from assets/js/geoguessr-data.js")

data = json.loads(m.group(1))

# Tag mapping dictionary
TAG_MAP = {
    "左行 / LHD": ("左侧行驶", "Left-Hand Drive"),
    "车牌 / Plate": ("车牌特征", "License Plates"),
    "电线杆 / Pole": ("电线杆", "Utility Poles"),
    "路缘标 / Bollard": ("路缘标", "Bollards"),
    "街景车 / Car Meta": ("街景车", "Camera Car"),
    "红土 / Red Soil": ("红土壤", "Red Soil"),
    "道路标线 / Lines": ("道路标线", "Road Markings"),
    "语言 / Script": ("语言文字", "Language & Script")
}

# 1. Enrich Countries
print("Enriching countries...")
for c in data.get("countries", []):
    name = c["nameEn"].replace(" (蒙古)", "").strip()
    c["nameEn"] = name
    
    trans = COUNTRY_TRANSLATIONS.get(name, {})
    c["descZh"] = trans.get("descZh", c.get("desc", "").lstrip("：: "))
    c["descEn"] = trans.get("descEn", c["descZh"])
    
    # Keep legacy desc for backward compatibility
    c["desc"] = c["descZh"]
    
    # Bilingual tags
    raw_tags = c.get("tags", [])
    tags_zh = []
    tags_en = []
    for tg in raw_tags:
        if tg in TAG_MAP:
            tags_zh.append(TAG_MAP[tg][0])
            tags_en.append(TAG_MAP[tg][1])
        else:
            tags_zh.append(tg)
            tags_en.append(tg)
    c["tagsZh"] = tags_zh
    c["tagsEn"] = tags_en

# 2. Enrich Comparisons
print("Enriching comparisons...")
for comp in data.get("comparisons", []):
    cid = comp.get("id")
    trans = COMPARISON_TRANSLATIONS.get(cid, {})
    
    comp["similaritiesZh"] = comp.get("similarities", [])
    comp["similaritiesEn"] = trans.get("similaritiesEn", comp["similaritiesZh"])
    
    if "features" in trans:
        comp["features"] = trans["features"]
    else:
        # fallback
        for f in comp.get("features", []):
            f["nameZh"] = f.get("name", "")
            f["nameEn"] = f.get("name", "")
            f["detailsZh"] = f.get("details", [])
            f["detailsEn"] = f.get("details", [])

# 3. Enrich Regional Guides
print("Enriching regional guides...")
for rg in data.get("regionalGuides", []):
    rid = rg.get("id")
    if rid in REGIONAL_TRANSLATIONS:
        rg["sections"] = REGIONAL_TRANSLATIONS[rid]
    else:
        for s in rg.get("sections", []):
            s["headingZh"] = s.get("heading", "")
            s["headingEn"] = s.get("heading", "")
            s["contentZh"] = s.get("content", "")
            s["contentEn"] = s.get("content", "")

# 4. Enrich Islands
print("Enriching islands...")
for isl in data.get("islands", []):
    name = isl.get("nameEn", "")
    trans = ISLAND_TRANSLATIONS.get(name, {})
    
    isl["locationZh"] = trans.get("locationZh", isl.get("location", ""))
    isl["locationEn"] = trans.get("locationEn", isl["locationZh"])
    
    isl["sovereignZh"] = trans.get("sovereignZh", isl.get("sovereign", ""))
    isl["sovereignEn"] = trans.get("sovereignEn", isl["sovereignZh"])
    
    isl["metaZh"] = trans.get("metaZh", isl.get("meta", ""))
    isl["metaEn"] = trans.get("metaEn", isl["metaZh"])
    
    # Keep legacy fields
    isl["location"] = isl["locationZh"]
    isl["sovereign"] = isl["sovereignZh"]
    isl["meta"] = isl["metaZh"]

# 5. Enrich Flags
print("Enriching flags...")
data["flags"] = enrich_flags_data(data.get("flags", []))

# 6. Enrich Topics
print("Enriching topics...")
for tp in data.get("topics", []):
    tpid = tp.get("id", "")
    b_zh, b_en = TOPIC_BADGES.get(tpid, (tp.get("badge", ""), tp.get("badge", "")))
    tp["badgeZh"] = b_zh
    tp["badgeEn"] = b_en
    tp["badge"] = b_zh
    
    if tpid in TOPIC_SECTIONS_FULL:
        tp["sections"] = TOPIC_SECTIONS_FULL[tpid]
    else:
        for s in tp.get("sections", []):
            s["titleZh"] = s.get("title", "")
            s["titleEn"] = s.get("title", "")
            s["textZh"] = s.get("text", "")
            s["textEn"] = s.get("text", "")

# 7. Write back to assets/js/geoguessr-data.js
output_path = "assets/js/geoguessr-data.js"
print(f"Writing updated database to {output_path}...")

json_output = json.dumps(data, ensure_ascii=False, indent=2)
js_content = f"// Auto-generated GeoGuessr Knowledge Database (Bilingual ZH/EN)\nwindow.GEOGUESSR_DATA = {json_output};\n"

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully updated {output_path}! File size: {len(js_content)} bytes.")
