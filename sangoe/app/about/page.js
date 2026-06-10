'use client';
import { motion } from 'framer-motion';
import { Eye, Target, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f9fafb', paddingBottom: '80px' }}>
      {/* Header */}
      <section style={{ padding: '80px 20px', textAlign: 'center', background: 'linear-gradient(180deg, #F5F3FF 0%, #EFF6FF 60%, #F9FAFB 100%)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="tag" style={{ marginBottom: '16px' }}>Our mission</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 950, color: '#111827', lineHeight: 1.1, marginBottom: '20px' }}>
            We Empower Businesses <br />To <span style={{ color: '#7C3AED' }}>Run Without Chaos</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#4b5563', lineHeight: 1.7 }}>
            Sangoe was founded to resolve operational dependency, improve corporate governance, and help businesses scale.
          </p>
        </div>
      </section>

      {/* Vision and Mission */}
      <section style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px', border: '1px solid rgba(0,0,0,0.04)', boxShadow: '0 4px 20px rgba(0,0,0,0.008)' }}>
            <span style={{ display: 'inline-flex', color: '#7C3AED', background: '#F5F3FF', padding: '12px', borderRadius: '16px', marginBottom: '16px' }}>
              <Eye size={28} />
            </span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111827', marginBottom: '12px' }}>Our Vision</h3>
            <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: 1.6 }}>
              To build the world&apos;s most trusted Business Growth Operating System™—enabling systems-driven accountability and clear visibility across all operational levels.
            </p>
          </div>

          <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px', border: '1px solid rgba(0,0,0,0.04)', boxShadow: '0 4px 20px rgba(0,0,0,0.008)' }}>
            <span style={{ display: 'inline-flex', color: '#10B981', background: '#ECFDF5', padding: '12px', borderRadius: '16px', marginBottom: '16px' }}>
              <Target size={28} />
            </span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111827', marginBottom: '12px' }}>Our Mission</h3>
            <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: 1.6 }}>
              To help startups, MSMEs and growing enterprises transition seamlessly from founder-dependent management to scalable, systemized, audit-compliant, and IPO-ready organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#111827', textAlign: 'center', marginBottom: '40px' }}>Our Core Philosophy</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {[
            { title: 'Authority & Trust', desc: 'We maintain absolute legal, regulatory, and financial audit standards in all modules.' },
            { title: 'Simplicity for Teams', desc: 'We build enterprise-grade logic with consumer-grade design simplicity.' },
            { title: 'System over Founders', desc: 'We believe operations must run on clear rules and checklists, not individuals.' }
          ].map((v, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '1.2rem', color: '#7C3AED', fontWeight: 'bold' }}>
                {i + 1}
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>{v.title}</h4>
              <p style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.6 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
