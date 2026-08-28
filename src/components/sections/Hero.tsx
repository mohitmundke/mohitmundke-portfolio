import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { MapPin, Mail, Github, Linkedin, Instagram, Download, ChevronRight } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import MagneticButton from '@/components/ui/MagneticButton';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/* ─── Particle Component ─────────────────────────────────── */
function Particle({ x, y, delay }: { x: number; y: number; delay: number }) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: Math.random() * 3 + 1,
        height: Math.random() * 3 + 1,
        background: Math.random() > 0.5 ? 'rgba(59,130,246,0.6)' : 'rgba(124,58,237,0.6)',
      }}
      animate={{
        opacity: [0, 0.8, 0],
        scale: [0.5, 1.2, 0.5],
        y: [0, -30, 0],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

const particles = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 4,
}));

/* ─── Social Link ────────────────────────────────────────── */
function SocialLink({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
      whileHover={{
        scale: 1.1,
        background: 'rgba(59,130,246,0.15)',
        borderColor: 'rgba(59,130,246,0.4)',
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon size={16} style={{ color: 'var(--text-secondary)' }} />
    </motion.a>
  );
}

/* ─── Profile Photo / Placeholder ───────────────────────── */
function ProfilePhoto() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      {/* Outer glow ring */}
      <div
        className="absolute inset-[-2px] rounded-[28px]"
        style={{
          background: 'linear-gradient(135deg, rgba(59,130,246,0.5), rgba(124,58,237,0.5), rgba(59,130,246,0.2))',
          filter: 'blur(1px)',
        }}
      />

      {/* Animated border */}
      <motion.div
        className="absolute inset-[-1px] rounded-[27px]"
        style={{
          background: 'linear-gradient(135deg, rgba(59,130,246,0.6), rgba(124,58,237,0.6))',
        }}
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Glass frame */}
      <div
        className="relative rounded-[24px] overflow-hidden"
        style={{
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        {/* Photo or placeholder */}
        <div className="aspect-[4/5] relative overflow-hidden">
          <img
            src="/images/mohit-profile.png"
            alt="Mohit Mundke — AI & Data Science Student and Google Student Ambassador"
            className="w-full h-full object-cover object-top"
            loading="eager"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src.indexOf('mohit-profile.jpg') === -1 && target.src.indexOf('mohit-avatar-fallback.svg') === -1) {
                target.src = '/images/mohit-profile.jpg';
              } else if (target.src.indexOf('mohit-avatar-fallback.svg') === -1) {
                target.src = '/images/mohit-avatar-fallback.svg';
              }
            }}
          />

          {/* Elegant placeholder (hidden when photo loads) */}
          <div
            className="absolute inset-0 items-center justify-center flex-col gap-4"
            style={{ display: 'none', background: 'linear-gradient(160deg, #0c101a 0%, #0f1525 100%)' }}
            aria-hidden="true"
          >
            <div
              className="w-32 h-32 rounded-full flex items-center justify-center text-5xl font-bold"
              style={{
                background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(124,58,237,0.2))',
                border: '2px solid rgba(59,130,246,0.3)',
                fontFamily: 'var(--font-heading)',
                color: 'var(--accent-blue-light)',
              }}
            >
              M
            </div>
            <p
              className="text-sm text-center px-6"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}
            >
              {/* Photo placeholder — add mohit-profile.jpg to public/images/ */}
              Profile photo loading…
            </p>
          </div>

          {/* Subtle gradient overlay at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1/3"
            style={{
              background: 'linear-gradient(to top, rgba(5,5,8,0.6), transparent)',
            }}
          />
        </div>

        {/* Name badge at bottom */}
        <div
          className="px-5 py-4"
          style={{ background: 'rgba(5,5,8,0.5)' }}
        >
          <p
            className="text-xs tracking-widest mb-1"
            style={{ color: 'var(--accent-blue-light)', fontFamily: 'var(--font-mono)' }}
          >
            GOOGLE STUDENT AMBASSADOR · GID: 5314
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
            Pune, India
          </p>
        </div>
      </div>

      {/* Decorative dots */}
      <div
        className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.6), transparent)' }}
      />
      <div
        className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.6), transparent)' }}
      />
    </div>
  );
}

/* ─── Hero Section ───────────────────────────────────────── */
export default function Hero() {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
      aria-label="Hero — Mohit Mundke introduction"
    >
      {/* Background: mesh gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 15% 60%, rgba(59,130,246,0.1) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 20%, rgba(124,58,237,0.1) 0%, transparent 55%),
            radial-gradient(ellipse at 60% 85%, rgba(59,130,246,0.06) 0%, transparent 55%),
            var(--bg-primary)
          `,
        }}
      />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {particles.map((p) => (
          <Particle key={p.id} x={p.x} y={p.y} delay={p.delay} />
        ))}
      </div>

      {/* Main content */}
      <div ref={containerRef} className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[85vh] py-24 lg:py-32">

          {/* Left: Text Content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">

            {/* Status badge */}
            <motion.div
              custom={0}
              variants={variants}
              initial="hidden"
              animate={controls}
            >
              <span className="status-badge" role="status" aria-label="Currently open to opportunities">
                <span className="status-dot" aria-hidden="true" />
                Open to Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div custom={0.1} variants={variants} initial="hidden" animate={controls}>
              <h1
                className="leading-[1.05] tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <span style={{ color: 'var(--text-primary)' }}>Mohit</span>
                <br />
                <span className="gradient-text">Mundke</span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div custom={0.2} variants={variants} initial="hidden" animate={controls}>
              <p
                className="text-sm tracking-widest uppercase"
                style={{ color: 'var(--accent-blue-light)', fontFamily: 'var(--font-mono)' }}
              >
                AI & Data Science Student &nbsp;·&nbsp; Google Student Ambassador &nbsp;·&nbsp; Aspiring Software Engineer
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.div custom={0.3} variants={variants} initial="hidden" animate={controls}>
              <p
                className="text-xl lg:text-2xl font-medium italic"
                style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)' }}
              >
                "{personalInfo.tagline}"
              </p>
            </motion.div>

            {/* Bio */}
            <motion.div custom={0.4} variants={variants} initial="hidden" animate={controls}>
              <p className="text-base leading-relaxed max-w-[520px]" style={{ color: 'var(--text-secondary)' }}>
                I&apos;m a Computer Science student specializing in <strong style={{ color: 'var(--text-primary)' }}>AI & Data Science</strong> at Dr. D.Y. Patil, Pune — exploring full-stack development, building real software, and contributing to the technology community as a{' '}
                <strong style={{ color: 'var(--accent-blue-light)' }}>Google Student Ambassador</strong>.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              custom={0.5}
              variants={variants}
              initial="hidden"
              animate={controls}
              className="flex flex-wrap gap-3 mt-2"
            >
              <MagneticButton
                href="#projects"
                variant="primary"
                size="md"
              >
                View My Projects
              </MagneticButton>
              <MagneticButton
                href="/resume.pdf"
                target="_blank"
                variant="secondary"
                size="md"
              >
                <Download size={15} className="mr-1.5 inline" />
                Download Resume
              </MagneticButton>
              <MagneticButton
                href="#contact"
                variant="ghost"
                size="md"
              >
                Let&apos;s Connect
                <ChevronRight size={15} className="ml-1 inline" />
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              custom={0.6}
              variants={variants}
              initial="hidden"
              animate={controls}
              className="flex items-center gap-3 mt-1"
            >
              <span className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                Find me on
              </span>
              <SocialLink href={personalInfo.social.linkedin} icon={Linkedin} label="LinkedIn" />
              <SocialLink href={personalInfo.social.github} icon={Github} label="GitHub" />
              <SocialLink href={personalInfo.social.instagram} icon={Instagram} label="Instagram" />
              <SocialLink href={`mailto:${personalInfo.email}`} icon={Mail} label="Email" />
              <div className="flex items-center gap-1.5 ml-1">
                <MapPin size={12} style={{ color: 'var(--text-muted)' }} />
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Pune, India</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Portrait */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.9, x: reducedMotion ? 0 : 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              animate={reducedMotion ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ProfilePhoto />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          aria-hidden="true"
        >
          <span className="text-xs tracking-widest" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            SCROLL
          </span>
          <motion.div
            className="w-px h-12"
            style={{ background: 'linear-gradient(to bottom, rgba(59,130,246,0.6), transparent)' }}
            animate={reducedMotion ? {} : { scaleY: [1, 0.3, 1], originY: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
