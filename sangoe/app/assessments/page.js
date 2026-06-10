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
  Award
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
