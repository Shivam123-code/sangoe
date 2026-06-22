'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
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
    bg: 'rgba(59, 130, 246, 0.1)',
    badge: 'Operations'
  },
  {
    title: 'Compliance Control Tower™',
    desc: 'Manage and monitor all business compliance tasks from a single, centralized oversight dashboard.',
    highlights: ['PF & ESIC Automatic Tracking', 'Labour Laws & POSH Checklists', 'Factory Act & Fire Clearances', 'Contractor & Vendor Audit Compliance'],
    icon: ShieldCheck,
    color: '#8B5CF6',
    bg: 'rgba(139, 92, 246, 0.1)',
    badge: 'Legal & Risk'
  },
  {
    title: 'Trust Intelligence Platform™',
    desc: 'Powered by QuickVerification. Instant identity and background verification checks for stakeholders.',
    highlights: ['Director & Business Verification', 'Employee & Driver Screening', 'Contractor & Tenant Clearances', 'Database Risk Intelligence Checks'],
    icon: Search,
    color: '#06B6D4',
    bg: 'rgba(6, 182, 212, 0.1)',
    badge: 'Security'
  },
  {
    title: 'Investor & IPO Readiness Platform™',
    desc: 'Prepare your corporate structures, audits, governance, and registers for investment or listing.',
    highlights: ['Corporate Governance Tracker', 'Board Meeting Managers', 'Investor Secure Data Room', 'Due Diligence Checklists'],
    icon: Rocket,
    color: '#F55F0B',
    bg: 'rgba(245, 95, 11, 0.1)',
    badge: 'Finance & Growth'
  },
  {
    title: 'ESG & Sustainability Platform™',
    desc: 'Measure, report, and optimize your environmental, social, and corporate governance practices.',
    highlights: ['SDG Alignment Mapping', 'Carbon Footprint Calculators', 'Social Impact Measurement', 'Governance Compliance Checks'],
    icon: Leaf,
    color: '#059669',
    bg: 'rgba(5, 150, 105, 0.1)',
    badge: 'Sustainability'
  },
  {
    title: 'Safety Management System™',
    desc: 'Proactively manage workplace safety, hazard reporting, and onsite incident risks.',
    highlights: ['Digital Permit-To-Work Systems', 'Near Miss & Hazard Auditing', 'Contractor Safety Compliances', 'Safety Incident Managers'],
    icon: ShieldAlert,
    color: '#EF4444',
    bg: 'rgba(239, 68, 68, 0.1)',
    badge: 'Site Operations'
  }
];

export default function SolutionsPage() {
  return (
    <div style={{ paddingTop: '0', minHeight: '100vh', background: 'var(--theme-bg)', paddingBottom: '80px' }}>
      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #0c0b22 0%, #1a1060 50%, #2d1065 100%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-130px', right: '-60px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-100px', left: '25%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 40px 80px', display: 'flex', alignItems: 'center', gap: '80px', position: 'relative', zIndex: 1 }}>
          <motion.div style={{ flex: '1.1', minWidth: 0 }} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <motion.span className="tag tag-dark" style={{ marginBottom: '20px', display: 'inline-block' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>Business Transformation</motion.span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', fontWeight: 950, color: '#ffffff', lineHeight: 1.05, marginBottom: '24px', letterSpacing: '-0.02em' }}>
              Advanced Solutions for<br />
              <span style={{ background: 'linear-gradient(135deg, #c084fc 0%, #e879f9 50%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Growing Enterprises</span>
            </h1>
            <motion.p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.75, maxWidth: '440px', marginBottom: '36px' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}>
              Engineered to resolve structural challenges, improve governance, reduce operational risks, and prepare organizations for listing.
            </motion.p>
            <motion.div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
              <Link href="/contact" className="btn btn-purple">Explore Solutions</Link>
              <Link href="/platform" className="btn btn-outline-white">See the Platform</Link>
            </motion.div>
            <motion.div style={{ display: 'flex', gap: '32px', marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.08)' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }}>
              {[['6', 'Solutions'], ['98%', 'Compliance Rate'], ['360°', 'Coverage']].map(([num, label]) => (
                <div key={label}><div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffffff' }}>{num}</div><div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '2px' }}>{label}</div></div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div style={{ flex: '1', minWidth: 0, position: 'relative', flexShrink: 0, maxWidth: '520px' }} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
            <div style={{ position: 'absolute', inset: '-30px', borderRadius: '40px', background: 'radial-gradient(ellipse, rgba(139,92,246,0.3) 0%, transparent 70%)', filter: 'blur(28px)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 40px 80px rgba(0,0,0,0.6)', transform: 'perspective(1200px) rotateY(-8deg) rotateX(3deg)' }}>
              <Image src="/images/hero_solutions.png" alt="Sangoe solutions war room" width={520} height={360} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(12,11,34,0.2) 0%, transparent 60%)' }} />
            </div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }} style={{ position: 'absolute', top: '-18px', right: '-18px', background: 'var(--theme-card-bg)', border: '1px solid var(--theme-card-border)', borderRadius: '14px', padding: '10px 16px', boxShadow: '0 16px 40px rgba(0,0,0,0.35)', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#8b5cf6', flexShrink: 0 }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--theme-text-main)', whiteSpace: 'nowrap' }}>6 Active Solutions</span>
            </motion.div>
            <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1.2 }} style={{ position: 'absolute', bottom: '-18px', left: '-18px', background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', borderRadius: '14px', padding: '12px 18px', boxShadow: '0 16px 40px rgba(139,92,246,0.45)', zIndex: 10 }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff' }}>IPO</div>
              <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>Ready Frameworks</div>
            </motion.div>
          </motion.div>
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
                whileHover={{ y: -8, boxShadow: 'var(--theme-shadow-card)' }}
                style={{
                  background: 'var(--theme-card-bg)',
                  borderRadius: '24px',
                  padding: '36px',
                  border: '1px solid var(--theme-card-border)',
                  boxShadow: 'var(--theme-shadow-card)',
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

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--theme-text-main)', marginBottom: '12px' }}>{sol.title}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--theme-text-sub)', lineHeight: 1.6, marginBottom: '24px', flexGrow: 1 }}>{sol.desc}</p>

                <div style={{ borderTop: '1px solid var(--theme-border)', paddingTop: '20px' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--theme-text-sub)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Core Capabilities:</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {sol.highlights.map(h => (
                      <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--theme-text-main)', fontWeight: 550 }}>
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

