'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  XCircle, 
  User, 
  ArrowLeft,
  FileText,
  ShieldCheck,
  Activity,
  Award,
  Leaf,
  AlertTriangle,
  Users,
  Settings,
  Briefcase,
  Truck
} from 'lucide-react';

const ASSESSMENTS = [
  {
    id: 'founder-dep',
    name: 'Founder Dependency Score™',
    desc: 'Measure how much your business depends on you for day-to-day operations.',
    icon: User,
    color: '#7C3AED',
    bg: '#F5F3FF',
    questions: [
      { q: 'How many hours per week do you spend on routine operational tasks?', options: [{ text: 'Over 40 hours', score: 90 }, { text: '20 to 40 hours', score: 60 }, { text: 'Under 20 hours', score: 20 }] },
      { q: 'Can the business run for 30 days without your phone/email presence?', options: [{ text: 'No, it would crash', score: 100 }, { text: 'Yes, but with issues', score: 50 }, { text: 'Yes, completely smooth', score: 10 }] },
      { q: 'Do department leads make pricing or hiring decisions without your approval?', options: [{ text: 'Never', score: 90 }, { text: 'Sometimes, within limits', score: 40 }, { text: 'Always, fully empowered', score: 10 }] },
      { q: 'Are your standard operating procedures (SOPs) documented and followed?', options: [{ text: 'Not documented', score: 100 }, { text: 'Documented but rarely used', score: 60 }, { text: 'Fully documented & automated', score: 10 }] }
    ]
  },
  {
    id: 'ipo-ready',
    name: 'IPO Readiness Score™',
    desc: 'Verify if your governance, financial books, and compliance meet public listing criteria.',
    icon: Award,
    color: '#F55F0B',
    bg: '#FFFBEB',
    questions: [
      { q: 'Are your financial records audited by a reputed statutory firm?', options: [{ text: 'No, only basic tax filings', score: 10 }, { text: 'Yes, local firm', score: 60 }, { text: 'Yes, Big 4 or top-tier firm', score: 100 }] },
      { q: 'Do you have an independent Board of Directors with committee charters?', options: [{ text: 'No board', score: 10 }, { text: 'Board exists, but no independent members', score: 50 }, { text: 'Fully independent board & audit committees', score: 100 }] },
      { q: 'Is there a formal Enterprise Risk Register updated quarterly?', options: [{ text: 'No risk register', score: 15 }, { text: 'Basic checklist exists', score: 55 }, { text: 'Comprehensive registry with mitigation plans', score: 100 }] },
      { q: 'Are all regulatory filings (PF, ESIC, Tax) filed on-time without penalties?', options: [{ text: 'Occasional delays/penalties', score: 20 }, { text: 'Always on time', score: 80 }, { text: 'Fully automated filings with zero errors', score: 100 }] }
    ]
  },
  {
    id: 'biz-health',
    name: 'Business Health Score™',
    desc: 'Examine your overall system maturity, profitability checks, and team efficiency.',
    icon: Activity,
    color: '#3B82F6',
    bg: '#EFF6FF',
    questions: [
      { q: 'Do you have real-time visibility into daily cash collections and sales pipeline?', options: [{ text: 'No, calculated monthly', score: 20 }, { text: 'Yes, via spreadsheets updated daily', score: 60 }, { text: 'Yes, via live dashboards', score: 100 }] },
      { q: 'What is your employee retention rate compared to the industry average?', options: [{ text: 'High turnover (under 1 year)', score: 30 }, { text: 'Average turnover', score: 70 }, { text: 'Excellent retention (over 3 years)', score: 100 }] },
      { q: 'How do you handle customer support tickets and response SLAs?', options: [{ text: 'Manual emails/calls', score: 20 }, { text: 'Shared ticketing system', score: 70 }, { text: 'Automated workflow with SLA alerts', score: 100 }] },
      { q: 'Are your sales agents hitting their monthly revenue quotas consistently?', options: [{ text: 'Under 50% hit rate', score: 30 }, { text: '50% to 80% hit rate', score: 75 }, { text: 'Over 80% hit rate', score: 100 }] }
    ]
  },
  {
    id: 'comp-score',
    name: 'Compliance Score™',
    desc: 'Evaluate your adherence to statutory laws, labor compliances, and internal policies.',
    icon: ShieldCheck,
    color: '#8B5CF6',
    bg: '#F5F3FF',
    questions: [
      { q: 'How do you track labor laws, PF, and ESIC compliances?', options: [{ text: 'Manual tracking or outsourced without verification', score: 20 }, { text: 'Spreadsheets reviewed monthly', score: 60 }, { text: 'Automated compliance tracking tool', score: 100 }] },
      { q: 'Are your vendor and contractor compliances actively verified?', options: [{ text: 'No verification done', score: 10 }, { text: 'Only basic document collection', score: 50 }, { text: 'Strict verification and continuous monitoring', score: 100 }] },
      { q: 'How often do you conduct internal audits?', options: [{ text: 'Rarely or never', score: 10 }, { text: 'Once a year', score: 50 }, { text: 'Quarterly or monthly', score: 100 }] },
      { q: 'Do you have a clear approval matrix documented for all key decisions?', options: [{ text: 'No, decisions are ad-hoc', score: 10 }, { text: 'Yes, verbally or via email', score: 40 }, { text: 'Yes, fully documented and automated', score: 100 }] }
    ]
  },
  {
    id: 'esg-score',
    name: 'ESG Score™',
    desc: 'Measure your environmental impact, social responsibility, and governance practices.',
    icon: Leaf,
    color: '#10B981',
    bg: '#ECFDF5',
    questions: [
      { q: 'Do you actively track and attempt to reduce your carbon footprint?', options: [{ text: 'No tracking', score: 10 }, { text: 'Some basic initiatives in place', score: 50 }, { text: 'Comprehensive carbon tracking and reduction goals', score: 100 }] },
      { q: 'Is your company aligned with UN Sustainable Development Goals (SDGs)?', options: [{ text: 'Not aware/Not aligned', score: 10 }, { text: 'Partially aligned in some areas', score: 60 }, { text: 'Fully integrated into business strategy', score: 100 }] },
      { q: 'How do you report your sustainability efforts?', options: [{ text: 'We do not report', score: 10 }, { text: 'Informal internal reports', score: 40 }, { text: 'Formal annual sustainability reports', score: 100 }] },
      { q: 'Are social impact and diversity metrics tracked for your workforce?', options: [{ text: 'No', score: 10 }, { text: 'Yes, minimally', score: 50 }, { text: 'Yes, comprehensively', score: 100 }] }
    ]
  },
  {
    id: 'safety-score',
    name: 'Safety Score™',
    desc: 'Audit your worksite safety, incident management, and hazard controls.',
    icon: AlertTriangle,
    color: '#EF4444',
    bg: '#FEF2F2',
    questions: [
      { q: 'How are safety audits and inspections conducted?', options: [{ text: 'Rarely, or only when required', score: 20 }, { text: 'Paper-based monthly audits', score: 60 }, { text: 'Digital tracking with real-time reporting', score: 100 }] },
      { q: 'Is there a formal "Permit To Work" system for high-risk tasks?', options: [{ text: 'No system in place', score: 10 }, { text: 'Yes, but often bypassed', score: 40 }, { text: 'Strictly enforced digital permits', score: 100 }] },
      { q: 'How are near-misses and incidents reported?', options: [{ text: 'Often go unreported', score: 10 }, { text: 'Reported via paper/email forms', score: 50 }, { text: 'Centralized incident management platform', score: 100 }] },
      { q: 'Are all contractors verified for safety compliance before starting work?', options: [{ text: 'No', score: 10 }, { text: 'Sometimes', score: 50 }, { text: 'Always, strictly enforced', score: 100 }] }
    ]
  },
  {
    id: 'hr-maturity',
    name: 'HR Maturity Score™',
    desc: 'Assess your employee lifecycle management, training, and performance systems.',
    icon: Users,
    color: '#06B6D4',
    bg: '#ECFEFF',
    questions: [
      { q: 'How is employee attendance and leave managed?', options: [{ text: 'Manual registers or spreadsheets', score: 20 }, { text: 'Basic biometric/app', score: 60 }, { text: 'Fully integrated HRMS', score: 100 }] },
      { q: 'Do you have a structured recruitment and onboarding process?', options: [{ text: 'Ad-hoc hiring, no onboarding plan', score: 20 }, { text: 'Standard interviews, basic orientation', score: 60 }, { text: 'Automated tracking and structured onboarding', score: 100 }] },
      { q: 'How is employee performance evaluated?', options: [{ text: 'Annual informal reviews', score: 20 }, { text: 'Standard KPI tracking', score: 60 }, { text: 'Continuous feedback with OKR/KPI mapping', score: 100 }] },
      { q: 'Do you maintain a skills matrix and organize regular training?', options: [{ text: 'No specific training plans', score: 20 }, { text: 'Occasional training sessions', score: 50 }, { text: 'Active skill tracking and regular training', score: 100 }] }
    ]
  },
  {
    id: 'biz-system',
    name: 'Business Systemization Score™',
    desc: 'Determine how well your operational processes are mapped and automated.',
    icon: Settings,
    color: '#10B981',
    bg: '#ECFDF5',
    questions: [
      { q: 'Are standard operating procedures (SOPs) documented for all roles?', options: [{ text: 'No, mostly in peoples heads', score: 10 }, { text: 'Some departments have them', score: 50 }, { text: 'Yes, comprehensively documented', score: 100 }] },
      { q: 'How integrated is your business data?', options: [{ text: 'Scattered across multiple tools and excels', score: 20 }, { text: 'Some integrated tools', score: 60 }, { text: 'One unified platform (Single source of truth)', score: 100 }] },
      { q: 'Are routine tasks and approvals automated?', options: [{ text: 'Everything is manual', score: 10 }, { text: 'Basic email/workflow automation', score: 50 }, { text: 'Extensive workflow automation', score: 100 }] },
      { q: 'Do you use department scorecards to track performance?', options: [{ text: 'No', score: 10 }, { text: 'Only for sales/finance', score: 50 }, { text: 'Yes, for all departments', score: 100 }] }
    ]
  },
  {
    id: 'project-health',
    name: 'Project Health Score™',
    desc: 'Evaluate your ability to deliver projects on time and within budget.',
    icon: Briefcase,
    color: '#F59E0B',
    bg: '#FFFBEB',
    questions: [
      { q: 'How do you track project progress and deadlines?', options: [{ text: 'Emails and WhatsApp', score: 20 }, { text: 'Spreadsheets or basic task tools', score: 60 }, { text: 'Advanced project management software', score: 100 }] },
      { q: 'Are timesheets and resource utilization accurately tracked?', options: [{ text: 'No tracking', score: 10 }, { text: 'Manual tracking', score: 50 }, { text: 'Automated tracking integrated with projects', score: 100 }] },
      { q: 'How do you manage project documents and knowledge?', options: [{ text: 'Stored on local drives or emails', score: 20 }, { text: 'Shared cloud folders (e.g., GDrive)', score: 60 }, { text: 'Centralized knowledge base and doc control', score: 100 }] },
      { q: 'Do you track an Action Tracker for meetings and deliverables?', options: [{ text: 'No structured tracking', score: 20 }, { text: 'Meeting minutes via email', score: 50 }, { text: 'Centralized digital Action Tracker', score: 100 }] }
    ]
  },
  {
    id: 'vendor-risk',
    name: 'Vendor Risk Score™',
    desc: 'Assess the risk profile of your third-party vendors and contractors.',
    icon: Truck,
    color: '#6366F1',
    bg: '#EEF2FF',
    questions: [
      { q: 'How do you select and onboard new vendors?', options: [{ text: 'Ad-hoc selection, minimal checks', score: 20 }, { text: 'Standard vendor form collection', score: 60 }, { text: 'Rigorous vetting and digital onboarding', score: 100 }] },
      { q: 'Do you monitor vendor performance and compliance regularly?', options: [{ text: 'Only when issues arise', score: 20 }, { text: 'Annual reviews', score: 50 }, { text: 'Continuous monitoring and scoring', score: 100 }] },
      { q: 'Are vendor contracts and NDAs centrally managed?', options: [{ text: 'Scattered in emails/files', score: 20 }, { text: 'Stored in a shared drive', score: 60 }, { text: 'Centralized contract management system', score: 100 }] },
      { q: 'How do you track vendor payments and prevent delays?', options: [{ text: 'Manual tracking, frequent delays', score: 20 }, { text: 'Spreadsheet tracking', score: 60 }, { text: 'Automated payment tracking and alerts', score: 100 }] }
    ]
  }
];

export default function AssessmentsPage() {
  const [selectedAssessment, setSelectedAssessment] = useState(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [responses, setResponses] = useState({});
  const [showResult, setShowResult] = useState(false);

  const startAssessment = (assessment) => {
    setSelectedAssessment(assessment);
    setCurrentQuestionIdx(0);
    setResponses({});
    setShowResult(false);
  };

  const handleSelectOption = (score) => {
    const nextResponses = { ...responses, [currentQuestionIdx]: score };
    setResponses(nextResponses);

    if (currentQuestionIdx < selectedAssessment.questions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateFinalScore = () => {
    const scores = Object.values(responses);
    const sum = scores.reduce((a, b) => a + b, 0);
    const avg = Math.round(sum / selectedAssessment.questions.length);
    return avg;
  };

  const getInterpretation = (score) => {
    if (selectedAssessment.id === 'founder-dep') {
      if (score > 70) return { title: 'High Dependency (Critical)', text: 'Your business cannot survive without you. You need to automate operations immediately.', color: '#ef4444' };
      if (score > 40) return { title: 'Moderate Dependency', text: 'You are delegating, but systems are weak. Start mapping key department SOPs.', color: '#f59e0b' };
      return { title: 'Low Dependency (Systemized)', text: 'Excellent! Your business is self-sustaining and system-driven.', color: '#10b981' };
    } else {
      if (score > 80) return { title: 'Strong / Ready', text: 'Great standing. Ready for scale, investment, or IPO listing processes.', color: '#10b981' };
      if (score > 50) return { title: 'Moderate / Action Required', text: 'Decent foundation but notable compliance or governance gaps exist.', color: '#f59e0b' };
      return { title: 'Weak / High Risk', text: 'Critical gaps found. You risk regulatory penalties or operational failures.', color: '#ef4444' };
    }
  };

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f9fafb', paddingBottom: '80px' }}>
      {/* Header */}
      <section style={{ padding: '80px 20px', textAlign: 'center', background: 'linear-gradient(180deg, #F3E8FF 0%, #FAF5FF 60%, #F9FAFB 100%)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="tag" style={{ marginBottom: '16px' }}>Diagnostic tools</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 950, color: '#111827', lineHeight: 1.1, marginBottom: '20px' }}>
            Free Business <br /><span style={{ color: '#7C3AED' }}>Assessments &amp; Audits</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#4b5563', lineHeight: 1.7 }}>
            Identify operational bottlenecks, compliance risks, and founder-dependency scores instantly with our diagnostic frameworks.
          </p>
        </div>
      </section>

      {/* Main Panel */}
      <section style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <AnimatePresence mode="wait">
          {!selectedAssessment ? (
            /* Assessment Selection List */
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              {ASSESSMENTS.map(item => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    style={{
                      background: '#ffffff',
                      borderRadius: '20px',
                      padding: '32px',
                      border: '1px solid rgba(0,0,0,0.04)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.008)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '20px'
                    }}
                  >
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', maxWidth: '500px' }}>
                      <span style={{ display: 'inline-flex', color: item.color, background: item.bg, padding: '16px', borderRadius: '16px' }}>
                        <IconComponent size={28} />
                      </span>
                      <div>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>{item.name}</h3>
                        <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    </div>
                    <button onClick={() => startAssessment(item)} className="btn btn-purple" style={{ backgroundColor: item.color, boxShadow: 'none' }}>
                      Start Test
                    </button>
                  </div>
                );
              })}
            </motion.div>
          ) : showResult ? (
            /* Result Card */
            <motion.div
              key="result"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                padding: '48px',
                border: '1px solid rgba(0,0,0,0.04)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.015)',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '1.2rem', color: '#6b7280', fontWeight: 700, marginBottom: '8px' }}>Your Score</div>
              <div style={{ fontSize: '4.5rem', fontWeight: 900, color: getInterpretation(calculateFinalScore()).color, lineHeight: 1 }}>
                {calculateFinalScore()}%
              </div>

              <div style={{ margin: '24px 0' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#111827', marginBottom: '8px' }}>
                  {getInterpretation(calculateFinalScore()).title}
                </h3>
                <p style={{ color: '#4b5563', lineHeight: 1.6, maxWidth: '500px', margin: '0 auto', fontWeight: 500 }}>
                  {getInterpretation(calculateFinalScore()).text}
                </p>
              </div>

              <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '28px', marginTop: '28px' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#111827', marginBottom: '12px' }}>Download Full Business Assessment PDF</h4>
                <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '20px' }}>Enter your work email to receive your full breakdown report.</p>
                <div style={{ display: 'flex', gap: '8px', maxWidth: '440px', margin: '0 auto', flexWrap: 'wrap' }}>
                  <input type="email" placeholder="Enter Work Email" style={{ flex: 1, padding: '12px 18px', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none' }} />
                  <button className="btn btn-purple" onClick={() => alert('Diagnostic Report sent to your email!')}>Get PDF Report</button>
                </div>
              </div>

              <button
                onClick={() => setSelectedAssessment(null)}
                style={{ marginTop: '32px', fontSize: '0.85rem', color: '#7C3AED', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <ArrowLeft size={14} /> Back to Assessments List
              </button>
            </motion.div>
          ) : (
            /* Multi-step Question Card */
            <motion.div
              key="question"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -30, opacity: 0 }}
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                padding: '40px',
                border: '1px solid rgba(0,0,0,0.04)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.015)'
              }}
            >
              {/* Progress Indicator */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <span style={{ fontSize: '0.8rem', color: '#9ca3af', fontWeight: 700 }}>
                  Question {currentQuestionIdx + 1} of {selectedAssessment.questions.length}
                </span>
                <span style={{ fontSize: '0.85rem', color: selectedAssessment.color, fontWeight: 700 }}>{selectedAssessment.name}</span>
              </div>
              <div style={{ height: '4px', background: '#f3f4f6', borderRadius: '2px', width: '100%', marginBottom: '32px', overflow: 'hidden' }}>
                <div
                  style={{
                    height: '100%',
                    background: selectedAssessment.color,
                    width: `${((currentQuestionIdx + 1) / selectedAssessment.questions.length) * 100}%`,
                    transition: 'width 0.3s ease'
                  }}
                />
              </div>

              {/* Question Text */}
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#111827', marginBottom: '28px', lineHeight: 1.4 }}>
                {selectedAssessment.questions[currentQuestionIdx].q}
              </h3>

              {/* Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {selectedAssessment.questions[currentQuestionIdx].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(option.score)}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      borderRadius: '12px',
                      border: '1.5px solid #e5e7eb',
                      background: '#ffffff',
                      textAlign: 'left',
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      color: '#374151',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = selectedAssessment.color; e.currentTarget.style.background = '#F9F8FF'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.background = '#ffffff'; }}
                  >
                    {option.text}
                  </button>
                ))}
              </div>

              <div style={{ marginTop: '32px', textAlign: 'center' }}>
                <button
                  onClick={() => setSelectedAssessment(null)}
                  style={{ fontSize: '0.8rem', color: '#9ca3af', fontWeight: 700, cursor: 'pointer' }}
                >
                  Cancel Assessment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
