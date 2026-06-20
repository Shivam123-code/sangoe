'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Home,
  LayoutGrid,
  Tag,
  BookOpen,
  MoreHorizontal,
  X,
  TrendingUp,
  Users,
  ShieldCheck,
  Briefcase,
  DollarSign,
  BarChart3,
  Calculator,
  GraduationCap,
  HelpCircle,
  UserCheck,
  Phone,
  Info,
  FileText,
  Rocket
} from 'lucide-react';
import styles from './MobileBottomNav.module.css';

const BOTTOM_TABS = [
  { label: 'Home',     href: '/',        icon: Home },
  { label: 'Platform', href: '/platform', icon: LayoutGrid },
  { label: 'Demo',     href: '/contact',  icon: Rocket,     isCTA: true },
  { label: 'Pricing',  href: '/pricing',  icon: Tag },
  { label: 'More',     href: null,        icon: MoreHorizontal, isMore: true },
];

const MORE_SECTIONS = [
  {
    title: 'Products',
    items: [
      { icon: TrendingUp,   label: 'Sales & Revenue Cloud', href: '/products', color: '#3B82F6' },
      { icon: Users,        label: 'HR & Workforce Cloud',  href: '/products', color: '#10B981' },
      { icon: Briefcase,    label: 'Projects & Operations', href: '/products', color: '#F55F0B' },
      { icon: DollarSign,   label: 'Finance & Procurement', href: '/products', color: '#EF4444' },
      { icon: ShieldCheck,  label: 'Compliance & Governance',href: '/products', color: '#8B5CF6' },
      { icon: BarChart3,    label: 'Business Intelligence', href: '/products', color: '#EC4899' },
    ]
  },
  {
    title: 'Solutions',
    items: [
      { icon: ShieldCheck, label: 'MSME Transformation',    href: '/solutions', color: '#3B82F6' },
      { icon: Rocket,      label: 'Startup to IPO Journey', href: '/solutions', color: '#7C3AED' },
      { icon: BarChart3,   label: 'Compliance Control Tower',href: '/solutions', color: '#10B981' },
    ]
  },
  {
    title: 'Resources & Company',
    items: [
      { icon: FileText,     label: 'Templates & SOPs',     href: '/resources',   color: '#6366F1' },
      { icon: Calculator,   label: 'Free Calculators',     href: '/calculators', color: '#F59E0B' },
      { icon: HelpCircle,   label: 'Free Assessments',     href: '/assessments', color: '#10B981' },
      { icon: GraduationCap,label: 'Sangoe Academy™',      href: '/academy',     color: '#EC4899' },
      { icon: UserCheck,    label: 'Partner Program',      href: '/partners',    color: '#8B5CF6' },
      { icon: Info,         label: 'About Sangoe',         href: '/about',       color: '#6B7280' },
      { icon: Phone,        label: 'Contact Us',           href: '/contact',     color: '#7C3AED' },
    ]
  }
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);

  const isActive = (href) => {
    if (!href) return false;
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ── Bottom Tab Bar ── */}
      <nav className={styles.bottomNav} role="navigation" aria-label="Mobile navigation">
        {BOTTOM_TABS.map((tab) => {
          const Icon = tab.icon;
          const active = tab.isMore ? moreOpen : isActive(tab.href);

          if (tab.isCTA) {
            return (
              <Link
                key={tab.label}
                href={tab.href}
                className={styles.ctaTab}
                id="mobile-book-demo"
              >
                <span className={styles.ctaRing} />
                <span className={styles.ctaBubble}>
                  <Icon size={22} strokeWidth={2.5} />
                </span>
                <span className={styles.ctaLabel}>Demo</span>
              </Link>
            );
          }

          if (tab.isMore) {
            return (
              <button
                key={tab.label}
                className={`${styles.tab} ${active ? styles.tabActive : ''}`}
                onClick={() => setMoreOpen(!moreOpen)}
                aria-label="More navigation"
              >
                <span className={styles.tabIconWrap}>
                  {moreOpen ? <X size={20} /> : <Icon size={20} />}
                </span>
                <span className={styles.tabLabel}>More</span>
              </button>
            );
          }

          return (
            <Link
              key={tab.label}
              href={tab.href}
              className={`${styles.tab} ${active ? styles.tabActive : ''}`}
            >
              <span className={styles.tabIconWrap}>
                <Icon size={20} />
                {active && <motion.span className={styles.activePill} layoutId="activePill" />}
              </span>
              <span className={styles.tabLabel}>{tab.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* ── More Drawer (slides up from bottom) ── */}
      <AnimatePresence>
        {moreOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMoreOpen(false)}
            />

            {/* Sheet */}
            <motion.div
              className={styles.sheet}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            >
              {/* Handle */}
              <div className={styles.handle} />

              {/* Sheet Header */}
              <div className={styles.sheetHeader}>
                <div className={styles.sheetLogo}>
                  <img src="/logos/1.png" alt="Sangoe Logo" className={styles.logoImage} />
                </div>
                <button
                  className={styles.sheetClose}
                  onClick={() => setMoreOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Sheet Body */}
              <div className={styles.sheetBody}>
                {MORE_SECTIONS.map((section) => (
                  <div key={section.title} className={styles.sheetSection}>
                    <div className={styles.sheetSectionTitle}>{section.title}</div>
                    <div className={styles.sheetGrid}>
                      {section.items.map((item) => {
                        const ItemIcon = item.icon;
                        return (
                          <Link
                            key={item.label}
                            href={item.href}
                            className={styles.sheetItem}
                            onClick={() => setMoreOpen(false)}
                          >
                            <span
                              className={styles.sheetItemIcon}
                              style={{ background: item.color + '15', color: item.color }}
                            >
                              <ItemIcon size={16} />
                            </span>
                            <span className={styles.sheetItemLabel}>{item.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* Bottom CTA */}
                <div className={styles.sheetCTA}>
                  <Link
                    href="/contact"
                    className={`btn btn-purple ${styles.sheetDemoBtn}`}
                    onClick={() => setMoreOpen(false)}
                    id="mobile-more-demo"
                  >
                    <Rocket size={16} />
                    Book Live Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Safe area spacer so content doesn't hide under bottom nav ── */}
      <div className={styles.safeAreaSpacer} />
    </>
  );
}
