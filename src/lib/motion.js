/**
 * motion.js — Centralized motion language for the cinematic redesign.
 *
 * Two-tier pacing:
 *   - Micro-interactions stay snappy (150–250ms) — hover, press, toggles.
 *   - Cinematic reveals run slower (450–900ms) with an expo-out curve.
 *
 * All durations/easings live here so every animation shares one rhythm
 * (UI/UX Pro Max: `motion-consistency`). Import these instead of
 * hard-coding numbers in components.
 */

// Shared easing curves (cubic-bezier control points).
export const EASE = {
  out: [0.16, 1, 0.3, 1], // expo-out — primary cinematic entrance curve
  inOut: [0.65, 0, 0.35, 1], // smooth, balanced
  in: [0.4, 0, 1, 1], // accelerate — for exits
};

// Shared durations (seconds).
export const DURATION = {
  micro: 0.2, // hover / press / small toggles
  base: 0.5, // standard scroll reveal
  cinematic: 0.8, // hero sequence, large statements
  exit: 0.32, // ~65% of base (UI/UX Pro Max: `exit-faster-than-enter`)
};

// Default travel distance for directional reveals (px).
const DIST = 28;

/* ── Reusable reveal variants ─────────────────────────────────────────
   Each exposes `hidden` and `show` states so they can be driven by
   `initial="hidden"` + `whileInView="show"` (see <Reveal />).            */

export const fadeUp = {
  hidden: { opacity: 0, y: DIST },
  show: { opacity: 1, y: 0, transition: { duration: DURATION.base, ease: EASE.out } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: DURATION.base, ease: EASE.out } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: DURATION.base, ease: EASE.out } },
};

export const slideLeft = {
  hidden: { opacity: 0, x: DIST },
  show: { opacity: 1, x: 0, transition: { duration: DURATION.base, ease: EASE.out } },
};

export const slideRight = {
  hidden: { opacity: 0, x: -DIST },
  show: { opacity: 1, x: 0, transition: { duration: DURATION.base, ease: EASE.out } },
};

// Editorial text "mask reveal": parent must clip overflow; child rises in.
export const maskReveal = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: DURATION.cinematic, ease: EASE.out } },
};

/* ── Stagger helpers (used from Phase 3 onward) ───────────────────────── */

// A container whose children's `show` state is staggered. Use with
// <motion.* variants={staggerContainer()}> and `staggerItem` children.
export const staggerContainer = (stagger = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

// Child element to place inside a staggerContainer. The parent drives
// timing, so this has no delay of its own.
export const staggerItem = {
  hidden: { opacity: 0, y: DIST },
  show: { opacity: 1, y: 0, transition: { duration: DURATION.base, ease: EASE.out } },
};

/* ── Hover lift presets (whileHover for cards) ────────────────────────
   Driven by Framer (not CSS) because motion components keep an inline
   transform that would override a Tailwind hover:-translate utility.     */
export const cardLift = {
  y: -6,
  boxShadow: '0 24px 50px -16px rgba(14, 26, 18, 0.30)',
  transition: { duration: 0.25, ease: EASE.out },
};

export const cardLiftDark = {
  y: -6,
  boxShadow: '0 24px 50px -16px rgba(0, 0, 0, 0.45)',
  transition: { duration: 0.25, ease: EASE.out },
};
