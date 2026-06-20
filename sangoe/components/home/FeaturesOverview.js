'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import { SERVICES_DATA, CATEGORIES } from '../../app/services/servicesData';
import styles from './FeaturesOverview.module.css';

// Dynamic Icon Component
const LucideIcon = ({ name, ...props }) => {
  const IconComponent = Icons[name] || Icons.HelpCircle;
  return <IconComponent {...props} />;
};

// Short Category Labels for Card Subtitles
const getShortCategoryLabel = (catId) => {
  const mapping = {
    'core': 'Core Module',
    'sales': 'Sales Cloud',
    'accounting': 'Accounting ERP',
    'purchase': 'Purchase Cloud',
    'recruitment': 'Recruitment HR',
    'utilities': 'Utility Tool',
    'hr-records': 'HR Registry',
    'hr-payroll': 'Payroll Cloud',
    'additional': 'Core Extension',
    'commission': 'Commission Suite',
    'timesheets': 'Time & Leave',
    'reports': 'Analytics System',
    'support': 'Support Desk',
    'documents': 'Document Cloud',
    'approvify': 'Approval Engine',
    'loyalty': 'Loyalty System',
    'marketing': 'Marketing Cloud',
    'fleet': 'Fleet Manager',
    'okr': 'OKR Core'
  };
  return mapping[catId] || 'SaaS Module';
};

// Category-Specific Light-Themed CSS Mockups
const renderMiniMockup = (service) => {
  const color = service.color || '#7c3aed';
  
  // Decide mockup type based on category or specific slug
  let type = 'bento';
  if (service.slug.includes('dashboard') || service.category === 'reports' || service.category === 'okr') {
    type = 'analytics';
  } else if (service.category === 'sales' || service.slug === 'core-leads') {
    type = 'pipeline';
  } else if (service.slug === 'core-mailbox' || service.category === 'support') {
    type = 'inbox';
  } else if (service.category === 'accounting' || service.category === 'purchase' || service.slug === 'core-contracts' || service.slug === 'core-customers' || service.category === 'approvify') {
    type = 'document';
  } else if (service.slug === 'core-projects' || service.slug === 'core-tasks' || service.category === 'timesheets') {
    type = 'tasks';
  }

  // 1. ANALYTICS MOCKUP
  if (type === 'analytics') {
    return (
      <div className={styles.miniDashboard}>
        <div className={styles.mockHeader}>
          <div className={styles.mockDot} style={{ background: color }} />
          <span className={styles.mockHeaderText}>Analytics Summary</span>
          <span className={styles.mockHeaderTag}>Live</span>
        </div>
        <div className={styles.mockStatsRow}>
          <div className={styles.mockStatCard}>
            <span className={styles.mockStatVal} style={{ color }}>+28%</span>
            <span className={styles.mockStatLbl}>Growth</span>
          </div>
          <div className={styles.mockStatCard}>
            <span className={styles.mockStatVal} style={{ color }}>₹84L</span>
            <span className={styles.mockStatLbl}>Pipeline</span>
          </div>
        </div>
        <div className={styles.mockChartArea}>
          <svg viewBox="0 0 100 35" className={styles.svgChart}>
            <defs>
              <linearGradient id={`grad-${service.slug}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity="0.25"/>
                <stop offset="100%" stopColor={color} stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path 
              d="M0 30 C 15 28, 25 10, 40 18 C 55 26, 70 5, 85 12 C 92 15, 100 8, 100 8 L 100 35 L 0 35 Z" 
              fill={`url(#grad-${service.slug})`} 
            />
            <path 
              d="M0 30 C 15 28, 25 10, 40 18 C 55 26, 70 5, 85 12 C 92 15, 100 8, 100 8" 
              fill="none" 
              stroke={color} 
              strokeWidth="1.5" 
            />
            <circle cx="85" cy="12" r="2.5" fill={color} />
            <circle cx="85" cy="12" r="4.5" fill="none" stroke={color} strokeWidth="1" opacity="0.6" className={styles.pulseDot} />
          </svg>
        </div>
      </div>
    );
  }

  // 2. PIPELINE / FUNNEL MOCKUP
  if (type === 'pipeline') {
    return (
      <div className={styles.miniDashboard}>
        <div className={styles.mockHeader}>
          <div className={styles.mockDot} style={{ background: color }} />
          <span className={styles.mockHeaderText}>Sales Pipeline</span>
        </div>
        <div className={styles.pipelineGrid}>
          <div className={styles.pipelineCol}>
            <div className={styles.pipelineColHeader} style={{ borderBottomColor: color }}>
              <span className={styles.pipeColTitle} style={{ color }}>Leads</span>
            </div>
            <div className={styles.pipelineCard}>
              <span className={styles.pipeCardName}>Vardhman</span>
              <span className={styles.pipeCardVal}>₹15L</span>
            </div>
            <div className={styles.pipelineCard}>
              <span className={styles.pipeCardName}>Acme Tech</span>
              <span className={styles.pipeCardVal}>₹6.4L</span>
            </div>
          </div>
          <div className={styles.pipelineCol}>
            <div className={styles.pipelineColHeader} style={{ borderBottomColor: color }}>
              <span className={styles.pipeColTitle} style={{ color }}>Demo</span>
            </div>
            <div className={styles.pipelineCard}>
              <span className={styles.pipeCardName}>Apex Eng</span>
              <span className={styles.pipeCardVal}>₹24L</span>
            </div>
          </div>
          <div className={styles.pipelineCol}>
            <div className={styles.pipelineColHeader} style={{ borderBottomColor: '#10B981' }}>
              <span className={styles.pipeColTitle} style={{ color: '#10B981' }}>Won</span>
            </div>
            <div className={styles.pipelineCard} style={{ borderLeftColor: '#10B981' }}>
              <span className={styles.pipeCardName}>Hindustan</span>
              <span className={styles.mockBadge} style={{ background: '#10B98115', color: '#10B981' }}>₹8L</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. INBOX / MAIL / CHAT MOCKUP
  if (type === 'inbox') {
    return (
      <div className={styles.miniDashboard}>
        <div className={styles.mockHeader}>
          <div className={styles.mockDot} style={{ background: color }} />
          <span className={styles.mockHeaderText}>Mail Inbox</span>
          <span className={styles.mockHeaderBadge}>3 New</span>
        </div>
        <div className={styles.inboxLayout}>
          <div className={styles.inboxList}>
            <div className={`${styles.inboxItem} ${styles.inboxItemActive}`} style={{ borderLeftColor: color }}>
              <div className={styles.avatarCircle} style={{ background: color + '20' }} />
              <div className={styles.inboxText}>
                <span className={styles.inboxSender}>Rajesh M.</span>
                <span className={styles.inboxSubj}>SLA Draft</span>
              </div>
            </div>
            <div className={styles.inboxItem}>
              <div className={styles.avatarCircle} />
              <div className={styles.inboxText}>
                <span className={styles.inboxSender}>Karan P.</span>
                <span className={styles.inboxSubj}>BG Check</span>
              </div>
            </div>
            <div className={styles.inboxItem}>
              <div className={styles.avatarCircle} />
              <div className={styles.inboxText}>
                <span className={styles.inboxSender}>FounderOS</span>
                <span className={styles.inboxSubj}>KPI Score</span>
              </div>
            </div>
          </div>
          <div className={styles.inboxDetail}>
            <div className={styles.detailHeader}>
              <div className={styles.avatarCircle} style={{ width: '10px', height: '10px', background: color }} />
              <span className={styles.detailSenderName}>Rajesh Mehta</span>
            </div>
            <div className={styles.detailBodyText}>
              Hi team, please review the latest SLA draft for the builders deal...
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. DOCUMENT / INVOICE / TABLE MOCKUP
  if (type === 'document') {
    return (
      <div className={styles.miniDashboard}>
        <div className={styles.mockHeader}>
          <div className={styles.mockDot} style={{ background: color }} />
          <span className={styles.mockHeaderText}>Billing Documents</span>
        </div>
        <div className={styles.docSheet}>
          <div className={styles.docTitleRow}>
            <span className={styles.docHeaderTitle}>Invoice sheet</span>
            <div className={styles.mockBadge} style={{ background: color + '15', color }}>INV-942</div>
          </div>
          <div className={styles.docTable}>
            <div className={styles.docTableHeader}>
              <span>Description</span>
              <span style={{ marginLeft: 'auto' }}>Amount</span>
            </div>
            <div className={styles.docTableRow}>
              <span>CRM Subscription</span>
              <span style={{ marginLeft: 'auto' }}>₹64k</span>
            </div>
            <div className={styles.docTableRow}>
              <span>SLA Project Setup</span>
              <span style={{ marginLeft: 'auto' }}>₹4.2L</span>
            </div>
          </div>
          <div className={styles.docFooter}>
            <span className={styles.docStatusLabel}>Cleared</span>
            <div className={styles.signatureLine} style={{ borderTopColor: color }}>
              <span className={styles.miniSignature} style={{ color }}>{service.name}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 5. TASKS / GANTT MOCKUP
  if (type === 'tasks') {
    return (
      <div className={styles.miniDashboard}>
        <div className={styles.mockHeader}>
          <div className={styles.mockDot} style={{ background: color }} />
          <span className={styles.mockHeaderText}>Active Operations</span>
        </div>
        <div className={styles.tasksLayout}>
          <div className={styles.taskItem}>
            <div className={styles.taskCheckbox} style={{ borderColor: color }}>
              <div className={styles.taskCheckInner} style={{ background: color }} />
            </div>
            <span className={styles.taskItemText} style={{ textDecoration: 'line-through', opacity: 0.6 }}>Setup Pipeline</span>
            <div className={styles.mockBadge} style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', marginLeft: 'auto' }}>Done</div>
          </div>
          <div className={styles.taskItem}>
            <div className={styles.taskCheckbox} style={{ borderColor: color }} />
            <span className={styles.taskItemText}>Audit Ledger records</span>
            <div className={styles.mockBadge} style={{ background: color + '15', color, marginLeft: 'auto' }}>Active</div>
          </div>
          <div className={styles.taskItem}>
            <div className={styles.taskCheckbox} style={{ borderColor: color }} />
            <span className={styles.taskItemText}>Check Payroll SLA</span>
          </div>
          <div className={styles.progressRow}>
            <span className={styles.progressLabel}>Tasks</span>
            <div className={styles.progressBarBg}>
              <div className={styles.progressBarFill} style={{ width: '65%', background: color }} />
            </div>
            <span className={styles.progressText}>65%</span>
          </div>
        </div>
      </div>
    );
  }

  // 6. DEFAULT BENTO / STATS MOCKUP
  return (
    <div className={styles.miniDashboard}>
      <div className={styles.mockHeader}>
        <div className={styles.mockDot} style={{ background: color }} />
        <span className={styles.mockHeaderText}>Module Console</span>
      </div>
      <div className={styles.bentoGrid}>
        <div className={styles.bentoCard1}>
          <div className={styles.avatarCircle} style={{ background: color, width: '14px', height: '14px', opacity: 0.8 }} />
          <span className={styles.bentoCardLabel} style={{ marginTop: '4px' }}>Active sync</span>
          <span className={styles.bentoCardValue}>Live</span>
        </div>
        <div className={styles.bentoCard2}>
          <span className={styles.bentoCardLabel}>Fulfillment</span>
          <div className={styles.bentoStat} style={{ color }}>98.2%</div>
        </div>
        <div className={styles.bentoCard3} style={{ borderLeftColor: color }}>
          <span className={styles.bentoCardLabel}>Autolog reporting</span>
          <div className={styles.bentoToggle}>
            <div className={styles.bentoToggleTrack} style={{ background: color }}>
              <div className={styles.bentoToggleThumb} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FeaturesOverview() {
  const [activeCategory, setActiveCategory] = useState('core');
  const [searchQuery, setSearchQuery] = useState('');
  
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-60px' });

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
  }, [activeCategory, searchQuery]);

  const handleScroll = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      tabsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Convert services data into a list
  const servicesList = Object.values(SERVICES_DATA);

  // Filter services by category and search query
  const filteredServices = servicesList.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className={styles.section} ref={sectionRef} id="features-overview">
      <div className="wrap">
        
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <motion.span 
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className={styles.tag}
          >
            Capabilities Directory
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={styles.h2}
          >
            Explore CRM &amp; ERP Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.sub}
          >
            Click on any module below to explore detailed dashboards, features checklists, and operational workflows.
          </motion.p>
        </div>

        {/* Directory Controls */}
        <div className={styles.directory}>
          <div className={styles.controlsBar}>
            
            {/* Horizontal Scrollable Categories with Arrows */}
            <div className={styles.tabsWrapper}>
              <button 
                type="button"
                className={`${styles.scrollBtn} ${styles.scrollBtnLeft} ${!showLeftArrow ? styles.scrollBtnHidden : ''}`} 
                onClick={() => handleScroll('left')}
                aria-label="Scroll left"
              >
                <LucideIcon name="ChevronLeft" size={16} />
              </button>

              <div className={styles.categoriesTabs} ref={tabsRef}>
                <button
                  className={`${styles.tabBtn} ${activeCategory === 'all' ? styles.tabBtnActive : ''}`}
                  onClick={() => setActiveCategory('all')}
                >
                  All Features
                </button>
                {CATEGORIES.map(cat => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ''}`}
                      onClick={() => setActiveCategory(cat.id)}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>

              <button 
                type="button"
                className={`${styles.scrollBtn} ${styles.scrollBtnRight} ${!showRightArrow ? styles.scrollBtnHidden : ''}`} 
                onClick={() => handleScroll('right')}
                aria-label="Scroll right"
              >
                <LucideIcon name="ChevronRight" size={16} />
              </button>
            </div>

            {/* Search Bar */}
            <div className={styles.searchBar}>
              <LucideIcon name="Search" size={14} color="#94a3b8" />
              <input 
                type="text" 
                placeholder="Search CRM features..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className={styles.clearBtn}>
                  <LucideIcon name="X" size={12} />
                </button>
              )}
            </div>
          </div>

          {/* Grid Layout */}
          <div className={styles.gridContainer}>
            <AnimatePresence mode="popLayout">
              <motion.div 
                className={styles.grid}
                layout
              >
                {filteredServices.length > 0 ? (
                  filteredServices.map((service) => (
                    <Link 
                      href={`/services/${service.slug}`} 
                      key={service.slug}
                      className={styles.cardLink}
                    >
                      <motion.div
                        className={styles.serviceCard}
                        layout
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                        style={{ '--card-color': service.color }}
                        whileHover={{ y: -6 }}
                      >
                        {/* Mockup Background (revealed on hover) */}
                        <div className={styles.mockupContainer}>
                          {renderMiniMockup(service)}
                        </div>

                        {/* Top: Icon Badge styled like testimonial avatar */}
                        <div className={styles.cardTop}>
                          <span 
                            className={styles.iconWrap} 
                            style={{ 
                              background: service.color + '12', 
                              color: service.color 
                            }}
                          >
                            <LucideIcon name={service.icon} size={20} className={styles.icon} />
                          </span>
                        </div>

                        {/* Middle: Elegant Italic Quote Description */}
                        <div className={styles.cardBody}>
                          <p className={styles.quoteDesc}>
                            “{service.desc}”
                          </p>
                        </div>

                        {/* Bottom: Signature script name & category subtitle */}
                        <div className={styles.cardBottom}>
                          <span className={styles.signatureName}>{service.name}</span>
                          <span className={styles.categoryRole}>{getShortCategoryLabel(service.category)}</span>
                        </div>

                        {/* Hover detail action badge */}
                        <div className={styles.actionBadge}>
                          <LucideIcon name="ArrowUpRight" size={16} style={{ color: service.color }} />
                        </div>
                      </motion.div>
                    </Link>
                  ))
                ) : (
                  <div className={styles.noResults}>
                    <LucideIcon name="Inbox" size={28} color="#94a3b8" />
                    <p>No features found matching your search.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
