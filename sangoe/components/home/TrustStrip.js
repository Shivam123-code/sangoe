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
  { icon: Cloud,           text: '9 Business Clouds',        color: '#7C3AED', bg: '#f5f0ff' },
  { icon: Layers,          text: 'One Unified Platform',     color: '#3B82F6', bg: '#eff6ff' },
  { icon: LayoutDashboard, text: 'Founder Dashboard',        color: '#10B981', bg: '#ecfdf5' },
  { icon: Cpu,             text: 'AI Co-Pilot Ready',        color: '#F59E0B', bg: '#fffbeb' },
  { icon: ShieldCheck,     text: 'Compliance Driven',        color: '#EF4444', bg: '#fef2f2' },
  { icon: Rocket,          text: 'Startup to IPO Framework', color: '#8B5CF6', bg: '#f5f3ff' },
];

export default function TrustStrip() {
  return (
    <div className={styles.wrapper}>
      {/* Curved wave that bridges the hero to the strip */}
      <div className={styles.waveBridge}>
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,0 C360,72 1080,72 1440,0 L1440,72 L0,72 Z" fill="#ffffff"/>
        </svg>
      </div>

      <section className={styles.strip}>
        <div className={styles.inner}>
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className={styles.pill}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45, ease: 'easeOut' }}
                whileHover={{ y: -3, scale: 1.03 }}
              >
                <span className={styles.iconWrap} style={{ background: item.bg, color: item.color }}>
                  <Icon size={15} strokeWidth={2.2} />
                </span>
                <span className={styles.text}>{item.text}</span>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
