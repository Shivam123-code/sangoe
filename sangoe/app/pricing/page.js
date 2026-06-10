'use client';
import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('annual');

  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  });

  const getPrice = (monthlyPrice) => {
    const rate = billingCycle === 'annual' ? 0.8 : 1.0; // 20% discount for annual
    return Math.round(monthlyPrice * rate);
  };

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f9fafb', paddingBottom: '80px' }}>
      {/* Header */}
      <section style={{ padding: '80px 20px', textAlign: 'center', background: 'linear-gradient(180deg, #FAF5FF 0%, #F5F3FF 60%, #F9FAFB 100%)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="tag" style={{ marginBottom: '16px', color: '#7c3aed', background: '#f5f3ff', borderColor: '#c4b5fd' }}>Pricing plans</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 950, color: '#111827', lineHeight: 1.1, marginBottom: '20px' }}>
            Predictable Pricing. <br /><span style={{ color: '#7C3AED' }}>Unmatched Capabilities.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#4b5563', lineHeight: 1.7, marginBottom: '32px' }}>
            Choose a plan that matches your business stage—from a growing team to an enterprise readying for IPO listing.
          </p>

          {/* Billing Switcher */}
          <div style={{ display: 'inline-flex', background: '#f3f4f6', padding: '4px', borderRadius: '99px', border: '1px solid #e5e7eb' }}>
            <button
              onClick={() => setBillingCycle('monthly')}
              style={{
                padding: '8px 24px',
                borderRadius: '99px',
                fontSize: '0.85rem',
                fontWeight: 700,
                backgroundColor: billingCycle === 'monthly' ? '#ffffff' : 'transparent',
                color: billingCycle === 'monthly' ? '#7C3AED' : '#6b7280',
                border: 'none',
                cursor: 'pointer',
                boxShadow: billingCycle === 'monthly' ? '0 2px 6px rgba(0,0,0,0.05)' : 'none'
              }}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              style={{
                padding: '8px 24px',
                borderRadius: '99px',
                fontSize: '0.85rem',
                fontWeight: 700,
                backgroundColor: billingCycle === 'annual' ? '#ffffff' : 'transparent',
                color: billingCycle === 'annual' ? '#7C3AED' : '#6b7280',
                border: 'none',
                cursor: 'pointer',
                boxShadow: billingCycle === 'annual' ? '0 2px 6px rgba(0,0,0,0.05)' : 'none'
              }}
            >
              Annual Billing <span style={{ color: '#10B981', fontSize: '0.75rem' }}>(Save 20%)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{ padding: '20px', maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
        {/* Startup Plan */}
        <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px', border: '1px solid rgba(0,0,0,0.04)', boxShadow: '0 4px 20px rgba(0,0,0,0.008)', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>Startup OS™</h3>
            <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '24px' }}>Essential operational tracking systems for growing business teams.</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '32px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#111827' }}>{formatter.format(getPrice(12499))}</span>
              <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>/ month</span>
            </div>
            <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Sales & CRM Cloud Access', 'HR & Attendance Systems', 'Standard Projects & Worksheets', '3 Verification Checks / mo', 'Basic Reports Dashboard'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#4b5563', fontWeight: 550 }}>
                    <CheckCircle2 size={16} style={{ color: '#10B981', flexShrink: 0 }} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ marginTop: '40px' }}>
            <Link href="/contact" className="btn btn-purple" style={{ width: '100%', justifyContent: 'center', background: '#F3F4F6', color: '#4b5563', boxShadow: 'none' }}>
              Start Free Trial
            </Link>
          </div>
        </div>

        {/* Growth/Scale Plan (Recommended) */}
        <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px', border: '2px solid #7C3AED', boxShadow: '0 20px 40px rgba(124,58,237,0.08)', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between', position: 'relative' }}>
          <span style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#7C3AED', color: '#ffffff', fontSize: '0.75rem', fontWeight: 700, padding: '4px 14px', borderRadius: '99px', textTransform: 'uppercase', letterSpacing: '0.04rem' }}>Recommended</span>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>Business Growth OS™</h3>
            <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '24px' }}>Our signature platform including all 9 Clouds and compliance towers.</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '32px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#7C3AED' }}>{formatter.format(getPrice(29999))}</span>
              <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>/ month</span>
            </div>
            <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Access to all 9 Business Clouds', 'FounderOS™ Command Center', 'Compliance Control Tower™', 'Trust Intelligence Verification', 'MSME Systemization Blueprint', 'Premium OKR / KPI Dashboards', 'Dedicated CA/CS Onboarding support'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#4b5563', fontWeight: 550 }}>
                    <CheckCircle2 size={16} style={{ color: '#7C3AED', flexShrink: 0 }} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ marginTop: '40px' }}>
            <Link href="/contact" className="btn btn-purple" style={{ width: '100%', justifyContent: 'center' }}>
              Book Live Demo
            </Link>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px', border: '1px solid rgba(0,0,0,0.04)', boxShadow: '0 4px 20px rgba(0,0,0,0.008)', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>Enterprise OS™</h3>
            <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '24px' }}>Full white-labeled architecture and dedicated deployment configurations.</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '32px' }}>
              <span style={{ fontSize: '2.3rem', fontWeight: 900, color: '#111827' }}>Custom Quotation</span>
            </div>
            <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Custom Private VPS Deployments', 'White-labeled Partner portal & Reselling', 'Full custom API code integrations', 'Enterprise Risk registers audit reviews', 'Investor Board meetings document suites', 'Unlimited verifications check access'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#4b5563', fontWeight: 550 }}>
                    <CheckCircle2 size={16} style={{ color: '#10B981', flexShrink: 0 }} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ marginTop: '40px' }}>
            <Link href="/contact" className="btn btn-purple" style={{ width: '100%', justifyContent: 'center', background: '#111827', color: '#ffffff', boxShadow: 'none' }}>
              Contact Enterprise BD
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison table capability */}
      <section style={{ padding: '60px 20px', maxWidth: '900px', margin: '40px auto 0' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#111827', textAlign: 'center', marginBottom: '32px' }}>Platform Comparisons</h2>
        <div style={{ background: '#ffffff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.008)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>
                <th style={{ padding: '16px' }}>Capability</th>
                <th style={{ padding: '16px' }}>Traditional CRM</th>
                <th style={{ padding: '16px' }}>Heavy ERP</th>
                <th style={{ padding: '16px', color: '#7C3AED', fontWeight: 800 }}>Sangoe System</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Sales & CRM Integration', crm: true, erp: true, sangoe: true },
                { name: 'Core HR & Attendance Systems', crm: 'limited', erp: true, sangoe: true },
                { name: 'Labour Laws & Regulatory Compliance', crm: false, erp: 'limited', sangoe: true },
                { name: 'Safety Permit & Incident Logging', crm: false, erp: false, sangoe: true },
                { name: 'ESG Score Carding', crm: false, erp: 'limited', sangoe: true },
                { name: 'Director & Employee Background Checks', crm: false, erp: false, sangoe: true },
                { name: 'IPO Readiness Data Rooms', crm: false, erp: false, sangoe: true },
                { name: 'Interactive FounderOS Command Screen', crm: 'limited', erp: 'limited', sangoe: true }
              ].map((row, idx) => (
                <tr key={idx} style={{ borderBottom: idx === 7 ? 'none' : '1px solid #e5e7eb' }}>
                  <td style={{ padding: '16px', fontWeight: 700, color: '#374151' }}>{row.name}</td>
                  <td style={{ padding: '16px' }}>
                    {row.crm === true && <CheckCircle2 size={16} style={{ color: '#10B981', margin: '0 auto' }} />}
                    {row.crm === false && <XCircle size={16} style={{ color: '#EF4444', margin: '0 auto' }} />}
                    {row.crm === 'limited' && <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#F59E0B', background: 'rgba(245,158,11,0.08)', padding: '3px 8px', borderRadius: '99px' }}>Limited</span>}
                  </td>
                  <td style={{ padding: '16px' }}>
                    {row.erp === true && <CheckCircle2 size={16} style={{ color: '#10B981', margin: '0 auto' }} />}
                    {row.erp === false && <XCircle size={16} style={{ color: '#EF4444', margin: '0 auto' }} />}
                    {row.erp === 'limited' && <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#F59E0B', background: 'rgba(245,158,11,0.08)', padding: '3px 8px', borderRadius: '99px' }}>Limited</span>}
                  </td>
                  <td style={{ padding: '16px', background: 'rgba(124, 58, 237, 0.02)' }}>
                    {row.sangoe === true && <CheckCircle2 size={16} style={{ color: '#7C3AED', margin: '0 auto' }} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
