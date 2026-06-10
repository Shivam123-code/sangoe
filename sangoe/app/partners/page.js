'use client';
import { useState } from 'react';
import { CheckCircle2, Handshake } from 'lucide-react';

const MODELS = [
  {
    title: 'Referral Partner',
    desc: 'Perfect for CA, CS, and law firms. Introduce Sangoe to your business clients and earn recurring commission shares on license sales.',
    benefits: ['15% Recurring Revenue Share', 'Dedicated Partnership Account Managers', 'Co-branded marketing collaterals']
  },
  {
    title: 'Implementation Partner',
    desc: 'Ideal for HR consultants, safety professionals, and business coaches. Help organizations design custom SOPs and integrate Sangoe tools.',
    benefits: ['Keep 100% of your consulting setup fees', 'Advanced partner dashboard & tools access', 'Sangoe Implementation Certifications']
  },
  {
    title: 'White Label Partner',
    desc: 'Best for large agencies or software resellers. Resell the Sangoe platform, customized with your branding, colors, and logo.',
    benefits: ['Full brand customization capability', 'Direct control over customer billing rates', 'Private VPS deployment choices']
  }
];

export default function PartnersPage() {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', model: 'Referral' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your partner application has been recorded. Our team will contact you within 24 hours.`);
    setFormData({ name: '', company: '', email: '', phone: '', model: 'Referral' });
  };

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f9fafb', paddingBottom: '80px' }}>
      {/* Header */}
      <section style={{ padding: '80px 20px', textAlign: 'center', background: 'linear-gradient(180deg, #EFF6FF 0%, #FAF5FF 60%, #F9FAFB 100%)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="tag" style={{ marginBottom: '16px', color: '#3b82f6', background: '#eff6ff', borderColor: '#bfdbfe' }}>Join the network</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 950, color: '#111827', lineHeight: 1.1, marginBottom: '20px' }}>
            Sangoe Partner <br /><span style={{ color: '#3B82F6' }}>Ecosystem &amp; Network</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#4b5563', lineHeight: 1.7 }}>
            Collaborate with Sangoe to expand your consulting reach, verify systems compliance, and earn recurring revenue shares.
          </p>
        </div>
      </section>

      {/* Models Grid */}
      <section style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '32px' }}>
          {MODELS.map(model => (
            <div
              key={model.title}
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                padding: '36px',
                border: '1px solid rgba(0,0,0,0.04)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.008)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px' }}>
                  <Handshake size={20} style={{ color: '#3B82F6' }} />
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#111827' }}>{model.title}</h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.6, marginBottom: '24px' }}>{model.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {model.benefits.map(b => (
                    <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#374151', fontWeight: 550 }}>
                      <CheckCircle2 size={14} style={{ color: '#10B981' }} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Form */}
      <section style={{ padding: '40px 20px', maxWidth: '600px', margin: '40px auto 0' }}>
        <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 10px 40px rgba(0,0,0,0.015)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111827', textAlign: 'center', marginBottom: '8px' }}>Apply for Partnership</h2>
          <p style={{ fontSize: '0.85rem', color: '#6b7280', textAlign: 'center', marginBottom: '32px' }}>Submit details to start a partnership conversation with our business development leads.</p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="responsive-grid-2" style={{ gap: '16px' }}>
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Your Name</label>
                <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none' }} />
              </div>
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Company Name</label>
                <input required type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none' }} />
              </div>
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Work Email</label>
              <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none' }} />
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Partnership Model</label>
              <select value={formData.model} onChange={(e) => setFormData({ ...formData, model: e.target.value })} style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none', background: '#fff' }}>
                <option>Referral Partner</option>
                <option>Implementation Partner</option>
                <option>White Label Reseller</option>
              </select>
            </div>
            <button type="submit" className="btn btn-purple" style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}>
              Submit Partnership Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
