import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { EASE, staggerContainer, staggerItem, maskReveal } from '../lib/motion';

const TRUST = ['10+ Export Countries', 'Low MOQ · 50 units', 'Free Samples'];

/**
 * Hero — full-bleed cinematic hero for the home page.
 *
 * Layout: a full-screen embroidery image (with a forest→ink scrim for
 * legibility) behind a floating glassmorphism content panel, plus an
 * overlapping glass "feature" card for depth and a scroll cue.
 *
 * Motion: staggered entrance + editorial mask-reveal headline + a subtle
 * scroll-driven parallax on the background. Everything is gated on
 * useReducedMotion() and animates only transform/opacity (no layout shift).
 */
export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  // Parallax: drift the background inside a slightly over-scanned frame.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  const panel = staggerContainer(0.1, 0.2);
  const headline = staggerContainer(0.1);
  const hover = reduce ? undefined : { scale: 1.03 };
  const tap = reduce ? undefined : { scale: 0.97 };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-dvh w-full overflow-hidden bg-ink"
    >
      {/* ── Full-bleed background image + parallax ── */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={
          reduce
            ? { backgroundImage: "url('/hero_embroidery_detail.png')" }
            : { backgroundImage: "url('/hero_embroidery_detail.png')", y: bgY, scale: 1.2 }
        }
      />

      {/* ── Legibility scrims ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/65 to-ink/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/45"
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-7xl flex-col justify-center px-5 py-28 md:px-12 lg:px-20">
        {/* Floating glass panel */}
        <motion.div
          variants={panel}
          initial={reduce ? false : 'hidden'}
          animate="show"
          className="relative max-w-xl rounded-2xl border border-gold/25 bg-ink/30 p-7 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.75)] backdrop-blur-2xl md:p-10"
        >
          {/* Eyebrow */}
          <motion.div
            variants={staggerItem}
            className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-light"
          >
            <span className="h-px w-8 flex-shrink-0 bg-gold-light/70"></span>
            Est. in Lahore, Pakistan
          </motion.div>

          {/* Headline — editorial mask reveal */}
          <motion.h1
            variants={headline}
            className="font-serif text-5xl font-light leading-[1.05] text-cream md:text-7xl"
          >
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span variants={maskReveal} className="block">
                Where Craft Meets
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span variants={maskReveal} className="block italic text-gold-light">
                Global Standards
              </motion.span>
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={staggerItem}
            className="mt-4 font-serif text-lg italic text-gold-light/90 md:text-xl"
          >
            The Name of Excellence
          </motion.p>

          {/* Paragraph */}
          <motion.p
            variants={staggerItem}
            className="mt-4 max-w-md text-sm leading-relaxed text-cream/70"
          >
            Premium Embroidery Manufacturer &amp; Exporter — transforming fine textiles into
            embroidered masterpieces, trusted across 10+ countries.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={staggerItem} className="mt-7 flex flex-wrap gap-3">
            <motion.div whileHover={hover} whileTap={tap} className="inline-flex">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-gold-light px-5 py-3 text-[13px] font-semibold text-ink transition-colors hover:bg-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
              >
                Request a Sample
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={hover} whileTap={tap} className="inline-flex">
              <Link
                to="/products"
                className="inline-flex items-center rounded-md border border-gold-light/50 px-5 py-3 text-[13px] font-semibold text-cream transition-colors hover:bg-cream/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
              >
                View Products
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust row */}
          <motion.ul
            variants={staggerItem}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-gold/15 pt-5 text-[11px] uppercase tracking-[0.14em] text-cream/60"
          >
            {TRUST.map((item, i) => (
              <li key={item} className="flex items-center gap-5">
                {i > 0 && <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gold/60"></span>}
                {item}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* ── Overlapping glass feature card (desktop) ── */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-16 right-10 z-10 hidden w-56 rounded-xl border border-gold/25 bg-ink/30 p-2.5 shadow-2xl backdrop-blur-xl lg:block"
        initial={reduce ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reduce ? 0 : 1, duration: 0.7, ease: EASE.out }}
      >
        <div className="overflow-hidden rounded-lg">
          <img
            src="/embroidered_neckline_gold.jpg"
            alt=""
            className="h-32 w-full object-cover"
          />
        </div>
        <div className="flex items-center justify-between px-1 pt-2.5">
          <span className="text-[10px] uppercase tracking-[0.18em] text-gold-light">Bridal Couture</span>
          <span className="text-[10px] text-cream/50">Premium Tier</span>
        </div>
      </motion.div>

      {/* ── Scroll cue ── */}
      <motion.div
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 text-gold-light/80"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduce ? 0 : 1.3, duration: 0.6, ease: EASE.out }}
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.25em]">Scroll</span>
        {reduce ? (
          <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
        ) : (
          <motion.span
            className="inline-flex"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
          </motion.span>
        )}
      </motion.div>
    </section>
  );
}
