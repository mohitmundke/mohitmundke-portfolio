/* ============================================================
   Footer — Premium portfolio footer
   Sections: large CTA, 3-column info row, copyright strip.
   ============================================================ */

import { motion } from 'framer-motion';
import { Mail, Github, ArrowUpRight, Heart } from 'lucide-react';
import MMonogram from '@/components/ui/MMonogram';
import { personalInfo, navItems } from '@/data/portfolio';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/* ── Quick links shown in footer (first 6 nav items) ── */
const QUICK_LINKS = navItems.slice(0, 6);

/* ── Smooth scroll helper ── */
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── LinkedIn SVG icon ── */
function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ── Instagram SVG icon ── */
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

/* ── Social link button ── */
interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  prefersReducedMotion: boolean;
}

function SocialLink({
  href,
  label,
  icon,
  prefersReducedMotion,
}: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl group"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.07)',
        color: 'var(--text-secondary)',
        transition: prefersReducedMotion
          ? 'none'
          : 'background 0.2s ease, border-color 0.2s ease, color 0.2s ease',
      }}
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              background: 'rgba(59,130,246,0.08)',
              borderColor: 'rgba(59,130,246,0.25)',
              color: '#60a5fa',
            }
      }
      whileTap={prefersReducedMotion ? {} : { scale: 0.96 }}
    >
      <span className="flex-shrink-0">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
      <ArrowUpRight
        size={13}
        className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </motion.a>
  );
}

/* ── Animated tech element ── */
function TechDot({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  return (
    <motion.span
      className="inline-flex items-center gap-1 mono text-xs"
      style={{ color: 'var(--text-muted)' }}
      animate={
        prefersReducedMotion
          ? {}
          : {
              opacity: [0.5, 1, 0.5],
            }
      }
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <span
        className="inline-block w-1.5 h-1.5 rounded-full"
        style={{
          background: 'linear-gradient(135deg, #3b82f6, #7c3aed)',
          boxShadow: '0 0 4px rgba(59,130,246,0.6)',
        }}
      />
      React + TypeScript
    </motion.span>
  );
}

/* ── Fade-in-up animation wrapper ── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Footer() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer
      role="contentinfo"
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* ════ SECTION 1 — CTA ════ */}
      <div className="section-container pb-0">
        <motion.div
          className="relative rounded-3xl overflow-hidden text-center py-16 px-6"
          style={{
            background:
              'radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.1) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(124,58,237,0.1) 0%, transparent 60%), rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
          variants={prefersReducedMotion ? {} : fadeUp}
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Decorative glow blobs */}
          <div
            aria-hidden="true"
            className="absolute -top-12 left-1/4 w-48 h-48 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-12 right-1/4 w-48 h-48 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          {/* Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-primary)',
            }}
            variants={prefersReducedMotion ? {} : fadeUp}
            custom={0.1}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true }}
          >
            Let&apos;s build something{' '}
            <span className="gradient-text">together.</span>
          </motion.h2>

          {/* Sub-text */}
          <motion.p
            className="text-base sm:text-lg mb-10 max-w-lg mx-auto"
            style={{ color: 'var(--text-secondary)' }}
            variants={prefersReducedMotion ? {} : fadeUp}
            custom={0.18}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true }}
          >
            Open to internships, collaborations, and opportunities.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={prefersReducedMotion ? {} : fadeUp}
            custom={0.26}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Primary — Get in Touch */}
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3.5 rounded-full font-semibold text-white text-sm"
              style={{
                background:
                  'linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%)',
                fontFamily: 'var(--font-heading)',
                boxShadow: '0 4px 24px rgba(59,130,246,0.35)',
              }}
              whileHover={
                prefersReducedMotion
                  ? {}
                  : {
                      scale: 1.04,
                      boxShadow: '0 6px 30px rgba(59,130,246,0.5)',
                    }
              }
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              aria-label="Get in touch — navigate to contact section"
            >
              Get in Touch
            </motion.button>

            {/* Secondary — View GitHub */}
            <motion.a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
              }}
              whileHover={
                prefersReducedMotion
                  ? {}
                  : {
                      background: 'rgba(255,255,255,0.09)',
                      borderColor: 'rgba(255,255,255,0.2)',
                    }
              }
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              aria-label="View GitHub profile (opens in new tab)"
            >
              <Github size={16} aria-hidden="true" />
              View GitHub
              <ArrowUpRight size={14} aria-hidden="true" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* ════ SECTION 2 — Info row ════ */}
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">

          {/* ── Col 1: Monogram + name + tagline ── */}
          <motion.div
            className="flex flex-col gap-4"
            variants={prefersReducedMotion ? {} : fadeUp}
            custom={0}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            <div className="flex items-center gap-3">
              <MMonogram size={36} />
              <span
                className="font-bold text-lg"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--text-primary)',
                }}
              >
                Mohit Mundke
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: 'var(--text-secondary)' }}
            >
              {personalInfo.tagline}
            </p>
            <div className="flex items-center gap-2">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: '#22c55e' }}
                aria-hidden="true"
              />
              <span
                className="mono text-xs"
                style={{ color: 'var(--text-muted)' }}
              >
                {personalInfo.availability}
              </span>
            </div>
          </motion.div>

          {/* ── Col 2: Quick navigation ── */}
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            custom={0.08}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            <h3
              className="mono text-xs uppercase tracking-widest mb-5"
              style={{ color: 'var(--text-muted)' }}
            >
              Navigation
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                {QUICK_LINKS.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-sm group flex items-center gap-1.5"
                      style={{
                        color: 'var(--text-secondary)',
                        transition: prefersReducedMotion
                          ? 'none'
                          : 'color 0.2s ease',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                      }}
                      onMouseEnter={(e) => {
                        if (!prefersReducedMotion)
                          (e.currentTarget as HTMLElement).style.color =
                            '#60a5fa';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          'var(--text-secondary)';
                      }}
                      aria-label={`Navigate to ${item.label} section`}
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ background: '#3b82f6' }}
                        aria-hidden="true"
                      />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* ── Col 3: Social links ── */}
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            custom={0.16}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            <h3
              className="mono text-xs uppercase tracking-widest mb-5"
              style={{ color: 'var(--text-muted)' }}
            >
              Connect
            </h3>
            <div className="flex flex-col gap-2.5">
              <SocialLink
                href={`mailto:${personalInfo.email}`}
                label="Email"
                icon={<Mail size={16} />}
                prefersReducedMotion={prefersReducedMotion}
              />
              <SocialLink
                href={personalInfo.social.github}
                label="GitHub"
                icon={<Github size={16} />}
                prefersReducedMotion={prefersReducedMotion}
              />
              <SocialLink
                href={personalInfo.social.linkedin}
                label="LinkedIn"
                icon={<LinkedInIcon size={16} />}
                prefersReducedMotion={prefersReducedMotion}
              />
              <SocialLink
                href={personalInfo.social.instagram}
                label="Instagram"
                icon={<InstagramIcon size={16} />}
                prefersReducedMotion={prefersReducedMotion}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ════ SECTION 3 — Bottom strip ════ */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div
          className="section-container"
          style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Copyright */}
            <p
              className="text-xs"
              style={{ color: 'var(--text-muted)' }}
            >
              © {new Date().getFullYear()}{' '}
              <span style={{ color: 'var(--text-secondary)' }}>
                Mohit Mundke
              </span>
              . All rights reserved.
            </p>

            {/* Made with */}
            <div className="flex items-center gap-2">
              <span
                className="text-xs"
                style={{ color: 'var(--text-muted)' }}
              >
                Made with
              </span>
              <motion.span
                animate={
                  prefersReducedMotion
                    ? {}
                    : { scale: [1, 1.25, 1], rotate: [0, 5, -5, 0] }
                }
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                aria-hidden="true"
              >
                <Heart
                  size={12}
                  fill="#ef4444"
                  stroke="none"
                  className="inline"
                />
              </motion.span>
              <span
                className="text-xs"
                style={{ color: 'var(--text-muted)' }}
              >
                &amp;
              </span>
              <TechDot prefersReducedMotion={prefersReducedMotion} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
