import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import TechBadge from '@/components/ui/TechBadge';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { skillCategories } from '@/data/portfolio';

const categoryColors: Record<string, { bg: string; border: string; text: string }> = {
  programming: { bg: 'rgba(59,130,246,0.1)', border: 'rgba(59,130,246,0.25)', text: '#60a5fa' },
  frameworks: { bg: 'rgba(124,58,237,0.1)', border: 'rgba(124,58,237,0.25)', text: '#a78bfa' },
  'ai-data': { bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.25)', text: '#34d399' },
  tools: { bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.25)', text: '#fbbf24' },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const displayed = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" style={{ background: 'var(--bg-primary)', padding: 'var(--section-padding) 0' }}>
      <div className="section-container">
        <SectionTitle
          label="What I Work With"
          title="Skills & Technologies"
          gradientWord="Technologies"
          subtitle="A growing toolkit — everything listed is something I actively use or am currently exploring."
          className="mb-10"
        />

        {/* Category filter tabs */}
        <ScrollReveal className="flex flex-wrap justify-center gap-2 mb-12">
          {[{ id: 'all', label: 'All' }, ...skillCategories.map((c) => ({ id: c.id, label: c.label }))].map((tab) => {
            const isActive = activeCategory === tab.id;
            const colors = tab.id !== 'all' ? categoryColors[tab.id] : null;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  background: isActive
                    ? (colors ? colors.bg : 'rgba(59,130,246,0.15)')
                    : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${isActive ? (colors ? colors.border : 'rgba(59,130,246,0.4)') : 'rgba(255,255,255,0.08)'}`,
                  color: isActive ? (colors ? colors.text : '#60a5fa') : 'var(--text-secondary)',
                }}
                aria-pressed={isActive}
              >
                {tab.label}
              </button>
            );
          })}
        </ScrollReveal>

        {/* Skills grid by category */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-10"
          >
            {displayed.map((category, ci) => {
              const colors = categoryColors[category.id] ?? categoryColors.programming;
              return (
                <ScrollReveal key={category.id} delay={ci * 0.06}>
                  <div>
                    {/* Category header */}
                    <div className="flex items-center gap-3 mb-5">
                      <span
                        className="text-xs px-3 py-1 rounded-full font-semibold mono"
                        style={{ background: colors.bg, border: `1px solid ${colors.border}`, color: colors.text }}
                      >
                        {category.label}
                      </span>
                      <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
                    </div>

                    {/* Skill badges */}
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, si) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: si * 0.04 + ci * 0.05 }}
                        >
                          <TechBadge name={skill.name} icon={skill.icon} label={skill.label} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Disclaimer */}
        <ScrollReveal delay={0.2} className="mt-10 text-center">
          <p className="text-xs mono" style={{ color: 'var(--text-muted)' }}>
            Skills marked as "Exploring" or "Learning" represent areas of active study — not claimed expertise.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
