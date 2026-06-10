'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  TrendingUp, 
  Users, 
  Briefcase, 
  DollarSign, 
  ShieldCheck, 
  Building, 
  BarChart3, 
  Heart, 
  ArrowRight,
  ArrowUpRight,
  Check,
  TrendingDown,
  Rocket,
  Globe,
  Compass
} from 'lucide-react';
import { useReveal, fadeUp, stagger, scaleIn } from '../ui/motion';
import styles from './SolutionStatement.module.css';

const GRID_ITEMS = [
  { icon: TrendingUp, name: 'Sales & Revenue', color: '#3B82F6', bg: '#EFF6FF' },
  { icon: Users, name: 'HR & Workforce', color: '#10B981', bg: '#ECFDF5' },
  { icon: Briefcase, name: 'Project & Operations', color: '#F55F0B', bg: '#FFFBEB' },
  { icon: DollarSign, name: 'Procurement & Finance', color: '#EF4444', bg: '#FEF2F2' },
  { isBadge: true }, // CENTER CELL BADGE
  { icon: Building, name: 'Assets & Infra', color: '#6366F1', bg: '#EEF2FF' },
  { icon: ShieldCheck, name: 'Compliance & Govt', color: '#8B5CF6', bg: '#F5F3FF' },
  { icon: BarChart3, name: 'Business Intel', color: '#EC4899', bg: '#FDF2F8' },
  { icon: Heart, name: 'Customer Success', color: '#06B6D4', bg: '#ECFEFF' },
];

const SUB_PILLS = [
  { text: 'Profitability', icon: ArrowUpRight, color: '#10B981' },
  { text: 'Compliance', icon: Check, color: '#7C3AED' },
  { text: 'Risk Control', icon: TrendingDown, color: '#EF4444' },
  { text: 'IPO Ready', icon: Rocket, color: '#3B82F6' },
  { text: 'SaaS Ecosystem', icon: Globe, color: '#06B6D4' },
  { text: 'Founder Dashboard', icon: Compass, color: '#F55F0B' },
];

export default function SolutionStatement() {
  const { ref, inView } = useReveal(0.15);

  return (
    <section className={`section ${styles.section}`} ref={ref} id="platform">
      <div className="wrap">
        <div className={styles.grid}>

          {/* LEFT — Integration Grid with center badge */}
          <motion.div
            className={styles.gridWrap}
            variants={stagger(0.05)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            {GRID_ITEMS.map((item, i) => {
              if (item.isBadge) {
                return (
                  <motion.div
                    key="badge"
                    variants={scaleIn}
                    className={styles.centerBadge}
                    animate={{ boxShadow: ['0 0 0 0 rgba(124, 58, 237, 0.4)', '0 0 0 16px rgba(124, 58, 237, 0)'] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: 'easeOut' }}
                  >
                    <span className={styles.badgeNum}>9+</span>
                    <span className={styles.badgeLabel}>Clouds</span>
                  </motion.div>
                );
              }

              const IconComponent = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className={`card ${styles.cloudTile}`}
                  whileHover={{ scale: 1.05, y: -4, borderColor: item.color, boxShadow: `0 12px 30px ${item.color}15` }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <span className={styles.cloudIcon} style={{ color: item.color, background: item.bg }}>
                    <IconComponent size={24} />
                  </span>
                  <span className={styles.cloudName}>{item.name}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* RIGHT — Text Content */}
          <motion.div
            className={styles.right}
            variants={stagger(0.08)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ delay: 0.15 }}
          >
            <motion.span variants={fadeUp} className="tag">One Platform. Total Control.</motion.span>

            <motion.h2 variants={fadeUp} className={styles.h2}>
              One Platform to <span className={styles.highlightText}>Run, Control</span> &amp; Scale Your Business
            </motion.h2>

            <motion.p variants={fadeUp} className={styles.sub}>
              Sangoe brings all core operations into one unified Business Growth Operating System. Replaces scattered files, spreadsheets, and disconnected SaaS subscriptions.
            </motion.p>

            {/* Sub-Pills */}
            <motion.div variants={stagger(0.06)} className={styles.pills}>
              {SUB_PILLS.map((p, i) => {
                const IconComponent = p.icon;
                return (
                  <motion.span 
                    key={i} 
                    variants={fadeUp} 
                    className={styles.pill}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <IconComponent size={12} style={{ color: p.color }} />
                    {p.text}
                  </motion.span>
                );
              })}
            </motion.div>

            <motion.div variants={fadeUp} style={{ marginTop: '32px' }}>
              <Link href="/products" className={`btn btn-purple ${styles.cta}`} id="explore-platform">
                Explore All Products <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
