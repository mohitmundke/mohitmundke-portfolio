import { useState, useEffect } from 'react';
import type { LinkedInPost } from '@/types';
import { fetchLinkedInPosts } from '@/lib/linkedin';
import { curatedLinkedInPosts } from '@/data/linkedin-posts';

interface LinkedInData {
  posts: LinkedInPost[];
  loading: boolean;
  error: string | null;
  usingFallback: boolean;
  lastUpdated: Date | null;
}

export function useLinkedInData(): LinkedInData {
  const [data, setData] = useState<LinkedInData>({
    posts: [],
    loading: true,
    error: null,
    usingFallback: false,
    lastUpdated: null,
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const posts = await fetchLinkedInPosts();
        const isFallback = posts === curatedLinkedInPosts;

        if (!cancelled) {
          setData({
            posts,
            loading: false,
            error: null,
            usingFallback: isFallback,
            lastUpdated: new Date(),
          });
        }
      } catch (err) {
        if (!cancelled) {
          setData({
            posts: curatedLinkedInPosts,
            loading: false,
            error: 'Unable to load LinkedIn posts',
            usingFallback: true,
            lastUpdated: null,
          });
        }
        console.warn('LinkedIn data error:', err);
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);

  return data;
}
