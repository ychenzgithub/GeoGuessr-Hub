import re, json

with open('GeoGuessr/Flag 357e4db74b0380c881b9e7cf93ea60da.md', 'r', encoding='utf-8') as f:
    text = f.read()

sections = re.split(r'\n#\s+', text)
flag_groups = []

for sec in sections[1:]:
    lines = sec.strip().split('\n')
    region_title = lines[0].strip()
    
    items = []
    current_sub = ""
    for l in lines[1:]:
        l_str = l.strip()
        if not l_str:
            continue
        if l_str.startswith("## "):
            current_sub = l_str[3:].strip()
            continue
        if l_str.startswith("- "):
            items.append({
                "subgroup": current_sub,
                "text": l_str[2:].strip()
            })
            
    flag_groups.append({
        "region": region_title,
        "items": items
    })

print(f"Extracted {len(flag_groups)} flag regions:")
for g in flag_groups:
    print(f" - {g['region']}: {len(g['items'])} flags")
