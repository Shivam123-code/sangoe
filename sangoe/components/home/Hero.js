'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  TrendingUp, 
  ShieldCheck, 
  Users,
  Briefcase,
  BarChart3,
  DollarSign,
  Leaf,
  Award,
  LayoutDashboard,
  CheckCircle2,
  AlertTriangle,
  BarChart2,
  User
} from 'lucide-react';
import styles from './Hero.module.css';

// Floating Sangoe-relevant module bubbles — all related to Sangoe's 9 clouds
const ICONS = [
  { icon: TrendingUp,   label: 'Sales Cloud',      top: '12%', left: '5%',   anim: 'floatA', delay: '0s',    size: 64, color: '#3B82F6', bg: '#EFF6FF' },
  { icon: Users,        label: 'HR Cloud',          top: '16%', left: '82%',  anim: 'floatB', delay: '.7s',   size: 58, color: '#10B981', bg: '#ECFDF5' },
  { icon: ShieldCheck,  label: 'Compliance',        top: '56%', left: '3%',   anim: 'floatC', delay: '1.3s',  size: 60, color: '#8B5CF6', bg: '#F5F3FF' },
  { icon: Briefcase,    label: 'Projects',          top: '64%', left: '86%',  anim: 'floatA', delay: '.4s',   size: 64, color: '#F55F0B', bg: '#FFF7ED' },
  { icon: DollarSign,   label: 'Finance',           top: '82%', left: '10%',  anim: 'floatB', delay: '1.9s',  size: 54, color: '#EF4444', bg: '#FEF2F2' },
  { icon: BarChart3,    label: 'Analytics',         top: '78%', left: '80%',  anim: 'floatC', delay: '1.1s',  size: 56, color: '#EC4899', bg: '#FDF2F8' },
  { icon: Leaf,         label: 'ESG',               top: '36%', left: '1%',   anim: 'floatA', delay: '.2s',   size: 50, color: '#059669', bg: '#E6F4EA' },
  { icon: Award,        label: 'IPO Ready',         top: '32%', left: '90%',  anim: 'floatB', delay: '1.6s',  size: 58, color: '#6366F1', bg: '#EEF2FF' },
];

const iconVariant = {
  hidden: { opacity: 0, scale: 0.4 },
  show: i => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.4 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const MOCK_DATA = {
  dashboard: {
    title: 'FounderOS™ Dashboard',
    metrics: [
      { label: 'Monthly Revenue', val: '₹42,80,000', trend: '▲ +12.5%', trendColor: '#7c3aed' },
      { label: 'Compliance Tasks', val: '28 / 28 Done', trend: '✓ 100% Secure', trendColor: '#10b981' },
      { label: 'Project Deliveries', val: '96.4% On-Time', trend: '▲ +2.1%', trendColor: '#7c3aed' },
      { label: 'IPO Readiness', val: '87 / 100', trend: '★ Level: Advanced', trendColor: '#6366f1' },
    ],
    alerts: [
      { text: 'Weekly payroll audit completed successfully', icon: CheckCircle2, color: '#10b981' },
      { text: 'PF & ESIC compliance filing due in 4 days', icon: AlertTriangle, color: '#3b82f6' },
      { text: 'MSME Transformation checklist is 82% complete', icon: CheckCircle2, color: '#f59e0b' },
    ],
    chartTitle: 'Business Growth Forecast (2026)',
    chartBars: [35, 48, 62, 78, 94],
    chartLabels: ['Q1', 'Q2', 'Q3', 'Q4', 'Next']
  },
  hr: {
    title: 'Team & HR Operations',
    metrics: [
      { label: 'Total Employees', val: '142', trend: '▲ +4 this month', trendColor: '#10b981' },
      { label: 'Attrition Rate', val: '4.2%', trend: '▼ -1.1%', trendColor: '#10b981' },
      { label: 'Avg Performance', val: '4.8 / 5', trend: '★ Excellent', trendColor: '#f59e0b' },
      { label: 'Open Roles', val: '6', trend: 'Actively Hiring', trendColor: '#3b82f6' },
    ],
    alerts: [
      { text: 'Annual appraisals completed for all departments', icon: CheckCircle2, color: '#10b981' },
      { text: '3 candidates pending final interview rounds', icon: Users, color: '#3b82f6' },
      { text: 'Employee satisfaction score improved to 92%', icon: TrendingUp, color: '#10b981' },
    ],
    chartTitle: 'Hiring vs Attrition (YTD)',
    chartBars: [20, 35, 25, 45, 60],
    chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
  },
  projects: {
    title: 'Project Management',
    metrics: [
      { label: 'Active Projects', val: '24', trend: '4 nearing completion', trendColor: '#3b82f6' },
      { label: 'Overall Progress', val: '78%', trend: '▲ On Track', trendColor: '#10b981' },
      { label: 'Billable Hours', val: '1,450', trend: '▲ +120 hrs', trendColor: '#7c3aed' },
      { label: 'Resource Load', val: '88%', trend: 'Optimal', trendColor: '#10b981' },
    ],
    alerts: [
      { text: 'Project "Alpha" deadline approaching in 2 days', icon: AlertTriangle, color: '#f59e0b' },
      { text: 'Client milestone signed off for phase 1', icon: CheckCircle2, color: '#10b981' },
      { text: 'Resource allocation pending for 2 new projects', icon: Users, color: '#3b82f6' },
    ],
    chartTitle: 'Project Completion Rate',
    chartBars: [40, 50, 75, 85, 95],
    chartLabels: ['W1', 'W2', 'W3', 'W4', 'W5']
  },
  compliance: {
    title: 'Compliance & Legal',
    metrics: [
      { label: 'Compliance Score', val: '100%', trend: '✓ Fully Compliant', trendColor: '#10b981' },
      { label: 'Pending Filings', val: '0', trend: 'All up to date', trendColor: '#10b981' },
      { label: 'Audit Readiness', val: 'High', trend: 'Next audit in 45 days', trendColor: '#3b82f6' },
      { label: 'Active Policies', val: '32', trend: '2 updated recently', trendColor: '#7c3aed' },
    ],
    alerts: [
      { text: 'Quarterly tax filings completed successfully', icon: CheckCircle2, color: '#10b981' },
      { text: 'Update data privacy policy as per new regulations', icon: AlertTriangle, color: '#f59e0b' },
      { text: 'Internal compliance audit passed with 0 observations', icon: ShieldCheck, color: '#10b981' },
    ],
    chartTitle: 'Compliance Task Progress',
    chartBars: [100, 100, 100, 100, 100],
    chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
  },
  finance: {
    title: 'Finance & Accounts',
    metrics: [
      { label: 'Cash Flow', val: '₹1.2Cr', trend: '▲ +15% vs last month', trendColor: '#10b981' },
      { label: 'Accounts Receivable', val: '₹45L', trend: '▼ -5%', trendColor: '#10b981' },
      { label: 'Accounts Payable', val: '₹12L', trend: 'Within limits', trendColor: '#3b82f6' },
      { label: 'Net Profit Margin', val: '24%', trend: '▲ +2.5%', trendColor: '#7c3aed' },
    ],
    alerts: [
      { text: 'Monthly reconciliation completed', icon: CheckCircle2, color: '#10b981' },
      { text: '3 invoices overdue by more than 15 days', icon: AlertTriangle, color: '#ef4444' },
      { text: 'Vendor payment run scheduled for tomorrow', icon: DollarSign, color: '#3b82f6' },
    ],
    chartTitle: 'Revenue vs Expenses',
    chartBars: [30, 45, 40, 60, 85],
    chartLabels: ['M1', 'M2', 'M3', 'M4', 'M5']
  },
  esg: {
    title: 'ESG Scorecard',
    metrics: [
      { label: 'Overall ESG Score', val: 'A-', trend: 'Top 15% in industry', trendColor: '#10b981' },
      { label: 'Carbon Footprint', val: 'Reduced 12%', trend: 'On track to net zero', trendColor: '#10b981' },
      { label: 'Diversity Ratio', val: '42%', trend: '▲ +5% YoY', trendColor: '#7c3aed' },
      { label: 'Governance Index', val: '95/100', trend: '★ Excellent', trendColor: '#3b82f6' },
    ],
    alerts: [
      { text: 'Annual sustainability report published', icon: CheckCircle2, color: '#10b981' },
      { text: '100% board members completed ethics training', icon: ShieldCheck, color: '#10b981' },
      { text: 'Initiate Q3 community outreach program', icon: Users, color: '#f59e0b' },
    ],
    chartTitle: 'ESG Metric Improvements',
    chartBars: [50, 65, 70, 85, 92],
    chartLabels: ['2022', '2023', '2024', '2025', '2026']
  }
};

// Auto-demo tab sequence (hardcoded positions removed — now computed dynamically via DOM refs)
const TAB_SEQUENCE = ['dashboard', 'hr', 'projects', 'compliance', 'finance', 'esg'];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const op = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [activeTab, setActiveTab] = useState('dashboard');
  const activeData = MOCK_DATA[activeTab];

  // ── Auto cursor ─────────────────────────────────────────────
  // Refs for precise DOM-based positioning (avoids hardcoded pixel guesses)
  const sideItemRefs = useRef({});
  const cardRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);
  const tabIndexRef = useRef(0);

  // Helper: walk the offsetParent chain to get position relative to cardEl
  const getOffsetRelativeTo = (el, cardEl) => {
    let cx = 0, cy = 0;
    let node = el;
    while (node && node !== cardEl) {
      cx += node.offsetLeft;
      cy += node.offsetTop;
      node = node.offsetParent;
    }
    return { cx, cy };
  };

  // Seed initial cursor position once the card has mounted
  useEffect(() => {
    const seedTimer = setTimeout(() => {
      const firstEl = sideItemRefs.current['dashboard'];
      const cardEl = cardRef.current;
      if (firstEl && cardEl) {
        const { cx, cy } = getOffsetRelativeTo(firstEl, cardEl);
        setCursorPos({
          x: cx + firstEl.offsetWidth / 2 - 10,
          y: cy + firstEl.offsetHeight / 2 - 2,
        });
      }
    }, 300); // small delay so layout is settled
    return () => clearTimeout(seedTimer);
  }, []);

  useEffect(() => {
    const cycle = () => {
      const nextIndex = (tabIndexRef.current + 1) % TAB_SEQUENCE.length;
      tabIndexRef.current = nextIndex;
      const nextTab = TAB_SEQUENCE[nextIndex];

      // 1. Measure exact position of sidebar item relative to the card
      const tabEl = sideItemRefs.current[nextTab];
      const cardEl = cardRef.current;

      if (tabEl && cardEl) {
        const { cx, cy } = getOffsetRelativeTo(tabEl, cardEl);
        // Place cursor tip at centre of the item
        // (subtract ~10px so SVG tip point aligns rather than SVG bounding box)
        setCursorPos({
          x: cx + tabEl.offsetWidth / 2 - 10,
          y: cy + tabEl.offsetHeight / 2 - 2,
        });
      }

      // 2. After spring settles (~650ms), fire click ripple
      const clickTimer = setTimeout(() => {
        setClicking(true);
        // 3. After ripple peak (~300ms), switch tab content
        const switchTimer = setTimeout(() => {
          setActiveTab(nextTab);
          setClicking(false);
        }, 300);
        return () => clearTimeout(switchTimer);
      }, 650);

      return () => clearTimeout(clickTimer);
    };

    const interval = setInterval(cycle, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero} ref={ref} id="hero">
      {/* Floating Orbiting Sangoe Module Badges */}
      {ICONS.map((ic, i) => {
        const IconComponent = ic.icon;
        return (
          <motion.div
            key={i}
            className={styles.floatIcon}
            style={{ top: ic.top, left: ic.left, animation: `${ic.anim} ${4 + i * 0.4}s ease-in-out ${ic.delay} infinite` }}
            custom={i}
            variants={iconVariant}
            initial="hidden"
            animate="show"
          >
            <div className={styles.iconBubble} style={{ width: ic.size, height: ic.size, color: ic.color, background: ic.bg, borderColor: ic.color + '40', padding: ic.size * 0.22, boxSizing: 'border-box' }}>
              <IconComponent />
            </div>
            <span className={styles.iconLabel}>{ic.label}</span>
          </motion.div>
        );
      })}

      {/* 3D Perspective Grid Container */}
      <div className={styles.grid3DContainer}>
        <div className={styles.grid3DLines} />
      </div>

      {/* Glow orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      <motion.div className={`wrap ${styles.content}`} style={{ y, opacity: op }}>
        <div className={styles.inner}>
          {/* Tag */}
          <div className={styles.tagWrap}>
            <span className="tag tag-dark">
              <span className={styles.tagDot} />
              Business Growth Operating System™
            </span>
          </div>

          {/* Headline */}
          <h1 className={styles.h1}>
            Build a Business<br />
            That <span className={styles.highlight}>Runs</span> Without <span className={styles.highlight}>You.</span>
          </h1>

          {/* Sub */}
          <p className={styles.sub}>
            Sangoe helps startups, MSMEs and growing enterprises systemize operations, increase profitability, ensure compliance, manage people, control projects and become investor &amp; IPO ready.
          </p>

          {/* Email CTA */}
          <div className={styles.emailRow}>
            <input
              type="email"
              placeholder="Enter Email Address"
              className={styles.emailInput}
              id="hero-email"
            />
            <button className={`btn btn-purple ${styles.emailBtn}`} id="hero-try-btn">
              Try Sangoe Now
            </button>
          </div>

          {/* Sub CTAs */}
          <div className={styles.subCtaRow}>
            <Link href="/contact" className={styles.subCta} id="hero-demo">Book Live Demo</Link>
            <span className={styles.divider}>·</span>
            <Link href="/assessments" className={styles.subCta} id="hero-assess">Get Free Assessment</Link>
            <span className={styles.divider}>·</span>
            <Link href="/pricing" className={styles.subCta} id="hero-trial">Start Free Trial</Link>
          </div>

          {/* FounderOS Dashboard Mockup — WHITE/LIGHT THEME */}
          <div className={styles.mockupWrap}>
            <div className={styles.mockupGlow} />
            <motion.div
              ref={cardRef}
              className={styles.mockupCard}
              initial={{ transform: 'perspective(1200px) rotateX(12deg) rotateY(-8deg) rotateZ(3deg)' }}
              whileHover={{ transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1.02)' }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            >
              {/* Browser Bar */}
              <div className={styles.mockupBar}>
                <span /><span /><span />
                <div className={styles.mockupBarInner}>founder-dashboard.sangoe.in</div>
              </div>
              
              {/* Dashboard Internal Content — WHITE THEME */}
              <div className={styles.dashboardContainer}>
                {/* Sidebar */}
                <div className={styles.sidebar}>
                  <div className={styles.sideLogo}>
                    <LayoutDashboard size={16} style={{ color: '#7C3AED', marginRight: '6px' }} />
                    SANGOE
                  </div>
                  <div className={styles.sideNav}>
                    <div 
                      ref={(el) => { sideItemRefs.current['dashboard'] = el; }}
                      className={`${styles.sideItem} ${activeTab === 'dashboard' ? styles.sideActive : ''}`} 
                      style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                      onClick={() => setActiveTab('dashboard')}
                    >
                      <BarChart2 size={12} /> Dashboard
                    </div>
                    <div 
                      ref={(el) => { sideItemRefs.current['hr'] = el; }}
                      className={`${styles.sideItem} ${activeTab === 'hr' ? styles.sideActive : ''}`} 
                      style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                      onClick={() => setActiveTab('hr')}
                    >
                      <Users size={12} /> Team &amp; HR
                    </div>
                    <div 
                      ref={(el) => { sideItemRefs.current['projects'] = el; }}
                      className={`${styles.sideItem} ${activeTab === 'projects' ? styles.sideActive : ''}`} 
                      style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                      onClick={() => setActiveTab('projects')}
                    >
                      <Briefcase size={12} /> Projects
                    </div>
                    <div 
                      ref={(el) => { sideItemRefs.current['compliance'] = el; }}
                      className={`${styles.sideItem} ${activeTab === 'compliance' ? styles.sideActive : ''}`} 
                      style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                      onClick={() => setActiveTab('compliance')}
                    >
                      <ShieldCheck size={12} /> Compliance
                    </div>
                    <div 
                      ref={(el) => { sideItemRefs.current['finance'] = el; }}
                      className={`${styles.sideItem} ${activeTab === 'finance' ? styles.sideActive : ''}`} 
                      style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                      onClick={() => setActiveTab('finance')}
                    >
                      <DollarSign size={12} /> Finance
                    </div>
                    <div 
                      ref={(el) => { sideItemRefs.current['esg'] = el; }}
                      className={`${styles.sideItem} ${activeTab === 'esg' ? styles.sideActive : ''}`} 
                      style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                      onClick={() => setActiveTab('esg')}
                    >
                      <Leaf size={12} /> ESG Score
                    </div>
                  </div>
                </div>

                {/* Main Dashboard Screen — WHITE THEME */}
                <div className={styles.mainScreen}>
                  <div className={styles.mainHeader}>
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={activeData.title}
                        className={styles.mainTitle}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {activeData.title}
                      </motion.div>
                    </AnimatePresence>
                    <div className={styles.profileBox}>
                      <span className={styles.healthScore}>Health Score: 94%</span>
                      <div className={styles.profileAvatar}>
                        <User size={12} style={{ color: '#7C3AED' }} />
                      </div>
                    </div>
                  </div>

                  {/* Metrics Row */}
                  <div className={styles.metricsGrid}>
                    <AnimatePresence mode="wait">
                      {activeData.metrics.map((metric, idx) => (
                        <motion.div 
                          key={metric.label + idx}
                          className={styles.metricCard}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.2, delay: idx * 0.05 }}
                        >
                          <div className={styles.metricLabel}>{metric.label}</div>
                          <div className={styles.metricVal}>{metric.val}</div>
                          <div className={styles.metricTrend} style={{ color: metric.trendColor }}>{metric.trend}</div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Visual Analysis Area */}
                  <div className={styles.analysisRow}>
                    <div className={styles.chartCol}>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={"chart-" + activeTab}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className={styles.chartHeader}>{activeData.chartTitle}</div>
                          <div className={styles.chartBody}>
                            {/* CSS Bars representing growth chart */}
                            <div className={styles.chartBars}>
                              {activeData.chartBars.map((height, i) => (
                                <motion.div 
                                  key={i}
                                  className={styles.bar} 
                                  initial={{ height: 0 }}
                                  animate={{ height: `${height}%` }}
                                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                                >
                                  <span className={styles.barTooltip}>{activeData.chartLabels[i]}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <div className={styles.tasksCol}>
                      <div className={styles.tasksHeader}>Recent Alerts</div>
                      <div className={styles.tasksList}>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={"alerts-" + activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
                          >
                            {activeData.alerts.map((alert, idx) => {
                              const AlertIcon = alert.icon;
                              return (
                                <div key={idx} className={styles.taskItem}>
                                  <AlertIcon size={12} style={{ color: alert.color, marginTop: '2px', flexShrink: 0 }} />
                                  <span>{alert.text}</span>
                                </div>
                              );
                            })}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Animated Auto-Click Cursor ── */}
              <motion.div
                className={styles.autoCursor}
                animate={{ x: cursorPos.x, y: cursorPos.y }}
                transition={{ type: 'spring', stiffness: 52, damping: 13, mass: 0.8 }}
              >
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 2L2 19L6.5 14.5L9.5 21.5L12 20.5L9 14H16L2 2Z"
                    fill="white"
                    stroke="#7c3aed"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
                {clicking && <div className={styles.clickRipple} />}
              </motion.div>

            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
