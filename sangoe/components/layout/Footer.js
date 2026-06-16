import Link from 'next/link';
import { Apple, Play, ShieldCheck, CreditCard, Smartphone } from 'lucide-react';
import styles from './Footer.module.css';

const FOOTER_COLUMNS = [
  {
    title: 'Platform & Products',
    links: [
      { label: 'The Platform', href: '/platform' },
      { label: 'Operating Features', href: '/features' },
      { label: '9 Business Clouds', href: '/products' },
      { label: 'Advanced Solutions', href: '/solutions' },
      { label: 'Industries We Serve', href: '/industries' },
      { label: 'Pricing Plans', href: '/pricing' }
    ]
  },
  {
    title: 'Resources & Tools',
    links: [
      { label: 'Sangoe Academy', href: '/academy' },
      { label: 'Free Calculators', href: '/calculators' },
      { label: 'Business Assessments', href: '/assessments' },
      { label: 'Template Library', href: '/resources' },
      { label: 'Blog & Case Studies', href: '#' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Sangoe', href: '/about' },
      { label: 'Partner Ecosystem', href: '/partners' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Careers', href: '#' }
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
            <a href="#" className={styles.legalLink}>Your Privacy</a>
            <span>·</span>
            <a href="#" className={styles.legalLink}>Terms Of Condition</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
