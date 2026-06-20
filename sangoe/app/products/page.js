'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  TrendingUp, 
  Users, 
  Briefcase, 
  DollarSign, 
  Building, 
  ShieldCheck, 
  BarChart3, 
  Heart, 
  Link2 
} from 'lucide-react';

const CLOUDS = [
  {
    icon: TrendingUp,
    name: 'Sales & Revenue Cloud',
    tagline: 'Generate More Business',
    modules: ['Lead Finder', 'CRM & Leads Management', 'Quotations & Estimates', 'Contracts & Subscriptions', 'Customer Loyalty & Affiliate', 'Marketing Automation', 'Sales Analytics & Forecasting'],
    color: '#3B82F6',
    bg: '#EFF6FF'
  },
  {
    icon: Users,
    name: 'HR & Workforce Cloud',
    tagline: 'Build High Performance Teams',
    modules: ['HR Records & Life Cycle', 'Recruitment Automation', 'Attendance & Leave Manager', 'Payroll & Commissions', 'Performance & Training', 'Skill Matrix & Org Chart'],
    color: '#10B981',
    bg: '#ECFDF5'
  },
  {
    icon: Briefcase,
    name: 'Project & Operations Cloud',
    tagline: 'Deliver Projects Faster',
    modules: ['Projects & Tasks Manager', 'Timesheets & Attendance', 'Workflow Automation & Approvals', 'Document Control & SOPs', 'Knowledge Base & Support Desk', 'Action Tracker & Meetings'],
    color: '#F55F0B',
    bg: '#FFFBEB'
  },
  {
    icon: DollarSign,
    name: 'Procurement & Finance Cloud',
    tagline: 'Improve Cash Flow & Profitability',
    modules: ['Core Accounting & Ledger', 'Expense & Purchase Management', 'Inventory & Stock Control', 'Budgeting & Cost Control', 'Collections & Payments Tracker', 'Profitability Analytics'],
    color: '#EF4444',
    bg: '#FEF2F2'
  },
  {
    icon: Building,
    name: 'Assets & Infrastructure Cloud',
    tagline: 'Manage Business Assets',
    modules: ['Fleet Management', 'Fixed Equipment & Spares', 'Maintenance & AMC Tracking', 'Asset Lifecycle Analytics', 'Domain & Tech Asset Manager', 'Asset Audits & Inspections'],
    color: '#6366F1',
    bg: '#EEF2FF'
  },
  {
    icon: ShieldCheck,
    name: 'Compliance & Governance Cloud',
    tagline: 'Reduce Business Risks',
    modules: ['Compliance Assurance (PF/ESIC/Labour)', 'Audit & Policy Management', 'Document Control & Approval Matrix', 'Risk Register & Corrective Actions', 'Vendor & Contractor Compliance', 'Governance Calendar'],
    color: '#8B5CF6',
    bg: '#F5F3FF'
  },
  {
    icon: BarChart3,
    name: 'Business Intelligence Cloud',
    tagline: 'Measure Everything',
    modules: ['Department Dashboards & Reports', 'Business Analytics & BI', 'KPI & OKR Management', 'Forecasting & Benchmarking', 'Founder Cockpit', 'Management Reviews Tracker'],
    color: '#EC4899',
    bg: '#FDF2F8'
  },
  {
    icon: Heart,
    name: 'Customer Success Cloud',
    tagline: 'Create Loyal Customers',
    modules: ['Support Tickets & Desk', 'Customer Feedback & Surveys', 'Idea Hub & Feature Requests', 'Knowledge Base for Clients', 'Customer Success Tracking', 'CSAT & NPS Analytics'],
    color: '#06B6D4',
    bg: '#ECFEFF'
  },
  {
    icon: Link2,
    name: 'SaaS & Ecosystem Cloud',
    tagline: 'Scale Your Business Model',
    modules: ['SaaS Management & Pricing', 'Subscriptions & Billing Engine', 'Partner & Affiliate Portal', 'App Marketplace Integration', 'API Developer Center', 'White Label Framework'],
    color: '#059669',
    bg: '#E6F4EA'
  }
];

export default function ProductsPage() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  return (
    <div style={{ paddingTop: '0', minHeight: '100vh', background: '#f9fafb', paddingBottom: '80px' }}>
      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #060b18 0%, #0f1f45 45%, #1a1060 100%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-150px', right: '-80px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-100px', left: '15%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 40px 80px', display: 'flex', alignItems: 'center', gap: '80px', position: 'relative', zIndex: 1 }}>
          <motion.div style={{ flex: '1.1', minWidth: 0 }} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <motion.span className="tag tag-dark" style={{ marginBottom: '20px', display: 'inline-block' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>The Product Suite</motion.span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', fontWeight: 950, color: '#ffffff', lineHeight: 1.05, marginBottom: '24px', letterSpacing: '-0.02em' }}>
              Unified Business Clouds.<br />
              <span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>One Integrated System.</span>
            </h1>
            <motion.p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.75, maxWidth: '440px', marginBottom: '36px' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}>
              No more logging into dozens of isolated SaaS apps. Sangoe brings all core business functions under a single, unified database architecture.
            </motion.p>
            <motion.div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
              <Link href="/contact" className="btn btn-purple">Explore All Clouds</Link>
              <Link href="/pricing" className="btn btn-outline-white">View Pricing</Link>
            </motion.div>
            <motion.div style={{ display: 'flex', gap: '32px', marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.08)' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }}>
              {[['Enterprise', 'Business Clouds'], ['50+', 'Core Modules'], ['1 DB', 'Unified System']].map(([num, label]) => (
                <div key={label}><div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffffff' }}>{num}</div><div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '2px' }}>{label}</div></div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div style={{ flex: '1', minWidth: 0, position: 'relative', flexShrink: 0, maxWidth: '520px' }} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
            <div style={{ position: 'absolute', inset: '-30px', borderRadius: '40px', background: 'radial-gradient(ellipse, rgba(59,130,246,0.3) 0%, transparent 70%)', filter: 'blur(30px)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 40px 80px rgba(0,0,0,0.6)', transform: 'perspective(1200px) rotateY(-8deg) rotateX(3deg)' }}>
              <Image src="/images/hero_products.png" alt="Sangoe business cloud modules" width={520} height={360} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(6,11,24,0.15) 0%, transparent 60%)' }} />
            </div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }} style={{ position: 'absolute', top: '-18px', right: '-18px', background: '#ffffff', borderRadius: '14px', padding: '10px 16px', boxShadow: '0 16px 40px rgba(0,0,0,0.35)', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#111827', whiteSpace: 'nowrap' }}>All Clouds Active</span>
            </motion.div>
            <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1.2 }} style={{ position: 'absolute', bottom: '-18px', left: '-18px', background: 'linear-gradient(135deg, #3b82f6, #6366f1)', borderRadius: '14px', padding: '12px 18px', boxShadow: '0 16px 40px rgba(59,130,246,0.45)', zIndex: 10 }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff' }}>50+</div>
              <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>Core Modules</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Clouds Grid */}
      <section style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '24px' }}>
          {CLOUDS.map((cloud, idx) => {
            const IconComponent = cloud.icon;
            return (
              <motion.div
                key={cloud.name}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}
                onClick={() => setSelectedIdx(selectedIdx === idx ? null : idx)}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '32px',
                  border: '1px solid rgba(0,0,0,0.04)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.015)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease'
                }}
              >
                {/* Colored Side Bar */}
                <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px', backgroundColor: cloud.color }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                  <span style={{ display: 'inline-flex', color: cloud.color, background: cloud.bg, padding: '12px', borderRadius: '12px' }}>
                    <IconComponent size={28} />
                  </span>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827' }}>{cloud.name}</h3>
                    <p style={{ fontSize: '0.8rem', color: cloud.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '2px' }}>{cloud.tagline}</p>
                  </div>
                </div>

                <div style={{ fontSize: '0.9rem', color: '#6b7280', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{cloud.modules.length} Core Modules Included</span>
                  <span style={{ color: cloud.color, fontWeight: 'bold' }}>
                    {selectedIdx === idx ? 'Close ▲' : 'Explore Modules ▼'}
                  </span>
                </div>

                {/* Expandable Module List */}
                <AnimatePresence>
                  {selectedIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 20 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '16px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {cloud.modules.map(mod => (
                            <div key={mod} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#4b5563' }}>
                              <span style={{ color: cloud.color }}>•</span>
                              <span>{mod}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Box */}
      <section style={{ padding: '60px 20px', maxWidth: '1000px', margin: '60px auto 0' }}>
        <div style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #31108f 100%)', borderRadius: '24px', padding: '48px', color: '#fff', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)' }} />
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '16px' }}>Need a Tailored System Demo?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 32px', lineHeight: 1.6 }}>
            Our implementation engineers can build a customized sandbox environment featuring the exact modules your business requires.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-white">Book System Demo</Link>
            <Link href="/pricing" className="btn btn-outline-white">Explore Pricing Plans</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
