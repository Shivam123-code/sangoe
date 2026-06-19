'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Star, Award, Shield } from 'lucide-react';
import styles from './TrustBadges.module.css';

const CERTIFICATIONS = [
  { src: '/certifications/iso-27001.png', label: 'ISO 27001', sub: 'Information Security', color: '#3b82f6' },
  { src: '/certifications/iso-42001.png', label: 'ISO 42001', sub: 'AI Management', color: '#7c3aed' },
  { src: '/certifications/pci-dss.png',   label: 'PCI DSS',   sub: 'Payment Security',   color: '#f59e0b' },
  { src: '/certifications/esg-aligned.jpg', label: 'ESG Aligned', sub: 'Sustainability', color: '#10b981' },
  { src: '/certifications/sdg-contributor.jpg', label: 'SDG Contributor', sub: 'UN Goals', color: '#06b6d4' },
];

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

        {/* Certification badges grid */}
        <motion.div
          className={styles.certGrid}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={i}
              className={styles.certCard}
              whileHover={{ y: -4, boxShadow: `0 16px 48px ${cert.color}22` }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.certImgWrap}>
                <Image
                  src={cert.src}
                  alt={cert.label}
                  width={80}
                  height={80}
                  style={{ objectFit: 'contain', width: '80px', height: '80px' }}
                />
              </div>
              <div className={styles.certInfo}>
                <span className={styles.certLabel} style={{ color: cert.color }}>{cert.label}</span>
                <span className={styles.certSub}>{cert.sub}</span>
              </div>
              <span className={styles.certBadge} style={{ background: `${cert.color}15`, color: cert.color }}>
                <Award size={10} /> Certified
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom trust strip */}
        <motion.div
          className={styles.bottomStrip}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {['🔒 256-bit SSL Encrypted', '🇮🇳 Made in India', '🏛️ MSME Registered', '📋 GDPR Compliant', '🔐 SOC 2 Ready'].map((item, i) => (
            <span key={i} className={styles.stripItem}>{item}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
