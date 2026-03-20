# Kumuda Kalidindi — Portfolio Website

Bold illustrated portfolio built with vanilla HTML/CSS/JS + Three.js.

---

## 📁 Project Structure

```
portfolio/
│
├── index.html                  
│
├── css/
│   ├── reset.css               ← Minimal modern CSS reset
│   ├── variables.css           ← Design tokens (colours, fonts, spacing, shadows)
│   ├── base.css                ← Body, typography, shared helpers (.btn, .badge, footer)
│   ├── nav.css                 ← Fixed navigation bar
│   ├── cursor.css              ← Custom cursor styles
│   ├── marquee.css             ← Scrolling text strips
│   ├── animations.css          ← All @keyframes + .reveal utility classes
│   │
│   └── sections/
│       ├── hero.css            ← Hero section (name, canvas, pills)
│       ├── numbers.css         ← Impact numbers grid
│       ├── experience.css      ← Work history cards
│       ├── skills.css          ← Tech stack bento grid
│       ├── achievements.css    ← Awards cards
│       └── contact.css         ← Contact section + buttons
│
├── js/
│   ├── data.js                 ← ✏️  ALL content (text, links, colours) — edit here
│   ├── cursor.js               ← Custom cursor behaviour
│   ├── nav.js                  ← Nav colour changes per section on scroll
│   ├── marquee.js              ← Marquee pause on hover / touch + reduced-motion
│   ├── reveal.js               ← Scroll-triggered reveal (IntersectionObserver)
│   ├── parallax.js             ← Floating SVG parallax on scroll
│   └── three-scene.js          ← Three.js hero canvas scene
│
└── README.md
```

---

## 🚀 Running Locally

This is a **zero-build, zero-dependency** project. Just open `index.html` in a browser.

```bash
# Option 1 — open directly
open index.html

# Option 2 — local server (avoids any browser CORS quirks)
npx serve .
# or
python3 -m http.server 3000
```

---


## 🌐 Three.js Scene

The hero canvas is in **`js/three-scene.js`**. It is fully self-contained.

Key objects you can tweak:

| Object | Variable | File |
|---|---|---|
| Planet colour | `stdMat(0xFFD235, ...)` (first planet mesh) | `three-scene.js` line ~60 |
| Continent colour | `stdMat(0xFF4C29, ...)` (continentMat) | `three-scene.js` |
| Ring colours | `stdMat(0xFF4C29...)` / `stdMat(0x7FDDB5...)` | `three-scene.js` |
| Orbiter colours | `ORBIT_COLORS` array | `three-scene.js` |
| Orbiter speeds | `ORBIT_SPEEDS` array | `three-scene.js` |
| Star count | `STAR_COUNT` constant | `three-scene.js` |
| Canvas size | `renderer.setSize(460, 460)` | `three-scene.js` |

Three.js is loaded via CDN (`r128`). To pin a different version, update the `<script src>` in `index.html`.

---



## 🔧 Scroll Animations

Reveal classes (defined in `css/animations.css`, triggered by `js/reveal.js`):

| Class | Effect |
|---|---|
| `.reveal` | Fade up from below |
| `.reveal-left` | Slide in from left |
| `.reveal-right` | Slide in from right |
| `.reveal-scale` | Scale up from 80% |
| `.d1` – `.d5` | Stagger delay (0.1s increments) |

Add any of these classes to any element in `index.html` to animate it on scroll.

---

