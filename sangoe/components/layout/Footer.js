'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Apple, Play, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import styles from './Footer.module.css';

/* ── Real brand SVG icons ── */
const IconLinkedIn = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const IconTwitterX = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const IconInstagram = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);
const IconYouTube = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
);
const IconFacebook = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

/* ═══════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════ */
const COLUMNS = [
  {
    title: 'Company',
    links: [
      { label: 'About Sangoe',    href: '/about' },
      { label: 'Leadership Team', href: '/about#leadership' },
      { label: 'Careers',         href: '/careers' },
      { label: 'Contact Us',      href: '/contact' },
      { label: 'Media & Press',   href: '/media-press' },
    ],
  },
  {
    title: 'Platform',
    links: [
      { label: 'FounderOS™',           href: '/platform' },
      { label: 'AI Business Co-Pilot',  href: '/ai-copilot' },
      { label: 'Integrations',          href: '/integrations' },
      { label: 'Mobile App',            href: '/mobile-app' },
      { label: 'Security',              href: '/trust-centre#security' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'CRM',                   href: '/products' },
      { label: 'HRMS',                  href: '/products' },
      { label: 'Recruitment ATS',       href: '/products' },
      { label: 'Project Management',    href: '/products' },
      { label: 'Compliance Management', href: '/products' },
      { label: 'Business Intelligence', href: '/products' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'MSME Transformation',       href: '/solutions' },
      { label: 'Compliance Control Tower™', href: '/solutions' },
      { label: 'Safety Management',          href: '/solutions' },
      { label: 'ESG Management',             href: '/solutions' },
      { label: 'IPO Readiness',              href: '/solutions' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog',         href: '/blog' },
      { label: 'Academy',      href: '/academy' },
      { label: 'Templates',    href: '/resources' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Webinars',     href: '/webinars' },
    ],
  },
  {
    title: 'Partners',
    links: [
      { label: 'Referral Partner',       href: '/partners' },
      { label: 'Implementation Partner', href: '/partners' },
      { label: 'White Label Partner',    href: '/partners' },
      { label: 'Technology Partner',     href: '/partners' },
    ],
  },
];

const TRUST_LINKS = [
  { label: 'Trust Centre',           href: '/trust-centre' },
  { label: 'Security',               href: '/trust-centre#security' },
  { label: 'Privacy Policy',         href: '/legal/privacy' },
  { label: 'Terms of Service',       href: '/legal/terms' },
  { label: 'Cookie Policy',          href: '/legal/cookies' },
  { label: 'Service Status',         href: '/status' },
  { label: 'Responsible Disclosure', href: '/trust-centre#disclosure' },
];

const SEO_SECTIONS = [
  {
    title: 'Popular Solutions',
    links: [
      { label: 'CRM Software for MSMEs',         href: '/services/core-customers' },
      { label: 'HRMS Software',                  href: '/services/hr-records-main' },
      { label: 'Compliance Management Software', href: '/products' },
      { label: 'Recruitment Software',           href: '/services/recruitment-recruitment' },
      { label: 'Safety Management Software',     href: '/solutions' },
      { label: 'ESG Management Software',        href: '/solutions' },
      { label: 'Project Management Software',    href: '/services/core-projects' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Construction ERP',   href: '/industries' },
      { label: 'Manufacturing ERP',  href: '/industries' },
      { label: 'Logistics Software', href: '/industries' },
      { label: 'Staffing Software',  href: '/industries' },
      { label: 'Healthcare Software',href: '/industries' },
    ],
  },
  {
    title: 'Free Tools',
    links: [
      { label: 'Business Health Score', href: '/assessments' },
      { label: 'Compliance Score',      href: '/assessments' },
      { label: 'Safety Score',          href: '/assessments' },
      { label: 'IPO Readiness Score',   href: '/assessments' },
      { label: 'GST Calculator',        href: '/calculators' },
      { label: 'PF Calculator',         href: '/calculators' },
    ],
  },
  {
    title: 'Free Templates',
    links: [
      { label: 'HR Policy Templates',  href: '/resources' },
      { label: 'SOP Templates',        href: '/resources' },
      { label: 'Risk Register Templates', href: '/resources' },
      { label: 'Audit Checklist',      href: '/resources' },
      { label: 'Incident Report Forms',href: '/resources' },
    ],
  },
];

const SOCIALS = [
  { Icon: IconLinkedIn,  href: 'https://linkedin.com/company/sangoe',  label: 'LinkedIn' },
  { Icon: IconTwitterX,  href: 'https://twitter.com/sangoe',           label: 'Twitter/X' },
  { Icon: IconInstagram, href: 'https://instagram.com/sangoe',         label: 'Instagram' },
  { Icon: IconYouTube,   href: 'https://youtube.com/@sangoe',          label: 'YouTube' },
  { Icon: IconFacebook,  href: 'https://facebook.com/sangoe',          label: 'Facebook' },
];

const CERTS = ['ISO 42001', 'ISO 27001', 'PCI DSS', 'SDG Aligned', 'ESG Ready'];

/* Pages that show the SEO expanded footer */
const SEO_PAGES = ['/', '/blog', '/resources', '/academy'];

/* ═══════════════════════════════════════════════════
   FOOTER COMPONENT
═══════════════════════════════════════════════════ */
export default function Footer() {
  const pathname = usePathname();
  const showSeo = SEO_PAGES.includes(pathname) || pathname.startsWith('/blog') || pathname.startsWith('/resources');
  const [seoOpen, setSeoOpen] = useState(false);
  const [nlEmail, setNlEmail] = useState('');
  const [nlStatus, setNlStatus] = useState('idle'); // idle | sending | done | error

  const handleNewsletter = async (e) => {
    e.preventDefault();
    if (!nlEmail) return;
    setNlStatus('sending');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: nlEmail }),
      });
      setNlStatus(res.ok ? 'done' : 'error');
    } catch { setNlStatus('error'); }
  };

  return (
    <footer className={styles.footer}>

      {/* ════════════════════════════════
          LEVEL 3 — SEO EXPANDED FOOTER
          (homepage + resource pages only)
      ════════════════════════════════ */}
      {showSeo && (
        <div className={styles.seoSection}>
          <div className={styles.seoInner}>
            <button
              className={styles.seoToggle}
              onClick={() => setSeoOpen(o => !o)}
              aria-expanded={seoOpen}
            >
              <span>{seoOpen ? 'Show Less' : 'Explore More'}</span>
              {seoOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </button>

            {seoOpen && (
              <div className={styles.seoGrid}>
                {SEO_SECTIONS.map(sec => (
                  <div key={sec.title} className={styles.seoCol}>
                    <h4 className={styles.seoColTitle}>{sec.title}</h4>
                    <ul className={styles.seoList}>
                      {sec.links.map(l => (
                        <li key={l.label}>
                          <Link href={l.href} className={styles.seoLink}>{l.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ════════════════════════════════
          LEVEL 1 — MAIN FOOTER
      ════════════════════════════════ */}
      <div className={styles.main}>
        <div className={styles.mainInner}>

          {/* ── Brand Column ── */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logoWrap} aria-label="Sangoe Home">
              <img src="/logos/1.png" alt="Sangoe" className={styles.logoImg} />
            </Link>

            <p className={styles.brandSlogan}>Build. Control. Scale.</p>
            <p className={styles.brandTagline}>India&apos;s Business Growth Operating System™</p>
            <p className={styles.brandDesc}>
              One unified OS to control, compliance-proof, and scale your entire enterprise — from MSME to IPO.
            </p>

            {/* Newsletter */}
            {nlStatus === 'done' ? (
              <div style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: 700, padding: '10px 0', marginBottom: '18px' }}>
                ✓ Subscribed! Thank you.
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className={styles.newsletter}>
                <input
                  type="email"
                  required
                  placeholder="Your work email"
                  className={styles.emailInput}
                  aria-label="Subscribe to newsletter"
                  value={nlEmail}
                  onChange={e => setNlEmail(e.target.value)}
                />
                <button type="submit" className={styles.subBtn} disabled={nlStatus === 'sending'}>
                  {nlStatus === 'sending' ? '…' : 'Subscribe'}
                </button>
              </form>
            )}

            {/* Socials + App buttons — single row */}
            <div className={styles.socialAppRow}>
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={styles.socialIcon}
                >
                  <Icon size={15} strokeWidth={1.8} />
                </a>
              ))}

              <a href="#" className={styles.appIconBtn} aria-label="Download on App Store">
                <Apple size={15} />
              </a>
              <a href="#" className={styles.appIconBtn} aria-label="Get it on Google Play">
                <Play size={13} fill="currentColor" />
              </a>
            </div>
          </div>

          {/* ── Link Columns ── */}
          <div className={styles.linkGrid}>
            {COLUMNS.map(col => (
              <div key={col.title} className={styles.linkCol}>
                <h4 className={styles.colTitle}>{col.title}</h4>
                <ul className={styles.linkList}>
                  {col.links.map(l => (
                    <li key={l.label}>
                      {l.disabled
                        ? <span className={styles.linkDisabled}>{l.label}</span>
                        : <Link href={l.href} className={styles.link}>{l.label}</Link>
                      }
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════
          LEVEL 2 — TRUST BAR
      ════════════════════════════════ */}
      <div className={styles.trustBar}>
        <div className={styles.trustBarInner}>
          <div className={styles.trustBarLeft}>
            <ShieldCheck size={13} className={styles.trustIcon} />
            <span className={styles.trustBarLabel}>Trust &amp; Compliance</span>
          </div>
          <nav className={styles.trustLinks} aria-label="Trust and legal links">
              {TRUST_LINKS.map((item, i) => (
              <span key={item.label} className={styles.trustLinkWrap}>
                {i > 0 && <span className={styles.trustDivider}>|</span>}
                {item.disabled
                  ? <span className={styles.trustLinkDisabled}>{item.label}</span>
                  : <Link href={item.href} className={styles.trustLink}>{item.label}</Link>
                }
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* ════════════════════════════════
          BOTTOM BAR — Copyright
      ════════════════════════════════ */}
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            © 2026 Sangoe Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className={styles.certs}>
            {CERTS.map(c => (
              <span key={c} className={styles.cert}>
                <ShieldCheck size={9} />
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
