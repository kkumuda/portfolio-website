/**
 * js/marquee.js
 * Marquee enhancements:
 *  - Pause on hover (CSS handles desktop; this adds touch/pointer fallback)
 *  - Respects prefers-reduced-motion: stops animation entirely if requested
 */

(function initMarquee() {
  const strips = document.querySelectorAll('.marquee-inner');
  if (!strips.length) return;

  /* ── Respect reduced-motion preference ── */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    strips.forEach((s) => (s.style.animationPlayState = 'paused'));
    return;
  }

  /* ── Touch: tap to pause / resume ── */
  strips.forEach((strip) => {
    const wrap = strip.closest('.marquee-wrap');
    if (!wrap) return;

    let paused = false;
    wrap.addEventListener('touchstart', () => {
      paused = !paused;
      strip.style.animationPlayState = paused ? 'paused' : 'running';
    }, { passive: true });
  });
})();
