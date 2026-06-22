'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Handshake, Loader2 } from 'lucide-react';

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

const ECOSYSTEM_CATEGORIES = [
  { name: 'CA Firms', desc: 'Add corporate systemization and financial auditing tools to your client services.' },
  { name: 'CS Firms', desc: 'Manage board meetings, ROC compliance, and ESG governance digitally.' },
  { name: 'Law Firms', desc: 'Standardize legal contracts and NDA compliance tracking for clients.' },
  { name: 'HR Consultants', desc: 'Deploy recruitment and payroll SOPs for growing organizations.' },
  { name: 'Safety Consultants', desc: 'Digitize your client\'s factory audits and near-miss reporting.' },
  { name: 'Recruiters', desc: 'Provide clients with a full HRMS along with your placement services.' },
  { name: 'Business Coaches', desc: 'Help founders step back by implementing the Business OS framework.' },
  { name: 'Training Companies', desc: 'Track employee skills and deliver standard training modules.' },
  { name: 'Technology Partners', desc: 'Integrate your SaaS or API services into the Sangoe ecosystem.' },
  { name: 'Implementation Partners', desc: 'Deploy and configure Sangoe clouds for enterprise clients.' },
  { name: 'White Label Partners', desc: 'Resell the entire Sangoe OS under your own brand name.' }
];

export default function PartnersPage() {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', model: 'Referral Partner' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send');
      setStatus('success');
      setFormData({ name: '', company: '', email: '', phone: '', model: 'Referral Partner' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  return (
    <div style={{ paddingTop: '0', minHeight: '100vh', background: 'var(--theme-bg)', paddingBottom: '80px' }}>
      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #030c1e 0%, #071a40 50%, #0a2558 100%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-130px', right: '-80px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-100px', left: '15%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 40px 80px', display: 'flex', alignItems: 'center', gap: '80px', position: 'relative', zIndex: 1 }}>
          <motion.div style={{ flex: '1.1', minWidth: 0 }} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <motion.span className="tag tag-dark" style={{ marginBottom: '20px', display: 'inline-block' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>Join the Network</motion.span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', fontWeight: 950, color: '#ffffff', lineHeight: 1.05, marginBottom: '24px', letterSpacing: '-0.02em' }}>
              Sangoe Partner<br />
              <span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #93c5fd 50%, #bfdbfe 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Ecosystem &amp; Network</span>
            </h1>
            <motion.p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.75, maxWidth: '440px', marginBottom: '36px' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}>
              Collaborate with Sangoe to expand your consulting reach, verify systems compliance, and earn recurring revenue shares up to 15%.
            </motion.p>
            <motion.div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
              <Link href="#apply" className="btn btn-purple">Apply to Partner</Link>
              <Link href="/contact" className="btn btn-outline-white">Talk to BD Team</Link>
            </motion.div>
            <motion.div style={{ display: 'flex', gap: '32px', marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.08)' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }}>
              {[['3', 'Partner Models'], ['15%', 'Revenue Share'], ['0', 'Entry Barriers']].map(([num, label]) => (
                <div key={label}><div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffffff' }}>{num}</div><div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '2px' }}>{label}</div></div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div style={{ flex: '1', minWidth: 0, position: 'relative', flexShrink: 0, maxWidth: '520px' }} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
            <div style={{ position: 'absolute', inset: '-30px', borderRadius: '40px', background: 'radial-gradient(ellipse, rgba(59,130,246,0.3) 0%, transparent 70%)', filter: 'blur(28px)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 40px 80px rgba(0,0,0,0.6)', transform: 'perspective(1200px) rotateY(-8deg) rotateX(3deg)' }}>
              <Image src="/images/hero_partners.png" alt="Sangoe partner network" width={520} height={360} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(3,12,30,0.2) 0%, transparent 60%)' }} />
            </div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }} style={{ position: 'absolute', top: '-18px', right: '-18px', background: 'var(--theme-card-bg)', border: '1px solid var(--theme-card-border)', borderRadius: '14px', padding: '10px 16px', boxShadow: '0 16px 40px rgba(0,0,0,0.35)', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6', flexShrink: 0 }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--theme-text-main)', whiteSpace: 'nowrap' }}>15% Revenue Share</span>
            </motion.div>
            <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1.2 }} style={{ position: 'absolute', bottom: '-18px', left: '-18px', background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', borderRadius: '14px', padding: '12px 18px', boxShadow: '0 16px 40px rgba(37,99,235,0.45)', zIndex: 10 }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff' }}>3</div>
              <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>Partner Models</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Models Grid */}
      <section style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '32px' }}>
          {MODELS.map(model => (
            <div
              key={model.title}
              style={{
                background: 'var(--theme-card-bg)',
                borderRadius: '24px',
                padding: '36px',
                border: '1px solid var(--theme-card-border)',
                boxShadow: 'var(--theme-shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px' }}>
                  <Handshake size={20} style={{ color: '#3B82F6' }} />
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--theme-text-main)' }}>{model.title}</h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--theme-text-sub)', lineHeight: 1.6, marginBottom: '24px' }}>{model.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {model.benefits.map(b => (
                    <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--theme-text-sub)', fontWeight: 550 }}>
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

      {/* Ecosystem Categories Grid */}
      <section style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--theme-text-main)' }}>Who Partners With Us?</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--theme-text-sub)', marginTop: '12px' }}>A diverse ecosystem built for professionals scaling Indian businesses.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {ECOSYSTEM_CATEGORIES.map(cat => (
            <div
              key={cat.name}
              style={{
                background: 'var(--theme-card-bg)',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid var(--theme-card-border)',
                boxShadow: 'var(--theme-shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#3b82f6' }}>{cat.name}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--theme-text-sub)', lineHeight: 1.5 }}>{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Form */}
      <section id="apply" style={{ padding: '40px 20px', maxWidth: '600px', margin: '40px auto 0' }}>
        <div style={{ background: 'var(--theme-card-bg)', borderRadius: '24px', padding: '40px', border: '1px solid var(--theme-card-border)', boxShadow: 'var(--theme-shadow-card)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--theme-text-main)', textAlign: 'center', marginBottom: '8px' }}>Apply for Partnership</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--theme-text-sub)', textAlign: 'center', marginBottom: '32px' }}>Submit details to start a partnership conversation with our business development leads.</p>

          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ display: 'inline-flex', background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', padding: '16px', borderRadius: '50%', marginBottom: '16px' }}>
                <CheckCircle2 size={40} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--theme-text-main)', marginBottom: '8px' }}>Application Submitted!</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--theme-text-sub)', maxWidth: '320px', margin: '0 auto 24px', lineHeight: 1.5 }}>
                Thank you! Your partnership request has been recorded. Our Business Development team will reach out to you within 24 hours.
              </p>
              <button onClick={() => setStatus('idle')} className="btn btn-purple">Submit Another Application</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="responsive-grid-2" style={{ gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '6px', color: 'var(--theme-text-main)' }}>Your Name</label>
                  <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--theme-input-border)', background: 'var(--theme-input-bg)', color: 'var(--theme-text-main)', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '6px', color: 'var(--theme-text-main)' }}>Company Name</label>
                  <input required type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--theme-input-border)', background: 'var(--theme-input-bg)', color: 'var(--theme-text-main)', outline: 'none' }} />
                </div>
              </div>
              
              <div className="responsive-grid-2" style={{ gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '6px', color: 'var(--theme-text-main)' }}>Work Email</label>
                  <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--theme-input-border)', background: 'var(--theme-input-bg)', color: 'var(--theme-text-main)', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '6px', color: 'var(--theme-text-main)' }}>Phone Number (Optional)</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--theme-input-border)', background: 'var(--theme-input-bg)', color: 'var(--theme-text-main)', outline: 'none' }} placeholder="+91 98765 43210" />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '6px', color: 'var(--theme-text-main)' }}>Partnership Model</label>
                <select value={formData.model} onChange={(e) => setFormData({ ...formData, model: e.target.value })} style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--theme-input-border)', background: 'var(--theme-input-bg)', color: 'var(--theme-text-main)', outline: 'none' }}>
                  <option>Referral Partner</option>
                  <option>Implementation Partner</option>
                  <option>White Label Reseller</option>
                </select>
              </div>

              {status === 'error' && (
                <div style={{ color: '#EF4444', fontSize: '0.82rem', fontWeight: 600 }}>
                  ✕ {errorMsg || 'Failed to submit. Please try again.'}
                </div>
              )}

              <button type="submit" disabled={status === 'sending'} className="btn btn-purple" style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}>
                {status === 'sending' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" style={{ marginRight: '8px' }} />
                    Submitting request...
                  </>
                ) : (
                  'Submit Partnership Request'
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
