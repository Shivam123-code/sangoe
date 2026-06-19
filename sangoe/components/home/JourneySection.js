'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Award, TrendingUp, Users } from 'lucide-react';
import { useReveal, fadeUp, slideRight, stagger } from '../ui/motion';
import styles from './JourneySection.module.css';



const STATS = [
  { value: 4.9, suffix: ' ★', label: 'Google Review Rating', icon: Star, color: '#F59E0B' },
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
            if (cur >= target) { 
              setVal(target); 
              clearInterval(timer); 
            } else {
              setVal(target % 1 === 0 ? Math.floor(cur) : Number(cur.toFixed(1)));
            }
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


          </motion.div>

        </div>
      </div>
    </section>
  );
}
