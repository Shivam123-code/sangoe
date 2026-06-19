'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './HeroVideo.module.css';

export default function HeroVideo() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const heroY  = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const heroOp = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const hintOp = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <section ref={ref} className={styles.hero}>
      {/* ── Video background ── */}
      <video
        className={styles.videoBg}
        autoPlay muted loop playsInline
        poster="/hero/Floating_island_business_ecosystem_202606191917.jpeg"
      >
        <source src="/hero/magnific_animate-without-changing-_mC0rXC0hJQ.mp4" type="video/mp4" />
      </video>

      {/* ── Layered overlays for text contrast ── */}
      <div className={styles.overlayFull} />
      <div className={styles.overlayTop} />
      <div className={styles.overlayCenter} />

      {/* ── District labels ── */}
      {[
        { label: 'Sales Cloud',      color: '#7c3aed', top: '24%', left: '10%' },
        { label: 'Marketing Cloud',  color: '#10b981', top: '22%', right: '9%' },
        { label: 'Operations',       color: '#f97316', top: '63%', left: '6%' },
        { label: 'Finance & AI',     color: '#3b82f6', top: '70%', right: '7%' },
      ].map((d, i) => (
        <motion.div
          key={i}
          className={styles.district}
          style={{ top: d.top, left: d.left, right: d.right }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
        >
          <span className={styles.districtDot} style={{ background: d.color, boxShadow: `0 0 8px ${d.color}` }} />
          {d.label}
        </motion.div>
      ))}

      {/* ── Hero content ── */}
      <motion.div className={styles.contentWrap} style={{ y: heroY, opacity: heroOp }}>
        <div className={styles.contentInner}>

          {/* Tag */}
          <motion.div
            className={styles.tag}
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className={styles.tagDot} />
            Business Growth Operating System™
          </motion.div>

          {/* H1 */}
          <motion.h1
            className={styles.h1}
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Build a Business<br />
            That <span className={styles.grad}>Runs</span> Without{' '}
            <span className={styles.grad}>You.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Sangoe helps startups, MSMEs and growing enterprises systemize operations,
            increase profitability, ensure compliance, manage people, control projects
            and become investor &amp; IPO ready.
          </motion.p>

          {/* Email CTA row */}
          <motion.div
            className={styles.emailRow}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
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
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link href="/contact"     className={styles.subCta} id="hero-demo">Book Live Demo</Link>
            <span className={styles.bullet}>·</span>
            <Link href="/assessments" className={styles.subCta} id="hero-assess">Get Free Assessment</Link>
            <span className={styles.bullet}>·</span>
            <Link href="/pricing"     className={styles.subCta} id="hero-trial">Start Free Trial</Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className={styles.statsRow}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.95 }}
          >
            {[
              { n: '500+', l: 'Businesses' },
              { n: '21+',  l: 'Industries' },
              { n: '9',    l: 'Business Clouds' },
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
