'use client';
import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    stars: 5,
    quote: "Sangoe transformed the way our team manages operations. We reduced compliance penalties by 90% and now have complete visibility into our business — all from one screen.",
    name: 'Rajesh Mehta',
    role: 'Founder, Mehta Construction Pvt. Ltd.',
    initials: 'RM',
  },
  {
    stars: 5,
    quote: "Before Sangoe, I was the bottleneck in everything. Now my team runs projects, HR, and finance independently. It's the best investment I've made as a founder.",
    name: 'Priya Sharma',
    role: 'CEO, SharpEdge Consulting',
    initials: 'PS',
  },
  {
    stars: 5,
    quote: "Our investor readiness assessment score went from 34% to 87% in 6 months using Sangoe. Governance, compliance, and reporting are now fully in control.",
    name: 'Arjun Nair',
    role: 'MD, Nair Infrastructure Group',
    initials: 'AN',
  },
];

export default function Testimonials() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll(`.${styles.card}`).forEach((el, i) => {
            setTimeout(() => el.classList.add(styles.visible), i * 150);
          });
        }
      }),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`section ${styles.section}`} ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">Real Stories From Real Users</span>
          <h2 className={styles.heading}>
            Discover{' '}
            <span className="text-highlight">Sangoe Differences</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={styles.card}>
              <div style={{ display: 'flex', gap: '4px' }}>
                {[...Array(t.stars)].map((_, idx) => (
                  <Star key={idx} size={14} fill="#FBBF24" color="#FBBF24" />
                ))}
              </div>
              <p className={styles.quote}>"{t.quote}"</p>
              <div className={styles.person}>
                <div className={styles.avatar}>{t.initials}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
