'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  TrendingUp, 
  Users, 
  Briefcase, 
  DollarSign, 
  Building, 
  ShieldCheck, 
  BarChart3, 
  Heart, 
  Link2, 
  ArrowRight 
} from 'lucide-react';
import { useReveal, fadeUp, scaleIn, stagger } from '../ui/motion';
import styles from './PlatformClouds.module.css';

const CLOUDS = [
  { icon: TrendingUp, name: 'Sales & Revenue Cloud',          tag: 'Generate More Business',       color: '#3B82F6', bg: '#EFF6FF', modules: ['CRM & Lead Management', 'Quotations & Contracts', 'Revenue Forecasting'] },
  { icon: Users, name: 'HR & Workforce Cloud',            tag: 'Build High Performance Teams', color: '#10B981', bg: '#ECFDF5', modules: ['Recruitment & Onboarding', 'Payroll & Attendance', 'Performance Management'] },
  { icon: Briefcase, name: 'Project & Operations Cloud',     tag: 'Deliver Projects Faster',      color: '#F55F0B', bg: '#FFFBEB', modules: ['Projects & Tasks', 'Workflow Automation', 'Action Tracker'] },
  { icon: DollarSign, name: 'Procurement & Finance Cloud',    tag: 'Improve Cash Flow',            color: '#EF4444', bg: '#FEF2F2', modules: ['Accounting & Expenses', 'Purchase Management', 'Profitability Analysis'] },
  { icon: Building, name: 'Assets & Infrastructure Cloud', tag: 'Manage Business Assets',       color: '#6366F1', bg: '#EEF2FF', modules: ['Fleet & Equipment', 'Asset Lifecycle', 'AMC Management'] },
  { icon: ShieldCheck, name: 'Compliance & Governance Cloud', tag: 'Reduce Business Risks',        color: '#8B5CF6', bg: '#F5F3FF', modules: ['Compliance Assurance', 'Audit Management', 'Risk Register'] },
  { icon: BarChart3, name: 'Business Intelligence Cloud',   tag: 'Measure Everything',           color: '#EC4899', bg: '#FDF2F8', modules: ['Dashboards & Reports', 'KPI & OKR Management', 'Founder Cockpit'] },
  { icon: Heart, name: 'Customer Success Cloud',         tag: 'Create Loyal Customers',       color: '#06B6D4', bg: '#ECFEFF', modules: ['Support & Feedback', 'Customer Loyalty', 'Satisfaction Tracking'] },
  { icon: Link2, name: 'SaaS & Ecosystem Cloud',         tag: 'Scale Your Business Model',    color: '#059669', bg: '#E6F4EA', modules: ['SaaS Management', 'Partner Portal', 'API Integrations'] },
];

export default function PlatformClouds() {
  const { ref, inView } = useReveal(0.05);

  return (
    <section className={`section ${styles.section}`} ref={ref} id="products">
      <div className="wrap">
        <motion.div
          className={styles.header}
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <motion.span variants={fadeUp} className="tag">Platform Overview</motion.span>
          <motion.h2 variants={fadeUp} className={styles.h2}>
            9 Powerful Clouds.<br />
            <span className="purple-text">One Unified Platform.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className={styles.sub}>
            Every business function covered — from Sales and HR to Compliance, Finance, and IPO Readiness.
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={stagger(0.06)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          transition={{ delay: 0.15 }}
        >
          {CLOUDS.map((c, i) => {
            const IconComponent = c.icon;
            return (
              <motion.div
                key={i}
                variants={scaleIn}
                className={`card ${styles.card}`}
                style={{ '--col': c.color }}
                whileHover={{ y: -6, boxShadow: `0 20px 40px ${c.color}15`, borderColor: c.color }}
                transition={{ type: 'spring', stiffness: 240, damping: 15 }}
              >
                <div className={styles.cardTop}>
                  <motion.div
                    className={styles.iconWrap}
                    style={{ color: c.color, background: c.bg }}
                    whileHover={{ background: c.color, color: '#fff' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  >
                    <IconComponent size={20} />
                  </motion.div>
                  <span className={styles.cardTag}>{c.tag}</span>
                </div>
                <h3 className={styles.cardName}>{c.name}</h3>
                <ul className={styles.mods}>
                  {c.modules.map(m => (
                    <li key={m} className={styles.mod}>
                      <span className={styles.dot} style={{ background: c.color }} />
                      {m}
                    </li>
                  ))}
                </ul>
                <Link href="/products" className={styles.link} style={{ color: c.color }}>
                  Explore modules <ArrowRight size={12} style={{ marginLeft: '4px', verticalAlign: 'middle' }} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
