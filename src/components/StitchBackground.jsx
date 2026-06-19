import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '../lib/motion';

/**
 * StitchBackground — an animated embroidery-stitch motif for the dark
 * page-hero panels. Gold "threads" draw themselves across the panel and a
 * couple of running-stitch tick lines fade in, evoking machine embroidery.
 *
 * Sits as an absolute, decorative (aria-hidden, pointer-events-none) layer
 * behind the hero content. Honors prefers-reduced-motion (renders the final
 * static state). Replaces the old diagonal-stripe texture.
 */
const THREADS = [
  'M -40 92 C 280 28 520 172 820 92 S 1240 28 1500 112',
  'M -40 224 C 240 160 560 286 880 200 S 1260 150 1500 232',
  'M -40 332 C 300 290 600 362 900 300 S 1280 268 1500 332',
];

const STITCH_LINES = [
  'M 110 150 H 1330',
  'M 60 280 H 1380',
];

export default function StitchBackground({ className = '' }) {
  const reduce = useReducedMotion();

  return (
    <svg
      className={`absolute inset-0 h-full w-full pointer-events-none ${className}`}
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      {/* Flowing threads that draw themselves on */}
      {THREADS.map((d, i) => (
        <motion.path
          key={`thread-${i}`}
          d={d}
          stroke="#c8a84b"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.22 - i * 0.045 }}
          transition={
            reduce
              ? { duration: 0 }
              : {
                  pathLength: { duration: 2.4, delay: 0.25 + i * 0.45, ease: EASE.out },
                  opacity: { duration: 0.8, delay: 0.25 + i * 0.45 },
                }
          }
        />
      ))}

      {/* Running-stitch tick lines */}
      {STITCH_LINES.map((d, i) => (
        <motion.path
          key={`stitch-${i}`}
          d={d}
          stroke="#e8cc7a"
          strokeWidth="1.5"
          strokeDasharray="2 13"
          strokeLinecap="round"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 0.18 }}
          transition={reduce ? { duration: 0 } : { duration: 1, delay: 1.1 + i * 0.3, ease: EASE.out }}
        />
      ))}
    </svg>
  );
}
