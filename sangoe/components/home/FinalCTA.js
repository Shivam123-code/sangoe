'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Play, 
  FileText, 
  ArrowRight, 
  Rocket 
} from 'lucide-react';
import { useReveal, fadeUp, stagger } from '../ui/motion';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  const { ref, inView } = useReveal(0.2);

  return (
    <section className={styles.section} ref={ref} id="demo">
      <div className="wrap">
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Tag */}
          <span className={`tag tag-dark ${styles.tag}`}>Manage Customers Effortlessly</span>

          {/* Headline */}
          <h2 className={styles.h2}>
            Turn Leads To Loyal Customers<br />
            With <span className={styles.white}>Sangoe</span> All In One System
          </h2>

          {/* CTA row */}
          <motion.div
            className={styles.ctaRow}
            variants={stagger(0.1)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ delay: 0.3 }}
          >
            <motion.a variants={fadeUp} href="/contact" className={`btn btn-white ${styles.btn}`} id="final-book-demo">
              <Play size={14} fill="currentColor" /> Book Live Demo
            </motion.a>
            <motion.a variants={fadeUp} href="/assessments" className={`btn btn-outline-white ${styles.btn}`} id="final-assessment">
              <FileText size={14} /> Get Business Health Assessment
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ delay: 0.5 }}
            style={{ marginTop: '20px' }}
          >
            <Link href="/pricing" className={`btn btn-ghost-white`} id="final-trial">
              Start Free Trial <ArrowRight size={14} style={{ marginLeft: '6px' }} />
            </Link>
          </motion.div>

          {/* 3D Illustration (CSS + Lucide) */}
          <div className={styles.illustration}>
            <motion.div
              className={styles.illustMain}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Rocket size={48} style={{ color: '#ffffff' }} />
            </motion.div>
            <div className={styles.illustRing1} />
            <div className={styles.illustRing2} />
            <div className={styles.illustGlow} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
