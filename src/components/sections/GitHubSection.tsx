import { Github, Star, GitFork, ExternalLink, Globe } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MagneticButton from '@/components/ui/MagneticButton';
import { useGitHubData } from '@/hooks/useGitHubData';
import { githubProfileUrl } from '@/lib/github';

const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  CSS: '#563d7c',
  HTML: '#e34c26',
  default: '#60a5fa',
};

function SkeletonCard() {
  return (
    <div
      className="rounded-2xl p-5 animate-pulse"
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div className="h-4 rounded mb-3" style={{ background: 'rgba(255,255,255,0.08)', width: '60%' }} />
      <div className="space-y-2 mb-4">
        <div className="h-2.5 rounded" style={{ background: 'rgba(255,255,255,0.05)' }} />
        <div className="h-2.5 rounded" style={{ background: 'rgba(255,255,255,0.05)', width: '75%' }} />
      </div>
      <div className="flex gap-3">
        <div className="h-2 rounded" style={{ background: 'rgba(255,255,255,0.05)', width: '20%' }} />
        <div className="h-2 rounded" style={{ background: 'rgba(255,255,255,0.05)', width: '15%' }} />
      </div>
    </div>
  );
}

export default function GitHubSection() {
  const { stats, repos, loading, usingFallback } = useGitHubData();

  const featuredRepos = repos.filter((r) => r.featured);
  const otherRepos = repos.filter((r) => !r.featured).slice(0, 4);

  return (
    <section id="github" style={{ background: 'var(--bg-primary)', padding: 'var(--section-padding) 0' }}>
      <div className="section-container">
        <SectionTitle
          label="Open Source"
          title="GitHub"
          gradientWord="GitHub"
          subtitle="My repositories and open source contributions."
          className="mb-12"
        />

        {/* Stats — only shown when not using fallback */}
        {!usingFallback && !loading && (
          <ScrollReveal className="grid grid-cols-3 gap-4 mb-10 max-w-lg mx-auto">
            {[
              { label: 'Repositories', value: stats.publicRepos },
              { label: 'Followers', value: stats.followers },
              { label: 'Following', value: stats.following },
            ].map((stat) => (
              <GlassCard key={stat.label} padding="md">
                <p className="text-2xl font-black gradient-text" style={{ fontFamily: 'var(--font-heading)' }}>
                  {stat.value}
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{stat.label}</p>
              </GlassCard>
            ))}
          </ScrollReveal>
        )}

        {/* Featured repo */}
        {featuredRepos.length > 0 && !loading && (
          <div className="mb-6">
            {featuredRepos.map((repo) => (
              <ScrollReveal key={repo.id}>
                <GlassCard
                  padding="lg"
                  glow
                  glowColor="blue"
                  style={{ border: '1px solid rgba(59,130,246,0.2)', marginBottom: '1rem' }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Github size={16} style={{ color: 'var(--accent-blue-light)' }} />
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold hover:underline"
                          style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
                        >
                          {repo.name}
                        </a>
                        <span className="text-xs px-2 py-0.5 rounded-full mono"
                          style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)', color: 'var(--accent-blue-light)' }}>
                          ★ Featured
                        </span>
                      </div>
                      <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>{repo.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-xs">
                        {repo.language && (
                          <span className="flex items-center gap-1.5">
                            <span
                              className="w-2.5 h-2.5 rounded-full"
                              style={{ background: languageColors[repo.language] ?? languageColors.default }}
                            />
                            <span style={{ color: 'var(--text-secondary)' }}>{repo.language}</span>
                          </span>
                        )}
                        <span className="flex items-center gap-1" style={{ color: 'var(--text-secondary)' }}>
                          <Star size={12} /> {repo.stars}
                        </span>
                        <span className="flex items-center gap-1" style={{ color: 'var(--text-secondary)' }}>
                          <GitFork size={12} /> {repo.forks}
                        </span>
                      </div>
                      {repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {repo.topics.map((t) => (
                            <span key={t} className="tech-tag">{t}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <MagneticButton href={repo.url} target="_blank" variant="secondary" size="sm">
                        <Github size={13} className="inline mr-1" /> GitHub
                      </MagneticButton>
                      {repo.homepage && (
                        <MagneticButton href={repo.homepage} target="_blank" variant="ghost" size="sm">
                          <Globe size={13} className="inline mr-1" /> Demo
                        </MagneticButton>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Other repos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
            : otherRepos.map((repo, i) => (
                <ScrollReveal key={repo.id} delay={i * 0.06}>
                  <GlassCard padding="md" style={{ height: '100%' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Github size={14} style={{ color: 'var(--text-muted)' }} />
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-sm hover:underline"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {repo.name}
                      </a>
                    </div>
                    <p className="text-xs mb-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {repo.description || 'No description available.'}
                    </p>
                    <div className="flex items-center gap-3 text-xs">
                      {repo.language && (
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full"
                            style={{ background: languageColors[repo.language] ?? languageColors.default }} />
                          <span style={{ color: 'var(--text-secondary)' }}>{repo.language}</span>
                        </span>
                      )}
                      <span className="flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
                        <Star size={11} /> {repo.stars}
                      </span>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              ))}
        </div>

        {/* CTA */}
        <ScrollReveal className="text-center">
          <MagneticButton href={githubProfileUrl} target="_blank" variant="primary" size="md">
            <Github size={15} className="inline mr-1.5" />
            View All on GitHub
          </MagneticButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
