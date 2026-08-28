import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronUp, CheckCircle, Clock, Star } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MagneticButton from '@/components/ui/MagneticButton';
import { projects } from '@/data/projects';

function ProjectScreenshot({ src, title }: { src?: string; title: string }) {
  const [imgError, setImgError] = useState(false);

  if (src && !imgError) {
    return (
      <img
        src={src}
        alt={`${title} screenshot`}
        className="w-full h-full object-cover object-top"
        onError={() => setImgError(true)}
      />
    );
  }

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-4 select-none"
      style={{ background: 'linear-gradient(160deg, #0c101a 0%, #0f1525 100%)' }}
    >
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-black"
        style={{
          background: 'linear-gradient(135deg,rgba(59,130,246,0.2),rgba(124,58,237,0.2))',
          border: '1px solid rgba(59,130,246,0.3)',
          fontFamily: 'var(--font-heading)',
          color: 'var(--accent-blue-light)',
        }}
      >
        FW
      </div>
      <div className="text-center px-6">
        <p className="font-bold mb-1" style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>FocusNext Wellness</p>
        <p className="text-xs mono" style={{ color: 'var(--text-muted)' }}>Wellness Platform for Remote Workers</p>
      </div>
      {/* Faux UI lines */}
      <div className="w-3/4 space-y-2 opacity-20">
        {[60, 80, 50, 70].map((w, i) => (
          <div key={i} className="h-2 rounded-full" style={{ width: `${w}%`, background: 'rgba(59,130,246,0.4)' }} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const featured = projects.find((p) => p.featured) ?? projects[0];

  return (
    <section id="projects" style={{ background: 'var(--bg-secondary)', padding: 'var(--section-padding) 0' }}>
      <div className="section-container">
        <SectionTitle
          label="What I Build"
          title="Projects"
          gradientWord="Projects"
          subtitle="Real software solving real problems — built with modern tools and thoughtful design."
          className="mb-14"
        />

        {/* Featured project */}
        <ScrollReveal>
          <GlassCard padding="none" style={{ overflow: 'hidden', marginBottom: '2rem' }}>
            <div className="grid grid-cols-1 lg:grid-cols-5">

              {/* Left: Info (3/5) */}
              <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs px-3 py-1 rounded-full font-medium mono"
                    style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)', color: 'var(--accent-blue-light)' }}
                  >
                    ★ Featured Project
                  </span>
                  <span
                    className="text-xs px-3 py-1 rounded-full font-medium mono"
                    style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)', color: 'var(--accent-violet-light)' }}
                  >
                    In Development
                  </span>
                </div>

                <h3
                  className="gradient-text font-black leading-tight"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
                >
                  {featured.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{featured.pitch}</p>

                {/* Features */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {featured.features.slice(0, 8).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                      <CheckCircle size={13} style={{ color: 'var(--accent-blue)', marginTop: 2, flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {featured.techStack.map((t) => (
                    <span key={t.name} className="tech-tag">{t.name}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-1">
                  <MagneticButton
                    href={featured.githubUrl}
                    target="_blank"
                    variant="primary"
                    size="md"
                  >
                    <Github size={15} className="inline mr-1.5" />
                    View on GitHub
                  </MagneticButton>

                  {/* Live demo — disabled, coming soon */}
                  <button
                    disabled
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium cursor-not-allowed"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'var(--text-muted)',
                    }}
                    aria-label="Live demo coming soon"
                    title="Live demo not yet available"
                  >
                    <Clock size={14} />
                    Live Demo Coming Soon
                  </button>
                </div>

                {/* Case study toggle */}
                <button
                  onClick={() => setCaseStudyOpen((v) => !v)}
                  className="flex items-center gap-2 text-sm font-medium transition-colors w-fit"
                  style={{ color: 'var(--accent-blue-light)' }}
                  aria-expanded={caseStudyOpen}
                >
                  {caseStudyOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  {caseStudyOpen ? 'Collapse Case Study' : 'Read Full Case Study'}
                </button>
              </div>

              {/* Right: Screenshot (2/5) */}
              <div
                className="lg:col-span-2 min-h-[280px] lg:min-h-full relative overflow-hidden"
                style={{ borderLeft: '1px solid rgba(255,255,255,0.06)' }}
              >
                <ProjectScreenshot src={featured.screenshotUrl} title={featured.title} />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to right, rgba(8,11,18,0.5) 0%, transparent 30%)' }}
                />
              </div>
            </div>

            {/* Expandable case study */}
            <AnimatePresence>
              {caseStudyOpen && featured.caseStudy && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { title: '01 Overview', content: featured.caseStudy.overview },
                      { title: '02 Problem', content: featured.caseStudy.problem },
                      { title: '03 Solution', content: featured.caseStudy.solution },
                      { title: '05 Technology', content: featured.caseStudy.technology },
                      { title: '06 Approach', content: featured.caseStudy.approach },
                    ].map((section) => (
                      <div key={section.title}>
                        <p className="text-xs mono mb-2" style={{ color: 'var(--accent-blue-light)' }}>{section.title}</p>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{section.content}</p>
                      </div>
                    ))}

                    <div>
                      <p className="text-xs mono mb-3" style={{ color: 'var(--accent-violet-light)' }}>04 Key Features</p>
                      <ul className="space-y-1">
                        {featured.caseStudy.features.slice(0, 6).map((f) => (
                          <li key={f} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                            <span style={{ color: 'var(--accent-violet)', flexShrink: 0 }}>▸</span> {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-xs mono mb-3" style={{ color: 'var(--accent-violet-light)' }}>07 Future Improvements</p>
                      <ul className="space-y-1">
                        {featured.caseStudy.futureImprovements.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                            <span style={{ color: 'var(--accent-violet)', flexShrink: 0 }}>▸</span> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </GlassCard>
        </ScrollReveal>

        {/* Secondary Projects Grid (soilOsync, Personal Portfolio) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {projects.filter((p) => !p.featured).map((p, idx) => (
            <ScrollReveal key={p.id} delay={idx * 0.1}>
              <GlassCard padding="lg" className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs px-3 py-1 rounded-full font-medium mono"
                      style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)', color: 'var(--accent-blue-light)' }}
                    >
                      Project #{idx + 2}
                    </span>
                    <span className="text-xs text-slate-400 mono">
                      {p.status === 'completed' ? 'Completed' : 'In Development'}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-2">
                    {p.title}
                  </h4>

                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                    {p.pitch}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.techStack.map((t) => (
                      <span key={t.name} className="tech-tag text-xs">{t.name}</span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Github size={14} /> View Repository
                  </a>
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
                    >
                      <ExternalLink size={13} /> Live Preview
                    </a>
                  )}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* More coming soon */}
        <ScrollReveal delay={0.1}>
          <GlassCard padding="lg">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}
                >
                  <Star size={17} style={{ color: 'var(--accent-blue-light)' }} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>More Projects in Development</p>
                    <span className="tech-tag">In Progress</span>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Currently building new projects. Follow my GitHub to stay updated.
                  </p>
                </div>
              </div>
              <MagneticButton
                href="https://github.com/mohitmundke"
                target="_blank"
                variant="secondary"
                size="sm"
              >
                <Github size={14} className="inline mr-1.5" />
                Follow on GitHub
              </MagneticButton>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
