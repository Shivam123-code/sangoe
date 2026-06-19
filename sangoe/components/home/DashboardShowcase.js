'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  BarChart2, Users, Briefcase, DollarSign,
  CheckCircle2, AlertTriangle, TrendingUp,
  ShieldCheck, Search, Bell, ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import styles from './DashboardShowcase.module.css';

/* ── Sparkline SVG ── */
function Spark({ color, path }) {
  return (
    <svg width="54" height="22" viewBox="0 0 54 22" fill="none" style={{ display: 'block' }}>
      <path d={path} stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d={`${path} L54,22 L0,22 Z`} fill={`${color}1a`} />
    </svg>
  );
}

/* ── KPI tile ── */
function KpiTile({ label, value, trend, trendColor, sparkPath }) {
  return (
    <div className={styles.kpiTile}>
      <div className={styles.kpiLbl}>{label}</div>
      <div className={styles.kpiVal}>{value}</div>
      <div className={styles.kpiFoot}>
        <Spark color={trendColor} path={sparkPath || 'M0,18 C12,13 24,9 36,6 S48,2 54,1'} />
        <span className={styles.kpiTrend} style={{ color: trendColor }}>{trend}</span>
      </div>
    </div>
  );
}

/* ── Mini bar chart ── */
function MiniBar({ bars, color }) {
  const max = Math.max(...bars);
  return (
    <div className={styles.miniBar}>
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className={styles.bar}
          style={{ background: color + '80' }}
          initial={{ height: 0 }}
          whileInView={{ height: `${(h / max) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
}

/* ── Dashboard card ── */
function DashCard({ title, icon: Icon, color, kpis, alerts, bars, chartLabel }) {
  return (
    <div className={styles.dashCard}>
      {/* Sidebar */}
      <div className={styles.dSidebar}>
        <div className={styles.dSideIcon} style={{ background: color }}><Icon size={12} color="#fff" /></div>
        {['⊞','⊟','⊠','⊡','⊟'].map((s, i) => (
          <div key={i} className={styles.dSideItem}>{s}</div>
        ))}
      </div>

      {/* Main */}
      <div className={styles.dMain}>
        {/* Top bar */}
        <div className={styles.dTopBar}>
          <div className={styles.dTitleRow}>
            <span className={styles.dDot} style={{ background: color }} />
            <span className={styles.dTitle}>{title}</span>
          </div>
          <div className={styles.dIcons}>
            <Search size={10} color="#94a3b8" />
            <Bell   size={10} color="#94a3b8" />
            <div className={styles.dAvatar} style={{ background: color }} />
          </div>
        </div>

        {/* Sub header */}
        <div className={styles.dSubBar}>
          <span className={styles.dSubTitle}>{title}</span>
          <span className={styles.dBadge} style={{ color, background: `${color}14`, border: `1px solid ${color}28` }}>Live ▾</span>
        </div>

        {/* KPIs */}
        <div className={styles.dKpiGrid}>
          {kpis.map((k, i) => <KpiTile key={i} {...k} />)}
        </div>

        {/* Bottom row: chart + alerts */}
        <div className={styles.dBottom}>
          <div className={styles.dChart}>
            <div className={styles.dChartLabel}>{chartLabel}</div>
            <MiniBar bars={bars} color={color} />
          </div>
          <div className={styles.dAlerts}>
            {alerts.map((a, i) => {
              const Ic = a.icon;
              return (
                <div key={i} className={styles.dAlert}>
                  <Ic size={9} style={{ color: a.color, flexShrink: 0 }} />
                  <span>{a.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Dashboard data from Hero.js MOCK_DATA ── */
const SHOWCASES = [
  {
    id: 'dashboard',
    from: 'right',   // slides in from right
    color: '#7c3aed',
    icon: BarChart2,
    title: 'FounderOS™ Dashboard',
    tag: 'Central Command',
    heading: 'Your Entire Business.\nOne Dashboard.',
    desc: 'See monthly revenue, compliance status, IPO readiness, project delivery — all at a glance. No spreadsheets. No guesswork.',
    features: ['Real-time P&L', 'Compliance score', 'IPO readiness tracker', 'Business health score'],
    kpis: [
      { label: 'Monthly Revenue',   value: '₹42.8L', trend: '▲ +12.5%', trendColor: '#7c3aed', sparkPath: 'M0,18 C10,14 22,9 34,6 S46,2 54,1' },
      { label: 'Compliance Tasks',  value: '28/28',  trend: '✓ 100%',   trendColor: '#10b981', sparkPath: 'M0,20 C10,18 22,14 34,8 S46,4 54,1' },
      { label: 'IPO Readiness',     value: '87/100', trend: '★ Advanced', trendColor: '#6366f1', sparkPath: 'M0,16 C10,13 22,10 34,7 S46,3 54,2' },
    ],
    alerts: [
      { icon: CheckCircle2, color: '#10b981', text: 'Payroll audit completed' },
      { icon: AlertTriangle, color: '#3b82f6', text: 'PF filing due in 4 days' },
    ],
    bars: [35, 48, 62, 78, 94],
    chartLabel: 'Business Growth Forecast',
  },
  {
    id: 'hr',
    from: 'left',    // slides in from left
    color: '#10b981',
    icon: Users,
    title: 'HR & Team Operations',
    tag: 'People Management',
    heading: 'Manage People.\nScale Teams Effortlessly.',
    desc: 'From payroll to performance appraisals — manage your entire workforce with real-time data, attendance, and smart insights.',
    features: ['Payroll automation', 'Leave & attendance', 'Appraisal cycles', 'Hiring pipeline'],
    kpis: [
      { label: 'Total Employees', value: '142',    trend: '▲ +4 this mo', trendColor: '#10b981', sparkPath: 'M0,20 C10,16 22,12 34,8 S46,4 54,1' },
      { label: 'Attrition Rate',  value: '4.2%',   trend: '▼ -1.1%',     trendColor: '#10b981', sparkPath: 'M0,4 C10,7 22,11 34,14 S46,17 54,20' },
      { label: 'Avg Performance', value: '4.8/5',  trend: '★ Excellent',  trendColor: '#f59e0b', sparkPath: 'M0,18 C10,14 22,9 34,6 S46,2 54,1' },
    ],
    alerts: [
      { icon: CheckCircle2, color: '#10b981', text: 'Appraisals completed' },
      { icon: Users, color: '#3b82f6', text: '3 candidates in finals' },
    ],
    bars: [20, 35, 25, 45, 60],
    chartLabel: 'Hiring vs Attrition (YTD)',
  },
  {
    id: 'projects',
    from: 'right',
    color: '#f97316',
    icon: Briefcase,
    title: 'Project Management',
    tag: 'Execution Engine',
    heading: 'Deliver Projects.\nOn Time. Every Time.',
    desc: 'Track milestones, manage resources, monitor billable hours and ensure 100% client satisfaction with full project visibility.',
    features: ['Gantt & Kanban views', 'Resource allocation', 'Billable hour tracking', 'Client milestone sign-off'],
    kpis: [
      { label: 'Active Projects',  value: '24',     trend: '4 near deadline',  trendColor: '#3b82f6', sparkPath: 'M0,16 C10,12 22,10 34,7 S46,3 54,2' },
      { label: 'Overall Progress', value: '78%',    trend: '▲ On Track',       trendColor: '#10b981', sparkPath: 'M0,18 C10,13 22,9 34,6 S46,2 54,1' },
      { label: 'Billable Hours',   value: '1,450',  trend: '▲ +120 hrs',       trendColor: '#7c3aed', sparkPath: 'M0,20 C10,15 22,11 34,7 S46,3 54,1' },
    ],
    alerts: [
      { icon: AlertTriangle, color: '#f59e0b', text: 'Alpha deadline in 2 days' },
      { icon: CheckCircle2, color: '#10b981', text: 'Phase 1 milestone signed' },
    ],
    bars: [40, 50, 75, 85, 95],
    chartLabel: 'Project Completion Rate',
  },
  {
    id: 'finance',
    from: 'left',
    color: '#3b82f6',
    icon: DollarSign,
    title: 'Finance & Compliance',
    tag: 'Financial Control',
    heading: 'Full Financial Control.\nZero Compliance Risk.',
    desc: 'Real-time cash flow, automated GST/TDS filings, P&L reports and audit-ready financials — all in one unified cloud.',
    features: ['GST & TDS automation', 'Cash flow forecasting', 'P&L & balance sheet', 'Audit trail management'],
    kpis: [
      { label: 'Cash Flow',      value: '₹1.2Cr', trend: '▲ +15% vs last', trendColor: '#10b981', sparkPath: 'M0,18 C10,13 22,9 34,6 S46,2 54,1' },
      { label: 'Compliance',     value: '100%',   trend: '✓ Fully Done',   trendColor: '#10b981', sparkPath: 'M0,20 C10,18 22,14 34,8 S46,4 54,1' },
      { label: 'Net Profit',     value: '24%',    trend: '▲ +2.5%',        trendColor: '#7c3aed', sparkPath: 'M0,16 C10,13 22,10 34,7 S46,3 54,2' },
    ],
    alerts: [
      { icon: CheckCircle2, color: '#10b981', text: 'Monthly reconciliation done' },
      { icon: AlertTriangle, color: '#ef4444', text: '3 invoices overdue 15+ days' },
    ],
    bars: [30, 45, 40, 60, 85],
    chartLabel: 'Revenue vs Expenses',
  },
];

/* ── Showcase row — alternating layout ── */
function ShowcaseRow({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const isEven = index % 2 === 0;
  const slideDir = item.from === 'right' ? 60 : -60;

  return (
    <div ref={ref} className={`${styles.row} ${isEven ? styles.rowNormal : styles.rowReverse}`}>
      {/* Text side */}
      <motion.div
        className={styles.textSide}
        initial={{ opacity: 0, x: -slideDir }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className={styles.rowTag} style={{ color: item.color, background: `${item.color}12`, border: `1px solid ${item.color}25` }}>
          {item.tag}
        </span>
        <h3 className={styles.rowH3}>
          {item.heading.split('\n').map((line, i) => (
            <span key={i}>{i > 0 && <br />}{line}</span>
          ))}
        </h3>
        <p className={styles.rowDesc}>{item.desc}</p>
        <ul className={styles.featureList}>
          {item.features.map((f, i) => (
            <li key={i} className={styles.feature}>
              <CheckCircle2 size={14} color={item.color} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <Link href="/platform" className={styles.rowCta} style={{ background: item.color }}>
          Explore {item.tag} <ArrowRight size={14} />
        </Link>
      </motion.div>

      {/* Dashboard card side */}
      <motion.div
        className={styles.cardSide}
        initial={{ opacity: 0, x: slideDir }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.cardGlow} style={{ background: `${item.color}18` }} />
        <DashCard {...item} />
      </motion.div>
    </div>
  );
}

/* ── Main section ── */
export default function DashboardShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.headerTag}>Platform Showcase</span>
          <h2 className={styles.h2}>
            One Platform.<br />
            <span className={styles.grad}>Every Business Function.</span>
          </h2>
          <p className={styles.headerSub}>
            Sangoe&apos;s 9 Business Clouds work together as one unified operating system.
            See each module in action.
          </p>
        </motion.div>

        {/* Showcase rows */}
        {SHOWCASES.map((item, i) => (
          <ShowcaseRow key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
