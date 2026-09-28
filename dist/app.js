(() => {
  const menu = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#navigation');
  function closeMenu() {
    navigation.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', '展开导航');
  }
  menu.addEventListener('click', () => {
    const expanded = menu.getAttribute('aria-expanded') !== 'true';
    navigation.classList.toggle('open', expanded);
    menu.setAttribute('aria-expanded', String(expanded));
    menu.setAttribute('aria-label', expanded ? '收起导航' : '展开导航');
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.querySelector('#year').textContent = new Date().getFullYear();
  const config = window.SITE_CONFIG || {};
  const safeUrl = value => { try { const url = new URL(value); return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : ''; } catch { return ''; } };
  let downloads = 0;
  [['windows', config.windowsDownloadUrl, '下载 Windows 版'], ['mac', config.macDownloadUrl, '下载 macOS 版']].forEach(([platform, value, label]) => {
    const url = safeUrl(value);
    if (!url) return;
    const link = document.querySelector('#download-' + platform);
    link.href = url;
    link.textContent = '↓  ' + label;
    link.removeAttribute('aria-disabled');
    link.classList.remove('unavailable');
    downloads++;
  });
  if (downloads) document.querySelector('#download-status').textContent = '下载后在客户端注册，新用户免费领取 5 万翻译字符。';
  const contact = document.querySelector('#contact-link');
  const contactUrl = safeUrl(config.contactUrl);
  if (contactUrl) { contact.href = contactUrl; contact.textContent = config.contactLabel || '联系 AI译镜团队'; }
  else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.contactEmail || '')) { contact.href = 'mailto:' + config.contactEmail; contact.textContent = config.contactEmail; }
  if (contact.hasAttribute('href')) { contact.hidden = false; document.querySelector('#contact-description').textContent = '内测反馈 · 使用咨询 · 合作交流'; }
})();
