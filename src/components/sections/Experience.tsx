import { motion } from 'framer-motion';
import { Award, Users, Briefcase, MapPin, ExternalLink } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { experiences } from '@/data/achievements';

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg-primary)', padding: 'var(--section-padding) 0' }}>
      <div className="section-container">
        <SectionTitle
          label="My Journey"
          title="Experience"
          gradientWord="Experience"
          subtitle="Community leadership, technology advocacy, and hands-on development."
          className="mb-14"
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, rgba(59,130,246,0.5), rgba(124,58,237,0.3), transparent)' }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <ScrollReveal key={exp.id} delay={i * 0.08}>
                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0 mt-1.5">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center z-10 relative"
                      style={{
                        background: exp.current
                          ? 'linear-gradient(135deg,rgba(59,130,246,0.25),rgba(124,58,237,0.25))'
                          : 'rgba(255,255,255,0.06)',
                        border: exp.current ? '2px solid rgba(59,130,246,0.5)' : '2px solid rgba(255,255,255,0.1)',
                        boxShadow: exp.current ? '0 0 16px rgba(59,130,246,0.25)' : undefined,
                      }}
                    >
                      {exp.type === 'community' ? (
                        <Users size={18} style={{ color: exp.current ? 'var(--accent-blue-light)' : 'var(--text-muted)' }} />
                      ) : (
                        <Briefcase size={18} style={{ color: 'var(--text-muted)' }} />
                      )}
                    </div>
                    {exp.current && (
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ border: '2px solid rgba(59,130,246,0.35)' }}
                        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>

                  {/* Card */}
                  <GlassCard
                    padding="lg"
                    style={{
                      flex: 1,
                      borderColor: exp.current ? 'rgba(59,130,246,0.2)' : undefined,
                      boxShadow: exp.current ? '0 0 24px rgba(59,130,246,0.08)' : undefined,
                    }}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3
                            className="font-bold text-lg leading-tight"
                            style={{
                              fontFamily: 'var(--font-heading)',
                              color: exp.current ? 'var(--text-primary)' : 'var(--text-primary)',
                            }}
                          >
                            {exp.current ? (
                              <span className="gradient-text">{exp.role}</span>
                            ) : (
                              exp.role
                            )}
                          </h3>
                          {exp.current && (
                            <span className="status-badge text-xs py-0.5">
                              <span className="status-dot" aria-hidden="true" />
                              Current
                            </span>
                          )}
                          {exp.badge && (
                            <span
                              className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                              style={{
                                background: 'rgba(251,191,36,0.12)',
                                border: '1px solid rgba(251,191,36,0.3)',
                                color: '#fbbf24',
                              }}
                            >
                              {exp.badge}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                          <span className="font-semibold" style={{ color: 'var(--accent-blue-light)' }}>
                            {exp.organization}
                          </span>
                          {exp.gid && (
                            <span className="mono text-xs" style={{ color: 'var(--text-muted)' }}>
                              GID: {exp.gid}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-sm font-medium mono" style={{ color: 'var(--text-secondary)' }}>
                          {exp.period}
                        </p>
                        {exp.location && (
                          <p className="text-xs flex items-center gap-1 mt-0.5" style={{ color: 'var(--text-muted)' }}>
                            <MapPin size={10} /> {exp.location}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
                      {exp.highlights.slice(0, 6).map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                          <span style={{ color: 'var(--accent-blue)', marginTop: 3, flexShrink: 0 }}>▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="tech-tag">{tag}</span>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
