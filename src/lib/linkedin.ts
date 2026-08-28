import type { LinkedInPost } from '@/types';
import { curatedLinkedInPosts, linkedInProfileUrl } from '@/data/linkedin-posts';

/*
 * LinkedIn Integration
 * ─────────────────────────────────────────────────────────
 * Architecture:
 *   LinkedIn → OAuth 2.0 → Backend API route → Portfolio
 *
 * LinkedIn's r_member_social permission (for reading posts)
 * requires manual approval from LinkedIn.
 *
 * Current mode: Curated fallback (API-ready)
 *
 * To enable live LinkedIn API:
 * 1. Set up backend API route at /api/linkedin/posts
 * 2. Configure environment variables (see .env.example)
 * 3. Set VITE_LINKEDIN_API_ENABLED=true
 *
 * NEVER expose LinkedIn credentials in frontend code.
 * All OAuth handling must be done server-side.
 *
 * Environment variables (backend only, never in VITE_ prefix):
 * - LINKEDIN_CLIENT_ID
 * - LINKEDIN_CLIENT_SECRET
 * - LINKEDIN_ACCESS_TOKEN
 * - LINKEDIN_PERSON_URN
 *
 * Frontend environment variable (safe to expose):
 * - VITE_LINKEDIN_API_ENABLED (true/false)
 */

const LINKEDIN_API_ENABLED = import.meta.env.VITE_LINKEDIN_API_ENABLED === 'true';

export async function fetchLinkedInPosts(): Promise<LinkedInPost[]> {
  if (!LINKEDIN_API_ENABLED) {
    // Return curated fallback posts
    return curatedLinkedInPosts;
  }

  try {
    // Call your backend API route (never the LinkedIn API directly from frontend)
    const response = await fetch('/api/linkedin/posts', {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.warn('LinkedIn API returned error, using fallback posts');
      return curatedLinkedInPosts;
    }

    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      console.warn('LinkedIn API returned non-JSON response, using curated fallback');
      return curatedLinkedInPosts;
    }

    const data = await response.json() as { posts: LinkedInPost[] };
    return data.posts ?? curatedLinkedInPosts;
  } catch (error) {
    console.warn('LinkedIn API unavailable, using curated fallback:', error);
    return curatedLinkedInPosts;
  }
}

export { linkedInProfileUrl };
