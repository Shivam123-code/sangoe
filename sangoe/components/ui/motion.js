'use client';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

/** Returns a ref and a boolean `inView`. Triggers once when element enters viewport. */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  return { ref, inView };
}

/** Standard section entrance variants */
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: .65, ease: [.22,1,.36,1] } },
};

export const stagger = (delay = 0) => ({
  hidden: {},
  show:   { transition: { staggerChildren: .12, delayChildren: delay } },
});

export const scaleIn = {
  hidden: { opacity: 0, scale: .85 },
  show:   { opacity: 1, scale: 1, transition: { duration: .55, ease: [.22,1,.36,1] } },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  show:   { opacity: 1, x:   0, transition: { duration: .65, ease: [.22,1,.36,1] } },
};

export const slideRight = {
  hidden: { opacity: 0, x: 40 },
  show:   { opacity: 1, x:  0, transition: { duration: .65, ease: [.22,1,.36,1] } },
};
