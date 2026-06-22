'use client';
import { useState, useMemo, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search, X, CheckCircle2, ChevronDown } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

/* ── Icon helper ── */
const Icon = ({ name, size = 20, color = '#7C3AED' }) => {
  const Comp = LucideIcons[name] || LucideIcons.Layers;
  return <Comp size={size} color={color} strokeWidth={1.8} />;
};

/* ══════════════════════════════════════════════════════════════
   ALL SANGOE SERVICES — grouped by category
══════════════════════════════════════════════════════════════ */
const CATEGORIES = [
  {
    id: 'core', label: 'Core Platform', emoji: '🏠', color: '#7C3AED',
    services: [
      { id: 'core-dashboard', name: 'Dashboard', icon: 'LayoutDashboard', desc: 'Real-time KPIs & founder command center' },
      { id: 'core-mailbox', name: 'Mailbox', icon: 'Mail', desc: 'Integrated email linked to deals & clients' },
      { id: 'core-leads', name: 'Leads', icon: 'Target', desc: 'Kanban pipeline with lead scoring' },
      { id: 'core-customers', name: 'Customers', icon: 'Users', desc: '360° client profiles & history' },
      { id: 'core-projects', name: 'Projects', icon: 'Briefcase', desc: 'Gantt charts & milestone tracking' },
      { id: 'core-tasks', name: 'Tasks', icon: 'CheckSquare', desc: 'Task assignment with time tracking' },
      { id: 'core-contracts', name: 'Contracts', icon: 'FileText', desc: 'Digital signing & SLA tracking' },
    ],
  },
  {
    id: 'sales', label: 'Sales', emoji: '💼', color: '#3B82F6',
    services: [
      { id: 'sales-sales', name: 'Sales Management', icon: 'TrendingUp', desc: 'Rep targets & revenue tracking' },
      { id: 'sales-proposals', name: 'Proposals', icon: 'FileSpreadsheet', desc: 'Interactive proposals with pricing tables' },
      { id: 'sales-estimates', name: 'Estimates', icon: 'Calculator', desc: 'Itemized estimates → invoices in one click' },
      { id: 'sales-credit-notes', name: 'Credit Notes', icon: 'MinusSquare', desc: 'Billing adjustments & refund workflows' },
      { id: 'sales-vendor', name: 'Third-party Vendor', icon: 'UserCheck', desc: 'Restricted vendor portal access' },
      { id: 'sales-dashboard', name: 'Sales Dashboard', icon: 'BarChart3', desc: 'Win-rate, funnel & rep analytics' },
      { id: 'sales-kickoff', name: 'Kickoff Meetings', icon: 'Play', desc: 'Post-deal handover & scheduling' },
    ],
  },
  {
    id: 'accounting', label: 'Accounting', emoji: '📊', color: '#10B981',
    services: [
      { id: 'accounting-main', name: 'Accounting', icon: 'Calculator', desc: 'Double-entry bookkeeping & P&L' },
      { id: 'accounting-checks', name: 'Checks', icon: 'CreditCard', desc: 'Physical check issuance & clearance' },
      { id: 'accounting-convert', name: 'Currency Convert', icon: 'RefreshCw', desc: 'Live forex & multi-currency invoicing' },
      { id: 'accounting-coa', name: 'Chart of Accounts', icon: 'FolderTree', desc: 'Nested account hierarchy' },
    ],
  },
  {
    id: 'purchase', label: 'Purchase', emoji: '🛒', color: '#A855F7',
    services: [
      { id: 'purchase-main', name: 'Purchase', icon: 'ShoppingCart', desc: 'End-to-end procurement management' },
      { id: 'purchase-vendors', name: 'Vendors', icon: 'Building2', desc: 'Supplier directory & SLA ratings' },
      { id: 'purchase-items', name: 'Vendor Items', icon: 'Package', desc: 'SKU mapping & price tracking' },
      { id: 'purchase-request', name: 'Purchase Request', icon: 'Clipboard', desc: 'Employee requests with approvals' },
      { id: 'purchase-quotations', name: 'Quotations (RFQ)', icon: 'FileSpreadsheet', desc: 'Multi-vendor price comparison' },
      { id: 'purchase-order', name: 'Purchase Orders', icon: 'FileCheck', desc: 'Digital PO issuance & fulfillment' },
      { id: 'purchase-returns', name: 'Order Returns', icon: 'CornerUpLeft', desc: 'Damaged/excess stock returns' },
      { id: 'purchase-contracts', name: 'Purchase Contracts', icon: 'FileText', desc: 'Long-term vendor SLA management' },
      { id: 'purchase-debit-notes', name: 'Debit Notes', icon: 'PlusSquare', desc: 'Invoice adjustment requests' },
      { id: 'purchase-invoices', name: 'Vendor Invoices', icon: 'Receipt', desc: '3-way matching & AP queuing' },
    ],
  },
  {
    id: 'recruitment', label: 'Recruitment', emoji: '🎯', color: '#EC4899',
    services: [
      { id: 'recruitment-main', name: 'Recruitment', icon: 'UserPlus', desc: 'Unified vacancy & hiring workspace' },
      { id: 'recruitment-dashboard', name: 'Hiring Dashboard', icon: 'BarChart3', desc: 'Cost-to-hire & offer acceptance stats' },
      { id: 'recruitment-campaign', name: 'Hiring Campaign', icon: 'Send', desc: 'Multi-channel job board campaigns' },
      { id: 'recruitment-candidate', name: 'Candidate Profile', icon: 'Users', desc: 'AI resume parser & scorecards' },
      { id: 'recruitment-schedule', name: 'Interview Schedule', icon: 'Calendar', desc: 'Panel scheduling & Google Calendar sync' },
      { id: 'recruitment-channel', name: 'Recruitment Channel', icon: 'Share2', desc: 'Agencies, referrals & source tracking' },
      { id: 'recruitment-portal', name: 'Careers Portal', icon: 'Globe', desc: 'Public-facing white-labelled job page' },
    ],
  },
  {
    id: 'hr-records', label: 'HR Records', emoji: '👥', color: '#6366F1',
    services: [
      { id: 'hr-records-main', name: 'HR Records', icon: 'Users', desc: 'Employee profiles & directories' },
      { id: 'hr-records-dashboard', name: 'Workforce Analytics', icon: 'BarChart3', desc: 'Headcount, attrition & NPS' },
      { id: 'hr-records-jd', name: 'Job Descriptions', icon: 'FileText', desc: 'Standardized JD & KPI templates' },
      { id: 'hr-records-org', name: 'Org Chart', icon: 'Network', desc: 'Interactive reporting hierarchy' },
      { id: 'hr-records-onboarding', name: 'Onboarding', icon: 'ClipboardCheck', desc: 'New-hire task checklists' },
      { id: 'hr-records-records', name: 'Document Vault', icon: 'Lock', desc: 'Secure employee file storage' },
      { id: 'hr-records-training', name: 'Training', icon: 'GraduationCap', desc: 'Courses & certification tracking' },
      { id: 'hr-records-contracts', name: 'Employment Contracts', icon: 'FileSpreadsheet', desc: 'Offer letters & digital signing' },
      { id: 'hr-records-dependents', name: 'Dependants', icon: 'Heart', desc: 'Insurance & tax declarations' },
      { id: 'hr-records-layoff', name: 'Layoff Checklist', icon: 'UserMinus', desc: 'Exit compliance & asset returns' },
      { id: 'hr-records-qa', name: 'HR Q&A Wiki', icon: 'HelpCircle', desc: 'Searchable policy knowledge base' },
    ],
  },
  {
    id: 'hr-payroll', label: 'HR Payroll', emoji: '💰', color: '#F59E0B',
    services: [
      { id: 'hr-payroll-employees', name: 'Employee Payroll', icon: 'Users', desc: 'Salary, bank & tax configuration' },
      { id: 'hr-payroll-attendance', name: 'Attendance Sync', icon: 'CalendarCheck', desc: 'LOP, overtime & leave deductions' },
      { id: 'hr-payroll-commissions', name: 'Commissions', icon: 'TrendingUp', desc: 'Deal-based incentive payouts' },
      { id: 'hr-payroll-deductions', name: 'PF / ESIC / PT', icon: 'Percent', desc: 'Indian compliance auto-calculation' },
      { id: 'hr-payroll-payslips', name: 'Payslips', icon: 'Receipt', desc: 'Auto-generated payslip PDFs' },
      { id: 'hr-payroll-templates', name: 'Payslip Templates', icon: 'Palette', desc: 'Custom branded payslip layouts' },
      { id: 'hr-payroll-taxes', name: 'Income Tax / TDS', icon: 'DollarSign', desc: 'Form 16 & TDS calculations' },
    ],
  },
  {
    id: 'timesheets', label: 'Timesheets & Leave', emoji: '⏱️', color: '#06B6D4',
    services: [
      { id: 'timesheets-attendance', name: 'Attendance', icon: 'CalendarDays', desc: 'Daily check-in/out with geo-tagging' },
      { id: 'timesheets-timesheets', name: 'Timesheets', icon: 'Clock', desc: 'Billable hour tracking per project' },
      { id: 'timesheets-leave', name: 'Leave Management', icon: 'Umbrella', desc: 'Leave policies & approval workflows' },
      { id: 'timesheets-shifts', name: 'Shift Management', icon: 'RotateCcw', desc: 'Roster planning & shift swaps' },
    ],
  },
  {
    id: 'reports', label: 'Reports & Analytics', emoji: '📈', color: '#8B5CF6',
    services: [
      { id: 'reports-financial', name: 'Financial Reports', icon: 'BarChart2', desc: 'P&L, balance sheet & cash flow' },
      { id: 'reports-sales', name: 'Sales Reports', icon: 'TrendingUp', desc: 'Revenue, pipeline & rep performance' },
      { id: 'reports-hr', name: 'HR Analytics', icon: 'Users', desc: 'Workforce metrics & attrition reports' },
      { id: 'reports-custom', name: 'Custom Reports', icon: 'Sliders', desc: 'Drag-and-drop report builder' },
    ],
  },
  {
    id: 'support', label: 'Support & Helpdesk', emoji: '🎧', color: '#EF4444',
    services: [
      { id: 'support-tickets', name: 'Support Tickets', icon: 'Headphones', desc: 'Omni-channel ticket management' },
      { id: 'support-sla', name: 'SLA Management', icon: 'ShieldCheck', desc: 'Response time SLA tracking' },
      { id: 'support-kb', name: 'Knowledge Base', icon: 'BookOpen', desc: 'Self-service customer help docs' },
    ],
  },
  {
    id: 'documents', label: 'Document Cloud', emoji: '📁', color: '#0891B2',
    services: [
      { id: 'documents-main', name: 'Document Manager', icon: 'FolderOpen', desc: 'Centralized company file storage' },
      { id: 'documents-sign', name: 'E-Signature', icon: 'PenLine', desc: 'Legally-binding digital signing' },
      { id: 'documents-templates', name: 'Doc Templates', icon: 'LayoutTemplate', desc: 'Pre-built business document templates' },
    ],
  },
  {
    id: 'approvify', label: 'Approvify (Approvals)', emoji: '✅', color: '#059669',
    services: [
      { id: 'approvify-main', name: 'Approval Workflows', icon: 'CheckCircle2', desc: 'Multi-level approval routing' },
      { id: 'approvify-matrix', name: 'Approval Matrix', icon: 'Network', desc: 'Role-based delegation rules' },
      { id: 'approvify-audit', name: 'Approval Audit Trail', icon: 'History', desc: 'Complete decision log & timestamps' },
    ],
  },
  {
    id: 'marketing', label: 'Marketing Automation', emoji: '📣', color: '#D97706',
    services: [
      { id: 'marketing-email', name: 'Email Campaigns', icon: 'Mail', desc: 'Drip campaigns & newsletters' },
      { id: 'marketing-sms', name: 'SMS Marketing', icon: 'MessageSquare', desc: 'Bulk SMS with delivery tracking' },
      { id: 'marketing-social', name: 'Social Media', icon: 'Share2', desc: 'Scheduled posts & engagement stats' },
      { id: 'marketing-whatsapp', name: 'WhatsApp Marketing', icon: 'MessageCircle', desc: 'Bulk WhatsApp broadcast campaigns' },
      { id: 'marketing-analytics', name: 'Campaign Analytics', icon: 'BarChart2', desc: 'Open rates, CTR & ROI tracking' },
    ],
  },
  {
    id: 'commission', label: 'Commission Suite', emoji: '🏆', color: '#7C3AED',
    services: [
      { id: 'commission-main', name: 'Commission Tiers', icon: 'Award', desc: 'Incentive slabs & payout rules' },
      { id: 'commission-receipt', name: 'Commission Receipts', icon: 'Receipt', desc: 'Agent invoice & TDS deductions' },
      { id: 'commission-program', name: 'Affiliate Program', icon: 'Users', desc: 'Referral campaigns & tracking' },
    ],
  },
  {
    id: 'loyalty', label: 'Customer Loyalty', emoji: '⭐', color: '#F59E0B',
    services: [
      { id: 'loyalty-points', name: 'Loyalty Points', icon: 'Star', desc: 'Points accumulation & redemption' },
      { id: 'loyalty-cards', name: 'Loyalty Cards', icon: 'CreditCard', desc: 'Digital membership card management' },
      { id: 'loyalty-rewards', name: 'Rewards Catalog', icon: 'Gift', desc: 'Configurable reward redemption' },
    ],
  },
  {
    id: 'fleet', label: 'Fleet Management', emoji: '🚗', color: '#64748B',
    services: [
      { id: 'fleet-vehicles', name: 'Vehicles', icon: 'Car', desc: 'Company vehicle registry & docs' },
      { id: 'fleet-maintenance', name: 'Maintenance Logs', icon: 'Wrench', desc: 'Service schedules & reminders' },
      { id: 'fleet-fuel', name: 'Fuel Tracking', icon: 'Fuel', desc: 'Fuel consumption & cost analytics' },
    ],
  },
  {
    id: 'okr', label: 'OKR & Goals', emoji: '🎯', color: '#6366F1',
    services: [
      { id: 'okr-main', name: 'OKR Dashboard', icon: 'Target', desc: 'Company & team OKR tracking' },
      { id: 'okr-goals', name: 'Goal Setting', icon: 'CheckCircle2', desc: 'Cascaded team & individual goals' },
      { id: 'okr-kpi', name: 'KPI Scorecards', icon: 'BarChart3', desc: 'Automated KPI performance scoring' },
      { id: 'okr-reviews', name: 'Performance Reviews', icon: 'Star', desc: '360° appraisal cycle management' },
    ],
  },
  {
    id: 'utilities', label: 'Utilities', emoji: '🔧', color: '#94A3B8',
    services: [
      { id: 'utilities-media', name: 'Media Library', icon: 'Image', desc: 'Company asset storage & CDN links' },
      { id: 'utilities-calendar', name: 'Unified Calendar', icon: 'CalendarDays', desc: 'All events in one smart calendar' },
      { id: 'utilities-workflow', name: 'Workflow Automation', icon: 'Zap', desc: 'Visual trigger-action rule builder' },
      { id: 'utilities-lead-finder', name: 'Lead Finder', icon: 'Search', desc: 'Prospect discovery by industry & location' },
    ],
  },
];

/* ── Category color map ── */
const CAT_COLORS = Object.fromEntries(CATEGORIES.map(c => [c.id, c.color]));

/* ═══════════════════════════════════════════════════════
   SERVICE CARD
═══════════════════════════════════════════════════════ */
function ServiceCard({ service, catColor, selected, onToggle }) {
  const isOn = selected.has(service.id);
  return (
    <motion.button
      layout
      onClick={() => onToggle(service.id)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      style={{
        display: 'flex', alignItems: 'center', gap: '12px',
        padding: '12px 14px',
        background: isOn ? `${catColor}0d` : 'var(--theme-card-bg)',
        border: `1.5px solid ${isOn ? catColor : 'var(--theme-card-border)'}`,
        borderRadius: '12px', cursor: 'pointer',
        textAlign: 'left', width: '100%',
        boxShadow: isOn
          ? `0 4px 14px ${catColor}22`
          : 'var(--theme-shadow-card)',
        transition: 'border-color 0.15s, background 0.15s, box-shadow 0.15s',
        position: 'relative',
      }}
    >
      {/* Icon bubble */}
      <span style={{
        width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0,
        background: `${catColor}18`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon name={service.icon} size={18} color={catColor} />
      </span>

      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{
          display: 'block', fontSize: '0.82rem', fontWeight: 700,
          color: isOn ? catColor : 'var(--theme-text-main)',
          lineHeight: 1.3, marginBottom: '2px',
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>
          {service.name}
        </span>
        <span style={{
          display: 'block', fontSize: '0.7rem', color: 'var(--theme-text-muted)',
          fontWeight: 500, lineHeight: 1.3,
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>
          {service.desc}
        </span>
      </span>

      {/* Checkmark */}
      <span style={{
        width: '18px', height: '18px', borderRadius: '50%', flexShrink: 0,
        background: isOn ? catColor : 'var(--theme-bg)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background 0.15s',
      }}>
        <CheckCircle2 size={11} color={isOn ? '#fff' : 'var(--theme-text-faint)'} strokeWidth={2.5} />
      </span>
    </motion.button>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════ */
function GetStartedContent() {
  const router = useRouter();
  const params = useSearchParams();
  const plan = params.get('plan') || 'starter';

  const LS_KEY = 'sangoe_get_started_selected';

  // Always start empty (matches SSR). Load localStorage after mount.
  const [selected, setSelected] = useState(new Set());
  const [search, setSearch] = useState('');
  const [openCats, setOpenCats] = useState(() => new Set(CATEGORIES.map(c => c.id)));
  const [mounted, setMounted] = useState(false);

  // After hydration: restore saved selection
  useEffect(() => {
    setMounted(true);
    try {
      // 1. Prioritize URL query parameters (e.g. when clicking 'Change Services')
      const urlServices = params.get('services');
      if (urlServices) {
        const ids = urlServices.split(',').filter(Boolean);
        setSelected(new Set(ids));
        return;
      }

      // 2. Fallback to localStorage
      const saved = localStorage.getItem(LS_KEY);
      if (saved) setSelected(new Set(JSON.parse(saved)));
    } catch { /* ignore */ }
  }, [params]);

  // Persist to localStorage whenever selection changes (client-only)
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(LS_KEY, JSON.stringify([...selected]));
    } catch { /* quota errors — fail silently */ }
  }, [selected, mounted]);

  const toggle = (id) => setSelected(prev => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });

  const toggleCat = (id) => setOpenCats(prev => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });

  const clearAll = () => {
    setSelected(new Set());
    try { localStorage.removeItem(LS_KEY); } catch { /* silent */ }
  };

  const filtered = useMemo(() => {
    if (!search.trim()) return CATEGORIES;
    const q = search.toLowerCase();
    return CATEGORIES.map(cat => ({
      ...cat,
      services: cat.services.filter(s =>
        s.name.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q)
      ),
    })).filter(cat => cat.services.length > 0);
  }, [search]);

  const allSelected = CATEGORIES.flatMap(c =>
    c.services.filter(s => selected.has(s.id)).map(s => ({ ...s, catColor: CAT_COLORS[c.id] }))
  );

  const handleContinue = () => {
    const services = [...selected].join(',');
    try { localStorage.removeItem(LS_KEY); } catch { /* silent */ }
    router.push(`/contact?plan=${plan}&services=${services}`);
  };

  const PLAN_LABELS = {
    trial: 'Free Trial', startup: 'Startup OS™',
    growth: 'Business Growth OS™', enterprise: 'Enterprise OS™',
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--theme-bg)' }}>

      {/* ── Top Hero Bar ── */}
      <div style={{
        background: 'linear-gradient(135deg, #1a0533 0%, #2d1060 50%, #1a0a5a 100%)',
        padding: '80px 20px 40px',
        textAlign: 'center',
      }}>
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(167,139,250,0.15)', color: '#C4B5FD',
            fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.1em',
            textTransform: 'uppercase', padding: '5px 14px', borderRadius: '99px',
            border: '1px solid rgba(167,139,250,0.25)', marginBottom: '18px',
          }}>
            {PLAN_LABELS[plan] || plan.toUpperCase()} — Service Selection
          </span>

          <h1 style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, color: '#fff',
            marginBottom: '12px', letterSpacing: '-0.02em',
          }}>
            Choose your <span style={{ color: '#A78BFA' }}>Services</span>
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)', maxWidth: '420px', margin: '0 auto 28px' }}>
            Select any modules your business needs. Pick as many as you want — our team will tailor a plan for you.
          </p>

          {/* Search */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '12px', padding: '10px 16px',
            maxWidth: '440px', margin: '0 auto',
            backdropFilter: 'blur(8px)',
          }}>
            <Search size={16} color="rgba(255,255,255,0.5)" strokeWidth={2} />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search services..."
              style={{
                flex: 1, background: 'none', border: 'none', outline: 'none',
                color: '#fff', fontSize: '0.88rem', fontWeight: 500,
              }}
            />
            {search && (
              <button onClick={() => setSearch('')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.5)', padding: 0 }}>
                <X size={14} />
              </button>
            )}
          </div>
        </motion.div>
      </div>

      {/* ── Body ── */}
      <div className="gs-body" style={{
        maxWidth: '1200px', margin: '0 auto', padding: '32px 20px 120px',
        display: 'flex', gap: '28px', alignItems: 'flex-start',
      }}>

        {/* ── Mobile-only: selected services panel (client-only to avoid hydration mismatch) ── */}
        {mounted && (
          <AnimatePresence>
            {selected.size > 0 && (
            <motion.div
              className="mob-selected"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              style={{ display: 'none', marginBottom: '12px' }}
            >
              <div style={{
                background: 'var(--theme-card-bg)', borderRadius: '14px',
                border: '1px solid var(--theme-card-border)',
                boxShadow: 'var(--theme-shadow-card)',
                overflow: 'hidden',
              }}>
                {/* Header */}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderBottom: '1px solid var(--theme-border)',
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.05), rgba(99,102,241,0.05))',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      width: '22px', height: '22px', borderRadius: '50%',
                      background: '#7C3AED', color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.7rem', fontWeight: 800, flexShrink: 0,
                    }}>{selected.size}</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--theme-text-main)' }}>
                      Service{selected.size > 1 ? 's' : ''} Selected
                    </span>
                  </div>
                  <button
                    onClick={clearAll}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#EF4444', fontSize: '0.72rem', fontWeight: 700, padding: '4px 8px' }}
                  >
                    Clear all
                  </button>
                </div>

                {/* Chips */}
                <div style={{
                  display: 'flex', flexWrap: 'wrap', gap: '8px',
                  padding: '12px 14px',
                }}>
                  {allSelected.map(item => (
                    <div key={item.id} style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      background: `${item.catColor}10`,
                      border: `1px solid ${item.catColor}30`,
                      borderRadius: '99px', padding: '5px 10px 5px 8px',
                    }}>
                      <Icon name={item.icon} size={12} color={item.catColor} />
                      <span style={{ fontSize: '0.73rem', fontWeight: 700, color: item.catColor }}>
                        {item.name}
                      </span>
                      <button
                        onClick={() => toggle(item.id)}
                        style={{
                          background: 'none', border: 'none', cursor: 'pointer',
                          padding: 0, lineHeight: 1, color: item.catColor, opacity: 0.6,
                          display: 'flex', alignItems: 'center',
                        }}
                      >
                        <X size={11} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            )}
          </AnimatePresence>
        )}

        <div style={{ flex: 1, minWidth: 0 }}>
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--theme-text-muted)' }}>
              <Search size={36} color="var(--theme-text-faint)" />
              <p style={{ marginTop: '12px', fontSize: '0.95rem' }}>No services match your search.</p>
            </div>
          )}

          {filtered.map((cat, ci) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ci * 0.04, duration: 0.35 }}
              style={{
                background: 'var(--theme-card-bg)', borderRadius: '16px',
                border: '1px solid var(--theme-card-border)',
                marginBottom: '16px',
                overflow: 'hidden',
                boxShadow: 'var(--theme-shadow-card)',
              }}
            >
              {/* Category header */}
              <button
                onClick={() => toggleCat(cat.id)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '14px 18px', background: 'none', border: 'none', cursor: 'pointer',
                  borderBottom: openCats.has(cat.id) ? '1px solid var(--theme-border)' : 'none',
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>{cat.emoji}</span>
                <span style={{
                  flex: 1, textAlign: 'left', fontSize: '0.9rem', fontWeight: 800,
                  color: 'var(--theme-text-main)',
                }}>
                  {cat.label}
                  <span style={{
                    marginLeft: '8px', fontSize: '0.72rem', fontWeight: 600,
                    color: cat.color, background: `${cat.color}14`,
                    padding: '2px 8px', borderRadius: '99px',
                  }}>
                    {cat.services.length} modules
                  </span>
                  {/* selected count badge */}
                  {cat.services.filter(s => selected.has(s.id)).length > 0 && (
                    <span style={{
                      marginLeft: '6px', fontSize: '0.68rem', fontWeight: 700,
                      color: '#fff', background: cat.color,
                      padding: '2px 7px', borderRadius: '99px',
                    }}>
                      {cat.services.filter(s => selected.has(s.id)).length} selected
                    </span>
                  )}
                </span>
                <ChevronDown
                  size={16} color="var(--theme-text-muted)"
                  style={{ transform: openCats.has(cat.id) ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}
                />
              </button>

              {/* Service grid */}
              <AnimatePresence initial={false}>
                {openCats.has(cat.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="gs-grid" style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
                      gap: '10px',
                      padding: '14px',
                    }}>
                      {cat.services.map(service => (
                        <ServiceCard
                          key={service.id}
                          service={service}
                          catColor={cat.color}
                          selected={selected}
                          onToggle={toggle}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* ── Sticky Sidebar ── */}
        <div className="gs-sidebar" style={{
          width: '272px', flexShrink: 0,
          position: 'sticky', top: '80px',
          display: 'flex', flexDirection: 'column', gap: '12px',
        }}>
          {/* Summary card */}
          <div style={{
            background: 'var(--theme-card-bg)', borderRadius: '16px',
            border: '1px solid var(--theme-card-border)',
            boxShadow: 'var(--theme-shadow-card)',
            overflow: 'hidden',
          }}>
            {/* Card header */}
            <div style={{
              padding: '16px 18px 12px',
              borderBottom: '1px solid var(--theme-border)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--theme-text-main)' }}>
                  {selected.size > 0
                    ? `${selected.size} Service${selected.size > 1 ? 's' : ''} Selected`
                    : 'No services yet'}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--theme-text-muted)', marginTop: '1px' }}>
                  {selected.size === 0 ? 'Click modules to add them' : 'Your selection summary'}
                </div>
              </div>
              {selected.size > 0 && (
                <button
                  onClick={clearAll}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#EF4444', fontSize: '0.72rem', fontWeight: 700 }}
                >
                  Clear all
                </button>
              )}
            </div>

            {/* Selected list */}
            <div style={{ maxHeight: '260px', overflowY: 'auto', padding: '12px 18px' }}>
              {selected.size === 0 ? (
                <div style={{ textAlign: 'center', padding: '20px 0', color: 'var(--theme-text-faint)' }}>
                  <CheckCircle2 size={28} color="var(--theme-border)" />
                  <p style={{ fontSize: '0.78rem', marginTop: '8px', color: 'var(--theme-text-faint)' }}>Select services from the left</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {allSelected.map(item => (
                    <div key={item.id} style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      padding: '6px 8px', borderRadius: '8px',
                      background: `${item.catColor}08`,
                    }}>
                      <Icon name={item.icon} size={13} color={item.catColor} />
                      <span style={{ fontSize: '0.76rem', color: 'var(--theme-text-sub)', fontWeight: 600, flex: 1 }}>{item.name}</span>
                      <button
                        onClick={() => toggle(item.id)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--theme-text-faint)', padding: '0 2px', lineHeight: 1 }}
                      >
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Trial badge */}
            <div style={{
              margin: '0 14px 14px',
              background: 'linear-gradient(135deg, rgba(124,58,237,0.07) 0%, rgba(99,102,241,0.07) 100%)',
              borderRadius: '10px', padding: '10px 12px',
              border: '1px solid rgba(124,58,237,0.12)',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#7C3AED' }}>14-day free trial</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--theme-text-muted)', marginTop: '2px' }}>No credit card required</div>
            </div>

            {/* Continue button */}
            <div style={{ padding: '0 14px 14px' }}>
              <button
                onClick={handleContinue}
                disabled={selected.size === 0}
                style={{
                  width: '100%', padding: '13px',
                  background: selected.size > 0
                    ? 'linear-gradient(135deg, #8B5CF6 0%, #6C4CF1 50%, #5B21B6 100%)'
                    : 'var(--theme-bg)',
                  color: selected.size > 0 ? '#fff' : 'var(--theme-text-faint)',
                  border: 'none', borderRadius: '10px',
                  fontSize: '0.88rem', fontWeight: 800, cursor: selected.size > 0 ? 'pointer' : 'default',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  boxShadow: selected.size > 0 ? '0 6px 20px rgba(124,58,237,0.3)' : 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                Continue <ArrowRight size={15} strokeWidth={2.5} />
              </button>
              {selected.size === 0 && (
                <p style={{ textAlign: 'center', fontSize: '0.7rem', color: 'var(--theme-text-faint)', marginTop: '8px', marginBottom: 0 }}>
                  Select at least 1 service
                </p>
              )}
            </div>
          </div>

          {/* Help note */}
          <div style={{
            background: 'var(--theme-card-bg)', borderRadius: '12px', border: '1px solid var(--theme-card-border)',
            padding: '14px 16px',
          }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--theme-text-muted)', margin: 0, lineHeight: 1.6 }}>
              💡 <strong style={{ color: 'var(--theme-text-sub)' }}>Not sure what to pick?</strong> Just select anything that looks relevant — our team will guide you during onboarding.
            </p>
          </div>
        </div>
      </div>

      {/* ── Mobile floating bar — visibility controlled ONLY by CSS, no inline display ── */}
      <div className={`mob-bar${selected.size > 0 ? ' mob-bar--visible' : ''}`}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--theme-text-sub)' }}>
            {selected.size} service{selected.size > 1 ? 's' : ''} selected
          </span>
          <button
            onClick={clearAll}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#EF4444', fontSize: '0.75rem', fontWeight: 700 }}
          >
            Clear all
          </button>
        </div>
        <button
          onClick={handleContinue}
          style={{
            width: '100%', padding: '15px',
            background: 'linear-gradient(135deg, #8B5CF6, #5B21B6)',
            color: '#fff', border: 'none', borderRadius: '12px',
            fontSize: '1rem', fontWeight: 800, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          }}
        >
          Continue <ArrowRight size={16} />
        </button>
      </div>

      <style>{`
        /* ── Responsive ── */

        /* Tablet */
        @media (max-width: 1024px) {
          .gs-sidebar { width: 240px; }
          .gs-grid { grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)) !important; }
        }

        /* Mobile floating bar — sits ABOVE the bottom nav (z-index 1200) */
        .mob-bar {
          display: none;
          position: fixed;
          bottom: 64px;
          left: 0; right: 0;
          background: var(--theme-card-bg);
          border: none;
          border-top: 1px solid var(--theme-card-border);
          border-radius: 0;
          padding: 14px 16px 16px;
          box-shadow: var(--theme-shadow-card);
          z-index: 1300;
          transform: translateY(calc(100% + 64px));
          transition: transform 0.25s cubic-bezier(0.16,1,0.3,1);
        }
        .mob-bar--visible {
          transform: translateY(0);
        }

        /* Mobile: show bar, stack layout */
        @media (max-width: 768px) {
          .mob-bar { display: block; }
          .mob-selected { display: block !important; }
          .gs-body {
            flex-direction: column !important;
            padding: 16px 12px 180px !important;
            gap: 0 !important;
          }
          .gs-sidebar { display: none !important; }
          .gs-grid { grid-template-columns: 1fr 1fr !important; gap: 8px !important; }
        }

        /* Small mobile: single column */
        @media (max-width: 480px) {
          .gs-grid { grid-template-columns: 1fr !important; }
        }

        /* Sidebar scrollbar */
        .gs-sidebar ::-webkit-scrollbar { width: 4px; }
        .gs-sidebar ::-webkit-scrollbar-track { background: var(--theme-bg); }
        .gs-sidebar ::-webkit-scrollbar-thumb { background: var(--theme-input-border); border-radius: 4px; }
      `}</style>

    </div>
  );
}

export default function GetStartedPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--theme-bg)' }}>
        <div style={{ fontSize: '0.9rem', color: 'var(--purple-500)', fontWeight: 600 }}>Loading services...</div>
      </div>
    }>
      <GetStartedContent />
    </Suspense>
  );
}
