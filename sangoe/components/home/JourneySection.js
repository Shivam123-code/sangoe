'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Award 
} from 'lucide-react';
import { useReveal, fadeUp, slideRight, stagger } from '../ui/motion';
import styles from './JourneySection.module.css';

const STEPS = [
  'Startup',
  'Growing Company',
  'Systemized Company',
  'Process Driven',
  'Compliance Driven',
  'Governance Driven',
  'Investor Ready',
  'IPO Ready',
];

function AnimatedNumber({ target, suffix }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  const { inView } = useReveal(0.5);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const dur = 1800, step = 16;
    const inc = (target / dur) * step;
    let cur = 0;
    const timer = setInterval(() => {
      cur += inc;
      if (cur >= target) { setVal(target); clearInterval(timer); }
      else setVal(Math.floor(cur));
    }, step);
  }, [inView, target]);

  return <span>{val}{suffix}</span>;
}

export default function JourneySection() {
  const { ref, inView } = useReveal(0.1);

  return (
    <section className={`section ${styles.section}`} ref={ref}>
      <div className="wrap">
        <div className={styles.grid}>

          {/* LEFT */}
          <motion.div
            className={styles.left}
            variants={stagger(0.1)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <motion.span variants={fadeUp} className="tag">Always Here To Help You Succeed</motion.span>

            <motion.h2 variants={fadeUp} className={styles.h2}>
              Real Stories From Real Users<br />
              <span className="purple-text">Discover Sangoe Differences</span>
            </motion.h2>

            {/* Big Stats */}
            <motion.div variants={fadeUp} className={styles.statsBlock}>
              <div className={styles.bigStat}>
                <span className={styles.bigNum} id="stat-companies">
                  <AnimatedNumber target={500} suffix="+" />
                </span>
                <span className={styles.bigLabel}>Companies Transformed</span>
              </div>
              <div className={styles.bigStat}>
                <span className={styles.bigNum} id="stat-compliance">
                  <AnimatedNumber target={98} suffix="%" />
                </span>
                <span className={styles.bigLabel}>Compliance Rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Journey + Testimonial */}
          <motion.div
            className={styles.right}
            variants={slideRight}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ delay: 0.15 }}
          >
            {/* Testimonial card */}
            <div className={`card ${styles.testCard}`}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FBBF24" color="#FBBF24" />
                ))}
              </div>
              <p className={styles.quote}>
                "Sangoe transformed the way our team manages operations. We closed 3x more deals and reduced compliance risk to near zero. It is truly the all-in-one system we've been looking for."
              </p>
              <div className={styles.testPerson}>
                <div className={styles.testAvatar}>RM</div>
                <div>
                  <div className={styles.testName}>Rajesh Mehta</div>
                  <div className={styles.testRole}>CEO, Mehta Construction Pvt. Ltd.</div>
                </div>
                <div className={styles.testNav}>
                  <button className={styles.testBtn} aria-label="Previous Testimonial">
                    <ChevronLeft size={16} />
                  </button>
                  <button className={styles.testBtn} aria-label="Next Testimonial">
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Journey roadmap */}
            <div className={`card ${styles.journeyCard}`}>
              <div className={styles.journeyHeader}>
                <span className={styles.journeyTitle}>
                  <Award size={16} style={{ color: '#7C3AED', marginRight: '6px', verticalAlign: 'middle' }} />
                  Startup to IPO Journey™
                </span>
                <span className={styles.journeyBadge}>8 Stages</span>
              </div>
              <div className={styles.steps}>
                {STEPS.map((s, i) => (
                  <div key={i} className={styles.step}>
                    <div className={styles.stepDot}>
                      <span>{i + 1}</span>
                    </div>
                    {i < STEPS.length - 1 && <div className={styles.stepLine} />}
                    <span className={styles.stepLabel}>{s}</span>
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
