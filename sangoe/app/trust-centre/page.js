import Link from 'next/link';
import { ShieldCheck, Lock, Server, FileCheck, Eye, AlertCircle, CheckCircle2, ArrowRight, Shield } from 'lucide-react';

export const metadata = {
  title: 'Trust Centre | Sangoe',
  description: 'How Sangoe protects your data with enterprise-grade security, privacy, reliability and compliance standards.',
};

const SECTIONS = [
  {
    id: 'security',
    icon: ShieldCheck,
    color: '#7C3AED',
    gradient: 'linear-gradient(135deg, #7C3AED18, #6D28D908)',
    title: 'Security',
    items: [
      {
        heading: 'Data Encryption',
        body: 'All data is encrypted at rest using AES-256 and in transit using TLS 1.3. Encryption keys are managed via a dedicated Hardware Security Module (HSM) and rotated automatically on a 90-day schedule.',
      },
      {
        heading: 'Access Controls',
        body: 'Role-based access control (RBAC) with mandatory MFA enforcement across all accounts. Privileged access is managed via a PAM system with just-in-time provisioning and full audit logging.',
      },
      {
        heading: 'Backup Policy',
        body: 'Automated daily encrypted backups with 30-day retention. Point-in-time recovery is available within a 15-minute window. All backup integrity is tested monthly with automated restoration drills.',
      },
      {
        heading: 'Infrastructure',
        body: 'Hosted on ISO 27001-certified cloud infrastructure with full network segmentation. A Web Application Firewall (WAF) and DDoS protection are active at all times across all endpoints.',
      },
    ],
  },
  {
    id: 'privacy',
    icon: Lock,
    color: '#3B82F6',
    gradient: 'linear-gradient(135deg, #3B82F618, #1D4ED808)',
    title: 'Privacy',
    items: [
      {
        heading: 'Privacy Commitment',
        body: 'Sangoe never sells, rents, or shares your personal data with third parties for commercial purposes. All data processing is strictly limited to what is necessary for delivering the service. You retain full ownership of your data at all times.',
      },
      {
        heading: 'GDPR Readiness',
        body: 'Sangoe is fully GDPR-compliant. We offer Data Processing Agreements (DPAs) for enterprise customers, support right-to-erasure and right-to-portability requests, and maintain a comprehensive Records of Processing Activities (RoPA).',
      },
    ],
  },
  {
    id: 'reliability',
    icon: Server,
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B98118, #05966908)',
    title: 'Reliability',
    items: [
      {
        heading: 'Uptime Commitment',
        body: 'We guarantee 99.9% monthly uptime across all paid plans, backed by our Service Level Agreement. Planned maintenance windows are communicated at least 48 hours in advance and scheduled during off-peak hours.',
      },
      {
        heading: 'Service Availability',
        body: 'Global CDN distribution ensures fast, reliable access regardless of location. Our infrastructure runs across multiple availability zones with automatic failover — no single point of failure exists in our production environment.',
      },
    ],
  },
  {
    id: 'compliance',
    icon: FileCheck,
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B18, #D9770608)',
    title: 'Compliance',
    items: [
      {
        heading: 'Certifications',
        body: 'Sangoe holds or is actively working towards: ISO 42001 (AI Management Systems), ISO 27001 (Information Security Management), PCI DSS Level 1 (Payment Security), SDG Alignment Certification, and ESG Readiness Assessment.',
      },
      {
        heading: 'Security Roadmap',
        body: 'Our ongoing compliance roadmap includes SOC 2 Type II certification and alignment with India\'s Digital Personal Data Protection (DPDP) Act. Quarterly third-party penetration tests are conducted and results are reviewed by our security board.',
      },
    ],
  },
  {
    id: 'transparency',
    icon: Eye,
    color: '#EC4899',
    gradient: 'linear-gradient(135deg, #EC489918, #BE185D08)',
    title: 'Transparency',
    items: [
      {
        heading: 'Status Page',
        body: 'Real-time system status for all Sangoe services is publicly available at status.sangoe.com. You can subscribe to instant email or SMS notifications for any incident affecting your region or service.',
      },
      {
        heading: 'Incident Reporting',
        body: 'All service incidents are publicly disclosed within 72 hours of detection. Detailed post-mortems with root cause analysis are published for major incidents within 14 business days of resolution.',
      },
    ],
  },
  {
    id: 'disclosure',
    icon: AlertCircle,
    color: '#EF4444',
    gradient: 'linear-gradient(135deg, #EF444418, #DC262608)',
    title: 'Responsible Disclosure',
    items: [
      {
        heading: 'Bug Bounty Programme',
        body: 'We actively welcome responsible security disclosures from the security research community. Report any vulnerabilities to security@sangoe.com — our dedicated security team responds within 48 hours and will acknowledge valid reports.',
      },
      {
        heading: 'Researcher Recognition',
        body: 'Researchers who responsibly disclose valid vulnerabilities are acknowledged in our public Hall of Fame (with consent) and may be eligible for rewards under our Bug Bounty Programme based on severity and impact.',
      },
    ],
  },
];

export default function TrustCentrePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#F8F9FC', paddingTop: '72px' }}>

      {/* ── Hero ── */}
      <div style={{
        background: 'linear-gradient(135deg, #050010 0%, #130338 45%, #1e0a5a 100%)',
        padding: '80px 20px 64px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Glow blobs */}
        <div style={{ position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(124,58,237,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'rgba(167,139,250,0.12)', color: '#C4B5FD',
            fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.12em',
            textTransform: 'uppercase', padding: '6px 16px', borderRadius: '99px',
            border: '1px solid rgba(167,139,250,0.2)', marginBottom: '24px',
          }}>
            <Shield size={11} /> Enterprise Trust
          </span>

          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, color: '#fff',
            marginBottom: '16px', letterSpacing: '-0.025em', lineHeight: 1.15,
          }}>
            Sangoe <span style={{ color: '#A78BFA' }}>Trust Centre</span>
          </h1>

          <p style={{
            fontSize: '1rem', color: 'rgba(255,255,255,0.5)',
            maxWidth: '520px', margin: '0 auto 36px', lineHeight: 1.7,
          }}>
            Security, privacy, and reliability are not afterthoughts at Sangoe — they are foundational to every line of code we ship.
          </p>

          {/* Jump links */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {SECTIONS.map(s => (
              <a key={s.id} href={`#${s.id}`} style={{
                padding: '7px 18px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '99px', color: 'rgba(255,255,255,0.65)',
                fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none',
                transition: 'all 0.2s',
              }}>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '64px 20px 80px' }}>

        {SECTIONS.map((sec, si) => {
          const SIcon = sec.icon;
          return (
            <section
              key={sec.id}
              id={sec.id}
              style={{ marginBottom: si < SECTIONS.length - 1 ? '60px' : '0' }}
            >
              {/* Section header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
                <div style={{
                  width: '46px', height: '46px', borderRadius: '14px',
                  background: `${sec.color}18`,
                  border: `1px solid ${sec.color}28`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <SIcon size={22} color={sec.color} strokeWidth={1.8} />
                </div>
                <div>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0F172A', margin: 0, letterSpacing: '-0.01em' }}>
                    {sec.title}
                  </h2>
                </div>
              </div>

              {/* Cards grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: '14px',
              }}>
                {sec.items.map(item => (
                  <div key={item.heading} style={{
                    background: '#fff',
                    borderRadius: '16px',
                    border: '1px solid #E8ECF2',
                    padding: '24px 26px',
                    boxShadow: '0 2px 10px rgba(15,23,42,0.04)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                      <CheckCircle2 size={15} color={sec.color} strokeWidth={2.5} />
                      <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#111827', margin: 0 }}>
                        {item.heading}
                      </h3>
                    </div>
                    <p style={{ fontSize: '0.84rem', color: '#64748B', lineHeight: 1.75, margin: 0 }}>
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* ── CTA ── */}
        <div style={{
          marginTop: '64px',
          background: 'linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)',
          borderRadius: '22px', padding: '48px 40px', textAlign: 'center',
          boxShadow: '0 20px 60px rgba(124,58,237,0.25)',
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#fff', marginBottom: '10px', letterSpacing: '-0.01em' }}>
            Have a security question?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '28px', fontSize: '0.9rem', lineHeight: 1.6 }}>
            Our dedicated security team responds within 48 hours to all enquiries.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <a href="mailto:security@sangoe.com" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '13px 28px',
              background: '#fff', color: '#7C3AED',
              borderRadius: '50px', fontWeight: 800, fontSize: '0.88rem',
              textDecoration: 'none',
            }}>
              Email Security Team <ArrowRight size={15} />
            </a>
            <Link href="/legal" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '13px 28px',
              background: 'rgba(255,255,255,0.12)', color: '#fff',
              borderRadius: '50px', fontWeight: 700, fontSize: '0.88rem',
              textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)',
            }}>
              View Legal Documents <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
