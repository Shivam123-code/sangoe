'use client';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Monitor, 
  Compass, 
  Cpu, 
  Shield, 
  Rocket,
  Check
} from 'lucide-react';
import { useReveal, fadeUp, stagger } from '../ui/motion';
import styles from './TrustStrip.module.css';

const ITEMS = [
  { icon: Cloud, text: '9 Business Clouds' },
  { icon: Monitor, text: 'One Unified Platform' },
  { icon: Compass, text: 'Founder Dashboard' },
  { icon: Cpu, text: 'AI Co-Pilot Ready' },
  { icon: Shield, text: 'Compliance Driven' },
  { icon: Rocket, text: 'Startup to IPO Framework' },
];

export default function TrustStrip() {
  const { ref, inView } = useReveal(0.3);

  return (
    <section className={styles.strip} ref={ref}>
      <motion.div
        className={`wrap ${styles.inner}`}
        variants={stagger()}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
      >
        {ITEMS.map((item, i) => {
          const IconComponent = item.icon;
          return (
            <motion.div key={i} variants={fadeUp} className={styles.item}>
              <span className={styles.check}>
                <Check size={11} strokeWidth={3} />
              </span>
              <IconComponent className={styles.icon} size={16} />
              <span className={styles.text}>{item.text}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
