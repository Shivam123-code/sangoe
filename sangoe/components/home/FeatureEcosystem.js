'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
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
  Sparkles, 
  Award, 
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  MessageSquare,
  BookOpen,
  GraduationCap,
  Check,
  Shield,
  Star
} from 'lucide-react';
import { useReveal, fadeUp, stagger } from '../ui/motion';
import styles from './FeatureEcosystem.module.css';

const PILLARS = [
  {
    id: 'founderos',
    name: 'FounderOS™',
    tag: 'Command Center',
    icon: Award,
    color: '#7C3AED',
    bg: 'rgba(124, 58, 237, 0.06)'
  },
  {
    id: 'clouds',
    name: '9 Core Clouds',
    tag: '50+ Business Functions',
    icon: Briefcase,
    color: '#3B82F6',
    bg: 'rgba(59, 130, 246, 0.06)'
  },
  {
    id: 'solutions',
    name: 'Advanced Solutions',
    tag: 'Enterprise Scale',
    icon: ShieldCheck,
    color: '#10B981',
    bg: 'rgba(16, 185, 129, 0.06)'
  },
  {
    id: 'copilot',
    name: 'AI Co-Pilot™',
    tag: 'Conversational Intelligence',
    icon: Sparkles,
    color: '#EC4899',
    bg: 'rgba(236, 72, 153, 0.06)'
  },
  {
    id: 'ecosystem',
    name: 'Growth Tools & Academy',
    tag: 'Templates & Upskilling',
    icon: GraduationCap,
    color: '#F59E0B',
    bg: 'rgba(245, 158, 11, 0.06)'
  }
];

const CLOUDS_DATA = [
  { name: 'Sales & Revenue', icon: TrendingUp, tagline: 'Generate Business', color: '#3B82F6', modules: ['CRM & Leads', 'Contracts & Subscriptions', 'Quotations', 'Marketing Automation', 'Sales Analytics'] },
  { name: 'HR & Workforce', icon: Users, tagline: 'High Performance Teams', color: '#10B981', modules: ['Recruitment', 'Leave & Attendance', 'Payroll', 'Appointly', 'Org Chart'] },
  { name: 'Project & Operations', icon: Briefcase, tagline: 'Deliver Faster', color: '#F55F0B', modules: ['Tasks & Projects', 'Workflow Automation', 'Support Desk', 'Meetings Tracker'] },
  { name: 'Procurement & Finance', icon: DollarSign, tagline: 'Improve Cash Flow', color: '#EF4444', modules: ['Accounting', 'Purchase Orders', 'Inventory Control', 'Cost Auditing'] },
  { name: 'Assets & Infra', icon: Building, tagline: 'Control Assets', color: '#6366F1', modules: ['Fleet Management', 'AMC Tracking', 'Equipment Lifecycle', 'Utilities Logs'] },
  { name: 'Compliance & Gov', icon: ShieldCheck, tagline: 'Reduce Risks', color: '#8B5CF6', modules: ['Compliance Assurance', 'Audit Management', 'Risk Register', 'Governance Calendar'] },
  { name: 'Business Intelligence', icon: BarChart3, tagline: 'Measure KPIs', color: '#EC4899', modules: ['Founder Cockpit', 'OKR Management', 'Dashboards', 'Dept. Scorecards'] },
  { name: 'Customer Success', icon: Heart, tagline: 'Retain Clients', color: '#06B6D4', modules: ['Ticket Support', 'CSAT Tracker', 'Feedback Log', 'NPS Analytics'] },
  { name: 'SaaS & Ecosystem', icon: Link2, tagline: 'Scale Models', color: '#059669', modules: ['SaaS Billing', 'Marketplace Link', 'Developer API', 'White Label System'] }
];

const COPILOT_QUESTIONS = [
  {
    q: 'Why is cash flow getting blocked?',
    a: 'Cash flow is currently impacted by ₹4.2L in overdue invoices from Construction Clients, and a 12-day delay in milestone sign-offs. Resolving structural dependency in billing collections is recommended.'
  },
  {
    q: 'Which projects are delayed?',
    a: 'Two projects are currently delayed: Project Nexus (interior fitout) is 5 days behind SOP guidelines due to material sourcing issues, and Project Alpha is waiting for compliance review approval.'
  },
  {
    q: 'What compliance is due next week?',
    a: 'Compliance obligations due between June 20-25: PF/ESIC Monthly Filings (June 21), Labour Law compliance audit log submission (June 23), and the AMC safety review for the manufacturing floor.'
  }
];

export default function FeatureEcosystem() {
  const [activeTab, setActiveTab] = useState('founderos');
  const [selectedCloudIdx, setSelectedCloudIdx] = useState(0);
  const [chatQIdx, setChatQIdx] = useState(-1);
  const [chatResponse, setChatResponse] = useState('');
  const [typing, setTyping] = useState(false);
  const { ref, inView } = useReveal(0.05);

  const activePillar = PILLARS.find(p => p.id === activeTab);

  const handleCopilotQ = (idx) => {
    if (typing) return;
    setChatQIdx(idx);
    setTyping(true);
    setChatResponse('');
    
    const text = COPILOT_QUESTIONS[idx].a;
    let current = '';
    let i = 0;
    
    const interval = setInterval(() => {
      if (i < text.length) {
        current += text.charAt(i);
        setChatResponse(current);
        i++;
      } else {
        clearInterval(interval);
        setTyping(false);
      }
    }, 15);
  };

  // Reset states on tab change
  useEffect(() => {
    setChatQIdx(-1);
    setChatResponse('');
    setTyping(false);
  }, [activeTab]);

  return (
    <section className={`section ${styles.section}`} ref={ref} id="features">
      <div className="wrap">
        
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <motion.span variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} className="tag">
            Complete Capabilities
          </motion.span>
          <motion.h2 
            className={styles.h2}
            variants={fadeUp} 
            initial="hidden" 
            animate={inView ? 'show' : 'hidden'}
          >
            The Sangoe Feature Ecosystem
          </motion.h2>
          <motion.p 
            className={styles.sub}
            variants={fadeUp} 
            initial="hidden" 
            animate={inView ? 'show' : 'hidden'}
          >
            Move your organization from chaotic founder-dependency to a structured, scalable, compliant, and investor-ready business.
          </motion.p>
        </div>

        {/* Feature Explorer Grid */}
        <div className={styles.explorer}>
          
          {/* Navigation Sidebar */}
          <div className={styles.sidebar}>
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = activeTab === pillar.id;
              
              return (
                <button
                  key={pillar.id}
                  className={`${styles.sideBtn} ${isActive ? styles.sideBtnActive : ''}`}
                  onClick={() => setActiveTab(pillar.id)}
                  style={{ '--theme-color': pillar.color, '--theme-bg': pillar.bg }}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeFeatureBar" 
                      className={styles.activeBar} 
                      style={{ background: pillar.color }}
                    />
                  )}
                  <span className={styles.btnIcon} style={{ color: pillar.color, background: pillar.bg }}>
                    <Icon size={20} />
                  </span>
                  <div className={styles.btnText}>
                    <span className={styles.btnName}>{pillar.name}</span>
                    <span className={styles.btnTag}>{pillar.tag}</span>
                  </div>
                  <ArrowRight size={14} className={styles.arrow} />
                </button>
              );
            })}
          </div>

          {/* Visualization Console */}
          <div className={styles.console} style={{ borderTop: `4px solid ${activePillar.color}` }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className={styles.consoleGrid}
              >
                
                {/* Left Side: Mockup Preview Panel with 3D Transforms */}
                <div className={styles.previewColumn}>
                  <div className={styles.mockupWrapper}>
                    {/* Glowing Backlight */}
                    <div 
                      className={styles.glowBacklight} 
                      style={{ background: `radial-gradient(circle, ${activePillar.color}35 0%, transparent 70%)` }} 
                    />
                    
                    {activeTab === 'founderos' && (
                      <>
                        <div className={styles.perspectiveCard}>
                          <Image 
                            src="/images/founderos_mockup.png" 
                            alt="FounderOS Dashboard Preview" 
                            width={540} 
                            height={340} 
                            className={styles.mockupImg} 
                            priority 
                          />
                        </div>
                        {/* Floating Badges */}
                        <motion.div 
                          className={styles.floatingBadgeCard} 
                          style={{ top: '10%', right: '-15px' }}
                          animate={{ y: [0, -6, 0] }}
                          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                        >
                          <span className={styles.pulseGreenDot} />
                          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1e293b' }}>Cash Flow: Healthy</span>
                        </motion.div>
                        <motion.div 
                          className={styles.floatingBadgeCard} 
                          style={{ bottom: '15%', left: '-15px' }}
                          animate={{ y: [0, 6, 0] }}
                          transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
                        >
                          <Star size={12} fill="#F59E0B" color="#F59E0B" />
                          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1e293b' }}>Maturity Level: AAA</span>
                        </motion.div>
                      </>
                    )}

                    {activeTab === 'clouds' && (
                      <div className={styles.interactiveClouds}>
                        <div className={styles.cloudSelectorGrid}>
                          {CLOUDS_DATA.map((cloud, idx) => {
                            const Icon = cloud.icon;
                            const isSel = selectedCloudIdx === idx;
                            return (
                              <button
                                key={cloud.name}
                                className={`${styles.cloudMiniCard} ${isSel ? styles.cloudMiniActive : ''}`}
                                onClick={() => setSelectedCloudIdx(idx)}
                                style={{ '--c': cloud.color }}
                              >
                                <span className={styles.cloudIcon} style={{ color: cloud.color, background: isSel ? '#fff' : `${cloud.color}12` }}>
                                  <Icon size={15} />
                                </span>
                                <span className={styles.cloudMiniName}>{cloud.name}</span>
                              </button>
                            );
                          })}
                        </div>
                        <div className={styles.selectedCloudDetail} style={{ borderLeft: `3px solid ${CLOUDS_DATA[selectedCloudIdx].color}` }}>
                          <div className={styles.cloudTagline} style={{ color: CLOUDS_DATA[selectedCloudIdx].color }}>{CLOUDS_DATA[selectedCloudIdx].tagline}</div>
                          <h4 className={styles.cloudNameDetail}>{CLOUDS_DATA[selectedCloudIdx].name} Cloud</h4>
                          <div className={styles.cloudModulesGrid}>
                            {CLOUDS_DATA[selectedCloudIdx].modules.map(mod => (
                              <span key={mod} className={styles.modBadge} style={{ '--c': CLOUDS_DATA[selectedCloudIdx].color }}>
                                {mod}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'solutions' && (
                      <>
                        <div className={styles.perspectiveCard}>
                          <Image 
                            src="/images/advanced_solutions_mockup.png" 
                            alt="Compliance & Solutions Control Panel" 
                            width={540} 
                            height={340} 
                            className={styles.mockupImg} 
                          />
                        </div>
                        <motion.div 
                          className={styles.floatingBadgeCard} 
                          style={{ top: '15%', left: '-15px' }}
                          animate={{ y: [0, -6, 0] }}
                          transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
                        >
                          <Shield size={12} style={{ color: '#10B981' }} />
                          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1e293b' }}>SOP Compliance: 94%</span>
                        </motion.div>
                        <motion.div 
                          className={styles.floatingBadgeCard} 
                          style={{ bottom: '15%', right: '-15px' }}
                          animate={{ y: [0, 6, 0] }}
                          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.8 }}
                        >
                          <CheckCircle size={12} style={{ color: '#8B5CF6' }} />
                          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1e293b' }}>Due Diligence Lock: SECURE</span>
                        </motion.div>
                      </>
                    )}

                    {activeTab === 'copilot' && (
                      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div className={styles.perspectiveCard} style={{ opacity: 0.4 }}>
                          <Image 
                            src="/images/ai_copilot_mockup.png" 
                            alt="AI Business Co-Pilot" 
                            width={540} 
                            height={340} 
                            className={styles.mockupImg} 
                          />
                        </div>
                        {/* Overlay Glassmorphic Chat Widget */}
                        <div className={styles.chatOverlayWidget}>
                          <div className={styles.chatHeader}>
                            <Sparkles size={14} style={{ color: '#EC4899' }} />
                            <span>AI Co-Pilot Panel</span>
                          </div>
                          <div className={styles.chatBody}>
                            {chatQIdx === -1 ? (
                              <div className={styles.chatIntro}>
                                <p style={{ fontSize: '0.78rem' }}>Click a question below to analyze your system metrics:</p>
                                <div className={styles.chatQList}>
                                  {COPILOT_QUESTIONS.map((item, idx) => (
                                    <button key={idx} onClick={() => handleCopilotQ(idx)} className={styles.chatQBtn}>
                                      <MessageSquare size={12} style={{ color: '#EC4899' }} />
                                      <span>{item.q}</span>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <div className={styles.chatConversation}>
                                <div className={styles.chatMsgUser}>
                                  {COPILOT_QUESTIONS[chatQIdx].q}
                                </div>
                                <div className={styles.chatMsgAi}>
                                  <div className={styles.chatAiText}>
                                    {chatResponse}
                                    {typing && <span className={styles.chatCursor}>|</span>}
                                  </div>
                                  {!typing && (
                                    <button onClick={() => setChatQIdx(-1)} className={styles.chatResetBtn}>
                                      Ask another question
                                    </button>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'ecosystem' && (
                      <>
                        <div className={styles.perspectiveCard}>
                          <Image 
                            src="/images/growth_ecosystem_mockup.png" 
                            alt="Ecosystem Assets" 
                            width={540} 
                            height={340} 
                            className={styles.mockupImg} 
                          />
                        </div>
                        <motion.div 
                          className={styles.floatingBadgeCard} 
                          style={{ top: '12%', right: '-15px' }}
                          animate={{ y: [0, -6, 0] }}
                          transition={{ repeat: Infinity, duration: 3.4, ease: 'easeInOut' }}
                        >
                          <BookOpen size={12} style={{ color: '#F59E0B' }} />
                          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1e293b' }}>1000+ Business SOP Templates</span>
                        </motion.div>
                        <motion.div 
                          className={styles.floatingBadgeCard} 
                          style={{ bottom: '12%', left: '-15px' }}
                          animate={{ y: [0, 6, 0] }}
                          transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut', delay: 0.6 }}
                        >
                          <GraduationCap size={13} style={{ color: '#3B82F6' }} />
                          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1e293b' }}>Academy Path: Active</span>
                        </motion.div>
                      </>
                    )}

                  </div>
                </div>

                {/* Right Side: Detailed Descriptions & CTA */}
                <div className={styles.descColumn}>
                  <div className={styles.pillarTitleBlock}>
                    <span className={styles.pillarTagBadge} style={{ background: activePillar.bg, color: activePillar.color }}>
                      {activePillar.tag}
                    </span>
                    <h3 className={styles.pillarNameHeading}>{activePillar.name}</h3>
                  </div>

                  {activeTab === 'founderos' && (
                    <div className={styles.pillarDesc}>
                      <p>FounderOS™ acts as your company's executive command center. It aggregates critical parameters into a single real-time cockpit, enabling complete operational visibility.</p>
                      <ul className={styles.descList}>
                        <li>📊 <b>Command KPIs</b>: Real-time sales pipelines, revenue tracking, and cash flow status.</li>
                        <li>🚀 <b>Maturity Dials</b>: Automatic calculation of your Business Growth and Systemization Scores.</li>
                        <li>🛡️ <b>Due Diligence Checklists</b>: Visual checklists verifying compliance, cash ratios, and IPO readiness.</li>
                      </ul>
                    </div>
                  )}

                  {activeTab === 'clouds' && (
                    <div className={styles.pillarDesc}>
                      <p>Replace isolated apps with 9 specialized product clouds built on a single, unified database architecture. No duplicate logins or broken integrations.</p>
                      <ul className={styles.descList}>
                        <li>🤝 <b>Sales &amp; HR Clouds</b>: Manage leads, contracts, commissions, payroll, and attendance in one place.</li>
                        <li>🏭 <b>Ops &amp; Finance Clouds</b>: Control project tasks, timesheets, approvals, inventory, and expenditures.</li>
                        <li>🏢 <b>BI &amp; Governance Clouds</b>: Track AMC alerts, compliance filings, audit registers, and founder OKRs.</li>
                      </ul>
                    </div>
                  )}

                  {activeTab === 'solutions' && (
                    <div className={styles.pillarDesc}>
                      <p>Deploy specialized compliance and governance systems engineered to handle structural challenges and de-risk your enterprise scale.</p>
                      <ul className={styles.descList}>
                        <li>🏭 <b>MSME Transformation</b>: Transition from chaotic founder-dependent operations to standard procedures (SOPs).</li>
                        <li>🛡️ <b>Compliance Control Tower</b>: Centralized alert trackers for labour laws, safety permits, and audits.</li>
                        <li>🔍 <b>QuickVerification™</b>: Instant, built-in directory checks for employees, contractors, and vendors.</li>
                      </ul>
                    </div>
                  )}

                  {activeTab === 'copilot' && (
                    <div className={styles.pillarDesc}>
                      <p>Run operations in natural language. The AI Business Co-Pilot answers questions, flags operational warnings, and identifies structural growth blockers.</p>
                      <ul className={styles.descList}>
                        <li>💬 <b>Natural Language Queries</b>: Ask why collections are lagging or where project delays are originating.</li>
                        <li>⚠️ <b>Proactive Risk Alerts</b>: Automatic notifications about due compliance or underperforming systems.</li>
                        <li>📈 <b>Instant Financial Reports</b>: Pull analytics on margins, cash flows, and resource efficiency instantly.</li>
                      </ul>
                    </div>
                  )}

                  {activeTab === 'ecosystem' && (
                    <div className={styles.pillarDesc}>
                      <p>Unlock access to curated tools, calculator systems, and learning frameworks designed to guide you through every growth stage.</p>
                      <ul className={styles.descList}>
                        <li>🎓 <b>Sangoe Academy™</b>: Training courses for team leads in governance, safety protocols, and operations.</li>
                        <li>📂 <b>Template Hub</b>: Pre-drafted SOP files, statutory PF registers, director checklists, and audits.</li>
                        <li>🧮 <b>Interactive Calculators</b>: Access to PF, ESIC, payroll, working capital, and ROI assessment tools.</li>
                      </ul>
                    </div>
                  )}

                  <div className={styles.actionBlock}>
                    <Link href="/features" className="btn btn-purple">
                      Explore Full Feature Set <ArrowRight size={14} style={{ marginLeft: '6px' }} />
                    </Link>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
