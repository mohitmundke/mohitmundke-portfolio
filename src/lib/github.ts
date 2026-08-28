import type { GitHubRepo, GitHubStats } from '@/types';

/*
 * GitHub API Client
 * ─────────────────────────────────────────────────────────
 * Uses GitHub's public REST API (unauthenticated) for:
 * - User profile stats
 * - Public repositories
 *
 * For higher rate limits, add a GitHub personal access token
 * via environment variable: VITE_GITHUB_TOKEN
 *
 * GitHub API rate limits:
 * - Unauthenticated: 60 requests/hour
 * - Authenticated: 5000 requests/hour
 */

const GITHUB_USERNAME = 'mohitmundke';
const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN as string | undefined;

function getHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: 'application/vnd.github.v3+json',
  };
  if (GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${GITHUB_TOKEN}`;
  }
  return headers;
}

async function githubFetch<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${GITHUB_API_BASE}${endpoint}`, {
    headers: getHeaders(),
    next: { revalidate: 3600 }, // Cache for 1 hour (if using Next.js)
  } as RequestInit);

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
  }

  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    throw new Error(`GitHub API returned non-JSON response (${contentType})`);
  }

  return response.json() as Promise<T>;
}

interface GitHubUserResponse {
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
}

interface GitHubRepoResponse {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  fork: boolean;
  private: boolean;
}

export async function fetchGitHubStats(): Promise<GitHubStats> {
  const user = await githubFetch<GitHubUserResponse>(`/users/${GITHUB_USERNAME}`);
  return {
    publicRepos: user.public_repos,
    followers: user.followers,
    following: user.following,
  };
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const repos = await githubFetch<GitHubRepoResponse[]>(
    `/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=20&type=owner`
  );

  return repos
    .filter((repo) => !repo.fork && !repo.private)
    .map((repo) => ({
      id: String(repo.id),
      name: repo.name,
      fullName: repo.full_name,
      description: repo.description ?? '',
      url: repo.html_url,
      homepage: repo.homepage ?? undefined,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language ?? undefined,
      topics: repo.topics ?? [],
      updatedAt: repo.updated_at,
      featured: repo.name.toLowerCase().includes('focusnext'),
    }));
}

/* Fallback data when API is unavailable */
export const githubFallback = {
  stats: {
    publicRepos: 0,
    followers: 0,
    following: 0,
  } satisfies GitHubStats,
  repos: [
    {
      id: 'focusnext-wellness',
      name: 'FocusNext-Wellness',
      fullName: `${GITHUB_USERNAME}/FocusNext-Wellness`,
      description: 'A wellness platform designed for remote workers and interns to maintain healthier, more productive work routines.',
      url: 'https://github.com/mohitmundke/FocusNext-Wellness',
      homepage: undefined,
      stars: 0,
      forks: 0,
      language: 'TypeScript',
      topics: ['react', 'typescript', 'wellness', 'tailwindcss', 'vite'],
      updatedAt: '2026-01-01T00:00:00Z',
      featured: true,
    },
  ] satisfies GitHubRepo[],
};

export const githubProfileUrl = `https://github.com/${GITHUB_USERNAME}`;
