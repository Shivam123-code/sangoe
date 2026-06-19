'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import styles from './FeatureEcosystem.module.css';

// Dynamic Icon Component
const LucideIcon = ({ name, ...props }) => {
  const IconComponent = Icons[name] || Icons.HelpCircle;
  return <IconComponent {...props} />;
};

const CATEGORIES = [
  { id: 'all', label: 'All Clouds' },
  { id: 'sales', label: 'Sales & CRM' },
  { id: 'hr', label: 'HR & Workforce' },
  { id: 'operations', label: 'Project & Operations' },
  { id: 'finance', label: 'Procurement & Finance' },
  { id: 'assets_compliance', label: 'Assets & Compliance' },
  { id: 'bi', label: 'BI & Analytics' }
];

const APPS = [
  // Sales & CRM
  { category: 'sales', name: 'Lead Finder', desc: 'Find potential clients and verify contact information', icon: 'Search', color: '#3B82F6' },
  { category: 'sales', name: 'CRM & Leads Management', desc: 'Track pipelines, manage customer profiles and interactions', icon: 'Target', color: '#EF4444' },
  { category: 'sales', name: 'Quotations & Estimates', desc: 'Generate professional quotes and estimate project costs', icon: 'FileText', color: '#10B981' },
  { category: 'sales', name: 'Contracts & Subscriptions', desc: 'Manage client agreements, terms, and recurring revenue', icon: 'RefreshCw', color: '#6366F1' },
  { category: 'sales', name: 'Customer Loyalty & Affiliate', desc: 'Track rewards, incentives, and client referral campaigns', icon: 'Award', color: '#F59E0B' },
  { category: 'sales', name: 'Sales Analytics & Forecasting', desc: 'Real-time conversion rates, deal stages, and forecasting dashboards', icon: 'TrendingUp', color: '#EC4899' },

  // HR & Workforce
  { category: 'hr', name: 'HR Records & Life Cycle', desc: 'Centralize employee life cycle, profiles, and contracts', icon: 'Users', color: '#7C3AED' },
  { category: 'hr', name: 'Recruitment Automation', desc: 'Track jobs, candidate pipelines, and automate interviews', icon: 'UserPlus', color: '#3B82F6' },
  { category: 'hr', name: 'Attendance & Leave Manager', desc: 'Biometric integrations, geofenced tracking, and leaves requests', icon: 'Calendar', color: '#10B981' },
  { category: 'hr', name: 'Payroll & Commissions', desc: 'Automatic salary calculations, statutory compliance, and commissions', icon: 'DollarSign', color: '#EF4444' },
  { category: 'hr', name: 'Performance & Training', desc: 'Manage employee appraisals, OKRs, and development courses', icon: 'GraduationCap', color: '#F59E0B' },

  // Project & Operations
  { category: 'operations', name: 'Projects & Tasks Manager', desc: 'Collaborate on tasks using Kanban boards, Gantt charts, and milestones', icon: 'Briefcase', color: '#F55F0B' },
  { category: 'operations', name: 'Workflow Automation & Approvals', desc: 'Build custom multi-level approvals and process automations', icon: 'CheckSquare', color: '#06B6D4' },
  { category: 'operations', name: 'Document Control & SOPs', desc: 'Secure storage for project files, drawings, contracts, and SOP docs', icon: 'FolderOpen', color: '#8B5CF6' },
  { category: 'operations', name: 'Knowledge Base', desc: 'Store company wikis, guides, and operational references', icon: 'BookMarked', color: '#EC4899' },

  // Procurement & Finance
  { category: 'finance', name: 'Core Accounting & Ledger', desc: 'Ledgers, taxes, P&L, balance sheets, and real-time auditing', icon: 'Calculator', color: '#10B981' },
  { category: 'finance', name: 'Expense & Purchase Management', desc: 'Track employee spend, purchase requests, and supplier payments', icon: 'Receipt', color: '#EF4444' },
  { category: 'finance', name: 'Inventory & Stock Control', desc: 'Track raw materials, spare parts, bin levels, and stock movements', icon: 'Package', color: '#a855f7' },
  { category: 'finance', name: 'Budgeting & Cost Control', desc: 'Define project budgets and monitor real-time margins and costs', icon: 'BarChart3', color: '#3B82F6' },

  // Assets & Compliance
  { category: 'assets_compliance', name: 'Fleet Management', desc: 'Track vehicle health, service logs, and fuel usage', icon: 'Truck', color: '#6366F1' },
  { category: 'assets_compliance', name: 'Asset & Maintenance', desc: 'Fixed asset tracking, preventive maintenance, and AMC logs', icon: 'Wrench', color: '#F59E0B' },
  { category: 'assets_compliance', name: 'Compliance Assurance', desc: 'PF, ESIC, PT, safety checklists, and permit tracking', icon: 'Shield', color: '#8B5CF6' },
  { category: 'assets_compliance', name: 'Vendor Compliance', desc: 'Supplier audits, onboarding checklist, and compliance checks', icon: 'ClipboardCheck', color: '#06B6D4' },

  // BI & Analytics
  { category: 'bi', name: 'Founder Cockpit', desc: 'Real-time high-level business health scorecards for founders', icon: 'Activity', color: '#EC4899' },
  { category: 'bi', name: 'Department Dashboards', desc: 'Custom performance and KPI reports for individual teams', icon: 'BarChart3', color: '#3B82F6' },
  { category: 'bi', name: 'KPI & OKR Management', desc: 'Establish and monitor company, team, and individual goals', icon: 'Target', color: '#10B981' }
];

export default function FeatureEcosystem() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-60px' });

  // Filter apps by active category and search query
  const filteredApps = APPS.filter(app => {
    const matchesCategory = activeCategory === 'all' || app.category === activeCategory;
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          app.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className={styles.section} ref={sectionRef} id="features">
      <div className="wrap">
        
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <motion.span 
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className={styles.tag}
          >
            One Need. One App.
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={styles.h2}
          >
            The Sangoe Business Clouds
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.sub}
          >
            Replace scattered systems with highly specialized, integrated tools running on a single database.
          </motion.p>
        </div>

        {/* ── INTERACTIVE APP DIRECTORY ── */}
        <div className={styles.directory}>
          {/* Controls Bar: Categories Tabs & Search Input combined */}
          <div className={styles.controlsBar}>
            {/* Horizontal scrollable category tab buttons */}
            <div className={styles.sidebar}>
              {CATEGORIES.map(cat => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    className={`${styles.sidebarBtn} ${isActive ? styles.sidebarBtnActive : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Compact Search Bar */}
            <div className={styles.searchBar}>
              <LucideIcon name="Search" size={14} color="#94a3b8" />
              <input 
                type="text" 
                placeholder="Search apps..." 
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

          {/* Apps Cards Grid */}
          <div className={styles.appsGridContainer}>
            <AnimatePresence mode="popLayout">
              <motion.div 
                className={styles.appsGrid}
                layout
              >
                {filteredApps.length > 0 ? (
                  filteredApps.map((app) => (
                    <motion.div
                      key={app.name}
                      className={styles.appCard}
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      style={{ '--app-color': app.color }}
                      whileHover={{ y: -6 }}
                    >
                      <span 
                        className={styles.appIconWrap} 
                        style={{ background: app.color + '12', color: app.color }}
                      >
                        <LucideIcon name={app.icon} size={18} className={styles.appIcon} />
                      </span>
                      <div className={styles.appInfo}>
                        <div className={styles.appNameRow}>
                          <span className={styles.appName}>{app.name}</span>
                          <LucideIcon name="ArrowUpRight" size={13} className={styles.cardArrow} style={{ color: app.color }} />
                        </div>
                        <span className={styles.appDesc}>{app.desc}</span>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className={styles.noResults}>
                    <LucideIcon name="Inbox" size={28} color="#94a3b8" />
                    <p>No apps found matching your search.</p>
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
