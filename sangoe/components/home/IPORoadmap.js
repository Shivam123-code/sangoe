'use client';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  TrendingUp, 
  Activity, 
  Cpu, 
  ShieldCheck, 
  UserCheck, 
  DollarSign, 
  Award
} from 'lucide-react';
import { useReveal, fadeUp } from '../ui/motion';
import styles from './IPORoadmap.module.css';

const STAGES = [
  {
    num: '01',
    title: 'Startup',
    icon: Rocket,
    color: '#7C3AED',
    bg: 'rgba(124, 58, 237, 0.04)',
    focus: 'Operational foundation & basic delegation.',
    description: 'Establish the core business model, recruit early team members, and validate product-market fit.',
    activePillars: ['Technology', 'People', 'Growth'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    num: '02',
    title: 'Growing Company',
    icon: TrendingUp,
    color: '#6366F1',
    bg: 'rgba(99, 102, 241, 0.04)',
    focus: 'Pipeline CRM & revenue scaling.',
    description: 'Accelerate customer acquisition, automate billing collections, and track pipeline metrics.',
    activePillars: ['Growth', 'Systems'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    num: '03',
    title: 'Systemized Company',
    icon: Activity,
    color: '#3B82F6',
    bg: 'rgba(59, 130, 246, 0.04)',
    focus: 'Core SOPs & reducing founder dependency.',
    description: 'Document standard operating procedures, automate task delegation, and structure payroll.',
    activePillars: ['Systems', 'People'],
    image: 'https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    num: '04',
    title: 'Process Driven Company',
    icon: Cpu,
    color: '#10B981',
    bg: 'rgba(16, 185, 129, 0.04)',
    focus: 'Workflow automation & KPI scorecards.',
    description: 'Integrate cross-department KPIs, automate approval matrices, and build dashboard reports.',
    activePillars: ['Technology', 'Systems', 'Governance'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    num: '05',
    title: 'Compliance Driven Company',
    icon: ShieldCheck,
    color: '#F59E0B',
    bg: 'rgba(245, 158, 11, 0.04)',
    focus: 'Automating PF, ESIC & PT filings.',
    description: 'De-risk the organization by automating regulatory compliance and setting alert calendars.',
    activePillars: ['Compliance', 'Risk'],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    num: '06',
    title: 'Governance Driven Company',
    icon: UserCheck,
    color: '#F55F0B',
    bg: 'rgba(245, 95, 11, 0.04)',
    focus: 'Board oversight & internal audit control.',
    description: 'Draft comprehensive corporate policies, manage board meetings, and run audit logs.',
    activePillars: ['Governance', 'Risk'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    num: '07',
    title: 'Investor Ready Company',
    icon: DollarSign,
    color: '#EF4444',
    bg: 'rgba(239, 68, 68, 0.04)',
    focus: 'Virtual Data Rooms & due diligence.',
    description: 'Prepare clean audit scorecards and organize corporate records for institutional investors.',
    activePillars: ['Governance', 'Risk', 'Growth'],
    image: 'https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    num: '08',
    title: 'IPO Ready Company',
    icon: Award,
    color: '#8B5CF6',
    bg: 'rgba(139, 92, 246, 0.04)',
    focus: 'SEBI compliance & quarterly public reports.',
    description: 'Meet statutory public listing guidelines and operate under enterprise corporate governance.',
    activePillars: ['Compliance', 'Governance'],
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=120&h=120&q=80'
  }
];

export default function IPORoadmap() {
  const { ref, inView } = useReveal(0.1);

  return (
    <section className={styles.section} ref={ref}>
      {/* Pastel mesh glows for a clean, light-themed depth */}
      <div className={styles.pastelGlow1} />
      <div className={styles.pastelGlow2} />
      
      <div className="wrap">
        {/* Header Section */}
        <div className={styles.headerBlock}>
          <motion.div 
            className={styles.premiumEmblem}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <div className={styles.emblemGlow} />
            <div className={styles.emblemIconWrap}>
              <Award className={styles.emblemIcon} size={22} style={{ color: '#ffffff' }} />
            </div>
          </motion.div>
          <motion.h2 
            className={styles.h2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            Startup to IPO Journey™
          </motion.h2>
          <motion.p 
            className={styles.sub}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            Scale Your Business Through the <span className={styles.purpleText}>8 Stages of Growth</span>
          </motion.p>
        </div>

        {/* Desktop Serpentine Timeline (visible on desktop >= 1024px) */}
        <div className={styles.desktopTimeline}>
          <div className={styles.scrollWrapper}>
            <div className={styles.timelineContent}>
              {/* SVG Wave Path & Dashed Connectors */}
              <svg className={styles.svgWave} width="100%" height="240" viewBox="0 0 1250 240" fill="none" preserveAspectRatio="none">
                {STAGES.map((stage, idx) => {
                  const cx = 100 + idx * 150;
                  const isOdd = idx % 2 === 0;
                  
                  // U-shape dips down, Inverted U-shape arcs up
                  const pathD = isOdd 
                    ? `M ${cx - 75},120 C ${cx - 37.5},175 ${cx + 37.5},175 ${cx + 75},120`
                    : `M ${cx - 75},120 C ${cx - 37.5},65 ${cx + 37.5},65 ${cx + 75},120`;
                    
                  // Connector dashed line coordinates
                  const y1 = isOdd ? 133.25 : 106.75; // start from circle edge (top/bottom)
                  const y2 = isOdd ? 50 : 190; // end at label edge
                  
                  return (
                    <g key={idx}>
                      {/* Dashed connector line */}
                      <motion.line
                        x1={cx}
                        y1={y1}
                        x2={cx}
                        y2={y2}
                        stroke={stage.color}
                        strokeWidth="2"
                        strokeDasharray="4,4"
                        opacity="0.5"
                        initial={{ pathLength: 0 }}
                        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.12 + 0.3 }}
                      />
                      
                      {/* Glowing background road segment */}
                      <motion.path
                        d={pathD}
                        stroke={stage.color}
                        strokeWidth="20"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.12"
                        initial={{ pathLength: 0 }}
                        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 0.8, delay: idx * 0.12, ease: "easeInOut" }}
                      />

                      {/* Foreground road segment */}
                      <motion.path
                        d={pathD}
                        stroke={stage.color}
                        strokeWidth="8"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 0.8, delay: idx * 0.12, ease: "easeInOut" }}
                      />
                    </g>
                  );
                })}
                
                {/* End Point Full Stop Dot */}
                <motion.circle
                  cx="1225"
                  cy="120"
                  r="8"
                  fill="#8B5CF6"
                  stroke="#ffffff"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1.65, duration: 0.3 }}
                  style={{ filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.6))' }}
                />
              </svg>

              {/* Circles & Labels positioned absolutely */}
              {STAGES.map((stage, idx) => {
                const pctLeft = 8 + idx * 12;
                const isOdd = idx % 2 === 0;
                
                return (
                  <div key={idx}>
                    {/* Circle Node with real image */}
                    <motion.div
                      className={styles.desktopDot}
                      style={{
                        left: `${pctLeft}%`,
                        top: isOdd ? 161.25 : 78.75,
                        '--theme-color': stage.color,
                        x: '-50%',
                        y: '-50%',
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: idx * 0.12 + 0.4 }}
                      whileHover={{ scale: 1.2, boxShadow: `0 0 16px ${stage.color}60` }}
                    >
                      <div className={styles.dotCircle}>
                        <img src={stage.image} alt={stage.title} className={styles.dotImage} />
                      </div>
                    </motion.div>

                    {/* Label */}
                    <motion.div
                      className={`${styles.desktopCard} ${isOdd ? styles.cardTop : styles.cardBottom}`}
                      style={{
                        left: `${pctLeft}%`,
                        '--theme-color': stage.color,
                        x: '-50%',
                      }}
                      initial={{ opacity: 0, y: isOdd ? -10 : 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: isOdd ? -10 : 10 }}
                      transition={{ duration: 0.5, delay: idx * 0.12 + 0.5 }}
                    >
                      <div className={styles.stageNumLabel} style={{ color: stage.color }}>Stage {stage.num}</div>
                      <h4 className={styles.cardTitle}>{stage.title}</h4>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Serpentine Timeline (visible on mobile/tablet < 1024px) */}
        <div className={styles.mobileTimeline}>
          {/* Pulsing visual track line */}
          <div className={styles.timelineLine} />

          {STAGES.map((stage, idx) => {
            const StageIcon = stage.icon;
            return (
              <motion.div 
                key={idx}
                className={styles.timelineRow}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                transition={{ delay: idx * 0.08 }}
              >
                {/* Winding road dot anchor */}
                <div className={styles.timelineDot} style={{ '--theme-color': stage.color }} />

                <div 
                  className={styles.stageCard}
                  style={{ 
                    '--theme-color': stage.color, 
                    '--theme-bg': stage.bg,
                    '--theme-border': `${stage.color}18` 
                  }}
                >
                  <div className={styles.stageHeader} style={{ marginBottom: 0 }}>
                    <div className={styles.stageNumber}>{stage.num}</div>
                    <h3 className={styles.stageTitle} style={{ margin: 0, fontSize: '1.1rem' }}>{stage.title}</h3>
                    <div className={styles.stageIconWrap} style={{ width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '1.5px solid var(--theme-color)', background: 'none' }}>
                      <img src={stage.image} alt={stage.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
