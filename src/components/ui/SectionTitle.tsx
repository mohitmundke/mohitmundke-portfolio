import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SectionTitleProps {
  label?: string;
  title: string;
  gradientWord?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionTitle({
  label,
  title,
  gradientWord,
  subtitle,
  align = 'center',
  className = '',
}: SectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' });
  const reduced = useReducedMotion();

  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  // Split title to apply gradient to gradientWord
  const renderTitle = () => {
    if (!gradientWord) return <span>{title}</span>;
    const parts = title.split(gradientWord);
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{gradientWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col gap-3 ${alignClass} ${className}`}
      initial={reduced ? {} : { opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : reduced ? {} : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {label && (
        <div className="flex items-center gap-3" style={{ justifyContent: align === 'center' ? 'center' : 'flex-start' }}>
          <div className="h-px w-8" style={{ background: 'var(--accent-blue)' }} />
          <span
            className="text-xs tracking-widest uppercase mono"
            style={{ color: 'var(--accent-blue-light)' }}
          >
            {label}
          </span>
          <div className="h-px w-8" style={{ background: 'var(--accent-blue)' }} />
        </div>
      )}
      <h2
        className="font-bold leading-tight tracking-tight"
        style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
      >
        {renderTitle()}
      </h2>
      {subtitle && (
        <p
          className="max-w-2xl leading-relaxed"
          style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
