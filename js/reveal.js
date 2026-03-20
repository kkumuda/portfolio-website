/**
 * js/reveal.js
 * Scroll-triggered reveal animations via IntersectionObserver.
 * Elements with .reveal, .reveal-left, .reveal-right, .reveal-scale
 * get the class `.in` added when they enter the viewport.
 *
 * Stagger delays (.d1–.d5) are defined in css/animations.css.
 */

(function initReveal() {
  const REVEAL_CLASSES = ['.reveal', '.reveal-left', '.reveal-right', '.reveal-scale'];
  const targets = document.querySelectorAll(REVEAL_CLASSES.join(', '));

  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          /* Unobserve after reveal so it doesn't re-animate on scroll-up */
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((el) => observer.observe(el));
})();
