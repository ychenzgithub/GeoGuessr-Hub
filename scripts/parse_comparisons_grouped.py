import re, json

with open('GeoGuessr/国家比较 301e4db74b0380a8a678ef2c8667a7cc.md', 'r', encoding='utf-8') as f:
    content = f.read()

sections = re.split(r'\n###\s+', content)

parsed = []
for sec in sections[1:]:
    lines = sec.strip().split('\n')
    title = lines[0].strip()
    
    similarities = []
    features = []
    current_feature = None
    
    for l in lines[1:]:
        raw = l.strip()
        if not raw:
            continue
        
        # Check if similarity
        if any(raw.startswith(k) for k in ["- 类似点", "- 相似点", "- 共同点", "• 类似点", "• 相似点", "• 共同点"]):
            similarities.append(raw.split("：", 1)[-1].split(":", 1)[-1].strip())
            continue
            
        # Top-level item starting with '- '
        if l.startswith("- ") or l.startswith("• "):
            feat_name = raw[2:].strip().rstrip("：:")
            # If it already contains country details, e.g. "- 乌克兰的路边护栏或路灯杆..."
            if " VS " in title and any(c in feat_name for c in ["：", ":"]):
                # contains content directly
                current_feature = {"name": "细节特征", "details": [feat_name]}
                features.append(current_feature)
            else:
                current_feature = {"name": feat_name, "details": []}
                features.append(current_feature)
        elif l.startswith("    - ") or l.startswith("    • ") or l.startswith("        - "):
            detail = raw.strip("- •")
            if current_feature:
                current_feature["details"].append(detail)
            else:
                current_feature = {"name": "通用", "details": [detail]}
                features.append(current_feature)
        else:
            if current_feature and current_feature["details"]:
                current_feature["details"][-1] += " " + raw
            elif current_feature:
                current_feature["details"].append(raw)
                
    parsed.append({
        "title": title,
        "similarities": similarities,
        "features": features
    })

print(f"Parsed {len(parsed)} comparison cards")
for p in parsed[:2]:
    print("CARD:", p["title"])
    print("Similarities:", p["similarities"])
    for f in p["features"][:4]:
        print("  - Feature:", f["name"])
        for d in f["details"]:
            print("      ", d)
