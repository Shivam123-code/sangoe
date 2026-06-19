'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './MissionStatement.module.css';

export default function MissionStatement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className={styles.section} ref={ref}>
      {/* Background glow orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      {/* Giant decorative quote mark */}
      <div className={styles.bigQuote}>&ldquo;</div>

      <div className={styles.inner}>
        <motion.div
          className={styles.tagRow}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.tag}>Our Philosophy</span>
        </motion.div>

        <motion.p
          className={styles.statement}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          At Sangoe, we believe{' '}
          <span className={styles.accent}>technology should simplify growth,</span>
          {' '}not complicate it. That is why we created one unified{' '}
          <span className={styles.highlight}>Business Growth Operating System</span>
          {' '}for{' '}
          <span className={styles.accent}>Indian MSMEs &amp; Startups.</span>
        </motion.p>

        <motion.div
          className={styles.dividerRow}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <span className={styles.dividerLine} />
          <span className={styles.dividerDot} />
          <span className={styles.dividerLine} />
        </motion.div>

        <motion.div
          className={styles.pillarsRow}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {[
            { icon: '⚡', text: 'Simplify' },
            { icon: '🎯', text: 'Unify' },
            { icon: '📈', text: 'Scale' },
            { icon: '🛡️', text: 'Protect' },
            { icon: '🚀', text: 'Grow' },
          ].map((p, i) => (
            <div key={i} className={styles.pillar}>
              <span className={styles.pillarIcon}>{p.icon}</span>
              <span className={styles.pillarText}>{p.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
