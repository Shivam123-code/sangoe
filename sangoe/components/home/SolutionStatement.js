'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight,
  ArrowUpRight,
  Check,
  TrendingDown,
  Rocket,
  Globe,
  Compass,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { INDUSTRIES } from './IndustryModules';
import styles from './SolutionStatement.module.css';

const SUB_PILLS = [
  { text: 'Profitability', icon: ArrowUpRight, color: '#10B981' },
  { text: 'Compliance', icon: Check, color: '#7C3AED' },
  { text: 'Risk Control', icon: TrendingDown, color: '#EF4444' },
  { text: 'IPO Ready', icon: Rocket, color: '#3B82F6' },
  { text: 'SaaS Ecosystem', icon: Globe, color: '#06B6D4' },
  { text: 'Founder Dashboard', icon: Compass, color: '#F55F0B' },
];

export default function SolutionStatement() {
  const [activeIndustryId, setActiveIndustryId] = useState('construction');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const tabsRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollWidth > clientWidth && scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const tabsContainer = tabsRef.current;
    if (tabsContainer) {
      checkScroll();
      tabsContainer.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      
      const timer = setTimeout(checkScroll, 100);

      return () => {
        tabsContainer.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
        clearTimeout(timer);
      };
    }
  }, [activeIndustryId]);

  const handleScroll = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      tabsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const activeIndustry = INDUSTRIES.find(ind => ind.id === activeIndustryId) || INDUSTRIES[0];

  // The 8 modules for the active industry
  const modules = activeIndustry.modules;

  // Let's create the 3x3 layout items. Position index 4 is the center badge
  const gridItems = [
    modules[0], // Top Left
    modules[1], // Top Center
    modules[2], // Top Right
    modules[3], // Center Left
    { isBadge: true }, // CENTER BADGE (index 4)
    modules[4], // Center Right
    modules[5], // Bottom Left
    modules[6], // Bottom Center
    modules[7], // Bottom Right
  ];

  return (
    <section className={`section ${styles.section}`} ref={ref} id="platform">
      <div className={styles.bgGlow} />
      
      <div className="wrap">
        {/* Top Header & Industry Selector Tabs */}
        <div className={styles.topHeader}>
          <motion.div
            className={styles.headerBlock}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.tag}>ONE PLATFORM. TOTAL CONTROL.</span>
            <h2 className={styles.h2}>
              One Platform to <span className={styles.highlightText}>Run, Control</span> &amp; Scale Your Business
            </h2>
            <p className={styles.sub}>
              Sangoe brings all core operations into one unified Business Growth Operating System. Replaces scattered files, spreadsheets, and disconnected SaaS subscriptions.
            </p>
          </motion.div>

          {/* Industry tabs scrollable bar */}
          <motion.div
            className={styles.tabsWrapper}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <button 
              type="button"
              className={`${styles.scrollBtn} ${styles.scrollBtnLeft} ${!showLeftArrow ? styles.scrollBtnHidden : ''}`} 
              onClick={() => handleScroll('left')}
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} />
            </button>

            <div className={styles.tabsWrap} ref={tabsRef}>
              <div className={styles.tabs}>
                {INDUSTRIES.map(ind => {
                  const Icon = ind.icon;
                  const isActive = ind.id === activeIndustryId;
                  return (
                    <button
                      key={ind.id}
                      className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
                      onClick={() => setActiveIndustryId(ind.id)}
                      style={isActive ? { '--tab-color': ind.color, borderColor: ind.color, background: ind.bg } : {}}
                    >
                      <Icon size={13} style={isActive ? { color: ind.color } : {}} />
                      <span>{ind.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <button 
              type="button"
              className={`${styles.scrollBtn} ${styles.scrollBtnRight} ${!showRightArrow ? styles.scrollBtnHidden : ''}`} 
              onClick={() => handleScroll('right')}
              aria-label="Scroll right"
            >
              <ChevronRight size={16} />
            </button>
          </motion.div>
        </div>

        {/* 2-Column Grid Layout */}
        <div className={styles.grid}>
          
          {/* LEFT — Dynamic Circular 3x3 Grid */}
          <div className={styles.gridWrapContainer}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustryId}
                className={styles.gridWrap}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                {gridItems.map((item, i) => {
                  if (item.isBadge) {
                    const IndustryIcon = activeIndustry.icon;
                    const shortLabel = activeIndustry.label.split('(')[0].trim().split(' ')[0];
                    return (
                      <motion.div
                        key="badge"
                        className={styles.centerBadge}
                        style={{ 
                          background: `linear-gradient(135deg, ${activeIndustry.color}e0 0%, ${activeIndustry.color}c0 100%)`,
                          borderColor: activeIndustry.color,
                          boxShadow: `0 10px 30px ${activeIndustry.color}35`
                        }}
                        animate={{ boxShadow: [`0 0 0 0 ${activeIndustry.color}40`, `0 0 0 16px ${activeIndustry.color}00`] }}
                        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeOut' }}
                      >
                        <span className={styles.badgeIcon}>
                          <IndustryIcon size={24} />
                        </span>
                        <span className={styles.badgeLabel} style={{ fontSize: '0.68rem', fontWeight: '850', marginTop: '4px', textTransform: 'uppercase', color: '#ffffff', textAlign: 'center', whiteSpace: 'nowrap', lineHeight: '1.1' }}>
                          {shortLabel}
                        </span>
                        <span className={styles.badgeLabel} style={{ fontSize: '0.55rem', fontWeight: '700', opacity: 0.8, color: '#ffffff', marginTop: '1px' }}>
                          OS
                        </span>
                      </motion.div>
                    );
                  }

                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={i}
                      className={`card ${styles.cloudTile}`}
                      whileHover={{ scale: 1.04, y: -4, borderColor: activeIndustry.color, boxShadow: `0 12px 30px ${activeIndustry.color}15` }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <span className={styles.cloudIcon} style={{ color: activeIndustry.color, background: activeIndustry.bg }}>
                        <IconComponent size={18} />
                      </span>
                      <span className={styles.cloudName}>{item.name}</span>
                      <span className={styles.cloudDesc}>{item.desc}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT — Text Content & Selected Industry Overview */}
          <motion.div
            className={styles.right}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            variants={{
              hidden: { opacity: 0, x: 30 },
              show: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Selected Industry Card */}
            <div className={styles.industryDetailsCard} style={{ borderColor: `${activeIndustry.color}30`, background: `${activeIndustry.color}06` }}>
              <div className={styles.industryDetailsHeader}>
                {(() => { const Icon = activeIndustry.icon; return <Icon size={20} style={{ color: activeIndustry.color }} />; })()}
                <span className={styles.industryDetailsName} style={{ color: activeIndustry.color }}>
                  {activeIndustry.label} Cloud
                </span>
              </div>
              <p className={styles.industryDetailsSub}>
                Pre-configured with workflow automations, compliance frameworks, and key performance dials specific to the {activeIndustry.label} sector.
              </p>
            </div>

            {/* Sub-Pills */}
            <div className={styles.pills}>
              {SUB_PILLS.map((p, i) => {
                const IconComponent = p.icon;
                return (
                  <span 
                    key={i} 
                    className={styles.pill}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <IconComponent size={12} style={{ color: p.color }} />
                    {p.text}
                  </span>
                );
              })}
            </div>

            <div style={{ marginTop: '32px' }}>
              <Link href="/products" className={`btn btn-purple ${styles.cta}`} id="explore-platform">
                Explore All Products <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
