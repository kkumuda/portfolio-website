/**
 * js/parallax.js
 * Subtle vertical parallax on all .float-svg decorators as the user scrolls.
 * Odd-indexed floaters move up, even-indexed move down — creates depth.
 *
 * Tweak SPEED to increase / decrease the parallax intensity.
 */

(function initParallax() {
  const SPEED = 0.07; // fraction of scrollY to translate by

  const floaters = Array.from(document.querySelectorAll('.float-svg'));
  if (!floaters.length) return;

  let ticking = false;

  function applyParallax() {
    const sy = window.scrollY;
    floaters.forEach((el, i) => {
      const dir = i % 2 === 0 ? 1 : -1;
      el.style.transform = `translateY(${sy * SPEED * dir}px)`;
    });
    ticking = false;
  }

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(applyParallax);
        ticking = true;
      }
    },
    { passive: true }
  );
})();
