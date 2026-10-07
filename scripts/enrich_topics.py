# -*- coding: utf-8 -*-
"""
GeoGuessr Topic Metas Bilingual Translations (14 Specialized Modules)
Enriches topic badges and sections with complete titleZh, titleEn, textZh, and textEn.
"""

TOPIC_BADGES = {
    "plates": ("核心秒杀", "Instant Kill"),
    "taxis": ("城市秒定", "City Locating"),
    "cars": ("车身秘籍", "Vehicle Metas"),
    "poles": ("基础设施", "Infrastructure"),
    "bollards": ("道路护柱", "Road Bollards"),
    "markings": ("基础核心", "Core Rules"),
    "signs": ("视觉细则", "Sign Rules"),
    "chevrons": ("弯道神器", "Curve Chevrons"),
    "languages": ("人文识别", "Scripts & Languages"),
    "architecture": ("环境特征", "Urban Elements"),
    "vegetation": ("自然地貌", "Nature & Soil"),
    "road-numbers": ("路网规则", "Road Numbering"),
    "phones": ("精准定位", "Area Codes"),
    "misc": ("高阶秘籍", "Pro Tips")
}

TOPIC_SECTIONS = {
    "plates": [
        {
            "titleZh": "欧洲蓝条系列",
            "titleEn": "European Blue Stripe Series",
            "textZh": """- **双蓝条（左+右）：**
    - **意大利：** 前牌极短，后牌长，两端均有蓝条。
    - **法国：** 2009年之后的新车牌配双蓝条，早期车单左蓝条（常伴随长天线）。
    - **阿尔巴尼亚：** 蓝条更粗更深，右侧有时带红旗标志（常伴随断裂天空）。
- **单左蓝条：**
    - 绝大多数欧盟国家标准配置。
    - **葡萄牙：** 右侧历史上常带黄色年份条。
    - **比利时：** 红字造成模糊后白色部分偏粉红。
    - **以色列：** 虽非欧盟国家，但标准民用车牌左侧同样带蓝条。
- **欧洲无蓝条国家：**
    - **瑞士：** 前牌极短，后牌长且左侧带红盾白十字瑞士国徽与州徽。
    - **圣马力诺：** 白底短车牌，左边带浅蓝色山峰徽章。
    - **摩纳哥：** 短车牌，左上方有红色亲王徽章。
    - **列支敦士登：** 长车牌，黑底白字，带红金小国徽。
    - **冰岛：** 长车牌，纯白/银色底配蓝色字体。
    - **波黑：** 全白车牌，没有任何蓝条。
    - **俄罗斯 / 乌克兰 / 白俄罗斯：** 均为普通白底车牌，无欧盟蓝条。""",
            "textEn": """- **Double Blue Stripes (Left + Right):**
    - **Italy:** Very short front plate, standard long rear plate, blue strips on both ends.
    - **France:** Dual blue bands on post-2009 plates; earlier plates single left blue band (often with long antenna).
    - **Albania:** Bolder, darker blue strips with red flag badge (accompanying Sky Rift).
- **Single Left Blue Stripe:**
    - Standard across most European Union nations.
    - **Portugal:** Right edge historically carried a yellow year band.
    - **Belgium:** Dark red text causes blurred plate to appear distinctly pinkish.
    - **Israel:** Though outside the EU, standard civilian plates feature a blue left strip.
- **European Nations Without Blue Stripes:**
    - **Switzerland:** Short front plate with red shield; long rear plate with red Swiss cross and canton crests.
    - **San Marino:** Tiny white plate, light blue Mount Titano crest on left, blue text.
    - **Monaco:** Short white plate with red princely crest on upper left.
    - **Liechtenstein:** Long black plate with white characters and gold/red royal crown.
    - **Iceland:** Long plain white/silver plate with blue lettering.
    - **Bosnia and Herzegovina:** Plain white plate without blue stripes.
    - **Russia / Ukraine / Belarus:** White plates without EU blue stripes."""
        },
        {
            "titleZh": "黄橙色背景系列",
            "titleEn": "Yellow & Orange Background Plates",
            "textZh": """- **全黄（前后皆黄）：**
    - **荷兰：** 左侧蓝条，长车牌。
    - **卢森堡：** 左侧蓝条，车牌比荷兰略短（路牌全大写）。
    - **以色列：** 左侧蓝条，全黄长车牌。
    - **哥伦比亚：** 南美唯一全黄民用车牌（明亮短黄牌）。
    - **老挝：** 东南亚唯一前后全亮黄牌。
    - **阿曼：** 阿拉伯国家唯一普通车黄牌。
    - **纳米比亚：** 南部非洲全黄牌国家。
- **前白后黄：**
    - **英国：** 传统英联邦标准，前白后黄，左侧常带蓝条。
    - **马恩岛：** 左侧带红色条纹。
    - **直布罗陀：** 左侧带蓝条。
    - **塞浦路斯 / 香港：** 前白后黄，无蓝条。
    - **博茨瓦纳：** 南部非洲唯一前白后黄。
    - **肯尼亚：** 前面长白车牌，后面近正方形黄车牌。
- **商用车黄牌：**
    - **秘鲁：** 出租车与公共交通专属黄色牌照。
    - **印度：** 商用车黄色长牌照。
    - **日本：** 660cc 轻型汽车（K-Car）黄底黑字。
    - **泰国：** 巴士与大卡车使用黄底商业车牌。""",
            "textEn": """- **All Yellow (Front & Rear):**
    - **Netherlands:** Left blue EU band, long plate.
    - **Luxembourg:** Left blue EU band, slightly shorter/wider blue band than Netherlands.
    - **Israel:** Standard civilian plates are yellow with a left blue strip.
    - **Colombia:** The ONLY South American country with universal yellow civilian plates.
    - **Laos:** The ONLY Southeast Asian country with bright yellow front and rear plates.
    - **Oman:** Yellow plates with black characters.
    - **Namibia:** Yellow plates throughout Southern Africa.
- **Front White, Rear Yellow:**
    - **United Kingdom:** Standard British format, optional left blue band.
    - **Isle of Man:** Red band on left.
    - **Gibraltar:** Blue EU band on left.
    - **Cyprus / Hong Kong:** British traditional format without EU bands.
    - **Botswana:** Front white, rear yellow in Southern Africa.
    - **Kenya:** Front rectangular white, rear square yellow plate.
- **Commercial Yellow Plates:**
    - **Peru:** Yellow taxi license plates.
    - **India:** Commercial yellow long plates.
    - **Japan:** Yellow plates designate 660cc Kei cars.
    - **Thailand:** Buses and trucks carry yellow commercial plates."""
        },
        {
            "titleZh": "特殊底色车牌",
            "titleEn": "Special Plate Colors",
            "textZh": """- **黑底白字：**
    - **印度尼西亚：** 白字分三段，摩托车也有前车牌。
    - **马来西亚：** 白字分一段或两段，车牌较短。
    - **列支敦士登：** 黑底白字，带红金小国徽，模糊后显灰。
    - **突尼斯：** 军警及特种车黑牌，左侧有醒目红标。
    - **阿根廷：** 旧车牌模糊后中间看似大黑点（新车牌顶部有蓝横条）。
- **白底红字：**
    - **比利时：** 暗红字白底，模糊后整体偏粉红。
- **红底 / 橙底：**
    - **不丹：** 深红色普通民用车牌。
    - **厄瓜多尔 / 智利：** 商用车与出租车采用橙色牌照。
- **绿色车牌：**
    - **挪威：** 轻型商用车（后座拆除的面包车或皮卡）挂绿底黑字车牌。
    - **匈牙利 / 印度：** 新能源纯电动车专属浅绿色车牌。
- **红边车牌：**
    - **吉尔吉斯斯坦：** 左侧粗红竖条。
    - **摩纳哥：** 极细红边短车牌。""",
            "textEn": """- **Black Plate with White Text:**
    - **Indonesia:** White letters divided into three segments.
    - **Malaysia:** White letters divided into one or two compact segments.
    - **Liechtenstein:** Distinctive black plate with small red/gold crown.
    - **Tunisia:** Military/police black plates with red patch on left.
    - **Argentina:** Older black/white plates with black central dot.
- **White with Red Text:**
    - **Belgium:** Dark red lettering on white (appears pinkish when blurred).
- **Red / Orange Plates:**
    - **Bhutan:** Deep dark red civilian plates.
    - **Ecuador / Chile:** Orange commercial and taxi plates.
- **Green Plates:**
    - **Norway:** Green plates for commercial/cargo vehicles (vans, pickups with rear seats removed).
    - **Hungary / India:** Green plates designate electric vehicles.
- **Red Strip Plates:**
    - **Kyrgyzstan:** Bold red vertical band on left edge.
    - **Monaco:** Thin red border on short white plate."""
        }
    ],
    "taxis": [
        {
            "titleZh": "拉丁美洲出租车",
            "titleEn": "Latin America Taxis",
            "textZh": """- **秘鲁：** 黄色丰田 Probox 或 Yaris 旅行车；车门贴有红黄黑相间的反光棋盘格；车门印有 'SETAME' (利马) 或 'SETACA' (卡亚俄) 特许标志。
- **哥伦比亚：** 明黄色紧凑型两厢掀背车（起亚 Picanto / 现代 Atos）；车顶与后门印有黑色车牌号；车门印有城市名称（BOGOTÁ, MEDELLÍN, CALI）。
- **墨西哥（墨西哥城 CDMX）：** 标志性的粉白双拼（下半截墨西哥粉红，车顶为白色），车门印有独立天使雕像剪影。
- **厄瓜多尔：** 明黄色出租车，前门贴有黄色圆形 'Seguridad Ciudadana' 城市安全监控标贴；车牌为橙色商用牌。
- **巴拿马：** 纯黄色轿车，车门印有白色方框标明所属省市（PANAMÁ, COLÓN, CHIRIQUÍ）。
- **阿根廷（布宜诺斯艾利斯 CABA）：** 黑身黄顶（车身为黑色，车顶喷涂为明黄色）。
- **智利（圣地亚哥）：** 同样为黑身黄顶，配智利白色或橙色车牌。""",
            "textEn": """- **Peru:** Yellow Toyota Probox / Yaris wagons; checkerboard red/yellow reflective tape on doors; 'SETAME' / 'SETACA' municipal permit stickers.
- **Colombia:** Bright yellow compact hatchbacks (Kia Picanto / Hyundai Atos); license plate numbers stamped on roof and rear doors; city names printed on doors (BOGOTÁ, MEDELLÍN, CALI).
- **Mexico (CDMX):** Two-tone pink and white (Mexican pink lower, white roof) with Angel of Independence silhouette; other Mexican states have distinctive color schemes.
- **Ecuador:** Bright yellow with round 'Seguridad Ciudadana' surveillance decals on front doors; orange commercial license plates.
- **Panama:** Bright yellow sedans with white door rectangles displaying municipal permits (PANAMÁ, COLÓN, CHIRIQUÍ).
- **Argentina (Buenos Aires / CABA):** Black body with bright yellow roof.
- **Chile (Santiago):** Black body with bright yellow roof and white/orange Chilean license plates."""
        },
        {
            "titleZh": "亚太、中东与欧洲出租车",
            "titleEn": "Asia-Pacific, Middle East & Europe Taxis",
            "textZh": """- **泰国（曼谷）：** 双拼黄绿（个人出租车）；纯亮粉色、亮橙色或红蓝双拼（出租车公司车队）。
- **中国台湾：** 纯黄色轿车与跨界车（小黄），车顶顶灯配白底红字营业车牌。
- **中国香港：** 市区红身银顶；新界绿身白顶；大屿山天蓝身白顶。
- **日本：** 深海蓝色或黑色（丰田皇冠 Comfort 或 JPN Taxi）；绿底白字商用车牌；车顶装饰华丽的发光行灯。
- **阿联酋（迪拜）：** 米色/奶油色车身，车顶按业务区分颜色（红顶、蓝顶、绿顶、黄顶，以及女士家庭专属粉红顶）。
- **英国（伦敦）：** 经典的黑色高顶复古出租车 (Black Cab)。
- **西班牙（巴塞罗那）：** 标志性的纯黑车身搭配黄色车门与后备箱。""",
            "textEn": """- **Thailand (Bangkok):** Two-tone yellow-and-green (private owners); solid bright pink, orange, or red-and-blue (company fleets).
- **Taiwan:** Pure yellow sedans/crossovers with roof company light boxes; white plates with red lettering.
- **Hong Kong:** Red body with silver roof (Urban/Kowloon); Green body with white roof (New Territories); Sky blue body with white roof (Lantau Island).
- **Japan:** Dark navy blue or black (Toyota Crown Comfort / JPN Taxi); green commercial license plates; ornate illuminated roof lanterns.
- **UAE (Dubai):** Cream / beige bodies with color-coded roofs: red, blue, green, yellow; pink roofs exclusively for women and families.
- **United Kingdom (London):** Iconic tall black Hackney carriages (Black Cabs).
- **Spain (Barcelona):** Signature black body with bright yellow doors and trunk lid."""
        }
    ],
    "cars": [
        {
            "titleZh": "镜头代数与画质特征",
            "titleEn": "Camera Generations",
            "textZh": """- **Gen 1 代镜头：** 超低分辨率，严重像素化和马赛克模糊。主要存在于早期的美国、加拿大、日本、法国和澳大利亚偏远地区。
- **Gen 2 代镜头：** 低清晰度，画面泛紫光（紫色紫边），街景车下方伴有巨大圆形光晕或白色大圆圈遮挡。常见于印度、柬埔寨、墨西哥部分地区、尼日利亚。
- **Gen 3 代镜头：** 高分辨率，四周边缘有明显暗角，车底有清晰的车辆遮挡模糊。澳大利亚、南非、俄罗斯常见长天线。
- **Gen 4 代镜头：** 超清极品画质，色彩极其饱满鲜艳，车底只有紧贴相机正下方的微小蓝灰圆形模糊。
- **Lowcam（低视角相机）：** 相机机位显著低于正常车高，仿佛蹲在地上看路。三剑客：日本（左行）、瑞士（右行阿尔卑斯）、斯里兰卡（左行热带）。""",
            "textEn": """- **Gen 1:** Ultra low resolution, severe pixelation and blurring. Covers early US, Canada, Japan, France, Australia.
- **Gen 2:** Low resolution, purple fringing, circular halo around car blur. Found in India, Cambodia, parts of Mexico, Nigeria.
- **Gen 3:** High resolution with noticeable vignette around edges and distinct vehicle blur underneath. Long antennas common in Australia, South Africa, Russia.
- **Gen 4:** Crisp ultra-high-definition, rich color saturation, miniature circular blue/gray blur directly below camera.
- **Lowcam (Low Camera Rig):** Camera mounted low to the ground. Classic trio: Japan (left drive), Switzerland (right drive), Sri Lanka (left drive tropical)."""
        },
        {
            "titleZh": "车身胶带与车顶横杆",
            "titleEn": "Tape & Roof Rack Metas",
            "textZh": """- **黑色胶带固定：**
    - **加纳：** 车顶右前横杆上缠绕有明显的黑胶带。
    - **多米尼加：** 车顶行李架凹槽正中心贴有黑色胶带。
    - **库拉索 / 阿鲁巴：** 黑色横杆上缠绕有白色胶带。
- **金属横杆与行李架：**
    - **危地马拉：** 银色凸起车顶横杆，且可看到两侧车门后视镜。
    - **吉尔吉斯斯坦：** 金属框架行李架，常带有明显侧杆。
    - **法罗群岛：** 车顶四根横截黑色横杆。
    - **塞内加尔：** 四根黑色横杆，天空伴随裂纹 (Sky Rift)。""",
            "textEn": """- **Black Tape on Roof Bar:**
    - **Ghana:** Front-right roof bar wrapped with conspicuous black electrical tape.
    - **Dominican Republic:** Black tape strip centered within roof rack grooves.
    - **Curaçao / Aruba:** White tape wrapped on black roof bars.
- **Visible Silver Roof Bars:**
    - **Guatemala:** Prominent silver crossbars with side mirrors visible.
    - **Kyrgyzstan:** Tubular metal luggage rack frame.
    - **Faroe Islands:** Four black horizontal crossbars.
    - **Senegal:** Four black crossbars accompanying Sky Rift in the sky."""
        },
        {
            "titleZh": "特色车身、涉水喉与护航车",
            "titleEn": "Special Vehicles & Snorkels",
            "textZh": """- **发动机涉水喉 (Snorkel)：**
    - **肯尼亚：** 引擎盖右前方竖立着一根粗大的黑色进气涉水喉。
- **警方与军车护航跟随：**
    - **尼日利亚：** 跟车可见带红蓝警灯的皮卡警车。
    - **突尼斯：** 军方皮卡护航，车身带红色条纹。
- **敞篷货斗与特种车辆：**
    - **哈萨克斯坦：** 巨大白色货斗平头皮卡车尾。
    - **蒙古：** 车顶绑有露营帐篷、备胎与红色燃料桶。
    - **美属维尔京群岛：** 红白相间的皮卡，右侧立着极高的长天线。""",
            "textEn": """- **Snorkel on Front Hood:**
    - **Kenya:** Thick black vertical snorkel air-intake pipe mounted on front-right hood.
- **Police / Military Escort Vehicles:**
    - **Nigeria:** Chase follow-car equipped with flashing police light bar.
    - **Tunisia:** Military escort pickup with red stripes.
- **Flatbed / Pickup Beds Visible:**
    - **Kazakhstan:** Massive white flatbed truck bed visible in rear view.
    - **Mongolia:** Camping tent, spare wheel, and red cargo strapped to roof.
    - **U.S. Virgin Islands:** Red-and-white pickup bed with tall right antenna."""
        }
    ],
    "poles": [
        {
            "titleZh": "混凝土梯子杆与孔洞杆",
            "titleEn": "Concrete Ladder & Holey Poles",
            "textZh": """- **梯子杆（方形或长方形中空通孔）：**
    - **巴西：** 通体长方形孔洞，混凝土方形截面，南美最经典梯子杆。
    - **葡萄牙 / 西班牙：** 修长轻型梯子杆；葡萄牙常见小正方形孔。
    - **智利 / 新西兰：** 大间距横孔梯子杆，杆身向上逐渐收窄。
- **通体方孔水泥杆：**
    - **匈牙利：** 长方形通孔从最底部一直打到杆顶（H-holes）。
    - **波兰：** 通孔类似匈牙利，但底部离地约 1.5 米为实心纯混凝土（P-holes）。
    - **罗马尼亚：** 通孔水泥杆，杆基底部通常涂刷白漆保护圈（R-holes）。""",
            "textEn": """- **Ladder Poles (Hollow rungs):**
    - **Brazil:** Ladder poles with rectangular gaps, square cross-section, South American icon.
    - **Portugal / Spain:** Slender ladder poles; Portugal features square holes.
    - **Chile / New Zealand:** Wide-spaced rectangular rungs tapering upward.
- **Holey Concrete Poles:**
    - **Hungary:** Rectangular holes running continuously from bottom to very top (H-holes).
    - **Poland:** Rectangular holes, but bottom base section is solid concrete without holes (P-holes).
    - **Romania:** Rectangular holes with white-painted base collar (R-holes)."""
        },
        {
            "titleZh": "实心杆、金属复合杆与底部涂装",
            "titleEn": "Solid Poles, Steel Poles & Base Painting",
            "textZh": """- **圆形实心混凝土杆：**
    - **法国：** 常见带台阶状或圆锥形顶盖的圆混凝土杆。
    - **意大利：** 杆顶常见三叉戟金属支架或多层横担。
    - **希腊 / 塞浦路斯：** 乡村区域几乎只有木杆，没有水泥杆。
- **金属与复合材质杆：**
    - **南澳大利亚：** Stobie 杆（两根钢制工字钢夹住中间的混凝土柱）。
    - **马来西亚：** 热镀锌圆形钢管电线杆，配黑色反光编号标贴。
- **底部彩绘涂装：**
    - **危地马拉：** 政客竞选刷漆，杆底刷成蓝白、红白、绿白条纹。
    - **智利：** 杆底经常涂刷白红相间的警示漆。""",
            "textEn": """- **Solid Round Concrete Poles:**
    - **France:** Cylindrical concrete poles often topped with stepped caps.
    - **Italy:** Topped with trident-style metal brackets and multiple insulators.
    - **Greece / Cyprus:** Rural areas rely almost entirely on wooden poles, not concrete.
- **Steel & Composite Poles:**
    - **South Australia:** Stobie poles (two steel I-beams flanging a concrete center slab).
    - **Malaysia:** Galvanized tubular steel poles with black reflective serial stickers.
- **Base Painting & Decals:**
    - **Guatemala:** Utility pole bases painted in vibrant partisan political colors (blue/white, green/white).
    - **Chile:** Pole bases frequently painted with red-and-white warning bands."""
        }
    ],
    "bollards": [
        {
            "titleZh": "欧洲核心路缘标",
            "titleEn": "European Core Bollards",
            "textZh": """- **德国：** 白柱带斜向黑色黑圈，内嵌两个白色圆形反光点。
- **奥地利：** 白柱带黑色斜帽，嵌有鲜红色长条反光片，背面为白反光。
- **法国：** 圆形白色圆柱，柱身凹槽内嵌有环状红色反光环。
- **意大利：** 白色三角截面柱，顶部黑色帽子一直覆盖到最顶端边缘。
- **西班牙：** 矮小的三角鲨鱼鳍混凝土墩，或带黄色反光片的中空塑料柱。
- **波兰：** 粗壮白色柱体，配红色斜向反光带与红色弧形顶圈。
- **荷兰：** 扁平白柱，正面垂直细红反光条，顶端带红色细线圈。
- **冰岛：** 纯亮黄色扁平长方形柱体，极其醒目。
- **瑞典：** 白色柱体配黑色宽腰带，嵌有灰色反光片。
- **土耳其：** 白柱顶端覆盖着醒目的红色塑料圆帽。""",
            "textEn": """- **Germany:** White post with slanted black band containing two white circular reflector studs.
- **Austria:** White post with slanted black cap and red reflector strip; white reflector on back.
- **France:** Cylindrical white post with a recessed red circular reflector ring.
- **Italy:** White post where the black cap covers the very top edge.
- **Spain:** Triangular shark-fin shaped low concrete post, or hollow post with yellow reflector.
- **Poland:** Chunky white post with angled red reflector strip.
- **Netherlands:** Simple white flat post with red vertical reflector strip and red top ring.
- **Iceland:** Bright canary-yellow flat rectangular post.
- **Sweden:** White post with black band and gray rectangular reflector.
- **Turkey:** White post topped with a prominent red round plastic cap."""
        },
        {
            "titleZh": "美洲、大洋洲与雪迹杆",
            "titleEn": "Americas, Oceania & Snow Poles",
            "textZh": """- **澳大利亚：** 白色方柱，正面中间嵌有红色独立方块反光片（红框不包边）。
- **新西兰：** 白色方柱，带有 360 度整圈包裹的红色反光胶带。
- **秘鲁：** 鲜艳的明亮橘红色圆柱形路缘标。
- **博茨瓦纳：** 路边标志杆与护栏涂刷成醒目的黑黄相间粗斑马条纹。
- **北欧雪迹杆（Snow Poles）：**
    - **挪威 / 瑞典 / 芬兰：** 公路两侧立有极高的橙色、红色或竹制细长标杆，用于冬季暴雪指引路沿。
- **北美雪迹杆：** 美国和加拿大北部山区公路配有带绿色或黄色反光胶带的高弹性反光杆。""",
            "textEn": """- **Australia:** White post with centered red square reflector (does not wrap around edges).
- **New Zealand:** White post with full 360-degree wrap-around red reflective tape.
- **Peru:** Bright orange cylindrical bollards.
- **Botswana:** Signposts and guideposts painted in bold alternating yellow-and-black stripes.
- **Nordic Snow Poles:**
    - **Norway / Sweden / Finland:** Very tall orange, red, or bamboo sticks planted along road shoulders for winter navigation.
- **North American Snow Stakes:** Tall flexible fiberglass stakes with green or yellow reflectors along mountain passes."""
        }
    ],
    "markings": [
        {
            "titleZh": "道路标线颜色规则",
            "titleEn": "Road Marking Colors",
            "textZh": """- **全白标线（白中线 + 白边线）：**
    - **欧洲：** 绝大部分欧洲国家（挪威黄中线、芬兰老黄虚线、爱尔兰黄虚边线除外）。
    - **南美洲：** 智利是南美唯一全白线国家！其他南美国家均为黄中线。
    - **大洋洲：** 澳大利亚全国统一使用全白线。
- **黄中线 + 白边线：**
    - **北美洲：** 美国、加拿大、墨西哥全境标配。
    - **南美洲：** 巴西、哥伦比亚、阿根廷、秘鲁、厄瓜多尔等全部采用黄中线。
    - **亚洲：** 日本、泰国、印尼、中国台湾等。
- **黄色边缘线：**
    - **爱尔兰：** 黄色虚线路肩边缘线（欧洲异类）。
    - **南非及周边：** 黄色实线路肩边缘线。
    - **以色列 / 约旦：** 外侧黄色实线边缘线。""",
            "textEn": """- **All-White Markings (Center & Edge):**
    - **Europe:** Vast majority of countries (exceptions: Norway, Finland, Ireland, Greece).
    - **South America:** Chile is the ONLY country with all-white road markings in South America.
    - **Oceania:** Australia uses all-white road markings nationwide.
- **Yellow Centerlines with White Edges:**
    - **North America:** Universal across USA, Canada, and Mexico.
    - **South America:** Universal across Brazil, Colombia, Argentina, Peru, Ecuador.
    - **Asia:** Japan, Thailand, Indonesia, Taiwan, Laos.
- **Yellow Edge Lines:**
    - **Ireland:** Dashed yellow road edge lines (unique in Europe).
    - **South Africa & neighbors:** Solid yellow outer shoulder edge line.
    - **Israel / Jordan:** Solid yellow outer edge markings."""
        },
        {
            "titleZh": "左右侧行驶国家速查",
            "titleEn": "Driving Side (LHD vs RHD)",
            "textZh": """- **欧洲靠左行驶（4国）：** 英国、爱尔兰、马耳他、塞浦路斯。
- **亚太地区靠左行驶：** 日本、中国香港、中国澳门、印度、孟加拉国、斯里兰卡、泰国、马来西亚、新加坡、印度尼西亚。
- **大洋洲靠左行驶：** 澳大利亚、新西兰。
- **南部与东部非洲靠左行驶：** 南非、博茨瓦纳、纳米比亚、斯威士兰、莱索托、肯尼亚、乌干达。
- **美洲特殊靠左行驶：** 美属维尔京群岛（美国领地唯一左行）、圭亚那、苏里南。""",
            "textEn": """- **Europe (Left-hand drive):** United Kingdom, Ireland, Malta, Cyprus.
- **Asia-Pacific (Left-hand drive):** Japan, Hong Kong, Macau, India, Bangladesh, Sri Lanka, Thailand, Malaysia, Singapore, Indonesia.
- **Oceania (Left-hand drive):** Australia, New Zealand.
- **Africa (Left-hand drive):** South Africa, Botswana, Namibia, Eswatini, Lesotho, Kenya, Uganda.
- **Americas (Left-hand drive):** U.S. Virgin Islands (sole US left-drive territory), Guyana, Suriname."""
        }
    ],
    "signs": [
        {
            "titleZh": "人行横道告示牌底部线条",
            "titleEn": "Pedestrian Crossing Signs",
            "textZh": """- **欧洲蓝底方牌小人脚下的斑马线条数：**
    - **无此类人行牌：** 英国、爱尔兰（采用黄底菱形或地面指示）。
    - **一条横实线：** 波兰。
    - **两根横虚线：** 比利时（小人为方脑袋）、奥地利、希腊、黑山。
    - **三条竖线：** 俄罗斯、乌克兰、爱沙尼亚（小人更纤瘦）、立陶宛。
    - **四条竖线：** 瑞典（小人有脖子）、挪威（小人无脖子）、冰岛（蓝底带黄三角形背景）。
    - **五条竖线：** 大多数欧洲国家；丹麦竖线碰到三角框；德国/克罗地亚/匈牙利小人带皮带。
    - **八条竖线：** 西班牙。
- **黄色菱形告示牌阵营：** 美国、加拿大、澳大利亚、爱尔兰、新西兰及拉美各国。""",
            "textEn": """- **Blue Square Series Striping Patterns (Europe):**
    - **No such blue sign:** United Kingdom, Ireland.
    - **One solid line:** Poland.
    - **Two dashed horizontal lines:** Belgium (square head figure), Austria, Greece, Montenegro.
    - **Three vertical stripes:** Russia, Ukraine, Estonia (thinner silhouette), Lithuania.
    - **Four vertical stripes:** Sweden (figure has distinct neck), Norway (no visible neck), Iceland (yellow inner triangle).
    - **Five vertical stripes:** Denmark, Germany, Croatia, Hungary, Portugal.
    - **Eight vertical stripes:** Spain.
- **Yellow Diamond Series:** USA, Canada, Australia, Ireland, New Zealand, Latin America."""
        },
        {
            "titleZh": "让路与停止标志",
            "titleEn": "Yield & Stop Signs",
            "textZh": """- **停止牌字样：**
    - **STOP：** 欧美绝大多数国家、智利、巴西。
    - **ALTO：** 墨西哥、危地马拉、哥斯达黎加、巴拿马、洪都拉斯。
    - **PARE：** 阿根廷、哥伦比亚、秘鲁、巴西（葡萄牙语）、西班牙部分地区。
    - **DUR：** 土耳其独占八边形红底停止牌。
    - **ARRÊT：** 加拿大魁北克省法语区独占。
- **让路标志 (Yield)：**
    - **GIVE WAY：** 英国、澳大利亚（黑字）、新西兰（红字）、南非。
    - **YIELD：** 美国、加拿大、爱尔兰。
    - **博茨瓦纳：** 倒红边三角内部为深蓝色填充。""",
            "textEn": """- **Stop Sign Lettering:**
    - **'STOP':** Universal in Europe, US, English-speaking nations, Chile, Brazil.
    - **'ALTO':** Mexico, Guatemala, Costa Rica, Panama, Honduras.
    - **'PARE':** Argentina, Colombia, Peru, Brazil, Spain (local).
    - **'DUR':** Turkey exclusive stop sign.
    - **'ARRÊT':** Quebec, Canada (French province).
- **Yield Signs:**
    - **'GIVE WAY':** UK, Australia (black font), New Zealand (red font), South Africa.
    - **'YIELD':** United States, Canada, Ireland.
    - **Botswana:** Inverted red-triangle frame filled with solid navy blue."""
        }
    ],
    "chevrons": [
        {
            "titleZh": "欧洲弯道导向标配色",
            "titleEn": "European Chevrons Color Schemes",
            "textZh": """- **白底红箭头 / 红底白箭头：** 东欧国家（波兰、捷克、罗马尼亚、保加利亚、俄乌）、荷兰、比利时、丹麦、德国；土耳其红白箭头不触及外框边缘。
- **黑白配色：**
    - **黑底白箭头：** 英国、意大利、阿尔巴尼亚、希腊、塞浦路斯。
    - **白底黑箭头：** 塞尔维亚、黑山、北马其顿。
- **蓝底白箭头：** 法国、西班牙部分地区。
- **黑底黄箭头：** 挪威、芬兰、冰岛、爱尔兰、葡萄牙。
- **蓝底黄箭头：** 瑞典独占（标志性瑞典国旗蓝黄配色）。
- **黄底红箭头：** 奥地利部分山区公路独占。""",
            "textEn": """- **White & Red (Red Arrow on White or White Arrow on Red):** Eastern Europe (Poland, Czechia, Romania, Bulgaria, Russia, Ukraine, Baltics), Netherlands, Belgium, Denmark, Germany; Turkey chevrons do not touch outer border.
- **Black & White:**
    - **Black with white arrow:** UK, Italy, Albania, Greece, Cyprus.
    - **White with black arrow:** Serbia, Montenegro, North Macedonia.
- **Blue & White:** France, parts of Spain.
- **Black & Yellow:** Norway, Finland, Iceland, Ireland, Portugal.
- **Blue & Yellow:** Sweden exclusive (matching Swedish national flag colors).
- **Yellow & Red:** Austria mountainous highways exclusive."""
        },
        {
            "titleZh": "美洲与其它地区导向标",
            "titleEn": "Americas & Other Chevrons",
            "textZh": """- **黄底黑箭头：** 美国、加拿大、澳大利亚、新西兰、巴西、阿根廷、智利、日本（大黄菱形或方块）。
- **红底白箭头：** 墨西哥、哥伦比亚、秘鲁。
- **黑底白/黄箭头：** 南非、博茨瓦纳、马来西亚。
- **特殊双向导向标：** 双向 T 字交叉口的合流双箭头导向牌在北美通常为超宽黄色横矩形。""",
            "textEn": """- **Yellow with Black Arrow:** USA, Canada, Australia, New Zealand, Brazil, Argentina, Chile, Japan (prominent yellow warning diamond/square).
- **Red with White Arrow:** Mexico, Colombia, Peru.
- **Black with White/Yellow Arrow:** South Africa, Botswana, Malaysia.
- **Bi-directional Chevrons:** Wide rectangular horizontal double-arrow signs prominent in North American T-intersections."""
        }
    ],
    "languages": [
        {
            "titleZh": "欧洲字母体系与西里尔字符",
            "titleEn": "European Scripts & Cyrillic Matrix",
            "textZh": """- **北欧特殊字符：**
    - **Æ/æ 和 Ø/ø：** 丹麦与挪威（丹麦多 b,d,g 及 -by/-skov；挪威多 p,t,k 及 -set/-heim/-stad）。
    - **Ä/ä 和 Ö/ö：** 瑞典与芬兰（瑞典多字母 Å/å；芬兰有长双元音 aa/ee/ii/yy 与超长单词）。
    - **Ð/ð 和 Þ/þ：** 冰岛语专属，法罗群岛使用 ð 但不使用 þ。
- **西里尔字母体系（东欧）：**
    - **乌克兰：** 独占使用 'і, ï, є, ґ'。
    - **保加利亚：** 频繁使用 'ъ' 作为普通元音。
    - **俄罗斯：** 包含 'ы, ё, ъ, э'。
    - **塞尔维亚 / 黑山：** 包含特殊字母 'ђ, ћ, љ, њ'。
- **希腊字母：** 希腊和塞浦路斯独占（Ω, Ψ, Ξ, Θ, Δ, Λ）。""",
            "textEn": """- **Nordic Script Variants:**
    - **Æ/æ & Ø/ø:** Denmark & Norway (Danish favors b,d,g and suffixes -by/-skov; Norwegian favors p,t,k and suffixes -set/-heim/-stad).
    - **Ä/ä & Ö/ö:** Sweden & Finland (Swedish identifiable by Å/å; Finnish features long vowel doublets aa/ee/ii/yy and massive compound words).
    - **Ð/ð & Þ/þ:** Icelandic exclusive; Faroese uses ð but omits þ.
- **Cyrillic Script Matrix:**
    - **Ukraine:** Exclusively uses 'і, ï, є, ґ'.
    - **Bulgaria:** Frequent vowel usage of 'ъ'.
    - **Russia:** Features 'ы, ё, ъ, э'.
    - **Serbia / Montenegro:** Distinguishable by 'ђ, ћ, љ, њ'.
- **Greek Alphabet:** Exclusive to Greece and Cyprus (Ω, Ψ, Ξ, Θ, Δ, Λ)."""
        },
        {
            "titleZh": "亚洲文字与各国道路后缀",
            "titleEn": "Asian Scripts & Street Suffixes",
            "textZh": """- **东南亚四种文字速辨：**
    - **泰文：** 字形方正转折，有硬角与明显小圆圈装饰。
    - **老挝文：** 曲线圆润饱满，弧线大，没有泰文的硬折角。
    - **高棉文（柬埔寨）：** 字顶带起伏波浪齿与卷曲尖刺修饰。
    - **缅甸文：** 由大量连续的纯圆形圈圈构成。
- **常用道路名称后缀：**
    - **北欧：** Gade/Vej (丹麦)、Gate/Vei (挪威)、Gatan/Vägen (瑞典)、Tie/Katu (芬兰)。
    - **斯拉夫：** Ulica / Ul. (波兰、捷克、斯洛伐克、巴尔干及俄语 Улица)。
    - **拉美及西葡：** Calle (西)、Rua / Avenida (葡)、Jalan / Jln (马来/印尼)、Soi / Thanon (泰)。""",
            "textEn": """- **Southeast Asian Script Identification:**
    - **Thai:** Squared-off contours with crisp right angles and tiny terminal circles.
    - **Lao:** Curvier, rounded, flowing loops without the sharp angles of Thai.
    - **Khmer (Cambodia):** Highly decorated with wavy crested teeth on top.
    - **Burmese:** Characterized by continuous concentric circles and circular arcs.
- **Common Street Name Suffixes:**
    - **Nordic:** Gade/Vej (DK), Gate/Vei (NO), Gatan/Vägen (SE), Tie/Katu (FI).
    - **Slavic:** Ulica / Ul. (PL, CZ, SK, Balkans, and Cyrillic Улица).
    - **Romance & Asian:** Calle (ES), Rua / Avenida (PT), Jalan / Jln (MY/ID), Soi / Thanon (TH)."""
        }
    ],
    "architecture": [
        {
            "titleZh": "屋顶水箱分类",
            "titleEn": "Rooftop Water Tanks",
            "textZh": """- **美洲：**
    - **墨西哥：** 纯黑塑料圆筒形大水箱，常见 'Rotoplas' 品牌名。
    - **巴西：** 深海蓝色圆筒水箱，常伴随微透光的网状卫星电视天线。
    - **玻利维亚：** 白色圆水箱，常标有 'Tank-Burg'。
    - **哥伦比亚：** 深蓝或黑色圆筒储水箱。
- **地中海与中东：**
    - **阿尔巴尼亚：** 屋顶普遍安装巨大的白色横向圆筒状水箱（地中海最显著标志）。
    - **以色列 / 约旦：** 白色竖立水箱，与黑色太阳能集热板成对安装。
- **非洲：** 加纳、尼日利亚和肯尼亚常见安装在外置铁架塔上的巨型黑色大水罐；博茨瓦纳和南非常见墨绿色水箱。""",
            "textEn": """- **Americas:**
    - **Mexico:** Black plastic cylindrical tanks, prominent 'Rotoplas' logo.
    - **Brazil:** Deep navy blue cylindrical tanks, accompanied by semi-transparent wire-mesh satellite dishes.
    - **Bolivia:** White cylindrical tanks branded 'Tank-Burg'.
    - **Colombia:** Deep blue or black rooftop drums.
- **Mediterranean & Middle East:**
    - **Albania:** Rooftops universally carry large horizontal white cylindrical water tanks (iconic Balkan meta).
    - **Israel / Jordan:** White cylindrical tanks paired with black flat solar heating panels.
- **Africa:** Large black water tanks mounted on elevated steel scaffold towers in Ghana, Nigeria, and Kenya; forest green tanks in Botswana and South Africa."""
        },
        {
            "titleZh": "建筑街景、门牌与路沿",
            "titleEn": "Architecture, House Numbers & Curbs",
            "textZh": """- **特色建筑风格：**
    - **安道尔：** 纯天然深灰色花岗岩砖石砌筑外墙。
    - **马耳他：** 地中海金黄色石灰岩厚重平顶石屋，配凸出式木制阳台。
    - **保加利亚：** 凹凸不平的粗糙深红色陶瓦屋顶。
    - **卢旺达：** 砖石房屋墙体上常有镂空花纹通风孔，街道极其洁净。
- **著名城市门牌：**
    - **法国巴黎：** 深蓝色搪瓷路牌与门牌，配绿色或白色精致滚边。
    - **奥地利维也纳：** 椭圆形蓝底白字门牌，开头标注所在分区编号（如 9., Berggasse）。
    - **波兰华沙：** 华沙城市信息系统 (MSI) 蓝底配底部红色区域条纹。
- **黑白相间路沿：** 马来西亚、卡塔尔、卢旺达、博茨瓦纳普遍将路沿石刷成黑白相间。""",
            "textEn": """- **Signature Architectural Styles:**
    - **Andorra:** Natural dark-gray unrendered stacked stonework walls.
    - **Malta:** Warm golden limestone sand-colored flat-roof houses with closed wooden balconies.
    - **Bulgaria:** Wavy, uneven, terracotta red roof tiles.
    - **Rwanda:** Brick/mortar homes with decorative lattice ventilation perforations, remarkably spotless streets.
- **Famous Urban Street & House Numbers:**
    - **Paris, France:** Dark navy blue enamel plaques with green/white ornamental borders.
    - **Vienna, Austria:** Oval blue enamel plaques prefixed by district number (e.g. 9., Berggasse).
    - **Warsaw, Poland:** City Information System (MSI) plaques with blue top and red bottom district stripe.
- **Painted Curbs:** Alternating black-and-white road curbs in Malaysia, Qatar, Rwanda, and Botswana."""
        }
    ],
    "vegetation": [
        {
            "titleZh": "红土与特征植被分布",
            "titleEn": "Soil & Signature Flora",
            "textZh": """- **全球红土壤 (Red Soil) 分布：**
    - **南美洲：** 巴西南部（巴拉那州 Paraná）、阿根廷东北（米西奥内斯省 Misiones）。
    - **非洲：** 肯尼亚、乌干达、卢旺达全境红土极其典型。
    - **大洋洲：** 西澳大利亚（内陆广袤的鲜艳红土地带）。
    - **亚洲：** 斯里兰卡（橘红色土壤）、柬埔寨与老挝南部。
- **标志性树木品种：**
    - **桉树 (Eucalyptus)：** 澳大利亚全境绝对优势树种，伊比利亚半岛（葡萄牙/西班牙北部）人工林也极多。
    - **伞形金合欢 (Umbrella Acacia)：** 肯尼亚、坦桑尼亚与南非热带稀树草原。
    - **西班牙苔藓 (Spanish Moss)：** 倒挂在橡树上的灰白色絮状苔藓，美国东南部（佐治亚、佛罗里达、路易斯安那）专属。""",
            "textEn": """- **Global Red Soil Regions:**
    - **South America:** Southern Brazil (Paraná State), Northeast Argentina (Misiones Province).
    - **Africa:** Ubiquitous vibrant red dirt in Kenya, Uganda, and Rwanda.
    - **Oceania:** Western Australia (vast interior red dirt outback).
    - **Asia:** Sri Lanka (orange-red soil), Cambodia, and southern Laos.
- **Signature Botanical Species:**
    - **Eucalyptus:** Universal dominant tree in Australia; also heavily planted in Iberian timber plantations (Portugal/Galicia).
    - **Umbrella Acacia:** Iconic flat-topped savannas of Kenya, Tanzania, and South Africa.
    - **Spanish Moss:** Pale grayish moss draping from live oaks, exclusive signature of the Southeastern US (GA, FL, LA)."""
        },
        {
            "titleZh": "欧美北部针阔叶森林对比",
            "titleEn": "Boreal Forest Comparisons",
            "textZh": """- **阔叶林树种差异：**
    - **北欧：** 以垂枝桦（Silver Birch）为主，树皮为极其明亮纯粹的白色，树干下部伴有明显的黑色深裂纹。
    - **北美：** 以美洲颤杨（Trembling Aspen）为主，树皮为浅灰绿色或黄绿色，树干笔直、光滑少裂纹。
- **针叶林树种差异：**
    - **北欧：** 以欧洲赤松（Scots Pine）和挪威云杉（Norway Spruce）为主；赤松树冠开阔，上半部树干呈现醒目的红棕色或橘红色。
    - **北美：** 以黑云杉（Black Spruce，枝桠稀疏树顶成团丛）、花旗松（Douglas Fir）和黄松为主。""",
            "textEn": """- **Deciduous Birch vs Aspen:**
    - **Northern Europe:** Silver Birch dominates, displaying bright chalky-white bark with deep rough black fissures near the base.
    - **North America:** Trembling Aspen dominates, displaying smooth greenish-gray or yellowish-white bark on tall straight trunks.
- **Coniferous Pine & Spruce Differences:**
    - **Northern Europe:** Scots Pine (open umbrella-like crowns with distinctive bright orange-red upper bark) and Norway Spruce.
    - **North America:** Black Spruce (scraggly branches with dense crown tufts), Douglas Fir, and Ponderosa Pine."""
        }
    ],
    "road-numbers": [
        {
            "titleZh": "欧洲国际公路 E-Roads",
            "titleEn": "European E-Roads Network",
            "textZh": """- **两位数 E+数字 公路规律：**
    - **奇数（E1, E5, E15, E75...）：** 南北走向主干道。数字越小越偏西，数字越大越往东。
        - 极小号（E1、E5）：位于最西侧的葡萄牙、西班牙、法国。
        - 中间号（E25、E35、E45）：贯穿西欧与中欧（荷兰–德国–意大利–瑞士）。
        - 较大号（E75、E85）：贯穿偏东的芬兰、波罗的海、中东欧、巴尔干、希腊、土耳其。
    - **偶数（E20、E40、E80...）：** 东西走向主干道。数字越小越靠北，数字越大越靠南。
        - 小号（E10、E20）：靠北横穿北欧三国、波罗的海与德国北部。
        - 中号（E40、E50）：中纬度横穿法国、德国、中东欧至乌克兰。
        - 大号（E80）：南部横贯西班牙、意大利、巴尔干、希腊与土耳其。""",
            "textEn": """- **2-Digit European E-Road Numbering Logic:**
    - **Odd Numbers (E1, E5, E15, E75...):** North-South corridors. Numbers increase from West to East.
        - Low numbers (E1, E5): Far west corridors (Portugal, Spain, France).
        - Mid numbers (E25, E35, E45): Central corridors (Netherlands, Germany, Switzerland, Italy).
        - High numbers (E75, E85): Eastern corridors (Finland, Baltic States, Balkans, Greece, Turkey).
    - **Even Numbers (E20, E40, E80...):** East-West corridors. Numbers increase from North to South.
        - Low numbers (E10, E20): Northern corridors (Norway, Sweden, Finland, Baltic coast).
        - Mid numbers (E40, E50): Mid-latitude corridors (France, Germany, Czechia, Ukraine).
        - High numbers (E80): Southern corridors (Spain, Italy, Balkans, Greece, Turkey)."""
        },
        {
            "titleZh": "大国公路编号规则 (美/俄/巴/澳)",
            "titleEn": "National Highway Networks (US/RU/BR/AU)",
            "textZh": """- **巴西联邦公路 (BR-xxx)：**
    - 0xx：从首都巴西利亚放射状向外发散。
    - 1xx：南北纵贯干线公路。
    - 2xx：东西横贯干线公路。
    - 3xx：斜向交叉干线公路。
- **俄罗斯联邦公路：**
    - M-公路：从莫斯科向外辐射的联邦干线（如 M4 前往黑海，M11 前往圣彼得堡）。
    - P-公路 / A-公路：区域重要联邦公路与各州连接干线。
- **美国州际公路 (Interstate)：**
    - 偶数东西向（小号南如 I-10，大号北如 I-90）；奇数南北向（小号西如 I-5，大号东如 I-95）。
- **澳大利亚干线公路：**
    - A1/M1：沿大陆海岸线环绕全国的标志性环形公路。
    - A87：纵贯红色中部的斯图尔特公路 (Stuart Highway)。""",
            "textEn": """- **Brazil Federal Highways (BR-xxx):**
    - BR-0xx: Radial corridors emanating outwards from capital Brasília.
    - BR-1xx: North-South trunk highways.
    - BR-2xx: East-West trunk highways.
    - BR-3xx: Diagonal cross-country highways.
- **Russia Federal Highway Network:**
    - M- Highways: Primary federal arteries radiating out from Moscow (e.g. M4 south, M11 to St. Petersburg).
    - R- / A- Highways: Regional federal connector routes connecting major administrative centers.
- **United States Interstate System:**
    - Even numbers run East-West (I-10 south to I-90 north); Odd numbers run North-South (I-5 west to I-95 east).
- **Australia Highway Network:**
    - Highway 1 (A1/M1): Epic circular ring road encircling the entire Australian continental perimeter.
    - A87 (Stuart Highway): Bisects the Red Centre from Darwin to Port Augusta."""
        }
    ],
    "phones": [
        {
            "titleZh": "北美与常见国际区号",
            "titleEn": "NANP & International Codes",
            "textZh": """- **重要国际电话区号：**
    - `+44`：英国 (UK)
    - `+55`：巴西 (Brazil)
    - `+62`：印度尼西亚 (Indonesia，对海岛极其有效)
    - `+33`：法国；`+49`：德国；`+39`：意大利；`+34`：西班牙；`+81`：日本；`+82`：韩国。
- **北美号码计划 (NANP)：**
    - 美国、加拿大及部分加勒比岛屿统一采用 10 位格式：`(XXX) XXX-XXXX` 或 `XXX-XXX-XXXX`。
    - 若看到 `1-800`、`1-888`、`1-877`，均为全美免费客服电话，无法用于判断地理位置。""",
            "textEn": """- **Crucial Country Calling Codes:**
    - `+44`: United Kingdom
    - `+55`: Brazil
    - `+62`: Indonesia (vital clue for island identification)
    - `+33`: France; `+49`: Germany; `+39`: Italy; `+34`: Spain; `+81`: Japan; `+82`: South Korea.
- **North American Numbering Plan (NANP):**
    - Standard 10-digit format across US & Canada: `(XXX) XXX-XXXX` or `XXX-XXX-XXXX`.
    - Toll-free prefixes (`1-800`, `1-888`, `1-877`) are non-geographic and cannot be used for state pinpointing."""
        },
        {
            "titleZh": "大国国内区号地图 (巴/印尼/日/土)",
            "titleEn": "Domestic Area Codes (BR/ID/JP/TR)",
            "textZh": """- **巴西 2 位数 DDD 区号（顺时针螺旋）：**
    - 1x：圣保罗州 (São Paulo)；2x：里约热内卢与圣埃斯皮里图。
    - 3x：米纳斯吉拉斯 (Minas Gerais)；4x：巴拉那与圣卡塔琳娜；5x：南里奥格兰德。
    - 6x：中西部（巴西利亚/戈亚斯/马托格罗索）；7x/8x：东北部沿海各州；9x：北部亚马逊雨林各州。
- **印度尼西亚岛屿区号：**
    - 02x：爪哇岛西部（雅加达 021、万隆 022）。
    - 03x：爪哇岛东部与巴厘岛 (Bali)。
    - 04x：苏拉威西岛 (Sulawesi)；05x：加里曼丹岛 (Kalimantan)；06x/07x：苏门答腊岛 (Sumatra)。
- **日本区号：** 北起北海道 01x，本州东北 02x，关东/东京 03/04x，关西/大阪 06x，南至九州冲绳 09x。
- **土耳其区号：** 2xx：伊斯坦布尔与欧洲西部；3xx：安卡拉与中部；4xx：东部地区。""",
            "textEn": """- **Brazil 2-Digit DDD Regional Codes (Clockwise sequence):**
    - 1x: São Paulo; 2x: Rio de Janeiro & Espírito Santo.
    - 3x: Minas Gerais; 4x: Paraná & Santa Catarina; 5x: Rio Grande do Sul.
    - 6x: Central-West (Brasília, Goiás, Mato Grosso); 7x/8x: Northeast coast; 9x: Northern Amazon states.
- **Indonesia Island Area Codes:**
    - 02x: Western Java (Jakarta 021, Bandung 022).
    - 03x: Eastern Java & Bali.
    - 04x: Sulawesi; 05x: Kalimantan (Borneo); 06x/07x: Sumatra.
- **Japan Area Codes:** Range from 01x in Hokkaido down to 09x in Kyushu/Okinawa (Tokyo 03, Osaka 06).
- **Turkey Area Codes:** 2xx: Istanbul & European Thrace; 3xx: Ankara & Central Anatolia; 4xx: Eastern Anatolia."""
        }
    ],
    "misc": [
        {
            "titleZh": "街景版权年份与冷门秘籍",
            "titleEn": "Copyright Years & Pro Metas",
            "textZh": """- **街景版权年份 (Copyright Year) 研判技巧：**
    - **Gen 4 镜头：** 画质清晰度极高，页面底部的版权年份（如 ©2024 Google）与实际拍摄年份高度一致，极其可靠。
    - **Gen 3 镜头：** 老旧街景经云端重新处理拼接后，版权年份可能延后，不可作为绝对唯一依据。
    - **希腊：** 老街景基本只有 2011/2012 年拍摄，近年轻微补充 2019/2023/2024 年，绝无 2021/2022 年街景。
    - **芬兰 vs 瑞典：** 芬兰覆盖大量 2022/2023 年街景；瑞典以 2021 年居多。
    - **卡塔尔 vs 阿联酋：** 卡塔尔多 2023 年；阿联酋多 2022 与 2024 年。
- **马来西亚“数字 2”法则：**
    - 两个独立大岛（西马半岛与东马婆罗洲）。
    - 道路中央常有两条纯白色实线。
    - 普通车牌为两段式黑色短车牌。""",
            "textEn": """- **Street View Copyright Year Metas:**
    - **Gen 4 Cameras:** Extremely reliable. Bottom copyright year (e.g. ©2024 Google) matches actual capture year closely.
    - **Gen 3 Cameras:** Old imagery may receive updated copyright stamps during cloud stitching updates.
    - **Greece:** Older coverage almost universally 2011/2012, with recent updates in 2019/2023/2024 (no 2021/2022 coverage).
    - **Finland vs Sweden:** Finland heavily updated in 2022/2023; Sweden predominantly 2021.
    - **Qatar vs UAE:** Qatar predominantly 2023; UAE predominantly 2022 and 2024.
- **The 'Rule of Two' in Malaysia:**
    - Two landmasses: Peninsular Malaysia and Borneo (Sabah/Sarawak).
    - Two solid white lines running down the road center.
    - Two distinct character blocks on black license plates."""
        }
    ]
}
