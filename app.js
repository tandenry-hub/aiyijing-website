(() => {
  const menu = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#navigation');
  function closeMenu() {
    if (!navigation || !menu) return;
    navigation.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', '展开导航');
  }
  if (menu && navigation) menu.addEventListener('click', () => {
    const expanded = menu.getAttribute('aria-expanded') !== 'true';
    navigation.classList.toggle('open', expanded);
    menu.setAttribute('aria-expanded', String(expanded));
    menu.setAttribute('aria-label', expanded ? '收起导航' : '展开导航');
  });
  if (navigation) navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
  const config = window.SITE_CONFIG || {};
  const safeUrl = value => { try { const url = new URL(value); return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : ''; } catch { return ''; } };
  const availability = { windows: false, mac: false };
  [['windows', config.windowsDownloadUrl, '下载 Windows 版'], ['mac', config.macDownloadUrl, '下载 macOS 版']].forEach(([platform, value, label]) => {
    const url = safeUrl(value);
    if (!url) return;
    const link = document.querySelector('#download-' + platform);
    if (!link) return;
    link.href = url;
    link.textContent = '↓  ' + label;
    link.removeAttribute('aria-disabled');
    link.classList.remove('unavailable');
    availability[platform] = true;
  });
  const downloadStatus = document.querySelector('#download-status');
  if (downloadStatus && availability.windows && !availability.mac) downloadStatus.textContent = 'Windows 内测版现已开放下载；macOS 版本正在准备中。注册个人账户，免费领取 5 万翻译字符。';
  else if (downloadStatus && (availability.windows || availability.mac)) downloadStatus.textContent = '下载后注册个人账户，免费领取 5 万翻译字符。';
  const contact = document.querySelector('#contact-link');
  if (!contact) return;
  const contactUrl = safeUrl(config.contactUrl);
  if (contactUrl) { contact.href = contactUrl; contact.textContent = config.contactLabel || '联系 AI译镜团队'; }
  else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.contactEmail || '')) { contact.href = 'mailto:' + config.contactEmail; contact.textContent = config.contactEmail; }
  const contactDescription = document.querySelector('#contact-description');
  if (contact.hasAttribute('href')) { contact.hidden = false; if (contactDescription) contactDescription.textContent = '内测反馈 · 使用咨询 · 合作交流'; }
})();
