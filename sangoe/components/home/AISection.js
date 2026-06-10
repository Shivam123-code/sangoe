'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  MessageSquare, 
  Send, 
  Cpu, 
  ArrowRight,
  User,
  Loader2,
  Check
} from 'lucide-react';
import { useReveal, fadeUp, stagger } from '../ui/motion';
import styles from './AISection.module.css';

const CONVERSATIONS = [
  {
    question: "Why is profitability reducing?",
    thinkingText: "Co-Pilot is analyzing Sales, Finance, and Procurement clouds...",
    response: [
      "Monthly revenue is stable at ₹42.8L, but EBITDA margins dropped from 18% to 14.2%.",
      "Overdue Payments: ₹14.5L in outstanding invoices on Project Alpha are 30+ days overdue.",
      "Cost Alert: Raw steel procurement expenses rose 12% due to market price increases.",
      "Recommendation: Send automated payment reminder to client & review supplier contracts."
    ],
    actions: [
      { label: "Send Reminder", type: "primary" },
      { label: "View Finances", type: "secondary" }
    ]
  },
  {
    question: "Which projects are delayed?",
    thinkingText: "Scanning Project & Operations Cloud tracking charts...",
    response: [
      "Mehta Construction Phase 2 is currently 8 days behind schedule.",
      "Bottleneck: Masonry work is stalled due to labor shortage in the civil engineering team.",
      "Risk Score: High. SLA breach penalty risk starts in 5 days (₹25,000/day).",
      "Recommendation: Re-allocate 3 masonry workers from Project Beta to clear delayed items."
    ],
    actions: [
      { label: "Re-assign Team", type: "primary" },
      { label: "View Scheduler", type: "secondary" }
    ]
  },
  {
    question: "What compliance is due next week?",
    thinkingText: "Scanning Compliance Control Tower calendar...",
    response: [
      "Monthly PF & ESIC filing is due on June 15 (4 days left). Status: Draft Ready.",
      "Governance Alert: POSH annual report is missing e-signatures from 2 directors.",
      "Safety Audit: 3 minor compliance anomalies reported at Noida site. Corrected: 2.",
      "Recommendation: E-Sign POSH report & submit PF draft to CA review portal."
    ],
    actions: [
      { label: "E-Sign POSH Report", type: "primary" },
      { label: "Alert Auditor", type: "secondary" }
    ]
  }
];

export default function AISection() {
  const { ref, inView } = useReveal(0.15);
  const [convIdx, setConvIdx] = useState(0);
  const [chatState, setChatState] = useState('typing-question'); // 'typing-question', 'thinking', 'responding', 'done'
  const [typedQuestion, setTypedQuestion] = useState('');
  const [visibleResponseCount, setVisibleResponseCount] = useState(0);
  const [actionPerformed, setActionPerformed] = useState(null);

  const currentConv = CONVERSATIONS[convIdx];

  // Typing simulator effect
  useEffect(() => {
    if (!inView) return;

    if (chatState === 'typing-question') {
      setTypedQuestion('');
      setVisibleResponseCount(0);
      setActionPerformed(null);
      let i = 0;
      const qText = currentConv.question;
      
      const timer = setInterval(() => {
        setTypedQuestion(prev => prev + qText.charAt(i));
        i++;
        if (i >= qText.length) {
          clearInterval(timer);
          setTimeout(() => setChatState('thinking'), 800);
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [chatState, convIdx, inView]);

  // Thinking to Responding transition
  useEffect(() => {
    if (chatState === 'thinking') {
      const timer = setTimeout(() => {
        setChatState('responding');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [chatState]);

  // Revealing AI response bullet points sequentially
  useEffect(() => {
    if (chatState === 'responding') {
      if (visibleResponseCount < currentConv.response.length) {
        const timer = setTimeout(() => {
          setVisibleResponseCount(prev => prev + 1);
        }, 1200);
        return () => clearTimeout(timer);
      } else {
        setChatState('done');
      }
    }
  }, [chatState, visibleResponseCount]);

  // Move to next conversation after wait
  useEffect(() => {
    if (chatState === 'done' && !actionPerformed) {
      const timer = setTimeout(() => {
        setConvIdx(prev => (prev + 1) % CONVERSATIONS.length);
        setChatState('typing-question');
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [chatState, actionPerformed]);

  const handleAction = (label) => {
    setActionPerformed(label);
    setTimeout(() => {
      setConvIdx(prev => (prev + 1) % CONVERSATIONS.length);
      setChatState('typing-question');
    }, 2000);
  };

  return (
    <section className={styles.section} ref={ref} id="ai">
      <div className={styles.bgGlow} />
      <div className="wrap">
        <div className={styles.inner}>

          {/* LEFT — Marketing text */}
          <motion.div
            className={styles.left}
            variants={stagger(0.1)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <motion.span variants={fadeUp} className={`tag ${styles.tag}`}>AI Business Co-Pilot™</motion.span>
            <motion.h2 variants={fadeUp} className={styles.heading}>
              Ask Your Business<br />
              <span style={{ background: 'linear-gradient(135deg,#a78bfa,#f0abfc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Anything</span>
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.sub}>
              Sangoe AI Co-Pilot connects to all nine operational clouds. Ask questions in plain English and get instant audits, delayed task alerts, and actionable recommendations.
            </motion.p>
            <motion.div variants={fadeUp} style={{ marginTop: '16px' }}>
              <Link href="/platform" className={`btn btn-outline-white ${styles.cta}`} id="try-ai-copilot">
                Explore AI Co-Pilot <ArrowRight size={14} style={{ marginLeft: '6px' }} />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT — Animated Chat Interface */}
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className={styles.chatCard}>
              {/* Header */}
              <div className={styles.chatHeader}>
                <div className={styles.chatDots}><span /><span /><span /></div>
                <span className={styles.chatTitle}>
                  <Cpu size={14} style={{ color: '#a78bfa', marginRight: '6px', verticalAlign: 'middle' }} />
                  AI Co-Pilot Simulator
                </span>
                <span className={styles.chatStatus}>● Online</span>
              </div>

              {/* Chat Body */}
              <div className={styles.chatBody}>
                {/* 1. User Question Bubble */}
                <div className={styles.userRow}>
                  <div className={styles.userAvatar}>
                    <User size={12} />
                  </div>
                  <div className={styles.userBubble}>
                    {typedQuestion}
                    {chatState === 'typing-question' && <span className={styles.cursor}>|</span>}
                  </div>
                </div>

                {/* 2. Thinking State */}
                {chatState === 'thinking' && (
                  <div className={styles.aiRow}>
                    <div className={styles.aiAvatar}>
                      <Cpu size={12} />
                    </div>
                    <div className={styles.thinkingBubble}>
                      <Loader2 size={12} className={styles.spinner} />
                      <span>{currentConv.thinkingText}</span>
                    </div>
                  </div>
                )}

                {/* 3. AI Response Bullet Points */}
                {(chatState === 'responding' || chatState === 'done') && (
                  <div className={styles.aiRow}>
                    <div className={styles.aiAvatar}>
                      <Cpu size={12} />
                    </div>
                    <div className={styles.aiResponses}>
                      {currentConv.response.slice(0, visibleResponseCount).map((bullet, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className={styles.responseBullet}
                        >
                          <div className={styles.bulletDot} />
                          <p>{bullet}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Interactive Action Buttons */}
                {chatState === 'done' && (
                  <motion.div 
                    className={styles.actionContainer}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {!actionPerformed ? (
                      currentConv.actions.map((act, i) => (
                        <button
                          key={i}
                          onClick={() => handleAction(act.label)}
                          className={act.type === 'primary' ? styles.actionBtnPrimary : styles.actionBtnSecondary}
                        >
                          {act.label}
                        </button>
                      ))
                    ) : (
                      <div className={styles.actionDone}>
                        <Check size={12} style={{ color: '#10b981', marginRight: '6px' }} />
                        <span>Action Triggered: <strong>{actionPerformed}</strong></span>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>

              {/* Footer Input Area */}
              <div className={styles.chatInput}>
                <span className={styles.inputPlaceholder}>
                  {chatState === 'typing-question' ? 'User is typing...' : 'Ask your business anything...'}
                </span>
                <button className={styles.sendBtn} aria-label="Send">
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
