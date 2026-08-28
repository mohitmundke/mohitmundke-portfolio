import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Sparkles, Code2, Brain, Users, Lightbulb, Award, Circle } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { personalInfo, aboutCards } from '@/data/portfolio';

const statusColor: Record<string, string> = {
  exploring: 'rgba(59,130,246,0.15)',
  learning: 'rgba(124,58,237,0.15)',
};
const statusTextColor: Record<string, string> = {
  exploring: '#60a5fa',
  learning: '#a78bfa',
};
const statusBorderColor: Record<string, string> = {
  exploring: 'rgba(59,130,246,0.3)',
  learning: 'rgba(124,58,237,0.3)',
};

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg-secondary)', padding: 'var(--section-padding) 0' }}>
      <div className="section-container">
        <SectionTitle
          label="Who I Am"
          title="About Me"
          gradientWord="Me"
          subtitle="CS student building real software, exploring AI, and growing the tech community."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

          {/* Bio — large card (spans 2 cols) */}
          <ScrollReveal delay={0} className="md:col-span-2 lg:col-span-2">
            <GlassCard padding="lg" style={{ height: '100%' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)' }}>
                  <Users size={18} style={{ color: 'var(--accent-blue-light)' }} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs mono" style={{ color: 'var(--accent-blue-light)' }}>
                    {personalInfo.title}
                  </p>
                </div>
              </div>
              <p className="leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                {personalInfo.bio}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="status-badge">
                  <span className="status-dot" aria-hidden="true" />
                  {personalInfo.availability}
                </span>
                <span className="flex items-center gap-1.5 text-xs py-1 px-3 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-secondary)' }}>
                  <MapPin size={11} /> {personalInfo.location}
                </span>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Education */}
          <ScrollReveal delay={0.05}>
            <GlassCard padding="md" style={{ height: '100%' }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)' }}>
                <GraduationCap size={17} style={{ color: 'var(--accent-violet-light)' }} />
              </div>
              <p className="text-xs uppercase tracking-widest mono mb-2" style={{ color: 'var(--accent-violet-light)' }}>Education</p>
              <h4 className="font-bold mb-1" style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                B.Tech CSE
              </h4>
              <p className="text-xs mb-2" style={{ color: 'var(--accent-blue-light)' }}>AI & Data Science</p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Dr. D.Y. Patil College of Engineering &amp; Innovation, Varale, Pune
              </p>
              <p className="text-xs mono mt-2" style={{ color: 'var(--text-muted)' }}>2025 – 2029</p>
            </GlassCard>
          </ScrollReveal>

          {/* Google Student Ambassador */}
          <ScrollReveal delay={0.08}>
            <GlassCard padding="md" glow glowColor="blue" style={{ height: '100%' }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.35)' }}>
                <Award size={17} style={{ color: 'var(--accent-blue-light)' }} />
              </div>
              <p className="text-xs uppercase tracking-widest mono mb-2" style={{ color: 'var(--accent-blue-light)' }}>Recognition</p>
              <h4 className="font-bold mb-1" style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                Google Student Ambassador
              </h4>
              <p className="text-xs mono mb-2" style={{ color: 'var(--text-muted)' }}>GID: 5314 · Bronze Badge</p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Representing Google on campus — promoting Gemini, AI tools, and developer education.
              </p>
            </GlassCard>
          </ScrollReveal>

          {/* Currently Exploring */}
          <ScrollReveal delay={0.1} className="lg:col-span-1">
            <GlassCard padding="md" style={{ height: '100%' }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                <Sparkles size={17} style={{ color: 'var(--accent-blue-light)' }} />
              </div>
              <p className="text-xs uppercase tracking-widest mono mb-3" style={{ color: 'var(--accent-blue-light)' }}>
                Currently Exploring
              </p>
              <div className="flex flex-wrap gap-1.5">
                {aboutCards.currentFocus.map((item) => (
                  <span
                    key={item.label}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: statusColor[item.status],
                      border: `1px solid ${statusBorderColor[item.status]}`,
                      color: statusTextColor[item.status],
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Full-Stack Development */}
          <ScrollReveal delay={0.12}>
            <GlassCard padding="md" style={{ height: '100%' }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)' }}>
                <Code2 size={17} style={{ color: 'var(--accent-violet-light)' }} />
              </div>
              <p className="text-xs uppercase tracking-widest mono mb-2" style={{ color: 'var(--accent-violet-light)' }}>Career Direction</p>
              <h4 className="font-bold mb-2" style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>Full-Stack Development</h4>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Building with React on the frontend, exploring backend development and cloud concepts. Focused on practical software engineering.
              </p>
            </GlassCard>
          </ScrollReveal>

          {/* AI / GenAI */}
          <ScrollReveal delay={0.14}>
            <GlassCard padding="md" style={{ height: '100%' }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                <Brain size={17} style={{ color: 'var(--accent-blue-light)' }} />
              </div>
              <p className="text-xs uppercase tracking-widest mono mb-2" style={{ color: 'var(--accent-blue-light)' }}>Interests</p>
              <h4 className="font-bold mb-2" style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>AI / GenAI</h4>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Exploring generative AI, machine learning foundations, and practical AI applications. Working with Gemini as part of the ambassador role.
              </p>
            </GlassCard>
          </ScrollReveal>

          {/* Community & Leadership */}
          <ScrollReveal delay={0.16}>
            <GlassCard padding="md" style={{ height: '100%' }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)' }}>
                <Users size={17} style={{ color: 'var(--accent-violet-light)' }} />
              </div>
              <p className="text-xs uppercase tracking-widest mono mb-2" style={{ color: 'var(--accent-violet-light)' }}>Leadership</p>
              <h4 className="font-bold mb-2" style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>Community Building</h4>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Google Student Ambassador driving technology education and community events. Part of the BRAIN tech community.
              </p>
            </GlassCard>
          </ScrollReveal>

          {/* Interests */}
          <ScrollReveal delay={0.18}>
            <GlassCard padding="md" style={{ height: '100%' }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.18)' }}>
                <Lightbulb size={17} style={{ color: 'var(--accent-blue-light)' }} />
              </div>
              <p className="text-xs uppercase tracking-widest mono mb-3" style={{ color: 'var(--accent-blue-light)' }}>Interests</p>
              <ul className="flex flex-col gap-1.5">
                {aboutCards.interests.map((interest) => (
                  <li key={interest} className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                    <Circle size={4} fill="currentColor" style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
                    {interest}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
