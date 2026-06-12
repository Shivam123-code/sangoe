'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, Target, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f9fafb', paddingBottom: '80px' }}>
      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #030714 0%, #0a1a3a 50%, #0d1f45 100%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-120px', right: '-60px', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '10%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 40px 80px', display: 'flex', alignItems: 'center', gap: '80px', position: 'relative', zIndex: 1 }}>
          <motion.div style={{ flex: '1.1', minWidth: 0 }} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <motion.span className="tag tag-dark" style={{ marginBottom: '20px', display: 'inline-block' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>Our Mission</motion.span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', fontWeight: 950, color: '#ffffff', lineHeight: 1.05, marginBottom: '24px', letterSpacing: '-0.02em' }}>
              We Empower Businesses<br />
              <span style={{ background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>To Run Without Chaos</span>
            </h1>
            <motion.p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.75, maxWidth: '440px', marginBottom: '36px' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}>
              Sangoe was founded to resolve operational dependency, improve corporate governance, and help businesses transition from chaos to clarity.
            </motion.p>
            <motion.div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
              <Link href="/contact" className="btn btn-purple">Book a Demo</Link>
              <Link href="/platform" className="btn btn-outline-white">See the Platform</Link>
            </motion.div>
            <motion.div style={{ display: 'flex', gap: '32px', marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.08)' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }}>
              {[['2023', 'Founded'], ['100+', 'Businesses'], ['9', 'Cloud Modules']].map(([num, label]) => (
                <div key={label}><div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffffff' }}>{num}</div><div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '2px' }}>{label}</div></div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div style={{ flex: '1', minWidth: 0, position: 'relative', flexShrink: 0, maxWidth: '520px' }} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
            <div style={{ position: 'absolute', inset: '-30px', borderRadius: '40px', background: 'radial-gradient(ellipse, rgba(124,58,237,0.28) 0%, transparent 70%)', filter: 'blur(28px)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 40px 80px rgba(0,0,0,0.6)', transform: 'perspective(1200px) rotateY(-8deg) rotateX(3deg)' }}>
              <Image src="/images/hero_about.png" alt="Sangoe team vision" width={520} height={360} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(3,7,20,0.2) 0%, transparent 60%)' }} />
            </div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }} style={{ position: 'absolute', top: '-18px', right: '-18px', background: '#ffffff', borderRadius: '14px', padding: '10px 16px', boxShadow: '0 16px 40px rgba(0,0,0,0.35)', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b', flexShrink: 0 }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#111827', whiteSpace: 'nowrap' }}>Mission-Driven Team</span>
            </motion.div>
            <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1.2 }} style={{ position: 'absolute', bottom: '-18px', left: '-18px', background: 'linear-gradient(135deg, #7c3aed, #4c1d95)', borderRadius: '14px', padding: '12px 18px', boxShadow: '0 16px 40px rgba(124,58,237,0.45)', zIndex: 10 }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff' }}>100+</div>
              <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>Businesses Served</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div className="responsive-grid-2" style={{ gap: '40px' }}>
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
        <div className="responsive-grid-3" style={{ gap: '24px' }}>
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
