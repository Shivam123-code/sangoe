'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Settings, 
  Cpu, 
  Cloud, 
  MessageSquare,
  CheckCircle2,
  FileCode,
  Smartphone,
  Check
} from 'lucide-react';

const TABS = [
  {
    id: 'founderos',
    label: 'FounderOS™',
    title: 'Your Business Command Center',
    subtitle: 'Build a business that runs without you. View operations from a single screen.',
    bullets: [
      'Real-time cash flow & collections tracking',
      'Unified risk register & compliance alerts',
      'Startup to IPO transition dashboard',
      'Founder workload delegation monitor'
    ],
    icon: LayoutDashboard,
    color: '#7C3AED',
    bg: '#F5F3FF'
  },
  {
    id: 'businessos',
    label: 'Business OS™',
    title: 'Structured Core Operating System',
    subtitle: '9 Connected clouds replacing scattered files and single-purpose SaaS tools.',
    bullets: [
      'Pre-built SOP maps for all departments',
      'Automated approval matrix & workflows',
      'Unified data ecosystem with no duplicates',
      'MSME and enterprise scaling engine'
    ],
    icon: Settings,
    color: '#10B981',
    bg: '#ECFDF5'
  },
  {
    id: 'copilot',
    label: 'AI Co-Pilot™',
    title: 'Ask Your Business Anything',
    subtitle: 'Instant business intelligence and reasoning powered by secure context analysis.',
    bullets: [
      'Ask: "Which projects are delayed and why?"',
      'Ask: "Predict our cash flow gap for next month"',
      'Instant contract & policy risk audit',
      'Voice & WhatsApp control for founders'
    ],
    icon: Cpu,
    color: '#3B82F6',
    bg: '#EFF6FF'
  }
];

export default function PlatformPage() {
  const [activeTab, setActiveTab] = useState('founderos');
  const currentTab = TABS.find(t => t.id === activeTab);
  const CurrentIcon = currentTab.icon;

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f9fafb' }}>
      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #0a0118 0%, #160544 45%, #1e0a6b 100%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-80px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-120px', left: '20%', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 40px 80px', display: 'flex', alignItems: 'center', gap: '80px', position: 'relative', zIndex: 1 }}>
          <motion.div style={{ flex: '1.1', minWidth: 0 }} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <motion.span className="tag tag-dark" style={{ marginBottom: '20px', display: 'inline-block' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>The Core Architecture</motion.span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', fontWeight: 950, color: '#ffffff', lineHeight: 1.05, marginBottom: '24px', letterSpacing: '-0.02em' }}>
              One Platform to<br />
              <span style={{ background: 'linear-gradient(135deg, #c084fc 0%, #a855f7 50%, #7c3aed 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Run &amp; Control It All</span>
            </h1>
            <motion.p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.75, maxWidth: '440px', marginBottom: '36px' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}>
              Sangoe is not just software. It is a complete Business Growth Operating System that transitions organizations from founder-dependency to scalable governance.
            </motion.p>
            <motion.div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
              <Link href="/contact" className="btn btn-purple">Schedule Live Walkthrough</Link>
              <Link href="/products" className="btn btn-outline-white">View All Clouds</Link>
            </motion.div>
            <motion.div style={{ display: 'flex', gap: '32px', marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.08)' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }}>
              {[['3', 'Core Modules'], ['9', 'Business Clouds'], ['1', 'Command Center']].map(([num, label]) => (
                <div key={label}><div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffffff' }}>{num}</div><div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '2px' }}>{label}</div></div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div style={{ flex: '1', minWidth: 0, position: 'relative', flexShrink: 0, maxWidth: '560px' }} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
            <div style={{ position: 'absolute', inset: '-30px', borderRadius: '40px', background: 'radial-gradient(ellipse, rgba(124,58,237,0.35) 0%, transparent 70%)', filter: 'blur(30px)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(124,58,237,0.3)', boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(124,58,237,0.2)', transform: 'perspective(1200px) rotateY(-8deg) rotateX(3deg)' }}>
              <Image src="/images/platform_devices.png" alt="Sangoe FounderOS platform" width={560} height={380} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,1,24,0.2) 0%, transparent 60%)' }} />
            </div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }} style={{ position: 'absolute', top: '-18px', right: '-18px', background: '#ffffff', borderRadius: '14px', padding: '10px 16px', boxShadow: '0 16px 40px rgba(0,0,0,0.35)', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#7c3aed', flexShrink: 0 }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#111827', whiteSpace: 'nowrap' }}>FounderOS™ Live</span>
            </motion.div>
            <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1.2 }} style={{ position: 'absolute', bottom: '-18px', left: '-18px', background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', borderRadius: '14px', padding: '12px 18px', boxShadow: '0 16px 40px rgba(124,58,237,0.5)', zIndex: 10 }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff' }}>98.2%</div>
              <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>Compliance Rating</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Architecture Section */}
      <section style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        {/* Tab Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {TABS.map(tab => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '99px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  backgroundColor: isActive ? tab.color : '#ffffff',
                  color: isActive ? '#ffffff' : '#4b5563',
                  boxShadow: isActive ? '0 10px 20px -5px rgba(124, 58, 237, 0.2)' : '0 2px 8px rgba(0,0,0,0.02)',
                  border: isActive ? `1.5px solid ${tab.color}` : '1.5px solid rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer'
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Card */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="responsive-grid-2"
          style={{
            background: '#ffffff',
            borderRadius: '24px',
            padding: '40px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.015)',
            border: '1px solid rgba(0,0,0,0.04)',
            alignItems: 'center'
          }}
        >
          {/* Left Details */}
          <div>
            <span style={{ display: 'inline-flex', padding: '14px', borderRadius: '16px', background: currentTab.bg, color: currentTab.color, marginBottom: '16px' }}>
              <CurrentIcon size={32} />
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#111827', marginBottom: '12px' }}>{currentTab.title}</h2>
            <p style={{ color: '#6b7280', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '24px' }}>{currentTab.subtitle}</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {currentTab.bullets.map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', color: '#374151', fontWeight: 550 }}>
                  <CheckCircle2 size={16} style={{ color: currentTab.color }} />
                  <span>{b}</span>
                </div>
              ))}
            </ul>
            <div style={{ marginTop: '32px' }}>
              <Link href="/contact" className="btn btn-purple" style={{ backgroundColor: currentTab.color, boxShadow: 'none' }}>
                Schedule Live Walkthrough
              </Link>
            </div>
          </div>

          {/* Right Visual Representation (CSS Mockup) */}
          <div style={{ background: '#f9fafb', border: '1px solid rgba(0, 0, 0, 0.04)', borderRadius: '20px', height: '320px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '6px', backgroundColor: currentTab.color }} />
            
            {currentTab.id === 'founderos' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ background: '#fff', padding: '16px', borderRadius: '12px', border: '1px solid rgba(0, 0, 0, 0.03)', boxShadow: '0 4px 12px rgba(0,0,0,0.01)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af', textTransform: 'uppercase', fontWeight: 700 }}>Founder Focus Matrix</div>
                  <div style={{ height: '8px', background: '#e5e7eb', borderRadius: '4px', marginTop: '10px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: '78%', background: '#7C3AED' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#6b7280', marginTop: '6px' }}>
                    <span>Delegated Tasks: 78%</span>
                    <span>Action Needed: 22%</span>
                  </div>
                </div>
                <div className="responsive-grid-2" style={{ gap: '16px' }}>
                  <div style={{ background: '#fff', padding: '16px', borderRadius: '12px', border: '1px solid rgba(0, 0, 0, 0.03)', boxShadow: '0 4px 12px rgba(0,0,0,0.01)', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#10b981' }}>98.2%</div>
                    <div style={{ fontSize: '0.7rem', color: '#6b7280' }}>Compliance Rating</div>
                  </div>
                  <div style={{ background: '#fff', padding: '16px', borderRadius: '12px', border: '1px solid rgba(0, 0, 0, 0.03)', boxShadow: '0 4px 12px rgba(0,0,0,0.01)', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#3b82f6' }}>₹4.2M</div>
                    <div style={{ fontSize: '0.7rem', color: '#6b7280' }}>Receivables Due</div>
                  </div>
                </div>
              </div>
            )}
            
            {currentTab.id === 'businessos' && (
              <div className="responsive-grid-3" style={{ gap: '12px' }}>
                {['Sales', 'HR', 'Finance', 'Projects', 'Assets', 'Compliance', 'BI', 'CS', 'SaaS'].map((cloud, i) => (
                  <div key={i} style={{ background: '#fff', padding: '12px', borderRadius: '10px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.03)', boxShadow: '0 2px 6px rgba(0,0,0,0.01)' }}>
                    <Cloud size={16} style={{ color: currentTab.color, marginBottom: '6px' }} />
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#111827' }}>{cloud}</div>
                  </div>
                ))}
              </div>
            )}
            
            {currentTab.id === 'copilot' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ background: '#fff', padding: '12px 16px', borderRadius: '12px 12px 12px 0', maxWidth: '85%', alignSelf: 'flex-start', border: '1px solid #e5e7eb', fontSize: '0.8rem', color: '#374151' }}>
                  What compliances are due for our manufacturing plant next week?
                </div>
                <div style={{ background: '#EFF6FF', padding: '12px 16px', borderRadius: '12px 12px 0 12px', maxWidth: '85%', alignSelf: 'flex-end', fontSize: '0.8rem', color: '#1e40af', border: '1px solid #bfdbfe', display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <Cpu size={14} style={{ color: '#3B82F6', flexShrink: 0 }} />
                  <span>I found 2 compliance files due: Factory license renewal (June 15) and fire safety audit checklist. Shall I notify the team lead?</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Integration & Mobile App banner */}
      <section style={{ background: '#ffffff', padding: '80px 20px', borderTop: '1px solid #e5e7eb' }}>
        <div className="responsive-grid-2" style={{ maxWidth: '1000px', margin: '0 auto', gap: '60px' }}>
          <div>
            <div style={{ display: 'inline-flex', padding: '8px', borderRadius: '8px', background: '#EFF6FF', color: '#3B82F6', marginBottom: '12px' }}>
              <FileCode size={20} />
            </div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#111827', marginBottom: '12px' }}>Seamless API Integrations</h3>
            <p style={{ color: '#4b5563', lineHeight: 1.6, fontSize: '0.95rem', marginBottom: '18px' }}>
              Connect with your bank accounts, ERP systems, government compliance sites, and customer platforms out-of-the-box. Keep your existing databases without data duplications.
            </p>
            <span style={{ display: 'inline-flex', gap: '8px', flexWrap: 'wrap' }}>
              {['WhatsApp API', 'Razorpay', 'GST Portal', 'Tally Sync', 'Google Workspace'].map(t => (
                <span key={t} style={{ fontSize: '0.75rem', padding: '4px 10px', background: '#f3f4f6', borderRadius: '6px', color: '#4b5563', fontWeight: 600 }}>{t}</span>
              ))}
            </span>
          </div>
          <div>
            <div style={{ display: 'inline-flex', padding: '8px', borderRadius: '8px', background: '#ECFDF5', color: '#10B981', marginBottom: '12px' }}>
              <Smartphone size={20} />
            </div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#111827', marginBottom: '12px' }}>Full Mobile Capability</h3>
            <p style={{ color: '#4b5563', lineHeight: 1.6, fontSize: '0.95rem', marginBottom: '18px' }}>
              Every feature of FounderOS™ and the 9 Clouds is accessible on your phone. Approve budgets, review client issues, and track employee check-ins while on the move.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#7C3AED', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={16} /> iOS Application
              </span>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10B981', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={16} /> Android Application
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
