/**
 * js/three-scene.js
 * Three.js hero canvas scene.
 *
 * Scene overview:
 *  - Central planet (yellow sphere) with red continent blobs
 *  - Two orbital rings around the planet
 *  - 5 orbiting wireframe shapes (tech icons) on pivot groups
 *  - 3 floating accent spheres (teal, sky, plum)
 *  - 150-point star field
 *  - Mouse parallax on camera
 *  - Responsive: resizes canvas on window resize
 *
 * Dependencies: three.js r128 loaded via CDN before this file.
 */

(function initThreeScene() {
  /* ── Guard: skip if Three.js not loaded or canvas missing ── */
  if (typeof THREE === 'undefined') {
    console.warn('[three-scene] Three.js not loaded.');
    return;
  }
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  /* ─────────────────────────────────────────
     RENDERER
  ───────────────────────────────────────── */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0); // transparent bg
  renderer.setSize(460, 460);

  /* ─────────────────────────────────────────
     SCENE & CAMERA
  ───────────────────────────────────────── */
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.z = 8;

  /* ─────────────────────────────────────────
     LIGHTING
  ───────────────────────────────────────── */
  scene.add(new THREE.AmbientLight(0xffffff, 0.7));

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
  dirLight.position.set(5, 8, 5);
  scene.add(dirLight);

  const pointLight = new THREE.PointLight(0xFF4C29, 1.5, 20);
  pointLight.position.set(-4, 3, 4);
  scene.add(pointLight);

  /* ─────────────────────────────────────────
     HELPERS
  ───────────────────────────────────────── */
  /**
   * Quick MeshStandardMaterial factory.
   * @param {string|number} hex  - colour
   * @param {number} roughness
   * @param {number} metalness
   */
  function stdMat(hex, roughness = 0.4, metalness = 0.0) {
    return new THREE.MeshStandardMaterial({ color: hex, roughness, metalness });
  }

  /* ─────────────────────────────────────────
     PLANET GROUP
  ───────────────────────────────────────── */
  const planetGroup = new THREE.Group();
  scene.add(planetGroup);

  /* Planet body */
  const planet = new THREE.Mesh(
    new THREE.SphereGeometry(1.5, 48, 48),
    stdMat(0xFFD235, 0.5)
  );
  planetGroup.add(planet);

  /* Continent blobs */
  const continentMat = stdMat(0xFF4C29, 0.6);
  [
    [0.3,  0.3,  0.0],
    [0.8, -0.2,  0.9],
    [-0.6, 0.7, -0.5],
  ].forEach(([x, y, z]) => {
    const blob = new THREE.Mesh(
      new THREE.SphereGeometry(0.38 + Math.random() * 0.18, 16, 16),
      continentMat
    );
    blob.position.set(x, y, z).normalize().multiplyScalar(1.52);
    planetGroup.add(blob);
  });

  /* Orbital ring 1 */
  const ring1 = new THREE.Mesh(
    new THREE.TorusGeometry(2.3, 0.06, 8, 64),
    stdMat(0xFF4C29, 0.3)
  );
  ring1.rotation.x = 1.3;
  planetGroup.add(ring1);

  /* Orbital ring 2 */
  const ring2 = new THREE.Mesh(
    new THREE.TorusGeometry(2.7, 0.035, 8, 64),
    stdMat(0x7FDDB5, 0.3)
  );
  ring2.rotation.x = 1.1;
  ring2.rotation.z = 0.3;
  planetGroup.add(ring2);

  /* ─────────────────────────────────────────
     ORBITING TECH SHAPES
     Each shape sits on a pivot Group so we can
     rotate the pivot to orbit around the planet.
  ───────────────────────────────────────── */
  const ORBIT_COLORS  = [0x7FDDB5, 0x6BD4F7, 0xC77DFF, 0xFF4C29, 0xFFD235];
  const ORBIT_GEOS    = [
    new THREE.OctahedronGeometry(0.22, 0),
    new THREE.IcosahedronGeometry(0.20, 0),
    new THREE.TetrahedronGeometry(0.24, 0),
    new THREE.BoxGeometry(0.28, 0.28, 0.28),
    new THREE.OctahedronGeometry(0.18, 0),
  ];
  const ORBIT_SPEEDS  = [0.25, 0.33, 0.40, 0.28, 0.45]; // radians/sec
  const ORBIT_RADII   = [2.5, 2.68, 2.86, 3.04, 3.2];

  const orbiters = ORBIT_GEOS.map((geo, i) => {
    const pivot = new THREE.Group();
    scene.add(pivot);

    const mesh = new THREE.Mesh(
      geo,
      new THREE.MeshStandardMaterial({ color: ORBIT_COLORS[i], roughness: 0.3 })
    );

    const angle = (i / ORBIT_GEOS.length) * Math.PI * 2;
    const r     = ORBIT_RADII[i];
    mesh.position.set(Math.cos(angle) * r, (Math.random() - 0.5) * 0.6, Math.sin(angle) * r);
    pivot.add(mesh);

    return { pivot, mesh, speed: ORBIT_SPEEDS[i], dir: i % 2 === 0 ? 1 : -1 };
  });

  /* ─────────────────────────────────────────
     FLOATING ACCENT SPHERES
  ───────────────────────────────────────── */
  const floaterDefs = [
    { color: 0x7FDDB5, x: -2.5, y:  1.5, r: 0.30 },
    { color: 0x6BD4F7, x:  2.8, y: -1.2, r: 0.25 },
    { color: 0xC77DFF, x: -1.8, y: -2.0, r: 0.20 },
  ];

  const accentFloaters = floaterDefs.map(({ color, x, y, r }) => {
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(r, 16, 16),
      stdMat(color, 0.4)
    );
    mesh.position.set(x, y, 0);
    scene.add(mesh);
    return { mesh, baseY: y, phase: Math.random() * Math.PI * 2 };
  });

  /* ─────────────────────────────────────────
     STAR PARTICLES
  ───────────────────────────────────────── */
  const STAR_COUNT = 150;
  const starPositions = new Float32Array(STAR_COUNT * 3);
  for (let i = 0; i < STAR_COUNT; i++) {
    starPositions[i * 3]     = (Math.random() - 0.5) * 14;
    starPositions[i * 3 + 1] = (Math.random() - 0.5) * 14;
    starPositions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  scene.add(
    new THREE.Points(
      starGeo,
      new THREE.PointsMaterial({ color: 0xffffff, size: 0.045, transparent: true, opacity: 0.7 })
    )
  );

  /* ─────────────────────────────────────────
     MOUSE INTERACTION
  ───────────────────────────────────────── */
  let mouseX = 0;
  let mouseY = 0;

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = ((e.clientX - rect.left) / rect.width)  * 2 - 1;
    mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
  });

  /* ─────────────────────────────────────────
     RESPONSIVE RESIZE
  ───────────────────────────────────────── */
  function handleResize() {
    const size = Math.min(canvas.parentElement?.clientWidth || 460, 460);
    renderer.setSize(size, size);
    canvas.style.width  = size + 'px';
    canvas.style.height = size + 'px';
  }
  window.addEventListener('resize', handleResize, { passive: true });
  handleResize();

  /* ─────────────────────────────────────────
     RENDER LOOP
  ───────────────────────────────────────── */
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    /* Planet */
    planetGroup.rotation.y   = t * 0.18;
    planetGroup.rotation.x   = Math.sin(t * 0.3) * 0.08 + mouseY * 0.1;
    planetGroup.position.y   = Math.sin(t * 0.5) * 0.12;

    /* Orbiting shapes */
    orbiters.forEach((o) => {
      o.pivot.rotation.y  = t * o.speed * o.dir;
      o.pivot.rotation.x  = t * o.speed * 0.3;
      o.mesh.rotation.y   = t * 1.5;
      o.mesh.rotation.x   = t * 1.2;
    });

    /* Accent spheres float */
    accentFloaters.forEach((f) => {
      f.mesh.position.y  = f.baseY + Math.sin(t * 0.8 + f.phase) * 0.25;
      f.mesh.rotation.y  = t * 0.6;
    });

    /* Camera mouse parallax */
    camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }

  animate();
})();
