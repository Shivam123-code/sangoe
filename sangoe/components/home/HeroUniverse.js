'use client';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowRight, Play, TrendingUp, ShieldCheck, Zap, BarChart3, Users, Globe } from 'lucide-react';
import styles from './HeroUniverse.module.css';

/* ── Three.js scene loaded only on client (no SSR) ── */
const UniverseCanvas = dynamic(() => import('./UniverseCanvas'), {
  ssr: false,
  loading: () => <div className={styles.canvasPlaceholder} />,
});

/* ── Dashboard KPI data ── */
const KPI_CARDS = [
  { label: 'Revenue MTD', value: '₹84.2L', change: '+18%', up: true, color: '#10b981', icon: TrendingUp },
  { label: 'Compliance', value: '98.4%', change: 'Healthy', up: true, color: '#a855f7', icon: ShieldCheck },
  { label: 'Team Output', value: '94/100', change: '+6 pts', up: true, color: '#3b82f6', icon: Users },
  { label: 'AI Actions', value: '1,247', change: 'this week', up: true, color: '#f59e0b', icon: Zap },
];

const CHART_BARS = [
  { h: 40, label: 'Jan' }, { h: 58, label: 'Feb' }, { h: 45, label: 'Mar' },
  { h: 72, label: 'Apr' }, { h: 63, label: 'May' }, { h: 88, label: 'Jun' },
  { h: 95, label: 'Jul' },
];

const MODULES_ACTIVE = [
  { name: 'Sales Cloud', dot: '#f97316' },
  { name: 'HR Cloud', dot: '#3b82f6' },
  { name: 'Finance', dot: '#f59e0b' },
  { name: 'Compliance', dot: '#a855f7' },
  { name: 'Operations', dot: '#10b981' },
  { name: 'AI Co-Pilot', dot: '#06b6d4' },
];

export default function HeroUniverse() {
  return (
    <section className={styles.hero}>
      {/* ── Three.js Canvas Background ── */}
      <div className={styles.canvasWrap}>
        <UniverseCanvas />
      </div>

      {/* ── Background overlays ── */}
      <div className={styles.bgOverlayBottom} />
      <div className={styles.bgOverlayLeft} />

      {/* ── Main content grid ── */}
      <div className={styles.inner}>
        {/* LEFT — Text content */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <Globe size={13} />
            <span>India&apos;s #1 Business Growth OS for MSMEs &amp; Startups</span>
          </div>

          {/* Heading */}
          <h1 className={styles.h1}>
            One Platform.<br />
            <span className={styles.gradText}>Infinite Growth.</span>
          </h1>

          {/* Sub */}
          <p className={styles.sub}>
            Sangoe unifies Sales, HR, Operations, Compliance, Finance &amp; AI Intelligence
            into a single command centre — built exclusively for Indian MSMEs &amp; Startups.
          </p>

          {/* CTAs */}
          <div className={styles.ctaRow}>
            <motion.a
              href="/contact"
              className={styles.btnPrimary}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Start Free Trial <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="/platform"
              className={styles.btnGhost}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className={styles.playRing}><Play size={12} fill="currentColor" /></span>
              Watch Demo
            </motion.a>
          </div>

          {/* Stats row */}
          <div className={styles.statsRow}>
            {[
              { n: '500+', l: 'Businesses' },
              { n: '21+', l: 'Industries' },
              { n: 'Enterprise', l: 'Business Clouds' },
              { n: '98%', l: 'Compliance Rate' },
            ].map((s, i) => (
              <div key={i} className={styles.stat}>
                <span className={styles.statN}>{s.n}</span>
                <span className={styles.statL}>{s.l}</span>
              </div>
            ))}
          </div>
        </motion.div>
 
        {/* RIGHT — Glassmorphism Dashboard */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, y: 40, rotateY: -8 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          style={{ perspective: '1200px' }}
        >
          <div className={styles.dashboard}>
            {/* Dashboard top bar */}
            <div className={styles.dashTop}>
              <div className={styles.dashDots}>
                <span style={{ background: '#ff5f57' }} />
                <span style={{ background: '#ffbd2e' }} />
                <span style={{ background: '#28ca41' }} />
              </div>
              <div className={styles.dashTitle}>
                <BarChart3 size={13} color="#a78bfa" />
                <span>Sangoe FounderOS™ — Live Dashboard</span>
              </div>
              <div className={styles.dashLive}>
                <span className={styles.liveDot} />
                <span>Live</span>
              </div>
            </div>
 
            {/* KPI cards */}
            <div className={styles.kpiGrid}>
              {KPI_CARDS.map((k, i) => {
                const Icon = k.icon;
                return (
                  <motion.div
                    key={i}
                    className={styles.kpiCard}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    style={{ '--accent': k.color }}
                  >
                    <div className={styles.kpiTop}>
                      <span className={styles.kpiLabel}>{k.label}</span>
                      <span className={styles.kpiIcon} style={{ color: k.color, background: `${k.color}18` }}>
                        <Icon size={12} />
                      </span>
                    </div>
                    <div className={styles.kpiVal}>{k.value}</div>
                    <div className={styles.kpiChange} style={{ color: k.up ? '#10b981' : '#ef4444' }}>
                      {k.up ? '▲' : '▼'} {k.change}
                    </div>
                  </motion.div>
                );
              })}
            </div>
 
            {/* Chart + Modules row */}
            <div className={styles.midRow}>
              {/* Revenue chart */}
              <div className={styles.chartBox}>
                <div className={styles.chartHeader}>
                  <span>Revenue Trend</span>
                  <span style={{ color: '#10b981', fontSize: '0.7rem' }}>+18% MoM</span>
                </div>
                <div className={styles.chartBars}>
                  {CHART_BARS.map((b, i) => (
                    <div key={i} className={styles.barWrap}>
                      <motion.div
                        className={styles.bar}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: 0.9 + i * 0.08, duration: 0.5, ease: 'easeOut' }}
                        style={{
                          height: `${b.h}%`,
                          background: i === 6
                            ? 'linear-gradient(180deg, #a78bfa, #7c3aed)'
                            : 'linear-gradient(180deg, #4f46e540, #7c3aed30)',
                        }}
                      />
                      <span className={styles.barLabel}>{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>
 
              {/* Active modules */}
              <div className={styles.modulesBox}>
                <div className={styles.chartHeader}>
                  <span>Active Modules</span>
                  <span style={{ color: '#a78bfa', fontSize: '0.7rem' }}>Active</span>
                </div>
                <div className={styles.modulesList}>
                  {MODULES_ACTIVE.map((m, i) => (
                    <div key={i} className={styles.moduleRow}>
                      <span className={styles.moduleDot} style={{ background: m.dot }} />
                      <span className={styles.moduleName}>{m.name}</span>
                      <span className={styles.moduleStatus}>●</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom alert */}
            <div className={styles.alertRow}>
              <span className={styles.alertDot} />
              <span style={{ color: '#8b85a8', fontSize: '0.72rem' }}>
                AI Co-Pilot: <span style={{ color: '#a78bfa' }}>12 actions automated today</span>
                &nbsp;•&nbsp;Next compliance filing in <span style={{ color: '#f59e0b' }}>3 days</span>
              </span>
            </div>
          </div>

          {/* Floating badges around dashboard */}
          <motion.div
            className={styles.floatBadge}
            style={{ top: '-18px', right: '30px' }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span>🚀</span> IPO Ready Score: <strong>87%</strong>
          </motion.div>

          <motion.div
            className={styles.floatBadge}
            style={{ bottom: '-16px', left: '20px' }}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <span>🛡️</span> Zero compliance risk
          </motion.div>
        </motion.div>
      </div>

      {/* ── Planet legend strip ── */}
      <motion.div
        className={styles.legendStrip}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        {[
          { label: 'Sales & CRM', color: '#f97316' },
          { label: 'HR & People', color: '#3b82f6' },
          { label: 'Operations', color: '#10b981' },
          { label: 'Finance', color: '#f59e0b' },
          { label: 'Compliance', color: '#a855f7' },
          { label: 'AI Co-Pilot', color: '#06b6d4' },
        ].map((item, i) => (
          <div key={i} className={styles.legendItem}>
            <span className={styles.legendDot} style={{ background: item.color, boxShadow: `0 0 8px ${item.color}` }} />
            <span>{item.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
