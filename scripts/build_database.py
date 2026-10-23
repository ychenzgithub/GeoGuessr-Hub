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
                "id": "world-driving-side",
                "titleZh": "全球左右舵行车方向分布图 (RHT vs LHT)",
                "titleEn": "World Driving Side Map (Right-Hand vs Left-Hand Traffic)",
                "image": "assets/images/infographics/world_driving_side_map.png",
                "descZh": "【开局第一定律】红色为靠右行驶（左舵车，占全球约65%：欧洲大陆、全美洲大部、俄蒙中韩、中东、北非与西非）；蓝色为靠左行驶（右舵车：英国、爱尔兰、马耳他、塞浦路斯、日本、港澳、泰国、马来西亚、新加坡、印尼、印度、孟加拉、斯里兰卡、不丹、澳新、南非、博茨瓦纳、纳米比亚、肯尼亚、乌干达及圭亚那/苏里南）。",
                "descEn": "Fundamental opening filter: Red = Right-Hand Traffic (driving on the right: Continental Europe, most of the Americas, Russia, East Asia, Middle East, North/West Africa); Blue = Left-Hand Traffic (driving on the left: UK, Ireland, Malta, Cyprus, Japan, Thailand, Malaysia, Indonesia, South Asia, Oceania, Southern & East Africa, Guyana, Suriname).",
                "tags": [
                    "左右行",
                    "核心Meta",
                    "全球地图"
                ]
            },
            {
                "id": "world-markings",
                "titleZh": "全球道路标线颜色分布图（中线与边线）",
                "titleEn": "World Road Markings Map (Centre & Outer Line Colours)",
                "image": "assets/images/infographics/world_markings_map.png",
                "descZh": "四大标线体系秒分大洲：①红色【白中线+白边线】：欧洲绝大多数国家（除挪威/爱尔兰/土耳其外）、俄罗斯、中亚、印度、孟加拉、斯里兰卡、澳洲、智利、塞内加尔、加纳、尼日利亚、突尼斯；②黄色【黄中线+白边线】：全北美与中美、南美（哥/厄/秘/玻/巴/巴拉圭）、挪威、肯尼亚、乌干达、泰/柬/马/韩/台；③绿色【白中线+黄边线】：南部非洲（南非/博茨瓦纳/纳米比亚/莱索托/斯威士兰）、爱尔兰、以色列、约旦、阿联酋、阿曼、尼泊尔、不丹；④紫色【混用/不固定】：阿根廷、乌拉圭、土耳其、日本、菲律宾、印尼、新西兰。",
                "descEn": "Global road line colour rules: Red (White Centre + White Outer) = most of Europe, Russia, Central Asia, India, Australia, Chile, West Africa; Yellow (Yellow Centre + White Outer) = North/Central America, Andean & Northern South America, Brazil, Norway, Kenya/Uganda, Thailand/Malaysia/Korea/Taiwan; Green (White Centre + Yellow Outer) = Southern Africa, Ireland, Israel/Jordan/UAE/Oman, Nepal/Bhutan; Purple (Mixed) = Argentina, Uruguay, Turkey, Japan, Philippines, Indonesia, NZ.",
                "tags": [
                    "道路标线",
                    "核心Meta",
                    "全球地图"
                ]
            },
            {
                "id": "street-view-coverage",
                "titleZh": "Google 街景全球官方覆盖版图 (2026)",
                "titleEn": "Official Google Street View World Coverage Map (2026)",
                "image": "assets/images/infographics/street_view_coverage_map.png",
                "descZh": "标注全球官方 Google 街景道路网覆盖密度（红线为高频道路覆盖）。幻灯片特别点名五大典型无常规道路街景的国家：埃及（仅金字塔等景点步行街景）、白俄罗斯（仅明斯克零星景区）、沙特阿拉伯、缅甸、中国大陆（仅少量博物馆/景区），此外摩洛哥、阿尔及利亚、伊朗、古巴、委内瑞拉、巴拉圭等亦无官方道路街景，排位切忌误点盲区。",
                "descEn": "Official Google Street View road coverage density map. Notable missing countries highlighted on the slide: Egypt, Belarus, Saudi Arabia, Myanmar, and mainland China (only isolated trekker/museum photospheres), as well as Morocco, Algeria, Iran, Cuba, Venezuela, and Paraguay.",
                "tags": [
                    "街景覆盖",
                    "核心Meta",
                    "全球地图"
                ]
            },
            {
                "id": "warning-signs-world",
                "titleZh": "全球道路警告标志形状与配色分布图",
                "titleEn": "World Warning Sign Shapes & Colour Schemes Map",
                "image": "assets/images/infographics/warning_signs_world_map.jpg",
                "descZh": "五大警告牌样式秒锁区域：①黄底黑边菱形（Diamond）：全美洲、日本、泰国、菲律宾、印尼、马来西亚、澳大利亚、新西兰，以及欧洲唯一的爱尔兰；②白底红边三角形：欧洲主流、俄罗斯及前苏联、土耳其、以色列、印度、蒙古；③黄底红边三角形：瑞典、芬兰、冰岛（注意挪威是白底！）、波兰、希腊、北马其顿、越南、老挝、柬埔寨及西非/东非多国；④黄底黑边三角形：中国大陆、韩国；⑤蓝底红边三角形（历史遗留）：南非、博茨瓦纳、纳米比亚等南部非洲旧标。",
                "descEn": "Global warning sign styles: Yellow Diamond = Americas, Japan, SE Asia, AU/NZ, and Ireland (unique in Europe); White/Red Triangle = most of Europe, former USSR, Turkey, Israel, India; Yellow/Red Triangle = Sweden, Finland, Iceland, Poland, Greece, North Macedonia, Indochina, East/West Africa; Yellow/Black Triangle = China, South Korea; Blue/Red Triangle (older signs) = Southern Africa.",
                "tags": [
                    "交通标志",
                    "核心Meta",
                    "全球地图"
                ]
            },
            {
                "id": "poles-distribution",
                "titleZh": "全球各国标志性电线杆图鉴 (Pole Types Around the World)",
                "titleEn": "Pole Types Around the World (Materials, Tops & Holes)",
                "image": "assets/images/infographics/poles_distribution.png",
                "descZh": "【全球电线杆材质分布图 (Pole Types)】按图例6色区分各国主导杆体材质：①棕色【Strong Majority Wood 绝大多数为木杆】：美、加、英、爱、挪、瑞、芬、爱沙尼亚、加纳、肯尼亚、乌干达、南非及周边、阿曼、澳大利亚；②深灰色【Strong Majority Concrete 绝大多数为水泥杆】：东欧与巴尔干大部（波/捷/斯/匈/罗/保/乌/俄/拉/立/塞/克）、墨、哥、厄、秘、智、巴、塞内加尔、尼日利亚、哈、吉、印、孟、斯、东南亚六国、日、韩、中国台湾；③深蓝色【Strong Majority Metal 绝大多数为金属杆】：格陵兰、突尼斯、阿联酋、不丹；④绿色【Mixed Wood + Concrete 木杆与水泥混用】：法、西、葡、奥、危、玻、巴拉圭、阿、乌拉圭、蒙古、新西兰；⑤黄色【Mixed Concrete + Metal 水泥与金属混用】：比、瑞、意、希、土、以、约、尼泊尔；⑥红色【Mostly Underground Wires 绝大多数电线入地/极少电线杆】：冰岛、荷兰、卢森堡、德国、丹麦、安道尔、摩纳哥、新加坡、中国香港。",
                "descEn": "Global distribution of utility pole materials: (1) Brown [Strong Majority Wood]: USA, Canada, UK, Ireland, Nordic countries, Estonia, Ghana, Kenya, Uganda, Southern Africa, Oman, Australia; (2) Dark Grey [Strong Majority Concrete]: Eastern Europe & Balkans (PL/CZ/SK/HU/RO/BG/UA/RU/LV/LT/RS/HR), Mexico, Colombia, Ecuador, Peru, Chile, Brazil, Senegal, Nigeria, Central/South/Southeast/East Asia; (3) Dark Blue [Strong Majority Metal]: Greenland, Tunisia, UAE, Bhutan; (4) Green [Mixed Wood + Concrete]: France, Spain, Portugal, Austria, Guatemala, Bolivia, Paraguay, Argentina, Uruguay, Mongolia, New Zealand; (5) Yellow [Mixed Concrete + Metal]: Belgium, Switzerland, Italy, Greece, Turkey, Israel, Jordan, Nepal; (6) Red [Mostly Underground Wires]: Iceland, Netherlands, Luxembourg, Germany, Denmark, Andorra, Monaco, Singapore, Hong Kong.",
                "tags": [
                    "电线杆",
                    "基础设施",
                    "全球速查"
                ]
            },
            {
                "id": "gen4-opel-honda",
                "titleZh": "Gen 4 街景车车型分布：欧宝背板 (Opel) vs 本田车头 (Honda)",
                "titleEn": "Gen 4 Google Car Meta: Opel (Back Tab) vs Honda (Car Hood)",
                "image": "assets/images/infographics/gen4_opel_honda_map.jpg",
                "descZh": "第四代高清蓝车（Gen 4）两大主力车型识别图解：①蓝色区域【OPEL 欧宝】：低头向车后方看，紧贴底部模糊圈边缘偶见蓝白相间的梯形翘起背板（Back Tab），分布于欧洲全境、南非、莱索托、斯威士兰、土耳其；②绿色区域【HONDA 本田】：低头向车前方看，偶见白色或深色隆起的发动机舱盖前缘（Car Hood），分布于美加墨、哥伦比亚、秘鲁、巴西、阿根廷、智利、澳新、泰/马/印/菲、阿联酋/约旦/以色列、韩/台。",
                "descEn": "Gen 4 camera car comparison with close-up Street View crops: Blue = OPEL (visible blue-and-white rear 'Back Tab' behind the car) used across Europe, Turkey, and Southern Africa; Green = HONDA (visible rounded 'Car Hood' bulge in front) used across the Americas, Oceania, SE/East Asia, and the Middle East.",
                "tags": [
                    "街景车",
                    "核心Meta",
                    "全球地图"
                ]
            },
            {
                "id": "gen4-prominent-forms",
                "titleZh": "全球各国 Gen 4 街景车全形态细分分布图（不含 Smallcam）",
                "titleEn": "Most Prominent Form of Gen 4 Coverage by Country (Excl. Smallcam)",
                "image": "assets/images/infographics/gen4_prominent_forms_map.png",
                "descZh": "全球 Gen 4 拍摄载具六大形态全景：①蓝色【Opel 背板】欧洲、南非、土耳其；②绿色【Honda 车头】美洲、澳新、东南亚、中东；③黄色【Truck 皮卡/卡车】冰岛、塞尔维亚、北马其顿、格鲁吉亚、塞内加尔、加纳、尼日利亚、肯尼亚、纳米比亚、阿曼、巴拿马、厄瓜多尔、玻利维亚、乌拉圭；④红色【No Car 完全无车影】俄罗斯、比利时、卢森堡、奥地利、克罗地亚；⑤紫色【Lowcam 低机位】瑞士、日本、斯里兰卡；⑥橙色【Smallcam Only 小镜头】印度、孟加拉、柬埔寨、阿尔巴尼亚、波多黎各、多米尼加。",
                "descEn": "Six prominent Gen 4 camera forms by country: Blue = Opel (Back Tab); Green = Honda (Car Hood); Yellow = Pickup Truck (Iceland, Balkans, West/East Africa, Namibia, Oman, Bolivia, Ecuador, Uruguay, Panama); Red = No Car visible (Russia, Belgium, Austria, Croatia); Purple = Lowcam (Switzerland, Japan, Sri Lanka); Orange = Smallcam Only (India, Bangladesh, Cambodia, Albania, PR, DR).",
                "tags": [
                    "街景车",
                    "高阶Meta",
                    "全球地图"
                ]
            },
            {
                "id": "gen3-car-meta",
                "titleZh": "全球各国 Gen 3 街景车特征与天线形态全图解",
                "titleEn": "Most Likely Gen 3 Google Car & Antenna Meta in Each Country",
                "image": "assets/images/infographics/gen3_car_meta_map.png",
                "descZh": "【三代车车身与天线全球速查 (Gen 3 Car Meta)】按图例13色精确对应：①黑色【Black Carback 黑车尾】：阿根廷、乌拉圭、约旦、韩国；②白色【White Carback 白车尾】：秘鲁、玻利维亚、智利、南非、博茨瓦纳、斯威士兰、莱索托、印尼；③灰色【Silver Carback 银灰车尾】：阿尔巴尼亚、黑山；④紫色【Stubby Antenna 粗短桩天线】：墨西哥、哥伦比亚、厄瓜多尔、巴西；⑤蓝色【Truck / Roof Rack 皮卡或车顶行李架】：危地马拉、多米尼加、波多黎各、塞内加尔、加纳、尼日利亚、肯尼亚、乌干达、吉尔吉斯、蒙古、孟加拉、老挝；⑥浅绿【No Car 完全无车身无天线】：美、加、挪、丹、德、塞尔维亚、北马其顿、土耳其、泰国；⑦红白格【White Carfront 白色车头】：斯里兰卡、柬埔寨；⑧红色【Red Car Long Antenna 红车长天线】：乌克兰；⑨米白【White Car Long Antenna 白车长天线】：瑞典、冰岛、澳大利亚；⑩棕色【Black Car Long Antenna 黑车长天线】：俄罗斯、西班牙、葡萄牙、以色列/巴勒斯坦、中国台湾；⑪深绿【Short Antenna 标准短天线】：英、爱、法、荷比卢、意、奥、捷、斯、波、波罗的海、芬、匈、罗、保、克、斯洛文尼亚、希、突尼斯、马、新、菲；⑫黄色【Lowcam 低视角】：瑞士、日本；⑬浅青【Ribbed Antenna 螺纹天线】：新西兰。",
                "descEn": "Global Gen 3 Google Car & Antenna distribution across 13 categories: (1) Black [Black Carback]: Argentina, Uruguay, Jordan, South Korea; (2) White [White Carback]: Peru, Bolivia, Chile, South Africa, Botswana, Eswatini, Lesotho, Indonesia; (3) Grey [Silver Carback]: Albania, Montenegro; (4) Purple [Stubby Antenna]: Mexico, Colombia, Ecuador, Brazil; (5) Blue [Truck / Roof Rack]: Guatemala, DR, PR, Senegal, Ghana, Nigeria, Kenya, Uganda, Kyrgyzstan, Mongolia, Bangladesh, Laos; (6) Light Green [No Car]: USA, Canada, Norway, Denmark, Germany, Serbia, North Macedonia, Turkey, Thailand; (7) Red-White Checkered [White Carfront]: Sri Lanka, Cambodia; (8) Red [Red Car Long Antenna]: Ukraine; (9) Cream [White Car Long Antenna]: Sweden, Iceland, Australia; (10) Brown [Black Car Long Antenna]: Russia, Spain, Portugal, Israel/West Bank, Taiwan; (11) Dark Green [Short Antenna]: UK, Ireland, France, Benelux, Italy, Central/Eastern Europe, Baltics, Finland, Balkans, Tunisia, Malaysia, Singapore, Philippines; (12) Yellow [Lowcam]: Switzerland, Japan; (13) Light Teal [Ribbed Antenna]: New Zealand.",
                "tags": [
                    "街景车",
                    "高阶Meta",
                    "全球地图"
                ]
            },
            {
                "id": "yellow-license-plates",
                "titleZh": "全球黄色车牌使用规律分布图",
                "titleEn": "World Yellow License Plates Usage Map",
                "image": "assets/images/infographics/yellow_license_plates_map.png",
                "descZh": "按五档频率归纳全球黄色车牌：①黄色【Normally 常规标配前后黄牌】：荷兰、卢森堡（全欧唯二全黄牌国家！）、以色列、阿曼、哥伦比亚、纳米比亚，以及老挝（幻灯片备注：老挝私家车亦标配黄牌）；②紫色【Rears Only 前白后黄】：英国、博茨瓦纳、肯尼亚、乌干达、斯里兰卡；③浅橙【Sometimes 常见】：美国阿拉斯加/新墨西哥/纽约/新泽西、印度、孟加拉、日本（轻自动车 K-car 黄牌）；④红色【Occasionally 偶见商用/旧版】：法国（2009年前旧牌后黄）、丹麦（商用黄牌）、秘鲁、印尼、澳洲、韩国；⑤深绿【Taxi 出租车黄牌】：瑞典、加纳、不丹、越南、智利。",
                "descEn": "Global guide to yellow license plates: Yellow (Normally) = Netherlands, Luxembourg, Israel, Oman, Colombia, Namibia (+ Laos per slide note); Purple (Rears Only, white front / yellow rear) = UK, Botswana, Kenya, Uganda, Sri Lanka; Orange (Sometimes) = NY, NJ, NM, Alaska, India, Bangladesh, Japan (Kei cars); Red (Occasionally) = France, Denmark, Peru, Indonesia, Australia, South Korea; Dark Green (Taxi) = Sweden, Ghana, Bhutan, Vietnam, Chile.",
                "tags": [
                    "车牌",
                    "核心Meta",
                    "全球地图"
                ]
            },
            {
                "id": "license-plate-proportions",
                "titleZh": "全球车牌长宽比例分布图（欧式细长牌 vs 美式短宽牌）",
                "titleEn": "World License Plate Proportions Map (Long vs Short vs Tall-Short)",
                "image": "assets/images/infographics/license_plate_proportions_map.png",
                "descZh": "【车牌长宽比例秒判】即便车牌被打码模糊，长宽比例依然清晰可见：①黄色【Long 欧式细长牌】：欧洲大陆绝大多数国家（除意/瑞/安道尔）、俄、土、突尼斯、埃及、塞内加尔、南非及周边四国、哈萨克、吉尔吉斯、印、不丹、马、印尼、菲、巴西、乌拉圭；②大红色【Short 美式短宽牌】：美、加、墨、危、哥斯达黎加、巴拿马、波多黎各、多米尼加、秘鲁、玻利维亚、智利、尼日利亚、孟加拉国、泰、老、澳、新；③深褐红色【Tall Short 偏高方短牌】：哥伦比亚、日本、中国台湾、安道尔；④橙色【Mixed 长短混用或前短后长】：意大利（前车牌明显比普通欧牌短小！）、瑞士、厄瓜多尔、阿根廷、巴拉圭、加纳、肯尼亚、乌干达、约旦、阿联酋、蒙古、韩国、柬埔寨、斯里兰卡。",
                "descEn": "Even through heavy blurring, plate aspect ratio is unmistakable: (1) Yellow [Long European-style]: Most of Europe (except IT/CH/AD), Russia, Turkey, Tunisia, Egypt, Senegal, Southern Africa, Kazakhstan, Kyrgyzstan, India, Bhutan, Malaysia, Indonesia, Philippines, Brazil, Uruguay; (2) Red [Short American-style]: USA, Canada, Mexico, Central America, PR, DR, Peru, Bolivia, Chile, Nigeria, Bangladesh, Thailand, Laos, Australia, New Zealand; (3) Dark Red/Maroon [Tall Short]: Colombia, Japan, Taiwan, Andorra; (4) Orange [Mixed / Shorter Front Plate]: Italy (distinctly shorter front plate!), Switzerland, Ecuador, Argentina, Paraguay, Ghana, Kenya, Uganda, Jordan, UAE, Mongolia, South Korea, Cambodia, Sri Lanka.",
                "tags": [
                    "车牌",
                    "核心Meta",
                    "全球地图"
                ]
            },
            {
                "id": "us-license-plates",
                "titleZh": "美国 50 州模糊车牌图案与前后牌照全彩分布图",
                "titleEn": "US 50 States Blurred License Plates & Rear-Only Map",
                "image": "assets/images/infographics/us_license_plates.png",
                "descZh": "美国全 50 州车牌在街景模糊后的色块渐变特征（如纽约金黄牌、佛州中橘绿果、怀俄明牛仔、新墨西哥绿松石/黄底、佛蒙特纯绿牌、爱达荷红蓝白三色带）及只挂后牌区域红圈标注。美洲排位分州大杀器！",
                "descEn": "Visual chart of blurred license plate designs across all 50 US states, highlighting distinctive color gradients and the states that only require rear plates.",
                "tags": [
                    "车牌",
                    "美国",
                    "大国地区"
                ]
            },
            {
                "id": "us-front-rear-plates",
                "titleZh": "美国各州前后车牌强制悬挂法规分布图（19州仅挂后牌）",
                "titleEn": "US License Plate Requirements by State (Rear-Only vs Front + Rear)",
                "image": "assets/images/infographics/us_front_rear_plates_map.png",
                "descZh": "观察路边车辆车头是否挂前牌，秒砍全美一半州：①蓝色【Rear Only 仅需挂后车牌，共19州（占全美人口35.1%）】：集中在美国东南部、阿巴拉契亚与西南部——宾州(PA)、特拉华(DE)、西弗吉尼亚(WV)、印第安纳(IN)、密歇根(MI)、肯塔基(KY)、北卡(NC)、南卡(SC)、佐治亚(GA)、佛罗里达(FL)、亚拉巴马(AL)、密西西比(MS)、田纳西(TN)、阿肯色(AR)、路易斯安那(LA)、俄克拉荷马(OK)、堪萨斯(KS)、新墨西哥(NM)、亚利桑那(AZ)（注：俄亥俄州 OH 亦于2020年7月起取消前牌）；②绿色【Front + Rear 前后双牌，共31州+DC】：加州、德州、纽约、新英格兰、西北及中西部北部各州。",
                "descEn": "US state laws on front license plates: Blue (Rear Only, 19 states / 35.1% of population) = Southeastern US, Appalachia, Michigan, Indiana, Kansas, Oklahoma, New Mexico, Arizona (plus Ohio since July 2020); Green (Front + Rear, 31 states + DC / 64.9% of population) = West Coast, Texas, Northeast, and Upper Midwest (with minor conditional exemptions in NE, SD, ND, WY, NV).",
                "tags": [
                    "车牌",
                    "美国",
                    "大国地区"
                ]
            },
            {
                "id": "canada-license-plates",
                "titleZh": "加拿大各省与地区前后车牌悬挂法规分布图",
                "titleEn": "Canadian Provincial & Territorial Licence Plate Requirements",
                "image": "assets/images/infographics/canada_license_plates_map.jpg",
                "descZh": "【北美省州二级定位】加拿大各省车头挂牌规定严格区分：①绿色【Rear & Front 前后双车牌】：不列颠哥伦比亚省 (BC)、曼尼托巴省 (MB)、安大略省 (ON)，以及新不伦瑞克省 (NB，注：2019年7月前旧街景有前车牌，2019年7月起废除前牌）；②浅蓝色【Rear Only 仅挂后车牌，车头无牌】：阿尔伯塔省 (AB)、萨斯喀彻温省 (SK)、魁北克省 (QC)、新斯科舍省 (NS)、爱德华王子岛 (PE)、纽芬兰与拉布拉多 (NL) 以及三大北方领地 (YT/NT/NU)。",
                "descEn": "Canadian provincial license plate laws: (1) Green [Rear & Front Plates]: British Columbia (BC), Manitoba (MB), Ontario (ON), and New Brunswick (NB prior to July 2019; front plate abolished after July 2019); (2) Light Blue [Rear Plate Only]: Alberta (AB), Saskatchewan (SK), Quebec (QC), Nova Scotia (NS), PEI, Newfoundland & Labrador (NL), and all 3 territories (YT, NT, NU).",
                "tags": [
                    "车牌",
                    "加拿大",
                    "大国地区"
                ]
            },
            {
                "id": "stop-signs-world",
                "titleZh": "全球停车让行标志 (STOP Sign) 文字与样式分布图",
                "titleEn": "STOP Signs Around the (Guessable) World",
                "image": "assets/images/infographics/stop_signs_world_map.png",
                "descZh": "【全球停车牌 (STOP Sign) 文字与样式全集】一图区分全球易混地区：①拉美三大流派：`ALTO`（墨西哥、危地马拉、哥斯达黎加、巴拿马等中美洲）、`PARE`（哥伦比亚、厄瓜多尔、秘鲁、智利、玻利维亚、阿根廷、巴西、乌拉圭、波多黎各、多米尼加）、`ARRÊT`（加拿大魁北克及新不伦瑞克双语区）；②亚洲特色文字：`止まれ`（日本，倒三角形红牌！）、`정지 / STOP`（韩国）、`หยุด`（泰国）、`ឈប់`（柬埔寨）、`ຢຸດ`（老挝）、`BERHENTI`（马来西亚、文莱；注意印尼使用英文 `STOP`）、`停`（中国大陆）、`STOP / 停`（中国香港双语八角牌）、`থামুন`（孟加拉国，三角套红圆牌）、`قف`（阿拉伯国家）、`DUR`（土耳其）、`СТОП`（蒙古、保加利亚部分）。",
                "descEn": "Global STOP sign text & shapes: (1) Americas: `ALTO` (Mexico, Guatemala, Costa Rica, Panama), `PARE` (South America, Puerto Rico, Dominican Republic), `ARRÊT` (Quebec & bilingual New Brunswick); (2) Asia & Mideast: `止まれ` (Japan — red inverted triangle!), `정지 / STOP` (South Korea), `หยุด` (Thailand), `ឈប់` (Cambodia), `ຢຸດ` (Laos), `BERHENTI` (Malaysia & Brunei; whereas Indonesia uses `STOP`), `停` (Mainland China), `STOP / 停` (Hong Kong bilingual octagon), `থামুন` (Bangladesh — red circle inside triangle), `قف` (Arabic nations), `DUR` (Turkey), `СТОП` (Mongolia).",
                "tags": [
                    "交通标志",
                    "语言",
                    "全球速查"
                ]
            },
            {
                "id": "europe-street-words",
                "titleZh": "欧洲各国路牌“街道 (Street)”一词拼写与语言全景图",
                "titleEn": "European Words for 'Street' on Road Signs (with Regional Flags)",
                "image": "assets/images/infographics/europe_street_words_map.png",
                "descZh": "欧洲城镇路名牌“街/路”后缀词典：瑞典【Gata】、挪威【Gate】、丹麦【Gade】、冰岛【Gata/Stræti】、芬兰【Katu/Tie】、爱沙尼亚【Tänav/tn】、拉脱维亚【Iela】、立陶宛【Gatvė/g.】、荷/比弗拉芒【Straat】、德/奥【Straße】、瑞士德语区【Strasse（无ß）】、法/比瓦隆【Rue】、西班牙【Calle】、加泰罗尼亚/安道尔【Carrer】、巴斯克【Kalea】、葡萄牙【Rua】、意大利【Via】、马耳他【Triq】、波兰/斯洛伐克/斯洛文尼亚/巴尔干【Ulica】、捷克【Ulice】、乌克兰【Вулиця】、俄罗斯/保加利亚【Улица】、匈牙利【Utca】、罗马尼亚【Strada】、阿尔巴尼亚【Rrugë】、希腊【Οδός】、土耳其【Sokak/Caddesi】。",
                "descEn": "Words for 'Street' on European road signs with national and regional flags: Gata (SE), Gate (NO), Gade (DK), Katu (FI), Tänav (EE), Iela (LV), Gatvė (LT), Straat (NL/Flanders), Straße (DE/AT), Strasse (CH), Rue (FR/Wallonia), Calle (ES), Carrer (Catalonia/Andorra), Kalea (Basque), Rua (PT), Via (IT), Triq (Malta), Ulica (PL/SK/Balkans), Ulice (CZ), Вулиця (Ukraine), Улица (RU/BG), Utca (HU), Strada (RO/MD), Rrugë (AL/XK), Οδός (GR/CY), Sokak/Caddesi (TR).",
                "tags": [
                    "路牌",
                    "语言",
                    "欧洲"
                ]
            },
            {
                "id": "europe-pedestrian-stripes",
                "titleZh": "欧洲人行横道标志斑马线条纹数量分布图",
                "titleEn": "European Pedestrian Crossing Sign Stripes Count Map",
                "image": "assets/images/infographics/europe_pedestrian_stripes_map.png",
                "descZh": "数蓝底人行横道牌上的白条纹根数秒锁欧洲国家（bullfrogggy 整理）：①【8条】西班牙、安道尔（极密集细白条，秒杀5条的葡萄牙与法国）；②【7条】瑞士（小人下方7根细条）；③【5条】欧洲最主流（法/意/捷/罗/土/丹/芬/波罗的海，其中德/葡/匈/克小人系腰带，斯洛伐克中间条纹极近，斯洛文尼亚条纹触碰白三角底边）；④【4条】瑞典与冰岛（前脚踩在1-2条之间）、挪威（常为4条，北部偶见5条）、保加利亚（双脚直接踩在白条上）；⑤【3条】俄罗斯、乌克兰、白俄罗斯、爱沙尼亚（瘦小人）；⑥【2条虚线】比利时、奥地利、希腊、塞浦路斯及前南巴尔干（黑山/阿尔巴尼亚/塞尔维亚/北马其顿）；⑦【1条粗实心带】波兰独占；⑧【无此蓝牌】英国与爱尔兰。",
                "descEn": "Number of white stripes on European blue pedestrian crossing signs: 8 = Spain & Andorra; 7 = Switzerland; 5 = France, Germany, Italy, Portugal, Denmark, Finland, Czechia, Slovakia, Hungary, Romania, Croatia, Slovenia, Lithuania, Latvia, Turkey (with belt/spacing sub-variants); 4 = Sweden, Iceland, Norway, Bulgaria; 3 = Russia, Ukraine, Belarus, Estonia; 2 dashed lines = Belgium, Austria, Greece, Albania, Montenegro, Serbia, North Macedonia; 1 solid bar = Poland only; No blue sign = UK & Ireland.",
                "tags": [
                    "交通标志",
                    "欧洲",
                    "高阶Meta"
                ]
            },
            {
                "id": "chevrons-europe",
                "titleZh": "欧洲弯道 V 形导向牌 (Chevron) 配色体系全景图",
                "titleEn": "European Curve Chevron Colour Schemes Guide",
                "image": "assets/images/infographics/chevrons_europe.png",
                "descZh": "欧洲弯道 V 形导向牌配色体系：白底红箭（德国、波兰、匈牙利、罗马尼亚、斯洛伐克、塞尔维亚、保加利亚等）、黑底白箭（意大利、西班牙、法国、葡萄牙、英国、瑞士、捷克、克罗地亚、希腊）、蓝底白箭（法国主推、西班牙与巴斯克常见）、黑底黄箭（挪威、冰岛、爱尔兰、卢森堡、黑山）、蓝底黄箭（瑞典全国独占！）、红底白箭（丹麦、立陶宛、芬兰、捷克）、黄底黑箭（芬兰）、黄底红箭（奥地利与西葡常见）。",
                "descEn": "European curve chevron color schemes: White/Red (DE, PL, HU, RO, SK, RS, BG), Black/White (IT, ES, FR, PT, UK, CH, CZ, HR, GR), Blue/White (France, Spain), Black/Yellow (NO, IS, IE, LU, ME), Blue/Yellow (Sweden exclusive!), Red/White (DK, LT, FI, CZ), Yellow/Black (Finland), Yellow/Red (Austria, Spain, Portugal).",
                "tags": [
                    "交通标志",
                    "V形导向牌",
                    "欧洲"
                ]
            },
            {
                "id": "europe-directional-signs",
                "titleZh": "欧洲指路标志箭头造型与版式特征",
                "titleEn": "European Directional Signs Arrow Shapes",
                "image": "assets/images/infographics/europe_directional_signs.png",
                "descZh": "欧洲各国指路牌中箭头的绘制方式：整块涂黑镂空箭头（挪威）、黑线勾勒空心箭头（瑞典）、黑实心箭头（芬兰），以及法、德、西、意、波兰、捷克等国独特的箭头折角与边框设计。",
                "descEn": "Distinct arrow silhouettes across European directional signs: cut-out arrows (Norway), thin outline (Sweden), solid black (Finland), and country-specific shaft/head geometry.",
                "tags": [
                    "路牌",
                    "欧洲",
                    "标志设计"
                ]
            },
            {
                "id": "euro-road-numbering",
                "titleZh": "欧洲各国公路编号规则与高速路牌颜色全图解",
                "titleEn": "European Road Numbering Schemes & Highway Sign Colours",
                "image": "assets/images/infographics/euro_road_numbering_map.png",
                "descZh": "欧洲各国高速公路与干线公路牌底色及编号前缀速查（u/Melongated 制）：①高速路牌底色分流：【绿底高速牌】意大利、瑞士、丹麦、瑞典、立陶宛、捷克、斯洛伐克、斯洛文尼亚、克罗地亚、波黑、塞尔维亚、北马其顿、罗马尼亚、保加利亚、希腊、土耳其 vs 【蓝底高速牌】英、爱、法、西、葡、比、荷、卢、德、奥、波、匈；②特征前缀：法国（A/N/D/C）、德国（蓝八角形A + 黄矩形B）、英国（M/A/B）、爱尔兰（M/N/R/L）、西班牙（AP/A/N + 省区双字母前缀）、捷克与斯洛伐克（红底D + 蓝底数字）、北欧与波罗的海（无字母纯数字彩盾）。",
                "descEn": "Comprehensive chart of European highway and road numbering badges by u/Melongated: Green vs. Blue motorway sign countries, German blue autobahn hexagons & yellow Bundesstraße rectangles, French A/N/D/C hierarchy, UK M/A/B vs. Irish M/N/R/L, Spanish regional prefixes, and Nordic/Baltic pure-number shields.",
                "tags": [
                    "路牌",
                    "欧洲",
                    "高阶Meta"
                ]
            },
            {
                "id": "bollard-probability",
                "titleZh": "全球路缘标/护柱 (Bollards) 出现概率分布图",
                "titleEn": "World Probability of Encountering Roadside Bollards Map",
                "image": "assets/images/infographics/bollard_probability_map.png",
                "descZh": "【路缘标出现概率地图】并非所有国家都建设公路护柱：①红色【Likely 极高概率见到】：欧洲大陆绝大多数国家（冰岛、瑞典、芬兰、波罗的海三国、波兰、德、丹、荷比卢、法、西、葡、意、瑞、奥、捷、斯、匈、斯洛文尼亚、克罗地亚、塞尔维亚、黑山、阿尔巴尼亚、北马其顿）、俄罗斯、土耳其、日本、中国台湾、澳大利亚、新西兰、厄瓜多尔、秘鲁；②橙色【Sometimes 偶见/部分干道有】：英国、挪威、乌克兰、哈萨克、吉尔吉斯、蒙古、美、加、墨、乌拉圭、塞内加尔、泰、柬、老、马、印尼、斯里兰卡、孟加拉国；③黄色【Rarely 极少见到】：爱尔兰、罗马尼亚、保加利亚、希腊、以色列、约旦、阿联酋、阿曼、加纳、尼日利亚、肯尼亚、乌干达、南部非洲五国、印度、不丹、韩国、菲律宾、中美洲、哥伦比亚、玻利维亚、巴西、阿根廷、智利。",
                "descEn": "Roadside bollard frequency by country: (1) Red [Likely]: Most of Continental Europe (except RO/BG/GR/NO), Iceland, Russia, Turkey, Japan, Taiwan, Australia, New Zealand, Ecuador, Peru; (2) Orange [Sometimes]: UK, Norway, Ukraine, Kazakhstan, Kyrgyzstan, Mongolia, USA, Canada, Mexico, Uruguay, Senegal, Thailand, Cambodia, Laos, Malaysia, Indonesia, Sri Lanka, Bangladesh; (3) Yellow [Rarely]: Ireland, Romania, Bulgaria, Greece, Israel, Jordan, UAE, Oman, Ghana, Nigeria, Kenya, Uganda, Southern Africa, India, Bhutan, South Korea, Philippines, Central America, Colombia, Bolivia, Brazil, Argentina, Chile.",
                "tags": [
                    "路缘标",
                    "基础设施",
                    "全球地图"
                ]
            },
            {
                "id": "world-bollards-visual",
                "titleZh": "全球各国标志性路缘标 (Bollards) 街景实拍全览图",
                "titleEn": "World Roadside Bollards Visual Reference Map",
                "image": "assets/images/infographics/world_bollards_visual_map.png",
                "descZh": "将各国最具代表性的路边护柱实拍图直接标注在世界地图对应位置上：丹麦（黄顶红带）、冰岛（黄柱白反光片）、波兰与立陶宛（红白宽带斜顶）、捷克与斯洛伐克（黑斜顶配双橙色圆点）、奥地利与斯洛文尼亚（黑斜顶配红/白反光片，斯洛文尼亚黑帽全包顶）、德国（黑斜顶配白色窄竖条）、卢森堡（三颗黑螺丝钉）、法国（白圆柱配红/银灰环带）、西班牙（黑斜顶配黄色反光块）、意大利（黑顶白身配红白竖条）、土耳其（白扁柱配正中大红块）、澳大利亚（白扁柱红长条）、新西兰（全红宽带包裹白柱）、泰国（黑白圆顶水泥桩）。",
                "descEn": "Visual world map placing actual Street View photos of each country's roadside bollards onto its territory—covering all classic European, Oceanian (AU vs NZ red wrap), Asian (Thailand, Malaysia, Japan, Taiwan), and Latin American bollard designs.",
                "tags": [
                    "路缘标",
                    "基础设施",
                    "全球速查"
                ]
            },
            {
                "id": "flat-landscape-map",
                "titleZh": "全球平坦地形 (Flat Landscape) 遭遇概率分布图",
                "titleEn": "World Flat Landscape Probability Map",
                "image": "assets/images/infographics/flat_landscape_map.png",
                "descZh": "【自然地形平坦度概率图】当你出生在一望无际、毫无山丘起伏的纯平地形时：①浅米黄色【Almost Always 几乎总是平坦】：丹麦、荷兰、芬兰、波罗的海三国（爱/拉/立）、波兰、哈萨克斯坦、塞内加尔、博茨瓦纳、卡塔尔、阿联酋、孟加拉国、巴拉圭；②金黄色【Likely 大概率平坦】：美、加、巴西、阿根廷、乌拉圭、英、爱、法、比、德、捷、匈、乌、俄、瑞典、突尼斯、加纳、尼日利亚、肯尼亚、乌干达、南非、纳米比亚、蒙古、泰、柬、老、马、澳大利亚；③橙色【Unlikely 较少平坦/多山丘】：挪威、冰岛、西、葡、意、瑞、奥、斯洛伐克、罗、保、塞、波黑、希、土、格鲁吉亚、吉尔吉斯、印、斯、印尼、菲、中国台湾、新西兰、墨、中美洲、哥、厄、秘、玻、智；④红色【Almost Never 几乎从不平坦/全境多山】：安道尔、斯洛文尼亚、克罗地亚、黑山、阿尔巴尼亚、北马其顿、尼泊尔、不丹、韩国、日本、卢旺达、莱索托、斯威士兰。",
                "descEn": "Probability of encountering completely flat terrain: (1) Pale Cream [Almost Always Flat]: Denmark, Netherlands, Finland, Baltics (EE/LV/LT), Poland, Kazakhstan, Senegal, Botswana, Qatar, UAE, Bangladesh, Paraguay; (2) Gold/Yellow [Likely Flat]: USA, Canada, Brazil, Argentina, Uruguay, UK, Ireland, France, Belgium, Germany, Czechia, Hungary, Ukraine, Russia, Sweden, Tunisia, West/East/Southern Africa, Mongolia, Mainland SEA, Australia; (3) Orange [Unlikely Flat]: Norway, Iceland, Iberia, Italy, Alpine & Balkan Europe, Turkey, Caucasus, Kyrgyzstan, India, Maritime SEA, Taiwan, New Zealand, Mexico, Andean South America; (4) Red [Almost Never Flat]: Andorra, Slovenia, Croatia, Montenegro, Albania, North Macedonia, Nepal, Bhutan, South Korea, Japan, Rwanda, Lesotho, Eswatini.",
                "tags": [
                    "自然地理",
                    "核心Meta",
                    "全球地图"
                ]
            },
            {
                "id": "water-tank-colours",
                "titleZh": "全球屋顶水箱颜色与造型分布图 (Water Tank Meta)",
                "titleEn": "World Rooftop Water Tank Colours & Shapes Map",
                "image": "assets/images/infographics/water_tank_colours_map.png",
                "descZh": "绿色底色代表屋顶高频出现储水箱的国家，图标展示水箱颜色与造型（双色分割代表多色并存）：①拉丁美洲：巴西（标志性浅蓝/深蓝飞碟盆状水箱）、墨西哥与危地马拉（黑色与米白色 Rotoplas 圆桶水箱）、秘鲁（黑白双色或全黑圆桶）、哥伦比亚/厄瓜多尔/巴拿马（蓝桶与黑桶）、阿根廷/乌拉圭/智利（黑色、白色或水泥灰立桶）；②地中海与中东：希腊/塞浦路斯/土耳其（横向卧式银白太阳能热水桶）、以色列与巴勒斯坦（巴勒斯坦区多黑色立桶，以色列多白色水箱）、约旦/阿联酋/阿曼（白色方桶或立桶）；③亚非地区：中国台湾（全岛密集的亮银色不锈钢圆筒水塔！）、印尼（醒目的橙红色与蓝色立桶）、泰国（棕色大水缸与银/蓝水塔）、南非/莱索托（绿色波纹塑料桶）、西非与东非（黑色立桶）。",
                "descEn": "Global rooftop water tank guide (Green = common rooftop water tanks; Brown = rare): Brazil (blue bowl/saucer tanks), Mexico & Guatemala (black/white Rotoplas cylinders), Colombia/Peru/Argentina (blue, black, or white tanks), Greece/Turkey (horizontal solar water heaters), Israel/West Bank (white vs. black tanks), South Africa (green tanks), Indonesia (bright orange/red & blue tanks), Taiwan (ubiquitous shiny silver stainless-steel cylinders).",
                "tags": [
                    "建筑与水箱",
                    "高阶Meta",
                    "全球地图"
                ]
            },
            {
                "id": "writing-systems",
                "titleZh": "全球文字与字母书写系统分布图",
                "titleEn": "World Writing Systems & Scripts Map",
                "image": "assets/images/infographics/writing_systems_map.png",
                "descZh": "直观标注全球各国文字系统（拉丁字母、西里尔字母、希腊字母、阿拉伯字母、希伯来字母、韩文字母、汉字与日本假名、天城文、孟加拉文、泰米尔文、泰卢固文、僧伽罗文、泰文、老挝文、高棉文、缅甸文、格鲁吉亚文、亚美尼亚文、吉兹字母等）。看懂文字体系秒锁大洲和大区！",
                "descEn": "Global distribution of writing systems (Latin, Cyrillic, Greek, Arabic, Hebrew, Hangul, Hanzi/Kana, Devanagari, Bengali, Tamil, Telugu, Sinhala, Thai, Lao, Khmer, Burmese, Georgian, Armenian, Ge'ez). Instantly narrow down continents and countries.",
                "tags": [
                    "语言",
                    "文字",
                    "全球地图"
                ]
            },
            {
                "id": "cyrillic-matrix",
                "titleZh": "俄语与乌克兰语西里尔字母核心特征对照表",
                "titleEn": "Russian vs. Ukrainian Cyrillic Script & Street Suffix Guide",
                "image": "assets/images/infographics/cyrillic_matrix.png",
                "descZh": "【俄乌及西里尔语种终极辨识矩阵】高清重制版四合一速查表：①乌克兰语4大独有字母：`І і`（对应俄语И）、`Ї ї`（乌语100%专属双点I）、`Є є`（开口朝右）、`Ґ ґ`（带翘钩G）；②俄语4大独有特征字母：`Ы ы`（乌语绝无）、`Э э`（开口朝左）、`Ъ ъ`（硬音符号）、`Ё ё`；③路牌高频词与后缀对比：街道 `Улица (ул.)` [俄] vs `Вулиця (вул.)` [乌]、城市 `Город (г.)` [俄] vs `Місто (м.)` [乌]、后缀 `-ский` [俄] vs `-ський` [乌]、基辅 `Киев` vs `Київ`；④其他西里尔语种秒判：白俄罗斯 `Ў ў`、塞尔维亚/黑山 `Ј, Љ, Њ, Ђ, Ћ, Џ`、北马其顿 `Ѓ, Ќ, Ѕ`、保加利亚词中元音 `Ъ`、哈萨克 `Ә, Ғ, Қ, Ң, Ө, Ұ, Ү, І`、吉尔吉斯/蒙古 `Ө, Ү, Ң`。",
                "descEn": "High-resolution Cyrillic Identification Matrix: (1) Ukrainian Exclusive Letters: `І і`, `Ї ї` (100% exclusive to Ukrainian), `Є є` (faces right), `Ґ ґ` (upturned hook); (2) Russian Exclusive Letters: `Ы ы`, `Э э` (faces left), `Ъ ъ`, `Ё ё`; (3) Road Sign Vocabulary & Suffixes: Street `Улица (ул.)` [RU] vs `Вулиця (вул.)` [UA], City `Город (г.)` [RU] vs `Місто (м.)` [UA], Suffixes `-ский` [RU] vs `-ський` [UA], Kyiv `Киев` vs `Київ`; (4) Other Cyrillic Scripts: Belarusian `Ў ў`, Serbian/Montenegrin `Ј, Љ, Њ, Ђ, Ћ, Џ`, Macedonian `Ѓ, Ќ, Ѕ`, Bulgarian vocalic `Ъ`, Kazakh `Ә, Ғ, Қ, Ң, Ө, Ұ, Ү, І`, Kyrgyz/Mongolian `Ө, Ү, Ң`.",
                "tags": [
                    "语言",
                    "西里尔字母",
                    "东欧"
                ]
            },
            {
                "id": "greek-cyrillic-chart",
                "titleZh": "非俄语西里尔字母识别指南（乌/白俄/保/塞/马其顿/哈/吉/蒙）",
                "titleEn": "Know Your Cyrillic: Field Guide for Non-Russian Cyrillic Scripts",
                "image": "assets/images/infographics/greek_cyrillic_chart.png",
                "descZh": "【10国西里尔字母横向对比总表】涵盖图中全部10面国旗的专属识别字母：①俄罗斯 `Ё, Ъ, Ы, Э`；②乌克兰 `Ґ, Є, І, Ї`；③白俄罗斯 `І, Ў`（带弯钩的短音У）；④塞尔维亚/黑山 `Ђ, Ј, Љ, Њ, Ћ, Џ`；⑤北马其顿 `Ѓ, Ѕ, Ј, Љ, Њ, Ќ, Џ`（注意带尖音符的 `Ѓ, Ќ`）；⑥保加利亚（无特殊衍生字母，词中高频使用 `Ъ` 作元音，如 `България`）；⑦吉尔吉斯与蒙古共用 `Ң, Ө, Ү`；⑧哈萨克斯坦在此基础上额外多出 `Ә, Ғ, Қ, Ұ, Һ, І`；⑨塔吉克斯坦 `Ғ, Й, Қ, Ӯ, Ҳ, Ҷ`（独有带横杠 `Ӯ`）；⑩乌兹别克斯坦（旧西里尔拼写）`Ў, Ғ, Қ, Ҳ`。",
                "descEn": "Comprehensive 10-flag Cyrillic comparison chart: (1) Russian `Ё, Ъ, Ы, Э`; (2) Ukrainian `Ґ, Є, І, Ї`; (3) Belarusian `І, Ў`; (4) Serbian/Montenegrin `Ђ, Ј, Љ, Њ, Ћ, Џ`; (5) Macedonian `Ѓ, Ѕ, Ј, Љ, Њ, Ќ, Џ`; (6) Bulgarian (uses standard 30 letters with frequent internal vowel `Ъ` as in `България`); (7) Kyrgyz & Mongolian `Ң, Ө, Ү`; (8) Kazakh adds `Ә, Ғ, Қ, Ұ, Һ, І`; (9) Tajik `Ғ, Й, Қ, Ӯ, Ҳ, Ҷ` (unique macron `Ӯ`); (10) Uzbek Cyrillic `Ў, Ғ, Қ, Ҳ`.",
                "tags": [
                    "语言",
                    "西里尔字母",
                    "字母辨识"
                ]
            },
            {
                "id": "se-asian-scripts",
                "titleZh": "东南亚五大文字对比（缅甸文、泰文、老挝文、高棉文、越南文）",
                "titleEn": "Southeast Asian Scripts Comparison (Burmese, Thai, Lao, Khmer, Vietnamese)",
                "image": "assets/images/infographics/se_asian_scripts.png",
                "descZh": "东南亚五国文字高分辨率视觉对比：①缅甸文（Burmese）：由大量完整的纯圆圈与C形半圆拼接；②泰文（Thai）：字体方正挺拔，笔画末端带封闭小圆圈（圈头），转折多硬角；③老挝文（Lao）：与泰文同源但笔画更圆润弯曲、圆圈偏大、无刚硬直线；④高棉文/柬埔寨文（Khmer）：字母顶部有极具辨识度的波浪锯齿状冠头，下方常挂小脚字；⑤越南文（Vietnamese）：唯一使用拉丁字母叠加双重变音符号（Đ, Ă, Â, Ê, Ô, Ơ, Ư）。",
                "descEn": "High-res visual comparison of 5 Southeast Asian scripts: Burmese (circular bubble letters), Thai (upright with tiny terminal loops and sharp corners), Lao (curvier, looser loops than Thai), Khmer (wavy/zig-zag top crowns and subscript characters), and Vietnamese (Latin script with stacked diacritics).",
                "tags": [
                    "语言",
                    "东南亚",
                    "文字"
                ]
            },
            {
                "id": "india-scripts-map",
                "titleZh": "印度各邦 22 种官方语言与书写文字系统分布图",
                "titleEn": "Writing Scripts of India's 22 Scheduled Languages Map",
                "image": "assets/images/infographics/india_scripts_map.jpg",
                "descZh": "印度分邦（Region-guessing India）第一性原理——看头顶横线与字形圆润度：①北方天城文区（Devanagari，带连续平直顶线）：印地语（北方诸邦）与马拉地语（马哈拉施特拉邦，常见特色字母 ळ）；②东部：孟加拉-阿萨姆文（西孟加拉与阿萨姆邦，带顶线且多三角形折角）、奥里亚文（Odia，奥里萨邦，无平顶线但每个字母头顶有圆弧雨伞盖！）；③西部：古吉拉特文（Gujarati，酷似天城文但完全去掉了头顶横线！）、古木基文（旁遮普邦）；④南部达罗毗荼四大圆圈文字（无连续顶线）：泰卢固文（安得拉/特伦甘纳，圆肚配小对勾 ✓）、卡纳达文（卡纳塔克邦，圆肚配横眉 T）、马拉雅拉姆文（喀拉拉邦，密集双环花生圈）、泰米尔文（泰米尔纳德邦，方圆结合最简练）。",
                "descEn": "Regional guide to India's writing scripts: North/Central Devanagari (continuous top bar) vs. Gujarati (looks like Devanagari without the top bar) vs. Bengali/Assamese (top bar + angular triangles) vs. Odia (curved umbrella roofs) vs. South Indian rounded Dravidian scripts: Telugu (checkmarks), Kannada (T-shaped top bars), Malayalam (double loops), and Tamil (clean boxy-loop mix).",
                "tags": [
                    "语言",
                    "文字",
                    "大国地区"
                ]
            },
            {
                "id": "geoguessr-map-of-references",
                "titleZh": "GeoGuessr 全球国家级梗与标志性线索手绘全图 (Map of References)",
                "titleEn": "The GeoGuessr Map of References (Illustrated World Meta Atlas)",
                "image": "assets/images/infographics/geoguessr_map_of_references.jpg",
                "descZh": "社区画师 Choekaas 创作的殿堂级《GeoGuessr 全球梗图百科》，将 100+ 国家的灵魂 Meta 浓缩为趣味手绘插画标注在地图上：如肯尼亚涉水喉（Snorkel）、尼日利亚警车护航（Follow Car）、塞内加尔与黑山天空裂痕（Rift）、加纳车顶架黑胶带（Black Tape）、蒙古车顶行李包与蒙古包、危地马拉车顶架、瑞士与日本低机位（Lowcam）、冰岛黄护柱、法罗群岛羊背街景等，兼具视觉记忆与实战复盘价值。",
                "descEn": "Iconic community artwork by Choekaas illustrating 100+ signature country metas directly on the world map—including Kenya's snorkel, Nigeria's follow car, Ghana's black tape, Senegal & Montenegro sky rifts, Mongolia's roof tent & yurts, Switzerland/Japan lowcam, and Faroe Islands sheep view.",
                "tags": [
                    "核心Meta",
                    "全球速查",
                    "全球地图"
                ]
            },
            {
                "id": "world-flags-map",
                "titleZh": "世界各国国旗疆域全览图 (World Flag Map)",
                "titleEn": "World Flag Map (National Flags Overlaid on Country Borders)",
                "image": "assets/images/infographics/world_flags_map.png",
                "descZh": "将全球各国国旗直接镶嵌在其地理疆域轮廓内的高清世界地图。配合本页“全球国旗口诀 (114面)”视图一起使用，可快速建立“国旗色块构图 ↔ 地理疆域与邻国色系圈”（如北欧十字旗圈、泛斯拉夫红白蓝圈、泛非红黄绿圈、中美洲蓝白蓝圈、阿拉伯红白黑绿圈）的空间直觉。",
                "descEn": "World map overlaying national flags onto country borders. Ideal for pairing with the 114 Flag Mnemonics view to build spatial memory of regional flag families (Nordic crosses, Pan-Slavic red-white-blue, Pan-African red-yellow-green, Central American blue-white-blue, and Pan-Arab colors).",
                "tags": [
                    "国旗",
                    "全球地图",
                    "全球速查"
                ]
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
