import { motion } from 'framer-motion';

const iconMap: Record<string, string> = {
  python: '🐍', react: '⚛️', js: 'JS', html: '🌐', css: '🎨',
  c: '⚙️', 'c++': '⚙️', node: '🟢', flask: '🧪',
  ml: '🤖', sparkles: '✨', git: '🔀', github: '🐙',
  vscode: '💻', figma: '🎭', gemini: '♊', pandas: '🐼',
  numpy: '🔢', array: '📊', agy: '🚀', table: '📋',
  terminal: '⌨️', cpu: '⚙️',
};

interface TechBadgeProps {
  name: string;
  icon?: string;
  label?: string;
  size?: 'sm' | 'md';
}

export default function TechBadge({ name, icon, label, size = 'md' }: TechBadgeProps) {
  const emoji = icon ? (iconMap[icon.toLowerCase()] ?? iconMap[name.toLowerCase()] ?? '🔧') : '🔧';
  const isSm = size === 'sm';

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-2 rounded-xl cursor-default select-none"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        padding: isSm ? '12px 10px' : '16px 14px',
        minWidth: isSm ? 80 : 96,
      }}
      whileHover={{
        background: 'rgba(59,130,246,0.08)',
        borderColor: 'rgba(59,130,246,0.35)',
        scale: 1.05,
        boxShadow: '0 0 16px rgba(59,130,246,0.2)',
      }}
      transition={{ duration: 0.18 }}
    >
      <span style={{ fontSize: isSm ? '1.4rem' : '1.75rem', lineHeight: 1 }} aria-hidden="true">
        {emoji}
      </span>
      <span
        className="text-center leading-tight font-semibold"
        style={{
          color: 'var(--text-primary)',
          fontSize: isSm ? '0.72rem' : '0.8rem',
          fontFamily: 'var(--font-body)',
        }}
      >
        {name}
      </span>
      {label && (
        <span
          className="text-center"
          style={{ color: 'var(--text-muted)', fontSize: '0.65rem', fontFamily: 'var(--font-mono)' }}
        >
          {label}
        </span>
      )}
    </motion.div>
  );
}
