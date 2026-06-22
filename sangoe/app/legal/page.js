import Link from 'next/link';
import { Shield, FileText, Cookie, RefreshCw, Handshake, Users, Scale, ArrowRight, ArrowUpRight } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Legal | Sangoe',
  description: 'All Sangoe legal documents — Privacy Policy, Terms of Service, Cookie Policy, Refund Policy, SLA, Affiliate Terms, and Partner Terms.',
};

const DOCS = [
  {
    icon: Shield,
    color: '#7C3AED',
    title: 'Privacy Policy',
    desc: 'How we collect, use, store, and protect your personal and business data.',
    href: '/legal/privacy',
    updated: 'June 2026',
  },
  {
    icon: FileText,
    color: '#3B82F6',
    title: 'Terms of Service',
    desc: 'The rules, conditions, and obligations that govern use of the Sangoe platform.',
    href: '/legal/terms',
    updated: 'June 2026',
  },
  {
    icon: Cookie,
    color: '#F59E0B',
    title: 'Cookie Policy',
    desc: 'What cookies and tracking technologies we use and how to manage your preferences.',
    href: '/legal/cookies',
    updated: 'June 2026',
  },
  {
    icon: RefreshCw,
    color: '#10B981',
    title: 'Refund Policy',
    desc: 'Our refund, cancellation, and subscription downgrade terms for all paid plans.',
    href: '/legal/refund',
    updated: 'June 2026',
  },
  {
    icon: Scale,
    color: '#06B6D4',
    title: 'Service Level Agreement',
    desc: 'Uptime guarantees, support response times, and remedies for service disruptions.',
    href: '/legal/sla',
    updated: 'June 2026',
  },
  {
    icon: Users,
    color: '#6366F1',
    title: 'Affiliate Terms',
    desc: 'Terms and commission structures for participants in our referral and affiliate programme.',
    href: '/legal/affiliate',
    updated: 'June 2026',
  },
  {
    icon: Handshake,
    color: '#D97706',
    title: 'Partner Terms',
    desc: 'Legal terms for implementation, white-label, and technology partners.',
    href: '/legal/partner',
    updated: 'June 2026',
  },
];

export default function LegalPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#F8F9FC', paddingTop: '72px' }}>

      {/* ── Hero ── */}
      <div style={{
        background: 'linear-gradient(135deg, #050010 0%, #130338 50%, #1e0a5a 100%)',
        padding: '72px 20px 56px',
        textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '250px', background: 'radial-gradient(ellipse, rgba(99,102,241,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'rgba(167,139,250,0.12)', color: '#C4B5FD',
            fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.12em',
            textTransform: 'uppercase', padding: '6px 16px', borderRadius: '99px',
            border: '1px solid rgba(167,139,250,0.2)', marginBottom: '22px',
          }}>
            <Scale size={11} /> Legal Documents
          </span>
          <h1 style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, color: '#fff',
            marginBottom: '14px', letterSpacing: '-0.025em',
          }}>
            Sangoe <span style={{ color: '#A78BFA' }}>Legal</span>
          </h1>
          <p style={{
            fontSize: '0.95rem', color: 'rgba(255,255,255,0.48)',
            maxWidth: '440px', margin: '0 auto', lineHeight: 1.7,
          }}>
            All our legal documents in one place. Transparency is core to how we operate.
          </p>
        </div>
      </div>

      {/* ── Document Cards ── */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '56px 20px 80px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '14px',
        }}>
          {DOCS.map(doc => {
            const DIcon = doc.icon;
            return (
              <Link
                key={doc.title}
                href={doc.href}
                className={styles.card}
                style={{
                  '--hover-border-color': `${doc.color}40`,
                }}
              >
                <div style={{
                  width: '46px', height: '46px', borderRadius: '13px', flexShrink: 0,
                  background: `${doc.color}12`,
                  border: `1px solid ${doc.color}20`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <DIcon size={20} color={doc.color} strokeWidth={1.8} />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '6px' }}>
                    <h2 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                      {doc.title}
                    </h2>
                    <ArrowUpRight size={15} color="#CBD5E1" style={{ flexShrink: 0, marginTop: '2px' }} />
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#64748B', margin: '0 0 8px', lineHeight: 1.6 }}>
                    {doc.desc}
                  </p>
                  <span style={{ fontSize: '0.68rem', color: '#94A3B8', fontWeight: 600 }}>
                    Last updated: {doc.updated}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Trust note */}
        <div style={{
          marginTop: '48px',
          background: '#fff',
          border: '1px solid #E8ECF2',
          borderRadius: '16px',
          padding: '28px 32px',
          display: 'flex', alignItems: 'flex-start', gap: '16px',
          boxShadow: '0 2px 8px rgba(15,23,42,0.04)',
        }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '12px', flexShrink: 0,
            background: '#10B98112', border: '1px solid #10B98122',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Shield size={18} color="#10B981" strokeWidth={1.8} />
          </div>
          <div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A', margin: '0 0 6px' }}>
              Questions about our legal documents?
            </h3>
            <p style={{ fontSize: '0.82rem', color: '#64748B', margin: '0 0 12px', lineHeight: 1.6 }}>
              Our legal team is available to clarify any policies. For enterprise customers, we also offer custom Data Processing Agreements (DPAs) and MSAs.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="mailto:legal@sangoe.com" style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '8px 18px',
                background: '#7C3AED', color: '#fff',
                borderRadius: '8px', fontWeight: 700, fontSize: '0.8rem',
                textDecoration: 'none',
              }}>
                legal@sangoe.com <ArrowRight size={13} />
              </a>
              <Link href="/trust-centre" style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '8px 18px',
                background: 'transparent', color: '#7C3AED',
                border: '1px solid #7C3AED30',
                borderRadius: '8px', fontWeight: 700, fontSize: '0.8rem',
                textDecoration: 'none',
              }}>
                Visit Trust Centre <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
