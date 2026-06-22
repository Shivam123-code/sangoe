'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
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
    <div style={{ paddingTop: '0', minHeight: '100vh', background: '#f9fafb', paddingBottom: '80px' }}>
      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #0a0014 0%, #1a054a 50%, #2a0a6a 100%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-120px', right: '-80px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '20%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 40px 80px', display: 'flex', alignItems: 'center', gap: '80px', position: 'relative', zIndex: 1 }}>
          <motion.div style={{ flex: '1.1', minWidth: 0 }} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <motion.span className="tag tag-dark" style={{ marginBottom: '20px', display: 'inline-block' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>Pricing Plans</motion.span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', fontWeight: 950, color: '#ffffff', lineHeight: 1.05, marginBottom: '24px', letterSpacing: '-0.02em' }}>
              Predictable Pricing.<br />
              <span style={{ background: 'linear-gradient(135deg, #c084fc 0%, #a78bfa 50%, #818cf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Unmatched Capabilities.</span>
            </h1>
            <motion.p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.75, maxWidth: '440px', marginBottom: '32px' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}>
              Choose a plan that matches your business stage—from a growing team to an enterprise readying for IPO listing.
            </motion.p>
            <motion.div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '32px' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}>
              <Link href="/get-started?plan=trial" className="btn btn-purple">Start Free Trial</Link>
              <Link href="/contact" className="btn btn-outline-white">Book Live Demo</Link>
            </motion.div>
            <motion.div style={{ display: 'flex', gap: '32px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.08)' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }}>
              {[['3', 'Flexible Plans'], ['20%', 'Annual Discount'], ['₹0', 'Setup Fee']].map(([num, label]) => (
                <div key={label}><div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffffff' }}>{num}</div><div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '2px' }}>{label}</div></div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div style={{ flex: '1', minWidth: 0, position: 'relative', flexShrink: 0, maxWidth: '520px' }} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
            <div style={{ position: 'absolute', inset: '-30px', borderRadius: '40px', background: 'radial-gradient(ellipse, rgba(124,58,237,0.35) 0%, transparent 70%)', filter: 'blur(28px)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 40px 80px rgba(0,0,0,0.6)', transform: 'perspective(1200px) rotateY(-8deg) rotateX(3deg)' }}>
              <Image src="/images/hero_pricing.png" alt="Sangoe pricing tiers" width={520} height={380} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,0,20,0.15) 0%, transparent 60%)' }} />
            </div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }} style={{ position: 'absolute', top: '-18px', right: '-18px', background: '#ffffff', borderRadius: '14px', padding: '10px 16px', boxShadow: '0 16px 40px rgba(0,0,0,0.35)', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#111827', whiteSpace: 'nowrap' }}>Save 20% Annual</span>
            </motion.div>
            <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1.2 }} style={{ position: 'absolute', bottom: '-18px', left: '-18px', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', borderRadius: '14px', padding: '12px 18px', boxShadow: '0 16px 40px rgba(124,58,237,0.45)', zIndex: 10 }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff' }}>₹0</div>
              <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>Setup Fee</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Billing Cycle Toggle Section */}
      <section style={{ padding: '48px 20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <div style={{ display: 'inline-flex', background: 'rgba(15, 23, 42, 0.05)', padding: '4px', borderRadius: '99px', border: '1px solid rgba(15, 23, 42, 0.08)' }}>
          <button 
            onClick={() => setBillingCycle('monthly')} 
            style={{ 
              padding: '10px 28px', 
              borderRadius: '99px', 
              fontSize: '0.88rem', 
              fontWeight: 750, 
              backgroundColor: billingCycle === 'monthly' ? '#7C3AED' : 'transparent', 
              color: billingCycle === 'monthly' ? '#ffffff' : '#475569', 
              border: 'none', 
              cursor: 'pointer', 
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)' 
            }}
          >
            Monthly Billing
          </button>
          <button 
            onClick={() => setBillingCycle('annual')} 
            style={{ 
              padding: '10px 28px', 
              borderRadius: '99px', 
              fontSize: '0.88rem', 
              fontWeight: 750, 
              backgroundColor: billingCycle === 'annual' ? '#7C3AED' : 'transparent', 
              color: billingCycle === 'annual' ? '#ffffff' : '#475569', 
              border: 'none', 
              cursor: 'pointer', 
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)' 
            }}
          >
            Annual Billing <span style={{ color: billingCycle === 'annual' ? '#10b981' : '#059669', fontSize: '0.78rem', marginLeft: '4px', fontWeight: 800 }}>(Save 20%)</span>
          </button>
        </div>
        <p style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 550, margin: 0 }}>
          ⚡ Start your 14-day free trial on any plan. No credit card required.
        </p>
      </section>

      {/* Pricing Cards */}
      <section style={{ padding: '20px', maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '32px' }}>
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
            <Link href="/get-started?plan=startup" className="btn btn-purple" style={{ width: '100%', justifyContent: 'center' }}>
              Start Free Trial
            </Link>
          </div>
        </div>

        {/* Growth/Scale Plan (Recommended) */}
        <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px', border: '2px solid #7C3AED', boxShadow: '0 20px 40px rgba(124,58,237,0.08)', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between', position: 'relative' }}>
          <span style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#7C3AED', color: '#ffffff', fontSize: '0.75rem', fontWeight: 700, padding: '4px 14px', borderRadius: '99px', textTransform: 'uppercase', letterSpacing: '0.04rem' }}>Recommended</span>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>Business Growth OS™</h3>
            <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '24px' }}>Our signature platform including all Business Clouds and compliance towers.</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '32px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#7C3AED' }}>{formatter.format(getPrice(29999))}</span>
              <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>/ month</span>
            </div>
            <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Access to all Business Clouds', 'FounderOS™ Command Center', 'Compliance Control Tower™', 'Trust Intelligence Verification', 'MSME Systemization Blueprint', 'Premium OKR / KPI Dashboards', 'Dedicated CA/CS Onboarding support'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#4b5563', fontWeight: 550 }}>
                    <CheckCircle2 size={16} style={{ color: '#7C3AED', flexShrink: 0 }} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link href="/get-started?plan=growth" className="btn btn-purple" style={{ width: '100%', justifyContent: 'center' }}>
              Start Free Trial
            </Link>
            <Link href="/contact" className="btn" style={{ width: '100%', justifyContent: 'center', background: 'transparent', border: '1px solid #7C3AED', color: '#7C3AED', boxShadow: 'none' }}>
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
            <Link href="/get-started?plan=enterprise" className="btn btn-purple" style={{ width: '100%', justifyContent: 'center', background: '#111827', color: '#ffffff', boxShadow: 'none' }}>
              Contact Enterprise BD
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison table capability */}
      <section style={{ padding: '60px 20px', maxWidth: '900px', margin: '40px auto 0' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#111827', textAlign: 'center', marginBottom: '32px' }}>Platform Comparisons</h2>
        <div style={{ background: '#ffffff', borderRadius: '16px', overflowX: 'auto', border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.008)' }}>
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
