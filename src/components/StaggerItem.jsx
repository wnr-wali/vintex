import { motion, useReducedMotion } from 'framer-motion';
import { staggerItem } from '../lib/motion';

/**
 * StaggerItem — a single item inside a stagger container.
 *
 * Use as a child of a <Reveal variant={staggerContainer(...)}>: it inherits
 * the container's in-view "show" trigger and animates in sequence. Renders a
 * plain element under reduced motion (matching <Reveal>'s static fallback).
 */
export default function StaggerItem({ children, as = 'div', className, whileHover, whileTap, ...rest }) {
  const reduce = useReducedMotion();
  const Tag = as;

  if (reduce) {
    // Static element — drop motion-only props so they don't hit the DOM.
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
      variants={staggerItem}
      whileHover={whileHover}
      whileTap={whileTap}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
