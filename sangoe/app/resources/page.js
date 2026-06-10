'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f9fafb', paddingBottom: '80px' }}>
      {/* Header */}
      <section style={{ padding: '80px 20px', textAlign: 'center', background: 'linear-gradient(180deg, #F3E8FF 0%, #EFF6FF 60%, #F9FAFB 100%)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="tag" style={{ marginBottom: '16px', color: '#7C3AED', background: '#F5F3FF', borderColor: '#DDD6FE' }}>Business resources</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 950, color: '#111827', lineHeight: 1.1, marginBottom: '20px' }}>
            1000+ Free Business <br /><span style={{ color: '#7C3AED' }}>Templates, SOPs &amp; Checklists</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#4b5563', lineHeight: 1.7 }}>
            Download verified drafts, calculators, spreadsheets, and audit sheets prepared by leading Indian corporate consultants and CAs.
          </p>
        </div>
      </section>

      {/* Filter and Search Panel */}
      <section style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ background: '#ffffff', borderRadius: '16px', padding: '24px', border: '1px solid rgba(0,0,0,0.04)', boxShadow: '0 4px 12px rgba(0,0,0,0.008)', display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
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
                    backgroundColor: isActive ? '#7C3AED' : '#f3f4f6',
                    color: isActive ? '#ffffff' : '#4b5563',
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
                border: '1px solid #d1d5db',
                outline: 'none',
                fontSize: '0.85rem'
              }}
            />
            <Search size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
          {filtered.map(file => (
            <motion.div
              key={file.title}
              whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(0,0,0,0.04)' }}
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid rgba(0,0,0,0.04)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.008)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                transition: 'all 0.25s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, background: '#EFF6FF', color: '#1E40AF', padding: '3px 8px', borderRadius: '4px' }}>{file.cat}</span>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, background: '#F3F4F6', color: '#374151', padding: '3px 8px', borderRadius: '4px' }}>{file.type}</span>
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#111827', lineHeight: 1.4, marginBottom: '20px' }}>
                  <FileText size={16} style={{ color: '#7C3AED', marginRight: '8px', verticalAlign: 'middle', display: 'inline' }} />
                  {file.title}
                </h3>
              </div>

              <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{file.downloads.toLocaleString()} DLs</span>
                <button
                  onClick={() => handleDownload(file)}
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#7C3AED',
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
                background: '#ffffff',
                padding: '40px',
                borderRadius: '24px',
                textAlign: 'center',
                boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                maxWidth: '400px',
                width: '100%',
                margin: '0 20px',
                border: '1px solid rgba(0,0,0,0.05)'
              }}
            >
              <div style={{ display: 'inline-block', width: '48px', height: '48px', border: '4px solid #F3E8FF', borderTopColor: '#7C3AED', borderRadius: '50%', animation: 'spin 1s linear infinite', marginBottom: '20px' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>Preparing Download</h3>
              <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>Configuring files and links for <strong>{downloadingFile.title}</strong>...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
