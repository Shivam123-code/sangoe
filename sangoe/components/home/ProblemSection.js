'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  XCircle, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp, 
  Shield, 
  Cpu, 
  Activity, 
  UserCheck, 
  Star 
} from 'lucide-react';
import { useReveal, fadeUp, slideRight, stagger } from '../ui/motion';
import styles from './ProblemSection.module.css';

const PAINS = [
  'Founder doing everything — no delegation',
  'No accountability, no SOPs, no systems',
  'Delayed projects & poor collections',
  'Compliance penalties & rising risks',
  'Employee dependency & hidden costs',
  'Data scattered across multiple tools',
];

const AFTERS = [
  { icon: Activity, label: 'System Driven', color: '#10B981', bg: '#ECFDF5' },
  { icon: TrendingUp, label: 'Data Driven', color: '#3B82F6', bg: '#EFF6FF' },
  { icon: Shield, label: 'Compliance Controlled', color: '#8B5CF6', bg: '#F5F3FF' },
  { icon: Cpu, label: 'Measurable KPIs', color: '#EC4899', bg: '#FDF2F8' },
  { icon: UserCheck, label: 'Scalable Growth', color: '#F59E0B', bg: '#FFFBEB' },
  { icon: Star, label: 'Investor Ready', color: '#06B6D4', bg: '#ECFEFF' },
];

const AVATARS = [
  { text: 'RM', bg: '#EFF6FF', color: '#1D4ED8' },
  { text: 'SK', bg: '#ECFDF5', color: '#047857' },
  { text: 'AT', bg: '#F5F3FF', color: '#6D28D9' },
  { text: 'PV', bg: '#FFFBEB', color: '#B45309' },
  { text: 'DK', bg: '#FEF2F2', color: '#B91C1C' },
];

export default function ProblemSection() {
  const { ref, inView } = useReveal(0.1);

  return (
    <section className={`section ${styles.section}`} ref={ref} id="about">
      <div className="wrap">
        <div className={styles.grid}>

          {/* LEFT */}
          <motion.div
            className={styles.left}
            variants={stagger(0.1)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <motion.span className="tag" variants={fadeUp}>Get To Know Sangoe</motion.span>

            <motion.h2 variants={fadeUp} className={styles.h2}>
              Most Businesses Struggle<br />
              <span className="purple-text">With These Core Gaps</span>
            </motion.h2>

            <motion.p variants={fadeUp} className={styles.lead}>
              At Sangoe we believe technology should simplify growth, not complicate it. That is why we created one unified Business Growth Operating System for Indian MSMEs.
            </motion.p>

            <motion.ul variants={stagger(0.12)} className={styles.pains}>
              {PAINS.map((p, i) => (
                <motion.li key={i} variants={fadeUp} className={styles.pain}>
                  <XCircle className={styles.xIcon} size={16} />
                  <span>{p}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} className={styles.result}>
              <strong style={{ color: '#EF4444' }}>Result →</strong> Growth Stops. Profitability Reduces. Stress Increases.
            </motion.div>

            <motion.div variants={fadeUp} style={{ marginTop: '28px' }}>
              <Link href="/platform" className={`btn btn-purple ${styles.cta}`} id="problem-connect">
                Connect Your Business <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className={styles.right}
            variants={slideRight}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ delay: 0.2 }}
          >
            {/* Comparison card */}
            <div className={`card ${styles.compCard}`}>
              {/* Before */}
              <div className={styles.compSide}>
                <span className={styles.compLabel}>Before Sangoe</span>
                {['Founder Dependent', 'Manual Processes', 'Compliance Gaps', 'No Visibility', 'Operational Chaos'].map(t => (
                  <div key={t} className={styles.compRow}>
                    <XCircle className={styles.compX} size={14} />
                    <span>{t}</span>
                  </div>
                ))}
              </div>

              <div className={styles.compArrow}>
                <ArrowRight size={16} />
              </div>

              {/* After */}
              <div className={styles.compSide}>
                <span className={`${styles.compLabel} ${styles.afterLabel}`}>After Sangoe</span>
                <div className={styles.afterGrid}>
                  {AFTERS.map((a, i) => {
                    const IconComp = a.icon;
                    return (
                      <motion.div
                        key={i}
                        className={styles.afterPill}
                        whileHover={{ scale: 1.05, backgroundColor: a.color, color: '#fff' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        style={{ '--hover-col': a.color }}
                      >
                        <IconComp size={14} className={styles.pillIcon} style={{ color: a.color }} />
                        <span>{a.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className={`card ${styles.statsRow}`}>
              {[
                { n: '500+', l: 'Companies Transformed' },
                { n: '18+',  l: 'Industries Served' },
                { n: '98%',  l: 'Satisfaction Rate' },
              ].map((s, i) => (
                <div key={i} className={styles.stat}>
                  <span className={styles.statN}>{s.n}</span>
                  <span className={styles.statL}>{s.l}</span>
                </div>
              ))}
            </div>

            {/* Social proof tag */}
            <motion.div
              className={styles.socialProof}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <div className={styles.avatarStack}>
                {AVATARS.map((a, i) => (
                  <span 
                    key={i} 
                    className={styles.avatar} 
                    style={{ zIndex: 5 - i, background: a.bg, color: a.color }}
                  >
                    {a.text}
                  </span>
                ))}
              </div>
              <span className={styles.proofText}>Trusted by 500+ Indian businesses</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
