import { motion } from 'framer-motion';
import { Trophy, Award, Users, Code2, Star } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { achievements } from '@/data/achievements';

const categoryIcons: Record<string, React.ElementType> = {
  ambassador: Award,
  community: Users,
  project: Code2,
  certification: Star,
  academic: Trophy,
  recognition: Star,
};

export default function Achievements() {
  const featured = achievements.find((a) => a.featured);
  const rest = achievements.filter((a) => !a.featured);

  return (
    <section id="achievements" style={{ background: 'var(--bg-secondary)', padding: 'var(--section-padding) 0' }}>
      <div className="section-container">
        <SectionTitle
          label="Recognition"
          title="Achievements"
          gradientWord="Achievements"
          subtitle="Highlights from my journey in technology, community, and development."
          className="mb-14"
        />

        {/* Featured achievement */}
        {featured && (
          <ScrollReveal className="mb-8">
            <GlassCard
              padding="lg"
              glow
              glowColor="mixed"
              style={{
                background: 'linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(124,58,237,0.06) 100%)',
                border: '1px solid rgba(59,130,246,0.2)',
              }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg,rgba(251,191,36,0.15),rgba(251,191,36,0.08))',
                      border: '2px solid rgba(251,191,36,0.3)',
                      boxShadow: '0 0 24px rgba(251,191,36,0.12)',
                    }}
                  >
                    <Trophy size={36} style={{ color: '#fbbf24' }} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-full mono"
                      style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)', color: 'var(--accent-blue-light)' }}>
                      Google
                    </span>
                    {featured.badge && (
                      <span className="text-xs px-2.5 py-0.5 rounded-full mono"
                        style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.25)', color: '#fbbf24' }}>
                        {featured.badge}
                      </span>
                    )}
                    {featured.date && (
                      <span className="text-xs mono" style={{ color: 'var(--text-muted)' }}>{featured.date}</span>
                    )}
                  </div>

                  <h3
                    className="gradient-text font-black mb-2"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
                  >
                    {featured.title}
                  </h3>

                  {featured.gid && (
                    <p className="text-sm mono mb-3" style={{ color: 'var(--text-muted)' }}>
                      Ambassador ID: {featured.gid}
                    </p>
                  )}

                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {featured.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        )}

        {/* Other achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((achievement, i) => {
            const Icon = categoryIcons[achievement.category] ?? Star;
            return (
              <ScrollReveal key={achievement.id} delay={i * 0.07}>
                <GlassCard padding="md" style={{ height: '100%' }}>
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}
                    >
                      <Icon size={16} style={{ color: 'var(--accent-blue-light)' }} />
                    </div>
                    <div>
                      <p className="text-xs mono" style={{ color: 'var(--text-muted)' }}>
                        {achievement.organization}
                      </p>
                      {achievement.date && (
                        <p className="text-xs mono" style={{ color: 'var(--text-muted)' }}>{achievement.date}</p>
                      )}
                    </div>
                  </div>
                  <h4 className="font-bold mb-2" style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                    {achievement.title}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {achievement.description}
                  </p>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
