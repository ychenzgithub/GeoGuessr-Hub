import re, json

with open('GeoGuessr/国家比较 301e4db74b0380a8a678ef2c8667a7cc.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Split by '### '
sections = re.split(r'\n###\s+', content)
print(f"Total comparison sections found: {len(sections)-1}")

comparisons = []
for sec in sections[1:]:
    lines = sec.strip().split('\n')
    title = lines[0].strip()
    
    # Title could be: "荷兰 VS 卢森堡" or "【波罗的海三国】爱沙尼亚 VS 拉脱维亚 VS 立陶宛"
    items = []
    similarities = []
    
    current_key = "General"
    current_sub = []
    
    for l in lines[1:]:
        l_str = l.strip()
        if not l_str:
            continue
        if l_str.startswith("- ") or l_str.startswith("• "):
            # Top-level bullet
            line_body = l_str[2:].strip()
            if "类似点" in line_body or "相似点" in line_body or "共同点" in line_body:
                similarities.append(line_body)
            else:
                items.append(line_body)
        elif l_str.startswith("    - ") or l_str.startswith("    • ") or l_str.startswith("        - "):
            # Sub-bullet, attach to last item
            sub_body = l_str.strip("- •")
            if items:
                items[-1] += "\n• " + sub_body
            else:
                items.append(sub_body)
        else:
            if items:
                items[-1] += " " + l_str

    comparisons.append({
        "title": title,
        "similarities": similarities,
        "points": items
    })

print("Parsed comparisons count:", len(comparisons))
for c in comparisons[:3]:
    print("----------------------------------------")
    print(c["title"])
    print("Similarities:", c["similarities"])
    print("Points count:", len(c["points"]))
    for p in c["points"][:2]:
        print("  - ", p[:80])
