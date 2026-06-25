'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CATEGORIES = [
  'All', 'AI & Automation', 'CRM & Sales', 'Compliance & ESG', 'Operations & Growth', 'HR & Payroll'
];

const ARTICLES = [
  {
    id: 1,
    title: 'How AI Is Transforming Business Operations in 2026',
    desc: 'Explore the transition from basic task list execution to intelligent business co-pilots resolving operational friction.',
    category: 'AI & Automation',
    date: 'June 20, 2026',
    author: 'Sunil Kumar',
    time: '5 min read',
    featured: true
  },
  {
    id: 2,
    title: 'Top 10 CRM Trends Every Growing Business Should Know',
    desc: 'Unify sales tracking with compliance audits and project workflows to accelerate close velocity.',
    category: 'CRM & Sales',
    date: 'June 18, 2026',
    author: 'Neha Sharma',
    time: '6 min read',
    featured: false
  },
  {
    id: 3,
    title: 'The Complete Guide to Digital Transformation for MSMEs',
    desc: 'A step-by-step roadmap to transition from founder-dependent spreadsheets to institutional governance.',
    category: 'Operations & Growth',
    date: 'June 15, 2026',
    author: 'Rajiv Mehta',
    time: '8 min read',
    featured: false
  },
  {
    id: 4,
    title: 'How to Build a Scalable Business Operating System',
    desc: 'Standardize delegation matrices, incident logs, and core project clouds to build a resilient organization.',
    category: 'Operations & Growth',
    date: 'June 10, 2026',
    author: 'Amit Sen',
    time: '7 min read',
    featured: false
  },
  {
    id: 5,
    title: 'Why Every Business Needs Compliance Automation in 2026',
    desc: 'De-risk labour laws, PF, ESIC, and POSH audits using unified dashboard alert towers.',
    category: 'Compliance & ESG',
    date: 'June 05, 2026',
    author: 'Priya Gopal',
    time: '5 min read',
    featured: false
  },
  {
    id: 6,
    title: 'The Rise of AI Co-Pilots: Beyond Chatbots for Business',
    desc: 'How semantic search and workflow automation are changing conversational business intelligence.',
    category: 'AI & Automation',
    date: 'May 28, 2026',
    author: 'Sunil Kumar',
    time: '7 min read',
    featured: false
  },
  {
    id: 7,
    title: 'Essential KPIs Every CEO Should Track Weekly',
    desc: 'Key cash flow, collection velocity, task velocity, and compliance indices to monitor on a single screen.',
    category: 'Operations & Growth',
    date: 'May 22, 2026',
    author: 'Rajiv Mehta',
    time: '5 min read',
    featured: false
  },
  {
    id: 8,
    title: 'How Workflow Automation Reduces Operational Costs',
    desc: 'Eliminate repetitive task routing, manual approvals, and project delays with no-code triggers.',
    category: 'AI & Automation',
    date: 'May 14, 2026',
    author: 'Neha Sharma',
    time: '6 min read',
    featured: false
  },
  {
    id: 9,
    title: 'Cybersecurity Best Practices for Small and Mid-Sized Businesses',
    desc: 'A checklist to secure customer databases, encrypt cloud storage, and enforce role-based access.',
    category: 'Operations & Growth',
    date: 'May 08, 2026',
    author: 'Amit Sen',
    time: '8 min read',
    featured: false
  },
  {
    id: 10,
    title: 'ESG Reporting Made Simple: A Practical Guide for Businesses',
    desc: 'How to calculate carbon metrics, verify employee safety checks, and log board room due diligence reports.',
    category: 'Compliance & ESG',
    date: 'April 28, 2026',
    author: 'Priya Gopal',
    time: '7 min read',
    featured: false
  }
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredArticle = ARTICLES.find(a => a.featured);
  const remainingArticles = ARTICLES.filter(a => !a.featured);

  const filteredArticles = remainingArticles.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ paddingTop: '0', minHeight: '100vh', background: 'var(--theme-bg)', color: 'var(--theme-text-main)' }}>
      
      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #090615 0%, #150f28 50%, #20153f 100%)', overflow: 'hidden', padding: '120px 20px 70px' }}>
        <div style={{ position: 'absolute', top: '-130px', right: '-80px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(192,132,252,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <motion.span className="tag tag-dark" style={{ marginBottom: '24px', display: 'inline-block' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Insights &amp; Resources</motion.span>
          <motion.h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 950, color: '#ffffff', lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-0.02em' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
            The Sangoe<br />
            <span style={{ background: 'linear-gradient(135deg, #c084fc 0%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Business Journal</span>
          </motion.h1>
          <motion.p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: '680px', margin: '0 auto' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            Authoritative perspectives on AI transformation, compliance regulations, operational metrics, and institutional governance for growth-stage founders and executives.
          </motion.p>
        </div>
      </section>

      {/* Featured Article Section */}
      {featuredArticle && (
        <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            background: 'var(--theme-card-bg)',
            border: '1px solid var(--theme-card-border)',
            borderRadius: '24px',
            padding: '48px',
            boxShadow: 'var(--theme-shadow-card)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
            <div>
              <span style={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', color: '#a855f7', background: 'rgba(168,85,247,0.06)', padding: '4px 12px', borderRadius: '50px', letterSpacing: '0.06em', display: 'inline-block', marginBottom: '20px' }}>
                Featured Story
              </span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--theme-text-main)', lineHeight: 1.3, marginBottom: '16px' }}>
                {featuredArticle.title}
              </h2>
              <p style={{ color: 'var(--theme-text-sub)', lineHeight: 1.7, fontSize: '0.98rem', marginBottom: '28px' }}>
                {featuredArticle.desc}
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', borderTop: '1px solid var(--theme-card-border)', paddingTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--theme-text-sub)', fontWeight: 650 }}>
                  <User size={13} color="#a855f7" /> <span>{featuredArticle.author}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--theme-text-sub)', fontWeight: 650 }}>
                  <Calendar size={13} color="#a855f7" /> <span>{featuredArticle.date}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--theme-text-sub)', fontWeight: 650 }}>
                  <Clock size={13} color="#a855f7" /> <span>{featuredArticle.time}</span>
                </div>
              </div>
            </div>
            
            <div style={{ background: 'linear-gradient(135deg, #130a35 0%, #1e114f 100%)', borderRadius: '16px', padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: '0.72rem', color: '#a78bfa', fontWeight: 800, letterSpacing: '0.05em' }}>KEY INSIGHT</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.4 }}>
                "In 2026, companies that automate their operational compliance save an average of 18% in overhead costs."
              </div>
              <Link href={`/blog/${featuredArticle.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 800, color: '#a855f7', textDecoration: 'none', marginTop: '12px' }}>
                Read Full Article <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Main Grid & Filters */}
      <section style={{ padding: '40px 20px 80px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Toolbar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '40px', borderTop: '1px solid var(--theme-card-border)', paddingTop: '40px' }}>
          
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
                  background: activeCategory === cat ? '#a855f7' : 'var(--theme-card-bg)',
                  color: activeCategory === cat ? '#ffffff' : 'var(--theme-text-sub)',
                  borderColor: activeCategory === cat ? '#a855f7' : 'var(--theme-card-border)',
                  boxShadow: 'var(--theme-shadow-card)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '280px' }}>
            <Search size={15} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--theme-text-sub)' }} />
            <input
              type="text"
              placeholder="Search articles..."
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {filteredArticles.length > 0 ? (
            filteredArticles.map((art, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--theme-card-bg)',
                  border: '1px solid var(--theme-card-border)',
                  borderRadius: '24px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  boxShadow: 'var(--theme-shadow-card)',
                  transition: 'border-color 0.2s'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                  <span style={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', color: '#a855f7', background: 'rgba(168,85,247,0.06)', padding: '4px 10px', borderRadius: '50px', letterSpacing: '0.04em' }}>
                    {art.category}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--theme-text-sub)', fontWeight: 600 }}>{art.date}</span>
                </div>
                
                <h3 style={{ fontSize: '1.2rem', fontWeight: 850, color: 'var(--theme-text-main)', lineHeight: 1.35, margin: 0 }}>{art.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--theme-text-sub)', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>{art.desc}</p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--theme-card-border)', paddingTop: '16px', marginTop: '8px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--theme-text-sub)', fontWeight: 650 }}>By {art.author}</span>
                  <Link href={`/blog/${art.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', fontWeight: 800, color: '#a855f7', textDecoration: 'none' }}>
                    Read Article <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '48px', color: 'var(--theme-text-sub)', background: 'var(--theme-card-bg)', borderRadius: '16px', border: '1px solid var(--theme-card-border)' }}>
              No articles matching your search query. Try filtering by another category.
            </div>
          )}
        </div>
      </section>

      {/* Subscription Callout */}
      <section style={{ background: 'var(--theme-bg-secondary)', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <span style={{ textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 800, color: '#7c3aed', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>Newsletter</span>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--theme-text-main)', marginBottom: '12px' }}>Get Weekly Insights</h2>
          <p style={{ color: 'var(--theme-text-sub)', lineHeight: 1.6, margin: '0 auto 28px', fontSize: '0.95rem' }}>
            Subscribe to our weekly editorial checklist and receive high-intent operational metrics directly in your inbox.
          </p>
          <form style={{ display: 'flex', gap: '8px', maxWidth: '400px', margin: '0 auto' }} onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your work email"
              required
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
        </div>
      </section>

    </div>
  );
}
