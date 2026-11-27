'use strict';
// Keep source text nodes so language changes preserve markup and current UI state.
const english = {
 "跳转到主要内容": "Skip to main content",
 "产品介绍": "Overview",
 "iOS版": "iOS",
 "Mac版": "Mac",
 "技术支持": "Support",
 "日历 · 日程 · 待办": "CALENDAR · EVENTS · TO-DOS",
 "方寸日历": "A small calendar",
 "万千日常": "For your everyday",
 "把一天的安排，": "See your day clearly",
 "放在一个清晰的视野里。": "Make room for what matters",
 "在 iPhone 上随手记录，在 Mac 菜单栏轻轻一瞥。": "Capture a plan on iPhone. Glance at your day on Mac.",
 "工作、生活与留给自己的时间，都各得其所。": "Work, life, and a little time for yourself, all in view.",
 "在 App Store 获取": "Get on the App Store",
 "下载 Mac 版": "Download for Mac",
 "查看安装说明": "Installation guide",
 "iPhone · 把日常装进口袋": "iPhone · Your day, in your pocket",
 "Mac · 今天，抬眼可见": "Mac · Your day, a glance away",
 "日程待办，一起看见": "Events and to-dos, together",
 "系统账户，熟悉的数据": "Your familiar system accounts",
 "农历调休，贴近日常": "Lunar dates and holiday adjustments",
 "安排清楚，心里轻松": "CLEAR PLANS, A LIGHTER MIND",
 "小事、大事，": "Big plans, little moments",
 "都有自己的位置。": "A place for them all",
 "会议、散步、一本想读的书。": "A meeting, a walk, a book you want to read.",
 "不用反复切换清单，看见今天该做什么，": "See what needs doing without switching lists,",
 "也看见那些值得期待的事。": "alongside the things you look forward to.",
 "一个视野，放下两份清单": "Two lists, one clear view",
 "连接系统日历与提醒事项，将日程和待办融合展示，按来源色彩轻松辨认。": "Bring system calendars and reminders together, with source colors to help you tell them apart.",
 "整月的节奏，当天的细节": "The month ahead, the day in detail",
 "从月历看安排的分布，选一天看具体事项。农历、节日与调休标记也在身边。": "See your month at a glance, then pick a day for details. Lunar dates, holidays, and adjusted workdays stay close by.",
 "按你的习惯，慢慢用": "Make yourself at home",
 "支持浅色与深色外观，以及简体中文、繁體中文和 English。": "Choose light or dark appearance, with Simplified Chinese, Traditional Chinese, and English in the app.",
 "给今天，留一点从容。": "Leave a little room today",
 "产品设计讨论": "Product design discussion",
 "09:00 · 工作": "09:00 · Work",
 "日程": "Event",
 "给生活一点留白": "Make room for yourself",
 "轻点圆圈，试试完成待办": "Tap to complete this to-do",
 "待办": "To-do",
 "周末的散步约定": "A weekend walk",
 "16:00 · 生活": "16:00 · Life",
 "日常的每一面，": "Every part of your day",
 "都在掌心之间。": "Right at your fingertips",
 "随手记录一个约定，提前看看这一周，": "Save a plan, look ahead to the week,",
 "或让小组件替你记着今天。": "or let a widget keep today in view.",
 "日程与待办": "Events and to-dos",
 "合在一起，理清今天": "Together, for a clearer day",
 "整月概览": "Month at a glance",
 "抬眼看看，接下来的一切": "See what is coming next",
 "桌面小组件": "Home Screen widgets",
 "不必打开 App，也能看见安排": "Your plans, without opening the app",
 "iOS 17 及以上": "iOS 17 or later",
 "日程与待办，一屏全掌控。": "Events and to-dos, together on one screen.",
 "App Store 最新预览素材": "Latest App Store previews",
 "忙碌在眼前，": "Keep your focus",
 "安排在手边。": "Keep your plans close",
 "日历住进菜单栏，少一次窗口切换。": "A calendar in your menu bar means one less window to switch.",
 "从当月安排到当日待办，一次点击就看见。": "Your month and today's to-dos, just a click away.",
 "◫   周一 09:41": "◫   Mon 09:41",
 "浅色外观": "Light",
 "深色外观": "Dark",
 "轻巧常驻，顺手就好。": "A little presence, always handy",
 "一键展开与收起": "Open and close with a click",
 "点击菜单栏图标，让日历随用随开。": "Click the menu bar icon whenever you need your calendar.",
 "一个月，一天，都清楚": "A clear month and a clear day",
 "滚动切月，选中日期，查看融合事项列表。": "Scroll between months, pick a date, and see events and to-dos together.",
 "完成了，就轻点一下": "Done? Give it a tap",
 "待办状态写回系统提醒事项，也能随时撤销。": "Completion syncs back to system Reminders. Tap again to undo.",
 "芯片": "Chip",
 "系统": "Requires",
 "macOS 14 及以上": "macOS 14 or later",
 "安装包": "Package",
 "ZIP · 约 1.4 MB": "ZIP · About 1.4 MB",
 "当前实机验证：macOS 27": "Tested on a Mac running macOS 27",
 "安装与版本说明": "Installation and release notes",
 "解压 ZIP，将 Slim Calendar Mac 拖入「应用程序」。启动后点击菜单栏图标，按需授予日历与提醒事项权限。": "Unzip the download and drag Slim Calendar Mac into Applications. Launch it, click the menu bar icon, and allow Calendar and Reminders access as needed.",
 "版本：1.0（Build 20），2026 年 11 月 23 日。仅支持 Apple Silicon；Intel Mac 暂无此安装包。": "Version 1.0 (Build 20), November 23, 2026. This download supports Apple Silicon only. An Intel Mac package is not currently available.",
 "使用中遇到问题，欢迎通过邮件联系。": "Need a hand? Get in touch by email.",
 "隐私政策": "Privacy Policy",
 "主导航": "Main navigation",
 "网站语言": "Website language",
 "Slim Calendar 双平台产品展示": "Slim Calendar on iPhone and Mac",
 "核心体验": "Highlights",
 "iOS 产品预览": "iOS product previews",
 "切换 Mac 展示图外观": "Mac preview appearance",
 "iOS 实际产品预览：日程与待办，一屏全掌控": "iPhone app preview with events and to-dos together",
 "Mac 实际产品界面：月历与当日事项融合显示": "Mac app showing the month and events for the selected day",
 "App Store 预览：日程与待办融合展示": "App Store preview of events and to-dos together",
 "App Store 预览：完整月历与彩色事项": "App Store preview of the month with color-coded events",
 "桌面小组件与月历交互弹窗": "Home Screen widgets and interactive calendar popover",
 "从整月概览，找到生活的节奏。": "Find your rhythm with a view of the whole month.",
 "桌面点一下，弹窗直接看。": "Tap the widget for a closer look.",
 "已完成 · 再点一次可撤销": "Completed · Tap again to undo",
 "Mac 深色实际界面，显示月历与当天的三条事项": "Mac app in dark appearance with the month and three items for the day",
 "Mac 浅色实际界面，显示月历与当天的三条事项": "Mac app in light appearance with the month and three items for the day"
};
let language = 'zh';
function translate(text) { return language === 'en' ? (english[text] || text) : text; }
const textNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
 const node = walker.currentNode;
 if (!node.parentElement.closest('script,style,[data-lang]') && english[node.textContent.trim()]) {
  textNodes.push({node, original: node.textContent});
 }
}
const attributes = [];
document.querySelectorAll('[aria-label],[alt]').forEach(element => {
 ['aria-label','alt'].forEach(name => {
  const original = element.getAttribute(name);
  if (english[original]) attributes.push({element,name,original});
 });
});
function setLanguage(next) {
 language = next === 'en' ? 'en' : 'zh';
 document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
 textNodes.forEach(({node,original}) => {
  node.textContent = original.replace(original.trim(), translate(original.trim())) + (language === 'en' && node.nextSibling?.nodeName === 'BR' ? ' ' : '');
 });
 attributes.forEach(({element,name,original}) => element.setAttribute(name,translate(original)));
 document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.lang === language)));
 document.title = language === 'en' ? 'Slim Calendar · A small calendar for your everyday' : 'Slim Calendar · 方寸日历 万千日常';
 const description = language === 'en' ? 'Bring events and to-dos together. Discover Slim Calendar for iPhone, Home Screen widgets, and the Mac menu bar. Download for Mac or get it on the App Store.' : '用 Slim Calendar，把日程与待办放在一起。探索 iPhone 日历、小组件与 Mac 菜单栏日历，下载 Mac 版或前往 App Store。';
 document.querySelector('meta[name="description"]').content = description;
 document.querySelector('meta[property="og:title"]').content = document.title;
 document.querySelector('meta[property="og:description"]').content = description;
 document.querySelector('a[href^="privacy.html"]').href = 'privacy.html?lang=' + language;
 document.querySelector('#demo-status').textContent = translate(demo.getAttribute('aria-pressed') === 'true' ? '已完成 · 再点一次可撤销' : '轻点圆圈，试试完成待办');
 selectPreview(tabs.find(tab => tab.getAttribute('aria-selected') === 'true'));
 const dark = document.querySelector('[data-theme="dark"]').getAttribute('aria-pressed') === 'true';
 document.querySelector('#mac-preview').alt = translate(dark ? 'Mac 深色实际界面，显示月历与当天的三条事项' : 'Mac 浅色实际界面，显示月历与当天的三条事项');
 try { localStorage.setItem('slim-calendar-language',language); } catch (_) { /* Storage may be disabled. */ }
 const url = new URL(location.href); url.searchParams.set('lang',language);
 history.replaceState(null,'',url);
}
const demo = document.querySelector('#demo-complete');
demo.addEventListener('click', () => {
 const done = demo.getAttribute('aria-pressed') !== 'true';
 demo.setAttribute('aria-pressed', String(done));
 demo.classList.toggle('is-done', done);
 document.querySelector('#demo-status').textContent = translate(done ? '已完成 · 再点一次可撤销' : '轻点圆圈，试试完成待办');
});
const previews = {
 schedule: {src:'assets/ios-schedule.webp',alt:'App Store 预览：日程与待办融合展示',caption:'日程与待办，一屏全掌控。'},
 month: {src:'assets/ios-month.webp',alt:'App Store 预览：完整月历与彩色事项',caption:'从整月概览，找到生活的节奏。'},
 widgets: {src:'assets/ios-widgets-popup.webp',alt:'桌面小组件与月历交互弹窗',caption:'桌面点一下，弹窗直接看。'}
};
const tabs = [...document.querySelectorAll('[data-preview]')];
function selectPreview(tab) {
 tabs.forEach(item => {const selected = item === tab;item.setAttribute('aria-selected', String(selected));item.tabIndex = selected ? 0 : -1;});
 const preview = previews[tab.dataset.preview];
 const image = document.querySelector('#ios-preview-image');image.src = preview.src;image.alt = translate(preview.alt);
 document.querySelector('#ios-preview-caption').textContent = translate(preview.caption);
 document.querySelector('#ios-preview-panel').setAttribute('aria-labelledby',tab.id);
}
tabs.forEach((tab,index) => {
 tab.addEventListener('click',()=>selectPreview(tab));
 tab.addEventListener('keydown',event=>{
  let target;
  if(['ArrowDown','ArrowRight'].includes(event.key))target=(index+1)%tabs.length;
  if(['ArrowUp','ArrowLeft'].includes(event.key))target=(index+tabs.length-1)%tabs.length;
  if(event.key==='Home')target=0;
  if(event.key==='End')target=tabs.length-1;
  if(target===undefined)return;
  event.preventDefault();selectPreview(tabs[target]);tabs[target].focus();
 });
});
document.querySelectorAll('[data-theme]').forEach(button => {
 button.addEventListener('click', () => {
  document.querySelectorAll('[data-theme]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  const dark=button.dataset.theme==='dark';
  const preview=document.querySelector('#mac-preview');
  preview.src=dark?'assets/mac-calendar-dark.png':'assets/mac-calendar.png';
  preview.alt=translate(dark?'Mac 深色实际界面，显示月历与当天的三条事项':'Mac 浅色实际界面，显示月历与当天的三条事项');
  document.querySelector('.mac-showcase').classList.toggle('is-dark',dark);
 });
});
// A link to the install guide should reveal the instructions as well as scroll.
document.querySelector('a[href="#mac-install"]').addEventListener('click',()=>{
 document.querySelector('#mac-install').open=true;
});

document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
let savedLanguage;
try { savedLanguage = localStorage.getItem('slim-calendar-language'); } catch (_) { /* Storage may be disabled. */ }
const requestedLanguage = new URLSearchParams(location.search).get('lang');
setLanguage(['en','zh'].includes(requestedLanguage) ? requestedLanguage : (savedLanguage || 'zh'));
