/* ============================================================
   MMonogram — Animated SVG monogram for Mohit Mundke
   A reusable M-letter SVG component with optional draw-on
   stroke animation and size/color customization.
   ============================================================ */

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MMonogramProps {
  /** Size in pixels (width = height) */
  size?: number;
  /** Whether to animate the stroke draw-on effect */
  animate?: boolean;
  /** Stroke animation duration in seconds */
  duration?: number;
  /** Extra CSS class names */
  className?: string;
  /** Aria label */
  ariaLabel?: string;
}

export default function MMonogram({
  size = 36,
  className = '',
  ariaLabel = 'Mohit Mundke Logo',
}: MMonogramProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-xl overflow-hidden border border-white/15 bg-black flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-label={ariaLabel}
    >
      <img
        src="/images/mohit-mundke-logo.png"
        alt="Mohit Mundke Official Logo"
        className="w-full h-full object-cover rounded-xl"
        onError={(e) => {
          // Fallback if image path fails
          e.currentTarget.style.display = 'none';
        }}
      />
    </div>
  );
}
