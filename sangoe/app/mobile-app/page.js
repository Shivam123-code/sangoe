'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Apple, Play, Smartphone, CheckCircle, ShieldCheck,
  Bell, Award, Sparkles, LayoutDashboard, ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const FEATURES = [
  { title: 'CRM on Mobile', desc: 'Add leads, update client pipelines, and record meeting outcomes directly on site.' },
  { title: 'Biometric Attendance', desc: 'Check in with geo-fencing limits and record attendance logs instantly.' },
  { title: 'Leave Requests', desc: 'Submit leave applications and track approval cycles directly.' },
  { title: 'Expense Claims', desc: 'Upload receipt snaps and submit travel bills for manager audit.' },
  { title: 'Project Updates', desc: 'Assign sub-tasks, update milestone parameters, and log progress.' },
  { title: 'Sales Tracking', desc: 'Review daily revenue streams, order closures, and sales stats.' },
  { title: 'Approvals Matrix', desc: 'Managers can approve purchase orders, expenses, and leaves with one tap.' },
  { title: 'Push Notifications', desc: 'Get immediate warnings on pending compliance dates and escalations.' },
  { title: 'Business Dashboard', desc: 'Monitor operational cash flow and gross billings from a pocket cockpit.' },
  { title: 'Real-time Reports', desc: 'Review inventory logs, sales projections, and compliance audits.' },
  { title: 'Inventory Auditing', desc: 'Update raw material levels and scan barcodes directly via phone camera.' },
  { title: 'Customer Support', desc: 'Respond to tickets and log resolutions on field consulting visits.' }
];

const TARGETS = [
  { team: 'Sales Teams', benefit: 'Update lead pipelines and close orders on client visits.' },
  { team: 'HR Teams', benefit: 'Approve leaves, verify attendance check-ins, and manage onboarding.' },
  { team: 'Managers & Leads', benefit: 'Approve operational expenditures, assign tasks, and track milestone velocities.' },
  { team: 'Executives & CEOs', benefit: 'Monitor cash flow, compliance deadlines, and profit analytics.' },
  { team: 'Field Engineers', benefit: 'Log site issues, log maintenance status, and submit safety certificates.' },
  { team: 'Business Owners', benefit: 'Keep absolute control over operations from any remote location.' }
];

const CAROUSEL_SLIDES = [
  {
    title: 'Executive Dashboard',
    desc: 'Real-time corporate metrics, gross billings, and compliance score indicators.',
    component: () => (
      <div style={{ padding: '16px', background: '#0f172a', height: '100%', color: '#ffffff', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 800 }}>FOUNDEROS CONSOLE</div>
        <div style={{ background: '#1e293b', padding: '12px', borderRadius: '10px' }}>
          <div style={{ fontSize: '0.6rem', color: '#94a3b8' }}>Gross Billings</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#10b981' }}>₹48.2 Lakhs</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          <div style={{ background: '#1e293b', padding: '10px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.52rem', color: '#94a3b8' }}>Uptime</div>
            <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#3b82f6' }}>99.9%</div>
          </div>
          <div style={{ background: '#1e293b', padding: '10px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.52rem', color: '#94a3b8' }}>Compliance</div>
            <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#a855f7' }}>98%</div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Mobile CRM Pipeline',
    desc: 'Manage prospective accounts, close orders, and log meetings on site.',
    component: () => (
      <div style={{ padding: '16px', background: '#0f172a', height: '100%', color: '#ffffff', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 800 }}>SALES FUNNEL</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {['Acme Corp (₹1.5L)', 'Matrix Ltd (₹82K)', 'Apex Solutions (₹2.1L)'].map((c, i) => (
            <div key={i} style={{ background: '#1e293b', padding: '10px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 800 }}>{c.split(' ')[0]}</div>
              <span style={{ fontSize: '0.55rem', background: '#7c3aed', padding: '2px 6px', borderRadius: '50px' }}>{c.split(' ')[1]}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: 'Tasks & Milestone Checklist',
    desc: 'Verify assignees, update milestones, and log timesheets on the move.',
    component: () => (
      <div style={{ padding: '16px', background: '#0f172a', height: '100%', color: '#ffffff', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 800 }}>WEEKLY AGENDA</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {['Compliance Review', 'API Deployment', 'Vendor Onboarding'].map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#1e293b', padding: '8px 12px', borderRadius: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: i === 0 ? '#10b981' : '#f59e0b' }} />
              <span style={{ fontSize: '0.65rem', fontWeight: 700 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: 'Geo-Attendance & Check-in',
    desc: 'Biometric card sync and geo-fence restricted attendance verification.',
    component: () => (
      <div style={{ padding: '16px', background: '#0f172a', height: '100%', color: '#ffffff', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(16,185,129,0.1)', border: '1.5px solid #10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
          <Smartphone size={24} color="#10b981" />
        </div>
        <div style={{ fontSize: '0.8rem', fontWeight: 850, color: '#ffffff' }}>Check-in Active</div>
        <div style={{ fontSize: '0.58rem', color: '#94a3b8', textAlign: 'center' }}>Geo-Location: Bangalore Office HQ (Within bounds)</div>
      </div>
    )
  }
];

export default function MobileAppPage() {
  const [slide, setSlide] = useState(0);
  const CurrentComp = CAROUSEL_SLIDES[slide].component;

  return (
    <div style={{ paddingTop: '0', minHeight: '100vh', background: 'var(--theme-bg)', color: 'var(--theme-text-main)' }}>
      
      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #030c1e 0%, #0c1a35 50%, #15284d 100%)', overflow: 'hidden', padding: '120px 20px 90px' }}>
        <div style={{ position: 'absolute', top: '-130px', right: '-80px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <motion.span className="tag tag-dark" style={{ marginBottom: '24px', display: 'inline-block' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Mobile Platform</motion.span>
          <motion.h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 950, color: '#ffffff', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
            Business Management<br />
            <span style={{ background: 'linear-gradient(135deg, #a78bfa 0%, #c084fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>From Your Pocket</span>
          </motion.h1>
          <motion.p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: '680px', margin: '0 auto 40px' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            Manage leaves, log field sales deals, verify biometric check-ins, upload receipts, and check executive cash flow reports anywhere. Available for iOS and Android devices.
          </motion.p>
          
          {/* Store Download Badges */}
          <motion.div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#000000', border: '1px solid #2d3748', borderRadius: '10px', padding: '8px 20px', color: '#ffffff', textDecoration: 'none' }}>
              <Apple size={20} fill="#ffffff" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.62rem', color: '#a0aec0', lineHeight: 1 }}>Download on the</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800 }}>App Store</div>
              </div>
            </a>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#000000', border: '1px solid #2d3748', borderRadius: '10px', padding: '8px 20px', color: '#ffffff', textDecoration: 'none' }}>
              <Play size={18} fill="#ffffff" color="#ffffff" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.62rem', color: '#a0aec0', lineHeight: 1 }}>GET IT ON</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800 }}>Google Play</div>
              </div>
            </a>
          </motion.div>

        </div>
      </section>

      {/* Screen Carousel Section */}
      <section style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', alignItems: 'center' }}>
          
          {/* Interactive Mobile outline */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '240px',
              height: '460px',
              background: '#090d16',
              border: '8px solid #1f2937',
              borderRadius: '36px',
              position: 'relative',
              boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Speaker / Notch */}
              <div style={{ width: '90px', height: '14px', background: '#1f2937', borderRadius: '0 0 10px 10px', position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 10 }} />
              
              {/* Content viewport */}
              <div style={{ flex: 1, paddingTop: '14px' }}>
                <CurrentComp />
              </div>

              {/* Bottom bar pill */}
              <div style={{ width: '70px', height: '3px', background: '#1f2937', borderRadius: '10px', position: 'absolute', bottom: '6px', left: '50%', transform: 'translateX(-50%)' }} />
            </div>
          </div>

          {/* Details column */}
          <div>
            <span style={{ textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 800, color: '#7c3aed', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>Interactive Screens</span>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--theme-text-main)', marginBottom: '24px' }}>Explore The Console App</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {CAROUSEL_SLIDES.map((slideItem, idx) => (
                <button
                  key={idx}
                  onClick={() => setSlide(idx)}
                  style={{
                    textAlign: 'left',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    border: '1px solid',
                    background: slide === idx ? 'rgba(124,58,237,0.06)' : 'var(--theme-card-bg)',
                    color: 'var(--theme-text-main)',
                    borderColor: slide === idx ? '#7c3aed' : 'var(--theme-card-border)',
                    boxShadow: 'var(--theme-shadow-card)'
                  }}
                >
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: slide === idx ? '#7c3aed' : 'var(--theme-text-main)', marginBottom: '4px' }}>{slideItem.title}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--theme-text-sub)', lineHeight: 1.4 }}>{slideItem.desc}</div>
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Features Grid */}
      <section style={{ background: 'var(--theme-bg-secondary)', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 800, color: '#7c3aed', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>App Capabilities</span>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--theme-text-main)' }}>Mobile Features</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {FEATURES.map((feat, i) => (
              <div key={i} style={{ background: 'var(--theme-card-bg)', border: '1px solid var(--theme-card-border)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px', boxShadow: 'var(--theme-shadow-card)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={15} color="#7c3aed" />
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--theme-text-main)', margin: 0 }}>{feat.title}</h3>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--theme-text-sub)', lineHeight: 1.5, margin: 0 }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Designed for every team */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 800, color: '#7c3aed', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>Users</span>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--theme-text-main)' }}>Designed For Every Team</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {TARGETS.map((t, i) => (
            <div key={i} style={{ background: 'var(--theme-card-bg)', border: '1px solid var(--theme-card-border)', borderRadius: '20px', padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '12px', boxShadow: 'var(--theme-shadow-card)' }}>
              <div style={{ fontSize: '1.05rem', fontWeight: 850, color: 'var(--theme-text-main)' }}>{t.team}</div>
              <p style={{ fontSize: '0.82rem', color: 'var(--theme-text-sub)', lineHeight: 1.6, margin: 0 }}>{t.benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ background: 'var(--theme-bg-secondary)', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--theme-text-main)', marginBottom: '16px' }}>
            Download The Sangoe App Today
          </h2>
          <p style={{ color: 'var(--theme-text-sub)', lineHeight: 1.6, maxWidth: '520px', margin: '0 auto 32px' }}>
            Take absolute control over your operational compliance, pipelines, and tasks from anywhere.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/contact" className="btn btn-purple">
              Request Setup Demo
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
