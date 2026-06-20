import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp } from '../lib/motion';

/**
 * Reveal — scroll-into-view entrance wrapper.
 *
 * Replaces the old IntersectionObserver + CSS-class system. Wrap any
 * block of content and it fades/slides into view once, the first time it
 * scrolls near the viewport.
 *
 * Honors `prefers-reduced-motion`: when set, it renders a plain element
 * with no animation (content is shown immediately).
 *
 * Props:
 *   variant   — a variants object from src/lib/motion.js (default: fadeUp)
 *   delay     — seconds to delay the entrance (for hand-tuned sequencing)
 *   as        — the element/tag to render ('div' | 'section' | 'ul' | ...)
 *   className — passed through to the element
 *   ...rest   — any other props (style, id, onClick, …) passed through
 */
export default function Reveal({
  children,
  variant = fadeUp,
  delay = 0,
  as = 'div',
  className,
  ...rest
}) {
  const reduce = useReducedMotion();

  // Reduced motion: render the requested tag, no animation.
  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      {...rest}
      variants={variant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
