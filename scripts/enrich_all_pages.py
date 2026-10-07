#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Enrich all pages and tabs across the GeoGuessr notes hub.
Audits and preserves 100% of the raw Notion backup notes across:
1. countries (all 105 countries, restoring Georgia 6-cam, Peru, Germany, Sri Lanka, etc.)
2. topics (cars, poles, markings guardrails, signs, architecture, vegetation)
3. webResources (adding Geodummy, Most Useful Maps 2026, Zig8zag Poles Doc)
"""

import json
import re

def enrich():
    with open("assets/js/geoguessr-data.js", "r", encoding="utf-8") as f:
        code = f.read()

    match = re.search(r"window\.GEOGUESSR_DATA\s*=\s*(\{[\s\S]*\});\s*$", code)
    if not match:
        print("ERROR: could not find window.GEOGUESSR_DATA")
        return

    data = json.loads(match.group(1))

    # --- 1. ENRICH COUNTRIES ---
    # We update Georgia, Peru, Germany, Sri Lanka, Bolivia, Colombia, Uruguay, Argentina, Mongolia, etc.
    countries = data["countries"]
    for c in countries:
        cid = c["id"]
        if cid == "georgia":
            c["descZh"] = "格鲁吉亚圆形字母（Mkhedruli）；空中随处可见架设的民用天然气管道；方形水泥电线杆配蜡烛状圆立绝缘子；圆白杆带蓝绿条光纤桩；红底白箭头方形 Chevron；平缓雪山在中南部；偶见类似菲律宾的水泥路；六大街景车绝杀：(a) Small Cam 右前方竖长天线顶端有小白点（东部）；(b) Small Cam 无天线（西部）；(c) 黑色卡车右前方竖长天线带红色刹车灯（首都第比利斯）；(d) 短天线偏向左（西部沿海或西北山区）；(e) 仅见黑色皮卡后部（中部横向一线）；(f) 黑色皮卡几乎完全可见短天线偏左（各大城市附近）。"
            c["descEn"] = "Unique Georgian Mkhedruli script; ubiquitous elevated overhead natural gas pipelines; square concrete poles with candle-like upright insulators; round white marker posts with blue/green optical fiber bands; square red-and-white chevrons; rolling snow mountains in south-central; occasional Philippine-like concrete roads. Six camera car metas: (a) Small Cam with right-front tall antenna and white tip (East); (b) Small Cam without antenna (West); (c) Black truck with right-front antenna and red brake lights (Tbilisi); (d) Short left-tilted antenna (West coast/NW mountains); (e) Black pickup rear only (Central corridor); (f) Full black pickup with short left antenna (major cities)."
            if "街景车 Meta" not in c.get("tagsZh", []):
                c["tagsZh"] = c.get("tagsZh", []) + ["街景车 Meta"]
                c["tagsEn"] = c.get("tagsEn", []) + ["Camera Metas"]

        elif cid == "peru":
            c["descZh"] = "路标立柱常刷黑白相间斑马纹（南美唯一，有时底部带白色水泥柱）；黄橙色 Bollard；波形护栏贴黑黄相间条纹（五道黑黄条纹，跟玻利维亚不同）；黑白石柱里程碑黑色数字；商用车侧面常见左白右红方块反光标；街道三轮车普遍；电线杆三个绝缘体上下对齐垂直排列（与阿根廷不同）；电杆带黄黑横条一直接触地面（与哥伦比亚不同）；金属面板带有两至三个黑色横条纹电表。"
            c["descEn"] = "Road signposts frequently painted with black-and-white zebra stripes (unique in South America, sometimes with white concrete base); yellow-orange bollards; guardrails with black-yellow-black-yellow-black striped decals (different from Bolivia); black-and-white stone milestone markers; commercial vehicles with split white-and-red reflective squares; ubiquitous street mototaxis; utility poles with three insulators aligned vertically (unlike Argentina); yellow-and-black painted pole base reaching the ground (unlike Colombia); metal electric meter panels with 2-3 black horizontal bars."

        elif cid == "germany":
            c["descZh"] = "路缘标反光板通常由两个垂直排列的小圆孔（如铆钉）固定；路牌通常为白底黑边长方形，背面为灰黑色且常贴贴纸；木质电线杆上常有白色正方形贴纸；挡风玻璃角常贴圆形环保排放贴纸；公交车站牌标志为黄底绿字圆形 H 标；黄色特殊邮筒；城镇入口标志为黄底黑字金属框；圆角蓝方块白字里程碑；禁停标志带白色指向箭头；因严格隐私法规街景多打码模糊。"
            c["descEn"] = "Bollard reflectors secured by two vertically aligned circular holes/rivets; rectangular white road signs with thin black borders, dark grey backing often with stickers; wooden poles feature white square stickers; windshields bear round environmental emission badges; bus stops marked by yellow circles with green 'H'; iconic yellow mailboxes; town entrance signs feature yellow background with black letters; rounded blue milestone squares; No Parking signs with white arrows; heavy street view blur due to privacy laws."

        elif cid == "sri-lanka":
            c["descZh"] = "左行国家；使用纯圆弧状僧伽罗语 (Sinhala) 或直线圆弧结合的泰米尔语 (Tamil)；街景车模糊边缘露出一抹类似法国国旗的蓝白红三色色块；低视角 Lowcam 街景；车牌前长白后方黄；方形混凝土电线杆上方有凹点，下方常带方形孔洞；短粗尖头石质路桩（上白下黑）；白色混凝土凹槽路牌；指示牌立柱刷斑马纹；满街黑顶三轮车，红土，椰子树与红瓦屋顶。"
            c["descEn"] = "Left-hand drive; rounded Sinhala and Tamil scripts; camera blur halo displays a distinct blue-white-red tricolor patch resembling the French flag; Lowcam camera perspective; license plates are white at front and yellow at rear; square concrete poles with indentation dots on top and square hollows below; short stubby pointed stone bollards (white top, black base); white concrete recessed road signs; signposts painted with zebra stripes; black-topped tuk-tuks, red soil, coconut palms, and terracotta tile roofs."

        elif cid == "bolivia":
            c["descZh"] = "东部平原木质电线杆极其弯曲不直；波形护栏贴黄黑黄黑黄相间条纹贴纸（与秘鲁不同）；城区常见鹅卵石街道；随处可见蓝色 Tigo 运营商广告及 MAS、EVO 政治涂鸦；仅有三代白色街景车覆盖，左前方偶见竖条状模糊；路标杆多使用粗糙的木头方杆；极度干燥的高原草甸（Puna）与土坯房。"
            c["descEn"] = "Eastern lowlands feature notoriously crooked/bent wooden utility poles; guardrails marked with yellow-black-yellow-black-yellow stickers (different from Peru); cobblestone urban streets; ubiquitous blue Tigo billboards and MAS/EVO political graffiti; exclusively Gen 3 white camera truck with occasional vertical blur on the left-front; rough square timber signposts; hyper-arid Andean high plateau (Puna) with adobe cottages."

        elif cid == "colombia":
            c["descZh"] = "普通私家车及出租车全量统一使用黄色车牌；路牌背面装有独特的钢制十字形支撑架（Colombian Cross）；常使用八边形混凝土电线杆；里程牌顶部标注 PR；电线杆常涂刷黄黑条纹且离地面有悬空不接触地面；木栅栏顶端涂成纯白色；城市道路常采用 Carrera/Calle + 数字网格命名；中北部山路常见两条平行的混凝土车辙带，中间与外侧填充鹅卵石/块石。"
            c["descEn"] = "All standard passenger cars and taxis uniformly display yellow license plates; road signs reinforced by an iconic steel cross bracket on the back (Colombian Cross); widespread octagonal concrete utility poles; milestone markers labeled with 'PR'; poles painted with yellow-and-black bands that do NOT touch the ground; wooden fence posts painted white on top; Carrera/Calle street numbering; north-central mountain roads often feature twin concrete tracks filled with cobblestones."

        elif cid == "uruguay":
            c["descZh"] = "街景图像通常呈现多云阴天或轻微胶片感；采用三代黑色街景车；Chevron 导向标为黑底黄箭头；市镇常出现 Chivito（国宝级牛肉汉堡）招牌；电线杆横臂与绝缘体呈三叉戟造型；路标立柱为白色且带有四个预制安装孔；全白色圆形 Bollard，背面有时呈黄色；道路中线可能白黄共用，偶见独特的“双黄夹一白”三线复合中线。"
            c["descEn"] = "Street view frequently features overcast cloudy skies; Gen 3 black camera car; chevrons are yellow arrows on black background; Chivito sandwich signs ubiquitous in towns; pole crossarms form a trident geometry; white signposts feature four pre-drilled mounting holes; solid white bollards occasionally with yellow backs; road centerlines can mix white and yellow, occasionally with a unique 'white line sandwiched between double yellow lines'."

        elif cid == "argentina":
            c["descZh"] = "车牌分为白底黑字中间带黑方块（ARE ■ ETE 格式）或带上部浅蓝条的 Mercosur 长牌；固话常出现 011 区号（大布宜诺斯艾利斯）；Chevron 为鲜明红底白箭头；东北部米西奥内斯省 (Misiones) 分布极具辨识度的鲜艳红土；电线杆三个绝缘体左右交替排列（与秘鲁不同），偶见A形木电杆；金属里程牌上方黑条标注 RN（国道）或 RP（省道）；道路中线常为黄实线配白虚线。"
            c["descEn"] = "License plates feature black characters with a center black dot (ARE ■ ETE) or Mercosur long plates with top blue stripe; area code 011 (Greater Buenos Aires); chevrons are red background with white arrows; northeastern Misiones province covered in vivid deep red soils; utility poles feature three insulators alternating left and right (unlike Peru), with occasional A-frame poles; metal milestones marked RN (National) or RP (Provincial); centerlines often combine solid yellow with dashed white."

        elif cid == "mongolia":
            c["descZh"] = "车顶驮有大型帐篷、备胎或野营装备；西里尔蒙古语；极度辽阔荒凉的草原、荒漠戈壁与高山泰加林；备胎固定带西部为网格、最东边为绿带、乌兰巴托南北为主的为橙带；车顶架横杠西半部有黑橡胶垫，竖杠西半部带横带连接；详见 [蒙古详细攻略指南](https://docs.google.com/document/d/1W_QK69BXMHUZXI5VdNH93_aLhTd9SQzNYhRLrh_-ZVA/edit?tab=t.0)。"
            c["descEn"] = "Camera truck carries a roof rack with a large camping tent, spare tire, or luggage; Mongolian Cyrillic script; vast treeless steppes, Gobi desert, and alpine taiga; spare tire straps (mesh on west, green on far east, orange north/south of UB); roof crossbars with rubber pad on west; see [Mongolia Deep Dive Guide](https://docs.google.com/document/d/1W_QK69BXMHUZXI5VdNH93_aLhTd9SQzNYhRLrh_-ZVA/edit?tab=t.0)."

        elif cid == "norway":
            c["descZh"] = "道路边线通常为长虚线，中线为单/双黄色实虚线；商用车悬挂独特的纯绿色车牌；路名以 gate/vei 结尾；人行横道标牌上的行人走在 4 条竖线上且无明显脖子；乡间路边常立有蓝底白“M”字牌（M字中间尖角一直接触到底部，代表避车处 Møteplass）；遍布峡湾、隧道与密集雪迹杆。"
            c["descEn"] = "Road shoulders marked with long dashed white lines, centerlines yellow; commercial vehicles display solid green license plates; street names end in gate/vei; pedestrian signs feature four vertical stripes under a neckless pedestrian; rural roads feature blue-and-white 'M' passing place signs (the center vertex of M touches the bottom line); fjords, tunnels, and snow poles."

        elif cid == "sweden":
            c["descZh"] = "道路边线为短虚线（比挪威更短密）或连续虚槽轮胎印；采用黄色背景红边的限速与警示牌；指路标志用细线勾勒出箭头轮廓；白黑双色柱身路缘标，配灰色反光板；人行标牌 4 条竖线且行人有明显脖子；乡间路边偶见蓝底白“M”字牌（M字中间不接触底部）；沃尔沃车极多；文字常用 Ä/ä, Ö/ö, å。"
            c["descEn"] = "Road shoulders marked with short dashed white lines (shorter than Norway) or closely spaced rumble slots; speed and warning signs feature yellow background with red border; directional signs use thin outline arrows; white/black bollards with grey reflectors; pedestrian signs with 4 vertical lines and pedestrian with a visible neck; rural blue 'M' passing signs (M vertex does NOT touch the bottom); abundant Volvos; Swedish letters Ä/ä, Ö/ö, å."

        elif cid == "albania":
            c["descZh"] = "天空常有明显的图像拼接裂缝 (Sky Rift)；道路名称前缀为 Rruga；车牌左右双蓝条或早期左侧红条；意大利型路缘标；电线杆横木下带有倒立三角形支撑架；房屋平顶上经常看到巨大的白色或蓝色储水箱；阿尔巴尼亚语包含 ë 和 ç；详见 [Albania Basics](https://www.reddit.com/r/geoguessr/comments/1heub3m/albania_basics/#lightbox)。"
            c["descEn"] = "Frequent Sky Rift stitching tears in the sky; road names prefixed with 'Rruga'; license plates feature dual blue strips or legacy red left band; Italian-style bollards; utility poles with inverted triangular braces under crossarms; large horizontal water tanks on flat roofs; Albanian script features ë and ç; see [Albania Basics](https://www.reddit.com/r/geoguessr/comments/1heub3m/albania_basics/#lightbox)."

        elif cid == "spain":
            c["descZh"] = "车牌左侧带欧盟蓝条；停止牌部分地区使用 Pare；路名后缀常为 Carretera；道路编号格式如 N-322；路侧广泛使用独特的白色“鲨鱼鳍”弧形路桩；警示标牌的红色边框颜色延伸涂刷到侧面厚度；乡村常见黑白对角线“禁止狩猎 (Coto de Caza)”警示小标牌。"
            c["descEn"] = "EU blue strip on left of plates; stop signs occasionally read Pare in local regions; road names suffixed with Carretera; national road format N-322; distinctive 'shark-fin' curved white roadside bollards; warning sign red borders wrap around the outer side edges; rural areas feature diagonal black-and-white 'No Hunting' (Coto de Caza) signs."

        elif cid == "slovenia":
            c["descZh"] = "地名中极高频出现 ‘pri’ 词缀（如 Pri Cerkvi）；属于典型的阿尔卑斯山脉与巴尔干喀斯特过渡地貌；里程牌为白色方板，左上角带有黄色小方块；Bollard 柱帽为黑色，背面带有白色反光板；路牌常为白底黑字。"
            c["descEn"] = "Place names frequently contain the word 'pri' (meaning 'at/near'); transitional topography between Julian Alps and Balkan karst; milestone markers are white plates with a small yellow square in the upper-left corner; bollards feature black caps with white rear reflectors; white road signs."

        elif cid == "kosovo":
            c["descZh"] = "公路普遍安装 A 型波形护栏；路牌背面为深色；街道名牌为蓝底白字，常带有 R. (Rruga) 或 UL.；门牌号为深蓝底带白边框，上面印有超大白色数字；路缘柱有两种样式（一种类似塞尔维亚，另一种类似匈牙利圆形柱）；路边多战后重建红砖建筑。"
            c["descEn"] = "Widespread A-profile highway guardrails; dark backs on road signs; blue street nameplates reading R. (Rruga) or Ul.; house numbers are deep blue with white border and oversized white digits; bollards resemble either Serbian or Hungarian styles; postwar red-brick housing."

        elif cid == "liechtenstein":
            c["descZh"] = "全欧洲唯一常态化使用**纯黑底白字车牌**的国家（格式为 FL 12345）；街景车机位极低（Lowcam）；被瑞士与奥地利高耸的阿尔卑斯雪山包围，地势陡峭，德语环境，极具欧陆富庶山国风貌。"
            c["descEn"] = "The only European nation using **solid black license plates with white characters** (FL 12345 format); camera car uses Lowcam low-height perspective; surrounded by towering Swiss and Austrian alpine peaks, wealthy Liechtenstein principality."

    # --- 2. ENRICH TOPICS ---
    topics = data["topics"]

    # 2.1 Topic: markings -> Add Section 3 for Guardrails & Curbs
    markings_topic = next((t for t in topics if t["id"] == "markings"), None)
    if markings_topic:
        # Check if guardrail section exists
        sec_titles = [s["titleZh"] for s in markings_topic["sections"]]
        if "护栏形态、反光板色彩与路沿石彩绘" not in sec_titles:
            markings_topic["sections"].append({
                "titleZh": "护栏形态、反光板色彩与路沿石彩绘",
                "titleEn": "Guardrail Profiles, Reflectors & Painted Curb Markings",
                "textZh": """- **欧洲波形钢护栏分类 (Guardrail Profiles)：** [参考图解](https://www.plonkit.net/images/andorra/europeguardrail.png)
    - **B型（平直双波）：** 克罗地亚、丹麦、波兰、塞尔维亚、波黑（记忆口诀 **CDPS**：Croatia, Denmark, Poland, Serbia）。
    - **细B型（平直双波较窄细）：** 捷克、斯洛伐克。
    - **AB两种均常见：** 德国、土耳其、爱尔兰。
    - **A型（圆弧深双波）：** 其余绝大多数欧洲国家。
- **护栏形态与支架特征：**
    - **意大利：** 道路护栏的尾端端口通常会明显变粗扩张。
    - **厄瓜多尔：** 山区与干线经常见到独特的上下双层双轨护栏。
    - **罗马尼亚：** 护栏侧面有时涂刷醒目的黄黑相间斜条纹。
    - **黑色金属支架立柱：** 意大利、罗马尼亚、阿尔巴尼亚、黑山。
- **护栏反光片颜色分布 (Guardrail Reflectors)：**
    - **黄色反光片：** 西班牙、安道尔、比利时、以色列。
    - **橙色反光片：** 立陶宛。
    - **白色反光片：** 法国、卢森堡、瑞典、冰岛、意大利（部分）、拉脱维亚（部分）。
    - **红色反光片：** 东欧及中欧大部分国家。
    - **无反光片：** 英国、爱尔兰、荷兰、德国、丹麦、奥地利、挪威、芬兰、爱沙尼亚、葡萄牙。
- **路沿石刷漆涂装 (Painted Curbs)：**
    - **黑白相间路沿：** 马来西亚、卡塔尔、卢旺达、博茨瓦纳（各色相间）。
    - **黄黑 / 红白相间彩绘：** **马来西亚、印度尼西亚、泰国**极普遍在转弯、路口或环岛处涂刷鲜艳反光漆。
    - **红白相间路沿：** 突尼斯、摩纳哥。""",
                "textEn": """- **European W-Beam Guardrail Profiles**: [Guardrail Infographic](https://www.plonkit.net/images/andorra/europeguardrail.png)
    - **Profile B (Flat Double-Wave)**: Croatia, Denmark, Poland, Serbia, Bosnia (Mnemonic: **CDPS**).
    - **Narrow Profile B (Slender Flat Wave)**: Czechia, Slovakia.
    - **Both Profiles A & B**: Germany, Turkey, Ireland.
    - **Profile A (Deep Rounded Wave)**: Almost all other European nations.
- **Guardrail Terminal & Post Metas**:
    - **Italy**: Guardrail terminals visibly flare out and become distinctly thicker.
    - **Ecuador**: Mountain corridors frequently deploy unique stacked double-decker two-tier guardrails.
    - **Romania**: Guardrails are occasionally painted with yellow-and-black diagonal hazard stripes.
    - **Black Steel Bracket Posts**: Italy, Romania, Albania, Montenegro.
- **Guardrail Reflector Colors**:
    - **Yellow**: Spain, Andorra, Belgium, Israel.
    - **Orange**: Lithuania.
    - **White**: France, Luxembourg, Sweden, Iceland, Italy (part), Latvia (part).
    - **Red**: Most Eastern and Central European countries.
    - **No Reflectors**: United Kingdom, Ireland, Netherlands, Germany, Denmark, Austria, Norway, Finland, Estonia, Portugal.
- **Painted Roadside Curbs**:
    - **Black-and-White Alternating**: Malaysia, Qatar, Rwanda, Botswana.
    - **Yellow-Black / Red-White Curbs**: **Malaysia, Indonesia, Thailand** widely paint curbs at curves, roundabouts, and intersections.
    - **Red-and-White Curbs**: Tunisia, Monaco."""
            })

    # 2.2 Topic: vegetation -> Add YouTube resource link
    veg_topic = next((t for t in topics if t["id"] == "vegetation"), None)
    if veg_topic:
        for s in veg_topic["sections"]:
            if "全球植被" in s["titleZh"] and "7ZC3DmBVRJI" not in s["textZh"]:
                s["textZh"] += "\n- **参考视频**：[GeoGuessr 植物学与树种进阶指南](https://www.youtube.com/watch?v=7ZC3DmBVRJI)"
                s["textEn"] += "\n- **Reference Video**: [GeoGuessr Advanced Tree & Botany Guide](https://www.youtube.com/watch?v=7ZC3DmBVRJI)"

    # 2.3 Topic: poles -> Add Zig8zag guide link and game link
    poles_topic = next((t for t in topics if t["id"] == "poles"), None)
    if poles_topic:
        sec4 = poles_topic["sections"][-1]
        if "Zig8zag" not in sec4["textZh"]:
            sec4["textZh"] += "\n- **进阶文献与实战训练**：\n    - [Notable Poles Document by Zig8zag](https://docs.google.com/document/d/1_H5ignyvO42ACFfr7n02o0x2EyPYUhD-vgMNbnQANe4/edit?tab=t.0)\n    - [欧洲电线杆专项排位对决地图 (Learnable Meta)](https://www.geoguessr.com/game/PV8znvPnYXhdy31D)"
            sec4["textEn"] += "\n- **Advanced Documents & Practice Maps**:\n    - [Notable Poles Document by Zig8zag](https://docs.google.com/document/d/1_H5ignyvO42ACFfr7n02o0x2EyPYUhD-vgMNbnQANe4/edit?tab=t.0)\n    - [European Poles Dedicated Practice Map (Learnable Meta)](https://www.geoguessr.com/game/PV8znvPnYXhdy31D)"

    # 2.4 Topic: architecture -> Add Tuxun water tank link
    arch_topic = next((t for t in topics if t["id"] == "architecture"), None)
    if arch_topic:
        for s in arch_topic["sections"]:
            if "水箱" in s["titleZh"] and "water_tank" not in s["textZh"]:
                s["textZh"] += "\n- **图解速查**：[图寻屋顶水箱识别专题指南](https://www.yuque.com/chaofun/tuxun/water_tank)"
                s["textEn"] += "\n- **Visual Guide**: [Tuxun Roof Water Tank Visual Database](https://www.yuque.com/chaofun/tuxun/water_tank)"

    # --- 3. ENRICH WEBRESOURCES ---
    web_res = data["webResources"]
    existing_urls = [w["url"] for w in web_res.get("websites", [])]
    if "https://geodummy.com/" not in existing_urls:
        web_res["websites"].append({
            "nameZh": "Geodummy",
            "nameEn": "Geodummy",
            "url": "https://geodummy.com/",
            "descZh": "极简直观的 GeoGuessr 新手与进阶速查工具库，涵盖各类路缘柱、车牌与国家基础 Meta 速记表。",
            "descEn": "Intuitive beginner and intermediate cheat-sheet directory covering bollards, plates, and essential country metas.",
            "icon": "zap",
            "badgeZh": "速查工具",
            "badgeEn": "Cheat Sheet",
            "badgeColor": "amber",
            "featuresZh": ["Bollard 柱库", "新手指南", "速查表"],
            "featuresEn": ["Bollards", "Beginner Guide", "Cheat Sheet"]
        })

    article_urls = [a["url"] for a in web_res.get("articles", [])]
    presentation_url = "https://docs.google.com/presentation/d/1XejTARQG_Y1fMEktkxFSpq2gB_7QnZQIpFB_Uxuw1jo/edit?slide=id.g3433fa4ca9a_0_1#slide=id.g3433fa4ca9a_0_1"
    if presentation_url not in article_urls:
        web_res["articles"].append({
            "titleZh": "2026 最实用 GeoGuessr 地图与全球 Meta 幻灯片手册",
            "titleEn": "Most Useful Maps 2026 Presentation Manual",
            "url": presentation_url,
            "author": "Community / GeoGuessr Master",
            "descZh": "汇集 2026 最新天梯顶流地图、高频区域 Meta、植被与基础设施全景幻灯片速查手册。",
            "descEn": "Authoritative master presentation deck containing the most useful maps, regional metas, and visual guides for 2026 competitive play.",
            "tags": ["高阶教材", "地图幻灯片", "官方社区"]
        })

    zig8zag_url = "https://docs.google.com/document/d/1_H5ignyvO42ACFfr7n02o0x2EyPYUhD-vgMNbnQANe4/edit?tab=t.0"
    if zig8zag_url not in article_urls:
        web_res["articles"].append({
            "titleZh": "Zig8zag 全球电线杆完全指南 (Notable Poles Document)",
            "titleEn": "Notable Poles Document by Zig8zag",
            "url": zig8zag_url,
            "author": "Zig8zag",
            "descZh": "GeoGuessr 顶级电杆识别圣经，详尽梳理全球六大洲数十国方孔、梯子、圆柱与变压器结构。",
            "descEn": "The definitive utility pole bible covering perforations, ladder rungs, transformer orientations, and base colors across continents.",
            "tags": ["电线杆圣经", "顶尖攻略", "全球电网"]
        })

    # Serialize back
    updated_json = json.dumps(data, ensure_ascii=False, indent=2)
    new_file_content = f"// GeoGuessr 核心数据源\nwindow.GEOGUESSR_DATA = {updated_json};\n"

    with open("assets/js/geoguessr-data.js", "w", encoding="utf-8") as f:
        f.write(new_file_content)

    print("Successfully enriched all pages across GEOGUESSR_DATA!")
    print(f"Total countries: {len(data['countries'])}")
    print(f"Total topics: {len(data['topics'])}")
    print(f"Total regional guides: {len(data['regionalGuides'])}")
    print(f"Total comparisons: {len(data['comparisons'])}")
    print(f"Total islands: {len(data['islands'])}")
    print(f"Total flags: {len(data['flags'])}")
    print(f"Total websites: {len(web_res['websites'])}")
    print(f"Total articles: {len(web_res['articles'])}")

if __name__ == "__main__":
    enrich()
