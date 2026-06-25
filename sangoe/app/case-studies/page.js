'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp, Clock, ShieldCheck, Users, Briefcase,
  ArrowRight, FileText, CheckCircle2, ChevronRight
} from 'lucide-react';
import Link from 'next/link';

const STORIES = [
  {
    industry: 'Manufacturing Company',
    metric: '38%',
    metricLabel: 'Reduction in Delays',
    challenge: 'Scattered inventory ledgers and isolated project tasks caused critical supply delays and assembly bottlenecks.',
    solution: 'Synced Sales & Revenue Cloud with Procurement & Finance Cloud, giving project managers live raw material forecasts.',
    modules: ['Inventory Management', 'Procurement', 'Project Management'],
    timeline: '6 weeks implementation',
    roi: '38% operational delay reduction, 14% working capital unlocked',
    testimonial: '"Sangoe connected our shop floor directly to our procurement office. We no longer run out of critical raw materials mid-project."',
    color: '#10b981'
  },
  {
    industry: 'Construction Firm',
    metric: '100%',
    metricLabel: 'Site Transparency',
    challenge: 'Coordinating multiple construction sites via WhatsApp led to compliance oversights and delayed material approvals.',
    solution: 'Deployed the MSME Transformation Framework and Compliance Control Tower for real-time site supervisor check-ins and safety audits.',
    modules: ['Safety Management', 'Compliance Control', 'FounderOS Cockpit'],
    timeline: '8 weeks implementation',
    roi: 'Zero compliance penalties, 100% site compliance, 22% faster approvals',
    testimonial: '"Every site supervisor now submits safety audits digitally. I can verify compliance status across 14 sites on one cockpit dashboard."',
    color: '#7c3aed'
  },
  {
    industry: 'Healthcare Provider',
    metric: '4.2x',
    metricLabel: 'Efficiency Boost',
    challenge: 'Manual roster planning, payroll, and nurse credential compliance tracking caused severe admin blockages.',
    solution: 'Implemented HR & Workforce Cloud integrated with Biometric systems for automatic shift check-ins and compliance audits.',
    modules: ['HRMS & Payroll', 'Compliance Management', 'Biometrics Integration'],
    timeline: '5 weeks implementation',
    roi: 'Admin payroll processing cut from 5 days to 4 hours, 100% license compliance audits',
    testimonial: '"Credential compliance audits that used to take days are now automated. Our HR team can focus entirely on staffing quality."',
    color: '#3b82f6'
  },
  {
    industry: 'Logistics Company',
    metric: '24%',
    metricLabel: 'Cost Savings',
    challenge: 'Fragmented fleet logs and vendor pay delays blocked deliveries and raised operations costs.',
    solution: 'Deployed Assets & Infra Cloud with automated workflow triggers for vehicle service checks and vendor invoice processing.',
    modules: ['Fleet Management', 'Vendor Payments', 'Workflow Automation'],
    timeline: '7 weeks implementation',
    roi: '24% fleet maintenance savings, zero late vendor payments, 12% route efficiency boost',
    testimonial: '"Vehicle safety checks are automated on mobile. Fleet down-time has reduced dramatically, keeping our deliveries on time."',
    color: '#ef4444'
  },
  {
    industry: 'Staffing Agency',
    metric: '62%',
    metricLabel: 'Faster Onboarding',
    challenge: 'Slow candidate screening and manual background check flows caused placement drop-outs.',
    solution: 'Deployed Recruitment ATS integrated with QuickVerification background checks and automated HR contracts.',
    modules: ['Recruitment ATS', 'QuickVerification API', 'HR Documents'],
    timeline: '4 weeks implementation',
    roi: '62% reduction in time-to-hire, 99.8% background check audit pass rate',
    testimonial: '"Candidate background verification takes minutes instead of weeks. We place candidates faster and with absolute security compliance."',
    color: '#ec4899'
  }
];

const INDUSTRIES = [
  'Manufacturing', 'Construction', 'Logistics', 'Healthcare', 'Retail', 'Education', 'Consulting'
];

export default function CaseStudiesPage() {
  const [selectedStory, setSelectedStory] = useState(0);
  const currentStory = STORIES[selectedStory];

  return (
    <div style={{ paddingTop: '0', minHeight: '100vh', background: 'var(--theme-bg)', color: 'var(--theme-text-main)' }}>
      
      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #020b18 0%, #071937 50%, #0c2654 100%)', overflow: 'hidden', padding: '120px 20px 90px' }}>
        <div style={{ position: 'absolute', top: '-130px', right: '-80px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <motion.span className="tag tag-dark" style={{ marginBottom: '24px', display: 'inline-block' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Success Stories</motion.span>
          <motion.h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 950, color: '#ffffff', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
            Real Businesses.<br />
            <span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #93c5fd 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Real Business Results.</span>
          </motion.h1>
          <motion.p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: '680px', margin: '0 auto' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            Discover how leading organizations standardise workflows, compliance-proof operations, and scale productivity using the Sangoe Business OS.
          </motion.p>
        </div>
      </section>

      {/* Interactive Case Studies layout */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'start' }}>
          
          {/* Left list selector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--theme-text-main)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileText size={18} color="#3b82f6" /> Case Directory
            </h3>
            {STORIES.map((story, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedStory(idx)}
                style={{
                  textAlign: 'left',
                  padding: '24px',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  border: '1px solid',
                  background: selectedStory === idx ? 'rgba(59,130,246,0.06)' : 'var(--theme-card-bg)',
                  borderColor: selectedStory === idx ? '#3b82f6' : 'var(--theme-card-border)',
                  color: 'var(--theme-text-main)',
                  boxShadow: 'var(--theme-shadow-card)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--theme-text-main)', marginBottom: '4px' }}>{story.industry}</div>
                  <span style={{ fontSize: '0.78rem', color: story.color, fontWeight: 800 }}>{story.metric} {story.metricLabel}</span>
                </div>
                <ChevronRight size={16} style={{ opacity: selectedStory === idx ? 1 : 0.4, color: selectedStory === idx ? '#3b82f6' : 'inherit' }} />
              </button>
            ))}
          </div>

          {/* Right Case layout */}
          <div style={{ background: 'var(--theme-card-bg)', border: '1px solid var(--theme-card-border)', borderRadius: '24px', padding: '40px', boxShadow: 'var(--theme-shadow-card)', borderTop: `4px solid ${currentStory.color}` }}>
            
            {/* Header: Metric Callout */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap', borderBottom: '1px solid var(--theme-card-border)', paddingBottom: '24px', marginBottom: '28px' }}>
              <div>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--theme-text-sub)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '4px' }}>
                  Operational Outcome
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--theme-text-main)', margin: 0 }}>
                  {currentStory.industry}
                </h3>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '2.4rem', fontWeight: 950, color: currentStory.color, lineHeight: 1 }}>
                  {currentStory.metric}
                </div>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--theme-text-sub)', textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '2px' }}>
                  {currentStory.metricLabel}
                </div>
              </div>
            </div>

            {/* Layout: Challenge vs Solution */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '28px' }}>
              <div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 900, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                  The Challenge
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--theme-text-sub)', lineHeight: 1.6, margin: 0 }}>
                  {currentStory.challenge}
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 900, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                  The Solution
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--theme-text-sub)', lineHeight: 1.6, margin: 0 }}>
                  {currentStory.solution}
                </p>
              </div>
            </div>

            {/* Modules & Timeline info row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', background: 'var(--theme-bg-secondary)', borderRadius: '16px', padding: '24px', marginBottom: '28px' }}>
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--theme-text-sub)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                  Modules Integrated
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {currentStory.modules.map(mod => (
                    <span key={mod} style={{ fontSize: '0.7rem', fontWeight: 800, color: currentStory.color, background: `${currentStory.color}10`, border: `1px solid ${currentStory.color}25`, padding: '4px 10px', borderRadius: '50px' }}>
                      {mod}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--theme-text-sub)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                  Timeline &amp; Speed
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--theme-text-main)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={14} color={currentStory.color} /> {currentStory.timeline}
                </div>
              </div>
            </div>

            {/* Testimonial Quote block */}
            <div style={{ borderLeft: `3px solid ${currentStory.color}`, paddingLeft: '20px', fontStyle: 'italic', color: 'var(--theme-text-main)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '20px' }}>
              {currentStory.testimonial}
            </div>

            {/* ROI checklist */}
            <div style={{ borderTop: '1px solid var(--theme-card-border)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--theme-text-sub)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Key ROI Metrics
              </div>
              {currentStory.roi.split(', ').map((roiPoint, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--theme-text-main)' }}>
                  <CheckCircle2 size={14} color="#10b981" /> <span>{roiPoint}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Industries Served */}
      <section style={{ background: 'var(--theme-bg-secondary)', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span style={{ textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 800, color: '#7c3aed', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>Supported Sectors</span>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--theme-text-main)', marginBottom: '32px' }}>Transforming Every Core Industry</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {INDUSTRIES.map((ind, i) => (
              <span
                key={i}
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  color: 'var(--theme-text-main)',
                  background: 'var(--theme-card-bg)',
                  border: '1px solid var(--theme-card-border)',
                  padding: '10px 20px',
                  borderRadius: '50px',
                  boxShadow: 'var(--theme-shadow-card)'
                }}
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ padding: '80px 20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--theme-text-main)', marginBottom: '16px' }}>
          Ready to standardise your workflows?
        </h2>
        <p style={{ color: 'var(--theme-text-sub)', lineHeight: 1.6, maxWidth: '520px', margin: '0 auto 32px' }}>
          Consult with our implementation consultants to map your team structure and build custom SaaS automation rules.
        </p>
        <Link href="/contact" className="btn btn-purple" style={{ padding: '14px 28px' }}>
          Schedule System Walkthrough
        </Link>
      </section>

    </div>
  );
}
