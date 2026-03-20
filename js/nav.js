/**
 * js/nav.js
 * Changes nav background & text color as user scrolls between sections.
 * Color map is driven by window.PORTFOLIO_DATA.navColors in data.js.
 */

(function initNav() {
  const nav      = document.getElementById('main-nav');
  if (!nav) return;

  const colorMap = window.PORTFOLIO_DATA?.navColors || {};
  const sectionIds = Object.keys(colorMap);

  /* Cache section elements */
  const sections = sectionIds.reduce((acc, id) => {
    const el = document.getElementById(id);
    if (el) acc[id] = el;
    return acc;
  }, {});

  /* Collect nav text elements */
  const logo   = nav.querySelector('.nav-logo');
  const links  = nav.querySelectorAll('.nav-links a');
  const right  = nav.querySelector('.nav-right');

  function updateNav() {
    const midY = window.scrollY + window.innerHeight / 2;
    let active = sectionIds[0];

    sectionIds.forEach((id) => {
      const el = sections[id];
      if (el && el.offsetTop <= midY) active = id;
    });

    const [bg, text] = colorMap[active] || ['#FFD235', '#1a1a1a'];
    nav.style.background    = bg;
    nav.style.borderBottomColor = text === '#FFD235' ? text : '#1a1a1a';
    if (logo)  logo.style.color  = text;
    if (right) right.style.color = text;
    links.forEach((a) => (a.style.color = text));
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav(); // run once on load
})();
