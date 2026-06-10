'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Settings, 
  ShieldCheck, 
  Search, 
  Rocket, 
  Leaf, 
  ShieldAlert,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const SOLUTIONS = [
  {
    title: 'MSME Transformation System™',
    desc: 'Transform founder-dependent businesses into highly system-driven organizations that run automatically.',
    highlights: ['SOP Management & Mapping', 'Department Scorecards & KPI Frameworks', 'Delegation & Workload Systems', 'Business Maturity Frameworks'],
    icon: Settings,
    color: '#3B82F6',
    bg: '#EFF6FF',
    badge: 'Operations'
  },
  {
    title: 'Compliance Control Tower™',
    desc: 'Manage and monitor all business compliance tasks from a single, centralized oversight dashboard.',
    highlights: ['PF & ESIC Automatic Tracking', 'Labour Laws & POSH Checklists', 'Factory Act & Fire Clearances', 'Contractor & Vendor Audit Compliance'],
    icon: ShieldCheck,
    color: '#8B5CF6',
    bg: '#F5F3FF',
    badge: 'Legal & Risk'
  },
  {
    title: 'Trust Intelligence Platform™',
    desc: 'Powered by QuickVerification. Instant identity and background verification checks for stakeholders.',
    highlights: ['Director & Business Verification', 'Employee & Driver Screening', 'Contractor & Tenant Clearances', 'Database Risk Intelligence Checks'],
    icon: Search,
    color: '#06B6D4',
    bg: '#ECFEFF',
    badge: 'Security'
  },
  {
    title: 'Investor & IPO Readiness Platform™',
    desc: 'Prepare your corporate structures, audits, governance, and registers for investment or listing.',
    highlights: ['Corporate Governance Tracker', 'Board Meeting Managers', 'Investor Secure Data Room', 'Due Diligence Checklists'],
    icon: Rocket,
    color: '#F55F0B',
    bg: '#FFFBEB',
    badge: 'Finance & Growth'
  },
  {
    title: 'ESG & Sustainability Platform™',
    desc: 'Measure, report, and optimize your environmental, social, and corporate governance practices.',
    highlights: ['SDG Alignment Mapping', 'Carbon Footprint Calculators', 'Social Impact Measurement', 'Governance Compliance Checks'],
    icon: Leaf,
    color: '#059669',
    bg: '#E6F4EA',
    badge: 'Sustainability'
  },
  {
    title: 'Safety Management System™',
    desc: 'Proactively manage workplace safety, hazard reporting, and onsite incident risks.',
    highlights: ['Digital Permit-To-Work Systems', 'Near Miss & Hazard Auditing', 'Contractor Safety Compliances', 'Safety Incident Managers'],
    icon: ShieldAlert,
    color: '#EF4444',
    bg: '#FEF2F2',
    badge: 'Site Operations'
  }
];

export default function SolutionsPage() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f9fafb', paddingBottom: '80px' }}>
      {/* Header */}
      <section style={{ padding: '80px 20px', textAlign: 'center', background: 'linear-gradient(180deg, #F5F3FF 0%, #FAF5FF 60%, #F9FAFB 100%)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="tag" style={{ marginBottom: '16px', color: '#7C3AED', background: '#F5F3FF', borderColor: '#DDD6FE' }}>Business transformation</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 950, color: '#111827', lineHeight: 1.1, marginBottom: '20px' }}>
            Advanced Solutions for <br /><span style={{ color: '#7C3AED' }}>Growing Enterprises</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#4b5563', lineHeight: 1.7 }}>
            Engineered to resolve specific structural challenges, improve governance, reduce operations risks, and prepare organizations for listing.
          </p>
        </div>
      </section>

      {/* Solutions Cards */}
      <section style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))', gap: '32px' }}>
          {SOLUTIONS.map((sol, index) => {
            const IconComponent = sol.icon;
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(124, 58, 237, 0.12)' }}
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '36px',
                  border: '1px solid rgba(0,0,0,0.04)',
                  boxShadow: '0 4px 30px rgba(0,0,0,0.015)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  cursor: 'default',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <span style={{ display: 'inline-flex', color: sol.color, background: sol.bg, padding: '12px', borderRadius: '16px' }}>
                    <IconComponent size={28} />
                  </span>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: sol.color, background: sol.bg, padding: '4px 10px', borderRadius: '99px', letterSpacing: '0.04em' }}>{sol.badge}</span>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#111827', marginBottom: '12px' }}>{sol.title}</h3>
                <p style={{ fontSize: '0.92rem', color: '#6b7280', lineHeight: 1.6, marginBottom: '24px', flexGrow: 1 }}>{sol.desc}</p>

                <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '20px' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Core Capabilities:</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {sol.highlights.map(h => (
                      <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#374151', fontWeight: 550 }}>
                        <CheckCircle2 size={14} style={{ color: '#10B981', flexShrink: 0 }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '28px' }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 700, color: '#7C3AED' }}>
                    Explore Solution Details <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
