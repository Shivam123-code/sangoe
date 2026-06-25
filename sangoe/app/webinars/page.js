'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Video, Clock, CheckCircle2, ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

const UPCOMING = [
  { title: 'AI for Business Leaders', date: 'July 08, 2026', time: '11:00 AM IST', speaker: 'Sunil Kumar (AI Lead)', desc: 'How to deploy role-based business co-pilots and predict operational compliance risks.' },
  { title: 'CRM & Sales Best Practices', date: 'July 14, 2026', time: '3:00 PM IST', speaker: 'Neha Sharma (VP Growth)', desc: 'Connecting lead pipelines directly to projects to eliminate delivery hand-off friction.' },
  { title: 'HR Digital Transformation', date: 'July 22, 2026', time: '2:00 PM IST', speaker: 'Amit Sen (HR Specialist)', desc: 'Transitioning payroll, leaves, and biometric check-ins to a unified dashboard.' },
  { title: 'Business Process Automation', date: 'July 29, 2026', time: '4:00 PM IST', speaker: 'Rajiv Mehta (Consultant)', desc: 'Designing custom SOP blueprints and delegation matrices that run automatically.' }
];

const ONDEMAND = [
  { title: 'Compliance & Tax Readiness', duration: '45 mins', category: 'Compliance', speaker: 'Priya Gopal (CA, CS)', views: '1,240 views' },
  { title: 'ESG Reporting Simplified', duration: '50 mins', category: 'ESG', speaker: 'Dr. Suresh Ray (ESG Specialist)', views: '840 views' },
  { title: 'Sales Productivity Strategies', duration: '35 mins', category: 'Productivity', speaker: 'Neha Sharma (VP Growth)', views: '2,100 views' },
  { title: 'Data-Driven Decision Making', duration: '40 mins', category: 'Operations', speaker: 'Rajiv Mehta (Consultant)', views: '1,560 views' }
];

const CATEGORIES = [
  'All', 'AI & Automation', 'CRM', 'HR & Payroll', 'Finance & Compliance', 'Operations & ESG'
];

const SPEAKERS = [
  { name: 'Sunil Kumar', role: 'AI Lead', desc: 'Ex-AI Architect at Google, specializes in conversational database query modeling.', image: '🤖' },
  { name: 'Neha Sharma', role: 'VP Growth', desc: '12+ years consulting startups and mid-sized enterprises on CRM scaling pipelines.', image: '📈' },
  { name: 'Rajiv Mehta', role: 'Business Consultant', desc: 'Specialist in MSME transformation and founder-dependency mitigation systems.', image: '💼' },
  { name: 'Priya Gopal', role: 'CA & CS compliance lead', desc: 'Corporate governance auditor, guides companies on board procedures and IPO pathways.', image: '🏛️' }
];

export default function WebinarsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div style={{ paddingTop: '0', minHeight: '100vh', background: 'var(--theme-bg)', color: 'var(--theme-text-main)' }}>
      
      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #020c1a 0%, #0d1e3d 50%, #152c5c 100%)', overflow: 'hidden', padding: '120px 20px 90px' }}>
        <div style={{ position: 'absolute', top: '-130px', right: '-80px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <motion.span className="tag tag-dark" style={{ marginBottom: '24px', display: 'inline-block' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Knowledge Center</motion.span>
          <motion.h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 950, color: '#ffffff', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
            Learn From Our<br />
            <span style={{ background: 'linear-gradient(135deg, #c084fc 0%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Industry Experts</span>
          </motion.h1>
          <motion.p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: '680px', margin: '0 auto' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            Join live masterclasses and browse on-demand video libraries covering AI automation, compliance audits, business process documentation, and scale leadership.
          </motion.p>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 800, color: '#7c3aed', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>Live Events</span>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--theme-text-main)' }}>Upcoming Masterclasses</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {UPCOMING.map((w, i) => (
            <div
              key={i}
              style={{
                background: 'var(--theme-card-bg)',
                border: '1px solid var(--theme-card-border)',
                borderRadius: '20px',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                boxShadow: 'var(--theme-shadow-card)',
                transition: 'border-color 0.2s'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', fontSize: '0.75rem', color: '#7c3aed', fontWeight: 800 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={13} /> {w.date}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={13} /> {w.time}</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 850, color: 'var(--theme-text-main)', lineHeight: 1.35, margin: 0 }}>{w.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--theme-text-sub)', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>{w.desc}</p>
              <div style={{ borderTop: '1px solid var(--theme-card-border)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--theme-text-sub)', fontWeight: 650 }}>By {w.speaker.split(' ')[0]}</span>
                <Link href="/contact?subject=Webinar Registration" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', fontWeight: 800, color: '#7c3aed', textDecoration: 'none' }}>
                  Register <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* On Demand Library */}
      <section style={{ background: 'var(--theme-bg-secondary)', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 800, color: '#7c3aed', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>Video Library</span>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--theme-text-main)' }}>On-Demand Webinars</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {ONDEMAND.map((od, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--theme-card-bg)',
                  border: '1px solid var(--theme-card-border)',
                  borderRadius: '20px',
                  padding: '24px',
                  boxShadow: 'var(--theme-shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px'
                }}
              >
                {/* Mock Video Thumbnail */}
                <div style={{ background: 'linear-gradient(135deg, #130a35 0%, #1e114f 100%)', height: '140px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
                    <Play size={16} fill="#7c3aed" color="#7c3aed" style={{ marginLeft: '2px' }} />
                  </div>
                  <span style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.7)', padding: '3px 8px', borderRadius: '4px', fontSize: '0.62rem', color: '#ffffff', fontWeight: 700 }}>
                    {od.duration}
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', color: '#7c3aed', background: 'rgba(124,58,237,0.06)', padding: '3px 8px', borderRadius: '40px', display: 'inline-block', marginBottom: '8px' }}>
                    {od.category}
                  </span>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--theme-text-main)', lineHeight: 1.4, margin: '0 0 6px 0' }}>{od.title}</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--theme-text-sub)', fontWeight: 600 }}>
                    <span>By {od.speaker}</span>
                    <span>{od.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Profile Section */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 800, color: '#7c3aed', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>Presenters</span>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--theme-text-main)' }}>Meet The Speakers</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {SPEAKERS.map((sp, i) => (
            <div
              key={i}
              style={{
                background: 'var(--theme-card-bg)',
                border: '1px solid var(--theme-card-border)',
                borderRadius: '24px',
                padding: '32px 24px',
                textAlign: 'center',
                boxShadow: 'var(--theme-shadow-card)'
              }}
            >
              <div style={{ fontSize: '3rem', lineHeight: 1, marginBottom: '16px' }}>{sp.image}</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 850, color: 'var(--theme-text-main)', marginBottom: '4px' }}>{sp.name}</h3>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '12px' }}>{sp.role}</div>
              <p style={{ fontSize: '0.8rem', color: 'var(--theme-text-sub)', lineHeight: 1.6, margin: 0 }}>{sp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ background: 'var(--theme-bg-secondary)', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--theme-text-main)', marginBottom: '16px' }}>
            Learn How to Transform Your Business
          </h2>
          <p style={{ color: 'var(--theme-text-sub)', lineHeight: 1.6, maxWidth: '520px', margin: '0 auto 32px' }}>
            Book a slot for our next upcoming live session or sync with our consulting desk.
          </p>
          <Link href="/contact" className="btn btn-purple" style={{ padding: '14px 28px' }}>
            Reserve Your Seat Now
          </Link>
        </div>
      </section>

    </div>
  );
}
