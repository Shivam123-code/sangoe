'use client';
import { useState } from 'react';
import { Mail, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your enquiry has been received. Our sales engineer will get in touch with you shortly.`);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f9fafb', paddingBottom: '80px' }}>
      {/* Header */}
      <section style={{ padding: '80px 20px', textAlign: 'center', background: 'linear-gradient(180deg, #EFF6FF 0%, #F5F3FF 60%, #F9FAFB 100%)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="tag" style={{ marginBottom: '16px', color: '#7c3aed', background: '#f5f3ff', borderColor: '#c4b5fd' }}>Contact us</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 900, color: '#111827', lineHeight: 1.1, marginBottom: '20px' }}>
            Let&apos;s Build a System <br />That <span style={{ color: '#7C3AED' }}>Works For You</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#4b5563', lineHeight: 1.7 }}>
            Have questions about integrations, corporate audits, safety compliance, or custom reselling? Write to us.
          </p>
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
                  <a href="mailto:growth@sangoe.in" style={{ fontSize: '0.9rem', color: '#7C3AED', fontWeight: 600 }}>growth@sangoe.in</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: '#10B981', display: 'flex', padding: '8px', background: '#ECFDF5', borderRadius: '8px' }}>
                  <MessageSquare size={18} />
                </span>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 700 }}>WhatsApp Support</div>
                  <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" style={{ fontSize: '0.9rem', color: '#10B981', fontWeight: 600 }}>+91 99999 99999</a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '24px' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 750, color: '#111827', marginBottom: '16px' }}>Office Address</h4>
            <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.6 }}>
              Sangoe Business Growth Technologies Pvt. Ltd.<br />
              WeWork Galaxy, 43, Residency Road,<br />
              Bangalore, Karnataka - 560025, India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
