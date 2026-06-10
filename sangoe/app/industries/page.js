'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
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
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f9fafb', paddingBottom: '80px' }}>
      {/* Header */}
      <section style={{ padding: '80px 20px', textAlign: 'center', background: 'linear-gradient(180deg, #ECFDF5 0%, #FAF5FF 60%, #F9FAFB 100%)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="tag" style={{ marginBottom: '16px', color: '#10B981', background: '#ECFDF5', borderColor: '#A7F3D0' }}>Target sectors</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 950, color: '#111827', lineHeight: 1.1, marginBottom: '20px' }}>
            Tailored for Every <br /><span style={{ color: '#10B981' }}>Core Business Sector</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#4b5563', lineHeight: 1.7 }}>
            Whether you operate heavy manufacturing plants or lead corporate staffing networks, Sangoe contains modules built specifically for your sector.
          </p>
        </div>
      </section>

      {/* Category Filter Chips */}
      <section style={{ padding: '20px', display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', maxWidth: '1000px', margin: '0 auto' }}>
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
