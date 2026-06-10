'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Cloud, 
  LayoutDashboard, 
  HelpCircle, 
  FileText, 
  Calculator, 
  GraduationCap, 
  Users, 
  Info, 
  Phone, 
  ChevronDown 
} from 'lucide-react';
import styles from './Navbar.module.css';

const MAIN_LINKS = [
  { label: 'Platform', href: '/platform' },
  { label: 'Products', href: '/products' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing', href: '/pricing' },
];

const RESOURCE_LINKS = [
  { label: 'Templates & SOPs', href: '/resources', desc: '1000+ free business templates', icon: FileText },
  { label: 'Calculators', href: '/calculators', desc: 'GST, PF, ESIC & ROI tools', icon: Calculator },
  { label: 'Assessments', href: '/assessments', desc: 'Check your IPO & health score', icon: HelpCircle },
  { label: 'Academy', href: '/academy', desc: 'Courses for business growth', icon: GraduationCap },
  { label: 'Partners', href: '/partners', desc: 'For CAs, CS, & coaches', icon: Users },
  { label: 'About Us', href: '/about', desc: 'Our vision, story & team', icon: Info },
  { label: 'Contact', href: '/contact', desc: 'Get in touch with us', icon: Phone },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHeroTheme = pathname === '/' && !scrolled;

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''} ${isHeroTheme ? styles.heroTheme : styles.lightTheme}`}>
        <div className={styles.container}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <span className={styles.logoMark}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="9" fill="#7C3AED" />
                <path d="M8 16L12.5 11.5L16.5 15.5L20.5 9.5L24 16L20.5 22.5L16.5 18.5L12.5 22.5L8 16Z" fill="white" />
              </svg>
            </span>
            <span className={styles.logoText}>SANGOE</span>
          </Link>

          {/* Center Navigation Capsule */}
          <nav className={styles.pillNav}>
            {MAIN_LINKS.map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className={styles.activeIndicator}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={styles.linkText}>{link.label}</span>
                </Link>
              );
            })}

            {/* Resources Dropdown Item */}
            <div
              className={`${styles.navLink} ${styles.dropdownTrigger} ${
                pathname.match(/^\/(resources|calculators|assessments|academy|partners|about|contact)/)
                  ? styles.active
                  : ''
              }`}
              onMouseEnter={() => setHoveredItem('resources')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {pathname.match(/^\/(resources|calculators|assessments|academy|partners|about|contact)/) && (
                <motion.span
                  layoutId="activeIndicator"
                  className={styles.activeIndicator}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className={styles.linkText}>
                Resources
                <ChevronDown className={styles.chevron} size={14} />
              </span>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {hoveredItem === 'resources' && (
                  <motion.div
                    className={styles.dropdown}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                  >
                    <div className={styles.dropdownList}>
                      {RESOURCE_LINKS.map(item => {
                        const IconComponent = item.icon;
                        const isSubActive = pathname === item.href;
                        return (
                          <Link key={item.label} href={item.href} className={`${styles.dropdownItem} ${isSubActive ? styles.dropdownActive : ''}`}>
                            <IconComponent className={styles.dropdownIcon} size={18} />
                            <div className={styles.dropdownText}>
                              <span className={styles.dropdownLabel}>{item.label}</span>
                              <span className={styles.dropdownDesc}>{item.desc}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Action Button */}
          <div className={styles.rightActions}>
            <Link href="/contact" className={`btn btn-purple ${styles.cta}`}>
              Book Live Demo
            </Link>
            <button
              className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className={styles.mobileScroll}>
              <div className={styles.mobileSection}>
                <h4 className={styles.mobileSecTitle}>Core Platform</h4>
                <div className={styles.mobileGrid}>
                  {MAIN_LINKS.map(link => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`${styles.mobileLink} ${pathname === link.href ? styles.mobileActive : ''}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className={styles.mobileSection}>
                <h4 className={styles.mobileSecTitle}>Resources &amp; Utilities</h4>
                <div className={styles.mobileGrid}>
                  {RESOURCE_LINKS.map(link => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`${styles.mobileLink} ${pathname === link.href ? styles.mobileActive : ''}`}
                    >
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <link.icon size={20} style={{ color: '#7C3AED' }} />
                        <div>
                          <div className={styles.mobileLabel}>{link.label}</div>
                          <div className={styles.mobileDesc}>{link.desc}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className={styles.mobileActions}>
                <Link href="/contact" className="btn btn-purple" style={{ width: '100%', justifyContent: 'center' }}>
                  Book Live Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
