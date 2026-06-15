'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Rocket, 
  TrendingUp, 
  Activity, 
  Cpu, 
  ShieldCheck, 
  UserCheck, 
  DollarSign, 
  Award,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useReveal, fadeUp, stagger } from '../ui/motion';
import styles from './IPORoadmap.module.css';

const STAGES = [
  {
    num: 1,
    title: 'Startup',
    icon: Rocket,
    color: '#7C3AED',
    bg: 'rgba(124, 58, 237, 0.04)',
    borderColor: 'rgba(124, 58, 237, 0.12)',
    description: 'The foundation phase. Building the core product, defining value, and finding product-market fit.',
    milestones: [
      'Validate core business model',
      'Acquire first 50 early customers',
      'Define basic operational flows'
    ],
    growthChallenge: 'Founder bottleneck — the owner handles everything from sales to support.',
    solution: 'Sangoe HR & Tasks Cloud structures the team and begins delegation of basic operations.'
  },
  {
    num: 2,
    title: 'Growing Company',
    icon: TrendingUp,
    color: '#6366F1',
    bg: 'rgba(99, 102, 241, 0.04)',
    borderColor: 'rgba(99, 102, 241, 0.12)',
    description: 'Scaling operations. Customer acquisition is accelerating, and sales revenue is starting to flow.',
    milestones: [
      'Scale sales teams & pipelines',
      'Optimize recurring revenue flows',
      'Manage complex multi-channel collections'
    ],
    growthChallenge: 'Cash leaks and manual billing errors slow down expansion.',
    solution: 'Sangoe Billing & Sales CRM automates collections and tracks customer analytics.'
  },
  {
    num: 3,
    title: 'Systemized',
    icon: Activity,
    color: '#3B82F6',
    bg: 'rgba(59, 130, 246, 0.04)',
    borderColor: 'rgba(59, 130, 246, 0.12)',
    description: 'Building operational rhythm. SOPs and systems are established to ensure consistency.',
    milestones: [
      'Document core SOPs for every role',
      'Establish clear team accountability charts',
      'Reduce founder dependency by 50%'
    ],
    growthChallenge: 'High reliance on verbal instructions leading to human error.',
    solution: 'Sangoe SOP & Delegation Engine provides single-source-of-truth task management.'
  },
  {
    num: 4,
    title: 'Process Driven',
    icon: Cpu,
    color: '#10B981',
    bg: 'rgba(16, 185, 129, 0.04)',
    borderColor: 'rgba(16, 185, 129, 0.12)',
    description: 'Optimizing and automating. KPIs are tracked in real-time, and departments run like clockwork.',
    milestones: [
      'Implement structured department KPIs',
      'Automate repetitive workflows',
      'Track project margin leakages'
    ],
    growthChallenge: 'Data is scattered across multiple legacy apps and spreadsheets.',
    solution: 'Sangoe command center consolidates multi-department KPIs onto one dashboard.'
  },
  {
    num: 5,
    title: 'Compliance Driven',
    icon: ShieldCheck,
    color: '#F59E0B',
    bg: 'rgba(245, 158, 11, 0.04)',
    borderColor: 'rgba(245, 158, 11, 0.12)',
    description: 'De-risking the organization. Making sure legal, tax, and employee compliances are rock solid.',
    milestones: [
      'Automate PF, ESIC, and PT filings',
      'Maintain up-to-date board resolutions',
      'Eliminate late fee compliance penalties'
    ],
    growthChallenge: 'Government regulations & audit stress drain administrative hours.',
    solution: 'Sangoe Compliance calendar automatically alerts and tracks all statutory filings.'
  },
  {
    num: 6,
    title: 'Governance Driven',
    icon: UserCheck,
    color: '#F55F0B',
    bg: 'rgba(245, 95, 11, 0.04)',
    borderColor: 'rgba(245, 95, 11, 0.12)',
    description: 'Establishing transparent management frameworks. Transitioning to professional board-driven oversight.',
    milestones: [
      'Create independent board oversight',
      'Implement robust internal audit controls',
      'Formulate comprehensive policy manuals'
    ],
    growthChallenge: 'Conflicts of interest or audit gaps block potential investments.',
    solution: 'Sangoe Audit Trail log records all system access and edits for forensic clarity.'
  },
  {
    num: 7,
    title: 'Investor Ready',
    icon: DollarSign,
    color: '#EF4444',
    bg: 'rgba(239, 68, 68, 0.04)',
    borderColor: 'rgba(239, 68, 68, 0.12)',
    description: 'Preparing for institutional capital. Organizing due-diligence data rooms for institutional investors.',
    milestones: [
      'Structure clean historical audit reports',
      'Verify intellectual property clean-title',
      'Setup virtual investor data rooms'
    ],
    growthChallenge: 'Due diligence delay due to disorganized or lost company records.',
    solution: 'Sangoe Virtual Data Room secure-shares organized corporate records instantly.'
  },
  {
    num: 8,
    title: 'IPO Ready ✦',
    icon: Award,
    color: '#8B5CF6',
    bg: 'rgba(139, 92, 246, 0.04)',
    borderColor: 'rgba(139, 92, 246, 0.12)',
    description: 'Transitioning to a public enterprise. Conforming to SEBI / regulatory listing guidelines.',
    milestones: [
      'Ensure 100% statutory listing compliance',
      'Deliver public quarterly financial reports',
      'Operate at enterprise corporate governance standards'
    ],
    growthChallenge: 'Highest scrutiny of records and reporting by public stakeholders.',
    solution: 'Sangoe FounderOS™ provides continuous compliance monitoring for public listings.'
  }
];

export default function IPORoadmap() {
  const [activeStage, setActiveStage] = useState(0);
  const { ref, inView } = useReveal(0.1);

  // High performance 3D Mouse Tilt logic using Framer Motion springs (prevents React re-renders)
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useTransform(mouseY, [0, 1], [6, -6]);
  const rotateY = useTransform(mouseX, [0, 1], [-6, 6]);

  const springConfig = { damping: 20, stiffness: 120, mass: 0.4 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xVal = e.clientX - rect.left;
    const yVal = e.clientY - rect.top;
    
    mouseX.set(xVal / width);
    mouseY.set(yVal / height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const currentStage = STAGES[activeStage];
  const IconComponent = currentStage.icon;

  return (
    <section className={`section ${styles.section}`} ref={ref}>
      <div className={styles.meshGlow1} />
      <div className={styles.meshGlow2} />
      
      <div className="wrap">
        {/* Header Section */}
        <div className={styles.headerBlock}>
          <motion.span 
            className="tag"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            Startup to IPO Journey™
          </motion.span>
          <motion.h2 
            className={styles.h2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            Scale Your Business Through the <span className={styles.purpleText}>8 Stages of Growth</span>
          </motion.h2>
          <motion.p 
            className={styles.sub}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            From early-stage chaos to a fully governed, public-ready enterprise. Map your progress and see how Sangoe’s suite of Clouds paves the way.
          </motion.p>
        </div>

        {/* Steps Road Track - Wrap selector */}
        <div className={styles.trackContainer}>
          <div className={styles.trackScrollArea}>
            <div className={styles.roadmapTrack}>
              {/* Progress Bar background */}
              <div className={styles.progressBarBg}>
                <div 
                  className={styles.progressBarActive} 
                  style={{ width: `${(activeStage / (STAGES.length - 1)) * 100}%` }}
                />
              </div>

              {STAGES.map((stage, idx) => {
                const StageIcon = stage.icon;
                const isActive = idx === activeStage;
                return (
                  <button
                    key={idx}
                    className={`${styles.trackNode} ${isActive ? styles.activeNode : ''}`}
                    onClick={() => setActiveStage(idx)}
                    style={{ '--theme-color': stage.color }}
                  >
                    <div className={styles.nodeCircle}>
                      <span className={styles.nodeNumber}>{stage.num}</span>
                      <StageIcon size={18} className={styles.nodeIcon} />
                    </div>
                    <span className={styles.nodeLabel}>{stage.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detailed Stage Content Card */}
        <div className={styles.contentCardWrap}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className={styles.stageCard}
              style={{ 
                borderColor: currentStage.borderColor,
                '--theme-color': currentStage.color,
                '--theme-bg': currentStage.bg,
                '--theme-border': currentStage.borderColor,
                rotateX: rotateXSpring,
                rotateY: rotateYSpring,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Header row */}
              <div className={styles.cardHeader}>
                <div 
                  className={styles.stageBadge}
                  style={{ background: currentStage.bg, color: currentStage.color }}
                >
                  <IconComponent size={20} />
                  <span>Stage {currentStage.num} of 8</span>
                </div>
                <h3 className={styles.cardTitle}>{currentStage.title}</h3>
              </div>

              {/* Grid content */}
              <div className={styles.cardGrid}>
                {/* Description and milestones */}
                <div className={styles.cardInfo}>
                  <p className={styles.cardDescription}>{currentStage.description}</p>
                  
                  <div className={styles.milestonesSection}>
                    <h4 className={styles.sectionTitle}>Key Milestones to Achieve:</h4>
                    <ul className={styles.milestonesList}>
                      {currentStage.milestones.map((m, i) => (
                        <li key={i} className={styles.milestoneItem}>
                          <CheckCircle2 size={16} className={styles.checkIcon} style={{ color: currentStage.color }} />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Challenges & Sangoe Solution comparison panel */}
                <div className={styles.cardComparison}>
                  {/* Challenge */}
                  <div className={styles.challengeBox}>
                    <div className={styles.boxHeader}>
                      <AlertCircle size={16} className={styles.challengeIcon} />
                      <h5>The Growth Bottleneck</h5>
                    </div>
                    <p>{currentStage.growthChallenge}</p>
                  </div>

                  {/* Arrow Indicator */}
                  <div className={styles.comparisonArrow}>
                    <ArrowRight size={16} />
                  </div>

                  {/* Solution */}
                  <div className={styles.solutionBox} style={{ borderLeftColor: currentStage.color }}>
                    <div className={styles.boxHeader}>
                      <Award size={16} style={{ color: currentStage.color }} />
                      <h5>Sangoe Transformation</h5>
                    </div>
                    <p>{currentStage.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
