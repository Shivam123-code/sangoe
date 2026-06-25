'use client';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, Calendar, ArrowUpRight, Award, Newspaper, Star } from 'lucide-react';
import Link from 'next/link';

const NEWS_CATEGORIES = [
  { title: 'Product Releases', desc: 'Announcements of new core clouds and module expansions.', count: '14 items', icon: Star, color: '#7c3aed' },
  { title: 'New Features', desc: 'Updates on AI copilot prompts, automation rules, and analytics.', count: '28 items', icon: Award, color: '#10b981' },
  { title: 'Strategic Partnerships', desc: 'Collaborations with implementation agencies and certification bodies.', count: '8 items', icon: Newspaper, color: '#3b82f6' },
  { title: 'Funding News', desc: 'Investment rounds, growth metrics, and roadmap plans.', count: '2 items', icon: Calendar, color: '#f59e0b' },
  { title: 'Awards & Recognition', desc: 'National and global badges, reviews, and corporate listings.', count: '5 items', icon: Award, color: '#ec4899' },
  { title: 'Company Updates', desc: 'Hiring announcements, office expansion, and board reports.', count: '12 items', icon: Star, color: '#6366f1' },
];

const DOWNLOADS = [
  { label: 'Company Logo Pack', size: '2.4 MB', file: '/logos/1.png', format: 'PNG, SVG, EPS' },
  { label: 'Brand Guidelines', size: '4.8 MB', file: '#', format: 'PDF Document' },
  { label: 'Leadership Profile Photos', size: '15.6 MB', file: '#', format: 'High-Res ZIP' },
  { label: 'Product Console Screenshots', size: '8.2 MB', file: '#', format: 'Dashboard PNGs' },
  { label: 'Complete Media Kit 2026', size: '22.1 MB', file: '#', format: 'Full Bundle ZIP' }
];

const PRESS_RELEASES = [
  { date: 'June 18, 2026', title: 'Sangoe Launches Compliance Control Tower™ for MSME Regulatory Assurance', category: 'Product Releases' },
  { date: 'May 22, 2026', title: 'Sangoe Partner Network Exceeds 100 Certified Consultants Across India', category: 'Strategic Partnerships' },
  { date: 'April 09, 2026', title: 'Sangoe Named "Top Business OS Platform of 2026" by Trustpilot Research', category: 'Awards & Recognition' },
  { date: 'March 15, 2026', title: 'Sangoe Integrates QuickVerification™ background check API into Core HRMS Cloud', category: 'New Features' }
];

const EXTERNAL_MEDIA = [
  { outlet: 'YourStory', date: 'June 12, 2026', title: 'How Sangoe is helping Indian MSMEs transition from founder dependency to IPO readiness.', link: '#' },
  { outlet: 'The Economic Times', date: 'May 04, 2026', title: 'Startups in 2026 focus on integrated business OS platforms over fragmented SaaS bills.', link: '#' },
  { outlet: 'Business Standard', date: 'March 28, 2026', title: 'Regulatory automation emerges as a core requirement for growth-stage enterprises.', link: '#' }
];

export default function MediaPressPage() {
  return (
    <div style={{ paddingTop: '0', minHeight: '100vh', background: 'var(--theme-bg)', color: 'var(--theme-text-main)' }}>
      
      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #090e1a 0%, #111b33 50%, #18284c 100%)', overflow: 'hidden', padding: '120px 20px 90px' }}>
        <div style={{ position: 'absolute', top: '-130px', right: '-80px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <motion.span className="tag tag-dark" style={{ marginBottom: '24px', display: 'inline-block' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Newsroom</motion.span>
          <motion.h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 950, color: '#ffffff', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
            Stay Connected With<br />
            <span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Sangoe News &amp; Updates</span>
          </motion.h1>
          <motion.p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: '680px', margin: '0 auto' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            Company announcements, product launches, partnerships, awards, and strategic business insights from India's Business Growth Operating System.
          </motion.p>
        </div>
      </section>

      {/* Latest News Grid */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 800, color: '#7c3aed', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>Categories</span>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--theme-text-main)' }}>Explore News &amp; Media Coverage</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {NEWS_CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            return (
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
                  transition: 'transform 0.2s',
                  position: 'relative'
                }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: `${cat.color}10`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={20} color={cat.color} />
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 850, color: 'var(--theme-text-main)' }}>{cat.title}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--theme-text-sub)', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>{cat.desc}</p>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: cat.color }}>{cat.count}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Press Releases & In the News */}
      <section style={{ background: 'var(--theme-bg-secondary)', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>
          
          {/* Press releases */}
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--theme-text-main)', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#7c3aed' }} />
              Press Releases
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {PRESS_RELEASES.map((pr, i) => (
                <div key={i} style={{ background: 'var(--theme-card-bg)', border: '1px solid var(--theme-card-border)', borderRadius: '16px', padding: '24px', boxShadow: 'var(--theme-shadow-card)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', fontSize: '0.72rem', color: '#7c3aed', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px' }}>
                    <span>{pr.category}</span>
                    <span style={{ color: 'var(--theme-text-sub)' }}>{pr.date}</span>
                  </div>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--theme-text-main)', lineHeight: 1.4, margin: 0 }}>
                    {pr.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* External Media */}
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--theme-text-main)', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6' }} />
              In The News
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {EXTERNAL_MEDIA.map((em, i) => (
                <a
                  key={i}
                  href={em.link}
                  style={{
                    background: 'var(--theme-card-bg)',
                    border: '1px solid var(--theme-card-border)',
                    borderRadius: '16px',
                    padding: '24px',
                    display: 'block',
                    textDecoration: 'none',
                    boxShadow: 'var(--theme-shadow-card)',
                    transition: 'border-color 0.2s'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', fontSize: '0.72rem', color: '#3b82f6', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px' }}>
                    <span>{em.outlet}</span>
                    <span style={{ color: 'var(--theme-text-sub)' }}>{em.date}</span>
                  </div>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--theme-text-main)', lineHeight: 1.4, margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {em.title} <ArrowUpRight size={14} style={{ opacity: 0.6 }} />
                  </h4>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Press Resources Downloads */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 800, color: '#7c3aed', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>Press Resources</span>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--theme-text-main)' }}>Download Brand Assets</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {DOWNLOADS.map((dl, i) => (
            <div
              key={i}
              style={{
                background: 'var(--theme-card-bg)',
                border: '1px solid var(--theme-card-border)',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                boxShadow: 'var(--theme-shadow-card)'
              }}
            >
              <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--theme-text-main)' }}>{dl.label}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--theme-text-sub)', fontWeight: 600 }}>
                <span>{dl.format}</span>
                <span>{dl.size}</span>
              </div>
              <a
                href={dl.file}
                download
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  color: '#7c3aed',
                  textDecoration: 'none',
                  marginTop: '6px'
                }}
              >
                <Download size={14} /> Download File
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* PR Contact Information */}
      <section style={{ background: 'var(--theme-bg-secondary)', padding: '80px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--theme-card-bg)', border: '1px solid var(--theme-card-border)', borderRadius: '24px', padding: '48px 40px', textAlign: 'center', boxShadow: 'var(--theme-shadow-card)' }}>
          <span style={{ textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 800, color: '#7c3aed', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>Media Contacts</span>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--theme-text-main)', marginBottom: '12px' }}>Connect With Our PR Team</h2>
          <p style={{ color: 'var(--theme-text-sub)', lineHeight: 1.6, maxWidth: '520px', margin: '0 auto 36px', fontSize: '0.95rem' }}>
            Are you a journalist or business analyst looking for interviews, quotes, or custom reports? Reach out directly.
          </p>
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={16} color="#7c3aed" />
              <a href="mailto:press@sangoe.in" style={{ fontSize: '0.9rem', color: 'var(--theme-text-main)', fontWeight: 700, textDecoration: 'none' }}>
                press@sangoe.in
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={16} color="#7c3aed" />
              <span style={{ fontSize: '0.9rem', color: 'var(--theme-text-main)', fontWeight: 700 }}>
                +91 (80) 4125-9844
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
