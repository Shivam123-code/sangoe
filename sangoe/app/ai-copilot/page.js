'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Sparkles, MessageSquare, ShieldAlert, BarChart3,
  Search, Lock, Database, UserCheck, CheckCircle2,
  ChevronRight, Brain, Terminal, Send
} from 'lucide-react';

const CAPABILITIES = [
  { title: 'Ask Anything', desc: 'Get instant answers from your unified business data in natural language.', icon: MessageSquare, color: '#3b82f6' },
  { title: 'Generate Reports', desc: 'Create complex MIS reports, summaries, dashboards, and presentations on the fly.', icon: BarChart3, color: '#10b981' },
  { title: 'Predict Risks', desc: 'Identify compliance gaps, delayed projects, cash flow anomalies, and bottlenecks before they hit.', icon: ShieldAlert, color: '#ef4444' },
  { title: 'Workflow Automation', desc: 'Automate approvals, reminders, escalations, and repetitive tasks with smart triggers.', icon: Sparkles, color: '#a855f7' },
  { title: 'AI Insights', desc: 'Receive personalized recommendations for improving workforce productivity and unit economics.', icon: Brain, color: '#f59e0b' },
  { title: 'Smart Search', desc: 'Search across CRM, HR, Finance, Projects, Inventory, and Compliance using unified semantic index.', icon: Search, color: '#06b6d4' },
];

const MODULES = [
  'CRM', 'HRMS', 'Payroll', 'Projects', 'Inventory', 'Compliance', 'ESG', 'Safety', 'Finance', 'Procurement'
];

const CHAT_SAMPLES = [
  {
    q: 'Which customers have overdue payments?',
    a: `I scanned the Ledger and found 3 customers with overdue payments:
• Acme Corp: ₹1,45,000 (Overdue 22 days)
• Matrix Labs: ₹82,000 (Overdue 18 days)
• Apex Solutions: ₹2,10,000 (Overdue 12 days)

Email reminders have been auto-drafted. Would you like me to send them?`
  },
  {
    q: 'Show employee attendance trends.',
    a: `Average attendance for this month stands at 94.2%:
• Peak attendance: Tuesdays & Wednesdays (97.8%)
• Lowest attendance: Fridays (88.4%)
• Pending leave requests: 3 applications

You can review the pending leaves in the HRMS Cloud.`
  },
  {
    q: 'Generate this month\'s sales report.',
    a: `Monthly Sales Report (June 1 - 25, 2026):
• Gross Billings: ₹74,50,000 (▲ +12% MoM)
• Closed Won: 48 deals
• Top Cloud Product: Sales & Revenue Cloud

I have prepared the complete MIS sheet. Click to download PDF.`
  },
  {
    q: 'Predict inventory shortages.',
    a: `Inventory predictive audit alert:
• Steel bars (Code: RM-902): Current stock is 120 units. Based on the active project plan 'Factory Phase 2', stock will run out in 6 days.

Recommended Action: Issue Purchase Order for 500 units from Varanasi Alloys.`
  },
  {
    q: 'Which compliances expire next month?',
    a: `Upcoming Regulatory Due Dates (July 2026):
• GST Return (GSTR-1): July 11 (Critical)
• Provident Fund (PF) ECR: July 15
• ESIC Contribution: July 15
• POSH Half-Yearly Report: July 20

I've synced these dates to the Compliance Control Tower.`
  },
  {
    q: 'Show project\'s delayed milestones.',
    a: `Project 'Mobile Client App v2' has 1 delayed milestone:
• Stage 'API Integration Gateway': Delayed by 4 days due to pending compliance audit verification.
• Assigned Lead: Amit Sharma.

Would you like me to nudge the team lead on Slack?`
  }
];

const SECURITY_POINTS = [
  { title: 'Secure AI', desc: 'Your data is encrypted at rest and in transit. Your queries never train public LLM models.', icon: Lock },
  { title: 'Business Context Aware', desc: 'Sangoe AI links CRM, HR, Finance, and Operations records to understand your business ontology.', icon: Database },
  { title: 'Role Based Access', desc: 'Respects existing database permissions — a manager only sees queries authorized for their role.', icon: UserCheck },
  { title: 'Enterprise Ready', desc: 'Guaranteed 99.9% uptime SLA with low-latency private vector databases.', icon: CheckCircle2 },
  { title: 'Human Approval Controls', desc: 'AI proposes automations or triggers, but execution always requires human confirmation.', icon: CheckCircle2 }
];

export default function AiCopilotPage() {
  const [selectedChat, setSelectedChat] = useState(0);
  const [customMsg, setCustomMsg] = useState('');
  const [chatLog, setChatLog] = useState([
    { role: 'user', text: CHAT_SAMPLES[0].q },
    { role: 'assistant', text: CHAT_SAMPLES[0].a }
  ]);

  const handleSelectSample = (idx) => {
    setSelectedChat(idx);
    setChatLog([
      { role: 'user', text: CHAT_SAMPLES[idx].q },
      { role: 'assistant', text: CHAT_SAMPLES[idx].a }
    ]);
  };

  const handleSendCustom = (e) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    const msg = customMsg;
    setCustomMsg('');
    setChatLog(prev => [...prev, { role: 'user', text: msg }]);
    
    setTimeout(() => {
      setChatLog(prev => [...prev, {
        role: 'assistant',
        text: `I've received your query: "${msg}". I am currently running inside the demonstration environment, but once connected to your database, I will instantly analyze your data records to generate real-time metrics.`
      }]);
    }, 700);
  };

  return (
    <div style={{ paddingTop: '0', minHeight: '100vh', background: 'var(--theme-bg)', color: 'var(--theme-text-main)' }}>
      
      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #0e051d 0%, #170d35 50%, #20124d 100%)', overflow: 'hidden', padding: '120px 20px 90px' }}>
        <div style={{ position: 'absolute', top: '-130px', right: '-80px', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.22) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <motion.span className="tag tag-dark" style={{ marginBottom: '24px', display: 'inline-block' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Sangoe AI Co-Pilot</motion.span>
          <motion.h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 950, color: '#ffffff', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
            Meet Your Intelligent<br />
            <span style={{ background: 'linear-gradient(135deg, #c084fc 0%, #a855f7 50%, #f472b6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Business Co-Pilot</span>
          </motion.h1>
          <motion.p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: '680px', margin: '0 auto' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            Operate your entire organization in plain English. Analyze operational data, draft standard compliance reports, predict business bottlenecks, and automate workflows instantly.
          </motion.p>
        </div>
      </section>

      {/* Interactive Chat Console Demonstration */}
      <section style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'start' }}>
          
          {/* Left list of sample questions */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--theme-text-main)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Terminal size={18} color="#a855f7" /> Ask Sangoe AI
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--theme-text-sub)', marginBottom: '24px', lineHeight: 1.6 }}>
              Select a sample prompt below to see how Sangoe AI synthesizes CRM, HRMS, and Finance data in real time:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {CHAT_SAMPLES.map((sample, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectSample(idx)}
                  style={{
                    textAlign: 'left',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    fontSize: '0.85rem',
                    fontWeight: 750,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    border: '1px solid',
                    background: selectedChat === idx ? 'rgba(168,85,247,0.06)' : 'var(--theme-card-bg)',
                    color: selectedChat === idx ? '#a855f7' : 'var(--theme-text-main)',
                    borderColor: selectedChat === idx ? '#a855f7' : 'var(--theme-card-border)',
                    boxShadow: 'var(--theme-shadow-card)'
                  }}
                >
                  {sample.q}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Window Shell */}
          <div style={{ background: '#0b0f19', border: '1px solid #1f293d', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
            
            {/* Window TopBar */}
            <div style={{ background: '#111726', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #1e293b' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }} />
              </div>
              <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Sangoe AI Console
              </span>
              <div style={{ width: '30px' }} />
            </div>

            {/* Message Area */}
            <div style={{ padding: '24px', minHeight: '280px', maxHeight: '400px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {chatLog.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '85%',
                    background: msg.role === 'user' ? '#a855f7' : '#1e293b',
                    color: '#ffffff',
                    padding: '12px 18px',
                    borderRadius: msg.role === 'user' ? '18px 18px 2px 18px' : '18px 18px 18px 2px',
                    fontSize: '0.85rem',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-line'
                  }}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSendCustom} style={{ display: 'flex', borderTop: '1px solid #1e293b', background: '#0e1322' }}>
              <input
                type="text"
                placeholder="Ask business co-pilot..."
                value={customMsg}
                onChange={e => setCustomMsg(e.target.value)}
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#ffffff',
                  padding: '16px 20px',
                  fontSize: '0.85rem'
                }}
              />
              <button
                type="submit"
                style={{
                  background: '#a855f7',
                  border: 'none',
                  color: '#ffffff',
                  padding: '0 20px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Send size={14} />
              </button>
            </form>

          </div>

        </div>
      </section>

      {/* Capabilities Grid */}
      <section style={{ background: 'var(--theme-bg-secondary)', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 800, color: '#7c3aed', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>AI Core</span>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--theme-text-main)' }}>What Can Sangoe AI Do?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div key={i} style={{ background: 'var(--theme-card-bg)', border: '1px solid var(--theme-card-border)', borderRadius: '20px', padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: 'var(--theme-shadow-card)' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: `${cap.color}10`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={20} color={cap.color} />
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 850, color: 'var(--theme-text-main)' }}>{cap.title}</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--theme-text-sub)', lineHeight: 1.6, margin: 0 }}>{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modules Integration Tag List */}
      <section style={{ padding: '80px 20px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <span style={{ textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 800, color: '#7c3aed', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>Ecosystem</span>
        <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--theme-text-main)', marginBottom: '24px' }}>AI Across Every Module</h2>
        <p style={{ color: 'var(--theme-text-sub)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 36px' }}>
          Sangoe AI operates across your entire database, seamlessly correlating records from Sales to Procurement.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {MODULES.map((mod, i) => (
            <span
              key={i}
              style={{
                fontSize: '0.8rem',
                fontWeight: 800,
                color: 'var(--theme-text-main)',
                background: 'var(--theme-card-bg)',
                border: '1px solid var(--theme-card-border)',
                padding: '10px 20px',
                borderRadius: '50px',
                boxShadow: 'var(--theme-shadow-card)'
              }}
            >
              {mod}
            </span>
          ))}
        </div>
      </section>

      {/* Why Sangoe AI - Security & Context */}
      <section style={{ background: 'var(--theme-bg-secondary)', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 800, color: '#7c3aed', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>Trust & Safety</span>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--theme-text-main)' }}>Enterprise-Grade AI Architecture</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {SECURITY_POINTS.map((pt, i) => {
              const Icon = pt.icon;
              return (
                <div key={i} style={{ background: 'var(--theme-card-bg)', border: '1px solid var(--theme-card-border)', borderRadius: '20px', padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '14px', boxShadow: 'var(--theme-shadow-card)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Icon size={16} color="#a855f7" />
                    <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--theme-text-main)', margin: 0 }}>{pt.title}</h3>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--theme-text-sub)', lineHeight: 1.6, margin: 0 }}>{pt.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ padding: '80px 20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--theme-text-main)', marginBottom: '16px' }}>
          Experience AI That Understands Your Business
        </h2>
        <p style={{ color: 'var(--theme-text-sub)', lineHeight: 1.6, maxWidth: '520px', margin: '0 auto 32px' }}>
          Unify your operations, automate compliance deadlines, and get instant business metrics. Schedule a customized AI demo today.
        </p>
        <Link href="/contact" className="btn btn-purple" style={{ padding: '14px 28px' }}>
          Schedule Live Walkthrough
        </Link>
      </section>

    </div>
  );
}
