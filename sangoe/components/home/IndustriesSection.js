'use client';
import { motion } from 'framer-motion';
import { useReveal, fadeUp, scaleIn, stagger } from '../ui/motion';
import styles from './IndustriesSection.module.css';

const INDS = [
  { icon:'🏗️', name:'Construction' },{ icon:'🏛️', name:'Infrastructure' },{ icon:'🏭', name:'Manufacturing' },
  { icon:'🚚', name:'Logistics' },{ icon:'📦', name:'Warehousing' },{ icon:'🎨', name:'Interior Fitout' },
  { icon:'📐', name:'PMC' },{ icon:'🏢', name:'Facility Management' },{ icon:'🤝', name:'Staffing' },
  { icon:'💼', name:'Consulting' },{ icon:'🏥', name:'Healthcare' },{ icon:'🎓', name:'Education' },
  { icon:'🏛️', name:'Govt Contractors' },{ icon:'⛽', name:'Oil & Gas' },{ icon:'🛍️', name:'Retail' },
  { icon:'🔗', name:'Franchise' },{ icon:'🏠', name:'Real Estate' },{ icon:'⚖️', name:'Prof. Services' },
];

export default function IndustriesSection() {
  const { ref, inView } = useReveal(0.05);

  return (
    <section className={`section ${styles.section}`} ref={ref} id="industries">
      <div className="wrap">
        <motion.div
          className={styles.header}
          variants={stagger(.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <motion.span variants={fadeUp} className="tag">Industries We Serve</motion.span>
          <motion.h2 variants={fadeUp} className={styles.h2}>
            Built For Every Industry<br />
            <span className="purple-text">That Matters</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={stagger(.04)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          transition={{ delay:.1 }}
        >
          {INDS.map((ind, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className={styles.tile}
              whileHover={{ scale:1.08, background:'#6d28d9', color:'#fff', y:-4 }}
              transition={{ type:'spring', stiffness:300 }}
            >
              <span className={styles.tileIcon}>{ind.icon}</span>
              <span className={styles.tileName}>{ind.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
