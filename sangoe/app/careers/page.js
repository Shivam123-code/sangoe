'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Briefcase, Heart, GraduationCap, Shield,
  Sparkles, CheckCircle2, ArrowRight, Star,
  Laptop, Activity, Target, Compass
} from 'lucide-react';

const CULTURE_ITEMS = [
  { title: 'Customer First', desc: 'Everything begins with solving real business problems.', icon: Target, color: '#3b82f6' },
  { title: 'Ownership', desc: 'Every employee is empowered to make decisions and drive outcomes.', icon: Compass, color: '#10b981' },
  { title: 'Continuous Learning', desc: 'Innovation starts with curiosity and lifelong learning.', icon: GraduationCap, color: '#f59e0b' },
  { title: 'Integrity', desc: 'Trust is at the core of everything we build.', icon: Shield, color: '#7c3aed' },
  { title: 'Innovation', desc: 'We challenge conventional ways of running businesses.', icon: Sparkles, color: '#ec4899' },
];

const LIFE_BENEFITS = [
  { name: 'Flexible Work Environment', icon: Laptop },
  { name: 'Learning & Certification Programs', icon: GraduationCap },
  { name: 'Health & Wellness Benefits', icon: Activity },
  { name: 'Innovation Days', icon: Sparkles },
  { name: 'Team Offsites', icon: Star },
  { name: 'Career Growth Paths', icon: Target },
];

const DEPARTMENTS = [
  'All', 'Engineering', 'Product', 'UI/UX Design', 'AI & Machine Learning',
  'Business Consulting', 'Sales', 'Marketing', 'Customer Success', 'Human Resources', 'Finance'
];

const OPENINGS = [
  { title: 'Senior Full Stack Engineer', dept: 'Engineering', location: 'Bengaluru / Hybrid', type: 'Full-Time' },
  { title: 'AI Research Scientist', dept: 'AI & Machine Learning', location: 'Bengaluru / Remote', type: 'Full-Time' },
  { title: 'Product Designer (UI/UX)', dept: 'UI/UX Design', location: 'Bengaluru / Hybrid', type: 'Full-Time' },
  { title: 'Technical Product Manager', dept: 'Product', location: 'Bengaluru / Hybrid', type: 'Full-Time' },
  { title: 'Enterprise Sales Director', dept: 'Sales', location: 'Mumbai / Remote', type: 'Full-Time' },
  { title: 'Operations & Process Consultant', dept: 'Business Consulting', location: 'Bengaluru / Hybrid', type: 'Full-Time' },
  { title: 'Growth Marketer', dept: 'Marketing', location: 'Bengaluru / Hybrid', type: 'Full-Time' },
  { title: 'Customer Success Manager', dept: 'Customer Success', location: 'Delhi NCR / Remote', type: 'Full-Time' }
];

const STAGES = [
  { step: '01', title: 'Application', desc: 'Submit your resume and portfolio details.' },
  { step: '02', title: 'Resume Review', desc: 'Our recruiters assess qualifications and fit.' },
  { step: '03', title: 'Functional Assessment', desc: 'Solve a practical, business-aligned case assignment.' },
  { step: '04', title: 'Interviews', desc: 'Engage with engineering, product, or business leads.' },
  { step: '05', title: 'Final Discussion', desc: 'Align on cultural values, compensation, and roadmap.' },
  { step: '06', title: 'Offer & Onboard', desc: 'Welcome to the team that is transforming business OS.' }
];

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState('All');

  const filteredOpenings = activeDept === 'All'
    ? OPENINGS
    : OPENINGS.filter(o => o.dept === activeDept);

  return (
    <div style={{ paddingTop: '0', minHeight: '100vh', background: 'var(--theme-bg)', color: 'var(--theme-text-main)' }}>
      
      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #030c1e 0%, #071a40 50%, #0a2558 100%)', overflow: 'hidden', padding: '120px 20px 90px' }}>
        <div style={{ position: 'absolute', top: '-130px', right: '-80px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <motion.span className="tag tag-dark" style={{ marginBottom: '24px', display: 'inline-block' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Careers at Sangoe</motion.span>
          <motion.h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 950, color: '#ffffff', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
            Build the Future of<br />
            <span style={{ background: 'linear-gradient(135deg, #a78bfa 0%, #c084fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Business Growth</span>
          </motion.h1>
          <motion.p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: '680px', margin: '0 auto 40px' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            Join the team that is redefining how organizations manage operations, compliance, productivity, governance, and scale. Shape the operating system powering tomorrow's businesses.
          </motion.p>
          <motion.div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
            <Link href="#openings" className="btn btn-purple">View Open Positions</Link>
            <Link href="#apply-community" className="btn btn-outline-white">Join Our Talent Community</Link>
          </motion.div>
        </div>
      </section>

      {/* Why work at Sangoe */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <div>
            <span style={{ textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 800, color: '#7c3aed', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>Why Work At Sangoe</span>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--theme-text-main)', marginBottom: '20px' }}>Systems That Change Businesses</h2>
            <p style={{ color: 'var(--theme-text-sub)', lineHeight: 1.75, fontSize: '1rem', marginBottom: '16px' }}>
              At Sangoe, we don't just build software — we build complete business frameworks that help organizations transition from founder-dependent chaos to structured, audit-ready governance.
            </p>
            <p style={{ color: 'var(--theme-text-sub)', lineHeight: 1.75, fontSize: '1rem' }}>
              Whether you are an engineer writing API integrations, a UI designer modeling dashboard widgets, or a consultant structuring standard compliance SOPs, your work directly empowers thousands of businesses to grow cleanly.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            {LIFE_BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} style={{ background: 'var(--theme-card-bg)', border: '1px solid var(--theme-card-border)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', boxShadow: 'var(--theme-shadow-card)' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(124,58,237,0.06)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center' }}>
                    <Icon size={18} color="#7c3aed" />
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--theme-text-main)', lineHeight: 1.4 }}>{b.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section style={{ background: 'var(--theme-bg-secondary)', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 800, color: '#7c3aed', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>Our Values</span>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--theme-text-main)' }}>The Culture We Stand By</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {CULTURE_ITEMS.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} style={{ background: 'var(--theme-card-bg)', border: '1px solid var(--theme-card-border)', borderRadius: '20px', padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: 'var(--theme-shadow-card)', borderTop: `3px solid ${c.color}` }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: `${c.color}10`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={20} color={c.color} />
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 850, color: 'var(--theme-text-main)' }}>{c.title}</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--theme-text-sub)', lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 800, color: '#7c3aed', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>How We Hire</span>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--theme-text-main)' }}>Our Hiring Journey</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {STAGES.map((s, i) => (
            <div key={i} style={{ position: 'relative', background: 'var(--theme-card-bg)', border: '1px solid var(--theme-card-border)', borderRadius: '20px', padding: '32px 24px', boxShadow: 'var(--theme-shadow-card)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 950, color: 'rgba(124,58,237,0.12)', lineHeight: 1, marginBottom: '12px' }}>{s.step}</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--theme-text-main)', marginBottom: '8px' }}>{s.title}</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--theme-text-sub)', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Openings listing */}
      <section id="openings" style={{ background: 'var(--theme-bg-secondary)', padding: '80px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span style={{ textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 800, color: '#7c3aed', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>Open Roles</span>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--theme-text-main)', marginBottom: '16px' }}>Current Openings</h2>
            
            {/* Filter buttons */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '24px' }}>
              {DEPARTMENTS.map(dept => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '50px',
                    fontSize: '0.78rem',
                    fontWeight: 750,
                    cursor: 'pointer',
                    border: '1px solid',
                    transition: 'all 0.2s',
                    background: activeDept === dept ? '#7c3aed' : 'var(--theme-card-bg)',
                    color: activeDept === dept ? '#ffffff' : 'var(--theme-text-sub)',
                    borderColor: activeDept === dept ? '#7c3aed' : 'var(--theme-card-border)'
                  }}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {filteredOpenings.length > 0 ? (
              filteredOpenings.map((op, i) => (
                <div
                  key={i}
                  style={{
                    background: 'var(--theme-card-bg)',
                    border: '1px solid var(--theme-card-border)',
                    borderRadius: '16px',
                    padding: '24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '20px',
                    flexWrap: 'wrap',
                    boxShadow: 'var(--theme-shadow-card)',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--theme-text-main)', marginBottom: '6px' }}>{op.title}</h3>
                    <div style={{ display: 'flex', gap: '12px', fontSize: '0.78rem', color: 'var(--theme-text-sub)', fontWeight: 600 }}>
                      <span>{op.dept}</span>
                      <span>•</span>
                      <span>{op.location}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', background: 'rgba(124,58,237,0.06)', color: '#7c3aed', padding: '4px 10px', borderRadius: '50px', letterSpacing: '0.04em' }}>
                      {op.type}
                    </span>
                    <Link
                      href="/contact?subject=Careers Application"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.82rem',
                        fontWeight: 800,
                        color: '#7c3aed',
                        textDecoration: 'none'
                      }}
                    >
                      Apply Now <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '48px', color: 'var(--theme-text-sub)', background: 'var(--theme-card-bg)', borderRadius: '16px', border: '1px solid var(--theme-card-border)' }}>
                No active openings in this department right now. Please check back later or join our talent community.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Talent community CTA */}
      <section id="apply-community" style={{ padding: '80px 20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--theme-text-main)', marginBottom: '16px' }}>Build Something Meaningful.</h2>
        <p style={{ color: 'var(--theme-text-sub)', lineHeight: 1.6, maxWidth: '560px', margin: '0 auto 32px' }}>
          Don't see an open position that fits? Join our talent community, and we'll reach out when a matching role opens up.
        </p>
        <Link
          href="mailto:careers@sangoe.in?subject=Talent Community Application"
          className="btn btn-purple"
          style={{ padding: '14px 28px' }}
        >
          Send Resume to careers@sangoe.in
        </Link>
      </section>
    </div>
  );
}
