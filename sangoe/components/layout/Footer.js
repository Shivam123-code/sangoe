import Link from 'next/link';
import { Apple, Play, ShieldCheck, CreditCard, Smartphone } from 'lucide-react';
import styles from './Footer.module.css';

const FOOTER_COLUMNS = [
  {
    title: 'Platform & Products',
    links: [
      { label: 'The Platform', href: '/platform' },
      { label: 'Operating Features', href: '/features' },
      { label: 'Business Clouds', href: '/products' },
      { label: 'Advanced Solutions', href: '/solutions' },
      { label: 'Industries We Serve', href: '/industries' },
      { label: 'Pricing Plans', href: '/pricing' },
    ]
  },
  {
    title: 'Resources & Tools',
    links: [
      { label: 'Sangoe Academy', href: '/academy' },
      { label: 'Free Calculators', href: '/calculators' },
      { label: 'Business Assessments', href: '/assessments' },
      { label: 'Template Library', href: '/resources' },
      { label: 'Blog & Case Studies', href: '#' },
      { label: 'API Documentation', href: '#' },
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Sangoe', href: '/about' },
      { label: 'Partner Ecosystem', href: '/partners' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Careers', href: '#' },
      { label: 'Press & Media', href: '#' },
      { label: 'Affiliate Programme', href: '#' },
    ]
  },
  {
    title: 'Legal & Compliance',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Refund Policy', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Data Processing Agreement', href: '#' },
      { label: 'SLA Agreement', href: '#' },
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
              <img src="/logos/1.png" alt="Sangoe Logo" className={styles.logoImage} />
            </Link>
            <p className={styles.tagline}>
              Build a Business That Runs Without You. One unified Operating System to control, compliance-proof, and scale your entire enterprise.
            </p>
            <div className={styles.subscribe}>
              <input type="email" placeholder="Email Address" className={styles.emailInput} aria-label="Email Address" />
              <button className={`btn btn-purple ${styles.subBtn}`}>Subscribe</button>
            </div>

            {/* Download App (monoline, below email) */}
            <div className={styles.downloadSection}>
              <h4 className={styles.colTitle} style={{ marginBottom: '10px' }}>Download App</h4>
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

          {/* Link Columns */}
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
          </div>
        </div>

        {/* Trust & Security Banner */}
        <div className={styles.trustBanner}>
          <div className={styles.trustGroup}>
            <span className={styles.trustLabel}>Secure Payments</span>
            <div className={styles.paymentGrid}>
              <div className={styles.iconWrapper}>
                <img src="https://cdn.simpleicons.org/phonepe/4b5563" alt="PhonePe" className={styles.creativeIcon} />
              </div>
              <div className={styles.iconWrapper}>
                <img src="https://cdn.simpleicons.org/googlepay/4b5563" alt="Google Pay" className={styles.creativeIcon} />
              </div>
              <div className={styles.iconWrapper}>
                <img src="https://cdn.simpleicons.org/paypal/4b5563" alt="PayPal" className={styles.creativeIcon} />
              </div>
              <div className={styles.iconWrapper}>
                <img src="https://cdn.simpleicons.org/mastercard/4b5563" alt="Mastercard" className={styles.creativeIcon} />
              </div>
              <div className={styles.iconWrapper}>
                <img src="https://cdn.jsdelivr.net/gh/activemerchant/payment_icons/app/assets/images/payment_icons/payu.svg" alt="PayU" className={styles.creativeIcon} />
              </div>
              <div className={styles.iconWrapper}>
                <img src="https://cdn.simpleicons.org/visa/4b5563" alt="Visa" className={styles.creativeIcon} />
              </div>
            </div>
          </div>

          <div className={styles.trustVerticalDivider} />

          <div className={styles.trustGroup}>
            <span className={styles.trustLabel}>Global Compliance</span>
            <div className={styles.certGrid}>
              <div className={styles.creativeCert}>
                <div className={styles.certIconWrap}><ShieldCheck size={10} strokeWidth={2.5} /></div>
                ISO 42001
              </div>
              <div className={styles.creativeCert}>
                <div className={styles.certIconWrap}><ShieldCheck size={10} strokeWidth={2.5} /></div>
                PCI DSS
              </div>
              <div className={styles.creativeCert}>
                <div className={styles.creativeCertGlow} />
                <div className={styles.certIconWrap}><ShieldCheck size={10} strokeWidth={2.5} /></div>
                ISO 27001
              </div>
              <div className={styles.creativeCert}>
                <div className={styles.certIconWrap} style={{ background: '#eff6ff', color: '#3b82f6' }}><ShieldCheck size={10} strokeWidth={2.5} /></div>
                SDG Aligned
              </div>
              <div className={styles.creativeCert}>
                <div className={styles.certIconWrap} style={{ background: '#f5f3ff', color: '#7c3aed' }}><ShieldCheck size={10} strokeWidth={2.5} /></div>
                ESG Ready
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
            <a href="/privacy" className={styles.legalLink}>Privacy Policy</a>
            <span>·</span>
            <a href="/terms" className={styles.legalLink}>Terms of Service</a>
            <span>·</span>
            <a href="#" className={styles.legalLink}>Refund Policy</a>
            <span>·</span>
            <a href="#" className={styles.legalLink}>Cookie Policy</a>
            <span>·</span>
            <a href="#" className={styles.legalLink}>SLA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
