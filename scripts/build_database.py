import os, glob, re, json

print("Building GeoGuessr Master Database...")

os.makedirs("assets/js", exist_ok=True)
os.makedirs("assets/css", exist_ok=True)

# 1. Continent & Flag Mapping
CONTINENT_MAP = {
    "Albania": ("Europe", "欧洲", "🇦🇱"),
    "American Samoa": ("Oceania", "大洋洲", "🇦🇸"),
    "Andorra": ("Europe", "欧洲", "🇦🇩"),
    "Argentina": ("South America", "南美洲", "🇦🇷"),
    "Australia": ("Oceania", "大洋洲", "🇦🇺"),
    "Austria": ("Europe", "欧洲", "🇦🇹"),
    "Bangladesh": ("Asia", "亚洲", "🇧🇩"),
    "Belgium": ("Europe", "欧洲", "🇧🇪"),
    "Bermuda": ("North America", "北美洲", "🇧🇲"),
    "Bhutan": ("Asia", "亚洲", "🇧🇹"),
    "Bolivia": ("South America", "南美洲", "🇧🇴"),
    "Bosnia and Herzegovina": ("Europe", "欧洲", "🇧🇦"),
    "Botswana": ("Africa", "非洲", "🇧🇼"),
    "Brazil": ("South America", "南美洲", "🇧🇷"),
    "Bulgaria": ("Europe", "欧洲", "🇧🇬"),
    "Cambodia": ("Asia", "亚洲", "🇰🇭"),
    "Canada": ("North America", "北美洲", "🇨🇦"),
    "Chile": ("South America", "南美洲", "🇨🇱"),
    "Colombia": ("South America", "南美洲", "🇨🇴"),
    "Costa Rica": ("North America", "北美洲", "🇨🇷"),
    "Croatia": ("Europe", "欧洲", "🇭🇷"),
    "Curaçao": ("North America", "北美洲", "🇨🇼"),
    "Cyprus": ("Europe", "欧洲", "🇨🇾"),
    "Czechia": ("Europe", "欧洲", "🇨🇿"),
    "Czech Republic": ("Europe", "欧洲", "🇨🇿"),
    "Denmark": ("Europe", "欧洲", "🇩🇰"),
    "Dominican Republic": ("North America", "北美洲", "🇩🇴"),
    "Ecuador": ("South America", "南美洲", "🇪🇨"),
    "Estonia": ("Europe", "欧洲", "🇪🇪"),
    "Faroe Islands": ("Europe", "欧洲", "🇫🇴"),
    "Finland": ("Europe", "欧洲", "🇫🇮"),
    "France": ("Europe", "欧洲", "🇫🇷"),
    "Germany": ("Europe", "欧洲", "🇩🇪"),
    "Ghana": ("Africa", "非洲", "🇬🇭"),
    "Greece": ("Europe", "欧洲", "🇬🇷"),
    "Greenland": ("North America", "北美洲", "🇬🇱"),
    "Guam": ("Oceania", "大洋洲", "🇬🇺"),
    "Guatemala": ("North America", "北美洲", "🇬🇹"),
    "Hungary": ("Europe", "欧洲", "🇭🇺"),
    "Iceland": ("Europe", "欧洲", "🇮🇸"),
    "India": ("Asia", "亚洲", "🇮🇳"),
    "Indonesia": ("Asia", "亚洲", "🇮🇩"),
    "Ireland": ("Europe", "欧洲", "🇮🇪"),
    "Isle of Man": ("Europe", "欧洲", "🇮🇲"),
    "Israel": ("Asia", "亚洲", "🇮🇱"),
    "Italy": ("Europe", "欧洲", "🇮🇹"),
    "Japan": ("Asia", "亚洲", "🇯🇵"),
    "Jordan": ("Asia", "亚洲", "🇯🇴"),
    "Kazakhstan": ("Asia", "亚洲", "🇰🇿"),
    "Kenya": ("Africa", "非洲", "🇰🇪"),
    "Kyrgyzstan": ("Asia", "亚洲", "🇰🇬"),
    "Laos": ("Asia", "亚洲", "🇱🇦"),
    "Latvia": ("Europe", "欧洲", "🇱🇻"),
    "Lebanon": ("Asia", "亚洲", "🇱🇧"),
    "Lesotho": ("Africa", "非洲", "🇱🇸"),
    "Liechtenstein": ("Europe", "欧洲", "🇱🇮"),
    "Lithuania": ("Europe", "欧洲", "🇱🇹"),
    "Luxembourg": ("Europe", "欧洲", "🇱🇺"),
    "Madagascar": ("Africa", "非洲", "🇲🇬"),
    "Malaysia": ("Asia", "亚洲", "🇲🇾"),
    "Malta": ("Europe", "欧洲", "🇲🇹"),
    "Mexico": ("North America", "北美洲", "🇲🇽"),
    "Monaco": ("Europe", "欧洲", "🇲🇨"),
    "Mongolia": ("Asia", "亚洲", "🇲🇳"),
    "Montenegro": ("Europe", "欧洲", "🇲🇪"),
    "Namibia": ("Africa", "非洲", "🇳🇦"),
    "Netherlands": ("Europe", "欧洲", "🇳🇱"),
    "New Zealand": ("Oceania", "大洋洲", "🇳🇿"),
    "Nigeria": ("Africa", "非洲", "🇳🇬"),
    "North Macedonia": ("Europe", "欧洲", "🇲🇰"),
    "Northern Mariana Islands": ("Oceania", "大洋洲", "🇲🇵"),
    "Norway": ("Europe", "欧洲", "🇳🇴"),
    "Oman": ("Asia", "亚洲", "🇴🇲"),
    "Panama": ("North America", "北美洲", "🇵🇦"),
    "Paraguay": ("South America", "南美洲", "🇵🇾"),
    "Peru": ("South America", "南美洲", "🇵🇪"),
    "Philippines": ("Asia", "亚洲", "🇵🇭"),
    "Poland": ("Europe", "欧洲", "🇵🇱"),
    "Portugal": ("Europe", "欧洲", "🇵🇹"),
    "Puerto Rico": ("North America", "北美洲", "🇵🇷"),
    "Qatar": ("Asia", "亚洲", "🇶🇦"),
    "Réunion": ("Africa", "非洲", "🇷🇪"),
    "Romania": ("Europe", "欧洲", "🇷🇴"),
    "Russia": ("Europe", "欧洲", "🇷🇺"),
    "Rwanda": ("Africa", "非洲", "🇷🇼"),
    "San Marino": ("Europe", "欧洲", "🇸🇲"),
    "Senegal": ("Africa", "非洲", "🇸🇳"),
    "Serbia": ("Europe", "欧洲", "🇷🇸"),
    "Singapore": ("Asia", "亚洲", "🇸🇬"),
    "Slovakia": ("Europe", "欧洲", "🇸🇰"),
    "Slovenia": ("Europe", "欧洲", "🇸🇮"),
    "South Africa": ("Africa", "非洲", "🇿🇦"),
    "South Korea": ("Asia", "亚洲", "🇰🇷"),
    "Spain": ("Europe", "欧洲", "🇪🇸"),
    "Sri Lanka": ("Asia", "亚洲", "🇱🇰"),
    "Sweden": ("Europe", "欧洲", "🇸🇪"),
    "Switzerland": ("Europe", "欧洲", "🇨🇭"),
    "Taiwan": ("Asia", "亚洲", "🇹🇼"),
    "Thailand": ("Asia", "亚洲", "🇹🇭"),
    "Tunisia": ("Africa", "非洲", "🇹🇳"),
    "Turkey": ("Europe", "欧洲", "🇹🇷"),
    "UAE": ("Asia", "亚洲", "🇦🇪"),
    "Uganda": ("Africa", "非洲", "🇺🇬"),
    "Ukraine": ("Europe", "欧洲", "🇺🇦"),
    "United Kingdom": ("Europe", "欧洲", "🇬🇧"),
    "United States": ("North America", "北美洲", "🇺🇸"),
    "Uruguay": ("South America", "南美洲", "🇺🇾"),
    "US Virgin Islands": ("North America", "北美洲", "🇻🇮"),
    "Vietnam": ("Asia", "亚洲", "🇻🇳")
}

# 2. Parse Countries
with open('GeoGuessr/各国特征 2fae4db74b03807190a4c6fb6627e32c.md', 'r', encoding='utf-8') as f:
    text_countries = f.read()

countries = []
for line in text_countries.split("\n"):
    line = line.strip()
    if not line.startswith("- "):
        continue
    raw = line[2:].strip()
    link = ""
    name_zh = ""
    name_en = ""
    desc = ""
    
    m = re.match(r'\[([^\]]+)\]\(([^)]+)\)\s*(?:\(([^)]+)\))?\s*[:：]?\s*(.*)', raw)
    if m:
        n_part, link, zh_part, rest = m.groups()
        name_en = n_part.replace("*", "").strip()
        name_zh = (zh_part or "").replace("*", "").strip()
        desc = rest.strip("*: ")
    else:
        m2 = re.match(r'\*\*([^*]+)\*\*[:：]\s*(.*)', raw)
        if m2:
            n_part, rest = m2.groups()
            desc = rest.strip()
            m_p = re.search(r'[\(（]([^\)）]+)[\)）]', n_part)
            if m_p:
                name_zh = m_p.group(1).strip()
                name_en = re.sub(r'[\(（][^\)）]+[\)）]', '', n_part).strip()
            else:
                name_en = n_part.strip()
        else:
            parts = re.split(r'[:：]', raw, 1)
            if len(parts) == 2:
                n_part = parts[0].strip("* ")
                desc = parts[1].strip()
                m_p = re.search(r'[\(（]([^\)）]+)[\)）]', n_part)
                if m_p:
                    name_zh = m_p.group(1).strip()
                    name_en = re.sub(r'[\(（][^\)）]+[\)）]', '', n_part).strip()
                else:
                    name_en = n_part.strip()

    name_en = name_en.replace("[", "").replace("]", "").replace("*", "").strip()
    if not name_zh and "(" in desc[:20]:
        m_zh = re.match(r'^\(?([^\)）]+)[\)）]\s*[:：*]*\s*(.*)', desc)
        if m_zh:
            name_zh = m_zh.group(1).strip("* ")
            desc = m_zh.group(2).strip()

    if name_en in ["列支敦士登"]:
        name_zh = "列支敦士登"
        name_en = "Liechtenstein"
    elif name_en in ["Czechia", "捷克"]:
        name_en = "Czechia"
        name_zh = "捷克"
    elif name_en.startswith("Paraguay"):
        name_zh = "巴拉圭"
        name_en = "Paraguay"
    elif name_en.startswith("UAE"):
        name_zh = "阿联酋"
        name_en = "United Arab Emirates"
        
    c_info = CONTINENT_MAP.get(name_en, ("Other", "其他", "🌍"))
    continent_en, continent_zh, flag = c_info
    
    tags = []
    if any(k in desc for k in ["车辆左侧行驶", "左行国家", "车辆左行"]):
        tags.append("左行 / LHD")
    if any(k in desc for k in ["车牌", "蓝条", "黄牌", "红车牌", "黑车牌"]):
        tags.append("车牌 / Plate")
    if any(k in desc for k in ["电线杆", "梯子", "绝缘子", "A-frame", "Stobie"]):
        tags.append("电线杆 / Pole")
    if any(k in desc for k in ["路缘标", "护柱", "雪迹杆", "Bollard"]):
        tags.append("路缘标 / Bollard")
    if any(k in desc for k in ["街景车", "皮卡", "天线", "涉水喉", "后视镜", "断裂天空", "护航"]):
        tags.append("街景车 / Car Meta")
    if "红土" in desc:
        tags.append("红土 / Red Soil")
    if any(k in desc for k in ["中线", "边线", "标线", "双白线", "黄色中线"]):
        tags.append("道路标线 / Lines")
    if any(k in desc for k in ["语言", "字母", "西里尔", "高棉", "藏文"]):
        tags.append("语言 / Script")

    # Clean desc Notion links
    desc = re.sub(r'https://www\.notion\.so/[^\s\)]+', '', desc)
    desc = desc.replace("**", "").replace("*", "").strip()

    countries.append({
        "id": re.sub(r'[^a-zA-Z0-9]+', '-', name_en.lower()).strip('-'),
        "nameEn": name_en,
        "nameZh": name_zh or name_en,
        "continentEn": continent_en,
        "continentZh": continent_zh,
        "flag": flag,
        "link": link,
        "desc": desc,
        "tags": tags
    })

print(f"Extracted {len(countries)} countries.")

# 3. Parse Comparisons
with open('GeoGuessr/国家比较 301e4db74b0380a8a678ef2c8667a7cc.md', 'r', encoding='utf-8') as f:
    text_comp = f.read()

comparisons = []
sections_comp = re.split(r'\n###\s+', text_comp)
for sec in sections_comp[1:]:
    lines = sec.strip().split('\n')
    title = lines[0].strip()
    
    similarities = []
    features = []
    current_feat = None
    
    for l in lines[1:]:
        raw = l.strip()
        if not raw:
            continue
        if any(raw.startswith(k) for k in ["- 类似点", "- 相似点", "- 共同点", "• 类似点", "• 相似点", "• 共同点"]):
            similarities.append(raw.split("：", 1)[-1].split(":", 1)[-1].strip().strip("*"))
            continue
            
        if l.startswith("- ") or l.startswith("• "):
            line_body = raw[2:].strip().rstrip("：:")
            if any(c in line_body for c in ["：", ":"]):
                current_feat = {"name": "核心差异", "details": [line_body.replace("**", "")]}
                features.append(current_feat)
            else:
                current_feat = {"name": line_body.replace("**", ""), "details": []}
                features.append(current_feat)
        elif l.startswith("    - ") or l.startswith("    • ") or l.startswith("        - "):
            detail = raw.strip("- •").replace("**", "")
            if current_feat:
                current_feat["details"].append(detail)
            else:
                current_feat = {"name": "通用", "details": [detail]}
                features.append(current_feat)
        else:
            cleaned_l = raw.replace("**", "")
            if current_feat and current_feat["details"]:
                current_feat["details"][-1] += " " + cleaned_l
            elif current_feat:
                current_feat["details"].append(cleaned_l)

    # Derive english title
    title_en = title
    title_en = title_en.replace("VS", "vs.").replace("【", "[").replace("】", "] ")
    # Replace common country names in title
    replacements = {
        "荷兰": "Netherlands", "卢森堡": "Luxembourg",
        "德国": "Germany", "奥地利": "Austria",
        "乌克兰": "Ukraine", "俄罗斯": "Russia",
        "捷克": "Czechia", "斯洛伐克": "Slovakia",
        "西班牙": "Spain", "葡萄牙": "Portugal",
        "法国": "France", "比利时法语区": "Belgium (Wallonia)",
        "冰岛": "Iceland", "法罗群岛": "Faroe Islands",
        "波罗的海三国": "Baltic 3", "爱沙尼亚": "Estonia", "拉脱维亚": "Latvia", "立陶宛": "Lithuania",
        "阿拉伯国家": "Arab Countries", "约旦": "Jordan", "阿曼": "Oman", "卡塔尔": "Qatar", "阿联酋": "UAE", "突尼斯": "Tunisia", "黎巴嫩": "Lebanon",
        "印度": "India", "孟加拉": "Bangladesh",
        "印尼": "Indonesia", "马来西亚": "Malaysia",
        "澳大利亚": "Australia", "新西兰": "New Zealand",
        "肯尼亚": "Kenya", "乌干达": "Uganda",
        "尼日利亚": "Nigeria", "塞内加尔": "Senegal",
        "南非": "South Africa", "博茨瓦纳": "Botswana",
        "美国": "USA", "加拿大": "Canada",
        "中美洲国家": "Central America", "危地马拉": "Guatemala", "哥斯达黎加": "Costa Rica", "巴拿马": "Panama", "波多黎各": "Puerto Rico", "美属维京": "US Virgin Islands",
        "秘鲁": "Peru", "玻利维亚": "Bolivia",
        "关岛": "Guam", "北马里亚纳": "Northern Mariana",
    }
    for k, v in replacements.items():
        title_en = title_en.replace(k, v)
        
    comparisons.append({
        "id": f"comp-{len(comparisons)+1}",
        "titleZh": title,
        "titleEn": title_en,
        "similarities": similarities,
        "features": features
    })

print(f"Extracted {len(comparisons)} comparison cards.")

# 4. Parse Regional Guides
with open('GeoGuessr/大国地区 2ffe4db74b03809699f1e1093f64fce5.md', 'r', encoding='utf-8') as f:
    text_regions = f.read()

countries_order = [
    ("俄罗斯", "Russia", "🇷🇺", "Europe / Asia"),
    ("挪威", "Norway", "🇳🇴", "Europe"),
    ("印尼", "Indonesia", "🇮🇩", "Asia"),
    ("马来西亚", "Malaysia", "🇲🇾", "Asia"),
    ("菲律宾", "Philippines", "🇵🇭", "Asia"),
    ("巴西", "Brazil", "🇧🇷", "South America"),
    ("澳大利亚", "Australia", "🇦🇺", "Oceania"),
    ("加拿大", "Canada", "🇨🇦", "North America"),
    ("新西兰", "New Zealand", "🇳🇿", "Oceania"),
    ("越南", "Vietnam", "🇻🇳", "Asia"),
    ("突尼斯", "Tunisia", "🇹🇳", "Africa"),
    ("印度", "India", "🇮🇳", "Asia"),
    ("土耳其", "Turkey", "🇹🇷", "Europe / Asia"),
    ("墨西哥", "Mexico", "🇲🇽", "North America"),
    ("日本", "Japan", "🇯🇵", "Asia"),
    ("哈萨克斯坦", "Kazakhstan", "🇰🇿", "Asia"),
    ("吉尔吉斯斯坦", "Kyrgyzstan", "🇰🇬", "Asia"),
    ("蒙古", "Mongolia", "🇲🇳", "Asia"),
    ("美国", "United States", "🇺🇸", "North America"),
    ("泰国", "Thailand", "🇹🇭", "Asia"),
    ("南非", "South Africa", "🇿🇦", "Africa")
]

country_blocks = {}
current_country = None
current_lines = []

for line in text_regions.split('\n'):
    l_str = line.strip()
    found_c = None
    for c_zh, c_en, flag, reg in countries_order:
        if l_str == f"### {c_zh}" or l_str == f"## {c_zh}":
            found_c = c_zh
            break
    if found_c:
        if current_country:
            country_blocks[current_country] = "\n".join(current_lines)
        current_country = found_c
        current_lines = []
    else:
        if current_country:
            current_lines.append(line)

if current_country:
    country_blocks[current_country] = "\n".join(current_lines)

regional_guides = []
for c_zh, c_en, flag, continent in countries_order:
    raw_content = country_blocks.get(c_zh, "")
    # parse sections inside
    sec_blocks = []
    curr_sub = "基本概览"
    curr_sub_lines = []
    for line in raw_content.split('\n'):
        if line.startswith("#### ") or line.startswith("### "):
            if curr_sub_lines:
                sec_blocks.append({"heading": curr_sub, "content": "\n".join(curr_sub_lines).strip()})
            curr_sub = line.strip("#* ")
            curr_sub_lines = []
        else:
            curr_sub_lines.append(line)
    if curr_sub_lines:
        sec_blocks.append({"heading": curr_sub, "content": "\n".join(curr_sub_lines).strip()})
        
    regional_guides.append({
        "id": c_en.lower().replace(" ", "-"),
        "nameZh": c_zh,
        "nameEn": c_en,
        "flag": flag,
        "continent": continent,
        "sections": sec_blocks,
        "rawContent": raw_content.strip()
    })

print(f"Extracted {len(regional_guides)} regional guides.")

# 5. Parse Remote Islands
with open('GeoGuessr/离岛 36de4db74b03809cb579d23bf7e47732.md', 'r', encoding='utf-8') as f:
    lines_isl = [l.strip() for l in f.readlines() if l.strip()]

islands = []
for line in lines_isl:
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

print(f"Extracted {len(islands)} remote islands.")

# 6. Parse Flags & Rhymes
with open('GeoGuessr/Flag 357e4db74b0380c881b9e7cf93ea60da.md', 'r', encoding='utf-8') as f:
    text_flag = f.read()

flag_sections = re.split(r'\n#\s+', text_flag)
flags_by_region = []
for sec in flag_sections[1:]:
    lines = sec.strip().split('\n')
    region_title = lines[0].strip()
    items = []
    current_sub = "全部"
    for l in lines[1:]:
        l_str = l.strip()
        if not l_str:
            continue
        if l_str.startswith("## "):
            current_sub = l_str[3:].strip("* ")
            continue
        if l_str.startswith("- "):
            items.append({
                "subgroup": current_sub,
                "text": l_str[2:].strip().replace("**", "")
            })
    flags_by_region.append({
        "region": region_title,
        "items": items
    })

print(f"Extracted {len(flags_by_region)} flag regions.")

# 7. Parse Topics (Plates, Taxis, Cars, Poles, Bollards, Road Lines, Signs, Architecture, Languages, Phones, etc.)
topic_specs = [
    {
        "id": "plates",
        "titleZh": "车牌识别专题",
        "titleEn": "License Plates Meta",
        "icon": "car",
        "file": "车牌 2fae4db74b0380a38126f98dee202c1b.md",
        "badge": "核心秒杀",
        "badgeColor": "emerald"
    },
    {
        "id": "taxis",
        "titleZh": "各国出租车特征",
        "titleEn": "Taxis by Region",
        "icon": "taxi",
        "file": "出租车 30be4db74b0380fab854ebb0de4c5a4f.md",
        "badge": "城市秒定",
        "badgeColor": "amber"
    },
    {
        "id": "cars",
        "titleZh": "街景车镜头与车身 Meta",
        "titleEn": "Google Car & Camera Meta",
        "icon": "camera",
        "file": "街景车 2fae4db74b03801bb286e87d8cb82031.md",
        "badge": "硬件特征",
        "badgeColor": "sky"
    },
    {
        "id": "poles",
        "titleZh": "电线杆质地与结构",
        "titleEn": "Utility Poles Guide",
        "icon": "zap",
        "file": "电线杆 2fae4db74b0380a59228c1558db2dac7.md",
        "badge": "基础设施",
        "badgeColor": "indigo"
    },
    {
        "id": "bollards",
        "titleZh": "路缘标与雪迹杆",
        "titleEn": "Bollards & Snow Poles",
        "icon": "shield",
        "file": "路缘标和雪迹杆 2fae4db74b0380f7a867c0b971f3d406.md",
        "badge": "欧洲秒杀",
        "badgeColor": "rose"
    },
    {
        "id": "markings",
        "titleZh": "道路标线与行车方向",
        "titleEn": "Road Markings & Driving Side",
        "icon": "shuffle",
        "file": "道路标线 2fae4db74b03802b9fdedf52a9fab24e.md",
        "badge": "基础核心",
        "badgeColor": "teal"
    },
    {
        "id": "signs",
        "titleZh": "人行道与路牌标志",
        "titleEn": "Signs & Road Infrastructure",
        "icon": "alert-triangle",
        "file": "人行道告示牌 302e4db74b0380fc890cd9121ca6ea82.md",
        "badge": "视觉细则",
        "badgeColor": "yellow"
    },
    {
        "id": "chevrons",
        "titleZh": "V 形导向牌 (Chevron)",
        "titleEn": "Chevrons & Curve Signs",
        "icon": "chevron-right",
        "file": "V形导向牌 318e4db74b03808ba5bde28b3107dbaf.md",
        "badge": "弯道神器",
        "badgeColor": "red"
    },
    {
        "id": "languages",
        "titleZh": "语言与特殊字符体系",
        "titleEn": "Languages & Alphabets",
        "icon": "type",
        "file": "语言 2fae4db74b0380c796dbef9cd0559cc9.md",
        "badge": "人文识别",
        "badgeColor": "purple"
    },
    {
        "id": "architecture",
        "titleZh": "建筑街景、水箱与门牌",
        "titleEn": "Architecture, Tanks & House Numbers",
        "icon": "home",
        "file": "建筑街景 2fae4db74b0380629895fe0fab5f6bf0.md",
        "badge": "环境特征",
        "badgeColor": "blue"
    },
    {
        "id": "vegetation",
        "titleZh": "植被、地貌与红土分布",
        "titleEn": "Flora, Soil & Landscapes",
        "icon": "trees",
        "file": "植被地貌 2fae4db74b0380f4865ac21c5059bd0d.md",
        "badge": "自然地貌",
        "badgeColor": "emerald"
    },
    {
        "id": "road-numbers",
        "titleZh": "公路编号系统 (E路/BR/M路)",
        "titleEn": "Road Numbering Systems",
        "icon": "navigation",
        "file": "道路编号 323e4db74b03802999d4c28092e27123.md",
        "badge": "路网规则",
        "badgeColor": "cyan"
    },
    {
        "id": "phones",
        "titleZh": "电话号码与各州区号",
        "titleEn": "Telephone Numbers & Area Codes",
        "icon": "phone",
        "file": "电话号码及其区号 2fde4db74b0380f89b08ce72d5816013.md",
        "badge": "精准定位",
        "badgeColor": "green"
    },
    {
        "id": "misc",
        "titleZh": "街景版权年份与冷门技巧",
        "titleEn": "Copyright Years & Quirky Metas",
        "icon": "help-circle",
        "file": "版权 373e4db74b03800eb149e80fe5ff8152.md",
        "badge": "高阶秘籍",
        "badgeColor": "orange"
    }
]

topics = []
for spec in topic_specs:
    p = os.path.join("GeoGuessr", spec["file"])
    content = ""
    if os.path.exists(p):
        with open(p, "r", encoding="utf-8") as f:
            content = f.read()
    
    # Extra files to append for comprehensive context
    if spec["id"] == "signs":
        for extra in ["减速牌和警告牌 318e4db74b03800480cad2b62fbb0ec6.md", "路牌 2fae4db74b0380379cfaeb6916d87513.md", "里程牌 308e4db74b03801cb6d9c6655d0fafff.md", "护栏 30fe4db74b0380c097f6eae85a16a9ab.md"]:
            ep = os.path.join("GeoGuessr", extra)
            if os.path.exists(ep):
                with open(ep, "r", encoding="utf-8") as ef:
                    content += "\n\n" + ef.read()
    elif spec["id"] == "architecture":
        for extra in ["水箱 340e4db74b0380069acfd18cef30dc49.md", "门牌 2fde4db74b038097913acf6b7833674d.md", "路沿 327e4db74b0380178c63c0ec8825bb25.md", "路灯 2fde4db74b038052bfeed5e1409e3385.md"]:
            ep = os.path.join("GeoGuessr", extra)
            if os.path.exists(ep):
                with open(ep, "r", encoding="utf-8") as ef:
                    content += "\n\n" + ef.read()
    elif spec["id"] == "markings":
        for extra in ["道路左右行 2fee4db74b0380028188f18ede3b3f87.md", "道路特征 3bee4db74b0380298489df7ec94b2713.md"]:
            ep = os.path.join("GeoGuessr", extra)
            if os.path.exists(ep):
                with open(ep, "r", encoding="utf-8") as ef:
                    content += "\n\n" + ef.read()
    elif spec["id"] == "misc":
        ep = os.path.join("GeoGuessr", "其它 2fae4db74b0380dab26ef15f7849e842.md")
        if os.path.exists(ep):
            with open(ep, "r", encoding="utf-8") as ef:
                content += "\n\n" + ef.read()

    # Clean Notion urls and format
    content = re.sub(r'https://www\.notion\.so/[^\s\)]+', '', content)
    
    # Parse headings into sections
    sections = []
    lines = content.split('\n')
    curr_heading = spec["titleZh"]
    curr_text = []
    for l in lines:
        if l.startswith('#'):
            if curr_text:
                sections.append({"title": curr_heading, "text": "\n".join(curr_text).strip()})
            curr_heading = l.strip('#* ')
            curr_text = []
        else:
            curr_text.append(l)
    if curr_text:
        sections.append({"title": curr_heading, "text": "\n".join(curr_text).strip()})

    topics.append({
        "id": spec["id"],
        "titleZh": spec["titleZh"],
        "titleEn": spec["titleEn"],
        "icon": spec["icon"],
        "badge": spec["badge"],
        "badgeColor": spec["badgeColor"],
        "sections": sections,
        "rawContent": content.strip()
    })

print(f"Extracted {len(topics)} topic metas.")

# 8. Curate Rapid Review Flashcards (60+ high yield flashcards)
flashcards = [
    {
        "id": "fc-1",
        "questionZh": "断裂天空 (Sky Rift)、意大利型路缘标、车牌双侧蓝条或左侧红条、道路名前缀为 Rruga 是哪个国家？",
        "questionEn": "Sky Rift, Italian-style bollards, license plate with double blue stripes or left red strip, street prefix 'Rruga'?",
        "answerZh": "阿尔巴尼亚 (Albania) 🇦🇱",
        "answerEn": "Albania 🇦🇱",
        "category": "Country Meta",
        "keyPointZh": "地中海断裂天空双雄之一（另一个是黑山）；*Rruga* 为阿尔巴尼亚语街道；屋顶多有白色大水箱。",
        "keyPointEn": "Classic Sky Rift country in Balkans. 'Rruga' means street. Large rooftop water tanks."
    },
    {
        "id": "fc-2",
        "questionZh": "南美洲唯一中线与边线全为白色的国家是？且拥有长空格混凝土电线杆与独特红色底部涂漆？",
        "questionEn": "The ONLY South American country with both white center and edge lines, long-gap ladder poles with red-white painted base?",
        "answerZh": "智利 (Chile) 🇨🇱",
        "answerEn": "Chile 🇨🇱",
        "category": "Country Meta",
        "keyPointZh": "美洲道路标线异类（其他均为黄中线）；电线杆底部刷白红；南北极度狭长，从阿塔卡马沙漠到南端冷温带森林。",
        "keyPointEn": "Sole South American country using all-white road markings. Poles often painted red/white at base."
    },
    {
        "id": "fc-3",
        "questionZh": "普通民用车统一悬挂全黄色短车牌，且路牌背面有独特的十字形固定架 (Cross) 的南美国家是？",
        "questionEn": "South American nation where all civilian cars have all-yellow short license plates, with a cross-shaped backing bracket on signs?",
        "answerZh": "哥伦比亚 (Colombia) 🇨🇴",
        "answerEn": "Colombia 🇨🇴",
        "category": "Country Meta",
        "keyPointZh": "哥伦比亚十字 (Colombian Cross) 标志性特征；全黄车牌南美独占；里程牌带 PR 标识。",
        "keyPointEn": "Colombian Cross behind signs, universal yellow license plates for civilian vehicles."
    },
    {
        "id": "fc-4",
        "questionZh": "车辆左侧行驶，路缘标为白底红色方块（红框不靠边），全线使用白标线，常见桉树与西澳红土的是？",
        "questionEn": "Left-hand drive, white bollard with red central square, all-white road markings, ubiquitous eucalyptus & red soil?",
        "answerZh": "澳大利亚 (Australia) 🇦🇺",
        "answerEn": "Australia 🇦🇺",
        "category": "Country Meta",
        "keyPointZh": "大洋洲霸主；注意区别新西兰（新西兰红色反光带包边整圈，且中线可为双黄线）。",
        "keyPointEn": "Australia: Left drive, white markings, red square bollard (not full wrap), eucalyptus trees."
    },
    {
        "id": "fc-5",
        "questionZh": "街景中著名的低视角相机 (Lowcam) “三剑客”是哪三个国家？",
        "questionEn": "Which THREE countries form the classic 'Lowcam' (low camera height) trio in GeoGuessr?",
        "answerZh": "日本 🇯🇵、瑞士 🇨🇭、斯里兰卡 🇱🇰",
        "answerEn": "Japan 🇯🇵, Switzerland 🇨🇭, Sri Lanka 🇱🇰",
        "category": "Car Meta",
        "keyPointZh": "相机高度极低，车底模糊范围巨大，仿佛蹲在地上看路。日本左行有黄线，瑞士右行阿尔卑斯风光，斯里兰卡左行热带椰林。",
        "keyPointEn": "Japan, Switzerland, and Sri Lanka use low-mounted camera rigs giving a low vantage point."
    },
    {
        "id": "fc-6",
        "questionZh": "电线杆为混凝土梯子型，下部梯子隔板数约为 3，上部有小孔，红土遍布，卫星天线指向正北方的是？",
        "questionEn": "Concrete ladder pole with ~3 rungs at the bottom and small holes on top, pervasive red soil, satellite dishes pointing North?",
        "answerZh": "巴西 (Brazil) 🇧🇷",
        "answerEn": "Brazil 🇧🇷",
        "category": "Country Meta",
        "keyPointZh": "巴西梯子杆经典辨析；电话区号两位数 DDD (11-99)；黑色路牌背面；深蓝色水箱。",
        "keyPointEn": "Brazil: Ladder poles with ~3 lower steps, DDD two-digit phone codes, black-backed signs."
    },
    {
        "id": "fc-7",
        "questionZh": "在西里尔字母国家中，唯一使用字母 і, ï, є, ґ 的国家是？路牌常有 Byn. 前缀？",
        "questionEn": "Which Cyrillic country exclusively uses the letters 'і', 'ï', 'є', 'ґ', and has 'Byn.' on street signs?",
        "answerZh": "乌克兰 (Ukraine) 🇺🇦",
        "answerEn": "Ukraine 🇺🇦",
        "category": "Language Meta",
        "keyPointZh": "俄罗斯使用 И，乌克兰使用 i / ï；街景车多为第三代红色小车；白杨树极多；村庄农舍涂亮白色或亮黄色。",
        "keyPointEn": "Ukraine uniquely uses Cyrillic letters i and ï (Russia uses И). Red Google car is common."
    },
    {
        "id": "fc-8",
        "questionZh": "欧洲唯一将西里尔字母作为官方文字的欧盟国家是？字母 ъ 经常作为普通元音使用？",
        "questionEn": "The ONLY EU country that uses the Cyrillic alphabet, frequently using the letter 'ъ' as a standard vowel?",
        "answerZh": "保加利亚 (Bulgaria) 🇧🇬",
        "answerEn": "Bulgaria 🇧🇬",
        "category": "Language Meta",
        "keyPointZh": "保加利亚特有 ъ (如 България, сън)；钩状无横木绝缘电线杆；屋顶瓦片破旧不平；人行道告示牌小人戴帽子。",
        "keyPointEn": "Bulgaria: sole EU Cyrillic member. 'ъ' is a regular vowel. Distinct hook-insulator poles."
    },
    {
        "id": "fc-9",
        "questionZh": "欧洲车牌前后全为黄色，全大写路牌，路牌背面为灰黑色且折边圆滑，地形多丘陵的是？",
        "questionEn": "Yellow plates front and rear, all-uppercase street names, smooth dark-grey sign backs, hilly terrain?",
        "answerZh": "卢森堡 (Luxembourg) 🇱🇺",
        "answerEn": "Luxembourg 🇱🇺",
        "category": "Comparison",
        "keyPointZh": "对决荷兰的关键：荷兰绝度平坦且路牌背面折边生硬；卢森堡丘陵密布且路缘标为三颗螺丝钉的德国型。",
        "keyPointEn": "Luxembourg: hilly terrain, all-caps road signs, German-type bollards with 3 screws (vs flat Netherlands)."
    },
    {
        "id": "fc-10",
        "questionZh": "街景车右前方行李架横杆上有明显的黑色绝缘胶带缠绕的是哪个非洲国家？",
        "questionEn": "Which African country has prominent black electrical tape wrapped around the front-right roof bar of the Google car?",
        "answerZh": "加纳 (Ghana) 🇬🇭",
        "answerEn": "Ghana 🇬🇭",
        "category": "Car Meta",
        "keyPointZh": "加纳黑胶带是 GeoGuessr 最著名的秒杀 Meta 之一！车头前部有时还可见彩色 Google 地图标志。",
        "keyPointEn": "Ghana Black Tape: Distinctive black tape on the front-right roof bar. Unmistakable meta."
    },
    {
        "id": "fc-11",
        "questionZh": "车牌前白后黄、左侧行驶、路面中央有反光道钉 (Cat's Eyes)、电话区号以 01/02 或 07 开头的是？",
        "questionEn": "White front plate, yellow rear plate, driving on the left, cat's eyes on center lines, phone starts with 01/02/07?",
        "answerZh": "英国 (United Kingdom) 🇬🇧",
        "answerEn": "United Kingdom 🇬🇧",
        "category": "Country Meta",
        "keyPointZh": "英国前白后黄车牌；无欧洲人行道蓝底标志；Give Way 让路标志；红砖房或灰石墙。",
        "keyPointEn": "UK: Front white & rear yellow plates, driving on the left, Cat's eye reflectors on road center."
    },
    {
        "id": "fc-12",
        "questionZh": "欧洲方形中空混凝土电线杆中，‘H型（从头到脚全带孔）’与‘P型（底部实心无孔）’分别代表哪两个国家？",
        "questionEn": "In European holey concrete poles, which countries correspond to 'H-Type' (holes all the way) and 'P-Type' (solid base)?",
        "answerZh": "H型 = 匈牙利 (Hungary) 🇭🇺 ； P型 = 波兰 (Poland) 🇵🇱",
        "answerEn": "H-Type = Hungary 🇭🇺 ; P-Type = Poland 🇵🇱",
        "category": "Infrastructure",
        "keyPointZh": "记忆口诀：H = Hungary (全孔)，P = Poland (底部实心)；罗马尼亚 R型也是带孔但底部通常刷白漆且常有黄贴纸。",
        "keyPointEn": "H-holes all the way down = Hungary. P-holes with solid unpierced concrete bottom = Poland."
    },
    {
        "id": "fc-13",
        "questionZh": "街景车无论开到哪里，前后总有一辆亮着警灯的警车保驾护航的是哪个非洲国家？",
        "questionEn": "Which African country features an armed police escort vehicle with flashing lights visible following or leading the Google car?",
        "answerZh": "尼日利亚 (Nigeria) 🇳🇬",
        "answerEn": "Nigeria 🇳🇬",
        "category": "Car Meta",
        "keyPointZh": "尼日利亚警车护送；突尼斯则是军车护航（车牌左侧带小红圆点）。",
        "keyPointEn": "Nigeria: Police escort vehicle visible with emergency light bar. (Tunisia uses military escort with red dot on plate)."
    },
    {
        "id": "fc-14",
        "questionZh": "欧洲唯一拥有蓝底黄色 V 形导向牌 (Chevron) 的国家是？",
        "questionEn": "The ONLY European country that uses blue background with yellow arrows on curve Chevrons?",
        "answerZh": "瑞典 (Sweden) 🇸🇪",
        "answerEn": "Sweden 🇸🇪",
        "category": "Signs Meta",
        "keyPointZh": "国旗配色化身导向牌！瑞典独占蓝底黄箭头；路牌用黑线简单勾勒箭头；道路边线为极紧凑的短白虚线。",
        "keyPointEn": "Sweden uniquely uses blue background with yellow arrows on Chevrons. Road dashed lines are very short."
    },
    {
        "id": "fc-15",
        "questionZh": "欧洲唯一在黄色菱形标志内画行人的国家（被戏称为‘被困在黄色菱形里的行人’）是？",
        "questionEn": "The ONLY European country using yellow diamond pedestrian crossing signs ('person trapped in a yellow diamond')?",
        "answerZh": "爱尔兰 (Ireland) 🇮🇪",
        "answerEn": "Ireland 🇮🇪",
        "category": "Signs Meta",
        "keyPointZh": "欧洲绝大多数国家人行道标志为蓝底方形白三角，爱尔兰独树一帜采用黄色菱形；且道路边缘线为黄色虚线。",
        "keyPointEn": "Ireland: Yellow diamond pedestrian warning signs, yellow dashed road edge lines, left driving."
    }
]

print(f"Prepared {len(flashcards)} rapid-review flashcards.")

# Build Final Data Payload
db = {
    "siteConfig": {
        "titleZh": "GeoGuessr 知识宝典与速查工具",
        "titleEn": "GeoGuessr Master Guide & Quick Reference",
        "subtitleZh": "提炼自实战笔记的全球 Meta 识别指南与复习系统",
        "subtitleEn": "Curated Competitive Meta Guides, Regional Deep Dives & Review Flashcards",
        "notionUrl": "https://app.notion.com/p/yangchenuci/GeoGuessr-2fae4db74b0380f9ad53d3487bcc97f7?source=copy_link",
        "notebookLMUrl": "https://notebooklm.google.com/notebook/09298627-5065-4815-a287-d73d844fbaae"
    },
    "gameWebsites": [
        {
            "id": "geoguessr-official",
            "nameZh": "GeoGuessr 官方网站",
            "nameEn": "GeoGuessr Official",
            "url": "https://www.geoguessr.com/",
            "category": "official",
            "categoryNameZh": "官方平台",
            "categoryNameEn": "Official Platform",
            "badgeZh": "官方",
            "badgeEn": "Official",
            "badgeColor": "emerald",
            "descZh": "全球最流行的街景探索与地理发现游戏，支持排位竞技、决斗模式、单人探索与好友派对联机。",
            "descEn": "The premier geography discovery game worldwide. Supports competitive ranked duels, singleplayer exploration, and multiplayer parties.",
            "featuresZh": ["排位天梯", "世界决斗", "大师联赛", "好友联机"],
            "featuresEn": ["Ranked Duels", "World Cup", "Master League", "Parties"]
        },
        {
            "id": "geochallenges",
            "nameZh": "GeoChallenges 免费挑战",
            "nameEn": "GeoChallenges Free",
            "url": "https://geochallenges.me/?utm_source=chatgpt.com",
            "category": "free",
            "categoryNameZh": "免费挑战",
            "categoryNameEn": "Free Challenges",
            "badgeZh": "免登录",
            "badgeEn": "Free / No Login",
            "badgeColor": "sky",
            "descZh": "免账号畅玩的 GeoGuessr 挑战生成平台，支持随机地图和与朋友分享游玩链接。",
            "descEn": "Free challenge platform for GeoGuessr maps without requiring a premium account.",
            "featuresZh": ["免费游玩", "每日挑战", "快速练习"],
            "featuresEn": ["Free Play", "Daily Maps", "Quick Drill"]
        },
        {
            "id": "geopingkak",
            "nameZh": "GeoPingKak 每日挑战",
            "nameEn": "GeoPingKak Daily",
            "url": "https://geopingkak.web.app/daily-challenge",
            "category": "daily",
            "categoryNameZh": "每日挑战",
            "categoryNameEn": "Daily Challenge",
            "badgeZh": "每日手感",
            "badgeEn": "Daily Warmup",
            "badgeColor": "amber",
            "descZh": "极简高效的 GeoGuessr 每日挑战练题工具，专为玩家日常手感保持与快速复盘设计。",
            "descEn": "Minimalist daily challenge trainer designed for daily practice and meta warm-up.",
            "featuresZh": ["每日题目", "战绩统计", "轻量极速"],
            "featuresEn": ["Daily Seeds", "Score Stats", "Instant Load"]
        },
        {
            "id": "geoleaderboard",
            "nameZh": "Matt-op 用户战绩搜索",
            "nameEn": "Matt-op Leaderboard",
            "url": "https://matt-op.github.io/geoleaderboard/",
            "category": "tools",
            "categoryNameZh": "查询工具",
            "categoryNameEn": "Player Stats",
            "badgeZh": "战绩统计",
            "badgeEn": "Stats Tool",
            "badgeColor": "indigo",
            "descZh": "第三方 GeoGuessr 玩家天梯数据查询工具，可搜索全球玩家排名、Elo 积分变化及历史对局数据。",
            "descEn": "Third-party leaderboard search tool to track GeoGuessr player ranks, Elo rating history, and competitive stats.",
            "featuresZh": ["Elo 查询", "全球排行", "玩家分析"],
            "featuresEn": ["Elo History", "Global Ranks", "Head-to-Head"]
        },
        {
            "id": "worldguessr",
            "nameZh": "WorldGuessr 免费街景猜题",
            "nameEn": "WorldGuessr (Free)",
            "url": "https://www.worldguessr.com/",
            "category": "alternative",
            "categoryNameZh": "免费替代平台",
            "categoryNameEn": "Free Alternative",
            "badgeZh": "免费开源",
            "badgeEn": "Open Source",
            "badgeColor": "teal",
            "descZh": "高度还原 GeoGuessr 玩法的免费开源网页游戏，无局数限制，支持单人与多人决斗。",
            "descEn": "Free, open-source geography guessing game with unlimited rounds, singleplayer and multiplayer duel modes.",
            "featuresZh": ["完全免费", "多人决斗", "无限轮次"],
            "featuresEn": ["100% Free", "Multiplayer", "Unlimited"]
        },
        {
            "id": "openguessr",
            "nameZh": "OpenGuessr",
            "nameEn": "OpenGuessr",
            "url": "https://openguessr.com/",
            "category": "alternative",
            "categoryNameZh": "免费替代平台",
            "categoryNameEn": "Free Alternative",
            "badgeZh": "社区推荐",
            "badgeEn": "Community Pick",
            "badgeColor": "blue",
            "descZh": "基于社区与开放街景的高品质地理发现游戏，界面清爽，支持多种模式和自定义地区。",
            "descEn": "Clean open street discovery game with customizable regions and diverse game modes.",
            "featuresZh": ["自定义地图", "流畅界面", "无需付费"],
            "featuresEn": ["Custom Maps", "Clean UI", "No Paywall"]
        },
        {
            "id": "guesswhereyouare",
            "nameZh": "Guess Where You Are",
            "nameEn": "Guess Where You Are",
            "url": "https://guesswhereyouare.com/",
            "category": "alternative",
            "categoryNameZh": "免费替代平台",
            "categoryNameEn": "Free Alternative",
            "badgeZh": "轻量免翻",
            "badgeEn": "Lightweight",
            "badgeColor": "purple",
            "descZh": "轻量级免费街景猜测网站，即开即玩，非常适合碎片化时间进行快速识别练习。",
            "descEn": "Fast, lightweight street guesser ideal for quick practice sessions during short breaks.",
            "featuresZh": ["即开即玩", "轻量免插件", "碎片练习"],
            "featuresEn": ["Instant Play", "Lightweight", "Quick Drills"]
        },
        {
            "id": "tuxun",
            "nameZh": "图寻 (Tuxun.fun)",
            "nameEn": "Tuxun (Explore the World)",
            "url": "https://tuxun.fun/",
            "category": "domestic",
            "categoryNameZh": "国内特色平台",
            "categoryNameEn": "Chinese Platform",
            "badgeZh": "国内高人气",
            "badgeEn": "China Favorite",
            "badgeColor": "rose",
            "descZh": "国内极其活跃的街景地理发现平台，拥有极其庞大的活跃玩家社区、积分对决、中国特化题库与世界题库。",
            "descEn": "Top Chinese street exploration & guessing platform featuring massive active community, rated duels, and specialized regional maps.",
            "featuresZh": ["积分天梯", "中国特化图", "活跃社区", "丰富比赛"],
            "featuresEn": ["Elo Ladder", "China Map Pool", "Tournaments", "Active Forum"]
        }
    ],
    "webResources": {
        "websites": [
            {
                "nameZh": "Plonk It 攻略宝典",
                "nameEn": "Plonk It Guide",
                "url": "https://www.plonkit.net/guide",
                "badgeZh": "顶级指南",
                "badgeEn": "Bible Guide",
                "descZh": "GeoGuessr 竞技圈公认的最全面、最系统的国家级深度 Meta 圣经，包含全国家电线杆、路缘标、车牌、建筑等全套识别细则。",
                "descEn": "The definitive competitive guide covering deep regional metas, bollards, poles, plates, and landscape details for every covered country."
            },
            {
                "nameZh": "Geohints 识别速查库",
                "nameEn": "Geohints",
                "url": "https://geohints.com/",
                "badgeZh": "速查图库",
                "badgeEn": "Visual Database",
                "descZh": "直观的分类图库速查库，支持按电线杆、路缘标、车牌、国旗、街景车、人行道标志等视觉元素按国家并排对比。",
                "descEn": "Visual meta directory allowing side-by-side comparison of poles, bollards, plates, flags, and signs across countries."
            },
            {
                "nameZh": "Geotips 快速技巧库",
                "nameEn": "Geotips",
                "url": "https://geotips.net/",
                "badgeZh": "经典工具",
                "badgeEn": "Classic Tool",
                "descZh": "经典的 GeoGuessr 技巧与线索索引平台，按各大洲和国家快速索引关键特征。",
                "descEn": "Classic reference website categorizing key recognition clues by continent and country."
            },
            {
                "nameZh": "Geometas Meta 目录",
                "nameEn": "Geometas",
                "url": "https://geometas.com/",
                "badgeZh": "Meta 归纳",
                "badgeEn": "Meta Directory",
                "descZh": "聚焦街景车镜头、天线、遮挡胶带、语言特征、路牌格式的专门 Meta 数据库。",
                "descEn": "Specialized meta directory focusing on Google car features, rifts, roof racks, camera gens, and language clues."
            },
            {
                "nameZh": "Geomaster",
                "nameEn": "Geomaster",
                "url": "https://geomastr.com/",
                "badgeZh": "对战辅助",
                "badgeEn": "Duel Helper",
                "descZh": "实用的 Meta 练习工具与题库训练平台，助你进阶 Champion / Master 段位。",
                "descEn": "Practical trainer and practice quiz tool for ranking up to Master and Champion."
            },
            {
                "nameZh": "Learnable Meta",
                "nameEn": "Learnable Meta",
                "url": "https://learnablemeta.com/",
                "badgeZh": "系统训练",
                "badgeEn": "Flashcard Study",
                "descZh": "循序渐进的 Meta 学习工具，专注于高回报、高胜率的实用线索。",
                "descEn": "Curated flashcard style learning tool focusing on the highest ROI recognizable clues."
            },
            {
                "nameZh": "GeoPingKak",
                "nameEn": "GeoPingKak",
                "url": "https://geopingkak.web.app/",
                "badgeZh": "练习利器",
                "badgeEn": "Trainer",
                "descZh": "轻量级在线练习与每日复盘辅助网站，支持快速定位与线索笔记。",
                "descEn": "Lightweight drill trainer and daily challenge companion."
            },
            {
                "nameZh": "Reddit r/geoguessr 与官方 Wiki",
                "nameEn": "Reddit r/geoguessr & Wiki",
                "url": "https://www.reddit.com/r/geoguessr/wiki/index/",
                "badgeZh": "玩家社区",
                "badgeEn": "Community Hub",
                "descZh": "全球最大的 GeoGuessr 玩家讨论区与维基百科，汇集最新版本覆盖更新、热心玩家制作的精美信息图。",
                "descEn": "The world's largest GeoGuessr community and wiki, featuring meta announcements, coverage updates, and infographics."
            },
            {
                "nameZh": "图寻官方文档 (Tuxun Docs)",
                "nameEn": "Tuxun Documentation",
                "url": "https://www.yuque.com/chaofun/tuxun",
                "badgeZh": "中文百科",
                "badgeEn": "Chinese Wiki",
                "descZh": "国内图寻社区编写的高质量中文街景地理知识库，包含水箱、电线杆、植物等详尽图解。",
                "descEn": "Comprehensive Chinese knowledge base by the Tuxun community covering water tanks, poles, and regional foliage."
            }
        ],
        "articles": [
            {
                "titleZh": "Fabien Celier 的 GeoGuessr 技巧笔记",
                "titleEn": "Fabien Celier's GeoGuessr Tips",
                "url": "https://fabiencelier.github.io/geoguessr-tips/",
                "author": "Fabien Celier",
                "descZh": "极其优质的开源 GeoGuessr 笔记，涵盖车牌蓝条、欧洲路缘标、植被与电线杆速记逻辑。",
                "descEn": "High-quality open-source tips notebook summarizing license plates, bollards, poles, and landscape recognition."
            },
            {
                "titleZh": "Kyal Shepard 顶级技巧与推测技术",
                "titleEn": "GeoGuessr: Top Tips, Tricks, and Techniques",
                "url": "https://somerandomstuff1.wordpress.com/2019/02/08/geoguessr-the-top-tips-tricks-and-techniques/",
                "author": "Kyal Shepard",
                "descZh": "早期经典万字长文指南，对道路标线颜色（全白、黄中白边、白中黄边）做了开创性的系统归纳。",
                "descEn": "Seminal in-depth guide that pioneered systematic classification of road markings and European road infrastructures."
            },
            {
                "titleZh": "全球大国地区细分速查表 (Google Sheet)",
                "titleEn": "Regional Guessing Meta Spreadsheet",
                "url": "https://docs.google.com/spreadsheets/d/1UNvkoY-LaktF75nU_cP7-wVRAEvH3fSqVZet20HqxXA/edit?gid=1829787855#gid=1829787855",
                "author": "Top Community Players",
                "descZh": "顶尖排位玩家整理的全球大国地区细分速查表格，包含巴西电话区号、印尼各岛屿代码、俄罗斯公路网等海量数据。",
                "descEn": "Massive community-curated spreadsheet for sub-regional guessing across Russia, Brazil, Indonesia, Australia, and the US."
            }
        ],
        "infographics": [
            {
                "id": "writing-systems",
                "titleZh": "全球文字与字母书写系统分布图",
                "titleEn": "World Writing Systems & Scripts Map",
                "image": "assets/images/infographics/writing_systems_map.png",
                "descZh": "直观标注全球各国文字系统（拉丁字母、西里尔字母、希腊字母、阿拉伯字母、韩文字母、天城文、泰文、僧伽罗文等）。看懂文字体系秒锁大洲和大区！",
                "descEn": "Global distribution of writing systems (Latin, Cyrillic, Greek, Arabic, Hangul, Devanagari, Thai, Sinhala). Instantly narrow down continents.",
                "tags": ["语言", "文字", "全球地图"]
            },
            {
                "id": "world-markings",
                "titleZh": "全球道路标线与行车方向概览图",
                "titleEn": "World Road Markings & Driving Side Map",
                "image": "assets/images/infographics/world_markings_map.png",
                "descZh": "全球各国左右舵行车方向与道路中心线颜色（黄中线、全白线、黄边线）分布图，GeoGuessr 首推秒杀线索。",
                "descEn": "Overview of left vs right hand drive countries and road line coloring rules worldwide.",
                "tags": ["道路标线", "左右行", "核心Meta"]
            },
            {
                "id": "us-license-plates",
                "titleZh": "美国 50 州模糊车牌与前后牌照全彩分布图",
                "titleEn": "US 50 States Blurred License Plates Map",
                "image": "assets/images/infographics/us_license_plates.png",
                "descZh": "美国全 50 州车牌在街景模糊后的色块特征及只挂后牌（Rear plate only）还是前后双牌的地图分布。美洲排位大杀器！",
                "descEn": "Color blocks of blurred license plates across all 50 US states, plus front vs rear-only plate requirements.",
                "tags": ["车牌", "美国", "大国地区"]
            },
            {
                "id": "chevrons-europe",
                "titleZh": "欧洲 V 形导向牌 (Chevron) 分布全景图",
                "titleEn": "European Chevrons Guide",
                "image": "assets/images/infographics/chevrons_europe.png",
                "descZh": "欧洲弯道 V 形导向牌配色体系：白底红箭、黑底白箭、蓝底白箭、黑底黄箭（挪威/冰岛/爱尔兰）、蓝底黄箭（瑞典独家）与黄底红箭（奥地利）。",
                "descEn": "European curve chevron color codes: White/Red, Black/White, Blue/White, Black/Yellow (NO/IS/IE), Blue/Yellow (Sweden), Yellow/Red (Austria).",
                "tags": ["交通标志", "V形导向牌", "欧洲"]
            },
            {
                "id": "europe-directional-signs",
                "titleZh": "欧洲指路标志箭头造型与版式特征",
                "titleEn": "European Directional Signs Arrow Shapes",
                "image": "assets/images/infographics/europe_directional_signs.png",
                "descZh": "欧洲各国指路牌中箭头的绘制方式：整块涂黑镂空箭头（挪威）、黑线勾勒箭头（瑞典）、黑实心箭头（芬兰）、特殊折角与带框设计。",
                "descEn": "Distinct arrow silhouettes across European directional signs: cut-out arrows (Norway), thin outline (Sweden), solid black (Finland).",
                "tags": ["路牌", "欧洲", "标志设计"]
            },
            {
                "id": "poles-distribution",
                "titleZh": "电线杆质地与结构全球分布图",
                "titleEn": "Utility Poles Materials & Distribution",
                "image": "assets/images/infographics/poles_distribution.png",
                "descZh": "南美木杆（玻利维亚/阿根廷/乌拉圭）、梯子杆（巴西/智利/西葡/法国）、方孔水泥杆（匈牙利H型/波兰P型/罗马尼亚R型）及澳洲 Stobie 杆。",
                "descEn": "Wood poles vs concrete ladder poles vs holey poles (Hungary H-holes, Poland P-holes, Romania R-holes).",
                "tags": ["电线杆", "基础设施", "全球速查"]
            },
            {
                "id": "cyrillic-matrix",
                "titleZh": "西里尔字母国家专用字符速查矩阵",
                "titleEn": "Cyrillic Alphabet Character Matrix",
                "image": "assets/images/infographics/cyrillic_matrix.png",
                "descZh": "乌克兰（独占 i, ï, є, ґ）、保加利亚（ъ为常见普通元音）、俄罗斯（ы, ё, ъ, э）、塞尔维亚/黑山/波黑（ђ, ћ, љ, њ）专用字母对照表。",
                "descEn": "Comparison matrix for Cyrillic letters: Ukraine (i, ï, є, ґ), Bulgaria (ъ), Russia (ы, э), Serbian/Balkans (ђ, ћ, љ, њ).",
                "tags": ["语言", "西里尔字母", "东欧"]
            },
            {
                "id": "greek-cyrillic-chart",
                "titleZh": "希腊字母与西里尔字母特征对照表",
                "titleEn": "Greek vs Cyrillic Script Comparison",
                "image": "assets/images/infographics/greek_cyrillic_chart.png",
                "descZh": "希腊语特有字母（Ω, Ψ, Ξ, Θ, Δ, Λ）与常见西里尔字母辨析，避免在希腊、塞浦路斯与斯拉夫语系国家间失误。",
                "descEn": "Differentiating unique Greek letters (Ω, Ψ, Ξ, Θ, Δ, Λ) from Cyrillic to avoid mixing up Greece/Cyprus and Slavic countries.",
                "tags": ["语言", "希腊字母", "字母辨识"]
            },
            {
                "id": "se-asian-scripts",
                "titleZh": "东南亚四大文字对比（泰文、老挝文、高棉文、缅甸文）",
                "titleEn": "Southeast Asian Scripts Comparison (Thai, Lao, Khmer, Burmese)",
                "image": "assets/images/infographics/se_asian_scripts.png",
                "descZh": "泰文（规整转折有硬角）、老挝文（弧线多圆润大圆圈）、柬埔寨高棉文（波浪与尖刺修饰）、缅甸文（大量纯圆圈）。高分辨率对照图。",
                "descEn": "High-res guide comparing Thai (sharp corners), Lao (curvy and rounded), Khmer (wavy topped teeth), and Burmese (circular letters).",
                "tags": ["语言", "东南亚", "高阶Meta"]
            }
        ]
    },
    "countries": countries,
    "comparisons": comparisons,
    "regionalGuides": regional_guides,
    "islands": islands,
    "flags": flags_by_region,
    "topics": topics,
    "flashcards": flashcards
}

# Write geoguessr-data.js
output_js = f"""// Auto-generated GeoGuessr Knowledge Database
window.GEOGUESSR_DATA = {json.dumps(db, indent=2, ensure_ascii=False)};
"""

with open("assets/js/geoguessr-data.js", "w", encoding="utf-8") as f:
    f.write(output_js)

print("Database built successfully!")
print(f"File size: {os.path.getsize('assets/js/geoguessr-data.js')} bytes")
