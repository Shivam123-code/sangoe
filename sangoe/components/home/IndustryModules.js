'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Building2, Factory, Utensils, FlaskConical, Monitor, Headphones,
  Mountain, Wrench, Warehouse, Truck, Paintbrush2, LayoutDashboard,
  Briefcase, Scale, GraduationCap, Landmark, Heart, Users,
  Globe, ClipboardCheck, Award,
  BarChart3, Shield, Zap, DollarSign, UserCheck, Activity,
  FileText, TrendingUp, ShieldCheck, Cpu, Package, MapPin,
  Phone, BookOpen, Target, CreditCard, Leaf, Search,
  ArrowRight, ChevronRight
} from 'lucide-react';
import styles from './IndustryModules.module.css';

/* ── All 21 Industries with their modules ── */
export const INDUSTRIES = [
  {
    id: 'construction',
    icon: Building2, label: 'Construction',
    color: '#f97316', bg: '#fff7ed',
    modules: [
      { icon: LayoutDashboard, name: 'Project Management', desc: 'Site timelines, milestones & Gantt charts' },
      { icon: Users,           name: 'HR & Payroll',       desc: 'Labour attendance, contractor payroll' },
      { icon: DollarSign,      name: 'Finance & Accounts', desc: 'Budget tracking & P&L in real-time' },
      { icon: Wrench,          name: 'Vendor Management',  desc: 'Subcontractor & supplier procurement' },
      { icon: Shield,          name: 'Compliance & Legal', desc: 'Labour law, safety & permit compliance' },
      { icon: Package,         name: 'Material Tracking',  desc: 'Site inventory & material consumption' },
      { icon: FileText,        name: 'Document Vault',     desc: 'Drawings, BOQs & contract storage' },
      { icon: Target,          name: 'Quality Control',    desc: 'Inspection checklists & snag reports' },
    ],
  },
  {
    id: 'manufacturing',
    icon: Factory, label: 'Manufacturing',
    color: '#3b82f6', bg: '#eff6ff',
    modules: [
      { icon: Activity,     name: 'Production Planning',  desc: 'Work orders, BOM & production schedules' },
      { icon: Package,      name: 'Inventory & Stock',    desc: 'Raw material & finished goods tracking' },
      { icon: Target,       name: 'Quality Control',      desc: 'Batch inspection & rejection analysis' },
      { icon: Users,        name: 'HR & Payroll',         desc: 'Shift management & factory payroll' },
      { icon: DollarSign,   name: 'Finance & Accounts',   desc: 'Cost of goods & profitability tracking' },
      { icon: Shield,       name: 'Compliance',           desc: 'Factory Act, pollution & ISO compliance' },
      { icon: Wrench,       name: 'Machine Maintenance',  desc: 'AMC schedules & breakdown logs' },
      { icon: BarChart3,    name: 'Supply Chain',         desc: 'Procurement & supplier management' },
    ],
  },
  {
    id: 'food-processing',
    icon: Utensils, label: 'Food Processing',
    color: '#10b981', bg: '#ecfdf5',
    modules: [
      { icon: Shield,       name: 'FSSAI Compliance',     desc: 'Food safety, labelling & audit management' },
      { icon: Package,      name: 'Inventory & Stock',    desc: 'FIFO tracking, expiry & batch control' },
      { icon: Target,       name: 'Quality Control',      desc: 'Lab testing, rejection & recall management' },
      { icon: Users,        name: 'HR & Payroll',         desc: 'Hygiene training & attendance management' },
      { icon: DollarSign,   name: 'Finance & Accounts',   desc: 'Cost-per-unit & margin analysis' },
      { icon: Truck,        name: 'Distribution',         desc: 'Route planning & cold chain dispatch' },
      { icon: FileText,     name: 'Recipe Management',    desc: 'Standardized formulas & batch sizing' },
      { icon: BarChart3,    name: 'Demand Forecasting',   desc: 'Order-to-production planning engine' },
    ],
  },
  {
    id: 'chemical',
    icon: FlaskConical, label: 'Chemical',
    color: '#8b5cf6', bg: '#f5f3ff',
    modules: [
      { icon: Shield,       name: 'Safety & Hazmat',      desc: 'MSDS, SOP & chemical handling compliance' },
      { icon: Package,      name: 'Inventory & Stock',    desc: 'Batch-coded chemical stock management' },
      { icon: Target,       name: 'Quality Control',      desc: 'CoA, COC & batch test reporting' },
      { icon: Users,        name: 'HR & Payroll',         desc: 'Safety training & PPE compliance' },
      { icon: DollarSign,   name: 'Finance & Accounts',   desc: 'Cost tracking & profitability per SKU' },
      { icon: FileText,     name: 'Regulatory Filing',    desc: 'PCB, CPCB & factory act compliance' },
      { icon: Wrench,       name: 'Equipment Logs',       desc: 'Reactor maintenance & calibration records' },
      { icon: BarChart3,    name: 'R&D Tracking',         desc: 'Formulation lifecycle & trials dashboard' },
    ],
  },
  {
    id: 'it',
    icon: Monitor, label: 'IT',
    color: '#06b6d4', bg: '#ecfeff',
    modules: [
      { icon: LayoutDashboard, name: 'Project Management', desc: 'Agile boards, sprints & delivery tracking' },
      { icon: Users,           name: 'HR & Recruitment',   desc: 'Technical hiring, appraisals & ESOP' },
      { icon: DollarSign,      name: 'Finance & Billing',  desc: 'Time-based invoicing & revenue recognition' },
      { icon: Phone,           name: 'Client CRM',         desc: 'Pipeline, proposals & client health score' },
      { icon: Cpu,             name: 'AI Co-Pilot',        desc: 'Automated status reports & insights' },
      { icon: FileText,        name: 'Contract Manager',   desc: 'MSAs, SOWs & change order tracking' },
      { icon: Target,          name: 'Resource Planning',  desc: 'Utilization tracking & bench management' },
      { icon: BarChart3,       name: 'Revenue Analytics',  desc: 'MRR, ARR, churn & growth dashboards' },
    ],
  },
  {
    id: 'bpo',
    icon: Headphones, label: 'BPO',
    color: '#f59e0b', bg: '#fffbeb',
    modules: [
      { icon: Users,       name: 'HR & Attendance',      desc: 'Roster management & shift scheduling' },
      { icon: Target,      name: 'Performance Mgmt',     desc: 'Agent KPIs, quality scores & incentives' },
      { icon: DollarSign,  name: 'Finance & Billing',    desc: 'Client invoicing & FTE-based billing' },
      { icon: Phone,       name: 'Client CRM',           desc: 'SLA tracking & client satisfaction scores' },
      { icon: Activity,    name: 'Operations Dashboard', desc: 'Real-time AHT, CSAT & occupancy metrics' },
      { icon: Shield,      name: 'Compliance',           desc: 'ISO, GDPR & data security compliance' },
      { icon: BarChart3,   name: 'Workforce Analytics',  desc: 'Attrition analysis & capacity planning' },
      { icon: BookOpen,    name: 'Training Portal',      desc: 'Process training & knowledge base' },
    ],
  },
  {
    id: 'mining',
    icon: Mountain, label: 'Mining',
    color: '#64748b', bg: '#f8fafc',
    modules: [
      { icon: Shield,       name: 'Safety Compliance',   desc: 'DGMS compliance, incident & near-miss logs' },
      { icon: Wrench,       name: 'Equipment Tracking',  desc: 'HME maintenance & breakdown management' },
      { icon: Users,        name: 'HR & Payroll',        desc: 'Miner attendance, fatigue & shift rosters' },
      { icon: DollarSign,   name: 'Finance & Accounts',  desc: 'Royalty tracking & extraction cost analysis' },
      { icon: Leaf,         name: 'Environmental',       desc: 'EIA compliance & pollution monitoring' },
      { icon: Truck,        name: 'Logistics',           desc: 'Dispatch, route & load management' },
      { icon: Target,       name: 'Production Reports',  desc: 'Ore grade, yield & bench productivity' },
      { icon: FileText,     name: 'Permit Management',   desc: 'Mining licenses, renewals & conditions' },
    ],
  },
  {
    id: 'vendors',
    icon: Wrench, label: 'Vendors (electrical, HVAC, Flooring, Fabrication, MEP, Civil)',
    color: '#ef4444', bg: '#fef2f2',
    modules: [
      { icon: Activity,    name: 'Operations Dashboard', desc: 'Job cards, work orders & field assignments' },
      { icon: DollarSign,  name: 'Finance & Billing',   desc: 'Job-wise billing, retention & payment tracking' },
      { icon: Users,       name: 'HR & Payroll',        desc: 'Technician payroll & skill certification' },
      { icon: Phone,       name: 'Client CRM',          desc: 'Site visits, AMC & service history' },
      { icon: Target,      name: 'Job Scheduling',      desc: 'Calendar-based field force dispatch' },
      { icon: Shield,      name: 'Compliance',          desc: 'Site safety, insurance & permit tracking' },
      { icon: Package,     name: 'Material Management', desc: 'Spares inventory & site-wise consumption' },
      { icon: BarChart3,   name: 'Profitability',       desc: 'Project-wise margin & cost tracking' },
    ],
  },
  {
    id: 'warehousing',
    icon: Warehouse, label: 'Warehousing',
    color: '#a855f7', bg: '#faf5ff',
    modules: [
      { icon: Package,      name: 'Inventory & WMS',     desc: 'Bin-level tracking, FIFO & put-away logic' },
      { icon: Activity,     name: 'Operations',          desc: 'Receiving, picking & dispatch workflows' },
      { icon: Users,        name: 'HR & Payroll',        desc: 'Warehouse staff attendance & productivity' },
      { icon: DollarSign,   name: 'Finance & Accounts',  desc: 'Storage billing & 3PL client invoicing' },
      { icon: Truck,        name: 'Dispatch Management', desc: 'Vehicle scheduling & delivery tracking' },
      { icon: Shield,       name: 'Compliance',          desc: 'Fire safety, FSSAI & customs compliance' },
      { icon: BarChart3,    name: 'Space Analytics',     desc: 'Slot utilization & capacity optimization' },
      { icon: Target,       name: 'Quality Control',     desc: 'Inbound inspection & damage reporting' },
    ],
  },
  {
    id: 'transport',
    icon: Truck, label: 'Transport',
    color: '#0891b2', bg: '#ecfeff',
    modules: [
      { icon: Truck,        name: 'Fleet Management',    desc: 'Vehicle health, fitness & insurance tracking' },
      { icon: Users,        name: 'Driver HR',           desc: 'Driver license, medical & payroll management' },
      { icon: DollarSign,   name: 'Finance & Billing',   desc: 'Trip-wise costing & freight invoicing' },
      { icon: MapPin,       name: 'Route Optimization',  desc: 'GPS tracking & fuel consumption reports' },
      { icon: Shield,       name: 'Compliance',          desc: 'Permit renewals, RC & insurance alerts' },
      { icon: Phone,        name: 'Client CRM',          desc: 'Customer contracts & trip history' },
      { icon: BarChart3,    name: 'Fleet Analytics',     desc: 'Turnaround time, utilization & KMPL tracking' },
      { icon: Package,      name: 'Cargo Management',    desc: 'LR generation, POD & load verification' },
    ],
  },
  {
    id: 'interior',
    icon: Paintbrush2, label: 'Interior Design',
    color: '#ec4899', bg: '#fdf2f8',
    modules: [
      { icon: LayoutDashboard, name: 'Project Management', desc: 'Phase-wise delivery, milestones & timelines' },
      { icon: Phone,           name: 'Client CRM',         desc: 'Lead tracking, quotations & client portal' },
      { icon: DollarSign,      name: 'Finance & Billing',  desc: 'Budget tracking, invoicing & payment schedules' },
      { icon: Wrench,          name: 'Vendor Management',  desc: 'Supplier orders, lead times & quality tracking' },
      { icon: Users,           name: 'HR & Payroll',       desc: 'Designer & site supervisor management' },
      { icon: Package,         name: 'BOQ & Materials',    desc: 'Material specifications, quantities & procurement' },
      { icon: FileText,        name: 'Design Portfolio',   desc: 'Project images, 3D renders & approvals' },
      { icon: Shield,          name: 'Compliance',         desc: 'NOC, fire safety & building plan compliance' },
    ],
  },
  {
    id: 'pmc',
    icon: LayoutDashboard, label: 'PMC',
    color: '#7c3aed', bg: '#f5f3ff',
    modules: [
      { icon: LayoutDashboard, name: 'Project Management', desc: 'Multi-project tracking, reports & dashboards' },
      { icon: Wrench,          name: 'Vendor Management',  desc: 'Contractor evaluation & tender management' },
      { icon: DollarSign,      name: 'Finance & Billing',  desc: 'RA bills, retention & cashflow monitoring' },
      { icon: Shield,          name: 'Compliance',         desc: 'Safety audits, statutory & EHS compliance' },
      { icon: Users,           name: 'HR & Payroll',       desc: 'Site team management & skill database' },
      { icon: Phone,           name: 'Client Portal',      desc: 'Real-time project updates & approvals' },
      { icon: FileText,        name: 'Document Control',   desc: 'Drawing management, RFIs & submittals' },
      { icon: Target,          name: 'Quality Audit',      desc: 'Inspection checklists & NCR management' },
    ],
  },
  {
    id: 'consulting',
    icon: Briefcase, label: 'Consulting',
    color: '#2563eb', bg: '#eff6ff',
    modules: [
      { icon: Phone,           name: 'Client CRM',          desc: 'Pipeline, proposals & engagement history' },
      { icon: LayoutDashboard, name: 'Project Management',  desc: 'Retainers, deliverables & milestones' },
      { icon: DollarSign,      name: 'Finance & Billing',   desc: 'Retainer billing, time-based & project invoicing' },
      { icon: Users,           name: 'HR & Payroll',        desc: 'Consultant performance & utilization tracking' },
      { icon: Cpu,             name: 'AI Co-Pilot',         desc: 'Research synthesis & report generation' },
      { icon: BookOpen,        name: 'Knowledge Base',      desc: 'Methodology templates & best practices library' },
      { icon: Target,          name: 'Delivery Tracker',    desc: 'Client satisfaction & deliverable quality scoring' },
      { icon: BarChart3,       name: 'Revenue Analytics',   desc: 'Consultant profitability & utilization reports' },
    ],
  },
  {
    id: 'professional',
    icon: Scale, label: 'Professional Services (CS, CA, Lawyers etc.)',
    color: '#0d9488', bg: '#f0fdfa',
    modules: [
      { icon: Phone,       name: 'Client CRM',          desc: 'Matter tracking, client history & renewals' },
      { icon: DollarSign,  name: 'Finance & Billing',   desc: 'Retainer management & disbursement tracking' },
      { icon: Shield,      name: 'Compliance Filing',   desc: 'ROC, Income Tax, GST & professional tax filings' },
      { icon: Users,       name: 'HR & Payroll',        desc: 'Staff management & professional development' },
      { icon: FileText,    name: 'Document Management', desc: 'Secure client file storage & version control' },
      { icon: Cpu,         name: 'AI Co-Pilot',         desc: 'Deadline alerts, auto-draft & compliance summaries' },
      { icon: BarChart3,   name: 'Practice Analytics',  desc: 'Revenue per partner, client profitability' },
      { icon: Target,      name: 'Task & Deadline',     desc: 'Statutory calendar, reminders & escalations' },
    ],
  },
  {
    id: 'education',
    icon: GraduationCap, label: 'Educational Institute',
    color: '#16a34a', bg: '#f0fdf4',
    modules: [
      { icon: Users,        name: 'Student Management', desc: 'Admission, profiles, progress & parent portal' },
      { icon: Users,        name: 'HR & Payroll',       desc: 'Teacher payroll, attendance & appraisals' },
      { icon: DollarSign,   name: 'Fee Management',     desc: 'Fee collection, receipts & defaulter tracking' },
      { icon: Shield,       name: 'Compliance',         desc: 'NAAC, affiliating university & govt reporting' },
      { icon: BookOpen,     name: 'LMS Integration',    desc: 'Online classes, assignments & exam portal' },
      { icon: Activity,     name: 'Attendance System',  desc: 'Biometric integration & absence alerts' },
      { icon: FileText,     name: 'Certificates',       desc: 'Automated certificate & transcript generation' },
      { icon: BarChart3,    name: 'Academic Analytics', desc: 'Result trends, pass %, faculty performance' },
    ],
  },
  {
    id: 'finance',
    icon: Landmark, label: 'Finance Institute',
    color: '#b45309', bg: '#fffbeb',
    modules: [
      { icon: Shield,       name: 'RBI/SEBI Compliance', desc: 'Regulatory filing, audit trails & KYC management' },
      { icon: Phone,        name: 'Client CRM',           desc: 'Investor profiles, portfolio tracking & renewals' },
      { icon: DollarSign,   name: 'Finance & Accounts',   desc: 'Fund accounting, NAV calculation & reconciliation' },
      { icon: Users,        name: 'HR & Payroll',         desc: 'Relationship manager targets & incentives' },
      { icon: Target,       name: 'Risk Management',      desc: 'Credit scoring, NPA monitoring & provisioning' },
      { icon: CreditCard,   name: 'Loan Tracking',        desc: 'Disbursement, EMI tracking & collections' },
      { icon: BarChart3,    name: 'Investment Analytics', desc: 'Fund performance, benchmark & portfolio reports' },
      { icon: FileText,     name: 'Document Management',  desc: 'KYC, loan files & regulatory document vault' },
    ],
  },
  {
    id: 'ngo',
    icon: Heart, label: 'NGO',
    color: '#be185d', bg: '#fdf2f8',
    modules: [
      { icon: Shield,       name: 'CSR Compliance',     desc: 'Section 8, FCRA, 80G & 12A compliance' },
      { icon: DollarSign,   name: 'Grant Management',   desc: 'Donor tracking, fund utilization & reporting' },
      { icon: Users,        name: 'HR & Volunteers',    desc: 'Volunteer profiles, attendance & recognition' },
      { icon: LayoutDashboard, name: 'Project Management', desc: 'Programme delivery, KPIs & beneficiary tracking' },
      { icon: Leaf,         name: 'ESG Reporting',      desc: 'Impact measurement & sustainability reports' },
      { icon: Phone,        name: 'Donor Management',   desc: 'Donor CRM, receipts & campaign management' },
      { icon: FileText,     name: 'Annual Reports',     desc: 'Automated impact & financial reporting' },
      { icon: BarChart3,    name: 'Impact Analytics',   desc: 'Beneficiary outcomes & programme effectiveness' },
    ],
  },
  {
    id: 'recruitment',
    icon: Search, label: 'Recruitment Agency',
    color: '#7c3aed', bg: '#f5f3ff',
    modules: [
      { icon: Users,        name: 'ATS',                desc: 'Applicant tracking from sourcing to offer' },
      { icon: Phone,        name: 'Client CRM',         desc: 'Client mandates, JDs & relationship tracking' },
      { icon: DollarSign,   name: 'Finance & Billing',  desc: 'Placement billing, invoice & payment tracking' },
      { icon: Users,        name: 'HR & Payroll',       desc: 'Recruiter targets, incentives & performance' },
      { icon: Target,       name: 'Placement Tracker',  desc: 'SLA monitoring & closure rate analytics' },
      { icon: Shield,       name: 'Compliance',         desc: 'Labour law, background verification & GDPR' },
      { icon: BarChart3,    name: 'Revenue Analytics',  desc: 'Per-recruiter & per-client profitability' },
      { icon: BookOpen,     name: 'Candidate Database', desc: 'Talent pool, skills tagging & sourcing channels' },
    ],
  },
  {
    id: 'import-export',
    icon: Globe, label: 'Import Export',
    color: '#0891b2', bg: '#ecfeff',
    modules: [
      { icon: Shield,       name: 'EXIM Compliance',    desc: 'IEC, DGFT, customs & AD code management' },
      { icon: DollarSign,   name: 'Finance & Forex',    desc: 'Multi-currency, hedging & realization tracking' },
      { icon: Truck,        name: 'Logistics',          desc: 'Shipment tracking, freight & forwarder management' },
      { icon: Wrench,       name: 'Vendor Management',  desc: 'Supplier evaluation & purchase order tracking' },
      { icon: Users,        name: 'HR & Payroll',       desc: 'Trade team management & compliance training' },
      { icon: FileText,     name: 'Document Management', desc: 'LC, BL, COO & customs document automation' },
      { icon: BarChart3,    name: 'Trade Analytics',    desc: 'Country-wise profitability & product mix reports' },
      { icon: Target,       name: 'Duty Management',    desc: 'MEIS, SEIS, RoDTEP & duty drawback tracking' },
    ],
  },
  {
    id: 'auditing',
    icon: ClipboardCheck, label: 'Auditing & Training',
    color: '#7c3aed', bg: '#f5f3ff',
    modules: [
      { icon: Phone,        name: 'Client CRM',          desc: 'Engagement tracking, scope & fee management' },
      { icon: DollarSign,   name: 'Finance & Billing',   desc: 'Milestone billing & outstanding management' },
      { icon: Shield,       name: 'Audit Compliance',    desc: 'Working paper management & ICAI compliance' },
      { icon: LayoutDashboard, name: 'Project Management', desc: 'Fieldwork assignments, review & sign-off' },
      { icon: Cpu,          name: 'AI Co-Pilot',         desc: 'Risk identification & materiality assessment' },
      { icon: BookOpen,     name: 'Training Management', desc: 'Batch scheduling, attendance & assessment' },
      { icon: FileText,     name: 'Report Generator',    desc: 'Automated audit reports & management letters' },
      { icon: BarChart3,    name: 'Practice Analytics',  desc: 'Realisation rates & client profitability' },
    ],
  },
  {
    id: 'certification',
    icon: Award, label: 'Certification Agency',
    color: '#f59e0b', bg: '#fffbeb',
    modules: [
      { icon: Shield,       name: 'Accreditation Mgmt', desc: 'NABCB, DAC & IAF accreditation compliance' },
      { icon: Phone,        name: 'Client CRM',         desc: 'Application tracking, renewals & surveillance' },
      { icon: DollarSign,   name: 'Finance & Billing',  desc: 'Audit fee billing & certificate renewal tracking' },
      { icon: FileText,     name: 'Document Management', desc: 'Standards, checklists & certificate vault' },
      { icon: Activity,     name: 'Audit Scheduling',   desc: 'Auditor allocation, calendar & travel management' },
      { icon: Users,        name: 'HR & Auditor Mgmt',  desc: 'Lead & technical auditor competence tracking' },
      { icon: Target,       name: 'NC Management',      desc: 'Non-conformance tracking & corrective actions' },
      { icon: BarChart3,    name: 'Performance Reports', desc: 'Certification rates, audit findings & trends' },
    ],
  },
];

export default function IndustryModules() {
  const [active, setActive] = useState('construction');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const current = INDUSTRIES.find(i => i.id === active);

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.bgGlow} />

      <div className={styles.inner}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.tag}>One Platform · All Industries</span>
          <h2 className={styles.h2}>
            Built for <span className={styles.grad}>Your Industry.</span>
            <br />Modules That Match <span className={styles.grad}>Your Workflow.</span>
          </h2>
          <p className={styles.sub}>
            Sangoe adapts to 21+ industries with pre-configured modules, compliance rules,
            and workflows — so you go live in days, not months.
          </p>
        </motion.div>

        {/* Industry filter tabs */}
        <motion.div
          className={styles.tabsWrap}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className={styles.tabs}>
            {INDUSTRIES.map(ind => {
              const Icon = ind.icon;
              const isActive = ind.id === active;
              return (
                <button
                  key={ind.id}
                  className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
                  onClick={() => setActive(ind.id)}
                  style={isActive ? { '--tab-color': ind.color, borderColor: ind.color, background: ind.bg } : {}}
                >
                  <Icon size={14} style={isActive ? { color: ind.color } : {}} />
                  <span>{ind.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Module cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className={styles.modulesGrid}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Industry header bar */}
            <div className={styles.industryBar} style={{ borderColor: `${current.color}30`, background: `${current.color}06` }}>
              {(() => { const Icon = current.icon; return <Icon size={20} style={{ color: current.color }} />; })()}
              <div>
                <span className={styles.industryName} style={{ color: current.color }}>{current.label}</span>
                <span className={styles.industriySub}>
                  {current.modules.length} modules pre-configured for your workflow
                </span>
              </div>
              <a href="/contact" className={styles.industryCtaBtn} style={{ background: current.color }}>
                Get Demo <ArrowRight size={13} />
              </a>
            </div>

            {/* Module cards */}
            <div className={styles.cards}>
              {current.modules.map((mod, i) => {
                const Icon = mod.icon;
                return (
                  <motion.div
                    key={i}
                    className={styles.modCard}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                    whileHover={{ y: -3, boxShadow: `0 12px 32px ${current.color}18` }}
                  >
                    <span
                      className={styles.modIcon}
                      style={{ background: `${current.color}15`, color: current.color }}
                    >
                      <Icon size={18} />
                    </span>
                    <div className={styles.modInfo}>
                      <span className={styles.modName}>{mod.name}</span>
                      <span className={styles.modDesc}>{mod.desc}</span>
                    </div>
                    <ChevronRight size={14} className={styles.modArrow} style={{ color: current.color }} />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          className={styles.bottomCta}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>Don&apos;t see your industry?</p>
          <a href="/contact" className={styles.ctaLink}>
            Talk to us — we customize for you <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
