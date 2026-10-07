import re, json

with open('GeoGuessr/大国地区 2ffe4db74b03809699f1e1093f64fce5.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Split by top country headers '### '
# Notice some subsections also start with '### ' or '#### '
# Let's inspect country names
countries_order = [
    "俄罗斯", "挪威", "印尼", "马来西亚", "菲律宾", "巴西", "澳大利亚",
    "加拿大", "新西兰", "越南", "突尼斯", "印度", "土耳其", "墨西哥",
    "日本", "哈萨克斯坦", "吉尔吉斯斯坦", "蒙古", "美国", "泰国", "南非"
]

country_blocks = {}
current_country = None
current_lines = []

for line in content.split('\n'):
    l_str = line.strip()
    found_c = None
    for c in countries_order:
        if l_str == f"### {c}" or l_str == f"## {c}":
            found_c = c
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

print(f"Extracted {len(country_blocks)} regional countries:")
for c, text in country_blocks.items():
    print(f" - {c}: {len(text.splitlines())} lines")
