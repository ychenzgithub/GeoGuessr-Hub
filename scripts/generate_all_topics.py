# -*- coding: utf-8 -*-
"""
Generate comprehensive, full-fidelity topic sections for all 14 GeoGuessr topics.
Preserves 100% of original Notion notes, classifications, tables, and mnemonics
with complete Chinese (textZh) and English (textEn) bilingual translations.
"""

from scripts.enrich_topics_full import TOPIC_SECTIONS_FULL as EXISTING_TOPICS

# Keep the exact 8 comprehensive language sections already verified
LANGUAGES_SECTIONS = EXISTING_TOPICS["languages"]

NEW_TOPIC_SECTIONS = {
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
    - **瑞士：** 前牌极短（上方左红右红橙），后牌长且左侧带红盾白十字瑞士国徽与州徽。
    - **圣马力诺：** 白底短车牌，最左边浅蓝色/浅黄色山峰徽章，右侧带红色字（模糊后呈大红点）与蓝色字体。
    - **摩纳哥：** 短车牌，左上方有红色亲王徽章（模糊后红色一片），右侧蓝色字体。
    - **列支敦士登：** 长车牌，黑底白字（模糊后灰白一片），带红金小国徽。
    - **冰岛：** 长车牌，纯白/银色底配蓝色字体（模糊后灰白一片）。
    - **波黑：** 全白车牌，没有任何蓝条。
    - **俄罗斯 / 乌克兰 / 白俄罗斯：** 均为普通白底车牌，无欧盟蓝条。""",
            "textEn": """- **Double Blue Stripes (Left + Right):**
    - **Italy:** Very short front plate, standard long rear plate, blue strips on both ends.
    - **France:** Dual blue bands on post-2009 plates; earlier plates single left blue band (often with long antenna).
    - **Albania:** Bolder, darker blue strips with red flag badge on right (often with Sky Rift).
- **Single Left Blue Stripe:**
    - Standard across most European Union nations.
    - **Portugal:** Right edge historically carried a yellow year band.
    - **Belgium:** Dark red text causes blurred plate to appear distinctly pinkish.
    - **Israel:** Though outside the EU, standard civilian plates feature a blue left strip.
- **European Nations Without Blue Stripes:**
    - **Switzerland:** Short front plate; long rear plate with red Swiss cross shield and canton crest.
    - **San Marino:** Tiny white plate, light blue/yellow crest on left, red dot cluster, blue text.
    - **Monaco:** Short white plate with red princely crest on upper left, blue lettering.
    - **Liechtenstein:** Long black plate with white characters (appears grayish blurred) and gold/red royal crown.
    - **Iceland:** Long plain white/silver plate with blue lettering (blurred grayish).
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
    - **哥伦比亚：** 南美洲唯一民用车全黄牌，明亮短牌。
    - **老挝：** 东南亚唯一全黄牌国家。
    - **阿曼：** 阿拉伯半岛唯一全黄牌国家。
    - **纳米比亚：** 非洲极少数全黄牌国家。
- **前白后黄：**
    - **英国：** 前面白底长牌，后面黄底长牌（左侧常有蓝条）。
    - **马恩岛：** 前白后黄，左侧带红色条纹。
    - **直布罗陀 / 塞浦路斯：** 前白后黄，带欧盟蓝条。
    - **中国香港：** 前白后黄，无蓝条。
    - **博茨瓦纳：** 南部非洲唯一标准民用车前白后黄。
    - **肯尼亚：** 前面白底长牌，后面黄底方牌或长牌。
    - **卢旺达：** 前白后黄长车牌。
    - **斯里兰卡：** 前面白底长牌，后面黄底短牌。
    - **加纳：** 前白后黄。
- **商用车与特殊黄牌：**
    - **秘鲁：** 出租车采用黄色牌照。
    - **印度：** 商用车采用黄色长牌照。
    - **日本：** 货运或快递业务的轻型微型车 (Kei Car)，黄底黑字。
    - **泰国：** 巴士与卡车采用黄色长牌。
    - **土耳其 / 印度尼西亚：** 部分商用车辆采用黄底黑字牌。""",
            "textEn": """- **All-Yellow (Front & Rear Yellow):**
    - **Netherlands:** Left blue stripe, long plate.
    - **Luxembourg:** Left blue stripe, slightly shorter than Dutch plates (all-caps signs).
    - **Israel:** Left blue stripe, long yellow plate.
    - **Colombia:** Sole South American country with universal civilian bright yellow plates.
    - **Laos:** Sole Southeast Asian country with all-yellow civilian plates.
    - **Oman:** Sole Arabian Gulf country with all-yellow civilian plates.
    - **Namibia:** Distinctive African country with all-yellow civilian plates.
- **Front White & Rear Yellow:**
    - **United Kingdom:** White front, yellow rear (often with blue left strip).
    - **Isle of Man:** White front, yellow rear with red left stripe.
    - **Gibraltar / Cyprus:** White front, yellow rear with EU blue strip.
    - **Hong Kong:** White front, yellow rear, no blue strip.
    - **Botswana:** Sole southern African country with standard white front / yellow rear.
    - **Kenya:** Long white front, square/rectangular yellow rear.
    - **Rwanda:** Long white front, long yellow rear.
    - **Sri Lanka:** Long white front, shorter yellow rear.
    - **Ghana:** White front, yellow rear.
- **Commercial & Special Yellow Plates:**
    - **Peru:** Taxis carry yellow license plates.
    - **India:** Commercial vehicles carry yellow rectangular plates.
    - **Japan:** Commercial Kei mini-trucks and delivery vans carry yellow plates with black text.
    - **Thailand:** Buses and commercial trucks carry yellow plates.
    - **Turkey / Indonesia:** Certain commercial categories carry yellow plates with black font."""
        },
        {
            "titleZh": "特殊底色与区域识别",
            "titleEn": "Special Plate Colors & Regional Metas",
            "textZh": """- **黑底白字车牌：**
    - **印度尼西亚：** 白字分为三段（摩托车同样强制挂前车牌）。
    - **马来西亚：** 白字分为一段或两段，车牌相对短小。
    - **列支敦士登：** 整体呈深黑/深灰质感，中间偏左带有黄红双色皇冠小国徽。
    - **突尼斯：** 军警车辆为纯黑底车牌，左侧带有醒目的红色标记。
    - **阿根廷：** 旧车牌模糊后中间呈现明显的大黑圆点（新式车牌上方带浅蓝横条）。
- **白底红字车牌：**
    - **比利时：** 独特的酒红色字体，在街景模糊算法下整体呈现偏粉红色调。
- **红底与橙底车牌：**
    - **不丹：** 标志性的深暗红底白字车牌。
    - **阿曼：** 商用营运车辆为红底车牌（普通私家车为黄底）。
    - **厄瓜多尔：** 商用车辆为亮橙色牌（私家车为白底，顶部带橙色细条）。
    - **智利：** 商用运营车辆采用橙色车牌。
- **绿底与特殊色车牌：**
    - **挪威：** 双座商业轻卡与皮卡采用绿色车牌。
    - **匈牙利：** 新能源电动车使用浅绿色车牌。
    - **塞尔维亚：** 农用拖拉机与机械使用绿色车牌。
    - **印度：** 电动汽车专用绿色长牌。
    - **巴拿马：** 上绿下白双色拼接车牌。
    - **丹麦：** 商用车有时使用独特的“鹦鹉车牌”（左蓝、中黄、右白混拼）。
- **左侧红边车牌：**
    - **吉尔吉斯斯坦：** 车牌左侧有醒目的红色长方形竖条（内嵌国旗）。
    - **卡塔尔：** 车牌左端带有暗红色马龙纹垂直条带。
    - **摩纳哥：** 极细红边短车牌。
    - **阿尔巴尼亚：** 部分旧式或特殊车辆左侧带有细红条。""",
            "textEn": """- **Black Plates with White Characters:**
    - **Indonesia:** Characters split into 3 distinct segments (motorcycles mandate front plates).
    - **Malaysia:** Characters in 1 or 2 blocks, shorter plate dimensions.
    - **Liechtenstein:** Charcoal black background (looks grayish blurred), gold/red royal crest.
    - **Tunisia:** Police and military vehicles carry black plates with bold red badges on left.
    - **Argentina:** Older plates blur into a distinctive centered black dot (newer Mercosur plates have blue top bar).
- **White Plates with Red Characters:**
    - **Belgium:** Maroon red characters cause blurred plates to glow soft pink.
- **Red & Orange Plates:**
    - **Bhutan:** Iconic dark red plates with white characters.
    - **Oman:** Commercial transport plates have solid red background.
    - **Ecuador:** Commercial plates are bright orange (civilian plates white with orange top line).
    - **Chile:** Commercial transport vehicles carry orange plates.
- **Green & Multi-color Plates:**
    - **Norway:** Commercial utility vans and 2-seater pickups carry bright green plates.
    - **Hungary:** Electric vehicles carry mint-green plates.
    - **Serbia:** Agricultural tractors carry dark green plates.
    - **India:** EV vehicles carry green rectangular plates.
    - **Panama:** Distinctive green-top, white-bottom two-tone plate.
    - **Denmark:** Commercial 'parrot plates' feature yellow left body and white right strip with blue EU band.
- **Red Left Stripe Plates:**
    - **Kyrgyzstan:** Bold red rectangular strip on the left containing flag and 'KG'.
    - **Qatar:** Dark maroon vertical chevron band on left side.
    - **Monaco:** Very narrow red left border on short plates.
    - **Albania:** Certain older or special plates show red vertical left accents."""
        }
    ],
    "taxis": [
        {
            "titleZh": "拉丁美洲出租车全景",
            "titleEn": "Latin American Taxis Guide",
            "textZh": """- **秘鲁 (Peru)：**
    - 车型以黄色丰田 Probox / Yaris 居多。
    - 车身侧面贴有**红黄相间**（或白红相间）的棋盘格/方块反光条。
    - 挡风玻璃或车窗常贴有 `SETAME` 或 `SETACA` 官方营运许可标签。
- **哥伦比亚 (Colombia)：**
    - 全车统一为亮黄色，车型绝大多数为小两厢车（Kia Picanto / Hyundai Atos）。
    - 车身两侧后门及车顶喷有黑色牌照号；侧门通常直接喷涂**城市名称**（如 `BOGOTA`、`MEDELLIN`、`CALI`）。
- **墨西哥 (Mexico 各州)：**
    - **墨西哥城 (CDMX)：** **粉白双拼**（下半部粉红 Mexican Pink，上半部及车顶白色），车门带天使独立纪念柱剪影与 `CDMX` 字母。
    - **普埃布拉 (Puebla)：** 黑底车身，配黄色拉花/条纹。
    - **哈利斯科 (Guadalajara)：** 白底车身，配红蓝或黄色条纹。
    - **瓦哈卡 (Oaxaca)：** 暗红/枣红色车身配白顶。
    - **下加利福尼亚 (Baja California)：** 白底车身，带绿、黄或橙色饰条。
    - **注：** 墨西哥各州出租车门上通常直接印有所在州名或市名。
- **厄瓜多尔 (Ecuador)：**
    - 全车统一亮黄色；前门与侧身常见蓝/橙色圆形 `Seguridad Ciudadana` 治安监控贴纸，或车窗带监控摄像头警示贴；悬挂橙色营运车牌。
- **巴拿马 (Panama)：**
    - 亮黄色车身；后门或车窗边缘有红白相间反光条；侧门有白色长方框，内标许可号及所属地区/城市（如 `PANAMÁ`、`COLÓN`、`CHIRIQUÍ`）。
- **阿根廷 (Argentina)：**
    - **布宜诺斯艾利斯 (CABA)：** **黑黄双拼**（车身全黑，车顶与立柱为亮黄色）。
    - **外省城市：** 多为纯白色车身，配简单的绿/蓝条纹，不再使用黑黄拼色。
- **智利 (Chile)：**
    - **圣地亚哥 (Santiago)：** 同样为**黑黄双拼**（黑色车身配黄色车顶），但悬挂智利牌照（白底橙字或新式白牌）。
    - **外省区域：** 多为同款黑黄涂装，但侧门会强制喷涂所属区划名称（Comuna）。
- **玻利维亚 (Bolivia)：**
    - 多为老旧白色丰田轿车；前挡风玻璃贴有大号彩色字母 `TAXI` 或 `RADIO MOVIL`；车身常贯穿红白蓝三色细拉花。
- **乌拉圭 (Uruguay)：**
    - **蒙得维的亚：** 现代车多为白底黄顶，老车见黄黑拼色或白色带蓝横条纹，牌照带黄色营运标识。
- **危地马拉 (Guatemala)：**
    - 普通出租车多为白/银色；主要高频载具为红色三轮突突车（Tuk-tuk），车身多印有所在省名或镇名。""",
            "textEn": """- **Peru:**
    - Predominantly yellow Toyota Probox / Yaris station wagons.
    - Sides lined with **checkered red-and-yellow** (or red-and-white) reflective safety strips.
    - Windshields prominently display `SETAME` (Lima) or `SETACA` official authorization badges.
- **Colombia:**
    - Solid bright yellow hatchbacks (Kia Picanto, Hyundai Atos).
    - Rear side doors and roof stenciled with black license plate numbers; doors clearly stamped with **city names** (`BOGOTA`, `MEDELLIN`, `CALI`).
- **Mexico (State by State):**
    - **Mexico City (CDMX):** **Pink & White** two-tone (Mexican Pink bottom, white top) with Angel of Independence monument logo and `CDMX`.
    - **Puebla:** Black body with yellow racing stripes/side patterns.
    - **Guadalajara (Jalisco):** White body with red-blue or yellow stripes.
    - **Oaxaca:** Maroon/burgundy body with white roof.
    - **Baja California:** White body with green, yellow, or orange stripes.
    - **Note:** Mexican taxis usually display their state or municipality name directly on the front doors.
- **Ecuador:**
    - Solid bright yellow; front doors feature circular blue/orange `Seguridad Ciudadana` surveillance stickers; orange commercial license plates.
- **Panama:**
    - Solid bright yellow; red-and-white reflective tape along rear doors; door carries white stencil with permit number and region (`PANAMÁ`, `COLÓN`, `CHIRIQUÍ`).
- **Argentina:**
    - **Buenos Aires (CABA):** **Black & Yellow** (gloss black body with bright yellow roof and pillars).
    - **Provinces:** Solid white sedans with green or light blue side stripes.
- **Chile:**
    - **Santiago:** Black body with bright yellow roof, accompanied by Chilean license plates.
    - **Provinces:** Black and yellow, but side doors mandated to display municipal zone name (Comuna).
- **Bolivia:**
    - Older white Japanese sedans with colorful `TAXI` or `RADIO MOVIL` window decals and thin red-white-blue side pinstripes.
- **Uruguay (Montevideo):**
    - White body with yellow roof, older models black/yellow or white with blue stripes; yellow commercial plate accents.
- **Guatemala:**
    - Conventional taxis white/silver; ubiquitous transport consists of red three-wheeled motorized tuk-tuks stenciled with regional municipality names."""
        },
        {
            "titleZh": "亚太、中东与欧洲出租车",
            "titleEn": "Asia-Pacific, Middle East & Europe Taxis",
            "textZh": """- **泰国 (Thailand - 曼谷)：**
    - 双拼色：**黄绿双拼**（个人车主运营）。
    - 纯色与撞色：纯粉红色、纯橙色、红蓝双拼（出租车公司车队）。
- **中国台湾 (Taiwan)：** 全车纯黄色（“小黄”），车顶带各车队灯牌，悬挂白底红字营业用车牌。
- **中国香港 (Hong Kong)：**
    - **市区（港岛、九龙）：** **红色**车身，银色车顶。
    - **新界：** **绿色**车身，白色车顶。
    - **大屿山：** **天蓝色**车身，白色车顶。
- **日本 (Japan)：** 深黑色/深海军蓝为主（丰田 JPN Taxi / Crown Comfort）；悬挂**绿底白字**营业牌照；车顶带行灯。
- **新加坡 (Singapore)：** 按公司分颜色：蓝色为康福德高 (Comfort)，黄色为城市出租 (CityCab)，银红色为得运 (Trans-Cab)。
- **阿联酋 (Dubai)：** 全车统一为米色/浅香槟色；车顶分红顶、蓝顶、黄顶、绿顶；**粉红顶**为女性与家庭专用。
- **土耳其 (Turkey - 伊斯坦布尔)：** 纯黄色车身，车顶中央设黄色梯形小顶灯，车门喷印区域代码与许可号（如 `34 T ...`，34 即伊斯坦布尔省代码）。
- **希腊 (Greece - 雅典)：** 全车亮黄色（多为 Skoda 或 Mercedes 车型），后牌照多为黄底营运牌。
- **英国 (UK - 伦敦)：** 经典黑色高顶复古出租车 (Black Cab)。
- **西班牙 (Spain - 巴塞罗那)：** 标志性的纯黑车身搭配黄色车门与后备箱。""",
            "textEn": """- **Thailand (Bangkok):** Two-tone yellow-green (private owners); solid bright pink, orange, or red-blue (company fleets).
- **Taiwan:** Pure yellow sedans/crossovers with roof company light boxes; white plates with red lettering.
- **Hong Kong:** Red body with silver roof (Urban/Kowloon); Green body with white roof (New Territories); Sky blue body with white roof (Lantau Island).
- **Japan:** Dark navy blue or black (Toyota Crown Comfort / JPN Taxi); green commercial license plates; ornate illuminated roof lanterns.
- **Singapore:** Blue (Comfort), Yellow (CityCab), Silver-Red (Trans-Cab).
- **UAE (Dubai):** Cream / beige bodies with color-coded roofs: red, blue, green, yellow; pink roofs exclusively for women and families.
- **Turkey (Istanbul):** Pure yellow body with yellow roof light; door printed with province code '34 T ...' (34 = Istanbul).
- **Greece (Athens):** Bright yellow body with yellow rear commercial plate.
- **United Kingdom (London):** Iconic tall black Hackney carriages (Black Cabs).
- **Spain (Barcelona):** Signature black body with bright yellow doors and trunk lid."""
        }
    ],
    "cars": [
        {
            "titleZh": "镜头代数、画质与机位特征",
            "titleEn": "Camera Generations & Rig Metas",
            "textZh": """- **第一代 (Gen 1)：** 极低分辨率，全屏模糊感与严重马赛克。日、法、美、加、澳、墨早期街景，实战中极少碰到。
- **第二代 (Gen 2)：** 画面底部和天空有巨大的“圆形模糊面”，色彩明显偏紫色（紫边）。分布于西欧、北美、巴西、南非、俄罗斯。
- **糟糕画质 (Shitcam)：** 画面不仅模糊，且常伴随大面积圆圈遮挡。高频出现在：**印度、柬埔寨、黎巴嫩、尼日利亚、厄瓜多尔**。
- **第三代 (Gen 3)：** 画质清晰但色彩饱和度较低，四周边缘有暗角，车底有明显的车体遮挡模糊。通常可见天线或天线底座（澳大利亚、南非、俄罗斯多长天线）。
- **第四代 (Gen 4)：** 超高清极品画质，色彩极度鲜艳饱满。如果画质极好但完全看不见天线，优先考虑 Gen 4 覆盖区。
- **Small cam：** 与四代机类似，极高清、色彩鲜艳，但车底有很大面积的非圆形模糊。覆盖地区包括：南美（巴西、秘鲁）、非洲（南非）、亚洲（印度、土耳其）、北美（美、加、波多黎各）、欧洲（北欧、西欧、南欧均有，**自德国以东完全没有**）。
- **低视角相机 (Lowcam)：** 视角明显贴近地面，车底模糊范围极大（仿佛蹲在地上看路）。经典三剑客：**日本**（左行）、**瑞士**（阿尔卑斯右行）、**斯里兰卡**（热带左行）。
- **运行方向判断：**
    - 三代车：视野回望通常看见车辆后部。
    - 四代本田车：多为白色，视野向前看见车头前部，车后有时可见刹车灯；大量分布于美洲、亚洲、大洋洲。
    - 四代欧宝车：多为蓝色（也有其它颜色），视野回望看见车尾，车屁股中央有凹进去的小坑；主要分布于欧洲与南非。""",
            "textEn": """- **Generation 1 (Gen 1):** Ultra-low resolution, severe pixelation across the whole scene. Rare in modern play (early US, Canada, Japan, France, Australia).
- **Generation 2 (Gen 2):** Large circular halos in the sky and car blur underneath, strong purple chromatic aberration / purple tint. Found in Western Europe, North America, Brazil, South Africa, Russia.
- **Low Quality (Shitcam):** Severe pixelation and blur paired with massive circular halo lens blocks. Classic countries: **India, Cambodia, Lebanon, Nigeria, Ecuador**.
- **Generation 3 (Gen 3):** High resolution but lower color saturation, subtle vignette at corners, distinct vehicle shadow blur beneath camera. Long antennas common in Australia, South Africa, and Russia.
- **Generation 4 (Gen 4):** Ultra-high definition, vibrant saturated colors, tiny circular blur directly beneath camera, antenna absent.
- **Small Cam:** Similar to Gen 4 ultra-clarity, but camera car blur underneath is large and non-circular. Present in South America (Brazil, Peru), Africa (South Africa), Asia (India, Turkey), North America (US, Canada, PR), Europe (Nordics, Western & Southern Europe; **absent east of Germany**).
- **Low Camera (Lowcam):** Mounted significantly lower to the pavement (crouching angle). The iconic trio: **Japan** (left-drive), **Switzerland** (alpine right-drive), **Sri Lanka** (tropical left-drive).
- **Vehicle Orientation:**
    - Gen 3: Rear view shows vehicle back.
    - Gen 4 Honda: Typically white, forward perspective reveals hood front, brake lights sometimes behind; Americas, Asia, Oceania.
    - Gen 4 Opel: Typically blue (other colors exist), rear view displays tailgate with distinct indented notch; Europe and South Africa."""
        },
        {
            "titleZh": "车顶行李架、黑胶带与金属横杆",
            "titleEn": "Roof Racks, Tape & Crossbars",
            "textZh": """- **黑胶带固定标记：**
    - **加纳：** 右前方横杠上缠绕有明显的黑胶带；车体前方 Google 地图徽标经常可见。
    - **留尼汪：** 右后方横杠上缠绕有黑胶带。
    - **多米尼加：** 车顶横杆中间和边缘配有黑色防护垫/胶带。
- **金属横杆 (Roof Racks)：**
    - **危地马拉：** 非常干净光滑的银色金属横杆，黑色后视镜清晰可见。
    - **吉尔吉斯斯坦：** 与危地马拉类似，银色横杆配黑色后视镜；关键定位：左后视镜中道路标线接触镜面上缘为北部，接触左侧或左上角为南部（靠近乌兹别克斯坦边境处）。
    - **法罗群岛：** 偶尔可见与危地马拉类似的金属横杆。
    - **库拉索：** 黑色金属横杆，左前行李架上贴有白色贴纸。
    - **孟加拉国：** 偶尔见金属横杆车，配备鲜艳的**红色后视镜**。
    - **塞内加尔：** 偶尔见类似金属横杆，有时可见右后视镜（常伴随天空裂缝）。""",
            "textEn": """- **Black Tape Markers:**
    - **Ghana:** Conspicuous black electrical tape wrapped on front-right roof bar; Google Maps logo often visible on front hood.
    - **Réunion:** Black tape wrapped on rear-right roof bar.
    - **Dominican Republic:** Black protective tape pads centered and on edges of roof crossbars.
- **Metal Crossbars (Roof Racks):**
    - **Guatemala:** Ultra-clean silver tubular crossbars with black side mirrors visible.
    - **Kyrgyzstan:** Similar clean silver crossbars with black side mirrors. Pro meta: looking into left side mirror, road centerline touching top edge indicates North; touching left or upper-left corner indicates South (near Uzbek border).
    - **Faroe Islands:** Occasionally features silver roof rack crossbars.
    - **Curaçao:** Black crossbars with white sticker on front-left rack mount.
    - **Bangladesh:** Roof rack cars occasionally equipped with distinctive **red side mirrors**.
    - **Senegal:** Roof crossbars occasionally visible (frequently accompanied by Sky Rift)."""
        },
        {
            "titleZh": "皮卡车型、涉水喉、警车护航与车身涂装",
            "titleEn": "Pickups, Snorkels, Escorts & Liveries",
            "textZh": """- **皮卡车型全览 (Pickups)：**
    - **哈萨克斯坦：** 白色皮卡，中间带螺纹黑色天线，经常只露出车头前端，车身常被模糊。
    - **卡塔尔：** 白色皮卡，经常被完全模糊，车前左侧有细长向上天线。
    - **阿曼：** 白色皮卡，带天线底座，有时无天线，车身大面积模糊。
    - **厄瓜多尔：** 四代白色皮卡，配黑色车斗，无天线，有时可见红色刹车灯。
    - **巴拿马：** 白色皮卡，中间黑色天线，车头与部分车身可见，车身上有两根金属横杠与竖立金属框架。
    - **哥斯达黎加：** 白色皮卡，中间黑色天线，车头可见，车身带两根金属横杠。
    - **纳米比亚：** 白色皮卡，天线粗且明显偏向左侧。
    - **卢旺达：** 白/黑/棕色皮卡，经常露出红色高位刹车灯。
    - **肯尼亚：** 各式皮卡，引擎盖右前方露出黑色涉水喉 (Snorkel)。
    - **美属萨摩亚：** 黑色皮卡，车斗生锈且裸露面积大，右车头带细天线。
    - **百慕大：** 黑色方形皮卡。
    - **蒙古：** 蓝色花纹皮卡带涉水喉；或者车顶驮着巨大的露营帐篷与野营行李包。
    - **乌干达：** 白色方形皮卡。
    - **塞内加尔：** 银色皮卡，顶部天线稍偏左侧，车斗带有两根横杠。
    - **土耳其：** 偶见灰黑色皮卡。
- **天线特征：**
    - **卡塔尔：** 左车头向上竖立细长天线。
    - **波多黎各 / 关岛 / 北马里亚纳：** 三代车右车头有向上的细长天线（尼日利亚偶尔也有）。
- **警车与军车护航：**
    - **尼日利亚：** 常见警车全程武装护航（后视镜或跟车可见警灯与武装警察）。
    - **突尼斯：** 军用车护航（跟车车牌左侧带明显红点）。
- **特色车身涂装：**
    - **乌克兰：** 标志性的纯红色街景车身。
    - **斯里兰卡：** 车身模糊边缘露出一抹红、白、蓝相间的色块（视觉上非常像法国国旗）。
    - **智利：** 白色车身，但边缘露出一道光滑利落的黑边。
    - **阿根廷：** 黑车左车头有时可见黑色横杠头部与白色螺丝固定件。""",
            "textEn": """- **Pickup Trucks Meta (Pickups):**
    - **Kazakhstan:** White pickup with threaded black center antenna, front hood visible, body blurred.
    - **Qatar:** White pickup heavily blurred, slender upward antenna mounted on front-left.
    - **Oman:** White pickup with visible antenna base, heavily blurred.
    - **Ecuador:** Gen 4 white pickup with black cargo bed, no antenna, red third brake light.
    - **Panama:** White pickup with center black antenna, two metal bars and vertical rack frame.
    - **Costa Rica:** White pickup with center antenna and two tubular side bars.
    - **Namibia:** White pickup with thick antenna leaning distinctly toward the left.
    - **Rwanda:** White, black, or brown pickup showing red third brake light.
    - **Kenya:** Various pickups sporting a thick black raised air snorkel on front-right hood.
    - **American Samoa:** Black pickup with rusty cargo bed heavily exposed, thin front-right antenna.
    - **Bermuda:** Boxy black pickup truck.
    - **Mongolia:** Blue patterned pickup with snorkel, or car roof loaded with massive camping tent/packs.
    - **Uganda:** White boxy pickup.
    - **Senegal:** Silver pickup with antenna slightly offset to the left, two crossbars over cargo bed.
    - **Turkey:** Occasionally features dark gray/black pickups.
- **Antenna Metas:**
    - **Qatar:** Slender vertical antenna on front-left fender.
    - **Puerto Rico / Guam / Northern Mariana Islands:** Gen 3 camera with thin upward antenna on front-right fender (also occasional in Nigeria).
- **Escort Vehicles:**
    - **Nigeria:** Armed police chase vehicle with visible blue/red strobe light bar.
    - **Tunisia:** Military escort follow-pickup (military plate with red left badge).
- **Special Vehicle Liveries:**
    - **Ukraine:** Signature bright red camera car.
    - **Sri Lanka:** Blur fringe reveals a sliver of red, white, and blue (resembles French flag).
    - **Chile:** White car revealing a smooth, sleek black lower rim edge.
    - **Argentina:** Black car showing front-left rack bar tip with exposed white bolt."""
        }
    ],
    "poles": [
        {
            "titleZh": "混凝土方孔杆与梯子杆",
            "titleEn": "Holey & Ladder Concrete Poles",
            "textZh": """- **方孔型水泥杆 (Holey Poles)：**
    - **匈牙利 (H-holes)：** H 型，从头到脚通体分布长方形通孔。
    - **波兰 (P-holes)：** P 型，底部约 1.5 米为实心纯混凝土无孔，上方才开始开孔。
    - **罗马尼亚 (R-holes)：** R 型，带通孔，底部常涂刷白色油漆防护圈，常带有黄色警示贴纸，无 A-frame 支撑。
    - **比利时：** 方孔边缘偏圆润平滑。
    - **斯里兰卡：** 巨大矩形通孔。
- **梯子型电线杆 (Ladder Poles)：**
    - **巴西：** 下部梯子型，隔板数大约为 3，上部有小孔，方形截面。
    - **厄瓜多尔：** 下部梯子型，隔板数明显偏多，上部带小孔。
    - **智利：** 下部梯子型，最下方的横档隔板间距极大，上部收窄。
    - **葡萄牙 / 北马其顿：** 梯子较瘦，隔板较少，有时后面有圆孔，上方有凹点。
    - **西班牙 / 法国：** 梯子较瘦，隔板密集。
    - **土耳其：** 金属梯子电线杆。
    - **柬埔寨：** 类似法国梯子杆。
    - **越南：** 四个面全部有镂空梯子横档。
    - **尼日利亚：** 类似巴西梯子杆。
    - **塞内加尔：** 类似法国梯子杆。
    - **澳大利亚 (北领地 NT)：** 红色荒漠中常见生锈带孔金属电线杆。
    - **新西兰：** 梯子极少甚至完全没有，类似智利风格。""",
            "textEn": """- **Holey Concrete Poles:**
    - **Hungary (H-holes):** Rectangular holes running continuously from bottom to very top.
    - **Poland (P-holes):** Bottom base section (approx 1.5m) is solid concrete without holes.
    - **Romania (R-holes):** Rectangular holes with white-painted base collar and yellow warning stickers; no A-frame.
    - **Belgium:** Rectangular holes with rounded curved corners.
    - **Sri Lanka:** Very large rectangular openings.
- **Ladder Concrete Poles:**
    - **Brazil:** Ladder design with around 3 rungs on lower half, square cross-section.
    - **Ecuador:** Ladder design with significantly more rungs.
    - **Chile:** Very wide spacing between bottom rungs, tapering upwards.
    - **Portugal / North Macedonia:** Slender ladder poles with fewer rungs, indented dots above.
    - **Spain / France:** Slender ladder poles with densely spaced rungs.
    - **Turkey:** Metal ladder utility poles.
    - **Cambodia:** Similar to French ladder style.
    - **Vietnam:** Four-sided hollow ladder rungs.
    - **Nigeria:** Similar to Brazilian ladder design.
    - **Senegal:** Similar to French ladder design.
    - **Australia (Northern Territory):** Rusty metal poles with punched holes across desert outback.
    - **New Zealand:** Extremely sparse ladder rungs, tapering up."""
        },
        {
            "titleZh": "八边形杆、圆杆与特殊结构",
            "titleEn": "Octagonal, Round & Special Poles",
            "textZh": """- **八边形水泥杆：** **墨西哥、厄瓜多尔、哥伦比亚**最经典拉美三强标志。
- **方形带凹点水泥杆：** **泰国、老挝、斯里兰卡、印度尼西亚**；比利时凹点极多；法国凹点极少且仅在最顶端；多米尼加底部会涂刷颜色。
- **金属网状与金属杆：** 西班牙、意大利、保加利亚、塞尔维亚、土耳其、以色列常见格构金属柱；马来西亚全境普遍使用热镀锌圆铁管杆。
- **特殊结构杆型：**
    - **双圆柱并排：** 捷克、斯洛伐克经典并立双杆。
    - **A-frame（单根斜向支撑杆）：** 波罗的海三国（爱沙尼亚、拉脱维亚、立陶宛）极多。
    - **A字形（A-frame 加横杆）：** 奥地利阿尔卑斯山区公路常见。
    - **极度弯曲木杆：** **玻利维亚**专属（尤其东部圣克鲁斯低地区域）。
    - **纯木杆国家：** 希腊、塞浦路斯乡村几乎只有超高木杆，没有水泥杆。
    - **Stobie 杆：** **澳大利亚南澳州 (SA)** 独占（两根钢制工字钢夹住中间的混凝土柱）。""",
            "textEn": """- **Octagonal Concrete Poles:** **Mexico, Ecuador, Colombia** classic Latin American trio.
- **Square Poles with Indentations:** **Thailand, Laos, Sri Lanka, Indonesia**; Belgium features many indentations; France has very few at the very top; Dominican Republic has colored bases.
- **Lattice Metal Poles:** Spain, Italy, Bulgaria, Serbia, Turkey, Israel; Malaysia universally uses galvanized tubular steel poles.
- **Special Pole Structures:**
    - **Double Cylindrical Poles:** Czechia and Slovakia twin poles.
    - **A-Frame Diagonal Struts:** Extremely prevalent in Baltic countries (Estonia, Latvia, Lithuania).
    - **A-Shape with Crossbar:** Austrian mountain roads.
    - **Extremely Crooked Wooden Poles:** **Bolivia** exclusive (especially eastern lowlands of Santa Cruz).
    - **Exclusively Wooden Poles:** Greece and Cyprus rural roads rely almost entirely on tall wooden poles.
    - **Stobie Poles:** **South Australia (SA)** exclusive (two steel I-beams flanging a concrete core)."""
        },
        {
            "titleZh": "顶部结构与变压器特征",
            "titleEn": "Pole Tops & Transformers",
            "textZh": """- **横杆下倒三角支撑：** 捷克、斯洛伐克、阿尔巴尼亚。
- **竖琴状支架：** 希腊专属（金属支架如竖琴弦列）。
- **简单短横杠：** 爱沙尼亚、立陶宛、俄罗斯常见。
- **上下交错挂钩：** 拉脱维亚、保加利亚（混凝土杆）、克罗地亚。
- **向下弯弓型支架：** 法国、塞内加尔、比利时、西班牙、罗马尼亚、突尼斯、马达加斯加。
- **拿破仑帽型顶盖：** 法国典型特征。
- **密集绝缘子群：** 南非、希腊。
- **横臂朝向与几何：**
    - 秘鲁：三根横臂都在同一侧面。
    - 阿根廷：三根横臂分居两边。
    - 乌拉圭 / 捷克 / 斯洛伐克：三叉戟金属支架。
    - 南非 / 澳大利亚 / 阿根廷 / 巴西：横杠锐角交叉成横向 A 型。
    - 南非开普敦：金属横杠组成竖向 A 型。
    - 韩国 / 法国：电线杆顶端明显变细。
- **变压器朝向：** 加拿大新不伦瑞克 (NB) 与不列颠哥伦比亚 (BC) 变压器垂直正对道路方向，其他省份多平行于道路。""",
            "textEn": """- **Inverted Triangle Brackets under Crossbar:** Czechia, Slovakia, Albania.
- **Harp-Shaped Bracket:** Greece exclusive (resembles harp strings).
- **Simple Short Crossbars:** Estonia, Lithuania, Russia.
- **Staggered Alternating Hooks:** Latvia, Bulgaria (concrete poles), Croatia.
- **Downward Curved Bow Brackets:** France, Senegal, Belgium, Spain, Romania, Tunisia, Madagascar.
- **Napoleon Hat Shroud:** France.
- **Dense Tiered Insulators:** South Africa, Greece.
- **Crossarm Layout:**
    - Peru: Three crossarms all mounted on the same side.
    - Argentina: Three crossarms split across both sides.
    - Uruguay / Czechia / Slovakia: Trident-shaped brackets.
    - South Africa / Australia / Argentina / Brazil: Horizontal A-frame bracket.
    - Cape Town (South Africa): Vertical A-frame bracket.
    - South Korea / France: Pole trunk distinctly tapers at the top.
- **Transformer Orientation:** Canada NB and BC mount transformers facing the road, while other provinces mount parallel."""
        },
        {
            "titleZh": "底部涂装、金属环、贴纸与变电箱",
            "titleEn": "Base Markings, Decals & Substations",
            "textZh": """- **底部条纹涂装：**
    - **中国台湾：** 黄黑斜条纹一直涂刷延伸到地面。
    - **韩国：** 黄黑斜条纹离地面有数十厘米空白，不接触地面。
    - **日本：** 竖向黑黄/黑色条纹，通常不接触地面。
- **黑袜子（底部一圈黑色上方刷白）：** **俄罗斯**与前苏联地区。
- **色段与底部刷色：**
    - 印尼（红白相间段）；以色列（黑白相间段）；哥伦比亚 / 秘鲁（黄黑相间段）。
    - 多米尼加（底部一人高涂刷各种鲜艳颜色）；西澳大利亚（底部刷绿漆）。
    - 斯洛伐克（木杆底部用混凝土柱加固支撑）；北美（拉线贴地处带黄色塑料套管）。
- **金属环与贴纸：**
    - **新西兰：** 杆身中间有一圈金属环包裹电线杆四周（防负鼠攀爬）。
    - **澳大利亚塔斯马尼亚：** 杆身有一圈橄榄绿色的金属环。
    - **美国加州：** 木杆上常有三条黄色金属箍；夏威夷一条。
    - **贴纸：** 法国蓝贴纸；德国白色正方形贴纸；意大利横长方形白贴纸；马来西亚/澳洲QSL黑色贴纸；英国黄色贴纸（有人形图案）、爱尔兰黄色贴纸（无人形图案）；罗马尼亚黄贴纸；秘鲁各色贴纸。
    - **支架：** 木杆两侧金属架，英国顶端平整，爱尔兰顶端倾斜。
- **变电箱警告标识：**
    - **拉脱维亚：** 黄色三角黑色闪电标志，变电箱编码（`KS-xxxx` 或 `ST-xxxx` 格式）。
    - **意大利：** Enel（国家电力公司）标志与红色多重折线闪电。
    - **波兰：** `ST` 开头代码配合波兰语黄色或白色警告标牌。
    - **墨西哥：** CFE 绿色圆形标志，中心带白色闪电。
    - **哥伦比亚：** 大面积亮黄底黑字贴纸，波哥大常喷印 `CODENSA`。""",
            "textEn": """- **Base Hazard Stripes:**
    - **Taiwan:** Yellow and black diagonal stripes reach all the way down to the ground.
    - **South Korea:** Diagonal hazard stripes stop short of the ground.
    - **Japan:** Vertical black/yellow hazard stripes that generally do not touch the ground.
- **Black Socks (Black base collar with white trunk above):** **Russia** and former Soviet territories.
- **Color Blocks:**
    - Indonesia (red-white), Israel (black-white), Colombia / Peru (yellow-black).
    - Dominican Republic (man-height brightly painted base); Western Australia (green base).
    - Slovakia (wooden poles reinforced by concrete base pillar); North America (yellow plastic guy wire guards).
- **Metal Bands & Decals:**
    - **New Zealand:** Wide metal band wrapping fully around the pole trunk (possum guard).
    - **Tasmania (Australia):** Olive-green metal collar around the trunk.
    - **California (US):** Three yellow metal bands around wooden poles; Hawaii has one.
    - **Stickers:** France blue; Germany square white; Italy horizontal white; Malaysia black; UK yellow (with stickman); Ireland yellow (no stickman); Romania yellow; Peru multi-color.
    - **Struts:** Wood pole metal side brackets have flat top in UK vs slanted top in Ireland.
- **Substation Box Logos:**
    - **Latvia:** Yellow triangle lightning with 'KS-xxxx' or 'ST-xxxx' serials.
    - **Italy:** Enel logo with multi-kinked red lightning bolt.
    - **Poland:** 'ST' code on Polish warning plaques.
    - **Mexico:** CFE green round seal with white lightning bolt.
    - **Colombia:** Bright yellow warning placards; Bogotá shows 'CODENSA' stencils."""
        }
    ],
    "bollards": [
        {
            "titleZh": "欧洲各大路缘标家族体系",
            "titleEn": "European Bollard Families Guide",
            "textZh": """- **奥地利型 (Austrian style)：** 白色三角柱，配短黑色顶部。
    - **奥地利：** 有时顶部带小盖子；深红或深灰色反光片，背面为黑色反光片。
    - **斯洛文尼亚 / 黑山 / 塞尔维亚：** 正面鲜红色，背面白色反光片；黑山与塞尔维亚反光片更为细长。
- **意大利型 (Italian style)：** 白色三角截面柱，顶部黑色帽子向下延伸较长（相当于奥地利型黑色部分下移并包裹至顶端边缘）。
    - **意大利：** 典型配置。
    - **阿尔巴尼亚：** 伴随断裂天空辅助判断。
    - **圣马力诺：** 出现密度极高。
- **南欧型 (South European style)：** 白色三角柱，中间黑色块，上端留白较少。
    - **克罗地亚 / 北马其顿：** 前深红后白反光板。
    - **葡萄牙：** 白色反光板带两颗螺丝；或斜黑块配白色/橙色长方反光板。
    - **安道尔：** 短方块橙色反光板。
    - **希腊：** 斜黑块配接近正方形红橙色反光板；柱身常为空心。
- **德国型 (German style)：** 白色三角柱，中间黑色斜块，上端留白较多。
    - **德国：** 前面白色反光板（路口用黄色），反光板上有**两颗**螺丝，后面两个大圆钉。
    - **卢森堡：** 前面白色反光板带**三颗**螺丝，后面两个大圆钉；下方有时带靠外侧红反光条。
    - **西班牙：** 通常为空心，内嵌鲜黄色反光板；西南埃斯特雷马杜拉顶部有绿色细条。
    - **立陶宛：** 前橙后白反光板。
    - **匈牙利：** 前红后白反光板。
    - **乌克兰：** 类似匈牙利，红色反光板更宽。
- **北欧型 (Nordic style)：** 圆形或圆弧形平顶白杆，中间黑块，上端留白少。
    - **爱沙尼亚：** 圆形空心平顶白杆，前白方块，后两个橙色圆点反光板。
    - **芬兰：** 类似爱沙尼亚，后为白色圆点反光板（很少出现，多用雪迹杆）。
    - **拉脱维亚：** 半圆或扁形平顶白杆，前有方块反光板（可能有数字），后两个圆点。
    - **挪威：** 圆弧形白杆，黑色部分呈明显平行四边形状，中间灰色方块。
- **无黑块型 (No Black Band)：** 纯白杆无黑色方块。
    - **土耳其：** 圆弧片状，红色方块不接触边缘；反面没有反光板。
    - **罗马尼亚：** 圆弧片状，红方块更长（类似澳大利亚），较少出现。
    - **波兰：** 三角形粗白杆，红方块包裹正反面，前红后白。
    - **荷兰：** 圆润白杆，细长红色反光板。
    - **比利时：** 三角形圆润白杆，前黄后白正方形反光板。
    - **丹麦：** 三角形白杆，前黄后白反光板，顶部有橙色细条。
- **圆柱型与彩色线段型：**
    - **爱尔兰：** 绿白圆柱形。
    - **英国：** 圆头，从上至下为黑白黑，上方黑块内嵌红/白反光片。
    - **法国：** 白色铅笔型圆柱，带红色或灰色环绕带。
    - **苏格兰：** 类似法国，但白杆上有凹进去的条纹。
    - **瑞士：** 圆柱形，灰圈配白色反光板。
    - **安道尔：** 细长杆子，顶端一段为红色。
- **显著特征国家：**
    - **冰岛：** 全杆鲜黄色扁平长方形柱体，极其醒目。
    - **捷克 & 斯洛伐克：** 很短矮粗，通常有**两块平行**的橙色反光块。
    - **塞尔维亚：** 深红反光板仅在靠近道路的半边。""",
            "textEn": """- **Austrian Style:** White triangular post with short black top.
    - **Austria:** Dark red reflector, black on rear, optional cap.
    - **Slovenia / Montenegro / Serbia:** Bright red front, white rear; Montenegro/Serbia reflector is thinner.
- **Italian Style:** White triangular post with long black cap extending downwards over the top rim.
    - **Italy:** Classic standard.
    - **Albania:** Paired with Sky Rift.
    - **San Marino:** Exceptionally high density.
- **South European Style:** White triangular post with black band, narrow white space above.
    - **Croatia / North Macedonia:** Dark red front, white rear.
    - **Portugal:** White reflector with two screws, or angled black patch with white/orange rectangle.
    - **Andorra:** Short square orange reflector.
    - **Greece:** Slanted black block with square reddish-orange reflector; often hollow.
- **German Style:** White triangular post with slanted black band, generous white space above.
    - **Germany:** White reflector front (yellow at junctions) with **two screws**, two round studs behind.
    - **Luxembourg:** White reflector with **three screws**, two round studs behind; optional lower red strip.
    - **Spain:** Hollow post with bright yellow reflector; Extremadura has green top rim.
    - **Lithuania:** Orange front, white rear.
    - **Hungary:** Red front, white rear.
    - **Ukraine:** Similar to Hungary but red block is wider.
- **Nordic Style:** Rounded/cylindrical flat-top white post with black band.
    - **Estonia:** Hollow flat-top, white front square, two orange rear dots.
    - **Finland:** Two white rear dots (rare; snow poles preferred).
    - **Latvia:** Semi-circle flat top with front square (often numbered) and two rear dots.
    - **Norway:** Curved white post, parallelogram black patch with gray square inside.
- **No Black Band Style:** Plain white post without black bands.
    - **Turkey:** Curved blade post, red square not touching edges; no rear reflector.
    - **Romania:** Longer red block (resembles Australian).
    - **Poland:** Chunky triangular white post, red band wraps both sides (red front, white rear).
    - **Netherlands:** Rounded white post, thin vertical red reflector.
    - **Belgium:** Rounded triangular post, square yellow front / white rear reflector.
    - **Denmark:** Triangular white post, yellow front / white rear with orange top rim.
- **Cylindrical & Banded Types:**
    - **Ireland:** Green and white cylinder.
    - **United Kingdom:** Rounded top, black-white-black segments with red/white reflector.
    - **France:** White pencil cylinder with red or gray circular ring.
    - **Scotland:** Similar to France but with indented vertical grooves.
    - **Switzerland:** Cylinder with gray band and white reflector.
    - **Andorra:** Thin pole with red painted top section.
- **Prominent National Signatures:**
    - **Iceland:** Bright canary-yellow flat rectangular post.
    - **Czechia & Slovakia:** Very short, featuring **two parallel** orange reflector bars.
    - **Serbia:** Dark red reflector restricted to the half-side facing the road."""
        },
        {
            "titleZh": "美洲各州各省与全球路缘标",
            "titleEn": "Americas & Global Bollards",
            "textZh": """- **美国各州路缘标 (US State Bollards)：**
    - **南达科他 / 蒙大拿 (SD / MT)：** 深色柱子，顶部为菱形白色反光板。
    - **怀俄明 (WY)：** 深色柱子，顶部为圆形白色或灰色反光板。
    - **爱达荷 / 犹他 (ID / UT)：** 带孔金属杆，顶部有等宽白色方形反光板。
    - **内华达 (NV)：** 细金属杆，上部竖长条反光板为黑底白反光块，上下各有两个钉子。
    - **华盛顿州 (WA)：** 棕色杆子，正面单块白色反光板，后面有两片白色反光板。
- **加拿大各省 (Canada Provinces)：**
    - **阿尔伯塔 (Alberta)：** 白圆杆，顶部有两条黑带子。
    - **魁北克 (Quebec)：** 长白杆，上有红色或绿色反光片，总是直接固定在金属护栏 (Guardrails) 上。
    - **萨斯喀彻温与曼尼托巴 (SK / MB)：** 白圆杆，顶端一段为黑色，下面可能有橙色或白色。
- **拉丁美洲各国：**
    - **墨西哥：** 短白色圆柱形，底部有黑色涂漆。
    - **厄瓜多尔：** 两个红色方块，圆形或扁形杆子。
    - **秘鲁：** 土耳其式或比利时式；最南端塔克纳 (Tacna) 附近见白圆柱配橙色顶部、前红后白方形反光板。
    - **智利：** 类似西班牙式，但前白后黄反光板；也有类似美国式的细金属杆。
- **其它大洲代表性路缘标：**
    - **澳大利亚：** 白底带独立红色方块，红框不接触边缘。
    - **新西兰：** 白底红方块，但红色反光条**整圈 360 度环绕**整个柱身（注意：红条完全覆盖那一面是背面）。
    - **卢旺达：** 白色圆柱，带有一圈或两圈红色环形色带。
    - **纳米比亚：** 白色短方柱，顶部有小块黄色反光板。
    - **蒙古：** 白色，类似保龄球，上有两条红色环带。
    - **越南：** 短粗方块水泥柱，顶部红色或蓝色盖子带反光板（类似火柴棍）。
    - **中国台湾：** 黑色板，上面有两到三个大橙色圆点反光片。
    - **马来西亚：** 长条板，上面嵌有黑色、白色、灰色、红色方块。
    - **日本：**
        - 本州北部：反光板下面有一道橙色圈圈。
        - 富山地区：圆形反光板下有一道红圈，向上延伸杆子有红白条纹。
        - 冈山地区：圆形反光板下有一道红色圈圈。""",
            "textEn": """- **US State Bollards:**
    - **South Dakota / Montana (SD / MT):** Dark post with white diamond reflector at the top.
    - **Wyoming (WY):** Dark post with white or gray circular reflector.
    - **Idaho / Utah (ID / UT):** Perforated metal post with equal-width white square reflector.
    - **Nevada (NV):** Slender metal post with vertical black backing and white reflector with 2 top/bottom nails.
    - **Washington (WA):** Brown post, single white front reflector, two white reflectors on rear.
- **Canadian Provinces:**
    - **Alberta:** White round post with two black rings at the top.
    - **Quebec:** Tall white post with red or green reflectors, mounted directly onto highway guardrails.
    - **Saskatchewan & Manitoba:** White round post, black top section, with orange or white below.
- **Latin America:**
    - **Mexico:** Short white cylinder with black painted base.
    - **Ecuador:** Two red blocks on round or flat posts.
    - **Peru:** Turkish or Belgian styles; Tacna (far south) has white cylinder with orange top and square red/white reflector.
    - **Chile:** Spanish style with white front / yellow rear reflectors, or American-style metal posts.
- **Other Continents:**
    - **Australia:** White post with red square reflector that does NOT touch edges.
    - **New Zealand:** White post with red reflector tape **wrapping 360 degrees** around the post (the fully covered side is the rear).
    - **Rwanda:** White cylinder with one or two red circular rings.
    - **Namibia:** Short white square post with small yellow reflector on top.
    - **Mongolia:** White bowling-pin shape with two red stripes.
    - **Vietnam:** Chunky square concrete post with red/blue cap and reflector (matchstick style).
    - **Taiwan:** Black board with 2 or 3 large orange circular dots.
    - **Malaysia:** Strip board containing black, white, gray, and red square segments.
    - **Japan:**
        - Northern Honshu: Orange ring beneath reflector.
        - Toyama: Red ring below circular reflector, pole extending upward with red-white stripes.
        - Okayama: Red ring below circular reflector."""
        },
        {
            "titleZh": "雪迹杆 (Snow Poles) 冬季全览",
            "titleEn": "Snow Poles & Winter Metas",
            "textZh": """- **北欧三国雪迹杆：**
    - 色彩鲜艳（橙/红）、材质统一、必带反光条/反光片，由交通部门标准化定制。
    - **芬兰：** 反光片通常更细，而且位置非常靠近顶部。
    - **瑞典：** 中部稍上方有白色反光片，部分杆子配有第二个反光片。
    - **挪威：** 一个或两个略细的反光片，其中一个通常非常接近杆子中部。
- **日本雪迹杆：**
    - **北海道：** 道路两侧高耸立杆，带有鲜艳的红白相间斜条纹，顶端悬挂**向下指示的固定红白箭头**（指出被积雪掩埋的路肩边缘位置）。
    - **新潟 / 青森：** 黄色带反光条的长杆，或黑黄相间反光立杆。
- **北美雪迹杆：**
    - 原色木棍/树枝插在路旁、细长单色塑料杆，通常没有反光条。""",
            "textEn": """- **Nordic Snow Poles:**
    - Vibrant colors (orange/red), standardized plastic/bamboo materials, equipped with reflective tape.
    - **Finland:** Reflector is thinner and positioned very close to the top rim.
    - **Sweden:** White reflector located slightly above the middle; occasional second reflector.
    - **Norway:** One or two thinner reflectors, with one positioned very close to the center.
- **Japanese Snow Poles:**
    - **Hokkaido:** Tall red-and-white striped overhead gantries pointing **downward red-and-white arrows** directly at the buried road shoulder edges.
    - **Niigata / Aomori:** Yellow reflective stakes or yellow-and-black striped markers.
- **North American Snow Stakes:**
    - Natural wooden poles/branches stuck along shoulders, slender plain plastic rods without reflectors."""
        }
    ],
    "markings": [
        {
            "titleZh": "道路标线色彩与虚实系统",
            "titleEn": "Road Marking Colors & Dash Systems",
            "textZh": """- **标线颜色三大阵营：**
    - **全白线（白中线 + 白边线）：**
        - **欧洲：** 绝大多数国家（挪威黄中线、芬兰淘汰中黄虚线、爱尔兰黄虚边线、希腊单黄中线除外）。
        - **智利：** **南美唯一边线与中线均可为纯白色的国家**！
        - **大洋洲：** 澳大利亚全境统一使用全白线（雪地路段极少数为黄色）。
        - **亚洲与非洲：** 印度及其周边、老挝、马来西亚；西非与北非国家。
    - **黄中白边（黄色中线 + 白色边缘线）：**
        - **美洲：** 美国、加拿大、墨西哥及拉美绝大部分国家（除智利外）。
        - **亚洲：** 东亚、东南亚国家（除老挝）。
        - **欧洲：** 挪威（中线单双虚实均有黄线）、芬兰（中线黄色虚线，逐步淘汰改白）、希腊（中线可为单黄线或双白线）。
        - **非洲：** 肯尼亚、乌干达、加纳。
    - **白中黄边（白色中线 + 黄色边缘线）：**
        - **欧洲：** 爱尔兰（路肩黄色虚线，欧洲异类）；英国（路边黄线代表禁停）；冰岛（引道或交叉口附近为黄色边线）。
        - **非洲：** 南非及其周边邻国（博茨瓦纳、莱索托、斯威士兰）。
        - **西亚与东亚：** 阿曼、以色列、约旦、阿联酋；尼泊尔、新加坡、中国香港；墨西哥瓜纳华托 (Guanajuato)。
    - **全黄线：** 智利极少数特殊路段。
- **虚线形态特征：**
    - **黄色虚边线：** 爱尔兰（瑞士某些城镇内也有）。
    - **黄色虚中线：** 泰国、越南（实线与虚线均常见）。
    - **白色虚边线：**
        - 挪威：长虚边线。
        - 瑞典、爱沙尼亚：短虚边线。
        - 法国、卢森堡：很长的白色虚线外路肩线（科西嘉岛虚线相对更短）。
        - 丹麦：由密集正方形组成的白色短虚边线。
        - 罗马尼亚：有时有三条虚线，中线较粗。
    - **白色虚中线：**
        - 法国：没对齐的长方块白色中线。
        - 英格兰：中间虚线间隔极长，路面嵌有猫眼反光道钉 (Cat's Eyes)。
        - 摩纳哥：城市内常见极粗的白色虚中线。
- **多条线与复杂组合：**
    - **双白实线中线：** 波兰、丹麦（有时中间有微小断开）、希腊（常因暴晒较淡）、智利、阿根廷、马来西亚。
    - **双黄实线中线：** 北美全境、巴西、墨西哥、哥伦比亚、中国台湾。注意：哥伦比亚常有白色边缘线，而巴西通常无白色外侧边缘线。
    - **双白实线夹黄线/白虚线：** 南非及其周边国家。
    - **双黄夹一白中线：** 乌拉圭；菲律宾（中间夹白虚线）。
    - **黄实线 + 白虚线复合中线：** 阿根廷公路极度常见。
    - **城市中线与边线对比：** 美国以双黄中线为主，加拿大以单黄中线为主；澳大利亚城市边线为白色，新西兰偶尔出现黄色边线。""",
            "textEn": """- **Road Marking Color Triad:**
    - **All-White Markings (White Center + White Edges):**
        - **Europe:** Vast majority of countries (exceptions: Norway, Finland legacy yellow dash, Ireland yellow dash edge, Greece).
        - **Chile:** **Sole South American country using all-white road markings**!
        - **Oceania:** Australia uses all-white nationwide (snow areas rare yellow).
        - **Asia & Africa:** India and neighbors, Laos, Malaysia; West & North Africa.
    - **Yellow Center + White Edges:**
        - **Americas:** USA, Canada, Mexico, and virtually all Latin America (except Chile).
        - **Asia:** East & Southeast Asia (except Laos).
        - **Europe:** Norway (yellow centerlines solid/dashed), Finland (legacy dashed yellow), Greece (single yellow or double white).
        - **Africa:** Kenya, Uganda, Ghana.
    - **White Center + Yellow Edges:**
        - **Europe:** Ireland (dashed yellow outer edge line); UK (yellow curbs indicate no parking); Iceland (yellow edge near bridges/intersections).
        - **Africa:** South Africa and neighbors (Botswana, Lesotho, Eswatini).
        - **Middle East & Asia:** Oman, Israel, Jordan, UAE; Nepal, Singapore, Hong Kong; Guanajuato (Mexico).
    - **All-Yellow Markings:** Chile (rare mountainous sections).
- **Dashed Line Patterns:**
    - **Yellow Dashed Edges:** Ireland (occasional Swiss towns).
    - **Yellow Dashed Centers:** Thailand, Vietnam.
    - **White Dashed Edges:**
        - Norway: Long dashed edge line.
        - Sweden & Estonia: Short dashed edge lines.
        - France & Luxembourg: Very long white dashed shoulder edge lines (shorter in Corsica).
        - Denmark: Dense square dashed white edge markings.
        - Romania: Occasionally three dashed lines with thicker center.
    - **White Dashed Centerlines:**
        - France: Staggered non-aligned rectangular white dashes.
        - England: Long dash spacing embedded with reflective Cat's Eyes studs.
        - Monaco: Extra-thick white dashed city centerlines.
- **Multi-line Combinations:**
    - **Double White Solid Center:** Poland, Denmark (slight periodic gap), Greece (faded), Chile, Argentina, Malaysia.
    - **Double Yellow Center:** North America, Brazil, Mexico, Colombia, Taiwan. Pro tip: Colombia frequently has white edge lines, whereas Brazil typically lacks outer white edge lines.
    - **Double White Flanking Yellow/Dashed:** South Africa and neighbors.
    - **Double Yellow Flanking White Dash:** Uruguay; Philippines.
    - **Solid Yellow + Dashed White:** Argentina classic signature.
    - **Urban Comparison:** US predominantly uses double yellow centers, Canada uses single yellow; Australia uses white edge lines, New Zealand occasionally uses yellow."""
        },
        {
            "titleZh": "左右行驶、减速带与路面材质",
            "titleEn": "Driving Side, Speed Bumps & Pavements",
            "textZh": """- **全球靠左行驶 (LHD) 国家速查：**
    - **欧洲（4国）：** 英国、爱尔兰、马耳他、塞浦路斯。
    - **亚太地区：** 日本、中国香港、中国澳门、印度、孟加拉国、斯里兰卡、泰国、马来西亚、新加坡、印度尼西亚。
    - **大洋洲：** 澳大利亚、新西兰。
    - **南部与东部非洲：** 南非、博茨瓦纳、纳米比亚、斯威士兰、莱索托、肯尼亚、乌干达。
    - **美洲特例：** 美属维尔京群岛（美国领地唯一左行）、圭亚那、苏里南。
- **减速带设计：**
    - **荷兰：** 路面有长短交替的白色短横线，路边常伴有特殊拼花砖石。
    - **马来西亚：** 路面上刷有平行粗黄线作为减速预警。
    - **日本：** 黄黑相间倾斜斜条纹减速带。
    - **英国与爱尔兰：** 3D 视觉立体白色减速块。
    - **美国：** 路面边缘有机械开槽横向凹陷减速带 (Rumble Strips，加拿大少见)。
    - **澳大利亚与新西兰：** 路肩白线上有物理凸起小方块。
- **水泥混凝土路面分布：**
    - **日本：** 农村和山区道路大量采用混凝土路面，路侧必带深排水沟槽（両側に側溝），核心判定特征。
    - **菲律宾：** 混凝土路面极度普遍（涵盖主干道），路面带有明显的膨胀伸缩缝。
    - **多米尼加：** 城镇内部大量铺设混凝土路，加勒比地区强特征。
    - **哥伦比亚 / 危地马拉 / 洪都拉斯 / 不丹：** 山区险峻陡坡路段强制采用混凝土路面以增强抓地力。
    - **德国：** 极高品质的农用单车道硬化小路，无路肩石，边缘直接齐平嵌入修剪整齐的草坪中。
    - **法国：** 双向乡村路沥青偏宽，边缘多修补痕迹，或为白垩碎石土路。""",
            "textEn": """- **Left-Hand Drive (LHD) Nations:**
    - **Europe (4):** United Kingdom, Ireland, Malta, Cyprus.
    - **Asia-Pacific:** Japan, Hong Kong, Macau, India, Bangladesh, Sri Lanka, Thailand, Malaysia, Singapore, Indonesia.
    - **Oceania:** Australia, New Zealand.
    - **Southern & Eastern Africa:** South Africa, Botswana, Namibia, Eswatini, Lesotho, Kenya, Uganda.
    - **Americas:** U.S. Virgin Islands (sole US left-drive territory), Guyana, Suriname.
- **Speed Bumps & Rumble Strips:**
    - **Netherlands:** Alternating long-and-short white transverse bar markings; patterned brick road borders.
    - **Malaysia:** Thick yellow parallel transverse rumble stripes across lanes.
    - **Japan:** Black-and-yellow diagonal zebra speed bumps.
    - **UK & Ireland:** Painted 3D trompe-l'œil chevron speed bumps.
    - **United States:** Milled transverse shoulder rumble strip indentations (rare in Canada).
    - **Australia & New Zealand:** Raised reflective edge pavement bumps.
- **Concrete Road Slab Distribution:**
    - **Japan:** Rural and mountain roads paved with concrete slabs accompanied by deep roadside concrete drainage ditches (両側に側溝).
    - **Philippines:** Concrete pavement is dominant even on primary arteries, featuring visible tar expansion joints.
    - **Dominican Republic:** Urban town streets heavily paved with concrete (Caribbean tell).
    - **Colombia / Guatemala / Honduras / Bhutan:** Steep mountain inclines paved with concrete for traction.
    - **Germany:** High-quality single-lane agricultural asphalt roads with zero shoulders embedded directly into immaculate turf.
    - **France:** Wide rural asphalt with patched worn edges or chalky unpaved gravel."""
        }
    ],
    "signs": [
        {
            "titleZh": "欧洲人行横道告示牌底部线条与形态",
            "titleEn": "Pedestrian Crossing Signs: European & Diamond",
            "textZh": """- **欧洲蓝底方牌小人脚下的斑马线条数与造型：**
    - **无此类告示牌：** 英国、爱尔兰（爱尔兰采用黄色菱形，英国采用地面斑马线标牌）。
    - **1 条横实线：** **波兰**。
    - **2 根横虚线：** 比利时（小人为方脑袋）、奥地利、希腊、黑山。
    - **3 条竖线：** 俄罗斯、乌克兰、爱沙尼亚（小人身材纤瘦）、立陶宛。
    - **4 条竖线：**
        - **瑞典：** 小人有明显的脖子。
        - **挪威：** 小人没有明显的脖子。
        - **冰岛：** 蓝底带黄色三角形内衬。
        - **保加利亚：** 小人头上戴着帽子。
    - **5 条竖线：**
        - **丹麦：** 竖线向上触碰到三角边框。
        - **斯洛伐克：** 竖线集中在中间，两条几乎被双脚遮挡。
        - **德国 / 克罗地亚 / 匈牙利 / 葡萄牙：** 小人腰间带有腰带/皮带。
    - **7 条竖线：** 瑞士。
    - **8 条竖线：** 西班牙。
- **黄色菱形告示牌阵营 (Yellow Diamond Pedestrian Signs)：**
    - **北美洲（美、加）：** 典型黄色菱形，美国下方常附带“PED XING”说明牌。
    - **拉美地区：** 墨西哥、危地马拉、巴西、哥伦比亚、阿根廷、智利、秘鲁普遍采用黄色菱形。
    - **大洋洲：** 澳大利亚、新西兰标志性黄色菱形。
    - **亚洲：** 日本及东南亚（泰国、马来西亚）普遍使用黄色菱形行人警告牌。
    - **欧洲特例 - 爱尔兰：** 欧洲极少数不使用蓝底方牌的国家，而是使用黄色菱形（“被困在黄色菱形里的行人”）。""",
            "textEn": """- **European Blue Square Pedestrian Sign Markings:**
    - **No such blue sign:** United Kingdom, Ireland.
    - **1 solid horizontal line:** **Poland**.
    - **2 dashed horizontal lines:** Belgium (square-headed figure), Austria, Greece, Montenegro.
    - **3 vertical stripes:** Russia, Ukraine, Estonia (slender figure), Lithuania.
    - **4 vertical stripes:**
        - **Sweden:** Figure has a distinct neck.
        - **Norway:** Figure has no visible neck.
        - **Iceland:** Yellow inner triangle frame.
        - **Bulgaria:** Figure wears a hat.
    - **5 vertical stripes:**
        - **Denmark:** Stripes touch the outer triangle rim.
        - **Slovakia:** Stripes clustered tightly beneath feet.
        - **Germany / Croatia / Hungary / Portugal:** Figure wears a visible waist belt.
    - **7 vertical stripes:** Switzerland.
    - **8 vertical stripes:** Spain.
- **Yellow Diamond Pedestrian Sign Realm:**
    - **North America (US, Canada):** Standard yellow diamond, often with 'PED XING' sub-plaque.
    - **Latin America:** Mexico, Guatemala, Brazil, Colombia, Argentina, Chile, Peru.
    - **Oceania:** Australia, New Zealand yellow diamond with walking silhouette.
    - **Asia:** Japan, Thailand, Malaysia.
    - **European Exception - Ireland:** Sole EU member employing yellow diamond pedestrian warning signs."""
        },
        {
            "titleZh": "全球路牌设计、字体与背面特征",
            "titleEn": "Road Signs Design, Backs & Typography",
            "textZh": """- **黄色背景路牌：**
    - **卢森堡：** 全大写文字（ALL CAPS）。
    - **前南斯拉夫国家：** 塞尔维亚、克罗地亚，醒目的黄色背景路牌。
- **深色背面路牌：**
    - **欧洲：** 德国、丹麦、芬兰、意大利（部分）、西班牙（部分）、葡萄牙（部分）、瑞士（部分）。
    - **南美洲：** 巴西、巴拉圭、智利、哥伦比亚、厄瓜多尔（青色背面）。
    - **亚洲：** 印度尼西亚、泰国、马来西亚。
    - **墨西哥：** 黄色警告牌背面多为深黑色。
- **路牌支柱细节：**
    - **俄罗斯：** 路牌底部常有一圈黑色涂漆。
    - **秘鲁：** 路牌支柱上常刷黑白斜向斑马纹。
    - **哥伦比亚：** 路牌背面带有独特的钢制十字形支撑架 (Colombian Cross)。
- **精细设计与箭头风格：**
    - **丹麦：** 路牌带有精致外包金属框，字体为规整的 *Roboto Mono*。
    - **德国：** 标志性的白色长方形配细黑边框设计。
    - **土耳其：** 字间距极大；安卡拉车牌或标牌上缘中间有向上的小弧线。
    - **塞内加尔：** 路牌常带粉色外边框；偶尔出现红顶白色墓碑状石质路牌。
    - **新加坡：** 采用 Rotis 字体，字间距宽大。
    - **北欧箭头风格对比：**
        - **挪威：** 涂黑背景、留出白色形成箭头。
        - **瑞典：** 用简单的黑线勾勒箭头轮廓。
        - **芬兰：** 直接涂黑箭头本身。""",
            "textEn": """- **Yellow Background Road Signs:**
    - **Luxembourg:** Text printed in ALL CAPS.
    - **Former Yugoslavia:** Serbia, Croatia use prominent bright yellow direction signs.
    - **Dark-Backed Signs:**
    - **Europe:** Germany, Denmark, Finland, Italy (parts), Spain, Portugal, Switzerland.
    - **South America:** Brazil, Paraguay, Chile, Colombia, Ecuador (cyan backing).
    - **Asia:** Indonesia, Thailand, Malaysia.
    - **Mexico:** Yellow warning signs feature dark painted backs.
- **Signpost Stanchion Details:**
    - **Russia:** Signposts feature a black-painted collar at the bottom base.
    - **Peru:** Signposts painted with alternating black-and-white diagonal stripes.
    - **Colombia:** Backs of road signs feature steel cross-braces (Colombian Cross).
- **Typography & Arrow Aesthetics:**
    - **Denmark:** Signs framed in metal borders with *Roboto Mono* font.
    - **Germany:** Thin black outer border on crisp white signs.
    - **Turkey:** Wide kerning / letter-spacing; Ankara signs have upward arched top edge.
    - **Senegal:** Signs framed with pink borders; white stone milestone markers with red rounded tops.
    - **Singapore:** Wide-spaced Rotis font.
    - **Nordic Arrowhead Styles:**
        - **Norway:** Negative white space carved out of solid black background block.
        - **Sweden:** Simple black outline stroke drawing the arrow.
        - **Finland:** Solid black painted arrow glyph."""
        },
        {
            "titleZh": "让路牌、警告牌与护栏/里程碑",
            "titleEn": "Yield, Warning Signs, Guardrails & Milestones",
            "textZh": """- **让路标志 (Yield / Give Way)：**
    - `GIVE WAY`：英联邦国家（英国、澳大利亚黑字、新西兰红字、南非）。
    - `YIELD`：美国、加拿大、爱尔兰。
    - `CEDA EL PASO`：拉美西语国家、西班牙。
    - `CEDA`：波多黎各。
    - **博茨瓦纳：** 倒红边三角内部为深蓝色填充。
- **警告标牌外框色彩：**
    - **黄心细红边：** 波兰（仅警示牌黄心，限速与禁止牌均为白底）、芬兰（带明显黄色细边）。
    - **白心红边无黄边：** 瑞典（金属外框）、冰岛（常带4颗固定螺钉）、希腊。
    - **越南：** 无边框，中间常见黑色大 T 字路口标。
    - **白心厚红边：** 加拿大、巴西、罗马尼亚。
    - **新加坡：** 警告三角外带有白色方框。
- **欧洲护栏类型 (Guardrails)：**
    - **B型（平直双波）：** 克罗地亚、丹麦、波兰、塞尔维亚、波黑（CDPS：Croatia, Denmark, Poland, Serbia）。
    - **细B型（平直较窄）：** 捷克、斯洛伐克。
    - **AB混合：** 德国、土耳其、爱尔兰。
    - **A型（圆弧双波）：** 其余绝大多数欧洲国家。
    - **特殊护栏：** 意大利护栏尾端明显变粗；厄瓜多尔常见上下双层双轨护栏；罗马尼亚护栏有时涂刷黄黑条纹。
- **里程碑 (Milestones)：**
    - **罗马尼亚：** 独特的白色墓碑形里程碑，带有极粗的红色边缘。
    - **匈牙利：** 绿底白框里程碑。
    - **意大利：** 里程牌上广泛使用罗马数字。
    - **墨西哥：** 里程数字呈垂直上下排列。
    - **斯洛文尼亚：** 白色方板，左上角有黄色小方块。
    - **菲律宾：** 黄色方形水泥柱，上下带凹槽白牌（如 `K 100` 表示距基准点100km，`ST 35` 表示距下个城镇35km）。""",
            "textEn": """- **Yield Signs Wording:**
    - `GIVE WAY`: Commonwealth (UK, Australia black font, New Zealand red font, South Africa).
    - `YIELD`: USA, Canada, Ireland.
    - `CEDA EL PASO`: Latin America, Spain.
    - `CEDA`: Puerto Rico.
    - **Botswana:** Inverted red triangle filled with dark navy blue.
- **Warning Sign Color Borders:**
    - **Yellow with Thin Red Rim:** Poland (warning signs yellow, speed limits white), Finland (thin yellow rim).
    - **White with Red Rim:** Sweden (metal frame), Iceland (4 visible mounting bolts), Greece.
    - **Vietnam:** Frameless with bold black T-intersection mark.
    - **White with Thick Red Border:** Canada, Brazil, Romania.
    - **Singapore:** Warning triangle mounted inside a white rectangular backplate.
- **European Guardrails:**
    - **Type B (Flat profile):** Croatia, Denmark, Poland, Serbia, Bosnia (CDPS: Croatia, Denmark, Poland, Serbia).
    - **Thin Type B:** Czechia, Slovakia.
    - **Type A & B Mixed:** Germany, Turkey, Ireland.
    - **Type A (Curved W-beam):** Rest of Europe.
    - **Special Guardrails:** Italy guardrail terminals flare outward and thicken; Ecuador frequently uses double-tier stacked guardrails; Romania guardrails painted in yellow-and-black stripes.
- **Milestone Markers:**
    - **Romania:** Tombstone-shaped white stone pillars with thick red border.
    - **Hungary:** Green background with white border.
    - **Italy:** Frequently displays Roman numerals on small roadside markers.
    - **Mexico:** Kilometer numerals stacked vertically.
    - **Slovenia:** White plaque with yellow square in upper-left corner.
    - **Philippines:** Yellow concrete post with recessed white markers ('K 100' distance to capital datum, 'ST 35' distance to next town)."""
        }
    ],
    "chevrons": [
        {
            "titleZh": "欧洲弯道导向标配色全览",
            "titleEn": "European Chevrons Color Schemes",
            "textZh": """- **白红配色（白底红箭头 或 红底白箭头）：**
    - 绝大部分东欧国家（波兰、捷克、斯洛伐克、罗马尼亚、保加利亚、爱沙尼亚、乌克兰、俄罗斯）。
    - 荷兰、比利时、丹麦、德国、奥地利（部分地区）。
    - **土耳其：** 也是白红配色，但箭头尖端那一侧**不到边框**（留有白隙）。
- **黑白配色：**
    - **黑底白箭头：** 英国、意大利、阿尔巴尼亚、希腊、塞浦路斯、西班牙（部分地区）。
    - **白底黑箭头：** 塞尔维亚、黑山、北马其顿。
- **蓝白配色：**
    - **蓝底白箭头：** 法国、西班牙（部分地区）。
- **黑黄配色：**
    - **黑底黄箭头：** 挪威、芬兰、冰岛、爱尔兰、葡萄牙。
- **独占国旗国色：**
    - **蓝底黄箭头：** **瑞典独占**（象征瑞典国旗蓝黄双色）。
    - **黄底红箭头：** **奥地利**部分阿尔卑斯山区公路独占。""",
            "textEn": """- **White & Red (Red Arrow on White / White on Red):**
    - Vast majority of Eastern Europe (Poland, Czechia, Slovakia, Romania, Bulgaria, Estonia, Ukraine, Russia).
    - Netherlands, Belgium, Denmark, Germany, Austria (partial).
    - **Turkey:** White and red, but the arrow points do NOT reach the outer border (floating arrow).
- **Black & White:**
    - **Black with white arrows:** United Kingdom, Italy, Albania, Greece, Cyprus, Spain (partial).
    - **White with black arrows:** Serbia, Montenegro, North Macedonia.
- **Blue & White:**
    - **Blue with white arrows:** France, Spain (partial).
- **Black & Yellow:**
    - **Black with yellow arrows:** Norway, Finland, Iceland, Ireland, Portugal.
- **Exclusive National Schemes:**
    - **Blue with yellow arrows:** **Sweden exclusive** (matching Swedish national flag).
    - **Yellow with red arrows:** **Austria** alpine highway sections."""
        },
        {
            "titleZh": "美洲与其它大洲特殊导向标",
            "titleEn": "Americas & Global Chevrons & Quirks",
            "textZh": """- **美洲弯道导向标配色：**
    - **红底白箭头：** **阿根廷**、加拿大魁北克省 (QC)。
    - **黄底黑箭头：** **巴西、乌拉圭、厄瓜多尔**（分布极多）、美国、加拿大不列颠哥伦比亚 (BC)。
    - **黑底黄箭头：** 加拿大安大略省 (ON)。
- **特殊造型与方向性导向标：**
    - **竖向箭头：**
        - 土耳其：黑橙向上竖箭头。
        - 日本北海道：路旁立柱悬挂白红向下竖箭头（暴雪指引路肩）。
    - **细长条形导向板：** 土耳其、南非红白细长并排导向带。
    - **特殊边框：** **罗马尼亚**使用白底红箭头配**明黄色粗外框**。
    - **密集并列箭头：** **阿曼**公路转弯处常见黄色底板上密集排列大量黑色小箭头。""",
            "textEn": """- **Americas Chevrons:**
    - **Red with white arrow:** **Argentina**, Quebec (Canada).
    - **Yellow with black arrow:** **Brazil, Uruguay, Ecuador** (ubiquitous), USA, British Columbia (Canada).
    - **Black with yellow arrow:** Ontario (Canada).
- **Unique Shapes & Directions:**
    - **Vertical Arrows:**
        - Turkey: Upward pointing black/orange vertical arrow signs.
        - Hokkaido (Japan): Downward pointing red-and-white arrows suspended above road shoulders.
    - **Slender Strip Boards:** Turkey, South Africa red-and-white thin strip chevrons.
    - **Accent Borders:** **Romania** features red arrows on white framed with a **thick bright yellow border**.
    - **Clustered Arrows:** **Oman** sharp highway curves feature dense rows of black arrows on yellow backplates."""
        }
    ],
    "languages": LANGUAGES_SECTIONS,
    "architecture": [
        {
            "titleZh": "全球特色民居与街景风貌",
            "titleEn": "Vernacular Architecture & Urban Landscapes",
            "textZh": """- **欧洲特色民居与街道：**
    - **安道尔：** 纯天然深灰色花岗岩砖石砌筑外墙，深邃高山峡谷排屋。
    - **马耳他：** 地中海金黄色石灰岩厚重平顶石屋，配凸出式木制彩色封闭阳台（Gallarija）。
    - **保加利亚：** 凹凸不平的粗糙深红色陶瓦屋顶。
    - **瑞士：** 住宅窗户外侧百叶窗数量极多、规整整齐。
    - **百慕大：** 标志性阶梯状白色防风暴石灰屋顶（收集雨水）。
- **美洲特色风貌：**
    - **厄瓜多尔：** 城区街道地面经常铺设六边形地砖。
    - **玻利维亚：** 城区多鹅卵石路；墙体满是 MAS、EVO 等政治性涂鸦；常见蓝色 Tigo 广告牌。
    - **秘鲁：** 街道大量三轮机动摩托车；沿海沙漠城镇多用编织芦苇席作为简易围栏。
    - **乌拉圭：** 沿海城镇常见 Chivito（国宝级牛肉汉堡）招牌。
    - **智利：** 郊区公路常见亭子状木质/铁质特色公交车站。
- **亚非特色景观：**
    - **尼日利亚：** 屋顶经常为五脊歇山顶形镀锌铁皮瓦。
    - **卢旺达：** 砖混建筑上常有几何花纹镂空通风孔；街面极为干净；摩托车手必须佩戴红色背心与头盔。
    - **菲律宾：** 满街边三轮摩托车 (Tricycle)，宽阔的白色水泥路面。
    - **泰国：** 住宅与商铺外常供奉微缩庙宇形状的神龛。
    - **不丹：** 传统藏式彩绘木窗，路边立有带彩绘的混凝土方块护墩。
    - **土耳其：** 人行道广泛铺设哑铃形连锁彩色地砖。
    - **柬埔寨：** 农村多高脚防汛木屋。
    - **孟加拉国：** 茂密竹林中分布大量绿色铁皮简易平房与细河沙。""",
            "textEn": """- **European Vernacular Elements:**
    - **Andorra:** Natural dark gray unrendered stacked granite walls in deep alpine valleys.
    - **Malta:** Warm golden limestone sand-colored flat-roof houses with closed wooden balconies (Gallarija).
    - **Bulgaria:** Wavy, uneven, rough terracotta red roof tiles.
    - **Switzerland:** Extensive, uniform external window shutters.
    - **Bermuda:** White stepped limestone roofs engineered for rainwater catchment.
- **Americas Vernacular Elements:**
    - **Ecuador:** Urban sidewalks frequently paved with hexagonal interlock tiles.
    - **Bolivia:** Cobblestone streets, dense political graffiti (MAS, EVO), blue Tigo billboards.
    - **Peru:** Mototaxis throughout, woven reed mats used as boundary fences in coastal deserts.
    - **Uruguay:** Frequent signs advertising 'Chivito' steak sandwiches.
    - **Chile:** Suburban highway bus stops resemble wooden gazebos.
- **Asia & Africa Vernacular Elements:**
    - **Nigeria:** Prominent 5-ridge hipped tin corrugated metal roofs.
    - **Rwanda:** Brick/mortar homes with decorative lattice ventilation perforations, remarkably spotless streets, motorcycle riders wearing red vests and helmets.
    - **Philippines:** Ubiquitous passenger tricycles, pale concrete roadway slabs.
    - **Thailand:** Spirit houses resembling miniature ornate temples outside homes and businesses.
    - **Bhutan:** Traditional painted timber window frames, roadside painted concrete bollards.
    - **Turkey:** Dumbbell-shaped interlocking paving bricks.
    - **Cambodia:** Traditional stilt wooden houses in rural floodplains.
    - **Bangladesh:** Green corrugated tin shacks tucked inside dense tropical bamboo groves with fine river sand."""
        },
        {
            "titleZh": "全球石墙地貌全解析",
            "titleEn": "Global Stone Walls Field Guide",
            "textZh": """- **爱沙尼亚诸岛 (萨雷马/穆胡岛)：**
    - 灰白色石灰岩，长满青苔或地衣，高度齐腰，呈自然粗糙堆砌（*Kiviaed*）。
    - 伴生：平坦地貌 + 低矮刺柏（Juniper）、松树与白桦；波罗的海灰暗阴天。
- **瑞典 (厄兰/哥特兰岛)：**
    - 规整平整的石灰岩薄板堆砌（*Stengärdsgård*）。
    - 伴生：极开阔的阿尔瓦（Alvar）草原地貌、风车、典型北欧红色木屋（Falun red）。
- **马耳他 / 戈佐岛：**
    - 明显的暖黄/金黄色石灰岩（Globigerina），规整方正，风化孔隙明显。
    - 伴生：无树干旱、仙人掌/刺山柑、左舵行车（左行标志）。
- **墨西哥尤卡坦半岛 (坎昆/梅里达周边)：**
    - 粗糙带孔的灰白/黄色石灰岩石块，常作为庭院矮墙（*Albarrada*）。
    - 伴生：热带干热灌木林（Selva baja）、极度平坦、白水泥平顶房、烈日顶光。
- **英国与爱尔兰 (尤以爱尔兰西部为甚)：**
    - 灰黑色花岗岩或页岩，缝隙透光（如康尼马拉/阿伦群岛的透光石墙）。
    - 伴生：极绿草丘、起伏地形、阴雨潮湿感、左行红尾灯、黄色菱形标牌。
- **克罗地亚 / 达尔马提亚：**
    - 浅白灰岩在沿海梯田与山坡蜿蜒（*Suhozid*），纵横交错。
    - 伴生：喀斯特山地、橄榄树丛、地中海灌木、波光粼粼的亚得里亚海。
- **意大利 (普利亚/西西里)：**
    - 浅色石灰岩，普利亚常见于橄榄园与圆顶石屋（*Trulli*）之间。
    - 伴生：红土壤、百岁粗壮橄榄树、南欧强烈阳光、前排短白牌。
- **秘鲁 / 玻利维亚高原：**
    - 泥土与深色圆砾石混筑，或印加风格巨石基座。
    - 伴生：极高海拔安第斯荒漠草甸（Puna）、羊驼、土坯房（Adobe）。""",
            "textEn": """- **Estonian Islands (Saaremaa / Muhu):**
    - Waist-high rough-stacked mossy gray limestone (*Kiviaed*).
    - Companions: Flat terrain + low juniper bushes, birches, Baltic overcast skies.
- **Sweden (Öland / Gotland):**
    - Flat, thin, slab-like limestone stacked dry walls (*Stengärdsgård*).
    - Companions: Expansive Alvar barren limestone plains, wooden windmills, Falun red houses.
- **Malta & Gozo:**
    - Golden Globigerina limestone blocks, porous and rectangular.
    - Companions: Arid treeless scrub, prickly pears, left-hand drive road signs.
- **Yucatán Peninsula (Mexico):**
    - Rough, pitted yellowish-white limestone garden boundary walls (*Albarrada*).
    - Companions: Low dry tropical scrub, flat plain, white flat-roof cement houses, harsh noon sun.
- **Ireland & United Kingdom (Western Ireland):**
    - Dark gray granite or slate dry-stone walls with see-through light gaps (Connemara/Aran Islands).
    - Companions: Brilliant emerald rolling pastures, damp overcast mist, yellow diamond signs.
- **Croatia & Dalmatian Coast:**
    - White limestone terrace and boundary dry walls (*Suhozid*) winding along slopes.
    - Companions: Karst scrub, ancient olive orchards, shimmering Adriatic Sea.
- **Italy (Puglia & Sicily):**
    - Dry limestone walls encircling olive groves and conical *Trulli* huts.
    - Companions: Terra rossa red dirt, gnarled ancient olive trees, Italian front short white plates.
- **Peru & Bolivia Altiplano:**
    - Earth mortar mixed with dark rounded river boulders, or Incan stonework bases.
    - Companions: Extreme altitude Andean Puna tussock grass, llamas, adobe brick huts."""
        },
        {
            "titleZh": "屋顶水箱与储水罐系统",
            "titleEn": "Rooftop Water Tanks Matrix",
            "textZh": """- **美洲水箱系统：**
    - **墨西哥：** 特别常见，纯黑色塑料圆筒水箱（有时白色），常标有 `Rotoplas` 品牌名；墙外常见圆形电表。
    - **巴西：** 特别常见，深海蓝色圆筒水箱，常伴随微透光的网状卫星电视天线。
    - **玻利维亚：** 白色水箱居多，上面常印有 `Tank-Burg` 标签。
    - **哥伦比亚：** 黑色桶形储水箱，或巴西式深蓝色水箱。
    - **多米尼加：** 比墨西哥更宽扁的黑色桶状大水箱。
    - **厄瓜多尔：** 蓝色圆筒水箱，比巴西尺寸更高瘦，常标有 `Piestigama`。
- **中东与地中海：**
    - **以色列：** 白色立式圆柱水桶（通常兼作太阳能热水器），配黑色太阳能集热板。
    - **巴勒斯坦：** 屋顶密密麻麻排列大量黑色和白色圆水箱。
    - **约旦 / 阿联酋：** 纯白色水箱（**注意：突尼斯全境屋顶绝无外置储水箱**）。
    - **阿尔巴尼亚：** 屋顶普遍安装巨大的白色横向卧式圆筒大水箱。
- **非洲：**
    - **加纳 / 尼日利亚 / 乌干达 / 肯尼亚：** 巨大黑色塑料水罐，通常架设在建筑物侧面的独立钢架塔楼上。
    - **博茨瓦纳 / 斯威士兰 / 莱索托 / 南非：** 墨绿色大型户外水罐。
- **亚洲与欧洲：**
    - **斯里兰卡：** 特别常见黑色圆柱储水罐。
    - **印度尼西亚：** 水箱比马来西亚更普遍，常见亮黄色或橙色圆水罐。
    - **希腊：** 不锈钢金属反光水箱。
    - **土耳其：** 极其普遍，太阳能集热板上水平架设两个银色小型储水罐。
    - **意大利：** 西西里岛城镇屋顶常见各类浅色储水罐。""",
            "textEn": """- **Americas Rooftop Water Tanks:**
    - **Mexico:** Ubiquitous black plastic cylindrical tanks (occasional white) prominently branded `Rotoplas`; round wall-mounted meters.
    - **Brazil:** Ubiquitous navy-blue cylindrical drums, frequently accompanied by mesh satellite dishes.
    - **Bolivia:** White cylindrical tanks branded `Tank-Burg`.
    - **Colombia:** Black barrel tanks or Brazilian-style navy blue tanks.
    - **Dominican Republic:** Wider, squat black barrel drums.
    - **Ecuador:** Taller, slender blue tanks branded `Piestigama`.
- **Middle East & Mediterranean:**
    - **Israel:** Vertical white cylindrical solar hot water drums paired with black panels.
    - **Palestine:** Roofs crowded with dense clusters of black and white plastic drums.
    - **Jordan / UAE:** White rooftop drums (**Note: Tunisia has NO external rooftop water tanks**).
    - **Albania:** Prominent horizontal white cylindrical water barrels mounted on flat roofs.
- **Africa:**
    - **Ghana / Nigeria / Uganda / Kenya:** Massive black drums mounted on elevated steel truss scaffold towers beside buildings.
    - **Botswana / Eswatini / Lesotho / South Africa:** Forest green exterior rainwater/storage tanks.
- **Asia & Europe:**
    - **Sri Lanka:** Ubiquitous black plastic cylindrical drums.
    - **Indonesia:** More common than Malaysia; bright yellow or orange storage drums.
    - **Greece:** Stainless steel metallic water cylinders.
    - **Turkey:** Solar water heaters with twin small horizontal metal cylinders mounted over panels.
    - **Italy (Sicily):** Pale or light-gray plastic drums on flat village rooftops."""
        },
        {
            "titleZh": "城市门牌、路名牌与街道设施",
            "titleEn": "House Numbers & Street Signs",
            "textZh": """- **欧洲城市门牌系统：**
    - **捷克 vs 斯洛伐克：** 捷克门牌以红色或蓝色为底色；斯洛伐克门牌多为纯白底色。
    - **法国巴黎：** 标志性深蓝底白字搪瓷牌，带有绿色或白色精致滚边。
    - **奥地利维也纳：** 椭圆形深蓝底白字门牌，开头标注行政区编号（如 `9., Berggasse`，直接定位维也纳 1–23 区）。
    - **波兰华沙：** MSI 城市导向系统：上部蓝色标注门牌与路名，底部红色横条标注所在社区名称；其他波兰城市多为简单蓝白金属牌。
    - **匈牙利：** 常见黑白箭头指向牌标注门牌增减方向，带 `u.` (utca)、`út`、`tér` 词缀。
    - **瑞士：** 蓝底白字长条金属板，街名与门牌号压制一体，极具现代 Helvetica 无衬线风格。
    - **西班牙马德里：** 手绘彩色瓷砖 (Azulejos) 门牌，描绘与该街道历史典故相关的插画；安达卢西亚等南部地区为白墙嵌黄蓝陶瓷拼贴单字门牌。
    - **英国与爱尔兰：** 门牌常以房屋名称命名，刻于木牌、石雕或铸铁牌上。
    - **克罗地亚 vs 塞尔维亚：** 克罗地亚标准化蓝底白字左侧印国徽棋盘盾；塞尔维亚为西里尔字母且不带盾徽。
- **亚洲门牌系统：**
    - **韩国：** 蓝底五边形房顶盾牌（尖角朝上），中间为大号数字，上方标有 `-ro` 或 `-gil` 路名。
    - **日本：** “丁目-番-号”街区制；电线杆或墙角带有深蓝/墨绿色垂直金属长条纵向书写；独栋住宅门口必有住户姓氏的小型“表札”。
    - **中国台湾：** 绿底白字长方形金属牌为主，中间为醒目大字门牌号；新北市为橘白拼色，台北市为绿白凸字。
- **美洲门牌与路沿喷漆：**
    - **巴西：** 许多城市（如圣保罗）门牌直接标注 8 位 CEP 邮政编码（`XXXXX-XXX`），可直接依前几位定位到具体州或城市。
    - **美国与加拿大：**
        - **路沿石喷漆 (Curb Numbers)：** 郊区住宅车道入口旁的路沿石上喷印黑色/白色数字（有时带反光底色或大学/球队 Logo）。
        - **超大四至五位数门牌：** 网格化编排导致郊区住宅门牌动辄 4–5 位数（如 18452），欧洲绝大多数为 1–3 位数。
- **路沿石涂装颜色：**
    - 黑白相间：马来西亚、卡塔尔、卢旺达、博茨瓦纳。
    - 黄黑/红白相间：马来西亚、印尼、泰国转弯或路口处。
    - 红白相间：突尼斯、摩纳哥。""",
            "textEn": """- **European House Number Systems:**
    - **Czechia vs Slovakia:** Czech house numbers have red or blue backgrounds; Slovak numbers have white backgrounds.
    - **Paris (France):** Navy blue enamel plaques with crisp white lettering and ornamental green/white borders.
    - **Vienna (Austria):** Oval navy blue plaques prefixed by municipal district numbers (e.g. `9., Berggasse` identifying districts 1–23).
    - **Warsaw (Poland):** MSI system: blue upper section with house number & street, red lower band indicating neighborhood name.
    - **Hungary:** Directional arrow-shaped plates showing house number numbering order with suffixes `u.` (utca), `út`, `tér`.
    - **Switzerland:** Sleek navy blue metal strip integrating street name and house number in clean Helvetica font.
    - **Madrid (Spain):** Hand-painted ceramic tile murals (Azulejos) illustrating historical street events; Andalusia features colorful yellow-blue tile numbers.
    - **United Kingdom & Ireland:** Houses frequently named rather than numbered, engraved on slate, timber, or brass.
    - **Croatia vs Serbia:** Croatia standard blue plaque features Croatian checkerboard shield on left; Serbia uses Cyrillic script without shield.
- **Asian House Number Systems:**
    - **South Korea:** Pentagonal house-shaped blue plates (pointing up) with large white numbers and `-ro` or `-gil` street designations.
    - **Japan:** Chome-ban-go block numbering system; narrow vertical dark blue/green metal strips stenciled vertically; individual detached homes almost always display family surname plaques (Hyosatsu).
    - **Taiwan:** Green metal plates with white numbers; New Taipei uses orange-white, Taipei City uses green-white embossed plates.
- **Americas Numbers & Curb Stencils:**
    - **Brazil:** House plaques often display the 8-digit postal code CEP (`XXXXX-XXX`), allowing state/city pinpointing.
    - **United States & Canada:**
        - **Curb Numbers:** Suburban driveways feature stenciled black-and-white numbers directly on roadside concrete curbs.
        - **Massive 4–5 Digit Numbers:** Grid-based numbering produces 5-digit addresses (e.g. 18452), contrasting 1–3 digit European numbers.
- **Painted Curb Markings:**
    - Black-and-white alternating: Malaysia, Qatar, Rwanda, Botswana.
    - Red-and-white / Yellow-and-black: Malaysia, Indonesia, Thailand road junctions.
    - Red-and-white: Tunisia, Monaco."""
        }
    ],
    "vegetation": [
        {
            "titleZh": "全球红土壤与特征植物分布",
            "titleEn": "Red Soil & Signature Flora",
            "textZh": """- **全球红土壤 (Red Soil) 分布：**
    - **南美洲：** 巴西南部（巴拉那州 Paraná）、阿根廷东北（米西奥内斯省 Misiones）。
    - **非洲：** 肯尼亚、乌干达、卢旺达全境红土极其典型。
    - **大洋洲：** 西澳大利亚（内陆广袤的鲜艳红土地带 Outback）。
    - **亚洲：** 斯里兰卡（橘红色土壤）、柬埔寨、老挝与泰国南部。
    - **欧洲：** 希腊、阿尔巴尼亚红土梯田山地；意大利南部普利亚 (Terra Rossa)。
- **标志性特色植物：**
    - **桉树 (Eucalyptus)：** 澳大利亚全境绝对优势树种；伊比利亚半岛（葡萄牙/西班牙西北部）亦有大面积人工造林。
    - **平顶伞形金合欢 (Umbrella Acacia)：** 肯尼亚、坦桑尼亚、南非东部热带草原，以及阿曼干旱山地。
    - **西班牙苔藓 (Spanish Moss)：** 倒挂在粗壮橡树上的灰白色絮状苔藓，美国东南部（佐治亚、佛罗里达、路易斯安那）绝对排他性特征。
    - **毛叶菊 (Espeletia / Frailejones)：** 粗壮茎秆与毛茸茸灰白叶片的奇特高山草甸植物，哥伦比亚与委内瑞拉安第斯超高海拔荒漠草甸 (Páramo) 独占。
    - **白花草地：** 爱沙尼亚夏季常见白色野花草甸。
    - **白色斑点树皮：** 常见于意大利北部平原林木。
    - **黄色野菊花：** 斯威士兰公路两侧常见密集黄色小菊花。""",
            "textEn": """- **Global Red Soil (Terra Rossa) Regions:**
    - **South America:** Southern Brazil (Paraná State), Northeast Argentina (Misiones Province).
    - **Africa:** Ubiquitous vibrant red dirt in Kenya, Uganda, and Rwanda.
    - **Oceania:** Western Australia (vast interior red dirt Outback).
    - **Asia:** Sri Lanka (orange-red soil), Cambodia, Laos, and southern Thailand.
    - **Europe:** Greece and Albania red hillside terraces; Puglia in southern Italy (Terra Rossa).
- **Signature Botanical Species:**
    - **Eucalyptus:** Universal dominant tree across Australia; widely planted in Iberian timber forestry (Portugal & Galicia).
    - **Umbrella Acacia:** Iconic flat-topped trees of Kenya, Tanzania, eastern South Africa savannas, and arid Oman hills.
    - **Spanish Moss:** Pale grayish-green filaments draping from live oaks, exclusive signature of the Southeastern US (GA, FL, LA).
    - **Frailejones (Espeletia):** Woolly, thick-stemmed rosettes exclusive to extreme high-altitude alpine tundras (Páramo) in Colombia and Ecuador.
    - **White Wildflower Meadows:** Estonia summer roadsides.
    - **White Spotted Tree Trunks:** Northern Italian plains.
    - **Yellow Daisy Bushes:** Dense yellow daisies lining roadsides across Eswatini."""
        },
        {
            "titleZh": "欧美北部森林、树种与土路全面对比",
            "titleEn": "Boreal Forests, Species & Dirt Roads",
            "textZh": """- **欧美阔叶树种差异：**
    - **北欧：** 以垂枝桦（Silver Birch）为主，树皮为极其明亮纯粹的白色，树干下部伴有明显的黑色深裂纹。
    - **北美：** 以美洲颤杨（Trembling Aspen）为主，树皮为浅灰绿色或黄绿色，树干笔直、光滑少裂纹。
- **欧美针叶树种差异：**
    - **北欧：** 以欧洲赤松（Scots Pine）和挪威云杉（Norway Spruce）为主；欧洲赤松树冠开阔，上半部树干呈现醒目的**橘红色或红棕色**（波罗的海三国至德国东部极密集）。
    - **北美：** 树种更加多样：
        - 黑云杉（Black Spruce）：极其瘦长、枝桠稀疏、顶部呈紧凑团簇状。
        - 短叶松（Jack Pine）：比欧洲赤松更瘦削骨感，整体颜色偏灰。
        - 花旗松 / 道格拉斯冷杉（Douglas Fir）：身材高耸入云，树皮深褐粗糙，密集分布于太平洋西北地区 (PNW)。
        - 南方松（Southern Pine）：高大笔直，拥有蓬松的长针叶球，广泛分布于美国东南部。
- **未铺装土路的材质与颜色：**
    - **北欧：** 乡村未铺装土路往往铺设有经过压实的坚硬碎石，且经常呈现出独特的**红棕色**或**深灰色**。
    - **北美：** 偏僻土路往往更加宽敞平缓，泥土颜色多为**浅灰黄色**或**沙土色**，粉尘感显著重于北欧。""",
            "textEn": """- **Deciduous Birch vs Aspen:**
    - **Northern Europe:** Silver Birch dominates, displaying bright chalky-white bark with deep rough black fissures near the base.
    - **North America:** Trembling Aspen dominates, displaying smooth greenish-gray or yellowish-white bark on tall straight trunks.
- **Coniferous Species Differences:**
    - **Northern Europe:** Scots Pine (open umbrella-like crowns with distinctive bright orange-red upper bark) and Norway Spruce.
    - **North America:** Much broader variety:
        - Black Spruce: Extremely skinny, scraggly branches, tufted dense crown at the top.
        - Jack Pine: More skeletal and grayish than European Scots pine.
        - Douglas Fir: Giant towering trees with rough furrowed dark bark, dominant in Pacific Northwest.
        - Southern Pine: Tall straight trunks with fluffy tufts of long needles across the US South.
- **Unpaved Dirt Road Composition:**
    - **Northern Europe:** Gravel roads are tightly packed crushed stone, exhibiting distinctive reddish-brown or dark charcoal gray tones.
    - **North America:** Dirt roads are wide, dusty, and graded, showing pale yellowish-gray or sandy tan hues with heavier dust plumes."""
        },
        {
            "titleZh": "特殊地貌与天象线索",
            "titleEn": "Unusual Terrains & Sky Quirks",
            "textZh": """- **道路胡椒盐质地沥青 (Salt-and-Pepper Pavement)：**
    - 沥青路面粗糙，黑白灰碎石颗粒分明，如撒满黑胡椒与食盐：高频出现在**土耳其**与**美国得克萨斯州**。
- **断裂天空 (Sky Rift)：**
    - 天空全景拼接缝出现明显的阶梯状错位裂纹：经典三大国为**塞内加尔、阿尔巴尼亚、黑山**。
- **平顶大山 (Flat-Topped Mesas)：**
    - 广袤山谷中突兀耸立着巨大的平顶方山：**莱索托**标志性高原地貌。
- **终年阴天与起伏草丘：**
    - **乌拉圭：** 极其平缓低矮的起伏草丘，天空几乎100%是沉重厚重的灰白阴天。
    - **法罗群岛：** 极度湿润无树的碧绿草山，伴随雾气与阴雨。""",
            "textEn": """- **Salt-and-Pepper Road Surface:**
    - Rough asphalt with distinct black, white, and gray crushed stone aggregate: prominent in **Turkey** and **Texas, USA**.
- **Sky Rift (Stitching Seam Glitch):**
    - Visible diagonal or stepped tearing line in the sky stitching: iconic trio **Senegal, Albania, Montenegro**.
    - **Flat-Topped Mesas & Plateaus:**
    - Dramatic flat-topped table mountains towering over grassy valleys: signature of **Lesotho**.
- **Overcast Skies & Rolling Meadows:**
    - **Uruguay:** Low rolling pastures under almost permanent pale overcast cloud cover.
    - **Faroe Islands:** Treeless green volcanic slopes wrapped in damp mist and marine fog."""
        }
    ],
    "road-numbers": [
        {
            "titleZh": "欧洲国际公路系统 E-Roads",
            "titleEn": "European E-Roads Network",
            "textZh": """- **两位数 E+数字 公路规律：**
    - **奇数（E1, E5, E15, E75...）：** 南北走向主干道。数字越小越偏西，数字越大越往东。
        - 极小号（E1、E5）：位于最西侧的葡萄牙、西班牙、法国。
        - 中间号（E25、E35、E45）：贯穿西欧与中欧（荷兰–德国–意大利–瑞士）。
        - 较大号（E75、E85）：贯穿偏东的芬兰、波罗的海、中东欧、巴尔干、希腊、土耳其。
    - **偶数（E20、E40、E80...）：** 东西走向主干道。数字越小越靠北，数字越大越靠南。
        - 小号（E10、E20）：靠北横穿北欧三国、波罗的海与德国北部。
        - 中号（E40、E50）：中纬度横穿法国、德国、中东欧至乌克兰。
        - 大号（E80）：南部横贯西班牙、意大利、巴尔干、希腊与土耳其。
- **三位数 E 路网格规律：**
    - 第 1 位数字 ≈ 北侧最近参考 A 级主干的十位数。
    - 第 2 位数字 ≈ 西侧最近参考 A 级主干的十位数。
    - 第 3 位数字为顺序编号（例如 E7xx 大致位于 E70 东西干线以南的保加利亚、罗马尼亚、土耳其一带）。""",
            "textEn": """- **2-Digit European E-Road Numbering Logic:**
    - **Odd Numbers (E1, E5, E15, E75...):** North-South corridors. Numbers increase from West to East.
        - Low numbers (E1, E5): Far west corridors (Portugal, Spain, France).
        - Mid numbers (E25, E35, E45): Central corridors (Netherlands, Germany, Switzerland, Italy).
        - High numbers (E75, E85): Eastern corridors (Finland, Baltic States, Balkans, Greece, Turkey).
    - **Even Numbers (E20, E40, E80...):** East-West corridors. Numbers increase from North to South.
        - Low numbers (E10, E20): Northern corridors (Norway, Sweden, Finland, Baltic coast).
        - Mid numbers (E40, E50): Mid-latitude corridors (France, Germany, Czechia, Ukraine).
        - High numbers (E80): Southern corridors (Spain, Italy, Balkans, Greece, Turkey).
- **3-Digit E-Road Grid Logic:**
    - 1st digit ≈ Tens digit of the reference E-corridor to the north.
    - 2nd digit ≈ Tens digit of the reference E-corridor to the west.
    - 3rd digit is a sequential route number (e.g. E7xx sits south of E70 in Romania, Bulgaria, Turkey)."""
        },
        {
            "titleZh": "突尼斯、俄罗斯、巴西与美国公路网络",
            "titleEn": "Tunisia, Russia, Brazil & US Networks",
            "textZh": """- **突尼斯公路编号系统：**
    - **Axx 高速公路：** 红色标牌（如 A1 又被称为“泛非高速 Trans-African Highway”）。
    - **Pxx 国道：** 红色标牌主干国道。
    - **Cxx 区域公路：** 绿色标牌区域干线。
- **俄罗斯联邦公路编号系统：**
    - **M-公路：** 从莫斯科向外辐射的最高等级联邦干线（如 M4 南下通往黑海度假区，M11 通往圣彼得堡）。
    - **A-公路：** 次一级国家主干道（如 A100–A110 为莫斯科外围环线，A146–A164 位于西南部）。
    - **P-公路 (R-公路)：** 重要联邦与区域连接干线。
- **巴西联邦公路 (BR-xxx)：**
    - **BR-0xx：** 从首都巴西利亚 (Brasília) 呈放射状向外发散。
    - **BR-1xx：** 南北纵贯主干道（如 BR-101 沿大西洋海岸线纵贯全境）。
    - **BR-2xx：** 东西横贯主干道。
    - **BR-3xx：** 斜向交叉对角干线公路。
    - **BR-4xx：** 连接两条主要公路的联络线。
    - **州级公路：** 以各州缩写开头（如圣保罗州 `SP-280`，米纳斯州 `MG-050`）。
- **美国州际公路系统 (Interstate Highway System)：**
    - **偶数东西向：** 越往南数字越小（如 I-10 沿墨西哥湾），越往北数字越大（如 I-90 贴近五大湖）。
    - **奇数南北向：** 越往西数字越小（如 I-5 沿太平洋），越往东数字越大（如 I-95 沿大西洋）。""",
            "textEn": """- **Tunisia Highway System:**
    - **Axx Motorways:** Red badges (A1 known as the 'Trans-African Highway').
    - **Pxx National Routes:** Red badges for primary national routes.
    - **Cxx Regional Routes:** Green badges for secondary regional routes.
- **Russia Federal Highway Network:**
    - **M- Highways:** Primary federal arteries radiating from Moscow (e.g. M4 to Black Sea, M11 to St. Petersburg).
    - **A- Highways:** Secondary federal routes (A100–A110 Moscow ring roads, A146–A164 in southwest).
    - **R- (P-) Highways:** Regional federal connector corridors between administrative capitals.
- **Brazil Federal Highways (BR-xxx):**
    - **BR-0xx:** Radial corridors emanating outwards from capital Brasília.
    - **BR-1xx:** North-South trunk highways (BR-101 hugging the Atlantic coast).
    - **BR-2xx:** East-West trunk highways.
    - **BR-3xx:** Diagonal cross-country highways.
    - **BR-4xx:** Connector highways linking major trunks.
    - **State Routes:** Prefixed by 2-letter state codes (e.g. `SP-280` in São Paulo, `MG-050` in Minas Gerais).
- **United States Interstate System:**
    - **Even Numbers (East-West):** Lower numbers south (I-10 along Gulf), higher numbers north (I-90 near Canada).
    - **Odd Numbers (North-South):** Lower numbers west (I-5 on Pacific), higher numbers east (I-95 on Atlantic)."""
        },
        {
            "titleZh": "澳大利亚干线与命名公路",
            "titleEn": "Australia Named Highways",
            "textZh": """- **澳大利亚命名干线公路精要：**
    - **Stuart Highway (斯图尔特公路 A1 / A87)：** 纵贯红色中部荒漠的传奇干线，连接阿德莱德–爱丽丝泉–达尔文。
    - **Eyre Highway (艾尔公路 A1)：** 横贯纳拉伯荒原的大动脉，连接西澳诺斯曼 (WA) 与南澳奥古斯塔港 (SA)。
    - **Hume Highway (休姆高速 M31)：** 连接悉尼与墨尔本的全国最繁忙经济命脉。
    - **Great Northern Highway (大北方公路 1 / 95)：** 纵贯西澳荒原，连接珀斯与北部温德姆。
    - **Bruce Highway (布鲁斯公路 M1 / A1)：** 沿昆士兰东海岸纵贯，连接凯恩斯与布里斯班。
    - **Barrier Highway (巴里尔公路 A32)：** 穿越南澳与新南威尔士内陆，连接悉尼与阿德莱德。
    - **Midland Highway (米德兰公路 1)：** 塔斯马尼亚岛南北纵贯中轴线（霍巴特–朗塞斯顿）。
    - **Lasseter Highway (拉塞特公路 4)：** 从斯图尔特公路分岔深入红色心脏乌鲁鲁 (Uluru)。
    - **Pacific Highway (太平洋高速 A1)：** 悉尼至布里斯班沿海高速。
    - **Princes Highway (王子公路 A1 / M1)：** 悉尼–墨尔本–阿德莱德壮丽沿海干线。""",
            "textEn": """- **Australia Iconic Named Highways:**
    - **Stuart Highway (A1 / A87):** Epic transcontinental spine slicing through the Red Centre from Adelaide to Alice Springs and Darwin.
    - **Eyre Highway (A1):** Crosses the vast Nullarbor Plain, connecting Norseman (WA) to Port Augusta (SA).
    - **Hume Highway (M31):** Busiest commercial corridor connecting Sydney and Melbourne.
    - **Great Northern Highway (1 / 95):** Slices through Western Australia outback from Perth to Wyndham.
    - **Bruce Highway (M1 / A1):** Queensland coastal corridor from Cairns down to Brisbane.
    - **Barrier Highway (A32):** Outbacks of SA and NSW connecting Sydney to Adelaide via Broken Hill.
    - **Midland Highway (Route 1):** Tasmania central corridor connecting Hobart to Launceston.
    - **Lasseter Highway (Route 4):** Branches off Stuart Hwy directly toward Uluru.
    - **Pacific Highway (A1):** Coastal expressway between Sydney and Brisbane.
    - **Princes Highway (A1 / M1):** Coastal highway linking Sydney, Melbourne, and Adelaide."""
        }
    ],
    "phones": [
        {
            "titleZh": "国际区号与北美 NANP 系统",
            "titleEn": "Country Codes & North American NANP",
            "textZh": """- **重要国际电话区号：**
    - `+44`：英国 (United Kingdom)
    - `+55`：巴西 (Brazil)
    - `+62`：印度尼西亚 (Indonesia，海岛定位神器)
    - `+33`：法国；`+49`：德国；`+39`：意大利；`+34`：西班牙；`+81`：日本；`+82`：韩国。
- **北美号码计划 (NANP - 美加格式)：**
    - 美国、加拿大及部分加勒比岛屿统一采用 10 位格式：`(XXX) XXX-XXXX` 或 `XXX-XXX-XXXX`。
    - **免费服务电话：** 若看到 `1-800`、`1-888`、`1-877`、`1-866`，均为全美免费客服热线，不含地理区域信息。""",
            "textEn": """- **Crucial Country Calling Codes:**
    - `+44`: United Kingdom
    - `+55`: Brazil
    - `+62`: Indonesia (vital clue for island identification)
    - `+33`: France; `+49`: Germany; `+39`: Italy; `+34`: Spain; `+81`: Japan; `+82`: South Korea.
- **North American Numbering Plan (NANP):**
    - Standard 10-digit format across US & Canada: `(XXX) XXX-XXXX` or `XXX-XXX-XXXX`.
    - **Toll-Free Numbers:** Prefixes `1-800`, `1-888`, `1-877`, `1-866` are non-geographic customer lines."""
        },
        {
            "titleZh": "欧洲主要国家电话排布格式",
            "titleEn": "European Phone Number Formats",
            "textZh": """- **欧洲主要国家电话书写规范：**
    - **英国：** 通常以 `0` 开头，总共 11 位数字。
        - 格式：`0XXXX XXXXXX` 或 `0XX XXXX XXXX`。
        - 标志：`01` 或 `02` 开头为固定座机电话，`07` 开头通常为手机号码。
    - **法国：** 固定为 10 位数字，通常以 `0` 开头，每两位一组。
        - 格式：`0X XX XX XX XX`。
    - **德国：** 长度不固定，通常以 `0` 开头，区号和号码之间常用斜杠或空格隔开。
        - 格式：`0XXX/XXXXXX` 或 `0XX XXXXXXX`。
    - **意大利：** 以 `0` 开头（座机）或 `3` 开头（手机），长度为 9–11 位。
        - 格式：`0X XXXXXXX` 或 `3XX XXXXXXX`。
    - **西班牙：** 固定为 9 位数字，通常写成三组 `9XX XX XX XX`。
        - 标志：`9X` 或 `8X` 为座机，`6X` 或 `7X` 为手机。""",
            "textEn": """- **European Phone Number Formats:**
    - **United Kingdom:** 11-digit numbers starting with `0`.
        - Format: `0XXXX XXXXXX` or `0XX XXXX XXXX`.
        - Clues: `01` or `02` indicates landlines; `07` indicates mobile phones.
    - **France:** Fixed 10-digit format starting with `0`, written in pairs of two.
        - Format: `0X XX XX XX XX`.
    - **Germany:** Variable length starting with `0`, separated by forward slash or space.
        - Format: `0XXX/XXXXXX` or `0XX XXXXXXX`.
    - **Italy:** Starts with `0` (landline) or `3` (mobile), length 9–11 digits.
        - Format: `0X XXXXXXX` or `3XX XXXXXXX`.
    - **Spain:** Fixed 9-digit format written in blocks of two.
        - Format: `9XX XX XX XX` (landline) or `6XX XX XX XX` (mobile)."""
        },
        {
            "titleZh": "拉美、亚洲及大洋洲区号地图",
            "titleEn": "Latin America, Asia & Oceania Area Codes",
            "textZh": """- **巴西 2 位数 DDD 区号（顺时针螺旋规则）：**
    - 手机格式为 `(XX) 9XXXX-XXXX`。
    - `1x`：圣保罗州 (São Paulo，首府 11)；`2x`：里约热内卢与圣埃斯皮里图。
    - `3x`：米纳斯吉拉斯 (Minas Gerais)；`4x`：巴拉那与圣卡塔琳娜；`5x`：南里奥格兰德。
    - `6x`：中西部（巴西利亚 61、戈亚斯、马托格罗索）；`7x/8x`：东北部沿海各州；`9x`：北部亚马逊雨林各州。
- **墨西哥国内区号：**
    - 统一为 10 位数字：`XX XXXX XXXX` 或 `(XX) XXXX XXXX`。
    - `33`：瓜达拉哈拉 (Guadalajara)；`55 / 56`：墨西哥城 (CDMX)；`81`：蒙特雷 (Monterrey)。
- **阿根廷：** 首都布宜诺斯艾利斯固定区号为 `011`，格式 `(011) XXXX-XXXX`。
- **印度尼西亚商铺招牌区号：**
    - `02x`：爪哇岛西部（雅加达 021、万隆 022）。
    - `03x`：爪哇岛东部与巴厘岛 (Bali)。
    - `04x`：苏拉威西岛 (Sulawesi)；`05x`：加里曼丹岛 (Kalimantan)；`06x / 07x`：苏门答腊岛 (Sumatra)。
- **日本区号：** 从北向南递增：北海道 `01x`，关东/东京 `03 / 04x`，关西/大阪 `06x`，南至九州冲绳 `09x`。
- **韩国区号：** 首都首尔为 `02`，其他各道为 `03x–06x`。
- **泰国与澳大利亚：**
    - 泰国手机 10 位：`08X-XXX-XXXX`。
    - 澳大利亚 10 位：座机 `02 / 03 / 07 / 08`，手机统一以 `04` 开头（如 `04XX XXX XXX`）。""",
            "textEn": """- **Brazil 2-Digit DDD Regional Codes (Clockwise spiral rule):**
    - Mobile format: `(XX) 9XXXX-XXXX`.
    - `1x`: São Paulo (capital 11); `2x`: Rio de Janeiro & Espírito Santo.
    - `3x`: Minas Gerais; `4x`: Paraná & Santa Catarina; `5x`: Rio Grande do Sul.
    - `6x`: Central-West (Brasília 61, Goiás, Mato Grosso); `7x/8x`: Northeast coast; `9x`: Northern Amazon.
- **Mexico Area Codes:**
    - 10-digit format: `XX XXXX XXXX` or `(XX) XXXX XXXX`.
    - `33`: Guadalajara; `55 / 56`: Mexico City; `81`: Monterrey.
- **Argentina:** Capital Buenos Aires uses area code `011` (`(011) XXXX-XXXX`).
- **Indonesia Shop Sign Area Codes:**
    - `02x`: Western Java (Jakarta 021, Bandung 022).
    - `03x`: Eastern Java & Bali.
    - `04x`: Sulawesi; `05x`: Kalimantan (Borneo); `06x / 07x`: Sumatra.
- **Japan Area Codes:** Increases from North to South: Hokkaido `01x`, Tokyo `03`, Osaka `06`, down to Kyushu/Okinawa `09x`.
- **South Korea:** Capital Seoul uses `02`; other provinces `03x–06x`.
- **Thailand & Australia:**
    - Thailand mobile: `08X-XXX-XXXX`.
    - Australia 10-digit: Landlines `02/03/07/08`, mobile phones prefixed by `04` (`04XX XXX XXX`)."""
        }
    ],
    "misc": [
        {
            "titleZh": "街景版权年份研判秘籍",
            "titleEn": "Street View Copyright Years Metas",
            "textZh": """- **街景版权年份核心研判原则：**
    - **Gen 4 镜头：** 极高清画质，页面底部的版权年份（如 ©2024 Google）与实际拍摄年份高度一致，极其可靠。
    - **Gen 3 镜头：** 老旧街景经 Google 云端重新渲染和重新拼缝后，版权年份可能延后，不可作为绝对唯一依据。
- **高频国家版权年限速杀：**
    - **希腊：** 老街景基本只有 2011 / 2012 年拍摄，近年轻微补充 2019 / 2023 / 2024 年，**绝无 2021 或 2022 年街景**。
    - **德国：** 拥有海量 2023 年全新更新街景。
    - **捷克 vs 斯洛伐克：** 捷克拥有大量 2019 年街景。
    - **芬兰 vs 瑞典：** 芬兰覆盖大量 2022 / 2023 年更新街景（极少 2024 年）；瑞典以 2021 年居多。
    - **卡塔尔 vs 阿联酋：** 卡塔尔多 2023 年街景；阿联酋多 2022 与 2024 年街景。
    - **马来西亚：** **绝无 2023 年街景**。
    - **菲律宾 (Luzon vs Mindanao)：** 2023 年常见于北部吕宋岛 (Luzon)；2022 年常见于南部棉兰老岛 (Mindanao)。""",
            "textEn": """- **Copyright Year Fundamental Rules:**
    - **Gen 4 Cameras:** Extremely reliable. Bottom copyright stamp (e.g. ©2024 Google) matches actual capture year closely.
    - **Gen 3 Cameras:** Old imagery may receive updated copyright stamps during cloud stitching updates.
- **High-Frequency National Copyright Patterns:**
    - **Greece:** Older coverage almost universally 2011/2012, with recent updates in 2019/2023/2024 (**no 2021/2022 coverage**).
    - **Germany:** Vast volume of new 2023 coverage.
    - **Czechia vs Slovakia:** Czechia has extensive 2019 coverage.
    - **Finland vs Sweden:** Finland heavily updated in 2022/2023 (few 2024); Sweden predominantly 2021.
    - **Qatar vs UAE:** Qatar predominantly 2023; UAE predominantly 2022 and 2024.
    - **Malaysia:** **Zero 2023 street view coverage**.
    - **Philippines (Luzon vs Mindanao):** 2023 common in northern Luzon; 2022 common in southern Mindanao."""
        },
        {
            "titleZh": "马来西亚“数字 2”法则与冷门技巧",
            "titleEn": "Rule of Two in Malaysia & Pro Metas",
            "textZh": """- **马来西亚“数字 2”全能秒杀法则：**
    - **两大地理板块：** 西马半岛与东马婆罗洲（沙巴与砂拉越）。
    - **双白实线：** 道路中央常画有两条平行的纯白色实线。
    - **两段式车牌：** 普通民用车牌为两段式黑色短车牌（白字分为两部分）。
- **极速排查实战心法：**
    - **南半球 vs 北半球：** 观察正午太阳方位；若太阳在正北，必定位于南半球或北半球低纬度热带；若太阳在正南，必定位于北半球温带。
    - **热带植被辨析：** 拉美雨林植被更加浓密葱茏多样；西非热带植被色调偏黄且沙尘较重；东南亚乡村棕榈树与竹林极其密集。
    - **公路护栏螺栓：** 欧洲护栏与立柱连接处的六角螺栓与反光垫片亦能辅证国别。""",
            "textEn": """- **The 'Rule of Two' in Malaysia:**
    - **Two Landmasses:** Peninsular Malaysia and Borneo (Sabah & Sarawak).
    - **Two Solid White Lines:** Road centerlines frequently painted as double solid white lines.
    - **Two-Segment Plates:** Standard civilian vehicles carry short black plates with two character blocks.
- **Competitive Pro Metas:**
    - **Hemisphere Sun Check:** Check midday solar angle. Sun due north indicates Southern Hemisphere (or deep tropics); Sun due south indicates Northern Hemisphere temperate zone.
    - **Tropical Vegetation Comparison:** Latin American jungle is dense, lush, and multi-layered; West Africa shows sand-dusted foliage; Southeast Asia is crowded with dense oil palms and bamboo groves.
    - **Guardrail Bolt Metas:** Hexagonal bolts and reflector spacers connecting European W-beams to posts offer additional national verification."""
        }
    ]
}

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

print(f"Generated complete sections for all {len(NEW_TOPIC_SECTIONS)} topics:")
for k, v in NEW_TOPIC_SECTIONS.items():
    zh_chars = sum(len(s["textZh"]) for s in v)
    en_chars = sum(len(s["textEn"]) for s in v)
    print(f"- {k:12}: {len(v):2} sections | ZH: {zh_chars:5} chars | EN: {en_chars:5} chars")

# Write out to scripts/enrich_topics_full.py
import json

with open("scripts/enrich_topics_full.py", "w", encoding="utf-8") as f:
    f.write("# -*- coding: utf-8 -*-\n")
    f.write('"""\nGeoGuessr Full-Fidelity Topic Metas Bilingual Enrichment\nPreserves 100% of original Notion notes for all 14 topics.\n"""\n\n')
    f.write(f"TOPIC_BADGES = {repr(TOPIC_BADGES)}\n\n")
    f.write(f"TOPIC_SECTIONS_FULL = {repr(NEW_TOPIC_SECTIONS)}\n")

print("Successfully written to scripts/enrich_topics_full.py!")
