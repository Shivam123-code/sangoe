'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, MessageSquare, ArrowLeft, CheckCircle2, Loader2, X } from 'lucide-react';

/* ── Read all service labels from get-started IDs ── */
function useServiceLabels(ids) {
  const [labels, setLabels] = useState([]);
  useEffect(() => {
    if (!ids?.length) return;
    // Dynamically import service data to resolve IDs → names
    import('@/app/get-started/page').catch(() => null);
    // Fallback: just show IDs humanised
    setLabels(ids.map(id => id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())));
  }, [ids]);
  return labels;
}

/* ════════════════════════════════════════
   CONTACT FORM CONTENT
════════════════════════════════════════ */
function ContactContent() {
  const router = useRouter();
  const params = useSearchParams();

  const plan = params.get('plan') || '';
  const servicesRaw = params.get('services') || '';
  const serviceIds = servicesRaw ? servicesRaw.split(',').filter(Boolean) : [];
  const serviceLabels = useServiceLabels(serviceIds);

  const fromGetStarted = !!plan || serviceIds.length > 0;

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          plan: plan || null,
          services: serviceLabels.length ? serviceLabels : serviceIds,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send');
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  const inputStyle = {
    width: '100%', padding: '10px 14px', borderRadius: '8px',
    border: '1px solid #D1D5DB', outline: 'none', fontSize: '0.88rem',
    fontFamily: 'inherit', transition: 'border-color 0.15s',
  };
  const labelStyle = { fontSize: '0.78rem', fontWeight: 700, display: 'block', marginBottom: '6px', color: '#374151' };

  return (
    <div style={{ paddingTop: '0', minHeight: '100vh', background: '#f9fafb', paddingBottom: '80px' }}>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #080414 0%, #120838 50%, #1a0d4a 100%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-120px', right: '-60px', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '20%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 40px 80px', display: 'flex', alignItems: 'center', gap: '80px', position: 'relative', zIndex: 1 }}>
          <motion.div style={{ flex: '1.1', minWidth: 0 }} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <motion.span className="tag tag-dark" style={{ marginBottom: '20px', display: 'inline-block' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>Contact Us</motion.span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', fontWeight: 950, color: '#ffffff', lineHeight: 1.05, marginBottom: '24px', letterSpacing: '-0.02em' }}>
              Let&apos;s Build a System<br />
              <span style={{ background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #c084fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>That Works For You</span>
            </h1>
            <motion.p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.75, maxWidth: '440px', marginBottom: '36px' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}>
              Have questions about integrations, corporate audits, safety compliance, or custom reselling? Our team responds within 24 hours.
            </motion.p>
            <motion.div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
              <a href="mailto:support@sangoe.in" className="btn btn-purple">Email Our Team</a>
              <a href="tel:02269620896" className="btn btn-outline-white">Call Us</a>
            </motion.div>
            <motion.div style={{ display: 'flex', gap: '32px', marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.08)' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }}>
              {[['<24h', 'Response Time'], ['100%', 'Reply Rate'], ['Free', 'Consultation']].map(([num, label]) => (
                <div key={label}><div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffffff' }}>{num}</div><div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '2px' }}>{label}</div></div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div style={{ flex: '1', minWidth: 0, position: 'relative', flexShrink: 0, maxWidth: '520px' }} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
            <div style={{ position: 'absolute', inset: '-30px', borderRadius: '40px', background: 'radial-gradient(ellipse, rgba(124,58,237,0.3) 0%, transparent 70%)', filter: 'blur(28px)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 40px 80px rgba(0,0,0,0.6)', transform: 'perspective(1200px) rotateY(-8deg) rotateX(3deg)' }}>
              <Image src="/images/hero_contact.png" alt="Contact Sangoe" width={520} height={360} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
            </div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }} style={{ position: 'absolute', top: '-18px', right: '-18px', background: '#ffffff', borderRadius: '14px', padding: '10px 16px', boxShadow: '0 16px 40px rgba(0,0,0,0.35)', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#111827', whiteSpace: 'nowrap' }}>Response in &lt;24h</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Main Grid ── */}
      <section className="responsive-grid-split" style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto', gap: '48px' }}>

        {/* LEFT: Form */}
        <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}>

          {/* ── Selected Plan & Services (only when arriving from /get-started) ── */}
          {fromGetStarted && (
            <div style={{ background: '#F5F3FF', border: '1px solid #DDD6FE', borderRadius: '14px', padding: '16px 18px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Your Selection
                </span>
                <Link
                  href={`/get-started?plan=${plan}&services=${servicesRaw}`}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '4px',
                    fontSize: '0.72rem', fontWeight: 700, color: '#7C3AED',
                    textDecoration: 'none', padding: '4px 10px',
                    background: '#EDE9FE', borderRadius: '6px',
                    border: '1px solid #C4B5FD',
                    transition: 'background 0.15s',
                  }}
                >
                  <ArrowLeft size={11} /> Change Services
                </Link>
              </div>

              {/* Plan badge */}
              {plan && (
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ display: 'inline-block', background: '#7C3AED', color: '#fff', fontSize: '0.68rem', fontWeight: 800, padding: '3px 10px', borderRadius: '99px', letterSpacing: '0.06em' }}>
                    {plan.toUpperCase()} PLAN
                  </span>
                </div>
              )}

              {/* Services chips — only selected ones */}
              {serviceLabels.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
                  {serviceLabels.map(label => (
                    <span key={label} style={{
                      display: 'inline-flex', alignItems: 'center', gap: '4px',
                      background: '#fff', border: '1px solid #C4B5FD',
                      borderRadius: '6px', padding: '3px 10px',
                      fontSize: '0.73rem', color: '#5B21B6', fontWeight: 600,
                    }}>
                      <CheckCircle2 size={11} color="#7C3AED" />
                      {label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#111827', marginBottom: '24px' }}>Send Us a Message</h3>

          {/* Success state */}
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <CheckCircle2 size={32} color="#10B981" />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>Message Sent!</h4>
              <p style={{ fontSize: '0.88rem', color: '#6B7280', lineHeight: 1.6, marginBottom: '20px' }}>
                Thank you! Our team will get back to you at <strong>{formData.email || 'your email'}</strong> within 24 hours.
              </p>
              <button onClick={() => setStatus('idle')} style={{ padding: '8px 20px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem' }}>
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

              <div>
                <label style={labelStyle}>Full Name *</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} style={inputStyle} placeholder="John Doe" />
              </div>

              <div className="responsive-grid-2" style={{ gap: '16px' }}>
                <div>
                  <label style={labelStyle}>Work Email *</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} style={inputStyle} placeholder="john@company.com" />
                </div>
                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} style={inputStyle} placeholder="+91 98765 43210" />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Company Name</label>
                <input type="text" value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} style={inputStyle} placeholder="Acme Pvt. Ltd." />
              </div>

              <div>
                <label style={labelStyle}>Your Message / Requirements *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  placeholder="Tell us about your business needs..."
                />
              </div>

              {status === 'error' && (
                <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '8px', padding: '10px 14px', fontSize: '0.82rem', color: '#991B1B', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <X size={14} /> {errorMsg || 'Something went wrong. Please try again.'}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-purple"
                style={{ width: '100%', justifyContent: 'center', marginTop: '6px', opacity: status === 'sending' ? 0.7 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}
              >
                {status === 'sending' ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> Sending…
                  </span>
                ) : 'Send Enquiry →'}
              </button>
            </form>
          )}
        </div>

        {/* RIGHT: Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 750, color: '#111827', marginBottom: '16px' }}>Quick Communications</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: '#7C3AED', display: 'flex', padding: '8px', background: '#F5F3FF', borderRadius: '8px' }}>
                  <Mail size={18} />
                </span>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 700 }}>Support / Sales</div>
                  <a href="mailto:support@sangoe.in" style={{ fontSize: '0.9rem', color: '#7C3AED', fontWeight: 600 }}>support@sangoe.in</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: '#10B981', display: 'flex', padding: '8px', background: '#ECFDF5', borderRadius: '8px' }}>
                  <MessageSquare size={18} />
                </span>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 700 }}>Phone Support</div>
                  <a href="tel:02269620896" style={{ fontSize: '0.9rem', color: '#10B981', fontWeight: 600 }}>022 69620896</a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '24px' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 750, color: '#111827', marginBottom: '16px' }}>Office Address</h4>
            <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.6 }}>
              TCP, S18, Vashi, Navi Mumbai,<br />Maharashtra-400703
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
      <ContactContent />
    </Suspense>
  );
}
