import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '../lib/motion';

/**
 * StitchDivider — a thin animated "running-stitch" line that draws itself
 * outward from a small gold knot when scrolled into view. A decorative
 * section break that echoes the embroidery theme. Honors reduced motion.
 */
export default function StitchDivider({ className = '' }) {
  const reduce = useReducedMotion();

  return (
    <div className={`flex justify-center py-10 md:py-14 ${className}`} aria-hidden="true">
      <motion.div
        className="relative flex w-full max-w-[440px] items-center justify-center"
        initial={reduce ? false : 'hidden'}
        whileInView="show"
        viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      >
        <motion.span
          variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.9, ease: EASE.out } } }}
          style={{
            originX: 0.5,
            backgroundImage: 'repeating-linear-gradient(to right, #c8a84b 0 5px, transparent 5px 11px)',
          }}
          className="h-px w-full opacity-70"
        />
        <motion.span
          variants={{
            hidden: { scale: 0, opacity: 0 },
            show: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.45, ease: EASE.out } },
          }}
          className="absolute h-2 w-2 rotate-45 bg-gold"
        />
      </motion.div>
    </div>
  );
}
