'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your enquiry has been received. Our sales engineer will get in touch with you shortly.`);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div style={{ paddingTop: '0', minHeight: '100vh', background: '#f9fafb', paddingBottom: '80px' }}>
      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #080414 0%, #120838 50%, #1a0d4a 100%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-120px', right: '-60px', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '20%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
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
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(8,4,20,0.2) 0%, transparent 60%)' }} />
            </div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }} style={{ position: 'absolute', top: '-18px', right: '-18px', background: '#ffffff', borderRadius: '14px', padding: '10px 16px', boxShadow: '0 16px 40px rgba(0,0,0,0.35)', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#111827', whiteSpace: 'nowrap' }}>Response in &lt;24h</span>
            </motion.div>
            <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1.2 }} style={{ position: 'absolute', bottom: '-18px', left: '-18px', background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', borderRadius: '14px', padding: '12px 18px', boxShadow: '0 16px 40px rgba(124,58,237,0.45)', zIndex: 10 }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff' }}>Free</div>
              <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>Consultation</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="responsive-grid-split" style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto', gap: '48px' }}>
        {/* Left: Contact Form */}
        <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#111827', marginBottom: '24px' }}>Send Us a Message</h3>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Full Name</label>
              <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none' }} />
            </div>
            <div className="responsive-grid-2" style={{ gap: '16px' }}>
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Work Email</label>
                <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none' }} />
              </div>
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Phone Number</label>
                <input required type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none' }} />
              </div>
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Your Message / Requirements</label>
              <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none', resize: 'vertical', fontFamily: 'inherit' }} />
            </div>
            <button type="submit" className="btn btn-purple" style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}>
              Send Enquiry
            </button>
          </form>
        </div>

        {/* Right: Quick Contacts & Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 750, color: '#111827', marginBottom: '16px' }}>Quick Communications</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: '#7C3AED', display: 'flex', padding: '8px', background: '#F5F3FF', borderRadius: '8px' }}>
                  <Mail size={18} />
                </span>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 700 }}>Sales Desk</div>
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
              TCP, S18, Vashi, Navi Mumbai,<br />
              Maharashtra-400703
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
