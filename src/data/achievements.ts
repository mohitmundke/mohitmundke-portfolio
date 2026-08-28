import type { Achievement, ExperienceItem } from '@/types';

export const experiences: ExperienceItem[] = [
  {
    id: 'google-student-ambassador',
    role: 'Google Student Ambassador',
    organization: 'Google',
    period: '2026 – Present',
    location: 'Pune, India',
    type: 'community',
    badge: 'Bronze',
    gid: '5314',
    current: true,
    description:
      "As a Google Student Ambassador, I represent Google's mission to empower students through technology education, AI awareness, and community building. I work to bring Google's tools, AI products, and developer knowledge to my campus and local student community.",
    highlights: [
      'Community engagement and student technology outreach',
      'Promoting Gemini and Google AI products to student audiences',
      'Organizing and facilitating events, workshops, and sessions',
      'Technology education and developer skill-building initiatives',
      'Content creation for Google student programs',
      'Collaboration with fellow ambassadors and Google teams',
      'Leadership and mentoring within student communities',
      'Guiding peers toward technology learning resources',
    ],
    tags: ['Google', 'AI', 'Gemini', 'Community', 'Leadership', 'Education'],
  },
  {
    id: 'brain-community',
    role: 'Community Member',
    organization: 'BRAIN',
    period: '2025 – Present',
    location: 'Pune, India',
    type: 'community',
    current: true,
    description:
      'Active involvement in BRAIN, a student technology community focused on learning, collaboration, and building skills in AI, software development, and technology.',
    highlights: [
      'Technology community participation and collaboration',
      'Peer learning and knowledge sharing',
      'Community engagement in AI and software development topics',
    ],
    tags: ['Community', 'Technology', 'AI', 'Collaboration'],
  },
];

export const achievements: Achievement[] = [
  {
    id: 'google-student-ambassador-2026',
    title: 'Google Student Ambassador 2026',
    organization: 'Google',
    description:
      'Selected as a Google Student Ambassador for 2026, representing Google\'s programs and AI technologies within the student community. Awarded the Bronze Badge as part of the ambassador program.',
    date: '2026',
    badge: 'Bronze Badge',
    gid: '5314',
    featured: true,
    category: 'ambassador',
  },
  {
    id: 'focusnext-wellness-project',
    title: 'FocusNext Wellness Platform',
    organization: 'Personal Project',
    description:
      'Developed a full-featured wellness platform for remote workers and interns using React, TypeScript, Vite, and a modern UI stack. Demonstrates full-stack development skills and practical problem-solving.',
    category: 'project',
  },
  {
    id: 'community-leadership',
    title: 'Community Leadership — Technology Education',
    organization: 'Google / Campus',
    description:
      'Active role in organizing technology events, workshops, and community sessions to promote AI and developer education among students.',
    date: '2026',
    category: 'community',
  },
];
