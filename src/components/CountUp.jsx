import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion, animate } from 'framer-motion';

/**
 * CountUp — animates a number from 0 to `value` the first time it scrolls
 * into view. Honors prefers-reduced-motion (renders the final value at once).
 *
 * Renders an inline <span> so it can drop into existing styled containers.
 * Non-numeric stats (e.g. "USA #1", "15–20") should stay as plain text.
 */
export default function CountUp({ value, prefix = '', suffix = '', duration = 1.4, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    // Under reduced motion the initial state already holds the final value,
    // and we only animate once the number scrolls into view.
    if (reduce || !inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
