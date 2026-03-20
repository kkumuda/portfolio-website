/**
 * js/cursor.js
 * Custom cursor — follows mouse, grows on interactive elements.
 */

(function initCursor() {
  const cur = document.getElementById('cur');
  if (!cur) return;

  /* ── Track mouse position ── */
  document.addEventListener('mousemove', (e) => {
    cur.style.left = e.clientX + 'px';
    cur.style.top  = e.clientY + 'px';
  });

  /* ── Grow on interactive elements ── */
  const hoverTargets = [
    'a', 'button',
    '.num-card', '.exp-card', '.ach-card',
    '.skill-pill', '.sk-tag', '.sk-block',
    '.cbtn', '.btn',
  ].join(', ');

  document.querySelectorAll(hoverTargets).forEach((el) => {
    el.addEventListener('mouseenter', () => cur.classList.add('big'));
    el.addEventListener('mouseleave', () => cur.classList.remove('big'));
  });

  /* ── Hide cursor when leaving window ── */
  document.addEventListener('mouseleave', () => { cur.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cur.style.opacity = '1'; });
})();
