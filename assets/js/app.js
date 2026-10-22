// GeoGuessr Master Hub - Application Logic
// Supports bilingual switching (ZH/EN), real-time search, interactive flashcards, lightbox, and tabs.

(function () {
  'use strict';

  const data = window.GEOGUESSR_DATA || {};

  // Application State
  const state = {
    theme: localStorage.getItem('geoguessr_theme') || 'light',
    lang: localStorage.getItem('geoguessr_lang') || 'zh',
    currentTab: 'topics', // Default focus on 专项知识 per user request!
    countryViewMode: 'countries', // 'countries' (主权国家), 'islands' (偏远离岛)
    infographicsViewMode: 'charts', // 'charts' (核心图解), 'flags' (国旗口诀)
    chartCategoryFilter: 'ALL',
    flagRegionFilter: 'ALL',
    resourceCategoryFilter: 'ALL', // 'ALL', 'games', 'tools', 'articles'
    currentKnowledgeSubTab: 'topics', // backwards compatibility alias
    searchQuery: '',
    continentFilter: 'ALL',
    countryTagFilter: 'ALL',
    regionContinentFilter: 'ALL',
    activeComparisonId: 'comp-1',
    activeRegionId: 'russia',
    activeTopicId: 'plates',
    islandSovereignFilter: 'ALL',
    lightbox: null
  };

  // UI Translations
  const i18n = {
    zh: {
      siteTitle: "GeoGuessr 知识宝典与速查工具",
      siteSubtitle: "提炼自实战笔记的全球 Meta 识别指南与复习系统",
      searchPlaceholder: "输入关键词搜索 (如: 梯子、黑胶带、011、阿尔巴尼亚、E75、红土... 快捷键 / 或 ⌘K)",
      searchCount: "找到 {count} 条相关线索",
      navTopics: "专项知识",
      navRegions: "大国精要",
      navCountries: "各国特征与离岛",
      navComparisons: "国家对决",
      navGames: "游戏网站",
      navResources: "网络资源与游戏",
      navKnowledge: "知识笔记",
      navInfographics: "核心图表与国旗",
      subCountries: "各国特征 (105国)",
      subComparisons: "国家对决 (20组)",
      subRegions: "大国精要 (21国)",
      subTopics: "专项知识 (14大类)",
      subIslands: "偏远离岛速查 (31处)",
      subFlags: "国旗口诀与构图 (114面)",
      countryModeCountries: "🌐 主权国家 (105国)",
      countryModeIslands: "🏝️ 偏远离岛速查 (31处)",
      infoModeCharts: "📊 核心 Meta 图解 (30张)",
      infoModeFlags: "🚩 全球国旗口诀 (114面)",
      flagMnemonicPrefix: "速记口诀",
      flagPatternLabel: "构图特征",
      allFlagRegions: "全部大区",
      matchedIslandsTip: "偏远离岛中另有 {count} 处匹配",
      matchedCountriesTip: "主权国家中另有 {count} 个匹配",
      viewIslands: "切换至离岛速查 →",
      viewCountries: "切换至主权国家 →",
      allContinents: "全部大洲",
      allTags: "全部标签",
      allSovereigns: "全部宗主国",
      continentEurope: "欧洲",
      continentAmericas: "美洲",
      continentAsia: "亚洲",
      continentAfrica: "非洲",
      continentOceania: "大洋洲",
      visitLink: "立即访问 ↗",
      copyClue: "复制笔记",
      copied: "已复制!",
      themeDark: "深色",
      themeLight: "浅色",
      noResults: "未找到匹配内容，请尝试其他关键词",
      islandColName: "岛屿名称",
      islandColLoc: "地理位置",
      islandColSov: "归属 / 宗主国",
      islandColMeta: "核心 Meta / 识别特征",
      imageEnlarge: "点击查看原尺寸高清大图",
      statsBadge: "⚡ 覆盖 14 大专项 Meta · 21 个大国地区 · 105+ 街景国家 · 31 处偏远离岛 · 30 张高清图解 · 114 面国旗口诀",
      discussionLink: "Reddit 讨论 ↗",
      keyClue: "关键记忆点:",
      commonLabel: "共性:",
      flagsCount: "{count} 面国旗",
      chartsCount: "{count} 张图解",
      articlesCount: "{count} 篇推荐",
      allTagPill: "全部标签",
      prevTopic: "上一专题",
      nextTopic: "下一专题",
      prevCountry: "上一国家",
      nextCountry: "下一国家",
      jumpToTopic: "快速直达",
      viewInfographic: "查看相关图解 ↗",
      resCatAll: "全部资源",
      resCatGames: "🎮 街景对战平台",
      resCatTools: "🛠️ 实用工具库",
      resCatArticles: "📚 深度攻略表"
    },
    en: {
      siteTitle: "GeoGuessr Master Guide & Quick Reference",
      siteSubtitle: "Curated Competitive Meta Guides, Regional Deep Dives & Atlas",
      searchPlaceholder: "Search clues (e.g., ladder pole, black tape, 011, Albania, E75, red soil... Hotkey / or ⌘K)",
      searchCount: "Found {count} matching clues",
      navTopics: "Topic Metas",
      navRegions: "Regional Guides",
      navCountries: "Countries & Islands",
      navComparisons: "Head-to-Head",
      navGames: "Game Sites",
      navResources: "Resources & Games",
      navKnowledge: "Knowledge Notes",
      navInfographics: "Infographics & Flags",
      subCountries: "Country Index (105)",
      subComparisons: "Head-to-Head (20)",
      subRegions: "Regional Guides (21)",
      subTopics: "Topic Metas (14)",
      subIslands: "Remote Islands (31)",
      subFlags: "Flag Mnemonics (114)",
      countryModeCountries: "🌐 Sovereign Countries (105)",
      countryModeIslands: "🏝️ Remote Islands (31)",
      infoModeCharts: "📊 Core Meta Charts (30)",
      infoModeFlags: "🚩 Flag Mnemonics (114)",
      flagMnemonicPrefix: "Mnemonic",
      flagPatternLabel: "Visual Pattern",
      allFlagRegions: "All Regions",
      matchedIslandsTip: "💡 Found {count} matching remote islands",
      matchedCountriesTip: "💡 Found {count} matching sovereign countries",
      viewIslands: "Switch to Remote Islands →",
      viewCountries: "Switch to Sovereign Countries →",
      allContinents: "All Continents",
      allTags: "All Tags",
      allSovereigns: "All Sovereigns",
      continentEurope: "Europe",
      continentAmericas: "Americas",
      continentAsia: "Asia",
      continentAfrica: "Africa",
      continentOceania: "Oceania",
      visitLink: "Visit Link ↗",
      copyClue: "Copy Meta",
      copied: "Copied!",
      themeDark: "Dark",
      themeLight: "Light",
      noResults: "No matching notes found. Try another search term.",
      islandColName: "Island Name",
      islandColLoc: "Location",
      islandColSov: "Sovereignty",
      islandColMeta: "Key Meta & Identification Clues",
      imageEnlarge: "Click to view full-resolution image",
      statsBadge: "⚡ 14 Specialized Metas · 21 Regional Guides · 105+ Countries · 31 Remote Islands · 30 Infographics · 114 Flag Mnemonics",
      discussionLink: "Reddit Thread ↗",
      keyClue: "Key Clue:",
      commonLabel: "Common:",
      flagsCount: "{count} flags",
      chartsCount: "{count} charts",
      articlesCount: "{count} articles",
      allTagPill: "All Tags",
      prevTopic: "Previous Topic",
      nextTopic: "Next Topic",
      prevCountry: "Previous Country",
      nextCountry: "Next Country",
      jumpToTopic: "Quick Jump",
      viewInfographic: "View Infographic ↗",
      resCatAll: "All Resources",
      resCatGames: "🎮 Battle & Play",
      resCatTools: "🛠️ Tools & Databases",
      resCatArticles: "📚 Guides & Spreadsheets"
    }
  };

  function t(key, params = {}) {
    const dict = i18n[state.lang] || i18n.zh;
    let text = dict[key] || i18n.zh[key] || key;
    for (const [k, v] of Object.entries(params)) {
      text = text.replace(`{${k}}`, v);
    }
    return text;
  }

  // Helper: toggle language
  window.toggleLanguage = function () {
    state.lang = state.lang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('geoguessr_lang', state.lang);
    renderAll();
  };

  // Helper: toggle theme (light/dark)
  window.toggleTheme = function () {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('geoguessr_theme', state.theme);
    applyTheme();
    renderHeader();
  };

  function applyTheme() {
    if (state.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  // Helper: switch main tab with URL hash support
  window.switchTab = function (tabName, skipScroll) {
    if (tabName === 'knowledge') tabName = 'topics';
    if (tabName === 'islands') {
      tabName = 'countries';
      state.countryViewMode = 'islands';
    }
    if (tabName === 'flags') {
      tabName = 'infographics';
      state.infographicsViewMode = 'flags';
    }
    if (tabName === 'flashcards') {
      tabName = 'infographics';
    }
    if (tabName === 'games') {
      tabName = 'resources';
      state.resourceCategoryFilter = 'games';
    }
    state.currentTab = tabName;
    try {
      if (history.replaceState) {
        history.replaceState(null, null, '#' + tabName);
      } else {
        window.location.hash = '#' + tabName;
      }
    } catch (e) {}
    renderAll();
    if (!skipScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Helper: switch sub tab (aliased to switchTab for backwards compatibility)
  window.switchSubTab = function (subTabName) {
    window.switchTab(subTabName);
  };

  // Helper: toggle country view mode ('countries' or 'islands')
  window.setCountryViewMode = function (mode) {
    state.countryViewMode = mode === 'islands' ? 'islands' : 'countries';
    renderCountries();
  };

  // Helper: toggle infographics view mode ('charts' or 'flags')
  window.setInfographicsViewMode = function (mode) {
    state.infographicsViewMode = mode === 'flags' ? 'flags' : 'charts';
    renderInfographicsGallery();
  };

  // Helper: filter resource category in 网络资源与游戏 ('ALL', 'games', 'tools', 'articles')
  window.filterResourceCategory = function (cat) {
    state.resourceCategoryFilter = cat;
    renderWebResources();
  };

  // Helper: filter flag region in 国旗口诀
  window.filterFlagRegion = function (region) {
    state.flagRegionFilter = region;
    renderInfographicsGallery();
  };

  // Helper: filter chart category in 核心图解
  window.filterChartCategory = function (cat) {
    state.chartCategoryFilter = cat;
    renderInfographicsGallery();
  };

  // Helper: filter region continent in 大国精要
  window.filterRegionContinent = function (continent) {
    state.regionContinentFilter = continent;
    renderRegionalGuides();
  };

  // Helper: filter continent
  window.filterContinent = function (continent) {
    state.continentFilter = continent;
    renderCountries();
  };

  // Helper: filter tag
  window.filterTag = function (tag) {
    state.countryTagFilter = tag;
    renderCountries();
  };

  // Helper: search change
  window.onSearchInput = function (query) {
    state.searchQuery = query.trim().toLowerCase();
    renderTabContent();
  };

  // Helper: select region in 大国精要
  window.selectRegion = function (regionId) {
    state.activeRegionId = regionId;
    renderRegionalGuides();
  };

  // Helper: select topic in 专项知识
  window.selectTopic = function (topicId) {
    state.activeTopicId = topicId;
    renderTopicMetas();
  };

  // Helper: filter island sovereign in 各国特征与离岛
  window.filterIslandSovereign = function (sov) {
    state.islandSovereignFilter = sov;
    renderCountries();
  };

  // Lightbox
  window.openLightbox = function (imgSrc, title) {
    const modal = document.getElementById('lightbox-modal');
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    if (!modal || !img) return;
    img.src = imgSrc;
    caption.textContent = title || '';
    modal.classList.add('active');
  };

  window.closeLightbox = function () {
    const modal = document.getElementById('lightbox-modal');
    if (modal) modal.classList.remove('active');
  };

  // Copy helper
  window.copyText = function (text, btnElem) {
    if (!navigator.clipboard) {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      const orig = btnElem.innerHTML;
      btnElem.innerHTML = `<span class="text-emerald-400 font-semibold">${t('copied')}</span>`;
      setTimeout(() => { btnElem.innerHTML = orig; }, 1500);
      return;
    }
    navigator.clipboard.writeText(text).then(() => {
      const orig = btnElem.innerHTML;
      btnElem.innerHTML = `<span class="text-emerald-400 font-semibold">${t('copied')}</span>`;
      setTimeout(() => {
        btnElem.innerHTML = orig;
      }, 1500);
    }).catch(() => {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      const orig = btnElem.innerHTML;
      btnElem.innerHTML = `<span class="text-emerald-400 font-semibold">${t('copied')}</span>`;
      setTimeout(() => { btnElem.innerHTML = orig; }, 1500);
    });
  };

  window.copyCurrentTopic = function (btnElem) {
    const current = (data.topics || []).find(t => t.id === state.activeTopicId) || (data.topics || [])[0];
    if (!current) return;
    const text = (current.sections || []).map(s => {
      const title = state.lang === 'zh' ? (s.titleZh || s.title) : (s.titleEn || s.title);
      const content = state.lang === 'zh' ? (s.textZh || s.text) : (s.textEn || s.text);
      return `### ${title}\n${content}`;
    }).join('\n\n');
    copyText(text, btnElem);
  };

  window.copyCurrentRegional = function (btnElem) {
    const current = (data.regionalGuides || []).find(r => r.id === state.activeRegionId) || (data.regionalGuides || [])[0];
    if (!current) return;
    const text = (current.sections || []).map(s => {
      const heading = state.lang === 'zh' ? (s.headingZh || s.heading) : (s.headingEn || s.heading);
      const content = state.lang === 'zh' ? (s.contentZh || s.content) : (s.contentEn || s.content);
      return `### ${heading}\n${content}`;
    }).join('\n\n');
    copyText(text, btnElem);
  };

  // Keyboard navigation shortcuts
  document.addEventListener('keydown', (e) => {
    // Focus search on '/' or ⌘K / Ctrl+K
    if ((e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      const input = document.getElementById('global-search');
      if (input) {
        input.focus();
        input.select();
      }
    }
    // Escape closes lightbox or clears search
    if (e.key === 'Escape') {
      closeLightbox();
      const input = document.getElementById('global-search');
      if (input && document.activeElement === input) {
        input.value = '';
        state.searchQuery = '';
        renderTabContent();
        input.blur();
      }
    }
  });

  // Render Functions
  function renderAll() {
    renderHeader();
    renderTabButtons();
    renderTabContent();
  }

  function renderHeader() {
    const titleElem = document.getElementById('site-title');
    const subtitleElem = document.getElementById('site-subtitle');
    const langBtn = document.getElementById('lang-btn');
    const themeBtn = document.getElementById('theme-btn');
    const searchInput = document.getElementById('global-search');
    const statsBadge = document.getElementById('stats-badge');

    if (titleElem) titleElem.textContent = t('siteTitle');
    if (subtitleElem) subtitleElem.textContent = t('siteSubtitle');
    if (statsBadge) statsBadge.textContent = t('statsBadge');
    if (langBtn) {
      langBtn.innerHTML = state.lang === 'zh'
        ? `<span class="flex items-center gap-1.5 font-medium"><span class="text-base">🇬🇧</span> English</span>`
        : `<span class="flex items-center gap-1.5 font-medium"><span class="text-base">🇨🇳</span> 中文</span>`;
    }
    if (themeBtn) {
      if (state.theme === 'dark') {
        themeBtn.innerHTML = `<span>☀️</span><span class="hidden sm:inline">${state.lang === 'zh' ? '浅色' : 'Light'}</span>`;
        themeBtn.title = state.lang === 'zh' ? '切换浅色模式' : 'Switch to Light Mode';
      } else {
        themeBtn.innerHTML = `<span>🌙</span><span class="hidden sm:inline">${state.lang === 'zh' ? '深色' : 'Dark'}</span>`;
        themeBtn.title = state.lang === 'zh' ? '切换深色模式' : 'Switch to Dark Mode';
      }
    }
    if (searchInput) {
      searchInput.placeholder = t('searchPlaceholder');
    }
    const mobileInput = document.getElementById('mobile-search');
    if (mobileInput) {
      mobileInput.placeholder = t('searchPlaceholder');
    }
    const shortcutsElem = document.getElementById('stats-shortcuts');
    if (shortcutsElem) {
      shortcutsElem.innerHTML = state.lang === 'zh'
        ? `<span>快捷键: <kbd class="px-1.5 py-0.5 rounded border text-xs">/</kbd> 搜索</span>
           <span><kbd class="px-1.5 py-0.5 rounded border text-xs">Esc</kbd> 关闭大图</span>`
        : `<span>Shortcuts: <kbd class="px-1.5 py-0.5 rounded border text-xs">/</kbd> Search</span>
           <span><kbd class="px-1.5 py-0.5 rounded border text-xs">Esc</kbd> Close</span>`;
    }
    const footerDesc = document.getElementById('footer-desc');
    if (footerDesc) {
      footerDesc.textContent = state.lang === 'zh' ? '基于个人实战笔记提炼' : 'Distilled from personal competitive notes';
    }
    const footerLinks = document.getElementById('footer-links');
    if (footerLinks) {
      footerLinks.innerHTML = state.lang === 'zh'
        ? `<a href="https://www.geoguessr.com/" target="_blank" class="hover:text-emerald-600 dark:hover:text-white transition-colors">GeoGuessr 官网</a>
           <a href="https://www.plonkit.net/guide" target="_blank" class="hover:text-emerald-600 dark:hover:text-white transition-colors">Plonk It</a>
           <a href="https://geohints.com/" target="_blank" class="hover:text-emerald-600 dark:hover:text-white transition-colors">Geohints</a>
           <a href="https://tuxun.fun/" target="_blank" class="hover:text-emerald-600 dark:hover:text-white transition-colors">图寻</a>`
        : `<a href="https://www.geoguessr.com/" target="_blank" class="hover:text-emerald-600 dark:hover:text-white transition-colors">GeoGuessr Official</a>
           <a href="https://www.plonkit.net/guide" target="_blank" class="hover:text-emerald-600 dark:hover:text-white transition-colors">Plonk It</a>
           <a href="https://geohints.com/" target="_blank" class="hover:text-emerald-600 dark:hover:text-white transition-colors">Geohints</a>
           <a href="https://tuxun.fun/" target="_blank" class="hover:text-emerald-600 dark:hover:text-white transition-colors">Tuxun</a>`;
    }
  }

  function renderTabButtons() {
    const container = document.getElementById('main-tabs');
    if (!container) return;

    const knowledgeTabs = [
      { id: 'topics', labelZh: '专项知识', labelEn: 'Topic Metas', icon: '🧩', count: '14类', color: 'purple' },
      { id: 'regions', labelZh: '大国精要', labelEn: 'Regional Guides', icon: '🗺️', count: '21国', color: 'sky' },
      { id: 'countries', labelZh: '各国特征与离岛', labelEn: 'Countries & Islands', icon: '🌐', count: '105+31', color: 'emerald' },
      { id: 'comparisons', labelZh: '国家对决', labelEn: 'Head-to-Head', icon: '⚔️', count: '20组', color: 'amber' }
    ];

    const toolTabs = [
      { id: 'infographics', labelZh: '核心图表与国旗', labelEn: 'Infographics & Flags', icon: '📊', count: state.lang === 'zh' ? '30图+114旗' : '30+114', color: 'rose' },
      { id: 'resources', labelZh: '网络资源与游戏', labelEn: 'Resources & Games', icon: '🌐', count: state.lang === 'zh' ? '对战·工具·攻略' : 'Games & Tools', color: 'teal' }
    ];

    const activeGradients = {
      purple: 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 border-purple-400 ring-2 ring-purple-500/30 font-bold',
      sky: 'bg-gradient-to-r from-blue-600 to-sky-600 text-white shadow-lg shadow-blue-500/25 border-blue-400 ring-2 ring-blue-500/30 font-bold',
      emerald: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/25 border-emerald-400 ring-2 ring-emerald-500/30 font-bold',
      amber: 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg shadow-amber-500/25 border-amber-400 ring-2 ring-amber-500/30 font-bold',
      teal: 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-500/25 border-teal-400 ring-2 ring-teal-500/30 font-bold',
      rose: 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-lg shadow-rose-500/25 border-rose-400 ring-2 ring-rose-500/30 font-bold',
      indigo: 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-500/25 border-indigo-400 ring-2 ring-indigo-500/30 font-bold',
      blue: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 border-blue-400 ring-2 ring-blue-500/30 font-bold'
    };

    const inactiveClass = "bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 hover:text-slate-900 dark:hover:text-white border-slate-200 dark:border-slate-700/60 shadow-xs font-medium";

    const renderBtn = (tab) => {
      const active = state.currentTab === tab.id;
      const label = state.lang === 'zh' ? tab.labelZh : tab.labelEn;
      const activeClass = active ? (activeGradients[tab.color] || activeGradients.emerald) : inactiveClass;

      return `
        <button onclick="switchTab('${tab.id}')"
          class="px-3.5 py-2 rounded-xl text-xs sm:text-sm border transition-all duration-200 flex items-center gap-1.5 shrink-0 whitespace-nowrap ${activeClass}">
          <span>${tab.icon}</span>
          <span>${label}</span>
          ${tab.count ? `<span class="px-1.5 py-0.5 rounded-full text-2xs font-mono font-semibold ${active ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-700/70 text-slate-500 dark:text-slate-400'}">${tab.count}</span>` : ''}
        </button>
      `;
    };

    let html = `
      <div class="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-thin w-full">
        ${knowledgeTabs.map(renderBtn).join('')}
        <div class="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-1 hidden sm:block shrink-0"></div>
        ${toolTabs.map(renderBtn).join('')}
      </div>
    `;

    container.innerHTML = html;
  }

  function renderTabContent() {
    const container = document.getElementById('tab-container');
    if (!container) return;

    switch (state.currentTab) {
      case 'topics':
        renderTopicMetas(container);
        break;
      case 'regions':
        renderRegionalGuides(container);
        break;
      case 'countries':
        renderCountries(container);
        break;
      case 'comparisons':
        renderComparisons(container);
        break;
      case 'islands':
        state.countryViewMode = 'islands';
        renderCountries(container);
        break;
      case 'flags':
        state.infographicsViewMode = 'flags';
        renderInfographicsGallery(container);
        break;
      case 'infographics':
        renderInfographicsGallery(container);
        break;
      case 'flashcards':
        renderInfographicsGallery(container);
        break;
      case 'games':
        state.currentTab = 'resources';
        state.resourceCategoryFilter = 'games';
        renderWebResources(container);
        break;
      case 'resources':
        renderWebResources(container);
        break;
      case 'knowledge':
        renderTopicMetas(container);
        break;
      default:
        renderTopicMetas(container);
    }
  }

  // 1. WEB RESOURCES & GAMES TAB (MERGED)
  function renderWebResources(container) {
    const target = container || document.getElementById('tab-container');
    if (!target) return;

    const gameList = data.gameWebsites || [];
    const res = data.webResources || {};
    const websites = res.websites || [];
    const articles = res.articles || [];
    const query = state.searchQuery;
    const catFilter = state.resourceCategoryFilter || 'ALL';

    const filteredGames = gameList.filter(item => {
      if (!query) return true;
      const str = `${item.nameZh} ${item.nameEn} ${item.descZh} ${item.descEn} ${(item.featuresZh || []).join(' ')}`.toLowerCase();
      return str.includes(query);
    });

    const filteredWebsites = websites.filter(w => {
      if (!query) return true;
      const str = `${w.nameZh} ${w.nameEn} ${w.descZh} ${w.descEn} ${(w.featuresZh || []).join(' ')}`.toLowerCase();
      return str.includes(query);
    });

    const filteredArticles = articles.filter(a => {
      if (!query) return true;
      const str = `${a.titleZh} ${a.titleEn} ${a.descZh} ${a.descEn} ${a.author || ''}`.toLowerCase();
      return str.includes(query);
    });

    const totalCount = filteredGames.length + filteredWebsites.length + filteredArticles.length;

    let html = `
      <div class="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 class="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 tracking-tight">
            <span>🌐</span> ${t('navResources')}
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
            ${state.lang === 'zh'
              ? '精选街景对战平台、权威社区 Meta 数据库与高阶攻略指南'
              : 'Curated street view battle platforms, authoritative meta bibles & deep-dive articles'}
          </p>
        </div>

        <!-- Category Filter Pills -->
        <div class="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 self-start md:self-auto shrink-0 shadow-2xs overflow-x-auto scrollbar-thin">
          <button onclick="filterResourceCategory('ALL')"
            class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${catFilter === 'ALL' ? 'bg-white dark:bg-slate-900 text-teal-600 dark:text-teal-400 shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
            ${t('resCatAll')} (${totalCount})
          </button>
          <button onclick="filterResourceCategory('games')"
            class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${catFilter === 'games' ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
            ${t('resCatGames')} (${filteredGames.length})
          </button>
          <button onclick="filterResourceCategory('tools')"
            class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${catFilter === 'tools' ? 'bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
            ${t('resCatTools')} (${filteredWebsites.length})
          </button>
          <button onclick="filterResourceCategory('articles')"
            class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${catFilter === 'articles' ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
            ${t('resCatArticles')} (${filteredArticles.length})
          </button>
        </div>
      </div>
    `;

    // Empty state check
    if (totalCount === 0) {
      html += `
        <div class="glass-card rounded-2xl p-12 text-center text-slate-500 dark:text-slate-400 my-8">
          <div class="text-4xl mb-3">🔍</div>
          <div class="text-base font-semibold text-slate-700 dark:text-slate-200 mb-1">${t('noResults')}</div>
        </div>
      `;
      target.innerHTML = html;
      return;
    }

    // SECTION 1: Game Sites
    if (catFilter === 'ALL' || catFilter === 'games') {
      if (filteredGames.length > 0) {
        html += `
          <div class="mb-10" id="res-section-games">
            <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-200/80 dark:border-slate-800">
              <h3 class="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                <span>🎮</span> ${state.lang === 'zh' ? '街景对战与练习平台' : 'Street View Battle & Practice Platforms'}
              </h3>
              <span class="text-xs text-slate-500 dark:text-slate-400 font-mono">${filteredGames.length} items</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        `;

        filteredGames.forEach(item => {
          const name = state.lang === 'zh' ? item.nameZh : item.nameEn;
          const desc = state.lang === 'zh' ? item.descZh : item.descEn;
          const badge = state.lang === 'zh' ? item.badgeZh : item.badgeEn;
          const features = state.lang === 'zh' ? (item.featuresZh || []) : (item.featuresEn || item.featuresZh || []);

          html += `
            <div class="glass-card rounded-2xl p-6 flex flex-col justify-between transition-card relative group border border-slate-200/90 dark:border-slate-700/60 hover:border-blue-500/80 shadow-xs">
              <div>
                <div class="flex items-start justify-between gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl border border-slate-200 dark:border-slate-700/80 group-hover:scale-105 transition-transform">
                    ${item.icon === 'globe' ? '🌍' : item.icon === 'zap' ? '⚡' : item.icon === 'calendar' ? '📅' : item.icon === 'trophy' ? '🏆' : item.icon === 'flag' ? '🇨🇳' : '🧭'}
                  </div>
                  <span class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-${item.badgeColor || 'blue'}-500/10 border border-${item.badgeColor || 'blue'}-500/30 text-${item.badgeColor || 'blue'}-700 dark:text-${item.badgeColor || 'blue'}-300">
                    ${badge}
                  </span>
                </div>
                <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  ${name}
                </h4>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  ${desc}
                </p>
              </div>

              <div>
                <div class="flex flex-wrap gap-1.5 mb-5">
                  ${features.map(f => `<span class="px-2 py-0.5 text-xs rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/40">${f}</span>`).join('')}
                </div>
                <a href="${item.url}" target="_blank" rel="noopener noreferrer"
                  class="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all">
                  ${t('visitLink')}
                </a>
              </div>
            </div>
          `;
        });

        html += `
            </div>
          </div>
        `;
      }
    }

    // SECTION 2: Web Tools & Databases
    if (catFilter === 'ALL' || catFilter === 'tools') {
      if (filteredWebsites.length > 0) {
        html += `
          <div class="mb-10" id="res-section-tools">
            <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-200/80 dark:border-slate-800">
              <h3 class="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
                <span>🛠️</span> ${state.lang === 'zh' ? '实用网站与 Meta 数据库' : 'Websites & Meta Databases'}
              </h3>
              <span class="text-xs text-slate-500 dark:text-slate-400 font-mono">${filteredWebsites.length} items</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        `;

        filteredWebsites.forEach(w => {
          const name = state.lang === 'zh' ? w.nameZh : w.nameEn;
          const desc = state.lang === 'zh' ? w.descZh : w.descEn;
          const badge = state.lang === 'zh' ? w.badgeZh : w.badgeEn;
          const features = state.lang === 'zh' ? (w.featuresZh || []) : (w.featuresEn || w.featuresZh || []);

          html += `
            <div class="glass-card rounded-xl p-5 flex flex-col justify-between transition-card border border-slate-200/90 dark:border-slate-700/60 hover:border-sky-500/70 shadow-xs">
              <div>
                <div class="flex items-center justify-between gap-2 mb-2">
                  <h4 class="font-bold text-slate-900 dark:text-white text-base hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                    ${name}
                  </h4>
                  <span class="px-2 py-0.5 text-xs font-semibold rounded bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/30 text-sky-700 dark:text-sky-400 shrink-0">
                    ${badge}
                  </span>
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  ${desc}
                </p>
                ${features.length > 0 ? `
                  <div class="flex flex-wrap gap-1 mb-4">
                    ${features.map(f => `<span class="px-1.5 py-0.5 text-2xs rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50">${f}</span>`).join('')}
                  </div>
                ` : ''}
              </div>
              <a href="${w.url}" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-500 dark:hover:text-sky-300 self-start">
                ${w.url.replace(/^https?:\/\//, '').split('/')[0]} ↗
              </a>
            </div>
          `;
        });

        html += `
            </div>
          </div>
        `;
      }
    }

    // SECTION 3: Articles & Guides
    if (catFilter === 'ALL' || catFilter === 'articles') {
      if (filteredArticles.length > 0) {
        html += `
          <div class="mb-10" id="res-section-articles">
            <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-200/80 dark:border-slate-800">
              <h3 class="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>📚</span> ${state.lang === 'zh' ? '高阶攻略、指南与速查表' : 'Guides, Articles & Meta Spreadsheets'}
              </h3>
              <span class="text-xs text-slate-500 dark:text-slate-400 font-mono">${filteredArticles.length} items</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        `;

        filteredArticles.forEach(a => {
          const title = state.lang === 'zh' ? a.titleZh : a.titleEn;
          const desc = state.lang === 'zh' ? a.descZh : a.descEn;
          const tags = a.tags || [];

          html += `
            <div class="glass-card rounded-xl p-5 flex flex-col justify-between transition-card border border-slate-200/90 dark:border-slate-700/60 hover:border-emerald-500/70 shadow-xs">
              <div>
                <span class="text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-1 block font-semibold">By ${a.author || 'Community'}</span>
                <h4 class="font-bold text-slate-900 dark:text-white text-base mb-2">
                  ${title}
                </h4>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  ${desc}
                </p>
                ${tags.length > 0 ? `
                  <div class="flex flex-wrap gap-1 mb-4">
                    ${tags.map(t => `<span class="px-1.5 py-0.5 text-2xs rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40">${t}</span>`).join('')}
                  </div>
                ` : ''}
              </div>
              <a href="${a.url}" target="_blank" rel="noopener noreferrer"
                class="py-2 px-3 rounded-lg bg-emerald-50 dark:bg-emerald-600/30 hover:bg-emerald-100 dark:hover:bg-emerald-600/50 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center justify-center gap-1 transition-all">
                ${t('visitLink')}
              </a>
            </div>
          `;
        });

        html += `
            </div>
          </div>
        `;
      }
    }

    target.innerHTML = html;
  }

  function renderGameWebsites(container) {
    state.resourceCategoryFilter = 'games';
    renderWebResources(container);
  }
  window.renderGameWebsites = renderGameWebsites;

  // 3. KNOWLEDGE NOTES TAB (PRIMARY FOCUS!)
  function renderKnowledgeNotes(container) {
    const subTabs = [
      { id: 'countries', label: t('subCountries'), icon: '🌐' },
      { id: 'comparisons', label: t('subComparisons'), icon: '⚔️' },
      { id: 'regions', label: t('subRegions'), icon: '🗺️' },
      { id: 'topics', label: t('subTopics'), icon: '🧩' },
      { id: 'islands', label: t('subIslands'), icon: '🏝️' },
      { id: 'flags', label: t('subFlags'), icon: '🚩' }
    ];

    let html = `
      <div class="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200/80 dark:border-slate-800 pb-5">
        <div>
          <h2 class="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 tracking-tight">
            <span>🧠</span> ${t('navKnowledge')}
          </h2>
          <p class="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 mt-1 font-medium">
            ${state.lang === 'zh' ? '全套核心线索：国家识别、强手对决、大国分区、专类 Meta' : 'Complete Meta Arsenal: Country Clues, Head-to-Head Duels, Regional Splitting & Topic Metas'}
          </p>
        </div>

        <!-- Sub Tabs Navigation -->
        <div class="flex flex-wrap gap-2">
          ${subTabs.map(sub => {
            const active = state.currentKnowledgeSubTab === sub.id;
            const cls = active
              ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/25 border-emerald-500 font-semibold"
              : "bg-white dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 hover:text-slate-900 dark:hover:text-white border-slate-200 dark:border-slate-700/60 shadow-xs";
            return `
              <button onclick="switchSubTab('${sub.id}')"
                class="px-3.5 py-1.5 rounded-lg text-xs border transition-all flex items-center gap-1.5 ${cls}">
                <span>${sub.icon}</span> ${sub.label}
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <div id="knowledge-sub-container"></div>
    `;

    container.innerHTML = html;

    const subContainer = document.getElementById('knowledge-sub-container');
    if (!subContainer) return;

    switch (state.currentKnowledgeSubTab) {
      case 'countries':
        renderCountries(subContainer);
        break;
      case 'comparisons':
        renderComparisons(subContainer);
        break;
      case 'regions':
        renderRegionalGuides(subContainer);
        break;
      case 'topics':
        renderTopicMetas(subContainer);
        break;
      case 'islands':
        renderIslandsTable(subContainer);
        break;
      case 'flags':
        renderFlags(subContainer);
        break;
      default:
        renderCountries(subContainer);
    }
  }

  // 3.1 Countries Index & Remote Islands
  function renderCountries(container) {
    const target = container || document.getElementById('tab-container');
    if (!target) return;

    const countryList = data.countries || [];
    const islandList = data.islands || [];
    const query = state.searchQuery;
    const cont = state.continentFilter;
    const tag = state.countryTagFilter;
    const sov = state.islandSovereignFilter;
    const mode = state.countryViewMode || 'countries';

    const continents = [
      { id: 'ALL', label: t('allContinents') },
      { id: 'Europe', label: t('continentEurope') },
      { id: 'Americas', label: t('continentAmericas') },
      { id: 'Asia', label: t('continentAsia') },
      { id: 'Africa', label: t('continentAfrica') },
      { id: 'Oceania', label: t('continentOceania') }
    ];

    const popularTags = [
      { id: 'ALL', labelZh: '全部标签', labelEn: 'All Tags' },
      { id: 'left', keyZh: '左侧行驶', keyEn: 'Left-Hand Drive', labelZh: '左侧行驶', labelEn: 'Left-Hand Drive' },
      { id: 'plate', keyZh: '车牌特征', keyEn: 'License Plates', labelZh: '车牌特征', labelEn: 'License Plates' },
      { id: 'pole', keyZh: '电线杆', keyEn: 'Utility Poles', labelZh: '电线杆', labelEn: 'Utility Poles' },
      { id: 'bollard', keyZh: '路缘标', keyEn: 'Bollards', labelZh: '路缘标', labelEn: 'Bollards' },
      { id: 'car', keyZh: '街景车', keyEn: 'Camera Car', labelZh: '街景车', labelEn: 'Camera Car' },
      { id: 'soil', keyZh: '红土壤', keyEn: 'Red Soil', labelZh: '红土壤', labelEn: 'Red Soil' },
      { id: 'lines', keyZh: '道路标线', keyEn: 'Road Markings', labelZh: '道路标线', labelEn: 'Road Markings' },
      { id: 'script', keyZh: '语言文字', keyEn: 'Language & Script', labelZh: '语言文字', labelEn: 'Language & Script' }
    ];

    // Filter Countries
    const filteredCountries = countryList.filter(item => {
      if (cont !== 'ALL') {
        if (cont === 'Americas') {
          if (!['North America', 'South America'].includes(item.continentEn)) return false;
        } else if (item.continentEn !== cont) {
          return false;
        }
      }
      if (tag !== 'ALL') {
        const targetTagObj = popularTags.find(pt => pt.id === tag);
        if (targetTagObj) {
          const matchZh = (item.tagsZh || []).includes(targetTagObj.keyZh);
          const matchEn = (item.tagsEn || []).includes(targetTagObj.keyEn);
          const matchLegacy = (item.tags || []).some(t => t.includes(targetTagObj.keyZh) || t.includes(targetTagObj.keyEn) || t.includes(targetTagObj.labelZh));
          if (!matchZh && !matchEn && !matchLegacy) return false;
        }
      }
      if (query) {
        const fullStr = `${item.nameZh} ${item.nameEn} ${item.descZh||''} ${item.descEn||''} ${item.desc||''} ${(item.tagsZh||[]).join(' ')} ${(item.tagsEn||[]).join(' ')}`.toLowerCase();
        return fullStr.includes(query);
      }
      return true;
    });

    // Filter Islands
    const sovereignOptions = [
      { id: 'ALL', labelZh: '全部归属国', labelEn: 'All Sovereignties' }
    ];
    const seenSov = new Set();
    islandList.forEach(isl => {
      const zh = isl.sovereignZh || isl.sovereign;
      const en = isl.sovereignEn || zh;
      if (zh && !seenSov.has(zh)) {
        seenSov.add(zh);
        sovereignOptions.push({ id: zh, labelZh: zh, labelEn: en });
      }
    });

    const filteredIslands = islandList.filter(item => {
      const itemSov = item.sovereignZh || item.sovereign;
      if (sov !== 'ALL' && itemSov !== sov) return false;
      if (query) {
        const text = `${item.nameZh} ${item.nameEn} ${item.locationZh||''} ${item.locationEn||''} ${item.location||''} ${item.sovereignZh||''} ${item.sovereignEn||''} ${item.sovereign||''} ${item.metaZh||''} ${item.metaEn||''} ${item.meta||''}`.toLowerCase();
        return text.includes(query);
      }
      return true;
    });

    // Helper: Build Countries Grid HTML
    function buildCountriesGridHtml() {
      let gridHtml = `
        <!-- Filters row -->
        <div class="mb-5 flex flex-col gap-3">
          <!-- Continent filter pills -->
          <div class="flex flex-wrap items-center gap-1.5">
            ${continents.map(c => {
              const active = state.continentFilter === c.id;
              const cls = active
                ? "bg-emerald-600 text-white font-semibold shadow-sm"
                : "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/50";
              return `
                <button onclick="filterContinent('${c.id}')"
                  class="px-3 py-1 rounded-md text-xs transition-colors ${cls}">
                  ${c.label}
                </button>
              `;
            }).join('')}
          </div>

          <!-- Tag pills -->
          <div class="flex flex-wrap items-center gap-1.5">
            <span class="text-xs text-slate-500 dark:text-slate-400 mr-1 font-medium">${t('allTags')}:</span>
            ${popularTags.map(tg => {
              const active = state.countryTagFilter === tg.id;
              const cls = active
                ? "bg-emerald-600 text-white font-semibold shadow-xs"
                : "bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800";
              const label = state.lang === 'zh' ? tg.labelZh : tg.labelEn;
              return `
                <button onclick="filterTag('${tg.id}')"
                  class="px-2.5 py-0.5 rounded text-xs transition-colors ${cls}">
                  ${label}
                </button>
              `;
            }).join('')}
            <span class="ml-auto text-xs text-slate-400 font-mono">${t('searchCount', { count: filteredCountries.length })}</span>
          </div>
        </div>

        <!-- Countries Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      `;

      if (filteredCountries.length === 0) {
        gridHtml += `
          <div class="col-span-full py-16 text-center text-slate-400">
            <p class="text-3xl mb-2">🔍</p>
            <p>${t('noResults')}</p>
          </div>
        `;
      } else {
        filteredCountries.forEach(c => {
          const countryTitle = state.lang === 'zh'
            ? `${c.nameZh} <span class="text-xs font-normal text-slate-500 dark:text-slate-400">(${c.nameEn})</span>`
            : `${c.nameEn} <span class="text-xs font-normal text-slate-500 dark:text-slate-400">(${c.nameZh})</span>`;

          const desc = state.lang === 'zh' ? (c.descZh || c.desc) : (c.descEn || c.descZh || c.desc);
          const tags = state.lang === 'zh' ? (c.tagsZh || c.tags || []) : (c.tagsEn || c.tagsZh || c.tags || []);
          const clues = (desc || '').split(/[；;\n]+/).map(s => s.trim()).filter(Boolean);

          gridHtml += `
            <div class="p-5 sm:p-5.5 rounded-2xl bg-white dark:bg-slate-900/75 border border-slate-200/90 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                  <div class="flex items-center gap-2.5 min-w-0">
                    <span class="text-2xl shrink-0 select-none">${c.flag}</span>
                    <h3 class="font-extrabold text-slate-900 dark:text-white text-base tracking-tight truncate">${countryTitle}</h3>
                  </div>
                  <span class="text-2xs px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono font-semibold border border-slate-200/80 dark:border-slate-700/60 shrink-0">
                    ${state.lang === 'zh' ? c.continentZh : c.continentEn}
                  </span>
                </div>

                <ul class="space-y-1.5 my-3 text-[12.5px] leading-relaxed text-slate-700 dark:text-slate-300">
                  ${clues.map(clue => `
                    <li class="flex items-start gap-2">
                      <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0"></span>
                      <span class="flex-1">${formatLineWithBadge(clue, 'emerald')}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <div class="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <div class="flex flex-wrap gap-1 mb-3">
                  ${tags.map(tg => `
                    <span class="px-2 py-0.5 text-2xs font-medium rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/40">${tg}</span>
                  `).join('')}
                </div>

                <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <button onclick="copyText('${escapeHtml((state.lang === 'zh' ? c.nameZh : c.nameEn) + ': ' + desc)}', this)"
                    class="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1 font-medium">
                    📋 ${t('copyClue')}
                  </button>
                  ${c.link ? `
                    <a href="${c.link}" target="_blank" rel="noopener noreferrer"
                      class="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium flex items-center gap-1">
                      ${t('discussionLink')}
                    </a>
                  ` : ''}
                </div>
              </div>
            </div>
          `;
        });
      }

      gridHtml += `</div>`;
      return gridHtml;
    }

    // Helper: Build Islands Table HTML
    function buildIslandsTableHtml(showHeader = true) {
      let tblHtml = `
        ${showHeader ? `
        <div class="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">
            ${state.lang === 'zh' ? '全球 31 处偏远离岛与海外领地专属街景车与基础设施速查' : 'Directory of 31 remote islands and overseas territories with distinctive metas'}
          </p>

          <div class="flex items-center gap-2">
            <span class="text-xs text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">${t('allSovereigns')}:</span>
            <select onchange="filterIslandSovereign(this.value)"
              class="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500 font-medium">
              ${sovereignOptions.map(s => `
                <option value="${s.id}" ${s.id === sov ? 'selected' : ''}>
                  ${state.lang === 'zh' ? s.labelZh : s.labelEn}
                </option>
              `).join('')}
            </select>
          </div>
        </div>
        ` : ''}

        <div class="overflow-x-auto rounded-2xl glass-card border border-slate-200/90 dark:border-slate-800/80 shadow-sm">
          <table class="w-full text-left text-xs">
            <thead class="bg-slate-100/90 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 font-mono uppercase tracking-wider border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th class="py-3.5 px-4 w-48">${t('islandColName')}</th>
                <th class="py-3.5 px-4 w-48">${t('islandColLoc')}</th>
                <th class="py-3.5 px-4 w-40">${t('islandColSov')}</th>
                <th class="py-3.5 px-4">${t('islandColMeta')}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
      `;

      if (filteredIslands.length === 0) {
        tblHtml += `
          <tr>
            <td colspan="4" class="py-12 text-center text-slate-400 font-medium">
              ${t('noResults')}
            </td>
          </tr>
        `;
      } else {
        filteredIslands.forEach(isl => {
          const namePrimary = state.lang === 'zh' ? isl.nameZh : isl.nameEn;
          const nameSecondary = state.lang === 'zh' ? isl.nameEn : isl.nameZh;
          const loc = state.lang === 'zh' ? (isl.locationZh || isl.location) : (isl.locationEn || isl.locationZh || isl.location);
          const sovBadge = state.lang === 'zh' ? (isl.sovereignZh || isl.sovereign) : (isl.sovereignEn || isl.sovereignZh || isl.sovereign);
          const meta = state.lang === 'zh' ? (isl.metaZh || isl.meta) : (isl.metaEn || isl.metaZh || isl.meta);
          const metaPoints = (meta || '').split(/[；;\n]+/).map(s => s.trim()).filter(Boolean);

          tblHtml += `
            <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
              <td class="py-3.5 px-4 font-bold text-slate-900 dark:text-white">
                <div class="font-extrabold text-[13px]">${namePrimary}</div>
                <div class="text-slate-400 text-2xs font-normal mt-0.5 font-sans">${nameSecondary}</div>
              </td>
              <td class="py-3.5 px-4 text-slate-600 dark:text-slate-400 font-medium">${loc}</td>
              <td class="py-3.5 px-4">
                <span class="px-2.5 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-800/40 text-teal-700 dark:text-teal-300 text-2xs font-semibold">
                  ${sovBadge}
                </span>
              </td>
              <td class="py-3.5 px-4 leading-relaxed">
                <div class="space-y-1">
                  ${metaPoints.map(pt => `
                    <div class="flex items-start gap-1.5 text-[12.5px] leading-relaxed">
                      <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400 shrink-0"></span>
                      <span class="flex-1">${inlineFormat(pt, 'teal')}</span>
                    </div>
                  `).join('')}
                </div>
              </td>
            </tr>
          `;
        });
      }

      tblHtml += `
            </tbody>
          </table>
        </div>
      `;
      return tblHtml;
    }

    // Compose Main Page
    let html = `
      <!-- Top Title & View Mode Selector -->
      <div class="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 class="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 tracking-tight">
            <span>🌐</span> ${t('navCountries')}
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
            ${state.lang === 'zh' ? '涵盖全球 105 个街景覆盖国主权特征 + 31 处偏远离岛与海外领地专属街景车与基础设施' : 'Comprehensive directory of 105 official street-view countries and 31 remote overseas territories & islands'}
          </p>
        </div>

        <!-- Mode Switcher Pills -->
        <div class="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 self-start md:self-auto shrink-0 shadow-2xs">
          <button onclick="setCountryViewMode('countries')"
            class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${mode === 'countries' ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
            ${t('countryModeCountries')}
          </button>
          <button onclick="setCountryViewMode('islands')"
            class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${mode === 'islands' ? 'bg-white dark:bg-slate-900 text-teal-600 dark:text-teal-400 shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
            ${t('countryModeIslands')}
          </button>
        </div>
      </div>
    `;

    // Cross-search alert banners
    if (query) {
      if (mode === 'countries' && filteredIslands.length > 0) {
        html += `
          <div class="mb-5 px-4 py-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/50 flex items-center justify-between text-xs text-teal-900 dark:text-teal-200 shadow-2xs">
            <span class="flex items-center gap-1.5 font-medium">
              <span>🏝️</span> ${t('matchedIslandsTip', { count: filteredIslands.length })}
            </span>
            <button onclick="setCountryViewMode('islands')" class="font-bold underline hover:text-teal-600 dark:hover:text-teal-300 ml-2">
              ${t('viewIslands')}
            </button>
          </div>
        `;
      } else if (mode === 'islands' && filteredCountries.length > 0) {
        html += `
          <div class="mb-5 px-4 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 flex items-center justify-between text-xs text-emerald-900 dark:text-emerald-200 shadow-2xs">
            <span class="flex items-center gap-1.5 font-medium">
              <span>🌐</span> ${t('matchedCountriesTip', { count: filteredCountries.length })}
            </span>
            <button onclick="setCountryViewMode('countries')" class="font-bold underline hover:text-emerald-600 dark:hover:text-emerald-300 ml-2">
              ${t('viewCountries')}
            </button>
          </div>
        `;
      }
    }

    if (mode === 'islands') {
      html += buildIslandsTableHtml(true);
    } else {
      html += buildCountriesGridHtml();
    }

    target.innerHTML = html;
  }

  // 3.2 Country Comparisons
  function renderComparisons(container) {
    const target = container || document.getElementById('tab-container');
    if (!target) return;

    const comps = data.comparisons || [];
    const query = state.searchQuery;

    const filtered = comps.filter(c => {
      if (!query) return true;
      const text = `${c.titleZh} ${c.titleEn} ${(c.similarities||[]).join(' ')} ${JSON.stringify(c.features||[])}`.toLowerCase();
      return text.includes(query);
    });

    let html = `
      <div class="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 class="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 tracking-tight">
            <span>⚔️</span> ${state.lang === 'zh' ? '经典国家对决与易混淆辨析 (20组)' : 'Head-to-Head Comparisons & Tricky Matchups (20 Pairs)'}
          </h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
            ${state.lang === 'zh' ? '针对排位赛与决斗模式最高频的相似邻国对比（荷兰/卢森堡、德奥、乌俄、捷斯、波罗的海三国等）' : 'High-stakes duel comparisons for neighbouring country confusion (NL vs LU, DE vs AT, UA vs RU, CZ vs SK, Baltics, etc.)'}
          </p>
        </div>
        <span class="text-xs text-slate-500 dark:text-slate-400 font-mono">${t('searchCount', { count: filtered.length })}</span>
      </div>

      <div class="space-y-6">
    `;

    filtered.forEach(c => {
      const title = state.lang === 'zh' ? c.titleZh : c.titleEn;
      const similarities = state.lang === 'zh'
        ? (c.similaritiesZh || c.similarities || [])
        : (c.similaritiesEn || c.similaritiesZh || c.similarities || []);

      html += `
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-900/75 border border-slate-200/90 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-amber-500/40 dark:hover:border-amber-500/30 transition-all duration-200">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
            <h4 class="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2 tracking-tight">
              <span class="text-amber-500">⚡</span> ${title}
            </h4>
            ${similarities && similarities.length > 0 ? `
              <div class="px-3.5 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-800 dark:text-amber-300 text-xs font-medium">
                <strong class="font-bold">${t('commonLabel')}</strong> ${similarities.join('; ')}
              </div>
            ` : ''}
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      `;

      (c.features || []).forEach(f => {
        const fName = state.lang === 'zh' ? (f.nameZh || f.name) : (f.nameEn || f.nameZh || f.name);
        const details = state.lang === 'zh' ? (f.detailsZh || f.details || []) : (f.detailsEn || f.detailsZh || f.details || []);

        html += `
          <div class="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800/90 hover:border-amber-400/40 dark:hover:border-amber-500/30 transition-all">
            <div class="text-xs font-bold text-slate-900 dark:text-emerald-400 mb-2.5 pb-2 border-b border-slate-200/70 dark:border-slate-800 flex items-center justify-between">
              <span class="flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                ${fName}
              </span>
              <span class="text-2xs text-slate-400 font-normal font-mono">${details.length} ${state.lang === 'zh' ? '条特征' : 'clues'}</span>
            </div>
            <ul class="space-y-2 text-[12.5px] leading-relaxed text-slate-700 dark:text-slate-300">
              ${details.map(d => `
                <li class="flex items-start gap-2">
                  <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 shrink-0"></span>
                  <div class="flex-1">${formatLineWithBadge(d, 'amber')}</div>
                </li>
              `).join('')}
            </ul>
          </div>
        `;
      });

      html += `
          </div>
        </div>
      `;
    });

    html += `</div>`;
    target.innerHTML = html;
  }

  // 3.3 Regional Deep-Dives
  // 3.3 Regional Deep-Dives
  function renderRegionalGuides(container) {
    const target = container || document.getElementById('tab-container');
    if (!target) return;

    const regions = data.regionalGuides || [];
    const query = state.searchQuery;
    const cont = state.regionContinentFilter || 'ALL';

    const regionContinents = [
      { id: 'ALL', labelZh: '全部大洲 (21国)', labelEn: 'All Continents (21)' },
      { id: 'Europe', labelZh: '欧洲 (7国)', labelEn: 'Europe (7)' },
      { id: 'Americas', labelZh: '美洲 (5国)', labelEn: 'Americas (5)' },
      { id: 'Asia', labelZh: '亚洲 (5国)', labelEn: 'Asia (5)' },
      { id: 'Oceania', labelZh: '大洋洲 (2国)', labelEn: 'Oceania (2)' },
      { id: 'Africa', labelZh: '非洲 (1国)', labelEn: 'Africa (1)' }
    ];

    const filtered = regions.filter(r => {
      if (cont !== 'ALL') {
        if (r.continent !== cont) {
          if (r.id === 'russia' && (cont === 'Europe' || cont === 'Asia')) {
            // Russia bridges both
          } else {
            return false;
          }
        }
      }
      if (!query) return true;
      const secText = (r.sections || []).map(s => `${s.headingZh||''} ${s.headingEn||''} ${s.contentZh||''} ${s.contentEn||''}`).join(' ');
      const text = `${r.nameZh} ${r.nameEn} ${r.rawContent || ''} ${secText}`.toLowerCase();
      return text.includes(query);
    });

    let current = filtered.find(r => r.id === state.activeRegionId) || filtered[0] || regions[0];

    let html = `
      <div class="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 tracking-tight">
            <span>🗺️</span> ${state.lang === 'zh' ? '大国地区深度细分 (21国)' : 'Regional Deep-Dive Guides (21 Major Countries)'}
          </h3>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
            ${state.lang === 'zh' ? '俄罗斯公路网/植被、美国50州车牌/区号、巴西DDD/CEP、印尼各岛电线杆、澳洲各州路缘标等' : 'Russia highway numbering, US 50 state plates, Brazil DDD codes, Indonesia island poles, Australia states, etc.'}
          </p>
        </div>
        <span class="text-xs text-slate-500 dark:text-slate-400 font-mono">${t('searchCount', { count: filtered.length })}</span>
      </div>

      <!-- Continent Filter Pills -->
      <div class="flex flex-wrap items-center gap-1.5 mb-3">
        ${regionContinents.map(c => {
          const active = cont === c.id;
          const cls = active
            ? "bg-blue-600 text-white font-semibold shadow-xs"
            : "bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/50";
          const label = state.lang === 'zh' ? c.labelZh : c.labelEn;
          return `
            <button onclick="filterRegionContinent('${c.id}')"
              class="px-3 py-1 rounded-lg text-xs transition-colors ${cls}">
              ${label}
            </button>
          `;
        }).join('')}
      </div>

      <!-- Country Selector Pills -->
      <div class="flex flex-wrap gap-2 mb-6 pb-2 border-b border-slate-200/80 dark:border-slate-800">
        ${filtered.map(r => {
          const active = current && current.id === r.id;
          const cls = active
            ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/25 border-blue-500 ring-2 ring-blue-500/20"
            : "bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 border-slate-200/80 dark:border-slate-700/50 shadow-xs";
          return `
            <button onclick="selectRegion('${r.id}')"
              class="px-3 py-1.5 rounded-xl text-xs border transition-all flex items-center gap-1.5 ${cls}">
              <span>${r.flag}</span>
              <span>${state.lang === 'zh' ? r.nameZh : r.nameEn}</span>
              <span class="text-2xs opacity-75 font-mono">(${(r.sections||[]).length})</span>
            </button>
          `;
        }).join('')}
      </div>
    `;

    if (current) {
      const currIdx = filtered.findIndex(r => r.id === current.id);
      const prevReg = filtered.length > 1 ? filtered[(currIdx - 1 + filtered.length) % filtered.length] : null;
      const nextReg = filtered.length > 1 ? filtered[(currIdx + 1) % filtered.length] : null;

      html += `
        <div class="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800/80 shadow-sm">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
            <div class="flex items-center gap-3">
              <span class="text-4xl select-none">${current.flag}</span>
              <div>
                <h4 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  ${state.lang === 'zh' ? current.nameZh : current.nameEn}
                </h4>
                <div class="flex items-center gap-2 mt-1">
                  <span class="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 font-semibold font-mono">
                    ${current.continent}
                  </span>
                  <span class="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    ${(current.sections || []).length} ${state.lang === 'zh' ? '个关键细分区' : 'Sections'}
                  </span>
                </div>
              </div>
            </div>
            <button onclick="copyCurrentRegional(this)"
              class="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 transition-all shadow-xs self-start sm:self-auto">
              📋 ${t('copyClue')}
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${current.sections.map((sec, idx) => {
              const heading = state.lang === 'zh' ? (sec.headingZh || sec.heading) : (sec.headingEn || sec.headingZh || sec.heading);
              const content = state.lang === 'zh' ? (sec.contentZh || sec.content) : (sec.contentEn || sec.contentZh || sec.content);
              return `
              <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/75 border border-slate-200/90 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-sky-500/40 dark:hover:border-sky-500/30 transition-all duration-200 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-100 dark:border-slate-800">
                    <div class="flex items-center gap-2.5">
                      <span class="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-300 border border-sky-500/30 flex items-center justify-center text-sm font-bold shrink-0">
                        📍
                      </span>
                      <h5 class="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white tracking-tight">
                        ${heading}
                      </h5>
                    </div>
                    <span class="text-2xs font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700/60">
                      #${idx + 1}
                    </span>
                  </div>
                  <div class="space-y-1">
                    ${formatCardContent(content, 'sky')}
                  </div>
                </div>
              </div>
              `;
            }).join('')}
          </div>

          <!-- Prev / Next Country Navigation Footer -->
          ${prevReg && nextReg ? `
            <div class="flex items-center justify-between gap-3 mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800">
              <button onclick="selectRegion('${prevReg.id}')"
                class="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-2 transition-all shadow-xs group">
                <span class="group-hover:-translate-x-0.5 transition-transform">←</span>
                <span>${prevReg.flag}</span>
                <span class="hidden sm:inline">${t('prevCountry')}:</span>
                <span class="font-bold text-slate-900 dark:text-white">${state.lang === 'zh' ? prevReg.nameZh : prevReg.nameEn}</span>
              </button>

              <button onclick="selectRegion('${nextReg.id}')"
                class="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-2 transition-all shadow-xs group">
                <span class="hidden sm:inline">${t('nextCountry')}:</span>
                <span class="font-bold text-slate-900 dark:text-white">${state.lang === 'zh' ? nextReg.nameZh : nextReg.nameEn}</span>
                <span>${nextReg.flag}</span>
                <span class="group-hover:translate-x-0.5 transition-transform">→</span>
              </button>
            </div>
          ` : ''}
        </div>
      `;
    }

    target.innerHTML = html;
  }

  // 3.4 Topic Metas (Elevated First-Class Module)
  const TOPIC_INFOGRAPHICS = {
    plates: { titleZh: '美国50州车牌特征图解', titleEn: 'US License Plates Chart', img: 'assets/images/infographics/us_license_plates.png' },
    taxis: { titleZh: '全球黄色车牌与出租车分布图', titleEn: 'World Yellow & Taxi License Plates Map', img: 'assets/images/infographics/yellow_license_plates_map.png' },
    cars: { titleZh: 'Gen 4 街景车全形态分布图', titleEn: 'Gen 4 Camera Car Forms Map', img: 'assets/images/infographics/gen4_prominent_forms_map.png' },
    poles: { titleZh: '全球电线杆分布与特征图解', titleEn: 'Poles Distribution Chart', img: 'assets/images/infographics/poles_distribution.png' },
    bollards: { titleZh: '全球各国标志性路缘标实拍全览图', titleEn: 'World Roadside Bollards Visual Map', img: 'assets/images/infographics/world_bollards_visual_map.png' },
    chevrons: { titleZh: '欧洲V形导向标志总表', titleEn: 'Europe Chevrons Chart', img: 'assets/images/infographics/chevrons_europe.png' },
    markings: { titleZh: '全球道路标线颜色分布图', titleEn: 'World Road Markings Map', img: 'assets/images/infographics/world_markings_map.png' },
    signs: { titleZh: '全球道路警告标志形状与配色分布图', titleEn: 'World Warning Sign Shapes & Colours Map', img: 'assets/images/infographics/warning_signs_world_map.jpg' },
    languages: { titleZh: '全球文字系统分布图', titleEn: 'World Scripts Map', img: 'assets/images/infographics/writing_systems_map.png' },
    architecture: { titleZh: '全球屋顶水箱颜色与造型分布图', titleEn: 'World Rooftop Water Tank Colours Map', img: 'assets/images/infographics/water_tank_colours_map.png' },
    vegetation: { titleZh: '全球平坦地形遭遇概率分布图', titleEn: 'World Flat Landscape Probability Map', img: 'assets/images/infographics/flat_landscape_map.png' },
    'road-numbers': { titleZh: '欧洲各国公路编号规则与高速路牌颜色全图解', titleEn: 'European Road Numbering & Highway Sign Colours', img: 'assets/images/infographics/euro_road_numbering_map.png' },
    misc: { titleZh: 'GeoGuessr 全球国家级梗与标志性线索手绘全图', titleEn: 'The GeoGuessr Map of References', img: 'assets/images/infographics/geoguessr_map_of_references.jpg' }
  };

  function renderSingleTopicCard(tp, isAllMode) {
    const title = state.lang === 'zh' ? tp.titleZh : tp.titleEn;
    const badge = state.lang === 'zh' ? (tp.badgeZh || tp.badge) : (tp.badgeEn || tp.badgeZh || tp.badge);
    const themeColor = TOPIC_COLORS[tp.id] || 'purple';
    const th = PALETTES[themeColor] || PALETTES.purple;
    const topicIcon = TOPIC_ICONS[tp.id] || '🔖';
    const infoGraphic = TOPIC_INFOGRAPHICS[tp.id];

    return `
      <div id="topic-sec-${tp.id}" class="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800/80 shadow-sm scroll-mt-24 mb-6 transition-card">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
          <div class="flex items-center gap-3">
            <span class="w-12 h-12 rounded-2xl ${th.badgeBg} flex items-center justify-center text-2xl shadow-xs shrink-0">
              ${topicIcon}
            </span>
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <h4 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  ${title}
                </h4>
                <span class="text-xs px-2.5 py-0.5 rounded-full bg-${themeColor}-500/10 text-${themeColor}-700 dark:text-${themeColor}-300 border border-${themeColor}-500/30 font-semibold inline-block">
                  ${badge}
                </span>
              </div>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
                ${(tp.sections || []).length} ${state.lang === 'zh' ? '个核心章节' : 'Sections'}
              </p>
            </div>
          </div>

          <div class="flex items-center gap-2 self-start sm:self-auto flex-wrap">
            ${infoGraphic ? `
              <button onclick="openLightbox('${infoGraphic.img}', '${escapeHtml(state.lang === 'zh' ? infoGraphic.titleZh : infoGraphic.titleEn)}')"
                class="px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-semibold flex items-center gap-1.5 border border-blue-200 dark:border-blue-800/60 transition-all shadow-xs">
                <span>📊</span> ${t('viewInfographic')}
              </button>
            ` : ''}
            <button onclick="copyCurrentTopic(this, '${tp.id}')"
              class="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 transition-all shadow-xs">
              📋 ${t('copyClue')}
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${(tp.sections || []).map((sec, idx) => {
            const secTitle = state.lang === 'zh' ? (sec.titleZh || sec.title) : (sec.titleEn || sec.titleZh || sec.title);
            const secText = state.lang === 'zh' ? (sec.textZh || sec.text) : (sec.textEn || sec.textZh || sec.text);
            return `
            <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/75 border border-slate-200/90 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-${themeColor}-500/40 dark:hover:border-${themeColor}-500/30 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-100 dark:border-slate-800">
                  <div class="flex items-center gap-2.5">
                    <span class="w-7 h-7 rounded-lg ${th.badgeBg} flex items-center justify-center text-xs shadow-2xs font-bold shrink-0">
                      ${topicIcon}
                    </span>
                    <h5 class="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white tracking-tight">
                      ${secTitle}
                    </h5>
                  </div>
                  <span class="text-2xs font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700/60">
                    #${idx + 1}
                  </span>
                </div>
                <div class="space-y-1">
                  ${formatCardContent(secText, themeColor)}
                </div>
              </div>
            </div>
          `;}).join('')}
        </div>
      </div>
    `;
  }

  function renderTopicMetas(container) {
    const target = container || document.getElementById('tab-container');
    if (!target) return;

    const topics = data.topics || [];
    const query = state.searchQuery;

    // Search Query Mode: Instant cross-topic matching
    if (query) {
      const matchedTopics = [];
      let totalMatchingSections = 0;

      topics.forEach(tp => {
        const matchingSections = (tp.sections || []).filter(s => {
          const full = `${s.titleZh||''} ${s.titleEn||''} ${s.textZh||''} ${s.textEn||''}`.toLowerCase();
          return full.includes(query);
        });

        const topicHeaderMatches = `${tp.titleZh} ${tp.titleEn} ${tp.badgeZh||''} ${tp.badgeEn||''}`.toLowerCase().includes(query);

        if (topicHeaderMatches || matchingSections.length > 0) {
          const displaySections = matchingSections.length > 0 ? matchingSections : tp.sections;
          totalMatchingSections += displaySections.length;
          matchedTopics.push({
            ...tp,
            sections: displaySections
          });
        }
      });

      let html = `
        <div class="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 tracking-tight">
              <span>🔍</span> ${state.lang === 'zh' ? '专项 Meta 搜索结果' : 'Specialized Meta Search Results'}
            </h3>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
              ${t('searchCount', { count: totalMatchingSections })} · 命中 ${matchedTopics.length} 个专题
            </p>
          </div>
          <button onclick="document.getElementById('global-search').value=''; onSearchInput('');"
            class="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold self-start border border-slate-200 dark:border-slate-700 transition-colors shadow-xs">
            ✕ ${state.lang === 'zh' ? '清除搜索' : 'Clear Search'}
          </button>
        </div>
      `;

      if (matchedTopics.length === 0) {
        html += `<div class="p-12 text-center text-slate-400 dark:text-slate-500">${t('noResults')}</div>`;
      } else {
        html += matchedTopics.map(tp => renderSingleTopicCard(tp, true)).join('');
      }

      target.innerHTML = html;
      return;
    }

    // Default / Browse Mode:
    let current = topics.find(t => t.id === state.activeTopicId) || topics[0];

    let html = `
      <div class="mb-6">
        <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 tracking-tight">
          <span>🧩</span> ${state.lang === 'zh' ? '14大专项 Meta 分类指南' : '14 Specialized Meta Knowledge Modules'}
        </h3>
        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
          ${state.lang === 'zh' ? '车牌、出租车、电线杆、路缘标、道路标线、街景车、人行标志、水箱、门牌、语言等专精知识' : 'Plates, taxis, utility poles, bollards, markings, Google cars, signs, water tanks, languages, and more'}
        </p>
      </div>

      <!-- Topic Selector Pills -->
      <div class="flex flex-wrap gap-2 mb-6 pb-2 border-b border-slate-200/80 dark:border-slate-800">
        ${topics.map(tp => {
          const active = current && current.id === tp.id;
          const icon = TOPIC_ICONS[tp.id] || '🔖';
          const cls = active
            ? "bg-purple-600 text-white font-semibold shadow-md shadow-purple-600/25 border-purple-500 ring-2 ring-purple-500/20"
            : "bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 border-slate-200/80 dark:border-slate-700/50 shadow-xs";
          return `
            <button onclick="selectTopic('${tp.id}')"
              class="px-3.5 py-1.5 rounded-xl text-xs border transition-all flex items-center gap-1.5 ${cls}">
              <span>${icon}</span>
              <span>${state.lang === 'zh' ? tp.titleZh : tp.titleEn}</span>
              <span class="text-2xs opacity-75 font-mono">(${(tp.sections||[]).length})</span>
            </button>
          `;
        }).join('')}
      </div>
    `;

    // Render Single Topic Card
    if (current) {
      html += renderSingleTopicCard(current, false);

      // Prev / Next Navigation Footer
      const currIdx = topics.findIndex(t => t.id === current.id);
      const prevTopic = topics[(currIdx - 1 + topics.length) % topics.length];
      const nextTopic = topics[(currIdx + 1) % topics.length];

      const prevTitle = state.lang === 'zh' ? prevTopic.titleZh : prevTopic.titleEn;
      const nextTitle = state.lang === 'zh' ? nextTopic.titleZh : nextTopic.titleEn;
      const prevIcon = TOPIC_ICONS[prevTopic.id] || '🔖';
      const nextIcon = TOPIC_ICONS[nextTopic.id] || '🔖';

      html += `
        <div class="flex items-center justify-between gap-3 mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800">
          <button onclick="selectTopic('${prevTopic.id}')"
            class="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-2 transition-all shadow-xs group">
            <span class="group-hover:-translate-x-0.5 transition-transform">←</span>
            <span>${prevIcon}</span>
            <span class="hidden sm:inline">${t('prevTopic')}:</span>
            <span class="font-bold text-slate-900 dark:text-white">${prevTitle}</span>
          </button>

          <button onclick="selectTopic('${nextTopic.id}')"
            class="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-2 transition-all shadow-xs group">
            <span class="hidden sm:inline">${t('nextTopic')}:</span>
            <span class="font-bold text-slate-900 dark:text-white">${nextTitle}</span>
            <span>${nextIcon}</span>
            <span class="group-hover:translate-x-0.5 transition-transform">→</span>
          </button>
        </div>
      `;
    }

    target.innerHTML = html;
  }

  // 3.5 Backwards Compatibility Routing Helpers
  function renderFlags(container) {
    state.infographicsViewMode = 'flags';
    renderInfographicsGallery(container);
  }

  function renderIslandsTable(container) {
    state.countryViewMode = 'islands';
    renderCountries(container);
  }

  function renderFlashcards(container) {
    state.infographicsViewMode = 'flags';
    renderInfographicsGallery(container);
  }

  // 4. INFOGRAPHICS & FLAG MNEMONICS TAB
  const KNOWN_FLAG_EMOJIS = {
    'åland': '🇦🇽',
    'aland': '🇦🇽'
  };

  const COUNTRY_ZH_MAP = {
    'denmark': '丹麦', 'sweden': '瑞典', 'norway': '挪威', 'finland': '芬兰',
    'iceland': '冰岛', 'faroe islands': '法罗群岛', 'georgia': '格鲁吉亚',
    'aland': '奥兰群岛', 'åland': '奥兰群岛', 'united kingdom': '英国',
    'greece': '希腊', 'switzerland': '瑞士', 'malta': '马耳他'
  };
  (data.countries || []).forEach(c => {
    if (c.nameEn && c.nameZh) {
      COUNTRY_ZH_MAP[c.nameEn.toLowerCase()] = c.nameZh;
    }
  });

  function formatFlagCountryHeader(cleanHeader, lang) {
    const m = cleanHeader.match(/^([a-zA-Z\s\-\.\x27]+)\s*\(([^)]+)\)$/);
    if (m) {
      const en = m[1].trim();
      const zh = m[2].trim();
      return lang === 'zh'
        ? `${zh} <span class="text-xs font-normal text-slate-500 dark:text-slate-400">(${en})</span>`
        : `${en} <span class="text-xs font-normal text-slate-500 dark:text-slate-400">(${zh})</span>`;
    }
    const zhLookup = COUNTRY_ZH_MAP[cleanHeader.toLowerCase()];
    if (zhLookup) {
      return lang === 'zh'
        ? `${zhLookup} <span class="text-xs font-normal text-slate-500 dark:text-slate-400">(${cleanHeader})</span>`
        : `${cleanHeader} <span class="text-xs font-normal text-slate-500 dark:text-slate-400">(${zhLookup})</span>`;
    }
    return cleanHeader;
  }

  function parseFlagItem(it, lang) {
    const raw = lang === 'zh' ? (it.textZh || it.text) : (it.textEn || it.textZh || it.text);
    if (!raw || raw.endsWith('：** **') || raw.endsWith(':** **')) return null;

    let emojiMatch = raw.match(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/);
    let emoji = emojiMatch ? emojiMatch[0] : '';

    const colonMatch = raw.match(/^([^\:\：]+)[\:\：](.+)$/s);
    if (!colonMatch) return null;

    let headerRaw = colonMatch[1].replace(/\*\*/g, '').trim();
    let body = colonMatch[2].trim();

    if (!emoji) {
      const bodyEmojiMatch = body.match(/^([\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF])[\:\：]?\s*(.+)$/s);
      if (bodyEmojiMatch) {
        emoji = bodyEmojiMatch[1];
        body = bodyEmojiMatch[2].trim();
      }
    }

    if (!emoji) {
      for (const [k, v] of Object.entries(KNOWN_FLAG_EMOJIS)) {
        if (headerRaw.toLowerCase().includes(k)) {
          emoji = v;
          break;
        }
      }
    }
    if (!emoji) emoji = '🚩';

    let cleanHeader = headerRaw.replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g, '').trim();
    cleanHeader = cleanHeader.replace(/^[*\s]+|[*\s]+$/g, '');

    let mnemonic = '';
    let pattern = body;

    const mMatch = body.match(/(?:记忆[点]?|Mnemonic|Memory|Rhyme)[:：]\s*(.+)$/i);
    if (mMatch) {
      mnemonic = mMatch[1].replace(/^[*\s“"\x27]+|[*\s”"\x27\.\；。]+$/g, '').trim();
      pattern = body.substring(0, mMatch.index).trim();
    } else {
      const parts = body.split(/[。\.]\s*(.+)/);
      if (parts.length > 1 && parts[1].trim()) {
        pattern = parts[0].trim();
        mnemonic = parts[1].replace(/^[*\s“"\x27]+|[*\s”"\x27\.\；。]+$/g, '').trim();
      }
    }

    pattern = pattern.replace(/^[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF][\:\：]?\s*/, '');
    pattern = pattern.replace(/^[*\s]+|[*\s\.\；。]+$/g, '');

    return {
      emoji,
      headerHtml: formatFlagCountryHeader(cleanHeader, lang),
      cleanHeader,
      mnemonic,
      pattern,
      subgroup: it.subgroup,
      subgroupEn: it.subgroupEn
    };
  }

  function renderInfographicsGallery(container) {
    const target = container || document.getElementById('tab-container');
    if (!target) return;

    const chartsList = (data.webResources && data.webResources.infographics) || [];
    const flagsData = data.flags || [];
    const query = state.searchQuery;
    const mode = state.infographicsViewMode || 'charts';
    const chartCat = state.chartCategoryFilter || 'ALL';
    const flagRegion = state.flagRegionFilter || 'ALL';

    const infoTagMap = {
      '语言': 'Language',
      '文字': 'Scripts',
      '全球地图': 'World Map',
      '道路标线': 'Road Markings',
      '左右行': 'Driving Side',
      '街景覆盖': 'SV Coverage',
      '街景车': 'Camera Car',
      '核心Meta': 'Core Meta',
      '车牌': 'License Plates',
      '美国': 'USA',
      '加拿大': 'Canada',
      '大国地区': 'Regions',
      '交通标志': 'Road Signs',
      'V形导向牌': 'Chevrons',
      '欧洲': 'Europe',
      '路牌': 'Directional Signs',
      '标志设计': 'Signage Design',
      '电线杆': 'Utility Poles',
      '路缘标': 'Bollards',
      '建筑与水箱': 'Water Tanks',
      '自然地理': 'Landscape',
      '基础设施': 'Infrastructure',
      '全球速查': 'Global Cheat Sheet',
      '西里尔字母': 'Cyrillic',
      '东欧': 'Eastern Europe',
      '希腊字母': 'Greek Script',
      '字母辨识': 'Script ID',
      '东南亚': 'Southeast Asia',
      '国旗': 'Flags',
      '高阶Meta': 'Advanced Meta'
    };

    const chartCategories = [
      { id: 'ALL', labelZh: '全部图解 (30)', labelEn: 'All Charts (30)', tags: [] },
      { id: 'core', labelZh: '🌍 左右行·标线·覆盖·地形 (4)', labelEn: '🌍 Driving·Markings·Coverage·Terrain (4)', tags: ['左右行', '道路标线', '街景覆盖', '自然地理'] },
      { id: 'car', labelZh: '📷 街景车与天线 (3)', labelEn: '📷 Camera & Car Meta (3)', tags: ['街景车'] },
      { id: 'plate', labelZh: '🚗 车牌特征与法规 (5)', labelEn: '🚗 License Plates (5)', tags: ['车牌'] },
      { id: 'sign', labelZh: '⚠️ 路牌与交通标志 (6)', labelEn: '⚠️ Signs & Chevrons (6)', tags: ['交通标志', '路牌', 'V形导向牌'] },
      { id: 'infra', labelZh: '⚡ 电线杆·护柱·水箱 (4)', labelEn: '⚡ Poles·Bollards·Tanks (4)', tags: ['电线杆', '路缘标', '建筑与水箱'] },
      { id: 'lang', labelZh: '🔤 语言文字·国旗·梗图 (8)', labelEn: '🔤 Scripts·Flags·Atlas (8)', tags: ['语言', '文字', '国旗'] }
    ];

    // Filter Charts
    const filteredCharts = chartsList.filter(item => {
      if (chartCat !== 'ALL') {
        const catObj = chartCategories.find(c => c.id === chartCat);
        if (catObj) {
          const itemTags = item.tags || [];
          const matchesCat = catObj.tags.some(tg => itemTags.includes(tg)) || (chartCat === 'lang' && item.id === 'geoguessr-map-of-references');
          if (!matchesCat) return false;
        }
      }
      if (!query) return true;
      const text = `${item.titleZh} ${item.titleEn} ${item.descZh} ${item.descEn} ${(item.tags||[]).join(' ')}`.toLowerCase();
      return text.includes(query);
    });

    // Flatten & Filter Flag Items
    const allFlagItems = [];
    flagsData.forEach(group => {
      const regZh = group.regionZh || group.region;
      const regEn = group.regionEn || regZh;
      (group.items || []).forEach(it => {
        const parsed = parseFlagItem(it, state.lang);
        if (parsed) {
          allFlagItems.push({
            ...parsed,
            regionZh: regZh,
            regionEn: regEn,
            rawItem: it
          });
        }
      });
    });

    const flagRegions = [
      { id: 'ALL', labelZh: '全部大区', labelEn: 'All Regions' },
      { id: 'Europe', labelZh: '欧洲 (41)', labelEn: 'Europe (41)' },
      { id: 'Americas', labelZh: '美洲 (27)', labelEn: 'Americas (27)' },
      { id: 'Asia', labelZh: '亚洲 (24)', labelEn: 'Asia (24)' },
      { id: 'Africa', labelZh: '非洲 (11)', labelEn: 'Africa (11)' },
      { id: 'Oceania', labelZh: '大洋洲 (9)', labelEn: 'Oceania (9)' }
    ];

    const filteredFlags = allFlagItems.filter(f => {
      // Region Filter
      if (flagRegion !== 'ALL') {
        if (flagRegion === 'Americas') {
          if (!['北美洲', '南美洲', 'North America', 'South America'].includes(f.regionZh) && !['North America', 'South America'].includes(f.regionEn)) {
            return false;
          }
        } else if (f.regionEn !== flagRegion && f.regionZh !== flagRegion) {
          return false;
        }
      }

      // Query Search
      if (query) {
        const fullText = `${f.cleanHeader} ${f.mnemonic} ${f.pattern} ${f.regionZh} ${f.regionEn} ${f.subgroup||''} ${f.subgroupEn||''}`.toLowerCase();
        return fullText.includes(query);
      }
      return true;
    });

    // Helper: Build Charts HTML
    function buildChartsHtml() {
      let chartsHtml = `
        <!-- Category Filter Pills -->
        <div class="mb-5 flex flex-wrap items-center gap-1.5">
          ${chartCategories.map(cat => {
            const active = chartCat === cat.id;
            const cls = active
              ? "bg-rose-600 text-white font-semibold shadow-sm"
              : "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/50";
            return `
              <button onclick="filterChartCategory('${cat.id}')"
                class="px-3 py-1 rounded-md text-xs transition-colors ${cls}">
                ${state.lang === 'zh' ? cat.labelZh : cat.labelEn}
              </button>
            `;
          }).join('')}
          <span class="ml-auto text-xs text-slate-400 font-mono">${t('chartsCount', { count: filteredCharts.length })}</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      `;

      if (filteredCharts.length === 0) {
        chartsHtml += `
          <div class="col-span-full py-16 text-center text-slate-400">
            <p class="text-3xl mb-2">🔍</p>
            <p>${t('noResults')}</p>
          </div>
        `;
      } else {
        filteredCharts.forEach(info => {
          const title = state.lang === 'zh' ? info.titleZh : info.titleEn;
          const desc = state.lang === 'zh' ? info.descZh : info.descEn;

          chartsHtml += `
            <div class="glass-card rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-700/70 hover:border-blue-500/70 transition-card flex flex-col justify-between shadow-xs">
              <div>
                <div class="relative bg-slate-100 dark:bg-slate-950 aspect-video overflow-hidden cursor-pointer group"
                  onclick="openLightbox('${info.image}', '${escapeHtml(title)}')">
                  <img src="${info.image}" alt="${title}" loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1.5">
                    <span>🔍</span> ${t('imageEnlarge')}
                  </div>
                </div>

                <div class="p-5">
                  <div class="flex flex-wrap gap-1.5 mb-2">
                    ${(info.tags || []).map(tg => {
                      const label = state.lang === 'zh' ? tg : (infoTagMap[tg] || tg);
                      return `<span class="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/40 text-2xs">${label}</span>`;
                    }).join('')}
                  </div>
                  <h3 class="font-bold text-slate-900 dark:text-white text-base mb-2">
                    ${title}
                  </h3>
                  <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    ${desc}
                  </p>
                </div>
              </div>

              <div class="p-5 pt-0">
                <button onclick="openLightbox('${info.image}', '${escapeHtml(title)}')"
                  class="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-1.5 transition-colors">
                  <span>🔍</span> ${t('imageEnlarge')}
                </button>
              </div>
            </div>
          `;
        });
      }

      chartsHtml += `</div>`;
      return chartsHtml;
    }

    // Helper: Build Flags HTML
    function buildFlagsHtml() {
      let flagsHtml = `
        <!-- Region Filter Pills -->
        <div class="mb-5 flex flex-wrap items-center gap-1.5">
          ${flagRegions.map(reg => {
            const active = flagRegion === reg.id;
            const cls = active
              ? "bg-rose-600 text-white font-semibold shadow-sm"
              : "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/50";
            return `
              <button onclick="filterFlagRegion('${reg.id}')"
                class="px-3 py-1 rounded-md text-xs transition-colors ${cls}">
                ${state.lang === 'zh' ? reg.labelZh : reg.labelEn}
              </button>
            `;
          }).join('')}
          <span class="ml-auto text-xs text-slate-400 font-mono">${t('flagsCount', { count: filteredFlags.length })}</span>
        </div>

        <!-- Flag Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      `;

      if (filteredFlags.length === 0) {
        flagsHtml += `
          <div class="col-span-full py-16 text-center text-slate-400">
            <p class="text-3xl mb-2">🚩</p>
            <p>${t('noResults')}</p>
          </div>
        `;
      } else {
        filteredFlags.forEach(f => {
          const sub = state.lang === 'zh' ? f.subgroup : (f.subgroupEn || f.subgroup);

          flagsHtml += `
            <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/75 border border-slate-200/90 dark:border-slate-800/80 hover:border-rose-400/60 dark:hover:border-rose-500/50 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div>
                <!-- Flag & Title Header -->
                <div class="flex items-start justify-between gap-3 mb-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div class="flex items-center gap-3 min-w-0">
                    <span class="text-4xl select-none filter drop-shadow-sm leading-none shrink-0">${f.emoji}</span>
                    <div class="min-w-0">
                      <h4 class="font-extrabold text-base text-slate-900 dark:text-white leading-tight truncate">
                        ${f.headerHtml}
                      </h4>
                      <div class="flex items-center gap-1.5 mt-1 flex-wrap">
                        <span class="px-2 py-0.5 rounded text-2xs font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                          ${state.lang === 'zh' ? f.regionZh : f.regionEn}
                        </span>
                        ${sub && sub !== '全部' && sub !== 'All' ? `
                          <span class="px-2 py-0.5 rounded-md bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800/40 text-2xs font-medium truncate max-w-[170px]" title="${sub}">
                            ${sub}
                          </span>
                        ` : ''}
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Mnemonic Callout Box -->
                ${f.mnemonic ? `
                  <div class="mb-3 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-transparent border border-amber-500/30 dark:border-amber-400/20 text-slate-800 dark:text-amber-100 text-xs font-medium flex items-start gap-2 shadow-2xs">
                    <span class="text-amber-500 dark:text-amber-400 shrink-0 text-sm">💡</span>
                    <div class="leading-relaxed">
                      <strong class="text-amber-700 dark:text-amber-300 font-bold mr-1">${t('flagMnemonicPrefix')}:</strong>
                      <span class="font-semibold text-slate-900 dark:text-white">“${f.mnemonic}”</span>
                    </div>
                  </div>
                ` : ''}

                <!-- Visual Pattern Details -->
                <div class="text-[12.5px] leading-relaxed text-slate-600 dark:text-slate-300">
                  <span class="text-2xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1 font-mono">${t('flagPatternLabel')}:</span>
                  ${formatLineWithBadge(f.pattern, 'rose')}
                </div>
              </div>
            </div>
          `;
        });
      }

      flagsHtml += `</div>`;
      return flagsHtml;
    }

    // Compose Main Page
    let html = `
      <!-- Top Title & View Mode Selector -->
      <div class="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 class="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 tracking-tight">
            <span>📊</span> ${t('navInfographics')}
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
            ${state.lang === 'zh' ? '全套本地高清识别图解 + 全球 114 面国旗速记口诀与构图特征卡片' : 'High-resolution identification infographics and 114 national flag mnemonic cards'}
          </p>
        </div>

        <!-- Mode Switcher Pills -->
        <div class="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 self-start md:self-auto shrink-0 shadow-2xs">
          <button onclick="setInfographicsViewMode('charts')"
            class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${mode === 'charts' ? 'bg-white dark:bg-slate-900 text-rose-600 dark:text-rose-400 shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
            ${t('infoModeCharts')}
          </button>
          <button onclick="setInfographicsViewMode('flags')"
            class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${mode === 'flags' ? 'bg-white dark:bg-slate-900 text-rose-600 dark:text-rose-400 shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
            ${t('infoModeFlags')}
          </button>
        </div>
      </div>
    `;

    // Cross-search alert banners
    if (query) {
      if (mode === 'charts' && filteredFlags.length > 0) {
        html += `
          <div class="mb-5 px-4 py-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/50 flex items-center justify-between text-xs text-rose-900 dark:text-rose-200 shadow-2xs">
            <span class="flex items-center gap-1.5 font-medium">
              <span>🚩</span> ${t('flagsCount', { count: filteredFlags.length })} 匹配当前搜索
            </span>
            <button onclick="setInfographicsViewMode('flags')" class="font-bold underline hover:text-rose-600 dark:hover:text-rose-300 ml-2">
              切换至国旗口诀 →
            </button>
          </div>
        `;
      } else if (mode === 'flags' && filteredCharts.length > 0) {
        html += `
          <div class="mb-5 px-4 py-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50 flex items-center justify-between text-xs text-blue-900 dark:text-blue-200 shadow-2xs">
            <span class="flex items-center gap-1.5 font-medium">
              <span>📊</span> ${filteredCharts.length} 张核心图解匹配当前搜索
            </span>
            <button onclick="setInfographicsViewMode('charts')" class="font-bold underline hover:text-blue-600 dark:hover:text-blue-300 ml-2">
              切换至核心图解 →
            </button>
          </div>
        `;
      }
    }

    if (mode === 'flags') {
      html += buildFlagsHtml();
    } else {
      html += buildChartsHtml();
    }

    target.innerHTML = html;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/'/g, "\\'")
      .replace(/"/g, '&quot;')
      .replace(/\n/g, '\\n');
  }

  const PALETTES = {
    purple: {
      bar: "bg-purple-500",
      subBar: "bg-purple-400",
      bullet: "bg-purple-500 dark:bg-purple-400",
      bulletSub: "bg-purple-400 dark:bg-purple-500",
      keywordBadge: "bg-purple-50 dark:bg-purple-950/70 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-800/70",
      code: "bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/60",
      badgeBg: "bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/30"
    },
    emerald: {
      bar: "bg-emerald-500",
      subBar: "bg-emerald-400",
      bullet: "bg-emerald-500 dark:bg-emerald-400",
      bulletSub: "bg-emerald-400 dark:bg-emerald-500",
      keywordBadge: "bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800/70",
      code: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60",
      badgeBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30"
    },
    sky: {
      bar: "bg-sky-500",
      subBar: "bg-sky-400",
      bullet: "bg-sky-500 dark:bg-sky-400",
      bulletSub: "bg-sky-400 dark:bg-sky-500",
      keywordBadge: "bg-sky-50 dark:bg-sky-950/70 text-sky-800 dark:text-sky-200 border-sky-200 dark:border-sky-800/70",
      code: "bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800/60",
      badgeBg: "bg-sky-500/10 text-sky-600 dark:text-sky-300 border border-sky-500/30"
    },
    blue: {
      bar: "bg-blue-500",
      subBar: "bg-blue-400",
      bullet: "bg-blue-500 dark:bg-blue-400",
      bulletSub: "bg-blue-400 dark:bg-blue-500",
      keywordBadge: "bg-blue-50 dark:bg-blue-950/70 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-800/70",
      code: "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/60",
      badgeBg: "bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/30"
    },
    amber: {
      bar: "bg-amber-500",
      subBar: "bg-amber-400",
      bullet: "bg-amber-500 dark:bg-amber-400",
      bulletSub: "bg-amber-400 dark:bg-amber-500",
      keywordBadge: "bg-amber-50 dark:bg-amber-950/70 text-amber-800 dark:text-amber-200 border-amber-200 dark:border-amber-800/70",
      code: "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/60",
      badgeBg: "bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/30"
    },
    rose: {
      bar: "bg-rose-500",
      subBar: "bg-rose-400",
      bullet: "bg-rose-500 dark:bg-rose-400",
      bulletSub: "bg-rose-400 dark:bg-rose-500",
      keywordBadge: "bg-rose-50 dark:bg-rose-950/70 text-rose-800 dark:text-rose-200 border-rose-200 dark:border-rose-800/70",
      code: "bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/60",
      badgeBg: "bg-rose-500/10 text-rose-600 dark:text-rose-300 border border-rose-500/30"
    },
    teal: {
      bar: "bg-teal-500",
      subBar: "bg-teal-400",
      bullet: "bg-teal-500 dark:bg-teal-400",
      bulletSub: "bg-teal-400 dark:bg-teal-500",
      keywordBadge: "bg-teal-50 dark:bg-teal-950/70 text-teal-800 dark:text-teal-200 border-teal-200 dark:border-teal-800/70",
      code: "bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800/60",
      badgeBg: "bg-teal-500/10 text-teal-600 dark:text-teal-300 border border-teal-500/30"
    }
  };

  const TOPIC_COLORS = {
    plates: 'emerald',
    taxis: 'amber',
    cars: 'sky',
    poles: 'purple',
    bollards: 'rose',
    markings: 'emerald',
    signs: 'amber',
    chevrons: 'rose',
    languages: 'purple',
    architecture: 'blue',
    vegetation: 'emerald',
    'road-numbers': 'sky',
    phones: 'emerald',
    misc: 'purple'
  };

  const TOPIC_ICONS = {
    plates: '🚗',
    taxis: '🚕',
    cars: '📷',
    poles: '⚡',
    bollards: '🛡️',
    markings: '🛣️',
    signs: '⚠️',
    chevrons: '↪️',
    languages: '🔤',
    architecture: '🏠',
    vegetation: '🌲',
    'road-numbers': '🧭',
    phones: '📞',
    misc: '💡'
  };

  function inlineFormat(str, theme = 'purple') {
    if (!str) return '';
    const th = PALETTES[theme] || PALETTES.purple;
    let s = str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Bold
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>');
    // Italic
    s = s.replace(/\*([^*]+)\*/g, '<em class="text-slate-600 dark:text-slate-300 not-italic font-medium">$1</em>');
    // Code
    s = s.replace(/`([^`]+)`/g, `<code class="px-1.5 py-0.5 rounded font-mono text-[12px] font-semibold border ${th.code}">$1</code>`);
    // Links
    s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline font-medium inline-flex items-center gap-0.5">$1 <span class="text-2xs opacity-70">↗</span></a>');

    // Highlight mnemonic badges: 记忆：... or Mnemonic: ...
    s = s.replace(/(记忆[点]?：|Mnemonic:)\s*(“[^”]+”|"[^"]+"|[^\n；;.<]+)/g, '<span class="inline-flex items-center px-1.5 py-0.5 rounded-md text-2xs font-bold bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/30 my-0.5 align-baseline">💡 $1 $2</span>');

    return s;
  }

  function formatLineWithBadge(text, theme = 'purple') {
    if (!text) return '';
    const th = PALETTES[theme] || PALETTES.purple;

    // Support markdown links with bold like [**Senegal**](...) or [**Senegal](...)
    const mLink = text.match(/^\[\*\*([^*\]]+)\*?\]\([^)]+\)\s*(.*?)(?:[:：]|\*\*[:：]|\*\*)\s*(.*)/);
    if (mLink) {
      const rawKey = (mLink[1].trim() + (mLink[2] ? ' ' + mLink[2].replace(/[:：*]+$/, '').trim() : '')).trim();
      const rest = mLink[3].replace(/^\*+\s*/, '');
      const badge = `<span class="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold ${th.keywordBadge} border mr-1.5 shrink-0 align-baseline select-text tracking-wide shadow-2xs">${rawKey}</span>`;
      return badge + inlineFormat(rest, theme);
    }

    const m = text.match(/^(\*\*([^*]+)\*\*[:：]?|\`([^\`]+)\`[:：]?)\s*(.*)/);
    if (m) {
      const isCode = Boolean(m[3]);
      const rawKey = (m[2] || m[3]).replace(/[:：]+$/, '').trim();
      const rest = m[4];
      if (rawKey.length > 0 && rawKey.length <= 45) {
        if (isCode) {
          const badge = `<code class="px-1.5 py-0.5 rounded font-mono text-[12px] font-bold border ${th.code} mr-1.5 shrink-0 align-baseline">${rawKey}</code>`;
          return badge + inlineFormat(rest, theme);
        } else {
          const badge = `<span class="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold ${th.keywordBadge} border mr-1.5 shrink-0 align-baseline select-text tracking-wide shadow-2xs">${rawKey}</span>`;
          return badge + inlineFormat(rest, theme);
        }
      }
    }
    return inlineFormat(text, theme);
  }

  function formatCardContent(rawText, colorTheme = 'purple') {
    if (!rawText) return '';
    const th = PALETTES[colorTheme] || PALETTES.purple;
    const lines = rawText.split('\n');
    const result = [];

    for (let i = 0; i < lines.length; i++) {
      const rawLine = lines[i];
      const trimmed = rawLine.trim();
      if (!trimmed) continue;

      // Check blockquote / alert callouts
      if (trimmed.startsWith('>') || trimmed.startsWith('*(注意：') || trimmed.startsWith('(注意：') || trimmed.startsWith('(注：')) {
        const calloutText = trimmed.replace(/^[>*(\s]+/, '').replace(/[)*]+$/, '');
        result.push(`
          <div class="my-2.5 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5 shadow-2xs">
            <span class="text-base shrink-0 select-none">💡</span>
            <div class="leading-relaxed font-medium">${inlineFormat(calloutText, colorTheme)}</div>
          </div>
        `);
        continue;
      }

      const matchIndent = rawLine.match(/^(\s*)/);
      const indentSpaces = matchIndent ? matchIndent[1].length : 0;
      const cleanContent = trimmed.replace(/^[-*•]\s*/, '');

      let hasChildren = false;
      for (let j = i + 1; j < lines.length; j++) {
        const nextRaw = lines[j];
        const nextTrimmed = nextRaw.trim();
        if (nextTrimmed) {
          const nextIndent = (nextRaw.match(/^(\s*)/) || [''])[0].length;
          if (nextIndent > indentSpaces) {
            hasChildren = true;
          }
          break;
        }
      }

      if (indentSpaces < 3) {
        if (hasChildren || cleanContent.endsWith('：') || cleanContent.endsWith(':')) {
          result.push(`
            <div class="mt-4 first:mt-0 mb-2 pt-2 first:pt-0 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800/60 pb-1.5">
              <span class="w-2 h-4 rounded-full ${th.bar} shrink-0"></span>
              <span class="font-extrabold text-slate-900 dark:text-white text-[14px] tracking-tight">
                ${inlineFormat(cleanContent, colorTheme)}
              </span>
            </div>
          `);
        } else {
          result.push(`
            <div class="py-1 flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
              <span class="mt-2 w-1.5 h-1.5 rounded-full ${th.bullet} shrink-0"></span>
              <div class="flex-1">${formatLineWithBadge(cleanContent, colorTheme)}</div>
            </div>
          `);
        }
      } else if (indentSpaces >= 3 && indentSpaces < 7) {
        if (hasChildren) {
          result.push(`
            <div class="ml-2.5 mt-2.5 mb-1.5 flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
              <span class="w-1.5 h-3 rounded-full ${th.subBar} shrink-0"></span>
              <span>${inlineFormat(cleanContent, colorTheme)}</span>
            </div>
          `);
        } else {
          result.push(`
            <div class="ml-2 py-1 flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
              <span class="mt-2 w-1.5 h-1.5 rounded-full ${th.bullet} shrink-0"></span>
              <div class="flex-1">${formatLineWithBadge(cleanContent, colorTheme)}</div>
            </div>
          `);
        }
      } else {
        result.push(`
          <div class="ml-6 py-0.5 flex items-start gap-2 text-[13px] leading-relaxed text-slate-600 dark:text-slate-300">
            <span class="mt-2 w-1.5 h-1.5 rounded-full ${th.bulletSub} shrink-0"></span>
            <div class="flex-1">${formatLineWithBadge(cleanContent, colorTheme)}</div>
          </div>
        `);
      }
    }

    return result.join('\n');
  }

  function formatMarkdown(str) {
    return formatCardContent(str, 'purple');
  }

  // Hash-based deep link routing
  function initRouting() {
    const hash = window.location.hash.replace(/^#/, '');
    if (hash) {
      const parts = hash.split('/');
      const validTabs = ['topics', 'regions', 'countries', 'comparisons', 'islands', 'flags', 'infographics', 'flashcards', 'games', 'resources', 'knowledge'];
      if (validTabs.includes(parts[0])) {
        if (parts[0] === 'knowledge') {
          state.currentTab = 'topics';
        } else if (parts[0] === 'islands') {
          state.currentTab = 'countries';
          state.countryViewMode = 'islands';
        } else if (parts[0] === 'flags') {
          state.currentTab = 'infographics';
          state.infographicsViewMode = 'flags';
        } else if (parts[0] === 'flashcards') {
          state.currentTab = 'infographics';
        } else if (parts[0] === 'games') {
          state.currentTab = 'resources';
          state.resourceCategoryFilter = 'games';
        } else {
          state.currentTab = parts[0];
        }

        if (parts[0] === 'topics' && parts[1]) {
          state.activeTopicId = parts[1];
        } else if (parts[0] === 'regions' && parts[1]) {
          state.activeRegionId = parts[1];
        } else if (parts[0] === 'comparisons' && parts[1]) {
          state.activeComparisonId = parts[1];
        }
      }
    }
  }

  // Initial Boot
  window.addEventListener('DOMContentLoaded', () => {
    initRouting();
    applyTheme();
    renderAll();
  });

  window.addEventListener('hashchange', () => {
    initRouting();
    renderTabButtons();
    renderTabContent();
  });

})();
