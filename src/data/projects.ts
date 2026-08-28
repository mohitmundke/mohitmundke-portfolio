import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'focusnext-wellness',
    title: 'Wellness Healthcare (FocusNext)',
    pitch: 'A wellness healthcare platform designed for remote workers and interns — helping users maintain healthier, more productive work routines.',
    problem:
      "Remote workers and interns often struggle to maintain healthy habits during long work sessions. Without physical office cues, it's easy to skip breaks, maintain poor posture, experience eye strain, and neglect overall wellness — leading to reduced productivity and burnout.",
    solution:
      'FocusNext Wellness is a web-based wellness companion that helps remote workers build sustainable work habits through smart break reminders, posture alerts, activity tracking, and a wellness dashboard that keeps health metrics visible and actionable.',
    features: [
      'Authentication and secure login flow',
      'Personal profile setup and onboarding',
      'Wellness dashboard with activity overview',
      'Break timer with customizable intervals',
      'Activity tracking and logging',
      'Posture reminder notifications',
      'Wellness quick tips and guidance',
      'Break notifications system',
      'Settings and preferences management',
      'Responsive interface across devices',
      'Local storage for authentication and profile data',
    ],
    techStack: [
      { name: 'React', category: 'Frontend' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'Vite', category: 'Build Tool' },
      { name: 'Tailwind CSS', category: 'Styling' },
      { name: 'Motion', category: 'Animation' },
      { name: 'React Router', category: 'Routing' },
      { name: 'Recharts', category: 'Data Visualization' },
      { name: 'Radix UI', category: 'UI Primitives' },
      { name: 'Material UI', category: 'UI Components' },
      { name: 'Lucide React', category: 'Icons' },
      { name: 'React Hook Form', category: 'Forms' },
    ],
    githubUrl: 'https://github.com/mohitmundke/FocusNext-Wellness.git',
    liveUrl: undefined,
    liveComingSoon: true,
    imageUrl: undefined,
    screenshotUrl: '/images/focusnext-preview.svg',
    featured: true,
    tags: ['React', 'TypeScript', 'Wellness', 'Web App', 'Full-Stack'],
    status: 'in-development',
    caseStudy: {
      overview:
        "FocusNext Wellness is a full-featured wellness web application I built to address a real problem I noticed among remote workers and interns — the lack of structured wellness habits during work-from-home sessions. The platform provides a centralized dashboard to track breaks, monitor activity, and receive timely health reminders.",
      problem:
        "Working remotely removes physical office structure and social cues that naturally encourage breaks. This leads to extended sitting periods, neglected posture, eye strain, and reduced overall wellness. Existing solutions are either too complex, too minimal, or not designed for the specific needs of interns and junior remote workers.",
      solution:
        "I designed and developed FocusNext Wellness as a focused, user-friendly wellness companion. The app provides a clean, intuitive interface with a personalized dashboard, smart reminders, and activity tracking — all backed by local storage so users can get started without a complex backend setup.",
      features: [
        'Secure authentication with session persistence via local storage',
        'Personalized onboarding to capture user preferences and wellness goals',
        'Real-time wellness dashboard with activity summaries',
        'Customizable break timer with different break types',
        'Posture reminder system with configurable intervals',
        'Activity logging with visual charts via Recharts',
        'Wellness tips sourced from curated content',
        'Notification system for break and wellness alerts',
        'Settings panel for full personalization',
        'Fully responsive from mobile to desktop',
      ],
      technology:
        'Built with React and TypeScript for type-safe, maintainable code. Vite ensures fast development and optimized production builds. Tailwind CSS provides a utility-first styling approach. Motion (Framer Motion) delivers smooth, professional animations. Recharts powers data visualization. Radix UI and Material UI provide accessible, polished UI primitives. React Hook Form handles form state efficiently. React Router manages navigation.',
      approach:
        "I started with a clear problem definition and user flow mapping before writing any code. The component architecture was designed to be modular and reusable from the outset. I used TypeScript throughout to catch errors early and maintain code quality as the project grew. The design prioritizes clarity and ease-of-use, ensuring wellness features are accessible rather than overwhelming.",
      futureImprovements: [
        'Backend integration for cross-device data sync',
        'Calendar integration for break scheduling',
        'Team wellness features for remote teams',
        'Analytics and wellness trend visualization',
        'PWA support for mobile installation',
        'Integration with wearable device APIs',
        'AI-powered personalized wellness recommendations',
      ],
    },
  },
  {
    id: 'soilosync',
    title: 'soilOsync',
    pitch: 'A smart soil monitoring platform designed to provide real-time soil insights and support technology-driven decision-making in agriculture.',
    problem:
      'Agricultural producers and researchers often lack accessible, real-time telemetry on soil temperature, moisture levels, and electrical conductivity, leading to suboptimal crop yield and inefficient resource usage.',
    solution:
      'soilOsync provides a real-time smart soil monitoring platform integrating telemetry data with interactive dashboards and predictive analytics to empower farmers and agronomists with actionable insights.',
    features: [
      'Real-time soil metrics tracking (temperature, moisture, EC)',
      'Interactive visual sensor charts & trends',
      'Smart agricultural alert system',
      'Field analytics & soil health scoring',
      'Responsive interface across mobile and desktop',
      'AI-assisted crop & soil recommendation engine',
    ],
    techStack: [
      { name: 'React', category: 'Frontend' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'Vite', category: 'Build Tool' },
      { name: 'Tailwind CSS', category: 'Styling' },
      { name: 'Radix UI', category: 'UI Primitives' },
      { name: 'Google Gemini AI', category: 'AI/ML' },
      { name: 'Lucide Icons', category: 'Icons' },
    ],
    githubUrl: 'https://github.com/mohitmundke/soilOsync',
    liveUrl: undefined,
    liveComingSoon: true,
    imageUrl: undefined,
    screenshotUrl: undefined,
    featured: false,
    tags: ['Smart Agriculture', 'IoT', 'Sustainability', 'React', 'TypeScript'],
    status: 'in-development',
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio & GenAI Assistant',
    pitch: 'A modern, high-performance portfolio platform engineered with React, TypeScript, and Tailwind CSS to showcase projects, technical competencies, and verified leadership.',
    problem:
      'Engineers and student builders need a distinctive, recruiter-friendly digital presence that conveys authentic capability, technical rigor, and leadership experience without relying on generic templates.',
    solution:
      'Designed and developed a custom dark-tech portfolio featuring responsive bento grids, interactive case studies, grounded AI conversational assistant, technical SEO, and CI/CD automated deployment.',
    features: [
      'Responsive design & adaptive glassmorphism theme',
      'Interactive Case Study architecture viewer',
      'Grounded AI assistant with instant query matching',
      'Full-screen lightbox gallery & credential showcase',
      'Technical SEO (Schema.org JSON-LD & Sitemap)',
      'Automated GitHub Actions CI/CD deployment',
    ],
    techStack: [
      { name: 'React', category: 'Frontend' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'Tailwind CSS', category: 'Styling' },
      { name: 'Motion', category: 'Animation' },
      { name: 'Lucide Icons', category: 'Icons' },
    ],
    githubUrl: 'https://github.com/mohitmundke',
    liveUrl: 'http://localhost:8000',
    liveComingSoon: false,
    featured: false,
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'UI/UX', 'Portfolio'],
    status: 'completed',
  },
];

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];
