'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  BookOpen, 
  GraduationCap 
} from 'lucide-react';

const COURSES = [
  { title: 'Business Systemization Core', category: 'Operations', duration: '6 hrs', level: 'Beginner', desc: 'Learn the fundamentals of mapping processes and creating scalable, non-founder dependent workflows.', lectures: 12 },
  { title: 'Corporate Compliance & Audits', category: 'Compliance', duration: '8 hrs', level: 'Intermediate', desc: 'Step-by-step guidelines to manage statutory audits, labour compliance regulations, POSH, and risk matrices.', lectures: 16 },
  { title: 'IPO Readiness & Executive Governance', category: 'Finance', duration: '12 hrs', level: 'Advanced', desc: 'Master governance guidelines, risk registry reporting structures, board resolutions, and investor relations.', lectures: 24 },
  { title: 'MSME Transformation Blueprint', category: 'Operations', duration: '5 hrs', level: 'Beginner', desc: 'Transition from scattered spreadsheets and manual operational controls to structured business databases.', lectures: 10 },
  { title: 'Workforce Performance & HR SOPs', category: 'HR', duration: '7 hrs', level: 'Intermediate', desc: 'Build recruitment structures, automated timesheet tracking, payroll controls, and training systems.', lectures: 14 },
  { title: 'Safety & Near Miss Onsite Management', category: 'Safety', duration: '4 hrs', level: 'Beginner', desc: 'How to deploy safety permits, hazard controls, near-miss reports, and incident management onsite.', lectures: 8 },
  { title: 'ESG Scoring & SDG Compliance', category: 'Sustainability', duration: '5 hrs', level: 'Intermediate', desc: 'Measure carbon tracks, align with UN SDGs, and establish corporate governance sustainability models.', lectures: 10 },
  { title: 'Executive Leadership & Delegation', category: 'Leadership', duration: '10 hrs', level: 'Advanced', desc: 'Transition from being an operator to a visionary. Learn delegation frameworks and executive decision-making.', lectures: 20 },
  { title: 'Modern Recruitment & Talent Acquisition', category: 'HR', duration: '4 hrs', level: 'Beginner', desc: 'Master the art of attracting, vetting, and hiring top-tier talent using systemized onboarding workflows.', lectures: 8 },
  { title: 'Corporate Governance & Board Management', category: 'Governance', duration: '8 hrs', level: 'Advanced', desc: 'Establish a robust corporate governance structure, manage board meetings, and maintain investor relations.', lectures: 15 },
  { title: 'Business Growth & Scaling Strategies', category: 'Growth', duration: '15 hrs', level: 'Intermediate', desc: 'Discover actionable strategies to scale your revenue, optimize pricing models, and expand into new markets seamlessly.', lectures: 28 }
];

export default function AcademyPage() {
  const [selectedCourse, setSelectedCourse] = useState(null);


  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--theme-bg)', paddingBottom: '80px' }}>
      {/* Header */}
      <section style={{ padding: '80px 20px', textAlign: 'center', background: 'linear-gradient(180deg, var(--theme-bg-secondary) 0%, var(--theme-bg) 100%)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="tag" style={{ marginBottom: '16px' }}>Upskilling hub</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 950, color: 'var(--theme-text-main)', lineHeight: 1.1, marginBottom: '20px' }}>
            Sangoe Academy™ <br /><span style={{ color: 'var(--purple-500)' }}>Learn. Implement. Scale.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--theme-text-sub)', lineHeight: 1.7 }}>
            Unlock certification courses built specifically for business founders, CEOs, HR directors, and operations leads.
          </p>
        </div>
      </section>

      {/* Courses Catalog */}
      <section style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '24px' }}>
          {COURSES.map((course, i) => (
            <motion.div
              key={course.title}
              whileHover={{ y: -5, boxShadow: 'var(--theme-shadow-card)' }}
              style={{
                background: 'var(--theme-card-bg)',
                borderRadius: '20px',
                padding: '32px',
                border: '1px solid var(--theme-card-border)',
                boxShadow: 'var(--theme-shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, background: 'rgba(124, 58, 237, 0.1)', color: 'var(--purple-500)', padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>{course.category}</span>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, background: 'rgba(14, 165, 233, 0.1)', color: '#0284c7', padding: '3px 8px', borderRadius: '4px' }}>{course.level}</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--theme-text-main)', lineHeight: 1.3, marginBottom: '12px' }}>
                  <GraduationCap size={18} style={{ color: 'var(--purple-500)', marginRight: '6px', verticalAlign: 'middle', display: 'inline' }} />
                  {course.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--theme-text-muted)', lineHeight: 1.5, marginBottom: '24px' }}>{course.desc}</p>
              </div>

              <div style={{ borderTop: '1px solid var(--theme-border)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '12px', fontSize: '0.75rem', color: 'var(--theme-text-faint)', fontWeight: 700 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} /> {course.duration}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <BookOpen size={12} /> {course.lectures} Lectures
                  </span>
                </div>
                <button
                  onClick={() => {
                    setSelectedCourse(course);
                    alert(`Enrolling in: ${course.title}. Live class links have been sent to your profile email.`);
                  }}
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--purple-500)',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none'
                  }}
                >
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
