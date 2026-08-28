import { useState, useEffect } from 'react';
import type { GitHubRepo, GitHubStats } from '@/types';
import { fetchGitHubStats, fetchGitHubRepos, githubFallback } from '@/lib/github';

interface GitHubData {
  stats: GitHubStats;
  repos: GitHubRepo[];
  loading: boolean;
  error: string | null;
  usingFallback: boolean;
}

export function useGitHubData(): GitHubData {
  const [data, setData] = useState<GitHubData>({
    stats: githubFallback.stats,
    repos: githubFallback.repos,
    loading: true,
    error: null,
    usingFallback: false,
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [stats, repos] = await Promise.all([
          fetchGitHubStats(),
          fetchGitHubRepos(),
        ]);

        if (!cancelled) {
          setData({ stats, repos, loading: false, error: null, usingFallback: false });
        }
      } catch (err) {
        console.warn('GitHub API error, using fallback data:', err);
        if (!cancelled) {
          setData({
            stats: githubFallback.stats,
            repos: githubFallback.repos,
            loading: false,
            error: null,
            usingFallback: true,
          });
        }
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);

  return data;
}
