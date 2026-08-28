import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: Variant;
  size?: Size;
  'aria-label'?: string;
}

const variantStyles: Record<Variant, string> = {
  primary: `
    inline-flex items-center justify-center font-semibold rounded-full
    text-white cursor-pointer border-0 select-none
  `,
  secondary: `
    inline-flex items-center justify-center font-semibold rounded-full
    cursor-pointer select-none
  `,
  ghost: `
    inline-flex items-center justify-center font-medium rounded-full
    cursor-pointer select-none
  `,
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

const variantInlineStyles: Record<Variant, React.CSSProperties> = {
  primary: {
    background: 'linear-gradient(135deg, #3b82f6, #7c3aed)',
    boxShadow: '0 0 20px rgba(59,130,246,0.25)',
  },
  secondary: {
    background: 'transparent',
    border: '1px solid rgba(59,130,246,0.4)',
    color: '#60a5fa',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-secondary)',
  },
};

export default function MagneticButton({
  children,
  className = '',
  strength = 0.25,
  onClick,
  href,
  target,
  rel,
  type = 'button',
  disabled = false,
  variant = 'primary',
  size = 'md',
  'aria-label': ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({
      x: (e.clientX - rect.left - rect.width / 2) * strength,
      y: (e.clientY - rect.top - rect.height / 2) * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setHovered(false);
  };

  const combinedClass = `${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const hoverStyle: React.CSSProperties = hovered
    ? variant === 'primary'
      ? { boxShadow: '0 0 30px rgba(59,130,246,0.4)', filter: 'brightness(1.1)' }
      : variant === 'secondary'
      ? { borderColor: 'rgba(124,58,237,0.6)', color: '#a78bfa', background: 'rgba(124,58,237,0.08)' }
      : { color: 'var(--accent-blue-light)' }
    : {};

  const combinedStyle: React.CSSProperties = {
    ...variantInlineStyles[variant],
    ...hoverStyle,
    transition: 'all 0.2s cubic-bezier(0.4,0,0.2,1)',
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
  };

  const inner = href ? (
    <a
      href={href}
      target={target}
      rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
      aria-label={ariaLabel}
      className={combinedClass}
      style={combinedStyle}
      onMouseEnter={() => setHovered(true)}
    >
      {children}
    </a>
  ) : (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={combinedClass}
      style={combinedStyle}
      onMouseEnter={() => setHovered(true)}
    >
      {children}
    </button>
  );

  return (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {inner}
    </motion.div>
  );
}
