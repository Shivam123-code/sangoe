import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const POLICIES = {
  privacy: {
    title: 'Privacy Policy',
    updated: 'June 2026',
    sections: [
      { heading: '1. Information We Collect', body: 'We collect information you provide directly (name, email, company details), information generated through your use of the platform (usage data, logs, settings), and information from third-party integrations you connect to Sangoe.' },
      { heading: '2. How We Use Your Information', body: 'We use your information solely to provide, maintain, and improve the Sangoe platform. We never sell your data to third parties. We may use aggregated, anonymised data for product analytics and improvement.' },
      { heading: '3. Data Storage & Security', body: 'All data is stored on ISO 27001-certified infrastructure. Data is encrypted at rest (AES-256) and in transit (TLS 1.3). Access is restricted to authorised personnel only on a need-to-know basis.' },
      { heading: '4. Data Retention', body: 'We retain your data for as long as your account is active or as needed to provide services. Upon account deletion, data is purged within 30 days from active systems and within 90 days from backups.' },
      { heading: '5. Your Rights', body: 'You have the right to access, correct, export, or delete your personal data at any time. To exercise these rights, contact privacy@sangoe.com. We will respond within 30 days.' },
      { heading: '6. Cookies', body: 'We use essential cookies for platform functionality and optional analytics cookies (with your consent). See our Cookie Policy for full details.' },
      { heading: '7. Contact', body: 'For privacy enquiries: privacy@sangoe.com | Sangoe Technologies Pvt. Ltd., Mumbai, India.' },
    ],
  },
  terms: {
    title: 'Terms of Service',
    updated: 'June 2026',
    sections: [
      { heading: '1. Acceptance of Terms', body: 'By creating an account or using Sangoe services, you agree to these Terms of Service. If you do not agree, you may not use our platform.' },
      { heading: '2. Account Responsibilities', body: 'You are responsible for all activity under your account. Keep your credentials secure. Notify us immediately at security@sangoe.com if you suspect unauthorised access.' },
      { heading: '3. Acceptable Use', body: 'You may not use Sangoe to violate any laws, infringe intellectual property rights, transmit malicious code, or engage in any activity that disrupts or harms the platform or other users.' },
      { heading: '4. Intellectual Property', body: 'Sangoe and its licensors own all rights to the platform, branding, and content. You retain full ownership of all data you input into the platform.' },
      { heading: '5. Payment Terms', body: 'Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as specified in our Refund Policy. We reserve the right to modify pricing with 30 days notice.' },
      { heading: '6. Termination', body: 'Either party may terminate the agreement with 30 days written notice. We may suspend accounts immediately for breach of these terms or non-payment.' },
      { heading: '7. Limitation of Liability', body: 'Sangoe\'s liability is limited to the fees paid by you in the 12 months preceding the claim. We are not liable for indirect, incidental, or consequential damages.' },
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    updated: 'June 2026',
    sections: [
      { heading: '1. What Are Cookies', body: 'Cookies are small text files stored on your device when you visit a website. They help us recognise you, remember your preferences, and understand how you use our platform.' },
      { heading: '2. Essential Cookies', body: 'These cookies are required for the platform to function. They include session management, authentication tokens, and security cookies. You cannot opt out of these.' },
      { heading: '3. Analytics Cookies', body: 'With your consent, we use analytics cookies (via privacy-friendly tools) to understand how users navigate the platform so we can improve it. No personal data is shared with ad networks.' },
      { heading: '4. Preference Cookies', body: 'These store your preferences such as language, theme (dark/light mode), and UI settings to personalise your experience.' },
      { heading: '5. Managing Cookies', body: 'You can manage cookie preferences through our cookie consent banner or your browser settings. Disabling non-essential cookies will not affect core functionality.' },
    ],
  },
  refund: {
    title: 'Refund Policy',
    updated: 'June 2026',
    sections: [
      { heading: '1. Monthly Plans', body: 'Monthly subscriptions may be cancelled at any time. No refunds are issued for the current billing period. Access continues until the end of the paid period.' },
      { heading: '2. Annual Plans', body: 'Annual subscriptions cancelled within 14 days of initial purchase are eligible for a full refund. After 14 days, annual plans are non-refundable but you retain access until the subscription end date.' },
      { heading: '3. Free Trial', body: 'Free trial accounts are not charged. If you upgrade during a trial and cancel within 7 days, a full refund will be issued.' },
      { heading: '4. Exceptions', body: 'Refunds may be issued at our discretion in exceptional circumstances such as extended service outages (beyond our SLA) or billing errors. Contact billing@sangoe.com.' },
    ],
  },
  sla: {
    title: 'Service Level Agreement (SLA)',
    updated: 'June 2026',
    sections: [
      { heading: '1. Uptime Guarantee', body: 'Sangoe guarantees 99.9% monthly uptime for all paid plans (Startup OS™ and above). This translates to no more than 43 minutes of unplanned downtime per month.' },
      { heading: '2. Planned Maintenance', body: 'Planned maintenance is scheduled during off-peak hours (2:00–4:00 AM IST) and communicated via email and status page at least 48 hours in advance. Planned downtime does not count against uptime commitments.' },
      { heading: '3. Support Response Times', body: 'Startup Plan: Email support, response within 24 hours. Growth Plan: Priority email + chat, response within 8 hours. Enterprise Plan: Dedicated support, response within 2 hours.' },
      { heading: '4. Incident Credits', body: 'If uptime falls below 99.9% in any calendar month, eligible customers may request a service credit of 10% of that month\'s fee for each 0.1% below the target, up to 50% of the monthly fee.' },
      { heading: '5. Exclusions', body: 'SLA commitments do not apply to outages caused by: customer actions, third-party integrations, force majeure events, or scheduled maintenance windows.' },
    ],
  },
  affiliate: {
    title: 'Affiliate Terms',
    updated: 'June 2026',
    sections: [
      { heading: '1. Programme Overview', body: 'The Sangoe Affiliate Programme allows individuals and businesses to earn commission by referring new customers to Sangoe. Participation requires acceptance of these terms.' },
      { heading: '2. Commission Structure', body: 'Affiliates earn a commission of up to 20% of the first-year revenue from referred customers, paid monthly. Exact rates depend on the affiliate tier and referred plan type.' },
      { heading: '3. Eligibility', body: 'Affiliates must have an active Sangoe account, comply with our brand guidelines, and not engage in spam, misleading advertising, or self-referrals.' },
      { heading: '4. Payments', body: 'Commissions are paid monthly via bank transfer or UPI for amounts above ₹1,000. International affiliates are paid via PayPal or wire transfer.' },
      { heading: '5. Termination', body: 'Sangoe reserves the right to terminate affiliate accounts for breach of these terms. Pending commissions from confirmed customers will still be paid.' },
    ],
  },
  partner: {
    title: 'Partner Terms',
    updated: 'June 2026',
    sections: [
      { heading: '1. Partner Types', body: 'Sangoe offers four partner tiers: Referral Partner, Implementation Partner, White Label Partner, and Technology Partner. Each tier has distinct obligations, benefits, and commission structures.' },
      { heading: '2. Implementation Partners', body: 'Implementation Partners are authorised to deploy, configure, and support Sangoe for end customers. Certification training is required. Partners receive 25–35% margin on deals they close.' },
      { heading: '3. White Label Partners', body: 'White Label Partners may brand and resell the Sangoe platform under their own brand. A separate White Label Agreement and minimum revenue commitment apply.' },
      { heading: '4. Technology Partners', body: 'Technology Partners integrate their products with Sangoe via our API. Integration must pass our technical review. Co-marketing opportunities available for certified integrations.' },
      { heading: '5. Confidentiality', body: 'All partners must maintain strict confidentiality of Sangoe\'s proprietary information, pricing, roadmap, and customer data accessed during the partnership.' },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(POLICIES).map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const policy = POLICIES[slug];
  if (!policy) return { title: 'Legal | Sangoe' };
  return {
    title: `${policy.title} | Sangoe Legal`,
    description: `Sangoe ${policy.title} — last updated ${policy.updated}.`,
  };
}

export default async function LegalDocPage({ params }) {
  const { slug } = await params;
  const policy = POLICIES[slug];

  if (!policy) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '72px' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>Document not found</h1>
          <Link href="/legal" style={{ color: '#7C3AED', fontWeight: 700, textDecoration: 'none' }}>← Back to Legal</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--theme-bg)', paddingTop: '72px' }}>

      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #050010 0%, #130338 50%, #1e0a5a 100%)',
        padding: '60px 20px 48px',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Link href="/legal" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', fontWeight: 600,
            textDecoration: 'none', marginBottom: '20px',
          }}>
            <ArrowLeft size={14} /> All Legal Documents
          </Link>
          <h1 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 900, color: '#fff', marginBottom: '8px', letterSpacing: '-0.02em' }}>
            {policy.title}
          </h1>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
            Last updated: {policy.updated}
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 20px 80px' }}>
        {policy.sections.map(sec => (
          <div key={sec.heading} style={{
            background: 'var(--theme-card-bg)',
            borderRadius: '16px',
            border: '1px solid var(--theme-card-border)',
            padding: '28px 32px',
            marginBottom: '12px',
            boxShadow: 'var(--theme-shadow-card)',
          }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--theme-text-main)', marginBottom: '12px', letterSpacing: '-0.005em' }}>
              {sec.heading}
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--theme-text-sub)', lineHeight: 1.8, margin: 0 }}>
              {sec.body}
            </p>
          </div>
        ))}

        <div style={{
          marginTop: '40px', padding: '24px 28px',
          background: 'var(--theme-card-bg)', borderRadius: '16px', border: '1px solid var(--theme-card-border)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '12px',
          boxShadow: 'var(--theme-shadow-card)',
        }}>
          <div>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--theme-text-main)', margin: '0 0 2px' }}>Questions about this document?</p>
            <p style={{ fontSize: '0.78rem', color: 'var(--theme-text-sub)', margin: 0 }}>Email us at legal@sangoe.com — we respond within 2 business days.</p>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Link href="/legal" style={{
              padding: '8px 18px', background: 'transparent', color: '#7C3AED',
              border: '1px solid #7C3AED30', borderRadius: '8px',
              fontWeight: 700, fontSize: '0.78rem', textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: '5px',
            }}>
              <ArrowLeft size={12} /> All Documents
            </Link>
            <a href="mailto:legal@sangoe.com" style={{
              padding: '8px 18px', background: '#7C3AED', color: '#fff',
              borderRadius: '8px', fontWeight: 700, fontSize: '0.78rem', textDecoration: 'none',
            }}>
              Contact Legal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
