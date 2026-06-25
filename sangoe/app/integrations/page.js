'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Code, RefreshCw, ShieldCheck, Zap, Database,
  ArrowRight, Search, Globe, Link as LinkIcon
} from 'lucide-react';

const CATEGORIES = [
  'All', 'Productivity', 'Communication', 'Accounting', 'HR & Biometric', 'Cloud Storage', 'Payment'
];

const INTEGRATIONS = [
  // Productivity
  { name: 'Microsoft 365', category: 'Productivity', desc: 'Sync outlook emails, excel spreadsheets, and active directories.', icon: '📧' },
  { name: 'Google Workspace', category: 'Productivity', desc: 'Integrate Gmail communications and Google Sheets databases.', icon: '📁' },
  { name: 'Slack', category: 'Productivity', desc: 'Send automated alert nudges and approvals directly to team channels.', icon: '💬' },
  { name: 'Zoom', category: 'Productivity', desc: 'Schedule client meetings and training classes directly from CRM.', icon: '🎥' },
  
  // Communication
  { name: 'WhatsApp Business', category: 'Communication', desc: 'Send automated invoice alerts, payment reminders, and customer support logs.', icon: '🟢' },
  { name: 'Twilio SMS', category: 'Communication', desc: 'Trigger text message alerts for attendance, payroll status, and warnings.', icon: '📱' },
  { name: 'SMTP Email Gateway', category: 'Communication', desc: 'Sync corporate email domains for leads tracking and internal newsletters.', icon: '✉️' },
  
  // Accounting
  { name: 'Tally Prime', category: 'Accounting', desc: 'Sync digital invoices, expenses, and ledger entries with tax auditors.', icon: '📊' },
  { name: 'Zoho Books', category: 'Accounting', desc: 'Bridge invoices and collections reports into FounderOS command center.', icon: '📘' },
  { name: 'QuickBooks', category: 'Accounting', desc: 'Correlate global operating costs and capital statements seamlessly.', icon: '📗' },

  // HR & Biometric
  { name: 'Biometric Devices', category: 'HR & Biometric', desc: 'Sync direct thumbprint or card scans into leaves & attendance logs.', icon: '🔒' },
  { name: 'RFID Attendance Machines', category: 'HR & Biometric', desc: 'Live logging of factory shifts, check-ins, and late departures.', icon: '🏢' },

  // Cloud Storage
  { name: 'Google Drive', category: 'Cloud Storage', desc: 'Store SOP blueprints and contract files in secure document sheets.', icon: '💾' },
  { name: 'Microsoft OneDrive', category: 'Cloud Storage', desc: 'Link folder permissions directly to project teams and compliance folders.', icon: '☁️' },
  { name: 'Dropbox Business', category: 'Cloud Storage', desc: 'Backup historical ledgers and audit records automatically.', icon: '📦' },

  // Payment
  { name: 'Razorpay', category: 'Payment', desc: 'Generate customer payment links and process instant refunds.', icon: '💳' },
  { name: 'Stripe Payments', category: 'Payment', desc: 'Support international credit cards and handle subscription billing.', icon: '🌐' },
  { name: 'PayU India', category: 'Payment', desc: 'Process net banking and unified UPI payments instantly.', icon: '💰' }
];

const BENEFITS = [
  { title: 'Real-Time Sync', desc: 'Data updates across all platforms in milliseconds — no manual reconciliation.', icon: RefreshCw, color: '#10b981' },
  { title: 'Secure APIs', desc: 'Bank-grade encryption handles all transfers via HTTPS and OAuth 2.0.', icon: ShieldCheck, color: '#7c3aed' },
  { title: 'No-Code Integrations', desc: 'Connect popular services in minutes with one-click toggles.', icon: Zap, color: '#f59e0b' },
  { title: 'Faster Automation', desc: 'Create triggers that cross systems — like Slack alerts for late biometric check-ins.', icon: Globe, color: '#ec4899' },
  { title: 'Centralized Data', desc: 'Ditch fragmented spreadsheets. Sync all records into the FounderOS dashboard.', icon: Database, color: '#3b82f6' }
];

export default function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredIntegrations = INTEGRATIONS.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ paddingTop: '0', minHeight: '100vh', background: 'var(--theme-bg)', color: 'var(--theme-text-main)' }}>
      
      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #030c1e 0%, #071735 50%, #0a204d 100%)', overflow: 'hidden', padding: '120px 20px 90px' }}>
        <div style={{ position: 'absolute', top: '-130px', right: '-80px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <motion.span className="tag tag-dark" style={{ marginBottom: '24px', display: 'inline-block' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Ecosystem Connect</motion.span>
          <motion.h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 950, color: '#ffffff', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
            Connect Your Favorite<br />
            <span style={{ background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Business Tools</span>
          </motion.h1>
          <motion.p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: '680px', margin: '0 auto' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            Break down data silos. Sync biometric attendance, process payments automatically, backup records to secure drives, and send WhatsApp reminders — all linked to your core operational dashboard.
          </motion.p>
        </div>
      </section>

      {/* Directory Section */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Toolbar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
          
          {/* Categories */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '50px',
                  fontSize: '0.78rem',
                  fontWeight: 750,
                  cursor: 'pointer',
                  border: '1px solid',
                  transition: 'all 0.2s',
                  background: activeCategory === cat ? '#10b981' : 'var(--theme-card-bg)',
                  color: activeCategory === cat ? '#ffffff' : 'var(--theme-text-sub)',
                  borderColor: activeCategory === cat ? '#10b981' : 'var(--theme-card-border)',
                  boxShadow: 'var(--theme-shadow-card)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '280px' }}>
            <Search size={15} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--theme-text-sub)' }} />
            <input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                background: 'var(--theme-card-bg)',
                border: '1px solid var(--theme-card-border)',
                borderRadius: '50px',
                padding: '10px 16px 10px 42px',
                fontSize: '0.82rem',
                color: 'var(--theme-text-main)',
                outline: 'none',
                boxShadow: 'var(--theme-shadow-card)'
              }}
            />
          </div>

        </div>

        {/* Directory Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {filteredIntegrations.length > 0 ? (
            filteredIntegrations.map((item, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--theme-card-bg)',
                  border: '1px solid var(--theme-card-border)',
                  borderRadius: '20px',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  boxShadow: 'var(--theme-shadow-card)',
                  transition: 'border-color 0.2s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                  <div style={{ fontSize: '1.8rem', lineHeight: 1 }}>{item.icon}</div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#10b981', background: 'rgba(16,185,129,0.06)', padding: '4px 10px', borderRadius: '50px', letterSpacing: '0.04em' }}>
                    {item.category}
                  </span>
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 850, color: 'var(--theme-text-main)' }}>{item.name}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--theme-text-sub)', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>{item.desc}</p>
                <Link
                  href="/contact?subject=Integrations Request"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    color: '#10b981',
                    textDecoration: 'none',
                    marginTop: '8px'
                  }}
                >
                  Configure <ArrowRight size={12} />
                </Link>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '48px', color: 'var(--theme-text-sub)', background: 'var(--theme-card-bg)', borderRadius: '16px', border: '1px solid var(--theme-card-border)' }}>
              No matching integrations found. We release new integrations monthly — get in touch with our developers to request a custom API bridge.
            </div>
          )}
        </div>
      </section>

      {/* Developer API & Webhooks Callout */}
      <section style={{ background: 'var(--theme-bg-secondary)', padding: '80px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', background: '#0e111d', border: '1px solid #1f293d', borderRadius: '24px', padding: '48px 40px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', padding: '4px 12px', borderRadius: '50px', fontSize: '0.68rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }}>
                <Code size={12} /> Developer Friendly
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffffff', marginBottom: '16px' }}>Flexible Developer APIs &amp; Webhooks</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
                Build custom sync adapters or link internal ERP code bases. Sangoe supports standard JSON REST APIs, secure Webhooks, and developer SDKs.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { label: 'REST APIs', desc: 'Secure endpoints for data sync.' },
                { label: 'Webhooks', desc: 'Real-time event trigger streams.' },
                { label: 'Custom SDKs', desc: 'Standard client packages.' },
                { label: 'Dev Guides', desc: 'Full endpoint listings.' }
              ].map((dev, i) => (
                <div key={i} style={{ background: '#131929', border: '1px solid #202b43', borderRadius: '14px', padding: '20px' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>{dev.label}</div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.4 }}>{dev.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 800, color: '#7c3aed', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>Benefits</span>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--theme-text-main)' }}>Designed For Scalable Operations</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} style={{ background: 'var(--theme-card-bg)', border: '1px solid var(--theme-card-border)', borderRadius: '20px', padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: 'var(--theme-shadow-card)', borderTop: `3px solid ${b.color}` }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: `${b.color}10`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={20} color={b.color} />
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 850, color: 'var(--theme-text-main)' }}>{b.title}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--theme-text-sub)', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
