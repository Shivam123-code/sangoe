'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './HeroUniverse.module.css';

export default function HeroUniverse() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const heroOp = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const hintOp = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  // Planet specifications: name, color, rx, ry, duration, delay
  const PLANETS = [
    { name: 'SUPPORT',    color: '#eab308', glow: '0 0 16px rgba(234, 179, 8, 0.8)',   rx: '300px', ry: '110px', dur: '28s', delay: '-6s' },
    { name: 'SALES',      color: '#3b82f6', glow: '0 0 16px rgba(59, 130, 246, 0.8)',  rx: '400px', ry: '150px', dur: '36s', delay: '-10s' },
    { name: 'AUTOMATION', color: '#f97316', glow: '0 0 16px rgba(249, 115, 22, 0.8)',  rx: '400px', ry: '150px', dur: '36s', delay: '-28s' },
    { name: 'ANALYTICS',  color: '#a855f7', glow: '0 0 16px rgba(168, 85, 247, 0.8)',  rx: '500px', ry: '190px', dur: '44s', delay: '-14s' },
    { name: 'SERVICE',    color: '#06b6d4', glow: '0 0 16px rgba(6, 182, 212, 0.8)',   rx: '500px', ry: '190px', dur: '44s', delay: '-36s' },
    { name: 'MARKETING',  color: '#10b981', glow: '0 0 16px rgba(16, 185, 129, 0.8)',  rx: '600px', ry: '230px', dur: '52s', delay: '-20s' },
  ];

  return (
    <section ref={ref} className={styles.hero}>
      {/* ── Background image ── */}
      <div className={styles.background} />

      {/* ── Orbit system (centered behind content card) ── */}
      <div className={styles.system}>
        {/* SVG Orbit Lines */}
        <svg className={styles.orbitsSvg} viewBox="0 0 1400 600">
          <ellipse cx="700" cy="300" rx="300" ry="110" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" fill="none" />
          <ellipse cx="700" cy="300" rx="400" ry="150" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" fill="none" />
          <ellipse cx="700" cy="300" rx="500" ry="190" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" fill="none" />
          <ellipse cx="700" cy="300" rx="600" ry="230" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" fill="none" />
        </svg>

        {/* Orbiting Planets */}
        {PLANETS.map((planet, index) => (
          <div
            key={index}
            className={styles.planetWrap}
            style={{
              '--rx': planet.rx,
              '--ry': planet.ry,
              animationDuration: planet.dur,
              animationDelay: planet.delay,
            }}
          >
            <div
              className={styles.planet}
              style={{
                animationDuration: planet.dur,
                animationDelay: planet.delay,
              }}
            >
              <div
                className={styles.planetDot}
                style={{
                  background: planet.color,
                  color: planet.color,
                  boxShadow: planet.glow,
                }}
              />
              <span className={styles.planetLabel}>{planet.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Central Hero content (centered on top of orbits) ── */}
      <motion.div className={styles.contentWrap} style={{ opacity: heroOp }}>
        <div className={styles.contentInner}>
          
          {/* Tag */}
          <motion.div
            className={styles.tag}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className={styles.tagDot} />
            Business Growth Operating System™
          </motion.div>

          {/* H1 Title */}
          <motion.h1
            className={styles.h1}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Build a Business<br />
            That <span className={styles.grad}>Runs</span> Without{' '}
            <span className={styles.grad}>You.</span>
          </motion.h1>

          {/* Sub Description */}
          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Sangoe helps startups, MSMEs and growing enterprises systemize operations,
            increase profitability, ensure compliance, manage people, control projects
            and become investor &amp; IPO ready.
          </motion.p>

          {/* Email CTA row */}
          <motion.div
            className={styles.emailRow}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <input
              type="email"
              placeholder="Enter Email Address"
              className={styles.emailInput}
              id="hero-email"
            />
            <button className={styles.emailBtn} id="hero-try-btn">
              Try Sangoe Now <ArrowRight size={14} />
            </button>
          </motion.div>

          {/* Sub CTAs */}
          <motion.div
            className={styles.subCtaRow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link href="/contact" className={styles.subCta} id="hero-demo">Book Live Demo</Link>
            <span className={styles.bullet}>·</span>
            <Link href="/assessments" className={styles.subCta} id="hero-assess">Get Free Assessment</Link>
            <span className={styles.bullet}>·</span>
            <Link href="/pricing" className={styles.subCta} id="hero-trial">Start Free Trial</Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            className={styles.statsRow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.95 }}
          >
            {[
              { n: '500+', l: 'Businesses' },
              { n: '21+',  l: 'Industries' },
              { n: 'Unified', l: 'Business Clouds' },
              { n: '98%',  l: 'Compliance Rate' },
            ].map((s, i) => (
              <div key={i} className={styles.stat}>
                <span className={styles.statN}>{s.n}</span>
                <span className={styles.statL}>{s.l}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* ── Scroll hint ── */}
      <motion.div className={styles.scrollHint} style={{ opacity: hintOp }}>
        <div className={styles.mouse}><div className={styles.wheel} /></div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
}
