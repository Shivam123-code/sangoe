'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
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
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f9fafb', paddingBottom: '80px' }}>
      {/* Header */}
      <section style={{ padding: '80px 20px', textAlign: 'center', background: 'linear-gradient(180deg, #EFF6FF 0%, #F8FAFC 100%)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="tag" style={{ marginBottom: '16px', color: '#3B82F6', background: '#E0F2FE', borderColor: '#BAE6FD' }}>The Product suite</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 950, color: '#111827', lineHeight: 1.1, marginBottom: '20px' }}>
            9 Business Clouds. <br />One Integrated System.
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#4b5563', lineHeight: 1.7 }}>
            No more logging into dozens of isolated SaaS apps. Sangoe brings all core business functions under a unified database architecture.
          </p>
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
