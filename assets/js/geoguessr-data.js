// GeoGuessr 核心数据源
window.GEOGUESSR_DATA = {
  "siteConfig": {
    "titleZh": "GeoGuessr 知识宝典与速查工具",
    "titleEn": "GeoGuessr Master Guide & Quick Reference",
    "subtitleZh": "提炼自实战笔记的全球 Meta 识别指南与复习系统",
    "subtitleEn": "Curated Competitive Meta Guides, Regional Deep Dives & Review Flashcards"
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
      "featuresZh": [
        "排位天梯",
        "世界决斗",
        "大师联赛",
        "好友联机"
      ],
      "featuresEn": [
        "Ranked Duels",
        "World Cup",
        "Master League",
        "Parties"
      ]
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
      "featuresZh": [
        "免费游玩",
        "每日挑战",
        "快速练习"
      ],
      "featuresEn": [
        "Free Play",
        "Daily Maps",
        "Quick Drill"
      ]
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
      "featuresZh": [
        "每日题目",
        "战绩统计",
        "轻量极速"
      ],
      "featuresEn": [
        "Daily Seeds",
        "Score Stats",
        "Instant Load"
      ]
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
      "featuresZh": [
        "Elo 查询",
        "全球排行",
        "玩家分析"
      ],
      "featuresEn": [
        "Elo History",
        "Global Ranks",
        "Head-to-Head"
      ]
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
      "featuresZh": [
        "完全免费",
        "多人决斗",
        "无限轮次"
      ],
      "featuresEn": [
        "100% Free",
        "Multiplayer",
        "Unlimited"
      ]
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
      "featuresZh": [
        "自定义地图",
        "流畅界面",
        "无需付费"
      ],
      "featuresEn": [
        "Custom Maps",
        "Clean UI",
        "No Paywall"
      ]
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
      "featuresZh": [
        "即开即玩",
        "轻量免插件",
        "碎片练习"
      ],
      "featuresEn": [
        "Instant Play",
        "Lightweight",
        "Quick Drills"
      ]
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
      "featuresZh": [
        "积分天梯",
        "中国特化图",
        "活跃社区",
        "丰富比赛"
      ],
      "featuresEn": [
        "Elo Ladder",
        "China Map Pool",
        "Tournaments",
        "Active Forum"
      ]
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
      },
      {
        "nameZh": "Geodummy",
        "nameEn": "Geodummy",
        "url": "https://geodummy.com/",
        "descZh": "极简直观的 GeoGuessr 新手与进阶速查工具库，涵盖各类路缘柱、车牌与国家基础 Meta 速记表。",
        "descEn": "Intuitive beginner and intermediate cheat-sheet directory covering bollards, plates, and essential country metas.",
        "icon": "zap",
        "badgeZh": "速查工具",
        "badgeEn": "Cheat Sheet",
        "badgeColor": "amber",
        "featuresZh": [
          "Bollard 柱库",
          "新手指南",
          "速查表"
        ],
        "featuresEn": [
          "Bollards",
          "Beginner Guide",
          "Cheat Sheet"
        ]
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
      },
      {
        "titleZh": "2026 最实用 GeoGuessr 地图与全球 Meta 幻灯片手册",
        "titleEn": "Most Useful Maps 2026 Presentation Manual",
        "url": "https://docs.google.com/presentation/d/1XejTARQG_Y1fMEktkxFSpq2gB_7QnZQIpFB_Uxuw1jo/edit?slide=id.g3433fa4ca9a_0_1#slide=id.g3433fa4ca9a_0_1",
        "author": "Community / GeoGuessr Master",
        "descZh": "汇集 2026 最新天梯顶流地图、高频区域 Meta、植被与基础设施全景幻灯片速查手册。",
        "descEn": "Authoritative master presentation deck containing the most useful maps, regional metas, and visual guides for 2026 competitive play.",
        "tags": [
          "高阶教材",
          "地图幻灯片",
          "官方社区"
        ]
      },
      {
        "titleZh": "Zig8zag 全球电线杆完全指南 (Notable Poles Document)",
        "titleEn": "Notable Poles Document by Zig8zag",
        "url": "https://docs.google.com/document/d/1_H5ignyvO42ACFfr7n02o0x2EyPYUhD-vgMNbnQANe4/edit?tab=t.0",
        "author": "Zig8zag",
        "descZh": "GeoGuessr 顶级电杆识别圣经，详尽梳理全球六大洲数十国方孔、梯子、圆柱与变压器结构。",
        "descEn": "The definitive utility pole bible covering perforations, ladder rungs, transformer orientations, and base colors across continents.",
        "tags": [
          "电线杆圣经",
          "顶尖攻略",
          "全球电网"
        ]
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
        "descZh": "无路牌农村局最强锁国利器：法国（蓝标贴牌与带孔水泥杆）、西班牙与葡萄牙（经典梯子杆 Ladder Poles）、匈牙利（密集横孔水泥杆与木杆A字撑）、波兰（A字双杆与弯钩单绝缘子）、罗马尼亚（通透梯形方孔杆，底部常刷白漆）、波罗的海三国（单侧小弯钩横担）、巴西与智利（南美梯子镂空水泥杆）、阿德莱德（南澳专属钢夹水泥 Stobie 杆）、日本（垂直辅撑与黄黑拉线套）、台湾（螺旋黄黑防撞杆）、泰国（带方孔黑底白字编码水泥杆）。",
        "descEn": "Comprehensive visual guide to utility poles worldwide: Ladder poles (Spain, Portugal, France, Brazil, Chile), Holey concrete poles (Hungary, Poland, Romania, Thailand, Cambodia), Baltic hook crossarms, Australian Stobie poles, Japanese vertical struts & guy-wire guards, and Taiwanese spiral yellow-black stripes.",
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
        "descZh": "第三代街景（Gen 3）车尾颜色、天线长短与皮卡车顶架速查：①黑色/白色/银色车尾（Carback）：秘鲁、玻利维亚（多白尾）、智利（多白尾）、阿根廷与乌拉圭（多黑尾）；②粗短天线（Stubby Antenna）：西班牙、意大利、波兰、罗马尼亚、保加利亚、波罗的海三国、英国、澳洲、泰/马、墨西哥；③红/白/黑车配长天线：俄罗斯、乌克兰、瑞典、葡萄牙、法/德、美/巴、台湾；④皮卡/车顶架（Truck/Roof Rack）：蒙古、吉尔吉斯、危地马拉、多米尼加、尼日利亚、塞内加尔、加纳、肯尼亚、乌干达、孟加拉、斯里兰卡；⑤螺纹天线（Ribbed）：以色列与巴勒斯坦。",
        "descEn": "Global Gen 3 car and antenna guide: Black/White/Silver carbacks (South America), Stubby Antenna (Spain, Italy, Eastern Europe, Baltics, UK, Australia, Thailand, Malaysia, Mexico), Long Antenna (Russia, Ukraine, Sweden, Portugal, France, Germany, US, Brazil, Taiwan), Truck/Roof Rack (Mongolia, Kyrgyzstan, Guatemala, West/East Africa, Bangladesh, Sri Lanka), Lowcam (Switzerland, Japan), and Ribbed Antenna (Israel).",
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
        "descZh": "即便车牌打码模糊，长宽外框比例依旧清晰：①蓝色【Long 欧式细长牌】：全欧洲、俄罗斯、土耳其、哈萨克/吉尔吉斯、蒙古、中国大陆、韩国（新款长牌）、印度、东南亚（越/马/新/印）、南非/莱索托/斯威士兰、塞内加尔/加纳/突尼斯，以及南美南方共同市场四国（巴西、阿根廷、乌拉圭、巴拉圭）；②黄色【Short 美式短宽牌】：美加墨、中美洲、加勒比、厄瓜多尔、秘鲁、玻利维亚、智利、澳新、菲/台/泰/柬；③红色【Tall Short 偏方高短牌】：哥伦比亚与日本；④绿色【Mixed 长短混用】：肯尼亚、乌干达、尼日利亚、博茨瓦纳、纳米比亚、阿联酋、约旦、斯里兰卡、老挝。",
        "descEn": "License plate aspect ratios worldwide: Blue (Long European-style) = All of Europe, Russia, Central Asia, Mongolia, China, South Korea, India, Indonesia/Malaysia, South Africa, and Mercosur South America (Brazil, Argentina, Uruguay); Yellow (Short American-style) = North & Central America, Andean South America (Ecuador, Peru, Bolivia, Chile), AU/NZ, Thailand/Taiwan/Philippines; Red (Tall-Short boxy) = Colombia and Japan; Green (Mixed) = East/Southern Africa, UAE, Jordan, Sri Lanka.",
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
        "descZh": "加拿大分省极简铁律——全国大部分省区均只挂后车牌：①蓝色【Rear & Front 前后双车牌】：仅有不列颠哥伦比亚省（BC）、马尼托巴省（Manitoba）、安大略省（Ontario）（注：图中新不伦瑞克省 NB 标蓝为2019年7月前旧规，现已取消前车牌！）；②红色【Rear Only 仅挂后车牌】：艾伯塔省（Alberta，在落基山脉秒分 BC 与 AB 的核心铁证）、萨斯喀彻温省（Saskatchewan）、魁北克省（Quebec 全境无前牌！）、大西洋三省（NS/PEI/NL）及北方三大地区（YT/NT/NU）。",
        "descEn": "Canadian front vs rear license plate requirements: Blue (Rear & Front required) = British Columbia (BC), Manitoba (MB), and Ontario (ON) (Note: New Brunswick abolished front plates in July 2019, so newer Gen 4 coverage in NB is rear-only); Red (Rear Only) = Alberta, Saskatchewan, Quebec, Nova Scotia, PEI, Newfoundland & Labrador, and all 3 northern territories.",
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
        "descZh": "八角形停车牌文字全球分流：①西语美洲一字定乾坤：【ALTO】= 墨西哥与中美洲（危地马拉、哥斯达黎加、巴拿马）；【PARE】= 南美洲全境（哥伦比亚、厄瓜多尔、秘鲁、玻利维亚、智利、阿根廷、乌拉圭、巴西）+ 波多黎各与多米尼加！②北美法语区：【ARRÊT】仅出现在加拿大魁北克省与新不伦瑞克省（法国本土用英文 STOP！）；③亚非欧特色文字：土耳其【DUR】、蒙古【ЗОГС】、阿拉伯国家【قف】、以色列【黄色五指手掌图案】、日本【止まれ 红色倒三角形】、韩国【정지 / STOP】、中国与台湾【停】、泰国【หยุด】、老挝【ຢຸດ】、柬埔寨【ឈប់】、马/印/文莱【BERHENTI】、孟加拉【থামুন】。",
        "descEn": "Global STOP sign text variations: ALTO = Mexico & Central America; PARE = All of South America + Puerto Rico & Dominican Republic; ARRÊT = Quebec & French New Brunswick (France itself uses STOP); DUR = Turkey; ЗОГС = Mongolia; Hand symbol = Israel; Red downward triangle '止まれ' = Japan; '정지' = South Korea; '停' = China/Taiwan; 'หยุด' = Thailand; 'ຢຸດ' = Laos; 'ឈប់' = Cambodia; 'BERHENTI' = Malaysia/Indonesia.",
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
        "descZh": "了解各国路边护柱（Bollards）密度，判断“有/无护柱”本身传递的信息：①绿色【Likely 极高概率见到】：欧洲大陆绝大多数国家（冰岛、丹麦、德/波/捷/斯/奥/瑞/斯洛文尼亚/克罗地亚/匈牙利/罗马尼亚/法/西/意/波罗的海三国/黑山/塞尔维亚）、土耳其、日本、台湾、泰国、柬埔寨、马来西亚、澳大利亚、新西兰；②橙色【Sometimes 偶见】：英/爱、挪/瑞/芬、俄/乌、哈萨克/吉尔吉斯/蒙古、韩/菲/印/孟/斯、突尼斯、美/加/墨、厄/秘/智/乌拉圭；③红色【Rarely 极少见到】：撒哈拉以南非洲全境、印度、中东、巴西、阿根廷、哥伦比亚、玻利维亚。",
        "descEn": "Global probability of seeing roadside bollards: Green (Likely) = Continental Europe, Turkey, Japan, Taiwan, Thailand, Cambodia, Malaysia, Australia, New Zealand; Orange (Sometimes) = UK/Ireland, Nordics (NO/SE/FI), Russia/Ukraine, Central Asia/Mongolia, South Korea, Indonesia/Philippines, North America, Peru/Chile/Ecuador/Uruguay; Red (Rarely) = Sub-Saharan Africa, India, Middle East, Brazil, Argentina, Colombia, Bolivia.",
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
        "descZh": "开局若四周一望无际全为绝对平坦平原（无任何山丘起伏），可对照此图秒排山地国：①深绿【Almost Always 几乎总是平坦】：丹麦、荷兰、芬兰、爱沙尼亚、拉脱维亚、立陶宛、匈牙利、乌克兰、乌拉圭、塞内加尔、尼日利亚、加纳、博茨瓦纳、卡塔尔、阿联酋、孟加拉国、柬埔寨；②浅绿【Likely 大概率平坦】：俄罗斯、波兰、比利时、英国、美加墨（大平原）、阿根廷、巴西、澳大利亚、印度、泰国；③橙色【Unlikely 较少平坦】：法/德/西/葡/意/捷/罗/保/希/土、挪/瑞、南非、肯尼亚、印尼、菲律宾、韩国；④红色【Almost Never 几乎从不平坦（必见山脉或丘陵）】：瑞士、奥地利、斯洛伐克、斯洛文尼亚、黑山、阿尔巴尼亚、北马其顿、冰岛、吉尔吉斯斯坦、不丹、日本、中国台湾、香港、新西兰、秘鲁、玻利维亚、厄瓜多尔、哥伦比亚、危地马拉、卢旺达、莱索托、斯威士兰。",
        "descEn": "How likely you are to encounter a completely flat landscape: Dark Green (Almost Always) = Denmark, Netherlands, Finland, Baltics, Hungary, Ukraine, Uruguay, Senegal, Botswana, Qatar, UAE, Bangladesh, Cambodia; Light Green (Likely) = Russia, Poland, UK, US/Canada, Argentina, Brazil, Australia, India, Thailand; Orange (Unlikely) = Spain, Italy, Greece, Turkey, Norway, Sweden, South Africa, Kenya, Indonesia, Korea; Red (Almost Never) = Switzerland, Austria, Slovakia, Slovenia, Montenegro, Albania, Iceland, Kyrgyzstan, Bhutan, Japan, Taiwan, NZ, Andean South America, Rwanda, Lesotho.",
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
        "descZh": "直观对比俄罗斯与乌克兰西里尔字母核心差异：乌克兰语独占字母【І і, Ї ї（带两点）, Є є（正向开口）, Ґ ґ】且常见撇号 ’；俄语独占字母【Ы ы, Э э（反向开口）, Ъ ъ, Ё ё】。同时对比街道词【Вулиця】（乌）vs【Улица】（俄）及常见地名词尾【-ський】（乌）vs【-ский】（俄）。",
        "descEn": "Direct comparison between Russian and Ukrainian Cyrillic: Ukrainian unique letters (І, Ї, Є, Ґ) and street word 'Вулиця' (-ський suffix) vs. Russian unique letters (Ы, Э, Ъ, Ё) and street word 'Улица' (-ский suffix).",
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
        "descZh": "当看到西里尔字母但需判断是否为俄语以外国家时的实战图鉴：①乌克兰语（І, Ї, Є, Ґ，常见 її, ії, ьо）；②白俄罗斯语（独占 Ў ў 与 І，常将 о 写作 а）；③保加利亚语（无 ы/э，但将 Ъ ъ 作为高频元音字母使用，词尾常见 -ът/-та）；④塞尔维亚/黑山与北马其顿（共用 Ј, Љ, Њ, Џ；塞黑独占 Ђ, Ћ；北马其顿独占 Ѓ, Ќ, Ѕ）；⑤哈萨克语（Ә, Ғ, Қ, Ң, Ө, Ұ, Ү, Һ, І）、吉尔吉斯语（常见双写元音 оо, уу, ээ）、蒙古语（Ө, Ү）。",
        "descEn": "Field guide for letter combinations and unique characters indicating a Cyrillic text is NOT Russian: Ukrainian (І, Ї, Є, Ґ), Belarusian (Ў, І), Bulgarian (vowel Ъ, suffixes -ът/-та), Serbian (Ј, Љ, Њ, Џ, Ђ, Ћ), Macedonian (Ѓ, Ќ, Ѕ), Kazakh (Ә, Ғ, Қ, Ң, Ө, Ұ, Ү, Һ), Kyrgyz (double vowels оо/уу/ээ), and Mongolian (Ө, Ү).",
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
  "countries": [
    {
      "id": "albania",
      "nameEn": "Albania",
      "nameZh": "阿尔巴尼亚",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇦🇱",
      "link": "https://www.reddit.com/r/geoguessr/comments/1heub3m/albania_basics/#lightbox",
      "desc": "断裂天空 (Sky Rift)；道路名前缀 Rruga；车牌两侧蓝条或左侧红条；意大利型路缘标；电线杆上倒立三角支撑；屋顶经常看到巨大的白色水箱。",
      "tags": [
        "车牌 / Plate",
        "电线杆 / Pole",
        "路缘标 / Bollard",
        "街景车 / Car Meta"
      ],
      "descZh": "天空常有明显的图像拼接裂缝 (Sky Rift)；道路名称前缀为 Rruga；车牌左右双蓝条或早期左侧红条；意大利型路缘标；电线杆横木下带有倒立三角形支撑架；房屋平顶上经常看到巨大的白色或蓝色储水箱；阿尔巴尼亚语包含 ë 和 ç；详见 [Albania Basics](https://www.reddit.com/r/geoguessr/comments/1heub3m/albania_basics/#lightbox)。",
      "descEn": "Frequent Sky Rift stitching tears in the sky; road names prefixed with 'Rruga'; license plates feature dual blue strips or legacy red left band; Italian-style bollards; utility poles with inverted triangular braces under crossarms; large horizontal water tanks on flat roofs; Albanian script features ë and ç; see [Albania Basics](https://www.reddit.com/r/geoguessr/comments/1heub3m/albania_basics/#lightbox).",
      "tagsZh": [
        "车牌特征",
        "电线杆",
        "路缘标",
        "街景车"
      ],
      "tagsEn": [
        "License Plates",
        "Utility Poles",
        "Bollards",
        "Camera Car"
      ]
    },
    {
      "id": "american-samoa",
      "nameEn": "American Samoa",
      "nameZh": "美属萨摩亚",
      "continentEn": "Oceania",
      "continentZh": "大洋洲",
      "flag": "🇦🇸",
      "link": "",
      "desc": "街景车为深色部分生锈卡车，车辆右行，热带波利尼西亚岛屿风貌。",
      "tags": [
        "街景车 / Car Meta"
      ],
      "descZh": "街景车为深色部分生锈卡车，车辆右行，热带波利尼西亚岛屿风貌。",
      "descEn": "Street View car is a dark, partially rusted pickup truck; drives on the right; lush tropical Polynesian island landscape.",
      "tagsZh": [
        "街景车"
      ],
      "tagsEn": [
        "Camera Car"
      ]
    },
    {
      "id": "andorra",
      "nameEn": "Andorra",
      "nameZh": "安道尔",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇦🇩",
      "link": "",
      "desc": "建筑多采用深色、带橙色调的砖石结构（Andorran Brick）；地处高山峡谷；路边有很高、带红黄白相间线段的雪迹杆；车牌短小带红徽。",
      "tags": [
        "路缘标 / Bollard"
      ],
      "descZh": "建筑多采用深色、带橙色调的砖石结构（Andorran Brick）；地处高山峡谷；路边有很高、带红黄白相间线段的雪迹杆；车牌短小带红徽。",
      "descEn": "Distinctive dark orange-tinted stone architecture (Andorran Brick); deep Pyrenean valley terrain; tall snow poles with alternating red, yellow, and white segments; short license plates.",
      "tagsZh": [
        "路缘标"
      ],
      "tagsEn": [
        "Bollards"
      ]
    },
    {
      "id": "argentina",
      "nameEn": "Argentina",
      "nameZh": "阿根廷",
      "continentEn": "South America",
      "continentZh": "南美洲",
      "flag": "🇦🇷",
      "link": "",
      "desc": "车牌一种为白底黑字且中间有明显黑方块（ARE ■ ETE），另一种长车牌上方带蓝条；经常看到 011 区号（布宜诺斯艾利斯）；Chevron 弯道标为红底白箭头；Misiones 地区有极度鲜艳的红土；电线杆三个绝缘体左右交替排列（与秘鲁不同），亦有 A 形水泥杆；金属里程牌黑条上标注 RN 或 RP；道路中线可能白黄混用。",
      "tags": [
        "车牌 / Plate",
        "电线杆 / Pole",
        "红土 / Red Soil",
        "道路标线 / Lines"
      ],
      "descZh": "车牌分为白底黑字中间带黑方块（ARE ■ ETE 格式）或带上部浅蓝条的 Mercosur 长牌；固话常出现 011 区号（大布宜诺斯艾利斯）；Chevron 为鲜明红底白箭头；东北部米西奥内斯省 (Misiones) 分布极具辨识度的鲜艳红土；电线杆三个绝缘体左右交替排列（与秘鲁不同），偶见A形木电杆；金属里程牌上方黑条标注 RN（国道）或 RP（省道）；道路中线常为黄实线配白虚线。",
      "descEn": "License plates feature black characters with a center black dot (ARE ■ ETE) or Mercosur long plates with top blue stripe; area code 011 (Greater Buenos Aires); chevrons are red background with white arrows; northeastern Misiones province covered in vivid deep red soils; utility poles feature three insulators alternating left and right (unlike Peru), with occasional A-frame poles; metal milestones marked RN (National) or RP (Provincial); centerlines often combine solid yellow with dashed white.",
      "tagsZh": [
        "车牌特征",
        "电线杆",
        "红土壤",
        "道路标线"
      ],
      "tagsEn": [
        "License Plates",
        "Utility Poles",
        "Red Soil",
        "Road Markings"
      ]
    },
    {
      "id": "australia",
      "nameEn": "Australia",
      "nameZh": "澳大利亚",
      "continentEn": "Oceania",
      "continentZh": "大洋洲",
      "flag": "🇦🇺",
      "link": "",
      "desc": "车辆左侧行驶；路缘标为白色圆柱带红色长方块反光片（红块不包边整圈）；全线使用纯白道路标线；电话号码为 10 位，以 0 或 04（手机）开头；常见桉树与袋鼠警示牌，西澳和北领地有大面积红土地貌；南澳特有 Stobie 水泥夹钢杆。",
      "tags": [
        "左行 / LHD",
        "路缘标 / Bollard",
        "红土 / Red Soil",
        "道路标线 / Lines"
      ],
      "descZh": "车辆左侧行驶；路缘标为白色圆柱带红色长方块反光片（红块不包边整圈）；全线使用纯白道路标线；电话号码为 10 位，以 0 或 04（手机）开头；常见桉树与袋鼠警示牌，西澳和北领地有大面积红土地貌；南澳特有 Stobie 水泥夹钢杆。",
      "descEn": "Left-hand drive; white bollards with a centered red rectangular reflector (not full wrap); all-white road markings (except rare ski resort snow lines); 10-digit phone numbers starting with 0 or 04 (mobile); ubiquitous eucalyptus trees; vast red soil in WA and NT; Stobie poles unique to South Australia.",
      "tagsZh": [
        "左侧行驶",
        "路缘标",
        "红土壤",
        "道路标线"
      ],
      "tagsEn": [
        "Left-Hand Drive",
        "Bollards",
        "Red Soil",
        "Road Markings"
      ]
    },
    {
      "id": "austria",
      "nameEn": "Austria",
      "nameZh": "奥地利",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇦🇹",
      "link": "",
      "desc": "路牌使用 Einbahn / Gasse / Anfang 字样；前车窗上部角落常有白色盾牌高速贴纸 (Pickerl)；路缘标顶部为黑色倾斜削角配红色反光带；属于红底白箭头 Chevron “AH UBER” 国家；人行道告示牌小人脚下为两条横虚线；山地为壮丽的阿尔卑斯雪山木屋。",
      "tags": [
        "路缘标 / Bollard"
      ],
      "descZh": "路牌使用 Einbahn / Gasse / Anfang 字样；前车窗上部角落常有白色盾牌高速贴纸 (Pickerl)；路缘标顶部为黑色倾斜削角配红色反光带；属于红底白箭头 Chevron “AH UBER” 国家；人行道告示牌小人脚下为两条横虚线；山地为壮丽的阿尔卑斯雪山木屋。",
      "descEn": "Road signs feature 'Einbahn', 'Gasse', or 'Anfang'; windshield corners often have white highway vignette stickers; bollards have slanted black tops with red reflectors; red-and-white curve chevrons; pedestrian crossing signs have two dashed lines beneath feet; majestic Alpine peaks with wooden chalets.",
      "tagsZh": [
        "路缘标"
      ],
      "tagsEn": [
        "Bollards"
      ]
    },
    {
      "id": "bangladesh",
      "nameEn": "Bangladesh",
      "nameZh": "孟加拉国",
      "continentEn": "Asia",
      "continentZh": "亚洲",
      "flag": "🇧🇩",
      "link": "",
      "desc": "孟加拉语字母顶部有贯穿横线，包含大量三角形与尖角字形；绿色 CNG 人力或机动三轮车极度普及；平原湿地、泥泞土路与竹制栅栏。",
      "tags": [
        "语言 / Script"
      ],
      "descZh": "孟加拉语字母顶部有贯穿横线，包含大量三角形与尖角字形；绿色 CNG 人力或机动三轮车极度普及；平原湿地、泥泞土路与竹制栅栏。",
      "descEn": "Bengali script with a continuous top horizontal line and sharp angular glyphs; green CNG motorized and cycle rickshaws ubiquitous; flat river delta wetlands, dirt roads, and woven bamboo fences.",
      "tagsZh": [
        "语言文字"
      ],
      "tagsEn": [
        "Language & Script"
      ]
    },
    {
      "id": "belgium",
      "nameEn": "Belgium",
      "nameZh": "比利时",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇧🇪",
      "link": "",
      "desc": "车牌多为白底暗红字（模糊后呈现粉红色调）；人行道告示牌底下为两条横虚线；西欧红砖排屋风格，路灯多悬挂于电线中央。",
      "tags": [
        "车牌 / Plate"
      ],
      "descZh": "车牌多为白底暗红字（模糊后呈现粉红色调）；人行道告示牌底下为两条横虚线；西欧红砖排屋风格，路灯多悬挂于电线中央。",
      "descEn": "License plates feature distinctive dark red lettering on white (appears pinkish when blurred); pedestrian signs have two dashed lines beneath feet; Western European red-brick row houses; motorway lighting on tall central catenary masts.",
      "tagsZh": [
        "车牌特征"
      ],
      "tagsEn": [
        "License Plates"
      ]
    },
    {
      "id": "bermuda",
      "nameEn": "Bermuda",
      "nameZh": "百慕大",
      "continentEn": "North America",
      "continentZh": "北美洲",
      "flag": "🇧🇲",
      "link": "",
      "desc": "街景车为黑色方形皮卡，车身前部和后视镜可见；车辆左行；普通车牌白底黑字；房屋多为标志性阶梯状白屋顶（集雨功能）；热带整洁海岛风情；路中单黄实线，无外侧边线。",
      "tags": [
        "左行 / LHD",
        "车牌 / Plate",
        "街景车 / Car Meta",
        "道路标线 / Lines"
      ],
      "descZh": "街景车为黑色方形皮卡，车身前部和后视镜可见；车辆左行；普通车牌白底黑字；房屋多为标志性阶梯状白屋顶（集雨功能）；热带整洁海岛风情；路中单黄实线，无外侧边线。",
      "descEn": "Black square pickup truck camera car with hood and side mirrors visible; left-hand drive; white license plates with black text; iconic white stepped limestone roofs for rainwater collection; pristine tropical island; single solid yellow center line without road edge lines.",
      "tagsZh": [
        "左侧行驶",
        "车牌特征",
        "街景车",
        "道路标线"
      ],
      "tagsEn": [
        "Left-Hand Drive",
        "License Plates",
        "Camera Car",
        "Road Markings"
      ]
    },
    {
      "id": "bhutan",
      "nameEn": "Bhutan",
      "nameZh": "不丹",
      "continentEn": "Asia",
      "continentZh": "亚洲",
      "flag": "🇧🇹",
      "link": "",
      "desc": "语言为不丹宗卡文（藏文字母），顶部有厚重横笔且带有长下垂笔画；路边常有红白相间的混凝土方块路墩；普通民用车牌多为深红色；雄伟喜马拉雅峡谷与传统藏式木窗雕花建筑。",
      "tags": [
        "车牌 / Plate",
        "语言 / Script"
      ],
      "descZh": "语言为不丹宗卡文（藏文字母），顶部有厚重横笔且带有长下垂笔画；路边常有红白相间的混凝土方块路墩；普通民用车牌多为深红色；雄伟喜马拉雅峡谷与传统藏式木窗雕花建筑。",
      "descEn": "Dzongkha (Tibetan) script with heavy horizontal headstrokes and descending legs; roadside red-and-white painted concrete curb blocks; deep red civilian license plates; dramatic Himalayan pine valleys and traditional timber-framed architecture.",
      "tagsZh": [
        "车牌特征",
        "语言文字"
      ],
      "tagsEn": [
        "License Plates",
        "Language & Script"
      ]
    },
    {
      "id": "bolivia",
      "nameEn": "Bolivia",
      "nameZh": "玻利维亚",
      "continentEn": "South America",
      "continentZh": "南美洲",
      "flag": "🇧🇴",
      "link": "",
      "desc": "东部平原木质电线杆通常极度弯曲不直；波形护栏上贴有黄黑相间竖条反光纸；城区多鹅卵石路与未粉刷红砖房；随处可见蓝色 Tigo 广告牌及 MAS、EVO 等政治喷漆涂鸦；街景仅使用白色 Gen 3 街景车，左前方常有竖直下凹模糊块；路标立柱常采用粗糙的方形实木木桩。",
      "tags": [
        "电线杆 / Pole",
        "街景车 / Car Meta"
      ],
      "descZh": "东部平原木质电线杆极其弯曲不直；波形护栏贴黄黑黄黑黄相间条纹贴纸（与秘鲁不同）；城区常见鹅卵石街道；随处可见蓝色 Tigo 运营商广告及 MAS、EVO 政治涂鸦；仅有三代白色街景车覆盖，左前方偶见竖条状模糊；路标杆多使用粗糙的木头方杆；极度干燥的高原草甸（Puna）与土坯房。",
      "descEn": "Eastern lowlands feature notoriously crooked/bent wooden utility poles; guardrails marked with yellow-black-yellow-black-yellow stickers (different from Peru); cobblestone urban streets; ubiquitous blue Tigo billboards and MAS/EVO political graffiti; exclusively Gen 3 white camera truck with occasional vertical blur on the left-front; rough square timber signposts; hyper-arid Andean high plateau (Puna) with adobe cottages.",
      "tagsZh": [
        "电线杆",
        "街景车"
      ],
      "tagsEn": [
        "Utility Poles",
        "Camera Car"
      ]
    },
    {
      "id": "bosnia-and-herzegovina",
      "nameEn": "Bosnia and Herzegovina",
      "nameZh": "波黑",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇧🇦",
      "link": "",
      "desc": "2024 年官方街景新增国家；车牌为全白色长牌，没有欧盟蓝色左条；木电线杆或水泥杆上常钉有带编号的蓝色小铁牌；建筑立面上偶尔仍能看到战争历史遗留的弹孔痕迹；波斯尼亚丘陵山地。",
      "tags": [
        "车牌 / Plate",
        "电线杆 / Pole"
      ],
      "descZh": "2024 年官方街景新增国家；车牌为全白色长牌，没有欧盟蓝色左条；木电线杆或水泥杆上常钉有带编号的蓝色小铁牌；建筑立面上偶尔仍能看到战争历史遗留的弹孔痕迹；波斯尼亚丘陵山地。",
      "descEn": "Official coverage added in 2024; plain white license plates without EU blue strips; small blue metal numbering plates nailed to wooden and concrete poles; occasional bullet holes preserved on older building facades; hilly Balkan landscape.",
      "tagsZh": [
        "车牌特征",
        "电线杆"
      ],
      "tagsEn": [
        "License Plates",
        "Utility Poles"
      ]
    },
    {
      "id": "botswana",
      "nameEn": "Botswana",
      "nameZh": "博茨瓦纳",
      "continentEn": "Africa",
      "continentZh": "非洲",
      "flag": "🇧🇼",
      "link": "",
      "desc": "地貌极其平坦干燥，稀树草原灌木丛；路牌立柱一律刷成鲜明的黑黄相间宽条纹；车牌采用前白后黄长条格式；南部非洲左侧行驶；偶尔可见沙丘与牛群。",
      "tags": [
        "车牌 / Plate"
      ],
      "descZh": "地貌极其平坦干燥，稀树草原灌木丛；路牌立柱一律刷成鲜明的黑黄相间宽条纹；车牌采用前白后黄长条格式；南部非洲左侧行驶；偶尔可见沙丘与牛群。",
      "descEn": "Extremely flat and semi-arid Kalahari landscape with thorn trees; road sign poles universally painted in bold alternating black and yellow bands; front-white, rear-yellow license plates; left-hand drive.",
      "tagsZh": [
        "车牌特征"
      ],
      "tagsEn": [
        "License Plates"
      ]
    },
    {
      "id": "brazil",
      "nameEn": "Brazil",
      "nameZh": "巴西",
      "continentEn": "South America",
      "continentZh": "南美洲",
      "flag": "🇧🇷",
      "link": "",
      "desc": "具有标志性镂空孔洞的混凝土“梯子”型电线杆；南美 Mercosur 长车牌；路牌背面通常涂成死黑色；屋顶常见深蓝色圆形水箱与半透明卫星大铁锅；广泛分布红土壤；弯道导向标为黑底黄箭头；电话区号为两位数 DDD 格式；8 位数 CEP 邮编可精确定位州和城市。",
      "tags": [
        "车牌 / Plate",
        "电线杆 / Pole",
        "街景车 / Car Meta",
        "红土 / Red Soil"
      ],
      "descZh": "具有标志性镂空孔洞的混凝土“梯子”型电线杆；南美 Mercosur 长车牌；路牌背面通常涂成死黑色；屋顶常见深蓝色圆形水箱与半透明卫星大铁锅；广泛分布红土壤；弯道导向标为黑底黄箭头；电话区号为两位数 DDD 格式；8 位数 CEP 邮编可精确定位州和城市。",
      "descEn": "Iconic concrete ladder utility poles with hollow rungs; Mercosur long plates with top blue stripe; backs of road signs painted matte black; dark blue water tanks and large mesh satellite dishes on roofs; widespread rich red soil; black-and-yellow curve chevrons; 2-digit DDD telephone area codes and 8-digit CEP postal codes.",
      "tagsZh": [
        "车牌特征",
        "电线杆",
        "街景车",
        "红土壤"
      ],
      "tagsEn": [
        "License Plates",
        "Utility Poles",
        "Camera Car",
        "Red Soil"
      ]
    },
    {
      "id": "bulgaria",
      "nameEn": "Bulgaria",
      "nameZh": "保加利亚",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇧🇬",
      "link": "",
      "desc": "唯一使用西里尔字母的欧盟成员国（车牌左侧带蓝条）；字母 ъ 作为极高频的常规元音；电线杆上常见上下交错排列的金属弯钩绝缘子（无横木）；民居瓦片屋顶通常显得凹凸不平、斑驳陈旧；巴尔干山地植被。",
      "tags": [
        "电线杆 / Pole",
        "语言 / Script"
      ],
      "descZh": "唯一使用西里尔字母的欧盟成员国（车牌左侧带蓝条）；字母 ъ 作为极高频的常规元音；电线杆上常见上下交错排列的金属弯钩绝缘子（无横木）；民居瓦片屋顶通常显得凹凸不平、斑驳陈旧；巴尔干山地植被。",
      "descEn": "The only EU nation using Cyrillic script (plates feature EU blue strips); the letter 'ъ' is a very common regular vowel; concrete poles feature hook insulators arranged alternately up and down without crossarms; rustic, weathered undulating tile roofs.",
      "tagsZh": [
        "电线杆",
        "语言文字"
      ],
      "tagsEn": [
        "Utility Poles",
        "Language & Script"
      ]
    },
    {
      "id": "cambodia",
      "nameEn": "Cambodia",
      "nameZh": "柬埔寨",
      "continentEn": "Asia",
      "continentZh": "亚洲",
      "flag": "🇰🇭",
      "link": "",
      "desc": "大范围使用低分辨率镜头 (Shitcam / Gen 2 模糊画质)；高棉语文字圆润优美，顶部有波浪纹或倒钩尖刺；道路中心线多为明亮黄色单实线或虚线；红土路基；随处可见高脚木楼吊脚楼；电线杆分为方形打孔梯子杆和圆柱水泥杆两种。",
      "tags": [
        "电线杆 / Pole",
        "红土 / Red Soil",
        "道路标线 / Lines",
        "语言 / Script"
      ],
      "descZh": "大范围使用低分辨率镜头 (Shitcam / Gen 2 模糊画质)；高棉语文字圆润优美，顶部有波浪纹或倒钩尖刺；道路中心线多为明亮黄色单实线或虚线；红土路基；随处可见高脚木楼吊脚楼；电线杆分为方形打孔梯子杆和圆柱水泥杆两种。",
      "descEn": "Widespread low-resolution Generation 2 camera (Shitcam); rounded Khmer script with distinctive wavy crests and teeth; bright yellow center lines; red dirt shoulders; wooden stilt houses; utility poles are either concrete ladder-type or round pillars.",
      "tagsZh": [
        "电线杆",
        "红土壤",
        "道路标线",
        "语言文字"
      ],
      "tagsEn": [
        "Utility Poles",
        "Red Soil",
        "Road Markings",
        "Language & Script"
      ]
    },
    {
      "id": "canada",
      "nameEn": "Canada",
      "nameZh": "加拿大",
      "continentEn": "North America",
      "continentZh": "北美洲",
      "flag": "🇨🇦",
      "link": "",
      "desc": "限速路牌醒目标注 'MAXIMUM'（区别于美国的 SPEED LIMIT）；魁北克省停止牌写 'ARRÊT'；电话号码格式为 10 位；北部地区与育空保留了大量一代低画质街景；绿底高速公路路牌与北美木质电线杆。",
      "tags": [],
      "descZh": "限速路牌醒目标注 'MAXIMUM'（区别于美国的 SPEED LIMIT）；魁北克省停止牌写 'ARRÊT'；电话号码格式为 10 位；北部地区与育空保留了大量一代低画质街景；绿底高速公路路牌与北美木质电线杆。",
      "descEn": "Speed limit signs display 'MAXIMUM' (unlike US 'SPEED LIMIT'); Quebec uses 'ARRÊT' stop signs; 10-digit phone format; Gen 1 low-res coverage preserved across parts of Yukon and northern territories; green highway shields and North American wooden poles.",
      "tagsZh": [],
      "tagsEn": []
    },
    {
      "id": "chile",
      "nameEn": "Chile",
      "nameZh": "智利",
      "continentEn": "South America",
      "continentZh": "南美洲",
      "flag": "🇨🇱",
      "link": "",
      "desc": "南美洲唯一中线与边线全为纯白色的国家；混凝土电线杆镂空长空格（空格间距较大），底部涂刷一圈白漆加一圈红漆；金属交通标志杆上有小凹槽；国土南北跨度极大，从北部的阿塔卡马极端沙漠到南部的巴塔哥尼亚温带雨林峡湾。",
      "tags": [
        "电线杆 / Pole",
        "道路标线 / Lines"
      ],
      "descZh": "南美洲唯一中线与边线全为纯白色的国家；混凝土电线杆镂空长空格（空格间距较大），底部涂刷一圈白漆加一圈红漆；金属交通标志杆上有小凹槽；国土南北跨度极大，从北部的阿塔卡马极端沙漠到南部的巴塔哥尼亚温带雨林峡湾。",
      "descEn": "The only South American country using all-white road markings (white center and white edge lines); concrete ladder poles with wide rung spacings, often painted with red and white bands at the base; fluted signposts with grooved channels; extreme north-south biome variation from hyper-arid Atacama desert to sub-Antarctic fjords.",
      "tagsZh": [
        "电线杆",
        "道路标线"
      ],
      "tagsEn": [
        "Utility Poles",
        "Road Markings"
      ]
    },
    {
      "id": "colombia",
      "nameEn": "Colombia",
      "nameZh": "哥伦比亚",
      "continentEn": "South America",
      "continentZh": "南美洲",
      "flag": "🇨🇴",
      "link": "",
      "desc": "普通民用车辆统一悬挂明亮的全黄色短车牌；路牌背面焊有独特的十字形固定铁架（Colombian Cross）；常有八边形截面水泥电线杆；里程碑标有 'PR' 标识；电线杆底部刷有一段黑黄相间反光漆（但不触及地面）；中北部乡村道路常见两条平行的水泥车辙轨，两侧填充鹅卵石。",
      "tags": [
        "车牌 / Plate",
        "电线杆 / Pole"
      ],
      "descZh": "普通私家车及出租车全量统一使用黄色车牌；路牌背面装有独特的钢制十字形支撑架（Colombian Cross）；常使用八边形混凝土电线杆；里程牌顶部标注 PR；电线杆常涂刷黄黑条纹且离地面有悬空不接触地面；木栅栏顶端涂成纯白色；城市道路常采用 Carrera/Calle + 数字网格命名；中北部山路常见两条平行的混凝土车辙带，中间与外侧填充鹅卵石/块石。",
      "descEn": "All standard passenger cars and taxis uniformly display yellow license plates; road signs reinforced by an iconic steel cross bracket on the back (Colombian Cross); widespread octagonal concrete utility poles; milestone markers labeled with 'PR'; poles painted with yellow-and-black bands that do NOT touch the ground; wooden fence posts painted white on top; Carrera/Calle street numbering; north-central mountain roads often feature twin concrete tracks filled with cobblestones.",
      "tagsZh": [
        "车牌特征",
        "电线杆"
      ],
      "tagsEn": [
        "License Plates",
        "Utility Poles"
      ]
    },
    {
      "id": "costa-rica",
      "nameEn": "Costa Rica",
      "nameZh": "哥斯达黎加",
      "continentEn": "North America",
      "continentZh": "北美洲",
      "flag": "🇨🇷",
      "link": "",
      "desc": "2024 年更新大面积四代街景；街景车为白色皮卡带有黑色车顶架；电线杆上变压器极其密集，横木丰富，常贴有黄色小标签；缺乏正式门牌号码体系，路牌常写“距某教堂/地标多少米”；热带雨林火山地貌。",
      "tags": [
        "电线杆 / Pole",
        "街景车 / Car Meta"
      ],
      "descZh": "2024 年更新大面积四代街景；街景车为白色皮卡带有黑色车顶架；电线杆上变压器极其密集，横木丰富，常贴有黄色小标签；缺乏正式门牌号码体系，路牌常写“距某教堂/地标多少米”；热带雨林火山地貌。",
      "descEn": "Major Gen 4 coverage rollout in 2024; white pickup truck camera car with black roof racks; utility poles heavily stacked with transformers and multi-tier wooden crossarms, often carrying yellow tags; lack of formal house numbering (addresses given as distance to landmarks); lush tropical volcanic hills.",
      "tagsZh": [
        "电线杆",
        "街景车"
      ],
      "tagsEn": [
        "Utility Poles",
        "Camera Car"
      ]
    },
    {
      "id": "christmas-island",
      "nameEn": "Christmas Island",
      "nameZh": "圣诞岛",
      "continentEn": "Other",
      "continentZh": "其他",
      "flag": "🌍",
      "link": "",
      "desc": "澳大利亚印度洋外部领地；道路两旁随处可见保护红蟹大迁徙的金属围挡及红蟹警示牌；热带季风雨林中蜿蜒的单车道水泥或柏油小路。",
      "tags": [],
      "descZh": "澳大利亚印度洋外部领地；道路两旁随处可见保护红蟹大迁徙的金属围挡及红蟹警示牌；热带季风雨林中蜿蜒的单车道水泥或柏油小路。",
      "descEn": "Australian Indian Ocean territory; ubiquitous roadside metal crab drift barriers and red crab migration warning signs; narrow asphalt tracks meandering through dense tropical monsoon forest.",
      "tagsZh": [],
      "tagsEn": []
    },
    {
      "id": "croatia",
      "nameEn": "Croatia",
      "nameZh": "克罗地亚",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇭🇷",
      "link": "",
      "desc": "车辆后窗或尾部有时能看到 'HR' 国别椭圆贴纸；路缘标顶部为黑色斜切，内部带有垂直白色反光片；亚得里亚海沿岸有极其壮丽的石灰岩喀斯特海岸线与地中海松林。",
      "tags": [
        "路缘标 / Bollard"
      ],
      "descZh": "车辆后窗或尾部有时能看到 'HR' 国别椭圆贴纸；路缘标顶部为黑色斜切，内部带有垂直白色反光片；亚得里亚海沿岸有极其壮丽的石灰岩喀斯特海岸线与地中海松林。",
      "descEn": "Occasional 'HR' oval country sticker; bollards feature black slanted tops with vertical white rectangular reflectors; spectacular Dalmatian limestone karst coastline along the turquoise Adriatic Sea with Mediterranean cypress and stone walls.",
      "tagsZh": [
        "路缘标"
      ],
      "tagsEn": [
        "Bollards"
      ]
    },
    {
      "id": "czechia",
      "nameEn": "Czechia",
      "nameZh": "捷克",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇨🇿",
      "link": "",
      "desc": "捷克语包含特有重音字母 ř 和 ů；门牌号多为红底白字或蓝底白字长方形；路灯柱底部有明显的加粗圆座；电线杆采用双圆杆倒三角形结构（通常两根连体）；路缘标带有两块并排的橙色反光方块。",
      "tags": [
        "电线杆 / Pole",
        "路缘标 / Bollard",
        "语言 / Script"
      ],
      "descZh": "捷克语包含特有重音字母 ř 和 ů；门牌号多为红底白字或蓝底白字长方形；路灯柱底部有明显的加粗圆座；电线杆采用双圆杆倒三角形结构（通常两根连体）；路缘标带有两块并排的橙色反光方块。",
      "descEn": "Czech language contains unique letters 'ř' and 'ů'; house numbers in rectangular red or blue plates with white digits; streetlight bases distinctly thicker at the bottom; utility poles feature twin rounded concrete posts joined in an inverted triangle; bollards have two orange rectangular reflectors.",
      "tagsZh": [
        "电线杆",
        "路缘标",
        "语言文字"
      ],
      "tagsEn": [
        "Utility Poles",
        "Bollards",
        "Language & Script"
      ]
    },
    {
      "id": "denmark",
      "nameEn": "Denmark",
      "nameZh": "丹麦",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇩🇰",
      "link": "",
      "desc": "丹麦语特有字母 Æ/æ 和 Ø/ø，路名普遍以 'vej' 结尾；路牌带有细金属边框，字体为类似 Roboto Mono 的工整无衬线体；路缘标反光块为黄色梯形；道路两侧常有密集的白色短虚线（自行车道分界）。",
      "tags": [
        "路缘标 / Bollard",
        "语言 / Script"
      ],
      "descZh": "丹麦语特有字母 Æ/æ 和 Ø/ø，路名普遍以 'vej' 结尾；路牌带有细金属边框，字体为类似 Roboto Mono 的工整无衬线体；路缘标反光块为黄色梯形；道路两侧常有密集的白色短虚线（自行车道分界）。",
      "descEn": "Danish alphabet uses 'æ' and 'ø', with road names ending in 'vej'; street signs enclosed in thin metal frames with clean monospaced font; bollards feature yellow trapezoidal reflectors; dashed white edge lines indicating cycle lanes; perfectly flat rolling farmland with wind turbines.",
      "tagsZh": [
        "路缘标",
        "语言文字"
      ],
      "tagsEn": [
        "Bollards",
        "Language & Script"
      ]
    },
    {
      "id": "dominican-republic",
      "nameEn": "Dominican Republic",
      "nameZh": "多米尼加",
      "continentEn": "North America",
      "continentZh": "北美洲",
      "flag": "🇩🇴",
      "link": "",
      "desc": "街景车车顶行李架（Roof Bars）中间凹槽填有粗黑胶带条；热带加勒比风貌；使用黄色中线与美式路牌体系；路边小卖部多有 Presidente 啤酒招牌。",
      "tags": [
        "街景车 / Car Meta"
      ],
      "descZh": "街景车车顶行李架（Roof Bars）中间凹槽填有粗黑胶带条；热带加勒比风貌；使用黄色中线与美式路牌体系；路边小卖部多有 Presidente 啤酒招牌。",
      "descEn": "Camera car roof bars have thick black tape running along the center channel; Caribbean island scenery; yellow center lines and American-style road signs; widespread green Presidente beer signage on corner bodegas.",
      "tagsZh": [
        "街景车"
      ],
      "tagsEn": [
        "Camera Car"
      ]
    },
    {
      "id": "ecuador",
      "nameEn": "Ecuador",
      "nameZh": "厄瓜多尔",
      "continentEn": "South America",
      "continentZh": "南美洲",
      "flag": "🇪🇨",
      "link": "",
      "desc": "美洲唯一保留低分辨率 Shitcam 街景的国家（部分地区）；四代街景车为银白色皮卡带高位刹车灯及天线；普通民用车牌为纯白色，营运公共交通及出租车为明亮橙色车牌；双层波形护栏极其普遍；里程牌为绿底白字标有 'km'；城镇街道常铺设六边形混凝土联锁地砖。",
      "tags": [
        "车牌 / Plate",
        "路缘标 / Bollard",
        "街景车 / Car Meta"
      ],
      "descZh": "美洲唯一保留低分辨率 Shitcam 街景的国家（部分地区）；四代街景车为银白色皮卡带高位刹车灯及天线；普通民用车牌为纯白色，营运公共交通及出租车为明亮橙色车牌；双层波形护栏极其普遍；里程牌为绿底白字标有 'km'；城镇街道常铺设六边形混凝土联锁地砖。",
      "descEn": "The only country in the Americas retaining low-res Gen 2 Shitcam; Gen 4 vehicle is a silver/white pickup with high brake light; civilian plates are white while commercial/taxi plates are bright orange; double-height corrugated metal guardrails common; green milestone posts marked 'km'; hexagonal concrete paving tiles on urban streets.",
      "tagsZh": [
        "车牌特征",
        "路缘标",
        "街景车"
      ],
      "tagsEn": [
        "License Plates",
        "Bollards",
        "Camera Car"
      ]
    },
    {
      "id": "estonia",
      "nameEn": "Estonia",
      "nameZh": "爱沙尼亚",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇪🇪",
      "link": "",
      "desc": "爱沙尼亚语常用特有带波浪号元音 õ，街道后缀为 'tn' (tänav) 或 'tee'；电线杆呈三叉戟型，有木横木但水泥杆身上无任何钻孔；人行道告示牌上的小人有明显的细脖子；初夏路边开满盛大的白色野花丛；偶尔伴随微绿的天空偏色。",
      "tags": [
        "电线杆 / Pole",
        "语言 / Script"
      ],
      "descZh": "爱沙尼亚语常用特有带波浪号元音 õ，街道后缀为 'tn' (tänav) 或 'tee'；电线杆呈三叉戟型，有木横木但水泥杆身上无任何钻孔；人行道告示牌上的小人有明显的细脖子；初夏路边开满盛大的白色野花丛；偶尔伴随微绿的天空偏色。",
      "descEn": "Estonian language frequently uses 'õ', with streets ending in 'tn' or 'tee'; utility poles have trident-like wooden crossarms on hole-free solid concrete poles; pedestrian crossing figure has a distinct visible neck; roadsides blanketed with white cow parsley wildflowers in summer.",
      "tagsZh": [
        "电线杆",
        "语言文字"
      ],
      "tagsEn": [
        "Utility Poles",
        "Language & Script"
      ]
    },
    {
      "id": "eswatini",
      "nameEn": "Eswatini",
      "nameZh": "斯威士兰",
      "continentEn": "Other",
      "continentZh": "其他",
      "flag": "🌍",
      "link": "",
      "desc": "南部非洲左行小国内陆国；路边草地在旱季呈现纯正灿烂的金黄色；电线杆带木质 A 构架；起伏的草甸山丘与平顶金合欢树；车牌多为白底蓝字带国徽。",
      "tags": [],
      "descZh": "南部非洲左行小国内陆国；路边草地在旱季呈现纯正灿烂的金黄色；电线杆带木质 A 构架；起伏的草甸山丘与平顶金合欢树；车牌多为白底蓝字带国徽。",
      "descEn": "Landlocked Southern African country driving on the left; winter roadside grasslands glow in a distinctive bright golden hue; wooden A-frame utility poles; rolling grassy plateau terrain with scattered acacia trees.",
      "tagsZh": [],
      "tagsEn": []
    },
    {
      "id": "faroe-islands",
      "nameEn": "Faroe Islands",
      "nameZh": "法罗群岛",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇫🇴",
      "link": "",
      "desc": "北大西洋丹麦自治群岛；街景车车顶可见三根粗横杆；地貌为完全没有树木的苍翠陡峭玄武岩峡湾山峦，终年阴雨云雾缭绕；草皮屋顶传统房屋与黑漆木屋；黄色单线羊群警告牌。",
      "tags": [
        "街景车 / Car Meta"
      ],
      "descZh": "北大西洋丹麦自治群岛；街景车车顶可见三根粗横杆；地貌为完全没有树木的苍翠陡峭玄武岩峡湾山峦，终年阴雨云雾缭绕；草皮屋顶传统房屋与黑漆木屋；黄色单线羊群警告牌。",
      "descEn": "North Atlantic Danish archipelago; camera car roof shows three black horizontal roof bars; dramatic emerald-green, treeless volcanic slopes dropping directly into the ocean; turf-roofed cottages; yellow sheep warning signs.",
      "tagsZh": [
        "街景车"
      ],
      "tagsEn": [
        "Camera Car"
      ]
    },
    {
      "id": "finland",
      "nameEn": "Finland",
      "nameZh": "芬兰",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇫🇮",
      "link": "",
      "desc": "公路名称以 'tie' 结尾（双语西南沿海带可见 'vägen'）；道路边缘标线为实线；限速牌与警告牌采用醒目的黄色背景粗红边；Chevron 弯道标为黑底黄箭头；路灯常通过两枚铝制抱箍固定在柱顶；路旁密集出现 K-Market 和 S-Market 超市；红色法伦木屋与白桦针叶林。",
      "tags": [
        "道路标线 / Lines"
      ],
      "descZh": "公路名称以 'tie' 结尾（双语西南沿海带可见 'vägen'）；道路边缘标线为实线；限速牌与警告牌采用醒目的黄色背景粗红边；Chevron 弯道标为黑底黄箭头；路灯常通过两枚铝制抱箍固定在柱顶；路旁密集出现 K-Market 和 S-Market 超市；红色法伦木屋与白桦针叶林。",
      "descEn": "Road names end in 'tie' (Swedish bilingual areas use 'vägen'); continuous solid white road edge lines; warning and speed limit signs have bright yellow centers with red borders; black-and-yellow curve chevrons; twin aluminum brackets fastening streetlights atop wooden poles; K-Market and S-Market grocery chains; red Falun wooden cottages amidst endless birch and spruce forests.",
      "tagsZh": [
        "道路标线"
      ],
      "tagsEn": [
        "Road Markings"
      ]
    },
    {
      "id": "france",
      "nameEn": "France",
      "nameZh": "法国",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇫🇷",
      "link": "",
      "desc": "路缘标为光滑白色圆柱配红色（或反光白）环形凹槽包边；道路中心线为不对齐的短方块虚线（条纹比空隙长）；路肩外侧线为长虚线；三代街景车尾部带有长天线，四代带有短蓝天线；车牌左右两端皆有蓝色条带；黄色方形路编号牌前缀常为 'D'（省道）；蓝色搪瓷街道牌固定于建筑转角。",
      "tags": [
        "车牌 / Plate",
        "电线杆 / Pole",
        "路缘标 / Bollard",
        "街景车 / Car Meta",
        "道路标线 / Lines"
      ],
      "descZh": "路缘标为光滑白色圆柱配红色（或反光白）环形凹槽包边；道路中心线为不对齐的短方块虚线（条纹比空隙长）；路肩外侧线为长虚线；三代街景车尾部带有长天线，四代带有短蓝天线；车牌左右两端皆有蓝色条带；黄色方形路编号牌前缀常为 'D'（省道）；蓝色搪瓷街道牌固定于建筑转角。",
      "descEn": "Bollards are rounded white cylindrical posts with a recessed red reflector ring; center lines feature short, closely spaced dashed blocks (T1 marking); dashed line road shoulders; Gen 3 car features a long antenna at the back; European plates have dual blue bands on both left and right; yellow road number shields prefixed with 'D' (Departmental routes); dark blue street plaques fixed to building corners.",
      "tagsZh": [
        "车牌特征",
        "电线杆",
        "路缘标",
        "街景车",
        "道路标线"
      ],
      "tagsEn": [
        "License Plates",
        "Utility Poles",
        "Bollards",
        "Camera Car",
        "Road Markings"
      ]
    },
    {
      "id": "georgia",
      "nameEn": "Georgia",
      "nameZh": "格鲁吉亚",
      "continentEn": "Other",
      "continentZh": "其他",
      "flag": "🌍",
      "link": "",
      "desc": "独一无二的格鲁吉亚圆形字母（mkhedruli）；空中随处可见架设的黄色或银色民用天然气管道；方形水泥电线杆配蜡烛状圆立绝缘子；红底白箭头方形 Chevron；平缓的积雪高加索山脉；第比利斯多见黑色皮卡街景车，东部为带长天线的小车，西部为无天线小车。",
      "tags": [
        "车牌 / Plate",
        "电线杆 / Pole",
        "街景车 / Car Meta",
        "语言 / Script"
      ],
      "descZh": "格鲁吉亚圆形字母（Mkhedruli）；空中随处可见架设的民用天然气管道；方形水泥电线杆配蜡烛状圆立绝缘子；圆白杆带蓝绿条光纤桩；红底白箭头方形 Chevron；平缓雪山在中南部；偶见类似菲律宾的水泥路；六大街景车绝杀：(a) Small Cam 右前方竖长天线顶端有小白点（东部）；(b) Small Cam 无天线（西部）；(c) 黑色卡车右前方竖长天线带红色刹车灯（首都第比利斯）；(d) 短天线偏向左（西部沿海或西北山区）；(e) 仅见黑色皮卡后部（中部横向一线）；(f) 黑色皮卡几乎完全可见短天线偏左（各大城市附近）。",
      "descEn": "Unique Georgian Mkhedruli script; ubiquitous elevated overhead natural gas pipelines; square concrete poles with candle-like upright insulators; round white marker posts with blue/green optical fiber bands; square red-and-white chevrons; rolling snow mountains in south-central; occasional Philippine-like concrete roads. Six camera car metas: (a) Small Cam with right-front tall antenna and white tip (East); (b) Small Cam without antenna (West); (c) Black truck with right-front antenna and red brake lights (Tbilisi); (d) Short left-tilted antenna (West coast/NW mountains); (e) Black pickup rear only (Central corridor); (f) Full black pickup with short left antenna (major cities).",
      "tagsZh": [
        "车牌特征",
        "电线杆",
        "街景车",
        "语言文字",
        "街景车 Meta"
      ],
      "tagsEn": [
        "License Plates",
        "Utility Poles",
        "Camera Car",
        "Language & Script",
        "Camera Metas"
      ]
    },
    {
      "id": "germany",
      "nameEn": "Germany",
      "nameZh": "德国",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇩🇪",
      "link": "",
      "desc": "路缘标数量极多，上方反光条通常由两枚垂直圆孔（如双铆钉）固定；路名牌多为白底黑边长方形衬线字体；标志背面为深灰色贴有质检标签；前挡风玻璃右下角贴有圆形绿色环保排气贴纸 (Umweltplakette)；公交车站为黄色圆牌绿 'H'；黄色德国邮政邮箱；大面积模糊马赛克房屋以保护隐私。",
      "tags": [
        "电线杆 / Pole",
        "路缘标 / Bollard"
      ],
      "descZh": "路缘标反光板通常由两个垂直排列的小圆孔（如铆钉）固定；路牌通常为白底黑边长方形，背面为灰黑色且常贴贴纸；木质电线杆上常有白色正方形贴纸；挡风玻璃角常贴圆形环保排放贴纸；公交车站牌标志为黄底绿字圆形 H 标；黄色特殊邮筒；城镇入口标志为黄底黑字金属框；圆角蓝方块白字里程碑；禁停标志带白色指向箭头；因严格隐私法规街景多打码模糊。",
      "descEn": "Bollard reflectors secured by two vertically aligned circular holes/rivets; rectangular white road signs with thin black borders, dark grey backing often with stickers; wooden poles feature white square stickers; windshields bear round environmental emission badges; bus stops marked by yellow circles with green 'H'; iconic yellow mailboxes; town entrance signs feature yellow background with black letters; rounded blue milestone squares; No Parking signs with white arrows; heavy street view blur due to privacy laws.",
      "tagsZh": [
        "电线杆",
        "路缘标"
      ],
      "tagsEn": [
        "Utility Poles",
        "Bollards"
      ]
    },
    {
      "id": "ghana",
      "nameEn": "Ghana",
      "nameZh": "加纳",
      "continentEn": "Africa",
      "continentZh": "非洲",
      "flag": "🇬🇭",
      "link": "",
      "desc": "街景车四根车顶架立柱中，右前方的立柱上缠绕有一圈显眼的黑色胶带；许多路边摊与建筑涂有红、黄、绿三色国旗条纹；热带红土道路与茂盛棕榈；民宅屋顶多为五脊歇山铁皮顶。",
      "tags": [
        "街景车 / Car Meta",
        "红土 / Red Soil"
      ],
      "descZh": "街景车四根车顶架立柱中，右前方的立柱上缠绕有一圈显眼的黑色胶带；许多路边摊与建筑涂有红、黄、绿三色国旗条纹；热带红土道路与茂盛棕榈；民宅屋顶多为五脊歇山铁皮顶。",
      "descEn": "Front-right roof bar of the camera car is wrapped with conspicuous black tape; widespread buildings and curbs painted in national red-yellow-green tri-color; red laterite dirt roads; five-ridge hip corrugated metal rooftops.",
      "tagsZh": [
        "街景车",
        "红土壤"
      ],
      "tagsEn": [
        "Camera Car",
        "Red Soil"
      ]
    },
    {
      "id": "gibraltar",
      "nameEn": "Gibraltar",
      "nameZh": "直布罗陀",
      "continentEn": "Other",
      "continentZh": "其他",
      "flag": "🌍",
      "link": "",
      "desc": "英国海外领地；车辆靠右侧行驶；直布罗陀巨岩（Rock of Gibraltar）在视线中巍然耸立；英式红黄色车牌与双黄线路沿标线；英式红色邮筒与电话亭。",
      "tags": [
        "街景车 / Car Meta"
      ],
      "descZh": "英国海外领地；车辆靠右侧行驶；直布罗陀巨岩（Rock of Gibraltar）在视线中巍然耸立；英式红黄色车牌与双黄线路沿标线；英式红色邮筒与电话亭。",
      "descEn": "British Overseas Territory; drives on the right; the colossal limestone Rock of Gibraltar towers over the urban vista; British-style front-white, rear-yellow plates; double-yellow curb lines; red British postboxes and telephone booths.",
      "tagsZh": [
        "街景车"
      ],
      "tagsEn": [
        "Camera Car"
      ]
    },
    {
      "id": "greece",
      "nameEn": "Greece",
      "nameZh": "希腊",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇬🇷",
      "link": "",
      "desc": "使用独特的希腊字母（Ω, Ψ, Ξ, Δ, Λ 等）；木制电线杆高大且常挂有多达 5 到 8 个陶瓷绝缘子；道路中央极常出现双白实线；路缘标与意大利款式相似但略有不同；地中海石灰岩山地与橄榄树种植园；路边有纪念逝者的小神龛铁皮箱。",
      "tags": [
        "电线杆 / Pole",
        "路缘标 / Bollard",
        "道路标线 / Lines",
        "语言 / Script"
      ],
      "descZh": "使用独特的希腊字母（Ω, Ψ, Ξ, Δ, Λ 等）；木制电线杆高大且常挂有多达 5 到 8 个陶瓷绝缘子；道路中央极常出现双白实线；路缘标与意大利款式相似但略有不同；地中海石灰岩山地与橄榄树种植园；路边有纪念逝者的小神龛铁皮箱。",
      "descEn": "Distinctive Greek alphabet (Ω, Ψ, Ξ, Δ, Λ); tall wooden utility poles frequently fitted with five or more tiered ceramic insulators; double solid white center lines; Mediterranean arid limestone topography with olive groves; small roadside memorial shrines (Kandylakia) on poles.",
      "tagsZh": [
        "电线杆",
        "路缘标",
        "道路标线",
        "语言文字"
      ],
      "tagsEn": [
        "Utility Poles",
        "Bollards",
        "Road Markings",
        "Language & Script"
      ]
    },
    {
      "id": "guam",
      "nameEn": "Guam",
      "nameZh": "关岛",
      "continentEn": "Oceania",
      "continentZh": "大洋洲",
      "flag": "🇬🇺",
      "link": "",
      "desc": "美国太平洋属地；车辆靠右行驶；采用全套美国标准黄色道路中线与英文绿底路牌，但周围是纯正的热带太平洋密克罗尼西亚雨林植被；随处可见圆柱形水泥电线杆及美国皮卡。",
      "tags": [
        "道路标线 / Lines"
      ],
      "descZh": "美国太平洋属地；车辆靠右行驶；采用全套美国标准黄色道路中线与英文绿底路牌，但周围是纯正的热带太平洋密克罗尼西亚雨林植被；随处可见圆柱形水泥电线杆及美国皮卡。",
      "descEn": "US Pacific territory; drives on the right; standard American yellow center lines and green road signs contrasting against dense Micronesian tropical jungle; stout round concrete utility poles and American pickup trucks.",
      "tagsZh": [
        "道路标线"
      ],
      "tagsEn": [
        "Road Markings"
      ]
    },
    {
      "id": "guatemala",
      "nameEn": "Guatemala",
      "nameZh": "危地马拉",
      "continentEn": "North America",
      "continentZh": "北美洲",
      "flag": "🇬🇹",
      "link": "",
      "desc": "街景车可清晰见到后视镜及整个银色车顶行李架（Roof Bars）；停止牌标注西语 'ALTO'；电线杆下半截常被当地政客涂刷上蓝白、红白等彩色竞选涂漆；起伏的火山高地与红色三轮突突车 (Tuk-tuk)。",
      "tags": [
        "街景车 / Car Meta"
      ],
      "descZh": "街景车可清晰见到后视镜及整个银色车顶行李架（Roof Bars）；停止牌标注西语 'ALTO'；电线杆下半截常被当地政客涂刷上蓝白、红白等彩色竞选涂漆；起伏的火山高地与红色三轮突突车 (Tuk-tuk)。",
      "descEn": "Visible roof bars and car mirrors on the camera car; 'ALTO' octagonal stop signs; utility pole bases painted in vibrant partisan political colors (blue/white, green/white); rugged volcanic highlands with red three-wheeled mototaxis (Tuk-tuks).",
      "tagsZh": [
        "街景车"
      ],
      "tagsEn": [
        "Camera Car"
      ]
    },
    {
      "id": "hungary",
      "nameEn": "Hungary",
      "nameZh": "匈牙利",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇭🇺",
      "link": "",
      "desc": "混凝土电线杆通体带有长方形通孔（从最底层一直通到顶部，区别于波兰）；语言中包含独特的双锐音符 ő 和 ű；街道名称后缀为 'utca' 或 'út'；属于红底白箭头 Chevron “AH UBER” 国家；绿底反光公路里程牌。",
      "tags": [
        "电线杆 / Pole",
        "语言 / Script"
      ],
      "descZh": "混凝土电线杆通体带有长方形通孔（从最底层一直通到顶部，区别于波兰）；语言中包含独特的双锐音符 ő 和 ű；街道名称后缀为 'utca' 或 'út'；属于红底白箭头 Chevron “AH UBER” 国家；绿底反光公路里程牌。",
      "descEn": "Concrete utility poles feature hollow rectangular rungs from bottom to top (unlike Poland's solid base); Hungarian language uses unique double acute accents 'ő' and 'ű'; street suffix 'utca' or 'út'; red-and-white curve chevrons; green highway milestone boards.",
      "tagsZh": [
        "电线杆",
        "语言文字"
      ],
      "tagsEn": [
        "Utility Poles",
        "Language & Script"
      ]
    },
    {
      "id": "iceland",
      "nameEn": "Iceland",
      "nameZh": "冰岛",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇮🇸",
      "link": "",
      "desc": "路缘标为亮丽的纯明黄色柱子；限速标志采用黄色底色；冰岛语特有字母 ð 和 þ；地貌极度辽阔荒凉，完全没有高大树木，到处是苔原、黑色火山熔岩与积雪火山；人行横道标牌为蓝底黄色三角形底纹。",
      "tags": [
        "路缘标 / Bollard",
        "语言 / Script"
      ],
      "descZh": "路缘标为亮丽的纯明黄色柱子；限速标志采用黄色底色；冰岛语特有字母 ð 和 þ；地貌极度辽阔荒凉，完全没有高大树木，到处是苔原、黑色火山熔岩与积雪火山；人行横道标牌为蓝底黄色三角形底纹。",
      "descEn": "Bright canary-yellow rectangular bollards; speed limit signs have bright yellow backing; Icelandic letters 'ð' and 'þ'; vast treeless arctic landscape dominated by black basalt lava fields, mossy tundra, and glacial peaks; yellow triangle backing on pedestrian crossing signs.",
      "tagsZh": [
        "路缘标",
        "语言文字"
      ],
      "tagsEn": [
        "Bollards",
        "Language & Script"
      ]
    },
    {
      "id": "india",
      "nameEn": "India",
      "nameZh": "印度",
      "continentEn": "Asia",
      "continentZh": "亚洲",
      "flag": "🇮🇳",
      "link": "",
      "desc": "车辆靠左侧行驶；大部分地区仍保留一代低清晰度镜头 (Crap Cam)；印地语等天城文字母顶部有笔直平整的贯穿横线；街头随处可见黄绿相间机动三轮车、身披沙丽的行人及圣牛。",
      "tags": [
        "左行 / LHD",
        "语言 / Script"
      ],
      "descZh": "车辆靠左侧行驶；大部分地区仍保留一代低清晰度镜头 (Crap Cam)；印地语等天城文字母顶部有笔直平整的贯穿横线；街头随处可见黄绿相间机动三轮车、身披沙丽的行人及圣牛。",
      "descEn": "Left-hand drive; extensive low-resolution Gen 1/2 camera coverage across many secondary routes; Devanagari script with a continuous horizontal headline; yellow-and-green auto-rickshaws, sari-clad pedestrians, and wandering cattle.",
      "tagsZh": [
        "左侧行驶",
        "语言文字"
      ],
      "tagsEn": [
        "Left-Hand Drive",
        "Language & Script"
      ]
    },
    {
      "id": "indonesia",
      "nameEn": "Indonesia",
      "nameZh": "印度尼西亚",
      "continentEn": "Asia",
      "continentZh": "亚洲",
      "flag": "🇮🇩",
      "link": "",
      "desc": "车辆靠左侧行驶；机动车必须悬挂黑色底白字车牌（白字分为三组数字字母）；摩托车前车头也必须挂牌；街道简称为 'Jl.' (Jalan) 或 'Gg.' (Gang)；电线杆多为带凹坑冲压孔的方形混凝土柱；印尼语词尾极高频出现 '-kan'，元音 'a' 密度极高。",
      "tags": [
        "左行 / LHD",
        "车牌 / Plate",
        "电线杆 / Pole",
        "语言 / Script"
      ],
      "descZh": "车辆靠左侧行驶；机动车必须悬挂黑色底白字车牌（白字分为三组数字字母）；摩托车前车头也必须挂牌；街道简称为 'Jl.' (Jalan) 或 'Gg.' (Gang)；电线杆多为带凹坑冲压孔的方形混凝土柱；印尼语词尾极高频出现 '-kan'，元音 'a' 密度极高。",
      "descEn": "Left-hand drive; black license plates with white lettering divided into three segments (motorcycles carry front plates too); street names prefixed with 'Jl.' (Jalan) or 'Gg.' (Gang); square concrete poles with recessed dimples; Indonesian language with high frequency of vowel 'a' and suffixes '-kan' / '-an'.",
      "tagsZh": [
        "左侧行驶",
        "车牌特征",
        "电线杆",
        "语言文字"
      ],
      "tagsEn": [
        "Left-Hand Drive",
        "License Plates",
        "Utility Poles",
        "Language & Script"
      ]
    },
    {
      "id": "ireland",
      "nameEn": "Ireland",
      "nameZh": "爱尔兰",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇮🇪",
      "link": "",
      "desc": "车辆靠左行驶；道路外侧边线通常为黄色虚线，中央为白色虚线；路牌普遍采用英爱双语（爱尔兰语采用黄色斜体小写）；欧洲唯一的黄色菱形转向警告牌；电线杆上的高压危险警告图标里只有闪电而没有被击倒的小人；农场铁丝网大门转角为圆弧形弯管；路缘标顶部带有绿色反光片。",
      "tags": [
        "左行 / LHD",
        "电线杆 / Pole",
        "路缘标 / Bollard",
        "道路标线 / Lines"
      ],
      "descZh": "车辆靠左行驶；道路外侧边线通常为黄色虚线，中央为白色虚线；路牌普遍采用英爱双语（爱尔兰语采用黄色斜体小写）；欧洲唯一的黄色菱形转向警告牌；电线杆上的高压危险警告图标里只有闪电而没有被击倒的小人；农场铁丝网大门转角为圆弧形弯管；路缘标顶部带有绿色反光片。",
      "descEn": "Left-hand drive; yellow dashed outer road edge lines; bilingual signs with Irish Gaelic in yellow italics above English in white; European outlier using diamond yellow warning signs; electric hazard signs on poles feature lightning bolt only (no falling man); rounded tubular metal farm gates; bollards often have green reflectors.",
      "tagsZh": [
        "左侧行驶",
        "电线杆",
        "路缘标",
        "道路标线"
      ],
      "tagsEn": [
        "Left-Hand Drive",
        "Utility Poles",
        "Bollards",
        "Road Markings"
      ]
    },
    {
      "id": "israel",
      "nameEn": "Israel",
      "nameZh": "以色列",
      "continentEn": "Asia",
      "continentZh": "亚洲",
      "flag": "🇮🇱",
      "link": "",
      "desc": "车辆普通车牌为亮黄色，左侧带有蓝色欧盟式样条带；道路边线为连续黄色实线，中线为白色线；随处可见希伯来文字符；中东地中海沿岸现代化高楼与沙漠交替。",
      "tags": [
        "车牌 / Plate",
        "道路标线 / Lines"
      ],
      "descZh": "车辆普通车牌为亮黄色，左侧带有蓝色欧盟式样条带；道路边线为连续黄色实线，中线为白色线；随处可见希伯来文字符；中东地中海沿岸现代化高楼与沙漠交替。",
      "descEn": "Vehicles display bright yellow license plates with a blue left band; solid yellow road edge lines with white center lines; modern Hebrew script; Mediterranean high-rises and arid Judean/Negev desert terrain.",
      "tagsZh": [
        "车牌特征",
        "道路标线"
      ],
      "tagsEn": [
        "License Plates",
        "Road Markings"
      ]
    },
    {
      "id": "italy",
      "nameEn": "Italy",
      "nameZh": "意大利",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇮🇹",
      "link": "",
      "desc": "车辆前车牌格外短小，且车牌左右两端皆有蓝色条带；路缘标顶部黑色帽子部分直接延伸至最顶端；混凝土电线杆为光滑圆柱体，顶部常为向上展开的三叉戟金属支架；里程碑标有罗马数字；公路外侧多为双层镀锌护栏，末端向上翘起变粗。",
      "tags": [
        "车牌 / Plate",
        "电线杆 / Pole",
        "路缘标 / Bollard"
      ],
      "descZh": "车辆前车牌格外短小，且车牌左右两端皆有蓝色条带；路缘标顶部黑色帽子部分直接延伸至最顶端；混凝土电线杆为光滑圆柱体，顶部常为向上展开的三叉戟金属支架；里程碑标有罗马数字；公路外侧多为双层镀锌护栏，末端向上翘起变粗。",
      "descEn": "Front license plates are uniquely short, featuring blue stripes on both left and right; bollards have black caps covering the very top edge; smooth round concrete poles topped with trident-like metal armatures; milestone posts marked with Roman numerals; double-tier highway guardrails with flared bulbous ends.",
      "tagsZh": [
        "车牌特征",
        "电线杆",
        "路缘标"
      ],
      "tagsEn": [
        "License Plates",
        "Utility Poles",
        "Bollards"
      ]
    },
    {
      "id": "isle-of-man",
      "nameEn": "Isle of Man",
      "nameZh": "马恩岛",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇮🇲",
      "link": "",
      "desc": "英国王室属地；全岛几乎全部为二代低画质街景；车辆左侧行驶；车牌左侧带有独特的红色条纹（带三曲腿图徽）；丘陵起伏的海岛农场与石墙。",
      "tags": [
        "车牌 / Plate"
      ],
      "descZh": "英国王室属地；全岛几乎全部为二代低画质街景；车辆左侧行驶；车牌左侧带有独特的红色条纹（带三曲腿图徽）；丘陵起伏的海岛农场与石墙。",
      "descEn": "British Crown Dependency; covered almost entirely in Gen 2 camera; left-hand drive; license plates feature a red band on the left with the Isle of Man triskelion emblem; coastal rolling hills and stone pastures.",
      "tagsZh": [
        "车牌特征"
      ],
      "tagsEn": [
        "License Plates"
      ]
    },
    {
      "id": "japan",
      "nameEn": "Japan",
      "nameZh": "日本",
      "continentEn": "Asia",
      "continentZh": "亚洲",
      "flag": "🇯🇵",
      "link": "",
      "desc": "车辆靠左侧行驶；街景相机高度明显低于普通汽车 (Lowcam)，车身周围有一圈紧凑的大模糊圆盘；电线杆上变压器极其沉重且电线网密布，柱身缠绕黄黑螺旋反光带；电线杆与路口挂有长条垂直书写的汉字街区牌；车牌分为白底（普通车）和黄底（轻型 K-Car）。",
      "tags": [
        "左行 / LHD",
        "电线杆 / Pole"
      ],
      "descZh": "车辆靠左侧行驶；街景相机高度明显低于普通汽车 (Lowcam)，车身周围有一圈紧凑的大模糊圆盘；电线杆上变压器极其沉重且电线网密布，柱身缠绕黄黑螺旋反光带；电线杆与路口挂有长条垂直书写的汉字街区牌；车牌分为白底（普通车）和黄底（轻型 K-Car）。",
      "descEn": "Left-hand drive; low camera height (Lowcam) with a large circular blur circle underneath; utility poles clustered with heavy transformers and intricate overhead wires, wrapped in spiral yellow-and-black reflective sheets; vertical narrow address plaques mounted on poles; white plates for regular cars, yellow plates for Kei cars.",
      "tagsZh": [
        "左侧行驶",
        "电线杆"
      ],
      "tagsEn": [
        "Left-Hand Drive",
        "Utility Poles"
      ]
    },
    {
      "id": "jordan",
      "nameEn": "Jordan",
      "nameZh": "约旦",
      "continentEn": "Asia",
      "continentZh": "亚洲",
      "flag": "🇯🇴",
      "link": "",
      "desc": "道路外侧边线通常为黄色，中心线为白色虚线；街景车为黑色汽车且没有任何天线；干旱贫瘠的沙漠丘陵、米色方块水泥住宅，阿拉伯语路牌。",
      "tags": [
        "街景车 / Car Meta"
      ],
      "descZh": "道路外侧边线通常为黄色，中心线为白色虚线；街景车为黑色汽车且没有任何天线；干旱贫瘠的沙漠丘陵、米色方块水泥住宅，阿拉伯语路牌。",
      "descEn": "Roads feature yellow edge markings with white dashed center lines; camera car is clean black without antennas; arid limestone desert hills and sandy square cubical masonry buildings; Arabic bilingual signs.",
      "tagsZh": [
        "街景车"
      ],
      "tagsEn": [
        "Camera Car"
      ]
    },
    {
      "id": "kazakhstan",
      "nameEn": "Kazakhstan",
      "nameZh": "哈萨克斯坦",
      "continentEn": "Asia",
      "continentZh": "亚洲",
      "flag": "🇰🇿",
      "link": "",
      "desc": "街景车为一辆极其巨大的白色改装皮卡/卡车，后斗明显露在画面下方；城市街道多以 'st.' 或 'ulitsa' 标牌结尾；辽阔无垠的哈萨克干草原（荒漠草原）；车牌左上角带有极淡的小绿条与国旗；路旁树干下半截普遍刷有雪白石灰漆；方形水泥打孔电线杆。",
      "tags": [
        "车牌 / Plate",
        "电线杆 / Pole",
        "街景车 / Car Meta"
      ],
      "descZh": "街景车为一辆极其巨大的白色改装皮卡/卡车，后斗明显露在画面下方；城市街道多以 'st.' 或 'ulitsa' 标牌结尾；辽阔无垠的哈萨克干草原（荒漠草原）；车牌左上角带有极淡的小绿条与国旗；路旁树干下半截普遍刷有雪白石灰漆；方形水泥打孔电线杆。",
      "descEn": "Camera car is a conspicuous heavy white flatbed truck with visible rear bed; vast flat Eurasian steppe with sparse trees; license plates feature a small light-green flag patch in upper-left corner; tree trunks painted white at the base; square concrete poles with through-holes.",
      "tagsZh": [
        "车牌特征",
        "电线杆",
        "街景车"
      ],
      "tagsEn": [
        "License Plates",
        "Utility Poles",
        "Camera Car"
      ]
    },
    {
      "id": "kenya",
      "nameEn": "Kenya",
      "nameZh": "肯尼亚",
      "continentEn": "Africa",
      "continentZh": "非洲",
      "flag": "🇰🇪",
      "link": "",
      "desc": "车辆靠左行驶；街景车右前方立有一根粗大黑色的涉水喉 (Snorkel)；车牌采用英国标准（前白后黄）；典型的东非高原红土，伴随金合欢树平顶稀树草原。",
      "tags": [
        "左行 / LHD",
        "车牌 / Plate",
        "街景车 / Car Meta",
        "红土 / Red Soil"
      ],
      "descZh": "车辆靠左行驶；街景车右前方立有一根粗大黑色的涉水喉 (Snorkel)；车牌采用英国标准（前白后黄）；典型的东非高原红土，伴随金合欢树平顶稀树草原。",
      "descEn": "Left-hand drive; camera car features a prominent black engine snorkel mounted on the front-right hood; front-white and rear-yellow license plates; deep red African soil with flat-topped acacia savanna.",
      "tagsZh": [
        "左侧行驶",
        "车牌特征",
        "街景车",
        "红土壤"
      ],
      "tagsEn": [
        "Left-Hand Drive",
        "License Plates",
        "Camera Car",
        "Red Soil"
      ]
    },
    {
      "id": "kosovo",
      "nameEn": "Kosovo",
      "nameZh": "科索沃",
      "continentEn": "Other",
      "continentZh": "其他",
      "flag": "🌍",
      "link": "",
      "desc": "公路多使用 A 型波形护栏；深蓝色底白字街道牌标有 'R.' (Rruga) 或 'Ul.' (Ulica)；门牌为蓝底白框配大号白色数字；路缘标一部分类似塞尔维亚，一部分类似匈牙利；巴尔干群山环绕。",
      "tags": [],
      "descZh": "公路普遍安装 A 型波形护栏；路牌背面为深色；街道名牌为蓝底白字，常带有 R. (Rruga) 或 UL.；门牌号为深蓝底带白边框，上面印有超大白色数字；路缘柱有两种样式（一种类似塞尔维亚，另一种类似匈牙利圆形柱）；路边多战后重建红砖建筑。",
      "descEn": "Widespread A-profile highway guardrails; dark backs on road signs; blue street nameplates reading R. (Rruga) or Ul.; house numbers are deep blue with white border and oversized white digits; bollards resemble either Serbian or Hungarian styles; postwar red-brick housing.",
      "tagsZh": [],
      "tagsEn": []
    },
    {
      "id": "kyrgyzstan",
      "nameEn": "Kyrgyzstan",
      "nameZh": "吉尔吉斯斯坦",
      "continentEn": "Asia",
      "continentZh": "亚洲",
      "flag": "🇰🇬",
      "link": "",
      "desc": "街景车车顶行李架上安装有明显的金属横杆与外露框架；车牌左侧带有醒目的鲜红色竖条及国旗；地貌以巍峨雄伟的雪山冰川、高山草甸与天山松林为主。",
      "tags": [
        "车牌 / Plate",
        "街景车 / Car Meta"
      ],
      "descZh": "街景车车顶行李架上安装有明显的金属横杆与外露框架；车牌左侧带有醒目的鲜红色竖条及国旗；地貌以巍峨雄伟的雪山冰川、高山草甸与天山松林为主。",
      "descEn": "Roof racks with prominent tubular silver crossbars visible on camera car; license plates feature a distinct bright red vertical strip on the left with the national emblem; dramatic Tien Shan alpine scenery with snow-capped peaks and mountain yurts.",
      "tagsZh": [
        "车牌特征",
        "街景车"
      ],
      "tagsEn": [
        "License Plates",
        "Camera Car"
      ]
    },
    {
      "id": "laos",
      "nameEn": "Laos",
      "nameZh": "老挝",
      "continentEn": "Asia",
      "continentZh": "亚洲",
      "flag": "🇱🇦",
      "link": "",
      "desc": "普通机动车前车牌也采用鲜明黄色（东南亚唯一双黄长牌国）；老挝文比泰文更加圆润圆胖，缺少硬角；道路中心线多使用亮黄色线；广泛分布的湿热红土地貌与湄公河热带雨林。",
      "tags": [
        "车牌 / Plate",
        "红土 / Red Soil",
        "道路标线 / Lines"
      ],
      "descZh": "普通机动车前车牌也采用鲜明黄色（东南亚唯一双黄长牌国）；老挝文比泰文更加圆润圆胖，缺少硬角；道路中心线多使用亮黄色线；广泛分布的湿热红土地貌与湄公河热带雨林。",
      "descEn": "Civilian vehicles carry bright yellow license plates front and rear; Lao script is curvier, rounder, and softer than Thai without sharp angles; yellow road centerlines; red soil roads in tropical Mekong River valleys.",
      "tagsZh": [
        "车牌特征",
        "红土壤",
        "道路标线"
      ],
      "tagsEn": [
        "License Plates",
        "Red Soil",
        "Road Markings"
      ]
    },
    {
      "id": "latvia",
      "nameEn": "Latvia",
      "nameZh": "拉脱维亚",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇱🇻",
      "link": "",
      "desc": "电线杆上部装有上下交错排列的弧形金属绝缘挂钩（类似于保加利亚），但柱身通常没有横木；拉脱维亚语长元音上方带有长横音标（ā, ē, ī, ū）；人行横道指示牌上的黑色小人腿部极其修长；波罗的海沿岸针叶林与草甸。",
      "tags": [
        "电线杆 / Pole",
        "语言 / Script"
      ],
      "descZh": "电线杆上部装有上下交错排列的弧形金属绝缘挂钩（类似于保加利亚），但柱身通常没有横木；拉脱维亚语长元音上方带有长横音标（ā, ē, ī, ū）；人行横道指示牌上的黑色小人腿部极其修长；波罗的海沿岸针叶林与草甸。",
      "descEn": "Utility poles feature alternating curved metal insulator hooks mounted directly onto solid concrete posts (no crossarms); Latvian language uses macrons over long vowels (ā, ē, ī, ū); pedestrian crossing sign silhouette has disproportionately long legs; Baltic pine forests.",
      "tagsZh": [
        "电线杆",
        "语言文字"
      ],
      "tagsEn": [
        "Utility Poles",
        "Language & Script"
      ]
    },
    {
      "id": "lesotho",
      "nameEn": "Lesotho",
      "nameZh": "莱索托",
      "continentEn": "Africa",
      "continentZh": "非洲",
      "flag": "🇱🇸",
      "link": "",
      "desc": "车辆靠左行驶；全境海拔极高，拥有连绵起伏、几乎完全无树的秃石山脉与高寒荒原；传统圆顶石头草房（Mokhoro）与身披毛毯、头戴巴索托草帽的牧民。",
      "tags": [
        "左行 / LHD"
      ],
      "descZh": "车辆靠左行驶；全境海拔极高，拥有连绵起伏、几乎完全无树的秃石山脉与高寒荒原；传统圆顶石头草房（Mokhoro）与身披毛毯、头戴巴索托草帽的牧民。",
      "descEn": "Left-hand drive; extremely high altitude landlocked kingdom with endless treeless basalt peaks and alpine grasslands; traditional circular stone thatch huts (Rondavels) and shepherds wrapped in colorful Basotho wool blankets.",
      "tagsZh": [
        "左侧行驶"
      ],
      "tagsEn": [
        "Left-Hand Drive"
      ]
    },
    {
      "id": "lithuania",
      "nameEn": "Lithuania",
      "nameZh": "立陶宛",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇱🇹",
      "link": "",
      "desc": "街道名称简写为 'G.' (Gatvė)；电线杆上带有短木横木，且水泥杆身中部带有一条长方形狭长开孔；立陶宛语特有顶部带点的字母 'ė'，以及下带鼻音钩的字母 'ą, ę, į, ų'；平坦东欧平原与白桦林。",
      "tags": [
        "电线杆 / Pole",
        "语言 / Script"
      ],
      "descZh": "街道名称简写为 'G.' (Gatvė)；电线杆上带有短木横木，且水泥杆身中部带有一条长方形狭长开孔；立陶宛语特有顶部带点的字母 'ė'，以及下带鼻音钩的字母 'ą, ę, į, ų'；平坦东欧平原与白桦林。",
      "descEn": "Street signs abbreviated with 'G.' (Gatvė); concrete utility poles feature short wooden crossarms and long narrow vertical rectangular slots in the pole body; Lithuanian alphabet uses 'ė' (dot above) and ogoneks (ą, ę, į, ų); flat agricultural Baltic landscape.",
      "tagsZh": [
        "电线杆",
        "语言文字"
      ],
      "tagsEn": [
        "Utility Poles",
        "Language & Script"
      ]
    },
    {
      "id": "liechtenstein",
      "nameEn": "Liechtenstein",
      "nameZh": "列支敦士登",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇱🇮",
      "link": "",
      "desc": "欧洲唯一全境使用黑底白字车牌的德语国家；街景使用极低视角的相机 (Lowcam)；夹在瑞士与奥地利阿尔卑斯山谷之间的富裕小国，整洁的德式民居与陡峭雪山。",
      "tags": [
        "车牌 / Plate"
      ],
      "descZh": "全欧洲唯一常态化使用**纯黑底白字车牌**的国家（格式为 FL 12345）；街景车机位极低（Lowcam）；被瑞士与奥地利高耸的阿尔卑斯雪山包围，地势陡峭，德语环境，极具欧陆富庶山国风貌。",
      "descEn": "The only European nation using **solid black license plates with white characters** (FL 12345 format); camera car uses Lowcam low-height perspective; surrounded by towering Swiss and Austrian alpine peaks, wealthy Liechtenstein principality.",
      "tagsZh": [
        "车牌特征"
      ],
      "tagsEn": [
        "License Plates"
      ]
    },
    {
      "id": "luxembourg",
      "nameEn": "Luxembourg",
      "nameZh": "卢森堡",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇱🇺",
      "link": "",
      "desc": "车辆前后均悬挂黄色长条车牌；路牌背景为黄色，且路名使用全大写字母书写；路缘标黑色反光条由三枚螺丝钉固定（德国为两枚）；西欧古典精致石板屋顶建筑；标志牌常配有圆润的银色金属管状包边外框。",
      "tags": [
        "车牌 / Plate",
        "路缘标 / Bollard"
      ],
      "descZh": "车辆前后均悬挂黄色长条车牌；路牌背景为黄色，且路名使用全大写字母书写；路缘标黑色反光条由三枚螺丝钉固定（德国为两枚）；西欧古典精致石板屋顶建筑；标志牌常配有圆润的银色金属管状包边外框。",
      "descEn": "Yellow license plates front and rear; street name signs feature yellow backgrounds with all-caps typography; bollards feature black reflector caps secured with three screws (Germany uses two); affluent Western European slate-roofed stone architecture; tubular metal border frames on traffic signs.",
      "tagsZh": [
        "车牌特征",
        "路缘标"
      ],
      "tagsEn": [
        "License Plates",
        "Bollards"
      ]
    },
    {
      "id": "malaysia",
      "nameEn": "Malaysia",
      "nameZh": "马来西亚",
      "continentEn": "Asia",
      "continentZh": "亚洲",
      "flag": "🇲🇾",
      "link": "",
      "desc": "车辆靠左行驶；道路中央常画有双白实线；电线杆下半段常贴有长方形黑色铁皮编码标牌；路牙石常涂刷成整齐的黑白或黑黄相间条纹；车牌为黑底白字（分为两段或一段，较短）；大路编号通常装在一个橙黄色六边形边框内；路名前缀多为 'Jln' (Jalan)。",
      "tags": [
        "左行 / LHD",
        "车牌 / Plate",
        "电线杆 / Pole",
        "道路标线 / Lines"
      ],
      "descZh": "车辆靠左行驶；道路中央常画有双白实线；电线杆下半段常贴有长方形黑色铁皮编码标牌；路牙石常涂刷成整齐的黑白或黑黄相间条纹；车牌为黑底白字（分为两段或一段，较短）；大路编号通常装在一个橙黄色六边形边框内；路名前缀多为 'Jln' (Jalan)。",
      "descEn": "Left-hand drive; double solid white center lines; utility poles frequently mounted with small vertical black metal plates bearing white numbers; curbs painted in alternating black-and-white or black-and-yellow bands; black license plates with white characters; road numbers enclosed inside an orange-yellow hexagon; street prefix 'Jln' (Jalan).",
      "tagsZh": [
        "左侧行驶",
        "车牌特征",
        "电线杆",
        "道路标线"
      ],
      "tagsEn": [
        "Left-Hand Drive",
        "License Plates",
        "Utility Poles",
        "Road Markings"
      ]
    },
    {
      "id": "malta",
      "nameEn": "Malta",
      "nameZh": "马耳他",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇲🇹",
      "link": "",
      "desc": "车辆靠左侧行驶；建筑物全境普遍采用金黄色暖调石灰岩（Globigerina）砌筑；乡村公路两侧砌有密集低矮的石灰岩干砌石墙；路名后缀普遍为马耳他语 'Triq'（街道）；典型的无高大树木干旱地中海岛屿风光。",
      "tags": [
        "左行 / LHD"
      ],
      "descZh": "车辆靠左侧行驶；建筑物全境普遍采用金黄色暖调石灰岩（Globigerina）砌筑；乡村公路两侧砌有密集低矮的石灰岩干砌石墙；路名后缀普遍为马耳他语 'Triq'（街道）；典型的无高大树木干旱地中海岛屿风光。",
      "descEn": "Left-hand drive; buildings universally constructed from warm honey-golden Globigerina limestone blocks; narrow rural lanes flanked by dry limestone rubblestone walls (Hajt tas-sejjieh); street names prefixed with Maltese 'Triq' (Street); arid Mediterranean island landscape without native forests.",
      "tagsZh": [
        "左侧行驶"
      ],
      "tagsEn": [
        "Left-Hand Drive"
      ]
    },
    {
      "id": "mexico",
      "nameEn": "Mexico",
      "nameZh": "墨西哥",
      "continentEn": "North America",
      "continentZh": "北美洲",
      "flag": "🇲🇽",
      "link": "",
      "desc": "公路弯道指示牌使用粗箭头；停止牌写有西语 'ALTO'；电线杆大量使用坚固的八角形截面混凝土柱；水暖管线暴露在建筑外墙，外挂黑色 Rotoplas 塑料水箱与圆形透明电表；保留部分一代低分辨率全景。",
      "tags": [
        "电线杆 / Pole"
      ],
      "descZh": "公路弯道指示牌使用粗箭头；停止牌写有西语 'ALTO'；电线杆大量使用坚固的八角形截面混凝土柱；水暖管线暴露在建筑外墙，外挂黑色 Rotoplas 塑料水箱与圆形透明电表；保留部分一代低分辨率全景。",
      "descEn": "Chunky arrows on curve chevrons; octagonal 'ALTO' stop signs; octagonal concrete utility poles; black Rotoplas rooftop water tanks and round glass electricity meters on building exteriors; remnants of Gen 1 low-res coverage in older areas.",
      "tagsZh": [
        "电线杆"
      ],
      "tagsEn": [
        "Utility Poles"
      ]
    },
    {
      "id": "monaco",
      "nameEn": "Monaco",
      "nameZh": "摩纳哥",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇲🇨",
      "link": "",
      "desc": "富裕地中海公国；路缘石整齐涂刷成摩纳哥国旗红白相间条纹；满街奢华跑车、游艇码头与开凿穿山的双向隧道；路牌使用独特的法文与摩纳哥语双语标识。",
      "tags": [],
      "descZh": "富裕地中海公国；路缘石整齐涂刷成摩纳哥国旗红白相间条纹；满街奢华跑车、游艇码头与开凿穿山的双向隧道；路牌使用独特的法文与摩纳哥语双语标识。",
      "descEn": "Ultra-affluent Mediterranean microstate; curbs painted in crisp red-and-white stripes; luxury sports cars, yacht harbors, and curved multi-lane rock tunnels; bilingual French and Monégasque street signage.",
      "tagsZh": [],
      "tagsEn": []
    },
    {
      "id": "mongolia",
      "nameEn": "Mongolia",
      "nameZh": "Mongolia (蒙古)",
      "continentEn": "Other",
      "continentZh": "其他",
      "flag": "🌍",
      "link": "https://docs.google.com/document/d/1W_QK69BXMHUZXI5VdNH93_aLhTd9SQzNYhRLrh_-ZVA/edit?tab=t.0",
      "desc": "街景车车顶明显安装有圆筒状露营帐篷、五金备胎与金属车架；语言为西里尔蒙古文；苍茫无垠的蒙古高原草原，远处可见圆顶白色蒙古包（Ger）与成群牲畜。",
      "tags": [
        "街景车 / Car Meta",
        "语言 / Script"
      ],
      "descZh": "车顶驮有大型帐篷、备胎或野营装备；西里尔蒙古语；极度辽阔荒凉的草原、荒漠戈壁与高山泰加林；备胎固定带西部为网格、最东边为绿带、乌兰巴托南北为主的为橙带；车顶架横杠西半部有黑橡胶垫，竖杠西半部带横带连接；详见 [蒙古详细攻略指南](https://docs.google.com/document/d/1W_QK69BXMHUZXI5VdNH93_aLhTd9SQzNYhRLrh_-ZVA/edit?tab=t.0)。",
      "descEn": "Camera truck carries a roof rack with a large camping tent, spare tire, or luggage; Mongolian Cyrillic script; vast treeless steppes, Gobi desert, and alpine taiga; spare tire straps (mesh on west, green on far east, orange north/south of UB); roof crossbars with rubber pad on west; see [Mongolia Deep Dive Guide](https://docs.google.com/document/d/1W_QK69BXMHUZXI5VdNH93_aLhTd9SQzNYhRLrh_-ZVA/edit?tab=t.0).",
      "tagsZh": [
        "街景车",
        "语言文字"
      ],
      "tagsEn": [
        "Camera Car",
        "Language & Script"
      ]
    },
    {
      "id": "montenegro",
      "nameEn": "Montenegro",
      "nameZh": "黑山",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇲🇪",
      "link": "",
      "desc": "天空中央带有明显的图像拼接错位裂缝 (Sky Rift)；车牌左侧带有欧盟式深蓝条带，中央常带有红色圆形国徽图样；壮丽险峻的亚得里亚海沿海峡湾（科托尔湾）与巴尔干岩石荒山。",
      "tags": [
        "车牌 / Plate"
      ],
      "descZh": "天空中央带有明显的图像拼接错位裂缝 (Sky Rift)；车牌左侧带有欧盟式深蓝条带，中央常带有红色圆形国徽图样；壮丽险峻的亚得里亚海沿海峡湾（科托尔湾）与巴尔干岩石荒山。",
      "descEn": "Visible Sky Rift stitch artifact overhead; license plates have an EU-like deep blue strip on the left with a small red national crest in the center; dramatic limestone canyons and coastal fjords (Bay of Kotor).",
      "tagsZh": [
        "车牌特征"
      ],
      "tagsEn": [
        "License Plates"
      ]
    },
    {
      "id": "namibia",
      "nameEn": "Namibia",
      "nameZh": "纳米比亚",
      "continentEn": "Africa",
      "continentZh": "非洲",
      "flag": "🇳🇦",
      "link": "",
      "desc": "街景车天线稍微偏向车身左侧；路牌立柱一律刷成黄黑相间宽斑马条纹；路肩常见红褐色碎石砾与极度干旱的半沙漠灌木草原；车牌为全黄色或黄底黑字短牌；车辆靠左行驶。",
      "tags": [
        "街景车 / Car Meta"
      ],
      "descZh": "街景车天线稍微偏向车身左侧；路牌立柱一律刷成黄黑相间宽斑马条纹；路肩常见红褐色碎石砾与极度干旱的半沙漠灌木草原；车牌为全黄色或黄底黑字短牌；车辆靠左行驶。",
      "descEn": "Camera car features an antenna leaning slightly to the left; signposts painted in alternating yellow-and-black stripes; red gravel shoulders and arid savanna grasslands; yellow license plates; left-hand drive.",
      "tagsZh": [
        "街景车"
      ],
      "tagsEn": [
        "Camera Car"
      ]
    },
    {
      "id": "netherlands",
      "nameEn": "Netherlands",
      "nameZh": "荷兰",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇳🇱",
      "link": "",
      "desc": "车辆前后均悬挂黄色长条车牌（左侧带蓝条）；路缘标顶部带有独特的红色环形横圈；减速带前后路面绘制有长短交替排列的白色标线带；地势平坦至极，运河纵横交错，红砖房搭配高耸宽大的玻璃窗；红褐色沥青专用自行车道遍布全国。",
      "tags": [
        "车牌 / Plate",
        "路缘标 / Bollard"
      ],
      "descZh": "车辆前后均悬挂黄色长条车牌（左侧带蓝条）；路缘标顶部带有独特的红色环形横圈；减速带前后路面绘制有长短交替排列的白色标线带；地势平坦至极，运河纵横交错，红砖房搭配高耸宽大的玻璃窗；红褐色沥青专用自行车道遍布全国。",
      "descEn": "Yellow license plates front and rear with blue EU bands; bollards feature a wrap-around red band at the very top; unique piano-key style speed bump markings; impeccably flat landscape with canals, brick row houses, and separate reddish-brown asphalt cycle tracks.",
      "tagsZh": [
        "车牌特征",
        "路缘标"
      ],
      "tagsEn": [
        "License Plates",
        "Bollards"
      ]
    },
    {
      "id": "new-zealand",
      "nameEn": "New Zealand",
      "nameZh": "新西兰",
      "continentEn": "Oceania",
      "continentZh": "大洋洲",
      "flag": "🇳🇿",
      "link": "",
      "desc": "车辆靠左侧行驶；路缘标为白色方柱，中间贴有一圈完整的红色反光胶带（360度整圈包边）；道路边缘多为白色短虚线；丘陵连绵起伏、草场极其翠绿丰美，山坡上散布着密集的绵羊群；木横木电线杆带有长条穿孔。",
      "tags": [
        "左行 / LHD",
        "路缘标 / Bollard",
        "道路标线 / Lines"
      ],
      "descZh": "车辆靠左侧行驶；路缘标为白色方柱，中间贴有一圈完整的红色反光胶带（360度整圈包边）；道路边缘多为白色短虚线；丘陵连绵起伏、草场极其翠绿丰美，山坡上散布着密集的绵羊群；木横木电线杆带有长条穿孔。",
      "descEn": "Left-hand drive; white bollards with a full 360-degree wrap-around red reflective tape band; dashed white road edge lines; lush vibrant green rolling sheep pastures; concrete ladder poles with hollow slots resembling Chile.",
      "tagsZh": [
        "左侧行驶",
        "路缘标",
        "道路标线"
      ],
      "tagsEn": [
        "Left-Hand Drive",
        "Bollards",
        "Road Markings"
      ]
    },
    {
      "id": "nigeria",
      "nameEn": "Nigeria",
      "nameZh": "尼日利亚",
      "continentEn": "Africa",
      "continentZh": "非洲",
      "flag": "🇳🇬",
      "link": "",
      "desc": "街景车后方通常紧跟着一辆开着警灯的武装皮卡护卫车（Escort Car）；画面底部有时能看到红色皮卡车斗；民居屋顶经常呈现奇特的五脊歇山屋顶；存在二代低分辨率 Shitcam 覆盖；主要在拉各斯、阿布贾及周边各州。",
      "tags": [
        "街景车 / Car Meta"
      ],
      "descZh": "街景车后方通常紧跟着一辆开着警灯的武装皮卡护卫车（Escort Car）；画面底部有时能看到红色皮卡车斗；民居屋顶经常呈现奇特的五脊歇山屋顶；存在二代低分辨率 Shitcam 覆盖；主要在拉各斯、阿布贾及周边各州。",
      "descEn": "Camera car is accompanied by an armed police escort pickup truck visible behind; red hood or pickup bed sometimes visible at bottom; distinctive five-ridge hip sheet-metal roofs; scattered low-res Gen 2 coverage; concentrated around Lagos, Abuja, and major state corridors.",
      "tagsZh": [
        "街景车"
      ],
      "tagsEn": [
        "Camera Car"
      ]
    },
    {
      "id": "north-macedonia",
      "nameEn": "North Macedonia",
      "nameZh": "北马其顿",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇲🇰",
      "link": "",
      "desc": "若为第三代高清街景，街景车车尾通常没有任何天线；典型的巴尔干群山丘陵与干燥农田；车牌两端没有蓝色 EU 条带；城镇道路边缘常有红白相间的刷漆路沿。",
      "tags": [
        "街景车 / Car Meta"
      ],
      "descZh": "若为第三代高清街景，街景车车尾通常没有任何天线；典型的巴尔干群山丘陵与干燥农田；车牌两端没有蓝色 EU 条带；城镇道路边缘常有红白相间的刷漆路沿。",
      "descEn": "Gen 3 camera car typically has no antenna; dry Balkan rolling hills and tobacco farming; license plates lack EU blue strips; red-and-white painted curb stones in urban centers.",
      "tagsZh": [
        "街景车"
      ],
      "tagsEn": [
        "Camera Car"
      ]
    },
    {
      "id": "norway",
      "nameEn": "Norway",
      "nameZh": "挪威",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇳🇴",
      "link": "",
      "desc": "道路两侧边线通常为长条白色虚线，中心线多为黄色；商用营运货车车牌为绿色背景；路名以 'gate' 或 'vei' 结尾；人行横道指示牌上的小人脚下踩着四条坚实的白色竖线；乡间窄路旁常设有蓝底白字带衬线的 'M' 会车指示牌（M字母中间向下延伸触底）。",
      "tags": [
        "车牌 / Plate",
        "道路标线 / Lines"
      ],
      "descZh": "道路边线通常为长虚线，中线为单/双黄色实虚线；商用车悬挂独特的纯绿色车牌；路名以 gate/vei 结尾；人行横道标牌上的行人走在 4 条竖线上且无明显脖子；乡间路边常立有蓝底白“M”字牌（M字中间尖角一直接触到底部，代表避车处 Møteplass）；遍布峡湾、隧道与密集雪迹杆。",
      "descEn": "Road shoulders marked with long dashed white lines, centerlines yellow; commercial vehicles display solid green license plates; street names end in gate/vei; pedestrian signs feature four vertical stripes under a neckless pedestrian; rural roads feature blue-and-white 'M' passing place signs (the center vertex of M touches the bottom line); fjords, tunnels, and snow poles.",
      "tagsZh": [
        "车牌特征",
        "道路标线"
      ],
      "tagsEn": [
        "License Plates",
        "Road Markings"
      ]
    },
    {
      "id": "oman",
      "nameEn": "Oman",
      "nameZh": "阿曼",
      "continentEn": "Asia",
      "continentZh": "亚洲",
      "flag": "🇴🇲",
      "link": "",
      "desc": "中东阿拉伯半岛重要国家；普通车牌为亮黄色黑字；城镇住宅多为纯白色方块建筑，且法律强制要求窗框与外立面必须具有精致雕花装饰；大街小巷随处可见阿曼苏丹肖像；街景车为白色四驱皮卡且右侧竖有长天线。",
      "tags": [
        "车牌 / Plate",
        "街景车 / Car Meta"
      ],
      "descZh": "中东阿拉伯半岛重要国家；普通车牌为亮黄色黑字；城镇住宅多为纯白色方块建筑，且法律强制要求窗框与外立面必须具有精致雕花装饰；大街小巷随处可见阿曼苏丹肖像；街景车为白色四驱皮卡且右侧竖有长天线。",
      "descEn": "Yellow license plates with black lettering; pristine white cubic residential architecture mandated to have decorative carved window trims; portraits of the Sultan displayed publicly; camera car is a white 4x4 pickup with a tall antenna on the right.",
      "tagsZh": [
        "车牌特征",
        "街景车"
      ],
      "tagsEn": [
        "License Plates",
        "Camera Car"
      ]
    },
    {
      "id": "panama",
      "nameEn": "Panama",
      "nameZh": "巴拿马",
      "continentEn": "North America",
      "continentZh": "北美洲",
      "flag": "🇵🇦",
      "link": "",
      "desc": "2023-2024 年官方街景新增；车牌为长方形彩色金属牌，每年更新底色及年份编码；巴拿马城天际线矗立着整个中美洲最密集的现代化摩天大楼群；太平洋沿岸西部为平坦广阔的甘蔗与畜牧农田。",
      "tags": [
        "车牌 / Plate"
      ],
      "descZh": "2023-2024 年官方街景新增；车牌为长方形彩色金属牌，每年更新底色及年份编码；巴拿马城天际线矗立着整个中美洲最密集的现代化摩天大楼群；太平洋沿岸西部为平坦广阔的甘蔗与畜牧农田。",
      "descEn": "New official coverage added in 2023-2024; rectangular license plates with changing annual color designs and stamped year; Panama City features the dense skyscraper skyline of Central America; western Pacific lowlands dominated by sugarcane fields.",
      "tagsZh": [
        "车牌特征"
      ],
      "tagsEn": [
        "License Plates"
      ]
    },
    {
      "id": "paraguay",
      "nameEn": "Paraguay",
      "nameZh": "巴拉圭",
      "continentEn": "South America",
      "continentZh": "南美洲",
      "flag": "🇵🇾",
      "link": "",
      "desc": "电线杆与巴西梯子杆极为相似，但杆顶常向上延伸出一根孤立的细避雷针或金属棍；街景车多为黑色或白色皮卡；车牌分为两种：一种为白底带有上方蓝色 Mercosur 条带，另一种为白底鲜红字；红土壤与茂密平原。",
      "tags": [
        "车牌 / Plate",
        "电线杆 / Pole",
        "街景车 / Car Meta"
      ],
      "descZh": "电线杆与巴西梯子杆极为相似，但杆顶常向上延伸出一根孤立的细避雷针或金属棍；街景车多为黑色或白色皮卡；车牌分为两种：一种为白底带有上方蓝色 Mercosur 条带，另一种为白底鲜红字；红土壤与茂密平原。",
      "descEn": "Ladder poles similar to Brazil, but frequently topped with an isolated thin vertical lightning rod rod; camera car is a black or white pickup; plates are either Mercosur with top blue stripe or older white plates with dark red lettering; reddish soil and flat green pastures.",
      "tagsZh": [
        "车牌特征",
        "电线杆",
        "街景车"
      ],
      "tagsEn": [
        "License Plates",
        "Utility Poles",
        "Camera Car"
      ]
    },
    {
      "id": "peru",
      "nameEn": "Peru",
      "nameZh": "秘鲁",
      "continentEn": "South America",
      "continentZh": "南美洲",
      "flag": "🇵🇪",
      "link": "",
      "desc": "路标柱子常涂刷有黑白相间的醒目斑马纹（南美独占特征）；路缘标为亮橙黄色圆柱；波形护栏上贴有黑黄黑黄黑间隔的反光贴纸；里程桩为黑白相间水泥柱配黑色数字；营运小巴与皮卡车身侧面贴有左白右红的棋盘反光条；街道上大量运行三轮机动摩托车；电线杆三个绝缘体垂直上下排齐（区别于阿根廷）。",
      "tags": [
        "电线杆 / Pole",
        "路缘标 / Bollard"
      ],
      "descZh": "路标立柱常刷黑白相间斑马纹（南美唯一，有时底部带白色水泥柱）；黄橙色 Bollard；波形护栏贴黑黄相间条纹（五道黑黄条纹，跟玻利维亚不同）；黑白石柱里程碑黑色数字；商用车侧面常见左白右红方块反光标；街道三轮车普遍；电线杆三个绝缘体上下对齐垂直排列（与阿根廷不同）；电杆带黄黑横条一直接触地面（与哥伦比亚不同）；金属面板带有两至三个黑色横条纹电表。",
      "descEn": "Road signposts frequently painted with black-and-white zebra stripes (unique in South America, sometimes with white concrete base); yellow-orange bollards; guardrails with black-yellow-black-yellow-black striped decals (different from Bolivia); black-and-white stone milestone markers; commercial vehicles with split white-and-red reflective squares; ubiquitous street mototaxis; utility poles with three insulators aligned vertically (unlike Argentina); yellow-and-black painted pole base reaching the ground (unlike Colombia); metal electric meter panels with 2-3 black horizontal bars.",
      "tagsZh": [
        "电线杆",
        "路缘标"
      ],
      "tagsEn": [
        "Utility Poles",
        "Bollards"
      ]
    },
    {
      "id": "philippines",
      "nameEn": "Philippines",
      "nameZh": "菲律宾",
      "continentEn": "Asia",
      "continentZh": "亚洲",
      "flag": "🇵🇭",
      "link": "",
      "desc": "道路绝大多数采用白色混凝土路面，路面中央有深色的热沥青填缝接缝；随处可见色彩斑斓的标志性吉普尼（Jeepney）和三轮摩托车（Tricycle）；语言混用英语及带有西班牙语词汇的塔加洛语（Tagalog）；电线极其繁杂杂乱。",
      "tags": [
        "语言 / Script"
      ],
      "descZh": "道路绝大多数采用白色混凝土路面，路面中央有深色的热沥青填缝接缝；随处可见色彩斑斓的标志性吉普尼（Jeepney）和三轮摩托车（Tricycle）；语言混用英语及带有西班牙语词汇的塔加洛语（Tagalog）；电线极其繁杂杂乱。",
      "descEn": "Highways paved with concrete slabs showing black tar sealant joints; colorful customized Jeepneys and motorized tricycles everywhere; signage in English alongside Tagalog; chaotic tangled overhead electrical wires in bustling towns.",
      "tagsZh": [
        "语言文字"
      ],
      "tagsEn": [
        "Language & Script"
      ]
    },
    {
      "id": "poland",
      "nameEn": "Poland",
      "nameZh": "波兰",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇵🇱",
      "link": "",
      "desc": "广泛使用带冲压孔洞的水泥电线杆，但杆身最底端通常是一段不打孔的实心水泥基座（区别于匈牙利全打孔）；人行横道指示牌底部有一条加粗的黑色横实线；警示牌多为黄色背景细红边三角形；路缘标体型较粗，中央嵌有一块长条形红色反光斜块。",
      "tags": [
        "电线杆 / Pole",
        "路缘标 / Bollard"
      ],
      "descZh": "广泛使用带冲压孔洞的水泥电线杆，但杆身最底端通常是一段不打孔的实心水泥基座（区别于匈牙利全打孔）；人行横道指示牌底部有一条加粗的黑色横实线；警示牌多为黄色背景细红边三角形；路缘标体型较粗，中央嵌有一块长条形红色反光斜块。",
      "descEn": "Concrete utility poles feature punched rungs, but the bottom section is completely solid concrete without holes (unlike Hungary); pedestrian crossing signs have a solid black ground line beneath the feet; warning signs feature yellow centers with thin red borders; chunky bollards with an angled red reflector strip.",
      "tagsZh": [
        "电线杆",
        "路缘标"
      ],
      "tagsEn": [
        "Utility Poles",
        "Bollards"
      ]
    },
    {
      "id": "portugal",
      "nameEn": "Portugal",
      "nameZh": "葡萄牙",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇵🇹",
      "link": "",
      "desc": "旧版车牌右侧带有一条独特的黄色竖条（新版车牌取消但仍满街可见）；葡萄牙语特有字母 'ç' 以及带有波浪音符的元音 'ã' 和 'õ'；街道后缀为 'Rua'；混凝土梯子型电线杆；伊比利亚半岛丘陵与成片桉树林。",
      "tags": [
        "车牌 / Plate",
        "电线杆 / Pole",
        "语言 / Script"
      ],
      "descZh": "旧版车牌右侧带有一条独特的黄色竖条（新版车牌取消但仍满街可见）；葡萄牙语特有字母 'ç' 以及带有波浪音符的元音 'ã' 和 'õ'；街道后缀为 'Rua'；混凝土梯子型电线杆；伊比利亚半岛丘陵与成片桉树林。",
      "descEn": "Older license plates carry a distinctive yellow vertical band on the right edge; Portuguese script features 'ç' and nasal vowels 'ã' and 'õ'; street names end in 'Rua'; concrete ladder poles; rolling Iberian hills with abundant eucalyptus and cork oak trees.",
      "tagsZh": [
        "车牌特征",
        "电线杆",
        "语言文字"
      ],
      "tagsEn": [
        "License Plates",
        "Utility Poles",
        "Language & Script"
      ]
    },
    {
      "id": "qatar",
      "nameEn": "Qatar",
      "nameZh": "卡塔尔",
      "continentEn": "Asia",
      "continentZh": "亚洲",
      "flag": "🇶🇦",
      "link": "",
      "desc": "街景车为白色皮卡车身，左侧带有竖立的天线；路旁是极其干净平整的广阔黄沙与超现代主义钢结构玻璃摩天大楼；路标为深蓝底白字配阿拉伯文和英文；车牌左侧带有独特的暗枣红色小坚条。",
      "tags": [
        "车牌 / Plate",
        "街景车 / Car Meta"
      ],
      "descZh": "街景车为白色皮卡车身，左侧带有竖立的天线；路旁是极其干净平整的广阔黄沙与超现代主义钢结构玻璃摩天大楼；路标为深蓝底白字配阿拉伯文和英文；车牌左侧带有独特的暗枣红色小坚条。",
      "descEn": "Camera car is a white pickup with antenna on the left; hyper-modern desert urban landscape with pristine wide highways, landscaped roundabouts, and glass skyscrapers; blue directional signs with Arabic and English; license plates feature a maroon/dark red vertical patch on the left.",
      "tagsZh": [
        "车牌特征",
        "街景车"
      ],
      "tagsEn": [
        "License Plates",
        "Camera Car"
      ]
    },
    {
      "id": "r-union",
      "nameEn": "Réunion",
      "nameZh": "留尼汪",
      "continentEn": "Africa",
      "continentZh": "非洲",
      "flag": "🇷🇪",
      "link": "",
      "desc": "法国印度洋海外省；火山海岛地貌，中部耸立着富尔奈斯活火山；路牌完全遵循法国六边形国家标准体系（D 字头省道、法语路牌）；车牌左右两端皆有蓝色条带（同法国本土）；热带甘蔗种植园。",
      "tags": [
        "车牌 / Plate"
      ],
      "descZh": "法国印度洋海外省；火山海岛地貌，中部耸立着富尔奈斯活火山；路牌完全遵循法国六边形国家标准体系（D 字头省道、法语路牌）；车牌左右两端皆有蓝色条带（同法国本土）；热带甘蔗种植园。",
      "descEn": "French overseas department in the Indian Ocean; volcanic tropical island terrain centered on Piton de la Fournaise; full French infrastructure (Departmental routes, blue village signs); dual-blue-strip French license plates; tropical sugarcane fields on steep volcanic slopes.",
      "tagsZh": [
        "车牌特征"
      ],
      "tagsEn": [
        "License Plates"
      ]
    },
    {
      "id": "romania",
      "nameEn": "Romania",
      "nameZh": "罗马尼亚",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇷🇴",
      "link": "",
      "desc": "混凝土电线杆带有长方形孔洞，底部通常刷有一圈整齐的白色石灰漆；公路里程碑为类似拱形墓碑的圆顶石墩；危险警告标志的红色外边框极其粗厚；街道名称后缀为 'Strada'；乡村路边常有传统的精美木雕大门与水井。",
      "tags": [
        "电线杆 / Pole"
      ],
      "descZh": "混凝土电线杆带有长方形孔洞，底部通常刷有一圈整齐的白色石灰漆；公路里程碑为类似拱形墓碑的圆顶石墩；危险警告标志的红色外边框极其粗厚；街道名称后缀为 'Strada'；乡村路边常有传统的精美木雕大门与水井。",
      "descEn": "Holey concrete poles with whitewashed bases; milestone posts shaped like curved tombstone blocks; warning signs feature extraordinarily thick red outer borders; street suffix 'Strada'; ornate carved wooden gates and covered water wells in rural villages.",
      "tagsZh": [
        "电线杆"
      ],
      "tagsEn": [
        "Utility Poles"
      ]
    },
    {
      "id": "russia",
      "nameEn": "Russia",
      "nameZh": "俄罗斯",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇷🇺",
      "link": "",
      "desc": "路牌底部或立柱常涂刷成黑色；电线杆下半段通常刷成白石灰漆，最底端有时保留一截黑色泥漆（称为“黑袜子”）；属于红底白箭头 Chevron “AH UBER” 国家；弯道处白色木质或塑料路缘桩极其密集；广阔的白桦林针叶林与西里尔文字街区。",
      "tags": [
        "电线杆 / Pole",
        "路缘标 / Bollard"
      ],
      "descZh": "路牌底部或立柱常涂刷成黑色；电线杆下半段通常刷成白石灰漆，最底端有时保留一截黑色泥漆（称为“黑袜子”）；属于红底白箭头 Chevron “AH UBER” 国家；弯道处白色木质或塑料路缘桩极其密集；广阔的白桦林针叶林与西里尔文字街区。",
      "descEn": "Road sign backs and poles often painted black; utility pole bottoms painted white with occasional black base collars ('black socks'); red-and-white curve chevrons; dense clusters of white bollards on highway bends; endless birch and taiga forests with Cyrillic signs.",
      "tagsZh": [
        "电线杆",
        "路缘标"
      ],
      "tagsEn": [
        "Utility Poles",
        "Bollards"
      ]
    },
    {
      "id": "rwanda",
      "nameEn": "Rwanda",
      "nameZh": "卢旺达",
      "continentEn": "Africa",
      "continentZh": "非洲",
      "flag": "🇷🇼",
      "link": "",
      "desc": "车辆靠左侧行驶；四代街景车为白色丰田皮卡，后斗露出高位红色刹车灯；街道极其干净整洁，民居与院墙常带有几何花纹通风红砖孔与高耸围墙；街头骑摩托车人员一律按法规佩戴红黄色反光背心与头盔。",
      "tags": [
        "左行 / LHD",
        "街景车 / Car Meta"
      ],
      "descZh": "车辆靠左侧行驶；四代街景车为白色丰田皮卡，后斗露出高位红色刹车灯；街道极其干净整洁，民居与院墙常带有几何花纹通风红砖孔与高耸围墙；街头骑摩托车人员一律按法规佩戴红黄色反光背心与头盔。",
      "descEn": "Left-hand drive; Gen 4 white pickup camera car with red brake lights; impeccably clean streets lined with patterned brick ventilation blocks and tall stucco walls; motorcycle taxi drivers strictly wear numbered colored reflector vests and helmets.",
      "tagsZh": [
        "左侧行驶",
        "街景车"
      ],
      "tagsEn": [
        "Left-Hand Drive",
        "Camera Car"
      ]
    },
    {
      "id": "san-marino",
      "nameEn": "San Marino",
      "nameZh": "圣马力诺",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇸🇲",
      "link": "",
      "desc": "被意大利完全包围的高山城邦；车牌尺寸极小且左侧带有浅蓝色蒂塔诺山国徽；依附在悬崖峭壁上的蒂塔诺山（Monte Titano）与标志性的三座中世纪城堡塔楼；人行横道路面铺有鲜亮蓝色底漆。",
      "tags": [
        "车牌 / Plate"
      ],
      "descZh": "被意大利完全包围的高山城邦；车牌尺寸极小且左侧带有浅蓝色蒂塔诺山国徽；依附在悬崖峭壁上的蒂塔诺山（Monte Titano）与标志性的三座中世纪城堡塔楼；人行横道路面铺有鲜亮蓝色底漆。",
      "descEn": "Microstate surrounded by Italy; tiny white front license plates with light blue San Marino coat of arms on the left; dramatic Mount Titano cliff fortress with medieval stone battlements; bright blue painted pedestrian crosswalks.",
      "tagsZh": [
        "车牌特征"
      ],
      "tagsEn": [
        "License Plates"
      ]
    },
    {
      "id": "senegal",
      "nameEn": "Senegal",
      "nameZh": "塞内加尔",
      "continentEn": "Africa",
      "continentZh": "非洲",
      "flag": "🇸🇳",
      "link": "",
      "desc": "西非法语国家；街景车为白色皮卡，车顶可见四根粗壮的黑色行李横杠；天空中常带有清晰可见的横向撕裂缝隙 (Sky Rift)；车牌带有蓝色条带；平坦干燥的萨赫勒干旱灌木地貌，路旁常见巨大的猴面包树 (Baobab)。",
      "tags": [
        "街景车 / Car Meta"
      ],
      "descZh": "西非法语国家；街景车为白色皮卡，车顶可见四根粗壮的黑色行李横杠；天空中常带有清晰可见的横向撕裂缝隙 (Sky Rift)；车牌带有蓝色条带；平坦干燥的萨赫勒干旱灌木地貌，路旁常见巨大的猴面包树 (Baobab)。",
      "descEn": "West African Francophone nation; camera car has four thick black roof bars; clear Sky Rift stitch line across the sky; blue-tinted license plates; flat, dry Sahelian savanna with iconic massive Baobab trees.",
      "tagsZh": [
        "街景车"
      ],
      "tagsEn": [
        "Camera Car"
      ]
    },
    {
      "id": "serbia",
      "nameEn": "Serbia",
      "nameZh": "塞尔维亚",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇷🇸",
      "link": "",
      "desc": "同时并行使用拉丁字母与西里尔字母，文字常带有特有字母 'ђ' 或 'ћ'；第三代街景车尾部通常没有任何天线；多瑙河与萨瓦河流域巴尔干平原丘陵。",
      "tags": [
        "街景车 / Car Meta",
        "语言 / Script"
      ],
      "descZh": "同时并行使用拉丁字母与西里尔字母，文字常带有特有字母 'ђ' 或 'ћ'；第三代街景车尾部通常没有任何天线；多瑙河与萨瓦河流域巴尔干平原丘陵。",
      "descEn": "Digraphia using both Latin and Serbian Cyrillic scripts, featuring unique letters 'ђ' and 'ћ'; Gen 3 camera cars generally have no visible antenna; gentle rolling Balkan terrain around the Danube and Sava river basins.",
      "tagsZh": [
        "街景车",
        "语言文字"
      ],
      "tagsEn": [
        "Camera Car",
        "Language & Script"
      ]
    },
    {
      "id": "singapore",
      "nameEn": "Singapore",
      "nameZh": "新加坡",
      "continentEn": "Asia",
      "continentZh": "亚洲",
      "flag": "🇸🇬",
      "link": "",
      "desc": "车辆靠左侧行驶；路牌统一为墨绿色背景配纯白色无衬线粗体字（宽体字体）；路面上经常用极大号粗体白色英文喷写标线（如 'HUMP'、'SLOW'）；极其整洁的热带花园城市与现代化组屋 (HDB)。",
      "tags": [
        "左行 / LHD"
      ],
      "descZh": "车辆靠左侧行驶；路牌统一为墨绿色背景配纯白色无衬线粗体字（宽体字体）；路面上经常用极大号粗体白色英文喷写标线（如 'HUMP'、'SLOW'）；极其整洁的热带花园城市与现代化组屋 (HDB)。",
      "descEn": "Left-hand drive; dark green street name signs in bold clean white lettering; large white road pavement warnings ('HUMP', 'SLOW', 'BUS LANE'); exceptionally manicured tropical garden city with distinctive HDB public housing blocks.",
      "tagsZh": [
        "左侧行驶"
      ],
      "tagsEn": [
        "Left-Hand Drive"
      ]
    },
    {
      "id": "slovakia",
      "nameEn": "Slovakia",
      "nameZh": "斯洛伐克",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇸🇰",
      "link": "",
      "desc": "民居门牌通常为白底红框或白底黑字；混凝土电线杆为双圆杆倒三角结构，路灯底座较粗；路牌多为规整矩形，通常没有突出伸出的方向箭头角（以此与捷克区分）；斯洛伐克语常用带有扬抑符的字母 'ô'。",
      "tags": [
        "电线杆 / Pole"
      ],
      "descZh": "民居门牌通常为白底红框或白底黑字；混凝土电线杆为双圆杆倒三角结构，路灯底座较粗；路牌多为规整矩形，通常没有突出伸出的方向箭头角（以此与捷克区分）；斯洛伐克语常用带有扬抑符的字母 'ô'。",
      "descEn": "House numbers are white plates with red borders; concrete poles use twin round posts in an inverted triangle; directional street signs are rectangular without pointed arrow tails (unlike Czechia); Slovak language uses letter 'ô' with circumflex.",
      "tagsZh": [
        "电线杆"
      ],
      "tagsEn": [
        "Utility Poles"
      ]
    },
    {
      "id": "slovenia",
      "nameEn": "Slovenia",
      "nameZh": "斯洛文尼亚",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇸🇮",
      "link": "",
      "desc": "地名中极高频出现介词 'pri'（如 ... pri ...）；处于阿尔卑斯高山向巴尔干喀斯特过渡的葱翠森林地貌；公路里程桩为扁平白铁板，左上角带有黄色小色块；路缘标带有黑色平顶塑料盖，背面为长方形白色反光板。",
      "tags": [
        "路缘标 / Bollard"
      ],
      "descZh": "地名中极高频出现 ‘pri’ 词缀（如 Pri Cerkvi）；属于典型的阿尔卑斯山脉与巴尔干喀斯特过渡地貌；里程牌为白色方板，左上角带有黄色小方块；Bollard 柱帽为黑色，背面带有白色反光板；路牌常为白底黑字。",
      "descEn": "Place names frequently contain the word 'pri' (meaning 'at/near'); transitional topography between Julian Alps and Balkan karst; milestone markers are white plates with a small yellow square in the upper-left corner; bollards feature black caps with white rear reflectors; white road signs.",
      "tagsZh": [
        "路缘标"
      ],
      "tagsEn": [
        "Bollards"
      ]
    },
    {
      "id": "south-africa",
      "nameEn": "South Africa",
      "nameZh": "南非",
      "continentEn": "Africa",
      "continentZh": "非洲",
      "flag": "🇿🇦",
      "link": "",
      "desc": "车辆靠左侧行驶；道路外侧边线为明亮的黄色实线，中央分道线为白色虚线；木制电线杆上常安装有大量瓷绝缘子串；四代超高清街景普及度极高；地貌丰富，从开普敦灌木林到德拉肯斯堡山脉。",
      "tags": [
        "左行 / LHD",
        "电线杆 / Pole",
        "道路标线 / Lines"
      ],
      "descZh": "车辆靠左侧行驶；道路外侧边线为明亮的黄色实线，中央分道线为白色虚线；木制电线杆上常安装有大量瓷绝缘子串；四代超高清街景普及度极高；地貌丰富，从开普敦灌木林到德拉肯斯堡山脉。",
      "descEn": "Left-hand drive; solid yellow outer road edge lines with dashed white center lines; wooden utility poles heavily equipped with ceramic insulator racks; extensive high-definition Gen 4 coverage; varied biomes from Fynbos to highveld grasslands.",
      "tagsZh": [
        "左侧行驶",
        "电线杆",
        "道路标线"
      ],
      "tagsEn": [
        "Left-Hand Drive",
        "Utility Poles",
        "Road Markings"
      ]
    },
    {
      "id": "south-korea",
      "nameEn": "South Korea",
      "nameZh": "韩国",
      "continentEn": "Asia",
      "continentZh": "亚洲",
      "flag": "🇰🇷",
      "link": "",
      "desc": "韩语谚文文字由大量的方块、圆圈与横竖直线组合而成（'ㅇ'、'ㅁ'）；电话区号以 '02'（首尔首善区）或 '0XX' 开头；住宅门前常挂有五边形小盾牌门牌；电线杆上贴有密集的黄色警示反光带与地籍号码条。",
      "tags": [
        "语言 / Script"
      ],
      "descZh": "韩语谚文文字由大量的方块、圆圈与横竖直线组合而成（'ㅇ'、'ㅁ'）；电话区号以 '02'（首尔首善区）或 '0XX' 开头；住宅门前常挂有五边形小盾牌门牌；电线杆上贴有密集的黄色警示反光带与地籍号码条。",
      "descEn": "Korean Hangul script with ubiquitous circular and square syllabic blocks ('ㅇ', 'ㅁ'); phone numbers prefixed with '02' (Seoul) or '0XX'; pentagonal house number shields; utility poles tagged with bright yellow hazard wraps and numbered coordinate plates.",
      "tagsZh": [
        "语言文字"
      ],
      "tagsEn": [
        "Language & Script"
      ]
    },
    {
      "id": "spain",
      "nameEn": "Spain",
      "nameZh": "西班牙",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇪🇸",
      "link": "",
      "desc": "车牌左侧带有标准欧盟蓝色条带；停止牌标注西语 'STOP'；公路编号牌丰富规范（A-高速、N-国道、C-大区公路等）；使用标志性的平头三角切角“鲨鱼鳍”状混凝土路缘标；路牌背面通常喷涂黑色；田野间常矗立着巨大的黑色奥斯本公牛铁板剪影。",
      "tags": [
        "车牌 / Plate"
      ],
      "descZh": "车牌左侧带欧盟蓝条；停止牌部分地区使用 Pare；路名后缀常为 Carretera；道路编号格式如 N-322；路侧广泛使用独特的白色“鲨鱼鳍”弧形路桩；警示标牌的红色边框颜色延伸涂刷到侧面厚度；乡村常见黑白对角线“禁止狩猎 (Coto de Caza)”警示小标牌。",
      "descEn": "EU blue strip on left of plates; stop signs occasionally read Pare in local regions; road names suffixed with Carretera; national road format N-322; distinctive 'shark-fin' curved white roadside bollards; warning sign red borders wrap around the outer side edges; rural areas feature diagonal black-and-white 'No Hunting' (Coto de Caza) signs.",
      "tagsZh": [
        "车牌特征"
      ],
      "tagsEn": [
        "License Plates"
      ]
    },
    {
      "id": "sri-lanka",
      "nameEn": "Sri Lanka",
      "nameZh": "斯里兰卡",
      "continentEn": "Asia",
      "continentZh": "亚洲",
      "flag": "🇱🇰",
      "link": "",
      "desc": "车辆靠左行驶；使用极其圆润如圆圈花环的僧伽罗文 (Sinhala) 及直曲结合的泰米尔文 (Tamil)；街景车为低视角相机 (Lowcam)，车尾有时露出蓝白红三色遮挡物；车牌前长白、后方黄；方形混凝土电线杆，上方带有凹坑孔，下方带方形孔；路桩为短粗白底黑顶石桩；街头充斥着黑篷机动三轮车、红土壤与高耸椰林。",
      "tags": [
        "左行 / LHD",
        "车牌 / Plate",
        "电线杆 / Pole",
        "街景车 / Car Meta",
        "红土 / Red Soil",
        "语言 / Script"
      ],
      "descZh": "左行国家；使用纯圆弧状僧伽罗语 (Sinhala) 或直线圆弧结合的泰米尔语 (Tamil)；街景车模糊边缘露出一抹类似法国国旗的蓝白红三色色块；低视角 Lowcam 街景；车牌前长白后方黄；方形混凝土电线杆上方有凹点，下方常带方形孔洞；短粗尖头石质路桩（上白下黑）；白色混凝土凹槽路牌；指示牌立柱刷斑马纹；满街黑顶三轮车，红土，椰子树与红瓦屋顶。",
      "descEn": "Left-hand drive; rounded Sinhala and Tamil scripts; camera blur halo displays a distinct blue-white-red tricolor patch resembling the French flag; Lowcam camera perspective; license plates are white at front and yellow at rear; square concrete poles with indentation dots on top and square hollows below; short stubby pointed stone bollards (white top, black base); white concrete recessed road signs; signposts painted with zebra stripes; black-topped tuk-tuks, red soil, coconut palms, and terracotta tile roofs.",
      "tagsZh": [
        "左侧行驶",
        "车牌特征",
        "电线杆",
        "街景车",
        "红土壤",
        "语言文字"
      ],
      "tagsEn": [
        "Left-Hand Drive",
        "License Plates",
        "Utility Poles",
        "Camera Car",
        "Red Soil",
        "Language & Script"
      ]
    },
    {
      "id": "sweden",
      "nameEn": "Sweden",
      "nameZh": "瑞典",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇸🇪",
      "link": "",
      "desc": "道路两侧边线为极其紧密短小的白色虚线（比挪威更短密，有时像轮胎印压痕）；限速与警告牌为黄色底色细红边；路标指示牌以线条描绘箭头轮廓；人行横道牌小人踩在 4 条白色竖线上；乡村窄路旁带有蓝底白字衬线大写 'M' 会车牌（M中间向上悬空，不触底，区别于挪威）；随处可见红色的法伦木屋 (Falu rödfärg) 与沃尔沃汽车。",
      "tags": [
        "路缘标 / Bollard",
        "道路标线 / Lines",
        "语言 / Script"
      ],
      "descZh": "道路边线为短虚线（比挪威更短密）或连续虚槽轮胎印；采用黄色背景红边的限速与警示牌；指路标志用细线勾勒出箭头轮廓；白黑双色柱身路缘标，配灰色反光板；人行标牌 4 条竖线且行人有明显脖子；乡间路边偶见蓝底白“M”字牌（M字中间不接触底部）；沃尔沃车极多；文字常用 Ä/ä, Ö/ö, å。",
      "descEn": "Road shoulders marked with short dashed white lines (shorter than Norway) or closely spaced rumble slots; speed and warning signs feature yellow background with red border; directional signs use thin outline arrows; white/black bollards with grey reflectors; pedestrian signs with 4 vertical lines and pedestrian with a visible neck; rural blue 'M' passing signs (M vertex does NOT touch the bottom); abundant Volvos; Swedish letters Ä/ä, Ö/ö, å.",
      "tagsZh": [
        "路缘标",
        "道路标线",
        "语言文字"
      ],
      "tagsEn": [
        "Bollards",
        "Road Markings",
        "Language & Script"
      ]
    },
    {
      "id": "switzerland",
      "nameEn": "Switzerland",
      "nameZh": "瑞士",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇨🇭",
      "link": "",
      "desc": "全境强制采用极低视角相机 (Lowcam)，车头正下方模糊圈极其紧凑小巧；车牌没有任何欧盟蓝色条带（前牌极短，后牌带有瑞士红盾十字国徽及州徽）；德语区一律使用 'ss' 代替字母 'ß'；公路以高山隧道、雪山峡谷与极为精致的深色百叶窗木屋著称。",
      "tags": [
        "车牌 / Plate"
      ],
      "descZh": "全境强制采用极低视角相机 (Lowcam)，车头正下方模糊圈极其紧凑小巧；车牌没有任何欧盟蓝色条带（前牌极短，后牌带有瑞士红盾十字国徽及州徽）；德语区一律使用 'ss' 代替字母 'ß'；公路以高山隧道、雪山峡谷与极为精致的深色百叶窗木屋著称。",
      "descEn": "Universal low camera height (Lowcam) with small blur footprint; clean license plates without EU blue strips (short front plate, rear plate carries the Swiss red cross shield and canton crest); German spelling uses 'ss' instead of 'ß'; immaculate Alpine roads with avalanche sheds, turquoise glacial lakes, and chalet shutters.",
      "tagsZh": [
        "车牌特征"
      ],
      "tagsEn": [
        "License Plates"
      ]
    },
    {
      "id": "taiwan",
      "nameEn": "Taiwan",
      "nameZh": "台湾",
      "continentEn": "Asia",
      "continentZh": "亚洲",
      "flag": "🇹🇼",
      "link": "",
      "desc": "电线杆底部涂刷有极为显眼的黄色与黑色相间倾斜斜条纹，且条纹一直接触到地面（区别于日本）；繁体汉字街道名称与带有 '路/街/巷/弄' 的绿色金属门牌；道路中心线为亮黄色线；广泛分布机车专用等待区机车瀑布。",
      "tags": [
        "电线杆 / Pole",
        "道路标线 / Lines"
      ],
      "descZh": "电线杆底部涂刷有极为显眼的黄色与黑色相间倾斜斜条纹，且条纹一直接触到地面（区别于日本）；繁体汉字街道名称与带有 '路/街/巷/弄' 的绿色金属门牌；道路中心线为亮黄色线；广泛分布机车专用等待区机车瀑布。",
      "descEn": "Utility poles are painted at the base with alternating yellow-and-black diagonal hazard stripes extending all the way to the asphalt; Traditional Chinese characters with green street plaques; yellow road centerlines; scooters and dedicated scooter waiting boxes at intersections.",
      "tagsZh": [
        "电线杆",
        "道路标线"
      ],
      "tagsEn": [
        "Utility Poles",
        "Road Markings"
      ]
    },
    {
      "id": "thailand",
      "nameEn": "Thailand",
      "nameZh": "泰国",
      "continentEn": "Asia",
      "continentZh": "亚洲",
      "flag": "🇹🇭",
      "link": "",
      "desc": "车辆靠左侧行驶；方形打孔混凝土电线杆（整齐圆孔排成一列）；泰文字母方正规整，折角处带有鲜明硬角；道路中心线为亮黄色实线或虚线；路旁民居院落前普遍立有雕梁画栋的小型佛龛神台（土地庙）；随处可见黄色出租车、双条车与皮卡。",
      "tags": [
        "左行 / LHD",
        "电线杆 / Pole",
        "道路标线 / Lines",
        "语言 / Script"
      ],
      "descZh": "车辆靠左侧行驶；方形打孔混凝土电线杆（整齐圆孔排成一列）；泰文字母方正规整，折角处带有鲜明硬角；道路中心线为亮黄色实线或虚线；路旁民居院落前普遍立有雕梁画栋的小型佛龛神台（土地庙）；随处可见黄色出租车、双条车与皮卡。",
      "descEn": "Left-hand drive; square concrete utility poles perforated with a vertical row of circular holes; Thai script with formal sharp-cornered letterforms; yellow centerlines; ubiquitous small Spirit Houses (San Phra Phum) outside homes and shops; yellow taxis, Songthaews, and pickup trucks.",
      "tagsZh": [
        "左侧行驶",
        "电线杆",
        "道路标线",
        "语言文字"
      ],
      "tagsEn": [
        "Left-Hand Drive",
        "Utility Poles",
        "Road Markings",
        "Language & Script"
      ]
    },
    {
      "id": "tunisia",
      "nameEn": "Tunisia",
      "nameZh": "突尼斯",
      "continentEn": "Africa",
      "continentZh": "非洲",
      "flag": "🇹🇳",
      "link": "",
      "desc": "街景车通常有军警皮卡车护航（车身涂装带有红色标识）；机动车牌照为黑底白字长牌，左侧带有小红色色块；道路护栏常漆成红白相间；地中海北非风貌，白色圆拱石屋搭配蓝色门窗，干旱橄榄树林。",
      "tags": [
        "车牌 / Plate",
        "街景车 / Car Meta"
      ],
      "descZh": "街景车通常有军警皮卡车护航（车身涂装带有红色标识）；机动车牌照为黑底白字长牌，左侧带有小红色色块；道路护栏常漆成红白相间；地中海北非风貌，白色圆拱石屋搭配蓝色门窗，干旱橄榄树林。",
      "descEn": "Street View car accompanied by a military/police escort pickup; black license plates with white characters and a small red patch on the left; guardrails and curbs often painted red-and-white; North African Mediterranean architecture with whitewashed cubic walls, blue arched doorways, and arid olive orchards.",
      "tagsZh": [
        "车牌特征",
        "街景车"
      ],
      "tagsEn": [
        "License Plates",
        "Camera Car"
      ]
    },
    {
      "id": "turkey",
      "nameEn": "Turkey",
      "nameZh": "土耳其",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇹🇷",
      "link": "",
      "desc": "停止牌使用土耳其语 'DUR'；路缘标顶部有一圈极其鲜明的红色圆形塑料顶盖；Chevron 弯道指示牌为红底白箭头，但白色箭头线条在上下两端并不触及边缘（留有红色边空）；高速公路沥青表面常有一颗颗细碎反光的黑点碎石；清真寺宣礼塔林立。",
      "tags": [
        "路缘标 / Bollard"
      ],
      "descZh": "停止牌使用土耳其语 'DUR'；路缘标顶部有一圈极其鲜明的红色圆形塑料顶盖；Chevron 弯道指示牌为红底白箭头，但白色箭头线条在上下两端并不触及边缘（留有红色边空）；高速公路沥青表面常有一颗颗细碎反光的黑点碎石；清真寺宣礼塔林立。",
      "descEn": "Octagonal 'DUR' stop signs; bollards feature a prominent red plastic top cap; curve chevrons are red with white arrowheads that do not touch the outer borders; highways often show mottled 'salt-and-pepper' asphalt; minarets visible across rolling Anatolian plains.",
      "tagsZh": [
        "路缘标"
      ],
      "tagsEn": [
        "Bollards"
      ]
    },
    {
      "id": "united-arab-emirates",
      "nameEn": "United Arab Emirates",
      "nameZh": "阿联酋",
      "continentEn": "Other",
      "continentZh": "其他",
      "flag": "🌍",
      "link": "",
      "desc": "街景车为银灰色或白色豪华轿车；超现代化的八车道平整公路；路旁修剪整齐的绿化椰枣树与巨型立交桥；阿拉伯语与英语双语路牌；车牌多为白底黑字短牌，带有各个酋长国英文缩写。",
      "tags": [
        "街景车 / Car Meta"
      ],
      "descZh": "街景车为银灰色或白色豪华轿车；超现代化的八车道平整公路；路旁修剪整齐的绿化椰枣树与巨型立交桥；阿拉伯语与英语双语路牌；车牌多为白底黑字短牌，带有各个酋长国英文缩写。",
      "descEn": "Camera car is a clean silver sedan; immaculate multi-lane desert expressways flanked by manicured date palms and irrigation drip lines; bilingual Arabic and English highway signage; white rectangular license plates marked with Emirate names (Dubai, Abu Dhabi).",
      "tagsZh": [
        "街景车"
      ],
      "tagsEn": [
        "Camera Car"
      ]
    },
    {
      "id": "uganda",
      "nameEn": "Uganda",
      "nameZh": "乌干达",
      "continentEn": "Africa",
      "continentZh": "非洲",
      "flag": "🇺🇬",
      "link": "",
      "desc": "车辆靠左侧行驶；街景车为白色方形丰田海拉克斯皮卡，车顶没有行李架；典型的热带东非维多利亚湖盆地深红土地貌；茂盛的香蕉林、木瓜树与赤道湿润草原。",
      "tags": [
        "左行 / LHD",
        "街景车 / Car Meta",
        "红土 / Red Soil"
      ],
      "descZh": "车辆靠左侧行驶；街景车为白色方形丰田海拉克斯皮卡，车顶没有行李架；典型的热带东非维多利亚湖盆地深红土地貌；茂盛的香蕉林、木瓜树与赤道湿润草原。",
      "descEn": "Left-hand drive; camera car is a plain white Toyota Hilux pickup without roof bars; rich deep-red laterite soil; tropical banana groves and equatorial green vegetation around Lake Victoria.",
      "tagsZh": [
        "左侧行驶",
        "街景车",
        "红土壤"
      ],
      "tagsEn": [
        "Left-Hand Drive",
        "Camera Car",
        "Red Soil"
      ]
    },
    {
      "id": "ukraine",
      "nameEn": "Ukraine",
      "nameZh": "乌克兰",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇺🇦",
      "link": "",
      "desc": "欧洲唯一在西里尔字母中使用带点字母 'і' 和双点字母 'ї' 以及 'є, ґ' 的国家；街景车尾部常能瞥见红色车身；属于红底白箭头 Chevron “AH UBER” 国家；路边栏杆、桥头或电线杆偶尔涂刷有乌克兰国旗蓝黄双色；街道简写为 'вул.' (vulytsia)。",
      "tags": [
        "街景车 / Car Meta",
        "语言 / Script"
      ],
      "descZh": "欧洲唯一在西里尔字母中使用带点字母 'і' 和双点字母 'ї' 以及 'є, ґ' 的国家；街景车尾部常能瞥见红色车身；属于红底白箭头 Chevron “AH UBER” 国家；路边栏杆、桥头或电线杆偶尔涂刷有乌克兰国旗蓝黄双色；街道简写为 'вул.' (vulytsia)。",
      "descEn": "The only European Cyrillic country using letters 'і', 'ї', 'є', and 'ґ'; red camera car body visible at the bottom; red-and-white curve chevrons; roadside guardrails, bridge railings, or poles occasionally painted in national sky-blue and yellow; street abbreviated 'вул.' (vulytsia).",
      "tagsZh": [
        "街景车",
        "语言文字"
      ],
      "tagsEn": [
        "Camera Car",
        "Language & Script"
      ]
    },
    {
      "id": "united-kingdom",
      "nameEn": "United Kingdom",
      "nameZh": "英国",
      "continentEn": "Europe",
      "continentZh": "欧洲",
      "flag": "🇬🇧",
      "link": "",
      "desc": "车辆靠左侧行驶；车牌严格采用前白后黄长条标准；电话区号以 01、02（固定座机）或 07（手机）开头；道路分道线上密集嵌入猫眼反光道钉 (Cat's eyes)；电线杆上常贴有闪电击倒行人的黄色危险警告三角牌；农场铁丝网金属栏杆大门转角一律为利落的直角焊接（区别于爱尔兰圆弧角）。",
      "tags": [
        "左行 / LHD",
        "车牌 / Plate",
        "电线杆 / Pole",
        "道路标线 / Lines"
      ],
      "descZh": "车辆靠左侧行驶；车牌严格采用前白后黄长条标准；电话区号以 01、02（固定座机）或 07（手机）开头；道路分道线上密集嵌入猫眼反光道钉 (Cat's eyes)；电线杆上常贴有闪电击倒行人的黄色危险警告三角牌；农场铁丝网金属栏杆大门转角一律为利落的直角焊接（区别于爱尔兰圆弧角）。",
      "descEn": "Left-hand drive; mandatory front-white, rear-yellow rectangular plates; telephone area codes start with 01/02 (landlines) or 07 (mobiles); reflective Cat's eyes embedded in road centerlines; hazard signs on poles feature a lightning bolt striking a stick figure; metal farm gates welded with crisp right angles (unlike Ireland's curved pipes).",
      "tagsZh": [
        "左侧行驶",
        "车牌特征",
        "电线杆",
        "道路标线"
      ],
      "tagsEn": [
        "Left-Hand Drive",
        "License Plates",
        "Utility Poles",
        "Road Markings"
      ]
    },
    {
      "id": "united-states",
      "nameEn": "United States",
      "nameZh": "美国",
      "continentEn": "North America",
      "continentZh": "北美洲",
      "flag": "🇺🇸",
      "link": "",
      "desc": "道路中央分道线几乎全境统一为鲜亮黄色；限速牌标准大字书写 'SPEED LIMIT'；电话号码高度遵循 10 位 NANP 格式 `(XXX) XXX-XXXX`；各州车牌色彩斑斓且大都只挂后牌；北美木电线杆横木丰富；绿底白字联邦州际高速盾形路标。",
      "tags": [
        "道路标线 / Lines"
      ],
      "descZh": "道路中央分道线几乎全境统一为鲜亮黄色；限速牌标准大字书写 'SPEED LIMIT'；电话号码高度遵循 10 位 NANP 格式 `(XXX) XXX-XXXX`；各州车牌色彩斑斓且大都只挂后牌；北美木电线杆横木丰富；绿底白字联邦州际高速盾形路标。",
      "descEn": "Road center lines are almost universally yellow; standard speed signs read 'SPEED LIMIT'; 10-digit phone format; vibrant state-specific license plates (many states require rear plates only); tall wooden utility poles with crossarms; green interstate and US route highway shields.",
      "tagsZh": [
        "道路标线"
      ],
      "tagsEn": [
        "Road Markings"
      ]
    },
    {
      "id": "uruguay",
      "nameEn": "Uruguay",
      "nameZh": "乌拉圭",
      "continentEn": "South America",
      "continentZh": "南美洲",
      "flag": "🇺🇾",
      "link": "",
      "desc": "街景图像普遍呈现多云阴沉的灰色天空；街景车为三代黑色轿车；Chevron 弯道标为黑底黄箭头；路边小餐馆常有国宝美食 'Chivito' 招牌；电线杆顶部横木与绝缘子构成三叉戟造型；白色路标木桩上开有四个小圆孔；全白色路缘标；道路标线有时呈现独特的双黄线夹一条白虚线（双黄夹一白）。",
      "tags": [
        "电线杆 / Pole",
        "路缘标 / Bollard",
        "街景车 / Car Meta",
        "道路标线 / Lines"
      ],
      "descZh": "街景图像通常呈现多云阴天或轻微胶片感；采用三代黑色街景车；Chevron 导向标为黑底黄箭头；市镇常出现 Chivito（国宝级牛肉汉堡）招牌；电线杆横臂与绝缘体呈三叉戟造型；路标立柱为白色且带有四个预制安装孔；全白色圆形 Bollard，背面有时呈黄色；道路中线可能白黄共用，偶见独特的“双黄夹一白”三线复合中线。",
      "descEn": "Street view frequently features overcast cloudy skies; Gen 3 black camera car; chevrons are yellow arrows on black background; Chivito sandwich signs ubiquitous in towns; pole crossarms form a trident geometry; white signposts feature four pre-drilled mounting holes; solid white bollards occasionally with yellow backs; road centerlines can mix white and yellow, occasionally with a unique 'white line sandwiched between double yellow lines'.",
      "tagsZh": [
        "电线杆",
        "路缘标",
        "街景车",
        "道路标线"
      ],
      "tagsEn": [
        "Utility Poles",
        "Bollards",
        "Camera Car",
        "Road Markings"
      ]
    },
    {
      "id": "vietnam",
      "nameEn": "Vietnam",
      "nameZh": "越南",
      "continentEn": "Asia",
      "continentZh": "亚洲",
      "flag": "🇻🇳",
      "link": "",
      "desc": "使用带极其丰富上下声调符号的越南语拉丁国语字；单词极其短小短促；道路中心线多使用黄色单线或双线；方形坚固混凝土打孔电线杆；热带水田、斗笠与飞驰的成群摩托车。",
      "tags": [
        "电线杆 / Pole",
        "道路标线 / Lines",
        "语言 / Script"
      ],
      "descZh": "使用带极其丰富上下声调符号的越南语拉丁国语字；单词极其短小短促；道路中心线多使用黄色单线或双线；方形坚固混凝土打孔电线杆；热带水田、斗笠与飞驰的成群摩托车。",
      "descEn": "Vietnamese Latin alphabet densely layered with diacritics and tone marks above and below letters; very short monosyllabic words; yellow road centerlines; sturdy square concrete utility poles with holes; tropical rice paddies, conical hats, and swarms of motorbikes.",
      "tagsZh": [
        "电线杆",
        "道路标线",
        "语言文字"
      ],
      "tagsEn": [
        "Utility Poles",
        "Road Markings",
        "Language & Script"
      ]
    }
  ],
  "comparisons": [
    {
      "id": "comp-1",
      "titleZh": "荷兰 VS 卢森堡",
      "titleEn": "Netherlands vs. Luxembourg",
      "similarities": [
        "黄色长条欧盟车牌"
      ],
      "features": [
        {
          "nameZh": "路牌背面",
          "nameEn": "Sign Backing",
          "detailsZh": [
            "荷兰：灰蓝金属色，边缘折边生硬直角。",
            "卢森堡：黑灰色，边缘带圆润的金属卷边或管状包边。"
          ],
          "detailsEn": [
            "Netherlands: Gray-blue bare metal, sharp crimped angular fold.",
            "Luxembourg: Dark gray/black, smoother rounded curved edges or tubular frames."
          ]
        },
        {
          "nameZh": "建筑风格",
          "nameEn": "Architecture",
          "detailsZh": [
            "荷兰：标志性红砖狭长排屋、巨大窗户，建筑紧挨密集。",
            "卢森堡：偏德法混合风格，浅色抹灰墙面，坡度陡峭的黑色石板屋顶。"
          ],
          "detailsEn": [
            "Netherlands: Iconic red-brick narrow rowhouses, huge windows, tightly clustered.",
            "Luxembourg: Franco-German hybrid stone/plaster houses with steep dark slate roofs."
          ]
        },
        {
          "nameZh": "地形起伏",
          "nameEn": "Topography",
          "detailsZh": [
            "荷兰：绝对平坦，仅东南部阿纳姆 (Arnhem) 或马斯特里赫特极少许微丘。",
            "卢森堡：全境多丘陵起伏，深邃河谷与茂密森林。"
          ],
          "detailsEn": [
            "Netherlands: Famously pancake flat (only slight rolling hills near Arnhem/Maastricht).",
            "Luxembourg: Undulating hills throughout, steep river valleys and dense deciduous forests."
          ]
        },
        {
          "nameZh": "语言",
          "nameEn": "Language",
          "detailsZh": [
            "荷兰：荷兰语，充斥 `ij`, `aa`, `oo`, `ee` 连写双元音。",
            "卢森堡：官方告示与路标多为法语，路名用 'Rue'。"
          ],
          "detailsEn": [
            "Netherlands: Dutch language with frequent 'ij', 'aa', 'ee', 'oo' double vowels.",
            "Luxembourg: French is primary on official road signs ('Rue de ...')."
          ]
        },
        {
          "nameZh": "路缘标",
          "nameEn": "Bollards",
          "detailsZh": [
            "荷兰：简单白色扁柱配红色长条反光片，柱顶带红圈。",
            "卢森堡：德国型黑斜顶白色柱，前端由三枚螺丝钉固定（德国为两枚）。"
          ],
          "detailsEn": [
            "Netherlands: Simple white flat post with red vertical reflector strip, red band at top.",
            "Luxembourg: German-style slanted black cap secured with 3 front screws (Germany has 2)."
          ]
        },
        {
          "nameZh": "电线杆",
          "nameEn": "Utility Poles",
          "detailsZh": [
            "荷兰：电线全部深埋地下，极少有地上架空木杆。",
            "卢森堡：村庄连接路段经常可见木质或混凝土架空电线杆。"
          ],
          "detailsEn": [
            "Netherlands: Power lines almost universally buried underground.",
            "Luxembourg: Frequent wooden and concrete overhead utility poles along rural roads."
          ]
        },
        {
          "nameZh": "人行道标牌",
          "nameEn": "Pedestrian Signs",
          "detailsZh": [
            "荷兰：小人脚下没有皮带条纹。",
            "卢森堡：小人脚下带有横向条纹。"
          ],
          "detailsEn": [
            "Netherlands: Crossing figure silhouette does not have stripes beneath feet.",
            "Luxembourg: Crossing sign features stripes beneath feet."
          ]
        },
        {
          "nameZh": "自行车道",
          "nameEn": "Cycle Tracks",
          "detailsZh": [
            "荷兰：无所不在的红褐色沥青独立自行车道体系。",
            "卢森堡：缺乏这种全国性铺天盖地的红沥青专用道。"
          ],
          "detailsEn": [
            "Netherlands: Ubiquitous reddish-brown asphalt dedicated cycle lanes.",
            "Luxembourg: Lacks extensive national red asphalt bicycle lane networks."
          ]
        },
        {
          "nameZh": "车牌微差",
          "nameEn": "Plate Details",
          "detailsZh": [
            "荷兰：前后均为黄色长牌，字形较细长。",
            "卢森堡：前后均为黄色长牌，左侧蓝色 EU 条带更宽更深。"
          ],
          "detailsEn": [
            "Netherlands: Yellow front and rear plates, narrower condensed font.",
            "Luxembourg: Yellow front and rear plates, slightly wider and bolder blue EU strip."
          ]
        },
        {
          "nameZh": "道路边缘标线",
          "nameEn": "Road Edge Lines",
          "detailsZh": [
            "荷兰：道路外侧边缘普遍使用虚线。",
            "卢森堡：道路外侧边缘通常为连续实线。"
          ],
          "detailsEn": [
            "Netherlands: Dashed white lines commonly used as road edge lines.",
            "Luxembourg: Solid continuous white road edge lines."
          ]
        },
        {
          "nameZh": "其它细节",
          "nameEn": "Miscellaneous",
          "detailsZh": [
            "荷兰：城区方形矮石墩顶端有两条细凹线。",
            "卢森堡：白色微波炉造型立式邮筒。"
          ],
          "detailsEn": [
            "Netherlands: Short square urban bollards with twin grooves on top.",
            "Luxembourg: White free-standing microwave-shaped mailboxes."
          ]
        }
      ],
      "similaritiesZh": [
        "黄色长条欧盟车牌"
      ],
      "similaritiesEn": [
        "Long yellow EU license plates"
      ]
    },
    {
      "id": "comp-2",
      "titleZh": "德国 VS 奥地利",
      "titleEn": "Germany vs. Austria",
      "similarities": [
        "都用德语，车牌左侧有蓝色欧盟条带"
      ],
      "features": [
        {
          "nameZh": "地形地貌",
          "nameEn": "Topography",
          "detailsZh": [
            "德国：大部分平原或起伏丘陵，仅极南部巴伐利亚边境有阿尔卑斯山。",
            "奥地利：大部分国土被巍峨高耸的阿尔卑斯雪山、深谷与悬崖覆盖。"
          ],
          "detailsEn": [
            "Germany: Mostly flat lowlands or rolling hills; Alps only along southernmost Bavarian border.",
            "Austria: Predominantly rugged Alpine peaks, glacial valleys, and steep rock walls."
          ]
        },
        {
          "nameZh": "路缘柱",
          "nameEn": "Bollards",
          "detailsZh": [
            "德国：白色柱身，上部有一条粗黑斜杠，嵌有两个小白色圆点或长条。",
            "奥地利：白色柱身配黑色帽子，正面嵌红色反光条。"
          ],
          "detailsEn": [
            "Germany: White post with a slanted black band containing two white circular reflector studs.",
            "Austria: White post with a slanted black cap and a red reflector strip on the front."
          ]
        },
        {
          "nameZh": "方向指示牌",
          "nameEn": "Directional Signs",
          "detailsZh": [
            "德国：黄色底色配黑色文字与黑色边框（非高速干道）。",
            "奥地利：白色底色配蓝色文字与蓝色边框。"
          ],
          "detailsEn": [
            "Germany: Yellow background with black text and border (rural secondary roads).",
            "Austria: White background with blue text and border."
          ]
        },
        {
          "nameZh": "路名后缀",
          "nameEn": "Street Suffixes",
          "detailsZh": [
            "德国：常用 'straße'（常带字母 ß）。",
            "奥地利：除了 'straße'，更频繁出现 'gasse'（小巷）。"
          ],
          "detailsEn": [
            "Germany: Commonly 'straße' (frequently written with 'ß').",
            "Austria: Alongside 'straße', 'gasse' (alley/lane) is extraordinarily prevalent."
          ]
        },
        {
          "nameZh": "小镇入口名称牌",
          "nameEn": "Town Entrance Signs",
          "detailsZh": [
            "德国：亮黄色底色、黑字、黑边框。",
            "奥地利：白色底色、蓝字或黑字、细蓝边或红边。"
          ],
          "detailsEn": [
            "Germany: Bright yellow background with black text and black border.",
            "Austria: White background with black or blue text and green/blue/red borders."
          ]
        },
        {
          "nameZh": "字体细节",
          "nameEn": "Sign Typography",
          "detailsZh": [
            "德国：DIN 1451 字体（笔画较为瘦长硬朗）。",
            "奥地利：Tern 字体（转折笔画更圆润）。"
          ],
          "detailsEn": [
            "Germany: DIN 1451 typeface (taller, narrower, geometric).",
            "Austria: Tern typeface (rounder letterforms, distinctive curved numeral tails)."
          ]
        },
        {
          "nameZh": "车牌特征",
          "nameEn": "License Plates",
          "detailsZh": [
            "德国：欧盟蓝条带下方为 'D'，城市前缀 1-3 字母，中间圆形年检贴。",
            "奥地利：欧盟蓝条带下方为 'A'，上下边缘有细红线，中间有彩色小盾徽。"
          ],
          "detailsEn": [
            "Germany: 'D' under EU flag, 1-3 letter city code, round inspection sticker.",
            "Austria: 'A' under EU flag, thin red upper/lower border stripes, central provincial crest."
          ]
        },
        {
          "nameZh": "限速标志",
          "nameEn": "Speed Signs",
          "detailsZh": [
            "德国：数字字体为 DIN 字体。",
            "奥地利：数字 5、8 等笔画带有 Tern 字体的独特小弯钩。"
          ],
          "detailsEn": [
            "Germany: Standard DIN numerals.",
            "Austria: Tern numerals with distinctive curled hooks on digits 5 and 8."
          ]
        }
      ],
      "similaritiesZh": [
        "都用德语，车牌左侧有蓝色欧盟条带"
      ],
      "similaritiesEn": [
        "Both German-speaking, blue EU strip on the left of plates"
      ]
    },
    {
      "id": "comp-3",
      "titleZh": "乌克兰 VS 俄罗斯",
      "titleEn": "Ukraine vs. Russia",
      "similarities": [
        "虽然都使用西里尔字母"
      ],
      "features": [
        {
          "nameZh": "语言特有字母",
          "nameEn": "Unique Letters",
          "detailsZh": [
            "乌克兰：独占字母 'і', 'ї', 'є', 'ґ'；街道缩写为 'вул.'。",
            "俄罗斯：独占字母 'ы', 'ё', 'ъ', 'э'；街道缩写为 'ул.'。"
          ],
          "detailsEn": [
            "Ukraine: Unique letters 'і', 'ї', 'є', 'ґ'; street abbreviated 'вул.' (vulytsia).",
            "Russia: Unique letters 'ы', 'ё', 'ъ', 'э'; street abbreviated 'ул.' (ulitsa)."
          ]
        },
        {
          "nameZh": "车牌特征",
          "nameEn": "License Plates",
          "detailsZh": [
            "乌克兰：车牌左侧带有浅蓝色或蓝黄各半的国旗条纹。",
            "俄罗斯：普通车牌为纯白底，右侧带有俄罗斯国旗小方块和数字区号。"
          ],
          "detailsEn": [
            "Ukraine: Left strip with light blue or blue-and-yellow national flag motif.",
            "Russia: Plain white plate with region code and small Russian flag on the right."
          ]
        },
        {
          "nameZh": "护栏涂装",
          "nameEn": "Guardrail Colors",
          "detailsZh": [
            "乌克兰：路边护栏、桥头或路灯杆偶尔刷成黄蓝相间（国旗色）。",
            "俄罗斯：通常为纯金属灰色护栏，底部偶刷黑白反光漆。"
          ],
          "detailsEn": [
            "Ukraine: Roadside guardrails or lamp posts occasionally painted in yellow and blue.",
            "Russia: Standard galvanized metal guardrails, sometimes with black-and-white hazard marks."
          ]
        },
        {
          "nameZh": "街景车",
          "nameEn": "Camera Car",
          "detailsZh": [
            "乌克兰：仅有三代街景车，车头或车尾常露出红色车身。",
            "俄罗斯：极其多样；远东或西伯利亚偶尔有红车，但是四代无天线车。"
          ],
          "detailsEn": [
            "Ukraine: Exclusively Gen 3 coverage, commonly showing a red car hood or bumper.",
            "Russia: Very diverse; occasional red Gen 4 car in Siberia without antenna."
          ]
        },
        {
          "nameZh": "地形植被",
          "nameEn": "Terrain & Flora",
          "detailsZh": [
            "乌克兰：绝大部分极度平坦；望不到边的农田黑土地；密集高耸的黑杨树。",
            "俄罗斯：除东欧平原外，广泛分布针叶泰加林、落叶松林及乌拉尔等山系。"
          ],
          "detailsEn": [
            "Ukraine: Exceptionally flat agricultural terrain, black chernozem soil, tall black poplars.",
            "Russia: Mix of flat plains and vast taiga pine/larch forests and mountain ranges."
          ]
        },
        {
          "nameZh": "城镇入口标志",
          "nameEn": "Town Entrance Signs",
          "detailsZh": [
            "乌克兰：多为白色背景立牌。",
            "俄罗斯：多为蓝色背景立牌。"
          ],
          "detailsEn": [
            "Ukraine: Commonly white background town boundary signs.",
            "Russia: Commonly blue background town signs."
          ]
        },
        {
          "nameZh": "村庄建筑",
          "nameEn": "Village Architecture",
          "detailsZh": [
            "乌克兰：房屋外墙常涂刷成亮色（浅蓝、白色、黄色抹灰）。",
            "俄罗斯：农村地区大量采用深棕色原木木屋（Izba），雕花窗框更具特色。"
          ],
          "detailsEn": [
            "Ukraine: Plastered cottages painted in pastel shades (light blue, cream, yellow).",
            "Russia: Dark brown log timber houses (Izbas) with decorative carved window frames."
          ]
        },
        {
          "nameZh": "地名后缀",
          "nameEn": "Place Name Suffixes",
          "detailsZh": [
            "乌克兰：村镇地名常以 '-iv' (–ів) 结尾。",
            "俄罗斯：地名常以 '-ov' (–ов) 或 '-sk' (–ск) 结尾。"
          ],
          "detailsEn": [
            "Ukraine: Surnames and towns frequently end in '-iv' (-ів).",
            "Russia: Towns frequently end in '-ov' (-ов) or '-sk' (-ск)."
          ]
        }
      ],
      "similaritiesZh": [
        "虽然都使用西里尔字母"
      ],
      "similaritiesEn": [
        "Both use Cyrillic script in East Slavic linguistic group"
      ]
    },
    {
      "id": "comp-4",
      "titleZh": "捷克 VS 斯洛伐克",
      "titleEn": "Czechia vs. Slovakia",
      "similarities": [
        "中欧风格，相同路缘柱"
      ],
      "features": [
        {
          "nameZh": "房屋门牌",
          "nameEn": "House Numbers",
          "detailsZh": [
            "捷克：深色背景配白色文字（红底或蓝底白字）。",
            "斯洛伐克：白色背景配深色文字（白底黑字或红框）。"
          ],
          "detailsEn": [
            "Czechia: Dark background with white numbers (red or blue plates).",
            "Slovakia: White background with dark numbers (white plates with red borders)."
          ]
        },
        {
          "nameZh": "路牌细节",
          "nameEn": "Road Signs",
          "detailsZh": [
            "捷克：路牌边框内留有空隙；柱顶常有黑盖；字体较细；指向牌带三角尖头。",
            "斯洛伐克：路牌边框紧贴边缘；字体较粗；方向牌多为矩形圆角无尖头。"
          ],
          "detailsEn": [
            "Czechia: Gap between border line and sign edge; black pole cap; pointed arrow heads.",
            "Slovakia: Border line touches outer edge; bolder font; rounded rectangular signs without arrows."
          ]
        },
        {
          "nameZh": "电线杆",
          "nameEn": "Utility Poles",
          "detailsZh": [
            "捷克：双圆杆倒三角结构，杆身无黄色贴纸。",
            "斯洛伐克：西部电线杆上常贴有黄色圆形反光警示贴纸。"
          ],
          "detailsEn": [
            "Czechia: Inverted triangle twin round poles; no yellow circular stickers.",
            "Slovakia: Utility poles in western regions frequently carry yellow circular stickers."
          ]
        },
        {
          "nameZh": "自然地貌",
          "nameEn": "Landscape",
          "detailsZh": [
            "捷克：地形较为平缓或为温和丘陵，成片金黄油菜花田 (Rapeseed)。",
            "斯洛伐克：地形明显更加崎岖高耸，塔特拉山脉 (Tatras) 巍峨壮丽。"
          ],
          "detailsEn": [
            "Czechia: Rolling gentle farmland, extensive yellow rapeseed crops.",
            "Slovakia: Far more mountainous and dramatic with the towering High Tatras."
          ]
        },
        {
          "nameZh": "语言差异",
          "nameEn": "Language",
          "detailsZh": [
            "捷克语：独占字母 'ř' (带抑扬符) 和 'ů' (带小圆圈)；如 'papír'。",
            "斯洛伐克语：独占字母 'ô' (带折音符), 'ľ' (带撇), 'ä' (带两点)；如 'papier'。"
          ],
          "detailsEn": [
            "Czech: Unique letters 'ř' and 'ů'; uses diphthongs 'papír'.",
            "Slovak: Unique letters 'ô', 'ľ', 'ä'; uses diphthongs 'papier'."
          ]
        },
        {
          "nameZh": "道路标线",
          "nameEn": "Road Markings",
          "detailsZh": [
            "捷克：乡间道路常有实线白色边线而中间无中线。",
            "斯洛伐克：较少出现这种无中线实边线结构。"
          ],
          "detailsEn": [
            "Czechia: Frequently features solid white edge lines with no center line.",
            "Slovakia: Less common to see edge-only markings on rural roads."
          ]
        },
        {
          "nameZh": "建筑氛围",
          "nameEn": "Architecture",
          "detailsZh": [
            "捷克：哪怕小村庄也十分整洁古典，橙色瓦片屋顶极度普及。",
            "斯洛伐克：略带东欧苏式工业感，东部常见简朴的灰白板楼。"
          ],
          "detailsEn": [
            "Czechia: Highly tidy Bohemian village aesthetic with orange clay tile roofs.",
            "Slovakia: Slightly more post-Soviet industrial feel, concrete panel blocks in the east."
          ]
        },
        {
          "nameZh": "街景镜头",
          "nameEn": "Camera Car",
          "detailsZh": [
            "捷克：存在二代相机覆盖；三代冬季凋零街景较多；红车多在 2024-2025 年。",
            "斯洛伐克：完全没有二代相机；红车多出现在 2023 年覆盖中。"
          ],
          "detailsEn": [
            "Czechia: Retains older Gen 2 coverage; more winter bare-tree coverage.",
            "Slovakia: No Gen 2 camera; 2023 red car coverage."
          ]
        }
      ],
      "similaritiesZh": [
        "中欧风格，相同路缘柱"
      ],
      "similaritiesEn": [
        "Both West Slavic, former Czechoslovakia, similar red/blue plates"
      ]
    },
    {
      "id": "comp-5",
      "titleZh": "西班牙 VS 葡萄牙",
      "titleEn": "Spain vs. Portugal",
      "similarities": [],
      "features": [
        {
          "nameZh": "STOP 标志",
          "nameEn": "Stop Signs",
          "detailsZh": [
            "西班牙：'STOP' 字体较小，外留较宽红边。",
            "葡萄牙：'STOP' 字体更大，占据八角形绝大部分面积。"
          ],
          "detailsEn": [
            "Spain: Smaller 'STOP' lettering with wider red margin.",
            "Portugal: Larger, bolder 'STOP' lettering filling most of the octagonal face."
          ]
        },
        {
          "nameZh": "人行道标志",
          "nameEn": "Pedestrian Signs",
          "detailsZh": [
            "西班牙：斑马线有 8 道竖线。",
            "葡萄牙：斑马线有 5 道竖线。"
          ],
          "detailsEn": [
            "Spain: Crosswalk sign shows 8 vertical stripes on zebra crossing.",
            "Portugal: Crosswalk sign shows 5 vertical stripes."
          ]
        },
        {
          "nameZh": "车牌特征",
          "nameEn": "License Plates",
          "detailsZh": [
            "西班牙：标准普通欧洲车牌（仅左侧有蓝条）。",
            "葡萄牙：老式车牌右侧带有一条独特的黄色竖条（新车牌取消但旧车极多）。"
          ],
          "detailsEn": [
            "Spain: Standard EU plate with blue strip only on the left.",
            "Portugal: Older plates feature a distinctive yellow vertical band on the right edge."
          ]
        },
        {
          "nameZh": "电线杆",
          "nameEn": "Utility Poles",
          "detailsZh": [
            "西班牙：梯子型混凝土杆孔洞较大。",
            "葡萄牙：细长混凝土梯子杆，横档之间带有更细密的方形穿孔。"
          ],
          "detailsEn": [
            "Spain: Wide-rung concrete ladder poles.",
            "Portugal: Slender concrete ladder poles with rectangular perforations."
          ]
        },
        {
          "nameZh": "语言",
          "nameEn": "Language",
          "detailsZh": [
            "西班牙：西班牙语，常见 'Calle', 'Plaza', 'Avenida', 字母 'ñ'。",
            "葡萄牙：葡萄牙语，常见 'Rua', 'Travessa', 字母 'ç', 鼻音元音 'ã', 'õ'。"
          ],
          "detailsEn": [
            "Spain: Spanish ('Calle', 'Plaza', letter 'ñ').",
            "Portugal: Portuguese ('Rua', 'Travessa', letter 'ç', nasal vowels 'ã', 'õ')."
          ]
        },
        {
          "nameZh": "路缘标",
          "nameEn": "Bollards",
          "detailsZh": [
            "西班牙：矮短的三角形切角“鲨鱼鳍”水泥桩，或黄色反光片。",
            "葡萄牙：圆柱形塑料柱配纯白色反光片。"
          ],
          "detailsEn": [
            "Spain: Low triangular 'shark-fin' concrete curb posts or yellow reflectors.",
            "Portugal: Cylindrical white plastic posts with white reflectors."
          ]
        },
        {
          "nameZh": "禁打猎标志",
          "nameEn": "No Hunting Signs",
          "detailsZh": [
            "西班牙：对角黑白相间方牌。",
            "葡萄牙：对角红白相间方牌。"
          ],
          "detailsEn": [
            "Spain: Diagonal black-and-white square sign.",
            "Portugal: Diagonal red-and-white square sign."
          ]
        },
        {
          "nameZh": "护栏反光板",
          "nameEn": "Guardrail Reflectors",
          "detailsZh": [
            "西班牙：黄色反光板。",
            "葡萄牙：红色反光板。"
          ],
          "detailsEn": [
            "Spain: Yellow guardrail reflectors.",
            "Portugal: Red guardrail reflectors."
          ]
        }
      ],
      "similaritiesZh": [],
      "similaritiesEn": [
        "Both Iberian Peninsula, southern European biomes, eucalyptus"
      ]
    },
    {
      "id": "comp-6",
      "titleZh": "法国 VS 比利时法语区",
      "titleEn": "France vs. Belgium (Wallonia)",
      "similarities": [],
      "features": [
        {
          "nameZh": "路牌设计",
          "nameEn": "Road Signs",
          "detailsZh": [
            "法国：通常边缘有深蓝色或黑色外框线条，字体为 Caractères 字体。",
            "比利时：路牌简洁平整，底色纯白，东部偶尔可见德语并列。"
          ],
          "detailsEn": [
            "France: Dark blue or black border pinstripes with Caractères typeface.",
            "Belgium: Plain white signs with thin borders; occasional German bilingualism in east."
          ]
        },
        {
          "nameZh": "街道名称",
          "nameEn": "Street Suffixes",
          "detailsZh": [
            "法国：以 'Rue', 'Avenue', 'Chemin' 居多。",
            "比利时：常以荷语法语混合地名，瓦隆区常见以 '-art' 或 '-alle' 结尾。"
          ],
          "detailsEn": [
            "France: Pure French street prefixes ('Rue', 'Avenue', 'Chemin').",
            "Belgium: Walloon suffixes ending in '-art' or '-alle'."
          ]
        },
        {
          "nameZh": "车牌",
          "nameEn": "License Plates",
          "detailsZh": [
            "法国：黑字白底，左右两端均有蓝色条带（双蓝条）。",
            "比利时：独特的白底暗红字车牌（模糊后呈现明显粉红色调）。"
          ],
          "detailsEn": [
            "France: White plates with blue bands on both left and right edges.",
            "Belgium: Distinctive dark red text on white plate (appears pinkish blurred)."
          ]
        },
        {
          "nameZh": "斑马线",
          "nameEn": "Pedestrian Markings",
          "detailsZh": [
            "法国：纯平行的粗白实线斑马线。",
            "比利时：斑马线两端横木有时由细虚线封边连接，形成网格感。"
          ],
          "detailsEn": [
            "France: Standard parallel thick white bars.",
            "Belgium: Crosswalk bars sometimes bordered by dashed lines creating grid-like look."
          ]
        }
      ],
      "similaritiesZh": [],
      "similaritiesEn": [
        "Both French-speaking Western European, red brick architecture"
      ]
    },
    {
      "id": "comp-7",
      "titleZh": "冰岛 VS 法罗群岛",
      "titleEn": "Iceland vs. Faroe Islands",
      "similarities": [],
      "features": [
        {
          "nameZh": "植被",
          "nameEn": "Foliage",
          "detailsZh": [
            "冰岛：苔原为主，偶有低矮人工防风林，大面积黑熔岩地表。",
            "法罗群岛：全境极其翠绿湿润，陡峭草坡，完全没有任何树木。"
          ],
          "detailsEn": [
            "Iceland: Mossy arctic tundra, dark black basalt lava, rare forestry patches.",
            "Faroe Islands: Extremely lush emerald-green cliff slopes; absolutely zero trees."
          ]
        },
        {
          "nameZh": "地形",
          "nameEn": "Terrain",
          "detailsZh": [
            "冰岛：开阔平原、冰川火山、黑色沙滩，地貌丰富多变。",
            "法罗群岛：破碎峡湾群岛，陡峭悬崖直直插入北大西洋。"
          ],
          "detailsEn": [
            "Iceland: Vast expansive plains, volcanic cones, black sand beaches, glacial moraines.",
            "Faroe Islands: Highly fragmented jagged archipelago with sheer cliffs plunging into ocean."
          ]
        },
        {
          "nameZh": "街景车",
          "nameEn": "Camera Car",
          "detailsZh": [
            "冰岛：绝大多数为三代街景，通常看不见车顶行李架。",
            "法罗群岛：绝大多数为四代街景，带天线，常能清晰见到四根黑色车顶横杠。"
          ],
          "detailsEn": [
            "Iceland: Mostly Gen 3 camera; roof racks generally invisible.",
            "Faroe Islands: Mostly Gen 4 camera with antenna; four black roof bars frequently visible."
          ]
        },
        {
          "nameZh": "路缘柱",
          "nameEn": "Bollards",
          "detailsZh": [
            "冰岛：鲜艳的黄色扁片状路桩。",
            "法罗群岛：细白色细棍，上方有黄或红色反光头。"
          ],
          "detailsEn": [
            "Iceland: Flat, bright canary-yellow roadside posts.",
            "Faroe Islands: Thin white sticks tipped with yellow or red reflector caps."
          ]
        },
        {
          "nameZh": "道路边缘",
          "nameEn": "Roads",
          "detailsZh": [
            "冰岛：沥青路面较宽，边缘修整清晰。",
            "法罗群岛：道路更狭窄，两侧带有白色虚线边线。"
          ],
          "detailsEn": [
            "Iceland: Wider two-lane paved roads with dark asphalt edges.",
            "Faroe Islands: Narrow single-track or two-lane roads with dashed white edge lines."
          ]
        },
        {
          "nameZh": "语言特有字母",
          "nameEn": "Unique Letters",
          "detailsZh": [
            "冰岛语：同时拥有字母 'þ' (Thorn) 和 'ð' (Eth)。",
            "法罗语：拥有字母 'ð'，但绝对没有字母 'þ'。"
          ],
          "detailsEn": [
            "Icelandic: Contains both letters 'þ' (Thorn) and 'ð' (Eth).",
            "Faroese: Contains letter 'ð', but strictly lacks letter 'þ'."
          ]
        }
      ],
      "similaritiesZh": [],
      "similaritiesEn": [
        "North Atlantic, treeless volcanic slopes, turf roofs"
      ]
    },
    {
      "id": "comp-8",
      "titleZh": "【波罗的海三国】爱沙尼亚 VS 拉脱维亚 VS 立陶宛",
      "titleEn": "[Baltic 3] Estonia vs. Latvia vs. Lithuania",
      "similarities": [],
      "features": [
        {
          "nameZh": "三角警示牌",
          "nameEn": "Warning Signs",
          "detailsZh": [
            "爱沙尼亚：细红边，几乎没有多余的金属外框包边。",
            "拉脱维亚：极粗红边，并带有厚实的金属边框包边。",
            "立陶宛：白底红边，标准欧盟比例。"
          ],
          "detailsEn": [
            "Estonia: Very thin red border, frameless appearance.",
            "Latvia: Exceptionally thick red border with metal framing.",
            "Lithuania: Standard balanced European warning sign borders."
          ]
        },
        {
          "nameZh": "路缘标",
          "nameEn": "Bollards",
          "detailsZh": [
            "爱沙尼亚：椭圆切角，黑底白反光板。",
            "拉脱维亚：扁形黑顶，反光板上经常印有数字。",
            "立陶宛：长方形白色柱身，上部有黑色反光贴。"
          ],
          "detailsEn": [
            "Estonia: Oval rounded top with white reflective patch on black.",
            "Latvia: Flat black top with white reflector, often stamped with numbers.",
            "Lithuania: Rectangular post with red/white reflector strips."
          ]
        },
        {
          "nameZh": "里程标",
          "nameEn": "Milestone Posts",
          "detailsZh": [
            "爱沙尼亚：金属小单片，与行车道路垂直设立。",
            "拉脱维亚：金属小单片，与行车道路平行设立。",
            "立陶宛：白底黑字小石碑。"
          ],
          "detailsEn": [
            "Estonia: Small metal sign placed perpendicular to the road.",
            "Latvia: Small metal sign mounted parallel to the road.",
            "Lithuania: Small white concrete milestone posts."
          ]
        },
        {
          "nameZh": "人行道标志",
          "nameEn": "Crosswalk Signs",
          "detailsZh": [
            "爱沙尼亚：三条竖线，标志中的黑色小人有脖子。",
            "拉脱维亚：五条竖线，小人腿部极长。",
            "立陶宛：五条竖线，标准小人比例。"
          ],
          "detailsEn": [
            "Estonia: Three vertical crosswalk lines; silhouette has a visible neck.",
            "Latvia: Five vertical lines; silhouette has extraordinarily long legs.",
            "Lithuania: Five vertical lines with standard proportions."
          ]
        },
        {
          "nameZh": "文字特征",
          "nameEn": "Language Rules",
          "detailsZh": [
            "爱沙尼亚语：芬兰-乌戈尔语系，常带 'õ', 'ä', 'ö', 'ü'，双字母高频。",
            "拉脱维亚语：波罗的语族，长音元音带长横 'ā, ē, ī, ū'，常有 'š, ž, č'。",
            "立陶宛语：波罗的语族，带点字母 'ė'，鼻音钩 'ą, ę, į, ų'。"
          ],
          "detailsEn": [
            "Estonian: Finno-Ugric, frequent 'õ', 'ä', 'ö', 'ü' and double letters.",
            "Latvian: Baltic, macrons over vowels ('ā, ē, ī, ū'), consonants 'š, ž, č'.",
            "Lithuanian: Baltic, unique 'ė' (dot above), ogoneks 'ą, ę, į, ų'."
          ]
        },
        {
          "nameZh": "街道后缀",
          "nameEn": "Street Suffixes",
          "detailsZh": [
            "爱沙尼亚：'tänav', 'tn', 'tee'。",
            "拉脱维亚：'iela' (街), 'ceļš' (路)。",
            "立陶宛：'Gatvė', 'G.'。"
          ],
          "detailsEn": [
            "Estonia: 'tänav', 'tn.', 'tee'.",
            "Latvia: 'iela' (street), 'ceļš' (road).",
            "Lithuania: 'Gatvė', 'g.' (street)."
          ]
        },
        {
          "nameZh": "弯道标志",
          "nameEn": "Chevrons",
          "detailsZh": [
            "爱沙尼亚：红底白箭头（红多白少）。",
            "拉脱维亚：白底红箭头（白多红少）。",
            "立陶宛：红白相间斜条纹板。"
          ],
          "detailsEn": [
            "Estonia: Red background with white arrowheads.",
            "Latvia: White background with red arrowheads.",
            "Lithuania: Alternating red-and-white diagonal warning boards."
          ]
        },
        {
          "nameZh": "电线杆",
          "nameEn": "Utility Poles",
          "detailsZh": [
            "爱沙尼亚：三叉戟式木横木，水泥杆身上无孔。",
            "拉脱维亚：上下错落的金属弯钩直接固定在杆身，无横木。",
            "立陶宛：带短木横梁，水泥杆身中部带有长条矩形开孔。"
          ],
          "detailsEn": [
            "Estonia: Trident-like wooden crossarm on hole-free solid concrete pole.",
            "Latvia: Alternating curved metal hooks directly on solid pole without crossarms.",
            "Lithuania: Short wooden crossarm on concrete pole with vertical slot holes."
          ]
        }
      ],
      "similaritiesZh": [],
      "similaritiesEn": [
        "Baltic States, flat Eastern European plains, birch forests"
      ]
    },
    {
      "id": "comp-9",
      "titleZh": "【阿拉伯国家】约旦 VS 阿曼 VS 卡塔尔 VS 阿联酋 VS 突尼斯 VS 黎巴嫩",
      "titleEn": "[Arab Countries] Jordan vs. Oman vs. Qatar vs. UAE vs. Tunisia vs. Lebanon",
      "similarities": [
        "- 相似点"
      ],
      "features": [
        {
          "nameZh": "车牌特征",
          "nameEn": "License Plates",
          "detailsZh": [
            "突尼斯：黑底白字长条车牌，左侧有小红条。",
            "阿曼：亮黄色长牌配黑字。",
            "卡塔尔：白色长牌配左侧暗枣红条。",
            "阿联酋：白底黑字长牌带酋长国英文名。",
            "约旦：白底带绿色或黑色字。"
          ],
          "detailsEn": [
            "Tunisia: Long black plate with white digits and red left patch.",
            "Oman: Bright yellow license plates with black characters.",
            "Qatar: White plates with a dark maroon patch on the left.",
            "UAE: White plates bearing Emirate names in English.",
            "Jordan: White plates with Arabic digits and green/black bands."
          ]
        },
        {
          "nameZh": "街景车",
          "nameEn": "Camera Car",
          "detailsZh": [
            "突尼斯：黑色汽车配天线，通常有带红条纹的警车护卫。",
            "阿曼：白色四驱皮卡，车身右侧竖立高天线。",
            "卡塔尔：白色皮卡，天线位于左侧。",
            "阿联酋：银色轿车。",
            "约旦：黑色汽车无天线。"
          ],
          "detailsEn": [
            "Tunisia: Black sedan with antenna and police escort truck.",
            "Oman: White 4x4 pickup with tall antenna on the right.",
            "Qatar: White pickup with antenna mounted on the left.",
            "UAE: Clean silver sedan.",
            "Jordan: Black sedan with zero antennas."
          ]
        },
        {
          "nameZh": "道路与路沿",
          "nameEn": "Road Infrastructure",
          "detailsZh": [
            "突尼斯：红白相间的涂刷路沿；红顶墓碑形里程碑。",
            "约旦：道路边线为黄色，中心线为白色。",
            "阿联酋：八车道超宽平整沥青高速与滴灌绿化椰枣树。",
            "阿曼：极整洁的黑色沥青路配白色边线。"
          ],
          "detailsEn": [
            "Tunisia: Red-and-white curbs; red-topped tombstone milestone blocks.",
            "Jordan: Yellow road edge lines with white center lines.",
            "UAE: 8-lane pristine asphalt desert superhighways with drip-irrigated palms.",
            "Oman: Flawless black tarmac highways through rocky gorges."
          ]
        },
        {
          "nameZh": "建筑风格",
          "nameEn": "Architecture",
          "detailsZh": [
            "突尼斯：蓝白小镇风貌，白墙配天蓝圆拱门窗。",
            "阿曼：法律强制所有纯白方块建筑带雕花窗套；随处挂苏丹画像。",
            "卡塔尔/阿联酋：超现实玻璃幕墙摩天大楼与人工绿洲。",
            "约旦：粗糙米黄色石灰石方块房。"
          ],
          "detailsEn": [
            "Tunisia: Whitewashed cubic stucco with vivid sky-blue arched doors/shutters.",
            "Oman: Pristine white cubic masonry with mandatory ornate window trims; Sultan portraits.",
            "Qatar/UAE: Hyper-modern glass skyscrapers and lush irrigated roundabouts.",
            "Jordan: Weathered sandy limestone cubic blocks on bare hillsides."
          ]
        },
        {
          "nameZh": "自然地貌",
          "nameEn": "Landscape",
          "detailsZh": [
            "突尼斯：干旱橄榄树林，仙人掌绿篱，地中海平原。",
            "阿曼：雄壮赤裸的哈贾尔红褐色岩石峡谷。",
            "约旦：佩特拉式干旱瓦迪沙漠峡谷。",
            "卡塔尔：极平坦的细白沙漠与波斯湾浅海。"
          ],
          "detailsEn": [
            "Tunisia: Dry olive groves, prickly pear hedges, Mediterranean coast.",
            "Oman: Massive jagged reddish-brown bare rocky Hajar mountain gorges.",
            "Jordan: Arid rolling gravel deserts and steep wadi canyons.",
            "Qatar: Extremely flat pale sand terrain bordering the Persian Gulf."
          ]
        }
      ],
      "similaritiesZh": [
        "- 相似点"
      ],
      "similaritiesEn": [
        "Arab World, desert terrain, Arabic script"
      ]
    },
    {
      "id": "comp-10",
      "titleZh": "印度 VS 孟加拉",
      "titleEn": "India vs. Bangladesh",
      "similarities": [],
      "features": [
        {
          "nameZh": "文字字形",
          "nameEn": "Script Features",
          "detailsZh": [
            "印度：天城文/各邦文字，字形较为方正，英文商业招牌极度密集。",
            "孟加拉：孟加拉文，笔画尖锐，顶部贯穿平线，三角形折角明显。"
          ],
          "detailsEn": [
            "India: Devanagari and regional scripts with square letterforms; widespread English ads.",
            "Bengali: Bengali script featuring sharp angular triangles and a continuous top line."
          ]
        },
        {
          "nameZh": "街景车",
          "nameEn": "Camera Car",
          "detailsZh": [
            "印度：全车身完全模糊，只能看到圆形模糊圈，保留大批一代模糊画质。",
            "孟加拉：白色轿车，后视镜涂成红色或带红条纹。"
          ],
          "detailsEn": [
            "India: Full blur circle underneath; extensive low-res Gen 1/2 coverage.",
            "Bangladesh: White sedan with distinctive red side mirrors or red mirror stripes."
          ]
        },
        {
          "nameZh": "车牌",
          "nameEn": "License Plates",
          "detailsZh": [
            "印度：普通车为白底黑字，营运车为亮黄色长牌。",
            "孟加拉：独特的蓝绿色或翠绿色车牌。"
          ],
          "detailsEn": [
            "India: White plates for private vehicles, yellow plates for commercial vehicles.",
            "Bangladesh: Unique teal, turquoise, or bright green license plates."
          ]
        },
        {
          "nameZh": "地势环境",
          "nameEn": "Environment",
          "detailsZh": [
            "印度：城市建筑密集高大，地形有平原、高原和干旱荒漠。",
            "孟加拉：极度平坦的恒河三角洲，路基明显抬高，两侧为下沉水稻梯田。"
          ],
          "detailsEn": [
            "India: Denser multi-story concrete buildings; diverse dry plateau and urban sprawl.",
            "Bangladesh: Elevated levee roads flanked by low-lying flooded rice paddies and water ponds."
          ]
        }
      ],
      "similaritiesZh": [],
      "similaritiesEn": [
        "South Asia, left-hand drive, auto-rickshaws"
      ]
    },
    {
      "id": "comp-11",
      "titleZh": "印尼 VS 马来西亚",
      "titleEn": "Indonesia vs. Malaysia",
      "similarities": [],
      "features": [
        {
          "nameZh": "车牌格式",
          "nameEn": "License Plates",
          "detailsZh": [
            "印尼：黑底白字车牌，字母数字被清晰划分为三段（如 B 1234 ABC）。",
            "马来西亚：黑底白字车牌，分为两段或一段，整体更紧凑短小。"
          ],
          "detailsEn": [
            "Indonesia: Black plate with white text divided into three distinct segments (e.g. B 1234 ABC).",
            "Malaysia: Black plate with white text divided into one or two compact segments."
          ]
        },
        {
          "nameZh": "商用车牌",
          "nameEn": "Commercial Plates",
          "detailsZh": [
            "印尼：货车与营运卡车悬挂亮黄色车牌。",
            "马来西亚：货车卡车仍普遍使用黑底白字车牌。"
          ],
          "detailsEn": [
            "Indonesia: Trucks, buses, and commercial haulers carry bright yellow plates.",
            "Malaysia: Commercial trucks and haulers generally carry black plates."
          ]
        },
        {
          "nameZh": "语言词汇",
          "nameEn": "Vocabulary",
          "detailsZh": [
            "印尼：'Jalan' 简写为 'Jl.'；警察为 'Polisi'；货币常标 'Rp'；词尾多 '-kan'。",
            "马来西亚：'Jalan' 简写为 'Jln'；警察为 'Polis'；货币标 'RM'。"
          ],
          "detailsEn": [
            "Indonesia: Street abbreviated 'Jl.'; police is 'Polisi'; currency 'Rp'; suffix '-kan'.",
            "Malaysia: Street abbreviated 'Jln'; police is 'Polis'; currency 'RM'."
          ]
        },
        {
          "nameZh": "电线杆",
          "nameEn": "Utility Poles",
          "detailsZh": [
            "印尼：方形混凝土打孔柱，顶部三枚陶瓷绝缘子排成等边三角形。",
            "马来西亚：多为金属圆管柱，或底部刷黑白斑马纹的水泥柱。"
          ],
          "detailsEn": [
            "Indonesia: Square concrete poles with dimples; three ceramic insulators in a triangle atop.",
            "Malaysia: Galvanized steel tubular poles or concrete poles with black-and-white base bands."
          ]
        },
        {
          "nameZh": "道路标线",
          "nameEn": "Road Markings",
          "detailsZh": [
            "印尼：常使用黄色单实线作为中心线；无双中线习惯。",
            "马来西亚：完全不使用黄色中线，广泛使用白虚线或双白实线。"
          ],
          "detailsEn": [
            "Indonesia: Frequent solid yellow centerlines; avoids double centerlines.",
            "Malaysia: Strictly white centerlines (dashed white or double solid white lines)."
          ]
        },
        {
          "nameZh": "公路编号",
          "nameEn": "Road Shields",
          "detailsZh": [
            "印尼：公路编号盾牌通常为圆形或带棱角的盾形。",
            "马来西亚：国家公路与州公路编号印在醒目的黄色六边形标牌内。"
          ],
          "detailsEn": [
            "Indonesia: Circular or shield-shaped national road numbers.",
            "Malaysia: Route numbers universally housed inside bright yellow-orange hexagons."
          ]
        },
        {
          "nameZh": "三轮摩托车",
          "nameEn": "Three-Wheelers",
          "detailsZh": [
            "印尼：大街小巷运行着大量巴贾机动三轮 (Bajaj) 及三轮车。",
            "马来西亚：街头极少有这种机动三轮客车。"
          ],
          "detailsEn": [
            "Indonesia: Abundant Bajaj auto-rickshaws and motorized trikes.",
            "Malaysia: Auto-rickshaws virtually non-existent on ordinary roads."
          ]
        }
      ],
      "similaritiesZh": [],
      "similaritiesEn": [
        "Maritime Southeast Asia, left-hand drive, Malay language family"
      ]
    },
    {
      "id": "comp-12",
      "titleZh": "澳大利亚 VS 新西兰",
      "titleEn": "Australia vs. New Zealand",
      "similarities": [],
      "features": [
        {
          "nameZh": "路牌配色",
          "nameEn": "Sign Colors",
          "detailsZh": [
            "澳大利亚：路牌多为白底黑字或绿底白字（大路）。",
            "新西兰：路牌普遍为深蓝底白字或绿底白字。"
          ],
          "detailsEn": [
            "Australia: Street signs predominantly white with black/green lettering.",
            "New Zealand: Street signs predominantly dark blue with white lettering."
          ]
        },
        {
          "nameZh": "限速标志",
          "nameEn": "Speed Limit Signs",
          "detailsZh": [
            "澳大利亚：白底红圈，下方明确书写英文单词 'SPEED LIMIT'。",
            "新西兰：白底红圈纯数字，绝无 'SPEED LIMIT' 字样。"
          ],
          "detailsEn": [
            "Australia: White plate with red circle and text 'SPEED LIMIT' explicitly below digits.",
            "New Zealand: Simple red circle with digits; never includes text 'SPEED LIMIT'."
          ]
        },
        {
          "nameZh": "让路标志",
          "nameEn": "Give Way Signs",
          "detailsZh": [
            "澳大利亚：倒三角形内写黑色粗体 'GIVE WAY'。",
            "新西兰：倒三角形内写鲜红色粗体 'GIVE WAY'。"
          ],
          "detailsEn": [
            "Australia: Inverted triangle with BLACK 'GIVE WAY' text.",
            "New Zealand: Inverted triangle with RED 'GIVE WAY' text."
          ]
        },
        {
          "nameZh": "路缘标",
          "nameEn": "Bollards",
          "detailsZh": [
            "澳大利亚：白柱配红色长方形反光片（红块位于正中，不包边）。",
            "新西兰：白柱配红色反光带（360度整圈包边），背面带白色反光片。"
          ],
          "detailsEn": [
            "Australia: White post with a centered red rectangular reflector (no wrap).",
            "New Zealand: White post with a 360-degree full wrap-around red reflective tape."
          ]
        },
        {
          "nameZh": "道路中线",
          "nameEn": "Road Centerlines",
          "detailsZh": [
            "澳大利亚：道路中线全境统一为纯白色线。",
            "新西兰：平原常为单白虚线，山路或超车限制段广泛使用双黄线。"
          ],
          "detailsEn": [
            "Australia: Road center lines are strictly white.",
            "New Zealand: Uses single dashed white or double solid yellow center lines."
          ]
        },
        {
          "nameZh": "电线杆",
          "nameEn": "Utility Poles",
          "detailsZh": [
            "澳大利亚：木电线杆为主，南澳有钢水泥夹杆 (Stobie)。",
            "新西兰：混凝土电线杆为主，带有镂空通孔（下粗上细）。"
          ],
          "detailsEn": [
            "Australia: Primarily raw wooden poles; Stobie steel-flanged poles in SA.",
            "New Zealand: Distinctive concrete ladder poles with slots, tapering upwards."
          ]
        },
        {
          "nameZh": "路面三角形",
          "nameEn": "Pavement Yield Mark",
          "detailsZh": [
            "澳大利亚：路面上不绘制倒三角形让路标。",
            "新西兰：路口停止线前路面通常喷涂一个巨大的白色倒三角形。"
          ],
          "detailsEn": [
            "Australia: No painted yield triangles on road asphalt.",
            "New Zealand: Large white inverted triangle painted on road surface before junctions."
          ]
        },
        {
          "nameZh": "行道树与植被",
          "nameEn": "Flora",
          "detailsZh": [
            "澳大利亚：桉树遍布，整体色调偏灰绿、干燥、土黄，西澳红土。",
            "新西兰：极其深绿起伏的丰美牧场、银蕨树、防风辐射松林。"
          ],
          "detailsEn": [
            "Australia: Eucalyptus trees everywhere, dusty gray-green tones, red dirt.",
            "New Zealand: Emerald rolling sheep hills, native silver ferns, Monterey pine windbreaks."
          ]
        },
        {
          "nameZh": "人行横道",
          "nameEn": "Crosswalk Indicators",
          "detailsZh": [
            "澳大利亚：黄色或荧光黄绿色菱形标志，画有一双黑色长筒靴和小腿。",
            "新西兰：黑白横纹金属柱顶端带有黄色发光大圆球 (Belisha beacon)。"
          ],
          "detailsEn": [
            "Australia: Yellow diamond sign depicting walking boots and legs.",
            "New Zealand: Black-and-white striped posts topped with bright orange Belisha beacons."
          ]
        }
      ],
      "similaritiesZh": [],
      "similaritiesEn": [
        "Oceania, left-hand drive, English signage, green landscapes"
      ]
    },
    {
      "id": "comp-13",
      "titleZh": "肯尼亚 VS 乌干达",
      "titleEn": "Kenya vs. Uganda",
      "similarities": [],
      "features": [
        {
          "nameZh": "街景车",
          "nameEn": "Camera Car",
          "detailsZh": [
            "肯尼亚：右前方带有显眼的黑色涉水喉 (Snorkel)。",
            "乌干达：普通白色丰田皮卡，无涉水喉，车顶无行李架。"
          ],
          "detailsEn": [
            "Kenya: Prominent black engine snorkel mounted on the front-right hood.",
            "Uganda: Plain white pickup truck with zero snorkel or roof bars."
          ]
        },
        {
          "nameZh": "交通工具",
          "nameEn": "Traffic Mix",
          "detailsZh": [
            "肯尼亚：马塔图 (Matatu) 彩绘小巴极度盛行。",
            "乌干达：博达博达 (Boda-boda) 摩托车密度极高，骑手统一穿橙黄反光背心。"
          ],
          "detailsEn": [
            "Kenya: Flamboyantly decorated Matatu minibuses dominate traffic.",
            "Uganda: Immense swarms of Boda-boda motorcycles with riders in orange/yellow vests."
          ]
        },
        {
          "nameZh": "车辆反光条",
          "nameEn": "Truck Reflectors",
          "detailsZh": [
            "肯尼亚：大型卡车和货车强制在车身侧面贴红黄斑马反光条。",
            "乌干达：没有这种强制的反光条要求。"
          ],
          "detailsEn": [
            "Kenya: Trucks legally mandated to display red-and-yellow reflective chevron tape.",
            "Uganda: No mandatory red-yellow striped truck reflective tape."
          ]
        },
        {
          "nameZh": "土壤与植被",
          "nameEn": "Soil & Foliage",
          "detailsZh": [
            "肯尼亚：红土地貌多伴随更干旱开阔的稀树草原与金合欢树。",
            "乌干达：土壤深红近紫色，植被极其翠绿茂密，热带香蕉林连绵不断。"
          ],
          "detailsEn": [
            "Kenya: Red soil in open, semi-arid acacia savanna plateau.",
            "Uganda: Deep dark red-purple soil, lush equatorial banana and tropical greenery."
          ]
        },
        {
          "nameZh": "电线杆",
          "nameEn": "Utility Poles",
          "detailsZh": [
            "肯尼亚：混凝土电线杆较多，顶部有规整横梁。",
            "乌干达：木电线杆比例极高，电线排布较为杂乱。"
          ],
          "detailsEn": [
            "Kenya: Concrete poles with tidy crossarms common along paved highways.",
            "Uganda: Higher proportion of rustic wooden poles with informal wire rigging."
          ]
        },
        {
          "nameZh": "行政区划路牌",
          "nameEn": "Administrative Signs",
          "detailsZh": [
            "肯尼亚：常见标明各 'County'（郡）界限的政府绿底公告牌。",
            "乌干达：地名多以 'Ky-' 或 'Ny-' 开头，少见 County 标志。"
          ],
          "detailsEn": [
            "Kenya: Frequent roadside billboards marking boundaries of various 'Counties'.",
            "Uganda: Place names heavily prefixed with 'Ky-' or 'Ny-'; district boundaries."
          ]
        }
      ],
      "similaritiesZh": [],
      "similaritiesEn": [
        "East Africa, left-hand drive, red soil, English/Swahili"
      ]
    },
    {
      "id": "comp-14",
      "titleZh": "尼日利亚 VS 塞内加尔",
      "titleEn": "Nigeria vs. Senegal",
      "similarities": [],
      "features": [
        {
          "nameZh": "街景车",
          "nameEn": "Camera Car",
          "detailsZh": [
            "尼日利亚：通常紧跟着一辆带有警灯护栏的警用武装皮卡车。",
            "塞内加尔：白色皮卡带四根黑色车顶横杠，且经常有天空断裂缝 (Sky Rift)。"
          ],
          "detailsEn": [
            "Nigeria: Accompanied by a police escort pickup truck with flashing light bars.",
            "Senegal: White pickup with 4 black roof bars and distinct Sky Rift stitch lines."
          ]
        },
        {
          "nameZh": "语言",
          "nameEn": "Language",
          "detailsZh": [
            "尼日利亚：官方语言为英语（路名常写 'Street', 'Road'）。",
            "塞内加尔：官方语言为法语（路名写 'Rue', 'Avenue'）。"
          ],
          "detailsEn": [
            "Nigeria: English language signage ('Street', 'Road', 'Close').",
            "Senegal: French language signage ('Rue', 'Avenue', 'Boulevard')."
          ]
        },
        {
          "nameZh": "路牌背面",
          "nameEn": "Sign Backing",
          "detailsZh": [
            "尼日利亚：路牌背面为白漆或金属原色。",
            "塞内加尔：路牌背面涂成哑光黑色。"
          ],
          "detailsEn": [
            "Nigeria: Metal silver or white painted sign backs.",
            "Senegal: Matte black painted sign backs."
          ]
        },
        {
          "nameZh": "植被景观",
          "nameEn": "Landscape",
          "detailsZh": [
            "尼日利亚：热带雨林与几内亚热带稀树草原，植被更苍翠茂密。",
            "塞内加尔：干旱荒凉的萨赫勒干旱灌木草原，满布巨大的猴面包树 (Baobab)。"
          ],
          "detailsEn": [
            "Nigeria: Lush tropical forests and green humid savanna.",
            "Senegal: Arid Sahelian sand plains and dry scrub punctuated by iconic Baobab trees."
          ]
        },
        {
          "nameZh": "车牌",
          "nameEn": "License Plates",
          "detailsZh": [
            "尼日利亚：车牌为白底长牌，数字有时为绿色或黑色。",
            "塞内加尔：车牌为蓝色长牌或白底蓝边长牌。"
          ],
          "detailsEn": [
            "Nigeria: White rectangular plates, occasionally with green lettering.",
            "Senegal: Slender blue license plates or white plates with blue borders."
          ]
        }
      ],
      "similaritiesZh": [],
      "similaritiesEn": [
        "West Africa, flat terrain, tropical and Sahelian biomes"
      ]
    },
    {
      "id": "comp-15",
      "titleZh": "南非 VS 博茨瓦纳",
      "titleEn": "South Africa vs. Botswana",
      "similarities": [],
      "features": [
        {
          "nameZh": "街景车身",
          "nameEn": "Camera Car",
          "detailsZh": [
            "南非：街景车多为蓝色轿车或四代无车身全景。",
            "博茨瓦纳：街景车为白色汽车。"
          ],
          "detailsEn": [
            "South Africa: Camera car is blue, or Gen 4 full-frame view without visible car.",
            "Botswana: Camera car is a white sedan with rear visible."
          ]
        },
        {
          "nameZh": "道路编号",
          "nameEn": "Road Codes",
          "detailsZh": [
            "南非：干道使用 'N' (国道) 或 'R' (地区干线) 编号（如 N1, R102）。",
            "博茨瓦纳：公路编号使用 'A' 开头（如 A1, A3）或 'B'。"
          ],
          "detailsEn": [
            "South Africa: Highways coded with 'N' (National) or 'R' (Regional), e.g. N1, R44.",
            "Botswana: Highways coded with 'A' (e.g. A1, A3) or 'B'."
          ]
        },
        {
          "nameZh": "路牌立柱",
          "nameEn": "Signposts",
          "detailsZh": [
            "南非：路牌立柱为普通木柱或金属灰色立柱。",
            "博茨瓦纳：路牌立柱强制刷成极其显眼的黄黑相间宽条纹。"
          ],
          "detailsEn": [
            "South Africa: Standard plain treated wood or galvanized steel signposts.",
            "Botswana: Signposts universally painted with bold alternating yellow-and-black stripes."
          ]
        },
        {
          "nameZh": "三角让路牌",
          "nameEn": "Yield Signs",
          "detailsZh": [
            "南非：红边白底倒三角让路牌。",
            "博茨瓦纳：独特的蓝底红边倒三角让路牌。"
          ],
          "detailsEn": [
            "South Africa: Standard red-and-white inverted triangle yield signs.",
            "Botswana: Distinctive blue center with thick red border inverted triangle."
          ]
        }
      ],
      "similaritiesZh": [],
      "similaritiesEn": [
        "Southern Africa, left-hand drive, dry savannah, Afrikaans/English"
      ]
    },
    {
      "id": "comp-16",
      "titleZh": "美国 VS 加拿大",
      "titleEn": "USA vs. Canada",
      "similarities": [],
      "features": [
        {
          "nameZh": "三代车模糊块",
          "nameEn": "Camera Blur",
          "detailsZh": [
            "美国：车头模糊块两侧各有一个尖尖的凸起。",
            "加拿大：车头模糊块两侧各有两个尖尖的凸起。"
          ],
          "detailsEn": [
            "USA: Gen 3 blur circle typically has a single small prong on each side.",
            "Canada: Gen 3 blur circle typically has two small prongs on each side."
          ]
        },
        {
          "nameZh": "度量衡单位",
          "nameEn": "Units & Text",
          "detailsZh": [
            "美国：全英制（英里 mph，英尺 ft）；限速牌大字写 'SPEED LIMIT'。",
            "加拿大：全公制（公里 km/h，米 m）；限速牌大字写 'MAXIMUM'。"
          ],
          "detailsEn": [
            "USA: Imperial units (mph, miles); signs say 'SPEED LIMIT'.",
            "Canada: Metric units (km/h, km); signs say 'MAXIMUM'."
          ]
        },
        {
          "nameZh": "停止牌",
          "nameEn": "Stop Signs",
          "detailsZh": [
            "美国：全境一律写英语 'STOP'。",
            "加拿大：魁北克省与部分双语区标注法语 'ARRÊT'。"
          ],
          "detailsEn": [
            "USA: Monolingual English 'STOP'.",
            "Canada: French 'ARRÊT' in Quebec and bilingual indigenous areas."
          ]
        },
        {
          "nameZh": "丁字路口警示牌",
          "nameEn": "T-Junction Signs",
          "detailsZh": [
            "美国：常为方形大红白双箭头标牌。",
            "加拿大：多为菱形红底黑箭头或黄底黑箭头标牌。"
          ],
          "detailsEn": [
            "USA: Rectangular directional chevron or black-on-yellow arrow boards.",
            "Canada: Diamond-shaped warning boards."
          ]
        },
        {
          "nameZh": "路边邮筒",
          "nameEn": "Mailboxes",
          "detailsZh": [
            "美国：深蓝色 USPS 街头邮筒。",
            "加拿大：鲜红色 Canada Post 街头邮筒。"
          ],
          "detailsEn": [
            "USA: Navy blue USPS public collection boxes.",
            "Canada: Bright red Canada Post public mailboxes."
          ]
        }
      ],
      "similaritiesZh": [],
      "similaritiesEn": [
        "North America, right-hand drive, yellow centerlines, wooden poles"
      ]
    },
    {
      "id": "comp-17",
      "titleZh": "【中美洲国家】危地马拉 VS 哥斯达黎加 VS 巴拿马 VS 波多黎各 VS 美属维京",
      "titleEn": "[Central America] Guatemala vs. Costa Rica vs. Panama vs. Puerto Rico vs. US Virgin Islands",
      "similarities": [
        "中美热带风光，短牌照"
      ],
      "features": [
        {
          "nameZh": "街景车",
          "nameEn": "Camera Car",
          "detailsZh": [
            "危地马拉：轿车带清晰后视镜与全套金属行李架横杠。",
            "哥斯达黎加：白色皮卡带车斗黑杆及天线。",
            "巴拿马：皮卡带倒U型立柱。",
            "美属维尔京：红色或白色全尺寸皮卡带右长天线。"
          ],
          "detailsEn": [
            "Guatemala: Sedan with visible side mirrors and full silver roof bars.",
            "Costa Rica: White pickup with black bed bars and tall antenna.",
            "Panama: White pickup with inverted U-bar behind cabin.",
            "USVI: Red or white pickup with tall right antenna (left-hand drive)."
          ]
        },
        {
          "nameZh": "车牌",
          "nameEn": "License Plates",
          "detailsZh": [
            "危地马拉：蓝白牌或绿白牌。",
            "哥斯达黎加：蓝白长牌。",
            "巴拿马：彩色年号方形牌。",
            "波多黎各：美式牌照无前牌。"
          ],
          "detailsEn": [
            "Guatemala: Blue/white or green/white plates.",
            "Costa Rica: Blue and white rectangular plates.",
            "Panama: Colorful annual-design metal plates.",
            "Puerto Rico: American plates, no front plate required."
          ]
        },
        {
          "nameZh": "电线杆与停止牌",
          "nameEn": "Poles & Stops",
          "detailsZh": [
            "危地马拉：电线杆底漆彩漆，停止牌写 'ALTO'。",
            "哥斯达黎加：变压器繁多横梁丰富，没有正规门牌。",
            "美属属地：美式绿底英文路牌，'STOP' 标牌。"
          ],
          "detailsEn": [
            "Guatemala: Politically painted pole bases, 'ALTO' stop signs.",
            "Costa Rica: Dense pole crossarms and transformers, distance addresses.",
            "US Territories: American green English signs, 'STOP' signs."
          ]
        }
      ],
      "similaritiesZh": [
        "中美热带风光，短牌照"
      ],
      "similaritiesEn": [
        "Central America & Caribbean, Spanish/English, tropical latitudes"
      ]
    },
    {
      "id": "comp-18",
      "titleZh": "秘鲁 VS 玻利维亚",
      "titleEn": "Peru vs. Bolivia",
      "similarities": [],
      "features": [
        {
          "nameZh": "路标柱涂装",
          "nameEn": "Signposts",
          "detailsZh": [
            "秘鲁：路标立柱底部强制刷成醒目的黑白相间斑马横条（南美唯一）。",
            "玻利维亚：路标立柱为粗糙的原木方木桩，无黑白条纹。"
          ],
          "detailsEn": [
            "Peru: Signposts painted with black-and-white zebra striping at the base.",
            "Bolivia: Signposts mounted on rough-hewn square natural timber posts."
          ]
        },
        {
          "nameZh": "路边警示桩",
          "nameEn": "Bollards",
          "detailsZh": [
            "秘鲁：白柱身、亮黄色或橙色顶部的圆柱或楔形桩。",
            "玻利维亚：罕见正规塑料路桩，多为石头或土路。"
          ],
          "detailsEn": [
            "Peru: White posts with bright yellow or orange reflector tops.",
            "Bolivia: Plastic bollards exceptionally rare on rural mountain passes."
          ]
        },
        {
          "nameZh": "波形护栏",
          "nameEn": "Guardrails",
          "detailsZh": [
            "秘鲁：金属护栏上贴有黑黄黑黄黑间隔的反光贴纸。",
            "玻利维亚：护栏上贴有黄黑黄黑黄反光贴纸（顺序略有不同）。"
          ],
          "detailsEn": [
            "Peru: Reflective stickers on guardrails in black-yellow-black pattern.",
            "Bolivia: Reflective stickers in yellow-black-yellow pattern."
          ]
        },
        {
          "nameZh": "里程碑",
          "nameEn": "Milestones",
          "detailsZh": [
            "秘鲁：黑白相间水泥碑，顶部明确标注 'PE' 字样与数字。",
            "玻利维亚：简易水泥或石头方墩，无 'PE' 标记。"
          ],
          "detailsEn": [
            "Peru: Black-and-white concrete milestones stamped with 'PE' and route number.",
            "Bolivia: Simple stone or concrete marker stones lacking 'PE' insignia."
          ]
        },
        {
          "nameZh": "电线杆",
          "nameEn": "Utility Poles",
          "detailsZh": [
            "秘鲁：三个陶瓷绝缘子排成一条垂直竖线；水泥杆底部常涂刷黄黑警示条。",
            "玻利维亚：农村多用极度扭曲弯曲的原木杆，或普通 A 形构架水泥杆。"
          ],
          "detailsEn": [
            "Peru: Three pole insulators stacked strictly vertically in a row; yellow/black bases.",
            "Bolivia: Highly crooked, twisted wooden poles in rural valleys; A-frame concrete."
          ]
        },
        {
          "nameZh": "街景车",
          "nameEn": "Camera Car",
          "detailsZh": [
            "秘鲁：黑色轿车尾部、蓝色大模糊圈或白色皮卡车身。",
            "玻利维亚：清一色白色皮卡车尾，常露出中央红色刹车灯。"
          ],
          "detailsEn": [
            "Peru: Black car back, blue blur circle, or white pickup body.",
            "Bolivia: Exclusively white pickup rear with central red third brake light visible."
          ]
        },
        {
          "nameZh": "山脉风貌",
          "nameEn": "Mountains",
          "detailsZh": [
            "秘鲁：北部安第斯山脉呈现浅灰白、米黄色干旱裸岩山峰。",
            "玻利维亚：高原山区呈现更深沉的砖红色、赭石色红土高山。"
          ],
          "detailsEn": [
            "Peru: Northern Andes feature pale gray and chalky beige arid rocky peaks.",
            "Bolivia: High Altiplano features deeper ochre, brick-red, and copper earth tones."
          ]
        },
        {
          "nameZh": "植被",
          "nameEn": "Vegetation",
          "detailsZh": [
            "秘鲁：热带山地常有团簇状如西兰花般的茂密树冠。",
            "玻利维亚：干旱峡谷密集生长独特的烛台仙人掌 (Candelabra cactus)。"
          ],
          "detailsEn": [
            "Peru: Clustered 'broccoli'-like dense canopy trees along montane slopes.",
            "Bolivia: Distinctive tall candelabra cacti growing along arid canyon roads."
          ]
        }
      ],
      "similaritiesZh": [],
      "similaritiesEn": [
        "Andean highlands, Altiplano plateau, Quechua culture, mototaxis"
      ]
    },
    {
      "id": "comp-19",
      "titleZh": "关岛 VS 北马里亚纳 VS 波多黎各",
      "titleEn": "Guam vs. Northern Mariana vs. Puerto Rico",
      "similarities": [
        ""
      ],
      "features": [
        {
          "nameZh": "通用特征",
          "nameEn": "Common Metas",
          "detailsZh": [
            "街景车全车身打码；车辆右侧行驶；热带岛屿海洋气候。"
          ],
          "detailsEn": [
            "Full camera car blur underneath; right-hand drive; tropical maritime setting."
          ]
        },
        {
          "nameZh": "波多黎各独占",
          "nameEn": "Puerto Rico Exclusives",
          "detailsZh": [
            "西班牙语为主，路牌西班牙语；车辆不需要悬挂前牌照；加勒比山峦。"
          ],
          "detailsEn": [
            "Spanish language dominance; no front license plates; Greater Antilles karst hills."
          ]
        },
        {
          "nameZh": "关岛与北马里亚纳",
          "nameEn": "Guam & NMI Exclusives",
          "detailsZh": [
            "英语为主配日韩招牌；强制挂前后双牌；路面嵌密集反光凸起片；关岛天线外倾，北马天线直立。"
          ],
          "detailsEn": [
            "English language dominance with Asian signage; front and rear plates required; heavy road studs; Guam antenna tilts out, NMI antenna is vertical."
          ]
        }
      ],
      "similaritiesZh": [
        ""
      ],
      "similaritiesEn": [
        "US Overseas Islands, American signage, tropical ocean"
      ]
    },
    {
      "id": "comp-20",
      "titleZh": "哥斯达黎加 VS 巴拿马",
      "titleEn": "Costa Rica vs. Panama",
      "similarities": [
        "中美洲热带，白色皮卡"
      ],
      "features": [
        {
          "nameZh": "街景车特征",
          "nameEn": "Camera Car",
          "detailsZh": [
            "哥斯达黎加：白色皮卡大部分车身露出，车斗上有两道黑色横梁与高天线。",
            "巴拿马：白色皮卡仅少部分露边，车厢后方有一根倒 'U' 型白色金属立柱。"
          ],
          "detailsEn": [
            "Costa Rica: White pickup largely visible with two black horizontal bed bars and antenna.",
            "Panama: White pickup rear with an inverted 'U'-shaped white roll bar behind the cabin."
          ]
        },
        {
          "nameZh": "车牌",
          "nameEn": "License Plates",
          "detailsZh": [
            "哥斯达黎加：普通民用车悬挂蓝白相间长条牌照。",
            "巴拿马：悬挂彩色小方牌，带有年份印记，底色每年更换。"
          ],
          "detailsEn": [
            "Costa Rica: Standard blue-and-white rectangular license plates.",
            "Panama: Small square metal plates with colorful changing annual color themes."
          ]
        },
        {
          "nameZh": "城市天际线",
          "nameEn": "Urban Landscape",
          "detailsZh": [
            "哥斯达黎加：几乎没有超高摩天大楼，以多山绿意小城镇为主。",
            "巴拿马：巴拿马城天际线高耸云霄，遍布几十层高密集海滨摩天大楼。"
          ],
          "detailsEn": [
            "Costa Rica: Low-rise towns amidst lush green mountains with no mega-skyscrapers.",
            "Panama: Dense skyline of dozens of gleaming oceanfront skyscrapers in Panama City."
          ]
        }
      ],
      "similaritiesZh": [
        "中美洲热带，白色皮卡"
      ],
      "similaritiesEn": [
        "Central American neighbors, Spanish, green rainforests"
      ]
    }
  ],
  "regionalGuides": [
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
  ],
  "islands": [
    {
      "nameZh": "百慕大",
      "nameEn": "Bermuda",
      "location": "北大西洋，北美东侧",
      "sovereign": "英国海外领地",
      "meta": "英式路牌、热带整洁海岛、左侧行驶，单黄中线，特色白色阶梯状屋顶。街景车为黑色方形皮卡，右侧车身几乎完全可见，无天线。车牌为白色长条配黑字。",
      "locationZh": "北大西洋，北美东侧",
      "locationEn": "North Atlantic, east of North America",
      "sovereignZh": "英国海外领地",
      "sovereignEn": "UK Overseas Territory",
      "metaZh": "英式路牌、热带整洁海岛、左侧行驶，单黄中线，特色白色阶梯状屋顶。街景车为黑色方形皮卡，右侧车身几乎完全可见，无天线。车牌为白色长条配黑字。",
      "metaEn": "British road signage; pristine tropical island; left-hand drive; single solid yellow centerline; iconic white stepped limestone roofs. Camera car is a black square pickup with right side visible and no antenna. White license plates with black characters."
    },
    {
      "nameZh": "波多黎各",
      "nameEn": "Puerto Rico",
      "location": "加勒比海，大安的列斯东部",
      "sovereign": "美国自由邦",
      "meta": "西语与美式路网混合，双语路牌常见。靠右行驶，车头通常不挂前车牌。四代街景大范围模糊，左前偶尔有短天线，右后侧黑色车身边缘常露出来；三代右前带有带小白点的垂直天线。",
      "locationZh": "加勒比海，大安的列斯东部",
      "locationEn": "Caribbean Sea, Greater Antilles",
      "sovereignZh": "美国自由邦",
      "sovereignEn": "US Commonwealth",
      "metaZh": "西语与美式路网混合，双语路牌常见。靠右行驶，车头通常不挂前车牌。四代街景大范围模糊，左前偶尔有短天线，右后侧黑色车身边缘常露出来；三代右前带有带小白点的垂直天线。",
      "metaEn": "Spanish and American hybrid infrastructure; bilingual signs. Right-hand drive; front plates generally absent. Gen 4 has large car blur with occasional front-left antenna stub; Gen 3 has a front-right vertical antenna topped with a white dot."
    },
    {
      "nameZh": "美属维尔京群岛",
      "nameEn": "U.S. Virgin Islands",
      "location": "加勒比海，波多黎各东南",
      "sovereign": "美国海外属地",
      "meta": "美式英语体系配加勒比热带植被；美系全尺寸方形红色或白色皮卡，右侧竖有细长天线；美属唯一左侧行驶地区；亮蓝或深蓝色车牌。",
      "locationZh": "加勒比海，波多黎各东南",
      "locationEn": "Caribbean Sea, southeast of Puerto Rico",
      "sovereignZh": "美国海外属地",
      "sovereignEn": "US Territory",
      "metaZh": "美式英语体系配加勒比热带植被；美系全尺寸方形红色或白色皮卡，右侧竖有细长天线；美属唯一左侧行驶地区；亮蓝或深蓝色车牌。",
      "metaEn": "American English signage amidst dense Caribbean jungle; red or white full-size pickup camera car with a tall antenna on the right; the ONLY US territory driving on the LEFT; bright blue or navy license plates."
    },
    {
      "nameZh": "普罗维登西亚和圣安德烈斯",
      "nameEn": "San Andrés y Providencia",
      "location": "加勒比海，哥伦比亚外海，尼加拉瓜沿岸",
      "sovereign": "哥伦比亚",
      "meta": "西班牙语、海岛水泥小路、加勒比度假休闲氛围。白色方形皮卡在圣安德烈斯 (San Andrés)，银灰色方形皮卡在普罗维登西亚 (Providencia)，多狭窄水泥路面。",
      "locationZh": "加勒比海，哥伦比亚外海，尼加拉瓜沿岸",
      "locationEn": "Caribbean Sea, off Nicaragua coast",
      "sovereignZh": "哥伦比亚",
      "sovereignEn": "Colombia",
      "metaZh": "西班牙语、海岛水泥小路、加勒比度假休闲氛围。白色方形皮卡在圣安德烈斯 (San Andrés)，银灰色方形皮卡在普罗维登西亚 (Providencia)，多狭窄水泥路面。",
      "metaEn": "Spanish language; narrow seaside concrete lanes; tropical resort vibe. White square pickup in San Andrés; silver-gray square pickup in Providencia; concrete road pavement."
    },
    {
      "nameZh": "库拉索",
      "nameEn": "Curaçao",
      "location": "加勒比海，小安的列斯群岛",
      "sovereign": "荷兰王国构成国",
      "meta": "荷式加勒比，荷兰语与帕皮阿门托语混合。街景车为黑色汽车，车顶横杆贴有白色反光胶带。多见仙人掌刺灌木。路牌警示牌红黄边缘从背面亦能辨认。绿底黄字或白字路牌，黄色立柱。",
      "locationZh": "加勒比海，小安的列斯群岛",
      "locationEn": "Southern Caribbean, Lesser Antilles",
      "sovereignZh": "荷兰王国构成国",
      "sovereignEn": "Constituent Country of the Netherlands",
      "metaZh": "荷式加勒比，荷兰语与帕皮阿门托语混合。街景车为黑色汽车，车顶横杆贴有白色反光胶带。多见仙人掌刺灌木。路牌警示牌红黄边缘从背面亦能辨认。绿底黄字或白字路牌，黄色立柱。",
      "metaEn": "Dutch Caribbean with Papiamento & Dutch signage. Black camera car with white tape on roof racks. Columnar cacti. Road sign borders visible from the reverse side. Green street signs with yellow posts."
    },
    {
      "nameZh": "马提尼克",
      "nameEn": "Martinique",
      "location": "加勒比海，小安的列斯群岛",
      "sovereign": "法国海外省",
      "meta": "法语路牌、火山海岛，法国海外省标准基础设施（D 字头省道路标、左右双蓝条法国车牌）。主要采用背负式三代背包徒步拍摄器 (Gen 3 Trekker)。",
      "locationZh": "加勒比海，小安的列斯群岛",
      "locationEn": "Eastern Caribbean, Lesser Antilles",
      "sovereignZh": "法国海外省",
      "sovereignEn": "French Overseas Department",
      "metaZh": "法语路牌、火山海岛，法国海外省标准基础设施（D 字头省道路标、左右双蓝条法国车牌）。主要采用背负式三代背包徒步拍摄器 (Gen 3 Trekker)。",
      "metaEn": "French signage and road codes (D-routes, dual blue stripe plates); lush volcanic Caribbean hills. Primarily covered by Gen 3 backpack Trekker footage on coastal paths."
    },
    {
      "nameZh": "北马里亚纳群岛",
      "nameEn": "Northern Mariana Islands",
      "location": "西太平洋，关岛北侧",
      "sovereign": "美国海外领地",
      "meta": "美式绿色路牌与黄中线，混杂太平洋岛屿植被与日韩语言招牌。车辆靠右行驶。全车身模糊，右前方有一根垂直长天线，角度直立向上。木制电线杆为主，路面镶嵌密集突起的反光片，到处盛开鲜艳的凤凰木红花。",
      "locationZh": "西太平洋，关岛北侧",
      "locationEn": "Western Pacific, north of Guam",
      "sovereignZh": "美国海外领地",
      "sovereignEn": "US Commonwealth",
      "metaZh": "美式绿色路牌与黄中线，混杂太平洋岛屿植被与日韩语言招牌。车辆靠右行驶。全车身模糊，右前方有一根垂直长天线，角度直立向上。木制电线杆为主，路面镶嵌密集突起的反光片，到处盛开鲜艳的凤凰木红花。",
      "metaEn": "American green signs and yellow centerlines amidst tropical Pacific palms and Asian business signs. Right-hand drive. Fully blurred camera car with a strictly vertical tall antenna on front-right. Predominantly wooden poles; heavy road raised reflectors; flame trees."
    },
    {
      "nameZh": "关岛",
      "nameEn": "Guam",
      "location": "西太平洋，马里亚纳群岛南端",
      "sovereign": "美国海外领地",
      "meta": "美式路牌与太平洋岛屿植被。车辆靠右行驶。全车身模糊处理，左侧横杆微露，右前方长天线角度明显向外倾斜（区别于北马里亚纳的直立天线）。坚固的圆柱形混凝土电线杆为主，绿色路牌，路面多反光片。",
      "locationZh": "西太平洋，马里亚纳群岛南端",
      "locationEn": "Western Pacific, Mariana Islands",
      "sovereignZh": "美国海外领地",
      "sovereignEn": "US Territory",
      "metaZh": "美式路牌与太平洋岛屿植被。车辆靠右行驶。全车身模糊处理，左侧横杆微露，右前方长天线角度明显向外倾斜（区别于北马里亚纳的直立天线）。坚固的圆柱形混凝土电线杆为主，绿色路牌，路面多反光片。",
      "metaEn": "American infrastructure in tropical Pacific setting. Right-hand drive. Fully blurred car where the front-right antenna tilts outwards (distinguishing from NMI's vertical antenna). Stout round concrete utility poles; green road signs; heavy pavement studs."
    },
    {
      "nameZh": "中途岛",
      "nameEn": "Midway Atoll",
      "location": "北太平洋，夏威夷西北",
      "sovereign": "美国属地/野生动物保护区",
      "meta": "二战历史跑道遗迹与废弃营房；平坦细白的珊瑚沙地；成千上万只黑白相间的黑背信天翁（Albatross）及其雏鸟密集布满草地与跑道两侧；高尔夫球车街景镜头。",
      "locationZh": "北太平洋，夏威夷西北",
      "locationEn": "North Pacific, northwest of Hawaii",
      "sovereignZh": "美国属地/野生动物保护区",
      "sovereignEn": "US Minor Outlying Islands",
      "metaZh": "二战历史跑道遗迹与废弃营房；平坦细白的珊瑚沙地；成千上万只黑白相间的黑背信天翁（Albatross）及其雏鸟密集布满草地与跑道两侧；高尔夫球车街景镜头。",
      "metaEn": "Historic WWII airfield strips and concrete military barracks; flat coral sand; thousands of nesting Laysan and black-footed albatrosses densely lining roads; captured on a golf cart Trekker."
    },
    {
      "nameZh": "圣诞岛",
      "nameEn": "Christmas Island",
      "location": "印度洋，澳洲西北外海",
      "sovereign": "澳大利亚外部领地",
      "meta": "车辆靠左行驶；随处可见高大的金属红蟹导向围挡和红色大螃蟹迁移警示牌；热带雨林红土单车道小路；澳洲黄色菱形警示标牌。",
      "locationZh": "印度洋，澳洲西北外海",
      "locationEn": "Indian Ocean, northwest of Australia",
      "sovereignZh": "澳大利亚外部领地",
      "sovereignEn": "Australian External Territory",
      "metaZh": "车辆靠左行驶；随处可见高大的金属红蟹导向围挡和红色大螃蟹迁移警示牌；热带雨林红土单车道小路；澳洲黄色菱形警示标牌。",
      "metaEn": "Left-hand drive; ubiquitous red crab migration fences and giant crab hazard warning signs; narrow asphalt road through dense tropical rainforest; standard Australian yellow diamond warning signs."
    },
    {
      "nameZh": "科科斯（基林）群岛",
      "nameEn": "Cocos (Keeling) Islands",
      "location": "印度洋，澳洲西北外海",
      "sovereign": "澳大利亚外部领地",
      "meta": "纯白珊瑚沙环礁与极其清澈的绿松石色潟湖；热带密集高耸的椰子树林；车辆靠左行驶；主要依靠高尔夫球车或皮卡拍摄的高清小路。",
      "locationZh": "印度洋，澳洲西北外海",
      "locationEn": "Indian Ocean, southwest of Sumatra",
      "sovereignZh": "澳大利亚外部领地",
      "sovereignEn": "Australian External Territory",
      "metaZh": "纯白珊瑚沙环礁与极其清澈的绿松石色潟湖；热带密集高耸的椰子树林；车辆靠左行驶；主要依靠高尔夫球车或皮卡拍摄的高清小路。",
      "metaEn": "Pristine white coral sand atoll with turquoise lagoons; dense tall coconut palms; left-hand drive; covered by utility buggy Trekker along coastal tracks."
    },
    {
      "nameZh": "美属萨摩亚",
      "nameEn": "American Samoa",
      "location": "南太平洋，萨摩亚群岛东部",
      "sovereign": "美国海外属地",
      "meta": "深色带斑驳锈迹的皮卡街景车；车辆靠右行驶；太平洋巍峨高耸的热带火山雨林山峰直插云霄；开放式传统萨摩亚凉亭 (Fale)；美式黄色道路中线。",
      "locationZh": "南太平洋，萨摩亚群岛东部",
      "locationEn": "South Pacific, Polynesian archipelago",
      "sovereignZh": "美国海外属地",
      "sovereignEn": "US Territory",
      "metaZh": "深色带斑驳锈迹的皮卡街景车；车辆靠右行驶；太平洋巍峨高耸的热带火山雨林山峰直插云霄；开放式传统萨摩亚凉亭 (Fale)；美式黄色道路中线。",
      "metaEn": "Dark partially rusted pickup truck camera vehicle; right-hand drive; dramatic steep green volcanic peaks plunging into the sea; open-sided traditional Samoan pavilions (Fale); American-style yellow centerlines."
    },
    {
      "nameZh": "皮特凯恩群岛",
      "nameEn": "Pitcairn Islands",
      "location": "南太平洋，极偏远孤岛",
      "sovereign": "英国海外领地",
      "meta": "全岛人口仅约50人的极偏远火山孤岛；由四轮全地形沙滩越野车 (Quad Bike / ATV) 拍摄；泥泞陡峭的红色泥土小径；悬崖峭壁面对汹涌南太平洋巨浪。",
      "locationZh": "南太平洋，极偏远孤岛",
      "locationEn": "South Pacific, isolated British outpost",
      "sovereignZh": "英国海外领地",
      "sovereignEn": "UK Overseas Territory",
      "metaZh": "全岛人口仅约50人的极偏远火山孤岛；由四轮全地形沙滩越野车 (Quad Bike / ATV) 拍摄；泥泞陡峭的红色泥土小径；悬崖峭壁面对汹涌南太平洋巨浪。",
      "metaEn": "Extremely isolated volcanic island with ~50 inhabitants; captured from a Quad Bike / ATV; steep, narrow red-clay dirt trails on lush rugged cliffs facing crashing Pacific surf."
    },
    {
      "nameZh": "留尼汪",
      "nameEn": "Réunion",
      "location": "印度洋，非洲马达加斯加东侧",
      "sovereign": "法国海外省",
      "meta": "壮丽险峻的活火山与高山深谷峡湾；法国标准公路系统（D 字头省道白底黄顶里程碑）；法语路牌；车牌左右双蓝条；热带甘蔗梯田。",
      "locationZh": "印度洋，非洲马达加斯加东侧",
      "locationEn": "Indian Ocean, east of Madagascar",
      "sovereignZh": "法国海外省",
      "sovereignEn": "French Overseas Department",
      "metaZh": "壮丽险峻的活火山与高山深谷峡湾；法国标准公路系统（D 字头省道白底黄顶里程碑）；法语路牌；车牌左右双蓝条；热带甘蔗梯田。",
      "metaEn": "Spectacular volcanic cirques and peaks (Piton de la Fournaise); standard French road infrastructure (Departmental yellow-topped milestones, French signage); dual blue stripe plates; lush tropical sugarcane."
    },
    {
      "nameZh": "格陵兰",
      "nameEn": "Greenland",
      "location": "北美东北角与北冰洋之间",
      "sovereign": "丹麦王国自治领地",
      "meta": "极地峡湾风貌，完全没有树木；色彩极其鲜艳明快的小木屋（红、黄、蓝、绿木板房）；碎石砾与冰山海湾；三轮皮卡或徒步拍摄背包镜头；丹麦语和格陵兰语路牌。",
      "locationZh": "北美东北角与北冰洋之间",
      "locationEn": "North America / Arctic Ocean",
      "sovereignZh": "丹麦王国自治领地",
      "sovereignEn": "Autonomous Territory of Denmark",
      "metaZh": "极地峡湾风貌，完全没有树木；色彩极其鲜艳明快的小木屋（红、黄、蓝、绿木板房）；碎石砾与冰山海湾；三轮皮卡或徒步拍摄背包镜头；丹麦语和格陵兰语路牌。",
      "metaEn": "Arctic tundra landscape with zero trees; brightly painted colorful wooden houses (red, yellow, blue, green); gravel roads overlooking iceberg-strewn fjords; Danish and Greenlandic (Inuit) signage."
    },
    {
      "nameZh": "法罗群岛",
      "nameEn": "Faroe Islands",
      "location": "北大西洋，冰岛与挪威之间",
      "sovereign": "丹麦自治领地",
      "meta": "街景车车顶有三根黑色金属横杆；苍翠翠绿的陡峭无树火山群山与峡湾，终年多雨雾；传统黑色木屋配绿色草皮屋顶；黄色单线羊群警示牌；黄色中线加两侧白色虚线。",
      "locationZh": "北大西洋，冰岛与挪威之间",
      "locationEn": "North Atlantic, between Iceland & Norway",
      "sovereignZh": "丹麦自治领地",
      "sovereignEn": "Autonomous Territory of Denmark",
      "metaZh": "街景车车顶有三根黑色金属横杆；苍翠翠绿的陡峭无树火山群山与峡湾，终年多雨雾；传统黑色木屋配绿色草皮屋顶；黄色单线羊群警示牌；黄色中线加两侧白色虚线。",
      "metaEn": "Camera car displays three black roof bars; dramatic emerald-green, treeless slopes dropping into ocean waters under moody clouds; turf-roofed traditional black timber homes; yellow sheep warning signs."
    },
    {
      "nameZh": "斯瓦尔巴群岛",
      "nameEn": "Svalbard",
      "location": "北冰洋，挪威极北方",
      "sovereign": "挪威领土",
      "meta": "高北极极端冻土地貌；常年积雪与永久冻土；随处可见的雪地摩托车 (Snowmobiles)；著名的白底黑色北极熊警示三角牌；挪威语路牌，建筑物架空于冻土之上。",
      "locationZh": "北冰洋，挪威极北方",
      "locationEn": "Arctic Ocean, north of Norway",
      "sovereignZh": "挪威领土",
      "sovereignEn": "Territory of Norway",
      "metaZh": "高北极极端冻土地貌；常年积雪与永久冻土；随处可见的雪地摩托车 (Snowmobiles)；著名的白底黑色北极熊警示三角牌；挪威语路牌，建筑物架空于冻土之上。",
      "metaEn": "High Arctic permafrost terrain; snow-capped tundra ridges; endless snowmobiles parked outside homes; famous polar bear hazard triangle signs (black bear on white); Norwegian signs; stilted buildings."
    },
    {
      "nameZh": "奥兰群岛",
      "nameEn": "Åland Islands",
      "location": "波罗的海，芬兰与瑞典之间",
      "sovereign": "芬兰自治区（全讲瑞典语）",
      "meta": "虽然归属芬兰，但全境官方语言为瑞典语（路牌全瑞典语且无芬兰语双语）；特征红褐色花岗岩道路碎石与沥青；红色法伦木屋；车牌没有欧盟蓝条，采用蓝字加奥兰群岛徽章。",
      "locationZh": "波罗的海，芬兰与瑞典之间",
      "locationEn": "Baltic Sea, between Finland and Sweden",
      "sovereignZh": "芬兰自治区（全讲瑞典语）",
      "sovereignEn": "Autonomous Region of Finland",
      "metaZh": "虽然归属芬兰，但全境官方语言为瑞典语（路牌全瑞典语且无芬兰语双语）；特征红褐色花岗岩道路碎石与沥青；红色法伦木屋；车牌没有欧盟蓝条，采用蓝字加奥兰群岛徽章。",
      "metaEn": "Autonomous Finnish region entirely Swedish-speaking (monolingual Swedish signs without Finnish); reddish granite asphalt gravel roads; Falun red wooden homes; plates lack EU blue strips, using blue text with Åland coat of arms."
    },
    {
      "nameZh": "曼岛",
      "nameEn": "Isle of Man",
      "location": "爱尔兰海中部，英格兰与爱尔兰之间",
      "sovereign": "英国王室属地",
      "meta": "全境覆盖二代低画质镜头；车辆靠左行驶；车牌左侧带有独特的鲜红色条纹（三曲腿图腾）；起伏开阔的牧场丘陵石墙，路旁有山石与蕨类植物。",
      "locationZh": "爱尔兰海中部，英格兰与爱尔兰之间",
      "locationEn": "Irish Sea, between Great Britain & Ireland",
      "sovereignZh": "英国王室属地",
      "sovereignEn": "British Crown Dependency",
      "metaZh": "全境覆盖二代低画质镜头；车辆靠左行驶；车牌左侧带有独特的鲜红色条纹（三曲腿图腾）；起伏开阔的牧场丘陵石墙，路旁有山石与蕨类植物。",
      "metaEn": "Covered almost entirely in Gen 2 camera; left-hand drive; license plates feature a red band on the left with the Isle of Man triskelion emblem; coastal rolling hills and stone pastures."
    },
    {
      "nameZh": "亚速群岛",
      "nameEn": "Azores",
      "location": "北大西洋，葡萄牙本土以西 1400 公里",
      "sovereign": "葡萄牙自治区",
      "meta": "葡萄牙语路牌；大西洋中火山岛，极度茂盛苍翠的草场与绣球花（Hydrangeas）花篱绿墙；黑白相间的火山玄武岩铺路石与白墙黑石角教堂；梯子型水泥电线杆。",
      "locationZh": "北大西洋，葡萄牙本土以西 1400 公里",
      "locationEn": "North Atlantic, west of Portugal",
      "sovereignZh": "葡萄牙自治区",
      "sovereignEn": "Autonomous Region of Portugal",
      "metaZh": "葡萄牙语路牌；大西洋中火山岛，极度茂盛苍翠的草场与绣球花（Hydrangeas）花篱绿墙；黑白相间的火山玄武岩铺路石与白墙黑石角教堂；梯子型水泥电线杆。",
      "metaEn": "Portuguese signage; volcanic mid-Atlantic archipelago with vibrant green crater pastures and endless blue hydrangea hedges; black volcanic basalt contrasting white stucco churches; Portuguese ladder poles."
    },
    {
      "nameZh": "马德拉",
      "nameEn": "Madeira",
      "location": "北大西洋，非洲西北外海",
      "sovereign": "葡萄牙自治区",
      "meta": "地势极其陡峭崎岖的火山大岛，悬崖峭壁、高山隧道与盘山公路密布；路边常有灌溉水渠（Levadas）；热带与亚热带混生植被；葡萄牙标准路牌。",
      "locationZh": "北大西洋，非洲西北外海",
      "locationEn": "North Atlantic, off Morocco coast",
      "sovereignZh": "葡萄牙自治区",
      "sovereignEn": "Autonomous Region of Portugal",
      "metaZh": "地势极其陡峭崎岖的火山大岛，悬崖峭壁、高山隧道与盘山公路密布；路边常有灌溉水渠（Levadas）；热带与亚热带混生植被；葡萄牙标准路牌。",
      "metaEn": "Dramatic mountainous volcanic island with sheer sea cliffs, high-altitude tunnels, and winding mountain passes; historical Levada irrigation canals; lush subtropical flora; Portuguese signage."
    },
    {
      "nameZh": "加那利群岛",
      "nameEn": "Canary Islands",
      "location": "大西洋，摩洛哥外海",
      "sovereign": "西班牙自治区",
      "meta": "西班牙国家基础设施（西班牙路牌、低矮鲨鱼鳍路缘桩、GC/TF 等岛屿省道编号）；黑色火山岩荒漠与干旱多肉仙人掌植被，南部多海滨度假白色公寓酒店。",
      "locationZh": "大西洋，摩洛哥外海",
      "locationEn": "Atlantic Ocean, west of Morocco",
      "sovereignZh": "西班牙自治区",
      "sovereignEn": "Autonomous Region of Spain",
      "metaZh": "西班牙国家基础设施（西班牙路牌、低矮鲨鱼鳍路缘桩、GC/TF 等岛屿省道编号）；黑色火山岩荒漠与干旱多肉仙人掌植被，南部多海滨度假白色公寓酒店。",
      "metaEn": "Standard Spanish road infrastructure (shark-fin bollards, island road shields GC/TF); stark black volcanic desert terrain mixed with cacti and sunny coastal whitewashed resort hotels."
    },
    {
      "nameZh": "阿鲁巴",
      "nameEn": "Aruba",
      "location": "加勒比海南部，委内瑞拉外海",
      "sovereign": "荷兰王国构成国",
      "meta": "干旱多风的热带小岛，地表满布仙人掌和标志性被季风吹向一侧倾斜的迪维迪维树 (Watapana / Divi-divi)；色彩极度鲜艳的荷属加勒比殖民风排屋；黑车带车顶胶带。",
      "locationZh": "加勒比海南部，委内瑞拉外海",
      "locationEn": "Southern Caribbean, off Venezuela coast",
      "sovereignZh": "荷兰王国构成国",
      "sovereignEn": "Constituent Country of the Netherlands",
      "metaZh": "干旱多风的热带小岛，地表满布仙人掌和标志性被季风吹向一侧倾斜的迪维迪维树 (Watapana / Divi-divi)；色彩极度鲜艳的荷属加勒比殖民风排屋；黑车带车顶胶带。",
      "metaEn": "Arid windswept Caribbean island populated by cacti and trade-wind-bent Divi-divi trees; vibrant pastel Dutch-colonial gingerbread buildings in Oranjestad; black camera car with tape on roof bars."
    },
    {
      "nameZh": "博奈尔",
      "nameEn": "Bonaire",
      "location": "加勒比海南部，小安的列斯",
      "sovereign": "荷兰特别市镇",
      "meta": "干旱加勒比岛屿；著名的黄色涂漆路边石块（用于标注世界顶级水肺潜水点编号与名称）；粉红色火烈鸟聚集的浅盐田与白色盐金字塔山；荷式建筑与美式皮卡。",
      "locationZh": "加勒比海南部，小安的列斯",
      "locationEn": "Southern Caribbean, east of Curaçao",
      "sovereignZh": "荷兰特别市镇",
      "sovereignEn": "Special Municipality of the Netherlands",
      "metaZh": "干旱加勒比岛屿；著名的黄色涂漆路边石块（用于标注世界顶级水肺潜水点编号与名称）；粉红色火烈鸟聚集的浅盐田与白色盐金字塔山；荷式建筑与美式皮卡。",
      "metaEn": "Arid terrain; roadside stones painted bright canary-yellow indicating names of dive sites; pink salt pans with giant white salt crystals pyramid piles; flamingos; Dutch Caribbean signage."
    },
    {
      "nameZh": "圣皮埃尔和密克隆",
      "nameEn": "Saint Pierre and Miquelon",
      "location": "北大西洋，加拿大纽芬兰南外海",
      "sovereign": "法国海外集体",
      "meta": "法国在北美洲最后的领地；典型的北大西洋冷温带寒冷湿润多雾海岛气候；五颜六色的北欧式木板排屋配纯正法国路牌与标线（D字头省道、左右双蓝条法国车牌）。",
      "locationZh": "北大西洋，加拿大纽芬兰南外海",
      "locationEn": "North Atlantic, south of Newfoundland",
      "sovereignZh": "法国海外集体",
      "sovereignEn": "French Overseas Collectivity",
      "metaZh": "法国在北美洲最后的领地；典型的北大西洋冷温带寒冷湿润多雾海岛气候；五颜六色的北欧式木板排屋配纯正法国路牌与标线（D字头省道、左右双蓝条法国车牌）。",
      "metaEn": "France's sole territory in North America; subpolar maritime climate; colorful wooden clapboard homes paired with authentic French road infrastructure (Departmental roads, standard French signs and plates)."
    },
    {
      "nameZh": "托克劳",
      "nameEn": "Tokelau",
      "location": "南太平洋，萨摩亚北侧",
      "sovereign": "新西兰属地",
      "meta": "极其偏远、无机场、仅靠轮船相连的珊瑚环礁；狭窄的白沙小径两侧被茂密的高大椰树林笼罩；太阳能光伏发电板密集；主要由背负式街景背包沿沙滩步道拍摄。",
      "locationZh": "南太平洋，萨摩亚北侧",
      "locationEn": "South Pacific, north of Samoa",
      "sovereignZh": "新西兰属地",
      "sovereignEn": "New Zealand Territory",
      "metaZh": "极其偏远、无机场、仅靠轮船相连的珊瑚环礁；狭窄的白沙小径两侧被茂密的高大椰树林笼罩；太阳能光伏发电板密集；主要由背负式街景背包沿沙滩步道拍摄。",
      "metaEn": "Extremely remote coral atolls with no airport; narrow white sand paths shaded by towering coconut palms; solar energy panels throughout; captured along village footpaths via Trekker backpack."
    },
    {
      "nameZh": "纽埃",
      "nameEn": "Niue",
      "location": "南太平洋，汤加东北",
      "sovereign": "新西兰自由联系国",
      "meta": "世界最大的独立隆起珊瑚环礁（石灰岩裂隙与海蚀溶洞）；车辆靠左行驶；环岛单车道柏油公路穿行于原始热带密林之中；极度清澈湛蓝的太平洋深海海湾。",
      "locationZh": "南太平洋，汤加东北",
      "locationEn": "South Pacific, east of Tonga",
      "sovereignZh": "新西兰自由联系国",
      "sovereignEn": "Associated State of New Zealand",
      "metaZh": "世界最大的独立隆起珊瑚环礁（石灰岩裂隙与海蚀溶洞）；车辆靠左行驶；环岛单车道柏油公路穿行于原始热带密林之中；极度清澈湛蓝的太平洋深海海湾。",
      "metaEn": "World's largest raised coral limestone atoll; left-hand drive; a quiet coastal ring road weaving through thick tropical forest and limestone chasms with turquoise coves."
    },
    {
      "nameZh": "库克群岛",
      "nameEn": "Cook Islands",
      "location": "南太平洋，法属波利尼西亚西侧",
      "sovereign": "新西兰自由联系国",
      "meta": "主岛拉罗汤加 (Rarotonga) 拥有陡峭壮丽的锯齿状热带雨林火山尖峰；环岛主干道环抱着白色沙滩与珊瑚礁泻湖；车辆靠左行驶；车牌以纯数字或新西兰格式为主。",
      "locationZh": "南太平洋，法属波利尼西亚西侧",
      "locationEn": "South Pacific, west of Tahiti",
      "sovereignZh": "新西兰自由联系国",
      "sovereignEn": "Associated State of New Zealand",
      "metaZh": "主岛拉罗汤加 (Rarotonga) 拥有陡峭壮丽的锯齿状热带雨林火山尖峰；环岛主干道环抱着白色沙滩与珊瑚礁泻湖；车辆靠左行驶；车牌以纯数字或新西兰格式为主。",
      "metaEn": "Rarotonga features towering jagged emerald volcanic peaks ringed by white sand beaches and reef lagoons; left-hand drive; round-island Ara Tapu coastal road; New Zealand-influenced infrastructure."
    },
    {
      "nameZh": "新喀里多尼亚",
      "nameEn": "New Caledonia",
      "location": "西南太平洋，澳洲东北珊瑚海",
      "sovereign": "法国特殊集体",
      "meta": "法国海外特殊集体；靠右行驶；标志性的极高细长南洋杉（Columnar Pines / Araucaria）耸立在海滨与红色镍矿土壤之上；纯正法国六边形标准路牌与圆柱形红白路缘标。",
      "locationZh": "西南太平洋，澳洲东北珊瑚海",
      "locationEn": "Southwest Pacific, east of Australia",
      "sovereignZh": "法国特殊集体",
      "sovereignEn": "French Special Collectivity",
      "metaZh": "法国海外特殊集体；靠右行驶；标志性的极高细长南洋杉（Columnar Pines / Araucaria）耸立在海滨与红色镍矿土壤之上；纯正法国六边形标准路牌与圆柱形红白路缘标。",
      "metaEn": "French special territory; drives on the right; iconic tall, ultra-narrow Columnar Pines (Araucaria) lining red-nickel-soil hillsides; authentic French road signs, milestones, and cylindrical bollards."
    },
    {
      "nameZh": "法属波利尼西亚",
      "nameEn": "French Polynesia",
      "location": "中南太平洋波利尼西亚群岛（大溪地/波拉波拉等）",
      "sovereign": "法国海外集体",
      "meta": "大溪地极其高耸雄伟的云雾火山山峦与碧绿环礁泻湖；路牌完全采用法国国家标准；机动车牌照为白底或黑底，末尾带有特征鲜明的 'P' 字母（代表 Polynésie）；靠右侧行驶。",
      "locationZh": "中南太平洋波利尼西亚群岛（大溪地/波拉波拉等）",
      "locationEn": "Central South Pacific (Tahiti, Bora Bora)",
      "sovereignZh": "法国海外集体",
      "sovereignEn": "French Overseas Collectivity",
      "metaZh": "大溪地极其高耸雄伟的云雾火山山峦与碧绿环礁泻湖；路牌完全采用法国国家标准；机动车牌照为白底或黑底，末尾带有特征鲜明的 'P' 字母（代表 Polynésie）；靠右侧行驶。",
      "metaEn": "Dramatic lush cloud-shrouded volcanic peaks and turquoise reef lagoons; standard French road signs; local license plates end with the distinct letter 'P' (for Polynésie); right-hand drive."
    },
    {
      "nameZh": "马约特",
      "nameEn": "Mayotte",
      "location": "莫桑比克海峡，马达加斯加西北外海",
      "sovereign": "法国海外省",
      "meta": "法国印度洋最年轻海外省；靠右侧行驶；混合了法国标准路牌（D 字头公路、双蓝条法国车牌）与东非科摩罗热带海岛风土；路旁常见猴面包树与身着艳丽马达加斯加印花布的当地居民。",
      "locationZh": "莫桑比克海峡，马达加斯加西北外海",
      "locationEn": "Mozambique Channel, northwest of Madagascar",
      "sovereignZh": "法国海外省",
      "sovereignEn": "French Overseas Department",
      "metaZh": "法国印度洋最年轻海外省；靠右侧行驶；混合了法国标准路牌（D 字头公路、双蓝条法国车牌）与东非科摩罗热带海岛风土；路旁常见猴面包树与身着艳丽马达加斯加印花布的当地居民。",
      "metaEn": "Youngest French overseas department; drives on the right; blend of standard French road infrastructure (Departmental roads, EU plates) with East African/Comorian culture; baobabs and colorful Salouva garments."
    }
  ],
  "flags": [
    {
      "region": "Africa",
      "regionZh": "非洲",
      "regionEn": "Africa",
      "items": [
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Senegal (塞内加尔) 🇸🇳：** **竖向**绿黄红 + 中心**绿星**。记忆：**“绿星闪耀”**。",
          "textEn": "**Senegal 🇸🇳:** Vertical green-yellow-red + centered green star. Mnemonic: \"Shining Green Star\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Nigeria (尼日利亚)🇳🇬：** **竖向绿白绿**，无图案。记忆：**“纯净的农业与和平”**。",
          "textEn": "**Nigeria 🇳🇬:** Vertical green-white-green, plain. Mnemonic: \"Pure Agriculture & Peace\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Ghana (加纳)🇬🇭：** **横向**红黄绿 + 中心**黑星**。记忆：**“黄金海岸黑星”**。",
          "textEn": "**Ghana 🇬🇭:** Horizontal red-yellow-green + centered black star. Mnemonic: \"Gold Coast Black Star\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Kenya (肯尼亚)🇰🇪：** ** 黑红绿横条 + 中心**马赛盾矛**。记忆：**“战斗的防御”**。",
          "textEn": "**Kenya 🇰🇪:** Black-red-green horizontal stripes + central Maasai shield & spears. Mnemonic: \"Defensive Warrior\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Uganda (乌干达)🇺🇬：** **黑黄红**六道横条 + 中心**灰冠鹤**。记忆：**“会跳舞的起重机”**。",
          "textEn": "**Uganda 🇺🇬:** Six black-yellow-red stripes + central grey crowned crane. Mnemonic: \"Dancing Crane\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Rwanda (卢旺达)🇷🇼：** ** 宽蓝条 + 黄绿条 + 右上角**金太阳**。记忆：**“告别红色的和平”**。",
          "textEn": "**Rwanda 🇷🇼:** Wide blue band + yellow-green stripes + gold sun in upper right. Mnemonic: \"Peace Without Red\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Namibia (纳米比亚)🇳🇦：** **红斜条**（带白边）+ 左上角**金太阳**。记忆：**“沙漠阳光”**。",
          "textEn": "**Namibia 🇳🇦:** Red diagonal stripe (white borders) + gold sun in upper left. Mnemonic: \"Desert Sun\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Botswana (博茨瓦纳)🇧🇼：** **浅蓝**底色 + **黑白**横条。记忆：**“水（Pula）与斑马”**。",
          "textEn": "**Botswana 🇧🇼:** Light blue field + black & white horizontal stripes. Mnemonic: \"Rain (Pula) & Zebra\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**South Africa (南非)🇿🇦：** ** 唯一的 **横向“Y”字型**，多色组合。记忆：**“和解的彩虹”**。",
          "textEn": "**South Africa 🇿🇦:** Sole horizontal \"Y\" shape with multicolored bands. Mnemonic: \"Rainbow of Reconciliation\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Lesotho (莱索托)🇱🇸：** ** 蓝白绿横条 + 中间黑色**巴索托帽**。记忆：**“高山民族风”**。",
          "textEn": "**Lesotho 🇱🇸:** Blue-white-green stripes + central black Basotho hat. Mnemonic: \"Alpine Indigenous Hat\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Eswatini (埃斯瓦蒂尼)🇸🇿：** ** 蓝黄红黄蓝 + 中心**黑白盾牌**。记忆：**“华丽的武士盾”**。",
          "textEn": "**Eswatini 🇸🇿:** Blue-yellow-red-yellow-blue + central black-and-white shield. Mnemonic: \"Splendid Warrior Shield\"."
        }
      ]
    },
    {
      "region": "Europe",
      "regionZh": "欧洲",
      "regionEn": "Europe",
      "items": [
        {
          "subgroup": "“十字”阵营（北欧与英伦）",
          "subgroupEn": "Nordic & British Crosses",
          "textZh": "**Denmark🇩🇰：** 红底 + 白色北欧十字。记忆点：**“北欧十字鼻祖，最简红白配”**。",
          "textEn": "**Denmark 🇩🇰:** Red field + white Nordic cross. Mnemonic: \"Origin of Nordic Cross, simplest red & white\"."
        },
        {
          "subgroup": "“十字”阵营（北欧与英伦）",
          "subgroupEn": "Nordic & British Crosses",
          "textZh": "**Sweden🇸🇪：** 蓝底 + 黄色北欧十字。记忆点：**“经典的宜家配色”**。",
          "textEn": "**Sweden 🇸🇪:** Blue field + yellow Nordic cross. Mnemonic: \"Classic IKEA Palette\"."
        },
        {
          "subgroup": "“十字”阵营（北欧与英伦）",
          "subgroupEn": "Nordic & British Crosses",
          "textZh": "**Norway🇳🇴：** 红底 + 蓝十字（带白边）。记忆点：**“丹麦国旗上叠加了深蓝十字”**。",
          "textEn": "**Norway 🇳🇴:** Red field + blue cross with white fimbriation. Mnemonic: \"Danish flag with indigo cross overlay\"."
        },
        {
          "subgroup": "“十字”阵营（北欧与英伦）",
          "subgroupEn": "Nordic & British Crosses",
          "textZh": "**Finland🇫🇮：** 白底 + 蓝色北欧十字。记忆点：**“白雪衬托着蓝色的湖泊”**。",
          "textEn": "**Finland 🇫🇮:** White field + blue Nordic cross. Mnemonic: \"Snow white field with blue lake waters\"."
        },
        {
          "subgroup": "“十字”阵营（北欧与英伦）",
          "subgroupEn": "Nordic & British Crosses",
          "textZh": "**Iceland🇮🇸：** 蓝底 + 红色十字（带白边）。记忆点：**“冰川白、火山红、海洋蓝”**。",
          "textEn": "**Iceland 🇮🇸:** Blue field + red cross with white fimbriation. Mnemonic: \"Glacier white, volcano red, ocean blue\"."
        },
        {
          "subgroup": "“十字”阵营（北欧与英伦）",
          "subgroupEn": "Nordic & British Crosses",
          "textZh": "**Faroe Islands🇫🇴：** 白底 + 红十字（带蓝边）。记忆点：**“挪威颜色的反转版”**。",
          "textEn": "**Faroe Islands 🇫🇴:** White field + red cross with blue fimbriation. Mnemonic: \"Inverted Norway color scheme\"."
        },
        {
          "subgroup": "“十字”阵营（北欧与英伦）",
          "subgroupEn": "Nordic & British Crosses",
          "textZh": "**Georgia：** 🇬🇪：白底+红十字，四边各有一小红十字",
          "textEn": "**:** Georgia:🇬🇪：白底+红十字，四边各有一小红十字"
        },
        {
          "subgroup": "“十字”阵营（北欧与英伦）",
          "subgroupEn": "Nordic & British Crosses",
          "textZh": "**Åland：** 蓝底 + 黄红双色十字。记忆点：**“瑞典国旗中心嵌入了红十字”**。",
          "textEn": "**Åland 🇦🇽:** Blue field + yellow & red cross. Mnemonic: \"Swedish flag with embedded red cross\"."
        },
        {
          "subgroup": "“十字”阵营（北欧与英伦）",
          "subgroupEn": "Nordic & British Crosses",
          "textZh": "**United Kingdom🇬🇧：** 蓝底 + 红白叠加米字旗。记忆点：**“多国圣十字的米字重叠”**。",
          "textEn": "**United Kingdom 🇬🇧:** Blue field + red & white combined Union Jack crosses. Mnemonic: \"Layered crosses of three patron saints\"."
        },
        {
          "subgroup": "“十字”阵营（北欧与英伦）",
          "subgroupEn": "Nordic & British Crosses",
          "textZh": "**Greece🇬🇷：** 蓝白条纹 + 左上角蓝底白十字。记忆点：**“爱琴海的蓝白条纹”**。",
          "textEn": "**Greece 🇬🇷:** Blue & white horizontal stripes + blue canton with white cross. Mnemonic: \"Aegean blue-and-white waves\"."
        },
        {
          "subgroup": "“十字”阵营（北欧与英伦）",
          "subgroupEn": "Nordic & British Crosses",
          "textZh": "**Switzerland🇨🇭：** 红色正方形 + 中心白色等臂十字。记忆点：**“唯一的正方形，红十字会反色”**。",
          "textEn": "**Switzerland 🇨🇭:** Red square field + central white equilateral cross. Mnemonic: \"Sole square national flag, inverted Red Cross\"."
        },
        {
          "subgroup": "“十字”阵营（北欧与英伦）",
          "subgroupEn": "Nordic & British Crosses",
          "textZh": "**Malta🇲🇹：** 左白右红竖条 + 左上角灰色马耳他十字。记忆点：**“白红双色配银灰色勋章”**。",
          "textEn": "**Malta 🇲🇹:** Left white, right red vertical bicolour + grey George Cross in top left canton. Mnemonic: \"Silver badge on white & red\"."
        },
        {
          "subgroup": "“垂直三色”阵营（西欧与南欧）",
          "subgroupEn": "Vertical Tricolors (Western & Southern Europe)",
          "textZh": "**France🇫🇷 (法国)：** **蓝-白-红**。现代三色旗的老祖宗。",
          "textEn": "**France 🇫🇷:** Blue-white-red vertical tricolor. Mnemonic: \"The ancestor of modern tricolors\"."
        },
        {
          "subgroup": "“垂直三色”阵营（西欧与南欧）",
          "subgroupEn": "Vertical Tricolors (Western & Southern Europe)",
          "textZh": "**Belgium🇧🇪 (比利时)：** **黑-黄-红**。颜色源自其纹章。",
          "textEn": "**Belgium 🇧🇪:** Black-yellow-red vertical tricolor. Mnemonic: \"Colors derived from Brabant heraldry\"."
        },
        {
          "subgroup": "“垂直三色”阵营（西欧与南欧）",
          "subgroupEn": "Vertical Tricolors (Western & Southern Europe)",
          "textZh": "**Italy🇮🇹 (意大利)：** **绿-白-红**。把法国的蓝换成绿（罗勒叶、意面）。",
          "textEn": "**Italy 🇮🇹:** Green-white-red vertical tricolor. Mnemonic: \"France tricolor with blue replaced by basil green\"."
        },
        {
          "subgroup": "“垂直三色”阵营（西欧与南欧）",
          "subgroupEn": "Vertical Tricolors (Western & Southern Europe)",
          "textZh": "**Ireland🇮🇪 (爱尔兰)：** **绿-白-橙**。注意最右边是橙色（代表新教徒）。",
          "textEn": "**Ireland 🇮🇪:** Green-white-orange vertical tricolor. Mnemonic: \"Orange on the right represents Protestant heritage\"."
        },
        {
          "subgroup": "“垂直三色”阵营（西欧与南欧）",
          "subgroupEn": "Vertical Tricolors (Western & Southern Europe)",
          "textZh": "**Romania🇷🇴 (罗马尼亚)：** **蓝-黄-红**。和非洲的乍得几乎一模一样。",
          "textEn": "**Romania 🇷🇴:** Blue-yellow-red vertical tricolor. Mnemonic: \"Nearly identical to Chad in Africa\"."
        },
        {
          "subgroup": "“垂直三色”阵营（西欧与南欧）",
          "subgroupEn": "Vertical Tricolors (Western & Southern Europe)",
          "textZh": "**Andorra🇦🇩 (安道尔)：** **蓝-黄-红** + 中心有国徽。",
          "textEn": "**Andorra 🇦🇩:** Blue-yellow-red vertical tricolor + centered national coat of arms."
        },
        {
          "subgroup": "“水平三色”阵营（中欧、东欧与波罗的海）",
          "subgroupEn": "Horizontal Tricolors (Central & Eastern Europe)",
          "textZh": "**经典红白蓝系列：** **",
          "textEn": "**经典红白蓝系列：:** **经典红白蓝系列：**"
        },
        {
          "subgroup": "“水平三色”阵营（中欧、东欧与波罗的海）",
          "subgroupEn": "Horizontal Tricolors (Central & Eastern Europe)",
          "textZh": "**Netherlands🇳🇱 (荷兰)：** **红-白-蓝**。横向三色旗的始祖。",
          "textEn": "**Netherlands 🇳🇱:** Red-white-blue horizontal tricolor. Mnemonic: \"Ancestor of horizontal tricolors\"."
        },
        {
          "subgroup": "“水平三色”阵营（中欧、东欧与波罗的海）",
          "subgroupEn": "Horizontal Tricolors (Central & Eastern Europe)",
          "textZh": "**Luxembourg🇱🇺 (卢森堡)：** **红-白-浅蓝**。比荷兰的蓝更浅。",
          "textEn": "**Luxembourg 🇱🇺:** Red-white-light blue horizontal tricolor. Mnemonic: \"Distinctly lighter sky-blue than Netherlands\"."
        },
        {
          "subgroup": "“水平三色”阵营（中欧、东欧与波罗的海）",
          "subgroupEn": "Horizontal Tricolors (Central & Eastern Europe)",
          "textZh": "**Russia🇷🇺 (俄罗斯)：** **白-蓝-红**。泛斯拉夫颜色的来源。",
          "textEn": "**Russia 🇷🇺:** White-blue-red horizontal tricolor. Mnemonic: \"Source of Pan-Slavic colors\"."
        },
        {
          "subgroup": "“水平三色”阵营（中欧、东欧与波罗的海）",
          "subgroupEn": "Horizontal Tricolors (Central & Eastern Europe)",
          "textZh": "**泛斯拉夫/东欧变体：** **",
          "textEn": "**泛斯拉夫/东欧变体：:** **泛斯拉夫/东欧变体：**"
        },
        {
          "subgroup": "“水平三色”阵营（中欧、东欧与波罗的海）",
          "subgroupEn": "Horizontal Tricolors (Central & Eastern Europe)",
          "textZh": "**Germany🇩🇪 (德国)：** **黑-红-金**。",
          "textEn": "**Germany 🇩🇪:** Black-red-gold horizontal tricolor. Mnemonic: \"Classic Weimar Black-Red-Gold\"."
        },
        {
          "subgroup": "“水平三色”阵营（中欧、东欧与波罗的海）",
          "subgroupEn": "Horizontal Tricolors (Central & Eastern Europe)",
          "textZh": "**Austria🇦🇹 (奥地利)：** **红-白-红**。传说英雄血染白袍。",
          "textEn": "**Austria 🇦🇹:** Red-white-red horizontal tricolor. Mnemonic: \"Duke Leopold's blood-soaked tunic legend\"."
        },
        {
          "subgroup": "“水平三色”阵营（中欧、东欧与波罗的海）",
          "subgroupEn": "Horizontal Tricolors (Central & Eastern Europe)",
          "textZh": "**Hungary🇭🇺 (匈牙利)：** **红-白-绿**。",
          "textEn": "**Hungary 🇭🇺:** Red-white-green horizontal tricolor. Mnemonic: \"Red strength, white fidelity, green hope\"."
        },
        {
          "subgroup": "“水平三色”阵营（中欧、东欧与波罗的海）",
          "subgroupEn": "Horizontal Tricolors (Central & Eastern Europe)",
          "textZh": "**Bulgaria🇧🇬 (保加利亚)：** **白-绿-红**。",
          "textEn": "**Bulgaria 🇧🇬:** White-green-red horizontal tricolor. Mnemonic: \"Replaced Russian blue with agrarian green\"."
        },
        {
          "subgroup": "“水平三色”阵营（中欧、东欧与波罗的海）",
          "subgroupEn": "Horizontal Tricolors (Central & Eastern Europe)",
          "textZh": "**Estonia🇪🇪 (爱沙尼亚)：** **蓝-黑-白**。极其独特的冷系色彩。",
          "textEn": "**Estonia 🇪🇪:** Blue-black-white horizontal tricolor. Mnemonic: \"Iconic Nordic cool-tone sky, forest, snow\"."
        },
        {
          "subgroup": "“水平三色”阵营（中欧、东欧与波罗的海）",
          "subgroupEn": "Horizontal Tricolors (Central & Eastern Europe)",
          "textZh": "**Latvia🇱🇻 (拉脱维亚)：** **暗红-白-暗红**。白色条纹非常窄。",
          "textEn": "**Latvia 🇱🇻:** Maroon-white-maroon horizontal stripes. Mnemonic: \"Dark carmine red with an ultra-narrow white middle strip\"."
        },
        {
          "subgroup": "“水平三色”阵营（中欧、东欧与波罗的海）",
          "subgroupEn": "Horizontal Tricolors (Central & Eastern Europe)",
          "textZh": "**Lithuania🇱🇹 (立陶宛)：** **黄-绿-红**。在欧洲很少见的配色，很像非洲。",
          "textEn": "**Lithuania 🇱🇹:** Yellow-green-red horizontal tricolor. Mnemonic: \"Rare yellow-green-red in Europe, resembles African tricolors\"."
        },
        {
          "subgroup": "“水平二色”",
          "subgroupEn": "Horizontal Bicolors",
          "textZh": "**Poland🇵🇱 (波兰)：** ** 上白下红。",
          "textEn": "**Poland 🇵🇱:** White top, red bottom horizontal bicolor. Mnemonic: \"White eagle over blood red field\"."
        },
        {
          "subgroup": "“水平二色”",
          "subgroupEn": "Horizontal Bicolors",
          "textZh": "**Monaco🇲🇨 (摩纳哥)：** ** 上红下白（比波兰矮一点）。",
          "textEn": "**Monaco 🇲🇨:** Red top, white bottom horizontal bicolor (narrower ratio than Poland)."
        },
        {
          "subgroup": "“水平二色”",
          "subgroupEn": "Horizontal Bicolors",
          "textZh": "**Ukraine🇺🇦 (乌克兰)：** ** 上蓝下黄（天空与麦田）。",
          "textEn": "**Ukraine 🇺🇦:** Blue top, yellow bottom horizontal bicolor. Mnemonic: \"Blue sky over golden wheatfields\"."
        },
        {
          "subgroup": "4. “带纹章/特殊构图”阵营",
          "subgroupEn": "Coat of Arms & Special Compositions",
          "textZh": "**Czech Republic🇨🇿 (捷克)：** ** 白红横条 + 左侧**蓝色三角形**。",
          "textEn": "**Czech Republic 🇨🇿:** White & red horizontal stripes + blue triangle on hoist."
        },
        {
          "subgroup": "4. “带纹章/特殊构图”阵营",
          "subgroupEn": "Coat of Arms & Special Compositions",
          "textZh": "**Portugal🇵🇹 (葡萄牙)：** ** 绿红竖条（比例不等）+ 国徽。",
          "textEn": "**Portugal 🇵🇹:** Unequal green & red vertical stripes + armillary sphere & coat of arms."
        },
        {
          "subgroup": "4. “带纹章/特殊构图”阵营",
          "subgroupEn": "Coat of Arms & Special Compositions",
          "textZh": "**Spain🇪🇸 (西班牙)：** ** 红黄红（黄色占一半）+ 国徽。",
          "textEn": "**Spain 🇪🇸:** Red-yellow-red stripes (yellow is double width) + coat of arms on hoist."
        },
        {
          "subgroup": "4. “带纹章/特殊构图”阵营",
          "subgroupEn": "Coat of Arms & Special Compositions",
          "textZh": "**Croatia🇭🇷 (克罗地亚)：** ** 红白蓝 + 红白格盾徽。",
          "textEn": "**Croatia 🇭🇷:** Red-white-blue stripes + checkerboard coat of arms crowned with 5 regional shields."
        },
        {
          "subgroup": "4. “带纹章/特殊构图”阵营",
          "subgroupEn": "Coat of Arms & Special Compositions",
          "textZh": "**Slovakia🇸🇰 (斯洛伐克)：** ** 白蓝红 + 带有双十字的盾徽（徽章靠左）。",
          "textEn": "**Slovakia 🇸🇰:** White-blue-red horizontal tricolor + patriarchal double cross shield offset to hoist."
        },
        {
          "subgroup": "4. “带纹章/特殊构图”阵营",
          "subgroupEn": "Coat of Arms & Special Compositions",
          "textZh": "**Slovenia🇸🇮 (斯洛文尼亚)：** ** 白蓝红 + 三座山峰的盾徽（徽章在左上角）。",
          "textEn": "**Slovenia 🇸🇮:** White-blue-red horizontal tricolor + Mount Triglav three-peak shield in upper-left canton."
        },
        {
          "subgroup": "4. “带纹章/特殊构图”阵营",
          "subgroupEn": "Coat of Arms & Special Compositions",
          "textZh": "**Serbia🇷🇸 (塞尔维亚)：** ** 红蓝白（倒序）+ 双头鹰国徽。",
          "textEn": "**Serbia 🇷🇸:** Red-blue-white (inverted Russian) + crowned double-headed eagle coat of arms offset to hoist."
        },
        {
          "subgroup": "4. “带纹章/特殊构图”阵营",
          "subgroupEn": "Coat of Arms & Special Compositions",
          "textZh": "**Albania🇦🇱 (阿尔巴尼亚)：** ** 红底 + 黑色**双头鹰**。",
          "textEn": "**Albania 🇦🇱:** Red field + centered black double-headed eagle. Mnemonic: \"Land of the Eagles\"."
        },
        {
          "subgroup": "4. “带纹章/特殊构图”阵营",
          "subgroupEn": "Coat of Arms & Special Compositions",
          "textZh": "**Malta🇲🇹 (马耳他)：** ** 左白右红 + 左上角灰色小十字。",
          "textEn": "**Malta 🇲🇹:** Left white, right red vertical bicolour + grey George Cross in top left canton. Mnemonic: \"Silver badge on white & red\"."
        },
        {
          "subgroup": "4. “带纹章/特殊构图”阵营",
          "subgroupEn": "Coat of Arms & Special Compositions",
          "textZh": "**Vatican City🇻🇦 (梵蒂冈)：** ** 黄白竖条 + 教皇权杖。",
          "textEn": "**Vatican City 🇻🇦:** Yellow & white vertical bicolor + papal crossed keys and tiara."
        }
      ]
    },
    {
      "region": "Asia",
      "regionZh": "亚洲",
      "regionEn": "Asia",
      "items": [
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Japan (日本) 🇯🇵：** **白底** + 中心**红圆**。记忆：**“白地红日”**。",
          "textEn": "**Japan 🇯🇵:** White field + centered red disc. Mnemonic: \"White ground, red sun\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**South Korea (韩国) 🇰🇷：** **白底** + 中心**太极圆** + 四角**黑卦**。记忆：**“太极四卦”**。",
          "textEn": "**South Korea 🇰🇷:** White field + central red/blue Taegeuk circle + four black trigrams. Mnemonic: \"Taegeuk and Four Trigrams\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Taiwan (中国台湾) 🇹🇼：** **红底** + 左上**蓝底白日**。记忆：**“青天白日满地红”**。",
          "textEn": "**Taiwan 🇹🇼:** Red field + blue canton with white sun. Mnemonic: \"Blue Sky, White Sun, and a Wholly Red Earth\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Hong Kong (中国香港) 🇭🇰：** **红底** + 白色五瓣**紫荆花**。记忆：**“红底紫荆花”**。",
          "textEn": "**Hong Kong 🇭🇰:** Red field + white 5-petal Bauhinia blakeana flower. Mnemonic: \"Red field with white Bauhinia\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Macao (中国澳门) 🇲🇴：** **绿底** + 白色**莲花**。记忆：**“绿底白莲花”**。",
          "textEn": "**Macao 🇲🇴:** Green field + white lotus flower above bridge and sea. Mnemonic: \"Green field with white lotus\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Indonesia (印度尼西亚) 🇮🇩：** **横向**上红下白。记忆：**“上面是火，下面是冰”**。",
          "textEn": "**Indonesia 🇮🇩:** Red top, white bottom horizontal bicolor. Mnemonic: \"Fire on top, ice below\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Thailand (泰国) 🇹🇭：** **横向**红白蓝白红。记忆：**“五层色，蓝中心”**。",
          "textEn": "**Thailand 🇹🇭:** Red-white-blue-white-red five horizontal stripes. Mnemonic: \"Five stripes, blue core\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Malaysia (马来西亚) 🇲🇾：** **红白条纹** + 左上**蓝底黄星月**。记忆：**“星月红白条”**。",
          "textEn": "**Malaysia 🇲🇾:** 14 alternating red-and-white stripes + blue canton with yellow crescent & 14-point star."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Philippines (菲律宾) 🇵🇭：** **左白三角** + 右侧**上蓝下红**。记忆：**“白三角，蓝红条”**。",
          "textEn": "**Philippines 🇵🇭:** White hoist triangle with golden sun & 3 stars + blue top, red bottom stripes."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Singapore (新加坡) 🇸🇬：** **横向**上红下白 + 左上**五星新月**。记忆：**“红白星月”**。",
          "textEn": "**Singapore 🇸🇬:** Red top, white bottom bicolor + white crescent and 5 stars in upper left canton."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Vietnam (越南) 🇻🇳：** **红色**背景 + 中心**黄五角星**。记忆：**“红底金星”**。",
          "textEn": "**Vietnam 🇻🇳:** Red field + centered five-pointed gold star. Mnemonic: \"Red field, gold star\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Cambodia (柬埔寨) 🇰🇭：** **横向**蓝红蓝 + 中心**白色吴哥窟**。记忆：**“蓝边红心吴哥窟”**。",
          "textEn": "**Cambodia 🇰🇭:** Blue-red-blue horizontal stripes + central white Angkor Wat depiction. Mnemonic: \"Blue borders, red heart, Angkor Wat\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Laos (老挝) 🇱🇦：** **横向**红蓝红 + 中心**白圆**。记忆：**“蓝心白月”**。",
          "textEn": "**Laos 🇱🇦:** Red-blue-red horizontal stripes + centered white disc. Mnemonic: \"Blue core, white moon\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Bangladesh (孟加拉国) 🇧🇩：** **深绿**背景 + 偏左**红圆**。记忆：**“绿地红日”**。",
          "textEn": "**Bangladesh 🇧🇩:** Dark green field + offset red circle slightly to the hoist. Mnemonic: \"Green land, red sun\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**India (印度) 🇮🇳：** **横向**橙白绿 + 中心**蓝色法轮**。记忆：**“橙白绿，法论转”**。",
          "textEn": "**India 🇮🇳:** Saffron-white-green horizontal stripes + central navy blue Ashoka Chakra wheel."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Sri Lanka (斯里兰卡) 🇱🇰：** **绿橙条** + 右侧**金色狮子持剑**。记忆：**“黄金狮子”**。",
          "textEn": "**Sri Lanka 🇱🇰:** Green & orange vertical stripes + maroon panel with golden lion holding sword."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Bhutan (不丹) 🇧🇹：** **黄橙**斜分 + 中心**白龙**。记忆：**“雷龙之国”**。",
          "textEn": "**Bhutan 🇧🇹:** Diagonally divided yellow and orange + centered white dragon (Druk). Mnemonic: \"Land of the Thunder Dragon\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Kazakhstan (哈萨克斯坦) 🇰🇿：** **亮蓝底** + 金色**鹰日** + 侧边**花纹**。记忆：**“天蓝金鹰”**。",
          "textEn": "**Kazakhstan 🇰🇿:** Sky-blue field + golden sun & soaring steppe eagle + ornamental pattern on hoist. Mnemonic: \"Sky blue golden eagle\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Kyrgyzstan (吉尔吉斯斯坦) 🇰🇬：** **红底** + 中心**黄色太阳轮**。记忆：**“红底黄太阳”**。",
          "textEn": "**Kyrgyzstan 🇰🇬:** Red field + centered yellow sun disc with 40 rays and yurt tunduk pattern. Mnemonic: \"Red field, yurt sun\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Mongolia (蒙古) 🇲🇳：** **纵向**红蓝红 + 左侧**黄色索永布**。记忆：**“红蓝红，索永布”**。",
          "textEn": "**Mongolia 🇲🇳:** Red-blue-red vertical tricolor + yellow Soyombo symbol in hoist red stripe."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Israel (以色列) 🇮🇱：** **白底** + 上下**蓝条** + 中心**蓝色大卫之星**。记忆：**“蓝白大卫星”**。",
          "textEn": "**Israel 🇮🇱:** White field + two horizontal blue stripes + central blue Star of David. Mnemonic: \"Tallit blue stripes with Magen David\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Jordan (约旦) 🇯🇴：** **黑白绿**横条 + 左红三角**白星**。记忆：**“红角白星”**。",
          "textEn": "**Jordan 🇯🇴:** Black-white-green stripes + red chevron on hoist with white 7-pointed star."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**United Arab Emirates (阿联酋) 🇦🇪：** **左红竖条** + 右侧**绿白黑**横条。记忆：**“左红右绿白黑”**。",
          "textEn": "**United Arab Emirates 🇦🇪:** Red hoist stripe + green-white-black horizontal stripes."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Qatar (卡塔尔) 🇶🇦：** 左白右**栗红** + **锯齿**分界。记忆：**“锯齿长旗”**。",
          "textEn": "**Qatar 🇶🇦:** White on hoist, dark maroon on fly + 9-point serrated sawtooth boundary. Mnemonic: \"Serrated maroon flag\"."
        }
      ]
    },
    {
      "region": "North America",
      "regionZh": "北美洲",
      "regionEn": "North America",
      "items": [
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Canada (加拿大) 🇨🇦：** **两侧红条** + 中心白色带**红色枫叶**。记忆：**“红色枫叶”**。",
          "textEn": "**Canada 🇨🇦:** Red side bars + central white square with red 11-point maple leaf. Mnemonic: \"Red Maple Leaf\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**United States (美国) 🇺🇸：** **红白相间**条纹 + 左上**蓝底白星**。记忆：**“星条旗”**。",
          "textEn": "**United States 🇺🇸:** 13 red and white stripes + blue canton with 50 white stars. Mnemonic: \"Stars & Stripes\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Mexico (墨西哥) 🇲🇽：** **绿白红**纵向三色 + 中心**雄鹰叼蛇**。记忆：**“鹰叼蛇”**。",
          "textEn": "**Mexico 🇲🇽:** Green-white-red vertical tricolor + central coat of arms (golden eagle devouring rattlesnake). Mnemonic: \"Eagle and Snake\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Greenland (格陵兰岛) 🇬🇱：** **上白下红** + 左侧**红白反色圆**。记忆：**“冰雪中的红日”**。",
          "textEn": "**Greenland 🇬🇱:** White top, red bottom + offset counter-colored circle. Mnemonic: \"Red sun on polar ice\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Guatemala (危地马拉) 🇬🇹：** **蓝白蓝**纵向三色 + 中心**国徽(有鸟)**。记忆：**“纵向蓝白蓝”**。",
          "textEn": "**Guatemala 🇬🇹:** Sky blue-white-sky blue vertical tricolor + centered coat of arms with Resplendent Quetzal bird."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**El Salvador (萨尔瓦多) 🇸🇻：** **蓝白蓝**横向三色 + 中心**圆圈国徽**。记忆：**“横向蓝白蓝，有圆徽”**。",
          "textEn": "**El Salvador 🇸🇻:** Cobalt blue-white-blue horizontal stripes + circular coat of arms in center. Mnemonic: \"Horizontal blue-white-blue with round crest\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Costa Rica (哥斯达黎加) 🇨🇷：** **蓝白红白蓝**横向条纹。记忆：**“红心最宽”**。",
          "textEn": "**Costa Rica 🇨🇷:** Blue-white-red-white-blue stripes with wide central red band. Mnemonic: \"Widest red core\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Panama (巴拿马) 🇵🇦：** **红蓝白四块**对称 + 蓝红各一颗**五角星**。记忆：**“红蓝白四分”**。",
          "textEn": "**Panama 🇵🇦:** Four quarters in white, blue, and red + blue and red stars. Mnemonic: \"Four-part blue & red stars\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Dominican Republic (多米尼加) 🇩🇴：** **蓝红十字**分区 + 中心**国徽**。记忆：**“蓝红十字”**。",
          "textEn": "**Dominican Republic 🇩🇴:** Centered white cross dividing four blue & red quarters + central coat of arms."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Nicaragua (尼加拉瓜) 🇳🇮：** **蓝白蓝**横向三色 + 中心**三角形国徽**。记忆：**“蓝白蓝，三角徽”**。",
          "textEn": "**Nicaragua 🇳🇮:** Cobalt blue-white-blue horizontal stripes + triangular coat of arms in center."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Honduras (洪都拉斯) 🇭🇳：** **蓝白蓝**横向三色 + 中心**五颗蓝色五角星**。记忆：**“五蓝星”**。",
          "textEn": "**Honduras 🇭🇳:** Turquoise blue-white-blue stripes + five turquoise five-pointed stars in center."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Puerto Rico (波多黎各) 🇵🇷：** **红白条纹** + 左侧**蓝三角白星**。记忆：**“红白条蓝三角”** (与古巴反色)。",
          "textEn": "**Puerto Rico 🇵🇷:** Five red and white stripes + blue hoist triangle with single white star (counter-colored from Cuba)."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**U.S. Virgin Islands (美属维尔京群岛) 🇻🇮：** **白底** + 中心**黄色老鹰**。记忆：**“白底黄鹰”**。",
          "textEn": "**U.S. Virgin Islands 🇻🇮:** White field + centered yellow American bald eagle with laurel branch and arrows."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Bermuda (百慕大) 🇧🇲：** **红底** + 左上**英国国旗** + 右侧**狮子纹章**。记忆：**“红底英国旗”**。",
          "textEn": "**Bermuda 🇧🇲:** British Red Ensign + Union Jack in canton + coat of arms with red lion holding shipwreck badge."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Curaçao (库拉索) 🇨🇼：** **蓝底** + 下部**黄条** + 左上**两颗白星**。记忆：**“蓝底黄条双星”**。",
          "textEn": "**Curaçao 🇨🇼:** Blue field + yellow stripe in lower half + two white stars in upper-left canton."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Martinique (马提尼克) 🇲🇶：** **红绿黑**三色 (或旧旗的**蓝白四蛇旗**)。",
          "textEn": "**Martinique 🇲🇶:** Red-green-black Pan-African stripes (or historical blue field with white cross and 4 vipers)."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Saint Pierre and Miquelon (圣皮埃尔和密克隆) 🇵🇲：** **蓝底黄船** + 左侧三个**小纹章**。",
          "textEn": "**Saint Pierre and Miquelon 🇵🇲:** Blue field with golden Grande Hermine ship + three regional crests along hoist."
        }
      ]
    },
    {
      "region": "South America",
      "regionZh": "南美洲",
      "regionEn": "South America",
      "items": [
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Argentina (阿根廷) 🇦🇷：** **天蓝白天蓝**横向三色 + 中心**五月太阳**。记忆：**“天蓝色的太阳”**。",
          "textEn": "**Argentina 🇦🇷:** Sky blue-white-sky blue horizontal stripes + central golden Sun of May with face."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Brazil (巴西) 🇧🇷：** **绿底** + **黄色菱形** + 中心**蓝色星空球**。记忆：**“绿地黄菱蓝地球”**。",
          "textEn": "**Brazil 🇧🇷:** Green field + central golden rhombus + dark blue celestial globe with Southern Cross & white ribbon."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Chile (智利) 🇨🇱：** 下半部分**红色** + 左上**蓝底白星**。记忆：**“单星旗”** (与德州旗极像)。",
          "textEn": "**Chile 🇨🇱:** White top, red bottom + blue canton with single white star. Mnemonic: \"Lone Star Flag\" (resembles Texas flag)."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Colombia (哥伦比亚) 🇨🇴：** **黄蓝红**横向三色，**黄色占一半**。记忆：**“大黄蓝红”**。",
          "textEn": "**Colombia 🇨🇴:** Yellow-blue-red horizontal stripes with yellow occupying the top half."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Ecuador (厄瓜多尔) 🇪🇨：** **黄蓝红**横向三色 + 中心**国徽**。记忆：**“有勋章的哥伦比亚”**。",
          "textEn": "**Ecuador 🇪🇨:** Yellow-blue-red horizontal stripes + centered coat of arms with Andean condor."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Peru (秘鲁) 🇵🇪：** **红白红**纵向三色。记忆：**“竖向红白红”**。",
          "textEn": "**Peru 🇵🇪:** Red-white-red vertical tricolor. Mnemonic: \"Vertical Red-White-Red\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Bolivia (玻利维亚) 🇧🇴：** **红黄绿**横向三色。记忆：**“南美的红黄绿”** (无星星)。",
          "textEn": "**Bolivia 🇧🇴:** Red-yellow-green horizontal tricolor. Mnemonic: \"South American plain red-yellow-green without stars\"."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Uruguay (乌拉圭) 🇺🇾：** **蓝白相间**条纹 + 左上**五月太阳**。记忆：**“条纹太阳旗”**。",
          "textEn": "**Uruguay 🇺🇾:** Nine alternating white and blue stripes + golden Sun of May in white canton."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Paraguay (巴拉圭) 🇵🇾：** **红白蓝**横向三色 + 中心**圆形国徽**。记忆：**“正反面图案不同”**。",
          "textEn": "**Paraguay 🇵🇾:** Red-white-blue horizontal tricolor + circular national coat of arms (distinct reverse seal)."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Falkland Islands (福克兰群岛) 🇫🇰：** **蓝底** + 左上**英国国旗** + 右侧**羊群纹章**。记忆：**“蓝底英国旗加羊”**。",
          "textEn": "**Falkland Islands 🇫🇰:** British Blue Ensign + Union Jack in canton + Falklands coat of arms with sheep & ship."
        }
      ]
    },
    {
      "region": "Oceania",
      "regionZh": "大洋洲",
      "regionEn": "Oceania",
      "items": [
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Australia (澳大利亚) 🇦🇺：** **蓝底** + 左上**英国国旗** + 右侧**南十字星** + 下方**七角大星**。记忆：**“蓝底英国旗加六颗星”**。",
          "textEn": "**Australia 🇦🇺:** British Blue Ensign + Union Jack + large seven-pointed Commonwealth Star + Southern Cross."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**New Zealand (新西兰) 🇳🇿：** **蓝底** + 左上**英国国旗** + 右侧**四颗红心白边星**。记忆：**“四颗红星”** (与澳洲区分的关键)。",
          "textEn": "**New Zealand 🇳🇿:** British Blue Ensign + Union Jack + four red stars with white borders (Southern Cross). Mnemonic: \"Four Red Stars\" (key difference from Australia)."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**American Samoa (美属萨摩亚) 🇦🇸：** **右侧白三角**内有**白头海雕**。记忆：**“带老鹰的白三角”**。",
          "textEn": "**American Samoa 🇦🇸:** Blue field + white triangle edged in red + soaring bald eagle holding war club and fly whisk."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Guam (关岛) 🇬🇺：** **蓝底红边** + 中心**梭形徽章**。记忆：**“红边蓝旗”**。",
          "textEn": "**Guam 🇬🇺:** Deep blue field + narrow red border + almond-shaped slingstone emblem with coconut tree & outrigger canoe."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Northern Mariana Islands (北马里亚纳群岛) 🇲🇵：** **蓝底** + 中心**石柱**与**花环**。记忆：**“蓝底石柱花环”**。",
          "textEn": "**Northern Mariana Islands 🇲🇵:** Blue field + central white star overlaid on traditional Latte stone surrounded by floral mwarmwar wreath."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Vanuatu (瓦努阿图) 🇻🇺：** **红绿黑**底色 + 黄色**Y型条纹** + **猪牙**图案。记忆：**“黄色Y型与猪牙”**。",
          "textEn": "**Vanuatu 🇻🇺:** Red & green field + black hoist triangle with yellow Y-shaped stripe + boar's tusk & namele fronds."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Christmas Island (圣诞岛) 🇨🇽：** **蓝绿斜分** + 中心**黄圆**内有**金鹲**。记忆：**“蓝绿地，金鸟飞”**。",
          "textEn": "**Christmas Island 🇨🇽:** Blue and green diagonal division + golden bosun bird in flight + Southern Cross & green map silhouette."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Cocos (Keeling) Islands (科科斯群岛) 🇨🇨：** **绿底** + 左上**棕榈树** + 中心**黄星月**。记忆：**“绿底棕榈树”**。",
          "textEn": "**Cocos (Keeling) Islands 🇨🇨:** Green field + palm tree in gold canton + Southern Cross & gold crescent moon."
        },
        {
          "subgroup": "全部",
          "subgroupEn": "All",
          "textZh": "**Pitcairn Islands (皮特凯恩群岛) 🇵🇳：** **蓝底** + 左上**英国国旗** + 右侧**绿色纹章**。记忆：**“蓝底英国旗加绿盾”**。",
          "textEn": "**Pitcairn Islands 🇵🇳:** British Blue Ensign + Union Jack in canton + green and yellow Pitcairn shield with anchor and Bible."
        }
      ]
    }
  ],
  "topics": [
    {
      "id": "plates",
      "titleZh": "车牌识别专题",
      "titleEn": "License Plates Meta",
      "icon": "car",
      "badge": "核心秒杀",
      "badgeColor": "emerald",
      "sections": [
        {
          "titleZh": "欧洲蓝条系列",
          "titleEn": "European Blue Stripe Series",
          "textZh": "- **双蓝条（左+右）：**\n    - **意大利：** 前牌极短，后牌长，两端均有蓝条。\n    - **法国：** 2009年之后的新车牌配双蓝条，早期车单左蓝条（常伴随长天线）。\n    - **阿尔巴尼亚：** 蓝条更粗更深，右侧有时带红旗标志（常伴随断裂天空）。\n- **单左蓝条：**\n    - 绝大多数欧盟国家标准配置。\n    - **葡萄牙：** 右侧历史上常带黄色年份条。\n    - **比利时：** 红字造成模糊后白色部分偏粉红。\n    - **以色列：** 虽非欧盟国家，但标准民用车牌左侧同样带蓝条。\n- **欧洲无蓝条国家：**\n    - **瑞士：** 前牌极短（上方左红右红橙），后牌长且左侧带红盾白十字瑞士国徽与州徽。\n    - **圣马力诺：** 白底短车牌，最左边浅蓝色/浅黄色山峰徽章，右侧带红色字（模糊后呈大红点）与蓝色字体。\n    - **摩纳哥：** 短车牌，左上方有红色亲王徽章（模糊后红色一片），右侧蓝色字体。\n    - **列支敦士登：** 长车牌，黑底白字（模糊后灰白一片），带红金小国徽。\n    - **冰岛：** 长车牌，纯白/银色底配蓝色字体（模糊后灰白一片）。\n    - **波黑：** 全白车牌，没有任何蓝条。\n    - **俄罗斯 / 乌克兰 / 白俄罗斯：** 均为普通白底车牌，无欧盟蓝条。",
          "textEn": "- **Double Blue Stripes (Left + Right):**\n    - **Italy:** Very short front plate, standard long rear plate, blue strips on both ends.\n    - **France:** Dual blue bands on post-2009 plates; earlier plates single left blue band (often with long antenna).\n    - **Albania:** Bolder, darker blue strips with red flag badge on right (often with Sky Rift).\n- **Single Left Blue Stripe:**\n    - Standard across most European Union nations.\n    - **Portugal:** Right edge historically carried a yellow year band.\n    - **Belgium:** Dark red text causes blurred plate to appear distinctly pinkish.\n    - **Israel:** Though outside the EU, standard civilian plates feature a blue left strip.\n- **European Nations Without Blue Stripes:**\n    - **Switzerland:** Short front plate; long rear plate with red Swiss cross shield and canton crest.\n    - **San Marino:** Tiny white plate, light blue/yellow crest on left, red dot cluster, blue text.\n    - **Monaco:** Short white plate with red princely crest on upper left, blue lettering.\n    - **Liechtenstein:** Long black plate with white characters (appears grayish blurred) and gold/red royal crown.\n    - **Iceland:** Long plain white/silver plate with blue lettering (blurred grayish).\n    - **Bosnia and Herzegovina:** Plain white plate without blue stripes.\n    - **Russia / Ukraine / Belarus:** White plates without EU blue stripes."
        },
        {
          "titleZh": "黄橙色背景系列",
          "titleEn": "Yellow & Orange Background Plates",
          "textZh": "- **全黄（前后皆黄）：**\n    - **荷兰：** 左侧蓝条，长车牌。\n    - **卢森堡：** 左侧蓝条，车牌比荷兰略短（路牌全大写）。\n    - **以色列：** 左侧蓝条，全黄长车牌。\n    - **哥伦比亚：** 南美洲唯一民用车全黄牌，明亮短牌。\n    - **老挝：** 东南亚唯一全黄牌国家。\n    - **阿曼：** 阿拉伯半岛唯一全黄牌国家。\n    - **纳米比亚：** 非洲极少数全黄牌国家。\n- **前白后黄：**\n    - **英国：** 前面白底长牌，后面黄底长牌（左侧常有蓝条）。\n    - **马恩岛：** 前白后黄，左侧带红色条纹。\n    - **直布罗陀 / 塞浦路斯：** 前白后黄，带欧盟蓝条。\n    - **中国香港：** 前白后黄，无蓝条。\n    - **博茨瓦纳：** 南部非洲唯一标准民用车前白后黄。\n    - **肯尼亚：** 前面白底长牌，后面黄底方牌或长牌。\n    - **卢旺达：** 前白后黄长车牌。\n    - **斯里兰卡：** 前面白底长牌，后面黄底短牌。\n    - **加纳：** 前白后黄。\n- **商用车与特殊黄牌：**\n    - **秘鲁：** 出租车采用黄色牌照。\n    - **印度：** 商用车采用黄色长牌照。\n    - **日本：** 货运或快递业务的轻型微型车 (Kei Car)，黄底黑字。\n    - **泰国：** 巴士与卡车采用黄色长牌。\n    - **土耳其 / 印度尼西亚：** 部分商用车辆采用黄底黑字牌。",
          "textEn": "- **All-Yellow (Front & Rear Yellow):**\n    - **Netherlands:** Left blue stripe, long plate.\n    - **Luxembourg:** Left blue stripe, slightly shorter than Dutch plates (all-caps signs).\n    - **Israel:** Left blue stripe, long yellow plate.\n    - **Colombia:** Sole South American country with universal civilian bright yellow plates.\n    - **Laos:** Sole Southeast Asian country with all-yellow civilian plates.\n    - **Oman:** Sole Arabian Gulf country with all-yellow civilian plates.\n    - **Namibia:** Distinctive African country with all-yellow civilian plates.\n- **Front White & Rear Yellow:**\n    - **United Kingdom:** White front, yellow rear (often with blue left strip).\n    - **Isle of Man:** White front, yellow rear with red left stripe.\n    - **Gibraltar / Cyprus:** White front, yellow rear with EU blue strip.\n    - **Hong Kong:** White front, yellow rear, no blue strip.\n    - **Botswana:** Sole southern African country with standard white front / yellow rear.\n    - **Kenya:** Long white front, square/rectangular yellow rear.\n    - **Rwanda:** Long white front, long yellow rear.\n    - **Sri Lanka:** Long white front, shorter yellow rear.\n    - **Ghana:** White front, yellow rear.\n- **Commercial & Special Yellow Plates:**\n    - **Peru:** Taxis carry yellow license plates.\n    - **India:** Commercial vehicles carry yellow rectangular plates.\n    - **Japan:** Commercial Kei mini-trucks and delivery vans carry yellow plates with black text.\n    - **Thailand:** Buses and commercial trucks carry yellow plates.\n    - **Turkey / Indonesia:** Certain commercial categories carry yellow plates with black font."
        },
        {
          "titleZh": "特殊底色与区域识别",
          "titleEn": "Special Plate Colors & Regional Metas",
          "textZh": "- **黑底白字车牌：**\n    - **印度尼西亚：** 白字分为三段（摩托车同样强制挂前车牌）。\n    - **马来西亚：** 白字分为一段或两段，车牌相对短小。\n    - **列支敦士登：** 整体呈深黑/深灰质感，中间偏左带有黄红双色皇冠小国徽。\n    - **突尼斯：** 军警车辆为纯黑底车牌，左侧带有醒目的红色标记。\n    - **阿根廷：** 旧车牌模糊后中间呈现明显的大黑圆点（新式车牌上方带浅蓝横条）。\n- **白底红字车牌：**\n    - **比利时：** 独特的酒红色字体，在街景模糊算法下整体呈现偏粉红色调。\n- **红底与橙底车牌：**\n    - **不丹：** 标志性的深暗红底白字车牌。\n    - **阿曼：** 商用营运车辆为红底车牌（普通私家车为黄底）。\n    - **厄瓜多尔：** 商用车辆为亮橙色牌（私家车为白底，顶部带橙色细条）。\n    - **智利：** 商用运营车辆采用橙色车牌。\n- **绿底与特殊色车牌：**\n    - **挪威：** 双座商业轻卡与皮卡采用绿色车牌。\n    - **匈牙利：** 新能源电动车使用浅绿色车牌。\n    - **塞尔维亚：** 农用拖拉机与机械使用绿色车牌。\n    - **印度：** 电动汽车专用绿色长牌。\n    - **巴拿马：** 上绿下白双色拼接车牌。\n    - **丹麦：** 商用车有时使用独特的“鹦鹉车牌”（左蓝、中黄、右白混拼）。\n- **左侧红边车牌：**\n    - **吉尔吉斯斯坦：** 车牌左侧有醒目的红色长方形竖条（内嵌国旗）。\n    - **卡塔尔：** 车牌左端带有暗红色马龙纹垂直条带。\n    - **摩纳哥：** 极细红边短车牌。\n    - **阿尔巴尼亚：** 部分旧式或特殊车辆左侧带有细红条。",
          "textEn": "- **Black Plates with White Characters:**\n    - **Indonesia:** Characters split into 3 distinct segments (motorcycles mandate front plates).\n    - **Malaysia:** Characters in 1 or 2 blocks, shorter plate dimensions.\n    - **Liechtenstein:** Charcoal black background (looks grayish blurred), gold/red royal crest.\n    - **Tunisia:** Police and military vehicles carry black plates with bold red badges on left.\n    - **Argentina:** Older plates blur into a distinctive centered black dot (newer Mercosur plates have blue top bar).\n- **White Plates with Red Characters:**\n    - **Belgium:** Maroon red characters cause blurred plates to glow soft pink.\n- **Red & Orange Plates:**\n    - **Bhutan:** Iconic dark red plates with white characters.\n    - **Oman:** Commercial transport plates have solid red background.\n    - **Ecuador:** Commercial plates are bright orange (civilian plates white with orange top line).\n    - **Chile:** Commercial transport vehicles carry orange plates.\n- **Green & Multi-color Plates:**\n    - **Norway:** Commercial utility vans and 2-seater pickups carry bright green plates.\n    - **Hungary:** Electric vehicles carry mint-green plates.\n    - **Serbia:** Agricultural tractors carry dark green plates.\n    - **India:** EV vehicles carry green rectangular plates.\n    - **Panama:** Distinctive green-top, white-bottom two-tone plate.\n    - **Denmark:** Commercial 'parrot plates' feature yellow left body and white right strip with blue EU band.\n- **Red Left Stripe Plates:**\n    - **Kyrgyzstan:** Bold red rectangular strip on the left containing flag and 'KG'.\n    - **Qatar:** Dark maroon vertical chevron band on left side.\n    - **Monaco:** Very narrow red left border on short plates.\n    - **Albania:** Certain older or special plates show red vertical left accents."
        }
      ],
      "rawContent": "# 车牌\n\n### **欧洲蓝条系列**\n\n- **双蓝条（左+右）：**\n    - **意大利：**前牌极短，后牌长\n    - **法国：只有**2009年后有双蓝条，其它车单蓝条，（长天线）\n    - **阿尔巴尼亚：蓝条更粗更深，（**伴随断裂天空）\n- **单左蓝条：**\n    - 大多数欧盟国家\n    - **葡萄牙：**右侧常带黄色年份条\n    - 比利时：红字造成白色部分偏红\n    - **以色列：**虽非欧盟但格式极似\n- **欧洲无蓝条国家：**\n    - **瑞士：**前短(上方左侧红色，右侧红橙色)；后长(左侧带红盾国徽)\n    - **圣马力诺：白底短车**牌，最左边徽章(模糊后浅黄色)，右边一点红色字（模糊后大红点），右半边蓝色字体（模糊后蓝色一片）\n    - **摩纳哥：短车**牌，左上红色徽章（模糊后红色一片），右边蓝色字体（模糊后蓝色一片）\n    - 列士敦士登：长车牌，黑底白字（模糊后灰白一片），中间偏左有红黄徽章\n    - 冰岛: 长车牌，纯白/银色，蓝字（模糊后灰白一片）\n    - **波黑：**全白无条\n    - **俄罗斯/乌克兰/白俄罗斯: 通常没有蓝条**\n\n### **黄橙色背景系列**\n\n- 全黄（前后皆黄）：\n    - 荷兰：左侧蓝条，长车牌\n    - 卢森堡：左侧蓝条，车牌较荷兰短（全大写路牌）\n    - 以色列：左侧蓝条，长车牌\n    - 哥伦比亚：南美唯一，明亮短车牌\n    - 老挝：东南亚唯一\n    - 阿曼：阿拉伯国家唯一\n    - 纳米比亚：非洲唯一\n- 前白后黄：\n    - **英国：**左侧蓝条\n    - 马恩岛：左侧红色条纹\n    - 直布罗陀：左侧蓝条\n    - 塞浦路斯\n    - 香港：没有蓝条\n    - 博茨瓦纳：南部非洲唯一\n    - 肯尼亚：前面长白车牌，后面近正方形黄车牌\n    - 卢旺达：前后均为长车牌\n    - 斯里兰卡：前面长白车牌，后面短黄车牌\n    - 加纳\n- 商用车黄牌：\n    - 秘鲁：出租车黄色牌照\n    - 印度：商用车黄色长牌照\n    - 日本：货运或快递业务的小排量轻型车辆，黄底黑字\n    - 泰国：巴士，卡车黄牌\n    - 土耳其：黄底黑字\n    - 印尼\n\n### **特殊**\n\n- 黑底白字\n    - **印度尼西亚：**白字分三段\n    - **马来西亚：**白字分两段或一段，车牌短\n    - **列支敦士登：因为白字显得整体呈灰色，中间**带黄红小国徽\n    - **突尼斯：**军警车为黑拍照，左侧带明显红色标记\n    - 阿根廷：旧车牌模糊后中间看似大黑点（新车牌上面蓝横条）\n- 白底红字：\n    - **比利时：模糊下偏粉红**\n- 红底/橙底：\n    - **不丹：深红底**\n    - 阿曼：商用车红底车牌（普通车黄底）\n    - 厄瓜多尔：商用车橙色（普通车白底，有时上面有橙色横条）\n    - 智利：商用车橙色\n- 上绿下白\n    - 巴拿马\n- 绿底：\n    - **挪威：**商用车为绿色牌\n    - 匈牙利：电动车牌浅绿牌\n    - 塞尔维亚：农用车绿色牌\n    - 印度：电动车绿色长牌照\n- 左侧红边：\n    - **吉尔吉斯斯坦**\n    - 卡塔尔：暗红竖条\n    - 摩纳哥：极细红边，短车牌\n    - 阿尔巴尼亚（部分车）\n\n### **其它**\n\n- 摩托车：印尼要求有前车牌\n- 丹麦：有些商用车为鹦鹉车牌（蓝黄白）",
      "badgeZh": "核心秒杀",
      "badgeEn": "Instant Kill"
    },
    {
      "id": "taxis",
      "titleZh": "各国出租车特征",
      "titleEn": "Taxis by Region",
      "icon": "taxi",
      "badge": "城市秒定",
      "badgeColor": "amber",
      "sections": [
        {
          "titleZh": "拉丁美洲出租车全景",
          "titleEn": "Latin American Taxis Guide",
          "textZh": "- **秘鲁 (Peru)：**\n    - 车型以黄色丰田 Probox / Yaris 居多。\n    - 车身侧面贴有**红黄相间**（或白红相间）的棋盘格/方块反光条。\n    - 挡风玻璃或车窗常贴有 `SETAME` 或 `SETACA` 官方营运许可标签。\n- **哥伦比亚 (Colombia)：**\n    - 全车统一为亮黄色，车型绝大多数为小两厢车（Kia Picanto / Hyundai Atos）。\n    - 车身两侧后门及车顶喷有黑色牌照号；侧门通常直接喷涂**城市名称**（如 `BOGOTA`、`MEDELLIN`、`CALI`）。\n- **墨西哥 (Mexico 各州)：**\n    - **墨西哥城 (CDMX)：** **粉白双拼**（下半部粉红 Mexican Pink，上半部及车顶白色），车门带天使独立纪念柱剪影与 `CDMX` 字母。\n    - **普埃布拉 (Puebla)：** 黑底车身，配黄色拉花/条纹。\n    - **哈利斯科 (Guadalajara)：** 白底车身，配红蓝或黄色条纹。\n    - **瓦哈卡 (Oaxaca)：** 暗红/枣红色车身配白顶。\n    - **下加利福尼亚 (Baja California)：** 白底车身，带绿、黄或橙色饰条。\n    - **注：** 墨西哥各州出租车门上通常直接印有所在州名或市名。\n- **厄瓜多尔 (Ecuador)：**\n    - 全车统一亮黄色；前门与侧身常见蓝/橙色圆形 `Seguridad Ciudadana` 治安监控贴纸，或车窗带监控摄像头警示贴；悬挂橙色营运车牌。\n- **巴拿马 (Panama)：**\n    - 亮黄色车身；后门或车窗边缘有红白相间反光条；侧门有白色长方框，内标许可号及所属地区/城市（如 `PANAMÁ`、`COLÓN`、`CHIRIQUÍ`）。\n- **阿根廷 (Argentina)：**\n    - **布宜诺斯艾利斯 (CABA)：** **黑黄双拼**（车身全黑，车顶与立柱为亮黄色）。\n    - **外省城市：** 多为纯白色车身，配简单的绿/蓝条纹，不再使用黑黄拼色。\n- **智利 (Chile)：**\n    - **圣地亚哥 (Santiago)：** 同样为**黑黄双拼**（黑色车身配黄色车顶），但悬挂智利牌照（白底橙字或新式白牌）。\n    - **外省区域：** 多为同款黑黄涂装，但侧门会强制喷涂所属区划名称（Comuna）。\n- **玻利维亚 (Bolivia)：**\n    - 多为老旧白色丰田轿车；前挡风玻璃贴有大号彩色字母 `TAXI` 或 `RADIO MOVIL`；车身常贯穿红白蓝三色细拉花。\n- **乌拉圭 (Uruguay)：**\n    - **蒙得维的亚：** 现代车多为白底黄顶，老车见黄黑拼色或白色带蓝横条纹，牌照带黄色营运标识。\n- **危地马拉 (Guatemala)：**\n    - 普通出租车多为白/银色；主要高频载具为红色三轮突突车（Tuk-tuk），车身多印有所在省名或镇名。",
          "textEn": "- **Peru:**\n    - Predominantly yellow Toyota Probox / Yaris station wagons.\n    - Sides lined with **checkered red-and-yellow** (or red-and-white) reflective safety strips.\n    - Windshields prominently display `SETAME` (Lima) or `SETACA` official authorization badges.\n- **Colombia:**\n    - Solid bright yellow hatchbacks (Kia Picanto, Hyundai Atos).\n    - Rear side doors and roof stenciled with black license plate numbers; doors clearly stamped with **city names** (`BOGOTA`, `MEDELLIN`, `CALI`).\n- **Mexico (State by State):**\n    - **Mexico City (CDMX):** **Pink & White** two-tone (Mexican Pink bottom, white top) with Angel of Independence monument logo and `CDMX`.\n    - **Puebla:** Black body with yellow racing stripes/side patterns.\n    - **Guadalajara (Jalisco):** White body with red-blue or yellow stripes.\n    - **Oaxaca:** Maroon/burgundy body with white roof.\n    - **Baja California:** White body with green, yellow, or orange stripes.\n    - **Note:** Mexican taxis usually display their state or municipality name directly on the front doors.\n- **Ecuador:**\n    - Solid bright yellow; front doors feature circular blue/orange `Seguridad Ciudadana` surveillance stickers; orange commercial license plates.\n- **Panama:**\n    - Solid bright yellow; red-and-white reflective tape along rear doors; door carries white stencil with permit number and region (`PANAMÁ`, `COLÓN`, `CHIRIQUÍ`).\n- **Argentina:**\n    - **Buenos Aires (CABA):** **Black & Yellow** (gloss black body with bright yellow roof and pillars).\n    - **Provinces:** Solid white sedans with green or light blue side stripes.\n- **Chile:**\n    - **Santiago:** Black body with bright yellow roof, accompanied by Chilean license plates.\n    - **Provinces:** Black and yellow, but side doors mandated to display municipal zone name (Comuna).\n- **Bolivia:**\n    - Older white Japanese sedans with colorful `TAXI` or `RADIO MOVIL` window decals and thin red-white-blue side pinstripes.\n- **Uruguay (Montevideo):**\n    - White body with yellow roof, older models black/yellow or white with blue stripes; yellow commercial plate accents.\n- **Guatemala:**\n    - Conventional taxis white/silver; ubiquitous transport consists of red three-wheeled motorized tuk-tuks stenciled with regional municipality names."
        },
        {
          "titleZh": "亚太、中东与欧洲出租车",
          "titleEn": "Asia-Pacific, Middle East & Europe Taxis",
          "textZh": "- **泰国 (Thailand - 曼谷)：**\n    - 双拼色：**黄绿双拼**（个人车主运营）。\n    - 纯色与撞色：纯粉红色、纯橙色、红蓝双拼（出租车公司车队）。\n- **中国台湾 (Taiwan)：** 全车纯黄色（“小黄”），车顶带各车队灯牌，悬挂白底红字营业用车牌。\n- **中国香港 (Hong Kong)：**\n    - **市区（港岛、九龙）：** **红色**车身，银色车顶。\n    - **新界：** **绿色**车身，白色车顶。\n    - **大屿山：** **天蓝色**车身，白色车顶。\n- **日本 (Japan)：** 深黑色/深海军蓝为主（丰田 JPN Taxi / Crown Comfort）；悬挂**绿底白字**营业牌照；车顶带行灯。\n- **新加坡 (Singapore)：** 按公司分颜色：蓝色为康福德高 (Comfort)，黄色为城市出租 (CityCab)，银红色为得运 (Trans-Cab)。\n- **阿联酋 (Dubai)：** 全车统一为米色/浅香槟色；车顶分红顶、蓝顶、黄顶、绿顶；**粉红顶**为女性与家庭专用。\n- **土耳其 (Turkey - 伊斯坦布尔)：** 纯黄色车身，车顶中央设黄色梯形小顶灯，车门喷印区域代码与许可号（如 `34 T ...`，34 即伊斯坦布尔省代码）。\n- **希腊 (Greece - 雅典)：** 全车亮黄色（多为 Skoda 或 Mercedes 车型），后牌照多为黄底营运牌。\n- **英国 (UK - 伦敦)：** 经典黑色高顶复古出租车 (Black Cab)。\n- **西班牙 (Spain - 巴塞罗那)：** 标志性的纯黑车身搭配黄色车门与后备箱。",
          "textEn": "- **Thailand (Bangkok):** Two-tone yellow-green (private owners); solid bright pink, orange, or red-blue (company fleets).\n- **Taiwan:** Pure yellow sedans/crossovers with roof company light boxes; white plates with red lettering.\n- **Hong Kong:** Red body with silver roof (Urban/Kowloon); Green body with white roof (New Territories); Sky blue body with white roof (Lantau Island).\n- **Japan:** Dark navy blue or black (Toyota Crown Comfort / JPN Taxi); green commercial license plates; ornate illuminated roof lanterns.\n- **Singapore:** Blue (Comfort), Yellow (CityCab), Silver-Red (Trans-Cab).\n- **UAE (Dubai):** Cream / beige bodies with color-coded roofs: red, blue, green, yellow; pink roofs exclusively for women and families.\n- **Turkey (Istanbul):** Pure yellow body with yellow roof light; door printed with province code '34 T ...' (34 = Istanbul).\n- **Greece (Athens):** Bright yellow body with yellow rear commercial plate.\n- **United Kingdom (London):** Iconic tall black Hackney carriages (Black Cabs).\n- **Spain (Barcelona):** Signature black body with bright yellow doors and trunk lid."
        }
      ],
      "rawContent": "# 出租车\n\n## 拉丁美洲 (Latin America)\n\n- **秘鲁 (Peru)**\n    - **车身特征**：车型以黄色丰田 Probox / Yaris 居多。\n    - **反光条**：车身侧面贴有**红黄相间**（或白红相间）的棋盘格/方块反光条。\n    - **许可标识**：挡风玻璃或车窗常贴有 `SETAME` 或 `SETACA` 许可标签。\n- **哥伦比亚 (Colombia)**\n    - **车身特征**：全车统一为亮黄色，车型绝大多数为小两厢车（Kia Picanto / Hyundai Atos）。\n    - **城市绝杀**：车身两侧后门及车顶喷有黑色牌照号；侧门通常直接喷涂**城市名称**（如 `BOGOTA`、`MEDELLIN`、`CALI`）。\n- **墨西哥 (Mexico)**\n    - **墨西哥城 (CDMX)**：**粉白双拼**（下半部粉红 Mexican Pink，上半部及车顶白色），车门带天使独立纪念柱剪影与 `CDMX` 字母。\n    - **普埃布拉 (Puebla)**：黑底车身，配黄色拉花/条纹。\n    - **哈利斯科 (Guadalajara)**：白底车身，配红蓝或黄色条纹。\n    - **瓦哈卡 (Oaxaca)**：暗红/枣红色车身配白顶。\n    - **下加利福尼亚 (Baja California)**：白底车身，带绿、黄或橙色饰条。\n    - **注**：墨西哥各州出租车门上通常直接印有所在州名或市名。\n- **厄瓜多尔 (Ecuador)**\n    - **车身特征**：全车统一亮黄色。\n    - **监控贴纸**：前门与侧身常见蓝/橙色圆形 `Seguridad Ciudadana` 治安监控贴纸，或车窗带监控摄像头警示贴。\n    - **牌照特征**：公共交通营运车辆使用橙色车牌（或橙色顶框）。\n- **巴拿马 (Panama)**\n    - **车身特征**：亮黄色车身。\n    - **反光与标识**：后门或车窗边缘有红白相间反光条；侧门有白色长方框，内标许可号及所属地区/城市（如 `PANAMÁ`、`COLÓN`、`CHIRIQUÍ`）。\n- **阿根廷 (Argentina)**\n    - **布宜诺斯艾利斯 (CABA)**：**黑黄双拼**（车身全黑，车顶与立柱为亮黄色）。\n    - **其他外省城市**：多为纯白色车身，配简单的绿/蓝条纹，不再使用黑黄拼色。\n- **智利 (Chile)**\n    - **圣地亚哥 (Santiago)**：同样为**黑黄双拼**（黑色车身配黄色车顶），但悬挂智利牌照（白底橙字或新式白牌）。\n    - **外省区域**：多为同款黑黄涂装，但侧门会强制喷涂所属区划名称（Comuna）。\n- **玻利维亚 (Bolivia)**\n    - **车身特征**：多为普通白色轿车（老旧丰田），车况普遍较老。\n    - **贴纸标识**：前挡风玻璃贴有大号彩色字母 `TAXI` 或 `RADIO MOVIL`；车身常贯穿红白蓝三色细拉花。\n- **乌拉圭 (Uruguay)**\n    - **蒙得维的亚 (Montevideo)**：现代车多为白底黄顶，老车见黄黑拼色或白色带蓝横条纹，牌照带黄色营运标识。\n- **危地马拉 (Guatemala)**\n    - **城区/乡镇**：普通出租车多为白/银色；主要高频载具为红色三轮突突车（Tuk-tuk），车身多印有所在省名或镇名。\n\n## 亚太与中东 (Asia-Pacific & Middle East)\n\n- **泰国 (Thailand)**\n    - **曼谷双拼色**：**黄绿双拼**（个人车主运营）。\n    - **曼谷纯色/撞色**：纯粉红色、纯橙色、红蓝双拼（出租车公司运营）。\n- **中国台湾 (Taiwan)**\n    - **车身特征**：全车纯黄色（“小黄”），车顶带各车队灯牌。\n    - **牌照特征**：悬挂白底红字营业用车牌。\n- **中国香港 (Hong Kong)**\n    - **市区（港岛、九龙）**：**红色**车身，银色车顶。\n    - **新界**：**绿色**车身，白色车顶。\n    - **大屿山**：**天蓝色**车身，白色车顶。\n- **日本 (Japan)**\n    - **车身与车型**：深黑色/深海军蓝为主（高频车型 Toyota JPN Taxi / Crown Comfort）。\n    - **车牌与顶灯**：悬挂**绿底白字**营业牌照；车顶带有样式丰富的公司专属行灯。\n- **新加坡 (Singapore)**\n    - **颜色分公司**：\n        - 蓝色：康福德高 (Comfort)\n        - 黄色：城市出租 (CityCab)\n        - 银红色：得运 (Trans-Cab)\n- **阿联酋 - 迪拜 (Dubai)**\n    - **车身特征**：全车统一为米色/浅香槟色。\n    - **车顶分色**：红顶、蓝顶、黄顶、绿顶（分属不同运营商）；**粉红顶**为女性与家庭专用。\n\n## 欧洲 (Europe)\n\n- **土耳其 (Turkey)**\n    - **伊斯坦布尔 (Istanbul)**：纯黄色车身，车顶中央设黄色梯形小顶灯，车门喷印区域代码与许可编号（如 `34 T ...`，34 即伊斯坦布尔省代码）。\n- **希腊 (Greece)**\n    - **雅典 (Athens)**：全车亮黄色（多为 Skoda 或 Mercedes 车型），后牌照多为黄底营运牌。",
      "badgeZh": "城市秒定",
      "badgeEn": "City Locating"
    },
    {
      "id": "cars",
      "titleZh": "街景车镜头与车身 Meta",
      "titleEn": "Google Car & Camera Meta",
      "icon": "camera",
      "badge": "车身秘籍",
      "badgeColor": "sky",
      "sections": [
        {
          "titleZh": "镜头代数、画质与机位特征",
          "titleEn": "Camera Generations & Rig Metas",
          "textZh": "- **第一代 (Gen 1)：** 极低分辨率，全屏模糊感与严重马赛克。日、法、美、加、澳、墨早期街景，实战中极少碰到。\n- **第二代 (Gen 2)：** 画面底部和天空有巨大的“圆形模糊面”，色彩明显偏紫色（紫边）。分布于西欧、北美、巴西、南非、俄罗斯。\n- **糟糕画质 (Shitcam)：** 画面不仅模糊，且常伴随大面积圆圈遮挡。高频出现在：**印度、柬埔寨、黎巴嫩、尼日利亚、厄瓜多尔**。\n- **第三代 (Gen 3)：** 画质清晰但色彩饱和度较低，四周边缘有暗角，车底有明显的车体遮挡模糊。通常可见天线或天线底座（澳大利亚、南非、俄罗斯多长天线）。\n- **第四代 (Gen 4)：** 超高清极品画质，色彩极度鲜艳饱满。如果画质极好但完全看不见天线，优先考虑 Gen 4 覆盖区。\n- **Small cam：** 与四代机类似，极高清、色彩鲜艳，但车底有很大面积的非圆形模糊。覆盖地区包括：南美（巴西、秘鲁）、非洲（南非）、亚洲（印度、土耳其）、北美（美、加、波多黎各）、欧洲（北欧、西欧、南欧均有，**自德国以东完全没有**）。\n- **低视角相机 (Lowcam)：** 视角明显贴近地面，车底模糊范围极大（仿佛蹲在地上看路）。经典三剑客：**日本**（左行）、**瑞士**（阿尔卑斯右行）、**斯里兰卡**（热带左行）。\n- **运行方向判断：**\n    - 三代车：视野回望通常看见车辆后部。\n    - 四代本田车：多为白色，视野向前看见车头前部，车后有时可见刹车灯；大量分布于美洲、亚洲、大洋洲。\n    - 四代欧宝车：多为蓝色（也有其它颜色），视野回望看见车尾，车屁股中央有凹进去的小坑；主要分布于欧洲与南非。",
          "textEn": "- **Generation 1 (Gen 1):** Ultra-low resolution, severe pixelation across the whole scene. Rare in modern play (early US, Canada, Japan, France, Australia).\n- **Generation 2 (Gen 2):** Large circular halos in the sky and car blur underneath, strong purple chromatic aberration / purple tint. Found in Western Europe, North America, Brazil, South Africa, Russia.\n- **Low Quality (Shitcam):** Severe pixelation and blur paired with massive circular halo lens blocks. Classic countries: **India, Cambodia, Lebanon, Nigeria, Ecuador**.\n- **Generation 3 (Gen 3):** High resolution but lower color saturation, subtle vignette at corners, distinct vehicle shadow blur beneath camera. Long antennas common in Australia, South Africa, and Russia.\n- **Generation 4 (Gen 4):** Ultra-high definition, vibrant saturated colors, tiny circular blur directly beneath camera, antenna absent.\n- **Small Cam:** Similar to Gen 4 ultra-clarity, but camera car blur underneath is large and non-circular. Present in South America (Brazil, Peru), Africa (South Africa), Asia (India, Turkey), North America (US, Canada, PR), Europe (Nordics, Western & Southern Europe; **absent east of Germany**).\n- **Low Camera (Lowcam):** Mounted significantly lower to the pavement (crouching angle). The iconic trio: **Japan** (left-drive), **Switzerland** (alpine right-drive), **Sri Lanka** (tropical left-drive).\n- **Vehicle Orientation:**\n    - Gen 3: Rear view shows vehicle back.\n    - Gen 4 Honda: Typically white, forward perspective reveals hood front, brake lights sometimes behind; Americas, Asia, Oceania.\n    - Gen 4 Opel: Typically blue (other colors exist), rear view displays tailgate with distinct indented notch; Europe and South Africa."
        },
        {
          "titleZh": "车顶行李架、黑胶带与金属横杆",
          "titleEn": "Roof Racks, Tape & Crossbars",
          "textZh": "- **黑胶带固定标记：**\n    - **加纳：** 右前方横杠上缠绕有明显的黑胶带；车体前方 Google 地图徽标经常可见。\n    - **留尼汪：** 右后方横杠上缠绕有黑胶带。\n    - **多米尼加：** 车顶横杆中间和边缘配有黑色防护垫/胶带。\n- **金属横杆 (Roof Racks)：**\n    - **危地马拉：** 非常干净光滑的银色金属横杆，黑色后视镜清晰可见。\n    - **吉尔吉斯斯坦：** 与危地马拉类似，银色横杆配黑色后视镜；关键定位：左后视镜中道路标线接触镜面上缘为北部，接触左侧或左上角为南部（靠近乌兹别克斯坦边境处）。\n    - **法罗群岛：** 偶尔可见与危地马拉类似的金属横杆。\n    - **库拉索：** 黑色金属横杆，左前行李架上贴有白色贴纸。\n    - **孟加拉国：** 偶尔见金属横杆车，配备鲜艳的**红色后视镜**。\n    - **塞内加尔：** 偶尔见类似金属横杆，有时可见右后视镜（常伴随天空裂缝）。",
          "textEn": "- **Black Tape Markers:**\n    - **Ghana:** Conspicuous black electrical tape wrapped on front-right roof bar; Google Maps logo often visible on front hood.\n    - **Réunion:** Black tape wrapped on rear-right roof bar.\n    - **Dominican Republic:** Black protective tape pads centered and on edges of roof crossbars.\n- **Metal Crossbars (Roof Racks):**\n    - **Guatemala:** Ultra-clean silver tubular crossbars with black side mirrors visible.\n    - **Kyrgyzstan:** Similar clean silver crossbars with black side mirrors. Pro meta: looking into left side mirror, road centerline touching top edge indicates North; touching left or upper-left corner indicates South (near Uzbek border).\n    - **Faroe Islands:** Occasionally features silver roof rack crossbars.\n    - **Curaçao:** Black crossbars with white sticker on front-left rack mount.\n    - **Bangladesh:** Roof rack cars occasionally equipped with distinctive **red side mirrors**.\n    - **Senegal:** Roof crossbars occasionally visible (frequently accompanied by Sky Rift)."
        },
        {
          "titleZh": "皮卡车型、涉水喉、警车护航与车身涂装",
          "titleEn": "Pickups, Snorkels, Escorts & Liveries",
          "textZh": "- **皮卡车型全览 (Pickups)：**\n    - **哈萨克斯坦：** 白色皮卡，中间带螺纹黑色天线，经常只露出车头前端，车身常被模糊。\n    - **卡塔尔：** 白色皮卡，经常被完全模糊，车前左侧有细长向上天线。\n    - **阿曼：** 白色皮卡，带天线底座，有时无天线，车身大面积模糊。\n    - **厄瓜多尔：** 四代白色皮卡，配黑色车斗，无天线，有时可见红色刹车灯。\n    - **巴拿马：** 白色皮卡，中间黑色天线，车头与部分车身可见，车身上有两根金属横杠与竖立金属框架。\n    - **哥斯达黎加：** 白色皮卡，中间黑色天线，车头可见，车身带两根金属横杠。\n    - **纳米比亚：** 白色皮卡，天线粗且明显偏向左侧。\n    - **卢旺达：** 白/黑/棕色皮卡，经常露出红色高位刹车灯。\n    - **肯尼亚：** 各式皮卡，引擎盖右前方露出黑色涉水喉 (Snorkel)。\n    - **美属萨摩亚：** 黑色皮卡，车斗生锈且裸露面积大，右车头带细天线。\n    - **百慕大：** 黑色方形皮卡。\n    - **蒙古：** 蓝色花纹皮卡带涉水喉；或者车顶驮着巨大的露营帐篷与野营行李包。\n    - **乌干达：** 白色方形皮卡。\n    - **塞内加尔：** 银色皮卡，顶部天线稍偏左侧，车斗带有两根横杠。\n    - **土耳其：** 偶见灰黑色皮卡。\n- **天线特征：**\n    - **卡塔尔：** 左车头向上竖立细长天线。\n    - **波多黎各 / 关岛 / 北马里亚纳：** 三代车右车头有向上的细长天线（尼日利亚偶尔也有）。\n- **警车与军车护航：**\n    - **尼日利亚：** 常见警车全程武装护航（后视镜或跟车可见警灯与武装警察）。\n    - **突尼斯：** 军用车护航（跟车车牌左侧带明显红点）。\n- **特色车身涂装：**\n    - **乌克兰：** 标志性的纯红色街景车身。\n    - **斯里兰卡：** 车身模糊边缘露出一抹红、白、蓝相间的色块（视觉上非常像法国国旗）。\n    - **智利：** 白色车身，但边缘露出一道光滑利落的黑边。\n    - **阿根廷：** 黑车左车头有时可见黑色横杠头部与白色螺丝固定件。",
          "textEn": "- **Pickup Trucks Meta (Pickups):**\n    - **Kazakhstan:** White pickup with threaded black center antenna, front hood visible, body blurred.\n    - **Qatar:** White pickup heavily blurred, slender upward antenna mounted on front-left.\n    - **Oman:** White pickup with visible antenna base, heavily blurred.\n    - **Ecuador:** Gen 4 white pickup with black cargo bed, no antenna, red third brake light.\n    - **Panama:** White pickup with center black antenna, two metal bars and vertical rack frame.\n    - **Costa Rica:** White pickup with center antenna and two tubular side bars.\n    - **Namibia:** White pickup with thick antenna leaning distinctly toward the left.\n    - **Rwanda:** White, black, or brown pickup showing red third brake light.\n    - **Kenya:** Various pickups sporting a thick black raised air snorkel on front-right hood.\n    - **American Samoa:** Black pickup with rusty cargo bed heavily exposed, thin front-right antenna.\n    - **Bermuda:** Boxy black pickup truck.\n    - **Mongolia:** Blue patterned pickup with snorkel, or car roof loaded with massive camping tent/packs.\n    - **Uganda:** White boxy pickup.\n    - **Senegal:** Silver pickup with antenna slightly offset to the left, two crossbars over cargo bed.\n    - **Turkey:** Occasionally features dark gray/black pickups.\n- **Antenna Metas:**\n    - **Qatar:** Slender vertical antenna on front-left fender.\n    - **Puerto Rico / Guam / Northern Mariana Islands:** Gen 3 camera with thin upward antenna on front-right fender (also occasional in Nigeria).\n- **Escort Vehicles:**\n    - **Nigeria:** Armed police chase vehicle with visible blue/red strobe light bar.\n    - **Tunisia:** Military escort follow-pickup (military plate with red left badge).\n- **Special Vehicle Liveries:**\n    - **Ukraine:** Signature bright red camera car.\n    - **Sri Lanka:** Blur fringe reveals a sliver of red, white, and blue (resembles French flag).\n    - **Chile:** White car revealing a smooth, sleek black lower rim edge.\n    - **Argentina:** Black car showing front-left rack bar tip with exposed white bolt."
        }
      ],
      "rawContent": "# 街景车\n\n[Google Car](https://geometas.com/metas/categories/google_car/)\n\n# 镜头类型\n\n- **第一代 (Gen 1)**：极低分辨率，全屏模糊感。\n    - *覆盖：日、法、美、加、澳、新、墨西哥。*实战中基本碰不到。\n- **第二代 (Gen 2)**：画面底部和天空有巨大的“圆形模糊面”，色彩偏紫色。\n    - *覆盖：西欧（除东欧）、北美、巴西、南非、俄罗斯。*\n- **糟糕画质 (Shitcam)**：画面不仅模糊，且常伴随大面积圆圈遮挡。\n    - **常见国家**：[**印度**]()、[**柬埔寨**]()、[**黎巴嫩**]()、[**尼日利亚**]()、[**厄瓜多尔**]()。\n- **第三代 (Gen 3)**：画质清晰但色彩饱和度较低，底部有车形状模糊。通常可见天线（或天线底座）。\n- **第四代 (Gen 4)**：极高清，色彩鲜艳。*如果画质极好但看不见天线，优先考虑 Gen 4 覆盖区。*\n- **Small cam**：跟四代机类似，极高清，色彩鲜艳，底下有很大非圆形模糊\n    - 覆盖地区有\n        - 南美（巴西，秘鲁），\n        - 非洲（南非），\n        - 亚洲（印度，土耳其），\n        - 北美（美国，加拿大，波多黎各），\n        - 欧洲（北欧，西欧，南欧有，自德国以东都没有）。\n- **低视角相机 (Lowcam)**：视角明显贴近地面，车底模糊范围极大（仿佛蹲着看路），2-4代机都可能有。\n    - **三剑客**：[**日本**]()、[**瑞士**]()、[**斯里兰卡**]()。\n\n# 运行方向\n\n- 三代车：看见后面，\n- 四代车（本田）：多为白色，看见前面，车后有时有刹车灯；分布于美洲，亚洲，大洋洲\n- 四代车（欧宝）：多为蓝色（也有其它颜色），看见后面（屁股有凹进去的小坑）；分布于欧洲，南非\n\n# 黑胶带\n\n- [**加纳]():** 右前方横杠上有明显黑胶带；车体前方Google地图标志经常可见。\n- 留尼旺：右后方横杠上有黑胶带\n- 多米尼加: 横杆中间和边上黑色保护垫。\n\n# 金属横杠\n\n- [**危地马拉]():** 非常干净的银色金属横杆，黑色后视镜可见\n- 吉尔吉斯斯坦: 与危地马拉类似，非常干净的银色金属横杆，黑色后视镜可见（左边后视镜里道路斜线接触上面-北部；接触左边或左上角-南部，靠近乌兹别克斯坦突出边境处）\n- 法罗群岛: 偶尔见，与危地马拉类似\n- 库拉索：与危地马拉类似，黑色，左前行李架有白贴纸\n- 孟加拉国：偶尔有些车与危地马拉类似，红色后视镜\n- [**塞内加尔]()：**偶尔有些车与危地马拉类似，有时可见右后视镜\n\n# **皮卡**\n\n- [哈萨克斯坦]()：白色皮卡，中间带螺纹黑色天线，经常只露出车头前端，车身经常被模糊掉\n- [卡塔尔]()：白色皮卡，经常被完全模糊，车前左侧有细长天线\n- 阿曼：白色皮卡，有天线底座，有时没有天线，经常被完全模糊\n- 厄瓜多尔：四代白色皮卡，黑色车斗，没有天线，有时可见红色刹车灯，经常被完全模糊\n- 巴拿马：白色皮卡，中间黑色天线，整个车头和部分车身可见，车身上两根金属横杠，有竖立的金属框架，车身经常被模糊掉\n- 哥斯达黎加：白色皮卡，中间黑色天线，整个车头和部分车身可见，车身上两根金属横杠\n- 纳米比亚：白色皮卡，天线粗且明显偏向左边\n- [卢旺达]()：白/黑/棕色皮卡，经常带红色刹车灯\n- 土耳其：偶尔有灰黑色皮卡\n- 美属萨摩亚：黑色皮卡，车斗生锈，露出很多，右车头可能也有细天线\n- 百慕大：黑色方形皮卡\n- 蒙古：有时有蓝色花纹皮卡，带涉水喉\n- [乌干达]() ：白色方形皮卡\n- 塞内加尔：有时有有银色皮卡，顶部有天线，稍偏左边，车斗有两根横杠\n- [肯尼亚]()：各式各样皮卡，右前方露出黑色涉水喉\n\n# **天线**\n\n- 卡塔尔：左车头有向上的细长天线\n- 波多黎各/关岛/北马里亚纳：三代车右车头有向上的细长天线; 尼日利亚有时候也有这种天线\n\n# **护航**\n\n- [**尼日利亚**]()：常见警车护航（可见警灯）。\n- [**突尼斯**]()：军用车护航（车牌左侧带红点）。\n\n# 其它特征\n\n- [**乌克兰]()：**红色街景车\n- 斯里兰卡：车身模糊边缘一抹红、白、蓝相间的色块（视觉上非常像法国国旗）\n- 智利：白车但露出一条黑边，光滑\n- [**蒙古**]()：车顶驮着巨大的帐篷或野营包。\n- 阿根廷：有时黑车的左车头有黑杠头部和白色螺丝露出",
      "badgeZh": "车身秘籍",
      "badgeEn": "Vehicle Metas"
    },
    {
      "id": "poles",
      "titleZh": "电线杆质地与结构",
      "titleEn": "Utility Poles Guide",
      "icon": "zap",
      "badge": "基础设施",
      "badgeColor": "indigo",
      "sections": [
        {
          "titleZh": "混凝土方孔杆与梯子杆",
          "titleEn": "Holey & Ladder Concrete Poles",
          "textZh": "- **方孔型水泥杆 (Holey Poles)：**\n    - **匈牙利 (H-holes)：** H 型，从头到脚通体分布长方形通孔。\n    - **波兰 (P-holes)：** P 型，底部约 1.5 米为实心纯混凝土无孔，上方才开始开孔。\n    - **罗马尼亚 (R-holes)：** R 型，带通孔，底部常涂刷白色油漆防护圈，常带有黄色警示贴纸，无 A-frame 支撑。\n    - **比利时：** 方孔边缘偏圆润平滑。\n    - **斯里兰卡：** 巨大矩形通孔。\n- **梯子型电线杆 (Ladder Poles)：**\n    - **巴西：** 下部梯子型，隔板数大约为 3，上部有小孔，方形截面。\n    - **厄瓜多尔：** 下部梯子型，隔板数明显偏多，上部带小孔。\n    - **智利：** 下部梯子型，最下方的横档隔板间距极大，上部收窄。\n    - **葡萄牙 / 北马其顿：** 梯子较瘦，隔板较少，有时后面有圆孔，上方有凹点。\n    - **西班牙 / 法国：** 梯子较瘦，隔板密集。\n    - **土耳其：** 金属梯子电线杆。\n    - **柬埔寨：** 类似法国梯子杆。\n    - **越南：** 四个面全部有镂空梯子横档。\n    - **尼日利亚：** 类似巴西梯子杆。\n    - **塞内加尔：** 类似法国梯子杆。\n    - **澳大利亚 (北领地 NT)：** 红色荒漠中常见生锈带孔金属电线杆。\n    - **新西兰：** 梯子极少甚至完全没有，类似智利风格。",
          "textEn": "- **Holey Concrete Poles:**\n    - **Hungary (H-holes):** Rectangular holes running continuously from bottom to very top.\n    - **Poland (P-holes):** Bottom base section (approx 1.5m) is solid concrete without holes.\n    - **Romania (R-holes):** Rectangular holes with white-painted base collar and yellow warning stickers; no A-frame.\n    - **Belgium:** Rectangular holes with rounded curved corners.\n    - **Sri Lanka:** Very large rectangular openings.\n- **Ladder Concrete Poles:**\n    - **Brazil:** Ladder design with around 3 rungs on lower half, square cross-section.\n    - **Ecuador:** Ladder design with significantly more rungs.\n    - **Chile:** Very wide spacing between bottom rungs, tapering upwards.\n    - **Portugal / North Macedonia:** Slender ladder poles with fewer rungs, indented dots above.\n    - **Spain / France:** Slender ladder poles with densely spaced rungs.\n    - **Turkey:** Metal ladder utility poles.\n    - **Cambodia:** Similar to French ladder style.\n    - **Vietnam:** Four-sided hollow ladder rungs.\n    - **Nigeria:** Similar to Brazilian ladder design.\n    - **Senegal:** Similar to French ladder design.\n    - **Australia (Northern Territory):** Rusty metal poles with punched holes across desert outback.\n    - **New Zealand:** Extremely sparse ladder rungs, tapering up."
        },
        {
          "titleZh": "八边形杆、圆杆与特殊结构",
          "titleEn": "Octagonal, Round & Special Poles",
          "textZh": "- **八边形水泥杆：** **墨西哥、厄瓜多尔、哥伦比亚**最经典拉美三强标志。\n- **方形带凹点水泥杆：** **泰国、老挝、斯里兰卡、印度尼西亚**；比利时凹点极多；法国凹点极少且仅在最顶端；多米尼加底部会涂刷颜色。\n- **金属网状与金属杆：** 西班牙、意大利、保加利亚、塞尔维亚、土耳其、以色列常见格构金属柱；马来西亚全境普遍使用热镀锌圆铁管杆。\n- **特殊结构杆型：**\n    - **双圆柱并排：** 捷克、斯洛伐克经典并立双杆。\n    - **A-frame（单根斜向支撑杆）：** 波罗的海三国（爱沙尼亚、拉脱维亚、立陶宛）极多。\n    - **A字形（A-frame 加横杆）：** 奥地利阿尔卑斯山区公路常见。\n    - **极度弯曲木杆：** **玻利维亚**专属（尤其东部圣克鲁斯低地区域）。\n    - **纯木杆国家：** 希腊、塞浦路斯乡村几乎只有超高木杆，没有水泥杆。\n    - **Stobie 杆：** **澳大利亚南澳州 (SA)** 独占（两根钢制工字钢夹住中间的混凝土柱）。",
          "textEn": "- **Octagonal Concrete Poles:** **Mexico, Ecuador, Colombia** classic Latin American trio.\n- **Square Poles with Indentations:** **Thailand, Laos, Sri Lanka, Indonesia**; Belgium features many indentations; France has very few at the very top; Dominican Republic has colored bases.\n- **Lattice Metal Poles:** Spain, Italy, Bulgaria, Serbia, Turkey, Israel; Malaysia universally uses galvanized tubular steel poles.\n- **Special Pole Structures:**\n    - **Double Cylindrical Poles:** Czechia and Slovakia twin poles.\n    - **A-Frame Diagonal Struts:** Extremely prevalent in Baltic countries (Estonia, Latvia, Lithuania).\n    - **A-Shape with Crossbar:** Austrian mountain roads.\n    - **Extremely Crooked Wooden Poles:** **Bolivia** exclusive (especially eastern lowlands of Santa Cruz).\n    - **Exclusively Wooden Poles:** Greece and Cyprus rural roads rely almost entirely on tall wooden poles.\n    - **Stobie Poles:** **South Australia (SA)** exclusive (two steel I-beams flanging a concrete core)."
        },
        {
          "titleZh": "顶部结构与变压器特征",
          "titleEn": "Pole Tops & Transformers",
          "textZh": "- **横杆下倒三角支撑：** 捷克、斯洛伐克、阿尔巴尼亚。\n- **竖琴状支架：** 希腊专属（金属支架如竖琴弦列）。\n- **简单短横杠：** 爱沙尼亚、立陶宛、俄罗斯常见。\n- **上下交错挂钩：** 拉脱维亚、保加利亚（混凝土杆）、克罗地亚。\n- **向下弯弓型支架：** 法国、塞内加尔、比利时、西班牙、罗马尼亚、突尼斯、马达加斯加。\n- **拿破仑帽型顶盖：** 法国典型特征。\n- **密集绝缘子群：** 南非、希腊。\n- **横臂朝向与几何：**\n    - 秘鲁：三根横臂都在同一侧面。\n    - 阿根廷：三根横臂分居两边。\n    - 乌拉圭 / 捷克 / 斯洛伐克：三叉戟金属支架。\n    - 南非 / 澳大利亚 / 阿根廷 / 巴西：横杠锐角交叉成横向 A 型。\n    - 南非开普敦：金属横杠组成竖向 A 型。\n    - 韩国 / 法国：电线杆顶端明显变细。\n- **变压器朝向：** 加拿大新不伦瑞克 (NB) 与不列颠哥伦比亚 (BC) 变压器垂直正对道路方向，其他省份多平行于道路。",
          "textEn": "- **Inverted Triangle Brackets under Crossbar:** Czechia, Slovakia, Albania.\n- **Harp-Shaped Bracket:** Greece exclusive (resembles harp strings).\n- **Simple Short Crossbars:** Estonia, Lithuania, Russia.\n- **Staggered Alternating Hooks:** Latvia, Bulgaria (concrete poles), Croatia.\n- **Downward Curved Bow Brackets:** France, Senegal, Belgium, Spain, Romania, Tunisia, Madagascar.\n- **Napoleon Hat Shroud:** France.\n- **Dense Tiered Insulators:** South Africa, Greece.\n- **Crossarm Layout:**\n    - Peru: Three crossarms all mounted on the same side.\n    - Argentina: Three crossarms split across both sides.\n    - Uruguay / Czechia / Slovakia: Trident-shaped brackets.\n    - South Africa / Australia / Argentina / Brazil: Horizontal A-frame bracket.\n    - Cape Town (South Africa): Vertical A-frame bracket.\n    - South Korea / France: Pole trunk distinctly tapers at the top.\n- **Transformer Orientation:** Canada NB and BC mount transformers facing the road, while other provinces mount parallel."
        },
        {
          "titleZh": "底部涂装、金属环、贴纸与变电箱",
          "titleEn": "Base Markings, Decals & Substations",
          "textZh": "- **底部条纹涂装：**\n    - **中国台湾：** 黄黑斜条纹一直涂刷延伸到地面。\n    - **韩国：** 黄黑斜条纹离地面有数十厘米空白，不接触地面。\n    - **日本：** 竖向黑黄/黑色条纹，通常不接触地面。\n- **黑袜子（底部一圈黑色上方刷白）：** **俄罗斯**与前苏联地区。\n- **色段与底部刷色：**\n    - 印尼（红白相间段）；以色列（黑白相间段）；哥伦比亚 / 秘鲁（黄黑相间段）。\n    - 多米尼加（底部一人高涂刷各种鲜艳颜色）；西澳大利亚（底部刷绿漆）。\n    - 斯洛伐克（木杆底部用混凝土柱加固支撑）；北美（拉线贴地处带黄色塑料套管）。\n- **金属环与贴纸：**\n    - **新西兰：** 杆身中间有一圈金属环包裹电线杆四周（防负鼠攀爬）。\n    - **澳大利亚塔斯马尼亚：** 杆身有一圈橄榄绿色的金属环。\n    - **美国加州：** 木杆上常有三条黄色金属箍；夏威夷一条。\n    - **贴纸：** 法国蓝贴纸；德国白色正方形贴纸；意大利横长方形白贴纸；马来西亚/澳洲QSL黑色贴纸；英国黄色贴纸（有人形图案）、爱尔兰黄色贴纸（无人形图案）；罗马尼亚黄贴纸；秘鲁各色贴纸。\n    - **支架：** 木杆两侧金属架，英国顶端平整，爱尔兰顶端倾斜。\n- **变电箱警告标识：**\n    - **拉脱维亚：** 黄色三角黑色闪电标志，变电箱编码（`KS-xxxx` 或 `ST-xxxx` 格式）。\n    - **意大利：** Enel（国家电力公司）标志与红色多重折线闪电。\n    - **波兰：** `ST` 开头代码配合波兰语黄色或白色警告标牌。\n    - **墨西哥：** CFE 绿色圆形标志，中心带白色闪电。\n    - **哥伦比亚：** 大面积亮黄底黑字贴纸，波哥大常喷印 `CODENSA`。\n- **进阶文献与实战训练**：\n    - [Notable Poles Document by Zig8zag](https://docs.google.com/document/d/1_H5ignyvO42ACFfr7n02o0x2EyPYUhD-vgMNbnQANe4/edit?tab=t.0)\n    - [欧洲电线杆专项排位对决地图 (Learnable Meta)](https://www.geoguessr.com/game/PV8znvPnYXhdy31D)",
          "textEn": "- **Base Hazard Stripes:**\n    - **Taiwan:** Yellow and black diagonal stripes reach all the way down to the ground.\n    - **South Korea:** Diagonal hazard stripes stop short of the ground.\n    - **Japan:** Vertical black/yellow hazard stripes that generally do not touch the ground.\n- **Black Socks (Black base collar with white trunk above):** **Russia** and former Soviet territories.\n- **Color Blocks:**\n    - Indonesia (red-white), Israel (black-white), Colombia / Peru (yellow-black).\n    - Dominican Republic (man-height brightly painted base); Western Australia (green base).\n    - Slovakia (wooden poles reinforced by concrete base pillar); North America (yellow plastic guy wire guards).\n- **Metal Bands & Decals:**\n    - **New Zealand:** Wide metal band wrapping fully around the pole trunk (possum guard).\n    - **Tasmania (Australia):** Olive-green metal collar around the trunk.\n    - **California (US):** Three yellow metal bands around wooden poles; Hawaii has one.\n    - **Stickers:** France blue; Germany square white; Italy horizontal white; Malaysia black; UK yellow (with stickman); Ireland yellow (no stickman); Romania yellow; Peru multi-color.\n    - **Struts:** Wood pole metal side brackets have flat top in UK vs slanted top in Ireland.\n- **Substation Box Logos:**\n    - **Latvia:** Yellow triangle lightning with 'KS-xxxx' or 'ST-xxxx' serials.\n    - **Italy:** Enel logo with multi-kinked red lightning bolt.\n    - **Poland:** 'ST' code on Polish warning plaques.\n    - **Mexico:** CFE green round seal with white lightning bolt.\n    - **Colombia:** Bright yellow warning placards; Bogotá shows 'CODENSA' stencils.\n- **Advanced Documents & Practice Maps**:\n    - [Notable Poles Document by Zig8zag](https://docs.google.com/document/d/1_H5ignyvO42ACFfr7n02o0x2EyPYUhD-vgMNbnQANe4/edit?tab=t.0)\n    - [European Poles Dedicated Practice Map (Learnable Meta)](https://www.geoguessr.com/game/PV8znvPnYXhdy31D)"
        }
      ],
      "rawContent": "# 电线杆\n\n[Notable Poles Document by Zig8zag](https://docs.google.com/document/d/1_H5ignyvO42ACFfr7n02o0x2EyPYUhD-vgMNbnQANe4/edit?tab=t.0)\n\n## 杆子质地\n\n![image.png](%E7%94%B5%E7%BA%BF%E6%9D%86/image.png)\n\n- 南美木杆：玻利维亚，阿根廷，乌拉圭\n- 非洲混凝土杆：塞内加尔，尼日利亚\n- 北欧混凝土杆：俄罗斯，立陶宛，爱沙尼亚（木杆，混凝土杆都有）\n- 南欧木杆：\n    - 只有木杆：希腊，塞浦路斯\n    - 木杆混凝土杆都有：北马其顿，克罗地亚，葡萄牙\n- 亚洲木杆：蒙古\n\n## 杆子类型\n\n- **方孔型**\n    - [匈牙利]()：H 型，从头到脚都有孔。\n    - [波兰]()：P 型，底部通常无孔。\n    - [罗马尼亚]()：R 型，带孔，底部常有白漆，常有黄贴纸，没有A-frame。\n    - 比利时：方孔偏圆弧形\n    - 斯里兰卡：大孔\n- **梯子型**\n    - **巴西：下部梯子型，**隔板数大约为3，上部有小孔。\n    - 厄瓜多尔**：下部梯子型，**隔板数比较多，上部有小孔。\n    - 智利：**下部梯子型，最下面的梯子间距很大**，上部有小孔\n    - 葡萄牙，北马其顿：梯子较瘦，隔板较少，后面有时有圆孔，上方有凹点\n    - 西班牙，法国：梯子较瘦，隔板很多\n    - 土耳其：金属梯子\n    - 柬埔寨：类似法国\n    - 越南：四面都是梯子\n    - 尼日利亚：类似巴西\n    - 塞内加尔：类似法国\n    - 澳大利亚：Northern Territory 有生锈带孔金属电线杆\n    - 新西兰：类似智利，梯子极少，甚至没有\n- **八边形：**\n    - [**墨西哥**]()\n    - [**厄瓜多尔**]()\n    - [**哥伦比亚**]()\n- **方形带凹点**\n    - [**泰国]()，**老挝，斯里兰卡，[**印度尼西亚**]()\n    - 比利时：很多凹点\n    - 法国：凹点很少，仅在最上\n    - 多米尼加：底部会刷成其它颜色\n- 金属网状：西班牙，意大利，保加利亚，塞尔维亚，土耳其，以色列，等等\n- 特殊型\n    - 双圆柱：捷克，斯洛伐克\n    - A-frame（另一根斜向支撑）：波罗的海地区特别多\n    - A字形（A-frame+横杆）：奥地利\n    - 四面方形金属网状，顶端法式：西班牙东南\n    - 极度弯曲木杆： [玻利维亚]()，尤其东部地区。\n    - 特别高的电线杆：希腊\n    - 铁轨中间夹混凝土（Stobie）：澳大利亚SA地区\n\n## 顶部结构\n\n- 横杆下倒三角支撑： 捷克、斯洛伐克，阿尔巴尼亚\n- 竖琴状：希腊\n- 简单短横杠：爱沙尼亚，立陶宛，俄罗斯\n- 上下交错钩：拉脱维亚，保加利亚(混凝土杆)，克罗地亚\n- 向下弯弓型：法国，塞内加尔，比利时，西班牙，罗马尼亚，突尼斯，马达加斯加\n- 拿破仑帽型：法国\n- 密集绝缘子： 南非， 希腊\n- 单独一个绝缘体：北美更常见\n- 变压器：加拿大NB，BC面对路方向，其它省平行于路方向\n- 三根胳膊在同一面：秘鲁\n- 三根胳膊分两边：阿根廷\n- 三叉戟：乌拉圭，欧洲很多国家（捷克，斯洛伐克）\n- 横杠锐角交叉成横向A型：南非，澳大利亚，阿根廷，巴西\n- 金属横杠组成竖向A型：南非开普敦附近\n- 电线杆顶端变细：韩国，法国\n\n## **底部涂装**\n\n- 黄黑条纹\n    - [台湾]()：斜条纹直达地面\n    - 韩国：斜条纹不达地面\n    - [日本]()：竖条纹通常不接触地面\n- 黑袜子（杆子最底部有一圈黑色，上方刷白） ： [俄罗斯]()\n- 红白色段：印尼\n- 黑白色段：以色列\n- 黄黑色段：哥伦比亚，秘鲁\n- 底部一人高涂色：多米尼加\n- 底部绿色：澳大利亚西部\n- 木杆底部有混凝柱支撑：斯洛伐克\n- 支撑铁丝接近地面处黄色塑胶套：北美\n\n## **杆子环绕或贴纸**\n\n- 贴纸\n    - 蓝色贴纸：法国\n    - 白色贴纸：德国（正方形），意大利（横长方形）\n    - 黑色贴纸：马来西亚西部，澳大利亚QSL布里斯班\n    - 黄色贴纸：英国（有人），爱尔兰（没有人），罗马尼亚，斯洛伐克西部（圆形贴纸）\n    - 各色贴纸：秘鲁\n- 金属环\n    - 中间有一块金属环绕整个电线杆四周：新西兰\n    - 四周有一圈橄榄色的金属环绕：澳大利亚塔斯马尼亚\n    - 混凝方柱上很多条横向金属箍：法国，比利时\n    - 混凝圆柱上很多横向金属箍：捷克，斯洛伐克，塞尔维亚\n    - 黄色金属箍：美国加州三条，夏威夷一条\n- 木杆左右两侧有金属架子分布：\n    - 英国: 顶端是平的\n    - 爱尔兰：顶端是斜的\n\n## 变电箱\n\n- 拉脱维亚: 黄色三角黑色闪电标志；变电箱编码（如 KS-xxxx 或 ST-xxxx 格式）\n- 意大利：Enel（意大利国家电力公司）的标志；带有红色多重折线的闪电警告图案。\n- 波兰：一系列字母组合（如 ST，但与拉脱维亚格式不同，多伴随波兰语）的黄色或白色警告标牌\n- 墨西哥：CFE的绿色圆形标志，中心带有一个白色的闪电图案\n- 哥伦比亚：大面积亮黄色带黑字的警告贴纸；波哥大变压器上还常能看到 CODENSA 的喷漆字样\n\n## **杆子环绕或贴纸**\n\n- [欧洲电线杆Learnable Meta](https://www.geoguessr.com/game/PV8znvPnYXhdy31D)",
      "badgeZh": "基础设施",
      "badgeEn": "Infrastructure"
    },
    {
      "id": "bollards",
      "titleZh": "路缘标与雪迹杆",
      "titleEn": "Bollards & Snow Poles",
      "icon": "shield",
      "badge": "道路护柱",
      "badgeColor": "rose",
      "sections": [
        {
          "titleZh": "欧洲各大路缘标家族体系",
          "titleEn": "European Bollard Families Guide",
          "textZh": "- **奥地利型 (Austrian style)：** 白色三角柱，配短黑色顶部。\n    - **奥地利：** 有时顶部带小盖子；深红或深灰色反光片，背面为黑色反光片。\n    - **斯洛文尼亚 / 黑山 / 塞尔维亚：** 正面鲜红色，背面白色反光片；黑山与塞尔维亚反光片更为细长。\n- **意大利型 (Italian style)：** 白色三角截面柱，顶部黑色帽子向下延伸较长（相当于奥地利型黑色部分下移并包裹至顶端边缘）。\n    - **意大利：** 典型配置。\n    - **阿尔巴尼亚：** 伴随断裂天空辅助判断。\n    - **圣马力诺：** 出现密度极高。\n- **南欧型 (South European style)：** 白色三角柱，中间黑色块，上端留白较少。\n    - **克罗地亚 / 北马其顿：** 前深红后白反光板。\n    - **葡萄牙：** 白色反光板带两颗螺丝；或斜黑块配白色/橙色长方反光板。\n    - **安道尔：** 短方块橙色反光板。\n    - **希腊：** 斜黑块配接近正方形红橙色反光板；柱身常为空心。\n- **德国型 (German style)：** 白色三角柱，中间黑色斜块，上端留白较多。\n    - **德国：** 前面白色反光板（路口用黄色），反光板上有**两颗**螺丝，后面两个大圆钉。\n    - **卢森堡：** 前面白色反光板带**三颗**螺丝，后面两个大圆钉；下方有时带靠外侧红反光条。\n    - **西班牙：** 通常为空心，内嵌鲜黄色反光板；西南埃斯特雷马杜拉顶部有绿色细条。\n    - **立陶宛：** 前橙后白反光板。\n    - **匈牙利：** 前红后白反光板。\n    - **乌克兰：** 类似匈牙利，红色反光板更宽。\n- **北欧型 (Nordic style)：** 圆形或圆弧形平顶白杆，中间黑块，上端留白少。\n    - **爱沙尼亚：** 圆形空心平顶白杆，前白方块，后两个橙色圆点反光板。\n    - **芬兰：** 类似爱沙尼亚，后为白色圆点反光板（很少出现，多用雪迹杆）。\n    - **拉脱维亚：** 半圆或扁形平顶白杆，前有方块反光板（可能有数字），后两个圆点。\n    - **挪威：** 圆弧形白杆，黑色部分呈明显平行四边形状，中间灰色方块。\n- **无黑块型 (No Black Band)：** 纯白杆无黑色方块。\n    - **土耳其：** 圆弧片状，红色方块不接触边缘；反面没有反光板。\n    - **罗马尼亚：** 圆弧片状，红方块更长（类似澳大利亚），较少出现。\n    - **波兰：** 三角形粗白杆，红方块包裹正反面，前红后白。\n    - **荷兰：** 圆润白杆，细长红色反光板。\n    - **比利时：** 三角形圆润白杆，前黄后白正方形反光板。\n    - **丹麦：** 三角形白杆，前黄后白反光板，顶部有橙色细条。\n- **圆柱型与彩色线段型：**\n    - **爱尔兰：** 绿白圆柱形。\n    - **英国：** 圆头，从上至下为黑白黑，上方黑块内嵌红/白反光片。\n    - **法国：** 白色铅笔型圆柱，带红色或灰色环绕带。\n    - **苏格兰：** 类似法国，但白杆上有凹进去的条纹。\n    - **瑞士：** 圆柱形，灰圈配白色反光板。\n    - **安道尔：** 细长杆子，顶端一段为红色。\n- **显著特征国家：**\n    - **冰岛：** 全杆鲜黄色扁平长方形柱体，极其醒目。\n    - **捷克 & 斯洛伐克：** 很短矮粗，通常有**两块平行**的橙色反光块。\n    - **塞尔维亚：** 深红反光板仅在靠近道路的半边。",
          "textEn": "- **Austrian Style:** White triangular post with short black top.\n    - **Austria:** Dark red reflector, black on rear, optional cap.\n    - **Slovenia / Montenegro / Serbia:** Bright red front, white rear; Montenegro/Serbia reflector is thinner.\n- **Italian Style:** White triangular post with long black cap extending downwards over the top rim.\n    - **Italy:** Classic standard.\n    - **Albania:** Paired with Sky Rift.\n    - **San Marino:** Exceptionally high density.\n- **South European Style:** White triangular post with black band, narrow white space above.\n    - **Croatia / North Macedonia:** Dark red front, white rear.\n    - **Portugal:** White reflector with two screws, or angled black patch with white/orange rectangle.\n    - **Andorra:** Short square orange reflector.\n    - **Greece:** Slanted black block with square reddish-orange reflector; often hollow.\n- **German Style:** White triangular post with slanted black band, generous white space above.\n    - **Germany:** White reflector front (yellow at junctions) with **two screws**, two round studs behind.\n    - **Luxembourg:** White reflector with **three screws**, two round studs behind; optional lower red strip.\n    - **Spain:** Hollow post with bright yellow reflector; Extremadura has green top rim.\n    - **Lithuania:** Orange front, white rear.\n    - **Hungary:** Red front, white rear.\n    - **Ukraine:** Similar to Hungary but red block is wider.\n- **Nordic Style:** Rounded/cylindrical flat-top white post with black band.\n    - **Estonia:** Hollow flat-top, white front square, two orange rear dots.\n    - **Finland:** Two white rear dots (rare; snow poles preferred).\n    - **Latvia:** Semi-circle flat top with front square (often numbered) and two rear dots.\n    - **Norway:** Curved white post, parallelogram black patch with gray square inside.\n- **No Black Band Style:** Plain white post without black bands.\n    - **Turkey:** Curved blade post, red square not touching edges; no rear reflector.\n    - **Romania:** Longer red block (resembles Australian).\n    - **Poland:** Chunky triangular white post, red band wraps both sides (red front, white rear).\n    - **Netherlands:** Rounded white post, thin vertical red reflector.\n    - **Belgium:** Rounded triangular post, square yellow front / white rear reflector.\n    - **Denmark:** Triangular white post, yellow front / white rear with orange top rim.\n- **Cylindrical & Banded Types:**\n    - **Ireland:** Green and white cylinder.\n    - **United Kingdom:** Rounded top, black-white-black segments with red/white reflector.\n    - **France:** White pencil cylinder with red or gray circular ring.\n    - **Scotland:** Similar to France but with indented vertical grooves.\n    - **Switzerland:** Cylinder with gray band and white reflector.\n    - **Andorra:** Thin pole with red painted top section.\n- **Prominent National Signatures:**\n    - **Iceland:** Bright canary-yellow flat rectangular post.\n    - **Czechia & Slovakia:** Very short, featuring **two parallel** orange reflector bars.\n    - **Serbia:** Dark red reflector restricted to the half-side facing the road."
        },
        {
          "titleZh": "美洲各州各省与全球路缘标",
          "titleEn": "Americas & Global Bollards",
          "textZh": "- **美国各州路缘标 (US State Bollards)：**\n    - **南达科他 / 蒙大拿 (SD / MT)：** 深色柱子，顶部为菱形白色反光板。\n    - **怀俄明 (WY)：** 深色柱子，顶部为圆形白色或灰色反光板。\n    - **爱达荷 / 犹他 (ID / UT)：** 带孔金属杆，顶部有等宽白色方形反光板。\n    - **内华达 (NV)：** 细金属杆，上部竖长条反光板为黑底白反光块，上下各有两个钉子。\n    - **华盛顿州 (WA)：** 棕色杆子，正面单块白色反光板，后面有两片白色反光板。\n- **加拿大各省 (Canada Provinces)：**\n    - **阿尔伯塔 (Alberta)：** 白圆杆，顶部有两条黑带子。\n    - **魁北克 (Quebec)：** 长白杆，上有红色或绿色反光片，总是直接固定在金属护栏 (Guardrails) 上。\n    - **萨斯喀彻温与曼尼托巴 (SK / MB)：** 白圆杆，顶端一段为黑色，下面可能有橙色或白色。\n- **拉丁美洲各国：**\n    - **墨西哥：** 短白色圆柱形，底部有黑色涂漆。\n    - **厄瓜多尔：** 两个红色方块，圆形或扁形杆子。\n    - **秘鲁：** 土耳其式或比利时式；最南端塔克纳 (Tacna) 附近见白圆柱配橙色顶部、前红后白方形反光板。\n    - **智利：** 类似西班牙式，但前白后黄反光板；也有类似美国式的细金属杆。\n- **其它大洲代表性路缘标：**\n    - **澳大利亚：** 白底带独立红色方块，红框不接触边缘。\n    - **新西兰：** 白底红方块，但红色反光条**整圈 360 度环绕**整个柱身（注意：红条完全覆盖那一面是背面）。\n    - **卢旺达：** 白色圆柱，带有一圈或两圈红色环形色带。\n    - **纳米比亚：** 白色短方柱，顶部有小块黄色反光板。\n    - **蒙古：** 白色，类似保龄球，上有两条红色环带。\n    - **越南：** 短粗方块水泥柱，顶部红色或蓝色盖子带反光板（类似火柴棍）。\n    - **中国台湾：** 黑色板，上面有两到三个大橙色圆点反光片。\n    - **马来西亚：** 长条板，上面嵌有黑色、白色、灰色、红色方块。\n    - **日本：**\n        - 本州北部：反光板下面有一道橙色圈圈。\n        - 富山地区：圆形反光板下有一道红圈，向上延伸杆子有红白条纹。\n        - 冈山地区：圆形反光板下有一道红色圈圈。",
          "textEn": "- **US State Bollards:**\n    - **South Dakota / Montana (SD / MT):** Dark post with white diamond reflector at the top.\n    - **Wyoming (WY):** Dark post with white or gray circular reflector.\n    - **Idaho / Utah (ID / UT):** Perforated metal post with equal-width white square reflector.\n    - **Nevada (NV):** Slender metal post with vertical black backing and white reflector with 2 top/bottom nails.\n    - **Washington (WA):** Brown post, single white front reflector, two white reflectors on rear.\n- **Canadian Provinces:**\n    - **Alberta:** White round post with two black rings at the top.\n    - **Quebec:** Tall white post with red or green reflectors, mounted directly onto highway guardrails.\n    - **Saskatchewan & Manitoba:** White round post, black top section, with orange or white below.\n- **Latin America:**\n    - **Mexico:** Short white cylinder with black painted base.\n    - **Ecuador:** Two red blocks on round or flat posts.\n    - **Peru:** Turkish or Belgian styles; Tacna (far south) has white cylinder with orange top and square red/white reflector.\n    - **Chile:** Spanish style with white front / yellow rear reflectors, or American-style metal posts.\n- **Other Continents:**\n    - **Australia:** White post with red square reflector that does NOT touch edges.\n    - **New Zealand:** White post with red reflector tape **wrapping 360 degrees** around the post (the fully covered side is the rear).\n    - **Rwanda:** White cylinder with one or two red circular rings.\n    - **Namibia:** Short white square post with small yellow reflector on top.\n    - **Mongolia:** White bowling-pin shape with two red stripes.\n    - **Vietnam:** Chunky square concrete post with red/blue cap and reflector (matchstick style).\n    - **Taiwan:** Black board with 2 or 3 large orange circular dots.\n    - **Malaysia:** Strip board containing black, white, gray, and red square segments.\n    - **Japan:**\n        - Northern Honshu: Orange ring beneath reflector.\n        - Toyama: Red ring below circular reflector, pole extending upward with red-white stripes.\n        - Okayama: Red ring below circular reflector."
        },
        {
          "titleZh": "雪迹杆 (Snow Poles) 冬季全览",
          "titleEn": "Snow Poles & Winter Metas",
          "textZh": "- **北欧三国雪迹杆：**\n    - 色彩鲜艳（橙/红）、材质统一、必带反光条/反光片，由交通部门标准化定制。\n    - **芬兰：** 反光片通常更细，而且位置非常靠近顶部。\n    - **瑞典：** 中部稍上方有白色反光片，部分杆子配有第二个反光片。\n    - **挪威：** 一个或两个略细的反光片，其中一个通常非常接近杆子中部。\n- **日本雪迹杆：**\n    - **北海道：** 道路两侧高耸立杆，带有鲜艳的红白相间斜条纹，顶端悬挂**向下指示的固定红白箭头**（指出被积雪掩埋的路肩边缘位置）。\n    - **新潟 / 青森：** 黄色带反光条的长杆，或黑黄相间反光立杆。\n- **北美雪迹杆：**\n    - 原色木棍/树枝插在路旁、细长单色塑料杆，通常没有反光条。",
          "textEn": "- **Nordic Snow Poles:**\n    - Vibrant colors (orange/red), standardized plastic/bamboo materials, equipped with reflective tape.\n    - **Finland:** Reflector is thinner and positioned very close to the top rim.\n    - **Sweden:** White reflector located slightly above the middle; occasional second reflector.\n    - **Norway:** One or two thinner reflectors, with one positioned very close to the center.\n- **Japanese Snow Poles:**\n    - **Hokkaido:** Tall red-and-white striped overhead gantries pointing **downward red-and-white arrows** directly at the buried road shoulder edges.\n    - **Niigata / Aomori:** Yellow reflective stakes or yellow-and-black striped markers.\n- **North American Snow Stakes:**\n    - Natural wooden poles/branches stuck along shoulders, slender plain plastic rods without reflectors."
        }
      ],
      "rawContent": "# 路缘标和雪迹杆\n\n### **欧洲 [[总结图](https://www.reddit.com/r/geoguessr/comments/1fp9jso/just_made_this_european_bollard_infographic_and/#lightbox)]**\n\n- **奥地利型:** 白色三角杆，短的黑色顶部\n    - 奥地利：有时上面还有小盖子；深红色或深灰色反光板；反面黑色反光板\n    - 斯洛文尼亚/黑山/塞尔维亚：正面鲜红色，反面白色反光板\n        - 黑山/塞尔维亚反光板更细长\n- 意大利型: 白色三角杆，长的黑色顶部 (想象成奥地利型黑色部分下移包住前红后白反光板)\n    - **意大利**\n    - 阿尔巴尼亚：用断裂天空辅助判断\n    - 圣马力诺：特别多个\n- 南欧型：白色三角杆，中间黑色，上端留白较少 (想象成意大利型黑色部分整体下移)\n    - 克罗地亚/北马其顿：前深红后白反光板\n    - 葡萄牙：\n        - 白色反光板，上有两颗螺丝\n        - 另有一种斜黑块，白色或橙色长方反光板\n    - 安道尔：短的方块橙色反光板\n    - 希腊：斜黑块, 接近正方形红橙色反光板;柱子可为空心\n- 德国型：白色三角杆，中间黑色，上端留白较多（想象成南欧型黑色部分整体继续下移）\n    - **德国**：前面白色反光板（路口用黄色），反光板上有**两颗**螺丝，后面两个大圆钉\n    - **卢森堡**：前面白色反光板，反光板上有**三颗**螺丝，后面两个大圆钉；有时候下面还有一个靠外侧的红反光条（跟塞尔维亚相反方向）\n    - 西班牙：通常为空心，鲜黄色反光板；在西南的Extremadura，顶部有绿色细条\n    - 立陶宛：前橙后白反光板\n    - 匈牙利：前红后白反光板\n    - 乌克兰：跟匈牙利类似，红色反光板更宽一些\n- 北欧型：圆形或圆弧形平顶白杆，中间黑色，上端留白较少\n    - 爱沙尼亚：圆形空心平顶白杆，前面方块反光板，后面两个橙色圆点反光板\n    - 芬兰：跟爱沙尼亚类似，后面白色圆点反光板，但很少有，且可以用雪迹杆判断\n    - 拉脱维亚：半圆或扁形平顶白杆，前面方块反光板，上面可能有数字，后面两个圆点反光板；\n    - 挪威：圆弧形白杆，黑色部分呈明显平行四边形状，中间灰色方块\n- 无黑块型：白杆，无黑方块\n    - 土耳其: 圆弧片状，红色方块不接触边缘；红块比澳大利亚稍短，反面没有反光板。\n    - 罗马尼亚：圆弧片状，与土耳其类似，红方块更长一些（类似澳大利亚），但很少出现\n    - **波兰**：三角形粗白杆，红方块包裹正反面，前红后白反光板。\n    - 荷兰：圆润白杆，细长红色反光板\n    - 比利时：三角形圆润白杆，前黄后白正方形反光板\n    - 丹麦：三角形白杆，前黄后白反光板，顶部有橙色细条\n- 圆柱型：圆柱形或扇形杆\n    - 爱尔兰：绿白圆柱形\n    - 英国：圆头圆脑，从上至下为黑白黑，上面黑色块内有红色或白色反光板\n    - 法国：白色铅笔型柱，红色或灰色环绕带\n    - 苏格兰：跟法国类似，但白色杆上有凹进去的条纹\n    - 瑞士：圆柱形，灰色一圈，白色反光板\n- 彩色线段型：细杆子，通常为好几个彩色线段组成\n    - 安道尔：顶端一段为红色\n    - 法罗群岛：也有英国式的，红黄色\n- 有显著特点\n    - **冰岛**：全杆鲜黄色。\n    - **捷克 & 斯洛伐克**：很短，通常有**两块平行**的橙色反光块。\n    - 塞尔维亚：有黑帽子和黑方块两种，深红反光板仅在靠近路的半边\n- 多种多样\n    - 俄罗斯：有奥地利型（红色反光板连接上方黑盖子），德国型：斜向白黑红方块嵌套（东部地区）；路交叉口比较多\n    - 瑞典：两种型号，一种德国型，一种北欧（芬兰）型\n    - 北马其顿：一种圆形有黑帽子盖；另一种南欧（克罗地亚）型\n    - 保加利亚：一种跟匈牙利类似（少见），一种跟波兰类似，但颜色为黑红\n    - 波黑：一种德国型，一种意大利型，一种奥地利（斯洛文尼亚）型\n    - 格鲁吉亚：一种匈牙利型，一种土耳其型\n\n### **美洲**\n\n- 美国\n    - South Dakota/Montana：深色柱子，顶部为菱形白色反光板\n    - Wyoming: 深色柱子，顶部圆形白色或灰色反光板\n    - Idaho/Utah：带孔金属杆，顶部有等宽白色方形反光板\n    - Nevada：细金属杆，上部竖长条反光板为黑底白反光块，上下各有两个钉子\n    - Washington：棕色杆子，白色反光板，后面有两片白色反光板\n- 加拿大\n    - Alerta: 白圆杆，顶部有两条黑带子\n    - Quebec：长白杆，上有红色或绿色反光片，总是连在护栏(Guardrails)上\n    - Saskatchewan & Manitoba：白圆杆，顶端一段为黑色，下面可能有橙色或白色\n- 其它国家\n    - [中南美bollards总结图](https://preview.redd.it/another-resource-a-very-simple-central-south-american-v0-8zzg25cgxkgf1.jpeg?auto=webp&s=cd758d680f6834e88de253449ac2afa1e648bf6b)\n    - 墨西哥：短白色圆柱形，底部有黑色\n    - 厄瓜多尔：两个红块，圆形或扁形杆子\n    - 秘鲁：有土耳其式的，有比利时式的；白圆柱橙色顶部前红后白方形反光板在最南边的Tacna附近\n    - 智利：少见，跟西班牙类似，但前白后黄反光板；也有类似美国式的\n\n### **其它地区**\n\n- 卢旺达：白色圆柱，有一圈或两圈红色带\n- 纳米比亚：白色短方柱，顶部有小块黄色反光板\n- 澳大利亚：白底带红方块，红框不接触边缘。\n- [**新西兰**]()：白底红方块，但红条通常**环绕**整个柱身。注意红条完全覆盖那一面是背面。\n- 蒙古：白色，类似保龄球，上有两条红带\n- 越南：短粗方块水泥柱，顶部红色或蓝色盖子，上有反光板，类似火柴棍(丹麦有时有类似的)\n- 台湾：黑色板上面两个或三个大橙圆点\n- 马来西亚：长条板上面有黑色，白色，灰色，红色方块\n- 日本\n    - Bollard为反光板下面有一道橙色圈圈：本州北部\n    - Bollard为圆形反光板下面有一道红色圈圈，上可延长杆子有红白条纹：本州中部的Toyama富山地区\n    - Bollard为圆形反光板下面有一道红色圈圈：本州西部的Okayama岗山地区\n\n### 雪迹杆\n\n#### 北欧三国\n\n像交通部门统一定制的——色彩鲜艳（橙/红）、材质统一、必带反光条/反光片。\n\n- 芬兰:  反光片通常更细，而且位置非常靠近顶部。\n- 瑞典: 中部稍上方有白色反光片。有些杆子有第二个反光片。\n- 挪威: 一个或两个略细的反光片，其中一个常常非常接近中部。\n\n### 北美\n\n- 北美的杆子： 原色木棍/树枝、细长单色塑料杆、没有反光条。",
      "badgeZh": "道路护柱",
      "badgeEn": "Road Bollards"
    },
    {
      "id": "markings",
      "titleZh": "道路标线与行车方向",
      "titleEn": "Road Markings & Driving Side",
      "icon": "shuffle",
      "badge": "基础核心",
      "badgeColor": "teal",
      "sections": [
        {
          "titleZh": "道路标线色彩与虚实系统",
          "titleEn": "Road Marking Colors & Dash Systems",
          "textZh": "- **标线颜色三大阵营：**\n    - **全白线（白中线 + 白边线）：**\n        - **欧洲：** 绝大多数国家（挪威黄中线、芬兰淘汰中黄虚线、爱尔兰黄虚边线、希腊单黄中线除外）。\n        - **智利：** **南美唯一边线与中线均可为纯白色的国家**！\n        - **大洋洲：** 澳大利亚全境统一使用全白线（雪地路段极少数为黄色）。\n        - **亚洲与非洲：** 印度及其周边、老挝、马来西亚；西非与北非国家。\n    - **黄中白边（黄色中线 + 白色边缘线）：**\n        - **美洲：** 美国、加拿大、墨西哥及拉美绝大部分国家（除智利外）。\n        - **亚洲：** 东亚、东南亚国家（除老挝）。\n        - **欧洲：** 挪威（中线单双虚实均有黄线）、芬兰（中线黄色虚线，逐步淘汰改白）、希腊（中线可为单黄线或双白线）。\n        - **非洲：** 肯尼亚、乌干达、加纳。\n    - **白中黄边（白色中线 + 黄色边缘线）：**\n        - **欧洲：** 爱尔兰（路肩黄色虚线，欧洲异类）；英国（路边黄线代表禁停）；冰岛（引道或交叉口附近为黄色边线）。\n        - **非洲：** 南非及其周边邻国（博茨瓦纳、莱索托、斯威士兰）。\n        - **西亚与东亚：** 阿曼、以色列、约旦、阿联酋；尼泊尔、新加坡、中国香港；墨西哥瓜纳华托 (Guanajuato)。\n    - **全黄线：** 智利极少数特殊路段。\n- **虚线形态特征：**\n    - **黄色虚边线：** 爱尔兰（瑞士某些城镇内也有）。\n    - **黄色虚中线：** 泰国、越南（实线与虚线均常见）。\n    - **白色虚边线：**\n        - 挪威：长虚边线。\n        - 瑞典、爱沙尼亚：短虚边线。\n        - 法国、卢森堡：很长的白色虚线外路肩线（科西嘉岛虚线相对更短）。\n        - 丹麦：由密集正方形组成的白色短虚边线。\n        - 罗马尼亚：有时有三条虚线，中线较粗。\n    - **白色虚中线：**\n        - 法国：没对齐的长方块白色中线。\n        - 英格兰：中间虚线间隔极长，路面嵌有猫眼反光道钉 (Cat's Eyes)。\n        - 摩纳哥：城市内常见极粗的白色虚中线。\n- **多条线与复杂组合：**\n    - **双白实线中线：** 波兰、丹麦（有时中间有微小断开）、希腊（常因暴晒较淡）、智利、阿根廷、马来西亚。\n    - **双黄实线中线：** 北美全境、巴西、墨西哥、哥伦比亚、中国台湾。注意：哥伦比亚常有白色边缘线，而巴西通常无白色外侧边缘线。\n    - **双白实线夹黄线/白虚线：** 南非及其周边国家。\n    - **双黄夹一白中线：** 乌拉圭；菲律宾（中间夹白虚线）。\n    - **黄实线 + 白虚线复合中线：** 阿根廷公路极度常见。\n    - **城市中线与边线对比：** 美国以双黄中线为主，加拿大以单黄中线为主；澳大利亚城市边线为白色，新西兰偶尔出现黄色边线。",
          "textEn": "- **Road Marking Color Triad:**\n    - **All-White Markings (White Center + White Edges):**\n        - **Europe:** Vast majority of countries (exceptions: Norway, Finland legacy yellow dash, Ireland yellow dash edge, Greece).\n        - **Chile:** **Sole South American country using all-white road markings**!\n        - **Oceania:** Australia uses all-white nationwide (snow areas rare yellow).\n        - **Asia & Africa:** India and neighbors, Laos, Malaysia; West & North Africa.\n    - **Yellow Center + White Edges:**\n        - **Americas:** USA, Canada, Mexico, and virtually all Latin America (except Chile).\n        - **Asia:** East & Southeast Asia (except Laos).\n        - **Europe:** Norway (yellow centerlines solid/dashed), Finland (legacy dashed yellow), Greece (single yellow or double white).\n        - **Africa:** Kenya, Uganda, Ghana.\n    - **White Center + Yellow Edges:**\n        - **Europe:** Ireland (dashed yellow outer edge line); UK (yellow curbs indicate no parking); Iceland (yellow edge near bridges/intersections).\n        - **Africa:** South Africa and neighbors (Botswana, Lesotho, Eswatini).\n        - **Middle East & Asia:** Oman, Israel, Jordan, UAE; Nepal, Singapore, Hong Kong; Guanajuato (Mexico).\n    - **All-Yellow Markings:** Chile (rare mountainous sections).\n- **Dashed Line Patterns:**\n    - **Yellow Dashed Edges:** Ireland (occasional Swiss towns).\n    - **Yellow Dashed Centers:** Thailand, Vietnam.\n    - **White Dashed Edges:**\n        - Norway: Long dashed edge line.\n        - Sweden & Estonia: Short dashed edge lines.\n        - France & Luxembourg: Very long white dashed shoulder edge lines (shorter in Corsica).\n        - Denmark: Dense square dashed white edge markings.\n        - Romania: Occasionally three dashed lines with thicker center.\n    - **White Dashed Centerlines:**\n        - France: Staggered non-aligned rectangular white dashes.\n        - England: Long dash spacing embedded with reflective Cat's Eyes studs.\n        - Monaco: Extra-thick white dashed city centerlines.\n- **Multi-line Combinations:**\n    - **Double White Solid Center:** Poland, Denmark (slight periodic gap), Greece (faded), Chile, Argentina, Malaysia.\n    - **Double Yellow Center:** North America, Brazil, Mexico, Colombia, Taiwan. Pro tip: Colombia frequently has white edge lines, whereas Brazil typically lacks outer white edge lines.\n    - **Double White Flanking Yellow/Dashed:** South Africa and neighbors.\n    - **Double Yellow Flanking White Dash:** Uruguay; Philippines.\n    - **Solid Yellow + Dashed White:** Argentina classic signature.\n    - **Urban Comparison:** US predominantly uses double yellow centers, Canada uses single yellow; Australia uses white edge lines, New Zealand occasionally uses yellow."
        },
        {
          "titleZh": "左右行驶、减速带与路面材质",
          "titleEn": "Driving Side, Speed Bumps & Pavements",
          "textZh": "- **全球靠左行驶 (LHD) 国家速查：**\n    - **欧洲（4国）：** 英国、爱尔兰、马耳他、塞浦路斯。\n    - **亚太地区：** 日本、中国香港、中国澳门、印度、孟加拉国、斯里兰卡、泰国、马来西亚、新加坡、印度尼西亚。\n    - **大洋洲：** 澳大利亚、新西兰。\n    - **南部与东部非洲：** 南非、博茨瓦纳、纳米比亚、斯威士兰、莱索托、肯尼亚、乌干达。\n    - **美洲特例：** 美属维尔京群岛（美国领地唯一左行）、圭亚那、苏里南。\n- **减速带设计：**\n    - **荷兰：** 路面有长短交替的白色短横线，路边常伴有特殊拼花砖石。\n    - **马来西亚：** 路面上刷有平行粗黄线作为减速预警。\n    - **日本：** 黄黑相间倾斜斜条纹减速带。\n    - **英国与爱尔兰：** 3D 视觉立体白色减速块。\n    - **美国：** 路面边缘有机械开槽横向凹陷减速带 (Rumble Strips，加拿大少见)。\n    - **澳大利亚与新西兰：** 路肩白线上有物理凸起小方块。\n- **水泥混凝土路面分布：**\n    - **日本：** 农村和山区道路大量采用混凝土路面，路侧必带深排水沟槽（両側に側溝），核心判定特征。\n    - **菲律宾：** 混凝土路面极度普遍（涵盖主干道），路面带有明显的膨胀伸缩缝。\n    - **多米尼加：** 城镇内部大量铺设混凝土路，加勒比地区强特征。\n    - **哥伦比亚 / 危地马拉 / 洪都拉斯 / 不丹：** 山区险峻陡坡路段强制采用混凝土路面以增强抓地力。\n    - **德国：** 极高品质的农用单车道硬化小路，无路肩石，边缘直接齐平嵌入修剪整齐的草坪中。\n    - **法国：** 双向乡村路沥青偏宽，边缘多修补痕迹，或为白垩碎石土路。",
          "textEn": "- **Left-Hand Drive (LHD) Nations:**\n    - **Europe (4):** United Kingdom, Ireland, Malta, Cyprus.\n    - **Asia-Pacific:** Japan, Hong Kong, Macau, India, Bangladesh, Sri Lanka, Thailand, Malaysia, Singapore, Indonesia.\n    - **Oceania:** Australia, New Zealand.\n    - **Southern & Eastern Africa:** South Africa, Botswana, Namibia, Eswatini, Lesotho, Kenya, Uganda.\n    - **Americas:** U.S. Virgin Islands (sole US left-drive territory), Guyana, Suriname.\n- **Speed Bumps & Rumble Strips:**\n    - **Netherlands:** Alternating long-and-short white transverse bar markings; patterned brick road borders.\n    - **Malaysia:** Thick yellow parallel transverse rumble stripes across lanes.\n    - **Japan:** Black-and-yellow diagonal zebra speed bumps.\n    - **UK & Ireland:** Painted 3D trompe-l'œil chevron speed bumps.\n    - **United States:** Milled transverse shoulder rumble strip indentations (rare in Canada).\n    - **Australia & New Zealand:** Raised reflective edge pavement bumps.\n- **Concrete Road Slab Distribution:**\n    - **Japan:** Rural and mountain roads paved with concrete slabs accompanied by deep roadside concrete drainage ditches (両側に側溝).\n    - **Philippines:** Concrete pavement is dominant even on primary arteries, featuring visible tar expansion joints.\n    - **Dominican Republic:** Urban town streets heavily paved with concrete (Caribbean tell).\n    - **Colombia / Guatemala / Honduras / Bhutan:** Steep mountain inclines paved with concrete for traction.\n    - **Germany:** High-quality single-lane agricultural asphalt roads with zero shoulders embedded directly into immaculate turf.\n    - **France:** Wide rural asphalt with patched worn edges or chalky unpaved gravel."
        },
        {
          "titleZh": "护栏形态、反光板色彩与路沿石彩绘",
          "titleEn": "Guardrail Profiles, Reflectors & Painted Curb Markings",
          "textZh": "- **欧洲波形钢护栏分类 (Guardrail Profiles)：** [参考图解](https://www.plonkit.net/images/andorra/europeguardrail.png)\n    - **B型（平直双波）：** 克罗地亚、丹麦、波兰、塞尔维亚、波黑（记忆口诀 **CDPS**：Croatia, Denmark, Poland, Serbia）。\n    - **细B型（平直双波较窄细）：** 捷克、斯洛伐克。\n    - **AB两种均常见：** 德国、土耳其、爱尔兰。\n    - **A型（圆弧深双波）：** 其余绝大多数欧洲国家。\n- **护栏形态与支架特征：**\n    - **意大利：** 道路护栏的尾端端口通常会明显变粗扩张。\n    - **厄瓜多尔：** 山区与干线经常见到独特的上下双层双轨护栏。\n    - **罗马尼亚：** 护栏侧面有时涂刷醒目的黄黑相间斜条纹。\n    - **黑色金属支架立柱：** 意大利、罗马尼亚、阿尔巴尼亚、黑山。\n- **护栏反光片颜色分布 (Guardrail Reflectors)：**\n    - **黄色反光片：** 西班牙、安道尔、比利时、以色列。\n    - **橙色反光片：** 立陶宛。\n    - **白色反光片：** 法国、卢森堡、瑞典、冰岛、意大利（部分）、拉脱维亚（部分）。\n    - **红色反光片：** 东欧及中欧大部分国家。\n    - **无反光片：** 英国、爱尔兰、荷兰、德国、丹麦、奥地利、挪威、芬兰、爱沙尼亚、葡萄牙。\n- **路沿石刷漆涂装 (Painted Curbs)：**\n    - **黑白相间路沿：** 马来西亚、卡塔尔、卢旺达、博茨瓦纳（各色相间）。\n    - **黄黑 / 红白相间彩绘：** **马来西亚、印度尼西亚、泰国**极普遍在转弯、路口或环岛处涂刷鲜艳反光漆。\n    - **红白相间路沿：** 突尼斯、摩纳哥。",
          "textEn": "- **European W-Beam Guardrail Profiles**: [Guardrail Infographic](https://www.plonkit.net/images/andorra/europeguardrail.png)\n    - **Profile B (Flat Double-Wave)**: Croatia, Denmark, Poland, Serbia, Bosnia (Mnemonic: **CDPS**).\n    - **Narrow Profile B (Slender Flat Wave)**: Czechia, Slovakia.\n    - **Both Profiles A & B**: Germany, Turkey, Ireland.\n    - **Profile A (Deep Rounded Wave)**: Almost all other European nations.\n- **Guardrail Terminal & Post Metas**:\n    - **Italy**: Guardrail terminals visibly flare out and become distinctly thicker.\n    - **Ecuador**: Mountain corridors frequently deploy unique stacked double-decker two-tier guardrails.\n    - **Romania**: Guardrails are occasionally painted with yellow-and-black diagonal hazard stripes.\n    - **Black Steel Bracket Posts**: Italy, Romania, Albania, Montenegro.\n- **Guardrail Reflector Colors**:\n    - **Yellow**: Spain, Andorra, Belgium, Israel.\n    - **Orange**: Lithuania.\n    - **White**: France, Luxembourg, Sweden, Iceland, Italy (part), Latvia (part).\n    - **Red**: Most Eastern and Central European countries.\n    - **No Reflectors**: United Kingdom, Ireland, Netherlands, Germany, Denmark, Austria, Norway, Finland, Estonia, Portugal.\n- **Painted Roadside Curbs**:\n    - **Black-and-White Alternating**: Malaysia, Qatar, Rwanda, Botswana.\n    - **Yellow-Black / Red-White Curbs**: **Malaysia, Indonesia, Thailand** widely paint curbs at curves, roundabouts, and intersections.\n    - **Red-and-White Curbs**: Tunisia, Monaco."
        }
      ],
      "rawContent": "# 道路标线\n\n# 颜色\n\n- 全白线\n    - 欧洲：绝大多数国家（挪威、芬兰、爱尔兰、希腊是少数例外）\n    - 澳大利亚：全白线，极少数雪地路段为黄色\n    - 美洲：智利是唯一边线和中线均可为白色的美洲国家\n    - 亚洲：印度及其附近国家、老挝、马来西亚\n    - 非洲：西非、北非国家\n- 黄中白边\n    - 美洲：美、加、墨及拉美大部分国家（除智利外）。\n    - 亚洲：东亚、东南亚（除了老挝）。\n    - 欧洲：挪威（中线单双虚实都有），芬兰（中线黄虚线，淘汰中），希腊（中线可为双白或单黄）\n    - 非洲：肯尼亚，乌干达，加纳\n- 白中黄边\n    - 欧洲：爱尔兰(黄色虚线)；英国黄边线代表禁停；冰岛部分公路、桥梁引道或交叉口附近的路边缘线会采用黄色\n    - 非洲：南非及其周边\n    - 西亚：阿曼、以色列、约旦、阿联酋\n    - 东亚：(东)尼泊尔、新加坡、香港\n    - 美洲：墨西哥Guanajuato\n- 全黄线\n    - 智利（少数）\n\n# 虚线\n\n- 黄色 边线\n    - 虚线： 爱尔兰（瑞士在某些城镇里面也有黄色虚边线）\n- 黄色 中线\n    - 虚线：泰国（实线虚线都有）,越南（实线虚线都有）\n- 白色 虚线 边线\n    - 挪威：长虚边线\n    - 瑞典，爱沙尼亚：短虚边线\n    - 法国，卢森堡：有时有很长的白色虚线边线（外路肩线），科西嘉岛的虚线更短些。\n    - 丹麦：密集正方形组成白虚边线\n    - 罗马尼亚：有时有三条虚线，通常中线较粗\n- 白色 虚线 中线\n    - 法国：没对齐方块白色中线\n    - 英格兰： 中间虚线间隔很长，有猫眼相隔\n    - 摩纳哥：城市里常有很粗的白色虚线中线\n\n# 多条线\n\n- 双白线中线：波兰、丹麦(有时中间会有小断开)、希腊 （经常很淡），智利，阿根廷，马来西亚\n- 双黄线中线：北美，部分中南美地区（巴西，墨西哥，哥伦比亚），台湾\n    - 哥伦比亚常有白色边线，巴西通常没有白色边线\n- 双黄线边线：英国，爱尔兰（边上不能停车），\n- 双白实线夹黄线或白虚线：南非及其周边\n- 双黄夹一白中线：乌拉圭; 菲律宾（中间白虚线）\n- 黄实线+白虚线中线：阿根廷常见\n- 黄白混合中线：马来西亚 ？？？\n\n# 形式和比较\n\n- 保加利亚：通常路线比较细（相对罗马尼亚）\n- 瑞典边线有时候由斜向短线组合成；丹麦边线有时由横向短线组合成\n- 巴西：黄中线相对较粗，间距较近（双黄线时）\n- 城市黄中线：美国以双黄线为主，加拿大以单黄线为主\n- 城市边线：澳大利亚为白色，新西兰有时候有黄色\n\n# 减速带\n\n- 路中横向减速\n    - [**荷兰]()：**长短交替的白色短横线。\n    - 马来西亚：有些道路上有平行粗黄线作为减速带警示\n    - 美国，加拿大：简单白色横条或凸起\n    - 日本：黄黑相间减速带\n    - 英国，爱尔兰：3D 视觉减速带\n- 路边减速\n    - 荷兰：特殊砖石花纹\n    - 美国：路边有横向凹下去的减速带；加拿大比较少见\n    - 澳大利亚，新西兰：路边白线上有横向凸起\n\n# 道路左右行\n\n### 左行主要国家\n\n- 欧洲：英国，爱尔兰，马尔他，塞浦路斯\n- 亚洲：日本，印度及其周围国家，新马泰，印尼等\n- 大洋洲：几乎所有\n- 非洲：南部，东南部大部分国家（除了马达加斯加，卢旺达）\n- 美洲：圭亚那，苏里南，某些加勒比岛国\n\n# 道路特征\n\n## 道路特征\n\n- 北欧乡村林区：多为极窄但铺装质量较高、无外侧标线的沥青路面。\n- 北美偏僻林区：常为碎石路或具有更规范车道宽度的铺装路。\n- **巴尔干半岛/**东欧**山区**：常出现老旧磨损、带有独特补丁痕迹的沥青路面及白色中心虚线。\n- 浅灰白/淡黄白色的石灰岩碎石路（或严重风化剥蚀的石灰岩沥青路）主要集中分布在地中海气候区、巴尔干半岛，南欧石灰岩山地，以及中欧/高加索的喀斯特地质带\n- 德国：极高质量的单车道/农用铺装小道，道路两侧没有路肩石，直接平整嵌入修剪整齐的草地中。\n- 法国：更多是较宽的双向乡村沥青路（常伴有边缘磨损与修补），或者直接是未铺装的白垩/碎石土路\n- 澳大利亚乡村：常见单条白色虚线中心线，外侧常无边缘线或为白色碎石路肩。\n- 巴西：路面沥青常带有较多补丁痕迹，且道路边缘/路肩处伴随非常明显的红土特征。\n- 智利：主干道以高品质沥青和清晰的白色标线为主。\n\n## 水泥路面\n\n**东亚**\n\n- **日本**：农村和山区道路大量使用混凝土路面,常见排水沟槽（両側に側溝）,是很强的日本判定线索\n- **韩国**：农村地区也常见,但整体沥青比例比日本高\n\n**东南亚**\n\n- **菲律宾**：混凝土路面非常普遍,包括不少主干道,路面常有明显的伸缩缝（膨胀缝）\n- **印度尼西亚**：部分岛屿（如爪哇）农村道路常见\n- **泰国**：乡村地区可见,但沥青仍占多数\n\n**拉丁美洲**\n\n- **多米尼加共和国**：城镇内部道路常用混凝土,是加勒比地区的强线索\n- **哥伦比亚**：山区/坡道路段偏好混凝土（抓地力更好）\n- **危地马拉、洪都拉斯**等中美洲国家：陡坡路段常用混凝土而非沥青\n\n**非洲**\n\n- **肯尼亚、乌干达等东非国家**：部分城镇道路及陡坡路段\n- **南非**：城市周边道路偶见,但整体沥青为主\n\n**其他**\n\n- **土耳其**：部分乡村/山区道路\n- **不丹**：山路常用混凝土（配合陡坡）",
      "badgeZh": "基础核心",
      "badgeEn": "Core Rules"
    },
    {
      "id": "signs",
      "titleZh": "人行道与路牌标志",
      "titleEn": "Signs & Road Infrastructure",
      "icon": "alert-triangle",
      "badge": "视觉细则",
      "badgeColor": "yellow",
      "sections": [
        {
          "titleZh": "欧洲人行横道告示牌底部线条与形态",
          "titleEn": "Pedestrian Crossing Signs: European & Diamond",
          "textZh": "- **欧洲蓝底方牌小人脚下的斑马线条数与造型：**\n    - **无此类告示牌：** 英国、爱尔兰（爱尔兰采用黄色菱形，英国采用地面斑马线标牌）。\n    - **1 条横实线：** **波兰**。\n    - **2 根横虚线：** 比利时（小人为方脑袋）、奥地利、希腊、黑山。\n    - **3 条竖线：** 俄罗斯、乌克兰、爱沙尼亚（小人身材纤瘦）、立陶宛。\n    - **4 条竖线：**\n        - **瑞典：** 小人有明显的脖子。\n        - **挪威：** 小人没有明显的脖子。\n        - **冰岛：** 蓝底带黄色三角形内衬。\n        - **保加利亚：** 小人头上戴着帽子。\n    - **5 条竖线：**\n        - **丹麦：** 竖线向上触碰到三角边框。\n        - **斯洛伐克：** 竖线集中在中间，两条几乎被双脚遮挡。\n        - **德国 / 克罗地亚 / 匈牙利 / 葡萄牙：** 小人腰间带有腰带/皮带。\n    - **7 条竖线：** 瑞士。\n    - **8 条竖线：** 西班牙。\n- **黄色菱形告示牌阵营 (Yellow Diamond Pedestrian Signs)：**\n    - **北美洲（美、加）：** 典型黄色菱形，美国下方常附带“PED XING”说明牌。\n    - **拉美地区：** 墨西哥、危地马拉、巴西、哥伦比亚、阿根廷、智利、秘鲁普遍采用黄色菱形。\n    - **大洋洲：** 澳大利亚、新西兰标志性黄色菱形。\n    - **亚洲：** 日本及东南亚（泰国、马来西亚）普遍使用黄色菱形行人警告牌。\n    - **欧洲特例 - 爱尔兰：** 欧洲极少数不使用蓝底方牌的国家，而是使用黄色菱形（“被困在黄色菱形里的行人”）。",
          "textEn": "- **European Blue Square Pedestrian Sign Markings:**\n    - **No such blue sign:** United Kingdom, Ireland.\n    - **1 solid horizontal line:** **Poland**.\n    - **2 dashed horizontal lines:** Belgium (square-headed figure), Austria, Greece, Montenegro.\n    - **3 vertical stripes:** Russia, Ukraine, Estonia (slender figure), Lithuania.\n    - **4 vertical stripes:**\n        - **Sweden:** Figure has a distinct neck.\n        - **Norway:** Figure has no visible neck.\n        - **Iceland:** Yellow inner triangle frame.\n        - **Bulgaria:** Figure wears a hat.\n    - **5 vertical stripes:**\n        - **Denmark:** Stripes touch the outer triangle rim.\n        - **Slovakia:** Stripes clustered tightly beneath feet.\n        - **Germany / Croatia / Hungary / Portugal:** Figure wears a visible waist belt.\n    - **7 vertical stripes:** Switzerland.\n    - **8 vertical stripes:** Spain.\n- **Yellow Diamond Pedestrian Sign Realm:**\n    - **North America (US, Canada):** Standard yellow diamond, often with 'PED XING' sub-plaque.\n    - **Latin America:** Mexico, Guatemala, Brazil, Colombia, Argentina, Chile, Peru.\n    - **Oceania:** Australia, New Zealand yellow diamond with walking silhouette.\n    - **Asia:** Japan, Thailand, Malaysia.\n    - **European Exception - Ireland:** Sole EU member employing yellow diamond pedestrian warning signs."
        },
        {
          "titleZh": "全球路牌设计、字体与背面特征",
          "titleEn": "Road Signs Design, Backs & Typography",
          "textZh": "- **黄色背景路牌：**\n    - **卢森堡：** 全大写文字（ALL CAPS）。\n    - **前南斯拉夫国家：** 塞尔维亚、克罗地亚，醒目的黄色背景路牌。\n- **深色背面路牌：**\n    - **欧洲：** 德国、丹麦、芬兰、意大利（部分）、西班牙（部分）、葡萄牙（部分）、瑞士（部分）。\n    - **南美洲：** 巴西、巴拉圭、智利、哥伦比亚、厄瓜多尔（青色背面）。\n    - **亚洲：** 印度尼西亚、泰国、马来西亚。\n    - **墨西哥：** 黄色警告牌背面多为深黑色。\n- **路牌支柱细节：**\n    - **俄罗斯：** 路牌底部常有一圈黑色涂漆。\n    - **秘鲁：** 路牌支柱上常刷黑白斜向斑马纹。\n    - **哥伦比亚：** 路牌背面带有独特的钢制十字形支撑架 (Colombian Cross)。\n- **精细设计与箭头风格：**\n    - **丹麦：** 路牌带有精致外包金属框，字体为规整的 *Roboto Mono*。\n    - **德国：** 标志性的白色长方形配细黑边框设计。\n    - **土耳其：** 字间距极大；安卡拉车牌或标牌上缘中间有向上的小弧线。\n    - **塞内加尔：** 路牌常带粉色外边框；偶尔出现红顶白色墓碑状石质路牌。\n    - **新加坡：** 采用 Rotis 字体，字间距宽大。\n    - **北欧箭头风格对比：**\n        - **挪威：** 涂黑背景、留出白色形成箭头。\n        - **瑞典：** 用简单的黑线勾勒箭头轮廓。\n        - **芬兰：** 直接涂黑箭头本身。",
          "textEn": "- **Yellow Background Road Signs:**\n    - **Luxembourg:** Text printed in ALL CAPS.\n    - **Former Yugoslavia:** Serbia, Croatia use prominent bright yellow direction signs.\n    - **Dark-Backed Signs:**\n    - **Europe:** Germany, Denmark, Finland, Italy (parts), Spain, Portugal, Switzerland.\n    - **South America:** Brazil, Paraguay, Chile, Colombia, Ecuador (cyan backing).\n    - **Asia:** Indonesia, Thailand, Malaysia.\n    - **Mexico:** Yellow warning signs feature dark painted backs.\n- **Signpost Stanchion Details:**\n    - **Russia:** Signposts feature a black-painted collar at the bottom base.\n    - **Peru:** Signposts painted with alternating black-and-white diagonal stripes.\n    - **Colombia:** Backs of road signs feature steel cross-braces (Colombian Cross).\n- **Typography & Arrow Aesthetics:**\n    - **Denmark:** Signs framed in metal borders with *Roboto Mono* font.\n    - **Germany:** Thin black outer border on crisp white signs.\n    - **Turkey:** Wide kerning / letter-spacing; Ankara signs have upward arched top edge.\n    - **Senegal:** Signs framed with pink borders; white stone milestone markers with red rounded tops.\n    - **Singapore:** Wide-spaced Rotis font.\n    - **Nordic Arrowhead Styles:**\n        - **Norway:** Negative white space carved out of solid black background block.\n        - **Sweden:** Simple black outline stroke drawing the arrow.\n        - **Finland:** Solid black painted arrow glyph."
        },
        {
          "titleZh": "让路牌、警告牌与护栏/里程碑",
          "titleEn": "Yield, Warning Signs, Guardrails & Milestones",
          "textZh": "- **让路标志 (Yield / Give Way)：**\n    - `GIVE WAY`：英联邦国家（英国、澳大利亚黑字、新西兰红字、南非）。\n    - `YIELD`：美国、加拿大、爱尔兰。\n    - `CEDA EL PASO`：拉美西语国家、西班牙。\n    - `CEDA`：波多黎各。\n    - **博茨瓦纳：** 倒红边三角内部为深蓝色填充。\n- **警告标牌外框色彩：**\n    - **黄心细红边：** 波兰（仅警示牌黄心，限速与禁止牌均为白底）、芬兰（带明显黄色细边）。\n    - **白心红边无黄边：** 瑞典（金属外框）、冰岛（常带4颗固定螺钉）、希腊。\n    - **越南：** 无边框，中间常见黑色大 T 字路口标。\n    - **白心厚红边：** 加拿大、巴西、罗马尼亚。\n    - **新加坡：** 警告三角外带有白色方框。\n- **欧洲护栏类型 (Guardrails)：**\n    - **B型（平直双波）：** 克罗地亚、丹麦、波兰、塞尔维亚、波黑（CDPS：Croatia, Denmark, Poland, Serbia）。\n    - **细B型（平直较窄）：** 捷克、斯洛伐克。\n    - **AB混合：** 德国、土耳其、爱尔兰。\n    - **A型（圆弧双波）：** 其余绝大多数欧洲国家。\n    - **特殊护栏：** 意大利护栏尾端明显变粗；厄瓜多尔常见上下双层双轨护栏；罗马尼亚护栏有时涂刷黄黑条纹。\n- **里程碑 (Milestones)：**\n    - **罗马尼亚：** 独特的白色墓碑形里程碑，带有极粗的红色边缘。\n    - **匈牙利：** 绿底白框里程碑。\n    - **意大利：** 里程牌上广泛使用罗马数字。\n    - **墨西哥：** 里程数字呈垂直上下排列。\n    - **斯洛文尼亚：** 白色方板，左上角有黄色小方块。\n    - **菲律宾：** 黄色方形水泥柱，上下带凹槽白牌（如 `K 100` 表示距基准点100km，`ST 35` 表示距下个城镇35km）。",
          "textEn": "- **Yield Signs Wording:**\n    - `GIVE WAY`: Commonwealth (UK, Australia black font, New Zealand red font, South Africa).\n    - `YIELD`: USA, Canada, Ireland.\n    - `CEDA EL PASO`: Latin America, Spain.\n    - `CEDA`: Puerto Rico.\n    - **Botswana:** Inverted red triangle filled with dark navy blue.\n- **Warning Sign Color Borders:**\n    - **Yellow with Thin Red Rim:** Poland (warning signs yellow, speed limits white), Finland (thin yellow rim).\n    - **White with Red Rim:** Sweden (metal frame), Iceland (4 visible mounting bolts), Greece.\n    - **Vietnam:** Frameless with bold black T-intersection mark.\n    - **White with Thick Red Border:** Canada, Brazil, Romania.\n    - **Singapore:** Warning triangle mounted inside a white rectangular backplate.\n- **European Guardrails:**\n    - **Type B (Flat profile):** Croatia, Denmark, Poland, Serbia, Bosnia (CDPS: Croatia, Denmark, Poland, Serbia).\n    - **Thin Type B:** Czechia, Slovakia.\n    - **Type A & B Mixed:** Germany, Turkey, Ireland.\n    - **Type A (Curved W-beam):** Rest of Europe.\n    - **Special Guardrails:** Italy guardrail terminals flare outward and thicken; Ecuador frequently uses double-tier stacked guardrails; Romania guardrails painted in yellow-and-black stripes.\n- **Milestone Markers:**\n    - **Romania:** Tombstone-shaped white stone pillars with thick red border.\n    - **Hungary:** Green background with white border.\n    - **Italy:** Frequently displays Roman numerals on small roadside markers.\n    - **Mexico:** Kilometer numerals stacked vertically.\n    - **Slovenia:** White plaque with yellow square in upper-left corner.\n    - **Philippines:** Yellow concrete post with recessed white markers ('K 100' distance to capital datum, 'ST 35' distance to next town)."
        }
      ],
      "rawContent": "# 人行道告示牌\n\n# 欧洲底部标线\n\n- 常规： 欧洲大部分国家，蓝底白背景告示牌中的黑色小人下方伴有斑马线。\n- 没有此类告示牌：英国、爱尔兰\n- 一条横实线： 波兰\n- 两根横虚线： 比利时(方脑袋)、奥地利、希腊、黑山\n- 三条竖线：俄罗斯、乌克兰、爱沙尼亚（人瘦一些）、立陶宛\n- 四条竖线：\n    - 瑞典：有脖子\n    - 挪威：没有明显的脖子\n    - 冰岛：蓝底黄三角\n    - 保加利亚：带帽子\n- 五条竖线\n    - 其他大部分欧洲国家\n    - 竖线碰到三角框：丹麦\n    - 竖线很靠中间（有两条几乎被脚遮住）：斯洛伐克\n    - 有皮带：德国、克罗地亚、匈牙利、葡萄牙\n- 七条竖线：瑞士\n- 八条竖线：西班牙\n\n# 黄色菱形阵营\n\n在这些地区，人行道告示牌通常采用**黄色背景、菱形形状**，黑色图案被包围在黄色框内 。\n\n- **北美洲（美国、加拿大）**： 典型的黄色菱形告示牌 。美国有时会在下方配有写着“PED XING”的辅助说明牌。\n- **拉美地区（墨西哥、危地马拉、巴西、哥伦比亚、阿根廷、智利、秘鲁）**： 同样广泛使用黄色菱形警告标志 。\n- **大洋洲（澳大利亚、新西兰）**： 标志性的黄色菱形，图案通常是一个正在行走的人影 。\n- **亚洲（日本、大部分东南亚国家如泰国、马来西亚）**： 日本和东南亚地区也普遍采用黄色菱形作为行人警告标志 。\n- **欧洲特例 - 爱尔兰**： 它是欧洲极少数不使用蓝底告示牌的国家，而是使用**黄色菱形**，资料中形象地描述为“被困在黄色菱形里的行人” 。\n\n# 减速牌和警告牌\n\n- Give Way: 英联邦国家\n- Yield：美，加，爱尔兰\n- Ceda El Paso: 拉美，西班牙\n- CEDA: 波多黎各\n- 黄心红边\n    - 波兰：只有警示牌是黄底细红边，限速牌禁止牌都是白底\n    - 芬兰：明显黄色细边。\n    - 瑞典：没有黄边，但有金属边框\n    - 冰岛：没有黄边，金属边框不明显；牌上常有四个钉子\n    - 希腊：没有黄边，金属边框不明显\n    - 越南：没有边框，中间可能有黑色大T\n- 白心厚红边：加拿大、巴西、罗马尼亚\n- 外有白色方框：新加坡\n\n# 路牌\n\n- **黄色背景**\n    - [**卢森堡**]()：全大写文字。\n    - [**前南斯拉夫国家**]()：如塞尔维亚、克罗地亚，通常有醒目的黄色背景路牌。\n- 深色背面\n    - 欧洲：德国，丹麦，芬兰，意大利（部分），西班牙（部分），葡萄牙（部分），瑞士（部分）\n    - 南美：巴西，巴拉圭，智利，哥伦比亚，厄瓜多尔（青色）\n    - 亚洲：印尼，泰国，马来西亚\n    - 其它：墨西哥（黄色警告牌）\n- 支柱\n    - [**俄罗斯**]()：路牌底部常有一圈**黑色涂漆**。\n    - [**秘鲁**]()：路牌支柱上常有黑白斜向斑马纹。\n- **精细设计**\n    - [**丹麦**]()：路牌带有**金属外框**，字体为规整的 *Roboto Mono*。\n    - [**德国**]()：标志性的白色长方形配细黑边设计。\n    - 土耳其：安卡拉车牌上缘中间有向上的弧线\n    - 塞内加尔：粉色边框\n- **箭头绘制风格**\n    - [**挪威**]()：通过涂黑背景留白形成箭头。\n    - [**瑞典**]()：用简单的黑线勾勒箭头。\n    - [**芬兰**]()：直接涂黑箭头本身。\n- 石头路牌\n    - 塞内加尔：偶尔有红顶白色墓碑状\n- 字体\n    - 土耳其：字间距很大\n    - 新加坡：Rotis字体，间距大\n\n# 里程牌\n\n- **里程牌形状：**\n    - [**罗马尼亚**]()：独特的“墓碑形”里程牌，红色边缘非常粗。\n    - [**匈牙利**]()：绿色背景白框里程牌。\n    - [**意大利**]()：里程牌上常使用**罗马数字**。\n    - 墨西哥：里程牌km数字上下垂直排列\n    - 斯洛文尼亚：白色板，左上角有黄色小块\n    - 菲律宾：黄色方形水泥柱，上有两块凹进去的白牌，上面一块格式为K 100 （离本岛基准点100km），下面一块格式为ST 35 （离下一个城镇ST还有35km）\n\n# 护栏\n\n- **类型**\n    - [欧洲护栏总结图](https://www.plonkit.net/images/andorra/europeguardrail.png)\n    - A型（圆弧），B型（平），细B型（平，两横杠较细）\n    - B型：克罗地亚，塞尔维亚，波兰，丹麦，波黑 （CDPS: Croatia, Denmark, Poland, Serbia）\n    - 细B型：捷克，斯洛伐克\n    - AB都有：德国，土耳其，爱尔兰\n    - A型：其它欧洲国家\n- 形态\n    - [意大利]()：道路护栏的尾端通常会明显变粗。\n    - [厄瓜多尔]()：经常见到上下双层护栏。\n    - 罗马尼亚：有时有黄黑条纹\n- 反光板\n    - 黄色：西班牙，安道尔，比利时，以色列\n    - 橙色：立陶宛\n    - 白色：法国，卢森堡，瑞典，冰岛，意大利（部分），拉脱维亚（部分）\n    - 无反光板：英国，爱尔兰，荷兰，德国，丹麦，奥地利，挪威，芬兰，爱沙尼亚，葡萄牙（有时有红色）\n    - 红色：其它欧洲国家\n- 支架\n    - 黑色：意大利，罗马尼亚，阿尔巴尼亚，黑山",
      "badgeZh": "视觉细则",
      "badgeEn": "Sign Rules"
    },
    {
      "id": "chevrons",
      "titleZh": "V 形导向牌 (Chevron)",
      "titleEn": "Chevrons & Curve Signs",
      "icon": "chevron-right",
      "badge": "弯道神器",
      "badgeColor": "red",
      "sections": [
        {
          "titleZh": "欧洲弯道导向标配色全览",
          "titleEn": "European Chevrons Color Schemes",
          "textZh": "- **白红配色（白底红箭头 或 红底白箭头）：**\n    - 绝大部分东欧国家（波兰、捷克、斯洛伐克、罗马尼亚、保加利亚、爱沙尼亚、乌克兰、俄罗斯）。\n    - 荷兰、比利时、丹麦、德国、奥地利（部分地区）。\n    - **土耳其：** 也是白红配色，但箭头尖端那一侧**不到边框**（留有白隙）。\n- **黑白配色：**\n    - **黑底白箭头：** 英国、意大利、阿尔巴尼亚、希腊、塞浦路斯、西班牙（部分地区）。\n    - **白底黑箭头：** 塞尔维亚、黑山、北马其顿。\n- **蓝白配色：**\n    - **蓝底白箭头：** 法国、西班牙（部分地区）。\n- **黑黄配色：**\n    - **黑底黄箭头：** 挪威、芬兰、冰岛、爱尔兰、葡萄牙。\n- **独占国旗国色：**\n    - **蓝底黄箭头：** **瑞典独占**（象征瑞典国旗蓝黄双色）。\n    - **黄底红箭头：** **奥地利**部分阿尔卑斯山区公路独占。",
          "textEn": "- **White & Red (Red Arrow on White / White on Red):**\n    - Vast majority of Eastern Europe (Poland, Czechia, Slovakia, Romania, Bulgaria, Estonia, Ukraine, Russia).\n    - Netherlands, Belgium, Denmark, Germany, Austria (partial).\n    - **Turkey:** White and red, but the arrow points do NOT reach the outer border (floating arrow).\n- **Black & White:**\n    - **Black with white arrows:** United Kingdom, Italy, Albania, Greece, Cyprus, Spain (partial).\n    - **White with black arrows:** Serbia, Montenegro, North Macedonia.\n- **Blue & White:**\n    - **Blue with white arrows:** France, Spain (partial).\n- **Black & Yellow:**\n    - **Black with yellow arrows:** Norway, Finland, Iceland, Ireland, Portugal.\n- **Exclusive National Schemes:**\n    - **Blue with yellow arrows:** **Sweden exclusive** (matching Swedish national flag).\n    - **Yellow with red arrows:** **Austria** alpine highway sections."
        },
        {
          "titleZh": "美洲与其它大洲特殊导向标",
          "titleEn": "Americas & Global Chevrons & Quirks",
          "textZh": "- **美洲弯道导向标配色：**\n    - **红底白箭头：** **阿根廷**、加拿大魁北克省 (QC)。\n    - **黄底黑箭头：** **巴西、乌拉圭、厄瓜多尔**（分布极多）、美国、加拿大不列颠哥伦比亚 (BC)。\n    - **黑底黄箭头：** 加拿大安大略省 (ON)。\n- **特殊造型与方向性导向标：**\n    - **竖向箭头：**\n        - 土耳其：黑橙向上竖箭头。\n        - 日本北海道：路旁立柱悬挂白红向下竖箭头（暴雪指引路肩）。\n    - **细长条形导向板：** 土耳其、南非红白细长并排导向带。\n    - **特殊边框：** **罗马尼亚**使用白底红箭头配**明黄色粗外框**。\n    - **密集并列箭头：** **阿曼**公路转弯处常见黄色底板上密集排列大量黑色小箭头。",
          "textEn": "- **Americas Chevrons:**\n    - **Red with white arrow:** **Argentina**, Quebec (Canada).\n    - **Yellow with black arrow:** **Brazil, Uruguay, Ecuador** (ubiquitous), USA, British Columbia (Canada).\n    - **Black with yellow arrow:** Ontario (Canada).\n- **Unique Shapes & Directions:**\n    - **Vertical Arrows:**\n        - Turkey: Upward pointing black/orange vertical arrow signs.\n        - Hokkaido (Japan): Downward pointing red-and-white arrows suspended above road shoulders.\n    - **Slender Strip Boards:** Turkey, South Africa red-and-white thin strip chevrons.\n    - **Accent Borders:** **Romania** features red arrows on white framed with a **thick bright yellow border**.\n    - **Clustered Arrows:** **Oman** sharp highway curves feature dense rows of black arrows on yellow backplates."
        }
      ],
      "rawContent": "# V形导向牌\n\n# 欧洲\n\n## **白红（白底红箭头 或 红底白箭头）**\n\n- 大部分东欧国家\n- 荷兰，比利时，丹麦，德国，奥地利(部分)\n- [土耳其](): **也是红白，但箭头那侧不到边。\n- 红白：爱沙尼亚，乌克兰，俄罗斯\n\n## **黑白**\n\n- **黑底白箭头：**英国，意大利，阿尔巴尼亚，希腊，塞浦路斯，西班牙(部分)\n- **白底黑箭头：**塞尔维亚，黑山，北马其顿\n\n## **蓝白**\n\n- **蓝底白箭头：**法国，西班牙(部分)\n\n## **黑黄**\n\n- **黑底黄箭头：**挪威，芬兰，冰岛，爱尔兰，葡萄牙\n\n## **特殊**\n\n- **蓝底黄箭头：**瑞典\n- **黄底红箭头：**奥地利 (部分)\n\n![Screenshot 2026-04-16 at 7.08.05 AM.png](V%E5%BD%A2%E5%AF%BC%E5%90%91%E7%89%8C/Screenshot_2026-04-16_at_7.08.05_AM.png)\n\n# **美州**\n\n## **红底白箭头**：\n\n- [阿根廷]()，加拿大QB\n\n## **黄底黑箭头**：\n\n- [巴西]()、[乌拉圭]()、[厄瓜多尔]()（分布极多），美国，加拿大BC\n\n## **黑底黄箭头**：\n\n- 加拿大ON\n\n# 特殊造型\n\n- 竖向箭头\n    - 土耳其：黑橙向上箭头\n    - 日本北海道：白红向下箭头\n- 细长\n    - 红白细长：土耳其，南非\n- 边框\n    - 罗马尼亚：白底红箭头，黄色粗边框\n- 箭头\n    - 阿曼：黄底，很多黑箭头",
      "badgeZh": "弯道神器",
      "badgeEn": "Curve Chevrons"
    },
    {
      "id": "languages",
      "titleZh": "语言与特殊字符体系",
      "titleEn": "Languages & Alphabets",
      "icon": "type",
      "badge": "人文识别",
      "badgeColor": "purple",
      "sections": [
        {
          "titleZh": "北欧、波罗的海与日耳曼语系",
          "titleEn": "Nordic, Baltic & Germanic Scripts",
          "textZh": "- **北欧国家：**\n    - **丹麦与挪威使用 Æ/æ 和 Ø/ø：**\n        - **丹麦：** 更常用辅音 b, d, g，地名常见后缀 `-by`, `-skov`, `-rup`。\n        - **挪威：** 更常用辅音 p, t, k，地名常见后缀 `-set`, `-heim`, `-stad`，有时用到双元音 `aa`。\n    - **瑞典与芬兰（及德国）使用 Ä/ä 和 Ö/ö：**\n        - **瑞典：** 还可以通过特有字母 `Å/å` 区分，单词中含大量字母 a。\n        - **芬兰：** 拥有大量双元音 (`aa, ee, ii, yy`) 与双辅音 (`kk, tt, pp, ll, ss, mm, nn`)，单词极其冗长。\n    - **冰岛与法罗群岛使用 Ð/ð：**\n        - **冰岛：** 独占使用 `Þ/þ` 字符，词尾经常带 `-ið`。\n        - **法罗群岛：** 使用 `ð`，但**绝不使用** `þ`。\n- **波罗的海国家（常拥有极长单词）：**\n    - **爱沙尼亚：** 频繁使用字母 `õ`；语法类似芬兰语，单词极长且常有双元音。\n    - **拉脱维亚：** 印欧语系；在长元音上方使用横杠（`ā, ē, ī, ū`），特别喜欢以 `-s, -a, -e` 结尾。\n    - **立陶宛：** 在字母 e 上方使用单点（`ė`），元音底部带有向右的鼻音钩（`ą, ę, į, ų`），辅音常带倒折尖角（`č, š, ž`），词尾极度高频出现 `-as, -us, -is`。\n- **日耳曼语系：**\n    - **德语：** 独有德语锐角 S `ß`；名词首字母大写。\n    - **荷兰语：** 极高频率出现双元音（如 `ee, aa, oo, uu`，如 Straat, Laan）。",
          "textEn": "- **Nordic Nations:**\n    - **Denmark & Norway use Æ/æ and Ø/ø:**\n        - **Denmark:** Favors consonants b, d, g; frequent suffixes `-by`, `-skov`, `-rup`.\n        - **Norway:** Favors consonants p, t, k; frequent suffixes `-set`, `-heim`, `-stad`; occasional `aa`.\n    - **Sweden & Finland (and Germany) use Ä/ä and Ö/ö:**\n        - **Sweden:** Distinguishable by letter `Å/å` and high vowel count.\n        - **Finland:** Uralic language with ubiquitous double vowels (`aa, ee, ii, yy`) and double consonants (`kk, tt, pp`), creating massive compound words.\n    - **Iceland & Faroe Islands use Ð/ð:**\n        - **Iceland:** Exclusively uses thorn `Þ/þ`; suffixes like `-ið`.\n        - **Faroe Islands:** Uses `ð` but **never** uses `þ`.\n- **Baltic States (Very long words):**\n    - **Estonia:** Uralic tongue frequently using `õ`; similar to Finnish with double vowels.\n    - **Latvia:** Indo-European; uses macrons over long vowels (`ā, ē, ī, ū`), words frequently end in `-s, -a, -e`.\n    - **Lithuania:** Uses overdot `ė`, ogoneks (`ą, ę, į, ų`), carons (`č, š, ž`), and overwhelmingly ends masculine nouns in `-as, -us, -is`.\n- **Germanic Languages:**\n    - **German:** Distinctive Eszett `ß`; all nouns are capitalized.\n    - **Dutch:** Characterized by double vowels (`ee, aa, oo, uu`) as in Straat, Laan."
        },
        {
          "titleZh": "中欧、东欧与罗曼语族",
          "titleEn": "Central, Eastern Europe & Romance Languages",
          "textZh": "- **中欧与东欧：**\n    - **匈牙利：** 独占双锐音符（`ű` 和 `ő`）；`á` 等单锐音符常见；极喜欢双辅音组合（`sz, zs, cs, gy, ny, ty`，如 Magyarország, Szombathely）。\n    - **捷克：** 独占抑扬符 `ř`，常用上圆圈元音 `ů`；抑扬符 `š, č, ž` 广泛使用（如 Dvořák, Český）。\n    - **斯洛伐克：** 抑扬符中**不使用** `ř`；相比捷克拥有特有元音 `ô, ĺ, ŕ` 以及 `ä`（如 Liptovský, Námestovo）。\n    - **波兰：** 斜杠 L（`ł`）；极高频使用 z 复合辅音（`sz, cz, rz, dz`）与 `w`；辅音堆叠密集；软音符 `ś, ć, ź, ń`；尾部鼻音钩 `ą, ę`（如 Warszawa, Wrocław）。\n    - **阿尔巴尼亚：** 极高频率出现 `q, j, k`；特有字母 `ç` 与 `ë`；街道前缀为 `Rruga`。\n- **南欧罗曼语族：**\n    - **意大利：** 几乎所有单词都以元音（`a, e, i, o`）结尾，尤其是 `i`；双辅音（`tt, zz, pp, ss`）极其密集（如 Roma, Piazza, Ristorante）。\n    - **罗马尼亚：** 大量使用向左的独立下加逗号 `ș` 和 `ț`；元音常用半圆顶标符 `â, ă` 和 `î`（如 București, Piața, România）。\n    - **土耳其：** 关键字母 `Ç ç, Ş ş, Ö ö, Ü ü, İ / ı`（大写带点 İ，小写无点 ı）；软 `ğ`；通常不使用 Q、W、X。",
          "textEn": "- **Central & Eastern Europe:**\n    - **Hungary:** Exclusive double acute accents `ő` and `ű`; single acute `á`; consonant clusters `sz, zs, cs, gy, ny, ty` (e.g. Magyarország, Szombathely).\n    - **Czechia:** Exclusive caron `ř`; ring vowel `ů`; common carons `š, č, ž` (e.g. Dvořák, Český).\n    - **Slovakia:** Does **not** use `ř`; uses exclusive Slovak vowels `ô, ĺ, ŕ` and `ä` (e.g. Liptovský, Námestovo).\n    - **Poland:** Slashed L `ł`; heavy usage of z-clusters (`sz, cz, rz, dz`) and `w`; soft consonants `ś, ć, ź, ń`; nasal tails `ą, ę` (e.g. Warszawa, Wrocław).\n    - **Albania:** Dense use of `q, j, k`; letters `ç` and `ë`; street prefix `Rruga`.\n- **Romance & Mediterranean Languages:**\n    - **Italy:** Virtually every word ends in a vowel (`a, e, i, o`), especially `-i`; double consonants (`tt, zz, pp, ss`) throughout (e.g. Piazza, Ristorante).\n    - **Romania:** Uses comma-below letters `ș` and `ț`; roofed vowels `â, ă, î` (e.g. București, Piața, România).\n    - **Turkey:** Key letters `Ç ç, Ş ş, Ö ö, Ü ü`; dotted/dotless `İ / ı`; soft `ğ`; excludes letters Q, W, X."
        },
        {
          "titleZh": "法/西/葡/加泰罗尼亚罗曼语对比",
          "titleEn": "Romance Languages Detailed Comparison",
          "textZh": "- **三大罗曼语言核心决杀对比：**\n    - **王牌独占字母：**\n        - **法语：** `è, à, ù, â, ê, î, ô, û`，辅音结尾常不发音，常用 `-ux`。\n        - **西班牙语：** 独占波浪号 `ñ`；词首使用反向标点符号（`¿, ¡`）；双 L（`ll`）非常普遍。\n        - **葡萄牙语：** 鼻音波浪号 `ã, õ`，特殊辅音连缀 `lh, nh`。\n    - **连接词“和” (And)：**\n        - 法语：`et`\n        - 西班牙语：`y`\n        - 葡萄牙语：`e`\n    - **定冠词与所属词“的” (Of/The)：**\n        - 西班牙语：`de` / `del`\n        - 葡萄牙语：`do, da, de, dos, das`\n    - **“街道” (Street)：**\n        - 法语：`Rue`\n        - 西班牙语：`Calle`\n        - 葡萄牙语：`Rua`\n        - 加泰罗尼亚语：`Carrer`\n    - **常见名词后缀：**\n        - 法语：`-tion, -age, -ette`\n        - 西班牙语：`-ción, -dad`\n        - 葡萄牙语：`-ção, -ções, -dade`\n- **加泰罗尼亚语 (Catalonia - 西班牙东北)：**\n    - 拥有独特的中点连字 `l·l`；使用 `ç` 或 `ny`；极少使用西班牙语特有的 `ñ`。",
          "textEn": "- **The Romance Big Three Comparison:**\n    - **Signature Letters:**\n        - **French:** `è, à, ù, â, ê, î, ô, û`, frequent `-ux` endings.\n        - **Spanish:** Exclusive tilde `ñ`; inverted punctuation marks (`¿, ¡`); double L (`ll`).\n        - **Portuguese:** Nasal tildes `ã, õ`; consonant pairings `lh, nh`.\n    - **The Word 'And':**\n        - French: `et`\n        - Spanish: `y`\n        - Portuguese: `e`\n    - **The Word 'Of / From':**\n        - Spanish: `de` / `del`\n        - Portuguese: `do, da, de, dos, das`\n    - **The Word 'Street':**\n        - French: `Rue`\n        - Spanish: `Calle`\n        - Portuguese: `Rua`\n        - Catalan: `Carrer`\n    - **Common Suffixes:**\n        - French: `-tion, -age, -ette`\n        - Spanish: `-ción, -dad`\n        - Portuguese: `-ção, -ções, -dade`\n- **Catalan (Northeastern Spain & Andorra):**\n    - Features unique interpunct `l·l`; uses `ç` or `ny`; rarely uses Spanish `ñ`."
        },
        {
          "titleZh": "欧洲语言顶部与底部变音符号秒杀法则",
          "titleEn": "European Diacritics Comprehensive Cheat Sheet",
          "textZh": "- **顶部变音符号秒杀全览：**\n    - **倒尖角 (Caron / ˇ)：**\n        - `ř, ě`：**见之必秒捷克 🇨🇿**。\n        - `ľ, ĺ`（大写 Ľ）：**见之必秒斯洛伐克 🇸🇰**。\n        - 仅有 `č, š, ž`：锁定波罗的海（立陶宛/拉脱维亚）或前南斯拉夫（斯洛文尼亚、克罗地亚等）。\n    - **圆圈 (Ring / ˚)：**\n        - `å`：锁定北欧三界（丹麦/挪威配 ø, æ；瑞典配 ö, ä）。\n        - `ů`：**见之必秒捷克 🇨🇿**（区别于斯洛伐克的 ô）。\n    - **双锐音符 (Double acute / ˝)：**\n        - `ő, ű`：**独占神技，100% 匈牙利 🇭🇺**！\n    - **长音横线 (Macron / ˉ)：**\n        - `ā, ē, ī, ū`：**欧洲唯一成体系使用横线长音的拉脱维亚 🇱🇻**（常搭配辅音钩 ķ, ļ, ņ, ģ）。\n    - **单点 (Overdot / ˙)：**\n        - `ė`：**立陶宛 🇱🇹 专属特权字母**。\n        - `ż`：波兰 🇵🇱 核心字母（常与 ł, ę, ą 连击）。\n        - 大写 `İ` 或小写 `i` 与无点 `ı` 成对：土耳其 🇹🇷。\n    - **正尖角 (Circumflex / ^)：**\n        - `ô`：斯拉夫语中仅斯洛伐克 🇸🇰 使用（配 ä, ľ）。\n        - `â, î`：锁定罗马尼亚 🇷🇴（配 ă, ș, ț）。\n    - **短音符 (Breve / ˘)：**\n        - `ă`：罗马尼亚 🇷🇴 标志（绝大部分出现在词尾）。\n        - `ğ`（软 g）：土耳其 🇹🇷 专属辅音。\n    - **波浪线 (Tilde / ~)：**\n        - `õ`（配 ä, ö, ü）：**见之必秒爱沙尼亚 🇪🇪**。\n        - `ã, õ`（配 -ção）：葡萄牙 🇵🇹。\n        - `ñ`：西班牙 🇪🇸 专属。\n- **底部变音符号秒杀全览：**\n    - `ą, ę`（仅两个元音带下钩）：波兰 🇵🇱（搭配大量 z, ł, ż, ś, w, cz/sz）。\n    - `ą, ę, į, ų`（四个元音带下钩）：立陶宛 🇱🇹（必杀技是 ė 单点与词尾 -as / -is / -us）。\n    - `ķ, ļ, ņ, ģ`（辅音下加钩，小写 g 钩在顶上成 ģ）：拉脱维亚 🇱🇻。\n    - `ș, ț`（辅音下加独立小逗号）：罗马尼亚 🇷🇴（伴随 ă, â, î，无 č, š, ž）。\n    - `ç, ş`（辅音带连体软音符）：土耳其 🇹🇷（伴随无点 ı、点状 i、ğ、ü, ö）。\n    - `ç`（仅下加 c）：法国 🇫🇷、葡萄牙 🇵🇹、加泰罗尼亚 🇪🇸、阿尔巴尼亚 🇦🇱。",
          "textEn": "- **Top Diacritics Master Rules:**\n    - **Caron (ˇ):**\n        - `ř, ě`: **Instant Czechia 🇨🇿**.\n        - `ľ, ĺ` (upper Ľ): **Instant Slovakia 🇸🇰**.\n        - Only `č, š, ž`: Baltic (Lithuania/Latvia) or former Yugoslavia (Slovenia, Croatia).\n    - **Ring (˚):**\n        - `å`: Nordic realm (Denmark/Norway paired with ø, æ; Sweden with ö, ä).\n        - `ů`: **Instant Czechia 🇨🇿** (contrasting Slovak ô).\n    - **Double Acute (˝):**\n        - `ő, ű`: **100% Hungary 🇭🇺 exclusive superpower**.\n    - **Macron (ˉ):**\n        - `ā, ē, ī, ū`: **Latvia 🇱🇻 exclusive systematic usage in Europe** (paired with cedilla consonants ķ, ļ, ņ, ģ).\n    - **Overdot (˙):**\n        - `ė`: **Lithuania 🇱🇹 exclusive letter**.\n        - `ż`: Poland 🇵🇱 core (paired with ł, ę, ą).\n        - Dotted `İ` / Dotless `ı`: Turkey 🇹🇷.\n    - **Circumflex (^):**\n        - `ô`: Slavic realm exclusively Slovakia 🇸🇰.\n        - `â, î`: Romania 🇷🇴 (paired with ă, ș, ț).\n    - **Breve (˘):**\n        - `ă`: Romania 🇷🇴 emblem.\n        - `ğ`: Turkey 🇹🇷 soft-g consonant.\n    - **Tilde (~):**\n        - `õ` (with ä, ö, ü): **Instant Estonia 🇪🇪**.\n        - `ã, õ`: Portugal 🇵🇹.\n        - `ñ`: Spain 🇪🇸.\n- **Bottom Diacritics Master Rules:**\n    - `ą, ę` (only two vowels with tail): Poland 🇵🇱.\n    - `ą, ę, į, ų` (four vowels with tail): Lithuania 🇱🇹.\n    - `ķ, ļ, ņ, ģ` (consonants with bottom hook, small ģ hooked on top): Latvia 🇱🇻.\n    - `ș, ț` (independent comma below): Romania 🇷🇴.\n    - `ç, ş` (consonants with attached cedilla): Turkey 🇹🇷.\n    - `ç` (only on c): France 🇫🇷, Portugal 🇵🇹, Catalonia 🇪🇸, Albania 🇦🇱."
        },
        {
          "titleZh": "西里尔字母国家专用字符速查",
          "titleEn": "Cyrillic Script Matrix by Country",
          "textZh": "- **西里尔字母各国特征：**\n    - **俄罗斯 🇷🇺：** 独有字母 `Ё, Ы, Э, Ъ` (硬音符 Hard Sign)；无蓝条。\n    - **乌克兰 🇺🇦：** 独占使用字母 `i` 与 `ï`（其他西里尔语言均使用 `И`）；独占使用 `Є, Ґ`（如 Україна, Київ）。\n    - **保加利亚 🇧🇬：** **欧盟中唯一使用西里尔字母的国家**；使用字母 `Ѝ`；广泛使用 `ъ` 作为普通元音；有独特的单字母单词 **`в`**（如 България, сън）。\n    - **蒙古 🇲🇳：** 独占使用字母 `Ө, Ү`。\n    - **吉尔吉斯斯坦 🇰🇬：** 独占使用字母 `Ң, Һ, Ө, Ү`。\n    - **巴尔干国家（塞尔维亚 🇷🇸、波黑 🇧🇦、黑山 🇲🇪）：**\n        - **双脚本并存：** 同时使用拉丁字母与西里尔字母。\n        - 包含特有字母 `ђ, ћ, љ, њ, џ`（如 Београд, Његош）。\n- **俄语与乌克兰语并排速决表：**\n    - 俄语使用 `И`（无点） / 乌克兰语使用 `I, Ï`（带一点或两点）。\n    - 俄语使用 `Э`（开口朝右） / 乌克兰语使用 `E, Є`（圆弧形）。\n    - 乌克兰语独有：`Є, Ї, Ґ`。",
          "textEn": "- **Cyrillic Script by Nation:**\n    - **Russia 🇷🇺:** Features letters `Ё, Ы, Э, Ъ` (Hard Sign).\n    - **Ukraine 🇺🇦:** Exclusively uses `i` and `ï` (where other Cyrillic tongues use `И`); exclusively uses `Є, Ґ` (e.g. Україна, Київ).\n    - **Bulgaria 🇧🇬:** **Sole EU member using Cyrillic**; uses `Ѝ`; frequent vowel use of `ъ`; standalone single-letter word **`в`** (e.g. България, сън).\n    - **Mongolia 🇲🇳:** Distinctive letters `Ө, Ү`.\n    - **Kyrgyzstan 🇰🇬:** Distinctive letters `Ң, Һ, Ө, Ү`.\n    - **Balkans (Serbia 🇷🇸, Bosnia 🇧🇦, Montenegro 🇲🇪):**\n        - **Digraphia:** Latin and Cyrillic scripts co-exist everywhere.\n        - Features unique South Slavic Cyrillic letters `ђ, ћ, љ, њ, џ` (e.g. Београд).\n- **Russian vs Ukrainian Side-by-Side:**\n    - Russian uses `И` / Ukrainian uses Latin-lookalike `I, Ï`.\n    - Russian uses reversed-E `Э` / Ukrainian uses rounded `Є`.\n    - Ukrainian exclusives: `Є, Ї, Ґ`."
        },
        {
          "titleZh": "东南亚五国文字秒辨",
          "titleEn": "Southeast Asian Scripts Identification",
          "textZh": "- **东南亚文字视觉特征辨析：**\n    - **泰国 (Thai)：**\n        - 结构方正规整，由**直线与折角**主导，转折处带有鲜明的硬直角。\n        - 拥有大量长垂线。\n        - 笔画开头通常带有一个小圆圈起笔（无头现代商业体除外）。\n    - **老挝 (Lao)：**\n        - 基于泰语体系演化，但**弧线极其丰富**，没有泰语的硬折角。\n        - 圆圈更大，字形圆胖圆润。\n        - 包含独特的老挝独占字符（如 `ງ` 或 `ຽ`）。\n    - **柬埔寨 (Khmer / 高棉文)：**\n        - 字符顶部通常带有类似**起伏波浪或锯齿尖刺**的修饰。\n        - 拥有极多向右弯曲的倒钩。\n        - 笔画结构极其琐碎、复杂密集。\n    - **缅甸 (Burmese)：**\n        - 几乎完全由**纯正圆形和半圆弧线**拼合而成，配以少量长竖线。\n        - 弧线大部分圆润闭合，视觉上像**一串挤在一起的珍珠或泡泡**（如 `က, မ, တ`）。\n    - **越南 (Vietnamese)：**\n        - 采用**拉丁字母体系**；但每个词都极短（单音节词）。\n        - 字母上方和下方布满密集声调符号，常出现上下双层变音符号（如 `Phở`, `Đường`）。",
          "textEn": "- **Visual Breakdown of Southeast Asian Scripts:**\n    - **Thailand (Thai):**\n        - Structured and boxy with **crisp right angles and straight vertical bars**.\n        - Regular small circular loop beginnings on brush strokes.\n    - **Laos (Lao):**\n        - Derived from Thai roots but **dramatically curvier, loopier, and rounder**.\n        - Lacks sharp corners; larger circles and chubby rounded characters (e.g. `ງ`, `ຽ`).\n    - **Cambodia (Khmer):**\n        - Tops of characters decorated with **wavy crested teeth or spiky accents**.\n        - Abundant rightward-curling hooks; complex, highly intricate strokes.\n    - **Myanmar (Burmese):**\n        - Almost purely made of **concentric circular rings, half-circles, and bubbling loops**.\n        - Visually resembles clusters of connected pearls or bubbles (e.g. `က, မ, တ`).\n    - **Vietnam (Vietnamese):**\n        - Uses the **Latin alphabet**, but words are short (monosyllabic).\n        - Loaded with stacked tone markers above and below letters, often with double diacritics (e.g. `Phở`, `Đường`)."
        },
        {
          "titleZh": "南亚各国及印度各邦文字全对照",
          "titleEn": "South Asian & Indian Regional Scripts",
          "textZh": "- **印度各邦与南亚主要文字地图：**\n    - **印地语（天城文 Devanagari）：** 顶部有一条极其笔直平整的贯穿横线，字母带垂直竖线，形态“方正稳重”；北印度主要文字。\n    - **古鲁木齐文 (Gurmukhi)：** 类似天城文但整体更圆润，有特征性的向下开口夹子形字符；西北旁遮普邦 (Punjab)。\n    - **马拉地文 (Marathi)：** 天城文演化，拥有特有字母 `ळ`（一横下挂 ∞ 符号）和 `क्ष`；中西部马哈拉施特拉邦 (Maharashtra)。\n    - **古吉拉特文 (Gujarati)：** 笔画类似天城文，但**完全去掉了顶部的水平贯穿横线**；西侧古吉拉特邦。\n    - **孟加拉语 (Bengali)：** 顶部横线极直，字符布满**三角小旗形**与锐角尖刺；孟加拉国及印度东北西孟加拉邦。\n    - **阿萨姆文 (Assamese)：** 与孟加拉语极其相似，但特征字符常多出一条斜划；印度东北阿萨姆邦 (Assam)。\n    - **曼尼普尔文 (Manipuri)：** 顶部有横线，下方多细竖线，带向下不封口的心形字符；曼尼普尔邦 (Manipur)。\n    - **奥里亚文 (Odia)：** 字符顶部带有圆润宽阔的半圆形，形态类似**小骷髅头**；印度东部奥里萨邦。\n    - **卡纳达语 (Kannada)：** 大量弯曲曲线，类似电话线或盘蛇，右上角带有风间头发般的波浪卷；印度西南卡纳塔克邦。\n    - **泰卢固语 (Telugu)：** 类似卡纳达语的大量弯曲弧线，但上方带有标志性的“**小对勾**”或“小辫子”（如 `తె లు గు`）；东南安得拉邦。\n    - **马拉雅拉姆文 (Malayalam)：** 由简单平滑的弯曲线条构成，布满倒扣的 u 形与 o 形字符；西南角喀拉拉邦 (Kerala)。\n    - **泰米尔文 (Tamil)：** 兼具直线折角与大圆圈，上部带圆点变音符；东南泰米尔纳德邦与斯里兰卡。\n    - **斯里兰卡（僧伽罗文 Sinhala）：** 纯圆弧线，**完全没有顶部横线**，向上或向侧面开口，形态如同**一排排小爱心、小桃子或小屁股**（如 `ඟ, ජ, ද`）。\n    - **不丹（藏文 Dzongkha）：** 字母顶部有平直厚重的横笔，下方往往拖着长长的“腿”。\n    - **巴基斯坦（乌尔都文 Urdu）：** 从右往左书写的波斯-阿拉伯脚本。\n    - **英语邦：** 东北部梅加拉亚邦 (Meghalaya) 完全使用英语官方路牌；米佐拉姆邦 (Mizoram) 使用纯拉丁字母的米佐语。",
          "textEn": "- **Comprehensive Guide to South Asian Scripts:**\n    - **Hindi (Devanagari):** Solid horizontal line running across the top of words, square and grounded glyphs; northern India.\n    - **Gurmukhi (Punjabi):** Similar to Devanagari but rounder with downward clamp-like glyphs; Punjab.\n    - **Marathi:** Devanagari variant with unique letters `ळ` and `क्ष`; Maharashtra.\n    - **Gujarati:** Glyphs closely resemble Devanagari but **completely omit the top horizontal line**; Gujarat.\n    - **Bengali:** Crisp horizontal top line with prominent **triangular flags and sharp points**; Bangladesh and West Bengal.\n    - **Assamese:** Nearly identical to Bengali, with distinctive extra diagonal strokes; Assam.\n    - **Manipuri:** Horizontal top bar with heart-shaped open loops; Manipur.\n    - **Odia:** Characterized by wide rounded umbrella-like hoods resembling **little skull outlines**; Odisha.\n    - **Kannada:** Curving telephone-wire loops with a wavy flick in the upper right; Karnataka.\n    - **Telugu:** Curving telephone-wire loops topped with a distinct **checkmark or little ponytail** (`తె లు గు`); Andhra Pradesh.\n    - **Malayalam:** Loops dominated by inverted u-shapes and continuous smooth curves; Kerala.\n    - **Tamil:** Mix of crisp right-angle corners, circles, and overdots; Tamil Nadu & Sri Lanka.\n    - **Sinhala (Sri Lanka):** Pure smooth curving arcs with **no top line**, resembling **little peach or heart lobes** (`ඟ, ජ, ද`).\n    - **Dzongkha (Bhutan):** Tibetan block script with bold top horizontal strokes and long downward legs.\n    - **Urdu (Pakistan):** Perso-Arabic Nastaliq script written right-to-left.\n    - **English Dominant States:** Meghalaya (northeastern India) uses English; Mizoram uses Latin-script Mizo."
        },
        {
          "titleZh": "东亚、马来印尼语与全球路牌道路词汇",
          "titleEn": "East Asia, Austronesian & Road Signs Vocabulary",
          "textZh": "- **东亚中日韩文字：**\n    - **韩语：** 字符中频繁出现圆形、椭圆与直线方框组合（如 `ㅇ, ㅎ, ㅁ, ㅂ`）。\n    - **日语：** 复杂的汉字（Kanji）与圆润流畅的平假名（如 `の, は, を`）及硬朗片假名（如 `カ, ト`）混排。\n    - **中文：** 纯汉字，紧凑方正，笔画横平竖直。\n- **马来西亚 vs 印度尼西亚：**\n    - **马来西亚：** 路牌普遍直接采用英语或英马双语。\n    - **印度尼西亚：** 拼写深受荷兰语影响：英语里的 `C` 常变成 `K`（Clinic → `Klinik`）；`-tion` 变成 `-si`（Communication → `Komunikasi`）；动词高频以 `-kan` 结尾；字母 `a` 密度极高；商铺统一标注为 `Toko`。\n- **全球停止标牌 (Stop Signs)：**\n    - `STOP` — 国际通用（欧美各国、英语国家、日本高速）。\n    - `ALTO` — 墨西哥及中美洲（危地马拉、洪都拉斯、萨尔瓦多、尼加拉瓜、哥斯达黎加、巴拿马）。\n    - `PARE` — 南美洲绝大多数国家（巴西、哥伦比亚、智利、阿根廷、秘鲁等）。\n    - `ARRÊT` — 加拿大魁北克省（法语区）。\n    - `DUR` — 土耳其。\n    - `止まれ` — 日本（倒三角形红色路牌中的平假名）。\n    - `СТОП` — 俄罗斯及部分前苏联加盟国（西里尔字母）。\n    - `Waqif` — 沙特阿拉伯等海湾阿拉伯国家。\n- **全球道路常用词汇速览：**\n    - **斯堪的纳维亚：** Väg (瑞典) / Vej (丹麦) / Vei (挪威) / Tie, Katu (芬兰)。\n    - **波罗的海：** Gatvė, Kelias (立陶宛) / Iela, Ceļš (拉脱维亚) / Tee, Tänav (爱沙尼亚)。\n    - **德语区：** Straße / Str., Weg, Allee, Gasse。\n    - **法语区：** Rue, Avenue, Boulevard, Chemin。\n    - **西语区：** Calle, Avenida, Carretera。\n    - **加泰罗尼亚：** Carrer。\n    - **葡语区：** Rua, Avenida, Estrada (葡) / Rodovia, BR- (巴西)。\n    - **俄语区：** Улица (ul.), Проспект (pr.), Переулок。\n    - **意大利：** Via, Viale, Corso, Vicolo。\n    - **荷兰/比利时：** Straat, Weg, Laan。\n    - **东南亚：** Jalan / Jl. (印尼/马来) / Thanon, Soi (泰国)。\n- **警示与特殊词汇秒杀：**\n    - `AWAS` — 马来西亚（危险，红底白字极其常见）。\n    - `BAHAYA` — 马来西亚 / 印度尼西亚（危险）。\n    - `PERINGATAN` — 印度尼西亚（警告）。\n    - `Kura` — 新西兰毛利语（意为学校，见于学校限速牌）。\n    - `GEVAAR` — 南非（南非荷兰语 Afrikaans，危险）。\n    - `ACHTUNG` — 德国 / 奥地利 / 瑞士（当心/注意）。\n    - `CUIDADO` — 西班牙语国家（小心）。\n    - `ATTENTION` — 法语国家（注意）。",
          "textEn": "- **East Asian Character Recognition:**\n    - **Korean:** Circles and ovals (`ㅇ, ㅎ`) heavily combined with vertical/horizontal sticks and boxes.\n    - **Japanese:** Complex Kanji paired with curving smooth Hiragana (`の, は, を`) and angled Katakana (`カ, ト`).\n    - **Chinese:** Pure Hanzi characters, uniform box-shaped glyphs with straight grid-like strokes.\n- **Malaysia vs Indonesia:**\n    - **Malaysia:** Street signage is frequently in English or bilingual Malay/English.\n    - **Indonesia:** Strong Dutch phonetic influence: English `C` becomes `K` (Clinic → `Klinik`), `-tion` becomes `-si` (Communication → `Komunikasi`), verbs frequently end in `-kan`, heavy density of vowel `a`, shops are labeled `Toko`.\n- **Global Stop Signs:**\n    - `STOP`: Universal standard (Europe, Americas, English-speaking world, Japanese expressways).\n    - `ALTO`: Mexico and Central America (Guatemala, Honduras, El Salvador, Nicaragua, Costa Rica, Panama).\n    - `PARE`: Most of South America (Brazil, Colombia, Chile, Argentina, Peru, Ecuador).\n    - `ARRÊT`: Quebec, Canada (French province).\n    - `DUR`: Turkey.\n    - `止まれ`: Japan (inverted triangular red sign).\n    - `СТОП`: Russia and former Soviet countries.\n    - `Waqif`: Saudi Arabia and Gulf Arab nations.\n- **Road Vocabulary by Region:**\n    - **Nordic:** Väg (SE) / Vej (DK) / Vei (NO) / Tie, Katu (FI).\n    - **Baltic:** Gatvė, Kelias (LT) / Iela, Ceļš (LV) / Tee, Tänav (EE).\n    - **Germanic:** Straße / Str., Weg, Allee, Gasse.\n    - **French:** Rue, Avenue, Boulevard, Chemin.\n    - **Spanish:** Calle, Avenida, Carretera.\n    - **Catalan:** Carrer.\n    - **Portuguese:** Rua, Avenida, Estrada (PT) / Rodovia (BR).\n    - **Russian:** Улица (ul.), Проспект (pr.), Переулок.\n    - **Italian:** Via, Viale, Corso, Vicolo.\n    - **Dutch:** Straat, Weg, Laan.\n    - **Southeast Asia:** Jalan / Jl. (MY/ID) / Thanon, Soi (TH).\n- **Hazard & Warning Keywords:**\n    - `AWAS`: Malaysia ('Caution / Danger' on red/white road signs).\n    - `BAHAYA`: Malaysia / Indonesia ('Danger').\n    - `PERINGATAN`: Indonesia ('Warning').\n    - `Kura`: New Zealand Maori ('School').\n    - `GEVAAR`: South Africa Afrikaans ('Danger').\n    - `ACHTUNG`: Germany / Austria / Switzerland ('Attention').\n    - `CUIDADO`: Spanish-speaking world ('Caution').\n    - `ATTENTION`: French-speaking world ('Attention')."
        }
      ],
      "rawContent": "# 语言\n\n[Language](https://geometas.com/metas/categories/language/)\n\n### 字符\n\n- 北欧国家\n    - 丹麦和挪威使用 Æ/æ 和 ø。\n        - 丹麦：更常用b,d,g，常见-by, -skov, -rup，\n        - 挪威：更常用p,t,k，常见-set, -heim, -stad，有时用到aa\n    - 瑞典和芬兰（包括德国）使用 Ä/ä 和 Ö/ö。\n        - 瑞典：还可以通过字母 å 来区分，有很多a。\n        - 芬兰：有双元音(aa, ee, ii, yy)，双辅音（kk, tt, pp, ll, ss, mm, nn），极长单词\n    - 冰岛和法罗群岛：使用 ð 。\n        - 冰岛：还使用 þ 字符，经常用-ið\n        - 法罗群岛：不使用 þ\n- 波罗的海国家： 常拥有**极长的单词**\n    - 爱沙尼亚：经常使用字母 õ。类似芬兰语，常有双元音。\n    - 拉脱维亚：属于印欧语。在元音上方使用横杠（ā, ē, ī, ū），喜欢以-s, -a, -e 结尾。\n    - 立陶宛：在字母e上方使用点（ė），并使用元音底下向右的鼻音钩（ą, ę, į, ų），一些辅音上常加倒折尖角符号č, š, ž，极其喜欢以 -as, -us, -is 结尾。\n- 日耳曼语系\n    - 德语: 有 `ß`\n    - 荷兰语：很多双元音，比如ee, aa\n- 中欧与东欧\n    - 匈牙利：独特的双锐音符（ű ****和 ő），á等单锐音符经常出现，也喜欢用双辅音sz, zs, cs, gy, ny, ty 。例子：Magyarország, Szombathely\n    - 捷克: 独特的抑扬符 ř ，常用圆圈 ů；注意抑扬符š, č, ž在其它国家（斯洛伐克，前南斯拉夫）也被使用。例子：Dvořák，Český\n    - 斯洛伐克：抑扬符不使用ř ；跟捷克比有元音ô, ĺ, ŕ 以及 ä。例子：Liptovský，Námestovo\n    - 波兰：斜杠 L（ł）；大量使用 z (sz, cz, rz, dz)和 w ；辅音多; 软音符 ś, ć, ź, ń; 尾巴字母 ą, ę。例子：Warszawa，Wrocław\n    - 阿尔巴尼亚：多用q, j, k；包含特殊字符ç and ë。例子：Shqipëri， Rruga\n- 南欧罗曼语族\n    - 意大利：几乎所有单词都以元音（a, e, i, o）结尾，尤其是i；双辅音（tt, zz, pp, ss）多。例子：Roma，Milano，Piazza，Ristorante\n    - 法语：常用ux;\n    - 西班牙：“和”这个词是 `y`，“的”这个词是 de, 喜欢用用 `ñ`, ll 和反向标点（`¿, ¡`）。例子：España，calle，¿Dónde?\n    - 加泰罗尼亚语：有中点l·l，ç 或 ny，少用`ñ`\n    - 葡萄牙：“和”这个词是 `e`。“的”这个词是 do/da/de/dos/das。常用ão；使用 `ç`（也见于加泰罗尼亚语和法语，土耳其语）以及带波浪号的元音 `ã` 和 `õ`。例子：São，coração，informação\n    - 罗马尼亚：大量使用向左的下加符（小逗号）ș 和 ț；元音常用半圆上标符â, ă 和 î。例子：București，Piața，România\n    - 土耳其：关键字母有Ç ç，Ş ş，Ö ö，Ü ü，İ / ı（大写有点，小写没有）；一般没有 Q、W、X\n- 法语，西班牙语，葡萄牙语比较\n    - 王牌字母：法语`è` `à` `ù` `â` `ê` `î` `ô` `û` ; 西班牙语`ñ`； 葡萄牙语`ã` `õ` `lh` `nh`\n    - And：法语`et`; 西班牙语`y`； 葡萄牙语`e`\n    - Street：法语`Rue`; 西班牙语`Calle`； 葡萄牙语`Rua`\n    - 常见后缀：法语`-tion` `-age` `-ette`; 西班牙语`-ción` `-dad`； 葡萄牙语`-ção` `-ções` `-dade`\n- 欧洲语言顶部和底部装饰比较\n    - 顶部\n    \n    | 符号类型 | 符号形态 | 代表字母 | 独占/代表国家 | GeoGuessr 秒杀法则 |\n    | --- | --- | --- | --- | --- |\n    | 倒尖角\n    (Caron / ˇ) | 字母上方的“v”形倒钩 | ř, ě\n    ľ, ď, ť, ň\n    č, š, ž | 捷克 🇨🇿\n    斯洛伐克 🇸🇰\n    前南斯拉夫 / 波罗的海 | • ř, ě：见之必秒捷克\n    • ľ（大写 Ľ）：见之必秒斯洛伐克\n    • 仅有 č, š, ž：锁定波罗的海或前南斯拉夫（斯洛文尼亚、克罗地亚等） |\n    | 圆圈\n    (Ring / ˚) | 字母正上方悬浮空心小圆 | å\n    ů | 北欧 (挪威/丹麦/瑞典)\n    捷克 🇨🇿 | • å：锁定北欧三界（丹麦/挪威配 ø, æ；瑞典配 ö, ä）\n    • ů：见之必秒捷克（区别于斯洛伐克的 ô） |\n    | 双锐音符\n    (Double acute / ˝) | 字母上方向右平行的两撇斜线 | ő, ű | 匈牙利 🇭🇺 | • 独占神技：只要看到 ő 或 ű，100% 匈牙利 |\n    | 长音横线\n    (Macron / ˉ) | 字母正上方的水平一横 | ā, ē, ī, ū | 拉脱维亚 🇱🇻 | • 欧洲唯一成体系使用横线长音的拉美化国家（常搭配辅音钩 ķ, ļ, ņ, ģ） |\n    | 单点\n    (Overdot / ˙) | 字母正上方单个实心圆点 | ė\n    ż\n    i（无点 ı 的对应物） | 立陶宛 🇱🇹\n    波兰 🇵🇱\n    土耳其 🇹🇷 | • ė：立陶宛专属特权字母\n    • ż：波兰核心字母（常与 ł, ę, ą 连击）\n    • 大写 İ 或小写 i 与无点 ı 成对：土耳其 |\n    | 正尖角 / 顶戴帽\n    (Circumflex / ^) | 字母正上方的“^”形屋顶 | ô\n    â, î | 斯洛伐克 🇸🇰\n    罗马尼亚 🇷🇴 | • ô：斯拉夫语中仅斯洛伐克使用（配 ä, ľ）\n    • â, î：锁定罗马尼亚（配 ă, ș, ț） |\n    | 短音符\n    (Breve / ˘) | 字母正上方的微凹小浅碗 | ă\n    ğ | 罗马尼亚 🇷🇴\n    土耳其 🇹🇷 | • ă：罗马尼亚标志（绝大部分出现在词尾）\n    • ğ（软 g）：土耳其专属辅音 |\n    | 波浪线\n    (Tilde / ~) | 字母正上方的水波纹 | õ\n    ã, õ\n    ñ | 爱沙尼亚 🇪🇪\n    葡萄牙 🇵🇹\n    西班牙 🇪🇸 | • õ（配 ä, ö, ü）：见之必秒爱沙尼亚\n    • ã, õ（配 -ção）：葡萄牙\n    • ñ：西班牙专属 |\n    - 底部\n    \n    | 字母与符号 | 独占/代表国家 | 识别要点 |\n    | --- | --- | --- |\n    | ą, ę（仅两元音带钩） | 波兰 🇵🇱 | 搭配大量 z、ł、ż、ś、w、cz/sz |\n    | ą, ę, į, ų（四元音带钩） | 立陶宛 🇱🇹 | 必杀技是 ė（带单点）及词尾 -as / -is / -us / -ai |\n    | ķ, ļ, ņ（辅音下加钩）\n    *注：小写 g 钩在顶上成 ģ* | 拉脱维亚 🇱🇻 | 伴随长音横线元音 ā, ē, ī, ū，无双写元音 |\n    | ș, ț（辅音下加独立逗号） | 罗马尼亚 🇷🇴 | 伴随 ă, â, î；词尾常见 -ul, -ilor（无 č, š, ž） |\n    | ç, ş（辅音带连体软音符） | 土耳其 🇹🇷 | 伴随无点 ı、点状 i、ğ、ü, ö |\n    | ç（仅下加 c） | 法国 🇫🇷 / 葡萄牙 🇵🇹 / 加泰罗尼亚 🇪🇸 / 阿尔巴尼亚 🇦🇱 | • 阿尔巴尼亚伴随高频 ë 与 q, j, k\n    • 葡萄牙伴随 ã, õ, -ção\n    • 法国伴随 é, è, à |\n- [西里尔字母](https://www.ptl.global/cyrillic-alphabet/)语言\n    - 俄罗斯：独有Ё， Ы， Э， Ъ (Hard Sign)\n    - 乌克兰：使用字母 i 和 ï （其它西里尔语言用И），Є， Ґ。例子：Україна，Київ\n    - 保加利亚： 唯一使用西里尔字母的欧盟国家； 使用字母Ѝ， ъ （普通元音）；有单字母单词 **`в`**。例子：България，сън\n    - 蒙古：使用字母 Ө\n    - 吉尔吉斯：使用字母Ң，Һ\n    - 巴尔干国家（塞尔维亚，波黑，黑山）同时使用拉丁(j)和西里尔脚本，通常带有 ђ 或 ћ, љ, њ字母。例子：Београд, Његош\n    - 俄语和乌克兰语比较\n    \n    ![image.png](%E8%AF%AD%E8%A8%80/image.png)\n    \n    ![image.png](%E8%AF%AD%E8%A8%80/image%201.png)\n    \n- 东南亚语言\n    - 泰国：圆圈+直线；比较规整；转折处带有一点点硬角；有很多垂直长线；有一个小圆圈作为起笔(有时候会用无头体，就没有这些圆圈)；\n    - 老挝：基于泰语，弧线更多；圆圈更大；圆胖的字形；包含独特的字符（如 `ງ` 或 `ຽ`）。\n    - 柬埔寨：顶部通常有类似波浪或尖刺的修饰，尤其是有很多向右的钩钩；笔画复杂且碎\n    - 缅甸：几乎完全由圆圈和半圆组成加少量长竖线，弧线大部分闭合，像挤在一起的珍珠和泡泡。例子：`က`, `မ`, `တ`\n    - 越南：拉丁字母；但每个单词都很短，且字母上下全是符号，甚至有双层符号\n        \n        ![Screenshot 2026-02-07 at 10.49.00 AM.png](%E8%AF%AD%E8%A8%80/Screenshot_2026-02-07_at_10.49.00_AM.png)\n        \n- 南亚语言\n    - 印地语（天城文）：顶部的横线非常直，大多字母有垂直线字母形状相对“方正”和“稳重”；为印度北部主要语言\n    - 古鲁木齐文：跟天成文类似，更圆润一些，有向下的夹子形字符；西北角旁遮普邦使用\n    - 马拉地文：基于天成文，有ळ（一横下面挂个∞符号)和क्ष；主要在中西部的马哈拉斯特拉邦使用。\n    - 古吉拉特文：跟天成文类似，没有顶部的横线；西边的古吉拉特邦使用\n    - 孟加拉语：顶部的横线非常直，很多三角小旗形，尖角；孟加拉国以及印度东北部使用\n    - Assamese：跟孟加拉语类似，但是三角小旗形字符常有多出一条线；在靠近孟加拉东北角的印度地区(Assam)使用\n    - Manipuri：顶部有横线，下面很多竖线，有向下不封口的心形；孟加拉以东最东边Manipur地区\n    - 英语：全印度都用，完全使用英语的是孟加拉以东的Meghalaya\n    - Mizo: 完全由拉丁字母组成；在孟加拉以东的南部Mizoram地区\n    - 奥里亚文：顶部经常有宽阔半圆形，类似骷髅头；印度中部偏东\n    - Kannada 卡纳达语：很多弯曲，像电话线或蛇，右上角有像风间头发的波浪型；印度南方偏西区\n    - Telugu 泰卢固语：很多弯曲，像电话线或蛇，上方有“对勾”或“小辫子”；例子：తె లు గు；印度南方偏东区\n    - 马拉雅拉姆文：简单弯曲字母组成，有很多倒扣的u形和o形字母；印度西南角\n    - 泰米尔文：有圆圈，曲线，直线，上部圆点变音符号；印度东南角和斯里兰卡使用\n    - 斯里兰卡：僧伽罗（Sinhala）语，几乎全是圆弧线，完全没有顶部装饰，向上或侧面开口，像**一排排小屁股，桃子，爱心；例子：ඟ, ජ, ද**\n    - 不丹：藏文，字母顶部有厚重的横笔，常能看到长长的“腿”\n    - 巴基斯坦：从右往左写的类似阿拉伯文字\n    \n    ![](https://i.redd.it/6ug97uidjtca1.jpg)\n    \n- 印尼 和 马来西亚：\n    - 马来西亚：经常出现英语或双语\n    - 印尼：单词拼写受荷兰语影响，英语里的 C 在印尼语常变成 K（Clinic → Klinik），tion 变成 si（Communication → Komunikasi）; 单词频繁以 `kan` 结尾，且使用字母 `a` 的频率极高；商店经常写成Toko。\n- 日语、韩语与中文\n    - 韩语因字符中频繁使用圆圈和椭圆而易于识别。\n    - 日语结合了复杂的汉字（Kanji）和更简单、更圆润的拼音脚本（平假名/片假名）。\n    - 中文字符看起来更紧凑、方正且笔画笔直。\n\n### 路牌道路语言\n\n- **停止标牌（Stop Signs）**\n    - STOP — 国际通用（欧洲各国、英语国家、日本高速）\n    - ALTO — 墨西哥及中美洲（危地马拉、洪都拉斯、萨尔瓦多、尼加拉瓜、哥斯达黎加、巴拿马）\n    - PARE — 南美洲大多数国家（巴西、哥伦比亚、委内瑞拉、智利、阿根廷、秘鲁等）\n    - ARRET — 加拿大魁北克省（法语区）\n    - STOP + ARRET — 加拿大新不伦瑞克省（英法双语）\n    - DUR — 土耳其\n    - STOP + 阿拉伯文 — 突尼斯、摩洛哥\n    - Waqif — 沙特阿拉伯等海湾国家（纯阿拉伯文）\n    - Eist — 伊朗（波斯文）\n    - 止まれ — 日本（平假名，三角形红色路牌）\n    - STOP — 俄罗斯及部分前苏联国家（西里尔字母 СТОП）\n- **道路词汇（按语言区）**\n    - 斯堪的纳维亚 — Vag（瑞典）/ Vej（丹麦）/ Vei（挪威）/ Tie、Katu（芬兰）\n    - 波罗的海 — Gatve / Kelias（立陶宛）/ Iela / Cels（拉脱维亚）/ Tee / Tanav（爱沙尼亚）\n    - 德语区 — Strasse / Str.、Weg、Allee、Gasse\n    - 法语区 — Rue、Avenue、Boulevard、Chemin\n    - 西语区 — Calle、Avenida、Carretera\n    - 加泰罗尼亚 — Carrer\n    - 葡语区 — Rua、Avenida、Estrada（葡萄牙）/ Rodovia、BR-（巴西公路编号）\n    - 俄语区 — ulitsa (ul.)、prospekt (pr.)、pereulok（小巷）\n    - 意大利 — Via、Viale、Corso、Vicolo\n    - 荷兰/比利时 — Straat、Weg、Laan\n    - 科索沃 — 同时RR./UL.\n    - 东南亚 — Jalan / Jl.（印尼/马来西亚）/ Thanon（泰国）\n- **双语路牌**\n    - 爱尔兰 — 英语 + 爱尔兰语（Gaeilge，绿底白字，通常斜体）\n    - 芬兰 — 芬兰语 + 瑞典语（沿海瑞典语区）\n    - 威尔士 — 威尔士语（上）+ 英语（下）\n    - 希腊 — 希腊文（黄色）+ 拉丁转写英文（白色，国际公路上）\n    - 法国布列塔尼 — 法语 + 布列塔尼语（Breton）\n    - 保加利亚 — 西里尔字母 + 拉丁字母（无装饰符）\n    - 黑山 — 西里尔字母 + 拉丁字母并用\n    - 加拿大联邦公路 — 英语 + 法语\n    - 南非 — 英语 + 南非荷兰语（Afrikaans）\n    - 新加坡 — 英语为主，偶见中文/马来文/泰米尔文\n- **警示与特殊路牌**\n    - AWAS — 马来西亚（危险），常见于红底白字路牌\n    - BAHAYA — 马来西亚 / 印度尼西亚（危险）\n    - PERINGATAN — 印度尼西亚（警告）\n    - Kura — 新西兰毛利语，意为学校，出现在学校路牌上\n    - GEVAAR — 南非（南非荷兰语，危险）\n    - ACHTUNG — 德国/奥地利/瑞士（注意/当心）\n    - CUIDADO — 西班牙语国家（小心）\n    - ATTENTION — 法语国家（注意）",
      "badgeZh": "人文识别",
      "badgeEn": "Scripts & Languages"
    },
    {
      "id": "architecture",
      "titleZh": "建筑街景、水箱与门牌",
      "titleEn": "Architecture, Tanks & House Numbers",
      "icon": "home",
      "badge": "环境特征",
      "badgeColor": "blue",
      "sections": [
        {
          "titleZh": "全球特色民居与街景风貌",
          "titleEn": "Vernacular Architecture & Urban Landscapes",
          "textZh": "- **欧洲特色民居与街道：**\n    - **安道尔：** 纯天然深灰色花岗岩砖石砌筑外墙，深邃高山峡谷排屋。\n    - **马耳他：** 地中海金黄色石灰岩厚重平顶石屋，配凸出式木制彩色封闭阳台（Gallarija）。\n    - **保加利亚：** 凹凸不平的粗糙深红色陶瓦屋顶。\n    - **瑞士：** 住宅窗户外侧百叶窗数量极多、规整整齐。\n    - **百慕大：** 标志性阶梯状白色防风暴石灰屋顶（收集雨水）。\n- **美洲特色风貌：**\n    - **厄瓜多尔：** 城区街道地面经常铺设六边形地砖。\n    - **玻利维亚：** 城区多鹅卵石路；墙体满是 MAS、EVO 等政治性涂鸦；常见蓝色 Tigo 广告牌。\n    - **秘鲁：** 街道大量三轮机动摩托车；沿海沙漠城镇多用编织芦苇席作为简易围栏。\n    - **乌拉圭：** 沿海城镇常见 Chivito（国宝级牛肉汉堡）招牌。\n    - **智利：** 郊区公路常见亭子状木质/铁质特色公交车站。\n- **亚非特色景观：**\n    - **尼日利亚：** 屋顶经常为五脊歇山顶形镀锌铁皮瓦。\n    - **卢旺达：** 砖混建筑上常有几何花纹镂空通风孔；街面极为干净；摩托车手必须佩戴红色背心与头盔。\n    - **菲律宾：** 满街边三轮摩托车 (Tricycle)，宽阔的白色水泥路面。\n    - **泰国：** 住宅与商铺外常供奉微缩庙宇形状的神龛。\n    - **不丹：** 传统藏式彩绘木窗，路边立有带彩绘的混凝土方块护墩。\n    - **土耳其：** 人行道广泛铺设哑铃形连锁彩色地砖。\n    - **柬埔寨：** 农村多高脚防汛木屋。\n    - **孟加拉国：** 茂密竹林中分布大量绿色铁皮简易平房与细河沙。",
          "textEn": "- **European Vernacular Elements:**\n    - **Andorra:** Natural dark gray unrendered stacked granite walls in deep alpine valleys.\n    - **Malta:** Warm golden limestone sand-colored flat-roof houses with closed wooden balconies (Gallarija).\n    - **Bulgaria:** Wavy, uneven, rough terracotta red roof tiles.\n    - **Switzerland:** Extensive, uniform external window shutters.\n    - **Bermuda:** White stepped limestone roofs engineered for rainwater catchment.\n- **Americas Vernacular Elements:**\n    - **Ecuador:** Urban sidewalks frequently paved with hexagonal interlock tiles.\n    - **Bolivia:** Cobblestone streets, dense political graffiti (MAS, EVO), blue Tigo billboards.\n    - **Peru:** Mototaxis throughout, woven reed mats used as boundary fences in coastal deserts.\n    - **Uruguay:** Frequent signs advertising 'Chivito' steak sandwiches.\n    - **Chile:** Suburban highway bus stops resemble wooden gazebos.\n- **Asia & Africa Vernacular Elements:**\n    - **Nigeria:** Prominent 5-ridge hipped tin corrugated metal roofs.\n    - **Rwanda:** Brick/mortar homes with decorative lattice ventilation perforations, remarkably spotless streets, motorcycle riders wearing red vests and helmets.\n    - **Philippines:** Ubiquitous passenger tricycles, pale concrete roadway slabs.\n    - **Thailand:** Spirit houses resembling miniature ornate temples outside homes and businesses.\n    - **Bhutan:** Traditional painted timber window frames, roadside painted concrete bollards.\n    - **Turkey:** Dumbbell-shaped interlocking paving bricks.\n    - **Cambodia:** Traditional stilt wooden houses in rural floodplains.\n    - **Bangladesh:** Green corrugated tin shacks tucked inside dense tropical bamboo groves with fine river sand."
        },
        {
          "titleZh": "全球石墙地貌全解析",
          "titleEn": "Global Stone Walls Field Guide",
          "textZh": "- **爱沙尼亚诸岛 (萨雷马/穆胡岛)：**\n    - 灰白色石灰岩，长满青苔或地衣，高度齐腰，呈自然粗糙堆砌（*Kiviaed*）。\n    - 伴生：平坦地貌 + 低矮刺柏（Juniper）、松树与白桦；波罗的海灰暗阴天。\n- **瑞典 (厄兰/哥特兰岛)：**\n    - 规整平整的石灰岩薄板堆砌（*Stengärdsgård*）。\n    - 伴生：极开阔的阿尔瓦（Alvar）草原地貌、风车、典型北欧红色木屋（Falun red）。\n- **马耳他 / 戈佐岛：**\n    - 明显的暖黄/金黄色石灰岩（Globigerina），规整方正，风化孔隙明显。\n    - 伴生：无树干旱、仙人掌/刺山柑、左舵行车（左行标志）。\n- **墨西哥尤卡坦半岛 (坎昆/梅里达周边)：**\n    - 粗糙带孔的灰白/黄色石灰岩石块，常作为庭院矮墙（*Albarrada*）。\n    - 伴生：热带干热灌木林（Selva baja）、极度平坦、白水泥平顶房、烈日顶光。\n- **英国与爱尔兰 (尤以爱尔兰西部为甚)：**\n    - 灰黑色花岗岩或页岩，缝隙透光（如康尼马拉/阿伦群岛的透光石墙）。\n    - 伴生：极绿草丘、起伏地形、阴雨潮湿感、左行红尾灯、黄色菱形标牌。\n- **克罗地亚 / 达尔马提亚：**\n    - 浅白灰岩在沿海梯田与山坡蜿蜒（*Suhozid*），纵横交错。\n    - 伴生：喀斯特山地、橄榄树丛、地中海灌木、波光粼粼的亚得里亚海。\n- **意大利 (普利亚/西西里)：**\n    - 浅色石灰岩，普利亚常见于橄榄园与圆顶石屋（*Trulli*）之间。\n    - 伴生：红土壤、百岁粗壮橄榄树、南欧强烈阳光、前排短白牌。\n- **秘鲁 / 玻利维亚高原：**\n    - 泥土与深色圆砾石混筑，或印加风格巨石基座。\n    - 伴生：极高海拔安第斯荒漠草甸（Puna）、羊驼、土坯房（Adobe）。",
          "textEn": "- **Estonian Islands (Saaremaa / Muhu):**\n    - Waist-high rough-stacked mossy gray limestone (*Kiviaed*).\n    - Companions: Flat terrain + low juniper bushes, birches, Baltic overcast skies.\n- **Sweden (Öland / Gotland):**\n    - Flat, thin, slab-like limestone stacked dry walls (*Stengärdsgård*).\n    - Companions: Expansive Alvar barren limestone plains, wooden windmills, Falun red houses.\n- **Malta & Gozo:**\n    - Golden Globigerina limestone blocks, porous and rectangular.\n    - Companions: Arid treeless scrub, prickly pears, left-hand drive road signs.\n- **Yucatán Peninsula (Mexico):**\n    - Rough, pitted yellowish-white limestone garden boundary walls (*Albarrada*).\n    - Companions: Low dry tropical scrub, flat plain, white flat-roof cement houses, harsh noon sun.\n- **Ireland & United Kingdom (Western Ireland):**\n    - Dark gray granite or slate dry-stone walls with see-through light gaps (Connemara/Aran Islands).\n    - Companions: Brilliant emerald rolling pastures, damp overcast mist, yellow diamond signs.\n- **Croatia & Dalmatian Coast:**\n    - White limestone terrace and boundary dry walls (*Suhozid*) winding along slopes.\n    - Companions: Karst scrub, ancient olive orchards, shimmering Adriatic Sea.\n- **Italy (Puglia & Sicily):**\n    - Dry limestone walls encircling olive groves and conical *Trulli* huts.\n    - Companions: Terra rossa red dirt, gnarled ancient olive trees, Italian front short white plates.\n- **Peru & Bolivia Altiplano:**\n    - Earth mortar mixed with dark rounded river boulders, or Incan stonework bases.\n    - Companions: Extreme altitude Andean Puna tussock grass, llamas, adobe brick huts."
        },
        {
          "titleZh": "屋顶水箱与储水罐系统",
          "titleEn": "Rooftop Water Tanks Matrix",
          "textZh": "- **美洲水箱系统：**\n    - **墨西哥：** 特别常见，纯黑色塑料圆筒水箱（有时白色），常标有 `Rotoplas` 品牌名；墙外常见圆形电表。\n    - **巴西：** 特别常见，深海蓝色圆筒水箱，常伴随微透光的网状卫星电视天线。\n    - **玻利维亚：** 白色水箱居多，上面常印有 `Tank-Burg` 标签。\n    - **哥伦比亚：** 黑色桶形储水箱，或巴西式深蓝色水箱。\n    - **多米尼加：** 比墨西哥更宽扁的黑色桶状大水箱。\n    - **厄瓜多尔：** 蓝色圆筒水箱，比巴西尺寸更高瘦，常标有 `Piestigama`。\n- **中东与地中海：**\n    - **以色列：** 白色立式圆柱水桶（通常兼作太阳能热水器），配黑色太阳能集热板。\n    - **巴勒斯坦：** 屋顶密密麻麻排列大量黑色和白色圆水箱。\n    - **约旦 / 阿联酋：** 纯白色水箱（**注意：突尼斯全境屋顶绝无外置储水箱**）。\n    - **阿尔巴尼亚：** 屋顶普遍安装巨大的白色横向卧式圆筒大水箱。\n- **非洲：**\n    - **加纳 / 尼日利亚 / 乌干达 / 肯尼亚：** 巨大黑色塑料水罐，通常架设在建筑物侧面的独立钢架塔楼上。\n    - **博茨瓦纳 / 斯威士兰 / 莱索托 / 南非：** 墨绿色大型户外水罐。\n- **亚洲与欧洲：**\n    - **斯里兰卡：** 特别常见黑色圆柱储水罐。\n    - **印度尼西亚：** 水箱比马来西亚更普遍，常见亮黄色或橙色圆水罐。\n    - **希腊：** 不锈钢金属反光水箱。\n    - **土耳其：** 极其普遍，太阳能集热板上水平架设两个银色小型储水罐。\n    - **意大利：** 西西里岛城镇屋顶常见各类浅色储水罐。\n- **图解速查**：[图寻屋顶水箱识别专题指南](https://www.yuque.com/chaofun/tuxun/water_tank)",
          "textEn": "- **Americas Rooftop Water Tanks:**\n    - **Mexico:** Ubiquitous black plastic cylindrical tanks (occasional white) prominently branded `Rotoplas`; round wall-mounted meters.\n    - **Brazil:** Ubiquitous navy-blue cylindrical drums, frequently accompanied by mesh satellite dishes.\n    - **Bolivia:** White cylindrical tanks branded `Tank-Burg`.\n    - **Colombia:** Black barrel tanks or Brazilian-style navy blue tanks.\n    - **Dominican Republic:** Wider, squat black barrel drums.\n    - **Ecuador:** Taller, slender blue tanks branded `Piestigama`.\n- **Middle East & Mediterranean:**\n    - **Israel:** Vertical white cylindrical solar hot water drums paired with black panels.\n    - **Palestine:** Roofs crowded with dense clusters of black and white plastic drums.\n    - **Jordan / UAE:** White rooftop drums (**Note: Tunisia has NO external rooftop water tanks**).\n    - **Albania:** Prominent horizontal white cylindrical water barrels mounted on flat roofs.\n- **Africa:**\n    - **Ghana / Nigeria / Uganda / Kenya:** Massive black drums mounted on elevated steel truss scaffold towers beside buildings.\n    - **Botswana / Eswatini / Lesotho / South Africa:** Forest green exterior rainwater/storage tanks.\n- **Asia & Europe:**\n    - **Sri Lanka:** Ubiquitous black plastic cylindrical drums.\n    - **Indonesia:** More common than Malaysia; bright yellow or orange storage drums.\n    - **Greece:** Stainless steel metallic water cylinders.\n    - **Turkey:** Solar water heaters with twin small horizontal metal cylinders mounted over panels.\n    - **Italy (Sicily):** Pale or light-gray plastic drums on flat village rooftops.\n- **Visual Guide**: [Tuxun Roof Water Tank Visual Database](https://www.yuque.com/chaofun/tuxun/water_tank)"
        },
        {
          "titleZh": "城市门牌、路名牌与街道设施",
          "titleEn": "House Numbers & Street Signs",
          "textZh": "- **欧洲城市门牌系统：**\n    - **捷克 vs 斯洛伐克：** 捷克门牌以红色或蓝色为底色；斯洛伐克门牌多为纯白底色。\n    - **法国巴黎：** 标志性深蓝底白字搪瓷牌，带有绿色或白色精致滚边。\n    - **奥地利维也纳：** 椭圆形深蓝底白字门牌，开头标注行政区编号（如 `9., Berggasse`，直接定位维也纳 1–23 区）。\n    - **波兰华沙：** MSI 城市导向系统：上部蓝色标注门牌与路名，底部红色横条标注所在社区名称；其他波兰城市多为简单蓝白金属牌。\n    - **匈牙利：** 常见黑白箭头指向牌标注门牌增减方向，带 `u.` (utca)、`út`、`tér` 词缀。\n    - **瑞士：** 蓝底白字长条金属板，街名与门牌号压制一体，极具现代 Helvetica 无衬线风格。\n    - **西班牙马德里：** 手绘彩色瓷砖 (Azulejos) 门牌，描绘与该街道历史典故相关的插画；安达卢西亚等南部地区为白墙嵌黄蓝陶瓷拼贴单字门牌。\n    - **英国与爱尔兰：** 门牌常以房屋名称命名，刻于木牌、石雕或铸铁牌上。\n    - **克罗地亚 vs 塞尔维亚：** 克罗地亚标准化蓝底白字左侧印国徽棋盘盾；塞尔维亚为西里尔字母且不带盾徽。\n- **亚洲门牌系统：**\n    - **韩国：** 蓝底五边形房顶盾牌（尖角朝上），中间为大号数字，上方标有 `-ro` 或 `-gil` 路名。\n    - **日本：** “丁目-番-号”街区制；电线杆或墙角带有深蓝/墨绿色垂直金属长条纵向书写；独栋住宅门口必有住户姓氏的小型“表札”。\n    - **中国台湾：** 绿底白字长方形金属牌为主，中间为醒目大字门牌号；新北市为橘白拼色，台北市为绿白凸字。\n- **美洲门牌与路沿喷漆：**\n    - **巴西：** 许多城市（如圣保罗）门牌直接标注 8 位 CEP 邮政编码（`XXXXX-XXX`），可直接依前几位定位到具体州或城市。\n    - **美国与加拿大：**\n        - **路沿石喷漆 (Curb Numbers)：** 郊区住宅车道入口旁的路沿石上喷印黑色/白色数字（有时带反光底色或大学/球队 Logo）。\n        - **超大四至五位数门牌：** 网格化编排导致郊区住宅门牌动辄 4–5 位数（如 18452），欧洲绝大多数为 1–3 位数。\n- **路沿石涂装颜色：**\n    - 黑白相间：马来西亚、卡塔尔、卢旺达、博茨瓦纳。\n    - 黄黑/红白相间：马来西亚、印尼、泰国转弯或路口处。\n    - 红白相间：突尼斯、摩纳哥。",
          "textEn": "- **European House Number Systems:**\n    - **Czechia vs Slovakia:** Czech house numbers have red or blue backgrounds; Slovak numbers have white backgrounds.\n    - **Paris (France):** Navy blue enamel plaques with crisp white lettering and ornamental green/white borders.\n    - **Vienna (Austria):** Oval navy blue plaques prefixed by municipal district numbers (e.g. `9., Berggasse` identifying districts 1–23).\n    - **Warsaw (Poland):** MSI system: blue upper section with house number & street, red lower band indicating neighborhood name.\n    - **Hungary:** Directional arrow-shaped plates showing house number numbering order with suffixes `u.` (utca), `út`, `tér`.\n    - **Switzerland:** Sleek navy blue metal strip integrating street name and house number in clean Helvetica font.\n    - **Madrid (Spain):** Hand-painted ceramic tile murals (Azulejos) illustrating historical street events; Andalusia features colorful yellow-blue tile numbers.\n    - **United Kingdom & Ireland:** Houses frequently named rather than numbered, engraved on slate, timber, or brass.\n    - **Croatia vs Serbia:** Croatia standard blue plaque features Croatian checkerboard shield on left; Serbia uses Cyrillic script without shield.\n- **Asian House Number Systems:**\n    - **South Korea:** Pentagonal house-shaped blue plates (pointing up) with large white numbers and `-ro` or `-gil` street designations.\n    - **Japan:** Chome-ban-go block numbering system; narrow vertical dark blue/green metal strips stenciled vertically; individual detached homes almost always display family surname plaques (Hyosatsu).\n    - **Taiwan:** Green metal plates with white numbers; New Taipei uses orange-white, Taipei City uses green-white embossed plates.\n- **Americas Numbers & Curb Stencils:**\n    - **Brazil:** House plaques often display the 8-digit postal code CEP (`XXXXX-XXX`), allowing state/city pinpointing.\n    - **United States & Canada:**\n        - **Curb Numbers:** Suburban driveways feature stenciled black-and-white numbers directly on roadside concrete curbs.\n        - **Massive 4–5 Digit Numbers:** Grid-based numbering produces 5-digit addresses (e.g. 18452), contrasting 1–3 digit European numbers.\n- **Painted Curb Markings:**\n    - Black-and-white alternating: Malaysia, Qatar, Rwanda, Botswana.\n    - Red-and-white / Yellow-and-black: Malaysia, Indonesia, Thailand road junctions.\n    - Red-and-white: Tunisia, Monaco."
        }
      ],
      "rawContent": "# 建筑街景\n\n- 安道尔：砖石墙\n- 马耳他：黄色沙石墙\n- 保加利亚：不平的瓦片\n- 阿尔巴尼亚：屋顶白色圆筒状大水箱\n- 尼日利亚：屋顶经常为五脊歇山形\n- 卢旺达：砖混建筑上常有花纹通风口；街面很干净；经常有栏杆或高墙；摩托车手需带红色背心头盔\n- 菲律宾：三轮车,混凝土道路\n- 泰国：经常有类似小庙宇的神龛\n- 不丹：路边混凝土方块护墩\n- 厄瓜多尔：城区可能有六边形地砖\n- 玻利维亚：城区可能有鹅卵石路；多MAS, EVO等政治性涂鸦；蓝色TIgo 广告\n- 巴西：透明卫星天线，深蓝色水箱\n- 墨西哥：大黑色水箱，墙外圆形电表\n- 秘鲁：街道上多三轮车; 有时有编织芦苇席做围栏\n- 乌拉圭：有时有Chivito（乌拉圭国家美食）标志\n- 土耳其：哑铃形地砖贴铺\n- 百慕大：白色屋顶\n- 瑞士：百叶窗数量多\n- 智利：有像亭子一样的公交车站\n- 柬埔寨：有高脚屋子\n- 孟加拉：竹编木栅栏，透明塑料细网，细河沙\n\n石墙\n\n| **区域 / 国家** | **石墙特征与材质** | **伴生景观与快速区分 Meta** |\n| --- | --- | --- |\n| **爱沙尼亚诸岛**\n\n*(萨雷马/穆胡岛)* | 灰白色石灰岩，长满青苔或地衣，高度齐腰，呈自然粗糙堆砌（*Kiviaed*）。 | **平坦地貌 + 低矮刺柏（Juniper）**、松树与白桦；波罗的海灰暗阴天或Gen 3/4夏景。 |\n| **瑞典 (厄兰/哥特兰岛)** | 规整平整的石灰岩薄板堆砌（*Stengärdsgård*）。 | 极开阔的阿尔瓦（Alvar）草原地貌、风车、典型北欧红色木屋（Falun red）。 |\n| **马耳他 / 戈佐岛** | 明显的**暖黄/金黄色石灰岩（Globigerina）**，规整方正，风化孔隙明显。 | **无树干旱**、仙人掌/刺山柑、左舵行车（左行标志）、黄色白牌或长条车牌。 |\n| **尤卡坦半岛 (墨西哥)**\n\n*(坎昆/梅里达周边)* | 粗糙带孔的灰白/黄色石灰岩石块，常作为庭院矮墙（*Albarrada*）。 | **热带干热灌木林（Selva baja）**、极度平坦、白水泥平顶房、烈日顶光。 |\n| **爱尔兰 / 英国**\n\n*(尤以爱尔兰西部为甚)* | 灰黑色花岗岩或页岩，缝隙透光（如康尼马拉/阿伦群岛的透光石墙）。 | **极绿草丘**、起伏地形、阴雨潮湿感、左行红尾灯、黄色菱形标牌（爱尔兰）。 |\n| **克罗地亚 / 达尔马提亚** | 浅白灰岩在沿海梯田与山坡蜿蜒（*Suhozid*），纵横交错。 | **喀斯特山地**、橄榄树丛、地中海灌木、波光粼粼的亚得里亚海。 |\n| **意大利 (普利亚/西西里)** | 浅色石灰岩，普利亚常见于橄榄园与圆顶石屋（*Trulli*）之间。 | **红土壤**、百岁粗壮橄榄树、南欧强烈阳光、前排短白牌。 |\n| **秘鲁 / 玻利维亚高原** | 泥土与深色圆砾石混筑，或印加风格巨石基座。 | **极高海拔安第斯荒漠草甸（Puna）**、羊驼、土坯房（Adobe）、黑白横纹反光柱。 |\n\n# 水箱\n\n# 美洲\n\n- 墨西哥：特别常见，黑色水箱(有时白色)，Rotoplas\n- 巴西：特别常见，蓝色水箱\n- 玻利维亚：白色标签，上面写着“Tank-Burg”\n- 哥伦比亚：黑色桶形水箱，或巴西式蓝色水箱\n- 多米尼加：比墨西哥更宽的黑色桶状水箱\n- 厄瓜多尔：蓝色水箱，比巴西更高些，上面写着“Piestigama”\n\n# 中东\n\n- 以色列：白色圆柱水桶（也是太阳能热水器）\n- 巴勒斯坦：屋顶可能有大量黑色和白色水箱\n- 约旦/阿联酋：白色水箱 （注意突尼斯没有水箱）\n\n# 非洲\n\n- 加纳/尼日利亚/乌干达/肯尼亚: 比美洲大的黑色水箱，通常放在建筑物的一侧或专门建造的塔楼\n- 博茨瓦纳/斯威士兰/莱索托/南非: 绿色大水箱\n\n# 亚洲\n\n- 斯里兰卡：特别常见，黑色水箱\n- 印尼：水箱比马来西亚更常见，有黄/橙色水箱\n\n# 欧洲\n\n- 希腊：金属水箱\n- 土耳其：特别常见，太阳能热水器，通常带两个小水箱\n- 意大利：西西里岛有各种浅色水箱\n\nhttps://www.yuque.com/chaofun/tuxun/water_tank\n\n# 门牌\n\n- 捷克斯洛伐克\n    - 捷克：红或蓝背景颜色\n    - 斯洛伐克: 一般为白色背景颜色门牌\n- 法国:\n    - 巴黎：标志性的深蓝底白字/带白/绿边框搪瓷门牌，字体圆润工整。\n    - 其他省份：蓝底白字很常见，但样式多样；部分老街区有手绘或黑底白字。\n- 奥地利\n    - 维也纳：深蓝底白字椭圆形或长方形牌，门牌号码上方通常写有区号+街名（例如：9., Berggasse），区号能直接精确定位维也纳的具体行政区（1–23区）。\n- **波兰**\n    - [**华沙**](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymVBUQfXARP8dHZ7rJuDoWzKccHAb9HivB4xQMU2WEw&s)：拥有标准化的城市导向系统（MSI）。主体为蓝色背景（标注门牌号与街名），底部为一条红色横条（标注所属区域/社区名）。\n    - 其他波兰城市：常见简单的白底蓝字或蓝底白字金属牌。\n- [**匈牙利**](https://monkeywalker.com/wp-content/uploads/2025/04/3-4.jpg)\n    - 常见黑白箭头/指向牌样式的街名牌或门牌，牌面通常带指向箭头，标注门牌号增减方向，或者带有 `u.`（utca，街）/ `út`（大道）/ `tér`（广场）等字样。\n- **瑞士**\n    - 常见蓝底白字长条形金属门牌，通常直接将“街道名 + 门牌号”压制在同一块牌子上，字体极具现代无衬线风格（如 Helvetica / Frutiger 风格）。\n- **西班牙**\n    - [马德里](https://www.streetsigns.co.il/Images/signs/c5970.jpg)：街名门牌极具特色，顶部或整块为手绘彩色瓷砖（Azulejos），上面绘制有与该街道名称历史相关的图画。\n    - [**安达卢西亚](https://i.etsystatic.com/34533733/r/il/167d00/8119251267/il_300x300.8119251267_rxvk.jpg)等南部地区**：常见白墙配黄/蓝镶边的彩色陶瓷小方块拼成的单字门牌号。\n- **英国与爱尔兰**\n    - 门牌常以房屋名称代替纯数字，通常刻在木牌、石雕或铸铁牌上。\n- **克罗地亚 vs 塞尔维亚**\n    - 克罗地亚：全国标准化蓝底白字，左侧通常印有小型的克罗地亚国徽（棋盘盾徽）。\n    - 塞尔维亚：蓝底白字常见，但通常使用西里尔字母标注街名，且不带克罗地亚国徽。\n- 韩国\n    - 外观呈五边形/房型盾牌状（尖角朝上），蓝底白字，中间为大号数字，上方写有路名（含韩文和英文罗马拼音，如 ...-ro 或 ...-gil）。\n- **日本**\n    - 使用的是“街区方式”（丁目-番-号）。住宅门前或电线杆下常有深蓝/墨绿色细长垂直金属条，纵向书写汉字地名及街区号（如 〇〇町三丁目 5-12）。个人独栋住宅入口处几乎 100% 挂有标注住户姓氏的小型表札（姓名牌）。\n- **台湾**\n    - 门牌多为长方形金属牌，绿底白字或白底绿字最为普遍，上方标注行政区与路街名，中间为醒目大字门牌号。各县市近年有局部特色改版（如新北市橘白相间、台北市绿白凸字）。\n- **巴西（库里蒂巴、圣保罗等）**\n    - 许多巴西城市（如圣保罗）的门牌会直接标出 CEP（8 位邮政编码），格式为 XXXXX-XXX，遇到可直接根据邮编前几位定位到具体州或城市。\n- **美国 & 加拿大**\n    - **路沿石喷漆（Curb Numbers）**：北美郊区住宅区极常见在车道入口旁的路沿石上喷印黑色/白色数字（有时带反光底色或当地大学/体育队 Logo）。\n    - **超大四至五位数门牌**：北美网格状编排系统导致郊区住宅门牌动辄为 4–5 位数（如 18452），而在欧洲绝大多数为从 1 开始递增的 1–3 位数。\n\n# 路沿\n\n- 黑白交替路沿：马来西亚，卡塔尔，卢旺达，博茨瓦纳（各种颜色）\n- **红白/黄黑刷漆：** [**马来西亚**]()、[**印尼**]()、[**泰国**]() 常见在转弯或路口处刷有彩色路缘。\n- 红白路沿：突尼斯\n\n# 路灯\n\n- 捷克/斯洛伐克：路灯下面很粗\n- 希腊：圆形路灯",
      "badgeZh": "环境特征",
      "badgeEn": "Urban Elements"
    },
    {
      "id": "vegetation",
      "titleZh": "植被、地貌与红土分布",
      "titleEn": "Flora, Soil & Landscapes",
      "icon": "trees",
      "badge": "自然地貌",
      "badgeColor": "emerald",
      "sections": [
        {
          "titleZh": "全球红土壤与特征植物分布",
          "titleEn": "Red Soil & Signature Flora",
          "textZh": "- **全球红土壤 (Red Soil) 分布：**\n    - **南美洲：** 巴西南部（巴拉那州 Paraná）、阿根廷东北（米西奥内斯省 Misiones）。\n    - **非洲：** 肯尼亚、乌干达、卢旺达全境红土极其典型。\n    - **大洋洲：** 西澳大利亚（内陆广袤的鲜艳红土地带 Outback）。\n    - **亚洲：** 斯里兰卡（橘红色土壤）、柬埔寨、老挝与泰国南部。\n    - **欧洲：** 希腊、阿尔巴尼亚红土梯田山地；意大利南部普利亚 (Terra Rossa)。\n- **标志性特色植物：**\n    - **桉树 (Eucalyptus)：** 澳大利亚全境绝对优势树种；伊比利亚半岛（葡萄牙/西班牙西北部）亦有大面积人工造林。\n    - **平顶伞形金合欢 (Umbrella Acacia)：** 肯尼亚、坦桑尼亚、南非东部热带草原，以及阿曼干旱山地。\n    - **西班牙苔藓 (Spanish Moss)：** 倒挂在粗壮橡树上的灰白色絮状苔藓，美国东南部（佐治亚、佛罗里达、路易斯安那）绝对排他性特征。\n    - **毛叶菊 (Espeletia / Frailejones)：** 粗壮茎秆与毛茸茸灰白叶片的奇特高山草甸植物，哥伦比亚与委内瑞拉安第斯超高海拔荒漠草甸 (Páramo) 独占。\n    - **白花草地：** 爱沙尼亚夏季常见白色野花草甸。\n    - **白色斑点树皮：** 常见于意大利北部平原林木。\n    - **黄色野菊花：** 斯威士兰公路两侧常见密集黄色小菊花。",
          "textEn": "- **Global Red Soil (Terra Rossa) Regions:**\n    - **South America:** Southern Brazil (Paraná State), Northeast Argentina (Misiones Province).\n    - **Africa:** Ubiquitous vibrant red dirt in Kenya, Uganda, and Rwanda.\n    - **Oceania:** Western Australia (vast interior red dirt Outback).\n    - **Asia:** Sri Lanka (orange-red soil), Cambodia, Laos, and southern Thailand.\n    - **Europe:** Greece and Albania red hillside terraces; Puglia in southern Italy (Terra Rossa).\n- **Signature Botanical Species:**\n    - **Eucalyptus:** Universal dominant tree across Australia; widely planted in Iberian timber forestry (Portugal & Galicia).\n    - **Umbrella Acacia:** Iconic flat-topped trees of Kenya, Tanzania, eastern South Africa savannas, and arid Oman hills.\n    - **Spanish Moss:** Pale grayish-green filaments draping from live oaks, exclusive signature of the Southeastern US (GA, FL, LA).\n    - **Frailejones (Espeletia):** Woolly, thick-stemmed rosettes exclusive to extreme high-altitude alpine tundras (Páramo) in Colombia and Ecuador.\n    - **White Wildflower Meadows:** Estonia summer roadsides.\n    - **White Spotted Tree Trunks:** Northern Italian plains.\n    - **Yellow Daisy Bushes:** Dense yellow daisies lining roadsides across Eswatini."
        },
        {
          "titleZh": "欧美北部森林、树种与土路全面对比",
          "titleEn": "Boreal Forests, Species & Dirt Roads",
          "textZh": "- **欧美阔叶树种差异：**\n    - **北欧：** 以垂枝桦（Silver Birch）为主，树皮为极其明亮纯粹的白色，树干下部伴有明显的黑色深裂纹。\n    - **北美：** 以美洲颤杨（Trembling Aspen）为主，树皮为浅灰绿色或黄绿色，树干笔直、光滑少裂纹。\n- **欧美针叶树种差异：**\n    - **北欧：** 以欧洲赤松（Scots Pine）和挪威云杉（Norway Spruce）为主；欧洲赤松树冠开阔，上半部树干呈现醒目的**橘红色或红棕色**（波罗的海三国至德国东部极密集）。\n    - **北美：** 树种更加多样：\n        - 黑云杉（Black Spruce）：极其瘦长、枝桠稀疏、顶部呈紧凑团簇状。\n        - 短叶松（Jack Pine）：比欧洲赤松更瘦削骨感，整体颜色偏灰。\n        - 花旗松 / 道格拉斯冷杉（Douglas Fir）：身材高耸入云，树皮深褐粗糙，密集分布于太平洋西北地区 (PNW)。\n        - 南方松（Southern Pine）：高大笔直，拥有蓬松的长针叶球，广泛分布于美国东南部。\n- **未铺装土路的材质与颜色：**\n    - **北欧：** 乡村未铺装土路往往铺设有经过压实的坚硬碎石，且经常呈现出独特的**红棕色**或**深灰色**。\n    - **北美：** 偏僻土路往往更加宽敞平缓，泥土颜色多为**浅灰黄色**或**沙土色**，粉尘感显著重于北欧。",
          "textEn": "- **Deciduous Birch vs Aspen:**\n    - **Northern Europe:** Silver Birch dominates, displaying bright chalky-white bark with deep rough black fissures near the base.\n    - **North America:** Trembling Aspen dominates, displaying smooth greenish-gray or yellowish-white bark on tall straight trunks.\n- **Coniferous Species Differences:**\n    - **Northern Europe:** Scots Pine (open umbrella-like crowns with distinctive bright orange-red upper bark) and Norway Spruce.\n    - **North America:** Much broader variety:\n        - Black Spruce: Extremely skinny, scraggly branches, tufted dense crown at the top.\n        - Jack Pine: More skeletal and grayish than European Scots pine.\n        - Douglas Fir: Giant towering trees with rough furrowed dark bark, dominant in Pacific Northwest.\n        - Southern Pine: Tall straight trunks with fluffy tufts of long needles across the US South.\n- **Unpaved Dirt Road Composition:**\n    - **Northern Europe:** Gravel roads are tightly packed crushed stone, exhibiting distinctive reddish-brown or dark charcoal gray tones.\n    - **North America:** Dirt roads are wide, dusty, and graded, showing pale yellowish-gray or sandy tan hues with heavier dust plumes."
        },
        {
          "titleZh": "特殊地貌与天象线索",
          "titleEn": "Unusual Terrains & Sky Quirks",
          "textZh": "- **道路胡椒盐质地沥青 (Salt-and-Pepper Pavement)：**\n    - 沥青路面粗糙，黑白灰碎石颗粒分明，如撒满黑胡椒与食盐：高频出现在**土耳其**与**美国得克萨斯州**。\n- **断裂天空 (Sky Rift)：**\n    - 天空全景拼接缝出现明显的阶梯状错位裂纹：经典三大国为**塞内加尔、阿尔巴尼亚、黑山**。\n- **平顶大山 (Flat-Topped Mesas)：**\n    - 广袤山谷中突兀耸立着巨大的平顶方山：**莱索托**标志性高原地貌。\n- **终年阴天与起伏草丘：**\n    - **乌拉圭：** 极其平缓低矮的起伏草丘，天空几乎100%是沉重厚重的灰白阴天。\n    - **法罗群岛：** 极度湿润无树的碧绿草山，伴随雾气与阴雨。",
          "textEn": "- **Salt-and-Pepper Road Surface:**\n    - Rough asphalt with distinct black, white, and gray crushed stone aggregate: prominent in **Turkey** and **Texas, USA**.\n- **Sky Rift (Stitching Seam Glitch):**\n    - Visible diagonal or stepped tearing line in the sky stitching: iconic trio **Senegal, Albania, Montenegro**.\n    - **Flat-Topped Mesas & Plateaus:**\n    - Dramatic flat-topped table mountains towering over grassy valleys: signature of **Lesotho**.\n- **Overcast Skies & Rolling Meadows:**\n    - **Uruguay:** Low rolling pastures under almost permanent pale overcast cloud cover.\n    - **Faroe Islands:** Treeless green volcanic slopes wrapped in damp mist and marine fog."
        }
      ],
      "rawContent": "# 植被地貌\n\n# 土壤\n\n- 红土分布地区\n    - 美洲：巴西，阿根廷Misiones\n    - 非洲：肯尼亚，卢旺达，乌干达\n    - 澳洲：澳西\n    - 亚洲：斯里兰卡（橘红）；柬泰老\n    - 欧洲：希腊，阿尔巴尼亚\n\n# 欧美北部森林比较\n\n- **阔叶树**\n    - **北欧：** 桦树为主，树皮呈现非常明亮纯粹的白色，且树干下部常有明显的黑色裂纹。\n    - **北美：** 常见颤杨，树皮浅灰绿色或黄绿色，树干更笔直、光滑。\n- **针叶树**\n    - 北欧： 多为欧洲赤松（Scots Pine）和挪威云杉（Norway Spruce）。\n        - 欧洲赤松的树冠通常比较开阔，树干上半部往往呈现出明显的**橘红色或红棕色**。分布在波罗的海三国为中心的区域，直至德国东部。\n    - **北美：** 种类更杂。\n        - 黑云杉（Black Spruce）：极其瘦长、枝叶稀疏、顶部呈簇状\n        - 短叶松（Jack Pine）比欧洲赤松更“骨感”且颜色偏灰。\n        - 道格拉斯冷杉（Douglas fir）:特别高，深色树干树叶，多分布在太平洋西北地区\n        - 南方松（Southern Pine）：很高，蓬松叶子，分布美国东南\n- **土路的材质与颜色：**\n    - 北欧：未铺装的土路往往铺设有碎石，且经常呈现出一种独特的**红棕色**或**深灰色**。\n    - **北美：**土路往往更宽泛，泥土颜色多为**浅灰黄色**或**沙土色**，路面更平滑、粉尘感更重。\n\n# 植被\n\n- 桉树：大面积分布在澳大利亚，欧洲的葡萄牙和西班牙也有\n- 非洲金合欢树（平顶）：肯尼亚，南非东部，阿曼较多\n- 西班牙藓（Spanish Moss）：美国东南部\n- 白花：爱沙尼亚\n- **Espeletia：**毛茸茸叶片的特殊植物，常在哥伦比亚或附近出现\n- 白色斑点树：常见意大利北部\n- 黄色菊花：斯威士兰\n- https://www.youtube.com/watch?v=7ZC3DmBVRJI\n\n# 其它特征\n\n- 道路胡椒盐质地：土耳其，美国德克萨斯\n- 断裂天空: 塞内加尔，阿尔巴尼亚，黑山\n- 平顶大山：莱索托\n- 阴天：乌拉圭",
      "badgeZh": "自然地貌",
      "badgeEn": "Nature & Soil"
    },
    {
      "id": "road-numbers",
      "titleZh": "公路编号系统 (E路/BR/M路)",
      "titleEn": "Road Numbering Systems",
      "icon": "navigation",
      "badge": "路网规则",
      "badgeColor": "cyan",
      "sections": [
        {
          "titleZh": "欧洲国际公路系统 E-Roads",
          "titleEn": "European E-Roads Network",
          "textZh": "- **两位数 E+数字 公路规律：**\n    - **奇数（E1, E5, E15, E75...）：** 南北走向主干道。数字越小越偏西，数字越大越往东。\n        - 极小号（E1、E5）：位于最西侧的葡萄牙、西班牙、法国。\n        - 中间号（E25、E35、E45）：贯穿西欧与中欧（荷兰–德国–意大利–瑞士）。\n        - 较大号（E75、E85）：贯穿偏东的芬兰、波罗的海、中东欧、巴尔干、希腊、土耳其。\n    - **偶数（E20、E40、E80...）：** 东西走向主干道。数字越小越靠北，数字越大越靠南。\n        - 小号（E10、E20）：靠北横穿北欧三国、波罗的海与德国北部。\n        - 中号（E40、E50）：中纬度横穿法国、德国、中东欧至乌克兰。\n        - 大号（E80）：南部横贯西班牙、意大利、巴尔干、希腊与土耳其。\n- **三位数 E 路网格规律：**\n    - 第 1 位数字 ≈ 北侧最近参考 A 级主干的十位数。\n    - 第 2 位数字 ≈ 西侧最近参考 A 级主干的十位数。\n    - 第 3 位数字为顺序编号（例如 E7xx 大致位于 E70 东西干线以南的保加利亚、罗马尼亚、土耳其一带）。",
          "textEn": "- **2-Digit European E-Road Numbering Logic:**\n    - **Odd Numbers (E1, E5, E15, E75...):** North-South corridors. Numbers increase from West to East.\n        - Low numbers (E1, E5): Far west corridors (Portugal, Spain, France).\n        - Mid numbers (E25, E35, E45): Central corridors (Netherlands, Germany, Switzerland, Italy).\n        - High numbers (E75, E85): Eastern corridors (Finland, Baltic States, Balkans, Greece, Turkey).\n    - **Even Numbers (E20, E40, E80...):** East-West corridors. Numbers increase from North to South.\n        - Low numbers (E10, E20): Northern corridors (Norway, Sweden, Finland, Baltic coast).\n        - Mid numbers (E40, E50): Mid-latitude corridors (France, Germany, Czechia, Ukraine).\n        - High numbers (E80): Southern corridors (Spain, Italy, Balkans, Greece, Turkey).\n- **3-Digit E-Road Grid Logic:**\n    - 1st digit ≈ Tens digit of the reference E-corridor to the north.\n    - 2nd digit ≈ Tens digit of the reference E-corridor to the west.\n    - 3rd digit is a sequential route number (e.g. E7xx sits south of E70 in Romania, Bulgaria, Turkey)."
        },
        {
          "titleZh": "突尼斯、俄罗斯、巴西与美国公路网络",
          "titleEn": "Tunisia, Russia, Brazil & US Networks",
          "textZh": "- **突尼斯公路编号系统：**\n    - **Axx 高速公路：** 红色标牌（如 A1 又被称为“泛非高速 Trans-African Highway”）。\n    - **Pxx 国道：** 红色标牌主干国道。\n    - **Cxx 区域公路：** 绿色标牌区域干线。\n- **俄罗斯联邦公路编号系统：**\n    - **M-公路：** 从莫斯科向外辐射的最高等级联邦干线（如 M4 南下通往黑海度假区，M11 通往圣彼得堡）。\n    - **A-公路：** 次一级国家主干道（如 A100–A110 为莫斯科外围环线，A146–A164 位于西南部）。\n    - **P-公路 (R-公路)：** 重要联邦与区域连接干线。\n- **巴西联邦公路 (BR-xxx)：**\n    - **BR-0xx：** 从首都巴西利亚 (Brasília) 呈放射状向外发散。\n    - **BR-1xx：** 南北纵贯主干道（如 BR-101 沿大西洋海岸线纵贯全境）。\n    - **BR-2xx：** 东西横贯主干道。\n    - **BR-3xx：** 斜向交叉对角干线公路。\n    - **BR-4xx：** 连接两条主要公路的联络线。\n    - **州级公路：** 以各州缩写开头（如圣保罗州 `SP-280`，米纳斯州 `MG-050`）。\n- **美国州际公路系统 (Interstate Highway System)：**\n    - **偶数东西向：** 越往南数字越小（如 I-10 沿墨西哥湾），越往北数字越大（如 I-90 贴近五大湖）。\n    - **奇数南北向：** 越往西数字越小（如 I-5 沿太平洋），越往东数字越大（如 I-95 沿大西洋）。",
          "textEn": "- **Tunisia Highway System:**\n    - **Axx Motorways:** Red badges (A1 known as the 'Trans-African Highway').\n    - **Pxx National Routes:** Red badges for primary national routes.\n    - **Cxx Regional Routes:** Green badges for secondary regional routes.\n- **Russia Federal Highway Network:**\n    - **M- Highways:** Primary federal arteries radiating from Moscow (e.g. M4 to Black Sea, M11 to St. Petersburg).\n    - **A- Highways:** Secondary federal routes (A100–A110 Moscow ring roads, A146–A164 in southwest).\n    - **R- (P-) Highways:** Regional federal connector corridors between administrative capitals.\n- **Brazil Federal Highways (BR-xxx):**\n    - **BR-0xx:** Radial corridors emanating outwards from capital Brasília.\n    - **BR-1xx:** North-South trunk highways (BR-101 hugging the Atlantic coast).\n    - **BR-2xx:** East-West trunk highways.\n    - **BR-3xx:** Diagonal cross-country highways.\n    - **BR-4xx:** Connector highways linking major trunks.\n    - **State Routes:** Prefixed by 2-letter state codes (e.g. `SP-280` in São Paulo, `MG-050` in Minas Gerais).\n- **United States Interstate System:**\n    - **Even Numbers (East-West):** Lower numbers south (I-10 along Gulf), higher numbers north (I-90 near Canada).\n    - **Odd Numbers (North-South):** Lower numbers west (I-5 on Pacific), higher numbers east (I-95 on Atlantic)."
        },
        {
          "titleZh": "澳大利亚干线与命名公路",
          "titleEn": "Australia Named Highways",
          "textZh": "- **澳大利亚命名干线公路精要：**\n    - **Stuart Highway (斯图尔特公路 A1 / A87)：** 纵贯红色中部荒漠的传奇干线，连接阿德莱德–爱丽丝泉–达尔文。\n    - **Eyre Highway (艾尔公路 A1)：** 横贯纳拉伯荒原的大动脉，连接西澳诺斯曼 (WA) 与南澳奥古斯塔港 (SA)。\n    - **Hume Highway (休姆高速 M31)：** 连接悉尼与墨尔本的全国最繁忙经济命脉。\n    - **Great Northern Highway (大北方公路 1 / 95)：** 纵贯西澳荒原，连接珀斯与北部温德姆。\n    - **Bruce Highway (布鲁斯公路 M1 / A1)：** 沿昆士兰东海岸纵贯，连接凯恩斯与布里斯班。\n    - **Barrier Highway (巴里尔公路 A32)：** 穿越南澳与新南威尔士内陆，连接悉尼与阿德莱德。\n    - **Midland Highway (米德兰公路 1)：** 塔斯马尼亚岛南北纵贯中轴线（霍巴特–朗塞斯顿）。\n    - **Lasseter Highway (拉塞特公路 4)：** 从斯图尔特公路分岔深入红色心脏乌鲁鲁 (Uluru)。\n    - **Pacific Highway (太平洋高速 A1)：** 悉尼至布里斯班沿海高速。\n    - **Princes Highway (王子公路 A1 / M1)：** 悉尼–墨尔本–阿德莱德壮丽沿海干线。",
          "textEn": "- **Australia Iconic Named Highways:**\n    - **Stuart Highway (A1 / A87):** Epic transcontinental spine slicing through the Red Centre from Adelaide to Alice Springs and Darwin.\n    - **Eyre Highway (A1):** Crosses the vast Nullarbor Plain, connecting Norseman (WA) to Port Augusta (SA).\n    - **Hume Highway (M31):** Busiest commercial corridor connecting Sydney and Melbourne.\n    - **Great Northern Highway (1 / 95):** Slices through Western Australia outback from Perth to Wyndham.\n    - **Bruce Highway (M1 / A1):** Queensland coastal corridor from Cairns down to Brisbane.\n    - **Barrier Highway (A32):** Outbacks of SA and NSW connecting Sydney to Adelaide via Broken Hill.\n    - **Midland Highway (Route 1):** Tasmania central corridor connecting Hobart to Launceston.\n    - **Lasseter Highway (Route 4):** Branches off Stuart Hwy directly toward Uluru.\n    - **Pacific Highway (A1):** Coastal expressway between Sydney and Brisbane.\n    - **Princes Highway (A1 / M1):** Coastal highway linking Sydney, Melbourne, and Adelaide."
        }
      ],
      "rawContent": "# 道路编号\n\n### E+数字： 欧洲国际公路网，跨很多国家，包括欧盟国家、白俄罗斯、俄罗斯、甚至部分中亚国家\n\n- 两位数E路\n    - 奇数（E1, E5, E15, E75…）定义为南北向主干路。数字越小，越偏西；数字越大，越往东。超小号：E1、E5 这类，在西边（葡萄牙、西班牙、法国一带）。中间号：E25、E35、E45，约在中西欧到中欧一带（法国–德国–意大利–瑞士–荷兰等）。大点的奇数（E75、E85）：更多出现在中东欧、巴尔干、希腊、土耳其、芬兰等偏东的地方。\n    - 偶数（E20、E40、E80…）定义为东西向主干。数字越小，越靠北；数字越大，越靠南。E10、E20：比较靠北，经常出现在北欧（挪威、瑞典、芬兰）再向下到德国、波兰、波罗的海国家。E40、E50：偏中纬度，从法国、德国到中东欧、乌克兰等地。E80：非常靠南，更多跟西班牙、意大利、巴尔干、希腊、土耳其等南欧国家挂钩。\n- 三位数E路\n    - 第 1 位 ≈ 北边最近的参考 A 路的十位数。第 2 位 ≈ 西边最近的参考 A 路的十位数。第 3 位：序号。例如E7x：你大概在“北边是 E70 段东西向线”的附近国家（比如保加利亚、罗马尼亚、土耳其一带）\n\n### 突尼斯：\n\n- Axx 高速公路，路标红色， A1又被称为“Trans-African Highway”；\n- Pxx 国道，路标红色；\n- Cxx 区域公路，路标绿色\n\n### 俄罗斯：\n\n- M1-M10 国家主干道，多接莫斯科、大城市；\n- Axx 次一级国家主干道: A100-110 莫斯科郊区；A146-164 西南部\n- Рxx (P/Rxx) 重要联邦/区域公路\n\n### 巴西\n\n- 州公路：州缩写+路号 （SP-280）\n- 国家高速：BR-XXX;\n    - 000-099: 从Brasilia辐射往外\n    - 100-199: N-S\n    - 200-299: E-W\n    - 300-399: Diagonal\n    - 400-499: Connects 2 highways\n\n### 澳大利亚\n\n- Stuart Highway (斯图尔特公路) A1/A87 阿德莱德 - 爱丽丝泉 - 达尔文\n- Eyre Highway (艾尔公路) A1 诺斯曼 (WA) - 奥古斯塔港 (SA)\n- Hume Highway (休姆高速) M31 悉尼 - 墨尔本\n- Great Northern Highway (大北方公路) 1/95 珀斯 - 温德姆\n- Bruce Highway (布鲁斯公路) M1/A1 Cairns - 布里斯班\n- Barrier Highway (巴里尔公路) A32 悉尼 - 阿德莱德\n- Midland Highway (米德兰公路) 1 塔斯马尼亚\n- Lasseter Highway (拉塞特公路) 4 斯图尔特公路 - 乌鲁鲁\n- Pacific Highway (太平洋高速) A1 悉尼 - 布里斯班\n- Princes Highway (王子公路) A1 / M1 悉尼 - 墨尔本 - 阿德莱德",
      "badgeZh": "路网规则",
      "badgeEn": "Road Numbering"
    },
    {
      "id": "phones",
      "titleZh": "电话号码与各州区号",
      "titleEn": "Telephone Numbers & Area Codes",
      "icon": "phone",
      "badge": "精准定位",
      "badgeColor": "green",
      "sections": [
        {
          "titleZh": "国际区号与北美 NANP 系统",
          "titleEn": "Country Codes & North American NANP",
          "textZh": "- **重要国际电话区号：**\n    - `+44`：英国 (United Kingdom)\n    - `+55`：巴西 (Brazil)\n    - `+62`：印度尼西亚 (Indonesia，海岛定位神器)\n    - `+33`：法国；`+49`：德国；`+39`：意大利；`+34`：西班牙；`+81`：日本；`+82`：韩国。\n- **北美号码计划 (NANP - 美加格式)：**\n    - 美国、加拿大及部分加勒比岛屿统一采用 10 位格式：`(XXX) XXX-XXXX` 或 `XXX-XXX-XXXX`。\n    - **免费服务电话：** 若看到 `1-800`、`1-888`、`1-877`、`1-866`，均为全美免费客服热线，不含地理区域信息。",
          "textEn": "- **Crucial Country Calling Codes:**\n    - `+44`: United Kingdom\n    - `+55`: Brazil\n    - `+62`: Indonesia (vital clue for island identification)\n    - `+33`: France; `+49`: Germany; `+39`: Italy; `+34`: Spain; `+81`: Japan; `+82`: South Korea.\n- **North American Numbering Plan (NANP):**\n    - Standard 10-digit format across US & Canada: `(XXX) XXX-XXXX` or `XXX-XXX-XXXX`.\n    - **Toll-Free Numbers:** Prefixes `1-800`, `1-888`, `1-877`, `1-866` are non-geographic customer lines."
        },
        {
          "titleZh": "欧洲主要国家电话排布格式",
          "titleEn": "European Phone Number Formats",
          "textZh": "- **欧洲主要国家电话书写规范：**\n    - **英国：** 通常以 `0` 开头，总共 11 位数字。\n        - 格式：`0XXXX XXXXXX` 或 `0XX XXXX XXXX`。\n        - 标志：`01` 或 `02` 开头为固定座机电话，`07` 开头通常为手机号码。\n    - **法国：** 固定为 10 位数字，通常以 `0` 开头，每两位一组。\n        - 格式：`0X XX XX XX XX`。\n    - **德国：** 长度不固定，通常以 `0` 开头，区号和号码之间常用斜杠或空格隔开。\n        - 格式：`0XXX/XXXXXX` 或 `0XX XXXXXXX`。\n    - **意大利：** 以 `0` 开头（座机）或 `3` 开头（手机），长度为 9–11 位。\n        - 格式：`0X XXXXXXX` 或 `3XX XXXXXXX`。\n    - **西班牙：** 固定为 9 位数字，通常写成三组 `9XX XX XX XX`。\n        - 标志：`9X` 或 `8X` 为座机，`6X` 或 `7X` 为手机。",
          "textEn": "- **European Phone Number Formats:**\n    - **United Kingdom:** 11-digit numbers starting with `0`.\n        - Format: `0XXXX XXXXXX` or `0XX XXXX XXXX`.\n        - Clues: `01` or `02` indicates landlines; `07` indicates mobile phones.\n    - **France:** Fixed 10-digit format starting with `0`, written in pairs of two.\n        - Format: `0X XX XX XX XX`.\n    - **Germany:** Variable length starting with `0`, separated by forward slash or space.\n        - Format: `0XXX/XXXXXX` or `0XX XXXXXXX`.\n    - **Italy:** Starts with `0` (landline) or `3` (mobile), length 9–11 digits.\n        - Format: `0X XXXXXXX` or `3XX XXXXXXX`.\n    - **Spain:** Fixed 9-digit format written in blocks of two.\n        - Format: `9XX XX XX XX` (landline) or `6XX XX XX XX` (mobile)."
        },
        {
          "titleZh": "拉美、亚洲及大洋洲区号地图",
          "titleEn": "Latin America, Asia & Oceania Area Codes",
          "textZh": "- **巴西 2 位数 DDD 区号（顺时针螺旋规则）：**\n    - 手机格式为 `(XX) 9XXXX-XXXX`。\n    - `1x`：圣保罗州 (São Paulo，首府 11)；`2x`：里约热内卢与圣埃斯皮里图。\n    - `3x`：米纳斯吉拉斯 (Minas Gerais)；`4x`：巴拉那与圣卡塔琳娜；`5x`：南里奥格兰德。\n    - `6x`：中西部（巴西利亚 61、戈亚斯、马托格罗索）；`7x/8x`：东北部沿海各州；`9x`：北部亚马逊雨林各州。\n- **墨西哥国内区号：**\n    - 统一为 10 位数字：`XX XXXX XXXX` 或 `(XX) XXXX XXXX`。\n    - `33`：瓜达拉哈拉 (Guadalajara)；`55 / 56`：墨西哥城 (CDMX)；`81`：蒙特雷 (Monterrey)。\n- **阿根廷：** 首都布宜诺斯艾利斯固定区号为 `011`，格式 `(011) XXXX-XXXX`。\n- **印度尼西亚商铺招牌区号：**\n    - `02x`：爪哇岛西部（雅加达 021、万隆 022）。\n    - `03x`：爪哇岛东部与巴厘岛 (Bali)。\n    - `04x`：苏拉威西岛 (Sulawesi)；`05x`：加里曼丹岛 (Kalimantan)；`06x / 07x`：苏门答腊岛 (Sumatra)。\n- **日本区号：** 从北向南递增：北海道 `01x`，关东/东京 `03 / 04x`，关西/大阪 `06x`，南至九州冲绳 `09x`。\n- **韩国区号：** 首都首尔为 `02`，其他各道为 `03x–06x`。\n- **泰国与澳大利亚：**\n    - 泰国手机 10 位：`08X-XXX-XXXX`。\n    - 澳大利亚 10 位：座机 `02 / 03 / 07 / 08`，手机统一以 `04` 开头（如 `04XX XXX XXX`）。",
          "textEn": "- **Brazil 2-Digit DDD Regional Codes (Clockwise spiral rule):**\n    - Mobile format: `(XX) 9XXXX-XXXX`.\n    - `1x`: São Paulo (capital 11); `2x`: Rio de Janeiro & Espírito Santo.\n    - `3x`: Minas Gerais; `4x`: Paraná & Santa Catarina; `5x`: Rio Grande do Sul.\n    - `6x`: Central-West (Brasília 61, Goiás, Mato Grosso); `7x/8x`: Northeast coast; `9x`: Northern Amazon.\n- **Mexico Area Codes:**\n    - 10-digit format: `XX XXXX XXXX` or `(XX) XXXX XXXX`.\n    - `33`: Guadalajara; `55 / 56`: Mexico City; `81`: Monterrey.\n- **Argentina:** Capital Buenos Aires uses area code `011` (`(011) XXXX-XXXX`).\n- **Indonesia Shop Sign Area Codes:**\n    - `02x`: Western Java (Jakarta 021, Bandung 022).\n    - `03x`: Eastern Java & Bali.\n    - `04x`: Sulawesi; `05x`: Kalimantan (Borneo); `06x / 07x`: Sumatra.\n- **Japan Area Codes:** Increases from North to South: Hokkaido `01x`, Tokyo `03`, Osaka `06`, down to Kyushu/Okinawa `09x`.\n- **South Korea:** Capital Seoul uses `02`; other provinces `03x–06x`.\n- **Thailand & Australia:**\n    - Thailand mobile: `08X-XXX-XXXX`.\n    - Australia 10-digit: Landlines `02/03/07/08`, mobile phones prefixed by `04` (`04XX XXX XXX`)."
        }
      ],
      "rawContent": "# 电话号码及其区号\n\n- 一些国际区号\n    - `+44`：英国\n    - `+55`：巴西\n    - `+62`：印尼（非常有用，因为印尼岛屿众多）\n- **北美地区:** 北美电话号码计划（NANP）的国家格式高度统一。\n    - **美国 & 加拿大：** 采用 10 位数字格式。\n        - **格式：** `(XXX) XXX-XXXX` 或 `XXX-XXX-XXXX`。\n        - **关键点：** 如果看到 **1-800**，那是免费服务电话。\n- **欧洲地区:**  欧洲的号码长度不一，但拨号代码（+XX）和特定的分隔符（一般用空格）很有辨识度。\n    - **英国：** 通常以 `0` 开头，总共 11 位。\n        ◦ **格式：** `0XXXX XXXXXX` 或 `0XX XXXX XXXX`。\n        ◦ **标志：** `01` 或 `02` 开头通常是座机，`07` 开头通常是手机\n    - **法国：** 固定为 10 位数字，通常以 `0` 开头，每两位一组。\n        ◦ **格式：** `0X XX XX XX XX`。\n    - **德国：** 长度不固定，通常以 `0` 开头，区号和号码之间常用斜杠或空格。\n        ◦ **格式：** `0XXX/XXXXXX` 或 `0XX XXXXXXX`。\n    - **意大利：** 以 `0` 开头（座机）或 `3` 开头（手机），长度 9-11 位。\n        ◦ **格式：** `0X XXXXXXX` 或 `3XX XXXXXXX`。\n    - **西班牙：** 固定的 9 位数字。\n        ◦ **格式：** `9X XXXXXXX` (座机) 或 `6X XXXXXXX` (手机)，通常写成 `9XX XX XX XX`。\n- **拉丁美洲**\n    - **巴西：** 手机号码通常带有两位数的区号（DDD），后面跟 9 位数字。\n        ◦ **格式：** `(XX) 9XXXX-XXXX`。\n        ◦ DDD: 为两位数，从东南部的里约和圣保罗开始，按逆时针方向大致向北和向西增\n    - **墨西哥：** 统一为 10 位数字\n        - **格式：** `XX XXXX XXXX` 或 `(XX) XXXX XXXX`。\n        - 区号通常是 2 或 3 位:\n            - 33： 瓜达拉哈拉 (Guadalajara);\n            - 55 / 56： 墨西哥城 (Mexico City);\n            - 81： 蒙特雷 (Monterrey)\n    - **阿根廷：** 经常看到区号 `011`（布宜诺斯艾利斯）。\n        ◦ **格式：** `(0XX) XXXX-XXXX`。\n- **亚洲及大洋洲**\n    - **日本：** 通常以 `0` 开头，中间有连字符。\n        ◦ **格式：** `0X-XXXX-XXXX` 或 `0XXX-XX-XXXX`。\n    - **韩国：** 也是以 `0` 开头。\n        ◦ **格式：** `02-XXX-XXXX`（首尔）或 `0XX-XXX-XXXX`。\n    - **印度尼西亚** (Indonesia): 印尼的区号通常写在商铺招牌上。\n        - 02x： 爪哇岛 (Java);\n        - 04x： 苏拉威西岛 (Sulawesi);\n        - 05x： 加里曼丹岛 (Kalimantan)\n        - 06x： 苏门答腊岛 (Sumatra);\n    - **泰国：** 手机通常是 10 位。\n        ◦ **格式：** `08X-XXX-XXXX` 或 `0XX-XXX-XXXX`。\n    - **澳大利亚：** 通常是 10 位数字，以 `0` 开头。\n        ◦ **格式：** `0X XXXX XXXX` 或手机 `04XX XXX XXX`。",
      "badgeZh": "精准定位",
      "badgeEn": "Area Codes"
    },
    {
      "id": "misc",
      "titleZh": "街景版权年份与冷门技巧",
      "titleEn": "Copyright Years & Quirky Metas",
      "icon": "help-circle",
      "badge": "高阶秘籍",
      "badgeColor": "orange",
      "sections": [
        {
          "titleZh": "街景版权年份研判秘籍",
          "titleEn": "Street View Copyright Years Metas",
          "textZh": "- **街景版权年份核心研判原则：**\n    - **Gen 4 镜头：** 极高清画质，页面底部的版权年份（如 ©2024 Google）与实际拍摄年份高度一致，极其可靠。\n    - **Gen 3 镜头：** 老旧街景经 Google 云端重新渲染和重新拼缝后，版权年份可能延后，不可作为绝对唯一依据。\n- **高频国家版权年限速杀：**\n    - **希腊：** 老街景基本只有 2011 / 2012 年拍摄，近年轻微补充 2019 / 2023 / 2024 年，**绝无 2021 或 2022 年街景**。\n    - **德国：** 拥有海量 2023 年全新更新街景。\n    - **捷克 vs 斯洛伐克：** 捷克拥有大量 2019 年街景。\n    - **芬兰 vs 瑞典：** 芬兰覆盖大量 2022 / 2023 年更新街景（极少 2024 年）；瑞典以 2021 年居多。\n    - **卡塔尔 vs 阿联酋：** 卡塔尔多 2023 年街景；阿联酋多 2022 与 2024 年街景。\n    - **马来西亚：** **绝无 2023 年街景**。\n    - **菲律宾 (Luzon vs Mindanao)：** 2023 年常见于北部吕宋岛 (Luzon)；2022 年常见于南部棉兰老岛 (Mindanao)。",
          "textEn": "- **Copyright Year Fundamental Rules:**\n    - **Gen 4 Cameras:** Extremely reliable. Bottom copyright stamp (e.g. ©2024 Google) matches actual capture year closely.\n    - **Gen 3 Cameras:** Old imagery may receive updated copyright stamps during cloud stitching updates.\n- **High-Frequency National Copyright Patterns:**\n    - **Greece:** Older coverage almost universally 2011/2012, with recent updates in 2019/2023/2024 (**no 2021/2022 coverage**).\n    - **Germany:** Vast volume of new 2023 coverage.\n    - **Czechia vs Slovakia:** Czechia has extensive 2019 coverage.\n    - **Finland vs Sweden:** Finland heavily updated in 2022/2023 (few 2024); Sweden predominantly 2021.\n    - **Qatar vs UAE:** Qatar predominantly 2023; UAE predominantly 2022 and 2024.\n    - **Malaysia:** **Zero 2023 street view coverage**.\n    - **Philippines (Luzon vs Mindanao):** 2023 common in northern Luzon; 2022 common in southern Mindanao."
        },
        {
          "titleZh": "马来西亚“数字 2”法则与冷门技巧",
          "titleEn": "Rule of Two in Malaysia & Pro Metas",
          "textZh": "- **马来西亚“数字 2”全能秒杀法则：**\n    - **两大地理板块：** 西马半岛与东马婆罗洲（沙巴与砂拉越）。\n    - **双白实线：** 道路中央常画有两条平行的纯白色实线。\n    - **两段式车牌：** 普通民用车牌为两段式黑色短车牌（白字分为两部分）。\n- **极速排查实战心法：**\n    - **南半球 vs 北半球：** 观察正午太阳方位；若太阳在正北，必定位于南半球或北半球低纬度热带；若太阳在正南，必定位于北半球温带。\n    - **热带植被辨析：** 拉美雨林植被更加浓密葱茏多样；西非热带植被色调偏黄且沙尘较重；东南亚乡村棕榈树与竹林极其密集。\n    - **公路护栏螺栓：** 欧洲护栏与立柱连接处的六角螺栓与反光垫片亦能辅证国别。",
          "textEn": "- **The 'Rule of Two' in Malaysia:**\n    - **Two Landmasses:** Peninsular Malaysia and Borneo (Sabah & Sarawak).\n    - **Two Solid White Lines:** Road centerlines frequently painted as double solid white lines.\n    - **Two-Segment Plates:** Standard civilian vehicles carry short black plates with two character blocks.\n- **Competitive Pro Metas:**\n    - **Hemisphere Sun Check:** Check midday solar angle. Sun due north indicates Southern Hemisphere (or deep tropics); Sun due south indicates Northern Hemisphere temperate zone.\n    - **Tropical Vegetation Comparison:** Latin American jungle is dense, lush, and multi-layered; West Africa shows sand-dusted foliage; Southeast Asia is crowded with dense oil palms and bamboo groves.\n    - **Guardrail Bolt Metas:** Hexagonal bolts and reflector spacers connecting European W-beams to posts offer additional national verification."
        }
      ],
      "rawContent": "# 版权\n\n> **Gen 4更可靠，版权年和图像年基本一致；Gen 3可能由于再处理导致版权年靠后**\n> \n- 希腊: 只有2019, 2023, and 2024 ; 没有 2021 or 2022\n- 德国: 很多2023\n- 捷克 vs. 斯洛伐克: 捷克多2019\n- 芬兰: 多2022/2023 ; 少2024\n- 马来西亚: 没有 2023\n- 菲律宾 (Luzon vs Mindanao): 2023 常见于 Luzon,  2022 常见于 Mindanao\n- 卡塔尔 vs. UAE: 卡塔尔多 2023,  UAE多2022和2024\n- 瑞典 vs 芬兰: 瑞典多2021,  芬兰多 2022+\n\n# 其它\n\n- 马来西亚的线索与数字“2”联系（两个大岛、两条中白线、两块白色车牌）",
      "badgeZh": "高阶秘籍",
      "badgeEn": "Pro Tips"
    }
  ],
  "flashcards": [
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
    },
    {
      "id": "fc-16",
      "questionZh": "门牌上‘红/蓝背景白字’与‘白底深色字’分别对应中欧哪两个国家？且前者常有独特字母 ř 和 ů？",
      "questionEn": "Red/Blue background with white digits vs. White background with dark digits corresponds to which two Central European countries?",
      "answerZh": "捷克 (Czechia) 🇨🇿 vs 斯洛伐克 (Slovakia) 🇸🇰",
      "answerEn": "Czechia 🇨🇿 (Red/Blue plate) vs Slovakia 🇸🇰 (White plate)",
      "category": "Comparison",
      "keyPointZh": "捷克：门牌红/蓝底白字，有 ř 和 ů；斯洛伐克：门牌白底黑字，有 ô、ľ、ä。",
      "keyPointEn": "Czechia uses red/blue house plaques with white text; Slovakia uses white plaques with dark text."
    },
    {
      "id": "fc-17",
      "questionZh": "北欧三国的道路边缘标线特征：挪威、瑞典、芬兰分别有什么显著区别？",
      "questionEn": "Road edge dashed lines in Scandinavia: What is the main distinction between Norway, Sweden, and Finland?",
      "answerZh": "挪威：长白虚线；瑞典：极短白虚线；芬兰：白实线（淘汰黄中线中）",
      "answerEn": "Norway: Long dashes; Sweden: Very short dashes; Finland: Continuous solid white edge lines",
      "category": "Road Lines",
      "keyPointZh": "挪威虚线间距大长段；瑞典虚线紧密短小像轮胎印；芬兰全白实线且多白杆白点路缘标。",
      "keyPointEn": "Norway has long edge dashes; Sweden has short tight dashes; Finland uses continuous solid outer lines."
    },
    {
      "id": "fc-18",
      "questionZh": "波罗的海三国（爱沙尼亚、拉脱维亚、立陶宛）如何通过文字字母和路牌快速区分？",
      "questionEn": "How to distinguish the 3 Baltic countries (Estonia, Latvia, Lithuania) via alphabet letters and road suffixes?",
      "answerZh": "爱沙尼亚 (õ, tee/tänav)；拉脱维亚 (ā, ē, ī, ū, iela)；立陶宛 (ė, ą, ę, į, ų, gatvė/g.)",
      "answerEn": "Estonia (õ, -tee/-tn), Latvia (ā,ē,ī,ū, -iela), Lithuania (ė,ą,ę,į,ų, -gatvė/-g.)",
      "category": "Language Meta",
      "keyPointZh": "爱沙尼亚近似芬兰语多双元音和字母 õ；拉脱维亚长横杠ā；立陶宛带头顶一点ė及鼻音尾巴ą，立陶宛人名路名常以-as, -is, -us结尾。",
      "keyPointEn": "Estonia features õ; Latvia has macron bars ā, ē, ī, ū; Lithuania uses dot ė and ogonek hooks ą, ę, į, ų."
    },
    {
      "id": "fc-19",
      "questionZh": "澳大利亚南澳州（首府阿德莱德）最著名、最具代表性的电线杆类型是？",
      "questionEn": "What is the iconic, distinct utility pole type used exclusively in South Australia (Adelaide)?",
      "answerZh": "斯托比杆 (Stobie Pole)",
      "answerEn": "Stobie Pole (South Australia)",
      "category": "Infrastructure",
      "keyPointZh": "由两根垂直钢轨中间灌注混凝土制成，截面呈三明治结构。只要看到 Stobie 杆，99% 直奔阿德莱德与南澳！",
      "keyPointEn": "Constructed from two steel beams with concrete poured in the middle. Distinct indicator for South Australia."
    },
    {
      "id": "fc-20",
      "questionZh": "加拿大唯一的纯法语省份，停止牌写 Arret，红绿灯横向悬挂，Chevron 呈红底白箭头的是？",
      "questionEn": "Canadian province where STOP signs say 'Arret', traffic lights hang horizontally, and Chevrons are red/white?",
      "answerZh": "魁北克省 (Quebec / QC) 🇨🇦",
      "answerEn": "Quebec (QC) 🇨🇦",
      "category": "Regional Meta",
      "keyPointZh": "加拿大其他省份大多写 STOP，红绿灯竖挂，Chevron 为黑底黄箭头；魁北克全境法语极其好认。",
      "keyPointEn": "Quebec uniquely uses 'Arret' stop signs, horizontal traffic lights, and red/white chevrons."
    },
    {
      "id": "fc-21",
      "questionZh": "街景车右前方伸出黑色涉水喉 (Snorkel)、大型卡车强制贴红黄反光条、国家公园稀树草原开阔的是？",
      "questionEn": "Google car has a black snorkel on the front-right fender, trucks have mandatory red/yellow reflective tape?",
      "answerZh": "肯尼亚 (Kenya) 🇰🇪",
      "answerEn": "Kenya 🇰🇪",
      "category": "Country Meta",
      "keyPointZh": "黑色涉水喉是肯尼亚经典车特征；区别乌干达（乌干达红土更湿润翠绿，摩托车极多穿亮黄背心）。",
      "keyPointEn": "Kenya: Black air snorkel on front-right fender of Google pickup, savanna landscapes, English signs."
    },
    {
      "id": "fc-22",
      "questionZh": "车顶驮着巨大的帐篷或露营包，车尾备胎有时缠绕带子或网格，满眼开阔草原与蒙古包的是？",
      "questionEn": "Car roof loaded with large camping tent/gear, spare tire on rear, vast open steppe landscapes with yurts?",
      "answerZh": "蒙古 (Mongolia) 🇲🇳",
      "answerEn": "Mongolia 🇲🇳",
      "category": "Country Meta",
      "keyPointZh": "蒙古露营车 Meta；西半部有橡胶垫和备胎网格；东半部备胎常有绿带；不确定位置优先点乌兰巴托。",
      "keyPointEn": "Mongolia: Iconic camping tent on roof rack, spare tire with colored straps/mesh, dirt steppe trails."
    },
    {
      "id": "fc-23",
      "questionZh": "日本道路上方悬挂的‘垂直向下红白箭头’主要分布在哪个地区？代表什么作用？",
      "questionEn": "Where are the downward-pointing red/white arrows hanging over Japanese roads, and what are they for?",
      "answerZh": "北海道 (Hokkaido) 🇯🇵 及东北地方（暴雪时指示道路路沿边界）",
      "answerEn": "Hokkaido & Northern Tohoku (Snow boundary markers)",
      "category": "Regional Meta",
      "keyPointZh": "北海道大雪覆盖路面时，驾驶员看不见路肩，头顶的红白箭头指示路面实际边缘。看到箭头+Seicomart便利店秒选北海道！",
      "keyPointEn": "Downward arrows in Hokkaido mark the edge of the road when buried in snow. Frequent with Seicomart stores."
    },
    {
      "id": "fc-24",
      "questionZh": "南美洲出租车：全车亮黄色且后侧带方格拉花，或者前挡贴彩色 TAXI 标志的是哪几个国家？",
      "questionEn": "South American taxis: Bright yellow taxis in Colombia & Ecuador vs white cars with radio movil stickers in Bolivia?",
      "answerZh": "哥伦比亚（全黄带微型灯牌） / 厄瓜多尔（亮黄车身+橙牌照+侧面省份代码） / 玻利维亚（白车贴彩色TAXI）",
      "answerEn": "Colombia/Ecuador (Yellow cabs) vs Bolivia (White cars with colorful windshield decals)",
      "category": "Taxi Meta",
      "keyPointZh": "哥伦比亚与厄瓜多尔出租车全黄；秘鲁有黄顶黑身或全黄三轮突突车；布宜诺斯艾利斯是黄顶黑身。",
      "keyPointEn": "Colombia & Ecuador feature bright yellow cabs; Buenos Aires uses black bodies with yellow roofs."
    },
    {
      "id": "fc-25",
      "questionZh": "印尼与马来西亚这对‘东南亚双子星’，如何看车牌与路面白线瞬间区分？",
      "questionEn": "Indonesia vs Malaysia: Quick distinction via license plate segments and road center markings?",
      "answerZh": "车牌：印尼三段白字 (B 1234 CD)，马来两段白字 (W 1234 A)；标线：印尼常用实中线，马来多用双中线或虚中线",
      "answerEn": "Plates: Indonesia has 3 segments; Malaysia has 2 segments. Road: Indonesia solid center, Malaysia dashed/double.",
      "category": "Comparison",
      "keyPointZh": "印尼警察标 Polisi，马来标 Polis；印尼招牌常见货币 Rp / Rupiah；马来西亚常有黑白或黄黑路沿石。",
      "keyPointEn": "Indonesia plates have 3 chunks; Malaysia plates have 2 chunks. Currency Rp on Indonesian signs."
    }
  ]
};
