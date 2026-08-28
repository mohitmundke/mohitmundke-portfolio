/* ============================================================
   LoadingScreen — Premium animated loading screen
   Displays an animated M monogram with surrounding particle dots,
   a gradient background, and a progress bar that fills to 100%
   before calling onComplete().
   ============================================================ */

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MMonogram from '@/components/ui/MMonogram';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface LoadingScreenProps {
  onComplete: () => void;
}

/* ── Particle dot configuration ── */
interface Particle {
  id: number;
  angle: number;   // degrees, starting position on orbit
  radius: number;  // orbit radius in px
  size: number;    // dot diameter in px
  speed: number;   // animation duration multiplier
  delay: number;   // animation delay in seconds
}

const PARTICLES: Particle[] = [
  { id: 0, angle: 0,   radius: 68, size: 5, speed: 1.0, delay: 0 },
  { id: 1, angle: 51,  radius: 74, size: 3, speed: 1.3, delay: 0.1 },
  { id: 2, angle: 102, radius: 62, size: 4, speed: 0.9, delay: 0.2 },
  { id: 3, angle: 153, radius: 72, size: 3, speed: 1.2, delay: 0.3 },
  { id: 4, angle: 204, radius: 66, size: 5, speed: 1.1, delay: 0.15 },
  { id: 5, angle: 255, radius: 70, size: 3, speed: 0.8, delay: 0.25 },
  { id: 6, angle: 306, radius: 64, size: 4, speed: 1.0, delay: 0.05 },
];

const TOTAL_DURATION = 1800; // ms — progress bar fills in this time
const FADE_OUT_DURATION = 400; // ms — exit fade after progress completes

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const prefersReducedMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      // Skip animation: show briefly then complete
      const timer = setTimeout(() => {
        onComplete();
      }, 400);
      return () => clearTimeout(timer);
    }

    // Animate progress bar
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const pct = Math.min((elapsed / TOTAL_DURATION) * 100, 100);
      setProgress(pct);

      if (pct < 100) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // Progress complete — trigger exit
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            setIsVisible(false);
            onComplete();
          }, FADE_OUT_DURATION);
        }, 120);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion, onComplete]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{
            background: `
              radial-gradient(ellipse at 30% 40%, rgba(59,130,246,0.18) 0%, transparent 60%),
              radial-gradient(ellipse at 70% 60%, rgba(124,58,237,0.15) 0%, transparent 60%),
              #050508
            `,
          }}
          aria-label="Loading portfolio"
          role="status"
        >
          {/* ── Center monogram area ── */}
          <div className="relative flex items-center justify-center">
            {/* Orbiting particle dots */}
            {!prefersReducedMotion &&
              PARTICLES.map((p) => (
                <ParticleDot key={p.id} particle={p} />
              ))}

            {/* Glowing ring behind the M */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 100,
                height: 100,
                background:
                  'radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(124,58,237,0.08) 60%, transparent 80%)',
              }}
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      scale: [1, 1.15, 1],
                      opacity: [0.6, 1, 0.6],
                    }
              }
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* M Monogram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <MMonogram
                size={64}
                animate={!prefersReducedMotion}
                duration={1.2}
              />
            </motion.div>
          </div>

          {/* ── Name label ── */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p
              className="mono text-sm tracking-widest uppercase"
              style={{ color: 'var(--text-muted)' }}
            >
              mohit mundke
            </p>
          </motion.div>

          {/* ── Progress bar ── */}
          <motion.div
            className="absolute bottom-10 left-1/2"
            style={{ transform: 'translateX(-50%)', width: 220 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {/* Track */}
            <div
              className="relative h-[2px] rounded-full overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.06)' }}
              role="progressbar"
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Loading progress"
            >
              {/* Fill */}
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #3b82f6, #7c3aed)',
                  width: `${progress}%`,
                  boxShadow: '0 0 8px rgba(59,130,246,0.6)',
                }}
              />
            </div>
            {/* Percentage */}
            <div className="mt-2 text-center">
              <span
                className="mono text-xs"
                style={{ color: 'var(--text-muted)' }}
              >
                {Math.round(progress)}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="exit"
          className="fixed inset-0 z-[9999]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: FADE_OUT_DURATION / 1000 }}
          style={{ background: '#050508' }}
        />
      )}
    </AnimatePresence>
  );
}

/* ── ParticleDot sub-component ── */
function ParticleDot({ particle }: { particle: Particle }) {
  const rad = (particle.angle * Math.PI) / 180;
  const cx = Math.cos(rad) * particle.radius;
  const cy = Math.sin(rad) * particle.radius;

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: particle.size,
        height: particle.size,
        left: '50%',
        top: '50%',
        marginLeft: -particle.size / 2,
        marginTop: -particle.size / 2,
        background: 'linear-gradient(135deg, #3b82f6, #7c3aed)',
        boxShadow: '0 0 6px rgba(59,130,246,0.5)',
      }}
      initial={{ x: cx, y: cy, opacity: 0, scale: 0 }}
      animate={{
        x: [
          cx,
          Math.cos(rad + Math.PI / 3) * particle.radius,
          Math.cos(rad + (2 * Math.PI) / 3) * particle.radius,
          Math.cos(rad + Math.PI) * particle.radius,
          Math.cos(rad + (4 * Math.PI) / 3) * particle.radius,
          Math.cos(rad + (5 * Math.PI) / 3) * particle.radius,
          cx,
        ],
        y: [
          cy,
          Math.sin(rad + Math.PI / 3) * particle.radius,
          Math.sin(rad + (2 * Math.PI) / 3) * particle.radius,
          Math.sin(rad + Math.PI) * particle.radius,
          Math.sin(rad + (4 * Math.PI) / 3) * particle.radius,
          Math.sin(rad + (5 * Math.PI) / 3) * particle.radius,
          cy,
        ],
        opacity: [0, 0.8, 0.6, 0.9, 0.5, 0.8, 0],
        scale: [0, 1, 0.8, 1, 0.7, 1, 0],
      }}
      transition={{
        duration: 2.8 * particle.speed,
        delay: particle.delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}
