const { useState, useEffect, useRef } = window.React || (typeof React !== 'undefined' ? React : {});

/* ─── ZERO-404 EMBEDDED IMAGE & RESUME RESOLVER ─── */
function getImageSrc(path) {
  if (!path) return '';
  if (typeof window !== 'undefined' && window.PORTFOLIO_IMAGES) {
    if (window.PORTFOLIO_IMAGES[path]) return window.PORTFOLIO_IMAGES[path];
    const clean = path.startsWith('/') ? path.slice(1) : `/${path}`;
    if (window.PORTFOLIO_IMAGES[clean]) return window.PORTFOLIO_IMAGES[clean];
    const filename = path.split('/').pop();
    if (window.PORTFOLIO_IMAGES[filename]) return window.PORTFOLIO_IMAGES[filename];
  }
  return path;
}

function getResumePdfSrc() {
  return (typeof window !== 'undefined' && window.PORTFOLIO_RESUME_PDF) || '/resume.pdf';
}

/* ─── SCROLL REVEAL HOOK ─── */
function useScrollReveal(ready, route) {
  useEffect(() => {
    if (!ready) return;
    const revealAll = () => {
      document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .timeline-card-wrapper, .education-milestone-item').forEach((el) => {
        el.classList.add('revealed');
      });
    };

    revealAll();
    const timer1 = setTimeout(revealAll, 50);
    const timer2 = setTimeout(revealAll, 200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [ready, route]);
}

/* ─── COMPREHENSIVE AUTHENTIC DATA SOURCES ─── */
const personalInfo = {
  name: 'Mohit Mundke',
  title: 'AI & Data Science Student · Google Student Ambassador · Aspiring Software Engineer',
  tagline: 'Building ideas into intelligent digital experiences.',
  headline: 'Exploring technology, crafting software, and empowering student communities.',
  description: "I'm passionate about exploring technology, building meaningful digital experiences, and turning ambitious ideas into real-world solutions through software and innovation.",
  location: 'Pune, Maharashtra, India',
  phone: '+91 9767969701',
  email: 'mohitmundke20@gmail.com',
  availability: 'Open to Opportunities',
  languages: ['English', 'Hindi', 'Marathi'],
  social: {
    linkedin: 'https://www.linkedin.com/in/mohit-mundke-239439352',
    github: 'https://github.com/mohitmundke',
    instagram: 'https://www.instagram.com/w3b.m0hit',
    whatsapp: 'https://wa.me/919767969701?text=Hi%20Mohit,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect!'
  }
};

const navItems = [
  { id: '/', label: 'Home' },
  { id: '/about', label: 'About' },
  { id: '/skills', label: 'Skills' },
  { id: '/experience', label: 'Experience' },
  { id: '/projects', label: 'Projects' },
  { id: '/education', label: 'Education' },
  { id: '/achievements', label: 'Achievements' },
  { id: '/gallery', label: 'Gallery' },
  { id: '/contact', label: 'Contact' },
];

const statsData = [
  {
    icon: '🚀',
    value: '2+',
    label: 'Projects',
    desc: 'Built & shipped',
    color: 'purple'
  },
  {
    icon: '🏆',
    value: '2+',
    label: 'Hackathons',
    desc: 'Participated & competed',
    color: 'amber'
  },
  {
    icon: '🎓',
    value: 'GID 5314',
    label: 'Google Ambassador',
    desc: 'Bronze Badge Leader',
    color: 'blue'
  },
  {
    icon: '</>',
    value: '10+',
    label: 'Technologies',
    desc: 'Continuous learning',
    color: 'cyan'
  }
];

const coreBeliefs = [
  {
    icon: '💡',
    title: 'Purpose-Driven Software',
    desc: 'Technology is at its finest when it solves real human friction, increases wellness, and simplifies complex workflows.'
  },
  {
    icon: '🤝',
    title: 'Community Empowerment',
    desc: 'True engineering leadership is about lifting peers, sharing knowledge openly, and fostering collaborative developer ecosystems.'
  },
  {
    icon: '⚡',
    title: 'Adaptive Curiosity',
    desc: 'The tech landscape evolves rapidly. Embracing AI fundamentals and staying curious is how we build future-ready solutions.'
  }
];

const skillCategories = [
  {
    id: 'programming',
    title: 'Programming Languages',
    desc: 'Core languages for algorithmic thinking, system development, and data workflows.',
    skills: [
      { name: 'Python', tag: 'AI, ML, Backend & Scripting', level: 'Advanced', icon: '🐍' },
      { name: 'Java', tag: 'OOP & Application Logic', level: 'Intermediate', icon: '☕' },
      { name: 'C / C++', tag: 'System Fundamentals & DSA', level: 'Intermediate', icon: '⚡' },
      { name: 'JavaScript (ES6+)', tag: 'Modern Web & Async', level: 'Proficient', icon: '📜' }
    ]
  },
  {
    id: 'web',
    title: 'Web Development',
    desc: 'Modern frontend & full-stack technologies for interactive user interfaces.',
    skills: [
      { name: 'HTML5 & CSS3', tag: 'Semantic Layouts & Styling', level: 'Advanced', icon: '🌐' },
      { name: 'Tailwind CSS', tag: 'Utility-First Modern Design', level: 'Advanced', icon: '🎨' },
      { name: 'React', tag: 'Component Architecture & Hooks', level: 'Proficient', icon: '⚛️' },
      { name: 'REST APIs', tag: 'Client-Server Communication', level: 'Proficient', icon: '🔌' }
    ]
  },
  {
    id: 'ai-data',
    title: 'AI & Data Science',
    desc: 'Intelligent models, generative AI integrations, and exploratory data analysis.',
    skills: [
      { name: 'Artificial Intelligence', tag: 'Foundations & Architecture', level: 'Specialization', icon: '🧠' },
      { name: 'Machine Learning', tag: 'Supervised/Unsupervised Basics', level: 'Intermediate', icon: '📈' },
      { name: 'Data Science & Analytics', tag: 'Insights, EDA & Statistics', level: 'Proficient', icon: '📊' },
      { name: 'Google Gemini AI', tag: 'GenAI & Prompt Engineering', level: 'Advanced', icon: '✨' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    desc: 'Essential developer tools, version control, and cloud developer platforms.',
    skills: [
      { name: 'Git & GitHub', tag: 'Version Control & Open Source', level: 'Advanced', icon: '🐙' },
      { name: 'VS Code', tag: 'Primary Development Environment', level: 'Advanced', icon: '💻' },
      { name: 'Google Tech Tools', tag: 'Workspace & AI Developer Tools', level: 'Advanced', icon: '🛠️' },
      { name: 'AI Developer Utilities', tag: 'Workflow Acceleration', level: 'Proficient', icon: '⚡' }
    ]
  },
  {
    id: 'leadership',
    title: 'Professional & Leadership Skills',
    desc: 'Community building, public speaking, team coordination, and event execution.',
    skills: [
      { name: 'Leadership', tag: 'Google Ambassador & Community Lead', level: 'Key Strength', icon: '🏆' },
      { name: 'Public Speaking', tag: 'Technical Sessions & Workshops', level: 'Key Strength', icon: '🎤' },
      { name: 'Event Management', tag: 'Fund My Crazy, Glow-up Night', level: 'Proven Track Record', icon: '📅' },
      { name: 'Community Building', tag: 'Peer Mentoring & Tech Advocacy', level: 'Passion', icon: '🤝' },
      { name: 'Teamwork & Problem Solving', tag: 'Collaborative Engineering', level: 'Core Quality', icon: '🧩' }
    ]
  }
];

const experienceData = [
  {
    role: 'Google Student Ambassador (GID: 5314)',
    company: 'Google',
    period: 'May 2026 – Present',
    type: 'Leadership & Community Advocacy',
    badge: 'Bronze Badge Ambassador',
    badgeColor: 'amber',
    icon: '🏆',
    description: 'Leading technology awareness initiatives, organizing campus technical sessions on Google Gemini AI and modern developer tools, and driving student engagement through collaborative workshops.',
    responsibilities: [
      'Spearheaded impactful campus initiatives including "Fund My Crazy" and "Career Glow-up Night".',
      'Conducted hands-on student sessions exploring Google Gemini AI applications and prompt engineering.',
      'Represented the campus developer community to empower peers with modern technical skills.'
    ],
    skills: ['Community Leadership', 'Google Gemini AI', 'Public Speaking', 'Event Execution', 'Developer Advocacy']
  },
  {
    role: 'Full Stack Development Intern',
    company: 'Thiranex',
    period: 'Internship',
    type: 'Technical Internship',
    badge: 'Applied Engineering',
    badgeColor: 'cyan',
    icon: '💻',
    description: 'Collaborated on frontend and backend web architecture, applied practical debugging and component lifecycle best practices, and gained real-world software development lifecycle exposure.',
    responsibilities: [
      'Assisted in building responsive frontend components using modern JavaScript and CSS frameworks.',
      'Engaged with full-stack codebases, API integrations, and code reviews under senior engineering guidance.',
      'Deepened practical understanding of modern web performance and responsive design standards.'
    ],
    skills: ['React', 'JavaScript', 'HTML5/CSS3', 'REST APIs', 'Git', 'Agile Workflow']
  },
  {
    role: 'Active Member & Community Contributor',
    company: 'BRAIN Community',
    period: 'Active',
    type: 'Peer Network & Tech Growth',
    badge: 'Peer Collaboration',
    badgeColor: 'purple',
    icon: '🧠',
    description: 'Participating in collaborative tech discussions, sharing project knowledge, exploring AI/ML trends with fellow engineering peers, and supporting campus developer events.',
    responsibilities: [
      'Collaborated on hackathon ideations and peer code review sessions.',
      'Contributed insights on AI data pipelines and emerging software frameworks.'
    ],
    skills: ['Collaborative Ideation', 'AI/ML Discussions', 'Peer Mentoring', 'Technical Networking']
  }
];

const projectsData = [
  {
    id: 'focusnext',
    name: 'Wellness Healthcare (FocusNext)',
    category: 'Remote Worker Wellness Platform · AI & Full-Stack',
    badge1: 'AI & FULL-STACK PROJECT',
    badge2: '⭐ FEATURED PROJECT',
    featured: true,
    tagline: 'Intelligent digital wellness and posture assistance for engineers and remote workers.',
    description: 'A comprehensive wellness healthcare platform engineered to combat digital eye fatigue, posture strain, and burnout during prolonged coding and screen sessions.',
    purpose: 'To help developers, students, and remote workers maintain physical wellbeing and mental clarity during intensive screen workflows.',
    targetUsers: 'Software engineers, AI developers, students, and digital creators working long hours.',
    problem: 'Remote engineers and students spend 10+ continuous hours in front of screens, leading to computer vision syndrome, ergonomic posture degradation, and severe mental burnout.',
    solution: 'FocusNext implements an intelligent 20-20-20 micro-break scheduler, ergonomic posture suggestions, hydration prompts, and wellness analytics to maintain peak energy and focus.',
    technologies: ['React', 'Tailwind CSS', 'Python', 'FastAPI', 'Web Audio APIs', 'Local Storage State'],
    liveUrl: 'https://github.com/mohitmundke',
    githubUrl: 'https://github.com/mohitmundke',
    hasLiveDemo: true,
    visualIcon: '🧘‍♂️',
    visualHighlight: 'Full-Stack Architecture · Remote Worker Wellness Focus',
    highlights: [
      'Automated 20-20-20 ergonomic screen fatigue reminder system',
      'Micro-break breathing and posture guidance modules',
      'Clean glassmorphism dashboard with real-time session tracking',
      'Zero-friction offline-first responsive web architecture'
    ]
  },
  {
    id: 'soilosync',
    name: 'soilOsync',
    category: 'Smart Agriculture / IoT / Sustainability',
    badge1: 'SMART AGRICULTURE & IOT',
    badge2: '🌱 IOT & AI PLATFORM',
    featured: true,
    tagline: 'Smart soil monitoring solution designed to bring real-time soil insights into agriculture.',
    description: 'soilOsync is a smart soil monitoring solution designed to help monitor and understand soil conditions through technology. The project focuses on making agricultural data more accessible and useful, helping users track important soil-related parameters and make better-informed decisions.',
    shortDescription: 'A smart soil monitoring platform designed to provide real-time soil insights and support technology-driven decision-making in agriculture.',
    purpose: 'To empower farmers, agricultural researchers, and growers with real-time soil condition data and technology-driven insights for optimal crop health and sustainable irrigation.',
    targetUsers: 'Farmers, agronomists, precision agriculture practitioners, and sustainable farming communities.',
    problem: 'Traditional agriculture often relies on manual estimation or delayed soil testing for moisture, temperature, and nutrient levels, leading to improper irrigation, degraded soil health, and suboptimal crop yields.',
    solution: 'soilOsync provides a real-time smart soil monitoring platform integrating telemetry data tracking, intuitive analytics dashboards, and an intelligent AI Agricultural Assistant powered by Google Gemini.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Radix UI', 'Google Gemini AI', 'IoT Data Architecture'],
    liveUrl: 'https://github.com/mohitmundke/soilOsync',
    githubUrl: 'https://github.com/mohitmundke/soilOsync',
    hasLiveDemo: true,
    visualIcon: '🌱',
    visualHighlight: 'Real-Time Soil Telemetry · AI Agricultural Assistant · Precision Analytics',
    highlights: [
      'Real-time soil parameter tracking (moisture, temperature, and soil condition metrics)',
      'Integrated AI Agricultural Assistant powered by Google Gemini API',
      'Modern responsive dashboard built with React, Vite, TypeScript, and Radix UI / Tailwind CSS',
      'Data-driven decision support for precision irrigation and sustainable cultivation'
    ]
  },
  {
    id: 'portfolio',
    name: 'Personal Portfolio & GenAI Assistant',
    category: 'Modern Web & Interactive Experience',
    badge1: 'INTERACTIVE WEB & AI',
    badge2: '⭐ PERSONAL BRANDING',
    featured: false,
    tagline: 'High-performance interactive digital portfolio with Recruiter Mode and intelligent Q&A.',
    description: 'Designed and built from the ground up featuring futuristic bento grid architecture, Recruiter View Mode, dynamic project presentation, and client-side conversational AI assistant.',
    purpose: 'To provide recruiters and collaborators with an engaging, interactive window into Mohit’s engineering skills, leadership, and verified credentials.',
    targetUsers: 'Technical recruiters, engineering hiring managers, and student tech community collaborators.',
    problem: 'Traditional static PDF resumes fail to convey personality, dynamic technical depth, leadership initiatives, and real-time interactive capabilities.',
    solution: 'Engineered a dark futuristic web portal featuring Recruiter View mode, smooth motion systems, client-side conversational AI assistant, and direct email delivery.',
    technologies: ['React 18', 'Tailwind CSS', 'JavaScript (ES6+)', 'Babel Standalone', 'Canvas Particles', 'FormSubmit API'],
    liveUrl: '#/',
    githubUrl: 'https://github.com/mohitmundke',
    hasLiveDemo: true,
    visualIcon: '🚀',
    visualHighlight: 'Interactive Client-Side Architecture · GenAI Knowledge Base',
    highlights: [
      'One-click Recruiter View mode for fast executive candidate evaluation',
      'Direct email delivery pipeline wired to mohitmundke20@gmail.com',
      'Client-side knowledge base AI assistant widget',
      'Performance-optimized zero-build client delivery'
    ]
  }
];

/* ─── 4 DETAILED EDUCATION MILESTONES WITH RICH METADATA ─── */
const educationMilestones = [
  {
    id: 'milestone-1',
    num: '01',
    label: 'PRIMARY EDUCATION',
    institution: 'Balkavi Thombare Primary School',
    period: '1st – 7th Standard',
    program: 'Foundational Primary Education',
    position: 'left',
    icon: '🎒',
    accentColor: 'purple',
    accentGradient: 'from-purple-600/20 via-violet-600/10 to-transparent',
    borderGlow: 'border-purple-500/30',
    description: "The genesis of Mohit's academic journey — where natural curiosity, foundational problem-solving, discipline, and an early love for mathematics and sciences took root.",
    tags: ['Foundational Learning', 'Early Curiosity', 'Mathematics & Logic', 'Academic Roots']
  },
  {
    id: 'milestone-2',
    num: '02',
    label: 'SECONDARY EDUCATION',
    institution: 'Sarajai Kude Madhyamik Vidyalay, Dharangaon',
    period: '8th – 10th Standard',
    program: 'Secondary School Certificate (SSC)',
    highlight: 'SSC — 87.00%',
    position: 'right',
    icon: '🏫',
    accentColor: 'violet',
    accentGradient: 'from-violet-600/20 via-blue-600/10 to-transparent',
    borderGlow: 'border-violet-500/30',
    description: "A defining period of academic acceleration, focused discipline, and building a rigorous analytical foundation. Graduated with distinction (87.00%) with active participation in science exhibitions and school co-curriculars.",
    tags: ['Academic Distinction (87%)', 'Analytical Mindset', 'Science & Geometry', 'Discipline']
  },
  {
    id: 'milestone-3',
    num: '03',
    label: 'HIGHER SECONDARY EDUCATION',
    institution: "P. R. High School Society's Arts, Commerce and Science College, Dharangaon",
    period: '11th – 12th Standard',
    program: 'Higher Secondary Certificate (HSC) · Science Stream',
    highlight: 'HSC — 77.50%',
    position: 'left',
    icon: '📚',
    accentColor: 'blue',
    accentGradient: 'from-blue-600/20 via-cyan-600/10 to-transparent',
    borderGlow: 'border-blue-500/30',
    description: "Deep exploration of foundational sciences, advanced calculus, physics principles, and computer science fundamentals. Cultivated a passion for computational logic that cemented the path toward Computer Science Engineering.",
    tags: ['HSC Science (77.50%)', 'Advanced Mathematics', 'Physics & Logic', 'Engineering Preparation']
  },
  {
    id: 'milestone-4',
    num: '04',
    label: 'CURRENT JOURNEY',
    institution: 'Dr. D. Y. Patil College of Engineering and Innovation, Pune',
    period: '2025 – 2029 (Undergraduate)',
    program: 'B.Tech — Artificial Intelligence & Data Science',
    isCurrent: true,
    highlight: 'Present / Current',
    position: 'right',
    icon: '🎓',
    accentColor: 'cyan',
    accentGradient: 'from-cyan-500/25 via-blue-600/15 to-transparent',
    borderGlow: 'border-cyan-500/40',
    description: "Currently pursuing undergraduate engineering specializing in AI & Data Science. Immersed in machine learning foundations, algorithms, modern full-stack development, Google Gemini AI integrations, and leading campus tech developer initiatives as a Google Student Ambassador.",
    tags: ['AI & Data Science', 'Machine Learning', 'Full-Stack Software', 'Google Ambassador', 'Algorithms & DSA']
  }
];

const achievementsData = [
  {
    title: 'Google Student Ambassador (Bronze Badge)',
    issuer: 'Google',
    type: 'Leadership Milestone',
    icon: '🏆',
    year: '2026',
    color: 'amber',
    badgeText: 'Official GSA Badge',
    desc: 'Recognized with the official GSA Bronze Badge (GID: 5314) for driving impactful AI awareness initiatives and campus tech community leadership.'
  },
  {
    title: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google',
    type: 'Professional Certification',
    icon: '🛡️',
    year: 'Verified',
    color: 'cyan',
    badgeText: 'Google Certified ✓',
    desc: 'Comprehensive training in cybersecurity foundations, threat detection, network security, Linux command line, SQL, and security operations.'
  },
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    type: 'Professional Certification',
    icon: '📊',
    year: 'Verified',
    color: 'blue',
    badgeText: 'Google Certified ✓',
    desc: 'Rigorous credential covering data cleaning, analysis, SQL, visualization, R programming, and data-driven problem solving.'
  },
  {
    title: 'Campus Technical Contributor',
    issuer: 'DYPCOEI Pune',
    type: 'Community Honor',
    icon: '🌟',
    year: 'Active',
    color: 'purple',
    badgeText: 'Campus Recognition',
    desc: 'Recognized for active participation in college developer initiatives, AI workshops, and peer academic mentoring.'
  },
  {
    title: 'Team Gemini Explorer — 600 Points Milestone',
    issuer: 'Google Student Ambassadors · Team Gemini',
    type: 'Leadership Milestone',
    icon: '🚀',
    year: '2026',
    color: 'blue',
    badgeText: '600 Points Achieved ✓',
    desc: 'Completed 600 points milestone over 5 months of active ambassadorship (GID: 5314), unlocking official Team Gemini Bronze Explorer rewards.'
  },
  {
    title: 'GSA Contributor Reward — First Earned Milestone',
    issuer: 'Google Student Ambassadors (India)',
    type: 'Contributor Recognition',
    icon: '🎁',
    year: '2026',
    color: 'emerald',
    badgeText: 'Official GSA Reward ✓',
    desc: 'Awarded Amazon Pay contributor gift card in recognition of active leadership, event execution, and community participation as a Google Student Ambassador (GID: 5314).'
  }
];

const beyondTechData = [
  { icon: '🎯', title: 'Problem Solver', desc: 'Love deconstructing complex challenges into simple, elegant systems.' },
  { icon: '💡', title: 'Always Learning', desc: 'Consistently reading tech documentation, exploring AI papers, and experimenting.' },
  { icon: '🗣️', title: 'Communicator', desc: 'Passionate about public speaking, presenting ideas, and mentoring peers.' },
  { icon: '🌱', title: 'Growth Mindset', desc: 'Embracing constructive feedback to refine both code and character daily.' }
];

/* ─── GALLERY DATA SOURCES (COMPETITIONS, CERTIFICATES, EVENTS & MEMORIES) ─── */
const galleryCategories = [
  { id: 'all', label: 'All Moments', icon: '✨' },
  { id: 'ambassador', label: 'Google Ambassador', icon: '🌟' },
  { id: 'certificate', label: 'Certifications', icon: '📜' },
  { id: 'career', label: 'Career & Memberships', icon: '💼' },
  { id: 'competition', label: 'Competitions', icon: '🏆' },
  { id: 'community', label: 'Workshops & Community', icon: '🤝' },
];

const galleryData = [
  {
    id: 'gsa-amazon-gift-card-reward',
    title: 'Google Student Ambassador Contributor Reward — First Earned Milestone',
    category: 'ambassador',
    categoryBadge: 'LEADERSHIP & REWARDS',
    specialBadge: '✦ FIRST EARNED MILESTONE',
    secondaryBadge: '✦ CONTRIBUTOR REWARD',
    cornerBadge: 'AMAZON PAY REWARD · GID: 5314',
    gidBadge: 'GID: 5314',
    date: '2026 Milestone',
    dateFormatted: '2026 · Official Contributor Recognition',
    organization: 'Google Student Ambassadors India · Pine Labs',
    role: 'Google Student Ambassador (GID: 5314)',
    program: 'Google Student Ambassador Program 2026',
    institution: 'Dr. D. Y. Patil College of Engineering & Innovation (DYPCEI)',
    association: 'Team Gemini & Google Student Community',
    issuedTo: 'Mohit Yogeshkumar Mundke',
    actionButtonText: 'View Reward Details',
    image: '/images/gsa-amazon-gift-card-reward.jpg',
    imageAlt: 'Google Student Ambassador Contributor Reward Amazon Gift Card — Mohit Yogeshkumar Mundke (GID: 5314)',
    downloadName: 'Mohit-Mundke-GSA-Amazon-Gift-Card-Reward.jpg',
    badgeStyle: 'bg-gradient-to-r from-emerald-600/25 via-teal-600/25 to-blue-500/25 border border-emerald-400/40 text-emerald-300',
    pulseColor: 'bg-emerald-400',
    cardBg: 'from-emerald-950/20 via-[#040e16] to-[#030610]',
    cardBorder: 'hover:border-emerald-500/40',
    topGlow: 'bg-emerald-600/15',
    bottomGlow: 'bg-teal-500/15',
    captionBg: 'bg-emerald-950/25 border-emerald-500/25',
    captionLabel: 'text-emerald-400',
    tagColor: 'text-emerald-300 hover:border-emerald-500/40',
    isFeatured: true,
    shortDescription: 'A deeply meaningful milestone — receiving an Amazon Pay reward for active community leadership, technical sessions, and hands-on participation as a Google Student Ambassador.',
    highlightsList: [
      'Official GSA Contributor Reward',
      'First Independent Earnings Milestone',
      'Google Student Ambassador Program 2026',
      'Community Contributions & Event Participation',
      'Value of Showing Up & Consistent Effort',
      'Issued to: Mohit Yogeshkumar Mundke',
      'Order: ARRS0000011847 via Pine Labs',
      'Team Gemini — GID: 5314'
    ],
    caption: `A Small Win That Means the World — Celebrating My First Earned Milestone ✨🎁

Grateful and excited to share that I’ve received a ₹500 Amazon Gift Card as an official reward for my contributions as a Google Student Ambassador 2026 (GID: 5314).

While ₹500 might seem like a modest number to some, to me it holds deep personal significance — because it represents my very first earned income. 🥹✨

It isn’t about the monetary figure. It’s about the unforgettable feeling of earning something entirely through my own dedication, curiosity, participation, and the work I’ve poured into the student tech community over these past months.

For me, this reward is a tangible reminder of a timeless truth:
"Showing up consistently, experimenting boldly, creating value, and helping others always matters."

Every small milestone is a stepping stone toward the bigger vision. I’m deeply grateful for the opportunities to build with Google Gemini, organize campus sessions, and collaborate with inspiring student developers across India.

Here’s to continuous learning, embracing new challenges, and many more milestones ahead! 🌱🚀

A heartfelt thank you to Google, Team Gemini, Google Student Ambassadors (India), and Ping Network for recognizing student efforts and making this journey so rewarding! ✨

GID: 5314`,
    tags: [
      '#GoogleStudentAmbassador',
      '#TeamGemini',
      '#GoogleGemini',
      '#FirstIncome',
      '#SmallWins',
      '#ContributorReward',
      '#GSA2026',
      '#CampusLeadership',
      '#CommunityImpact',
      '#ContinuousLearning',
      '#StudentDeveloper',
      '#GrowthMindset'
    ]
  },
  {
    id: 'team-gemini-explorer-rewards-600-points',
    title: 'Team Gemini Explorer Milestone — 600 Points & Rewards',
    category: 'ambassador',
    categoryBadge: 'LEADERSHIP & AMBASSADORSHIP',
    specialBadge: '✦ 600 POINTS MILESTONE',
    secondaryBadge: '✦ EXPLORER REWARDS',
    cornerBadge: 'BRONZE EXPLORER · 600 PTS',
    gidBadge: 'GID: 5314',
    date: 'September 2026',
    dateFormatted: 'September 2026 · 5-Month Ambassador Milestone',
    organization: 'Google Student Ambassadors India · Team Gemini',
    role: 'Google Student Ambassador · Team Gemini Explorer',
    program: 'Google Student Ambassador Program 2026',
    institution: 'Dr. D. Y. Patil College of Engineering & Innovation (DYPCEI)',
    association: 'Team Gemini & Google Student Community',
    actionButtonText: 'View Milestone',
    image: '/images/team-gemini-explorer-rewards-600-points.jpg',
    imageAlt: 'Team Gemini Explorer 600 Points Milestone Rewards — Notebook, Pen & Bronze Box — Mohit Mundke (GID: 5314)',
    downloadName: 'Mohit-Mundke-Team-Gemini-Explorer-Rewards-600-Points.jpg',
    badgeStyle: 'bg-gradient-to-r from-blue-600/25 via-violet-600/25 to-cyan-500/25 border border-cyan-400/40 text-cyan-300',
    pulseColor: 'bg-cyan-400',
    cardBg: 'from-blue-950/20 via-[#070e1c] to-[#030610]',
    cardBorder: 'hover:border-cyan-500/40',
    topGlow: 'bg-blue-600/15',
    bottomGlow: 'bg-cyan-500/15',
    captionBg: 'bg-blue-950/25 border-cyan-500/25',
    captionLabel: 'text-cyan-400',
    tagColor: 'text-cyan-300 hover:border-blue-500/40',
    isFeatured: true,
    shortDescription: '600 points unlocked after 5 months of active ambassadorship — celebrating the official Team Gemini Bronze Explorer rewards, consistent AI experimentation, and community impact.',
    highlightsList: [
      '600 Points Milestone Achieved',
      '5 Months as Google Student Ambassador',
      'Team Gemini Explorer Rewards Unlocked',
      'Official Ambassador Hardcover Notebook',
      'Engraved 2026 Ambassador Pen',
      'Brainstorming & Structuring Ideas with Gemini',
      'Hands-on AI Experimentation & Learning',
      'Team Gemini — GID: 5314'
    ],
    caption: `600 Points. 5 Months. Infinite Curiosity, Ideas & Memories. 🚀✨

When I started my journey as a Google Student Ambassador (GID: 5314), I knew it would be an incredible opportunity to learn, explore, and connect with a passionate developer community. What I didn’t realize was just how deeply Google Gemini would become woven into my daily workflow.

Over the past 5 months, Gemini has been my constant creative partner and technical catalyst:
• 💡 Brainstorming innovative ideas & turning raw thoughts into structured roadmaps
• 🔍 Deconstructing complex concepts & exploring cutting-edge AI technologies
• 🛠️ Accelerating project development, refining code, and building smarter solutions
• 🎨 Creating engaging content & empowering peers across campus

One of the most rewarding aspects of the #TeamGemini journey is its milestone system. By actively participating, completing technical activities, and contributing to the student community, we earn points and unlock new achievements.

Today, I’m thrilled to share that I have crossed 600 points and received these official Team Gemini Bronze Explorer rewards! 💙

To me, this notebook, engraved 2026 Ambassador pen, and Explorer kit represent far more than just goodies — they stand for the consistency, curiosity, and effort invested over the past five months.

The biggest lesson of this journey? The best way to understand technology isn’t just to use it, but to explore, experiment, build, and innovate with it.

5 months down.
600 points achieved.
And honestly… this is just the beginning. 🚀

Thank you, #TeamGemini, for making this journey so exciting! ✨`,
    tags: [
      '#GoogleStudentAmbassador',
      '#TeamGemini',
      '#GoogleGemini',
      '#GeminiAI',
      '#600Points',
      '#ExplorerRewards',
      '#BronzeExplorer',
      '#GSA2026',
      '#AI',
      '#ArtificialIntelligence',
      '#GenerativeAI',
      '#CampusLeadership',
      '#Innovation',
      '#TechCommunity',
      '#StudentAmbassador'
    ]
  },
  {
    id: 'gsa-august-2026-highlights',
    title: 'August 2026 Monthly Highlights — Google Student Ambassador',
    category: 'ambassador',
    categoryBadge: 'LEADERSHIP & MONTHLY HIGHLIGHTS',
    specialBadge: '✦ MONTHLY IMPACT',
    secondaryBadge: '✦ FUND MY CRAZY',
    cornerBadge: 'FUND MY CRAZY · GID: 5314',
    gidBadge: 'GID: 5314',
    date: 'August 2026',
    dateFormatted: 'August 2026 · Monthly Highlights',
    organization: 'Google Student Ambassadors · Team Gemini',
    role: 'Google Student Ambassador',
    program: 'Google Student Ambassador Program 2026',
    monthBadge: 'AUGUST 2026',
    association: 'Team Gemini & Google Student Community',
    actionButtonText: 'View Full Highlights',
    image: '/images/gsa-august-2026-highlights.jpg',
    imageAlt: 'Google Student Ambassador August 2026 Monthly Highlights — Fund My Crazy — Mohit Mundke (GID: 5314)',
    downloadName: 'Mohit-Mundke-GSA-August-2026-Highlights.jpg',
    badgeStyle: 'bg-gradient-to-r from-blue-600/25 via-violet-600/25 to-yellow-500/25 border border-blue-400/40 text-blue-300',
    pulseColor: 'bg-yellow-400',
    cardBg: 'from-blue-950/20 via-[#0c0a1a] to-[#030610]',
    cardBorder: 'hover:border-blue-500/40',
    topGlow: 'bg-blue-600/15',
    bottomGlow: 'bg-violet-500/15',
    captionBg: 'bg-blue-950/25 border-blue-500/25',
    captionLabel: 'text-yellow-400',
    tagColor: 'text-yellow-300 hover:border-blue-500/40',
    isFeatured: true,
    shortDescription: 'Learning. Building. Inspiring. — August leadership highlights showcasing organizing Fund My Crazy, converting ideas into live demos, community collaboration, and personal growth as an Ambassador.',
    highlightsList: [
      'Organized and hosted Fund My Crazy',
      'Collaborated with students, creators, and innovators',
      'Turned creative ideas into real demos and experiences',
      'Worked on planning, communication, and collaboration',
      'Project and event execution',
      'Built stronger leadership skills & adaptability',
      'Key Takeaway: Empowering ideas and bringing people together',
      'Team Gemini — GID: 5314'
    ],
    caption: `This month pushed me far beyond my comfort zone as a Google Gemini Student Ambassador. 🚀

From organizing Fund My Crazy to connecting with incredible students, creators, and innovators, I got a glimpse of what campus leadership truly looks like.

One of my biggest challenges was turning an idea into something people could actually see, experience, and connect with. At first, there were countless moving parts, uncertainties, and decisions to make. But the process taught me something valuable: great ideas need more than creativity. They need planning, communication, collaboration, and adaptability.

The highlight of the month was seeing Fund My Crazy bring ideas to life, transforming concepts into demos, visuals, and experiences. It reminded me that student communities grow when people stay curious, collaborate openly, and have the courage to experiment.

💡 My biggest takeaway:
"Leadership isn’t about doing everything yourself. It’s about bringing the right people together, empowering their ideas, and creating an environment where everyone feels encouraged to build something meaningful."

This month didn’t just help me create better.
It taught me to lead better.

GID: 5314`,
    tags: [
      '#GoogleGeminiStudentAmbassador',
      '#GoogleStudentAmbassador',
      '#GSA2026',
      '#TeamGemini',
      '#MonthlyHighlights',
      '#CampusLeadership',
      '#Innovation',
      '#StudentCommunity',
      '#Collaboration',
      '#Leadership',
      '#FundMyCrazy',
      '#AI',
      '#GoogleGemini'
    ]
  },
  {
    id: 'thiranex-internship-offer',
    title: 'Internship in Full Stack Development',
    category: 'career',
    categoryBadge: 'CAREER & PROFESSIONAL EXPERIENCE',
    specialBadge: '✦ CAREER MILESTONE',
    secondaryBadge: 'REMOTE INTERNSHIP',
    cornerBadge: 'FULL STACK DEVELOPMENT',
    gidBadge: 'THX-AUG1126-479',
    date: '11 Aug 2026 — 10 Sept 2026',
    dateFormatted: '11 August 2026 — 10 September 2026',
    organization: 'Thiranex',
    role: 'Intern — Full Stack Development',
    program: 'Full Stack Development Internship',
    association: 'Thiranex Engineering Team · Remote / Project-Based',
    actionButtonText: 'View Offer Letter',
    image: '/images/thiranex-internship-offer-letter.jpg',
    imageAlt: 'Thiranex Offer Letter for Internship in Full Stack Development — Mohit Yogeshkumar Mundke (THX-AUG1126-479)',
    downloadName: 'Mohit-Mundke-Thiranex-Internship-Offer-Letter.jpg',
    badgeStyle: 'bg-gradient-to-r from-blue-600/25 via-cyan-600/25 to-indigo-600/25 border border-cyan-400/40 text-cyan-300',
    pulseColor: 'bg-cyan-400',
    cardBg: 'from-blue-950/20 via-[#070e1c] to-[#030610]',
    cardBorder: 'hover:border-cyan-500/40',
    topGlow: 'bg-blue-600/15',
    bottomGlow: 'bg-cyan-500/15',
    captionBg: 'bg-blue-950/25 border-cyan-500/25',
    captionLabel: 'text-cyan-400',
    tagColor: 'text-cyan-300 hover:border-blue-500/40',
    isFeatured: true,
    shortDescription: 'Selected for Internship in Full Stack Development at Thiranex — working on industry-oriented practical projects, component architecture, and real-world web applications under professional mentorship.',
    highlightsList: [
      'Selected for Internship in Full Stack Development',
      'Organization: Thiranex',
      'Role: Intern — Full Stack Development',
      'Work Mode: Remote / Project-Based',
      'Commencement: 11 August 2026',
      'Completion: 10 September 2026',
      'Industry-oriented practical projects',
      'Professional mentorship',
      'Hands-on Full Stack Development experience'
    ],
    caption: `🚀 Excited to Begin a New Chapter!

I’m thrilled to share that I’ve been selected for an Internship in Full Stack Development at Thiranex. 💻✨

This opportunity marks another step forward in my journey of turning knowledge into real-world skills and building practical solutions.

Over the coming weeks, I’ll be working on industry-oriented projects, gaining hands-on experience in Full Stack Development, and learning under professional mentorship.

📌 Role: Intern — Full Stack Development
🏢 Organization: Thiranex
📅 Duration: 11 August 2026 — 10 September 2026
🌐 Mode: Remote / Project-Based

I’m grateful for this opportunity and excited for the learning, challenges, and experiences ahead. Looking forward to building, learning, and growing! 🚀

Here’s to the next chapter! 🌱💻`,
    tags: [
      '#Internship',
      '#FullStackDevelopment',
      '#Thiranex',
      '#WebDevelopment',
      '#SoftwareDevelopment',
      '#Learning',
      '#CareerGrowth',
      '#TechJourney',
      '#StudentDeveloper',
      '#ProfessionalGrowth',
      '#FullStackDeveloper',
      '#RemoteInternship'
    ]
  },
  {
    id: 'gsa-july-2026-highlights',
    title: 'Google Student Ambassador Highlights — July 2026',
    category: 'ambassador',
    categoryBadge: 'LEADERSHIP & AMBASSADORSHIP',
    specialBadge: '✦ BRONZE BADGE MILESTONE',
    secondaryBadge: '✦ JULY HIGHLIGHTS',
    cornerBadge: 'BRONZE BADGE · GID: 5314',
    gidBadge: 'GID: 5314',
    date: 'July 2026',
    dateFormatted: 'July 2026 · Monthly Highlights',
    organization: 'Google Student Ambassadors India · Team Gemini',
    role: 'Google Student Ambassador · Bronze Badge',
    program: 'Google Student Ambassador Program 2026',
    institution: 'Dr. D. Y. Patil College of Engineering & Innovation (DYPCEI)',
    association: 'Team Gemini & Google Student Community',
    actionButtonText: 'View July Highlights',
    image: '/images/gsa-july-2026-highlights.jpg',
    imageAlt: 'Google Student Ambassador July Monthly Highlights — Bronze Badge — Mohit Yogeshkumar Mundke (GID: 5314)',
    downloadName: 'Mohit-Mundke-GSA-July-2026-Highlights.jpg',
    badgeStyle: 'bg-gradient-to-r from-amber-600/25 via-violet-600/25 to-blue-500/25 border border-amber-400/40 text-amber-300',
    pulseColor: 'bg-amber-400',
    cardBg: 'from-amber-950/20 via-[#0a0718] to-[#030610]',
    cardBorder: 'hover:border-amber-500/40',
    topGlow: 'bg-amber-600/15',
    bottomGlow: 'bg-violet-500/15',
    captionBg: 'bg-amber-950/25 border-amber-500/25',
    captionLabel: 'text-amber-400',
    tagColor: 'text-amber-300 hover:border-violet-500/40',
    isFeatured: true,
    shortDescription: 'Learning. Leading. Inspiring with Gemini ✨ — July progress dashboard showcasing product trials, content creation, analytics tracking, and earning the Bronze Badge.',
    highlightsList: [
      'Google Student Ambassador — July 2026',
      'Bronze Badge Earned',
      'Product Trials (Laboratory Flask)',
      'Content Creation (Video / Clapper)',
      'Monthly Highlights (Analytics / Dashboard)',
      'Product Understanding (Search Exploration)',
      'Boost Google Initiatives (Megaphone)',
      'Team Gemini — GID: 5314'
    ],
    caption: `Learning. Leading. Inspiring with Gemini ✨

July was all about progress, passion, and purpose. As a Google Student Ambassador representing Team Gemini (GID: 5314), I engaged in hands-on product trials, video content creation, analytics tracking, and community tech initiatives.

Honored to earn the Bronze Badge milestone this month! Grateful for every opportunity to learn, lead, and inspire. Let's keep building the future together 🚀`,
    tags: [
      '#GoogleStudentAmbassador',
      '#TeamGemini',
      '#GoogleGemini',
      '#GeminiAI',
      '#BronzeBadge',
      '#GSA2026',
      '#JulyHighlights',
      '#AI',
      '#Leadership',
      '#ContentCreation',
      '#Innovation',
      '#TechCommunity'
    ]
  },
  {
    id: 'brain-foundation-member',
    title: 'Bharat Research in AI and NextGen Foundation Membership 2026',
    category: 'career',
    categoryBadge: 'MEMBERSHIP & COMMUNITY',
    specialBadge: '✦ COMMUNITY ACHIEVEMENT',
    secondaryBadge: 'MEMBER 2026',
    cornerBadge: 'OFFICIAL CERTIFICATE OF MEMBERSHIP',
    gidBadge: 'BRAIN-DRY261-S024',
    date: '02 July 2026',
    dateFormatted: '02 July 2026 · Valid Until 31 Dec 2026',
    organization: 'Bharat Research in AI and NextGen Foundation (BRAIN)',
    role: 'Official Member',
    membership: 'BRAIN Academic Institution Membership',
    institution: 'Dr. D. Y. Patil College of Engineering & Innovation (DYPCEI)',
    association: 'AI & NextGen Research Community',
    actionButtonText: 'View Full Certificate',
    image: '/images/brain-certificate-membership.jpg',
    imageAlt: 'Bharat Research in AI and NextGen Foundation Certificate of Membership — Mohit Yogeshkumar Mundke',
    downloadName: 'Mohit-Mundke-BRAIN-Membership-2026.jpg',
    badgeStyle: 'bg-gradient-to-r from-blue-700/25 via-emerald-600/25 to-amber-500/25 border border-emerald-400/40 text-emerald-300',
    pulseColor: 'bg-emerald-400',
    cardBg: 'from-blue-950/20 via-[#05111b] to-[#030610]',
    cardBorder: 'hover:border-emerald-500/40',
    topGlow: 'bg-blue-600/15',
    bottomGlow: 'bg-emerald-500/15',
    captionBg: 'bg-blue-950/25 border-emerald-500/25',
    captionLabel: 'text-emerald-400',
    tagColor: 'text-emerald-300 hover:border-blue-500/40',
    isFeatured: true,
    shortDescription: 'Official Academic Institution Membership with Bharat Research in AI and NextGen Foundation (BRAIN) — dedicated to AI research, emerging technologies, innovation, and impactful community initiatives.',
    highlightsList: [
      'Official BRAIN Member',
      'Bharat Research in AI and NextGen Foundation',
      'AI, Innovation & Technology Community',
      'Academic Institution Membership',
      'Membership ID: BRAIN-DRY261-S024',
      'Issued: 02 July 2026',
      'Valid Until: 31 December 2026',
      'Dr. D. Y. Patil College of Engineering & Innovation'
    ],
    caption: `Excited to share another meaningful milestone in my journey! 🎉

I’m honored to officially become a member of the Bharat Research in AI and NextGen Foundation (BRAIN).

Being part of a community dedicated to AI, innovation, and technology-driven impact is an incredible opportunity to learn, collaborate, and contribute alongside passionate changemakers.

As an AI & Data Science student, I look forward to expanding my knowledge, working on meaningful initiatives, exploring new opportunities, and growing with this inspiring network.

Grateful for this opportunity and excited for everything that lies ahead. Here’s to continuous learning, innovation, and making a difference! 🚀`,
    tags: [
      '#ArtificialIntelligence',
      '#AI',
      '#MachineLearning',
      '#Innovation',
      '#TechCommunity',
      '#Student',
      '#AIResearch',
      '#Leadership',
      '#FutureReady',
      '#Learning',
      '#BRAIN',
      '#ProfessionalGrowth'
    ]
  },
  {
    id: 'gsa-june-2026-insights',
    title: 'Google Student Ambassador Highlights — June 2026',
    category: 'ambassador',
    categoryBadge: 'LEADERSHIP & AMBASSADORSHIP',
    specialBadge: '✦ FEATURED JOURNEY',
    secondaryBadge: '✦ MONTHLY HIGHLIGHTS',
    cornerBadge: '📸 5 HIGHLIGHTS & PHOTOS',
    gidBadge: 'GID: 5314',
    date: 'June 2026',
    dateFormatted: 'June 2026 · Monthly Milestone',
    organization: 'Google Student Ambassadors India · Team Gemini',
    role: 'Student Ambassador',
    program: 'Google Student Ambassador Program 2026',
    institution: 'Dr. D. Y. Patil College of Engineering & Innovation (DYPCEI)',
    association: 'Team Gemini & Google Student Community',
    actionButtonText: 'View Journey',
    image: '/images/gsa-june-2026-insights.jpg',
    imageAlt: 'Google Student Ambassador Highlights — June 2026 — Mohit Mundke (GID: 5314)',
    downloadName: 'Mohit-Mundke-GSA-June-2026-Highlights.jpg',
    galleryImages: [
      {
        url: '/images/gsa-june-2026-insights.jpg',
        title: 'Monthly Highlights Poster — June 2026',
        caption: 'AI Demo Event, Lyria Showcase, Tech Connections, Video Creation & Welcome Kit'
      },
  {
    id: 'google-gemini-ambassador-2026',
    title: 'Google Gemini AI Student Ambassador Program 2026',
    category: 'ambassador',
    categoryBadge: 'LEADERSHIP & AMBASSADORSHIP',
    specialBadge: '✦ FEATURED ACHIEVEMENT',
    cornerBadge: 'OFFICIAL GSA APPOINTMENT',
    gidBadge: 'GID: 5314',
    date: 'May 2026 – Present',
    dateFormatted: 'May 2026 · Official Appointment',
    organization: 'Google Student Ambassadors India · Google Gemini',
    role: 'Campus Ambassador — 2026',
    institution: 'Dr. D. Y. Patil College of Engineering & Innovation (DYPCEI)',
    association: 'Google Gemini & Student Developer Community',
    image: '/images/google-gemini-ambassador-2026.jpg',
    imageAlt: 'Google Gemini AI Student Ambassador Program 2026 Announcement Poster — Mohit Mundke (GID: 5314)',
    downloadName: 'Mohit-Mundke-Google-Gemini-Ambassador-2026.jpg',
    badgeStyle: 'bg-gradient-to-r from-blue-600/25 via-violet-600/25 to-cyan-500/25 border border-blue-500/40 text-blue-300',
    pulseColor: 'bg-blue-400',
    cardBg: 'from-blue-950/20 via-[#070d1e] to-[#030610]',
    cardBorder: 'hover:border-blue-500/50',
    topGlow: 'bg-blue-600/15',
    bottomGlow: 'bg-cyan-500/15',
    captionBg: 'bg-blue-950/25 border-blue-500/25',
    captionLabel: 'text-blue-400',
    tagColor: 'text-cyan-300 hover:border-blue-500/40',
    isFeatured: true,
    highlights: [
      { label: 'Role', value: 'Campus Ambassador' },
      { label: 'Identity', value: 'GID: 5314' },
      { label: 'Focus', value: 'Google Gemini & AI Projects' }
    ],
    caption: `Excited to announce that I’ve officially joined the Google Gemini AI Student Ambassador Program 2026 as a Campus Ambassador! 🚀✨

Grateful for the opportunity to represent Gemini AI at my college and become part of a nationwide community of innovators, creators, and future tech leaders.

Looking forward to building impactful AI projects, creating content around Gemini AI, organizing engaging activities on campus, and connecting with amazing creators and developers across India. 💙

This is just the beginning of an incredible journey with AI and innovation! ✨`,
    tags: [
      '#GoogleStudentAmbassador',
      '#GSA2026',
      '#TeamGemini',
      '#GoogleGemini',
      '#GeminiAI',
      '#GoogleGeminiAI',
      '#AI',
      '#ArtificialIntelligence',
      '#Innovation',
      '#TechCommunity',
      '#CampusAmbassador',
      '#GenerativeAI'
    ]
  },
  {
    id: 'imarticus-c-cpp-cert',
    title: 'C & C++ Programming',
    category: 'certificate',
    categoryBadge: 'CERTIFICATION',
    cornerBadge: 'CERTIFICATE OF PROFICIENCY',
    date: '08 May 2026',
    dateFormatted: '08 May 2026',
    organization: 'Imarticus Learning',
    association: 'NSDC & Skill India Certified',
    issuedTo: 'Mohit Mundke',
    image: '/images/imarticus-c-cpp-certificate.jpg',
    imageAlt: 'C & C++ Programming Certificate of Proficiency — Imarticus Learning — Grade A — Mohit Mundke',
    downloadName: 'Mohit-Mundke-Imarticus-C-CPP-Certificate.jpg',
    badgeStyle: 'bg-gradient-to-r from-emerald-600/20 via-teal-500/20 to-cyan-500/20 border-emerald-500/40 text-emerald-300',
    pulseColor: 'bg-emerald-400',
    cardBg: 'from-emerald-950/15 via-[#060e10] to-[#030610]',
    cardBorder: 'hover:border-emerald-500/40',
    topGlow: 'bg-emerald-600/10',
    bottomGlow: 'bg-teal-600/10',
    captionBg: 'bg-emerald-950/20 border-emerald-500/20',
    captionLabel: 'text-emerald-400',
    tagColor: 'text-emerald-300 hover:border-emerald-500/40',
    isFeatured: false,
    scoreDetails: {
      consolidated: 'Grade: A',
      assignments: 'Certificate ID: 5RSQBQIZVOH',
      proctoredExam: 'NSDC & Skill India'
    },
    caption: `Grateful to share that I’ve successfully completed the C & C++ Programming certification from Imarticus Learning with an A Grade 🎉

This journey helped me strengthen my fundamentals in:

• C Programming
• C++ Concepts
• Functions & Pointers
• Object-Oriented Programming
• Problem Solving & Logic Building

A big thanks to everyone who supported and guided me throughout the learning process. Looking forward to applying these skills in more projects and real-world development 🚀`,
    tags: [
      '#Programming',
      '#CProgramming',
      '#CPP',
      '#Coding',
      '#Learning',
      '#StudentDeveloper',
      '#SkillDevelopment',
      '#Tech',
      '#ImarticusLearning',
      '#CPlusPlus',
      '#DYPCEOI'
    ]
  },
  {
    id: 'aws-ml-ai-cert',
    title: 'Fundamentals of Machine Learning and Artificial Intelligence',
    category: 'certificate',
    categoryBadge: 'CERTIFICATION',
    date: 'April 13, 2026',
    dateFormatted: 'April 13, 2026',
    organization: 'AWS Training & Certification',
    association: 'Amazon Web Services (AWS)',
    issuedTo: 'Mohit Mundke',
    image: '/images/aws-ml-ai-certificate.jpg',
    imageAlt: 'Fundamentals of Machine Learning and Artificial Intelligence Completion Certificate — AWS Training & Certification — Mohit Mundke',
    downloadName: 'Mohit-Mundke-AWS-ML-AI-Certificate.jpg',
    badgeStyle: 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-300',
    pulseColor: 'bg-amber-400',
    cardBg: 'from-amber-950/15 via-[#070a18] to-[#030610]',
    cardBorder: 'hover:border-amber-500/40',
    topGlow: 'bg-amber-500/10',
    bottomGlow: 'bg-orange-500/10',
    captionBg: 'bg-amber-950/20 border-amber-500/20',
    captionLabel: 'text-amber-400',
    tagColor: 'text-amber-300 hover:border-amber-500/40',
    isFeatured: false,
    caption: `Excited to share that I’ve successfully completed my certification in “Fundamentals of Machine Learning and Artificial Intelligence” from AWS Training & Certification 🎓✨

This journey helped me strengthen my understanding of core ML & AI concepts 🤖📊 and gave me valuable insights into how intelligent systems work in real-world applications 🌍💡

Looking forward to diving deeper into this field and building something impactful 🚀🔥`,
    tags: [
      '#AWS',
      '#MachineLearning',
      '#ArtificialIntelligence',
      '#Learning',
      '#Upskilling',
      '#FutureReady',
      '#AI',
      '#ML'
    ]
  },
  {
    id: 'pixel-war-2k26',
    title: 'Pixel War 2k26 — UI/UX Design Battle',
    category: 'competition',
    categoryBadge: 'COMPETITION',
    date: '7th March 2026',
    dateFormatted: 'March 7, 2026',
    organization: 'Department of Artificial Intelligence & Data Science, Dr. D. Y. Patil College of Engineering & Innovation',
    association: 'BRAIN Student Chapter',
    image: '/images/pixel-war-2k26.jpg',
    imageAlt: 'Pixel War 2k26 UI/UX Design Battle Certificate of Participation — Mohit Mundke',
    downloadName: 'Mohit-Mundke-Pixel-War-2k26.jpg',
    badgeStyle: 'bg-gradient-to-r from-violet-600/20 to-blue-600/20 border-violet-500/40 text-violet-300',
    pulseColor: 'bg-violet-400',
    cardBg: 'from-violet-950/20 via-[#070b19] to-[#030610]',
    cardBorder: 'hover:border-violet-500/40',
    topGlow: 'bg-violet-600/10',
    bottomGlow: 'bg-blue-600/10',
    captionBg: 'bg-violet-950/20 border-violet-500/20',
    captionLabel: 'text-violet-400',
    tagColor: 'text-cyan-300 hover:border-violet-500/40',
    isFeatured: true,
    caption: `Excited to share that I successfully participated in the UI/UX Pixel War 2k26 competition held on 7th March! ✨⭐

Hence, gained a lot of experience by reviewing various tools used by participants like Framer, Stitch, Firebase AI Studio, Figma, Canva, and various other open-source AI tools were used!!

It was a great opportunity to explore creativity, innovation, UI/UX design thinking, and problem-solving.

Special thanks to BRAIN DYPCOEI for organizing the event successfully! 😁`,
    tags: [
      '#DYPCOEI',
      '#UIUX',
      '#PUNE',
      '#AI',
      '#DS',
      '#ML',
      '#Design',
      '#PIXEL_WAR',
      '#Student'
    ]
  },
  {
    id: 'team-collaboration-session',
    title: 'Team Collaboration & Learning Session',
    category: 'community',
    categoryBadge: 'COMMUNITY & COLLABORATION',
    cornerBadge: 'LIVE GOOGLE MEET SESSION',
    date: 'March 2026',
    dateFormatted: 'March 2026 · Online Session',
    sessionType: 'Google Meet Session',
    organization: 'DYPCOEI Student Tech Community',
    association: 'Student Peers & Project Collaborators',
    image: '/images/google-meet-team-collaboration.jpg',
    imageAlt: 'Team Collaboration & Learning Session on Google Meet with Student Peers',
    downloadName: 'Mohit-Mundke-Team-Collaboration-Session.jpg',
    badgeStyle: 'bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-teal-500/20 border border-cyan-500/40 text-cyan-300',
    pulseColor: 'bg-cyan-400',
    cardBg: 'from-blue-950/20 via-[#070e1a] to-[#030610]',
    cardBorder: 'hover:border-cyan-500/40',
    topGlow: 'bg-blue-600/10',
    bottomGlow: 'bg-cyan-500/10',
    captionBg: 'bg-blue-950/25 border-cyan-500/25',
    captionLabel: 'text-cyan-400',
    tagColor: 'text-cyan-300 hover:border-cyan-500/40',
    isFeatured: false,
    shortDescription: 'A collaborative online session with fellow students and team members, focused on discussions, learning, knowledge sharing, and working together as a community.',
    highlightsList: [
      'Team collaboration',
      'Online learning session',
      'Knowledge sharing',
      'Community interaction',
      'Peer learning'
    ],
    caption: `Some of the best learning happens when ideas are shared. 🚀

Collaborating with fellow students, exchanging perspectives, and learning together made this session a valuable experience. Every conversation brought new ideas, insights, and opportunities to grow. ✨`,
    tags: [
      '#Collaboration',
      '#Community',
      '#Teamwork',
      '#LearningTogether',
      '#GoogleMeet',
      '#StudentCommunity'
    ]
  },
  {
    id: 'product-presentation-discussion',
    title: 'Product Presentation & Team Discussion',
    category: 'community',
    categoryBadge: 'WORKSHOPS & SESSIONS',
    cornerBadge: 'PRODUCT PRESENTATION & DEMO',
    date: 'March 2026',
    dateFormatted: 'March 2026 · Interactive Session',
    sessionType: 'Interactive Learning Session',
    organization: 'DYPCOEI Tech & Design Discussion',
    association: 'Design & Innovation Group',
    image: '/images/product-presentation-discussion.jpg',
    imageAlt: 'Product Presentation & Team Discussion during Online Session',
    downloadName: 'Mohit-Mundke-Product-Presentation-Discussion.jpg',
    badgeStyle: 'bg-gradient-to-r from-indigo-600/20 via-violet-600/20 to-blue-500/20 border border-indigo-500/40 text-indigo-300',
    pulseColor: 'bg-indigo-400',
    cardBg: 'from-indigo-950/20 via-[#09081c] to-[#030610]',
    cardBorder: 'hover:border-indigo-500/40',
    topGlow: 'bg-violet-600/10',
    bottomGlow: 'bg-blue-500/10',
    captionBg: 'bg-indigo-950/25 border-indigo-500/25',
    captionLabel: 'text-indigo-400',
    tagColor: 'text-indigo-300 hover:border-indigo-500/40',
    isFeatured: false,
    shortDescription: 'An interactive session involving product exploration, presentations, discussions, and collaborative learning with fellow participants.',
    highlightsList: [
      'Product presentation',
      'Interactive discussion',
      'Team participation',
      'Collaborative learning',
      'Knowledge exchange'
    ],
    caption: `Exploring ideas beyond theory through discussions, presentations, and collaboration. 💡

Sessions like these help transform learning into practical understanding and make the journey more engaging and meaningful.`,
    tags: [
      '#Workshop',
      '#Presentation',
      '#TeamCollaboration',
      '#Learning',
      '#Discussion',
      '#KnowledgeSharing'
    ]
  },
  {
    id: 'nano-banana-tutorial-session',
    title: 'Nano Banana Tutorial Session',
    category: 'community',
    categoryBadge: 'WORKSHOPS & TUTORIALS',
    cornerBadge: 'HANDS-ON TUTORIAL & WORKSHOP',
    date: 'March 2026',
    dateFormatted: 'March 2026 · Practical Workshop',
    sessionType: 'Tutorial & Knowledge Sharing Session',
    organization: 'DYPCOEI AI & Tools Workshop',
    association: 'AI & Creative Tech Exploration',
    image: '/images/nano-banana-tutorial-session.jpg',
    imageAlt: 'Nano Banana Tutorial Presentation Session during Online Workshop',
    downloadName: 'Mohit-Mundke-Nano-Banana-Tutorial-Session.jpg',
    badgeStyle: 'bg-gradient-to-r from-violet-600/20 via-blue-600/20 to-purple-500/20 border border-violet-500/40 text-violet-300',
    pulseColor: 'bg-violet-400',
    cardBg: 'from-violet-950/20 via-[#070b19] to-[#030610]',
    cardBorder: 'hover:border-violet-500/40',
    topGlow: 'bg-blue-600/10',
    bottomGlow: 'bg-purple-600/10',
    captionBg: 'bg-violet-950/25 border-violet-500/25',
    captionLabel: 'text-violet-400',
    tagColor: 'text-violet-300 hover:border-violet-500/40',
    isFeatured: false,
    shortDescription: 'A hands-on tutorial session focused on exploring Nano Banana, sharing knowledge, demonstrating its capabilities, and helping participants understand the tool through practical examples.',
    highlightsList: [
      'Nano Banana tutorial',
      'Live demonstration',
      'Practical learning',
      'Knowledge sharing',
      'Interactive session'
    ],
    caption: `Sharing knowledge is one of the best ways to learn. 🚀

This Nano Banana tutorial session was focused on exploring new tools, demonstrating practical use cases, and making technology easier and more engaging for everyone involved. ✨`,
    tags: [
      '#NanoBanana',
      '#Tutorial',
      '#Workshop',
      '#Learning',
      '#TechCommunity',
      '#KnowledgeSharing'
    ]
  },
  {
    id: 'nptel-python-data-science',
    title: 'Python for Data Science',
    category: 'certificate',
    categoryBadge: 'CERTIFICATION',
    cornerBadge: 'NPTEL ONLINE CERTIFICATION',
    date: 'Jan–Feb 2026',
    dateFormatted: 'Jan–Feb 2026 · 4 Week Course',
    organization: 'NPTEL Online Certification · IIT Madras · SWAYAM',
    association: 'Ministry of Education (Govt. of India) & IIT Madras',
    issuedTo: 'Mohit Yogeshkumar Mundke',
    image: '/images/nptel-python-data-science.jpg',
    imageAlt: 'Python for Data Science NPTEL Online Certification — IIT Madras — Mohit Yogeshkumar Mundke',
    downloadName: 'Mohit-Mundke-NPTEL-Python-Data-Science.jpg',
    badgeStyle: 'bg-gradient-to-r from-rose-600/20 via-red-500/20 to-amber-500/20 border-rose-500/40 text-rose-300',
    pulseColor: 'bg-rose-400',
    cardBg: 'from-rose-950/15 via-[#090614] to-[#030610]',
    cardBorder: 'hover:border-rose-500/40',
    topGlow: 'bg-rose-600/10',
    bottomGlow: 'bg-amber-600/10',
    captionBg: 'bg-rose-950/20 border-rose-500/20',
    captionLabel: 'text-rose-400',
    tagColor: 'text-amber-300 hover:border-rose-500/40',
    isFeatured: false,
    scoreDetails: {
      consolidated: '52%',
      assignments: '21.67 / 25',
      proctoredExam: '30 / 75',
      duration: 'Jan–Feb 2026 (4 Week Course)'
    },
    caption: `I am pleased to share that I have successfully completed the NPTEL Online Certification in Python for Data Science 🎓 offered by IIT Madras.

This course has strengthened my understanding of Python fundamentals, data handling, and key data science concepts 📊. It has been a valuable learning experience that contributed to building a strong foundation in this domain.

I sincerely thank the instructors and NPTEL for this opportunity 🙏.

I look forward to applying these skills in real-world projects and continuing my learning journey in data science 🚀.`,
    tags: [
      '#NPTEL',
      '#Python',
      '#DataScience',
      '#IITMadras',
      '#SkillDevelopment',
      '#ContinuousLearning'
    ]
  }
];

/* ─── BRAND LOGO COMPONENT ─── */
function Monogram({ size = 38, className = "" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-xl overflow-hidden border border-white/20 bg-gradient-to-br from-violet-950/80 to-slate-950 shadow-lg shadow-violet-500/15 flex-shrink-0 ${className}`}
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
    >
      {!failed ? (
        <img
          src={getImageSrc('/images/mohit-mundke-logo.png')}
          alt="Mohit Mundke Logo"
          className="w-full h-full object-cover"
          onError={(e) => {
            if (e.currentTarget.src.indexOf('mm-logo.png') === -1) {
              e.currentTarget.src = '/images/mm-logo.png';
            } else {
              setFailed(true);
            }
          }}
        />
      ) : (
        <span className="font-heading font-black text-white tracking-tighter" style={{ fontSize: `${Math.round(size * 0.38)}px` }}>
          MM
        </span>
      )}
      <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border border-[#030508]" />
    </div>
  );
}

/* ─── CANVAS PARTICLE BACKGROUND (OPTIMIZED 120FPS) ─── */
function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    const particleCount = Math.min(35, Math.floor(width / 40));
    const particles = [];
    const colors = ['139, 92, 246', '59, 130, 246', '6, 182, 212', '168, 85, 247'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.35 + 0.1,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-80" />;
}

/* ─── PRELOADER COMPONENT ─── */
function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 220);
          return 100;
        }
        return prev + 20;
      });
    }, 45);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030508] text-white">
      <Monogram size={56} className="mb-4 animate-pulse" />
      <span className="font-heading font-extrabold text-lg gradient-text tracking-wider mb-2">
        MOHIT MUNDKE
      </span>
      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-400 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="font-mono text-[11px] text-slate-500">{progress}%</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE 1: HOME (LANDING PAGE)
   ═══════════════════════════════════════════════════════════════════ */
function HomePage({ navigateTo }) {
  return (
    <div className="page-container space-y-24">
      {/* ─── 1. HERO SECTION ─── */}
      <section className="min-h-[85vh] flex items-center justify-center px-4 pt-6 pb-12">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-violet-500/30 text-xs font-mono text-violet-300 shadow-lg shadow-violet-500/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>AVAILABLE FOR OPPORTUNITIES</span>
            </div>

            <div className="space-y-2">
              <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1]">
                MOHIT <br className="hidden sm:inline" />
                <span className="gradient-text">MUNDKE</span>
              </h1>
              <p className="font-heading font-semibold text-base sm:text-xl text-slate-300 tracking-wide">
                AI &amp; Data Science Student · Google Student Ambassador · Aspiring Software Engineer
              </p>
            </div>

            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              "Exploring technology, crafting software, and empowering student communities through modern AI &amp; engineering."
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => navigateTo('/projects')}
                className="cta-primary px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold shadow-xl shadow-violet-600/30"
              >
                Explore My Work ✦
              </button>
              <button
                onClick={() => navigateTo('/contact')}
                className="cta-secondary px-7 py-3.5 rounded-xl text-xs sm:text-sm font-semibold"
              >
                Let&apos;s Connect →
              </button>
              <button
                onClick={() => navigateTo('/about')}
                className="px-5 py-3.5 rounded-xl text-xs font-mono text-slate-400 hover:text-violet-400 hover:bg-white/5 transition-all"
              >
                Learn More About Me 👤
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-slate-400 text-xs font-mono">
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">LinkedIn ↗</a>
              <span className="text-slate-600">/</span>
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">GitHub 🐙</a>
              <span className="text-slate-600">/</span>
              <a href={personalInfo.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline transition-colors">WhatsApp 💬</a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="hero-cinematic-stage">
              <div className="hero-ambient-glow" />
              <div className="hero-orbit hero-orbit-3" />
              <div className="hero-orbit hero-orbit-2">
                <span className="orbit-node node-1" />
                <span className="orbit-node node-2" />
              </div>
              <div className="hero-orbit hero-orbit-1">
                <span className="orbit-node node-1" />
                <span className="orbit-node node-2" />
              </div>

              <div className="hero-arch-layer hero-arch-glow-back" />
              <div className="hero-arch-layer hero-arch-outline-back" />

              <div className="hero-arch-frame">
                <div className="hero-arch-inner">
                  <img
                    src={getImageSrc('/images/mohit-profile.png')}
                    alt="Mohit Mundke — AI & Data Science Student & Google Student Ambassador"
                    className="hero-portrait-img"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src.indexOf('mohit-profile.jpg') === -1) {
                        target.src = getImageSrc('/images/mohit-profile.jpg');
                      }
                    }}
                  />
                  <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#060914] via-[#060914]/70 to-transparent pointer-events-none" />
                </div>
              </div>

              <div className="hero-float-badge hero-badge-tr">
                <span className="text-xl sm:text-2xl filter drop-shadow">🏆</span>
                <div className="flex flex-col text-left">
                  <span className="font-heading font-extrabold text-xs sm:text-sm text-white tracking-tight">Google Ambassador</span>
                  <span className="font-mono text-[10px] sm:text-xs text-amber-300 font-bold tracking-wide">GID: 5314 · Bronze</span>
                </div>
              </div>

              <div className="hero-float-badge hero-badge-bl">
                <span className="text-xl sm:text-2xl filter drop-shadow">🚀</span>
                <div className="flex flex-col text-left">
                  <span className="font-heading font-extrabold text-xs sm:text-sm text-white tracking-tight">AI &amp; Data Science</span>
                  <span className="font-mono text-[10px] sm:text-xs text-violet-300 font-bold tracking-wide">DYPCOEI Pune</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 2. JOURNEY IN NUMBERS (COMPACT PREVIEW) ─── */}
      <section className="px-4 max-w-6xl mx-auto">
        <div className="text-center mb-8 reveal">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-violet-500/60" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400 font-semibold">
              — ACHIEVEMENTS &amp; MILESTONES —
            </span>
            <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-violet-500/60" />
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight mt-2">
            My Journey in <span className="gradient-text-pink">Numbers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {statsData.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal-up delay-${(i + 1) * 100} glass-card p-6 rounded-3xl relative overflow-hidden group flex flex-col justify-between items-center text-center`}
            >
              <div className="corner-accent corner-tl" />
              <div className="corner-accent corner-tr" />
              <div className="corner-accent corner-bl" />
              <div className="corner-accent corner-br" />

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600/20 via-blue-600/15 to-transparent border border-white/10 flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-all duration-300">
                {stat.icon}
              </div>
              <span className="font-space font-extrabold text-3xl text-white tracking-tight my-0.5">
                {stat.value}
              </span>
              <h4 className="font-heading font-bold text-xs text-white">{stat.label}</h4>
              <p className="font-mono text-[11px] text-slate-400">{stat.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-8 max-w-xl mx-auto opacity-75 text-center">
          <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <p className="font-space italic text-xs text-slate-400 whitespace-nowrap">
            Constantly growing, always learning, forever building.
          </p>
          <span className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-white/15 to-transparent" />
        </div>
      </section>

      {/* ─── 3. FEATURED PREVIEWS GRID ─── */}
      <section className="px-4 max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-violet-400 font-semibold block mb-1">EXPLORE THE PLATFORM</span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
            Discover <span className="gradient-text">My Work &amp; Story</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col justify-between group hover:border-violet-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">🧠</span>
                <span className="font-mono text-xs text-violet-400">ABOUT ME</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">
                Engineering student bridging software &amp; AI
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                Discover my authentic journey from foundational schooling to Computer Science Engineering (AI &amp; Data Science) at DYPCOEI Pune.
              </p>
            </div>
            <button
              onClick={() => navigateTo('/about')}
              className="text-xs font-bold text-violet-300 hover:text-white flex items-center gap-1.5 group-hover:translate-x-1 transition-all"
            >
              <span>Learn More About Me</span>
              <span>→</span>
            </button>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col justify-between group hover:border-blue-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">🛠️</span>
                <span className="font-mono text-xs text-blue-400">TECHNICAL CAPABILITIES</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">
                Modern full-stack &amp; AI technologies
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                Interactive skill matrix across Python, React, Tailwind CSS, Google Gemini AI, SQL, and Developer Tools.
              </p>
            </div>
            <button
              onClick={() => navigateTo('/skills')}
              className="text-xs font-bold text-blue-300 hover:text-white flex items-center gap-1.5 group-hover:translate-x-1 transition-all"
            >
              <span>Explore All Skills &amp; Tools</span>
              <span>→</span>
            </button>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col justify-between group hover:border-emerald-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">💻</span>
                <span className="font-mono text-xs text-emerald-400">FEATURED WORK</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">
                Wellness Healthcare, soilOsync &amp; GenAI Platforms
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                Real software built to solve human problems with digital wellness healthcare, precision agriculture, clean architecture, and performance.
              </p>
            </div>
            <button
              onClick={() => navigateTo('/projects')}
              className="text-xs font-bold text-emerald-300 hover:text-white flex items-center gap-1.5 group-hover:translate-x-1 transition-all"
            >
              <span>View All Featured Projects</span>
              <span>→</span>
            </button>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col justify-between group hover:border-amber-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">🏆</span>
                <span className="font-mono text-xs text-amber-400">LEADERSHIP &amp; EXPERIENCE</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">
                Google Ambassador &amp; Full Stack Intern
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                Leading campus tech initiatives, driving Gemini AI sessions, and gaining applied engineering experience at Thiranex.
              </p>
            </div>
            <button
              onClick={() => navigateTo('/experience')}
              className="text-xs font-bold text-amber-300 hover:text-white flex items-center gap-1.5 group-hover:translate-x-1 transition-all"
            >
              <span>View Full Experience &amp; Timeline</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ─── 4. BOTTOM CONNECT BANNER ─── */}
      <section className="px-4 max-w-5xl mx-auto pb-12">
        <div className="glass-card p-8 sm:p-12 rounded-3xl border-violet-500/40 text-center relative overflow-hidden bg-gradient-to-b from-violet-950/30 via-[#070b16] to-[#04060d]">
          <span className="font-mono text-xs uppercase tracking-widest text-violet-400 font-bold block mb-2">LET&apos;S CONNECT</span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white mb-4 tracking-tight">
            Ready to build something <span className="gradient-text">meaningful?</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            "I'm always excited to connect with people, explore new opportunities, collaborate on ideas, and learn from ambitious minds."
          </p>
          <button
            onClick={() => navigateTo('/contact')}
            className="cta-primary px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-xl shadow-violet-600/35"
          >
            Get In Touch →
          </button>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE 2: ABOUT (DEDICATED ABOUT PAGE)
   ═══════════════════════════════════════════════════════════════════ */
function AboutPage({ navigateTo }) {
  return (
    <div className="page-container max-w-6xl mx-auto px-4 py-10 space-y-16">
      <div className="text-center reveal">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-violet-500/60" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-violet-400 font-semibold">
            — WHO I AM —
          </span>
          <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-violet-500/60" />
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight mt-2">
          About <span className="gradient-text">Me</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-3 leading-relaxed">
          Engineering student bridging software development, AI fundamentals, and student community leadership.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-7 glass-card p-8 rounded-3xl flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs text-violet-400 uppercase tracking-widest font-semibold block mb-2">
              BACKGROUND &amp; ASPIRATIONS
            </span>
            <h3 className="font-heading font-extrabold text-2xl text-white mb-4">
              Building software with intent, empathy, and AI curiosity.
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              I am a B.Tech Computer Science Engineering student specializing in <strong>Artificial Intelligence &amp; Data Science</strong> at Dr. D. Y. Patil College of Engineering and Innovation, Varale, Pune (2025–2029).
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              My engineering philosophy revolves around solving human friction. Whether building wellness utilities like <em>FocusNext</em>, leading AI sessions as a <em>Google Student Ambassador</em>, or exploring full-stack web platforms, I strive to write code that makes a tangible difference.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-white/10 text-xs font-mono">
            <div>
              <p className="text-slate-500 uppercase text-[10px]">CURRENT FOCUS</p>
              <p className="text-white font-semibold mt-0.5">AI, Full-Stack &amp; Data</p>
            </div>
            <div>
              <p className="text-slate-500 uppercase text-[10px]">CAMPUS</p>
              <p className="text-white font-semibold mt-0.5">DYPCOEI, Pune</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 glass-card p-8 rounded-3xl flex flex-col justify-between bg-gradient-to-br from-violet-950/25 via-[#070b18] to-[#04060d]">
          <div>
            <span className="font-mono text-xs text-blue-400 uppercase tracking-widest font-semibold block mb-2">
              SPECIALIZATIONS
            </span>
            <h3 className="font-heading font-extrabold text-xl text-white mb-4">
              Key Focus Domains
            </h3>
            <ul className="space-y-3.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-violet-400 text-sm mt-0.5 font-bold">✦</span>
                <span><strong>AI &amp; Data Science:</strong> Practical generative AI workflows, predictive models, data analysis with Python.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-blue-400 text-sm mt-0.5 font-bold">✦</span>
                <span><strong>Modern Web Development:</strong> Responsive client architectures using React, Tailwind CSS, and asynchronous APIs.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 text-sm mt-0.5 font-bold">✦</span>
                <span><strong>Tech Community Leadership:</strong> Organizing developer sessions and empowering student peers.</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10">
            <span className="font-mono text-[11px] text-emerald-400">
              ● Active GSA Ambassador (GID: 5314)
            </span>
          </div>
        </div>

        <div className="md:col-span-12 glass-card p-8 rounded-3xl">
          <span className="font-mono text-xs text-purple-400 uppercase tracking-widest font-semibold block mb-3 text-center md:text-left">
            ENGINEERING PHILOSOPHY
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreBeliefs.map((b) => (
              <div key={b.title} className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                <span className="text-3xl block">{b.icon}</span>
                <h4 className="font-heading font-bold text-sm text-white">{b.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-8 pt-4">
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-violet-400 font-semibold block mb-1">PERSONAL TRAITS</span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            More Than <span className="gradient-text">Just The Code</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {beyondTechData.map((item) => (
            <div key={item.title} className="glass-card p-6 rounded-3xl text-center flex flex-col justify-between items-center">
              <span className="text-4xl mb-3">{item.icon}</span>
              <div>
                <h4 className="font-heading font-bold text-sm text-white mb-2">{item.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-8 text-center flex flex-wrap justify-center gap-4">
        <button
          onClick={() => navigateTo('/skills')}
          className="cta-primary px-7 py-3 rounded-xl text-xs font-bold"
        >
          Explore My Skills 🛠️ →
        </button>
        <button
          onClick={() => navigateTo('/projects')}
          className="cta-secondary px-7 py-3 rounded-xl text-xs font-semibold"
        >
          View My Projects 💻 →
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE 3: SKILLS (DEDICATED SKILLS PAGE)
   ═══════════════════════════════════════════════════════════════════ */
function SkillsPage({ navigateTo }) {
  const [activeTab, setActiveTab] = useState('all');
  const [search, setSearch] = useState('');

  const filteredCategories = skillCategories
    .filter((cat) => activeTab === 'all' || cat.id === activeTab)
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(search.toLowerCase()) ||
          s.tag.toLowerCase().includes(search.toLowerCase())
      )
    }))
    .filter((cat) => cat.skills.length > 0);

  return (
    <div className="page-container max-w-6xl mx-auto px-4 py-10 space-y-12">
      <div className="text-center reveal">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-violet-500/60" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-violet-400 font-semibold">
            — TECHNICAL CAPABILITIES —
          </span>
          <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-violet-500/60" />
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight mt-2">
          Skills &amp; <span className="gradient-text">Competencies</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-3 leading-relaxed">
          A categorized exploration of my programming languages, frameworks, AI tools, and professional leadership skills.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 glass-card p-4 rounded-2xl border border-white/10">
        <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs font-mono">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'all'
                ? 'bg-violet-600 text-white font-bold shadow-md shadow-violet-600/30'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            All Categories
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === cat.id
                  ? 'bg-violet-600 text-white font-bold shadow-md shadow-violet-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="w-full md:w-64 relative">
          <input
            type="text"
            placeholder="Search skill (e.g. Python, React)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 font-mono"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-2 text-slate-400 hover:text-white text-xs"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div className="space-y-10">
        {filteredCategories.map((cat) => (
          <div key={cat.id} className="glass-card p-8 rounded-3xl border border-white/10 space-y-6">
            <div>
              <h3 className="font-heading font-extrabold text-xl text-white">{cat.title}</h3>
              <p className="text-xs text-slate-400 mt-1">{cat.desc}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cat.skills.map((s) => (
                <div
                  key={s.name}
                  className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-violet-500/40 hover:bg-white/10 transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform">{s.icon}</span>
                    <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded-full bg-violet-600/15 border border-violet-500/30 text-violet-300 font-semibold">
                      {s.level}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white group-hover:text-violet-300 transition-colors">
                      {s.name}
                    </h4>
                    <p className="font-mono text-[11px] text-slate-400 mt-1">
                      {s.tag}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-6">
        <button
          onClick={() => navigateTo('/projects')}
          className="cta-primary px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold shadow-xl shadow-violet-600/30"
        >
          See Projects Built With These Skills 💻 →
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE 4: EXPERIENCE (DEDICATED EXPERIENCE PAGE)
   ═══════════════════════════════════════════════════════════════════ */
function ExperiencePage({ navigateTo }) {
  return (
    <div className="page-container max-w-6xl mx-auto px-4 py-10 space-y-16">
      <div className="text-center reveal">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-violet-500/60" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-violet-400 font-semibold">
            — CAREER PATHWAY —
          </span>
          <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-violet-500/60" />
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight mt-2">
          Professional <span className="gradient-text">Experience</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-3 leading-relaxed">
          Leadership milestones, applied software engineering internships, and tech community initiatives.
        </p>
      </div>

      <div className="glass-card p-8 sm:p-10 rounded-3xl border-violet-500/30 bg-gradient-to-br from-violet-950/30 via-[#070b16] to-[#04060d]">
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold">FEATURED LEADERSHIP STORY</span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-1 mb-4">
            Empowering student developers as a <span className="gradient-text">Google Ambassador</span>.
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
            Stepping up as a <strong>Google Student Ambassador (GID: 5314 · Bronze Badge)</strong> transformed my perspective on technology. It taught me that impactful engineering is not only about writing clean code — it is about connecting with people, communicating possibilities, and empowering others to build.
          </p>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
            Through campus initiatives like <em>Fund My Crazy</em> and <em>Career Glow-up Night</em>, I organized sessions where students explored Google Gemini, discussed real project ideas, and learned how to leverage modern AI developer tools.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-amber-400 font-bold">GID: 5314</p>
              <p className="text-slate-400 text-[11px] mt-0.5">Bronze Badge Ambassador</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-violet-400 font-bold">Key Initiatives</p>
              <p className="text-slate-400 text-[11px] mt-0.5">Fund My Crazy · Glow-up Night</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-cyan-400 font-bold">Core Focus</p>
              <p className="text-slate-400 text-[11px] mt-0.5">Gemini AI &amp; Developer Tools</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {experienceData.map((exp) => (
          <div
            key={exp.role}
            className="glass-card p-8 rounded-3xl border border-white/10 hover:border-violet-500/30 transition-all flex flex-col md:flex-row gap-6 items-start"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600/20 via-blue-600/15 to-transparent border border-white/10 flex items-center justify-center text-2xl shrink-0">
              {exp.icon}
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white">{exp.role}</h3>
                  <p className="text-sm font-semibold text-violet-400 mt-0.5">{exp.company}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-violet-600/15 border border-violet-500/30 text-violet-300 font-semibold">
                    {exp.badge}
                  </span>
                  <span className="font-mono text-[11px] text-slate-500 mt-1">{exp.period}</span>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-1.5 text-xs text-slate-400">
                {exp.responsibilities.map((r, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-violet-400 font-bold">▸</span>
                    <span>{r}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-6">
        <button
          onClick={() => navigateTo('/contact')}
          className="cta-primary px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold shadow-xl shadow-violet-600/30"
        >
          Discuss Engineering Roles &amp; Opportunities →
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE 5: PROJECTS (DEDICATED PROJECTS PAGE)
   ═══════════════════════════════════════════════════════════════════ */
function ProjectsPage({ navigateTo }) {
  const [projectIndex, setProjectIndex] = useState(0);
  const [projectTab, setProjectTab] = useState('overview');

  const currentProject = projectsData[projectIndex] || projectsData[0];

  const handlePrev = () => {
    setProjectIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };
  const handleNext = () => {
    setProjectIndex((prev) => (prev + 1) % projectsData.length);
  };

  return (
    <div className="page-container max-w-6xl mx-auto px-4 py-10 space-y-16">
      <div className="text-center reveal">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-violet-500/60" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-violet-400 font-semibold">
            — FEATURED WORK —
          </span>
          <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-violet-500/60" />
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight mt-2">
          Projects I&apos;ve <span className="gradient-text-pink">Built</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-3 leading-relaxed">
          Real projects designed to solve meaningful problems through technology, AI, and user-centric thinking.
        </p>
      </div>

      <div className="glass-card rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#060914]/95">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[540px]">
          
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative bg-gradient-to-br from-[#070b18] via-[#050814] to-[#03050c] border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden group">
            <div className="corner-accent corner-tl" />
            <div className="corner-accent corner-tr" />
            <div className="corner-accent corner-bl" />
            <div className="corner-accent corner-br" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between text-xs font-mono relative z-10">
              <span className="px-3 py-1 rounded-full bg-violet-600/15 border border-violet-500/30 text-violet-300 font-semibold tracking-wide">
                {currentProject.badge1}
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[11px] text-emerald-400 font-bold tracking-wider uppercase">FEATURED WORK</span>
              </div>
            </div>

            <div className="my-auto py-8 text-center relative z-10">
              <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-violet-600/30 to-blue-600/30 border border-violet-500/40 flex items-center justify-center text-5xl mb-5 shadow-2xl shadow-violet-600/30 group-hover:scale-105 transition-transform duration-500">
                {currentProject.visualIcon || '💻'}
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                {currentProject.name}
              </h3>
              <p className="font-space text-xs sm:text-sm text-slate-300 font-medium italic mt-2 max-w-md mx-auto">
                "{currentProject.tagline}"
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-violet-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="font-mono text-[11px] text-slate-400">
                {currentProject.visualHighlight}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-[#080d1e]/90">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <span className="font-space font-extrabold text-2xl sm:text-3xl gradient-text-pink tracking-tight">
                  0{projectIndex + 1} <span className="text-slate-600 text-lg font-normal">/ 0{projectsData.length}</span>
                </span>
                <span className="font-mono text-xs text-amber-300 px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20 font-bold">
                  {currentProject.badge2}
                </span>
              </div>

              <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-white mb-3">
                {currentProject.name}
              </h4>

              <div className="flex gap-3 border-b border-white/10 pb-2 mb-4 text-xs font-mono">
                <button
                  onClick={() => setProjectTab('overview')}
                  className={`pb-1 transition-all ${
                    projectTab === 'overview'
                      ? 'text-white font-bold border-b-2 border-violet-500'
                      : 'text-slate-400 hover:text-white border-b-2 border-transparent'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setProjectTab('problem_solution')}
                  className={`pb-1 transition-all ${
                    projectTab === 'problem_solution'
                      ? 'text-white font-bold border-b-2 border-violet-500'
                      : 'text-slate-400 hover:text-white border-b-2 border-transparent'
                  }`}
                >
                  Problem &amp; Solution
                </button>
                <button
                  onClick={() => setProjectTab('features')}
                  className={`pb-1 transition-all ${
                    projectTab === 'features'
                      ? 'text-white font-bold border-b-2 border-violet-500'
                      : 'text-slate-400 hover:text-white border-b-2 border-transparent'
                  }`}
                >
                  Features
                </button>
              </div>

              {projectTab === 'overview' && (
                <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 animate-in fade-in duration-300">
                  <p>{currentProject.description}</p>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1 text-xs">
                    <p><strong className="text-violet-400 font-mono">🎯 Purpose:</strong> {currentProject.purpose}</p>
                    <p><strong className="text-blue-400 font-mono">👥 Users:</strong> {currentProject.targetUsers}</p>
                  </div>
                </div>
              )}

              {projectTab === 'problem_solution' && (
                <div className="space-y-3 text-xs sm:text-sm mb-6 animate-in fade-in duration-300">
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-slate-300">
                    <strong className="text-red-400 block mb-1 text-xs font-mono uppercase">Problem:</strong>
                    <p className="text-xs leading-relaxed">{currentProject.problem}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-slate-300">
                    <strong className="text-emerald-400 block mb-1 text-xs font-mono uppercase">Solution:</strong>
                    <p className="text-xs leading-relaxed">{currentProject.solution}</p>
                  </div>
                </div>
              )}

              {projectTab === 'features' && (
                <div className="space-y-2 text-xs text-slate-300 mb-6 animate-in fade-in duration-300">
                  {currentProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-violet-400 font-bold mt-0.5">✦</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-primary px-5 py-2.5 rounded-xl text-xs font-bold shadow-lg shadow-violet-600/30"
                >
                  View Project ↗
                </a>
                <a
                  href={currentProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-secondary px-5 py-2.5 rounded-xl text-xs font-semibold"
                >
                  GitHub Repository 🐙 ↗
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full glass-card border border-white/15 flex items-center justify-center text-white hover:border-violet-500 hover:bg-violet-600/20 transition-all text-sm"
                title="Previous Project"
              >
                ←
              </button>

              <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-violet-600 via-pink-500 to-blue-500 transition-all duration-500 ease-out"
                  style={{
                    width: `${((projectIndex + 1) / projectsData.length) * 100}%`
                  }}
                />
              </div>

              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full glass-card border border-white/15 flex items-center justify-center text-white hover:border-violet-500 hover:bg-violet-600/20 transition-all text-sm"
                title="Next Project"
              >
                →
              </button>
            </div>
          </div>

        </div>
      </div>

      <div className="space-y-6 pt-4">
        <h3 className="font-heading font-bold text-xl text-white">All Project Case Studies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((p) => (
            <div key={p.id} className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">{p.visualIcon}</span>
                <span className="font-mono text-xs text-violet-400 font-semibold">{p.badge1}</span>
              </div>
              <h4 className="font-heading font-bold text-lg text-white">{p.name}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {p.technologies.map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE 6: EDUCATION — PREMIUM INTERACTIVE VERTICAL TIMELINE (120FPS GPU)
   ═══════════════════════════════════════════════════════════════════ */
function EducationPage({ navigateTo }) {
  const containerRef = useRef(null);
  const spineRef = useRef(null);
  const activeLineRef = useRef(null);
  const glowTipRef = useRef(null);

  // Cached layout metrics between first and last node centers
  const metricsRef = useRef({
    startY: 54,
    totalDistance: 600,
    firstNodeDocY: 0,
    lastNodeDocY: 0,
    nodeFractions: [0, 0.33, 0.66, 1.0]
  });

  useEffect(() => {
    let ticking = false;

    // Measure exact center positions of first and last nodes
    const measurePositions = () => {
      if (!containerRef.current) return;
      const milestoneEls = containerRef.current.querySelectorAll('.education-milestone-item');
      if (!milestoneEls || milestoneEls.length === 0) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTopDoc = containerRect.top + window.scrollY;

      const firstEl = milestoneEls[0];
      const lastEl = milestoneEls[milestoneEls.length - 1];

      const firstCircle = firstEl.querySelector('.timeline-node-circle');
      const lastCircle = lastEl.querySelector('.timeline-node-circle');

      const firstCircleRect = firstCircle ? firstCircle.getBoundingClientRect() : { top: firstEl.getBoundingClientRect().top + 32, height: 44 };
      const lastCircleRect = lastCircle ? lastCircle.getBoundingClientRect() : { top: lastEl.getBoundingClientRect().top + 32, height: 44 };

      const firstNodeDocY = firstCircleRect.top + window.scrollY + (firstCircleRect.height / 2);
      const lastNodeDocY = lastCircleRect.top + window.scrollY + (lastCircleRect.height / 2);

      const startY = firstNodeDocY - containerTopDoc;
      const endY = lastNodeDocY - containerTopDoc;
      const totalDistance = Math.max(1, endY - startY);

      const nodeFractions = Array.from(milestoneEls).map((el) => {
        const circle = el.querySelector('.timeline-node-circle');
        const cRect = circle ? circle.getBoundingClientRect() : { top: el.getBoundingClientRect().top + 32, height: 44 };
        const docY = cRect.top + window.scrollY + (cRect.height / 2);
        return Math.min(1, Math.max(0, (docY - firstNodeDocY) / totalDistance));
      });

      metricsRef.current = {
        startY,
        totalDistance,
        firstNodeDocY,
        lastNodeDocY,
        nodeFractions
      };

      if (spineRef.current) {
        spineRef.current.style.top = `${startY}px`;
        spineRef.current.style.height = `${totalDistance}px`;
      }

      updateTimeline();
    };

    // Real-time zero-lag GPU progress update (Strict Point 0 -> Point 100%)
    const updateTimeline = () => {
      const { totalDistance, firstNodeDocY, lastNodeDocY, nodeFractions } = metricsRef.current;
      if (!totalDistance || totalDistance <= 1 || !containerRef.current) {
        ticking = false;
        return;
      }

      // Activation point when scrolling: reaches the center line of viewport
      const triggerY = window.scrollY + (window.innerHeight * 0.5);

      // Progress starts strictly at 0% at first node and reaches 100% at last node
      const rawProgress = (triggerY - firstNodeDocY) / (lastNodeDocY - firstNodeDocY);
      const progress = Math.min(1, Math.max(0, rawProgress));

      // Direct GPU transform update on DOM elements (zero lag, zero layout reflow!)
      if (activeLineRef.current) {
        activeLineRef.current.style.transform = `scaleY(${progress})`;
      }
      if (glowTipRef.current) {
        const tipY = progress * totalDistance;
        glowTipRef.current.style.transform = `translate3d(-50%, ${tipY}px, 0)`;
        glowTipRef.current.style.opacity = progress > 0 ? '1' : '0';
      }

      // Activate nodes & cards strictly when line reaches their real position
      const circles = containerRef.current.querySelectorAll('.timeline-node-circle');
      const cards = containerRef.current.querySelectorAll('.timeline-card-glass');
      for (let i = 0; i < circles.length; i++) {
        const isActive = progress >= (nodeFractions[i] || 0);
        circles[i].classList.toggle('active', isActive);
        if (cards[i]) {
          cards[i].classList.toggle('active', isActive);
        }
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateTimeline);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', measurePositions, { passive: true });

    // Initial measurement
    const timer = setTimeout(measurePositions, 60);

    // One-time card reveal observer (GPU-accelerated, unobserves once visible)
    let cardObserver;
    if ('IntersectionObserver' in window && containerRef.current) {
      cardObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '40px 0px 40px 0px' }
      );
      const wrappers = containerRef.current.querySelectorAll('.timeline-card-wrapper');
      wrappers.forEach((w) => cardObserver.observe(w));
    }

    return () => {
      clearTimeout(timer);
      if (cardObserver) cardObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', measurePositions);
    };
  }, []);

  return (
    <div className="page-container max-w-6xl mx-auto px-4 py-10 space-y-20">
      
      {/* ─── 1. PAGE HEADER ─── */}
      <div className="text-center reveal">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-violet-500/60" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-violet-400 font-semibold">
            — ACADEMIC JOURNEY —
          </span>
          <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-violet-500/60" />
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight mt-2">
          My Education <span className="gradient-text">Timeline</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-3 leading-relaxed">
          A journey of learning, growth, curiosity, and continuous improvement.
        </p>
      </div>

      {/* ─── 2. MAIN VERTICAL TIMELINE CONTAINER ─── */}
      <div ref={containerRef} className="relative max-w-5xl mx-auto py-8">
        
        {/* CENTER TIMELINE SPINE (Positioned strictly between First Node & Last Node) */}
        <div
          ref={spineRef}
          className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 pointer-events-none w-[3px]"
          style={{
            top: '32px',
            bottom: '32px',
            minHeight: '200px',
          }}
        >
          {/* Subtle Base Line */}
          <div className="timeline-track-base" style={{ top: 0, bottom: 0, height: '100%' }} />
          
          {/* Progressive Scroll-Driven Active Line (Starts at Point 0 at Node 1) */}
          <div
            ref={activeLineRef}
            className="timeline-track-active"
            style={{ transform: 'scaleY(0)' }}
          />

          {/* Glowing Animated Tip (Begins at Node 1 center) */}
          <div
            ref={glowTipRef}
            className="timeline-active-glow-tip"
            style={{ opacity: 0 }}
          />
        </div>

        {/* MILESTONE ITEMS CONTAINER */}
        <div className="space-y-16 md:space-y-24">
          {educationMilestones.map((edu, idx) => {
            const isLeft = edu.position === 'left';

            return (
              <div
                key={edu.id}
                className="education-milestone-item relative flex flex-col md:flex-row items-start group"
              >
                
                {/* ─── GLOWING MILESTONE NODE ─── */}
                <div
                  className="timeline-node-wrap left-6 md:left-1/2"
                >
                  <div
                    className="timeline-node-circle"
                    title={`${edu.num}: ${edu.institution}`}
                  >
                    <span>{edu.icon}</span>
                    <div className="timeline-node-pulse-ring" />
                  </div>
                </div>

                {/* ─── DESKTOP CONNECTOR ARM ─── */}
                <div
                  className={`hidden md:block absolute top-10 h-[2px] pointer-events-none transition-all duration-300 ${
                    isLeft
                      ? 'right-1/2 mr-[22px] w-8 lg:w-12 bg-gradient-to-l from-violet-500/80 to-transparent'
                      : 'left-1/2 ml-[22px] w-8 lg:w-12 bg-gradient-to-r from-cyan-500/80 to-transparent'
                  }`}
                />

                {/* ─── EDUCATION CARD (One-time Hardware Accelerated Reveal) ─── */}
                <div
                  className={`w-full pl-16 md:pl-0 md:w-[calc(50%-48px)] timeline-card-wrapper ${
                    isLeft ? 'md:mr-auto text-left timeline-card-left' : 'md:ml-auto text-left timeline-card-right'
                  }`}
                >
                  <div
                    className={`timeline-card-glass p-6 sm:p-8 rounded-3xl relative overflow-hidden bg-gradient-to-br ${edu.accentGradient} ${edu.borderGlow}`}
                  >
                    
                    {/* Corner Accent Line */}
                    <div className="corner-accent corner-tl" />
                    <div className="corner-accent corner-tr" />
                    <div className="corner-accent corner-bl" />
                    <div className="corner-accent corner-br" />

                    {/* Top Metadata Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-violet-400 tracking-wider">
                          MILESTONE {edu.num}
                        </span>
                        <span className="text-slate-600">/</span>
                        <span className="font-mono text-[11px] uppercase text-slate-400 font-medium">
                          {edu.label}
                        </span>
                      </div>

                      {/* Status / Highlight Badges */}
                      {edu.isCurrent ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          {edu.highlight}
                        </span>
                      ) : edu.highlight ? (
                        <span className="font-mono text-xs px-3 py-1 rounded-full bg-violet-600/20 border border-violet-500/30 text-violet-300 font-bold">
                          {edu.highlight}
                        </span>
                      ) : (
                        <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400">
                          {edu.period}
                        </span>
                      )}
                    </div>

                    {/* Institution & Program */}
                    <div className="space-y-1 mb-3">
                      <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-tight group-hover:text-violet-300 transition-colors">
                        {edu.institution}
                      </h3>
                      <p className="font-semibold text-xs sm:text-sm text-blue-400">
                        {edu.program}
                      </p>
                      <p className="font-mono text-[11px] text-slate-500">
                        📅 {edu.period}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-sans">
                      {edu.description}
                    </p>

                    {/* Technology & Academic Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {edu.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] sm:text-[11px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-slate-300 group-hover:border-violet-500/20 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* ─── 3. FINAL EDUCATION PHILOSOPHY SECTION ─── */}
      <div className="max-w-4xl mx-auto pt-8 reveal">
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-violet-500/30 bg-gradient-to-b from-violet-950/25 via-[#070b18] to-[#04060d] text-center relative overflow-hidden shadow-2xl">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Quote */}
          <span className="text-4xl text-violet-400 font-serif block mb-2 leading-none">“</span>
          <blockquote className="font-space text-lg sm:text-2xl text-white font-medium italic max-w-2xl mx-auto leading-relaxed">
            "Education is not the learning of facts, but the training of the mind to think."
          </blockquote>
          <p className="font-mono text-xs uppercase tracking-widest text-violet-400 font-bold mt-3">
            — Albert Einstein
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 my-8 max-w-sm mx-auto">
            <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="text-slate-600 text-xs">✦ ✦ ✦</span>
            <span className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-white/20 to-transparent" />
          </div>

          {/* Learning Philosophy Breakdown */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold block">
              MY LEARNING PHILOSOPHY
            </span>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              I believe real engineering excellence comes from combining structured academic fundamentals with continuous curiosity, hands-on experimentation, building meaningful open-source software, and sharing knowledge openly with the community.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left pt-4 text-xs">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                <p className="font-bold text-violet-400 font-mono mb-1">💡 Curiosity &amp; Foundations</p>
                <p className="text-slate-400 text-[11px] leading-relaxed">Mastering fundamental principles of algorithms, math, and software architecture.</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                <p className="font-bold text-cyan-400 font-mono mb-1">🛠️ Applied Project Building</p>
                <p className="text-slate-400 text-[11px] leading-relaxed">Transforming theoretical concepts into functional tools and AI platforms.</p>
              </div>
            </div>
          </div>

          {/* Navigation CTA */}
          <div className="pt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigateTo('/achievements')}
              className="cta-primary px-7 py-3 rounded-xl text-xs font-bold shadow-lg shadow-violet-600/30"
            >
              Explore Achievements &amp; Certifications 📜 →
            </button>
            <button
              onClick={() => navigateTo('/projects')}
              className="cta-secondary px-7 py-3 rounded-xl text-xs font-semibold"
            >
              View Featured Projects 💻 →
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE 7: ACHIEVEMENTS (DEDICATED ACHIEVEMENTS PAGE)
   ═══════════════════════════════════════════════════════════════════ */
function AchievementsPage({ navigateTo }) {
  return (
    <div className="page-container max-w-6xl mx-auto px-4 py-10 space-y-16">
      <div className="text-center reveal">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-violet-500/60" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-violet-400 font-semibold">
            — CREDENTIALS &amp; HONORS —
          </span>
          <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-violet-500/60" />
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight mt-2">
          Achievements &amp; <span className="gradient-text">Milestones</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-3 leading-relaxed">
          Verified professional certifications, awards, and technical leadership milestones.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="font-heading font-bold text-xl text-white text-center">My Journey in Numbers</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {statsData.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal-up delay-${(i + 1) * 100} glass-card p-6 rounded-3xl relative overflow-hidden group flex flex-col justify-between items-center text-center`}
            >
              <div className="corner-accent corner-tl" />
              <div className="corner-accent corner-tr" />
              <div className="corner-accent corner-bl" />
              <div className="corner-accent corner-br" />

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600/20 via-blue-600/15 to-transparent border border-white/10 flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-all duration-300">
                {stat.icon}
              </div>
              <span className="font-space font-extrabold text-3xl text-white tracking-tight my-0.5">
                {stat.value}
              </span>
              <h4 className="font-heading font-bold text-xs text-white">{stat.label}</h4>
              <p className="font-mono text-[11px] text-slate-400">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="font-heading font-bold text-xl text-white">Verified Certifications &amp; Reserved Slots</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievementsData.map((ach) => (
            <div
              key={ach.title}
              className={`glass-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between transition-all ${
                ach.isPlaceholder ? 'border-dashed border-violet-500/40 bg-violet-950/10 hover:border-violet-400' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-3xl">{ach.icon}</span>
                  <span className={`font-mono text-[10px] uppercase px-2.5 py-0.5 rounded-full border ${
                    ach.isPlaceholder ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300 font-bold' : 'bg-white/5 border-white/10 text-slate-400'
                  }`}>
                    {ach.type}
                  </span>
                </div>
                <h4 className="font-heading font-bold text-base text-white mb-1">{ach.title}</h4>
                <p className="text-xs text-violet-400 font-semibold mb-2">{ach.issuer} · {ach.year}</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {ach.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{ach.isPlaceholder ? 'Status' : 'Credential Level'}</span>
                <span className={ach.isPlaceholder ? 'text-emerald-400 font-bold' : 'text-violet-400'}>{ach.badgeText || 'Verified ✓'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Next Step CTA */}
      <div className="pt-6 flex flex-wrap justify-center gap-4 reveal">
        <button
          onClick={() => navigateTo('/gallery')}
          className="cta-primary px-7 py-3 rounded-xl text-xs font-bold shadow-lg shadow-violet-600/30 flex items-center gap-2"
        >
          <span>Explore Moments &amp; Gallery 🎨</span>
          <span>→</span>
        </button>
        <button
          onClick={() => navigateTo('/contact')}
          className="cta-secondary px-7 py-3 rounded-xl text-xs font-semibold flex items-center gap-2"
        >
          <span>Get in Touch ✉️</span>
          <span>→</span>
        </button>
      </div>

    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE 8: GALLERY (DEDICATED VISUAL TIMELINE & MOMENTS ARCHIVE)
   ═══════════════════════════════════════════════════════════════════ */
function GalleryPage({ navigateTo }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [zoomLevel, setZoomLevel] = useState(1);

  const filteredItems = activeFilter === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === activeFilter);

  // Computed properties for selected lightbox item
  const hasMultiple = Boolean(selectedImage && selectedImage.galleryImages && selectedImage.galleryImages.length > 1);
  const currentImgObj = (hasMultiple && selectedImage.galleryImages[activeImageIndex])
    ? selectedImage.galleryImages[activeImageIndex]
    : (selectedImage ? { url: selectedImage.image, title: selectedImage.title, caption: selectedImage.caption } : {});
  const currentUrl = getImageSrc(currentImgObj.url || (selectedImage ? selectedImage.image : ''));
  const currentTitle = currentImgObj.title || (selectedImage ? selectedImage.title : '');
  const currentItemIndex = selectedImage ? filteredItems.findIndex(i => i.id === selectedImage.id) : -1;

  // Body scroll lock when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  const openLightbox = (item, initialIndex = 0) => {
    setSelectedImage(item);
    setActiveImageIndex(initialIndex);
    setZoomLevel(1);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setActiveImageIndex(0);
    setZoomLevel(1);
  };

  const handleNext = () => {
    if (!selectedImage || filteredItems.length === 0) return;
    if (selectedImage.galleryImages && selectedImage.galleryImages.length > 1) {
      if (activeImageIndex < selectedImage.galleryImages.length - 1) {
        setActiveImageIndex(prev => prev + 1);
      } else {
        const nextItemIndex = (currentItemIndex + 1) % filteredItems.length;
        setSelectedImage(filteredItems[nextItemIndex]);
        setActiveImageIndex(0);
      }
    } else {
      const nextItemIndex = (currentItemIndex + 1) % filteredItems.length;
      setSelectedImage(filteredItems[nextItemIndex]);
      setActiveImageIndex(0);
    }
    setZoomLevel(1);
  };

  const handlePrev = () => {
    if (!selectedImage || filteredItems.length === 0) return;
    if (selectedImage.galleryImages && selectedImage.galleryImages.length > 1) {
      if (activeImageIndex > 0) {
        setActiveImageIndex(prev => prev - 1);
      } else {
        const prevItemIndex = (currentItemIndex - 1 + filteredItems.length) % filteredItems.length;
        const prevItem = filteredItems[prevItemIndex];
        setSelectedImage(prevItem);
        setActiveImageIndex(prevItem.galleryImages && prevItem.galleryImages.length > 1 ? prevItem.galleryImages.length - 1 : 0);
      }
    } else {
      const prevItemIndex = (currentItemIndex - 1 + filteredItems.length) % filteredItems.length;
      const prevItem = filteredItems[prevItemIndex];
      setSelectedImage(prevItem);
      setActiveImageIndex(prevItem.galleryImages && prevItem.galleryImages.length > 1 ? prevItem.galleryImages.length - 1 : 0);
    }
    setZoomLevel(1);
  };

  // Keyboard navigation: ESC to close, Left/Right arrows to cycle
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, activeImageIndex, currentItemIndex, filteredItems]);

  return (
    <>
      <div className="page-container max-w-6xl mx-auto px-4 py-10 space-y-16">
      
      {/* ─── 1. PAGE HERO ─── */}
      <div className="text-center reveal">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-violet-500/60" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-violet-400 font-semibold">
            — MY JOURNEY IN MOMENTS —
          </span>
          <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-violet-500/60" />
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight mt-2">
          Moments &amp; <span className="gradient-text">Gallery</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-3 leading-relaxed">
          A visual collection of competitions, achievements, events, experiences, and memorable moments from my journey.
        </p>
      </div>

      {/* ─── 2. CATEGORY FILTER TABS (PREMIUM CATEGORIZED SYSTEM) ─── */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-2 max-w-4xl mx-auto">
        {galleryCategories.map((cat) => {
          const isActive = activeFilter === cat.id;
          const count = cat.id === 'all'
            ? galleryData.length
            : galleryData.filter(i => i.category === cat.id).length;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-sm ${
                isActive
                  ? 'bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white border border-violet-400/50 shadow-lg shadow-violet-600/30 scale-105'
                  : 'bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:bg-white/[0.08] hover:border-white/20'
              }`}
            >
              <span className="text-sm sm:text-base">{cat.icon}</span>
              <span>{cat.label}</span>
              <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-mono font-bold ${
                isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-slate-400'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ─── 3. FEATURED GALLERY CARDS ─── */}
      <div className="space-y-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`glass-card p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/15 bg-gradient-to-br ${item.cardBg || 'from-violet-950/20 via-[#070b19] to-[#030610]'} shadow-2xl relative overflow-hidden group ${item.cardBorder || 'hover:border-violet-500/40'} transition-all duration-500`}
          >
            {/* Ambient Background Glow */}
            <div className={`absolute top-0 right-0 w-96 h-96 ${item.topGlow || 'bg-violet-600/10'} rounded-full blur-3xl pointer-events-none`} />
            <div className={`absolute bottom-0 left-0 w-80 h-80 ${item.bottomGlow || 'bg-blue-600/10'} rounded-full blur-3xl pointer-events-none`} />

            {/* Corner Decorative Accents */}
            <div className="corner-accent corner-tl" />
            <div className="corner-accent corner-tr" />
            <div className="corner-accent corner-bl" />
            <div className="corner-accent corner-br" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
              
              {/* LEFT COLUMN: CERTIFICATE IMAGE SHOWCASE */}
              <div className="lg:col-span-6 flex flex-col items-center">
                <div
                  onClick={() => openLightbox(item, 0)}
                  className="w-full relative rounded-2xl overflow-hidden border border-white/20 bg-slate-950/80 shadow-2xl shadow-violet-950/50 group/img cursor-pointer transition-all duration-500 hover:scale-[1.015] hover:border-violet-400/60 hover:shadow-violet-500/25 select-none"
                  title="Click to view in high resolution lightbox"
                >
                  <img
                    src={getImageSrc(item.image)}
                    alt={item.imageAlt || item.title}
                    onClick={() => openLightbox(item, 0)}
                    className="w-full h-auto object-contain rounded-2xl transition-all duration-500 cursor-pointer block"
                  />
                  
                  {/* Subtle Hover Action Overlay */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      openLightbox(item, 0);
                    }}
                    className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover/img:opacity-100 transition-all duration-300 flex items-end justify-between p-4 cursor-pointer"
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openLightbox(item, 0);
                      }}
                      className="font-mono text-xs text-white font-semibold flex items-center gap-1.5 bg-violet-600 hover:bg-violet-500 active:scale-95 px-3 py-1.5 rounded-lg backdrop-blur-md shadow-lg shadow-violet-600/50 transition-all cursor-pointer"
                    >
                      <span>🔍</span> Click to Expand
                    </button>
                    <span className="font-mono text-[11px] text-cyan-300 bg-black/60 px-2.5 py-1 rounded-md">
                      {item.galleryImages ? `📸 ${item.galleryImages.length} Highlights` : 'Verified Credential ✓'}
                    </span>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-slate-200 font-bold flex items-center gap-1 pointer-events-none">
                    <span className={`w-1.5 h-1.5 rounded-full ${item.pulseColor || 'bg-violet-400'} animate-pulse`} />
                    {item.cornerBadge || (item.categoryBadge === 'CERTIFICATION' ? 'VERIFIED CERTIFICATION' : 'CERTIFICATE OF PARTICIPATION')}
                  </div>
                </div>

                {/* Multi-Image Supporting Thumbnails Strip */}
                {item.galleryImages && item.galleryImages.length > 1 && (
                  <div className="w-full mt-3 space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="flex items-center gap-1 text-cyan-300 font-semibold">
                        <span>📸</span> {item.galleryImages.length} Highlight Photos &amp; Onboarding:
                      </span>
                      <span className="text-[10px] text-slate-500">Click any photo</span>
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                      {item.galleryImages.map((gImg, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => openLightbox(item, idx)}
                          className="group/thumb relative rounded-xl overflow-hidden border border-white/15 bg-slate-900 aspect-square hover:border-cyan-400/80 transition-all hover:scale-105 cursor-pointer"
                          title={gImg.title}
                        >
                          <img src={getImageSrc(gImg.url)} alt={gImg.title} className="w-full h-full object-cover transition-transform duration-300 group-hover/thumb:scale-110 pointer-events-none" />
                          <div className="absolute inset-0 bg-black/25 group-hover/thumb:bg-transparent transition-colors" />
                          <span className="absolute bottom-0.5 right-1 text-[8px] font-mono font-bold text-white/90 bg-black/70 px-1 rounded">
                            #{idx + 1}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <p className="font-mono text-[11px] text-slate-500 text-center mt-3 flex items-center gap-1.5">
                  <span>💡</span> Click image to view in high-resolution full screen lightbox
                </p>
              </div>

              {/* RIGHT COLUMN: DETAILED METADATA & STORY */}
              <div className="lg:col-span-6 space-y-5">
                
                {/* Category Badge & Date & Special Featured Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${item.badgeStyle || 'bg-gradient-to-r from-violet-600/20 to-blue-600/20 border border-violet-500/40 text-violet-300'} text-xs font-mono font-bold tracking-wider`}>
                      <span className={`w-2 h-2 rounded-full ${item.pulseColor || 'bg-violet-400'} animate-ping`} />
                      {item.categoryBadge}
                    </span>
                    {item.specialBadge && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-cyan-500/20 border border-cyan-400/40 text-cyan-200 text-xs font-mono font-bold shadow-sm shadow-cyan-500/20">
                        {item.specialBadge}
                      </span>
                    )}
                    {item.secondaryBadge && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-[11px] font-mono font-bold">
                        {item.secondaryBadge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {item.gidBadge && (
                      <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-lg bg-blue-500/20 border border-blue-400/40 text-blue-300">
                        {item.gidBadge}
                      </span>
                    )}
                    <span className="font-mono text-xs text-slate-400 font-semibold flex items-center gap-1">
                      <span>📅</span> {item.date}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                    {item.title}
                  </h2>
                </div>

                {/* Organization & Association Info */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs">
                  <div className="flex items-start gap-2.5">
                    <span className="text-sm mt-0.5">🏛️</span>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">ORGANIZATION</span>
                      <span className="text-slate-200 font-medium leading-relaxed">
                        {item.organization}
                      </span>
                    </div>
                  </div>
                  {item.role && (
                    <div className="flex items-start gap-2.5 pt-2 border-t border-white/5">
                      <span className="text-sm mt-0.5">🌟</span>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">APPOINTED ROLE</span>
                        <span className="text-blue-300 font-bold font-mono">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  )}
                  {item.institution && (
                    <div className="flex items-start gap-2.5 pt-2 border-t border-white/5">
                      <span className="text-sm mt-0.5">🏫</span>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">INSTITUTION / CAMPUS</span>
                        <span className="text-slate-200 font-medium">
                          {item.institution}
                        </span>
                      </div>
                    </div>
                  )}
                  {item.issuedTo && (
                    <div className="flex items-start gap-2.5 pt-2 border-t border-white/5">
                      <span className="text-sm mt-0.5">🎓</span>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">ISSUED TO</span>
                        <span className="text-slate-200 font-bold font-mono">
                          {item.issuedTo}
                        </span>
                      </div>
                    </div>
                  )}
                  {item.association && (
                    <div className="flex items-start gap-2.5 pt-2 border-t border-white/5">
                      <span className="text-sm mt-0.5">🤝</span>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">IN ASSOCIATION WITH</span>
                        <span className="text-violet-300 font-bold font-mono">
                          {item.association}
                        </span>
                      </div>
                    </div>
                  )}
                  {item.sessionType && (
                    <div className="flex items-start gap-2.5 pt-2 border-t border-white/5">
                      <span className="text-sm mt-0.5">💻</span>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">SESSION FORMAT</span>
                        <span className="text-cyan-300 font-bold font-mono">
                          {item.sessionType}
                        </span>
                      </div>
                    </div>
                  )}
                  {item.shortDescription && (
                    <div className="flex items-start gap-2.5 pt-2 border-t border-white/5">
                      <span className="text-sm mt-0.5">📝</span>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">OVERVIEW</span>
                        <span className="text-slate-300 leading-relaxed font-sans text-xs">
                          {item.shortDescription}
                        </span>
                      </div>
                    </div>
                  )}
                  {item.highlightsList && (
                    <div className="pt-2 border-t border-white/5 space-y-1.5">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">KEY HIGHLIGHTS</span>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {item.highlightsList.map((h) => (
                          <span key={h} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200 font-mono text-[10px] flex items-center gap-1">
                            <span className="text-cyan-400">✦</span> {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {item.scoreDetails && (
                    <div className="pt-2 border-t border-white/5 space-y-1.5">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">PERFORMANCE METRICS</span>
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="px-2.5 py-1 rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-300 font-mono text-[11px] font-bold">
                          🏆 Score: {item.scoreDetails.consolidated}
                        </div>
                        <div className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-mono text-[10px]">
                          Assignments: {item.scoreDetails.assignments}
                        </div>
                        <div className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-mono text-[10px]">
                          Exam: {item.scoreDetails.proctoredExam}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Caption / Story */}
                <div className={`p-4 rounded-2xl ${item.captionBg || 'bg-violet-950/20 border border-violet-500/20'}`}>
                  <span className={`text-[10px] font-mono uppercase tracking-widest ${item.captionLabel || 'text-violet-400'} font-bold block mb-2`}>
                    HIGHLIGHT &amp; EXPERIENCE
                  </span>
                  <div className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans whitespace-pre-line">
                    {item.caption}
                  </div>
                </div>

                {/* Hashtags */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold block">
                    TAGS &amp; TOPICS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`font-mono text-[11px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 ${item.tagColor || 'text-cyan-300 hover:border-violet-500/40'} transition-colors`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openLightbox(item, 0);
                    }}
                    className="cta-primary px-6 py-2.5 rounded-xl text-xs font-bold shadow-lg shadow-violet-600/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>{item.actionButtonText || 'View Full Image'}</span>
                    <span>↗</span>
                  </button>
                  <a
                    href={getImageSrc(item.image)}
                    download={item.downloadName || `${item.id}.jpg`}
                    className="cta-secondary px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
                  >
                    <span>{item.categoryBadge === 'CERTIFICATION' ? 'Download Certificate' : 'Download Photo'}</span>
                    <span>📥</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>

      {/* ─── 4. FUTURE GALLERY ARCHIVE SECTION (FUTURE-READY SYSTEM) ─── */}
      <div className="pt-6 space-y-6">
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400 font-semibold block mb-1">
            CONTINUOUS JOURNEY
          </span>
          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
            Upcoming Moments &amp; <span className="gradient-text">Event Archives</span>
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-1 leading-relaxed">
            As new hackathons, Google Ambassador workshops, and engineering competitions take place, they will be cataloged directly into this gallery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="glass-card p-6 rounded-3xl border border-dashed border-white/15 bg-white/[0.02] flex flex-col justify-between items-center text-center group hover:border-violet-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-2xl mb-3 text-violet-400">
              🏆
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-white mb-1">Hackathons &amp; Competitions</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Reserved for upcoming team hackathon project showcases and competitive programming credentials.
              </p>
            </div>
            <span className="mt-4 font-mono text-[10px] text-violet-400 font-semibold bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20">
              ✦ Ready for New Entries
            </span>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-dashed border-white/15 bg-white/[0.02] flex flex-col justify-between items-center text-center group hover:border-blue-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-2xl mb-3 text-blue-400">
              🌟
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-white mb-1">Google Ambassador Events</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Reserved for photographs and letters from campus developer workshops and Google Gemini sessions.
              </p>
            </div>
            <span className="mt-4 font-mono text-[10px] text-blue-400 font-semibold bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              ✦ Active Ambassador Role
            </span>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-dashed border-white/15 bg-white/[0.02] flex flex-col justify-between items-center text-center group hover:border-cyan-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-2xl mb-3 text-cyan-400">
              📸
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-white mb-1">Campus Moments &amp; Demos</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Reserved for technical symposiums, research presentations, and engineering project showcases.
              </p>
            </div>
            <span className="mt-4 font-mono text-[10px] text-cyan-400 font-semibold bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              ✦ Dynamic Grid System
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Next Step CTA */}
      <div className="pt-6 flex flex-wrap justify-center gap-4 reveal">
        <button
          onClick={() => navigateTo('/contact')}
          className="cta-primary px-7 py-3 rounded-xl text-xs font-bold shadow-lg shadow-violet-600/30 flex items-center gap-2"
        >
          <span>Get in Touch with Mohit ✉️</span>
          <span>→</span>
        </button>
        <button
          onClick={() => navigateTo('/achievements')}
          className="cta-secondary px-7 py-3 rounded-xl text-xs font-semibold flex items-center gap-2"
        >
          <span>← Back to Achievements 📜</span>
        </button>
      </div>

    </div>

    {/* ─── 5. FULL SCREEN LIGHTBOX / PREVIEW MODAL (PORTAL TO DOCUMENT.BODY) ─── */}
    {selectedImage && (
      typeof ReactDOM !== 'undefined' && ReactDOM.createPortal ? ReactDOM.createPortal(
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-[999999] flex flex-col justify-between items-center bg-black/95 backdrop-blur-2xl animate-fadeIn select-none p-2 sm:p-4"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100vh', zIndex: 999999 }}
          onClick={closeLightbox}
        >
          {/* Top Bar: Title, Badge, Counter, Controls & Prominent Close Button */}
          <div
            className="w-full max-w-6xl flex items-center justify-between px-4 sm:px-8 py-3 bg-[#040714]/90 border border-white/10 backdrop-blur-xl z-20 gap-3 rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="px-2.5 py-1 rounded-lg bg-violet-600/30 border border-violet-500/50 text-violet-300 text-xs font-mono font-bold flex-shrink-0">
                {selectedImage.categoryBadge || 'GALLERY'}
              </span>
              <div className="flex flex-col min-w-0">
                <h3 className="font-heading font-bold text-xs sm:text-sm md:text-base text-white truncate leading-tight">
                  {currentTitle}
                </h3>
                <span className="font-mono text-[10.5px] text-slate-400 truncate">
                  {hasMultiple ? `Photo ${activeImageIndex + 1} of ${selectedImage.galleryImages.length} · ` : ''}{selectedImage.organization || selectedImage.date}
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Zoom In */}
              <button
                type="button"
                onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 2.5))}
                className="hidden sm:flex w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 items-center justify-center text-xs font-mono font-bold transition-all cursor-pointer"
                title="Zoom In"
              >
                🔍+
              </button>
              {/* Zoom Out */}
              <button
                type="button"
                onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.75))}
                className="hidden sm:flex w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 items-center justify-center text-xs font-mono font-bold transition-all cursor-pointer"
                title="Zoom Out"
              >
                🔍-
              </button>
              {/* Reset Zoom */}
              {zoomLevel !== 1 && (
                <button
                  type="button"
                  onClick={() => setZoomLevel(1)}
                  className="hidden sm:flex px-2.5 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-cyan-300 border border-cyan-400/30 items-center justify-center text-xs font-mono font-semibold transition-all cursor-pointer"
                  title="Reset Zoom"
                >
                  {Math.round(zoomLevel * 100)}%
                </button>
              )}
              {/* Download */}
              <a
                href={getImageSrc(currentUrl)}
                download={selectedImage.downloadName || `${selectedImage.id}.jpg`}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-violet-600/20 hover:bg-violet-600/40 text-violet-300 hover:text-white border border-violet-500/40 flex items-center justify-center text-xs font-bold transition-all cursor-pointer"
                title="Download High-Resolution Image"
                onClick={(e) => e.stopPropagation()}
              >
                📥
              </a>
              {/* Prominent Close Button */}
              <button
                type="button"
                onClick={closeLightbox}
                className="w-10 h-10 rounded-xl bg-red-500/25 hover:bg-red-600 text-red-200 hover:text-white border border-red-500/50 flex items-center justify-center text-lg font-extrabold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-red-500/25 cursor-pointer"
                title="Close Lightbox (ESC or click outside)"
                aria-label="Close preview"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Center Stage: Full Screen Image with Previous / Next Arrows */}
          <div className="flex-1 w-full flex items-center justify-center p-2 sm:p-4 md:p-6 relative overflow-hidden">
            
            {/* Previous Image Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-2 sm:left-6 md:left-8 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/75 hover:bg-violet-600 active:scale-95 border border-white/20 hover:border-violet-400 text-white font-bold text-xl sm:text-2xl flex items-center justify-center backdrop-blur-md shadow-2xl transition-all hover:scale-110 cursor-pointer"
              title="Previous Image (← Left Arrow)"
              aria-label="Previous image"
            >
              ‹
            </button>

            {/* Clickable Backdrop Area for Image */}
            <div
              className="max-h-[82vh] max-w-[96vw] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentUrl}
                alt={currentTitle}
                style={{
                  transform: `scale(${zoomLevel})`,
                  transition: 'transform 0.2s ease-out',
                  maxHeight: '80vh',
                  maxWidth: '92vw'
                }}
                className="w-auto h-auto object-contain rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.9)] border border-white/15 select-none"
              />
            </div>

            {/* Next Image Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2 sm:right-6 md:right-8 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/75 hover:bg-violet-600 active:scale-95 border border-white/20 hover:border-violet-400 text-white font-bold text-xl sm:text-2xl flex items-center justify-center backdrop-blur-md shadow-2xl transition-all hover:scale-110 cursor-pointer"
              title="Next Image (→ Right Arrow)"
              aria-label="Next image"
            >
              ›
            </button>
          </div>

          {/* Bottom Bar: Sub-image Thumbnail Strip & Footer Metadata */}
          <div
            className="w-full max-w-6xl px-4 sm:px-8 py-3 bg-[#040714]/90 border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-2.5 z-20 text-xs font-mono rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sub-image Thumbnails if multi-photo */}
            {hasMultiple ? (
              <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1">
                {selectedImage.galleryImages.map((gImg, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setActiveImageIndex(idx);
                      setZoomLevel(1);
                    }}
                    className={`relative rounded-xl overflow-hidden border transition-all h-10 w-14 sm:h-11 sm:w-16 flex-shrink-0 cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-cyan-400 ring-2 ring-cyan-400/50 scale-105 opacity-100'
                        : 'border-white/15 opacity-50 hover:opacity-100'
                    }`}
                    title={gImg.title}
                  >
                    <img src={getImageSrc(gImg.url)} alt={gImg.title} className="w-full h-full object-cover" />
                    <span className="absolute bottom-0 right-0.5 text-[8px] bg-black/80 px-1 rounded text-white font-bold">
                      #{idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-slate-300 text-[11px] sm:text-xs">
                <span>🏆 {selectedImage.title}</span>
              </div>
            )}

            {/* Navigation & Dismissal Hint */}
            <div className="flex items-center gap-3 text-[11px] text-slate-400 flex-shrink-0">
              <span className="hidden sm:inline">Use <strong className="text-white">←</strong> and <strong className="text-white">→</strong> keys to navigate</span>
              <span className="hidden sm:inline">·</span>
              <span>Press <strong className="text-white">ESC</strong> or click outside to close</span>
            </div>
          </div>
        </div>,
        document.body
      ) : null
    )}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE 9: CONTACT (DEDICATED CONTACT PAGE)
   ═══════════════════════════════════════════════════════════════════ */
function ContactPage({ navigateTo }) {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '', subject: '' });
  const [contactSending, setContactSending] = useState(false);
  const [contactError, setContactError] = useState('');

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;

    setContactSending(true);
    setContactError('');

    try {
      const res = await fetch('https://formsubmit.co/ajax/mohitmundke20@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          _subject: `⚡ Portfolio Contact from ${contactForm.name}`,
          _template: 'table',
          'Sender Name': contactForm.name,
          'Sender Email': contactForm.email,
          Subject: contactForm.subject || 'Portfolio Inquiry',
          Message: contactForm.message
        })
      });

      if (res.ok) {
        setContactSending(false);
        setContactSubmitted(true);
        setContactForm({ name: '', email: '', message: '', subject: '' });
      } else {
        throw new Error('FormSubmit network error');
      }
    } catch (err) {
      console.error('Email submission error:', err);
      const subject = encodeURIComponent(contactForm.subject || `Portfolio Contact from ${contactForm.name}`);
      const body = encodeURIComponent(`Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`);
      window.location.href = `mailto:mohitmundke20@gmail.com?subject=${subject}&body=${body}`;
      setContactSending(false);
      setContactSubmitted(true);
    }
  };

  return (
    <div className="page-container max-w-6xl mx-auto px-4 py-10 space-y-16">
      <div className="text-center reveal">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-violet-500/60" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-violet-400 font-semibold">
            — GET IN TOUCH —
          </span>
          <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-violet-500/60" />
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight mt-2">
          Let&apos;s <span className="gradient-text">build something meaningful.</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-3 leading-relaxed">
          Open to opportunities, collaborations, innovative ideas, and meaningful conversations. Reach out directly through the form or via email and WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
          <div>
            <span className="status-badge mb-4"><span className="status-dot" /> Open to Opportunities</span>
            
            <h3 className="font-heading font-bold text-xl text-white mb-2 mt-3">Open For</h3>
            <p className="text-xs text-slate-400 mb-4">I&apos;m always excited to explore and connect regarding:</p>
            
            <ul className="space-y-2.5 text-xs text-slate-300 mb-6 font-medium">
              <li className="flex items-center gap-2"><span className="text-violet-400 font-bold">✦</span> Software Engineering &amp; Full-Stack Projects</li>
              <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">✦</span> AI &amp; Data Science Collaborations</li>
              <li className="flex items-center gap-2"><span className="text-cyan-400 font-bold">✦</span> Student Tech Community Initiatives &amp; Workshops</li>
              <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✦</span> Innovation, Hackathons &amp; Product Ideation</li>
            </ul>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-slate-400 font-mono">
            <p>📧 <strong className="text-white">Email:</strong> <a href={`mailto:${personalInfo.email}`} className="text-violet-400 hover:underline">{personalInfo.email}</a></p>
            <p>📱 <strong className="text-white">Phone:</strong> <a href={`tel:${personalInfo.phone}`} className="text-violet-400 hover:underline">{personalInfo.phone}</a></p>
            <p>💬 <strong className="text-white">WhatsApp:</strong> <a href={personalInfo.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Chat on WhatsApp ↗</a></p>
            <p>📍 <strong className="text-white">Location:</strong> {personalInfo.location}</p>
          </div>
        </div>

        <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl">
          {contactSubmitted ? (
            <div className="text-center py-12">
              <span className="text-4xl">✉️</span>
              <h3 className="font-heading font-bold text-xl text-white mt-3">Message Sent!</h3>
              <p className="text-xs text-slate-400 mt-1 mb-4">
                Thanks for reaching out! Your message has been forwarded to <strong>mohitmundke20@gmail.com</strong>. I&apos;ll get back to you shortly.
              </p>
              <button
                onClick={() => setContactSubmitted(false)}
                className="text-xs font-mono text-violet-400 hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-mono text-[10px] uppercase tracking-widest mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Recruiter or Collaborator"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="contact-input w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-mono text-[10px] uppercase tracking-widest mb-1.5">Your Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="collaborator@company.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="contact-input w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-mono text-[10px] uppercase tracking-widest mb-1.5">Subject</label>
                <input
                  type="text"
                  placeholder="Internship opportunity / Collaboration / Quick chat"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  className="contact-input w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-mono text-[10px] uppercase tracking-widest mb-1.5">Message *</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Hi Mohit, let's discuss an engineering opportunity or collaboration..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="contact-input w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-xs"
                />
              </div>

              {contactError && (
                <p className="text-red-400 text-xs font-mono text-center py-1">{contactError}</p>
              )}

              <button
                type="submit"
                disabled={contactSending}
                className="cta-primary w-full py-3.5 rounded-xl font-bold text-xs text-white disabled:opacity-60 disabled:cursor-not-allowed shadow-xl shadow-violet-600/30"
              >
                {contactSending ? '⏳ Sending Message...' : 'Send Message ✦'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE 9: RECRUITER VIEW (DEDICATED RECRUITER PAGE)
   ═══════════════════════════════════════════════════════════════════ */
function RecruiterPage({ navigateTo }) {
  return (
    <div className="page-container max-w-5xl mx-auto px-4 py-8 space-y-8">
      <div className="glass-card p-6 sm:p-8 rounded-3xl border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-violet-900/15 to-transparent">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="status-badge"><span className="status-dot" /> Open to Internships &amp; Roles</span>
              <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold">RECRUITER VIEW</span>
            </div>
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              Mohit Mundke — Executive Candidate Overview
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              AI &amp; Data Science Student @ DYPCOEI Pune · Google Student Ambassador · Aspiring Software Engineer.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <a
              href={getResumePdfSrc()}
              target="_blank"
              download="Mohit-Mundke-Resume.pdf"
              className="cta-primary px-5 py-2.5 rounded-xl text-xs font-bold"
            >
              📄 Download Resume (PDF)
            </a>
            <button
              onClick={() => navigateTo('/')}
              className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-300 hover:text-white"
            >
              Exit Recruiter View ✕
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <h3 className="font-heading font-bold text-base text-white mb-3">Contact &amp; Details</h3>
            <div className="space-y-2.5 text-xs text-slate-300 font-mono">
              <p>📍 <strong className="text-white">Location:</strong> {personalInfo.location}</p>
              <p>📧 <strong className="text-white">Email:</strong> <a href={`mailto:${personalInfo.email}`} className="text-violet-400 hover:underline">{personalInfo.email}</a></p>
              <p>📱 <strong className="text-white">Phone:</strong> <a href={`tel:${personalInfo.phone}`} className="text-violet-400 hover:underline">{personalInfo.phone}</a></p>
              <p>🎓 <strong className="text-white">Program:</strong> B.Tech CSE (AI &amp; DS)</p>
              <p>🏛️ <strong className="text-white">College:</strong> DYPCOEI, Pune (2025–29)</p>
              <p>🗣️ <strong className="text-white">Languages:</strong> English, Hindi, Marathi</p>
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-white/10 flex gap-2">
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 py-2 text-center rounded-lg bg-white/5 border border-white/10 text-xs text-blue-400 hover:bg-white/10">LinkedIn</a>
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="flex-1 py-2 text-center rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 hover:bg-white/10">GitHub</a>
          </div>
        </div>

        <div className="md:col-span-2 glass-card p-6 rounded-2xl">
          <h3 className="font-heading font-bold text-base text-white mb-4">Core Technical Matrix</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
              <p className="font-mono font-bold text-violet-400 mb-1.5 uppercase">Frontend &amp; Full-Stack</p>
              <p className="text-slate-300">React, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, REST APIs, Component Lifecycle</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
              <p className="font-mono font-bold text-blue-400 mb-1.5 uppercase">AI &amp; Data Science</p>
              <p className="text-slate-300">Python, Google Gemini AI, SQL, Pandas, NumPy, Data Analysis, Machine Learning Foundations</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
              <p className="font-mono font-bold text-cyan-400 mb-1.5 uppercase">Verified Credentials</p>
              <p className="text-slate-300">Google Cybersecurity Certificate, Google Data Analytics Certificate, GSA Bronze Badge</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
              <p className="font-mono font-bold text-emerald-400 mb-1.5 uppercase">Leadership &amp; Collaboration</p>
              <p className="text-slate-300">Campus Tech Advocacy, Initiative Execution (*Fund My Crazy*, *Glow-up Night*), Mentoring</p>
            </div>
          </div>

          <h4 className="font-heading font-bold text-sm text-white mt-6 mb-3">Key Experience Highlights</h4>
          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex justify-between items-start">
              <div>
                <p className="font-bold text-white">Google Student Ambassador (GID: 5314)</p>
                <p className="text-slate-400">Google · May 2026 – Present</p>
                <p className="text-slate-300 mt-1">Leading AI workshops on Gemini, executing campus developer initiatives.</p>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-amber-400/15 text-amber-300 font-bold">Bronze Badge</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex justify-between items-start">
              <div>
                <p className="font-bold text-white">Full Stack Development Intern</p>
                <p className="text-slate-400">Thiranex</p>
                <p className="text-slate-300 mt-1">Hands-on frontend and backend tasks, applied debugging, component architecture.</p>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-cyan-400/15 text-cyan-300 font-bold">Internship</span>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card p-6 sm:p-8 rounded-3xl border-violet-500/30 text-center">
        <h3 className="font-heading font-extrabold text-xl text-white mb-2">Interested in working with Mohit?</h3>
        <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto mb-6">
          Open to software engineering internships, AI/ML exploration roles, and high-impact developer collaborations.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => navigateTo('/contact')}
            className="cta-primary px-6 py-3 rounded-xl text-xs font-bold shadow-lg shadow-violet-600/30"
          >
            Send Direct Message →
          </button>
          <a
            href={`mailto:${personalInfo.email}`}
            className="cta-secondary px-6 py-3 rounded-xl text-xs font-semibold"
          >
            Email Directly ✉️
          </a>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN APP ROUTER COMPONENT
   ═══════════════════════════════════════════════════════════════════ */
function App() {
  const [loading, setLoading] = useState(true);
  const [route, setRoute] = useState('/');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [aiOpen, setAiOpen] = useState(false);
  const [aiMessages, setAiMessages] = useState([
    { role: 'assistant', text: "Hi! I'm **Mohit's AI Assistant**. Ask me anything about Mohit's background, B.Tech education at DYPCOEI, Google Student Ambassador initiatives, FocusNext Wellness, or technical stack!" }
  ]);
  const [aiInput, setAiInput] = useState('');

  const getCleanRoute = () => {
    const hashOnly = (window.location.hash || '').split('?')[0];
    const raw = hashOnly.replace(/^#\/?/, '/');
    return raw === '' ? '/' : (raw.startsWith('/') ? raw : `/${raw}`);
  };

  useEffect(() => {
    setRoute(getCleanRoute());

    const handleHashChange = () => {
      const current = getCleanRoute();
      setRoute(current);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (newRoute) => {
    const clean = newRoute.startsWith('/') ? newRoute : `/${newRoute}`;
    window.location.hash = `#${clean}`;
    setRoute(clean);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useScrollReveal(!loading, route);

  const handleAiSend = (customQuery) => {
    const q = (customQuery || aiInput).trim().toLowerCase();
    if (!q) return;

    setAiMessages((prev) => [...prev, { role: 'user', text: customQuery || aiInput }]);
    setAiInput('');

    setTimeout(() => {
      let reply = "Mohit is an AI & Data Science engineering student at DYPCOEI Pune and Google Student Ambassador (GID: 5314). Reach out at mohitmundke20@gmail.com!";

      if (q.includes('google') || q.includes('ambassador') || q.includes('gsa')) {
        reply = "Mohit serves as a **Google Student Ambassador (GID: 5314 · Bronze Badge)**. He has spearheaded campus initiatives like *Fund My Crazy* and *Career Glow-up Night*, leading workshops on Google Gemini AI and developer tools.";
      } else if (q.includes('project') || q.includes('focusnext') || q.includes('soilosync') || q.includes('soil') || q.includes('wellness')) {
        reply = 
          "Mohit's featured projects include:\n\n" +
          "1. 🧘‍♂️ **Wellness Healthcare (FocusNext)**: Flagship remote worker wellness healthcare platform engineered with React, Python/FastAPI, and automated 20-20-20 screen fatigue assistance.\n\n" +
          "2. 🌱 **soilOsync**: Smart soil monitoring platform designed to provide real-time soil insights and support technology-driven decision-making in agriculture (React, TypeScript, Vite, Tailwind CSS, Radix UI, Google Gemini AI).\n\n" +
          "3. 🚀 **Personal Portfolio & GenAI Assistant**: Interactive web portal with Recruiter Mode and client-side conversational AI.";
      } else if (q.includes('skill') || q.includes('tech') || q.includes('python')) {
        reply = "Mohit's primary stack includes **Python, Java, C/C++, JavaScript (ES6+), React, Tailwind CSS, Google Gemini AI, SQL, and Git**.";
      } else if (q.includes('education') || q.includes('college') || q.includes('score')) {
        reply = "Mohit is currently pursuing **B.Tech CSE (AI & Data Science)** at DYPCOEI Pune (2025–2029). He scored **87.00%** in 10th SSC and **77.50%** in 12th HSC Science.";
      } else if (q.includes('contact') || q.includes('email') || q.includes('phone')) {
        reply = "You can contact Mohit directly via Email (**mohitmundke20@gmail.com**), Phone (**+91 9767969701**), or on WhatsApp!";
      } else if (q.includes('gallery') || q.includes('pixel') || q.includes('nptel') || q.includes('aws') || q.includes('c++') || q.includes('imarticus') || q.includes('brain') || q.includes('research') || q.includes('thiranex') || q.includes('intern') || q.includes('fund') || q.includes('august') || q.includes('workshop') || q.includes('meet') || q.includes('tutorial') || q.includes('banana') || q.includes('certificate') || q.includes('competition') || q.includes('moments') || q.includes('event')) {
        reply = 
          "Mohit's **Gallery (🎨 #/gallery)** showcases verified achievements and milestones:\n\n" +
          "1. 🏆 **Pixel War 2k26 UI/UX Design Battle** (DYPCOEI & BRAIN)\n" +
          "2. 📜 **Fundamentals of ML & AI** (AWS Training & Certification)\n" +
          "3. 📜 **Python for Data Science** (NPTEL · IIT Madras · 52% Score)\n" +
          "4. 📜 **C & C++ Programming** (Imarticus Learning · Grade A)\n" +
          "5. 🌟 **Google Gemini AI Student Ambassador 2026** (Campus Ambassador · GID: 5314)\n" +
          "6. 🏛️ **BRAIN Foundation Membership 2026** (Academic Member · BRAIN-DRY261-S024)\n" +
          "7. 💼 **Internship in Full Stack Development** (Thiranex · Remote / Project-Based)\n" +
          "8. 🚀 **August 2026 Monthly Highlights — GSA** (Fund My Crazy & Leadership Growth)\n" +
          "9. 📸 **GSA Highlights — June & July 2026** (Bronze Badge Milestone)\n" +
          "10. 🤝 **Team Collaboration & Learning Session** (Google Meet Community Session)\n" +
          "11. 💡 **Product Presentation & Team Discussion** (Interactive Workshop)\n" +
          "12. 🚀 **Nano Banana Tutorial Session** (Hands-on Tutorial Workshop)";
      }

      setAiMessages((prev) => [...prev, { role: 'assistant', text: reply }]);
    }, 350);
  };

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  const isRecruiter = route === '/recruiter';

  return (
    <div className="relative min-h-screen text-slate-200 bg-[#030508] flex flex-col justify-between">
      <ParticleBackground />

      {/* ═══ 1. STICKY NAVBAR (PROFESSIONAL UNIFIED GLASS PANEL) ═══ */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-6xl rounded-2xl border border-white/10 px-3.5 sm:px-5 py-2 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)] bg-[#050814]/85 backdrop-blur-xl transition-all">
          
          {/* Left: Logo & Professional Identity */}
          <button
            onClick={() => navigateTo('/')}
            className="flex items-center gap-2.5 sm:gap-3 group text-left focus:outline-none flex-shrink-0"
            title="Mohit Mundke — Home"
          >
            <Monogram size={32} className="transition-transform duration-300 group-hover:scale-105 flex-shrink-0" />
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-sm sm:text-[15px] text-white tracking-tight group-hover:text-violet-300 transition-colors leading-tight">
                Mohit Mundke
              </span>
              <span className="font-mono text-[10px] text-slate-400 font-medium tracking-tight hidden xl:block whitespace-nowrap">
                AI &amp; Data Science <span className="text-slate-600">|</span> <span className="text-cyan-300/90 font-semibold">Google Student Ambassador</span>
              </span>
              <span className="font-mono text-[10px] text-slate-400 font-medium tracking-tight hidden sm:block xl:hidden whitespace-nowrap">
                AI &amp; Data Science
              </span>
            </div>
          </button>

          {/* Center: Clean Desktop Navigation (No bulky boxes, subtle active underline glow) */}
          {!isRecruiter && (
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 mx-2">
              {navItems.map((item) => {
                const isActive = route === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigateTo(item.id)}
                    className={`relative px-2 xl:px-2.5 py-1.5 text-[11.5px] xl:text-xs font-medium tracking-wide transition-all ${
                      isActive
                        ? 'text-white font-semibold after:absolute after:-bottom-1 after:left-2 after:right-2 after:h-[2px] after:bg-gradient-to-r after:from-violet-400 after:to-cyan-400 after:rounded-full after:shadow-[0_0_8px_#a855f7]'
                        : 'text-slate-400 hover:text-white hover:bg-white/[0.04] rounded-lg'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          )}

          {/* Right: Simple Mode Toggle Icon + Strong Single CTA */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            {/* Simple Clean Icon Toggle */}
            <button
              onClick={() => navigateTo(isRecruiter ? '/' : '/recruiter')}
              className="w-8 h-8 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 flex items-center justify-center text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 text-slate-300 hover:text-white flex-shrink-0"
              title={isRecruiter ? "Switch to Developer / Normal View" : "Switch to Recruiter View"}
            >
              {isRecruiter ? '💼' : '💻'}
            </button>

            {/* Lets Connect - Strong Single CTA */}
            <button
              onClick={() => navigateTo('/contact')}
              className="cta-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold text-white shadow-lg shadow-violet-600/30 hover:shadow-violet-500/50 hover:scale-[1.03] active:scale-95 transition-all flex items-center gap-1.5 flex-shrink-0"
            >
              <span>Let&apos;s Connect</span>
              <span className="text-[11px]">✨</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white transition-colors flex-shrink-0"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden pointer-events-auto fixed inset-x-3 top-20 rounded-2xl p-5 border border-white/15 shadow-2xl bg-[#070c1a]/95 backdrop-blur-2xl flex flex-col gap-2 z-50 animate-fadeIn">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  navigateTo(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium text-left flex items-center justify-between transition-all ${
                  route === item.id ? 'bg-gradient-to-r from-violet-600/30 to-blue-600/30 border border-violet-500/40 text-white font-bold' : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                {route === item.id && <span className="text-xs text-violet-400">✦</span>}
              </button>
            ))}
            <div className="pt-2 mt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  navigateTo(isRecruiter ? '/' : '/recruiter');
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold text-left flex items-center gap-2"
              >
                <span>💼</span>
                <span>{isRecruiter ? 'Switch to Normal Mode' : 'Switch to Recruiter Mode'}</span>
              </button>
              <button
                onClick={() => {
                  navigateTo('/contact');
                  setMobileMenuOpen(false);
                }}
                className="cta-primary w-full py-3 rounded-xl text-xs font-bold text-center mt-1"
              >
                Let&apos;s Connect ✨
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                download
                className="px-4 py-2.5 rounded-xl bg-violet-600/15 border border-violet-500/30 text-violet-300 text-xs font-semibold text-center"
              >
                📄 Download Official Resume
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ═══ 2. MAIN DEDICATED PAGE ROUTER ═══ */}
      <main className="relative z-10 pt-28 pb-20 flex-1">
        {route === '/' && <HomePage navigateTo={navigateTo} />}
        {route === '/about' && <AboutPage navigateTo={navigateTo} />}
        {route === '/skills' && <SkillsPage navigateTo={navigateTo} />}
        {route === '/experience' && <ExperiencePage navigateTo={navigateTo} />}
        {route === '/projects' && <ProjectsPage navigateTo={navigateTo} />}
        {route === '/education' && <EducationPage navigateTo={navigateTo} />}
        {route === '/achievements' && <AchievementsPage navigateTo={navigateTo} />}
        {route === '/gallery' && <GalleryPage navigateTo={navigateTo} />}
        {route === '/contact' && <ContactPage navigateTo={navigateTo} />}
        {route === '/recruiter' && <RecruiterPage navigateTo={navigateTo} />}
      </main>

      {/* ═══ 3. COMPREHENSIVE MULTI-PAGE FOOTER ═══ */}
      <footer className="relative z-10 border-t border-white/10 bg-[#020408] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          
          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/15 bg-gradient-to-r from-violet-950/40 via-[#070b18] to-[#04060d] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-xl text-center md:text-left relative z-10">
              <span className="font-mono text-xs uppercase tracking-widest text-violet-400 font-semibold block mb-2">READY TO CONNECT</span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
                Let&apos;s build something <span className="gradient-text">meaningful.</span>
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                Open to opportunities, collaborations, innovative ideas, and meaningful conversations.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3.5 relative z-10">
              <button
                onClick={() => navigateTo('/contact')}
                className="cta-primary px-7 py-3 rounded-full text-xs sm:text-sm font-bold shadow-xl shadow-violet-600/35"
              >
                Get in touch →
              </button>
              <a
                href={`mailto:${personalInfo.email}`}
                className="cta-secondary px-7 py-3 rounded-full text-xs sm:text-sm font-semibold hover:border-violet-500/50"
              >
                Email me
              </a>
            </div>
          </div>

          <div className="glass-card p-6 sm:p-7 rounded-3xl border border-white/10 bg-[#050814]/90 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl border transition-all ${
                isRecruiter
                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-400 shadow-lg shadow-amber-500/20'
                  : 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400 shadow-lg shadow-emerald-500/20'
              }`}>
                {isRecruiter ? '💼' : '🟢'}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-heading font-bold text-sm sm:text-base text-white">
                    {isRecruiter ? 'Recruiter Mode Active' : 'Normal Portfolio Mode'}
                  </h4>
                  <span className={`font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${
                    isRecruiter
                      ? 'bg-amber-500/15 border-amber-500/30 text-amber-300'
                      : 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
                  }`}>
                    {isRecruiter ? '🟠 Orange Mode' : '🟢 Green Mode'}
                  </span>
                </div>
                <p className="text-slate-400 text-xs mt-0.5">
                  {isRecruiter
                    ? 'Highlighting professional summary, skills matrix, verified credentials, and fast contact links.'
                    : 'Displaying complete interactive animations, bento storytelling, and deep project case studies.'}
                </p>
              </div>
            </div>

            <button
              onClick={() => navigateTo(isRecruiter ? '/' : '/recruiter')}
              className={`mode-pill ${isRecruiter ? 'mode-pill-recruiter' : 'mode-pill-normal'} whitespace-nowrap`}
              title={isRecruiter ? "Switch to Normal Mode" : "Switch to Recruiter Mode"}
            >
              {isRecruiter ? 'Switch to Normal Mode 🟢' : 'Switch to Recruiter Mode 💼'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pt-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Monogram size={38} />
                <div>
                  <h3 className="font-heading font-extrabold text-base text-white">Mohit Mundke</h3>
                  <p className="font-mono text-xs text-violet-400 font-semibold">AI &amp; Data Science Student</p>
                </div>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Passionate about AI, software development, innovation, and building meaningful digital experiences through technology.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] font-mono font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Opportunities
                </span>
              </div>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400 font-bold block mb-4">
                EXPLORE
              </span>
              <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
                {navItems.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => navigateTo(link.id)}
                      className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200 group text-left"
                    >
                      <span className="text-violet-500 opacity-0 group-hover:opacity-100 transition-opacity font-bold">▸</span>
                      <span>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400 font-bold block mb-4">
                CONNECT
              </span>
              <ul className="space-y-3 text-xs text-slate-400 font-medium">
                <li>
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 hover:text-blue-400 hover:translate-x-1 transition-all"
                  >
                    <span className="w-7 h-7 rounded-lg bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xs">in</span>
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 hover:text-white hover:translate-x-1 transition-all"
                  >
                    <span className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white text-xs">🐙</span>
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 hover:text-pink-400 hover:translate-x-1 transition-all"
                  >
                    <span className="w-7 h-7 rounded-lg bg-pink-600/15 border border-pink-500/30 flex items-center justify-center text-pink-400 text-xs">📸</span>
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 hover:translate-x-1 transition-all group font-semibold"
                  >
                    <span className="w-7 h-7 rounded-lg bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 text-xs shadow-sm shadow-emerald-500/30">💬</span>
                    <span>WhatsApp (+91 9767969701)</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400 font-bold block mb-4">
                GET IN TOUCH
              </span>
              <ul className="space-y-3 text-xs text-slate-400 font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="text-base mt-0.5">📧</span>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-slate-500">Email</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-slate-300 hover:text-violet-400 break-all transition-colors font-mono">
                      {personalInfo.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-base mt-0.5">📱</span>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-slate-500">Phone</span>
                    <a href={`tel:${personalInfo.phone}`} className="text-slate-300 hover:text-violet-400 transition-colors font-mono">
                      {personalInfo.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-base mt-0.5">💬</span>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-slate-500">WhatsApp</span>
                    <a href={personalInfo.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline transition-colors font-mono">
                      Chat on WhatsApp
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-base mt-0.5">📄</span>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-slate-500">Resume</span>
                    <a href={getResumePdfSrc()} target="_blank" download="Mohit-Mundke-Resume.pdf" className="text-violet-400 hover:underline font-mono font-semibold">
                      Download Resume (PDF) ↗
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-base mt-0.5">📍</span>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-slate-500">Location</span>
                    <span className="text-slate-300 font-mono">{personalInfo.location}</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
            <p>© 2026 Mohit Mundke. All rights reserved.</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-violet-500/40 transition-all flex items-center gap-1.5"
              title="Back to top"
            >
              <span>Back to top</span>
              <span>↑</span>
            </button>
          </div>

        </div>
      </footer>

      {/* ═══ 4. FLOATING WHATSAPP SUPPORT BUTTON (BOTTOM LEFT) ═══ */}
      <div className="fixed bottom-6 left-6 z-40">
        <a
          href={personalInfo.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float-btn"
          title="Chat with me on WhatsApp (+91 9767969701)"
        >
          <span className="text-base">💬</span>
          <span className="hidden sm:inline">Chat on WhatsApp</span>
        </a>
      </div>

      {/* ═══ 5. FLOATING AI ASSISTANT WIDGET (BOTTOM RIGHT) ═══ */}
      <div className="fixed bottom-6 right-6 z-50">
        {!aiOpen && (
          <button
            onClick={() => setAiOpen(true)}
            className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-bold text-xs shadow-2xl shadow-violet-600/40 hover:scale-105 transition-all"
          >
            <span>✨ Ask Mohit</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </button>
        )}

        {aiOpen && (
          <div className="w-80 sm:w-96 rounded-2xl glass-card border border-white/20 p-4 shadow-2xl bg-[#070b18]/95 flex flex-col h-[450px]">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-lg">🤖</span>
                <div>
                  <p className="font-heading font-bold text-xs text-white">Ask Mohit&apos;s AI Assistant</p>
                  <p className="text-[10px] text-emerald-400 font-mono">● Online &amp; Ready</p>
                </div>
              </div>
              <button onClick={() => setAiOpen(false)} className="text-slate-400 hover:text-white text-xs p-1">✕</button>
            </div>

            <div className="flex flex-wrap gap-1.5 py-2 border-b border-white/5 text-[10px]">
              <button onClick={() => handleAiSend('Tell me about your Google Ambassador role')} className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300">GSA Role?</button>
              <button onClick={() => handleAiSend('What is FocusNext Wellness?')} className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300">FocusNext?</button>
              <button onClick={() => handleAiSend('What is your education background?')} className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300">Education?</button>
            </div>

            <div className="flex-1 overflow-y-auto py-3 space-y-2.5 text-xs">
              {aiMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] p-2.5 rounded-xl ${
                      msg.role === 'user'
                        ? 'bg-violet-600 text-white font-medium rounded-tr-none'
                        : 'bg-white/5 border border-white/10 text-slate-300 rounded-tl-none leading-relaxed'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2.5 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAiSend()}
                placeholder="Ask about skills, education, projects..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
              />
              <button
                onClick={() => handleAiSend()}
                className="px-3.5 py-2 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-bold rounded-lg text-xs hover:brightness-110"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const createRoot = (window.ReactDOM && window.ReactDOM.createRoot) || (typeof ReactDOM !== 'undefined' ? ReactDOM.createRoot : null);
  if (createRoot) {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = App;
}
