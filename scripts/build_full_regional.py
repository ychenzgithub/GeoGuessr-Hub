#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Full Regional Guides Generator for GeoGuessr Notes
Restores 100% of the user notes from notion_backup/GeoGuessr/大国地区 2ffe4db74b03809699f1e1093f64fce5.md
across all 21 countries with rich, bilingual markdown sections.
"""

import json
import re

REGIONAL_DATA = [
  # 1. 俄罗斯 (Russia)
  {
    "id": "russia",
    "nameZh": "俄罗斯",
    "nameEn": "Russia",
    "flag": "🇷🇺",
    "continent": "Europe / Asia",
    "sections": [
      {
        "headingZh": "🚗 街景车镜头与车身涂装 Meta",
        "headingEn": "Street View Camera Generations & Car Metas",
        "contentZh": "- **三代车特征**：\n    - **短天线**：绝大部分分布在俄罗斯西部欧洲区\n    - **左倾短天线**：主要分布在圣彼得堡至伏尔加格勒 (Volgograd) 一线走廊\n    - **模糊长天线**：多分布在东部远东地区，尤其是萨哈林岛 (库页岛)\n    - **秋景覆盖**：集中于飞地加里宁格勒 (Kaliningrad)\n- **四代车特征**：\n    - **冬景萧条**：集中在南部高加索山脉一带\n    - **黑色车身**：莫斯科首都圈及近郊走廊\n    - **红色车身**：乌拉尔山脉南端或俄蒙边境一带\n    - **白色车身**：远东及西伯利亚东部中纬度公路",
        "contentEn": "- **Gen 3 Metas**:\n    - **Short antenna**: Mostly in western European Russia\n    - **Left-tilted short antenna**: Corridor from St. Petersburg down to Volgograd\n    - **Blurry long antenna**: Eastern Russia and especially Sakhalin Island\n    - **Late autumn foliage**: Distinctive to Kaliningrad exclave\n- **Gen 4 Metas**:\n    - **Winter bare trees**: South Caucasus mountain border regions\n    - **Black car**: Moscow metropolitan area and immediate radial highways\n    - **Red car**: Southern Urals and the Mongolian border zone\n    - **White car**: Far East and central-southern Siberian highway corridors"
      },
      {
        "headingZh": "🛣️ 联邦与区域道路编号系统",
        "headingEn": "Highway Numbering: M, P, A & European vs. Asian Rules",
        "contentZh": "- **道路前缀法则**：\n    - **M- 开头**：代表连接莫斯科与其他主要大城市的国家级联邦干线公路\n    - **P- 开头**：代表区域级联邦干线道路 (Regional Federal)\n    - **A- 开头**：代表各联邦主体之间的主要互通干线\n- **编号数值分布**：\n    - **100 号以下**：多集中在俄罗斯欧洲部分\n    - **200 号以上**：多集中在西伯利亚及远东地区",
        "contentEn": "- **Highway Prefix Classification**:\n    - **M- series**: Primary federal highways directly linking Moscow with regional hubs\n    - **P- series**: Regional federal highways connecting major provincial centers\n    - **A- series**: Strategic inter-regional arterial highways\n- **Number Range Geographic Grid**:\n    - **Numbers < 100**: Heavily concentrated in European Russia west of the Urals\n    - **Numbers > 200**: Concentrated across Siberia and the Far East"
      },
      {
        "headingZh": "🌲 树种、农作物与草原生态分布",
        "headingEn": "Tree Species, Agricultural Crops & Steppe Distribution",
        "contentZh": "- **主要树种生态**：\n    - **瘦高黑杨 (Black Poplar)**：乌克兰与西部邻哈萨克斯坦的边境地区\n    - **白皮桦树 (Birch)**：偏南方分布，在乌拉尔山脉东侧平原地区极其密集连绵\n    - **密集云杉 (Spruce)**：圣诞树形态，密集分布于俄罗斯欧洲区北部针叶林带\n    - **落叶松 (Larch)**：枝条向上伸展、树冠稀疏，西伯利亚极寒泰加林典型树种\n    - **成排橡树 (Oak)**：飞地加里宁格勒，以及俄罗斯最南部温带平原\n    - **橄榄树与果树**：橄榄树多见于靠近哈萨克斯坦边境干燥地带；成片果树多在南部温暖农业区\n- **地被植物与农作物**：\n    - **粉红柳兰 (Fireweed)**：俄罗斯北部高纬度地区常见粉红野生花卉\n    - **巨型大圆叶野生白菜**：萨哈林岛 (Sakhalin / 库页岛) 标志性巨型叶片植物\n    - **农田伴桦树林**：绿油油连绵作物中点缀稀疏桦树林斑块 (四代高画质) → 鄂木斯克 (Omsk) 农业走廊\n- **开阔草原与草地**：\n    - **开阔高山草原**：布里亚特共和国 (Buryatia，贝加尔湖以东及南侧周边)\n    - **极干极平草地**：里海 (Caspian Sea) 西侧低洼平原 (卡尔梅克/达吉斯坦平原)",
        "contentEn": "- **Signature Tree Species**:\n    - **Black Poplar (tall & slender)**: Ukraine and western border region adjacent to Kazakhstan\n    - **White Birch (Birch)**: More southern; extraordinarily dense forests east of the Ural Mountains\n    - **Dense Spruce (Christmas-tree style)**: Dense boreal taiga in northern European Russia\n    - **Larch (sparse, upturned branches)**: Typical of harsh Siberian taiga permafrost zones\n    - **Rows of Oaks**: Kaliningrad exclave and the southernmost European plains\n    - **Olive & Fruit Trees**: Olive trees near the arid Kazakh border; fruit orchards in the warm south\n- **Flora & Agriculture**:\n    - **Pink Fireweed**: Widespread bright pink ground cover across northern high latitudes\n    - **Giant Wild Cabbage**: Huge round leaves endemic to Sakhalin Island\n    - **Lush Crops with Birch Copses**: Emerald green fields dotted with birch stands (Gen 4) → Omsk agricultural corridor\n- **Steppes & Grasslands**:\n    - **Open Steppe**: Republic of Buryatia (around and south/east of Lake Baikal)\n    - **Flat, Hyper-Arid Grasslands**: Western coastal depression of the Caspian Sea"
      },
      {
        "headingZh": "🪨 特殊地质路况与路面铺装",
        "headingEn": "Pavement Types, Kamchatka Gravel & Concrete Slabs",
        "contentZh": "- **未铺装灰色砂石路**：堪察加半岛 (Kamchatka) 典型未铺装碎石公路，周围多火山疏林\n- **路肩散落巨型岩石**：俄罗斯欧洲区最北部极寒荒原 (摩尔曼斯克及科拉半岛一带)\n- **混凝土方块板结路**：亚洲部分西北部森林原野间的网格拼装水泥预制板路",
        "contentEn": "- **Gray Gravel Roads**: Hallmark of unpaved volcanic highways in the Kamchatka Peninsula\n- **Large Boulders by Roads**: Extreme northern European tundra (Murmansk / Kola Peninsula)\n- **Concrete Slab Highways**: Interlocking precast concrete slab roads in the northwestern Asian forests"
      },
      {
        "headingZh": "🏛️ 建筑材质、路牌缩写与道路标线",
        "headingEn": "Building Materials, Signage Abbreviations & Road Markings",
        "contentZh": "- **城市缩写**：招牌与路牌上的 “г.” 是 город (城市) 的缩写，后跟地名 (例如 “г. Томск” 即托木斯克市)\n- **扁平旗帜状路缘标 (Bollard)**：主要分布在俄罗斯东部及西伯利亚地区\n- **建筑外观**：白色石灰方砖砌体多在北高加索一带；深红砖砌体建筑主要分布在西南部\n- **双向黄色边缘线**：路面两侧画鲜明黄色实线，基本直奔西西伯利亚南部到中西伯利亚干线走廊",
        "contentEn": "- **City Abbreviation**: The letter \"г.\" on signs stands for город (Gorod / City), followed by the town name (e.g. \"г. Томск\" = Tomsk)\n- **Flat Flag-Style Bollards**: Predominantly encountered across Eastern Russia and Siberia\n- **Architecture Materials**: White limestone block buildings in the North Caucasus; red brick structures in the southwest\n- **Double Yellow Outer Edge Lines**: Solid yellow lines painted on both road shoulders lead directly to the South to Central Siberian corridor"
      },
      {
        "headingZh": "🏔️ 图瓦共和国独家绝杀特征",
        "headingEn": "Republic of Tuva Regional Metas",
        "contentZh": "- **地貌环境**：雄浑开阔的高山高寒草甸，四顾无树，远山层叠\n- **路牌立杆**：路牌立杆下半部涂刷黑色漆，上半部安装红色反光片\n- **专属街景车**：红色街景皮卡带有伸出的长天线 (Tuva 独家 Meta)",
        "contentEn": "- **Topography**: Dramatic high alpine meadow landscapes surrounded by treeless barren ridges\n- **Signpost Design**: Road sign poles painted black on the bottom half with red reflectors mounted on the upper portion\n- **Signature Camera Car**: Red pickup truck with a long visible antenna (Exclusive Tuva Meta)"
      }
    ],
    "rawContent": "俄罗斯街景车、道路编号、植被、地貌、其它建筑与图瓦地区完整笔记"
  },

  # 2. 挪威 (Norway)
  {
    "id": "norway",
    "nameZh": "挪威",
    "nameEn": "Norway",
    "flag": "🇳🇴",
    "continent": "Europe",
    "sections": [
      {
        "headingZh": "🏔️ 挪威六大自然地理与植被带划分",
        "headingEn": "Six Geographic & Ecological Zones from Finnmark to South Coast",
        "contentZh": "- **极北部地区 (Finnmark)**：树木极其稀少，以开阔荒原冻土为主，地表覆盖黄绿色低矮苔原草地\n- **北部峡湾区 (Troms)**：白桦树 (Birch) 广布，容易看到带积雪的峻峭峡湾山脉，道路两侧雪迹杆极其密集\n- **西部峡湾区 (Vestlandet)**：公路隧道密集，年降水量丰富，路边湿润岩石长满青苔，陡峭山体直插深邃峡湾，瀑布连绵\n- **南部高山内陆带 (Highland Plateau)**：极其高耸裸露的巍峨雪峰与冰原高原，但视野中全无海水峡湾\n- **东部与内陆森林区 (奥斯陆以北)**：成片连绵的平缓针叶泰加林 (以云杉和松树为主)\n- **南部海岸走廊 (奥斯陆至克里斯蒂安桑 Kristiansand)**：平缓低矮丘陵，道路更宽更直，农田规整，散布经典白色木屋",
        "contentEn": "- **Far North (Finnmark)**: Almost completely treeless barren tundra plains with pale yellowish-green alpine ground cover\n- **North (Troms)**: Abundant birch forests, prominent snow-capped coastal mountains, extremely dense roadside snow poles\n- **Western Fjords (Vestlandet)**: Countless tunnels, high precipitation, moss-covered roadside cliffs plunging into deep sea fjords, waterfalls\n- **Southern High Alpine Zone**: Jagged towering barren peaks and tundra plateaus with complete absence of sea fjords\n- **Eastern & Inland Forest (North of Oslo)**: Rolling, continuous dark coniferous taiga forests (dense spruce and pine)\n- **Southern Coast (Oslo to Kristiansand)**: Gentle undulating hills, straighter roads, open farmland pastures, and iconic white wooden cottages"
      }
    ],
    "rawContent": "挪威六大区域地貌与自然带特征"
  },

  # 3. 印尼 (Indonesia)
  {
    "id": "indonesia",
    "nameZh": "印尼",
    "nameEn": "Indonesia",
    "flag": "🇮🇩",
    "continent": "Asia",
    "sections": [
      {
        "headingZh": "🏝️ 八大群岛地理概貌与街景车特征",
        "headingEn": "Island Regions & Camera Car Distribution",
        "contentZh": "- **八大核心岛屿与地区**：\n    - 苏门答腊岛 (Sumatra)\n    - 加里曼丹岛 (Kalimantan / 婆罗洲)\n    - 爪哇岛 (Java)\n    - 苏拉威西岛 (Sulawesi)\n    - 北/南马鲁古群岛 (Maluku)\n    - 巴厘岛 (Bali)\n    - 小巽他群岛 (Nusas / Lesser Sunda Islands)\n    - 廖内省 (Riau)\n- **街景车 Meta 规律**：\n    - **三代短天线白色街景车**：绝大部分集中在爪哇岛\n    - **三代黑色街景车**：全印尼各地皆有分布，但在苏拉威西岛最为密集普及",
        "contentEn": "- **Eight Major Island Regions**:\n    - Sumatra (Sumatera)\n    - Kalimantan (Indonesian Borneo)\n    - Java (Jawa)\n    - Sulawesi (Celebes)\n    - North & South Maluku (Moluccas)\n    - Bali\n    - Lesser Sunda Islands (Nusa Tenggara)\n    - Riau Province\n- **Camera Car Metas**:\n    - **Gen 3 White Car with Short Antenna**: Heavily concentrated on Java\n    - **Gen 3 Black Car**: Found across Indonesia, but overwhelmingly prevalent on Sulawesi"
      },
      {
        "headingZh": "⚡ 各大岛电线杆结构与绝缘子对称性",
        "headingEn": "Island-by-Island Utility Poles & Insulators",
        "contentZh": "- **苏门答腊岛 (Sumatra)**：\n    - 采用空心圆孔水泥杆，或顶部带木质/金属长横担\n    - **北苏门答腊**：绝缘子呈不对称分布 (一侧 1 个，另一侧 2 个)\n    - **廖内省 (Riau) 与西苏门答腊**：非对称电杆且横担支撑杆位置极低；西苏门答腊电杆顶端或绝缘子常出现深红色或蓝色组件\n    - **南苏门答腊**：常见双斜向支撑杆结构\n- **加里曼丹岛 (Kalimantan)**：\n    - 巨大高耸的 A-Frame 铁架支撑杆\n    - **西加里曼丹**：绝缘子左右对称排列\n    - **东加里曼丹**：绝缘子左右不对称排列\n- **苏拉威西岛 (Sulawesi)**：\n    - 电杆顶部常带小型避雷针状突起，横杆上有孔洞，离地约一人高处涂刷红白相间警示条纹\n    - **南苏拉威西**：绝缘子左右对称\n    - **北苏拉威西**：绝缘子不对称，且横担呈上长下短的两根双横杠\n- **爪哇岛 (Java)**：\n    - 经典三层横梁 (三叉戟 Trident 杆)，或电杆顶部带明显金属架子\n    - **中爪哇**：经典三叉戟杆最为普及\n    - **西爪哇**：绝缘子左右对称\n    - **东爪哇**：绝缘子左右不对称 (不对称 A-Frame 主要分布在加里曼丹、苏拉威西与东爪哇相邻区域)\n- **巴厘岛 (Bali)**：\n    - 三叉戟横梁下方常有一块长方形底托，柱基常包裹黑色石材或精美宗教石雕，贴有蓝绿方形贴纸或油漆\n- **小巽他群岛 (Nusa Tenggara)**：\n    - 顶端单边斜向支撑杆超长 (绝缘子对称，但仅有单侧一根斜支撑杆)",
        "contentEn": "- **Sumatra**:\n    - Hollow concrete poles with round perforations or long wood/metal top crossarms\n    - **North Sumatra**: Asymmetric insulators (1 on one side, 2 on the other)\n    - **Riau & West Sumatra**: Low diagonal support arms; dark red or blue components near insulators in West Sumatra\n    - **South Sumatra**: Dual diagonal support struts\n- **Kalimantan (Borneo)**:\n    - Massive soaring steel A-frame support poles\n    - **West Kalimantan**: Symmetric insulator arrangement\n    - **East Kalimantan**: Asymmetric insulator arrangement\n- **Sulawesi**:\n    - Small lightning rod spikes on top, perforated crossarms, red-and-white painted bands at head height\n    - **South Sulawesi**: Symmetric insulators\n    - **North Sulawesi**: Asymmetric insulators on dual crossarms (longer upper, shorter lower)\n- **Java**:\n    - Three-tier crossarms (Trident pole) or distinctive top steel cages\n    - **Central Java**: Trademark Trident poles everywhere\n    - **West Java**: Symmetric insulators\n    - **East Java**: Asymmetric insulators (asymmetric A-frames bridge Kalimantan, Sulawesi, and East Java)\n- **Bali**:\n    - Rectangular mounting plate beneath the trident; base clad in black volcanic stone or ornate carvings; blue/green square labels\n- **Lesser Sunda Islands (Nusa Tenggara)**:\n    - Extra-long single-sided diagonal support strut with symmetrical insulators"
      },
      {
        "headingZh": "🌿 植被景观、土壤与各岛特色建筑",
        "headingEn": "Vegetation, Soils & Traditional Roof Architecture",
        "contentZh": "- **植被与土壤分界**：\n    - **北苏门答腊**：房前屋后修剪整齐的绿茵草坪\n    - **西苏门答腊**：湿润多雨的苔藓状草地与山谷梯田\n    - **东苏门答腊**：鲜艳红土地貌\n    - **廖内省 (Riau)**：独特的灰白色砂质土壤\n    - **加里曼丹**：极茂密原始雨林，路况差泥泞颠簸，常遇运木重卡或运煤卡车；大桥路沿涂刷绿色\n    - **苏拉威西**：极其崎岖多山，因海湾深入狭长，在山路转弯处极易频繁瞥见海岸线\n    - **努沙登加拉群岛**：比爪哇和苏门答腊干燥得多，呈现类似澳大利亚北部的干旱稀树草原景观\n- **建筑风格与传统屋顶**：\n    - **西苏门答腊**：米南加保 (Minangkabau) 牛角屋顶，两端尖尖向上翘起 (Rumah Gadang)\n    - **北苏门答腊**：巴塔克 (Batak) 船型屋顶，两端微翘但起翘弧度较低\n    - **加里曼丹**：深色木质民居，木瓦片或铁皮屋顶\n    - **苏拉威西**：南苏拉威西托拉查 (Toraja) 房屋三角山墙内带有密集水平开槽；东南苏拉威西全岛密集覆盖亮蓝色铁皮屋顶\n    - **爪哇岛**：房屋密度极高，成片规整的红色砖瓦平房，院落木栅栏；东爪哇地面常铺设彩色地砖\n    - **巴厘岛**：印度教风格，遍地是红砖或黑火山石堆砌的精美善恶门 (Candi Bentar)，门口立守护神雕像，安山岩围墙，带巴厘特殊文字\n    - **小巽他群岛松巴岛 (Sumba)**：极其高耸直立的尖塔状茅草/铁皮大屋顶\n    - **屋顶剪刀交叉装饰**：多见于南苏拉威西、南加里曼丹及中苏门答腊 (含廖内)\n    - **卫星锅天线朝向**：卫星天线仰角高且指向正东方多位于印尼西部至中部走廊",
        "contentEn": "- **Vegetation & Soils**:\n    - **North Sumatra**: Neatly manicured front lawns and gardens\n    - **West Sumatra**: Wet mossy pastures and lush rice terraces\n    - **East Sumatra**: Vivid red laterite soils\n    - **Riau Province**: Distinctive pale white sandy soils\n    - **Kalimantan**: Ultra-dense primary rainforest, rough potholed roads, logging and coal trucks; green painted bridge curbs\n    - **Sulawesi**: Dramatically rugged and mountainous; twisting roads frequently reveal immediate coastlines\n    - **Nusa Tenggara**: Significantly drier than Java/Sumatra, mimicking Australian dry savannah\n- **Architectural Traditions**:\n    - **West Sumatra**: Minangkabau buffalo-horn rooflines with soaring upturned peaks (Rumah Gadang)\n    - **North Sumatra**: Batak boat-shaped longhouses with shallower curved gables\n    - **Kalimantan**: Dark timber stilt houses with wood shingle or corrugated zinc roofs\n    - **Sulawesi**: Toraja triangular gables with horizontal wooden slats; Southeast Sulawesi densely clad in bright blue zinc roofs\n    - **Java**: Ultra-dense red-tile villages, uniform modern homesteads with wooden picket fences; East Java tiled front patios\n    - **Bali**: Balinese Hindu architecture, red-brick split gates (Candi Bentar), black volcanic shrines, guardian statues, Balinese script\n    - **Sumba Island**: Sky-high thatched and metal tower roofs\n    - **Scissor-X Roof Finials**: Hallmark of South Sulawesi, South Kalimantan, and Central Sumatra (including Riau)\n    - **Satellite Dish Azimuth**: Dishes tilted high and pointing due east denote Western to Central Indonesia"
      },
      {
        "headingZh": "🛡️ 路缘标、石柱栅栏与车牌后缀代码",
        "headingEn": "Bollards, Fences & License Plate Sub-Codes",
        "contentZh": "- **路缘石与护柱**：\n    - **爪哇岛**：道路边缘刷有规整的黑白相间路缘石\n    - **加里曼丹**：英式圆形反光 Bollard\n    - **苏拉威西**：类似英式 Bollard 但刷有黄黑相间斜条纹；中部常见黄白黑三色方形石柱；民居栅栏常漆成白红或白蓝双色\n- **车牌地区代码速查 (牌照侧面或下方微缩字母)**：\n    - **DK**：巴厘岛 (Bali)\n    - **BL, BB, BK, BA, BM, BH, BD, BE, BG**：苏门答腊岛各省 (BL 亚齐, BK 棉兰/北苏, BA 西苏, BM 廖内, BG 巨港/南苏)\n    - **仅有一位单字母 (B, D, F, T, E, G, H, K, L, M, N, P)**：爪哇岛各省 (雅加达 B, 万隆 D, 茂物 F, 三宝垄 H, 泗水 L)\n    - **DA, KB, KH, KT, KU**：加里曼丹 / 婆罗洲各省 (DA 南加, KB 西加, KH 中加, KT 东加, KU 北加)",
        "contentEn": "- **Bollards & Curbs**:\n    - **Java**: Crisp black-and-white painted curb stones along roads\n    - **Kalimantan**: British-style round-top bollards\n    - **Sulawesi**: British-style bollards painted with diagonal yellow-black stripes; yellow-white-black tricolor square posts in Central Sulawesi; colorful red-white or blue-white fences\n- **License Plate Area Prefixes**:\n    - **DK**: Bali\n    - **BL, BB, BK, BA, BM, BH, BD, BE, BG**: Sumatra (BL Aceh, BK North Sumatra/Medan, BA West Sumatra, BM Riau, BG South Sumatra)\n    - **Single-Letter Prefixes (B, D, F, T, E, G, H, K, L, M, N, P)**: Exclusively Java (Jakarta B, Bandung D, Bogor F, Semarang H, Surabaya L)\n    - **DA, KB, KH, KT, KU**: Kalimantan / Indonesian Borneo (DA South, KB West, KH Central, KT East, KU North)"
      },
      {
        "headingZh": "📋 路牌行政层级词汇、电话区号与邮政编码",
        "headingEn": "Administrative Geography, Area Codes & Postal Digits",
        "contentZh": "- **路牌行政缩写速查**：\n    - **Provinsi (Prov)**：省；**PEMERINTAH**：政府 (Government)\n    - **Kabupaten (Kab)**：县 (最核心的地图搜索级别)；**Kecamatan (Kec)**：区；**Desa**：村\n    - **方位词**：Utara (北), Timur (东), Selatan (南), Barat (西), Tengah (中)\n- **核心县名 (Kabupaten) 检索锚点**：\n    - **小巽他**：Lombok (龙目岛), Sumbawa (松巴哇), Sumba (松巴岛), Flores (弗洛勒斯), Alor (阿洛岛)\n    - **苏拉威西**：Minahasa (米纳哈萨-东北角), Toraja (塔纳托拉查-中央高山), Gorontalo (哥伦打洛-北部)\n    - **加里曼丹**：Kapuas (卡普阿斯-中部大河), Kutai (库泰-东部), Berau (布劳-东北)\n    - **苏门答腊**：Toba (托巴县-湖区), Bangka / Belitung (邦加与勿里洞两岛)\n    - **爪哇**：Banyuwangi (外南梦-最东), Badung / Gianyar / Buleleng (巴厘岛), Bogor / Garut / Cianjur (西爪哇)\n- **商铺招牌固话区号 (02x-07x)**：\n    - **02x**：爪哇西部 (雅加达 021, 万隆 022)\n    - **03x**：爪哇东部 (泗水 031)、巴厘岛 (036x)、努沙登加拉群岛\n    - **04x**：苏拉威西岛全境\n    - **05x**：加里曼丹岛全境\n    - **06x**：苏门答腊岛北部 (亚齐/棉兰)\n    - **07x**：苏门答腊岛中南部 (巴东/巨港)\n- **5位数邮政编码首位地理分布**：\n    - **1**：雅加达大都会区；**2**：北苏门答腊；**3**：南苏门答腊；**4**：西爪哇省\n    - **5, 6**：中爪哇省与东爪哇省；**7**：加里曼丹全境；**8**：巴厘岛及小巽他；**9**：苏拉威西及以东",
        "contentEn": "- **Administrative Signage Hierarchy**:\n    - **Provinsi (Prov)**: Province; **PEMERINTAH**: Government\n    - **Kabupaten (Kab)**: Regency (Prime search level on map); **Kecamatan (Kec)**: District; **Desa**: Village\n    - **Cardinal Directions**: Utara (North), Timur (East), Selatan (South), Barat (West), Tengah (Central)\n- **Key Regencies (Kabupaten) to Memorize**:\n    - **Lesser Sundas**: Lombok, Sumbawa, Sumba, Flores, Alor\n    - **Sulawesi**: Minahasa (far NE), Toraja (central highlands), Gorontalo (north)\n    - **Kalimantan**: Kapuas (central basin), Kutai (east), Berau (northeast)\n    - **Sumatra**: Toba (Lake Toba), Bangka / Belitung (eastern offshore islands)\n    - **Java**: Banyuwangi (eastern tip), Badung/Gianyar (Bali), Bogor/Garut (West Java)\n- **Phone Area Codes (02x–07x)**:\n    - **02x**: West Java (Jakarta 021, Bandung 022)\n    - **03x**: East Java (Surabaya 031), Bali (036x), Nusa Tenggara\n    - **04x**: All of Sulawesi\n    - **05x**: All of Kalimantan (Borneo)\n    - **06x**: Northern Sumatra (Aceh, Medan)\n    - **07x**: Central & Southern Sumatra (Padang, Palembang)\n- **Postal Code Initial Digits (5 Digits)**:\n    - **1**: Greater Jakarta; **2**: Northern Sumatra; **3**: Southern Sumatra; **4**: West Java\n    - **5, 6**: Central & East Java; **7**: Kalimantan; **8**: Bali & Nusa Tenggara; **9**: Sulawesi and eastward"
      }
    ],
    "rawContent": "印尼各岛街景车、电线杆绝缘子、建筑、车牌、行政区划、电话区号与邮编完整笔记"
  },

  # 4. 马来西亚 (Malaysia)
  {
    "id": "malaysia",
    "nameZh": "马来西亚",
    "nameEn": "Malaysia",
    "flag": "🇲🇾",
    "continent": "Asia",
    "sections": [
      {
        "headingZh": "🌴 西马 vs 东马（沙巴与砂拉越）区域划分",
        "headingEn": "West Malaysia vs. East Malaysia / Sarawak & Sabah",
        "contentZh": "- **西马 (马来半岛)**：涵盖北部槟城 (Penang)、玻璃市、霹雳；中部吉隆坡 (Kuala Lumpur)、雪兰莪、森美兰；南部柔佛 (Johor)；东海岸彭亨、登嘉楼、吉兰丹\n- **东马 (婆罗洲)**：涵盖西部**砂拉越 (Sarawak)**与东部**沙巴 (Sabah)**；东马地势更为原始多山，原始热带雨林覆盖率极高，荒野感显著强于西马",
        "contentEn": "- **Peninsular (West) Malaysia**: Northern states (Penang, Perlis, Kedah, Perak), Central (Kuala Lumpur, Selangor, Negeri Sembilan), Southern (Johor), and East Coast (Pahang, Terengganu, Kelantan)\n- **East Malaysia (Borneo)**: Western state **Sarawak** and eastern state **Sabah**; noticeably wilder, rugged mountains, dense rainforest coverage, and greater frontier feel"
      },
      {
        "headingZh": "⚡ 电线杆贴纸、顶部结构与车牌前缀",
        "headingEn": "Pole Stickers, Pole Tops & License Plate Initials",
        "contentZh": "- **电线杆贴纸特征**：\n    - **西马**：混凝土圆柱或方柱电杆上普遍贴有**黑色长方形小贴纸**\n    - **东马**：通常没有黑色贴纸；砂拉越电杆偶尔贴有白色小贴纸，电杆呈“干”字形结构\n- **电线杆顶部结构**：\n    - **西马**：横担中间有两个小圆环，下方呈长刀状支撑结构\n    - **砂拉越**：非对称绝缘子和电杆，路灯下方有回旋镖 (飞去来器) 状支撑臂\n    - **沙巴**：两根等长横杠，中间带有类似 “VI” 字样的细铁斜撑\n- **车牌首字母属地代码**：\n    - **以 Q 开头**：**砂拉越 (Sarawak)**\n    - **以 S 开头**：**沙巴 (Sabah)**\n    - **西马主要字母**：W 代表吉隆坡，P 代表槟城，J 代表柔佛，A 霹雳，B 雪兰莪，C 彭亨，D 吉兰丹，T 登嘉楼，K 吉打",
        "contentEn": "- **Pole Sticker Markers**:\n    - **West Malaysia**: Concrete poles (round or square) feature a **small black rectangular sticker**\n    - **East Malaysia**: Lack black stickers; Sarawak poles occasionally have small white stickers on cross-shaped poles\n- **Pole Top Anatomy**:\n    - **West Malaysia**: Two small rings in the center of the crossarm, supported by a saber-like blade bracket\n    - **Sarawak**: Asymmetric insulators and poles; streetlight arm mounted on a boomerang-shaped bracket\n    - **Sabah**: Dual crossbars of identical length joined by thin \"VI\"-shaped diagonal struts\n- **License Plate Initial Letters**:\n    - **Prefix Q**: Exclusively **Sarawak**\n    - **Prefix S**: Exclusively **Sabah**\n    - **Peninsular Codes**: W for Kuala Lumpur, P for Penang, J for Johor, A for Perak, B for Selangor, C for Pahang, D for Kelantan, T for Terengganu, K for Kedah"
      },
      {
        "headingZh": "🔤 爪夷文、中英文招牌与油棕林景观",
        "headingEn": "Jawi Arabic Script, Signage & Palm Plantations",
        "contentZh": "- **文字与招牌**：\n    - **爪夷文 (Jawi)**：类似阿拉伯字母的马来语书写体，在西马非常常见 (吉兰丹、登嘉楼、彭亨、吉打甚至用于官方双语路牌)\n    - **中文招牌**：东马市镇中中文双语招牌出现的频率显著高于西马农村\n    - **英文路牌**：东马的英文路牌和公共标识占比明显更高\n- **植被与市政设施**：\n    - **棕榈油种植园 (Oil Palm)**：全马广泛分布，但在东马沙巴内陆连绵无尽，极为壮观\n    - **Alam Flora 标志**：市政分类垃圾桶上的 [Alam Flora 标志](https://maps.app.goo.gl/n3CSZfspZKFSEHpCA) 通常只出现在西马吉隆坡、布城和彭亨州",
        "contentEn": "- **Scripts & Signage**:\n    - **Jawi Script (Arabic-derived)**: Widely visible across Peninsular Malaysia (official street signage in Kelantan, Terengganu, Pahang, and Kedah)\n    - **Chinese Signage**: Significantly more prominent in East Malaysian Bornean towns than in peninsular rural areas\n    - **English Signage**: Considerably higher prevalence of English road markers in East Malaysia\n- **Ecosystems & Municipal Infrastructure**:\n    - **Oil Palm Plantations**: Found across Malaysia, but forms vast monoculture oceans in Sabah's interior\n    - **Alam Flora Bins**: Municipal garbage bins stamped with the [Alam Flora logo](https://maps.app.goo.gl/n3CSZfspZKFSEHpCA) are restricted to West Malaysia (Kuala Lumpur, Putrajaya, Pahang)"
      }
    ],
    "rawContent": "马来西亚东西马、电线杆结构、车牌代码、爪夷文与油棕林笔记"
  },

  # 5. 菲律宾 (Philippines)
  {
    "id": "philippines",
    "nameZh": "菲律宾",
    "nameEn": "Philippines",
    "flag": "🇵🇭",
    "continent": "Asia",
    "sections": [
      {
        "headingZh": "🛺 菲律宾机动三轮车 (Tricycle) 车顶弧度南北分布",
        "headingEn": "Tricycle Roof Profiles: North, Central & South",
        "contentZh": "- **低平车顶 (Low Roof Tricycle)**：主要分布在菲律宾北部吕宋岛 (Luzon) 广大城镇与乡村\n- **高拱圆形车顶 (High Curved Roof Tricycle)**：中部米沙鄢群岛 (Visayas，如宿务、保和、伊洛伊洛等地) 居多\n- **纯平箱式车顶 (Flat Boxy Roof Tricycle)**：主要集中在南部棉兰老岛 (Mindanao)",
        "contentEn": "- **Low Roof Tricycles**: Predominant in the north across Luzon island\n- **High Curved Roof Tricycles**: Concentrated in the central Visayas islands (Cebu, Bohol, Iloilo)\n- **Flat Boxy Roof Tricycles**: Characteristic of the southern region of Mindanao"
      }
    ],
    "rawContent": "菲律宾突突车三种车顶高度与南北区域分布笔记"
  },

  # 6. 巴西 (Brazil)
  {
    "id": "brazil",
    "nameZh": "巴西",
    "nameEn": "Brazil",
    "flag": "🇧🇷",
    "continent": "South America",
    "sections": [
      {
        "headingZh": "☎️ 电话区号 (DDD 11-99) 逆时针法则",
        "headingEn": "DDD Phone Area Codes: The Counter-Clockwise Spiral",
        "contentZh": "- **区号结构**：11位电话号码前两位为 DDD 区号 (注意以 9 开头的多为手机号；第二位是 1 通常为该州主要大城市)\n- **从圣保罗开始逆时针旋转法则**：\n    - **1x**：圣保罗州 (São Paulo SP，以该州中心开始，11 为圣保罗市，12-19 为周边)\n    - **2x**：里约热内卢 (RJ 21/22/24) + 圣埃斯皮里图 (ES 27/28) (逆时针往右上角延伸)\n    - **3x**：米纳斯吉拉斯州 (Minas Gerais MG 31-38) (逆时针完成 SP 北部邻州)\n    - **4x**：巴拉那州 (PR 41-46) + 圣卡塔琳娜州 (SC 47-49) (转向 SP 南方大州)\n    - **5x**：南里奥格兰德州 (Rio Grande do Sul RS 51-55) (继续向最南端延伸)\n    - **6x**：中西部与南亚马逊：南马托格罗索 (MS 67) + 戈亚斯/联邦区 (GO/DF 61/62/64) + 托坎廷斯 (TO 63) + 马托格罗索 (MT 65/66) + 朗多尼亚 (RO 69) + 阿克里 (AC 68)\n    - **7x**：巴伊亚州 (Bahia BA 71-77) + 塞尔希培州 (SE 79) (逆时针上行)\n    - **8x**：卡廷加与东北沿海各州：皮奥伊 (PI) + 塞阿腊 (CE) + 北里奥格兰德 (RN) + 帕拉伊巴 (PB) + 伯南布哥 (PE) + 阿拉戈斯 (AL)\n    - **9x**：北亚马逊大区：帕拉 (PA 91/93/94) + 亚马孙 (AM 92/97) + 罗赖马 (RR 95) + 阿马帕 (AP 96) + 马拉尼昂 (MA 98/99)",
        "contentEn": "- **DDD Code Structure**: The first two digits of landline numbers represent the DDD code (cell numbers start with 9; second digit 1 denotes capital/major city)\n- **The Counter-Clockwise Spiral Rule Starting from São Paulo**:\n    - **1x**: São Paulo State (SP: 11 is capital city, 12–19 for interior)\n    - **2x**: Rio de Janeiro (RJ 21/22/24) + Espírito Santo (ES 27/28)\n    - **3x**: Minas Gerais (MG 31–38)\n    - **4x**: Paraná (PR 41–46) + Santa Catarina (SC 47–49)\n    - **5x**: Rio Grande do Sul (RS 51–55, extreme south)\n    - **6x**: Central-West & Southern Amazonia: MS (67), GO/DF (61/62/64), TO (63), MT (65/66), RO (69), AC (68)\n    - **7x**: Bahia (BA 71–77) + Sergipe (SE 79)\n    - **8x**: Northeast / Caatinga: Piauí (PI), Ceará (CE), Rio Grande do Norte (RN), Paraíba (PB), Pernambuco (PE), Alagoas (AL)\n    - **9x**: Northern Amazonia: Pará (PA), Amazonas (AM), Roraima (RR), Amapá (AP), Maranhão (MA)"
      },
      {
        "headingZh": "📮 邮政编码 (CEP 0-9) 首位地理分布",
        "headingEn": "CEP Postal Codes: State-by-State Sweep",
        "contentZh": "- **CEP 格式**：路牌下方注明的 CEP XXXXX-XXX，首位数字同样按顺时针/逆时针自南向北展开：\n    - **0-1**：圣保罗州 (SP)\n    - **2**：里约热内卢 (RJ) + 圣埃斯皮里图 (ES)\n    - **3**：米纳斯吉拉斯 (MG)\n    - **4**：巴伊亚 (BA) + 塞尔希培 (SE)\n    - **5**：卡廷加东北各州 (PE, AL, PB, RN)\n    - **6**：北部与东亚马逊 (CE, PI, MA, PA, AP, AM, RR, AC)\n    - **7**：中西部各州 (GO, DF, TO, MT, MS, RO)\n    - **8**：巴拉那 (PR) + 圣卡塔琳娜 (SC)\n    - **9**：南里奥格兰德州 (RS)",
        "contentEn": "- **CEP Format**: Postcodes stamped on street signs read XXXXX-XXX; initial digits map cleanly across states:\n    - **0–1**: São Paulo (SP)\n    - **2**: Rio de Janeiro (RJ) & Espírito Santo (ES)\n    - **3**: Minas Gerais (MG)\n    - **4**: Bahia (BA) & Sergipe (SE)\n    - **5**: Northeast interior (PE, AL, PB, RN)\n    - **6**: North & Eastern Amazonia (CE, PI, MA, PA, AP, AM, RR, AC)\n    - **7**: Central-West (GO, DF, TO, MT, MS, RO)\n    - **8**: Paraná (PR) & Santa Catarina (SC)\n    - **9**: Rio Grande do Sul (RS)"
      },
      {
        "headingZh": "🛣️ 国家高速 (BR-0xx 至 BR-4xx) 编号走向体系",
        "headingEn": "Federal Highway Numbering: Radial, N-S, E-W, Diagonal",
        "contentZh": "- **州级公路**：州名缩写 + 路号 (如 SP-280, RJ-116, MG-050)\n- **国家级联邦公路 (BR-XXX)**：\n    - **BR-000 至 BR-099 (放射状)**：以首都巴西利亚 (Brasília) 为中心向全国内陆与沿海辐射\n    - **BR-100 至 BR-199 (南北向)**：纵贯南北公路 (如沿海干线 BR-101, 内陆干线 BR-116)\n    - **BR-200 至 BR-299 (东西向)**：横贯东西公路 (如横跨亚马逊的 BR-230)\n    - **BR-300 至 BR-399 (对角斜向)**：跨区域对角线走向公路\n    - **BR-400 至 BR-499 (联络过渡)**：连接两条主干联邦公路的联络线或短支线",
        "contentEn": "- **State Highways**: State abbreviation + number (e.g. SP-280, RJ-116, MG-050)\n- **Federal Highway Grid (BR-XXX)**:\n    - **BR-000 to BR-099 (Radial)**: Radiate outwards from the capital Brasília\n    - **BR-100 to BR-199 (North-South)**: Longitudinal trunk routes (e.g. coastal BR-101, inland spine BR-116)\n    - **BR-200 to BR-299 (East-West)**: Latitudinal routes (e.g. Trans-Amazonian BR-230)\n    - **BR-300 to BR-399 (Diagonal)**: Diagonal cross-regional routes\n    - **BR-400 to BR-499 (Connector)**: Link routes connecting two major highways"
      },
      {
        "headingZh": "⚡ 电线杆、特色路灯臂与建筑细节",
        "headingEn": "Utility Poles, Streetlight Arms & Architecture",
        "contentZh": "- **电线杆与路灯设施**：\n    - **混凝土圆形电线杆**：在圣保罗州 (SP) 及其周边大都市区最常出现\n    - **纯木头电线杆**：在最南部的南里奥格兰德州 (RS) 大量出现\n    - **横杠下无三角斜支撑杆**：多集中在巴西东北部各州\n    - **彩色装饰性“羽翼状”路灯臂**：东北部塞阿腊州 (Ceará / CE) 独家特色\n    - **棕色蘑菇状瓷绝缘子**：东北部伯南布哥州 (Pernambuco / PE)\n    - **顶部单绝缘子，下方错位交替横向绝缘子**：马托格罗索州 (Mato Grosso / MT) 特色杆\n    - **长的黄色或黑色竖贴纸，印有一串数字**：戈亚斯州 (Goiás / GO)\n- **建筑与道路细节**：\n    - **门前类似洗手池/脸盆的高架垃圾架**：西部边境阿克里 (AC) 与朗多尼亚 (RO)\n    - **欧式红瓦砖木洋房**：南三州圣卡塔琳娜 (SC)、巴拉那 (PR)、南里奥格兰德 (RS)\n    - **高木柱支撑的吊脚木屋**：阿克里 (AC) 亚马逊雨林带\n    - **道路两侧泥土极其平整赤红 (类似澳洲)**：皮奥伊州 (Piauí / PI)\n    - **住宅电表箱内安装粗格金属网罩**：圣卡塔琳娜州 (SC)",
        "contentEn": "- **Pole & Lighting Metas**:\n    - **Round Concrete Poles**: Most prevalent around São Paulo (SP) and neighboring industrial regions\n    - **Wooden Poles**: Ubiquitous in the southernmost state of Rio Grande do Sul (RS)\n    - **Crossarms Without Triangular Braces**: Concentrated across the Northeast\n    - **Ornate Winged Colorful Streetlight Brackets**: Signature meta of Ceará (CE)\n    - **Brown Mushroom Insulators**: Specific to Pernambuco (PE)\n    - **Top Single Insulator + Alternating Lower Insulators**: Mato Grosso (MT) pole configuration\n    - **Long Vertical Yellow/Black Number Stickers**: Goiás (GO)\n- **Architecture & Local Quirks**:\n    - **Washbasin-Style Elevated Trash Bins on Posts**: Acre (AC) and Rondônia (RO) in the far west\n    - **European-Style Brick & Timber Cottages**: Southern states (SC, PR, RS)\n    - **Stilt Wooden Houses on High Posts**: Acre (AC) rain forest lowlands\n    - **Neat Flat Red Road Shoulders (Aussie-like)**: Piauí (PI)\n    - **Heavy Wire Mesh Cages Inside Electric Meter Boxes**: Santa Catarina (SC)"
      },
      {
        "headingZh": "🌲 植被生态带：巴拉那松、塞拉多与卡廷加",
        "headingEn": "Vegetation Zones: Paraná Pine, Coffee, Macaw Palm & Caatinga",
        "contentZh": "- **巴拉那松 (Paraná Pine / Araucaria)**：巨大如烛台的高寒针叶树，绝对标志着巴西南部三大州 (PR, SC, RS)\n- **成片高大咖啡灌木**：深绿茂密的成排灌木丛，多见于圣保罗州 (SP) 及其周边高原农场\n- **巴西栗树 (Brazil Nut Tree)**：高耸入云的保护伞状参天巨树，分布在亚马逊雨林及其外围走廊\n- **椰子树与甘蔗田**：椰子树遍布东部大西洋热带沿海；甘蔗田广泛种植于圣保罗州及东北沿海阿拉戈斯州 (Alagoas)\n- **连绵大豆田**：南亚马逊及马托格罗索农业开垦带\n- **金刚鹦鹉棕榈 (Macaw Palm / Bocaiuva)**：带极细密棕榈叶的粗壮棕榈，在南马托格罗索 (MS) 潘塔纳尔湿地边缘最常见\n- **稀疏细密的黄草伴随远山**：北部罗赖马州 (Roraima / RR) 高原草原",
        "contentEn": "- **Paraná Pine (Araucaria)**: Majestic candelabra-shaped conifers, strictly marks the southern highlands (PR, SC, RS)\n- **Coffee Shrubs**: Dense clusters of tall, glossy green bushes across São Paulo (SP) and southern Minas Gerais\n- **Brazil Nut Trees**: Towering umbrella-shaped canopy giants characteristic of the Amazon Basin\n- **Coconut Palms & Sugarcane**: Coconut palms along the eastern tropical coast; massive sugarcane expanses in SP and Alagoas\n- **Soybean Seas**: Sprawling agricultural plains in southern Amazonia and Mato Grosso\n- **Macaw Palm (Bocaiuva)**: Fine, feathery palm fronds prominent in Mato Grosso do Sul (MS)\n- **Fine Dry Grass with Distant Massifs**: Highland savannah savannas in northern Roraima (RR)"
      }
    ],
    "rawContent": "巴西电话区号DDD逆时针规律、邮编CEP、公路编号、电杆路灯、建筑与植被完整笔记"
  },

  # 7. 澳大利亚 (Australia)
  {
    "id": "australia",
    "nameZh": "澳大利亚",
    "nameEn": "Australia",
    "flag": "🇦🇺",
    "continent": "Oceania",
    "sections": [
      {
        "headingZh": "🛣️ 十大国家级战略干线公路速查",
        "headingEn": "Ten Major National Highways & Routes",
        "contentZh": "- **斯图尔特公路 (Stuart Highway, A1/A87)**：阿德莱德 - 爱丽丝泉 - 达尔文 (纵贯澳洲中央荒漠南北大动脉)\n- **艾尔公路 (Eyre Highway, A1)**：诺斯曼 (WA) - 奥古斯塔港 (SA) (横穿纳拉伯平原东西大通道)\n- **休姆高速 (Hume Highway / Freeway, M31)**：悉尼 - 墨尔本 (连接全澳两大都市的核心高速走廊)\n- **大北方公路 (Great Northern Highway, 1/95)**：珀斯 - 纽曼 - 温德姆 (纵贯西澳北部的漫长荒漠干线)\n- **布鲁斯公路 (Bruce Highway, M1/A1)**：凯恩斯 (Cairns) - 阳光海岸 - 布里斯班 (昆士兰东海岸黄金干线)\n- **巴里尔公路 (Barrier Highway, A32)**：悉尼 - 断背山 (Broken Hill) - 阿德莱德 (内陆荒漠穿越线)\n- **米德兰公路 (Midland Highway, 1)**：霍巴特 - 朗塞斯顿 (塔斯马尼亚南北连接线)\n- **拉塞特公路 (Lasseter Highway, 4)**：斯图尔特公路 - 乌鲁鲁 (艾尔斯岩 Uluru 景区公路)\n- **太平洋高速 (Pacific Highway, A1/M1)**：悉尼 - 纽卡斯尔 - 布里斯班 (新南威尔士北海岸主干道)\n- **王子公路 (Princes Highway, A1/M1)**：悉尼 - 墨尔本 - 阿德莱德 (沿东南海岸弧形延伸风景公路)",
        "contentEn": "- **Stuart Highway (A1 / A87)**: Adelaide – Alice Springs – Darwin (Trunk spine crossing central red outback)\n- **Eyre Highway (A1)**: Norseman (WA) – Port Augusta (SA) (Crosses the treeless Nullarbor Plain)\n- **Hume Highway (M31)**: Sydney – Melbourne (Busiest freight freeway connecting Australia's two largest cities)\n- **Great Northern Highway (1 / 95)**: Perth – Port Hedland – Wyndham (Long isolated highway through northern WA)\n- **Bruce Highway (M1 / A1)**: Cairns – Townsville – Brisbane (Queensland east coast arterial)\n- **Barrier Highway (A32)**: Sydney – Broken Hill – Adelaide (Red dirt outback connector)\n- **Midland Highway (Route 1)**: Hobart – Launceston (Spine of Tasmania)\n- **Lasseter Highway (Route 4)**: Stuart Highway junction – Uluru (Ayers Rock national park road)\n- **Pacific Highway (A1 / M1)**: Sydney – Gold Coast – Brisbane (Coastal NSW freeway)\n- **Princes Highway (A1 / M1)**: Sydney – Melbourne – Adelaide (Scenic southeastern coastal loop)"
      },
      {
        "headingZh": "⚡ 跨州基础设施元数据：车牌、路缘柱与电线杆",
        "headingEn": "Cross-State Infrastructure: Plates, Bollards & Poles",
        "contentZh": "- **车牌辨识**：**黄底黑字车牌**必为新南威尔士州 (NSW)；**白底红字车牌**必为北领地 (NT)\n- **交通信号灯外框**：信号灯灯罩外带一圈醒目白色反光边框的多见于北领地 (NT)、南澳 (SA) 和维多利亚 (VIC)\n- **路缘柱反光片形态**：短小方形反光板多见于昆士兰 (QLD) 与南澳 (SA)；圆形反光红点多见于西澳 (WA)\n- **地下消火栓指示柱**：白杆红顶带蓝色反光条的地下消防栓标记柱常见于维多利亚 (VIC) 和南澳 (SA)\n- **路牌立杆**：扁平金属片状立柱多见于南澳 (SA) 与西澳 (WA)\n- **道路编号前缀**：以 **C 开头**的编号 (如 C123) 主要属于维多利亚州 (VIC) 与塔斯马尼亚州 (TAS)\n- **电线杆结构特征**：\n    - **维多利亚 (VIC)**：十字架型木杆，顶部及左右两侧带螺纹瓷绝缘子\n    - **西澳 (WA)**：电杆底部刷绿色漆，顶部带有向上扬起的三叉戟金属支架\n    - **南澳 (SA)**：独特的 **Stobie Pole** (两根钢轨中间灌注水泥板的电线杆)，尤以阿德莱德为代表\n    - **塔斯马尼亚 (TAS)**：电杆上包裹全绿色的金属防负鼠圈 (Possum Trap)，顶端带有 90 度 L 型铁杆\n    - **北领地 (NT)**：镂空梯子型金属铁杆",
        "contentEn": "- **License Plates**: **Yellow background** plates are unique to New South Wales (NSW); **white plates with red text** belong to Northern Territory (NT)\n- **Traffic Light Backboards**: Prominent white reflective borders around lights occur in NT, SA, and Victoria (VIC)\n- **Bollard Reflectors**: Short rectangular reflectors identify Queensland (QLD) and South Australia (SA); circular red reflector dots identify Western Australia (WA)\n- **Hydrant Markers**: White posts with red tops and blue reflectors denote underground fire plugs in VIC and SA\n- **Signposts**: Flat paddle-like steel blades indicate SA and WA\n- **Route Number Prefixes**: Routes prefixed with **letter C** (e.g. C123) are exclusive to Victoria (VIC) and Tasmania (TAS)\n- **Utility Pole Styles**:\n    - **Victoria (VIC)**: Timber cross with ribbed ceramic screw insulators on top and sides\n    - **Western Australia (WA)**: Base painted green with upturned trident steel crossarms on top\n    - **South Australia (SA)**: Iconic **Stobie Pole** (concrete slab sandwiched between steel rails), especially in Adelaide\n    - **Tasmania (TAS)**: Encased in a bright green metal possum guard with a 90-degree L-shaped steel bracket on top\n    - **Northern Territory (NT)**: Open-lattice steel ladder poles"
      },
      {
        "headingZh": "🦘 各州独家绝杀特征：红土、植被与城市地貌",
        "headingEn": "State-by-State Distinctive Features: WA, NT, QLD, NSW, VIC, TAS, ACT, SA",
        "contentZh": "- **西澳大利亚州 (Western Australia / WA)**：\n    - **极深红刺眼的土壤**，搭配低矮干旱灌木丛；黄色路牌立柱；城市首府为珀斯 (Perth)\n    - **电线杆**：拥有细长暗红色的绝缘子，底部刷绿漆，顶部常有向上三叉戟，贴有白/黄色贴纸\n    - **车牌与地名**：车牌呈现淡蓝色调；城镇地名极其普遍以 **“-up”** 结尾 (如 Joondalup, Manjimup, Jerramungup)\n    - **路缘标**：路边平缓路缘石；红圆点或黑白斜条纹反光路桩；绿色指示牌立在路旁草地上\n- **北部地方 (Northern Territory / NT)**：\n    - **红土但伴随稀疏绿林**：深红土壤散布稀疏矮树与黄绿杂草；笔直穿过荒漠的无尽长路，红土路肩堆积有黑色/深褐色铁矿碎石块\n    - **车牌与设施**：白底红字车牌；生锈带圆孔金属电杆；路牌杆上贴黄贴纸；66 号公路街景镜头带有脏污黑斑\n- **昆士兰州 (Queensland / QLD)**：\n    - **热带与平坦地貌**：内陆地势极平坦无山丘，罗马镇 (Roma) 一带密布独特的澳洲酒瓶树 (Bottle Tree)\n    - **设施细节**：路桩反光板短小；电杆横木略微向上翘，钉有黑底带斜字数字牌；A6 路上电杆带交替三角形贴纸；橙边方形指示牌；黄色路牌柱顶部弯曲成平滑圆弧形；首府布里斯班\n- **新南威尔士州 (New South Wales / NSW)**：\n    - **起伏多山地形**：温带多山丘陵；标志性全黄车牌 (常为前短牌)；首府悉尼\n    - **标志与护栏**：“No Stopping” 禁停标志全红且无文字；公路钢护栏末端刷有红黑双色涂层 (其他州为黑白)；护栏末端黑黄条纹\n- **维多利亚州 (Victoria / VIC)**：\n    - **地貌与车牌**：平原农田中突兀耸立的山脉群 (如格兰坪)；白底车牌中间常带蓝色三角形小图标；首府墨尔本\n    - **设施**：电杆横木完全水平，绝缘子分布在侧面，杆上常贴蓝色方贴纸；“No Stopping” 标志带有文字说明\n- **塔斯马尼亚州 (Tasmania / TAS)**：\n    - **景观酷似新西兰**：湿润多雨、温带绿色丘陵农牧业山脉；电杆常包裹全绿防负鼠金属圈，顶端带 L 型铁件；街景车镜头边缘常有变色色差；首府霍巴特\n- **首都领地 (ACT - 堪培拉)**：\n    - **极致整齐的花园城市**：街道规划美观统一；道路边缘白色实线有断开，路中嵌有凸起反光猫眼道钉\n- **南澳大利亚州 (South Australia / SA)**：\n    - **路标与地貌**：大面积使用短反光板路桩；路旁草地上立白色说明牌；路标立柱为未涂漆的金属方管 (WA 多为黄色)；遍布著名的 Stobie 钢混电杆 (阿德莱德地标)；甘比尔山 (Mount Gambier) 街景镜头偶见树叶遮挡",
        "contentEn": "- **Western Australia (WA)**:\n    - **Vivid deep red outback soil** with low scrub; yellow signposts; capital Perth\n    - **Poles**: Long dark red insulators, green painted bases, upturned trident brackets, white/yellow stickers\n    - **Plates & Towns**: Soft bluish plate tone; towns overwhelmingly end in **\"-up\"** (e.g. Joondalup, Manjimup)\n    - **Bollards**: Rounded gentle curb edges; red circular dots or black/white chevron markers; green signs standing on grass\n- **Northern Territory (NT)**:\n    - **Red soil dotted with trees**: Crimson soil covered in sparse savannah scrub; long straight highways with dark ironstone gravel shoulders\n    - **Plates & Metas**: White plates with red lettering; rusted perforated steel poles; yellow stickers on signposts; camera dirt smudges on Route 66\n- **Queensland (QLD)**:\n    - **Tropical & Flat Plains**: Extremely flat inland plains; Roma region populated by iconic swollen Bottle Trees\n    - **Metas**: Short reflector plates on bollards; slightly upturned pole crossarms with black slant-number plates; orange-bordered square signs; curved round-top yellow signposts; capital Brisbane\n- **New South Wales (NSW)**:\n    - **Hilly Terrain**: Undulating temperate hills; iconic all-yellow license plates (often short front plates); capital Sydney\n    - **Signage & Guardrails**: Textless all-red \"No Stopping\" signs; guardrail ends painted in red and black (other states use black and white); yellow-black diagonal stripes\n- **Victoria (VIC)**:\n    - **Topography & Plates**: Dramatic isolated mountain ranges rising abruptly from flat farmland (Grampians); white plates with blue triangle center icon; capital Melbourne\n    - **Infrastructure**: Perfectly horizontal pole crossbars with side-mounted screw insulators and blue square stickers; \"No Stopping\" signs include explanatory text\n- **Tasmania (TAS)**:\n    - **New Zealand-like Biome**: Temperate lush green rolling hills, cool maritime climate; utility poles fitted with full-wrap green metal possum barriers and L-brackets; camera lens discoloration; capital Hobart\n- **Australian Capital Territory (ACT)**:\n    - **Immaculate Garden City**: Canberra's geometric radial planning; broken white edge road markings with embedded raised cat's-eye reflectors\n- **South Australia (SA)**:\n    - **Infrastructure**: Short bollard reflectors; white information boards on grass; natural unpainted square steel signposts (WA uses yellow); trademark Stobie steel-concrete poles throughout Adelaide; foliage glitched onto camera lens around Mount Gambier"
      }
    ],
    "rawContent": "澳大利亚十大国道、跨州基础设施、电杆、车牌与八大州独家绝杀特征完整笔记"
  },

  # 8. 加拿大 (Canada)
  {
    "id": "canada",
    "nameZh": "加拿大",
    "nameEn": "Canada",
    "flag": "🇨🇦",
    "continent": "North America",
    "sections": [
      {
        "headingZh": "🚙 10省及3地区车牌颜色与前牌法规",
        "headingEn": "Provincial License Plates & Front Plate Rules",
        "contentZh": "- **必须悬挂前车牌的省份**：全加拿大仅 **BC (不列颠哥伦比亚)**、**MB (曼尼托巴)**、**ON (安大略)** 三省强制悬挂前牌 (其余大多数省份车头无牌)\n- **特色车牌图谱**：\n    - **北极熊轮廓车牌**：西北地区 (NT) 纯蓝底色北极熊；努纳武特 (NU) 米色/深色极光北极熊\n    - **爱德华王子岛 (PE)**：左上浅蓝、左下深红、右边纯白三色风车版面\n    - **安大略省 (ON)**：纯白底色深蓝字符，极为普及常见\n    - **育空地区 (YT)**：底部带有一条鲜艳的天蓝色横条 (淘金者标志)\n    - **曼尼托巴省 (MB)**：左右两侧各带一道绿色条纹 (友好曼尼托巴)",
        "contentEn": "- **Mandatory Front Plate Provinces**: Only three provinces require a front license plate: **BC (British Columbia)**, **MB (Manitoba)**, and **ON (Ontario)** (vehicles in other provinces have no front plate)\n- **Signature Plate Designs**:\n    - **Polar Bear Die-Cut Plates**: Northwest Territories (NT) solid blue bear; Nunavut (NU) cream/dark sky bear\n    - **Prince Edward Island (PE)**: Light blue upper-left, deep red lower-left, white right\n    - **Ontario (ON)**: Crisp white field with dark royal blue characters\n    - **Yukon (YT)**: Vibrant cyan-blue horizontal stripe across bottom\n    - **Manitoba (MB)**: Distinctive green vertical side borders"
      },
      {
        "headingZh": "🍁 东西各省道路设施、路缘标与高速标志",
        "headingEn": "Province-by-Province Road Infrastructure & Bollards",
        "contentZh": "- **不列颠哥伦比亚 (BC)**：\n    - 扁平长条形路缘柱，反光板宽大形似电影屏幕\n    - 依山公路边缘大量采用高混凝土防撞护栏 (Jersey Barrier)\n    - 限速牌下方常带有白底黑字 “km/h” 小副牌\n- **阿尔伯塔 (AB)**：\n    - 圆柱形路桩，顶部带有“黑-白-黑”三色环纹\n    - 信号灯悬臂支架通常涂装为全黑色\n- **萨斯喀彻温 (SK)**：\n    - 广袤平原麦浪，木电线杆绝缘子在左右两侧以“1个”和“2个”规律交替排列\n- **曼尼托巴 (MB)**：\n    - 圆柱形路桩顶部带有“黑-灰-黑”三色环，部分下方加装橙色反光圈\n- **安大略 (ON)**：\n    - 公路护栏广泛采用三条钢缆绳索连接短木桩的结构\n    - 高速入口匝道常有绿白相间的菱形指示牌；交通灯通常为亮黄色外壳\n    - 限速牌下方带有黑底白字 “km/h” 副牌；绿色里程牌下方带白色方块标示小数位\n    - 多伦多市内公交站牌为两端红色、中间白色且印有站号的圆柱立柱\n- **新不伦瑞克 (NB)**：\n    - 双语官方省份，Stop 标志上同时并列印有 **“STOP” 与 “ARRÊT”**\n    - 横贯加拿大高速 (Trans-Canada Highway) 上可见类似冰岛的黄黑色反光路桩\n- **爱德华王子岛 (PE)**：\n    - 全岛覆盖极其醒目的鲜红砖色土壤与砂岩海滩\n- **纽芬兰与拉布拉多 (NL)**：\n    - 漫山遍野类似圣诞树的黑云杉与冷杉针叶林；T 路口警示牌在传统棋盘格外还加装左右指示箭头，并整体嵌在一个大橙色正方形牌内\n- **西北地区 (NT)**：\n    - 黑白黑圆柱路桩，其中部白色反光带比 AB 省更细窄；广泛分布砂石碎石公路",
        "contentEn": "- **British Columbia (BC)**:\n    - Flat wide paddle bollards with wide movie-screen-like reflectors\n    - Abundant concrete Jersey barriers along mountain highway drop-offs\n    - Speed limit signs feature a white \"km/h\" sub-plate beneath\n- **Alberta (AB)**:\n    - Cylindrical roadside bollards topped with a distinctive \"black-white-black\" banded pattern\n    - Traffic light gantries and masts are painted solid black\n- **Saskatchewan (SK)**:\n    - Boundless agricultural prairie fields; wooden pole crossarms alternate between 1 and 2 insulators left-to-right\n- **Manitoba (MB)**:\n    - Cylindrical bollards topped with black-gray-black stripes, occasionally with orange reflective bases\n- **Ontario (ON)**:\n    - Highway guardrails frequently use three tensioned steel cables strung between short posts\n    - Highway entrance ramps feature green-and-white diamond guidance signs; yellow traffic light housings\n    - Speed signs feature a black \"km/h\" tab below; green mile markers show decimals inside white squares\n    - Toronto bus stops are cylindrical posts with red ends and white centers\n- **New Brunswick (NB)**:\n    - Fully bilingual province; Stop signs explicitly combine **\"STOP\" and \"ARRÊT\"**\n    - Yellow-and-black Icelandic-style bollards along the Trans-Canada Highway\n    - Distinctive vibrant red clay soils across Prince Edward Island (PE)\n- **Newfoundland and Labrador (NL)**:\n    - Dense boreal spruce/fir forests resembling Christmas trees; T-intersection signs place black/yellow chevrons with arrows inside an oversized orange square\n- **Northwest Territories (NT)**:\n    - Black-white-black bollards with a significantly narrower white reflector band than Alberta; unpaved gravel highways"
      },
      {
        "headingZh": "⚜️ 魁北克法语区独有道路特征与交通标志",
        "headingEn": "Quebec Francophone Specifics & Chevrons",
        "contentZh": "- **纯法语环境**：全境所有指路牌、路名牌均为纯法语书写\n- **停让标志**：全境 Stop 标志写为纯法语 **“ARRÊT”** (绝无英文 STOP 字样)\n- **交通信号灯**：十字路口交通灯普遍采用**横向水平悬挂** (Horizontal Traffic Lights)\n- **弯道指示标 (Chevron)**：采用独一无二的**红白相间**箭头反光牌 (加拿大其余所有省份均为黄黑相间)\n- **道路设施细节**：\n    - 木质电线杆上常贴有顶端带黑横条的黄色警示贴纸\n    - 细长反光棒直接用螺栓立在铁波形护栏上，带红或绿反光条\n    - 消防栓旁常插有高位橙色雪地警示杆\n    - T 字路口警示牌不带传统黑黄棋盘格",
        "contentEn": "- **Francophone Signage**: Exclusively French road signage, municipal plaques, and place names\n- **Stop Signs**: Stop signs uniformly read **\"ARRÊT\"** without English text\n- **Horizontal Signals**: Traffic signals at intersections are mounted **horizontally** across mast arms\n- **Red & White Chevrons**: Curve warning chevrons are **red-and-white** arrows (all other Canadian provinces use yellow-and-black)\n- **Infrastructure Details**:\n    - Yellow pole stickers with black bars across the top\n    - Slender reflective rods bolted directly atop steel W-beam guardrails with red or green reflectors\n    - Orange marker stakes attached next to roadside fire hydrants for snowplow visibility\n    - T-intersection warnings omit the traditional black/yellow checkerboard"
      }
    ],
    "rawContent": "加拿大各省车牌前牌法规、路缘柱、信号灯与魁北克法语区独占特征笔记"
  },

  # 9. 新西兰 (New Zealand)
  {
    "id": "new-zealand",
    "nameZh": "新西兰",
    "nameEn": "New Zealand",
    "flag": "🇳🇿",
    "continent": "Oceania",
    "sections": [
      {
        "headingZh": "🇳🇿 北岛 vs 南岛：地形、植被与玉米田分布",
        "headingEn": "North Island vs. South Island: Topography & Vegetation",
        "contentZh": "- **北岛 (North Island)**：\n    - 地势以平缓起伏的绿色丘陵、牧场为主，气候相对温和干燥\n    - 连绵牛羊牧场与大面积玉米田；**玉米田只在北岛出现！**\n- **南岛 (South Island)**：\n    - 地形雄浑险峻，南阿尔卑斯山脉雪峰连绵，冰川峡谷纵横\n    - 西海岸为潮湿温带雨林与温带针叶林，东部坎特伯雷平原开阔干燥，南岛绝无玉米田种植",
        "contentEn": "- **North Island**:\n    - Gentle undulating green pastures, rounded hills, and milder temperate climate\n    - Extensive corn / maize fields; **corn crops strictly only appear in the North Island!**\n- **South Island**:\n    - Grand, rugged alpine topography dominated by the Southern Alps snow peaks and glacial valleys\n    - Wet temperate rainforests along the West Coast, broad gravel plains in Canterbury; complete absence of maize farming"
      },
      {
        "headingZh": "⚡ 电线杆质地、数字贴纸、围栏与高速编号",
        "headingEn": "Poles, Pole Stickers, Fences & Highways",
        "contentZh": "- **电线杆材质**：北岛以现代混凝土镂空梯子型杆为主；南岛仍保留大量圆形木质电线杆\n- **电杆 6 位数贴纸编码**：\n    - **北岛**：电杆贴纸首位数字通常为 **3 或 4**\n    - **南岛**：电杆贴纸首位数字通常为 **8**\n- **农场围栏跨度**：北岛牧场木桩围栏桩间距较密；南岛围栏木桩间距极大，且多使用轻型金属钢丝网围栏\n- **国道与高速编号**：\n    - **1 号国道 (SH1)**：纵贯南北两岛连接全境\n    - **2 至 5 号干线**：全部位于北岛\n    - **6 至 9 号干线**：全部位于南岛",
        "contentEn": "- **Pole Types**: North Island features modern perforated ladder concrete poles; South Island retains abundant rustic round wooden poles\n- **Six-Digit Pole Label Codes**:\n    - **North Island**: First digit on pole marker sticker is **3 or 4**\n    - **South Island**: First digit on pole marker sticker is **8**\n- **Farm Fencing Spacing**: North Island fence posts have tight spacing; South Island fence posts have noticeably wider spans with high-tensile wire\n- **State Highway Numbering**:\n    - **State Highway 1 (SH1)**: Runs the entire length of both North and South Islands\n    - **State Highways 2 through 5**: Exclusively located on the North Island\n    - **State Highways 6 through 9**: Exclusively located on the South Island"
      },
      {
        "headingZh": "☎️ 电话区号、恒天然 (Fonterra) 牌号与垃圾桶特征",
        "headingEn": "Phone Area Codes, Fonterra Signs & Wheelie Bins",
        "contentZh": "- **固定电话区号**：\n    - **04 至 09**：全部位于北岛 (惠灵顿 04，奥克兰 09，北地 09，丰盛湾 07，霍克斯湾 06)\n    - **03**：全南岛统一固定电话区号 (基督城、达尼丁、皇后镇全部为 03)\n    - **02**：开头全部为新西兰移动手机号码\n- **恒天然奶牛场门牌编号 (Fonterra Signs)**：\n    - 奶牛场门口蓝白标牌首位编号为 **1, 2, 7** 位于北岛\n    - 首位编号为 **3** 多位于南岛\n- **绿色市政垃圾桶盖**：带鲜艳绿色盖子的街头轮式垃圾桶 (Wheelie Bin) 标志着南岛最大城市基督城 (Christchurch)",
        "contentEn": "- **Telephone Area Codes**:\n    - **04 to 09**: North Island only (Wellington 04, Auckland/Northland 09, Waikato/Bay of Plenty 07, Hawke's Bay 06)\n    - **03**: Entire South Island uniform landline area code (Christchurch, Dunedin, Queenstown)\n    - **02**: Mobile phone prefix across New Zealand\n- **Fonterra Dairy Farm Signs**:\n    - Farm gate collection signs starting with digits **1, 2, or 7** are on the North Island\n    - Signs starting with digit **3** are located on the South Island\n- **Green Wheelie Bin Lids**: Bright green plastic lids on residential curbside trash bins indicate Christchurch"
      }
    ],
    "rawContent": "新西兰南北岛植被地形、玉米田、电杆贴纸、围栏跨度、公路编号、区号与恒天然牌号完整笔记"
  },

  # 10. 越南 (Vietnam)
  {
    "id": "vietnam",
    "nameZh": "越南",
    "nameEn": "Vietnam",
    "flag": "🇻🇳",
    "continent": "Asia",
    "sections": [
      {
        "headingZh": "🇻🇳 北越 vs 南越：电线杆孔洞、建筑与屋顶样式",
        "headingEn": "North vs. South Vietnam: Utility Poles & Roof Structures",
        "contentZh": "- **北越 (河内及红河三角洲)**：\n    - 房屋屋顶常有尖刺或避雷针状塔尖装饰；传统法式排屋与红瓦平房居多\n    - 水泥电线杆上带有密布的较多较大孔洞，斜支撑架呈倒梯形结构\n- **南越 (胡志明市及湄公河三角洲)**：\n    - 水泥电线杆孔洞较小且细碎，斜支撑结构多呈正三角形\n    - 民间多轻型彩色铁皮屋顶与敞开式骑楼建筑",
        "contentEn": "- **Northern Vietnam (Hanoi & Red River Delta)**:\n    - Roofs feature decorative spires, finials, and lightning rods; traditional French colonial shophouses and red tile clay roofs\n    - Concrete utility poles have numerous large square perforations with inverted trapezoid diagonal braces\n- **Southern Vietnam (Ho Chi Minh City & Mekong Delta)**:\n    - Utility pole holes are smaller, finer, and more compact; diagonal braces form upright triangles\n    - Predominance of corrugated tin roofs and open-front commercial arcades"
      }
    ],
    "rawContent": "越南南北越电线杆孔洞形状、支撑梯形与屋顶铁皮建筑特征笔记"
  },

  # 11. 突尼斯 (Tunisia)
  {
    "id": "tunisia",
    "nameZh": "突尼斯",
    "nameEn": "Tunisia",
    "flag": "🇹🇳",
    "continent": "Africa",
    "sections": [
      {
        "headingZh": "🇹🇳 突尼斯跟随车车型与区域分布",
        "headingEn": "Tunisia Follow-Car Metas: Toyota, Mazda & White Car",
        "contentZh": "- **东北部沿海 (含纳布勒、苏塞一带)**：绝大多数由黑色/深色丰田皮卡 (Toyota Hilux) 作为护航跟随车\n- **中北部内陆走廊**：多见马自达皮卡 (Mazda BT-50) 作为跟随护航车\n- **首都突尼斯市 (Tunis) 及其周边**：常见白色普通民用小轿车作为跟随车",
        "contentEn": "- **Northeastern Coast (Nabeul, Sousse)**: Follow car behind the Street View vehicle is a dark/black Toyota Hilux pickup\n- **Central-Northern Interior**: Follow car is frequently a Mazda BT-50 pickup\n- **Capital Tunis & Environs**: Follow car is often a white standard passenger car"
      }
    ],
    "rawContent": "突尼斯丰田、马自达与白色跟随车区域分布笔记"
  },

  # 12. 印度 (India)
  {
    "id": "india",
    "nameZh": "印度",
    "nameEn": "India",
    "flag": "🇮🇳",
    "continent": "Asia",
    "sections": [
      {
        "headingZh": "🌾 印度各邦植被与经济作物地理分布",
        "headingEn": "Agricultural Crops, Forest Vegetation & Palms Across India",
        "contentZh": "- **主要针叶树分布**：\n    - **圆形树冠长叶松 (Chir Pine)**：喜马拉雅西北角 (喜马偕尔邦、查谟克什米尔)\n    - **不规则树冠卡西松 (Khasi Pine)**：东北角梅加拉亚邦与卡西丘陵\n- **特色植被与竹林**：\n    - **高大密集倾斜丛生竹**：高大茂密且向路面倾斜生长的巨竹丛 → 东北部西孟加拉邦 (West Bengal) 与阿萨姆邦\n    - **仙人柱篱笆墙**：西部拉贾斯坦邦与古吉拉特邦荒漠农田边缘\n    - **粗壮野生银枣椰**：中部德干高原干旱平原\n    - **高耸纤细椰子树/槟榔树**：东部与南部热带沿海各邦 (喀拉拉、泰米尔纳德、奥里萨)\n- **农作物地理分布**：\n    - **茶叶种植园**：东北部阿萨姆/大吉岭，或西南高止山脉高原 (喀拉拉/泰米尔纳德)\n    - **甘蔗田**：北部恒河平原谷地或西南部沿海\n    - **棉花田**：西部马哈拉施特拉邦与古吉拉特邦深黑土带\n    - **金黄油菜花田**：西北部平原冬季景观\n    - **开阔平坦水稻田**：北部恒河平原平原带与东部三角洲",
        "contentEn": "- **Pine Forest Distribution**:\n    - **Chir Pine (rounded crowns)**: Northwest Himalayan foothills (Himachal Pradesh, Jammu & Kashmir)\n    - **Khasi Pine (irregular open crowns)**: Northeast Meghalaya and Khasi Hills\n- **Signature Flora**:\n    - **Dense Arching Clumping Bamboo**: Towering dense bamboo groves leaning steeply over rural roads → West Bengal and Assam in the northeast\n    - **Cactus Hedgerows**: Western arid scrub along Rajasthan and Gujarat field boundaries\n    - **Stout Wild Date Palms**: Central Deccan plateau\n    - **Towering Slender Coconut & Areca Palms**: Eastern and southern tropical coastal belts (Kerala, Tamil Nadu, Odisha)\n- **Cash Crop Geography**:\n    - **Tea Plantations**: Northeast (Assam, Darjeeling) or southwest Western Ghats (Kerala, Tamil Nadu)\n    - **Sugarcane**: Northern Gangetic alluvial plains or southwest coastal lowlands\n    - **Cotton**: Western black soil volcanic belt (Maharashtra, Gujarat)\n    - **Yellow Mustard Fields**: Northwest winter plains\n    - **Flat Paddy Fields**: Vast Gangetic basin and eastern river deltas"
      },
      {
        "headingZh": "🪨 土壤颜色分界与各邦特色电线杆结构",
        "headingEn": "Soil Color Zones & State-Specific Utility Poles",
        "contentZh": "- **土壤颜色分布**：\n    - **深黑肥沃棉土 (Black Cotton Soil)**：中西部德干高原火山岩风化带 (马哈拉施特拉等邦)\n    - **鲜艳砖红壤 (Laterite Red Soil)**：西南马拉巴尔海岸 (喀拉拉) 或中东部高地\n    - **干旱黄沙戈壁**：西北部塔尔沙漠走廊 (拉贾斯坦)\n- **各邦标志性电线杆**：\n    - **高密度细密圆孔杆 (带白黑白漆)**：东南部的泰米尔纳德邦 (Tamil Nadu)\n    - **两段式中空水泥杆 (智利型)**：东南部的安得拉邦与特伦甘纳邦 (Andhra Pradesh & Telangana，与泰卢固语对勾字符区完全重合)\n    - **混凝土中空波兰型方杆**：西部的古吉拉特邦 (Gujarat)\n    - **金属管中空波兰型杆或大黄圆贴纸**：西南角的喀拉拉邦 (Kerala)\n    - **并排两根圆形细长水泥杆**：喜马拉雅山区北部走廊",
        "contentEn": "- **Soil Color Belts**:\n    - **Deep Black Cotton Soil**: West-central Deccan volcanic traps (Maharashtra, Madhya Pradesh)\n    - **Bright Red Laterite Soil**: Southwest Malabar coast (Kerala) and central-eastern highlands\n    - **Arid Yellow Sand**: Thar Desert corridor in northwestern Rajasthan\n    - **Signature Utility Poles**:\n    - **High-Density Perforated Poles (White-Black-White Painted Bands)**: Tamil Nadu in the southeast\n    - **Two-Stage Hollow Concrete Ladder Poles (Chile-style)**: Andhra Pradesh and Telangana (perfectly matches Telugu script with circular checkmarks)\n    - **Heavy Concrete Hollow Poles (Poland-style)**: Gujarat in the west\n    - **Steel Tube Hollow Poles or Large Yellow Circular Stickers**: Kerala in the southwest\n    - **Twin Bundled Concrete Poles**: Himalayan northern mountain roads"
      },
      {
        "headingZh": "🛕 传统民居屋瓦形态与宗教建筑地貌",
        "headingEn": "Roof Tile Profiles, Architecture & Regional Metas",
        "contentZh": "- **屋顶瓦片形态区域特征**：\n    - **半圆形筒瓦 (U-Tile)**：中部偏东地区民居\n    - **细密平瓦，中间有突起脊梁 (W-Tile)**：南部热带各邦民居\n    - **两边长脊、中间小凸起 (Wide W-Tile)**：东部沿海平原\n    - **波纹金属铁皮大坡顶**：孟加拉国交界及东北部多雨地区\n    - **现代水泥坡顶洋房**：西南角喀拉拉邦侨民聚集区\n- **人文与街景车元数据**：\n    - **锡克教金顶寺庙与四格窗形电表**：西北角旁遮普邦 (Punjab)\n    - **彩色藏传佛教经幡与木棍编织篱笆**：东北喜马拉雅各邦 (锡金、阿萨姆丘陵)\n    - **黑顶明黄色车身嘟嘟车 (Tuk-tuks)**：东南部城市区域\n    - **方形金属行李车顶架**：西部或西北部沙漠街景车",
        "contentEn": "- **Roof Tile Morphology**:\n    - **Curved Barrel Tiles (U-Tiles)**: East-central rural dwellings\n    - **Fine Flat Tiles with Central Ridges (W-Tiles)**: Southern tropical villages\n    - **Flanged Wide Tiles (Wide W-Tiles)**: Eastern coastal plains\n    - **Corrugated Sheet Metal Pitched Roofs**: High rainfall zones bordering Bangladesh and Northeast states\n    - **Modern Multistory Concrete Mansions**: Southwest Kerala NRI remittance belts\n- **Cultural Metas & Infrastructure**:\n    - **Sikh Gurdwaras & 4-Pane Window Meter Boxes**: Punjab in the northwest\n    - **Tibetan Buddhist Prayer Flags & Woven Stick Fences**: Northeast states (Sikkim, Assam highlands)\n    - **Black-Top Yellow Tuk-Tuks**: Southeastern urban centers\n    - **Square Metal Roof Rack Visible on Camera Car**: Western/Northwestern arid routes"
      }
    ],
    "rawContent": "印度各邦植被、长叶松、卡西松、竹林、黑土红土、电线杆白黑白漆、屋顶瓦片形态与旁遮普电表笔记"
  },

  # 13. 土耳其 (Turkey)
  {
    "id": "turkey",
    "nameZh": "土耳其",
    "nameEn": "Turkey",
    "flag": "🇹🇷",
    "continent": "Europe / Asia",
    "sections": [
      {
        "headingZh": "🇹🇷 土耳其屋顶建筑、电话区号与街景车分布",
        "headingEn": "Architecture, Phone Codes & Gen 4 Coverage",
        "contentZh": "- **屋顶材质区域递变**：\n    - **红赤陶瓦片屋顶**：西部爱琴海及地中海沿岸广大城镇\n    - **波形铁皮坡屋顶**：东北部黑海湿润多雪山区\n    - **纯平顶混凝土方砖房**：东南部安纳托利亚干旱平原\n- **固定电话区号地理递进**：\n    - **2xx**：西部欧洲区、爱琴海走廊及伊兹密尔周边 (伊斯坦布尔欧洲区 212，亚洲区 216)\n    - **3xx**：中部安卡拉与安纳托利亚高原腹地 (安卡拉 312)\n    - **4xx**：东部、东北及东南部各省\n- **街景车镜头画质**：\n    - **四代高清皮卡街景车**：绝大部分高频覆盖在土耳其东部高原与南部山区走廊",
        "contentEn": "- **Roof Materials Across Regions**:\n    - **Red Clay Terracotta Tiles**: Western Aegean and Mediterranean towns\n    - **Pitched Corrugated Metal Roofs**: Rainy and snowy northeastern Black Sea mountains\n    - **Flat Concrete Terraced Roofs**: Arid southeastern Anatolian plateaus\n- **Telephone Area Code Grid**:\n    - **2xx**: Western Turkey, Aegean Coast, and Izmir (Istanbul European side 212, Asian side 216)\n    - **3xx**: Central Anatolia and capital Ankara (Ankara 312)\n    - **4xx**: Eastern, northeastern, and southeastern provinces\n- **Camera Generation Coverage**:\n    - **Gen 4 High-Definition Pickup Car**: Heavily concentrated across Eastern Turkey and southern mountain highways"
      },
      {
        "headingZh": "🌲 植被与农业作物地理过渡：从黑海到安纳托利亚",
        "headingEn": "Vegetation & Crops: From Black Sea to Anatolian Plateau",
        "contentZh": "- **北部黑海沿海走廊**：茂密苍翠的温带阔叶林与高山针叶林，年降水量充沛，茶园连绵\n- **东北角卡尔斯高原 (Kars)**：开阔高寒绿色牧场与草原\n- **西部与南部地中海沿海**：地中海硬叶林，满布耐旱土耳其松 (Turkish Pine) 与大片古老橄榄树林\n- **西北部色雷斯平原 (Thrace)**：一望无际的金黄色向日葵花田\n- **东南部干旱平原**：大面积棉花灌溉农田与平整灌渠",
        "contentEn": "- **Northern Black Sea Coast**: Dense, lush temperate deciduous and conifer forests with heavy rain and tea plantations\n- **Northeast Kars Highlands**: High, undulating alpine steppe pastures and cattle meadows\n- **Western & Southern Mediterranean**: Dry maquis scrub, fragrant Turkish Pine woodlands, and sprawling olive groves\n- **Northwest Thrace Plains**: Boundless golden sunflower fields in summer\n- **Southeastern Desert Plains**: Expansive irrigated cotton fields"
      }
    ],
    "rawContent": "土耳其瓦片铁皮平屋顶分布、电话区号2/3/4xx、四代车东部覆盖与植被向日葵棉花笔记"
  },

  # 14. 墨西哥 (Mexico)
  {
    "id": "mexico",
    "nameZh": "墨西哥",
    "nameEn": "Mexico",
    "flag": "🇲🇽",
    "continent": "North America",
    "sections": [
      {
        "headingZh": "🌵 墨西哥城 (CDMX) 及周边五大方位生态特征",
        "headingEn": "Mexico City & Surrounding 5 Directional Ecosystems",
        "contentZh": "- **墨西哥城 (CDMX) 核心识别**：上粉红下白双拼色出租车；电话区号 **55 或 56**；邮政编码以 **5 开头** (0xxxx-5xxxx)\n- **墨西哥城周边五大方位生态绝杀**：\n    - **北部方位**：大片高耸的浅蓝色烛台仙人掌 (Blue Myrtle Cacti)；粗壮庞大的深绿萨尔米龙舌兰 (Agave salmiana)；水泥电线杆柱身呈菱形镂空网状结构\n    - **西部方位**：特基拉酒专用蓝色尖刺龙舌兰 (Agave tequilana)\n    - **东部方位**：人行道与庭院路面普遍采用六边形蜂窝状多孔地砖\n    - **南部方位**：高耸挺拔的无分枝石柱状梅斯卡拉仙人掌 (Cephalocereus mezcalaensis)",
        "contentEn": "- **Mexico City (CDMX) Core Identifiers**: Iconic pink-and-white two-tone taxis; phone area codes **55 or 56**; postal codes starting with **5** (0xxxx–5xxxx)\n- **Five Cardinal Metas Around CDMX**:\n    - **North**: Dense stands of tall bluish Myrtle Cacti; massive thick Agave salmiana; concrete utility poles with diamond-mesh perforations\n    - **West**: Blue spiky Agave tequilana (tequila agave fields)\n    - **East**: Honeycomb hexagonal paving bricks widely laid on walkways\n    - **South**: Tall, slender, unbranched Cephalocereus mezcalaensis column cacti"
      },
      {
        "headingZh": "🌊 墨西哥湾沿海、尤卡坦半岛与输油管立柱",
        "headingEn": "Gulf of Mexico, Yucatán Limestone & Pipeline Posts",
        "contentZh": "- **尤卡坦半岛 (Yucatán / 坎昆周边)**：\n    - 极其平坦的石灰岩干旱灌木林，道路两旁是用浅色石灰石垒砌的矮石墙 (Albarradas)\n    - 路肩多亮白色的碎砂石，日光反光耀眼；电线杆绝缘子多为小型圆轴卷轴式\n- **环墨西哥湾石油带 (塔巴斯科、韦拉克鲁斯、塔毛利帕斯)**：\n    - 公路旁频繁出现垂直书写 **“NO EXCAVAR”** (禁止挖掘) 和 **“DUCTOS”** (输油/气管道) 的鲜黄色铁质立柱防护标",
        "contentEn": "- **Yucatán Peninsula (Quintana Roo / Campeche)**:\n    - Dead-flat low limestone scrub jungle flanked by rustic pale stone courtyard walls (Albarradas)\n    - Brilliant, blinding white limestone gravel road shoulders; compact spool-type pole insulators\n- **Gulf of Mexico Pipeline Belt (Tabasco, Veracruz, Tamaulipas)**:\n    - Yellow steel roadside posts marked with vertical text reading **\"NO EXCAVAR\"** (Do Not Dig) and **\"DUCTOS\"** (Petroleum Pipelines)"
      },
      {
        "headingZh": "🏜️ 西部与北部荒漠、下加利福尼亚仙人柱与道路标线",
        "headingEn": "Northern & Western Deserts, Baja Metas & Road Markings",
        "contentZh": "- **西海岸走廊 (锡那罗亚 Sinaloa、杜兰戈 Durango、格雷罗 Guerrero)**：道路双黄中线中间涂有黑色沥青减磨密封涂料\n- **纳亚里特州 (Nayarit)**：道路两侧立柱类似法国带有倾斜红白反光顶的 Bollard (但底座漆黑；此柱亦见于瓦哈卡与恰帕斯边界的 190 号国道)\n- **东北边境 (靠近德克萨斯)**：粗糙颗粒状沥青路面，路肩长满金黄色簇状野草 (Gold Tufts)\n- **下加利福尼亚半岛 (Baja California)**：\n    - 木质电线杆上绝缘子悬挂垂吊在横木下方\n    - 满布高达十余米的巨型巨柱仙人柱 (Cardón)\n    - 黄花脆灌木 (Brittlebush) 与外形极其奇特如倒插胡萝卜的观峰玉树 (Boojum Tree / Cirio)\n- **西北山区 (奇瓦瓦 Chihuahua 与索诺拉 Sonora)**：干燥矮松树；路牌背面立柱多有垂直木十字加强架 (类似哥伦比亚)",
        "contentEn": "- **Western Coastal Corridor (Sinaloa, Durango, Guerrero)**: Asphalt road centerline has black tar sealer painted between the double yellow lines\n- **Nayarit**: Roadside bollards resemble French bollards with slanted red/white reflectors (but with a black base; also found on Route 190 on the Oaxaca-Chiapas border)\n- **Northeast (Near Texas Border)**: Granular aggregate asphalt with golden tufts of bunchgrass along shoulders\n- **Baja California**:\n    - Wooden poles with insulators hanging downwards from crossarms\n    - Massive soaring Cardón cactus forests\n    - Yellow Brittlebush and bizarre carrot-like Boojum Trees (Cirio)\n- **Northwest Mountains (Chihuahua & Sonora)**: Stunted mountain pines; road signs reinforced with wooden crossbars on the back (Colombia-style)"
      },
      {
        "headingZh": "🌴 南部热带与中部巴希奥红土农业带",
        "headingEn": "Southern Tropics & Bajío Red Soil Farmlands",
        "contentZh": "- **恰帕斯州 (Chiapas)**：湿润热带雨林丘陵，大片油棕榈树种植园\n- **塔巴斯科州 (Tabasco)**：连绵热带平原湿地，道路中心线多画为单条或双条白色中线\n- **瓦哈卡州 (Oaxaca)**：起伏多山干燥山村，常见独特的“三条卵石车辙铺装”路面\n- **中部巴希奥地区 (El Bajío / 瓜纳华托及周边)**：连绵起伏的富饶肥沃深红土壤现代农业平原",
        "contentEn": "- **Chiapas**: Humid tropical jungle hills with extensive oil palm plantations\n- **Tabasco**: Flat tropical wet savannahs with white road centerlines (instead of standard yellow)\n- **Oaxaca**: Dry mountain valleys featuring distinctive triple-cobblestone track paved rural lanes\n- **Bajío Region (Guanajuato / Querétaro)**: Rich rolling crimson-red agricultural farmland"
      }
    ],
    "rawContent": "墨西哥城CDMX五方位仙人掌龙舌兰、墨西哥湾管道黄柱、下加利福尼亚、瓦哈卡卵石路与巴希奥红土笔记"
  },

  # 15. 日本 (Japan)
  {
    "id": "japan",
    "nameZh": "日本",
    "nameEn": "Japan",
    "flag": "🇯🇵",
    "continent": "Asia",
    "sections": [
      {
        "headingZh": "☎️ 电话区号南北递增法则与车牌地籍",
        "headingEn": "Area Code North-South Gradient & License Plate Hubs",
        "contentZh": "- **电话区号遵循由北向南递增铁律 (数字越小越偏北，越大越偏南)**：\n    - **011-016**：北海道 (札幌 011，旭川 0166)\n    - **02x**：东北地方及北关东 (仙台 022，青森 017/02x)\n    - **03**：东京都核心 23 区 (周围卫星城市多为 **04x**，如横滨 045，千叶 043，埼玉 048)\n    - **05x**：中部地方及东海地区 (名古屋 052，静冈 054)\n    - **06**：大阪市中心 (周围关西诸府县多为 **07x**，如京都 075，神户 078，奈良 074)\n    - **08x**：中国地方与四国地方 (广岛 082，冈山 086，高松 087，松山 089)\n    - **09x**：九州地方及冲绳 (福冈 092，熊本 096，冲绳本岛及离岛 098)\n- **车牌汉字地名秒杀地籍**：\n    - **东京都核心**：“品川”、“世田谷”、“练马”、“足立”、“杉并”\n    - **富士山周边**：“富士山” (由山梨县与静冈县两县辖区共享)\n    - **关西核心**：“浪速 (なにわ)”、“大阪”、“京都”、“神户”\n    - **九州与冲绳**：“福冈”、“北九州”、“久留米”、“熊本”、“鹿儿岛”、“冲绳”",
        "contentEn": "- **Strict North-to-South Ascending Area Code Rule**:\n    - **011–016**: Hokkaido (Sapporo 011, Asahikawa 0166)\n    - **02x**: Tohoku and Northern Kanto (Sendai 022, Aomori 017/02x)\n    - **03**: Central Tokyo 23 Wards (suburban prefectures use **04x**, e.g. Yokohama 045, Chiba 043, Saitama 048)\n    - **05x**: Chubu & Tokai (Nagoya 052, Shizuoka 054)\n    - **06**: Central Osaka City (surrounding Kansai prefectures use **07x**, e.g. Kyoto 075, Kobe 078, Nara 074)\n    - **08x**: Chugoku & Shikoku (Hiroshima 082, Okayama 086, Takamatsu 087, Matsuyama 089)\n    - **09x**: Kyushu & Okinawa (Fukuoka 092, Kumamoto 096, Okinawa 098)\n- **Kanji Place Names on License Plates**:\n    - **Tokyo Metro**: \"Shinagawa\" (品川), \"Setagaya\" (世田谷), \"Nerima\" (练马), \"Adachi\" (足立)\n    - **Mount Fuji**: \"Fujisan\" (富士山, shared between Yamanashi and Shizuoka prefectures)\n    - **Kansai Region**: \"Naniwa\" (なにわ), \"Osaka\" (大阪), \"Kyoto\" (京都), \"Kobe\" (神戸)\n    - **Kyushu & Okinawa**: \"Fukuoka\" (福冈), \"Kumamoto\" (熊本), \"Okinawa\" (冲绳)"
      },
      {
        "headingZh": "⚡ 全国九大电力区电线杆标牌与变压器结构",
        "headingEn": "Nine Regional Power Company Pole Plates & Transformers",
        "contentZh": "- **双牌识别体系**：日本电杆通常悬挂上下两块标牌：上方为地区电力公司牌 (通常为竖牌)，下方为国家牌 (NTT 电信竖牌，上面公司名 NTT，中间竖排汉字地籍，下方数字)。[参考图解](https://www.plonkit.net/japan)\n- **各大电力区具体特征**：\n    - **北海道电力**：地区牌比国家牌明显更长，有三道竖列 (其中两竖密布数字)，部分为橙色牌；电杆顶端变压器下方有金属十字形横向摆放的支撑架\n    - **东北电力**：地区牌为**横牌** (国家牌仍为竖牌)，常为银色极简设计，印有接近圆形的电力 logo，下方带一个大数字；杆身常贴灰白反光片；变压器侧边有提手状把手，或下部装有圆盘托底\n    - **关东电力 (东京周边)**：地区牌为竖牌，形状尺寸与国家牌相近，内部横向汉字名与竖向数字构成 T 形，logo 与东北类似；或为深灰色竖牌；变压器下方固定大木板托底，下部伸出两根平行金属支撑杆\n    - **北陆电力 (富山/石川/福井)**：地区牌与国家牌**均为横向安装**；杆身反光警示贴片亦为罕见的横向贴装\n    - **中部电力 (名古屋/爱知/静冈)**：地区牌为圆角竖牌，清晰印有“中部电力”字样与贝壳形徽标；反光贴片带有斜向交替条纹，上下黑边印有微小字符；变压器侧边装有黑色夹具组件。**长野县特例**：国家 NTT 牌为横牌\n    - **关西电力 (大阪/京都)**：地区牌与九州类似，通常不带公司 logo，版式较杂，牌面底部印有微小数字；反光贴片为很长的连续细竖线，颜色偏旧褪色\n    - **中国电力 (广岛/冈山)**：国家牌有时尺寸很大，logo 印有英文字符；电杆身有时印有醒目的**朝上黄色箭头**；反光贴片为 4 条短竖线且黑边带小字；变压器上有时印有红色大数字，铁杆连接处为全三角\n    - **四国电力**：电杆黄黑警示反光条中间有两条短横线相连，构成**“口”字形**；地区牌 logo 为 4 个圆点构成的菱形；电杆上方有时缠绕一条黑边黄带；反光片为 6 条竖短线；变压器常贴白贴纸，下部角铁连接处为半三角形\n    - **九州电力**：地区牌印有 **7 个圆点**组成的独特徽标，横向排列 3 位数字，竖向 4 个汉字通常排在右侧；反光板中间几道条纹颜色较深且带有立体凸点纹理；电线杆下半部常包裹类似美国的黄色塑料防撞护套\n    - **冲绳电力**：通常悬挂 2 至 3 块大小相近的竖向标牌，常印有**“冲电”**字样；柱身常用数道扁平细金属箍条缠绕紧固",
        "contentEn": "- **Dual-Placard Identification System**: Japanese poles mount two plates: the upper is the regional power company plate (usually vertical), and the lower is the national NTT telecommunications plate (vertical, marked NTT on top, vertical Kanji in middle, digits below). [Plonkit Guide](https://www.plonkit.net/japan)\n- **Regional Power Company Breakdown**:\n    - **Hokkaido Electric**: Regional plate is much longer than NTT plate, featuring three vertical columns (two filled with dense digits); occasional orange plates; transformer mounted above a horizontal metal cross-brace\n    - **Tohoku Electric**: Regional plate is **horizontal** (NTT plate remains vertical), silver minimal design with circular logo and large digits; pale grey/white reflector strips; transformer with handles or resting on round bottom disc\n    - **Kanto Electric (Tokyo area)**: Vertical plate resembling NTT dimensions; horizontal Kanji and vertical digits form a T-shape; logo resembles Tohoku; or dark grey vertical plate; transformer mounted on large wood board with dual parallel steel braces\n    - **Hokuriku Electric (Toyama/Ishikawa)**: Both regional and NTT plates are **horizontal**; reflector strips are uniquely mounted horizontally\n    - **Chubu Electric (Nagoya/Aichi)**: Rounded vertical plate reading \"Chubu Electric\" with shell-shaped logo; diagonal alternating color reflector stripes with tiny text on black borders; black clamps on transformer sides. **Nagano exception**: NTT plate is mounted horizontally\n    - **Kansai Electric (Osaka/Kyoto)**: Similar to Kyushu, mostly lacks company logo, varied layouts, tiny digits at bottom; very long faded vertical reflector strips\n    - **Chugoku Electric (Hiroshima/Okayama)**: Large NTT plate with English letters; **yellow upward arrows** on poles; reflector has 4 short vertical lines; red numbers on transformers; full-triangle mounting iron bracket\n    - **Shikoku Electric**: Yellow/black pole wrap has horizontal connectors forming a **square (\"口\") shape**; regional logo is a 4-dot diamond; occasional yellow stripe with black border on upper pole; 6 vertical reflector lines; half-triangle bracket beneath transformer\n    - **Kyushu Electric**: Regional plate stamped with a unique **7-dot emblem**, 3 horizontal digits, and 4 vertical Kanji on the right; center reflector bars are darker with tactile raised bumps; yellow protective plastic wire sleeves wrapped around lower pole\n    - **Okinawa Electric**: Typically displays 2 to 3 similar-sized vertical plates reading **\"沖電\"** (Okiden); secured with thin metallic straps around the shaft"
      },
      {
        "headingZh": "🗾 区域景观、地貌与独家秒杀特征",
        "headingEn": "Regional Landscapes, Architecture & State Metas",
        "contentZh": "- **北海道 (Hokkaido)**：\n    - 道路正上方悬挂垂直朝下的**红白相间雪地箭头** (暴雪天指引路面边缘)\n    - 道路宽阔，铺装有横向减速实线条纹；沿途遍布 **Seicomart** (橙色招牌+海鸥标志的北海道专属便利店)\n- **东北与北海道**：路边常见白色行李箱/烤箱造型的除雪与供暖设施；东北地方电线杆反光贴片多为灰白色 (非普通黄黑相间)\n- **四顾无山的平原**：关东平原 (东京及周边大平原) 或爱知县名古屋周边的浓尾平原 (全无高山，地平线平坦)\n- **中国地方 (Chugoku)**：传统木造民居屋顶普遍铺设**石州红瓦** (深橙红/红褐色防冻琉璃瓦，极易一眼辨识)\n- **山口县独家绝杀 (Yamaguchi)**：全日本唯一在公路上全面安装**鲜艳亮黄色 (或黄白相间) 金属护栏**的县份，见黄护栏必在山口县\n- **京都与奈良 (Kyoto & Nara)**：古都历史文化街区内的街角邮筒漆成深沉典雅的**深棕色/古铜色** (非普通鲜红邮筒)\n- **九州地方**：电线杆基部常包裹类似美国的黄色塑料防撞护套管\n- **冲绳群岛 (Okinawa)**：\n    - 珊瑚石灰岩砌筑的石墙院落与红瓦坡顶；门头端坐成对辟邪**风狮爷陶狮像 (Shisa)**；热带棕榈树林立\n    - 马路上频繁穿行白底黑字且带有大写英文字母 (**如 Y, E, A 开头**) 的驻日美军基地私家车牌",
        "contentEn": "- **Hokkaido**:\n    - Overhead vertical **downward-pointing red-and-white snow arrows** (guide drivers along snow-covered roads)\n    - Wide roads with transverse rumble stripes; ubiquitous **Seicomart** convenience stores (orange logo with seagull, Hokkaido exclusive)\n- **Tohoku & Hokkaido**: White suitcase/oven-shaped roadside snow-melting or heating units; grey-white pole reflectors in Tohoku (instead of standard yellow/black)\n- **Completely Flat Plain Without Mountains**: Kanto Plain around Tokyo or Nobi Plain around Nagoya (vast horizon without mountains)\n- **Chugoku Region**: Traditional homes uniformly topped with **Sekishu Red Roof Tiles** (glazed orange-red terracotta tiles)\n- **Yamaguchi Prefecture Signature Meta**: The ONLY prefecture in Japan with **bright yellow (or yellow-and-white) roadside guardrails**\n- **Kyoto & Nara**: Antique historic districts feature elegant **dark bronze/brown mailboxes** instead of bright red\n- **Kyushu**: Yellow plastic protective ground cable sleeves wrapped on poles\n- **Okinawa**:\n    - Limestone coral courtyard walls with red clay tile roofs; paired guardian lion statues (**Shisa**) on gateposts; palm trees\n    - Private vehicles bearing white plates with single English letters (**Y, E, or A**) denoting US Military personnel"
      }
    ],
    "rawContent": "日本九大电力公司电线杆牌变压器、电话区号递增、Seicomart、山口黄护栏、石州红瓦、冲绳美军车牌与风狮爷完整笔记"
  },

  # 16. 哈萨克斯坦 (Kazakhstan)
  {
    "id": "kazakhstan",
    "nameZh": "哈萨克斯坦",
    "nameEn": "Kazakhstan",
    "flag": "🇰🇿",
    "continent": "Asia",
    "sections": [
      {
        "headingZh": "🇰🇿 皮卡车斗电线与东西部季节街景",
        "headingEn": "Kazakhstan Pickup Bed Wire & Seasonal Metas",
        "contentZh": "- **街景皮卡左前电线**：在街景后方观察白色皮卡车斗，若左前方有一条黑色细电线连接，绝大多数位于**哈萨克斯坦西部** (阿特劳、阿克套走廊)；若车斗左前方无电线，则位于**哈萨克斯坦东部与中部**\n- **季节与天气**：西部咸海与里海低洼地带多干燥晴朗的烈日夏季街景；东部与北部平原多见阴天或春季田野景色",
        "contentEn": "- **Pickup Bed Wire Meta**: Look back at the camera pickup bed; a black wire connecting to the left front side indicates **Western Kazakhstan** (Atyrau, Aktau); absence of wire indicates **Eastern or Central Kazakhstan**\n- **Seasonal Conditions**: The arid western Caspian depression features sunny, dry summer coverage; eastern and northern plains feature overcast or spring scenes"
      }
    ],
    "rawContent": "哈萨克斯坦皮卡车斗左前方黑电线西部vs东部笔记"
  },

  # 17. 吉尔吉斯斯坦 (Kyrgyzstan)
  {
    "id": "kyrgyzstan",
    "nameZh": "吉尔吉斯斯坦",
    "nameEn": "Kyrgyzstan",
    "flag": "🇰🇬",
    "continent": "Asia",
    "sections": [
      {
        "headingZh": "🇰🇬 后视镜备胎视野与天山地貌",
        "headingEn": "Kyrgyzstan Mirror Tire Proportions & Topography",
        "contentZh": "- **后视镜后轮备胎占比**：观察街景皮卡后视镜中倒映的后轮备胎轮廓：\n    - **北部 (比什凯克、伊塞克湖周边)**：后轮在后视镜中占据面积很大 (轮胎暴露比例多)\n    - **南部 (奥什、贾拉拉巴德走廊)**：轮胎在后视镜中占比极小或几乎看不见\n- **天山地貌**：雄浑壮丽的天山雪峰常伴随公路，高山峡谷牧场与核桃林连绵",
        "contentEn": "- **Rearview Mirror Tire Meta**: Examine the spare tire visible in the camera truck's side mirror:\n    - **Northern Kyrgyzstan (Bishkek, Issyk-Kul)**: The tire takes up a large portion of the mirror view\n    - **Southern Kyrgyzstan (Osh, Jalal-Abad)**: The tire is small, subtle, or barely visible in the mirror\n- **Landscape**: Majestic Tian Shan snow-capped massifs along highways, lush high alpine valleys, and walnut groves"
      }
    ],
    "rawContent": "吉尔吉斯斯坦后视镜轮胎占比多北部vs少南部笔记"
  },

  # 18. 蒙古 (Mongolia)
  {
    "id": "mongolia",
    "nameZh": "蒙古",
    "nameEn": "Mongolia",
    "flag": "🇲🇳",
    "continent": "Asia",
    "sections": [
      {
        "headingZh": "🇲🇳 备胎固定带与车顶行李架横竖杠 Meta",
        "headingEn": "Roof Rack Crossbars & Spare Tire Straps",
        "contentZh": "- **通用法则**：首都乌兰巴托集齐了大部分车辆 Meta，若完全无法确定特征通常盲猜乌兰巴托；大部分街景车拍摄行驶方向为背离乌兰巴托\n- **右后方备用胎固定带 Meta**：\n    - **带网格防护罩**：位于蒙古西半部 (科布多、巴彦乌列盖)\n    - **扎绿色绑带**：位于蒙古最东部 (东方省、苏赫巴托尔省)\n    - **扎橙色绑带**：位于蒙古中部 (乌兰巴托正北或正南方向主干道)\n    - **无网格亦无绑带**：位于蒙古中部 (乌兰巴托正西或正东主干道)\n    - **车尾没有备用胎**：位于首都乌兰巴托市区或极近郊\n- **车顶架横杠特征**：\n    - **中间有黑色橡胶垫**：蒙古西半部\n    - **中间无黑色橡胶垫**：蒙古东半部\n- **车顶架竖杠特征**：\n    - **中间竖杠被模糊处理**：蒙古西半部\n    - **竖杠之间有一条横带相连**：乌兰巴托正西方\n    - **竖杠之间无横带连接**：乌兰巴托正北/正南，或蒙古东北角",
        "contentEn": "- **General Principles**: Ulaanbaatar contains almost all car metas; if in doubt, UB is a safe guess; Street View cars typically drive away from UB\n- **Spare Tire Strap Metas (Rear-Right)**:\n    - **Protective Wire Mesh**: Western Mongolia (Khovd, Bayan-Ölgii)\n    - **Green Strap**: Far Eastern Mongolia (Dornod, Sükhbaatar)\n    - **Orange Strap**: Central Mongolia (directly North or South of Ulaanbaatar)\n    - **No Mesh & No Strap**: Central Mongolia (directly West or East of Ulaanbaatar)\n    - **No Spare Tire**: Inside Ulaanbaatar city or immediate suburbs\n- **Roof Rack Horizontal Bars**:\n    - **Black Rubber Pad in Center**: Western half of Mongolia\n    - **No Rubber Pad**: Eastern half of Mongolia\n- **Roof Rack Vertical Bars**:\n    - **Middle Vertical Bar Blurred**: Western half of Mongolia\n    - **Horizontal Band Connecting Vertical Bars**: West of Ulaanbaatar\n    - **No Connecting Band**: North or South of UB, or the far northeast corner"
      },
      {
        "headingZh": "⛺ 蒙古包分布走廊与自然地理地貌",
        "headingEn": "Yurt / Ger Distribution & Mongolian Landscapes",
        "contentZh": "- **蒙古包 (Ger) 分布特征**：\n    - **完全看不见蒙古包的公路**：乌兰巴托往东南延伸通往中蒙扎门乌德口岸的主路，或额尔登特 (Erdenet) 矿业近郊\n    - **灰色破旧蒙古包**：多见于中北部传统牧区\n- **三大自然地理带**：\n    - **荒漠与戈壁沙丘**：蒙古中南部与南部各省 (南戈壁)\n    - **连绵起伏的大草甸**：蒙古中纬度核心带 (冬春带积雪的草甸多在乌兰巴托周边高山谷地)\n    - **泰加针叶林**：蒙古高纬度北部靠近俄罗斯边境山区 (库苏古尔湖沿岸)",
        "contentEn": "- **Yurt (Ger) Metas**:\n    - **Zero Yurts Visible**: Southeast corridor from UB towards the Chinese border (Zamyn-Üüd), or around Erdenet\n    - **Grey Weathered Yurts**: Central-northern pastoral steppe\n- **Ecosystems & Topography**:\n    - **Desert & Gobi Gravel**: South-central and southern provinces (Omnogovi)\n    - **Rolling Alpine Steppe Meadows**: Central latitudes (snow-dusted grasslands lie around UB valleys)\n    - **Coniferous Boreal Taiga**: Far northern mountain border with Russia (Lake Khövsgöl)"
      }
    ],
    "rawContent": "蒙古车顶架横杠竖杠、备胎绿带橙带网格、蒙古包分布与三大地貌完整笔记"
  },

  # 19. 美国 (United States)
  {
    "id": "united-states",
    "nameZh": "美国",
    "nameEn": "United States",
    "flag": "🇺🇸",
    "continent": "North America",
    "sections": [
      {
        "headingZh": "☎️ 大城市经典电话区号与七大“单区号州”",
        "headingEn": "Megacity Area Codes & Seven Single-Area-Code States",
        "contentZh": "- **大都市核心小数字区号 (送分题)**：\n    - **212**：纽约市曼哈顿 (NYC)\n    - **312**：芝加哥 (Chicago)\n    - **213**：洛杉矶 (Los Angeles)\n    - **313**：底特律 (Detroit)\n    - **202**：华盛顿特区 (Washington D.C.)\n    - **415**：旧金山；**617**：波士顿；**215**：费城；**305**：迈阿密；**713**：休斯敦\n- **全州仅有单一区号的七大州 (Single-Area-Code States - 一击必杀！)**：\n    - **207**：缅因州 (Maine)\n    - **302**：特拉华州 (Delaware)\n    - **307**：怀俄明州 (Wyoming)\n    - **406**：蒙大拿州 (Montana)\n    - **605**：南达科他州 (South Dakota)\n    - **701**：北达科他州 (North Dakota)\n    - **802**：佛蒙特州 (Vermont)",
        "contentEn": "- **Iconic Historic Megacity Low Area Codes**:\n    - **212**: New York City (Manhattan)\n    - **312**: Chicago\n    - **213**: Los Angeles\n    - **313**: Detroit\n    - **202**: Washington D.C.\n    - **415**: San Francisco; **617**: Boston; **215**: Philadelphia; **305**: Miami; **713**: Houston\n- **The Seven Single-Area-Code States (Instant 5k Kills!)**:\n    - **207**: Maine\n    - **302**: Delaware\n    - **307**: Wyoming\n    - **406**: Montana\n    - **605**: South Dakota\n    - **701**: North Dakota\n    - **802**: Vermont"
      },
      {
        "headingZh": "🚗 全美50州模糊车牌色系全图谱",
        "headingEn": "All 50 US States Blurred License Plate Spectrum",
        "contentZh": "- **黄色系车牌**：\n    - **Alaska**：全黄底色；或蓝黄横条纹\n    - **New York**：醒目金黄色/橙黄色块 (Excelsior 或 Empire Gold)\n    - **New Mexico**：纯亮黄色红字 (Centennial Yellow) 或亮绿底红字 (Turquoise)\n    - **New Jersey**：上黄下白渐变过渡色\n- **绿色系车牌**：\n    - **Vermont**：标志性纯深绿色底白字\n    - **New Hampshire**：左上浅绿，右下深绿渐变\n    - **Tennessee**：上白下墨绿双拼色 (旧版) 或深蓝底金徽标 (新版)\n- **蓝色系车牌**：\n    - **Montana**：纯深蓝底色白字\n    - **Michigan**：上白下天蓝渐变条纹\n    - **Kentucky**：上白下天蓝，水平分界线极其清晰\n    - **Connecticut**：上青天蓝下纯白，渐变鲜明\n    - **Delaware**：纯深蓝底黄色小数字 (复古数字牌)\n- **红色系车牌**：\n    - **Alaska**：蓝白横条中心带红点 (北极熊版)\n    - **Massachusetts**：大面积鲜艳红字白底，辨识度极高\n    - **Utah**：上方蓝天下方红色拱门岩石 (Life Elevated)\n    - **Wisconsin**：白底为主，左上角有亮红字\n    - **Illinois**：上白下蓝横条带鲜艳红字\n    - **Idaho**：清晰的上红中白下深蓝横条纹\n    - **North Dakota**：上方蓝天下方火红落日横条\n- **辐射与图形徽标系车牌**：\n    - **Florida**：白色背景中间一抹鲜艳绿色配橙色圆点 (橙子)\n    - **Georgia**：白色底中心带有粉橙色圆形 (佐治亚蜜桃) 或蓝白橙横条\n    - **Hawaii**：白色底色正中间横跨一道七彩彩虹 (Rainbow Plate)\n    - **Oregon**：白色底色正中央挺立一棵深绿色花旗松树\n- **横条纹系车牌**：\n    - **Pennsylvania**：上深蓝条纹、下黄色条纹、中间白底蓝字\n    - **California**：白底带模糊红色手写体 (California) 或复古黑底黄字\n    - **Arizona**：白蓝渐变背景，左下角带暗紫色仙人掌山脉剪影\n    - **Arkansas**：极浅淡的蓝白横条纹\n    - **Colorado**：绿白或红白锯齿雪山剪影条纹\n    - **Indiana**：蓝红横条 (极浅)，左右中央发白\n    - **Iowa**：上蓝、中白、下草绿三色横条纹\n    - **Kansas**：浅蓝底色，右下角偏白发亮",
        "contentEn": "- **Yellow Tone Plates**:\n    - **Alaska**: Solid bright yellow; or blue-and-yellow horizontal bands\n    - **New York**: Golden-yellow / amber blocks (Excelsior / Empire Gold)\n    - **New Mexico**: Bright canary yellow with red text or bright turquoise green\n    - **New Jersey**: Pale yellow fading down into white\n- **Green Tone Plates**:\n    - **Vermont**: Trademark solid deep forest green with white text\n    - **New Hampshire**: Mint green top-left fading to darker green bottom-right\n    - **Tennessee**: White upper half, deep green lower half\n- **Blue Tone Plates**:\n    - **Montana**: Solid dark blue field with white lettering\n    - **Michigan**: White top with vivid blue bottom gradient\n    - **Kentucky**: Crisp white top half with azure blue bottom half\n    - **Connecticut**: Pale cyan blue top blending into clean white bottom\n    - **Delaware**: Minimalist deep navy blue with vintage yellow digits\n- **Red Tone Plates**:\n    - **Alaska**: Blue-and-white field with centered red grizzly bear\n    - **Massachusetts**: Crisp white plate dominated by bright red registration digits\n    - **Utah**: Blue sky over fiery red Delicate Arch silhouette\n    - **Wisconsin**: Pure white with vivid red state script in upper-left corner\n    - **Illinois**: White top, blue base with red center lettering\n    - **Idaho**: Sharp tricolor bands (red top, white center, blue bottom)\n    - **North Dakota**: Blue sky over glowing red sunset band\n- **Graphic & Emblem Plates**:\n    - **Florida**: White plate with twin oranges and green leaves in center\n    - **Georgia**: White plate with peach center emblem or blue/orange bands\n    - **Hawaii**: Pure white plate crossed by a bold pastel rainbow\n    - **Oregon**: Pure white field featuring a dark green Douglas Fir tree in center\n- **Striped & Multi-Band Plates**:\n    - **Pennsylvania**: Dark blue top band, gold bottom band, white center\n    - **California**: White with faint red cursive \"California\" script or retro black/yellow\n    - **Arizona**: Soft blue-to-white gradient with purple desert cacti silhouette on lower-left\n    - **Arkansas**: Subtle, washed-out blue/white bands\n    - **Colorado**: Jagged green-and-white or red-and-white mountain peaks\n    - **Indiana**: Faint blue/red bands with bright white center\n    - **Iowa**: Blue top, white center, prairie grass-green bottom\n    - **Kansas**: Soft sky blue with bright white wash in lower-right"
      },
      {
        "headingZh": "🛣️ 各州独特道路标线、路缘柱与公路盾牌",
        "headingEn": "State-Specific Road Markings, Bollards & Highway Shields",
        "contentZh": "- **公制里程路牌**：全美仅亚利桑那州南部靠近墨西哥边境的 I-19 号州际公路上全部使用 **“km” (公里)** 单位标注\n- **商业路线标志 (Business Route)**：\n    - **加利福尼亚州**：Business 路线牌上方印有 “US” 标识\n    - **马里兰州与佐治亚州**：采用独特的绿色底色商业路线盾牌\n- **密苏里州字母州道**：密苏里州副州级公路完全采用**字母编号** (如 Route A, Route J, Route KK) 而非数字\n- **西弗吉尼亚州分数牌**：二级公路标号常带**分数形式** (如 211/23)，且路号经常套在独特的房屋轮廓图案中\n- **俄勒冈州限速牌**：标牌往往直接大写印刷 **“SPEED 55”** 而非全美通用的 “SPEED LIMIT 55”",
        "contentEn": "- **Metric Signage**: Exclusively Interstate 19 in southern Arizona near the Mexican border uses **km / km/h** instead of miles\n- **Business Route Markers**:\n    - **California**: Business shields explicitly incorporate \"US\"\n    - **Maryland & Georgia**: Feature unique green-background Business Route shields\n- **Missouri Lettered Routes**: Missouri secondary state highways are designated with **letters** (e.g. Route A, Route KK) rather than numbers\n- **West Virginia Fractional Routes**: Secondary routes use **fractional numbers** (e.g. 211/23) enclosed inside a house-shaped silhouette\n- **Oregon Speed Signs**: Speed limit signs frequently read simply **\"SPEED 55\"** omitting the word \"LIMIT\""
      },
      {
        "headingZh": "🎯 二十余州独家秒杀地理特征",
        "headingEn": "Over 20 Signature State Clues: Hawaii to Alaska",
        "contentZh": "- **夏威夷州 (Hawaii)**：电线杆上钉有长方形黄色铝片；高速指路牌上地名装在白色**“吉他拨片”**形状框内\n- **加利福尼亚州 (California)**：木质电线杆上常钉有 **3 片橙色横向反光铝条**；沥青路面双黄中线之间常浇注一道黑沥青防裂封缝胶\n- **华盛顿州 (WA) & 俄勒冈州 (OR)**：双向车道两条黄色中线之间**间距极其宽大**；华盛顿州路桩带有两块垂直分离的白色矩形反光板\n- **内华达州 (Nevada)**：路缘桩为**黑方块内嵌白方块**，上下由 4 颗金属大铆钉固定\n- **蒙大拿州 (MT) & 南达科他州 (SD)**：顶端截面呈菱形棱角的白色金属路桩\n- **北达科他州 (North Dakota)**：笔直公路上随处可见天然小池塘与湿地坑洼 (Prairie Potholes)\n- **爱达荷州 (ID) & 科罗拉多州 (CO)**：道路两侧安装罕见墨绿色反光立柱\n- **德克萨斯州 (Texas)**：路面铺装有明显黑色焦油黑斑颗粒；双黄实线间距极宽；农场出入口密集\n- **威斯康星州 (Wisconsin)**：电线杆警示贴纸为橙底黑字 **“WARNING”** 外加菱形感叹号图标\n- **明尼苏达州 (Minnesota)**：波形护栏末端常固定黄色方牌配黑色向下三角 chevron 警示板\n- **印第安纳波利斯 (Indianapolis)**：市内消防栓统一涂装清爽的**冰绿色/薄荷绿 (Ice Green)**\n- **密歇根州 (Michigan)**：道路命名遍布 **“X Mile Road”** (如 8 Mile, 12 Mile)；Stop 标志牌常用双根厚木桩平行支撑\n- **佐治亚州 (GA) & 佛罗里达州 (FL)**：沥青路面中心线两侧对称布设凸起反光猫眼道钉\n- **南卡罗来纳州 (South Carolina)**：Stop 停让标志上方加装黑色反光地名指向板\n- **弗吉尼亚州 (VA) & 马里兰州 (MD)**：路面白色实线和黄色中线画得极其粗重饱满\n- **肯塔基州 (Kentucky)**：路肩边缘开凿有形如岩石裂纹般的锯齿状减速震动带\n- **田纳西州孟菲斯 (Memphis)**：道路沥青颜色常泛出独特的深棕色/红褐色\n- **南达科他州苏福尔斯 (Sioux Falls)**：路面骨料采用当地粉红石英岩，整条公路呈现**粉红色**\n- **爱奥瓦州 (Iowa)**：全州高速与乡村干道极其广泛采用白色混凝土路面铺设\n- **阿肯色州 (Arkansas)**：路边民宅与机构门前高频悬挂红色阿肯色州旗\n- **俄克拉荷马州 (Oklahoma)**：土壤呈现极其鲜艳刺目的红土与红泥岩\n- **堪萨斯州 (Kansas)**：Stop 标志金属立杆上套有白色塑料反光套管\n- **阿拉斯加州 (Alaska)**：公路两侧铺满粉红色的柳兰野花与极地苔原矮灌木",
        "contentEn": "- **Hawaii**: Large yellow aluminum placards mounted on utility poles; highway destinations displayed inside white \"guitar-pick\" shields\n- **California**: Wooden poles stamped with **three horizontal orange aluminum reflective strips**; black tar sealant poured between double yellow centerlines\n- **Washington & Oregon**: Extra-wide separation between double yellow centerlines; WA bollards feature two vertically separated white reflector rectangles\n- **Nevada**: Roadside bollards feature a black square inset with a white square secured by four corner rivets\n- **Montana & South Dakota**: Metal road marker stakes with diamond-shaped cross-sections\n- **North Dakota**: Abundant roadside prairie pothole sloughs and shallow ponds\n- **Idaho & Colorado**: Forest-green roadside marker stakes\n- **Texas**: Granular chip-seal pavement with coarse black bitumen tar spots; wide double yellow lines\n- **Wisconsin**: Orange \"WARNING\" decals on poles accompanied by a diamond exclamation mark\n- **Minnesota**: Guardrail terminals capped with yellow square plates featuring black downward chevrons\n- **Indianapolis (IN)**: City fire hydrants are uniformly painted distinct minty \"ice green\"\n- **Michigan**: Mile-based road grids (\"8 Mile Rd\", \"12 Mile Rd\"); Stop signs supported by dual parallel timber posts\n- **Georgia & Florida**: Raised reflective pavement markers (cat's eyes) installed along both sides of centerlines\n- **South Carolina**: Black destination pointer tabs mounted directly above Stop signs\n- **Virginia & Maryland**: Exceptionally thick, wide white shoulder lines and yellow centerlines\n- **Kentucky**: Shoulder rumble strips cut in irregular patterns resembling jagged fractured rock fissures\n- **Memphis (TN)**: Roadway asphalt exhibits a distinctive chocolate-brownish tint\n- **Sioux Falls (SD)**: Highways paved with local Sioux quartzite aggregate, resulting in a pastel pink road surface\n- **Iowa**: Heavy reliance on white-paved Portland concrete highways across rural routes\n- **Arkansas**: High frequency of red Arkansas state flags flying outside properties\n- **Oklahoma**: Brilliant deep crimson-red clay soils and red mudstone cuts\n- **Kansas**: White plastic protective sleeve wrapped around the base of Stop sign posts\n- **Alaska**: Roadside tundra valleys blanketed in bright pink Fireweed"
      }
    ],
    "rawContent": "美国单区号州、全美50州模糊车牌色系、各州道路路缘柱、加州三橙条、夏威夷吉他拨片、内华达四钉等25州独家绝杀笔记"
  },

  # 20. 泰国 (Thailand)
  {
    "id": "thailand",
    "nameZh": "泰国",
    "nameEn": "Thailand",
    "flag": "🇹🇭",
    "continent": "Asia",
    "sections": [
      {
        "headingZh": "🇹🇭 泰国南部多层绝缘子与电线杆特征",
        "headingEn": "Southern Thailand Multi-Layer Insulators & Grid Metas",
        "contentZh": "- **南部泰国多层绝缘子**：电线杆横担上的绝缘陶瓷碗/绝缘子盘层数极其密集，**若层数大于等于 7 层 (>7 disks)**，绝大多数直接定位泰国南部狭长半岛地带 (普吉、甲米、素叻他尼至马泰边境)\n- **泰式方杆与橡胶林**：混凝土方形四棱中空电杆，路边大面积规则种植的割胶橡胶林；泰文带有小圆圈字母，不同于柬埔寨高棉文或老挝文",
        "contentEn": "- **Southern Multi-Layer Insulators**: Crossarm suspension ceramic insulator disks are heavily layered; **7 or more disks (>7 layers)** reliably indicates the southern peninsular tail of Thailand (Phuket, Krabi, Surat Thani down to the Malaysian border)\n- **Square Concrete Poles & Rubber Groves**: Square 4-rib hollow concrete poles alongside vast planted rubber tree monocultures; Thai script features characteristic loops on letters"
      }
    ],
    "rawContent": "泰国南部电线杆绝缘子多层>7绝杀笔记"
  },

  # 21. 南非 (South Africa)
  {
    "id": "south-africa",
    "nameZh": "南非",
    "nameEn": "South Africa",
    "flag": "🇿🇦",
    "continent": "Africa",
    "sections": [
      {
        "headingZh": "🇿🇦 开普敦及西南角 A 型电线杆铁架特征",
        "headingEn": "Southwest Cape Town A-Frame Utility Pole Brackets",
        "contentZh": "- **西南角 A 型金属铁架杆**：木质或水泥电线杆横梁下方带有倒 A 字形金属斜撑铁架，这是南非西南角西开普省 (Western Cape，开普敦周边高山与葡萄园产区) 的独家标志性电网结构\n- **道路标线与凡波斯灌木**：南非公路边缘统一画亮黄色实线 (或内黄外白)，左侧通行；开普半岛独有的温带硬叶凡波斯 (Fynbos) 灌木丛与平顶桌山地貌",
        "contentEn": "- **Southwestern A-Frame Steel Brackets**: Wooden or concrete poles fitted with inverted A-frame steel diagonal brackets beneath crossarms are exclusive to the Western Cape (Cape Town, Winelands, and coastal mountain passes)\n- **Road Markings & Fynbos**: Yellow outer road shoulder lines, left-hand driving; unique Cape Fynbos heathland shrubs against sheer sandstone massifs"
      }
    ],
    "rawContent": "南非西南角开普敦电线杆A型铁架笔记"
  }
]

def main():
    target_path = "assets/js/geoguessr-data.js"
    with open(target_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Format REGIONAL_DATA as pretty JSON
    json_str = json.dumps(REGIONAL_DATA, ensure_ascii=False, indent=2)
    # Indent by 4 spaces
    indented_json = "\n".join("  " + line if line else "" for line in json_str.split("\n"))

    # Replace "regionalGuides": [ ... ]
    # We find the start of "regionalGuides": [
    start_key = '"regionalGuides": ['
    start_pos = content.find(start_key)
    if start_pos == -1:
        print("ERROR: Could not find '\"regionalGuides\": ['")
        return

    # Find the end of this array, which precedes ',\n  "islands": [' or similar
    end_key = ',\n  "islands": ['
    end_pos = content.find(end_key, start_pos)
    if end_pos == -1:
        # try without leading comma
        end_key = '"islands": ['
        end_pos = content.find(end_key, start_pos)
        # find the preceding "]"
        last_bracket = content.rfind("]", start_pos, end_pos)
        end_pos = last_bracket + 1
    else:
        end_pos = end_pos # we will keep ',\n  "islands": ['

    print(f"Replacing from index {start_pos} to {end_pos}")

    new_regional_block = f'"regionalGuides": {json_str}'
    # Let us format it nicely:
    # content from 0 to start_pos
    # new_regional_block
    # content from end_pos onwards
    updated_content = content[:start_pos] + new_regional_block + content[end_pos:]

    with open(target_path, "w", encoding="utf-8") as f:
        f.write(updated_content)

    print("Successfully updated assets/js/geoguessr-data.js with full regional guides!")
    print(f"Total countries: {len(REGIONAL_DATA)}")
    total_sections = sum(len(c["sections"]) for c in REGIONAL_DATA)
    print(f"Total sections: {total_sections}")

if __name__ == "__main__":
    main()
