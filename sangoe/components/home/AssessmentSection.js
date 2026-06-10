'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useReveal, fadeUp, stagger } from '../ui/motion';
import styles from './AssessmentSection.module.css';

const FAQS = [
  { q: 'What integrations does Sangoe support?', a: 'Sangoe connects with Tally, GST portal, payroll providers, WhatsApp, Google Workspace, and 30+ more platforms out of the box.' },
  { q: 'Is Sangoe suitable for small businesses?', a: 'Yes! Sangoe is built specifically for Indian MSMEs, startups, and growing enterprises from 5 to 5000 employees.' },
  { q: 'How does Sangoe help with customer support?', a: 'Sangoe includes a full Customer Success Cloud with ticketing, feedback management, loyalty tracking and satisfaction measurement.' },
  { q: 'Can my team collaborate within Sangoe?', a: 'Absolutely. Multi-user collaboration, role-based access, approval workflows, and team scorecards are all built in.' },
  { q: 'Does Sangoe offer reporting and analytics?', a: 'Yes! Sangoe provides advanced dashboards, customisable reports and analytics to help you track KPIs and make data-driven decisions.' },
];

export default function AssessmentSection() {
  const { ref, inView } = useReveal(0.1);
  const [open, setOpen] = useState(4);

  return (
    <section className={`section ${styles.section}`} ref={ref} id="assessments">
      <div className="wrap">
        <div className={styles.grid}>

          {/* LEFT */}
          <motion.div
            className={styles.left}
            variants={stagger(0.1)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <motion.span variants={fadeUp} className="tag">Frequently Asked Questions</motion.span>

            <motion.h2 variants={fadeUp} className={styles.h2}>
              Got Questions? We<br />
              Have Got <span className="purple-text">Answers</span>
            </motion.h2>

            <motion.div variants={fadeUp} style={{ marginTop: '16px' }}>
              <Link
                href="/contact"
                className={`btn btn-purple ${styles.cta}`}
                id="still-have-questions"
                style={{ alignSelf: 'flex-start' }}
              >
                Still Have Questions? <ArrowRight size={14} style={{ marginLeft: '6px' }} />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT — Accordion */}
          <motion.div
            className={styles.right}
            variants={stagger(0.08)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ delay: 0.15 }}
          >
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`${styles.faq} ${open === i ? styles.faqOpen : ''}`}
              >
                <button
                  className={styles.faqQ}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className={styles.faqText}>{faq.q}</span>
                  <motion.span
                    className={styles.faqIcon}
                    animate={{ 
                      backgroundColor: open === i ? '#7C3AED' : '#F5F3FF', 
                      rotate: open === i ? 180 : 0 
                    }}
                    transition={{ duration: 0.25 }}
                    style={{ color: open === i ? '#ffffff' : '#7C3AED' }}
                  >
                    <ChevronDown size={14} />
                  </motion.span>
                </button>
                <motion.div
                  className={styles.faqA}
                  initial={false}
                  animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className={styles.faqAText}>{faq.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
