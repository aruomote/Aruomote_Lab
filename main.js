// Aruomote Lab - Main JavaScript

/** Render the site header */
export function renderHeader(activePage = '') {
  const base = import.meta.env.BASE_URL;
  const nav = [
    { label: 'Home', href: base },
    { label: 'Works', href: `${base}works/` },
    // { label: 'Library', href: `${base}library/` },
    // { label: 'Guide', href: `${base}guide/` },
    { label: 'About', href: `${base}about/` },
  ];

  const navLinks = nav.map(item => {
    const isActive = item.label.toLowerCase() === activePage.toLowerCase();
    return `<a href="${item.href}"${isActive ? ' class="active"' : ''}>${item.label}</a>`;
  }).join('');

  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <div class="header-inner">
      <a href="${base}" class="site-logo">
        <div class="logo-mark">A</div>
        <span class="logo-text">Aruomote Lab</span>
      </a>
      <button class="menu-toggle" aria-label="メニュー"><i class="fa-solid fa-bars"></i></button>
      <nav class="site-nav">${navLinks}</nav>
    </div>
  `;

  document.body.prepend(header);

  // Mobile menu toggle
  const toggle = header.querySelector('.menu-toggle');
  const siteNav = header.querySelector('.site-nav');
  toggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
    const icon = toggle.querySelector('i');
    icon.className = siteNav.classList.contains('open') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  });
}

/** Render the site footer */
export function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="footer-inner">
      <p>&copy; 2026 Aruomote Lab. All rights reserved.</p>
    </div>
  `;
  document.body.append(footer);
}

/** Initialize category filter */
export function initFilter(containerSelector, cardSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const buttons = container.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll(cardSelector);

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active button
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
