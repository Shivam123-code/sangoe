'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Award, TrendingUp, Users } from 'lucide-react';
import { useReveal, fadeUp, slideRight, stagger } from '../ui/motion';
import styles from './JourneySection.module.css';

const STEPS = [
  { label: 'Startup',           color: '#7C3AED' },
  { label: 'Growing Company',   color: '#6366F1' },
  { label: 'Systemized',        color: '#3B82F6' },
  { label: 'Process Driven',    color: '#10B981' },
  { label: 'Compliance Driven', color: '#F59E0B' },
  { label: 'Governance Driven', color: '#F55F0B' },
  { label: 'Investor Ready',    color: '#EF4444' },
  { label: 'IPO Ready ✦',       color: '#8B5CF6' },
];

const STATS = [
  { value: 500, suffix: '+', label: 'Businesses Transformed', icon: TrendingUp, color: '#7C3AED' },
  { value: 98,  suffix: '%', label: 'Avg. Compliance Score',  icon: Users,      color: '#10B981' },
];

/* ── Animated counter — uses IntersectionObserver directly ── */
function AnimatedNumber({ target, suffix, color }) {
  const [val, setVal] = useState(0);
  const elRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1800, step = 16;
          const inc = (target / dur) * step;
          let cur = 0;
          const timer = setInterval(() => {
            cur += inc;
            if (cur >= target) { setVal(target); clearInterval(timer); }
            else setVal(Math.floor(cur));
          }, step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={elRef} style={{ color }}>
      {val}{suffix}
    </span>
  );
}

export default function JourneySection() {
  const { ref, inView } = useReveal(0.1);

  return (
    <section className={`section ${styles.section}`} ref={ref}>
      <div className="wrap">
        <div className={styles.grid}>

          {/* ── LEFT PANEL ────────────────────────────────── */}
          <motion.div
            className={styles.left}
            variants={stagger(0.1)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            {/* Tag */}
            <motion.span variants={fadeUp} className="tag">
              Always Here To Help You Succeed
            </motion.span>

            {/* Headline */}
            <motion.h2 variants={fadeUp} className={styles.h2}>
              Real Stories From<br />
              <span className="purple-text">Real Users</span>
            </motion.h2>

            {/* Sub */}
            <motion.p variants={fadeUp} className={styles.sub}>
              Founders across India trust Sangoe to transform their operations, cut compliance risk, and scale with confidence.
            </motion.p>

            {/* Big animated stats */}
            <motion.div variants={fadeUp} className={styles.statsRow}>
              {STATS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className={styles.statBox}>
                    <span className={styles.statIcon} style={{ background: s.color + '15', color: s.color }}>
                      <Icon size={16} />
                    </span>
                    <div className={styles.bigNum}>
                      <AnimatedNumber target={s.value} suffix={s.suffix} color={s.color} />
                    </div>
                    <div className={styles.bigLabel}>{s.label}</div>
                  </div>
                );
              })}
            </motion.div>

            {/* Testimonial quote card */}
            <motion.div variants={fadeUp} className={styles.quoteCard}>
              <div className={styles.quoteStars}>
                {[1,2,3,4,5].map(i => <Star key={i} size={13} fill="#FBBF24" color="#FBBF24" />)}
              </div>
              <p className={styles.quoteText}>
                "Sangoe transformed the way our team manages operations. We closed 3× more deals and reduced compliance risk to near zero."
              </p>
              <div className={styles.quotePerson}>
                <div className={styles.quoteAvatar}>RM</div>
                <div>
                  <div className={styles.quoteName}>Rajesh Mehta</div>
                  <div className={styles.quoteRole}>CEO · Mehta Construction Pvt. Ltd.</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT PANEL ───────────────────────────────── */}
          <motion.div
            className={styles.right}
            variants={slideRight}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ delay: 0.2 }}
          >
            {/* Dashboard image */}
            <div className={styles.mockupWrap}>
              <Image
                src="/images/dashboard_mockup.png"
                alt="Sangoe FounderOS Dashboard"
                width={560}
                height={340}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority={false}
              />
              {/* Floating badge over image */}
              <div className={styles.floatingBadge}>
                <span className={styles.badgeDot} />
                <span>Live FounderOS™ Dashboard</span>
              </div>
            </div>

            {/* Journey roadmap card */}
            <div className={styles.journeyCard}>
              <div className={styles.journeyHeader}>
                <div className={styles.journeyTitle}>
                  <Award size={15} style={{ color: '#7C3AED' }} />
                  <span>Startup to IPO Journey™</span>
                </div>
                <span className={styles.journeyBadge}>8 Stages</span>
              </div>

              {/* Steps as a horizontal progress track */}
              <div className={styles.stepsTrack}>
                {STEPS.map((s, i) => (
                  <div key={i} className={styles.stepItem}>
                    <motion.div
                      className={styles.stepDot}
                      style={{ background: s.color, boxShadow: `0 0 0 3px ${s.color}20` }}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.4 + i * 0.08, type: 'spring', stiffness: 300 }}
                    >
                      <span>{i + 1}</span>
                    </motion.div>
                    {i < STEPS.length - 1 && (
                      <motion.div
                        className={styles.stepConnector}
                        initial={{ scaleX: 0 }}
                        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ delay: 0.45 + i * 0.08, duration: 0.3 }}
                        style={{ background: `linear-gradient(90deg, ${s.color}, ${STEPS[i+1].color})` }}
                      />
                    )}
                    <span className={styles.stepLabel} style={{ color: s.color }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
