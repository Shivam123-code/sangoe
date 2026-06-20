'use client';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Award, Briefcase, ShieldCheck, Sparkles, GraduationCap,
  CheckCircle, ArrowRight, BarChart3, Users, DollarSign,
  TrendingUp, Leaf, ChevronRight, Star, Zap, Globe, Lock
} from 'lucide-react';
import styles from './page.module.css';
import FeaturesOverview from '@/components/home/FeaturesOverview';

/* ── Data ─────────────────────────────────────────────────────────── */
const STATS = [
  { value: '5', label: 'Core Pillars' },
  { value: 'Unified', label: 'Business Clouds' },
  { value: '50+', label: 'Modules & Features' },
  { value: '1000+', label: 'Business Templates' },
  { value: '100%', label: 'Compliance Coverage' },
];

const PILLARS = [
  {
    id: 'founderos',
    number: '01',
    icon: Award,
    color: '#7C3AED',
    bg: 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)',
    border: 'rgba(124,58,237,0.12)',
    name: 'FounderOS™ Command Center',
    tagline: 'Your Single-Screen Executive Cockpit',
    desc: 'Aggregate every critical operations parameter into one real-time dashboard. Stop juggling spreadsheets — switch to strategic control.',
    image: '/images/founderos_mockup.png',
    modules: [
      { name: 'Revenue Tracking', desc: 'Real-time gross and net revenues across all departments.' },
      { name: 'Collections Engine', desc: 'Monitor pending bills, billing reminders, and collection velocities.' },
      { name: 'Cash Flow Dashboard', desc: 'Predict cash flows and track operating capital blockages.' },
      { name: 'Profitability Analysis', desc: 'Review unit economics and gross profit margins per department.' },
      { name: 'Sales Pipeline Monitoring', desc: 'Complete visibility of the lead funnel and conversion rates.' },
      { name: 'Team Productivity Scorecard', desc: 'Measure task velocity, delegation completion, and attendance.' },
      { name: 'Compliance Due Alerts', desc: 'Automated warnings about upcoming tax, labour, and regulatory dates.' },
      { name: 'Business Risk Assessment', desc: 'Unified log of high-priority risks, pending actions, and bottlenecks.' },
      { name: 'Maturity Dials', desc: 'Live scores for Business Growth, Systemization, and IPO Readiness.' },
    ],
  },
  {
    id: 'clouds',
    number: '02',
    icon: Briefcase,
    color: '#3B82F6',
    bg: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
    border: 'rgba(59,130,246,0.12)',
    name: 'Core Business Clouds',
    tagline: '50+ Business Functions Under One Roof',
    desc: 'Stop paying for 10+ disjointed SaaS apps. Sangoe unifies Sales, HR, Operations, Finance, Compliance, and Business Intelligence into one integrated system.',
    image: '/images/hero_products.png',
    clouds: [
      { name: 'Sales & Revenue Cloud', color: '#3B82F6', modules: ['Lead Finder', 'CRM', 'Estimates & Quotations', 'Contracts & Subscriptions', 'Customer Loyalty', 'Sales Analytics'] },
      { name: 'HR & Workforce Cloud', color: '#10B981', modules: ['HR Records', 'Recruitment', 'Leave & Attendance', 'Payroll & Commissions', 'Performance Management', 'Org Chart'] },
      { name: 'Project & Operations Cloud', color: '#7C3AED', modules: ['Projects & Tasks', 'Timesheets', 'Workflow Automations', 'SOP Documents', 'Support Desk', 'Meetings Tracker'] },
      { name: 'Procurement & Finance Cloud', color: '#F59E0B', modules: ['Accounting & Ledger', 'Expenses', 'Purchase Orders', 'Inventory Management', 'Budgeting', 'Vendor Payments'] },
      { name: 'Assets & Infra Cloud', color: '#EC4899', modules: ['Fleet Management', 'Equipment Maintenance', 'AMC Management', 'Utilities Logs', 'Domain Assets'] },
      { name: 'Compliance & Governance Cloud', color: '#EF4444', modules: ['Compliance Assurance', 'Audit Management', 'Policy Document Control', 'Approval Matrix', 'Risk Register'] },
      { name: 'Business Intelligence Cloud', color: '#8B5CF6', modules: ['BI Dashboards', 'OKR Management', 'KPI Scorecards', 'Business Forecasting', 'Benchmarking'] },
      { name: 'Customer Success Cloud', color: '#06B6D4', modules: ['Tickets Support', 'CSAT & NPS Tracker', 'Idea Hub', 'Client Knowledge Base'] },
      { name: 'SaaS & Ecosystem Cloud', color: '#059669', modules: ['SaaS Billing', 'Partner Portal', 'Marketplace Integrations', 'Developer APIs', 'White Label System'] },
    ],
  },
  {
    id: 'solutions',
    number: '03',
    icon: ShieldCheck,
    color: '#10B981',
    bg: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
    border: 'rgba(16,185,129,0.12)',
    name: 'Advanced Business Solutions',
    tagline: 'De-Risk Your Enterprise Scale',
    desc: 'Deploy specialized transformation systems built for growing MSMEs and enterprises readying for public listing.',
    image: '/images/advanced_solutions_mockup.png',
    modules: [
      { name: 'MSME Transformation System™', desc: 'Transition founder-dependent businesses into system-driven organizations with clear SOPs and delegation matrices.' },
      { name: 'Compliance Control Tower™', desc: 'Manage labour laws, PF, ESIC, POSH, Factory Act, and safety compliance from a single dashboard.' },
      { name: 'Trust Intelligence Platform™', desc: 'Powered by QuickVerification — run background checks on employees, vendors, directors, and contractors.' },
      { name: 'ESG & Sustainability Platform™', desc: 'Track carbon metrics, monitor social impact, and generate investor-grade ESG reports.' },
      { name: 'Safety Management System™', desc: 'Safety audit inspections, digital Permit To Work (PTW) logs, and near-miss incident management.' },
      { name: 'Investor & IPO Readiness Platform™', desc: 'Establish corporate governance, manage board meetings, and host secure virtual data rooms.' },
    ],
  },
  {
    id: 'copilot',
    number: '04',
    icon: Sparkles,
    color: '#EC4899',
    bg: 'linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 100%)',
    border: 'rgba(236,72,153,0.12)',
    name: 'AI Business Co-Pilot™',
    tagline: 'Conversational Business Intelligence',
    desc: 'Operate your company in natural language. Pull reports, analyze blockers, and receive intelligent warnings — instantly.',
    image: '/images/ai_copilot_mockup.png',
    modules: [
      { name: 'Natural Language Inquiries', desc: 'Ask about cash flow blockages, project delays, or compliance due dates in plain English.' },
      { name: 'Underperformance Triggers', desc: 'Get alerted automatically when KPIs fall below standard margins.' },
      { name: 'Operational Risk Flagging', desc: 'AI reviews compliance gaps and identifies operational risk factors in real time.' },
      { name: 'Automated SOP Generation', desc: 'AI analyzes workflows and drafts customized standard operating procedures.' },
    ],
  },
  {
    id: 'ecosystem',
    number: '05',
    icon: GraduationCap,
    color: '#F59E0B',
    bg: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
    border: 'rgba(245,158,11,0.12)',
    name: 'Growth & Resource Ecosystem',
    tagline: 'Upskill Your Team & Streamline Operations',
    desc: 'Access standard-setting learning systems and utility calculators to elevate your company operational maturity.',
    image: '/images/growth_ecosystem_mockup.png',
    modules: [
      { name: 'Sangoe Academy™', desc: 'Upskilling courses for team leads and managers in systemization, safety, governance, and IPO compliance.' },
      { name: '1000+ Business Templates', desc: 'Statutory registers, SOP guides, board resolution drafts, safety audit logs, and legal contracts.' },
      { name: 'Utility Calculators', desc: 'GST, PF, ESIC, working capital, employee productivity, and ROI calculators built in.' },
    ],
  },
];

const COMPARISON_ROWS = [
  { cap: 'Sales & CRM', crm: true, erp: true, sangoe: true },
  { cap: 'HR Management', crm: 'partial', erp: true, sangoe: true },
  { cap: 'Recruitment Suite', crm: 'partial', erp: 'partial', sangoe: true },
  { cap: 'Compliance (PF/ESIC/PT)', crm: false, erp: 'partial', sangoe: true },
  { cap: 'Safety Inspections & PTW', crm: false, erp: false, sangoe: true },
  { cap: 'ESG & Carbon Tracker', crm: false, erp: 'partial', sangoe: true },
  { cap: 'QuickVerification™ Checks', crm: false, erp: false, sangoe: true },
  { cap: 'Investor Data Room', crm: false, erp: false, sangoe: true },
  { cap: 'Founder Cockpit Scorecards', crm: 'partial', erp: 'partial', sangoe: true },
  { cap: 'MSME Transformation Mapping', crm: false, erp: false, sangoe: true },
  { cap: 'Business Maturity Framework', crm: false, erp: false, sangoe: true },
];

const NAV_TABS = PILLARS.map(p => ({ id: p.id, label: p.name.replace(/™.*/, '™'), color: p.color }));

/* ── Cell renderer ─────────────────────────────────────────────────── */
function CellValue({ val }) {
  if (val === true) return <span className={styles.cellYes}><CheckCircle size={15} /> Yes</span>;
  if (val === false) return <span className={styles.cellNo}>✗</span>;
  return <span className={styles.cellPartial}>Partial</span>;
}

/* ── Page Component ────────────────────────────────────────────────── */
export default function FeaturesPage() {
  const [activeNav, setActiveNav] = useState('founderos');
  const sectionRefs = useRef({});

  // Highlight nav on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveNav(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    Object.values(sectionRefs.current).forEach(el => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />
        <div className={styles.heroGrid} />
        <div className={styles.heroInner}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className={styles.heroMotion}>
            <span className="tag tag-dark">Comprehensive Platform Features</span>
            <h1 className={styles.heroH1}>
              Everything You Need to<br />
              Build a <span className={styles.grad}>System-Driven Business</span>
            </h1>
            <p className={styles.heroSub}>
              One platform for Sales, HR, Operations, Compliance, Finance &amp; Intelligence —<br />
              built to make your business run as a complete, systemised unit.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn btn-purple">Book System Demo</Link>
              <Link href="/pricing" className="btn btn-outline-white">See Pricing Plans</Link>
            </div>
          </motion.div>
        </div>

        {/* Stats Strip */}
        <div className={styles.statsStrip}>
          {STATS.map((s, i) => (
            <div key={i} className={styles.statItem}>
              <span className={styles.statVal}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Sticky Pillar Navigation ─────────────────────────────── */}
      <nav className={styles.pillarNav}>
        <div className={styles.pillarNavInner}>
          {NAV_TABS.map(tab => (
            <button
              key={tab.id}
              className={`${styles.navTab} ${activeNav === tab.id ? styles.navTabActive : ''}`}
              style={activeNav === tab.id ? { borderColor: tab.color, color: tab.color } : {}}
              onClick={() => {
                sectionRefs.current[tab.id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Pillar Sections ──────────────────────────────────────── */}
      <div className={styles.pillarsWrapper}>
        {PILLARS.map((pillar, idx) => {
          const Icon = pillar.icon;
          const isEven = idx % 2 === 0;
          return (
            <section
              key={pillar.id}
              id={pillar.id}
              ref={el => { sectionRefs.current[pillar.id] = el; }}
              className={styles.pillarSection}
              style={{ background: idx % 2 === 0 ? '#ffffff' : '#f8faff' }}
            >
              <div className="wrap">

                {/* ── Section Header ── */}
                <div className={styles.pillarHeader}>
                  <div className={styles.pillarHeaderLeft}>
                    <span className={styles.pillarNumber} style={{ color: pillar.color, borderColor: pillar.border }}>
                      {pillar.number} / 05
                    </span>
                    <span className={styles.pillarTagline} style={{ color: pillar.color }}>{pillar.tagline}</span>
                  </div>
                  <div className={styles.pillarHeaderLine} style={{ background: pillar.border }} />
                </div>

                {/* ── Hero Row: Info + Mockup ── */}
                <div className={`${styles.pillarHeroRow} ${isEven ? '' : styles.pillarHeroRowReverse}`}>

                  {/* Info Side */}
                  <motion.div
                    className={styles.pillarInfo}
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className={styles.pillarIconWrap} style={{ background: pillar.bg, border: `1.5px solid ${pillar.border}` }}>
                      <Icon size={26} color={pillar.color} />
                    </div>
                    <h2 className={styles.pillarName}>{pillar.name}</h2>
                    <p className={styles.pillarDesc}>{pillar.desc}</p>
                    <div className={styles.pillarActions}>
                      <Link href="/contact" className={styles.pillarCta} style={{ background: pillar.color }}>
                        Request Demo <ArrowRight size={14} />
                      </Link>
                      <Link href="/pricing" className={styles.pillarCtaGhost} style={{ color: pillar.color, borderColor: pillar.border }}>
                        View Pricing
                      </Link>
                    </div>
                  </motion.div>

                  {/* Mockup Side */}
                  <motion.div
                    className={styles.mockupSide}
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className={styles.mockupGlowBg} style={{ background: `radial-gradient(circle, ${pillar.color}18 0%, transparent 70%)` }} />
                    <div className={styles.mockupFrame} style={{ borderColor: pillar.border }}>
                      <div className={styles.mockupBar}>
                        <span style={{ background: '#ff5f57' }} /><span style={{ background: '#ffbd2e' }} /><span style={{ background: '#28c840' }} />
                        <div className={styles.mockupUrl}>sangoe.in/dashboard</div>
                      </div>
                      <div className={styles.mockupImgWrap}>
                        <Image src={pillar.image} alt={pillar.name} width={520} height={320} className={styles.mockupImg} priority={idx === 0} />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* ── Divider ── */}
                <div className={styles.divider} style={{ background: `linear-gradient(90deg, transparent, ${pillar.border}, transparent)` }} />

                {/* ── Modules / Clouds Grid ── */}
                {pillar.clouds ? (
                  <div className={styles.cloudsGrid}>
                    {pillar.clouds.map((cloud, ci) => (
                      <motion.div
                        key={cloud.name}
                        className={styles.cloudCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: ci * 0.05 }}
                        style={{ borderTop: `3px solid ${cloud.color}` }}
                      >
                        <div className={styles.cloudCardHeader}>
                          <div className={styles.cloudDot} style={{ background: cloud.color }} />
                          <h4 className={styles.cloudName}>{cloud.name}</h4>
                        </div>
                        <div className={styles.cloudMods}>
                          {cloud.modules.map(mod => (
                            <span key={mod} className={styles.modBadge} style={{ color: cloud.color, background: `${cloud.color}0f`, borderColor: `${cloud.color}20` }}>
                              {mod}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className={styles.modulesGrid}>
                    {pillar.modules.map((mod, mi) => (
                      <motion.div
                        key={mod.name}
                        className={styles.moduleCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: mi * 0.06 }}
                        style={{ borderLeft: `3px solid ${pillar.color}` }}
                      >
                        <div className={styles.moduleCardTop}>
                          <div className={styles.moduleIconDot} style={{ background: pillar.color }} />
                          <h4 className={styles.moduleName}>{mod.name}</h4>
                        </div>
                        <p className={styles.moduleDesc}>{mod.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                )}

              </div>
            </section>
          );
        })}
      </div>

      {/* ── Interactive Features Directory ── */}
      <FeaturesOverview />

      {/* ── Comparison Matrix ────────────────────────────────────── */}
      <section className={styles.comparison}>
        <div className="wrap">
          <div className={styles.sectionHeader}>
            <span className="tag">Why Sangoe</span>
            <h2 className={styles.sectionH2}>Capability Comparison Matrix</h2>
            <p className={styles.sectionSub}>
              Traditional software covers one department. Sangoe transforms your entire business.
            </p>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.thCap}>Core Capability</th>
                  <th className={styles.thOther}>CRM Systems</th>
                  <th className={styles.thOther}>ERP Systems</th>
                  <th className={styles.thSangoe}>
                    <span className={styles.thSangoeInner}>
                      <Star size={12} fill="#7C3AED" color="#7C3AED" />
                      Sangoe Business OS
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? styles.trEven : ''}>
                    <td className={styles.tdCap}>{row.cap}</td>
                    <td className={styles.tdOther}><CellValue val={row.crm} /></td>
                    <td className={styles.tdOther}><CellValue val={row.erp} /></td>
                    <td className={styles.tdSangoe}><CellValue val={row.sangoe} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section className={styles.ctaSec}>
        <div className="wrap">
          <div className={styles.ctaBox}>
            <div className={styles.ctaOrb} />
            <div className={styles.ctaOrb2} />
            <div className={styles.ctaBadge}>
              <Zap size={13} fill="#7C3AED" color="#7C3AED" /> Built for Growth-Stage Businesses
            </div>
            <h2 className={styles.ctaH2}>Ready to Transform Your Operations?</h2>
            <p className={styles.ctaSub}>
              Build a system-driven business that grows without chaos, manages compliance automatically, and runs independently of any single person.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn-white">Book Live Demo</Link>
              <Link href="/assessments" className="btn btn-outline-white">Take Health Assessment</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
