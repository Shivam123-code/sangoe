'use client';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { Star, Quote, TrendingUp, Users, ShieldCheck, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    stars: 5,
    quote: "Sangoe transformed the way our team manages operations. We reduced compliance penalties by 90% and now have complete visibility into our business — all from one screen.",
    name: 'Rajesh Mehta',
    role: 'Founder & MD',
    company: 'Mehta Construction Pvt. Ltd.',
    initials: 'RM',
    color: '#3B82F6',
    result: '90% fewer compliance penalties',
  },
  {
    stars: 5,
    quote: "Before Sangoe, I was the bottleneck in everything. Now my team runs projects, HR, and finance independently. It's the best investment I've made as a founder.",
    name: 'Priya Sharma',
    role: 'CEO & Co-Founder',
    company: 'SharpEdge Consulting',
    initials: 'PS',
    color: '#10B981',
    result: 'Team runs 100% independently',
  },
  {
    stars: 5,
    quote: "Our investor readiness score went from 34% to 87% in 6 months using Sangoe. Governance, compliance, and reporting are now fully in control.",
    name: 'Arjun Nair',
    role: 'Managing Director',
    company: 'Nair Infrastructure Group',
    initials: 'AN',
    color: '#8B5CF6',
    result: '34% → 87% IPO Score',
  },
  {
    stars: 5,
    quote: "The AI Co-Pilot alone saves me 3 hours a day. I ask it business questions and it gives me instant answers with data — like having a CFO in my pocket.",
    name: 'Kavitha Rao',
    role: 'Director',
    company: 'Rao Pharma Distributors',
    initials: 'KR',
    color: '#F59E0B',
    result: '3 hrs/day saved with AI Co-Pilot',
  },
  {
    stars: 5,
    quote: "Sangoe's HR and payroll cloud eliminated all manual tracking. We scaled from 40 to 180 employees in a year with zero HR chaos. Absolutely game-changing.",
    name: 'Nikhil Bansal',
    role: 'CEO',
    company: 'Bansal Retail Chain',
    initials: 'NB',
    color: '#EF4444',
    result: 'Scaled 40→180 employees seamlessly',
  },
];

const STATS = [
  { icon: TrendingUp,  value: '500+',  label: 'Businesses Transformed', color: '#7C3AED' },
  { icon: Users,       value: '12,000+', label: 'Users on Platform',    color: '#10B981' },
  { icon: ShieldCheck, value: '98.2%', label: 'Compliance Score Avg.',  color: '#3B82F6' },
  { icon: Award,       value: '4.9/5', label: 'Customer Rating',        color: '#F59E0B' },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);
  const autoRef = useRef(null);

  // Auto-advance featured testimonial
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(autoRef.current);
  }, []);

  const handleDotClick = (i) => {
    setActive(i);
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
  };

  const t = TESTIMONIALS[active];

  return (
    <section className={`section ${styles.section}`}>
      {/* ── Header ── */}
      <div className={styles.header}>
        <span className="tag">Real Stories From Real Users</span>
        <h2 className={styles.h2}>
          Discover the <span className="text-highlight">Sangoe Difference</span>
        </h2>
        <p className={styles.sub}>
          Founders and operators across India trust Sangoe to run, control, and scale their businesses.
        </p>
      </div>

      {/* ── Stats Row ── */}
      <div className={styles.statsRow}>
        {STATS.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={i}
              className={styles.statCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <span className={styles.statIcon} style={{ background: s.color + '14', color: s.color }}>
                <Icon size={18} />
              </span>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </motion.div>
          );
        })}
      </div>

      {/* ── Featured Testimonial (Animated) ── */}
      <div className={styles.featuredWrap}>
        {/* Left: Photo side */}
        <div className={styles.featuredPhoto}>
          <Image
            src="/images/testimonial_founders.png"
            alt="Sangoe customers - Indian business founders"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            className={styles.founderImg}
          />
          {/* Overlay gradient */}
          <div className={styles.photoOverlay} />
          {/* Result badge on photo */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className={styles.resultBadge}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              style={{ borderColor: t.color + '40', background: t.color + '18' }}
            >
              <span className={styles.resultDot} style={{ background: t.color }} />
              <span style={{ color: t.color, fontWeight: 700, fontSize: '0.8rem' }}>{t.result}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Quote side */}
        <div className={styles.featuredContent}>
          <Quote size={40} className={styles.quoteIcon} />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <div className={styles.stars}>
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={16} fill="#FBBF24" color="#FBBF24" />
                ))}
              </div>
              <p className={styles.featuredQuote}>"{t.quote}"</p>
              <div className={styles.featuredPerson}>
                <div className={styles.featuredAvatar} style={{ background: t.color + '20', color: t.color }}>
                  {t.initials}
                </div>
                <div>
                  <div className={styles.featuredName}>{t.name}</div>
                  <div className={styles.featuredRole}>{t.role} · {t.company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dot nav */}
          <div className={styles.dots}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                onClick={() => handleDotClick(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Scrolling Cards Strip ── */}
      <div className={styles.carouselWrap} aria-hidden="true">
        <div className={styles.carouselInner} ref={trackRef}>
          {[...TESTIMONIALS, ...TESTIMONIALS].map((card, i) => (
            <div key={i} className={styles.miniCard}>
              <div className={styles.miniStars}>
                {[...Array(card.stars)].map((_, si) => (
                  <Star key={si} size={11} fill="#FBBF24" color="#FBBF24" />
                ))}
              </div>
              <p className={styles.miniQuote}>"{card.quote.slice(0, 90)}..."</p>
              <div className={styles.miniPerson}>
                <div className={styles.miniAvatar} style={{ background: card.color + '20', color: card.color }}>{card.initials}</div>
                <div>
                  <div className={styles.miniName}>{card.name}</div>
                  <div className={styles.miniRole}>{card.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
