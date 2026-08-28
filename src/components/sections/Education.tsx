import { GraduationCap, Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { education, certifications } from '@/data/certifications';

export default function Education() {
  return (
    <section id="education" style={{ background: 'var(--bg-primary)', padding: 'var(--section-padding) 0' }}>
      <div className="section-container">
        <SectionTitle
          label="Academic Background"
          title="Education"
          gradientWord="Education"
          subtitle="Building a strong foundation in Computer Science, AI, and software engineering."
          className="mb-14"
        />

        {/* Education */}
        <div className="max-w-3xl mx-auto mb-14">
          {education.map((edu) => (
            <ScrollReveal key={edu.id}>
              <GlassCard
                padding="lg"
                glow
                glowColor="blue"
                style={{
                  border: '1px solid rgba(59,130,246,0.2)',
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(124,58,237,0.03) 100%)',
                }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(59,130,246,0.12)',
                      border: '2px solid rgba(59,130,246,0.3)',
                      boxShadow: '0 0 20px rgba(59,130,246,0.15)',
                    }}
                  >
                    <GraduationCap size={28} style={{ color: 'var(--accent-blue-light)' }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className="text-xs px-3 py-1 rounded-full font-semibold"
                        style={{
                          background: 'rgba(34,197,94,0.12)',
                          border: '1px solid rgba(34,197,94,0.3)',
                          color: '#4ade80',
                        }}
                      >
                        ● Currently Enrolled
                      </span>
                      <span className="text-xs mono" style={{ color: 'var(--text-muted)' }}>{edu.period}</span>
                    </div>

                    <h3 className="font-black mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', fontSize: '1.3rem' }}>
                      {edu.degree}
                    </h3>

                    <p
                      className="text-sm px-3 py-1 rounded-full inline-block mb-3 font-semibold"
                      style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)', color: 'var(--accent-violet-light)' }}
                    >
                      {edu.field}
                    </p>

                    <p className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                      {edu.institution}
                    </p>
                    <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {edu.location}
                    </p>

                    {edu.description && (
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
              <p className="font-bold text-lg" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                Certifications &amp; Credentials
              </p>
              <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert.id} delay={i * 0.06}>
                <GlassCard padding="md" style={{ height: '100%' }}>
                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.25)' }}
                    >
                      <Award size={16} style={{ color: '#fbbf24' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm mb-0.5 leading-tight" style={{ color: 'var(--text-primary)' }}>
                        {cert.title}
                      </p>
                      <p className="text-xs mb-1" style={{ color: 'var(--accent-blue-light)' }}>
                        {cert.issuer}
                      </p>
                      <div className="flex flex-wrap items-center gap-2">
                        {cert.date && (
                          <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                            <Calendar size={10} /> {cert.date}
                          </span>
                        )}
                        {cert.credentialId && (
                          <span className="text-xs mono" style={{ color: 'var(--text-muted)' }}>
                            ID: {cert.credentialId}
                          </span>
                        )}
                        {cert.verified && (
                          <span className="flex items-center gap-1 text-xs" style={{ color: '#4ade80' }}>
                            <CheckCircle size={10} /> Verified
                          </span>
                        )}
                      </div>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs mt-2 transition-colors"
                          style={{ color: 'var(--accent-blue-light)' }}
                        >
                          <ExternalLink size={10} /> View Credential
                        </a>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}

            {/* Placeholder card */}
            <ScrollReveal delay={certifications.length * 0.06}>
              <div
                className="rounded-2xl p-5 flex items-center gap-3"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px dashed rgba(255,255,255,0.1)',
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px dashed rgba(255,255,255,0.15)' }}
                >
                  <span style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>+</span>
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>More certifications</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)', opacity: 0.6 }}>
                    Edit <span className="mono">src/data/certifications.ts</span>
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
