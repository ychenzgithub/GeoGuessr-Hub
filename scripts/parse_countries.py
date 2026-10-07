import re, json

with open('GeoGuessr/各国特征 2fae4db74b03807190a4c6fb6627e32c.md', 'r', encoding='utf-8') as f:
    text = f.read()

# continent mapping dictionary
CONTINENT_MAP = {
    "Albania": ("Europe", "🇦🇱"),
    "American Samoa": ("Oceania", "🇦🇸"),
    "Andorra": ("Europe", "🇦🇩"),
    "Argentina": ("South America", "🇦🇷"),
    "Australia": ("Oceania", "🇦🇺"),
    "Austria": ("Europe", "🇦🇹"),
    "Bangladesh": ("Asia", "🇧🇩"),
    "Belgium": ("Europe", "🇧🇪"),
    "Bermuda": ("North America", "🇧🇲"),
    "Bhutan": ("Asia", "🇧🇹"),
    "Bolivia": ("South America", "🇧🇴"),
    "Bosnia and Herzegovina": ("Europe", "🇧🇦"),
    "Botswana": ("Africa", "🇧🇼"),
    "Brazil": ("South America", "🇧🇷"),
    "Bulgaria": ("Europe", "🇧🇬"),
    "Cambodia": ("Asia", "🇰🇭"),
    "Canada": ("North America", "🇨🇦"),
    "Chile": ("South America", "🇨🇱"),
    "Colombia": ("South America", "🇨🇴"),
    "Costa Rica": ("North America", "🇨🇷"),
    "Croatia": ("Europe", "🇭🇷"),
    "Curaçao": ("North America", "🇨🇼"),
    "Cyprus": ("Europe", "🇨🇾"),
    "Czechia": ("Europe", "🇨🇿"),
    "Czech Republic": ("Europe", "🇨🇿"),
    "Denmark": ("Europe", "🇩🇰"),
    "Dominican Republic": ("North America", "🇩🇴"),
    "Ecuador": ("South America", "🇪🇨"),
    "Estonia": ("Europe", "🇪🇪"),
    "Faroe Islands": ("Europe", "🇫🇴"),
    "Finland": ("Europe", "🇫🇮"),
    "France": ("Europe", "🇫🇷"),
    "Germany": ("Europe", "🇩🇪"),
    "Ghana": ("Africa", "🇬🇭"),
    "Greece": ("Europe", "🇬🇷"),
    "Greenland": ("North America", "🇬🇱"),
    "Guam": ("Oceania", "🇬🇺"),
    "Guatemala": ("North America", "🇬🇹"),
    "Hungary": ("Europe", "🇭🇺"),
    "Iceland": ("Europe", "🇮🇸"),
    "India": ("Asia", "🇮🇳"),
    "Indonesia": ("Asia", "🇮🇩"),
    "Ireland": ("Europe", "🇮🇪"),
    "Isle of Man": ("Europe", "🇮🇲"),
    "Israel": ("Asia", "🇮🇱"),
    "Italy": ("Europe", "🇮🇹"),
    "Japan": ("Asia", "🇯🇵"),
    "Jordan": ("Asia", "🇯🇴"),
    "Kazakhstan": ("Asia", "🇰🇿"),
    "Kenya": ("Africa", "🇰🇪"),
    "Kyrgyzstan": ("Asia", "🇰🇬"),
    "Laos": ("Asia", "🇱🇦"),
    "Latvia": ("Europe", "🇱🇻"),
    "Lebanon": ("Asia", "🇱🇧"),
    "Lesotho": ("Africa", "🇱🇸"),
    "Liechtenstein": ("Europe", "🇱🇮"),
    "Lithuania": ("Europe", "🇱🇹"),
    "Luxembourg": ("Europe", "🇱🇺"),
    "Madagascar": ("Africa", "🇲🇬"),
    "Malaysia": ("Asia", "🇲🇾"),
    "Malta": ("Europe", "🇲🇹"),
    "Mexico": ("North America", "🇲🇽"),
    "Monaco": ("Europe", "🇲🇨"),
    "Mongolia": ("Asia", "🇲🇳"),
    "Montenegro": ("Europe", "🇲🇪"),
    "Namibia": ("Africa", "🇳🇦"),
    "Netherlands": ("Europe", "🇳🇱"),
    "New Zealand": ("Oceania", "🇳🇿"),
    "Nigeria": ("Africa", "🇳🇬"),
    "North Macedonia": ("Europe", "🇲🇰"),
    "Northern Mariana Islands": ("Oceania", "🇲🇵"),
    "Norway": ("Europe", "🇳🇴"),
    "Oman": ("Asia", "🇴🇲"),
    "Panama": ("North America", "🇵🇦"),
    "Paraguay": ("South America", "🇵🇾"),
    "Peru": ("South America", "🇵🇪"),
    "Philippines": ("Asia", "🇵🇭"),
    "Poland": ("Europe", "🇵🇱"),
    "Portugal": ("Europe", "🇵🇹"),
    "Puerto Rico": ("North America", "🇵🇷"),
    "Qatar": ("Asia", "🇶🇦"),
    "Réunion": ("Africa", "🇷🇪"),
    "Romania": ("Europe", "🇷🇴"),
    "Russia": ("Europe", "🇷🇺"),
    "Rwanda": ("Africa", "🇷🇼"),
    "San Marino": ("Europe", "🇸🇲"),
    "Senegal": ("Africa", "🇸🇳"),
    "Serbia": ("Europe", "🇷🇸"),
    "Singapore": ("Asia", "🇸🇬"),
    "Slovakia": ("Europe", "🇸🇰"),
    "Slovenia": ("Europe", "🇸🇮"),
    "South Africa": ("Africa", "🇿🇦"),
    "South Korea": ("Asia", "🇰🇷"),
    "Spain": ("Europe", "🇪🇸"),
    "Sri Lanka": ("Asia", "🇱🇰"),
    "Sweden": ("Europe", "🇸🇪"),
    "Switzerland": ("Europe", "🇨🇭"),
    "Taiwan": ("Asia", "🇹🇼"),
    "Thailand": ("Asia", "🇹🇭"),
    "Tunisia": ("Africa", "🇹🇳"),
    "Turkey": ("Europe", "🇹🇷"),
    "UAE": ("Asia", "🇦🇪"),
    "Uganda": ("Africa", "🇺🇬"),
    "Ukraine": ("Europe", "🇺🇦"),
    "United Kingdom": ("Europe", "🇬🇧"),
    "United States": ("North America", "🇺🇸"),
    "Uruguay": ("South America", "🇺🇾"),
    "US Virgin Islands": ("North America", "🇻🇮"),
    "Vietnam": ("Asia", "🇻🇳")
}

items = []
current_section = ""
for line in text.split("\n"):
    line = line.strip()
    if line.startswith("### "):
        current_section = line[4:].strip("* ")
        continue
    if not line.startswith("- "):
        continue
    
    # parse country item
    raw = line[2:].strip()
    # Check for markdown link: [**Name**](url) or [Name](url)
    link = ""
    name_zh = ""
    name_en = ""
    desc = ""
    
    # Check [**Name](url) (ZH)**: or [Name](url): etc
    m = re.match(r'\[([^\]]+)\]\(([^)]+)\)\s*(?:\(([^)]+)\))?\s*[:：]?\s*(.*)', raw)
    if m:
        n_part, link, zh_part, rest = m.groups()
        name_en = n_part.replace("*", "").strip()
        name_zh = (zh_part or "").replace("*", "").strip()
        desc = rest.strip("*: ")
    else:
        # Standard: **Name (ZH)**: or **Name**:
        m2 = re.match(r'\*\*([^*]+)\*\*[:：]\s*(.*)', raw)
        if m2:
            n_part, rest = m2.groups()
            desc = rest.strip()
            # check if n_part has parentheses
            m_p = re.search(r'[\(（]([^\)）]+)[\)）]', n_part)
            if m_p:
                name_zh = m_p.group(1).strip()
                name_en = re.sub(r'[\(（][^\)）]+[\)）]', '', n_part).strip()
            else:
                name_en = n_part.strip()
        else:
            # Maybe without bold: Name (ZH): or Name:
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

    # Clean name_en
    name_en = name_en.replace("[", "").replace("]", "").replace("*", "").strip()
    # Check if name_zh was in desc or name_en
    if not name_zh and "(" in desc[:20]:
        m_zh = re.match(r'^\(?([^\)）]+)[\)）]\s*[:：*]*\s*(.*)', desc)
        if m_zh:
            name_zh = m_zh.group(1).strip("* ")
            desc = m_zh.group(2).strip()
            
    # Handle pure Chinese name like "列支敦士登"
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
        
    continent, flag = CONTINENT_MAP.get(name_en, ("Other", "🌍"))
    
    # Extract tags from desc
    tags = []
    if "左" in desc or "左行" in desc or "左侧行驶" in desc:
        tags.append("左行")
    if "车牌" in desc or "蓝条" in desc or "黄牌" in desc:
        tags.append("车牌Meta")
    if "电线杆" in desc or "梯子" in desc or "绝缘" in desc:
        tags.append("电线杆")
    if "路缘" in desc or "护柱" in desc or "雪迹杆" in desc or "Bollard" in desc:
        tags.append("路缘标")
    if "街景车" in desc or "皮卡" in desc or "天线" in desc or "后视镜" in desc or "断裂天空" in desc:
        tags.append("街景车/相机")
    if "红土" in desc:
        tags.append("红土")
    if "中线" in desc or "边线" in desc:
        tags.append("道路标线")
    if "语言" in desc or "字母" in desc:
        tags.append("语言文字")
        
    items.append({
        "id": re.sub(r'[^a-zA-Z0-9]+', '-', name_en.lower()).strip('-'),
        "nameEn": name_en,
        "nameZh": name_zh,
        "continent": continent,
        "flag": flag,
        "link": link,
        "desc": desc,
        "tags": tags
    })

print(f"Parsed {len(items)} countries from 各国特征")
for it in items[:6]:
    print(f"[{it['flag']}] {it['nameEn']} ({it['nameZh']}) [{it['continent']}]: {it['desc'][:50]}... Tags: {it['tags']}")

with open('/tmp/parsed_countries.json', 'w', encoding='utf-8') as f:
    json.dump(items, f, indent=2, ensure_ascii=False)
