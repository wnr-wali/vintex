import { useEffect } from 'react';

/**
 * useScrollAnimation - Registers an IntersectionObserver that adds the
 * 'visible' class to elements with animation classes, triggering CSS
 * transitions. Re-runs whenever deps change (e.g., after data loads).
 */
export default function useScrollAnimation(deps = []) {
  useEffect(() => {
    // Small delay ensures all elements are rendered before observing
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              // Once visible, stop observing — avoids re-triggering issues
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
      );

      const animatedEls = document.querySelectorAll(
        '.fade-up:not(.visible), .slide-left:not(.visible), .slide-right:not(.visible), .scale-in:not(.visible)'
      );
      animatedEls.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
