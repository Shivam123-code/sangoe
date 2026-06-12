'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  Milestone, 
  Factory, 
  Truck, 
  Archive, 
  Layers, 
  Ruler, 
  Wrench, 
  UserPlus, 
  Briefcase, 
  Activity, 
  GraduationCap, 
  Landmark, 
  Flame, 
  ShoppingBag, 
  Network, 
  Home, 
  FileText 
} from 'lucide-react';

const CATEGORIES = ['All', 'Industrial & Operations', 'Services & Staffing', 'Infrastructure & Real Estate', 'Corporate & Healthcare'];

const INDUSTRIES = [
  { name: 'Construction', cat: 'Infrastructure & Real Estate', icon: Building2, challenge: 'Daily wage contractor billing and site safety checklists tracking.', solution: 'Safety Cloud + Contractor Verification', color: '#F55F0B', bg: '#FFFBEB' },
  { name: 'Infrastructure', cat: 'Infrastructure & Real Estate', icon: Milestone, challenge: 'Equipment maintenance and raw material supplier compliance.', solution: 'Assets Cloud + Vendor Compliance Control', color: '#6366F1', bg: '#EEF2FF' },
  { name: 'Manufacturing', cat: 'Industrial & Operations', icon: Factory, challenge: 'Factory Act compliance audits, raw material stocks tracking, and safety permits.', solution: 'Procurement Cloud + Safety Management', color: '#10B981', bg: '#ECFDF5' },
  { name: 'Logistics & Transport', cat: 'Industrial & Operations', icon: Truck, challenge: 'Driver background checks, vehicle GPS records, and fleet AMCs.', solution: 'Trust Intelligence + Fleet Manager', color: '#3B82F6', bg: '#EFF6FF' },
  { name: 'Warehousing', cat: 'Industrial & Operations', icon: Archive, challenge: 'Stock storage records, material audits, and worker attendance.', solution: 'Procurement Cloud + HR Attendance', color: '#EF4444', bg: '#FEF2F2' },
  { name: 'Interior Fitout', cat: 'Infrastructure & Real Estate', icon: Layers, challenge: 'Multiple site project tracking, bill collections, and sub-contractor approvals.', solution: 'Project Cloud + Collection Trackers', color: '#8B5CF6', bg: '#F5F3FF' },
  { name: 'PMC (Project Management)', cat: 'Infrastructure & Real Estate', icon: Ruler, challenge: 'Timesheet logging, document control matrix, and client meetings.', solution: 'Project & Operations Cloud', color: '#EC4899', bg: '#FDF2F8' },
  { name: 'Facility Management', cat: 'Services & Staffing', icon: Wrench, challenge: 'Distributed workforce attendances, field staff compliance, and client tickets.', solution: 'HR Workforce + Customer Success Cloud', color: '#06B6D4', bg: '#ECFEFF' },
  { name: 'Recruitment & Staffing', cat: 'Services & Staffing', icon: UserPlus, challenge: 'Candidate verify pipelines, contract payroll, and ESIC compliance.', solution: 'Trust Intelligence + HR Payroll Cloud', color: '#059669', bg: '#E6F4EA' },
  { name: 'Consulting Firms', cat: 'Services & Staffing', icon: Briefcase, challenge: 'Client onboarding workflows, invoice collections, and project SOP trackers.', solution: 'Sales CRM + MSME Transformation', color: '#7C3AED', bg: '#F5F3FF' },
  { name: 'Healthcare', cat: 'Corporate & Healthcare', icon: Activity, challenge: 'Staff licensing registers, patient feedback tickets, and asset AMCs.', solution: 'Compliance Cloud + Customer Success', color: '#EF4444', bg: '#FEF2F2' },
  { name: 'Educational Institutions', cat: 'Corporate & Healthcare', icon: GraduationCap, challenge: 'Teacher verify checks, regulatory certifications, and campus asset maintenance.', solution: 'Trust Intelligence + Compliance Tower', color: '#6366F1', bg: '#EEF2FF' },
  { name: 'Government Contractors', cat: 'Infrastructure & Real Estate', icon: Landmark, challenge: 'Complex bid document security, vendor audits, and safety records.', solution: 'Compliance Tower + Projects Cloud', color: '#111827', bg: '#F3F4F6' },
  { name: 'Oil & Gas', cat: 'Industrial & Operations', icon: Flame, challenge: 'Critical site safety permits, incident near-miss logging, and employee health logs.', solution: 'Safety Management System™', color: '#EF4444', bg: '#FEF2F2' },
  { name: 'Retail', cat: 'Corporate & Healthcare', icon: ShoppingBag, challenge: 'Store worker payroll schedules, supplier inventory, and cash collections.', solution: 'Procurement & Finance Cloud', color: '#F55F0B', bg: '#FFFBEB' },
  { name: 'Franchise Networks', cat: 'Services & Staffing', icon: Network, challenge: 'Consistency audits across locations, partner portals, and SaaS bills.', solution: 'SaaS Ecosystem + Business BI Cloud', color: '#06B6D4', bg: '#ECFEFF' },
  { name: 'Real Estate', cat: 'Infrastructure & Real Estate', icon: Home, challenge: 'Lead allocations, broker commission calculations, and legal document vaults.', solution: 'Sales Cloud + HR Commissions', color: '#8B5CF6', bg: '#F5F3FF' },
  { name: 'Professional Services', cat: 'Services & Staffing', icon: FileText, challenge: 'SOP checklists, employee productivity tracking, and client task sheets.', solution: 'MSME Transformation + Project Cloud', color: '#7C3AED', bg: '#F5F3FF' }
];

export default function IndustriesPage() {
  const [activeCat, setActiveCat] = useState('All');

  const filtered = activeCat === 'All'
    ? INDUSTRIES
    : INDUSTRIES.filter(i => i.cat === activeCat);

  return (
    <div style={{ paddingTop: '0', minHeight: '100vh', background: '#f9fafb', paddingBottom: '80px' }}>
      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #030d0a 0%, #071f12 50%, #0a2918 100%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-130px', right: '-80px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '20%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(5,150,105,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 40px 80px', display: 'flex', alignItems: 'center', gap: '80px', position: 'relative', zIndex: 1 }}>
          <motion.div style={{ flex: '1.1', minWidth: 0 }} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <motion.span className="tag tag-dark" style={{ marginBottom: '20px', display: 'inline-block' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>Target Sectors</motion.span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', fontWeight: 950, color: '#ffffff', lineHeight: 1.05, marginBottom: '24px', letterSpacing: '-0.02em' }}>
              Tailored for Every<br />
              <span style={{ background: 'linear-gradient(135deg, #34d399 0%, #10b981 50%, #059669 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Core Business Sector</span>
            </h1>
            <motion.p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.75, maxWidth: '440px', marginBottom: '36px' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}>
              Whether you operate heavy manufacturing plants or lead corporate staffing networks, Sangoe contains modules built specifically for your sector.
            </motion.p>
            <motion.div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
              <Link href="/contact" className="btn btn-purple">Find Your Solution</Link>
              <Link href="/solutions" className="btn btn-outline-white">View All Solutions</Link>
            </motion.div>
            <motion.div style={{ display: 'flex', gap: '32px', marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.08)' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }}>
              {[['18', 'Industries'], ['4', 'Sector Groups'], ['100%', 'Coverage']].map(([num, label]) => (
                <div key={label}><div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffffff' }}>{num}</div><div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '2px' }}>{label}</div></div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div style={{ flex: '1', minWidth: 0, position: 'relative', flexShrink: 0, maxWidth: '520px' }} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
            <div style={{ position: 'absolute', inset: '-30px', borderRadius: '40px', background: 'radial-gradient(ellipse, rgba(16,185,129,0.28) 0%, transparent 70%)', filter: 'blur(28px)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 40px 80px rgba(0,0,0,0.6)', transform: 'perspective(1200px) rotateY(-8deg) rotateX(3deg)' }}>
              <Image src="/images/hero_industries.png" alt="Sangoe across industries" width={520} height={360} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(3,13,10,0.2) 0%, transparent 60%)' }} />
            </div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }} style={{ position: 'absolute', top: '-18px', right: '-18px', background: '#ffffff', borderRadius: '14px', padding: '10px 16px', boxShadow: '0 16px 40px rgba(0,0,0,0.35)', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#111827', whiteSpace: 'nowrap' }}>18 Industries Covered</span>
            </motion.div>
            <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1.2 }} style={{ position: 'absolute', bottom: '-18px', left: '-18px', background: 'linear-gradient(135deg, #059669, #047857)', borderRadius: '14px', padding: '12px 18px', boxShadow: '0 16px 40px rgba(5,150,105,0.45)', zIndex: 10 }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff' }}>All</div>
              <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>Sectors Served</div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Category Filter Chips */}
      <section style={{ padding: '40px 20px 20px', display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', maxWidth: '1000px', margin: '0 auto' }}>
        {CATEGORIES.map(cat => {
          const isActive = cat === activeCat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              style={{
                padding: '10px 20px',
                borderRadius: '99px',
                fontSize: '0.85rem',
                fontWeight: 700,
                backgroundColor: isActive ? '#10B981' : '#ffffff',
                color: isActive ? '#ffffff' : '#4b5563',
                border: isActive ? '1.5px solid #10B981' : '1.5px solid rgba(0, 0, 0, 0.06)',
                boxShadow: isActive ? '0 8px 16px -4px rgba(16,185,129,0.2)' : '0 2px 6px rgba(0,0,0,0.02)',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {cat}
            </button>
          );
        })}
      </section>

      {/* Industries Grid */}
      <section style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          layout
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '20px' }}
        >
          {filtered.map(ind => {
            const IconComponent = ind.icon;
            return (
              <motion.div
                layout
                key={ind.name}
                whileHover={{ y: -5, boxShadow: '0 12px 30px rgba(0,0,0,0.05)' }}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '28px',
                  border: '1px solid rgba(0,0,0,0.04)',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.008)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  transition: 'all 0.25s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ display: 'inline-flex', color: ind.color, background: ind.bg, padding: '8px', borderRadius: '10px' }}>
                    <IconComponent size={22} />
                  </span>
                  <span style={{ fontWeight: 800, color: '#111827', fontSize: '1.05rem' }}>{ind.name}</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#9ca3af', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{ind.cat}</div>
                
                <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '12px', marginTop: '4px' }}>
                  <div style={{ fontSize: '0.78rem', color: '#6b7280', lineHeight: 1.5 }}>
                    <strong style={{ color: '#ef4444' }}>Pain Point:</strong> {ind.challenge}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#6b7280', lineHeight: 1.5, marginTop: '8px' }}>
                    <strong style={{ color: '#10b981' }}>Sangoe Stack:</strong> {ind.solution}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}
