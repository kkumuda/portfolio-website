/**
 * js/data.js
 * ─────────────────────────────────────────────────────
 * Single source of truth for ALL portfolio content.
 * Edit this file to update any text, links, or numbers
 * without touching HTML or other JS files.
 * ─────────────────────────────────────────────────────
 */

window.PORTFOLIO_DATA = {

  /* ── Personal info ── */
  name:     'Kumuda Kalidindi',
  role:     'DevOps Engineer & SRE',
  location: 'Hyderabad, India',
  email:    'kumudakalidindi01@gmail.com',
  phone:    '+91 91218 25611',
  linkedin: 'https://linkedin.com/in/kumuda',
  tagline:  'BUILDING INFRA THAT NEVER BREAKS',
  bio:      'Results-driven DevOps/SRE engineering scalable cloud infrastructure, obsessing over uptime, and automating everything that dares to be manual.',

  /* ── Hero skill pills ── */
  heroPills: [
    { label: 'AWS',        variant: '' },
    { label: 'Kubernetes', variant: 'p2' },
    { label: 'Terraform',  variant: 'p3' },
    { label: 'Python',     variant: 'p4' },
    { label: 'Go',         variant: 'p5' },
    { label: 'Docker',     variant: '' },
    { label: 'Grafana',    variant: 'p2' },
    { label: 'ArgoCD',     variant: 'p3' },
  ],

  /* ── Impact numbers ── */
  numbers: [
    { value: '$20K', desc: 'Monthly cloud costs saved via S3 lifecycle, VPC endpoints & EC2 optimization', variant: 'num-card--white' },
    { value: '90%',  desc: 'Manual config tasks eliminated through Terraform + Go automation framework',    variant: 'num-card--red' },
    { value: '50%',  desc: 'Reduction in Mean Time To Resolution on crash analysis system',                variant: 'num-card--teal' },
    { value: '50+',  desc: 'Crashes processed weekly via automated Python pipeline with JIRA integration', variant: 'num-card--sky' },
  ],

  /* ── Work experience ── */
  experience: [
    {
      period:  'July 2023 — June 2025',
      role:    'DevOps Engineer / SRE',
      company: 'Nile Secure · Bengaluru, Karnataka',
      icon:    '☁️',
      variant: 'exp-card--white',
      bullets: [
        { text: 'Automated crash analysis system in Python processing 50+ crashes/week via JIRA.', badge: '−50% MTTR' },
        { text: 'Architected LaunchDarkly automation with Terraform modules + Go utilities.',       badge: '−90% manual work' },
        { text: 'Optimised S3 lifecycle, VPC endpoints & EC2 resources for direct cost savings.',  badge: '$20K/mo saved' },
        { text: 'Comprehensive observability: OpenSearch alerting → Slack + OpsGenie for real-time SLO monitoring.' },
        { text: 'Modernised deployments using Kubernetes & Terraform for HA multi-environment management.' },
        { text: 'On-call for critical production; RCA-focused incident response & post-incident remediation.' },
      ],
    },
    {
      period:  'Nov 2022 — Mar 2023',
      role:    'Teaching Assistant',
      company: 'PES University · Bengaluru, India',
      icon:    '🎓',
      variant: 'exp-card--yellow',
      bullets: [
        { text: 'Mentored 50+ students in Python programming labs with hands-on guidance.' },
        { text: 'Ran 1:1 debugging sessions tackling complex data-structure logic issues.' },
        { text: 'Delivered best-practice training in software development methodologies.' },
      ],
    },
    {
      period:  'Aug 2019 — May 2023',
      role:    'B.S. Computer Science',
      company: 'PES University · Bengaluru — GPA 7.69',
      icon:    '🏫',
      variant: 'exp-card--teal',
      bullets: [
        { text: 'Four-Time Academic Distinction Awardee across all four years.' },
        { text: 'IEEE publication: "Gesture Recognition Glove for ASL Using Accelerometers."' },
        { text: '2nd Runner-Up — Nile Hackathon 2023 with automated crash tool.' },
      ],
    },
  ],

  /* ── Skills ── */
  skills: [
    { title: '☁️ Cloud Platforms',          variant: 'sk-block--yellow', tags: ['AWS EC2','VPC','IAM','Lambda','RDS','S3','CloudWatch','GCP'] },
    { title: '🏗️ Infrastructure as Code',   variant: 'sk-block--dark',   tags: ['Terraform','Helm','ArgoCD'] },
    { title: '🐳 Containers & Orchestration',variant: 'sk-block--teal',   tags: ['Kubernetes','Docker','Helm'] },
    { title: '🔁 CI/CD & Automation',        variant: 'sk-block--sky',    tags: ['Jenkins','BitBucket','ArgoCD','GIT'] },
    { title: '📈 Observability',             variant: 'sk-block--plum',   tags: ['Grafana','Prometheus','Loki','OpenSearch','CloudWatch','OpsGenie'] },
    { title: '💻 Programming',               variant: 'sk-block--dark',   tags: ['Python','Go','Bash','MySQL','MongoDB'] },
    { title: '🗂️ Tracking & Collab',         variant: 'sk-block--yellow', tags: ['Jira','Confluence','Bitbucket'] },
  ],

  /* ── Achievements ── */
  achievements: [
    { year: '2023',     emoji: '🥉', title: 'Nile Hackathon 2nd Runner-Up', desc: "Built an automated crash analysis tool that won 2nd runner-up at Nile Secure's company-wide hackathon.", variant: 'ach-card--yellow' },
    { year: '2023',     emoji: '📄', title: 'IEEE Publication',              desc: 'Co-authored "Gesture Recognition Glove for ASL Using Accelerometers" — published on IEEE Xplore, doi: 10.1109/InCACCT57535.2023', variant: 'ach-card--red' },
    { year: '2019–23',  emoji: '🏅', title: '4× Academic Distinction',       desc: 'Awarded Academic Distinction every single year across four consecutive years at PES University.', variant: 'ach-card--sky' },
    { year: 'Pre-Uni',  emoji: '🎓', title: 'Top Academic Scores',           desc: '94.2% at Narayana Junior College (MPC) & 9.8 GPA at Jubilee Hills Public School.', variant: 'ach-card--plum' },
  ],

  /* ── Nav section color map ── */
  /* key = section id, value = [bgColor, textColor] */
  navColors: {
    s1: ['#FF4C29', '#1a1a1a'],
    s2: ['#FFD235', '#1a1a1a'],
    s3: ['#6BD4F7', '#1a1a1a'],
    s4: ['#FF4C29', '#FFD235'],
    s5: ['#7FDDB5', '#1a1a1a'],
    s6: ['#1a1a1a', '#FFD235'],
  },
};
