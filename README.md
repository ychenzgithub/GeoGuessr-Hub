# 🧭 GeoGuessr 知识宝典与速查工具 (GeoGuessr Master Hub)

> 提炼自实战笔记的全球 Meta 识别指南与高效复习系统 · Curated Competitive Meta Guides, Regional Deep Dives & Atlas

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-emerald?style=flat-square&logo=github)](https://ychenzgithub.github.io/GeoGuessr-Hub/)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](#license)
[![Language](https://img.shields.io/badge/language-ZH%20%7C%20EN-purple?style=flat-square)](#)

---

## 🌟 项目简介 (Overview)

**GeoGuessr Master Hub** 是一套专为竞技对决、天梯冲分与地理探索玩家打造的现代化全球 Meta 知识库与速查工具。系统完整沉淀了 Notion 实战笔记的精华，涵盖街景覆盖国、偏远离岛、大国区域细分、高频混淆对决、核心信息图及国旗速记口诀。

---

## 🎯 核心功能模块 (Key Modules)

1. **🧩 专项知识 (Topic Metas)**
   - 覆盖 **14 大专项分类**：车牌、出租车、电线杆、路缘标、道路标线、街景车、人行横道、水箱、门牌、语言、植被地貌、道路左右行、减速警告牌、护栏等。
   - 单项精读聚焦模式（Focus Mode），支持分类胶囊一键切换、翻页导航与一键复制笔记。

2. **🗺️ 大国精要 (Regional Guides)**
   - 深入剖析 **37 个大国与重点覆盖区**：欧洲 10 国、亚洲 11 国、横跨欧亚 2 国（俄罗斯、土耳其，在欧洲/亚洲筛选下都会出现）、美洲 10 国、大洋洲 2 国、非洲 2 国。
   - 内容提炼自职业选手的 YouTube 区域教学视频（zi8gzag、Daiiono、Kodiak、Harrier 等）及其讲解所用的 Plonk It 文字攻略，每个国家页面底部附视频来源链接。
   - 详尽整理州属 / 联邦主体代码、电话区号网、道路编号、街景车与杆牌 Meta、地形地貌过渡、区域专属基础设施与精确定位诀窍。

3. **🌐 各国特征与离岛 (Countries & Islands)**
   - **主权国家速查 (106国)**：支持按大洲（欧洲、美洲、亚洲、非洲、大洋洲）与标签组合筛选。
   - **偏远离岛速查 (32处)**：结构化表格视图，覆盖格陵兰、法属波利尼西亚、斯瓦尔巴、海峡群岛（泽西与根西）等海外领地，支持按宗主国筛选。

4. **⚔️ 国家对决 (Head-to-Head Comparisons)**
   - **22 组高频混淆国并排对比**（乌克兰 vs 俄罗斯、英国 vs 爱尔兰、北欧三国、波罗的海三国、马来西亚 vs 印尼、挪威 vs 瑞典等）。
   - 提炼关键差异记忆点与共性特征，助你在决斗模式中快速作出决断。

5. **📊 核心图表与国旗 (Infographics & Flags)**
   - **核心 Meta 图解 (30张)**：全尺寸高清信息图（欧洲路缘标、东南亚文字地图、美国/加拿大车牌地图、欧洲街道词源与V形导向牌、全球书写系统与行车方向分布等），支持点击灯箱放大（Lightbox）。
   - **全球国旗口诀 (114面)**：全套国旗速记口诀与构图特征卡片，支持按大区与构图类型快速筛选。

6. **🌐 网络资源与游戏 (Web Resources & Games)**
   - **街景对战平台 (8款)**：GeoGuessr 官方、GeoChallenges、GeoPingKak、WorldGuessr、OpenGuessr、图寻等。
   - **实用工具与数据库 (10处)**：Plonk It 攻略宝典、Geohints 视觉库、Geotips、Geometas、Learnable Meta 等。
   - **深度攻略指南 (6篇)**：Fabien Celier 笔记、道路标线万字长文、全球大国细分速查表、GeoDucky 2026 欧洲 48 国视频指南等。

---

## ⚡ 特性亮点 (Highlights)

- 🔍 **全站实时极速搜索**：支持拼音、中文与英文线索匹配（快捷键 `/` 或 `⌘K` 快速呼出）。
- 🌐 **中英双语即时切换**：所有元数据与界面元素支持简体中文 / 英文一键切换。
- 🌓 **深色 / 浅色模式切换**：基于 Tailwind CSS 精心调校的高对比度夜间深色主题。
- 📋 **一键复制 Meta 笔记**：各卡片均带有一键复制按钮，方便导入个人笔记或复习卡片。
- 📱 **多端全响应式设计**：无缝适配宽屏显示器、平板与移动端操作。

---

## 🛠️ 技术架构 (Tech Stack)

- **前端架构**：原生 HTML5 + Vanilla ES6+（轻量、零打包依赖、毫秒级首屏加载）
- **UI 框架**：Tailwind CSS (CDN) + 自定义玻璃拟态（Glassmorphism）设计系统
- **数据引擎**：结构化双语 JSON 知识库（位于 `assets/js/geoguessr-data.js`）

---

## 🚀 本地运行 (Local Run)

本项目无需安装 npm 依赖或构建步骤，直接打开即可运行：

```bash
# 方式 1：直接用浏览器打开
open index.html

# 方式 2：使用 Python 启动本地静态服务器
python3 -m http.server 8000
# 然后在浏览器访问 http://localhost:8000
```

---

## 📂 目录结构 (Directory Structure)

```text
├── index.html                   # 主页面入口
├── assets/
│   ├── css/
│   │   └── style.css            # 自定义主题样式与动画
│   ├── js/
│   │   ├── app.js               # 应用核心交互逻辑与渲染引擎
│   │   └── geoguessr-data.js    # 结构化核心 Meta 数据库
│   └── images/
│       └── infographics/        # 核心信息图与高分辨率图解
└── .gitignore                   # Git 忽略配置
```

---

## 📄 开源许可 (License)

本项目遵循 [MIT License](LICENSE) 许可协议。
欢迎各位地理与街景爱好者学习交流、提出 Issue 与 PR！
