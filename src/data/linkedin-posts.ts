import type { LinkedInPost } from '@/types';

/*
 * LINKEDIN CURATED FALLBACK POSTS
 * ─────────────────────────────────────────────────────────
 * These are manually curated posts displayed when the LinkedIn
 * API is not yet connected. Update these with actual post details.
 *
 * When official LinkedIn API access is enabled:
 * 1. Set VITE_LINKEDIN_API_ENABLED=true in .env
 * 2. Configure backend with LINKEDIN_ACCESS_TOKEN
 * 3. The LinkedInUpdates component will switch to live data
 *
 * To add a real post: copy the post URL from LinkedIn and
 * add the text/date/url below.
 */
export const curatedLinkedInPosts: LinkedInPost[] = [
  {
    id: 'post-ambassador-2026',
    text: "Thrilled to share that I've been selected as a Google Student Ambassador for 2026! 🎉 Excited to represent Google, promote AI and Gemini technologies, and help build the technology community at my campus. #GoogleStudentAmbassador #Google #AI #Gemini #StudentLeadership",
    date: '2026',
    url: 'https://www.linkedin.com/in/mohit-mundke-239439352',
    imageUrl: undefined,
  },
  {
    id: 'post-focusnext',
    text: "Just shipped FocusNext Wellness — a wellness platform I built for remote workers and interns! 🚀 Designed to help maintain healthy work routines with break timers, posture reminders, and activity tracking. Built with React, TypeScript, and Tailwind CSS. #WebDev #React #TypeScript #OpenToWork",
    date: '2026',
    url: 'https://www.linkedin.com/in/mohit-mundke-239439352',
    imageUrl: undefined,
  },
  {
    id: 'post-community',
    text: "Grateful for the opportunity to connect with fellow students and tech enthusiasts through community events and workshops. Technology is better when shared! 💡 #Community #Technology #Learning #StudentLife",
    date: '2026',
    url: 'https://www.linkedin.com/in/mohit-mundke-239439352',
    imageUrl: undefined,
  },
];

/*
 * LinkedIn Profile URL
 * Used for the "View Profile" and "View on LinkedIn" buttons
 */
export const linkedInProfileUrl = 'https://www.linkedin.com/in/mohit-mundke-239439352';
