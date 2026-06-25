'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle, Shield, AlertCircle, Clock,
  RefreshCw, Mail, MessageSquare, Bell,
  Activity, ShieldCheck, Database
} from 'lucide-react';
import Link from 'next/link';

const SERVICES = [
  { name: 'CRM Platform', status: 'Operational', uptime: '99.99%' },
  { name: 'HRMS', status: 'Operational', uptime: '99.98%' },
  { name: 'Payroll Engine', status: 'Operational', uptime: '99.99%' },
  { name: 'Project Management', status: 'Operational', uptime: '99.97%' },
  { name: 'Inventory Management', status: 'Operational', uptime: '99.98%' },
  { name: 'Compliance Control Tower', status: 'Operational', uptime: '99.99%' },
  { name: 'AI Business Co-Pilot', status: 'Operational', uptime: '99.95%' },
  { name: 'Mobile App API', status: 'Operational', uptime: '99.98%' },
  { name: 'Authentication Services', status: 'Operational', uptime: '100.00%' },
  { name: 'Notification Services', status: 'Operational', uptime: '99.97%' }
];

const METRICS = [
  { label: 'Overall Platform Uptime', value: '99.99%', sub: 'Last 90 days' },
  { label: 'Average API Response Time', value: '185 ms', sub: 'Global routing' },
  { label: 'Data Synchronization', value: 'Real-Time', sub: 'Active database sync' },
  { label: 'Active Incidents', value: '0 Open', sub: 'All operations clear' }
];

const INCIDENTS = [
  { date: 'June 18, 2026 - 14:20 IST', service: 'AI Business Co-Pilot', severity: 'Minor', desc: 'Brief latency spike in conversational query responses resolved via database indexing.', status: 'Resolved', time: '18 mins' },
  { date: 'May 04, 2026 - 09:10 IST', service: 'Notification Services', severity: 'Minor', desc: 'Delay in SMTP delivery queues due to vendor gateway maintenance.', status: 'Resolved', time: '24 mins' },
  { date: 'March 11, 2026 - 23:45 IST', service: 'Mobile App API', severity: 'Maintenance', desc: 'Scheduled API version update completed without user downtime.', status: 'Completed', time: '40 mins' }
];

const SECURITY = [
  { title: '24x7 Platform Monitoring', desc: 'Continuous automated heartbeat checks across global server clusters.' },
  { title: 'Encrypted Data Systems', desc: 'Enforced TLS 1.3 encryption for data in transit and AES-256 for data at rest.' },
  { title: 'Automated Disaster Recovery', desc: 'Multi-region databases backed up hourly with instant failover paths.' },
  { title: 'Security Monitoring', desc: 'Intrusion detection filters and routine third-party penetration audits.' }
];

export default function StatusPage() {
  const [subscribeStatus, setSubscribeStatus] = useState('idle'); // idle | done
  const [subEmail, setSubEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!subEmail) return;
    setSubscribeStatus('done');
    setSubEmail('');
  };

  return (
    <div style={{ paddingTop: '0', minHeight: '100vh', background: 'var(--theme-bg)', color: 'var(--theme-text-main)' }}>
      
      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #020914 0%, #09162e 50%, #0d2247 100%)', overflow: 'hidden', padding: '120px 20px 80px' }}>
        <div style={{ position: 'absolute', top: '-130px', right: '-80px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <motion.span className="tag tag-dark" style={{ marginBottom: '24px', display: 'inline-block' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>System Health</motion.span>
          <motion.h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 950, color: '#ffffff', lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-0.02em' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
            Platform Status &amp;<br />
            <span style={{ background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Service Availability</span>
          </motion.h1>
          <motion.p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 36px' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            Real-time visibility into the health and availability of Sangoe services. Last updated: Just now
          </motion.p>

          {/* pulsing main status card */}
          <motion.div
            style={{
              background: 'rgba(16,185,129,0.08)',
              border: '1.5px solid rgba(16,185,129,0.22)',
              borderRadius: '50px',
              padding: '12px 28px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              margin: '0 auto',
              boxShadow: '0 0 30px rgba(16,185,129,0.1)'
            }}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
            <span style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              All Systems Operational
            </span>
          </motion.div>
        </div>
      </section>

      {/* Metrics Row */}
      <section style={{ padding: '60px 20px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {METRICS.map((met, i) => (
            <div key={i} style={{ background: 'var(--theme-card-bg)', border: '1px solid var(--theme-card-border)', borderRadius: '20px', padding: '28px 24px', textAlign: 'center', boxShadow: 'var(--theme-shadow-card)' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--theme-text-sub)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                {met.label}
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 950, color: '#10b981', lineHeight: 1.1, marginBottom: '4px' }}>
                {met.value}
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--theme-text-sub)', fontWeight: 600 }}>
                {met.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Table list */}
      <section style={{ padding: '40px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--theme-text-main)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Activity size={18} color="#10b981" /> Active Services
        </h3>
        <div style={{ background: 'var(--theme-card-bg)', border: '1px solid var(--theme-card-border)', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--theme-shadow-card)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ background: 'var(--theme-bg-secondary)', borderBottom: '1px solid var(--theme-border)', textAlign: 'left' }}>
                <th style={{ padding: '16px 24px', color: 'var(--theme-text-main)', fontWeight: 800 }}>Service</th>
                <th style={{ padding: '16px 24px', color: 'var(--theme-text-main)', fontWeight: 800, textAlign: 'center' }}>Status</th>
                <th style={{ padding: '16px 24px', color: 'var(--theme-text-main)', fontWeight: 800, textAlign: 'right' }}>Uptime</th>
              </tr>
            </thead>
            <tbody>
              {SERVICES.map((srv, idx) => (
                <tr key={idx} style={{ borderBottom: idx === SERVICES.length - 1 ? 'none' : '1px solid var(--theme-border)' }}>
                  <td style={{ padding: '16px 24px', fontWeight: 700, color: 'var(--theme-text-main)' }}>{srv.name}</td>
                  <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', fontWeight: 800, color: '#10b981', background: 'rgba(16,185,129,0.06)', padding: '4px 12px', borderRadius: '50px', border: '1px solid rgba(16,185,129,0.15)' }}>
                      <CheckCircle size={10} color="#10b981" /> Operational
                    </span>
                  </td>
                  <td style={{ padding: '16px 24px', textAlign: 'right', fontWeight: 700, color: 'var(--theme-text-sub)' }}>{srv.uptime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Incident History & Maintenance */}
      <section style={{ background: 'var(--theme-bg-secondary)', padding: '80px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Incidents logs */}
          <div style={{ marginBottom: '48px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--theme-text-main)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={18} color="#7c3aed" /> Historical Log
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {INCIDENTS.map((inc, idx) => (
                <div key={idx} style={{ background: 'var(--theme-card-bg)', border: '1px solid var(--theme-card-border)', borderRadius: '16px', padding: '24px', boxShadow: 'var(--theme-shadow-card)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', fontSize: '0.72rem', color: '#7c3aed', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px' }}>
                    <span>{inc.service}</span>
                    <span style={{ color: 'var(--theme-text-sub)' }}>{inc.date}</span>
                  </div>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--theme-text-main)', marginBottom: '8px', marginTop: 0 }}>
                    {inc.desc}
                  </h4>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '0.75rem', color: 'var(--theme-text-sub)', fontWeight: 650 }}>
                    <span>Severity: {inc.severity}</span>
                    <span>•</span>
                    <span>Status: <span style={{ color: '#10b981' }}>{inc.status}</span></span>
                    <span>•</span>
                    <span>Resolution: {inc.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scheduled Maintenance */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--theme-text-main)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertCircle size={18} color="#f59e0b" /> Scheduled Maintenance
            </h3>
            <div style={{ background: 'var(--theme-card-bg)', border: '1px dashed var(--theme-card-border)', borderRadius: '16px', padding: '24px', textAlign: 'center', color: 'var(--theme-text-sub)', fontSize: '0.88rem', fontWeight: 650 }}>
              No scheduled maintenance at this time.
            </div>
          </div>

        </div>
      </section>

      {/* Security & Reliability */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 800, color: '#7c3aed', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>Security</span>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--theme-text-main)' }}>Enterprise Security Controls</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {SECURITY.map((sec, i) => (
            <div key={i} style={{ background: 'var(--theme-card-bg)', border: '1px solid var(--theme-card-border)', borderRadius: '20px', padding: '32px 24px', boxShadow: 'var(--theme-shadow-card)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="#10b981" />
                <h3 style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--theme-text-main)', margin: 0 }}>{sec.title}</h3>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--theme-text-sub)', lineHeight: 1.6, margin: 0 }}>{sec.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subscribe to status updates */}
      <section style={{ background: 'var(--theme-bg-secondary)', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <span style={{ textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 800, color: '#7c3aed', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>Alerts</span>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--theme-text-main)', marginBottom: '12px' }}>Subscribe to Status Updates</h2>
          <p style={{ color: 'var(--theme-text-sub)', lineHeight: 1.6, margin: '0 auto 28px', fontSize: '0.95rem' }}>
            Receive real-time notifications about platform incidents or scheduled maintenance windows directly.
          </p>

          {subscribeStatus === 'done' ? (
            <div style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid #10b981', color: '#10b981', fontWeight: 700, padding: '16px', borderRadius: '12px', fontSize: '0.85rem' }}>
              ✓ Subscribed! We will notify you when system logs change.
            </div>
          ) : (
            <form style={{ display: 'flex', gap: '8px', maxWidth: '400px', margin: '0 auto' }} onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="status-alerts@company.com"
                required
                value={subEmail}
                onChange={e => setSubEmail(e.target.value)}
                style={{
                  flex: 1,
                  background: 'var(--theme-card-bg)',
                  border: '1px solid var(--theme-card-border)',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  fontSize: '0.85rem',
                  color: 'var(--theme-text-main)',
                  outline: 'none'
                }}
              />
              <button type="submit" className="btn btn-purple" style={{ borderRadius: '8px' }}>
                Subscribe
              </button>
            </form>
          )}

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '24px', fontSize: '0.72rem', color: 'var(--theme-text-sub)', fontWeight: 650 }}>
            <span>📧 Email alerts</span>
            <span>💬 SMS alerts</span>
            <span>🟢 WhatsApp alerts</span>
          </div>

        </div>
      </section>

    </div>
  );
}
