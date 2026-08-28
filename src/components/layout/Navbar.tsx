/* ============================================================
   Navbar — Premium floating glass-pill navigation bar
   Desktop: centered floating pill with monogram, nav links, CTA
   Mobile: full-width bar with hamburger → full-screen overlay
   Uses useScrollSpy for active section highlighting.
   ============================================================ */

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import MMonogram from '@/components/ui/MMonogram';
import { navItems } from '@/data/portfolio';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const SECTION_IDS = navItems.map((n) => n.id);
const PRIMARY_NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
];

const SECONDARY_NAV_ITEMS = [
  { id: 'education', label: 'Education', icon: '🎓', desc: 'B.Tech CSE AI & DS at DYPCOEI' },
  { id: 'community', label: 'Community', icon: '👥', desc: 'Advocacy & student initiatives' },
  { id: 'gallery', label: 'Highlights', icon: '✨', desc: 'Events & project milestones' },
  { id: 'linkedin', label: 'LinkedIn', icon: '💼', desc: 'Recent posts & updates' },
  { id: 'github', label: 'GitHub', icon: '🐙', desc: 'Open source repositories' },
];

/* ── Smooth scroll helper ── */
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function Navbar() {
  const prefersReducedMotion = useReducedMotion();
  const activeSection = useScrollSpy(SECTION_IDS, 120);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  /* ── Scroll listener for opacity boost ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  /* ── Keyboard: close overlay on Escape ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (mobileOpen) setMobileOpen(false);
        if (moreOpen) setMoreOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileOpen, moreOpen]);

  const handleNavClick = useCallback(
    (id: string) => {
      setMobileOpen(false);
      setMoreOpen(false);
      setTimeout(() => scrollToSection(id), mobileOpen ? 320 : 0);
    },
    [mobileOpen]
  );

  /* ────────────────────────────────────────────────── */
  return (
    <>
      {/* ── Fixed wrapper ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-start justify-center pt-4 px-4"
        role="banner"
      >
        {/* ────── DESKTOP PILL ────── */}
        <motion.nav
          className="hidden lg:flex items-center justify-between rounded-full px-4 py-2 w-full"
          style={{
            maxWidth: 820,
            background: scrolled
              ? 'rgba(5,5,8,0.90)'
              : 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: scrolled
              ? '0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(59,130,246,0.12)'
              : '0 4px 16px rgba(0,0,0,0.3)',
            transition: prefersReducedMotion
              ? 'none'
              : 'background 0.35s ease, box-shadow 0.35s ease',
          }}
          aria-label="Main navigation"
          initial={prefersReducedMotion ? false : { y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Left: Monogram + Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 pl-2 pr-3 py-1 rounded-full flex-shrink-0 group"
            style={{ color: 'var(--text-primary)' }}
            aria-label="Mohit Mundke — back to top"
          >
            <MMonogram size={28} />
            <span
              className="font-bold text-sm tracking-tight transition-colors"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-primary)',
              }}
            >
              Mohit Mundke
            </span>
          </button>

          {/* Center Links */}
          <div className="flex items-center gap-1">
            {PRIMARY_NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <DesktopNavLink
                  key={item.id}
                  item={item}
                  isActive={isActive}
                  onClick={() => handleNavClick(item.id)}
                  prefersReducedMotion={prefersReducedMotion}
                />
              );
            })}

            {/* "More" Dropdown Menu */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setMoreOpen(!moreOpen)}
                className="px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all text-slate-400 hover:text-white"
                style={{
                  color: moreOpen || SECONDARY_NAV_ITEMS.some(i => i.id === activeSection)
                    ? 'var(--accent-purple-light)'
                    : 'var(--text-secondary)',
                  background: moreOpen
                    ? 'rgba(124,58,237,0.15)'
                    : 'transparent',
                }}
              >
                <span>More</span>
                <span className="text-[10px] opacity-70 transition-transform duration-200" style={{ transform: moreOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 p-2 rounded-2xl bg-[#0a0e18]/95 backdrop-blur-2xl border border-white/15 shadow-2xl flex flex-col gap-1 z-50"
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                  >
                    {SECONDARY_NAV_ITEMS.map((sub) => (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => handleNavClick(sub.id)}
                        className={`flex items-center gap-3 p-2.5 rounded-xl transition-all text-left group ${
                          activeSection === sub.id ? 'bg-blue-600/20 text-blue-400' : 'hover:bg-white/5 text-slate-300'
                        }`}
                      >
                        <span className="text-base p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-500/40">{sub.icon}</span>
                        <div>
                          <p className="font-bold text-xs text-white group-hover:text-blue-400 transition-colors">{sub.label}</p>
                          <p className="text-[10px] text-slate-400 leading-tight">{sub.desc}</p>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Nav Link */}
            <DesktopNavLink
              item={{ id: 'contact', label: 'Contact' }}
              isActive={activeSection === 'contact'}
              onClick={() => handleNavClick('contact')}
              prefersReducedMotion={prefersReducedMotion}
            />
          </div>

          {/* Right: Hire Me CTA */}
          <motion.button
            onClick={() => handleNavClick('contact')}
            className="flex-shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold text-white"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%)',
              fontFamily: 'var(--font-heading)',
              boxShadow: '0 2px 12px rgba(59,130,246,0.3)',
            }}
            whileHover={
              prefersReducedMotion
                ? {}
                : { scale: 1.04, boxShadow: '0 4px 20px rgba(59,130,246,0.45)' }
            }
            whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            aria-label="Contact — Let's Connect"
          >
            Let&apos;s Connect ✨
          </motion.button>
        </motion.nav>

        {/* ────── MOBILE BAR ────── */}
        <motion.div
          className="flex lg:hidden items-center justify-between w-full rounded-2xl px-4 py-3"
          style={{
            background: scrolled
              ? 'rgba(5,5,8,0.88)'
              : 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.5)' : 'none',
            transition: prefersReducedMotion
              ? 'none'
              : 'background 0.3s ease, box-shadow 0.3s ease',
          }}
          initial={prefersReducedMotion ? false : { y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          role="navigation"
          aria-label="Mobile navigation"
        >
          {/* Left: Monogram + name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2"
            aria-label="Go to top"
          >
            <MMonogram size={26} />
            <span
              className="text-sm font-semibold"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-primary)',
              }}
            >
              Mohit Mundke
            </span>
          </button>

          {/* Right: Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="flex items-center justify-center w-9 h-9 rounded-xl"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'var(--text-primary)',
            }}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <Menu size={18} />
          </button>
        </motion.div>
      </header>

      {/* ────── MOBILE FULL-SCREEN OVERLAY ────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-overlay"
            className="fixed inset-0 z-[60] flex flex-col"
            style={{
              background: 'rgba(5,5,8,0.97)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Gradient accents */}
            <div
              className="absolute top-0 left-0 w-48 h-48 rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-48 h-48 rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />

            {/* Top bar inside overlay */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4">
              <div className="flex items-center gap-2">
                <MMonogram size={28} />
                <span
                  className="text-sm font-semibold"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--text-primary)',
                  }}
                >
                  Mohit Mundke
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-10 h-10 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'var(--text-secondary)',
                }}
                aria-label="Close navigation menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Divider */}
            <div
              className="mx-6 mb-6"
              style={{
                height: 1,
                background:
                  'linear-gradient(90deg, transparent, var(--glass-border), transparent)',
              }}
            />

            {/* Nav links list */}
            <nav className="flex-1 overflow-y-auto px-6">
              <ul className="flex flex-col gap-1" role="list">
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.li
                      key={item.id}
                      initial={
                        prefersReducedMotion
                          ? false
                          : { opacity: 0, x: -20 }
                      }
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: prefersReducedMotion ? 0 : idx * 0.04,
                        duration: 0.3,
                      }}
                    >
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className="w-full flex items-center gap-4 px-4 py-4 rounded-xl text-left transition-all"
                        style={{
                          background: isActive
                            ? 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(124,58,237,0.1))'
                            : 'transparent',
                          border: isActive
                            ? '1px solid rgba(59,130,246,0.25)'
                            : '1px solid transparent',
                          color: isActive
                            ? 'var(--accent-blue-light)'
                            : 'var(--text-secondary)',
                        }}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <span
                          className="mono text-xs w-6 text-right flex-shrink-0"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-base font-medium">
                          {item.label}
                        </span>
                        {isActive && (
                          <span
                            className="ml-auto w-1.5 h-1.5 rounded-full"
                            style={{
                              background:
                                'linear-gradient(135deg, #3b82f6, #7c3aed)',
                            }}
                          />
                        )}
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* Bottom CTA */}
            <div className="px-6 py-6">
              <motion.button
                onClick={() => handleNavClick('contact')}
                className="w-full py-4 rounded-2xl text-white font-semibold text-base"
                style={{
                  background:
                    'linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%)',
                  fontFamily: 'var(--font-heading)',
                  boxShadow: '0 4px 20px rgba(59,130,246,0.3)',
                }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                aria-label="Contact — Let's Connect"
              >
                Let&apos;s Connect ✨
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Desktop nav link sub-component ── */
interface DesktopNavLinkProps {
  item: { id: string; label: string; href: string };
  isActive: boolean;
  onClick: () => void;
  prefersReducedMotion: boolean;
}

function DesktopNavLink({
  item,
  isActive,
  onClick,
  prefersReducedMotion,
}: DesktopNavLinkProps) {
  return (
    <button
      onClick={onClick}
      className="relative px-2.5 py-1.5 rounded-full text-xs font-medium transition-colors flex-shrink-0"
      style={{
        fontFamily: 'var(--font-body)',
        color: isActive ? '#fff' : 'var(--text-secondary)',
        background: isActive
          ? 'linear-gradient(135deg, rgba(59,130,246,0.25), rgba(124,58,237,0.2))'
          : 'transparent',
        border: isActive
          ? '1px solid rgba(59,130,246,0.3)'
          : '1px solid transparent',
        transition: prefersReducedMotion
          ? 'none'
          : 'color 0.2s ease, background 0.2s ease, border-color 0.2s ease',
      }}
      aria-current={isActive ? 'page' : undefined}
      aria-label={`Navigate to ${item.label}`}
    >
      {item.label}
    </button>
  );
}
