import Link from 'next/link';
import { Apple, Play } from 'lucide-react';
import styles from './Footer.module.css';

const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Pricing', href: '/pricing' },
      { label: 'Platform', href: '/platform' },
      { label: 'Features', href: '/products' },
      { label: 'Integrations', href: '/#integrations' },
      { label: 'Changelog', href: '#' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Blog', href: '#' },
      { label: 'Our Story', href: '/about' },
      { label: 'Careers', href: '#' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'On-Boarding', href: '/contact' },
      { label: 'Help Center', href: '/contact' },
      { label: 'Templates', href: '/resources' },
      { label: 'Community', href: '#' }
    ]
  }
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>

        {/* Top Row */}
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="9" fill="#7C3AED" />
                <path d="M8 16L12.5 11.5L16.5 15.5L20.5 9.5L24 16L20.5 22.5L16.5 18.5L12.5 22.5L8 16Z" fill="white" />
              </svg>
              <span>SANGOE</span>
            </Link>
            <p className={styles.tagline}>
              Build a Business That Runs Without You. One unified Operating System to control, compliance-proof, and scale your entire enterprise.
            </p>
            <div className={styles.subscribe}>
              <input type="email" placeholder="Email Address" className={styles.emailInput} aria-label="Email Address" />
              <button className={`btn btn-purple ${styles.subBtn}`}>Subscribe</button>
            </div>
          </div>

          {/* Link Columns + Download App Column */}
          <div className={styles.linkGrid}>
            {FOOTER_COLUMNS.map(col => (
              <div key={col.title} className={styles.linkCol}>
                <h4 className={styles.colTitle}>{col.title}</h4>
                <ul className={styles.linkList}>
                  {col.links.map(link => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.link}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Download App Column */}
            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Download App</h4>
              <div className={styles.downloadGrid}>
                {/* Apple App Store */}
                <a href="#" className={styles.downloadBtn}>
                  <Apple size={16} className={styles.downloadIcon} />
                  <div className={styles.downloadText}>
                    <span className={styles.downloadSub}>Download on the</span>
                    <span className={styles.downloadMain}>App Store</span>
                  </div>
                </a>

                {/* Google Play */}
                <a href="#" className={styles.downloadBtn}>
                  <Play size={14} fill="currentColor" className={styles.downloadIcon} />
                  <div className={styles.downloadText}>
                    <span className={styles.downloadSub}>GET IT ON</span>
                    <span className={styles.downloadMain}>Google Play</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2026 Sangoe. All Rights Reserved.</p>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>Your Privacy</a>
            <span>·</span>
            <a href="#" className={styles.legalLink}>Terms Of Condition</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
