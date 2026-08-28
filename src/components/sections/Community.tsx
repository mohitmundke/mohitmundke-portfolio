import { Users, Award, BookOpen, Mic, Lightbulb, Share2 } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

const focusAreas = [
  {
    icon: Award,
    color: { bg: 'rgba(59,130,246,0.12)', border: 'rgba(59,130,246,0.3)', text: 'var(--accent-blue-light)' },
    label: 'Google Student Ambassador',
    title: 'AI & Technology Advocacy',
    description:
      "As a Google Student Ambassador (GID: 5314, Bronze Badge), I represent Google's mission to empower students with modern technology tools, Gemini, and AI awareness on campus.",
    highlights: [
      'Promoting Gemini and Google AI tools to student audiences',
      'Organizing events, workshops, and sessions',
      'Technology education and developer skill-building',
      'Content creation for Google student programs',
      'Student guidance and peer mentoring',
      'Collaboration with the broader ambassador network',
    ],
    badge: 'Bronze Badge · GID: 5314',
  },
  {
    icon: Users,
    color: { bg: 'rgba(124,58,237,0.12)', border: 'rgba(124,58,237,0.3)', text: 'var(--accent-violet-light)' },
    label: 'BRAIN Community',
    title: 'Technology Community',
    description:
      'Active participation in BRAIN — a student technology community focused on collaboration, peer learning, and skill development in AI and software development.',
    highlights: [
      'Technology community participation',
      'Peer learning and knowledge sharing',
      'AI and software development discussions',
      'Collaborative project engagement',
    ],
    badge: 'Community Member',
  },
  {
    icon: BookOpen,
    color: { bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.25)', text: '#34d399' },
    label: 'Technology Education',
    title: 'Student Education',
    description:
      'Focused on making technology accessible through workshops, practical sessions, and content that bridges theory with real-world application for students.',
    highlights: [
      'Hands-on workshops and learning sessions',
      'AI and developer tools demonstrations',
      'Making advanced topics accessible',
    ],
    badge: 'Educator',
  },
];

const activities = [
  { icon: Mic, label: 'Community Events', desc: 'Organizing and participating in student tech events' },
  { icon: Lightbulb, label: 'AI Awareness', desc: 'Spreading knowledge of AI and Gemini technologies' },
  { icon: Users, label: 'Student Engagement', desc: 'Building connections within the student community' },
  { icon: Share2, label: 'Content Creation', desc: 'Creating educational content for technology topics' },
];

export default function Community() {
  return (
    <section id="community" style={{ background: 'var(--bg-secondary)', padding: 'var(--section-padding) 0' }}>
      <div className="section-container">
        <SectionTitle
          label="Leadership & Community"
          title="Community"
          gradientWord="Community"
          subtitle="Building the next generation of technology leaders — one event, workshop, and conversation at a time."
          className="mb-14"
        />

        {/* Focus areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {focusAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <ScrollReveal key={area.label} delay={i * 0.08}>
                <GlassCard padding="lg" style={{ height: '100%' }}>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: area.color.bg, border: `1px solid ${area.color.border}` }}
                  >
                    <Icon size={18} style={{ color: area.color.text }} />
                  </div>

                  <p className="text-xs uppercase tracking-widest mono mb-1" style={{ color: area.color.text }}>
                    {area.label}
                  </p>

                  <h3 className="font-bold mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', fontSize: '1.05rem' }}>
                    {area.title}
                  </h3>

                  <span
                    className="inline-block text-xs px-2.5 py-0.5 rounded-full mono mb-3"
                    style={{ background: area.color.bg, border: `1px solid ${area.color.border}`, color: area.color.text }}
                  >
                    {area.badge}
                  </span>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {area.description}
                  </p>

                  <ul className="space-y-1.5">
                    {area.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                        <span style={{ color: area.color.text, flexShrink: 0 }}>▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Activity cards */}
        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {activities.map((act) => {
              const Icon = act.icon;
              return (
                <GlassCard key={act.label} padding="md">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
                    style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}
                  >
                    <Icon size={15} style={{ color: 'var(--accent-blue-light)' }} />
                  </div>
                  <p className="text-xs font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{act.label}</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{act.desc}</p>
                </GlassCard>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
