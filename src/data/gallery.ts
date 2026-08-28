import type { GalleryItem } from '@/types';

/*
 * GALLERY DATA
 * ─────────────────────────────────────────────────────────
 * Add real image paths as imageUrl when photos are available.
 * Keep imageUrl as undefined to show elegant placeholder cards.
 *
 * To add a photo: place it in portfolio/public/images/gallery/
 * Then set imageUrl: '/images/gallery/your-photo.jpg'
 */
export const galleryItems: GalleryItem[] = [
  {
    id: 'pixel-war-2k26',
    title: 'Pixel War 2k26 — UI/UX Design Battle',
    description: '1st Runner Up in the prestigious university UI/UX design and prototyping battle at DYPCOEI Pune.',
    imageUrl: '/images/pixel-war-2k26.jpg',
    placeholderIcon: 'award',
    category: 'certificate',
    featured: true,
    date: '2026',
  },
  {
    id: 'aws-ml-ai-certificate',
    title: 'Fundamentals of ML and AI',
    description: 'Official AWS Training & Certification validating machine learning algorithms and cloud AI fundamentals.',
    imageUrl: '/images/aws-ml-ai-certificate.jpg',
    placeholderIcon: 'award',
    category: 'certificate',
    featured: true,
    date: '2026',
  },
  {
    id: 'nptel-python-data-science',
    title: 'Python for Data Science — NPTEL',
    description: 'Elite Certification from NPTEL & IIT Madras in Python, Pandas, NumPy, and statistical modeling.',
    imageUrl: '/images/nptel-python-data-science.jpg',
    placeholderIcon: 'award',
    category: 'certificate',
    featured: true,
    date: '2026',
  },
  {
    id: 'imarticus-c-cpp-certificate',
    title: 'C & C++ Programming Specialization',
    description: 'Imarticus Learning Verified Grade A certification in data structures, algorithms, and systems programming.',
    imageUrl: '/images/imarticus-c-cpp-certificate.jpg',
    placeholderIcon: 'award',
    category: 'certificate',
    featured: false,
    date: '2026',
  },
  {
    id: 'google-gemini-ambassador-2026',
    title: 'Google Gemini AI Student Ambassador 2026',
    description: 'Campus Ambassador (GID: 5314) representing Google AI, Gemini, and developer student communities.',
    imageUrl: '/images/google-gemini-ambassador-2026.jpg',
    placeholderIcon: 'star',
    category: 'ambassador',
    featured: true,
    date: '2026',
  },
  {
    id: 'brain-certificate-membership',
    title: 'BRAIN Foundation Academic Membership',
    description: 'Recognized academic member of BRAIN Foundation for AI and robotics research initiatives.',
    imageUrl: '/images/brain-certificate-membership.jpg',
    placeholderIcon: 'award',
    category: 'community',
    featured: false,
    date: '2026',
  },
  {
    id: 'thiranex-internship-offer-letter',
    title: 'Full Stack Developer Internship — Thiranex',
    description: 'Official Internship Offer for project-based full-stack software development.',
    imageUrl: '/images/thiranex-internship-offer-letter.jpg',
    placeholderIcon: 'star',
    category: 'professional',
    featured: true,
    date: '2026',
  },
  {
    id: 'gsa-august-2026-highlights',
    title: 'August 2026 Highlights — Fund My Crazy',
    description: 'Spearheading campus-wide AI workshops, Fund My Crazy initiative, and student leadership milestones.',
    imageUrl: '/images/gsa-august-2026-highlights.jpg',
    placeholderIcon: 'users',
    category: 'ambassador',
    featured: true,
    date: '2026',
  },
  {
    id: 'gsa-june-2026-insights',
    title: 'GSA Bronze Badge Milestone',
    description: 'Celebrated Bronze Badge leadership milestone in Google Student Ambassador program.',
    imageUrl: '/images/gsa-june-2026-insights.jpg',
    placeholderIcon: 'star',
    category: 'ambassador',
    featured: false,
    date: '2026',
  },
  {
    id: 'google-meet-team-collaboration',
    title: 'Team Collaboration & Learning Session',
    description: 'Interactive Google Meet session with student developer ambassadors across India.',
    imageUrl: '/images/google-meet-team-collaboration.jpg',
    placeholderIcon: 'users',
    category: 'event',
    featured: false,
    date: '2026',
  },
  {
    id: 'product-presentation-discussion',
    title: 'Product Presentation & Technical Discussion',
    description: 'Interactive product demo, architecture review, and live feature walkthrough.',
    imageUrl: '/images/product-presentation-discussion.jpg',
    placeholderIcon: 'presentation',
    category: 'event',
    featured: false,
    date: '2026',
  },
  {
    id: 'nano-banana-tutorial-session',
    title: 'Hands-On Developer Tutorial Workshop',
    description: 'Live interactive coding tutorial demonstrating developer workflow and AI integration.',
    imageUrl: '/images/nano-banana-tutorial-session.jpg',
    placeholderIcon: 'globe',
    category: 'event',
    featured: false,
    date: '2026',
  },
];

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'ambassador', label: 'Ambassador' },
  { id: 'event', label: 'Events' },
  { id: 'project', label: 'Projects' },
  { id: 'certificate', label: 'Certificates' },
  { id: 'community', label: 'Community' },
  { id: 'professional', label: 'Professional' },
] as const;
