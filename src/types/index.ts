/* ============================================================
   Portfolio TypeScript Types
   ============================================================ */

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone?: string;
  bio: string;
  availability: string;
  languages?: string[];
  social: {
    linkedin: string;
    github: string;
    instagram: string;
    whatsapp?: string;
  };
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon?: string;
  level?: 'exploring' | 'learning' | 'working' | 'proficient';
  label?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  orgIcon?: string;
  period: string;
  location?: string;
  type: 'work' | 'community' | 'volunteer' | 'education';
  badge?: string;
  gid?: string;
  description: string;
  highlights: string[];
  tags: string[];
  current?: boolean;
}

export interface Project {
  id: string;
  title: string;
  pitch: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: TechItem[];
  githubUrl: string;
  liveUrl?: string;
  liveComingSoon?: boolean;
  imageUrl?: string;
  screenshotUrl?: string;
  featured: boolean;
  caseStudy?: CaseStudy;
  tags: string[];
  status: 'live' | 'in-development' | 'coming-soon';
}

export interface TechItem {
  name: string;
  category?: string;
}

export interface CaseStudy {
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  technology: string;
  approach: string;
  futureImprovements: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
  date?: string;
  badge?: string;
  gid?: string;
  featured?: boolean;
  category: 'ambassador' | 'academic' | 'community' | 'certification' | 'project' | 'recognition';
  link?: string;
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  current: boolean;
  description?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  credentialUrl?: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  placeholderIcon?: string;
  category: 'ambassador' | 'event' | 'project' | 'certificate' | 'community' | 'professional';
  featured?: boolean;
  date?: string;
}

export interface LinkedInPost {
  id: string;
  text: string;
  date: string;
  imageUrl?: string;
  url: string;
  likes?: number;
}

export interface GitHubRepo {
  id: string;
  name: string;
  fullName: string;
  description: string;
  url: string;
  homepage?: string;
  stars: number;
  forks: number;
  language?: string;
  topics: string[];
  updatedAt: string;
  featured?: boolean;
}

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars?: number;
}

export interface ContactOpportunity {
  label: string;
  priority: 'primary' | 'secondary';
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}
