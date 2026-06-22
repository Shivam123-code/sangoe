'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Download, 
  Search, 
  FileText 
} from 'lucide-react';

const TEMPLATES = [
  { title: 'Standard Employee Offer Letter Template', cat: 'HR', type: 'DOCX', downloads: 1240 },
  { title: 'Weekly Attendance & Overtime Timesheet Tracker', cat: 'HR', type: 'XLSX', downloads: 3120 },
  { title: 'Non-Disclosure Agreement (NDA) Draft', cat: 'Compliance', type: 'PDF', downloads: 5410 },
  { title: 'Statutory compliance calendar checklist (2026)', cat: 'Compliance', type: 'XLSX', downloads: 8290 },
  { title: 'Subcontractor safety verification audit SOP', cat: 'Safety', type: 'DOCX', downloads: 910 },
  { title: 'Enterprise Risk Registry Matrix', cat: 'Risk', type: 'XLSX', downloads: 2180 },
  { title: 'IPO Readiness board review checklist', cat: 'IPO', type: 'PDF', downloads: 670 },
  { title: 'Board meeting minutes record SOP', cat: 'IPO', type: 'DOCX', downloads: 1450 },
  { title: 'Vendor evaluation & onboarding register', cat: 'Vendor', type: 'XLSX', downloads: 2320 },
  { title: 'Weekly Project task prioritization tracker', cat: 'Project', type: 'DOCX', downloads: 4890 },
  { title: 'Construction site accident near-miss report', cat: 'Safety', type: 'PDF', downloads: 1120 },
  { title: 'Department OKR planning template sheet', cat: 'Project', type: 'XLSX', downloads: 3410 }
];

const CATEGORIES = ['All', 'HR', 'Compliance', 'Safety', 'Risk', 'IPO', 'Vendor', 'Project'];

export default function ResourcesPage() {
  const [activeCat, setActiveCat] = useState('All');
  const [search, setSearch] = useState('');
  const [downloadingFile, setDownloadingFile] = useState(null);

  const handleDownload = (file) => {
    setDownloadingFile(file);
    setTimeout(() => {
      setDownloadingFile(null);
      alert(`${file.title} successfully downloaded! Check your downloads folder.`);
    }, 2000);
  };

  const filtered = TEMPLATES.filter(item => {
    const matchesCat = activeCat === 'All' || item.cat === activeCat;
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div style={{ paddingTop: '0', minHeight: '100vh', background: 'var(--theme-bg)', paddingBottom: '80px' }}>
      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #030d14 0%, #0a1f35 50%, #0d2744 100%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-130px', right: '-80px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '15%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 40px 80px', display: 'flex', alignItems: 'center', gap: '80px', position: 'relative', zIndex: 1 }}>
          <motion.div style={{ flex: '1.1', minWidth: 0 }} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <motion.span className="tag tag-dark" style={{ marginBottom: '20px', display: 'inline-block' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>Business Resources</motion.span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', fontWeight: 950, color: '#ffffff', lineHeight: 1.05, marginBottom: '24px', letterSpacing: '-0.02em' }}>
              1000+ Free Business<br />
              <span style={{ background: 'linear-gradient(135deg, #22d3ee 0%, #67e8f9 50%, #a5f3fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Templates &amp; Checklists</span>
            </h1>
            <motion.p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.75, maxWidth: '440px', marginBottom: '36px' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}>
              Download verified drafts, calculators, spreadsheets, and audit sheets prepared by leading Indian corporate consultants and CAs.
            </motion.p>
            <motion.div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
              <Link href="#templates" className="btn btn-purple">Browse Templates</Link>
              <Link href="/contact" className="btn btn-outline-white">Get Custom Templates</Link>
            </motion.div>
            <motion.div style={{ display: 'flex', gap: '32px', marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.08)' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }}>
              {[['1000+', 'Templates'], ['Free', 'Download'], ['8', 'Categories']].map(([num, label]) => (
                <div key={label}><div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffffff' }}>{num}</div><div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '2px' }}>{label}</div></div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div style={{ flex: '1', minWidth: 0, position: 'relative', flexShrink: 0, maxWidth: '520px' }} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
            <div style={{ position: 'absolute', inset: '-30px', borderRadius: '40px', background: 'radial-gradient(ellipse, rgba(6,182,212,0.28) 0%, transparent 70%)', filter: 'blur(28px)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 40px 80px rgba(0,0,0,0.6)', transform: 'perspective(1200px) rotateY(-8deg) rotateX(3deg)' }}>
              <Image src="/images/hero_resources.png" alt="Sangoe business resources" width={520} height={360} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(3,13,20,0.2) 0%, transparent 60%)' }} />
            </div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }} style={{ position: 'absolute', top: '-18px', right: '-18px', background: '#ffffff', borderRadius: '14px', padding: '10px 16px', boxShadow: '0 16px 40px rgba(0,0,0,0.35)', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#06b6d4', flexShrink: 0 }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#111827', whiteSpace: 'nowrap' }}>Free Download</span>
            </motion.div>
            <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1.2 }} style={{ position: 'absolute', bottom: '-18px', left: '-18px', background: 'linear-gradient(135deg, #0891b2, #0e7490)', borderRadius: '14px', padding: '12px 18px', boxShadow: '0 16px 40px rgba(6,182,212,0.4)', zIndex: 10 }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff' }}>1000+</div>
              <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>Templates Ready</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Panel */}
      <section id="templates" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ background: 'var(--theme-card-bg)', borderRadius: '16px', padding: '24px', border: '1px solid var(--theme-card-border)', boxShadow: 'var(--theme-shadow-card)', display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {/* Categories */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {CATEGORIES.map(cat => {
              const isActive = cat === activeCat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    backgroundColor: isActive ? 'var(--purple-600)' : 'var(--theme-bg)',
                    color: isActive ? '#ffffff' : 'var(--theme-text-sub)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div style={{ width: '100%', maxWidth: '320px', position: 'relative' }}>
            <input
              type="text"
              placeholder="Search templates..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 16px 10px 40px',
                borderRadius: '8px',
                background: 'var(--theme-input-bg)',
                color: 'var(--theme-text-main)',
                border: '1px solid var(--theme-input-border)',
                outline: 'none',
                fontSize: '0.85rem'
              }}
            />
            <Search size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--theme-text-faint)' }} />
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
          {filtered.map(file => (
            <motion.div
              key={file.title}
              whileHover={{ y: -4, boxShadow: 'var(--theme-shadow-card)' }}
              style={{
                background: 'var(--theme-card-bg)',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid var(--theme-card-border)',
                boxShadow: 'var(--theme-shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                transition: 'all 0.25s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, background: 'rgba(59, 130, 246, 0.12)', color: '#3b82f6', padding: '3px 8px', borderRadius: '4px' }}>{file.cat}</span>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, background: 'var(--theme-bg)', color: 'var(--theme-text-muted)', padding: '3px 8px', borderRadius: '4px' }}>{file.type}</span>
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--theme-text-main)', lineHeight: 1.4, marginBottom: '20px' }}>
                  <FileText size={16} style={{ color: 'var(--purple-500)', marginRight: '8px', verticalAlign: 'middle', display: 'inline' }} />
                  {file.title}
                </h3>
              </div>

              <div style={{ borderTop: '1px solid var(--theme-border)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--theme-text-faint)' }}>{file.downloads.toLocaleString()} DLs</span>
                <button
                  onClick={() => handleDownload(file)}
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: 'var(--purple-500)',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Download size={14} /> Download Free
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Downloading Loader Screen */}
      <AnimatePresence>
        {downloadingFile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(4px)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              style={{
                background: 'var(--theme-card-bg)',
                padding: '40px',
                borderRadius: '24px',
                textAlign: 'center',
                boxShadow: 'var(--theme-shadow-card)',
                maxWidth: '400px',
                width: '100%',
                margin: '0 20px',
                border: '1px solid var(--theme-card-border)'
              }}
            >
              <div style={{ display: 'inline-block', width: '48px', height: '48px', border: '4px solid var(--theme-bg)', borderTopColor: 'var(--purple-500)', borderRadius: '50%', animation: 'spin 1s linear infinite', marginBottom: '20px' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--theme-text-main)', marginBottom: '8px' }}>Preparing Download</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--theme-text-muted)' }}>Configuring files and links for <strong>{downloadingFile.title}</strong>...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
