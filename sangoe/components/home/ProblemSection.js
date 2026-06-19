'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import {
  XCircle, CheckCircle2, ArrowRight, TrendingUp, TrendingDown,
  Shield, Cpu, Activity, UserCheck, Star, AlertTriangle,
  DollarSign, Zap, BarChart3, Lock, Flame
} from 'lucide-react';
import styles from './ProblemSection.module.css';

const BEFORE_ITEMS = [
  { icon: Flame,         text: 'Founder doing everything — zero delegation',   color: '#ef4444' },
  { icon: AlertTriangle, text: 'No SOPs, no accountability, constant firefighting', color: '#f97316' },
  { icon: TrendingDown,  text: 'Delayed projects & poor cash collections',     color: '#ef4444' },
  { icon: DollarSign,    text: 'Compliance penalties bleeding profits',         color: '#f97316' },
  { icon: XCircle,       text: 'Employee dependency & hidden operational costs', color: '#ef4444' },
  { icon: AlertTriangle, text: 'Data scattered across 10+ disconnected tools', color: '#f97316' },
];

const AFTER_ITEMS = [
  { icon: Activity,   text: 'System-driven operations — runs without you', color: '#10b981' },
  { icon: BarChart3,  text: 'Real-time KPIs & complete business visibility', color: '#3b82f6' },
  { icon: Shield,     text: 'Zero compliance risk — fully automated filing', color: '#8b5cf6' },
  { icon: TrendingUp, text: 'Collections on time, cash flow under control',  color: '#10b981' },
  { icon: UserCheck,  text: 'Team-run business — scalable without chaos',    color: '#06b6d4' },
  { icon: Star,       text: 'Investor & IPO ready from Day 1',               color: '#f59e0b' },
];

const IMPACT_STATS = [
  { value: '3.2×', label: 'Revenue Growth', icon: TrendingUp, color: '#10b981' },
  { value: '90%',  label: 'Less Compliance Risk', icon: Shield, color: '#8b5cf6' },
  { value: '5 hrs', label: 'Saved Per Day / Founder', icon: Zap, color: '#f59e0b' },
  { value: '21+',  label: 'Industries Covered', icon: Lock, color: '#3b82f6' },
];

const AVATARS = [
  { text: 'RM', bg: '#EFF6FF', color: '#1D4ED8' },
  { text: 'SK', bg: '#ECFDF5', color: '#047857' },
  { text: 'AT', bg: '#F5F3FF', color: '#6D28D9' },
  { text: 'PV', bg: '#FFFBEB', color: '#B45309' },
  { text: 'DK', bg: '#FEF2F2', color: '#B91C1C' },
];

export default function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className={styles.section} ref={ref} id="problem">
      <div className={styles.orbProblem} />
      <div className={styles.orbSolution} />

      <div className="wrap">
        {/* ── Section header ── */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.tagDark}>Get To Know Sangoe</span>
          <h2 className={styles.h2}>
            Most Businesses Are Stuck in{' '}
            <span className={styles.highlightText}>Operational Chaos</span>
          </h2>
          <p className={styles.lead}>
            Without the right systems, growth stalls — no matter how hard you work.
            Here&apos;s what changes when you run on Sangoe.
          </p>
        </motion.div>

        {/* ── Dramatic B4/After comparison ── */}
        <motion.div
          className={styles.comparisonWrap}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* BEFORE panel */}
          <div className={styles.beforePanel}>
            <div className={styles.panelHeader}>
              <span className={styles.beforeBadge}>
                <XCircle size={14} /> Before Sangoe
              </span>
              <span className={styles.panelSub}>The broken reality</span>
            </div>
            <div className={styles.itemsList}>
              {BEFORE_ITEMS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    className={styles.beforeItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.35 + i * 0.07 }}
                  >
                    <span className={styles.beforeIcon} style={{ color: item.color }}>
                      <Icon size={15} />
                    </span>
                    <span>{item.text}</span>
                  </motion.div>
                );
              })}
            </div>
            <div className={styles.beforeResult}>
              <AlertTriangle size={14} />
              <span>Result: Growth stops. Stress increases. Profits erode.</span>
            </div>
          </div>

          {/* Arrow divider */}
          <div className={styles.arrowDivider}>
            <div className={styles.arrowLine} />
            <motion.div
              className={styles.arrowCircle}
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowRight size={20} color="#fff" />
            </motion.div>
            <div className={styles.arrowLabel}>Sangoe</div>
            <div className={styles.arrowLine} />
          </div>

          {/* AFTER panel */}
          <div className={styles.afterPanel}>
            <div className={styles.panelHeader}>
              <span className={styles.afterBadge}>
                <CheckCircle2 size={14} /> After Sangoe
              </span>
              <span className={styles.panelSub}>The transformed reality</span>
            </div>
            <div className={styles.itemsList}>
              {AFTER_ITEMS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    className={styles.afterItem}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.35 + i * 0.07 }}
                  >
                    <span className={styles.afterIcon} style={{ color: item.color, background: `${item.color}18` }}>
                      <Icon size={15} />
                    </span>
                    <span>{item.text}</span>
                  </motion.div>
                );
              })}
            </div>
            <div className={styles.afterResult}>
              <CheckCircle2 size={14} />
              <span>Result: Business runs itself. You scale with confidence.</span>
            </div>
          </div>
        </motion.div>

        {/* ── The Real Cost — impact stats (renamed from "Critical Business Impact") ── */}
        <motion.div
          className={styles.impactStrip}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className={styles.impactLabel}>
            <Cpu size={14} />
            <span>The Real Difference — Measured</span>
          </div>
          <div className={styles.impactGrid}>
            {IMPACT_STATS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className={styles.impactCard} style={{ '--accent': s.color }}>
                  <span className={styles.impactIcon} style={{ color: s.color, background: `${s.color}15` }}>
                    <Icon size={16} />
                  </span>
                  <span className={styles.impactVal} style={{ color: s.color }}>{s.value}</span>
                  <span className={styles.impactLbl}>{s.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Social proof + CTA ── */}
        <motion.div
          className={styles.bottomRow}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
        >
          <div className={styles.socialProof}>
            <div className={styles.avatarStack}>
              {AVATARS.map((a, i) => (
                <span key={i} className={styles.avatar} style={{ zIndex: 5 - i, background: a.bg, color: a.color }}>
                  {a.text}
                </span>
              ))}
            </div>
            <span className={styles.proofText}>Trusted by 500+ Indian MSMEs &amp; Startups</span>
          </div>
          <Link href="/platform" className={`btn btn-purple ${styles.cta}`} id="problem-connect">
            See How Sangoe Works <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
