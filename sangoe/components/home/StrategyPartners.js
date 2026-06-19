'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import styles from './StrategyPartners.module.css';

// 17 company logos in /public/logos/
const LOGOS = Array.from({ length: 17 }, (_, i) => ({
  id: i + 1,
  src: `/logos/${i + 1}.png`,
  alt: `Partner ${i + 1}`,
}));

// Split into two marquee rows
const ROW1 = [...LOGOS.slice(0, 9), ...LOGOS.slice(0, 9)];
const ROW2 = [...LOGOS.slice(9, 17), ...LOGOS.slice(9, 17)];

export default function StrategyPartners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className={styles.section} ref={ref}>
      {/* Header */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.tag}>Ecosystem</span>
        <h2 className={styles.h2}>
          Trusted by India&apos;s Best.{' '}
          <span className={styles.grad}>Partnered with the Rest.</span>
        </h2>
        <p className={styles.sub}>
          Our growing ecosystem of strategy partners, implementation agencies,
          and enterprise clients driving growth with Sangoe.
        </p>
      </motion.div>

      {/* Marquee row 1 — scrolls left */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeRow}>
          {ROW1.map((logo, i) => (
            <div key={i} className={styles.logoCard}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={60}
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 — scrolls right */}
      <div className={styles.marqueeWrap}>
        <div className={`${styles.marqueeRow} ${styles.marqueeReverse}`}>
          {ROW2.map((logo, i) => (
            <div key={i} className={styles.logoCard}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={60}
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Strategy partner callout */}
      <motion.div
        className={styles.featuredRow}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className={styles.featuredCard}>
          <span className={styles.featuredTag}>🏆 Strategy Partner</span>
          <div className={styles.featuredContent}>
            <div className={styles.featuredLogo}>
              <Image
                src="/logos/1.png"
                alt="Nexfore Consulting"
                width={120}
                height={48}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.featuredInfo}>
              <h3 className={styles.featuredName}>Nexfore Consulting</h3>
              <p className={styles.featuredDesc}>
                Official strategy &amp; implementation partner helping MSMEs adopt the Sangoe Growth OS
                end-to-end — from onboarding to IPO readiness.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.partnerCTA}>
          <p className={styles.ctaText}>Want to become a Sangoe partner?</p>
          <a href="/partners" className={styles.ctaBtn}>
            Explore Partner Programme →
          </a>
        </div>
      </motion.div>
    </section>
  );
}
