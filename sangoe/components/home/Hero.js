'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { 
  TrendingUp, 
  Cpu, 
  ShieldCheck, 
  DollarSign, 
  Briefcase, 
  Rocket, 
  Leaf, 
  Users,
  LayoutDashboard,
  CheckCircle2,
  AlertTriangle,
  BarChart2,
  User
} from 'lucide-react';
import { 
  ChromeLogo, 
  FigmaLogo, 
  DriveLogo, 
  SpotifyLogo, 
  ShopifyLogo, 
  MastercardLogo, 
  SlackLogo, 
  PaypalLogo 
} from '../ui/BrandLogos';
import styles from './Hero.module.css';

// Floating module bubbles orbiting the hero (matching the exact mockup)
const ICONS = [
  { icon: ChromeLogo, label: 'Chrome',      top: '12%', left: '8%',   anim: 'floatA', delay: '0s',    size: 64, color: '#3B82F6', bg: '#ffffff' },
  { icon: FigmaLogo, label: 'Figma',        top: '16%', left: '82%',  anim: 'floatB', delay: '.7s',   size: 58, color: '#EC4899', bg: '#ffffff' },
  { icon: DriveLogo, label: 'Google Drive', top: '56%', left: '6%',   anim: 'floatC', delay: '1.3s',  size: 60, color: '#8B5CF6', bg: '#ffffff' },
  { icon: PaypalLogo, label: 'PayPal',      top: '64%', left: '86%',  anim: 'floatA', delay: '.4s',   size: 64, color: '#EF4444', bg: '#ffffff' },
  { icon: SlackLogo, label: 'Slack',        top: '82%', left: '14%',  anim: 'floatB', delay: '1.9s',  size: 54, color: '#F55F0B', bg: '#ffffff' },
  { icon: SpotifyLogo, label: 'Spotify',    top: '78%', left: '80%',  anim: 'floatC', delay: '1.1s',  size: 56, color: '#10B981', bg: '#ffffff' },
  { icon: ShopifyLogo, label: 'Shopify',    top: '36%', left: '4%',   anim: 'floatA', delay: '.2s',   size: 50, color: '#059669', bg: '#ffffff' },
  { icon: MastercardLogo, label: 'Payments', top: '32%', left: '90%',  anim: 'floatB', delay: '1.6s',  size: 58, color: '#6366F1', bg: '#ffffff' },
];

const iconVariant = {
  hidden: { opacity: 0, scale: 0.4 },
  show: i => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.4 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const op = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className={styles.hero} ref={ref} id="hero">
      {/* Floating Orbiting Badges */}
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
            <div className={styles.iconBubble} style={{ width: ic.size, height: ic.size, color: ic.color, background: ic.bg, borderColor: ic.color + '30', padding: ic.size * 0.22, boxSizing: 'border-box' }}>
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

          {/* Dashboard Mockup (Perspective Tilted CSS Mockup) */}
          <div className={styles.mockupWrap}>
            <div className={styles.mockupGlow} />
            <motion.div
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
              
              {/* Dashboard Internal Content Coded in CSS */}
              <div className={styles.dashboardContainer}>
                {/* Sidebar */}
                <div className={styles.sidebar}>
                  <div className={styles.sideLogo}>
                    <LayoutDashboard size={16} style={{ color: '#7C3AED', marginRight: '6px' }} />
                    SANGOE
                  </div>
                  <div className={styles.sideNav}>
                    <div className={`${styles.sideItem} ${styles.sideActive}`} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <BarChart2 size={12} /> Dashboard
                    </div>
                    <div className={styles.sideItem} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Users size={12} /> Team &amp; HR
                    </div>
                    <div className={styles.sideItem} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Briefcase size={12} /> Projects
                    </div>
                    <div className={styles.sideItem} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <ShieldCheck size={12} /> Compliance
                    </div>
                    <div className={styles.sideItem} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <DollarSign size={12} /> Finance
                    </div>
                    <div className={styles.sideItem} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Leaf size={12} /> ESG Score
                    </div>
                  </div>
                </div>

                {/* Main Dashboard Screen */}
                <div className={styles.mainScreen}>
                  <div className={styles.mainHeader}>
                    <div className={styles.mainTitle}>Founder Dashboard</div>
                    <div className={styles.profileBox}>
                      <span className={styles.healthScore}>Health Score: 94%</span>
                      <div className={styles.profileAvatar}>
                        <User size={12} style={{ color: '#ffffff' }} />
                      </div>
                    </div>
                  </div>

                  {/* Metrics Row */}
                  <div className={styles.metricsGrid}>
                    <div className={styles.metricCard}>
                      <div className={styles.metricLabel}>Monthly Revenue</div>
                      <div className={styles.metricVal}>₹42,80,000</div>
                      <div className={styles.metricTrend}>▲ +12.5%</div>
                    </div>
                    <div className={styles.metricCard}>
                      <div className={styles.metricLabel}>Compliance Tasks</div>
                      <div className={styles.metricVal}>28 / 28 Done</div>
                      <div className={styles.metricTrend} style={{ color: '#10b981' }}>✓ 100% Secure</div>
                    </div>
                    <div className={styles.metricCard}>
                      <div className={styles.metricLabel}>Project Deliveries</div>
                      <div className={styles.metricVal}>96.4% On-Time</div>
                      <div className={styles.metricTrend}>▲ +2.1%</div>
                    </div>
                    <div className={styles.metricCard}>
                      <div className={styles.metricLabel}>IPO Readiness</div>
                      <div className={styles.metricVal}>87 / 100</div>
                      <div className={styles.metricTrend} style={{ color: '#6366f1' }}>★ Level: Advanced</div>
                    </div>
                  </div>

                  {/* Visual Analysis Area */}
                  <div className={styles.analysisRow}>
                    <div className={styles.chartCol}>
                      <div className={styles.chartHeader}>Business Growth Forecast (2026)</div>
                      <div className={styles.chartBody}>
                        {/* CSS Bars representing growth chart */}
                        <div className={styles.chartBars}>
                          <div className={styles.bar} style={{ height: '35%' }}><span className={styles.barTooltip}>Q1</span></div>
                          <div className={styles.bar} style={{ height: '48%' }}><span className={styles.barTooltip}>Q2</span></div>
                          <div className={styles.bar} style={{ height: '62%' }}><span className={styles.barTooltip}>Q3</span></div>
                          <div className={styles.bar} style={{ height: '78%' }}><span className={styles.barTooltip}>Q4</span></div>
                          <div className={styles.bar} style={{ height: '94%' }}><span className={styles.barTooltip}>Next</span></div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.tasksCol}>
                      <div className={styles.tasksHeader}>Recent Alerts</div>
                      <div className={styles.tasksList}>
                        <div className={styles.taskItem}>
                          <CheckCircle2 size={12} style={{ color: '#10b981', marginTop: '2px', flexShrink: 0 }} />
                          <span>Weekly payroll audit completed successfully</span>
                        </div>
                        <div className={styles.taskItem}>
                          <AlertTriangle size={12} style={{ color: '#3b82f6', marginTop: '2px', flexShrink: 0 }} />
                          <span>PF &amp; ESIC compliance filing due in 4 days</span>
                        </div>
                        <div className={styles.taskItem}>
                          <CheckCircle2 size={12} style={{ color: '#f59e0b', marginTop: '2px', flexShrink: 0 }} />
                          <span>MSME Transformation checklist is 82% complete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
