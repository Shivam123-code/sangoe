'use client';
import { motion } from 'framer-motion';
import {
  Cloud,
  LayoutDashboard,
  Cpu,
  ShieldCheck,
  Rocket,
  Layers
} from 'lucide-react';
import styles from './TrustStrip.module.css';

const ITEMS = [
  { 
    icon: Cloud, 
    text: '9 Business Clouds', 
    tagline: 'Modular Growth OS', 
    color: '#7C3AED', 
    bg: '#f5f0ff', 
    glow: 'rgba(124, 58, 237, 0.12)' 
  },
  { 
    icon: Layers, 
    text: 'One Unified Platform', 
    tagline: 'Zero Data Silos', 
    color: '#3B82F6', 
    bg: '#eff6ff', 
    glow: 'rgba(59, 130, 246, 0.12)' 
  },
  { 
    icon: LayoutDashboard, 
    text: 'Founder Dashboard', 
    tagline: 'Real-Time KPIs', 
    color: '#10B981', 
    bg: '#ecfdf5', 
    glow: 'rgba(16, 185, 129, 0.12)' 
  },
  { 
    icon: Cpu, 
    text: 'AI Co-Pilot Ready', 
    tagline: 'Smart Agent Hub', 
    color: '#F59E0B', 
    bg: '#fffbeb', 
    glow: 'rgba(245, 158, 11, 0.12)' 
  },
  { 
    icon: ShieldCheck, 
    text: 'Compliance Driven', 
    tagline: 'Zero Legal Risks', 
    color: '#EF4444', 
    bg: '#fef2f2', 
    glow: 'rgba(239, 68, 68, 0.12)' 
  },
  { 
    icon: Rocket, 
    text: 'Startup to IPO Framework', 
    tagline: 'Structured Scale', 
    color: '#8B5CF6', 
    bg: '#f5f3ff', 
    glow: 'rgba(139, 92, 246, 0.12)' 
  },
];

// Duplicate items 3 times for a seamless infinite marquee loop
const MARQUEE_ITEMS = [...ITEMS, ...ITEMS, ...ITEMS];

const iconVariants = {
  idle: { rotate: 0, scale: 1 },
  hover: {
    rotate: [0, -8, 8, 0],
    scale: 1.05,
    transition: {
      duration: 0.45,
      ease: 'easeInOut',
    },
  },
};

export default function TrustStrip() {
  return (
    <div className={styles.wrapper}>
      {/* Curved wave that bridges the hero to the strip */}
      <div className={styles.waveBridge}>
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,0 C360,72 1080,72 1440,0 L1440,72 L0,72 Z" fill="currentColor"/>
        </svg>
      </div>

      <section className={styles.strip}>
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            {MARQUEE_ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  className={styles.card}
                  whileHover="hover"
                  style={{
                    '--card-theme-color': item.color,
                    '--card-glow-color': item.glow,
                  }}
                >
                  {/* Status dot in the corner */}
                  <span className={styles.statusDot} style={{ backgroundColor: item.color }} />

                  {/* Left Side: Animated Icon */}
                  <motion.span 
                    className={styles.iconWrap} 
                    style={{ background: item.bg, color: item.color }}
                    variants={iconVariants}
                    animate="idle"
                  >
                    <Icon size={18} strokeWidth={2.2} />
                  </motion.span>

                  {/* Right Side: Text Info */}
                  <div className={styles.info}>
                    <span className={styles.title}>{item.text}</span>
                    <span className={styles.tagline}>{item.tagline}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
