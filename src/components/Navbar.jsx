import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
];

const linkClass = ({ isActive }) =>
  `text-xs tracking-[0.15em] uppercase font-semibold transition-colors duration-300 relative py-1 block ${isActive ? 'text-forest' : 'text-ink/80 hover:text-forest'
  }`;

// Mobile menu container variants for stagger
const drawerVariants = {
  hidden: { y: '-100%', opacity: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 26,
      stiffness: 190,
      staggerChildren: 0.08,
      delayChildren: 0.15
    }
  },
  exit: {
    y: '-100%',
    opacity: 0.9,
    transition: {
      type: 'tween',
      duration: 0.35,
      ease: [0.32, 0, 0.67, 0]
    }
  }
};

const linkItemVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  return (
    <>
      {/* ─── Main Navbar ────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 transition-all duration-500 ease-out ${scrolled
          ? 'bg-warm/98 shadow-sm py-0 backdrop-blur-md border-b border-gold/10'
          : 'bg-warm/90 py-0 backdrop-blur-md border-b border-gold/15'
          }`}
      >
        {/* Brand Logo */}
        <Link to="/" className="flex items-center z-50" aria-label="Vintex Traders Home">
          <img
            src="/logo-black.png"
            alt="Vintex Traders"
            className={`w-auto object-contain transition-all duration-500 ease-out ${scrolled ? 'h-18 md:h-22' : 'h-24 md:h-28'
              }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-9 list-none">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to} className="relative group">
              <NavLink to={to} end={to === '/'} className={linkClass}>
                {label}
              </NavLink>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-forest transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="btn-primary"
            >
              Get a Quote
            </Link>
          </li>
        </ul>

        {/* Hamburger Button (mobile only) */}
        <button
          className="flex flex-col gap-[5px] bg-transparent border-none cursor-pointer z-[60] md:hidden p-2"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-ink transition-all duration-300 origin-center ${menuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
              }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-ink transition-all duration-300 origin-center ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
          ></span>
        </button>
      </nav>

      {/* ─── Mobile Menu Drawer ─────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[55] bg-ink/40 backdrop-blur-sm md:hidden pointer-events-auto"
              onClick={toggleMenu}
              aria-hidden="true"
            />

            {/* Slide-down panel */}
            <motion.div
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 left-0 right-0 z-[58] md:hidden bg-warm border-b-2 border-gold/30 shadow-2xl overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Menu"
            >
              {/* Spacer for the fixed navbar height */}
              <div className="h-24 border-b border-gold/10"></div>

              {/* Menu links */}
              <nav className="flex flex-col px-8 pt-4 pb-8 gap-1">
                {NAV_LINKS.map(({ to, label }) => (
                  <motion.div key={to} variants={linkItemVariants}>
                    <NavLink
                      to={to}
                      end={to === '/'}
                      className={({ isActive }) =>
                        `text-sm tracking-[0.12em] uppercase font-semibold py-4 px-4 border-b border-gold/10 transition-colors duration-200 block ${isActive ? 'text-forest bg-forest/5' : 'text-ink hover:text-forest hover:bg-forest/5'
                        }`
                      }
                      onClick={toggleMenu}
                    >
                      {label}
                    </NavLink>
                  </motion.div>
                ))}

                {/* CTA button */}
                <motion.div variants={linkItemVariants} className="mt-4">
                  <Link
                    to="/contact"
                    className="btn-primary w-full text-center block"
                    onClick={toggleMenu}
                  >
                    Get a Quote
                  </Link>
                </motion.div>

                {/* Contact info */}
                <motion.div variants={linkItemVariants} className="mt-4 pt-4 border-t border-gold/15 flex flex-col gap-1">
                  <a href="tel:+923278666254" className="text-xs text-muted hover:text-forest transition-colors">
                    +92-327-8666254
                  </a>
                  <a href="mailto:waleedneem133@gmail.com" className="text-xs text-muted hover:text-forest transition-colors">
                    waleedneem133@gmail.com
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
