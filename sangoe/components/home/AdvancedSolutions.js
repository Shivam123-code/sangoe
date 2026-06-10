'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Settings, 
  ShieldCheck, 
  Search, 
  Leaf, 
  ShieldAlert, 
  Award, 
  ArrowRight 
} from 'lucide-react';
import { useReveal, fadeUp, scaleIn, stagger } from '../ui/motion';
import styles from './AdvancedSolutions.module.css';

const SOLS = [
  { icon: Settings, name: 'MSME Transformation System™', desc: 'Transform founder-dependent businesses into system-driven, scalable organizations with SOP management and KPI frameworks.', color: '#3B82F6', bg: '#EFF6FF' },
  { icon: ShieldCheck, name: 'Compliance Control Tower™', desc: 'Manage PF, ESIC, Labour Laws, POSH and all compliance obligations from a single centralized command platform.', color: '#8B5CF6', bg: '#F5F3FF' },
  { icon: Search, name: 'Trust Intelligence Platform™', desc: 'Employee, vendor, director and contractor verification powered by QuickVerification — build a trusted supply chain.', color: '#06B6D4', bg: '#ECFEFF' },
  { icon: Leaf, name: 'ESG & Sustainability Platform™', desc: 'ESG tracking, SDG alignment, carbon tracking, social impact monitoring and sustainability reporting all in one.', color: '#059669', bg: '#E6F4EA' },
  { icon: ShieldAlert, name: 'Safety Management System™', desc: 'Safety audits, permit to work, near miss reporting, incident management and contractor safety compliance tracking.', color: '#EF4444', bg: '#FEF2F2' },
  { icon: Award, name: 'Investor & IPO Readiness Platform™', desc: 'Governance management, investor data room, due diligence tracking and IPO readiness assessment for ambitious founders.', color: '#F55F0B', bg: '#FFFBEB' },
];

export default function AdvancedSolutions() {
  const { ref, inView } = useReveal(0.05);

  return (
    <section className={`section ${styles.section}`} ref={ref} id="solutions">
      <div className="wrap">
        <motion.div
          className={styles.header}
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <motion.span variants={fadeUp} className="tag">Advanced Business Solutions</motion.span>
          <motion.h2 variants={fadeUp} className={styles.h2}>
            High-Value Transformation<br />
            <span className="purple-text">Solutions For Serious Businesses</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={stagger(0.08)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          transition={{ delay: 0.15 }}
        >
          {SOLS.map((s, i) => {
            const IconComponent = s.icon;
            return (
              <motion.div
                key={i}
                variants={scaleIn}
                className={`card ${styles.card}`}
                whileHover={{ y: -6, boxShadow: `0 20px 48px ${s.color}15`, borderColor: s.color }}
                transition={{ type: 'spring', stiffness: 240, damping: 15 }}
              >
                <div className={styles.iconWrap} style={{ color: s.color, background: s.bg }}>
                  <IconComponent size={22} />
                </div>
                <h3 className={styles.name}>{s.name}</h3>
                <p className={styles.desc}>{s.desc}</p>
                <Link href="/solutions" className={styles.link} style={{ color: s.color }}>
                  Learn More <ArrowRight size={12} style={{ marginLeft: '4px', verticalAlign: 'middle' }} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
