import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  glowColor?: 'blue' | 'violet' | 'mixed';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
  style?: React.CSSProperties;
  as?: 'div' | 'article' | 'section';
}

const paddingMap = { none: '', sm: 'p-4', md: 'p-6', lg: 'p-8' };

const glowMap = {
  blue: '0 0 24px rgba(59,130,246,0.25)',
  violet: '0 0 24px rgba(124,58,237,0.25)',
  mixed: '0 0 30px rgba(59,130,246,0.18), 0 0 50px rgba(124,58,237,0.12)',
};

export default function GlassCard({
  children,
  className = '',
  hover = true,
  glow = false,
  glowColor = 'mixed',
  padding = 'md',
  onClick,
  style,
  as: Tag = 'div',
}: GlassCardProps) {
  const baseStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.04)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '16px',
    boxShadow: glow ? glowMap[glowColor] : undefined,
    cursor: onClick ? 'pointer' : undefined,
    ...style,
  };

  if (hover) {
    return (
      <motion.div
        className={`${paddingMap[padding]} ${className}`}
        style={baseStyle}
        onClick={onClick}
        whileHover={{
          borderColor: 'rgba(255,255,255,0.15)',
          background: 'rgba(255,255,255,0.06)',
          boxShadow: glow ? glowMap[glowColor] : '0 0 0 1px rgba(59,130,246,0.2)',
          y: -2,
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <Tag className={`${paddingMap[padding]} ${className}`} style={baseStyle} onClick={onClick}>
      {children}
    </Tag>
  );
}
