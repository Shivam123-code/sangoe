'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HelpCircle, 
  FileText, 
  Calculator, 
  GraduationCap, 
  Users, 
  Info, 
  Phone, 
  ChevronDown,
  Sun,
  Moon
} from 'lucide-react';
import { useTheme } from './ThemeProvider';
import styles from './Navbar.module.css';

const MAIN_LINKS = [
  { label: 'Home',      href: '/' },
  { label: 'Platform',  href: '/platform' },
  { label: 'Features',  href: '/features' },
  { label: 'Products',  href: '/products' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Pricing',   href: '/pricing' },
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
  const { theme, toggle } = useTheme();

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

  const isOnHero = pathname === '/';

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''} ${!isOnHero ? styles.lightTheme : styles.heroTheme}`}>
        <div className={styles.container}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <img src="/logos/1.png" alt="Sangoe Logo" className={styles.logoImage} />
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

          {/* Right Action Buttons */}
          <div className={styles.rightActions}>
            {/* Theme Toggle */}
            <button
              className={styles.themeToggle}
              onClick={toggle}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark'
                ? <Sun size={18} strokeWidth={2} />
                : <Moon size={18} strokeWidth={2} />}
            </button>

            <Link href="/contact" className={styles.cta}>
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
                {/* Theme toggle inside mobile drawer */}
                <button
                  onClick={toggle}
                  className={styles.mobileThemeToggle}
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {theme === 'dark'
                    ? <><Sun size={18} style={{ color: '#f59e0b' }} /> Switch to Light Mode</>
                    : <><Moon size={18} style={{ color: '#7C3AED' }} /> Switch to Dark Mode</>}
                </button>
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
