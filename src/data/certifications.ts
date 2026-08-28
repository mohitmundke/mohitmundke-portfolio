import type { Education, Certification } from '@/types';

export const education: Education[] = [
  {
    id: 'btech-csai',
    degree: 'B.Tech in Computer Science Engineering',
    field: 'Artificial Intelligence and Data Science',
    institution: 'Dr. D. Y. Patil College of Engineering and Innovation',
    period: '2025 – 2029',
    location: 'Varale, Pune, Maharashtra',
    current: true,
    description:
      'Pursuing a four-year undergraduate program specializing in AI and Data Science. Coursework covers programming, data structures, algorithms, machine learning foundations, and software engineering principles.',
  },
];

/*
 * CERTIFICATIONS
 * ─────────────────────────────────────────────────────────
 * Only verified certifications are listed here.
 * To add more, add entries to this array.
 * Each entry should include: title, issuer, date (if available),
 * credentialId (if available), and credentialUrl (if available).
 */
export const certifications: Certification[] = [
  {
    id: 'google-student-ambassador-cert',
    title: 'Google Student Ambassador 2026',
    issuer: 'Google',
    date: '2026',
    verified: true,
    credentialId: 'GID-5314 (Bronze Badge)',
  },
  {
    id: 'google-cybersecurity-cert',
    title: 'Google Cybersecurity Certificate',
    issuer: 'Google',
    date: '2026',
    verified: true,
  },
  {
    id: 'google-data-analytics-cert',
    title: 'Google Data Analytics Certificate',
    issuer: 'Google',
    date: '2026',
    verified: true,
  },
];
