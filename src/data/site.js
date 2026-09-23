export const profile = {
  name: 'Shibly Mohammad Noman',
  wordmark: { first: 'Shibly', second: 'Noman' },
  badge: 'Full Stack Software Engineer',
  tagline: 'Software Engineer',
  rotating: ['complex systems', 'scalable architecture', 'clean code'],
  heroLead: 'I build systems that are',
  heroSub:
    'Full stack engineer with 5+ years of experience building complex systems from infrastructure up. A framework agnostic approach with a track record of improving application performance and accessibility across the entire stack.',
  summary:
    'Full stack engineer with 5+ years of experience building complex systems from infrastructure up. With a framework agnostic approach, I have consistently improved application performance and enhanced user accessibility. My focus remains on engineering excellence and solving technical challenges across the entire stack.',
  email: 'shibly.work@gmail.com',
  phone: '+880 1307609911',
  phoneHref: 'tel:+8801307609911',
  linkedin: 'https://linkedin.com/in/shibly-mohammad',
  linkedinLabel: 'linkedin.com/in/shibly-mohammad',
  github: 'https://github.com/Shibly-Noman',
  githubLabel: 'github.com/Shibly-Noman',
}

export const stats = [
  { value: 5, suffix: '+', label: 'Years experience' },
  { value: 3, suffix: '', label: 'Companies scaled' },
  { value: 10, suffix: '+', label: 'Systems delivered' },
  { value: 3, suffix: '', label: 'Major platforms built' },
]

export const lifecycle = [
  {
    step: '01',
    title: 'Architect & Design',
    desc: 'Design system architecture, choose tech stacks, and model data flows that balance performance with maintainability.',
  },
  {
    step: '02',
    title: 'Build & Integrate',
    desc: 'Develop APIs, UIs, and backend services. Integrate databases, queues, and third party services into cohesive platforms.',
  },
  {
    step: '03',
    title: 'Optimize & Scale',
    desc: 'Profile bottlenecks, refactor hot paths, and tune infrastructure to handle high throughput without sacrificing reliability.',
  },
  {
    step: '04',
    title: 'Deploy & Monitor',
    desc: 'Ship with CI/CD pipelines, container orchestration, and observability to keep systems healthy after launch.',
  },
]

export const workTypes = ['All', 'Web App', 'SaaS', 'AI / ML', 'Media']

export const exploreLinks = [
  {
    eyebrow: '01 / Selected work',
    title: 'Systems, up close.',
    desc: 'A focused archive of the platforms, infrastructure, and experiments behind the work.',
    cta: 'Browse project archive',
    href: '#projects',
    image: '/images/vivasoft-collaboration.png',
    position: 'center center',
  },
  {
    eyebrow: '02 / Writing',
    title: 'Notes from the build.',
    desc: 'The context, decisions, and career chapters that shaped the work.',
    cta: 'Read the stories',
    href: '#stories',
    image: '/images/gakk-media-limited.jpg',
    position: 'center center',
  },
  {
    eyebrow: '03 / Portfolio',
    title: 'The wider portfolio.',
    desc: 'Explore code, experiments, and the work still in motion.',
    cta: 'Open GitHub profile',
    href: profile.github,
    image: '/images/shibly-hero-holi.png',
    position: 'center bottom',
    fit: 'contain',
    external: true,
  },
]

export const work = [
  {
    type: 'Media',
    title: 'Shadhin Music: high performance streaming platform',
    excerpt:
      'Built a streaming platform with recommendation engine, user event tracking, and SEO optimization for an extensive library of songs, videos, and podcasts.',
    source: 'Gakk Media Limited',
    link: '#',
  },
  {
    type: 'AI / ML',
    title: 'Eudora: AI powered learning platform',
    excerpt:
      'Developed an EdTech platform that tracks student mastery in real time, detects learning gaps, and delivers personalized recommendations informed by data.',
    source: 'Personal Project',
    link: '#',
  },
  {
    type: 'SaaS',
    title: 'Ask My Data: NL to SQL application',
    excerpt:
      'Created a natural language to SQL app using LangGraph that generates, validates, and executes database queries with layered security safeguards and approval gates.',
    source: 'Personal Project',
    link: '#',
  },
  {
    type: 'Web App',
    title: 'Tracking Pixels: cookieless attribution system',
    excerpt:
      'Engineered a cookieless event tracking and attribution system built for GDPR and CCPA compliance using anonymous session modeling and first party data collection.',
    source: 'Vivasoft Limited',
    link: '#',
  },
  {
    type: 'SaaS',
    title: 'High scale AdTech SaaS platform',
    excerpt:
      'Developed and maintained high scale AdTech SaaS with complex API architectures optimized for performance and reliability.',
    source: 'Vivasoft Limited',
    link: '#',
  },
  {
    type: 'SaaS',
    title: 'Azerion: AdTech and AI platforms',
    excerpt:
      'Supported a longstanding AdTech engagement spanning platform modernization, live bidding, and a unified AI hub for a global digital advertising ecosystem.',
    source: 'Vivasoft Limited',
    link: 'https://vivasoftltd.com/case-study/azerion/',
    image: '/images/azerion-logo.png',
    external: true,
  },
  {
    type: 'Web App',
    title: 'Custom framework built with Vite',
    excerpt:
      'Built a custom framework on top of Vite, improving build performance and scalability across distributed projects.',
    source: 'Vivasoft Limited',
    link: '#',
  },
]

export const chapters = [
  {
    n: 1,
    photo: '/images/gakk-media-limited.jpg',
    kicker: 'Media & Gaming',
    company: 'Gakk Media Limited',
    role: 'Software Engineer',
    period: 'Jul 2021 to Oct 2022',
    title: 'Building media and gaming applications',
    desc: 'Early career focus on media delivery and SSR migration. This work improved SEO, reduced load times, and integrated global subscription systems.',
    points: [
      'Developed and delivered diverse media and gaming applications.',
      'Migrated legacy architectures and implemented SSR to improve SEO and discoverability.',
      'Reduced page load time, increased traffic, and built a global media player with piracy prevention measures.',
      'Optimized media delivery and integrated Google Analytics with custom event tracking.',
      'Integrated Direct Carrier Billing for local and international subscriptions.',
    ],
    projects: [
      {
        name: 'Shadhin Music',
        label: 'Primary project',
        logo: '/images/projects/shadhin-music-logo.png',
      },
      {
        name: 'Toffee',
        label: 'Project',
        logo: '/images/projects/toffee-logo.png',
      },
    ],
    metrics: [
      { value: 'Reduced', label: 'Load time' },
      { value: 'SSR', label: 'SEO gain' },
      { value: 'Global', label: 'Piracy prevention' },
    ],
  },
  {
    n: 2,
    photos: [
      {
        src: '/images/vivasoft-team.jpg',
        alt: 'Vivasoft gaming moment in the office',
        position: 'center center',
      },
      {
        src: '/images/vivasoft-collaboration.png',
        alt: 'Vivasoft team collaborating around a workstation',
        position: 'center top',
      },
      {
        src: '/images/vivasoft-presentation.png',
        alt: 'Vivasoft team presenting in a meeting room',
        position: 'center top',
      },
    ],
    kicker: 'Large Scale SaaS',
    company: 'Vivasoft Limited',
    role: 'Software Engineer Level II',
    period: 'Nov 2022 to Dec 2025',
    title: 'Scaling AdTech and data infrastructure',
    desc: 'Deepened expertise in large scale systems, from AdTech SaaS to custom frameworks, with a focus on performance, reliability, and code quality.',
    points: [
      'Developed and maintained large scale AdTech SaaS.',
      'Worked with high volume data pipelines handling large datasets.',
      'Optimized complex API architectures for performance and reliability.',
      'Ensured code quality and technical consistency across distributed projects.',
      'Built a custom framework on Vite, improving build performance and scalability.',
    ],
    projects: [
      {
        name: 'Azerion',
        label: 'AdTech & AI',
        logo: '/images/azerion-logo.png',
      },
    ],
    metrics: [
      { value: 'High', label: 'Throughput' },
      { value: 'Custom', label: 'Framework' },
      { value: '3+ yrs', label: 'Stability' },
    ],
  },
  {
    n: 3,
    photos: [
      {
        src: '/images/ontik-balcony.png',
        alt: 'Shibly at the Ontik office balcony',
        position: 'center center',
      },
      {
        src: '/images/ontik-workspace.png',
        alt: 'Laptop workspace at Ontik Technology',
        position: 'center center',
      },
      {
        src: '/images/ontik-anniversary.png',
        alt: 'Ontik office anniversary decorations',
        position: 'center center',
      },
    ],
    kicker: 'AI & LLM',
    company: 'Ontik Technology',
    role: 'Software Engineer, Consultant',
    period: 'Mar 2026 to Jul 2026 (Contract)',
    title: 'Engineering AI powered products',
    desc: 'Applied AI and LLM technologies to production SaaS products, advancing prototypes to funding stages with intelligent features.',
    points: [
      'Built NLQ feature for a finance SaaS MVP using LangChain and LangGraph, letting admins query legacy databases.',
      'Advanced the product from prototype to funding stage.',
      'Developed RAG based MVP for RTM domain.',
    ],
    projectsLabel: 'Deployed To',
    projects: [
      {
        name: 'Akij Venture',
        label: 'Organization',
        logo: '/images/projects/akij-venture-logo.png',
        logoFit: 'cover',
        href: 'https://www.akijventure.com/',
      },
    ],
    metrics: [
      { value: 'NLQ', label: 'Feature' },
      { value: 'RAG', label: 'MVP' },
      { value: 'Funding', label: 'Stage' },
    ],
  },
]

export const skillGroups = [
  {
    title: 'Core Languages',
    items: ['TypeScript', 'Golang', 'Node.js', 'Python'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'Angular', 'Remix', 'React Native'],
  },
  {
    title: 'Backend & APIs',
    items: ['Django', 'Express', 'Microservices', 'REST / GraphQL'],
  },
  {
    title: 'Databases & Storage',
    items: ['PostgreSQL', 'PgVector', 'MongoDB', 'Redis', 'Elasticsearch', 'TypeORM', 'Prisma'],
  },
  {
    title: 'AI & LLM',
    items: ['LangChain', 'LangGraph', 'RAG', 'NL to SQL'],
  },
  {
    title: 'Infrastructure & DevOps',
    items: ['Google Cloud Platform (GCP)', 'Firebase', 'Docker', 'Kubernetes', 'GitHub Actions', 'GitLab CI'],
  },
]

export const education = []

export const voicePrinciples = [
  {
    title: 'Clear',
    desc: 'Jargon out, meaning in. If a reader has to read a sentence twice, it isn’t finished.',
  },
  {
    title: 'Compelling',
    desc: 'Every piece earns the next line. Story first, structure second, polish last.',
  },
  {
    title: 'Credible',
    desc: 'Primary sources, fact checks and human QA. Speed from AI, trust from judgment.',
  },
]

export const voiceExamples = [
  {
    dont: 'We leverage synergistic solutions to optimize stakeholder outcomes.',
    do: 'We help your team ship content that actually moves the numbers.',
  },
  {
    dont: 'Our product is a best in class, industry leading platform.',
    do: 'Here’s the one problem it solves and the proof it works.',
  },
]

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'Stories', href: '#stories' },
  { label: 'Work', href: '#work' },
]
