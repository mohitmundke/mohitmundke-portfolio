import { Linkedin, ExternalLink, Clock } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MagneticButton from '@/components/ui/MagneticButton';
import { useLinkedInData } from '@/hooks/useLinkedInData';
import { linkedInProfileUrl } from '@/data/linkedin-posts';
import { truncate } from '@/lib/utils';

function SkeletonCard() {
  return (
    <div
      className="rounded-2xl p-5 animate-pulse"
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div className="h-3 rounded-full mb-3" style={{ background: 'rgba(255,255,255,0.08)', width: '40%' }} />
      <div className="space-y-2 mb-4">
        <div className="h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }} />
        <div className="h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)', width: '85%' }} />
        <div className="h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)', width: '70%' }} />
      </div>
      <div className="h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.05)', width: '30%' }} />
    </div>
  );
}

export default function LinkedInUpdates() {
  const { posts, loading, usingFallback } = useLinkedInData();

  return (
    <section id="linkedin" style={{ background: 'var(--bg-secondary)', padding: 'var(--section-padding) 0' }}>
      <div className="section-container">
        <SectionTitle
          label="Stay Connected"
          title="LinkedIn Updates"
          gradientWord="LinkedIn"
          subtitle="Stay up to date with my latest thoughts, projects, and community activities."
          className="mb-12"
        />

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
            : posts.slice(0, 3).map((post, i) => (
                <ScrollReveal key={post.id} delay={i * 0.07}>
                  <GlassCard padding="md" style={{ height: '100%' }}>
                    {/* LinkedIn icon */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center"
                          style={{ background: '#0a66c2', flexShrink: 0 }}
                        >
                          <Linkedin size={14} color="white" />
                        </div>
                        <span className="text-xs mono" style={{ color: 'var(--text-muted)' }}>
                          {post.date}
                        </span>
                      </div>
                    </div>

                    {/* Post text */}
                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {truncate(post.text, 200)}
                    </p>

                    {/* View link */}
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium transition-colors"
                      style={{ color: 'var(--accent-blue-light)' }}
                      aria-label="View post on LinkedIn"
                    >
                      <ExternalLink size={11} /> View on LinkedIn
                    </a>
                  </GlassCard>
                </ScrollReveal>
              ))}
        </div>

        {/* Fallback notice */}
        {usingFallback && !loading && (
          <ScrollReveal className="text-center mb-8">
            <p className="text-xs mono" style={{ color: 'var(--text-muted)' }}>
              Showing curated updates · Connect LinkedIn API for live posts
            </p>
          </ScrollReveal>
        )}

        {/* CTA */}
        <ScrollReveal className="text-center">
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Connect with me on LinkedIn for more updates and insights.
            </p>
            <MagneticButton href={linkedInProfileUrl} target="_blank" variant="primary" size="md">
              <Linkedin size={15} className="inline mr-1.5" />
              View Full LinkedIn Profile
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
