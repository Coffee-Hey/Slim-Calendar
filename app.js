'use strict';
const demo = document.querySelector('#demo-complete');
demo.addEventListener('click', () => {
 const done = demo.getAttribute('aria-pressed') !== 'true';
 demo.setAttribute('aria-pressed', String(done));
 demo.classList.toggle('is-done', done);
 document.querySelector('#demo-status').textContent = done ? '已完成 · 再点一次可撤销' : '轻点圆圈，试试完成待办';
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
 const image = document.querySelector('#ios-preview-image');image.src = preview.src;image.alt = preview.alt;
 document.querySelector('#ios-preview-caption').textContent = preview.caption;
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
  preview.alt=dark?'Mac 深色实际界面，显示月历与当天的三条事项':'Mac 浅色实际界面，显示月历与当天的三条事项';
  document.querySelector('.mac-showcase').classList.toggle('is-dark',dark);
 });
});
// A link to the install guide should reveal the instructions as well as scroll.
document.querySelector('a[href="#mac-install"]').addEventListener('click',()=>{
 document.querySelector('#mac-install').open=true;
});
