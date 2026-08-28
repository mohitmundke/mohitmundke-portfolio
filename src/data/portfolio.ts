import type { PersonalInfo, SkillCategory, ContactOpportunity, NavItem } from '@/types';

/* ─── Personal Information ───────────────────────────────── */
export const personalInfo: PersonalInfo = {
  name: 'Mohit Mundke',
  firstName: 'Mohit',
  lastName: 'Mundke',
  title: 'AI & Data Science Student | Google Student Ambassador | Aspiring Software Engineer',
  tagline: 'Exploring AI, building software, creating impact.',
  location: 'Pune, India',
  email: 'mohitmundke20@gmail.com',
  phone: '+91 9767969701',
  bio: 'Motivated Artificial Intelligence & Data Science student with hands-on experience in full-stack development, AI-focused student initiatives, UI/UX, and software projects. Google Student Ambassador with experience in community engagement, event execution, technical communication, and promoting emerging AI tools. Strong interest in building practical, user-focused technology products.',
  availability: 'Open to opportunities',
  languages: ['English', 'Hindi', 'Marathi'],
  social: {
    linkedin: 'https://www.linkedin.com/in/mohit-mundke-239439352',
    github: 'https://github.com/mohitmundke',
    instagram: 'https://www.instagram.com/w3b.m0hit',
  },
};

/* ─── About Cards Data ───────────────────────────────────── */
export const aboutCards = {
  currentFocus: [
    { label: 'Python', status: 'exploring' as const },
    { label: 'Full-Stack Development', status: 'exploring' as const },
    { label: 'Advanced React', status: 'learning' as const },
    { label: 'Backend Development', status: 'learning' as const },
    { label: 'AI / Generative AI', status: 'exploring' as const },
    { label: 'Machine Learning', status: 'exploring' as const },
    { label: 'Data Technologies', status: 'exploring' as const },
    { label: 'Cloud Concepts', status: 'exploring' as const },
  ],
  interests: [
    'Generative AI & LLMs',
    'Full-Stack Web Development',
    'Open Source',
    'Technology Communities',
    'Developer Education',
    'Software Engineering',
  ],
};

/* ─── Skills ─────────────────────────────────────────────── */
export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    label: 'Programming Languages',
    icon: 'code',
    skills: [
      { name: 'C', icon: 'terminal', label: 'Systems' },
      { name: 'C++', icon: 'cpu', label: 'Systems' },
      { name: 'Python', icon: 'python', label: 'AI / Scripting' },
      { name: 'JavaScript', icon: 'js', label: 'Web' },
      { name: 'HTML', icon: 'html', label: 'Web' },
      { name: 'CSS', icon: 'css', label: 'Web' },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Development',
    icon: 'layers',
    skills: [
      { name: 'React', icon: 'react', label: 'Frontend' },
      { name: 'Node.js', icon: 'node', label: 'Backend' },
      { name: 'Flask', icon: 'flask', label: 'Backend' },
    ],
  },
  {
    id: 'ai-data',
    label: 'AI & Data',
    icon: 'brain',
    skills: [
      { name: 'Machine Learning', icon: 'ml', label: 'AI' },
      { name: 'Generative AI', icon: 'sparkles', label: 'AI' },
      { name: 'Pandas', icon: 'table', label: 'Data' },
      { name: 'NumPy', icon: 'array', label: 'Data' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    icon: 'tool',
    skills: [
      { name: 'Git', icon: 'git', label: 'Version Control' },
      { name: 'GitHub', icon: 'github', label: 'Collaboration' },
      { name: 'VS Code', icon: 'vscode', label: 'IDE' },
      { name: 'Figma', icon: 'figma', label: 'Design' },
      { name: 'Antigravity', icon: 'agy', label: 'AI Coding' },
      { name: 'Gemini', icon: 'gemini', label: 'AI' },
    ],
  },
];

/* ─── Navigation ─────────────────────────────────────────── */
export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'achievements', label: 'Achievements', href: '#achievements' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'community', label: 'Community', href: '#community' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

/* ─── Contact Opportunities ──────────────────────────────── */
export const contactOpportunities: ContactOpportunity[] = [
  { label: 'Full-Stack Development Internships', priority: 'primary' },
  { label: 'Software Engineering Internships', priority: 'primary' },
  { label: 'AI / Machine Learning Internships', priority: 'secondary' },
  { label: 'Data Science / Data Analytics Internships', priority: 'secondary' },
  { label: 'Web Development Internships', priority: 'secondary' },
  { label: 'Freelance / Project Collaborations', priority: 'secondary' },
  { label: 'Technology Communities', priority: 'secondary' },
  { label: 'Learning Opportunities', priority: 'secondary' },
];

/* ─── Ask Mohit — Portfolio Knowledge Base ───────────────── */
export const portfolioKnowledge = {
  name: 'Mohit Mundke',
  role: 'AI & Data Science Student, Google Student Ambassador, Aspiring Full-Stack Software Engineer',
  education: 'B.Tech in Computer Science Engineering (AI & Data Science) at Dr. D. Y. Patil College of Engineering and Innovation, Varale, Pune (2025–2029).',
  experience: 'Google Student Ambassador (2026, GID: 5314, Bronze Badge) representing Google Gemini in AI initiatives, Fund My Crazy, and Career Glow-up Night. Full Stack Development Intern at Thiranex working on practical frontend and backend development, debugging, and UI engineering.',
  skills: 'Programming: Python, C, C++. Web: HTML/CSS, JavaScript, Full-Stack Development, React, Node.js, Flask. AI & Data: Artificial Intelligence, Data Science, Generative AI, Machine Learning, Pandas, NumPy. Tools: Git & GitHub, Figma, Google Gemini, VS Code. Languages: English, Hindi, Marathi.',
  certifications: 'Google Cybersecurity Certificate, Google Data Analytics Certificate, Google Student Ambassador 2026, AWS ML & AI, NPTEL Python for Data Science.',
  projects: 'Wellness Healthcare / FocusNext (Remote Worker Wellness Platform), soilOsync (Smart Soil Monitoring Platform), Personal Portfolio & GenAI Assistant.',
  achievements: 'Google Student Ambassador 2026 (GID: 5314, Bronze Badge), Pixel War 2k26 1st Runner Up, Active contributor to college technical and student-community initiatives.',
  contact: 'Phone: +91 9767969701, Email: mohitmundke20@gmail.com, LinkedIn: https://www.linkedin.com/in/mohit-mundke-239439352, GitHub: https://github.com/mohitmundke, Instagram: https://www.instagram.com/w3b.m0hit.',
  location: 'Pune, India',
  opportunities: 'Actively seeking AI / ML Internships, Full-Stack Development Internships, Software Engineering Internships, and Data Science opportunities.',
};
