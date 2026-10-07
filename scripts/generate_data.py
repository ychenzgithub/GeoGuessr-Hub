import os, glob, re, json

def clean_text(t):
    if not t:
        return ""
    # remove excessive markdown stars and notions
    t = re.sub(r'https://www\.notion\.so/[^\s\)]+', '', t)
    return t.strip()

print("Starting data parsing...")

# 1. Game Websites
game_websites = [
    {
        "id": "geoguessr-official",
        "name": "GeoGuessr 官方网站",
        "nameEn": "GeoGuessr Official",
        "url": "https://www.geoguessr.com/",
        "category": "official",
        "categoryName": "官方平台",
        "categoryNameEn": "Official Platform",
        "badge": "官方",
        "badgeEn": "Official",
        "badgeColor": "emerald",
        "desc": "全球最流行的街景探索与地理发现游戏，支持排位竞技、决斗模式、单人探索与好友派对联机。",
        "descEn": "The premier geography discovery game worldwide. Supports competitive ranked duels, singleplayer exploration, and multiplayer parties.",
        "icon": "globe",
        "features": ["排位天梯", "世界决斗", "大师联赛", "好友联机"]
    },
    {
        "id": "geochallenges",
        "name": "GeoChallenges 免费挑战",
        "nameEn": "GeoChallenges Free",
        "url": "https://geochallenges.me/?utm_source=chatgpt.com",
        "category": "free",
        "categoryName": "免费挑战",
        "categoryNameEn": "Free Challenges",
        "badge": "免费免登录",
        "badgeEn": "Free / No Login",
        "badgeColor": "sky",
        "desc": "免账号畅玩的 GeoGuessr 挑战生成平台，支持随机地图和与朋友分享游玩链接。",
        "descEn": "Free challenge platform for GeoGuessr maps without requiring a premium account.",
        "icon": "zap",
        "features": ["免费游玩", "每日挑战", "快速练习"]
    },
    {
        "id": "geopingkak",
        "name": "GeoPingKak 每日挑战",
        "nameEn": "GeoPingKak Daily Challenge",
        "url": "https://geopingkak.web.app/daily-challenge",
        "category": "daily",
        "categoryName": "每日挑战",
        "categoryNameEn": "Daily Challenge",
        "badge": "每日练习",
        "badgeEn": "Daily Practice",
        "badgeColor": "amber",
        "desc": "极简高效的 GeoGuessr 每日挑战练题工具，专为玩家日常手感保持与快速复盘设计。",
        "descEn": "Minimalist daily challenge trainer designed for daily practice and meta warm-up.",
        "icon": "calendar",
        "features": ["每日题目", "战绩统计", "轻量极速"]
    },
    {
        "id": "geoleaderboard",
        "name": "Matt-op 用户战绩搜索",
        "nameEn": "Matt-op GeoLeaderboard",
        "url": "https://matt-op.github.io/geoleaderboard/",
        "category": "tools",
        "categoryName": "查询工具",
        "categoryNameEn": "Player Lookup",
        "badge": "战绩统计",
        "badgeEn": "Stats Tool",
        "badgeColor": "indigo",
        "desc": "第三方 GeoGuessr 玩家天梯数据查询工具，可搜索全球玩家排名、Elo 积分变化及历史对局数据。",
        "descEn": "Third-party leaderboard search tool to track GeoGuessr player ranks, Elo rating history, and competitive stats.",
        "icon": "trophy",
        "features": ["Elo 查询", "全球排行", "玩家分析"]
    },
    {
        "id": "worldguessr",
        "name": "WorldGuessr 免费街景猜题",
        "nameEn": "WorldGuessr (Free)",
        "url": "https://www.worldguessr.com/",
        "category": "alternative",
        "categoryName": "免费替代平台",
        "categoryNameEn": "Free Alternative",
        "badge": "免费开源",
        "badgeEn": "Free & Open",
        "badgeColor": "teal",
        "desc": "高度还原 GeoGuessr 玩法的免费开源网页游戏，无局数限制，支持单人与多人决斗。",
        "descEn": "Free, open-source geography guessing game with unlimited rounds, singleplayer and multiplayer duel modes.",
        "icon": "map",
        "features": ["完全免费", "多人决斗", "无限轮次"]
    },
    {
        "id": "openguessr",
        "name": "OpenGuessr",
        "nameEn": "OpenGuessr",
        "url": "https://openguessr.com/",
        "category": "alternative",
        "categoryName": "免费替代平台",
        "categoryNameEn": "Free Alternative",
        "badge": "社区推荐",
        "badgeEn": "Community Pick",
        "badgeColor": "blue",
        "desc": "基于社区与开放街景的高品质地理发现游戏，界面清爽，支持多种模式和自定义地区。",
        "descEn": "Clean open street discovery game with customizable regions and diverse game modes.",
        "icon": "compass",
        "features": ["自定义地图", "流畅界面", "无需付费"]
    },
    {
        "id": "guesswhereyouare",
        "name": "Guess Where You Are",
        "nameEn": "Guess Where You Are",
        "url": "https://guesswhereyouare.com/",
        "category": "alternative",
        "categoryName": "免费替代平台",
        "categoryNameEn": "Free Alternative",
        "badge": "轻量免翻",
        "badgeEn": "Lightweight",
        "badgeColor": "purple",
        "desc": "轻量级免费街景猜测网站，即开即玩，非常适合碎片化时间进行快速识别练习。",
        "descEn": "Fast, lightweight street guesser ideal for quick practice sessions during short breaks.",
        "icon": "pin",
        "features": ["即开即玩", "轻量免插件", "碎片练习"]
    },
    {
        "id": "tuxun",
        "name": "图寻 (Tuxun.fun)",
        "nameEn": "Tuxun (Explore the World)",
        "url": "https://tuxun.fun/",
        "category": "domestic",
        "categoryName": "国内特色平台",
        "categoryNameEn": "Chinese Platform",
        "badge": "国内高人气",
        "badgeEn": "China Favorite",
        "badgeColor": "rose",
        "desc": "国内极其活跃的街景地理发现平台，拥有极其庞大的活跃玩家社区、积分对决、中国特化题库与世界题库。",
        "descEn": "Top Chinese street exploration & guessing platform featuring massive active community, rated duels, and specialized regional maps.",
        "icon": "flag",
        "features": ["积分天梯", "中国特化图", "活跃社区", "丰富比赛"]
    }
]

# 2. Web Resources
web_resources = {
    "websites": [
        {
            "name": "Plonk It 攻略宝典",
            "nameEn": "Plonk It Guide",
            "url": "https://www.plonkit.net/guide",
            "badge": "顶级指南",
            "desc": "GeoGuessr 竞技圈公认的最全面、最系统的国家级深度 Meta 圣经，包含全国家电线杆、路缘标、车牌、建筑等全套识别细则。",
            "descEn": "The definitive competitive guide covering deep regional metas, bollards, poles, plates, and landscape details for every covered country."
        },
        {
            "name": "Geohints 识别速查库",
            "nameEn": "Geohints",
            "url": "https://geohints.com/",
            "badge": "速查图库",
            "desc": "直观的分类图库速查库，支持按电线杆、路缘标、车牌、国旗、街景车、人行道标志等视觉元素按国家并排对比。",
            "descEn": "Visual visual meta directory allowing side-by-side comparison of poles, bollards, plates, flags, and signs across countries."
        },
        {
            "name": "Geotips 快速技巧库",
            "nameEn": "Geotips",
            "url": "https://geotips.net/",
            "badge": "经典工具",
            "desc": "经典的 GeoGuessr 技巧与线索索引平台，按各大洲和国家快速索引关键特征。",
            "descEn": "Classic reference website categorizing key recognition clues by continent and country."
        },
        {
            "name": "Geometas Meta 目录",
            "nameEn": "Geometas",
            "url": "https://geometas.com/",
            "badge": "Meta 归纳",
            "desc": "聚焦街景车镜头、天线、遮挡胶带、语言特征、路牌格式的专门 Meta 数据库。",
            "descEn": "Specialized meta directory focusing on Google car features, rifts, roof racks, camera gens, and language clues."
        },
        {
            "name": "Geomaster",
            "nameEn": "Geomaster",
            "url": "https://geomastr.com/",
            "badge": "对战辅助",
            "desc": "实用的 Meta 练习工具与题库训练平台，助你进阶 Champion / Master 段位。",
            "descEn": "Practical trainer and practice quiz tool for ranking up to Master and Champion."
        },
        {
            "name": "Learnable Meta",
            "nameEn": "Learnable Meta",
            "url": "https://learnablemeta.com/",
            "badge": "系统训练",
            "desc": "循序渐进的 Meta 学习工具，专注于高回报、高胜率的实用线索。",
            "descEn": "Curated flashcard style learning tool focusing on the highest ROI recognizable clues."
        },
        {
            "name": "Reddit r/geoguessr 与官方 Wiki",
            "nameEn": "Reddit r/geoguessr & Wiki",
            "url": "https://www.reddit.com/r/geoguessr/wiki/index/",
            "badge": "玩家社区",
            "desc": "全球最大的 GeoGuessr 玩家讨论区与维基百科，汇集最新版本覆盖更新、热心玩家制作的精美信息图。",
            "descEn": "The world's largest GeoGuessr community and wiki, featuring meta announcements, coverage updates, and infographics."
        },
        {
            "name": "图寻官方文档 (Tuxun Docs)",
            "nameEn": "Tuxun Documentation",
            "url": "https://www.yuque.com/chaofun/tuxun",
            "badge": "中文百科",
            "desc": "国内图寻社区编写的高质量中文街景地理知识库，包含水箱、电线杆、植物等详尽图解。",
            "descEn": "Comprehensive Chinese knowledge base by the Tuxun community covering water tanks, poles, and regional foliage."
        }
    ],
    "articles": [
        {
            "title": "Tips by Fabien Celier",
            "titleEn": "Fabien Celier's GeoGuessr Tips",
            "url": "https://fabiencelier.github.io/geoguessr-tips/",
            "author": "Fabien Celier",
            "desc": "极其优质的开源 GeoGuessr 笔记，涵盖车牌蓝条、欧洲路缘标、植被与电线杆速记逻辑。",
            "descEn": "High-quality open-source tips notebook summarizing license plates, bollards, poles, and landscape recognition."
        },
        {
            "title": "Top Tips, Tricks and Techniques (Kyal Shepard)",
            "titleEn": "GeoGuessr: Top Tips, Tricks, and Techniques",
            "url": "https://somerandomstuff1.wordpress.com/2019/02/08/geoguessr-the-top-tips-tricks-and-techniques/",
            "author": "Kyal Shepard",
            "desc": "早期经典万字长文指南，对道路标线颜色（全白、黄中白边、白中黄边）做了开创性的系统归纳。",
            "descEn": "Seminal in-depth guide that pioneered systematic classification of road markings and European road infrastructures."
        },
        {
            "title": "Regional Guessing Meta Library (Google Sheet)",
            "titleEn": "Regional Guessing Meta Spreadsheet",
            "url": "https://docs.google.com/spreadsheets/d/1UNvkoY-LaktF75nU_cP7-wVRAEvH3fSqVZet20HqxXA/edit?gid=1829787855#gid=1829787855",
            "author": "Top Community Players",
            "desc": "顶尖排位玩家整理的全球大国地区细分速查表格，包含巴西电话区号、印尼各岛屿代码、俄罗斯公路网等海量数据。",
            "descEn": "Massive community-curated spreadsheet for sub-regional guessing across Russia, Brazil, Indonesia, Australia, and the US."
        }
    ],
    "infographics": [
        {
            "id": "writing-systems",
            "title": "全球文字与字母书写系统分布图",
            "titleEn": "World Writing Systems & Scripts Map",
            "image": "assets/images/infographics/writing_systems_map.png",
            "desc": "直观标注全球各国文字系统（拉丁字母、西里尔字母、希腊字母、阿拉伯字母、韩文字母、天城文、泰文、僧伽罗文等）。看懂文字体系秒锁大洲和大区！",
            "descEn": "Global distribution of writing systems (Latin, Cyrillic, Greek, Arabic, Hangul, Devanagari, Thai, Sinhala). Instantly narrow down continents.",
            "tags": ["语言", "文字", "全球地图"]
        },
        {
            "id": "world-markings",
            "title": "全球道路标线与行车方向概览图",
            "titleEn": "World Road Markings & Driving Side Map",
            "image": "assets/images/infographics/world_markings_map.png",
            "desc": "全球各国左右舵行车方向与道路中心线颜色（黄中线、全白线、黄边线）分布图，GeoGuessr 首推秒杀线索。",
            "descEn": "Overview of left vs right hand drive countries and road line coloring rules worldwide.",
            "tags": ["道路标线", "左右行", "核心Meta"]
        },
        {
            "id": "us-license-plates",
            "title": "美国 50 州模糊车牌与前后牌照全彩分布图",
            "titleEn": "US 50 States Blurred License Plates Map",
            "image": "assets/images/infographics/us_license_plates.png",
            "desc": "美国全 50 州车牌在街景模糊后的色块特征及只挂后牌（Rear plate only）还是前后双牌的地图分布。美洲排位大杀器！",
            "descEn": "Color blocks of blurred license plates across all 50 US states, plus front vs rear-only plate requirements.",
            "tags": ["车牌", "美国", "大国地区"]
        },
        {
            "id": "chevrons-europe",
            "title": "欧洲 V 形导向牌 (Chevron) 分布全景图",
            "titleEn": "European Chevrons Guide",
            "image": "assets/images/infographics/chevrons_europe.png",
            "desc": "欧洲弯道 V 形导向牌配色体系：白底红箭、黑底白箭、蓝底白箭、黑底黄箭（挪威/冰岛/爱尔兰）、蓝底黄箭（瑞典独家）与黄底红箭（奥地利）。",
            "descEn": "European curve chevron color codes: White/Red, Black/White, Blue/White, Black/Yellow (NO/IS/IE), Blue/Yellow (Sweden), Yellow/Red (Austria).",
            "tags": ["交通标志", "V形导向牌", "欧洲"]
        },
        {
            "id": "europe-directional-signs",
            "title": "欧洲指路标志箭头造型与版式特征",
            "titleEn": "European Directional Signs Arrow Shapes",
            "image": "assets/images/infographics/europe_directional_signs.png",
            "desc": "欧洲各国指路牌中箭头的绘制方式：整块涂黑镂空箭头（挪威）、黑线勾勒箭头（瑞典）、黑实心箭头（芬兰）、特殊折角与带框设计。",
            "descEn": "Distinct arrow silhouettes across European directional signs: cut-out arrows (Norway), thin outline (Sweden), solid black (Finland).",
            "tags": ["路牌", "欧洲", "标志设计"]
        },
        {
            "id": "poles-distribution",
            "title": "电线杆质地与造型全球分布图",
            "titleEn": "Utility Poles Materials & Distribution",
            "image": "assets/images/infographics/poles_distribution.png",
            "desc": "南美木杆（玻利维亚/阿根廷/乌拉圭）、梯子杆（巴西/智利/西葡/法国）、方孔水泥杆（匈牙利H型/波兰P型/罗马尼亚R型）及澳洲 Stobie 杆。",
            "descEn": "Wood poles vs concrete ladder poles vs holey poles (Hungary H-holes, Poland P-holes, Romania R-holes).",
            "tags": ["电线杆", "基础设施", "全球速查"]
        },
        {
            "id": "cyrillic-matrix",
            "title": "西里尔字母国家专用字符速查矩阵",
            "titleEn": "Cyrillic Alphabet Character Matrix",
            "image": "assets/images/infographics/cyrillic_matrix.png",
            "desc": "乌克兰（独占 i, ï, є, ґ）、保加利亚（ъ为常见普通元音）、俄罗斯（ы, ё, ъ, э）、塞尔维亚/黑山/波黑（ђ, ћ, љ, њ）专用字母对照表。",
            "descEn": "Comparison matrix for Cyrillic letters: Ukraine (i, ï, є, ґ), Bulgaria (ъ), Russia (ы, э), Serbian/Balkans (ђ, ћ, љ, њ).",
            "tags": ["语言", "西里尔字母", "东欧"]
        },
        {
            "id": "greek-cyrillic-chart",
            "title": "希腊字母与西里尔字母特征对照表",
            "titleEn": "Greek vs Cyrillic Script Comparison",
            "image": "assets/images/infographics/greek_cyrillic_chart.png",
            "desc": "希腊语特有字母（Ω, Ψ, Ξ, Θ, Δ, Λ）与常见西里尔字母辨析，避免在希腊、塞浦路斯与斯拉夫语系国家间失误。",
            "descEn": "Differentiating unique Greek letters (Ω, Ψ, Ξ, Θ, Δ, Λ) from Cyrillic to avoid mixing up Greece/Cyprus and Slavic countries.",
            "tags": ["语言", "希腊字母", "字母辨识"]
        },
        {
            "id": "se-asian-scripts",
            "title": "东南亚四大文字对比（泰文、老挝文、高棉文、缅甸文）",
            "titleEn": "Southeast Asian Scripts Comparison (Thai, Lao, Khmer, Burmese)",
            "image": "assets/images/infographics/se_asian_scripts.png",
            "desc": "泰文（规整转折有硬角）、老挝文（弧线多圆润大圆圈）、柬埔寨高棉文（波浪与尖刺修饰）、缅甸文（大量纯圆圈）。高分辨率对照图。",
            "descEn": "High-res guide comparing Thai (sharp corners), Lao (curvy and rounded), Khmer (wavy topped teeth), and Burmese (circular letters).",
            "tags": ["语言", "东南亚", "高阶Meta"]
        }
    ]
}

print(f"Loaded {len(game_websites)} game sites, {len(web_resources['websites'])} resource sites, {len(web_resources['infographics'])} infographics.")

# Write intermediate check
with open("/tmp/site_base.json", "w") as f:
    json.dump({"games": game_websites, "resources": web_resources}, f, indent=2, ensure_ascii=False)
