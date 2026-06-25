import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, CheckCircle2, Star } from 'lucide-react';

const ARTICLES = {
  '1': {
    title: 'How AI Is Transforming Business Operations in 2026',
    desc: 'Explore the transition from basic task list execution to intelligent business co-pilots resolving operational friction.',
    category: 'AI & Automation',
    date: 'June 20, 2026',
    author: 'Sunil Kumar',
    time: '5 min read',
    sections: [
      {
        heading: 'The Shift to Conversational Intelligence',
        body: 'For years, software forced humans to click through multi-tiered menus and maintain complex spreadsheets. In 2026, the rise of contextual business co-pilots allows team leads to query their databases in plain English, generating instant MIS insights.'
      },
      {
        heading: 'Predictive Risk Models',
        body: 'Modern AI does not just catalog historical data; it audits your active project pipelines, compliance deadlines, and procurement logs. By matching project milestone speed with inventory levels, it flags supply bottlenecks before they disrupt workflows.'
      },
      {
        heading: 'Automated SOP Blueprints',
        body: 'AI can now observe team delegation habits and draft standard operating procedures. By capturing repetitive workflows, it drafts automation triggers that handle mundane approvals and reminders without human delay.'
      }
    ],
    takeaway: 'AI is no longer just a chatbot; it is a unified operating system context-aware layer that correlates your entire business.'
  },
  '2': {
    title: 'Top 10 CRM Trends Every Growing Business Should Know',
    desc: 'Unify sales tracking with compliance audits and project workflows to accelerate close velocity.',
    category: 'CRM & Sales',
    date: 'June 18, 2026',
    author: 'Neha Sharma',
    time: '6 min read',
    sections: [
      {
        heading: '1. Cross-Cloud Integration',
        body: 'Traditional CRMs keep sales data isolated. The trend in 2026 is unifying CRM with HR and Project modules, ensuring that closed-won deals automatically trigger project setup and invoice billing.'
      },
      {
        heading: '2. Zero Manual Data Entry',
        body: 'Sales reps waste hours logging calls. AI integrations now capture emails, Whatsapp business communications, and calendars to log leads automatically.'
      },
      {
        heading: '3. Predictive Revenue Run Rates',
        body: 'By tracking historic collection velocities alongside the active lead pipeline, companies can forecast cash flows with over 95% accuracy.'
      }
    ],
    takeaway: 'A CRM should be an engine that drives the whole business, not just a folder for sales contacts.'
  },
  '3': {
    title: 'The Complete Guide to Digital Transformation for MSMEs',
    desc: 'A step-by-step roadmap to transition from founder-dependent spreadsheets to institutional governance.',
    category: 'Operations & Growth',
    date: 'June 15, 2026',
    author: 'Rajiv Mehta',
    time: '8 min read',
    sections: [
      {
        heading: 'Step 1: Audit Spreadsheet Blockages',
        body: 'Map out where business operations rely on individual Excel sheets. These represent data silos and operational risks.'
      },
      {
        heading: 'Step 2: Establish Standard SOPs',
        body: 'Write clear standard operating procedures for leaves, attendance, inventory logs, and collections.'
      },
      {
        heading: 'Step 3: Centralize Your Dashboard',
        body: 'Import all departmental trackers into a single cockpit dashboard like FounderOS, letting managers handle approvals and metrics in one place.'
      }
    ],
    takeaway: 'Transformation is not about buying 10 tools; it is about building a single, unified operating system.'
  },
  '4': {
    title: 'How to Build a Scalable Business Operating System',
    desc: 'Standardize delegation matrices, incident logs, and core project clouds to build a resilient organization.',
    category: 'Operations & Growth',
    date: 'June 10, 2026',
    author: 'Amit Sen',
    time: '7 min read',
    sections: [
      {
        heading: 'Delegation and Accountability',
        body: 'A business OS must enforce clear accountability. Set up weekly check-in schedules, task velocity meters, and automatic escalation pathways.'
      },
      {
        heading: 'Unified Data Repositories',
        body: 'Syncing sales pipelines, client directories, HR records, and inventory ledgers into one schema allows cross-team workflows.'
      },
      {
        heading: 'Predictive Monitoring',
        body: 'Regularly audit platform health, safety permits, and compliance filings from a central tower.'
      }
    ],
    takeaway: 'A resilient business runs on standard systems, not personal dependencies.'
  },
  '5': {
    title: 'Why Every Business Needs Compliance Automation in 2026',
    desc: 'De-risk labour laws, PF, ESIC, and POSH audits using unified dashboard alert towers.',
    category: 'Compliance & ESG',
    date: 'June 05, 2026',
    author: 'Priya Gopal',
    time: '5 min read',
    sections: [
      {
        heading: 'The Cost of Non-Compliance',
        body: 'Fines, legal delays, and audit blockers can severely disrupt growth. Automated compliance registers ensure you are warned of due dates weeks in advance.'
      },
      {
        heading: 'Unified Labour Law Tracking',
        body: 'Manage Provident Fund (PF) contributions, ESIC filings, and professional tax payouts in one centralized HR payroll run.'
      },
      {
        heading: 'Audit-Ready Governance',
        body: 'Maintain direct logs of board resolutions, safety inspections, and ESG metrics, preparing your company for public listing.'
      }
    ],
    takeaway: 'Compliance is not a checkbox; it is a continuous operational guardrail.'
  },
  '6': {
    title: 'The Rise of AI Co-Pilots: Beyond Chatbots for Business',
    desc: 'How semantic search and workflow automation are changing conversational business intelligence.',
    category: 'AI & Automation',
    date: 'May 28, 2026',
    author: 'Sunil Kumar',
    time: '7 min read',
    sections: [
      {
        heading: 'Beyond Simple Chat Responses',
        body: 'Basic chatbots just answer questions. An AI co-pilot proactively flags operational delays, drafts purchase orders, and alerts managers about payment overdue lines.'
      },
      {
        heading: 'Securing Corporate Data',
        body: 'Enterprise co-pilots run inside secure sandbox environments, utilizing role-based access lists and private semantic indices.'
      }
    ],
    takeaway: 'AI co-pilots are operational teammates that understand your database context.'
  },
  '7': {
    title: 'Essential KPIs Every CEO Should Track Weekly',
    desc: 'Key cash flow, collection velocity, task velocity, and compliance indices to monitor on a single screen.',
    category: 'Operations & Growth',
    date: 'May 22, 2026',
    author: 'Rajiv Mehta',
    time: '5 min read',
    sections: [
      {
        heading: '1. Collection Velocity Index',
        body: 'Track how quickly invoices are cleared. Capital blocked in pending receivables slows down business growth.'
      },
      {
        heading: '2. Milestone Task Velocity',
        body: 'Monitor the average completion time for team tasks. Delayed milestones indicate system blockers.'
      },
      {
        heading: '3. Compliance Alert Clock',
        body: 'Verify upcoming regulatory filings to ensure zero legal disruption.'
      }
    ],
    takeaway: 'Focus on indicators that predict tomorrow\'s cash flow and compliance status.'
  },
  '8': {
    title: 'How Workflow Automation Reduces Operational Costs',
    desc: 'Eliminate repetitive task routing, manual approvals, and project delays with no-code triggers.',
    category: 'AI & Automation',
    date: 'May 14, 2026',
    author: 'Neha Sharma',
    time: '6 min read',
    sections: [
      {
        heading: 'No-Code Approvals Routing',
        body: 'Route purchase orders, travel expenses, and leave requests directly to authorized managers based on custom threshold rules.'
      },
      {
        heading: 'System Escalation Triggers',
        body: 'Configure rules that automatically assign tasks to senior leads if milestones remain pending past due dates.'
      }
    ],
    takeaway: 'Automate mundane admin workflows so your team can focus on client growth.'
  },
  '9': {
    title: 'Cybersecurity Best Practices for Small and Mid-Sized Businesses',
    desc: 'A checklist to secure customer databases, encrypt cloud storage, and enforce role-based access.',
    category: 'Operations & Growth',
    date: 'May 08, 2026',
    author: 'Amit Sen',
    time: '8 min read',
    sections: [
      {
        heading: 'Enforcing Role-Based Access',
        body: 'Ensure that database permissions restrict access. A sales rep does not need access to finance ledgers.'
      },
      {
        heading: 'Data Encryption',
        body: 'Enforce SSL/TLS encryption for all api data in transit, and AES-256 for document storage backups.'
      }
    ],
    takeaway: 'Security is not an afterthought; it is the foundation of digital trust.'
  },
  '10': {
    title: 'ESG Reporting Made Simple: A Practical Guide for Businesses',
    desc: 'How to calculate carbon metrics, verify employee safety checks, and log board room due diligence reports.',
    category: 'Compliance & ESG',
    date: 'April 28, 2026',
    author: 'Priya Gopal',
    time: '7 min read',
    sections: [
      {
        heading: 'Calculating Carbon Metrics',
        body: 'Collect facility utility usage and fleet operations fuel logs to estimate direct greenhouse emissions.'
      },
      {
        heading: 'Governance Diligence logs',
        body: 'Log board meeting attendance, whistleblower registers, and safety incident reviews in secure audit vaults.'
      }
    ],
    takeaway: 'ESG compliance attracts institutional investors and de-risks global operations.'
  }
};

export async function generateStaticParams() {
  return Object.keys(ARTICLES).map(id => ({ id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const article = ARTICLES[id];
  if (!article) return { title: 'Blog | Sangoe' };
  return {
    title: `${article.title} | Sangoe Blog`,
    description: article.desc,
  };
}

export default async function BlogPostPage({ params }) {
  const { id } = await params;
  const article = ARTICLES[id];

  if (!article) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '72px', background: 'var(--theme-bg)', color: 'var(--theme-text-main)' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px' }}>Article not found</h1>
          <Link href="/blog" style={{ color: '#7C3AED', fontWeight: 700, textDecoration: 'none' }}>← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '0', minHeight: '100vh', background: 'var(--theme-bg)', color: 'var(--theme-text-main)' }}>
      {/* Hero Header */}
      <div style={{
        background: 'linear-gradient(135deg, #090615 0%, #150f28 50%, #20153f 100%)',
        padding: '100px 20px 60px',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Link href="/blog" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', fontWeight: 600,
            textDecoration: 'none', marginBottom: '24px',
          }}>
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          
          <span style={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', color: '#a855f7', background: 'rgba(168,85,247,0.1)', padding: '4px 12px', borderRadius: '50px', letterSpacing: '0.06em', display: 'inline-block', marginBottom: '16px' }}>
            {article.category}
          </span>
          
          <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 950, color: '#fff', marginBottom: '24px', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
            {article.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', fontWeight: 600 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <User size={13} color="#a855f7" /> <span>By {article.author}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={13} color="#a855f7" /> <span>{article.date}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={13} color="#a855f7" /> <span>{article.time}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 20px 80px' }}>
        
        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '40px' }}>
          {article.sections.map((sec, i) => (
            <div key={i}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 850, color: 'var(--theme-text-main)', marginBottom: '12px', letterSpacing: '-0.01em' }}>
                {sec.heading}
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--theme-text-sub)', lineHeight: 1.8, margin: 0 }}>
                {sec.body}
              </p>
            </div>
          ))}
        </div>

        {/* Takeaway Panel */}
        <div style={{
          background: 'var(--theme-bg-secondary)',
          borderRadius: '20px',
          border: '1px solid var(--theme-card-border)',
          padding: '32px',
          marginBottom: '40px',
          boxShadow: 'var(--theme-shadow-card)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', fontWeight: 800, color: '#a855f7', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <Star size={12} fill="#a855f7" /> Key Takeaway
          </div>
          <p style={{ fontSize: '1rem', fontWeight: 750, color: 'var(--theme-text-main)', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
            "{article.takeaway}"
          </p>
        </div>

        {/* Footer actions */}
        <div style={{
          padding: '24px 28px',
          background: 'var(--theme-card-bg)', borderRadius: '16px', border: '1px solid var(--theme-card-border)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '16px',
          boxShadow: 'var(--theme-shadow-card)',
        }}>
          <div>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--theme-text-main)', margin: '0 0 2px' }}>Want to digitise your operations?</p>
            <p style={{ fontSize: '0.78rem', color: 'var(--theme-text-sub)', margin: 0 }}>Consult with Sangoe Specialists to map your business SOPs.</p>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Link href="/blog" style={{
              padding: '8px 18px', background: 'transparent', color: '#a855f7',
              border: '1px solid rgba(168,85,247,0.3)', borderRadius: '8px',
              fontWeight: 700, fontSize: '0.78rem', textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: '5px',
            }}>
              <ArrowLeft size={12} /> Back to Blog
            </Link>
            <Link href="/contact" style={{
              padding: '8px 18px', background: '#a855f7', color: '#fff',
              borderRadius: '8px', fontWeight: 700, fontSize: '0.78rem', textDecoration: 'none',
            }}>
              Talk to Specialist
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
