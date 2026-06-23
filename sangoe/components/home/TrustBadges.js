'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Shield, Lock, Heart, Briefcase, FileCheck, ShieldCheck } from 'lucide-react';
import styles from './TrustBadges.module.css';

const RATINGS = [
  {
    platform: 'Google Reviews',
    rating: '4.9',
    count: '120+ reviews',
    icon: '🌟',
    color: '#f59e0b',
  },
  {
    platform: 'Clutch',
    rating: '4.8',
    count: 'Top Rated 2024',
    icon: '🏆',
    color: '#ef4444',
  },
  {
    platform: 'NPS Score',
    rating: '72',
    count: 'World Class',
    icon: '📊',
    color: '#10b981',
  },
  {
    platform: 'Trustpilot',
    rating: '4.7',
    count: 'Excellent',
    icon: '✅',
    color: '#00b67a',
  },
];

const TRUST_ITEMS = [
  { text: '256-bit SSL Encrypted', icon: Lock, color: '#10b981', bg: 'rgba(16, 185, 129, 0.06)' },
  { text: 'Made in India', icon: Heart, color: '#f97316', bg: 'rgba(249, 115, 22, 0.06)' },
  { text: 'MSME Registered', icon: Briefcase, color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.06)' },
  { text: 'GDPR Compliant', icon: FileCheck, color: '#a855f7', bg: 'rgba(168, 85, 247, 0.06)' },
  { text: 'SOC 2 Ready', icon: ShieldCheck, color: '#7c3aed', bg: 'rgba(124, 58, 237, 0.06)' },
];

export default function TrustBadges() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.inner}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.tag}>
            <Shield size={12} /> Verified &amp; Certified
          </span>
          <h2 className={styles.h2}>
            Built on <span className={styles.grad}>Trust. Backed by Proof.</span>
          </h2>
          <p className={styles.sub}>
            Enterprise-grade security, global certifications, and real user ratings
            — because your business deserves nothing less.
          </p>
        </motion.div>

        {/* Ratings row */}
        <motion.div
          className={styles.ratingsRow}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {RATINGS.map((r, i) => (
            <div key={i} className={styles.ratingCard}>
              <div className={styles.ratingTop}>
                <span className={styles.ratingIcon}>{r.icon}</span>
                <div className={styles.ratingStars}>
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} size={11} fill={r.color} color={r.color} />
                  ))}
                </div>
              </div>
              <div className={styles.ratingNum} style={{ color: r.color }}>{r.rating}</div>
              <div className={styles.ratingPlatform}>{r.platform}</div>
              <div className={styles.ratingCount}>{r.count}</div>
            </div>
          ))}
        </motion.div>

        {/* Bottom trust strip */}
        <motion.div
          className={styles.bottomStrip}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {TRUST_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={styles.stripItemPill}
                style={{ '--badge-color': item.color, '--badge-bg': item.bg }}
              >
                <Icon size={14} className={styles.stripItemIcon} style={{ color: item.color }} />
                <span>{item.text}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
