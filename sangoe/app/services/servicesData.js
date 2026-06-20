// Sangoe CRM & ERP Services Database - Exact Names Mapping
export const CATEGORIES = [
  { id: 'core', label: 'Core / Main Menu Items' },
  { id: 'sales', label: 'Sales' },
  { id: 'accounting', label: 'Accounting' },
  { id: 'purchase', label: 'Purchase' },
  { id: 'recruitment', label: 'Recruitment' },
  { id: 'utilities', label: 'Utilities' },
  { id: 'hr-records', label: 'HR Records' },
  { id: 'hr-payroll', label: 'HR Payroll' },
  { id: 'additional', label: 'Additional Core Services' },
  { id: 'commission', label: 'Commission' },
  { id: 'timesheets', label: 'Timesheets & Leave' },
  { id: 'reports', label: 'Reports' },
  { id: 'support', label: 'Support' },
  { id: 'documents', label: 'Documents' },
  { id: 'approvify', label: 'Approvify' },
  { id: 'loyalty', label: 'Customer Loyalty' },
  { id: 'marketing', label: 'Marketing Automation' },
  { id: 'fleet', label: 'Fleet' },
  { id: 'okr', label: 'OKR' }
];

export const SERVICES_DATA = {
  // ── Core / Main Menu Items ──
  'core-dashboard': {
    slug: 'core-dashboard',
    name: 'Dashboard',
    category: 'core',
    categoryName: 'Core / Main Menu Items',
    desc: 'High-level business analytics, performance charts, and real-time revenue stats for founders and C-level managers.',
    icon: 'LayoutDashboard',
    color: '#7C3AED',
    features: ['Real-time KPI metric cards', 'Custom visual charts', 'Founder command logs']
  },
  'core-mailbox': {
    slug: 'core-mailbox',
    name: 'Mailbox',
    category: 'core',
    categoryName: 'Core / Main Menu Items',
    desc: 'Send, receive, and archive emails. Bind threads directly to sales deals, customer profiles, and projects.',
    icon: 'Mail',
    color: '#3B82F6',
    features: ['Multi-account IMAP/SMTP sync', 'Email template builder', 'Customer timeline linking']
  },
  'core-leads': {
    slug: 'core-leads',
    name: 'Leads',
    category: 'core',
    categoryName: 'Core / Main Menu Items',
    desc: 'Capture, qualify, and track incoming leads through a visual Kanban pipeline with drag-and-drop actions.',
    icon: 'Target',
    color: '#EF4444',
    features: ['Visual drag-and-drop Kanban', 'Lead scoring algorithms', 'Automated email follow-up rules']
  },
  'core-customers': {
    slug: 'core-customers',
    name: 'Customers',
    category: 'core',
    categoryName: 'Core / Main Menu Items',
    desc: 'A complete 360-degree view of your clients, their transaction history, communications, and active files.',
    icon: 'Users',
    color: '#10B981',
    features: ['Rich profile cards', 'Purchase & invoice histories', 'Meeting logs & file vaults']
  },
  'core-projects': {
    slug: 'core-projects',
    name: 'Projects',
    category: 'core',
    categoryName: 'Core / Main Menu Items',
    desc: 'Manage company projects, task delegation, Gantt charts, and milestones to deliver work faster.',
    icon: 'Briefcase',
    color: '#F59E0B',
    features: ['Interactive Gantt & timeline views', 'Project templates', 'Client shareable portals']
  },
  'core-tasks': {
    slug: 'core-tasks',
    name: 'Tasks',
    category: 'core',
    categoryName: 'Core / Main Menu Items',
    desc: 'Assign and prioritize tasks for individual employees, track dependencies, and log hours.',
    icon: 'CheckSquare',
    color: '#EC4899',
    features: ['Time tracking logs', 'Priority labels', 'Subtasks & dependencies']
  },
  'core-contracts': {
    slug: 'core-contracts',
    name: 'Contracts',
    category: 'core',
    categoryName: 'Core / Main Menu Items',
    desc: 'Store, sign, and monitor contract agreements, active terms, and auto-renewal dates.',
    icon: 'FileText',
    color: '#06B6D4',
    features: ['Online digital signing', 'Renewal notification triggers', 'Custom SLA tracking']
  },

  // ── Sales ──
  'sales-sales': {
    slug: 'sales-sales',
    name: 'Sales',
    category: 'sales',
    categoryName: 'Sales',
    desc: 'Manage sales representatives, target metrics, commissions, and overall sales revenue growth.',
    icon: 'TrendingUp',
    color: '#3B82F6',
    features: ['Rep target setting', 'Revenue tracking dashboards', 'Deal stage analytics']
  },
  'sales-proposals': {
    slug: 'sales-proposals',
    name: 'Proposals',
    category: 'sales',
    categoryName: 'Sales',
    desc: 'Create highly professional interactive proposals with drag-and-drop sections and pricing tables.',
    icon: 'FileSpreadsheet',
    color: '#8B5CF6',
    features: ['Beautiful media embeds', 'Accept/reject proposal links', 'Revision history log']
  },
  'sales-estimates': {
    slug: 'sales-estimates',
    name: 'Estimates',
    category: 'sales',
    categoryName: 'Sales',
    desc: 'Build itemized estimates, calculate local tax rates, and convert estimates into paid invoices with one click.',
    icon: 'Calculator',
    color: '#10B981',
    features: ['Unit cost calculation engine', 'Taxes & discounts support', 'Auto-conversion to invoices']
  },
  'sales-credit-notes': {
    slug: 'sales-credit-notes',
    name: 'Credit Notes',
    category: 'sales',
    categoryName: 'Sales',
    desc: 'Issue credit notes to clients for returned goods or billing adjustments, integrating with invoicing.',
    icon: 'MinusSquare',
    color: '#EF4444',
    features: ['Refund workflow alignment', 'Invoice balance netting', 'Financial ledger updates']
  },
  'sales-vendor': {
    slug: 'sales-vendor',
    name: 'Thirdparty Vendor',
    category: 'sales',
    categoryName: 'Sales',
    desc: 'Allow thirdparty sales vendors to access a restricted portal to view assignments and update client status.',
    icon: 'UserCheck',
    color: '#6366F1',
    features: ['Secured login portal', 'Performance stats logging', 'Limited dashboard scope']
  },
  'sales-dashboard': {
    slug: 'sales-dashboard',
    name: 'Dashboard',
    category: 'sales',
    categoryName: 'Sales',
    desc: 'Dedicated analytics dashboard illustrating deal win-rates, rep performance, and funnel conversion stages.',
    icon: 'BarChart3',
    color: '#06B6D4',
    features: ['Funnel conversion charts', 'Rep leaderboard', 'Forecasting & projection models']
  },
  'sales-kickoff': {
    slug: 'sales-kickoff',
    name: 'Kickoff Meetings',
    category: 'sales',
    categoryName: 'Sales',
    desc: 'Schedule and manage project kickoff meetings directly from won sales deals to coordinate delivery teams.',
    icon: 'Play',
    color: '#F59E0B',
    features: ['Calendar scheduler sync', 'Handover notes portal', 'Task automation triggering']
  },

  // ── Accounting ──
  'accounting-accounting': {
    slug: 'accounting-accounting',
    name: 'Accounting',
    category: 'accounting',
    categoryName: 'Accounting',
    desc: 'Double-entry bookkeeping, general ledger tracking, tax filings, and automated financial report statements.',
    icon: 'Calculator',
    color: '#10B981',
    features: ['Real-time P&L / Balance Sheet', 'Bank statement reconciliation', 'Audit-ready trail logs']
  },
  'accounting-checks': {
    slug: 'accounting-checks',
    name: 'Checks',
    category: 'accounting',
    categoryName: 'Accounting',
    desc: 'Track physical check issuances, clear deposits, handle bounces, and log bank status details.',
    icon: 'CreditCard',
    color: '#3B82F6',
    features: ['Check register ledger', 'Bounce alert automation', 'Clearing status updates']
  },
  'accounting-convert': {
    slug: 'accounting-convert',
    name: 'Convert',
    category: 'accounting',
    categoryName: 'Accounting',
    desc: 'Automated conversion of international payments and client invoices matching live foreign exchange rates.',
    icon: 'RefreshCw',
    color: '#6366F1',
    features: ['Live forex api integration', 'Gain/Loss ledger logs', 'Multi-currency invoicing']
  },
  'accounting-coa': {
    slug: 'accounting-coa',
    name: 'Chart of Accounts',
    category: 'accounting',
    categoryName: 'Accounting',
    desc: 'Customize and manage your business assets, liabilities, equities, revenues, and expenses folders.',
    icon: 'FolderTree',
    color: '#8B5CF6',
    features: ['Standard accounting templates', 'Nested account hierarchy', 'Live balance updates']
  },

  // ── Purchase ──
  'purchase-purchase': {
    slug: 'purchase-purchase',
    name: 'Purchase',
    category: 'purchase',
    categoryName: 'Purchase',
    desc: 'Centralize material and service purchasing operations, tracking orders from request to final vendor delivery.',
    icon: 'ShoppingCart',
    color: '#a855f7',
    features: ['Request tracking logs', 'Supplier status dashboards', 'Receipt inspection logs']
  },
  'purchase-vendors': {
    slug: 'purchase-vendors',
    name: 'Vendors',
    category: 'purchase',
    categoryName: 'Purchase',
    desc: 'A directory containing your procurement suppliers, contracts, rating scores, and history profiles.',
    icon: 'Building2',
    color: '#3B82F6',
    features: ['Vendor qualification tracking', 'Transaction logs', 'SLA and rating cards']
  },
  'purchase-items': {
    slug: 'purchase-items',
    name: 'Vendor-Items',
    category: 'purchase',
    categoryName: 'Purchase',
    desc: 'Register product SKUs, map them to specific vendors, and track standard purchase rates and lead times.',
    icon: 'Package',
    color: '#10B981',
    features: ['SKU mapping engine', 'Historical price trends', 'Vendor lead time logs']
  },
  'purchase-request': {
    slug: 'purchase-request',
    name: 'Purchase request',
    category: 'purchase',
    categoryName: 'Purchase',
    desc: 'Allow employees to submit requests for office equipment, raw materials, or services, triggering approvals.',
    icon: 'Clipboard',
    color: '#EF4444',
    features: ['Custom request forms', 'Approval route mapping', 'PR-to-PO conversion']
  },
  'purchase-quotations': {
    slug: 'purchase-quotations',
    name: 'Quotations',
    category: 'purchase',
    categoryName: 'Purchase',
    desc: 'Send requests for quotations (RFQ) to multiple vendors, compare prices, and select proposals.',
    icon: 'FileSpreadsheet',
    color: '#F59E0B',
    features: ['Vendor pricing compare grid', 'Automated RFQ emails', 'One-click quote acceptance']
  },
  'purchase-order': {
    slug: 'purchase-order',
    name: 'Purchase order',
    category: 'purchase',
    categoryName: 'Purchase',
    desc: 'Create, sign, and issue official purchase orders, tracking vendor fulfillment and material deliveries.',
    icon: 'FileCheck',
    color: '#06B6D4',
    features: ['Digitally sign PO PDFs', 'Fulfillment percentage tracking', 'ERP accounts linking']
  },
  'purchase-returns': {
    slug: 'purchase-returns',
    name: 'Order Returns',
    category: 'purchase',
    categoryName: 'Purchase',
    desc: 'Manage product returns to vendors for damaged, incorrect, or excess stock, logging credit notes.',
    icon: 'CornerUpLeft',
    color: '#EC4899',
    features: ['Damaged stock return logs', 'Refund/Credit tracking', 'Warehouse stock updates']
  },
  'purchase-contracts': {
    slug: 'purchase-contracts',
    name: 'Contracts',
    category: 'purchase',
    categoryName: 'Purchase',
    desc: 'Manage long-term procurement contracts, delivery schedules, payment terms, and vendor SLAs.',
    icon: 'FileText',
    color: '#6366F1',
    features: ['Automated delivery schedules', 'Milestone payment tracks', 'SLA alert triggers']
  },
  'purchase-debit-notes': {
    slug: 'purchase-debit-notes',
    name: 'Debit Notes',
    category: 'purchase',
    categoryName: 'Purchase',
    desc: 'Issue debit notes to vendors to request adjustments on invoices for discrepancies or returns.',
    icon: 'PlusSquare',
    color: '#EF4444',
    features: ['Adjustment accounting logs', 'Vendor balance netting', 'Discrepancy logs']
  },
  'purchase-invoices': {
    slug: 'purchase-invoices',
    name: 'Invoices',
    category: 'purchase',
    categoryName: 'Purchase',
    desc: 'Receive vendor invoices, run 3-way matching (PO vs. Receipt vs. Invoice), and queue payments.',
    icon: 'Receipt',
    color: '#10B981',
    features: ['3-way matching engine', 'Payment schedule queuing', 'Accounts payable logging']
  },
  'purchase-settings': {
    slug: 'purchase-settings',
    name: 'Setting',
    category: 'purchase',
    categoryName: 'Purchase',
    desc: 'Set limits for purchase requests, approval matrices, tax rules, and general procurement settings.',
    icon: 'Settings',
    color: '#64748B',
    features: ['Spend limits configuration', 'Tax rule mappings', 'Standard disclaimer settings']
  },

  // ── Recruitment ──
  'recruitment-recruitment': {
    slug: 'recruitment-recruitment',
    name: 'Recruitment',
    category: 'recruitment',
    categoryName: 'Recruitment',
    desc: 'A unified recruitment workspace to manage active vacancies, applicant counts, and team tasks.',
    icon: 'UserPlus',
    color: '#7C3AED',
    features: ['Recruitment pipeline tracking', 'Hiring velocity stats', 'Department vacancy boards']
  },
  'recruitment-dashboard': {
    slug: 'recruitment-dashboard',
    name: 'Dashboard',
    category: 'recruitment',
    categoryName: 'Recruitment',
    desc: 'Measure key metrics such as cost-to-hire, time-to-hire, source effectiveness, and offer acceptance ratios.',
    icon: 'BarChart3',
    color: '#3B82F6',
    features: ['Time-to-hire analytics', 'Channel source charts', 'Offer acceptance stats']
  },
  'recruitment-campaign': {
    slug: 'recruitment-campaign',
    name: 'Campaign',
    category: 'recruitment',
    categoryName: 'Recruitment',
    desc: 'Launch and run coordinated hiring campaigns across job boards, social channels, and consultant teams.',
    icon: 'Send',
    color: '#10B981',
    features: ['Job board postings API', 'Campaign budgets tracking', 'Direct applicant imports']
  },
  'recruitment-candidate': {
    slug: 'recruitment-candidate',
    name: 'Candidate profile',
    category: 'recruitment',
    categoryName: 'Recruitment',
    desc: 'Rich candidate profiles with parsed resumes, evaluation scorecard history, notes, and background status.',
    icon: 'Users',
    color: '#F59E0B',
    features: ['AI Resume parser', 'Evaluation scorecard logs', 'QuickVerification bg-checks']
  },
  'recruitment-schedule': {
    slug: 'recruitment-schedule',
    name: 'Interview schedule',
    category: 'recruitment',
    categoryName: 'Recruitment',
    desc: 'Schedule panel interviews, sync interviewers calendars, and gather structured evaluation ratings.',
    icon: 'Calendar',
    color: '#EC4899',
    features: ['Google/Outlook calendar sync', 'Panel interviewer scorecards', 'Automated candidate reminders']
  },
  'recruitment-channel': {
    slug: 'recruitment-channel',
    name: 'Recruitment chanel',
    category: 'recruitment',
    categoryName: 'Recruitment',
    desc: 'Integrate external agencies, internal referrals, and organic job board sources to track performance.',
    icon: 'Share2',
    color: '#06B6D4',
    features: ['Consultant submission portals', 'Referral program payouts', 'Source metrics logs']
  },
  'recruitment-portal': {
    slug: 'recruitment-portal',
    name: 'Recruitment Portal',
    category: 'recruitment',
    categoryName: 'Recruitment',
    desc: 'A public-facing careers page listing open roles, accepting applications, and collecting resume files.',
    icon: 'Globe',
    color: '#6366F1',
    features: ['White-labelled job portal', 'SEO-friendly job posts', 'Custom application forms']
  },
  'recruitment-settings': {
    slug: 'recruitment-settings',
    name: 'Setting',
    category: 'recruitment',
    categoryName: 'Recruitment',
    desc: 'Manage stages, rating definitions, automated response templates, and user access permissions.',
    icon: 'Settings',
    color: '#64748B',
    features: ['Custom workflow stages', 'Response template triggers', 'Agency access parameters']
  },

  // ── Utilities ──
  'utilities-media': {
    slug: 'utilities-media',
    name: 'Media',
    category: 'utilities',
    categoryName: 'Utilities',
    desc: 'Store company logos, product images, marketing assets, and files used across proposals and websites.',
    icon: 'Image',
    color: '#EC4899',
    features: ['Image scaling & crop tools', 'Asset folders', 'Public CDN url links']
  },
  'utilities-calendar': {
    slug: 'utilities-calendar',
    name: 'Calendar',
    category: 'utilities',
    categoryName: 'Utilities',
    desc: 'A unified schedule displaying client kickoff meetings, project milestones, team tasks, and HR events.',
    icon: 'CalendarDays',
    color: '#3B82F6',
    features: ['Interactive month/week grid', 'Color-coded event tags', 'External calendar calendar-sync']
  },

  // ── HR Records ──
  'hr-records-main': {
    slug: 'hr-records-main',
    name: 'HR Records',
    category: 'hr-records',
    categoryName: 'HR Records',
    desc: 'Centralize employee profiles, contract histories, asset allocations, appraisal cycles, and directories.',
    icon: 'Users',
    color: '#7C3AED',
    features: ['Employee profiles database', 'Asset allocation tracker', 'Corporate directory']
  },
  'hr-records-dashboard': {
    slug: 'hr-records-dashboard',
    name: 'Dashboard',
    category: 'hr-records',
    categoryName: 'HR Records',
    desc: 'Workforce analytics presenting headcount growth, attrition stats, and onboarding pipeline speeds.',
    icon: 'BarChart3',
    color: '#3B82F6',
    features: ['Attrition dashboard charts', 'Headcount growth metrics', 'Employee NPS tracking']
  },
  'hr-records-jd': {
    slug: 'hr-records-jd',
    name: 'Job descriptions',
    category: 'hr-records',
    categoryName: 'HR Records',
    desc: 'Define and store standardized role requirements, KPIs, compensation structures, and skills matrices.',
    icon: 'FileText',
    color: '#10B981',
    features: ['Standardized JD templates', 'Associated KPI frameworks', 'Skills competency tags']
  },
  'hr-records-org': {
    slug: 'hr-records-org',
    name: 'Org chart',
    category: 'hr-records',
    categoryName: 'HR Records',
    desc: 'An interactive, visual layout of your organization structure showing reporting lines and department divisions.',
    icon: 'Network',
    color: '#F59E0B',
    features: ['Dynamic reporting mapping', 'Department filters', 'Click-to-view employee stats']
  },
  'hr-records-onboarding': {
    slug: 'hr-records-onboarding',
    name: 'Onboarding',
    category: 'hr-records',
    categoryName: 'HR Records',
    desc: 'Standardize tasks for new hires, including IT requests, compliance documents, and onboarding training.',
    icon: 'ClipboardCheck',
    color: '#06B6D4',
    features: ['Automatic task assignment', 'Document upload checklist', 'Onboarding progress trackers']
  },
  'hr-records-records': {
    slug: 'hr-records-records',
    name: 'HR records',
    category: 'hr-records',
    categoryName: 'HR Records',
    desc: 'Secure digital vault for employee qualification files, background checks, and identity proofs.',
    icon: 'Lock',
    color: '#8B5CF6',
    features: ['Highly secure document vaults', 'Access logs tracking', 'Expiry warning notifications']
  },
  'hr-records-training': {
    slug: 'hr-records-training',
    name: 'Training',
    category: 'hr-records',
    categoryName: 'HR Records',
    desc: 'Manage internal learning modules, safety training sessions, progress trackers, and training certifications.',
    icon: 'GraduationCap',
    color: '#10B981',
    features: ['Internal course libraries', 'Certificates issuance engine', 'Attendance compliance logs']
  },
  'hr-records-contracts': {
    slug: 'hr-records-contracts',
    name: 'Contracts',
    category: 'hr-records',
    categoryName: 'HR Records',
    desc: 'Manage employment offer letters, non-disclosure agreements, contracts, and signing statuses.',
    icon: 'FileSpreadsheet',
    color: '#6366F1',
    features: ['Offer letter automation', 'Increment letter matrices', 'Digital signature validations']
  },
  'hr-records-dependents': {
    slug: 'hr-records-dependents',
    name: 'Dependants',
    category: 'hr-records',
    categoryName: 'HR Records',
    desc: 'Log employee dependent profiles for health insurance allocations, tax declarations, and emergency contacts.',
    icon: 'Heart',
    color: '#EF4444',
    features: ['Insurance policy bindings', 'Emergency contact sheets', 'Tax declaration linking']
  },
  'hr-records-layoff': {
    slug: 'hr-records-layoff',
    name: 'Layoff checklist',
    category: 'hr-records',
    categoryName: 'HR Records',
    desc: 'Ensure compliance during employee separations, asset returns, exit interviews, and settlement checks.',
    icon: 'UserMinus',
    color: '#EF4444',
    features: ['IT access auto-revocations', 'Asset return logs', 'Exit interviews records']
  },
  'hr-records-qa': {
    slug: 'hr-records-qa',
    name: 'Q&A',
    category: 'hr-records',
    categoryName: 'HR Records',
    desc: 'Internal Q&A database for employee queries about leaves policies, payroll, insurance, and company guides.',
    icon: 'HelpCircle',
    color: '#06B6D4',
    features: ['Searchable HR wiki', 'Query ticket submission', 'Standard policy postings']
  },

  // ── HR Payroll ──
  'hr-payroll-employees': {
    slug: 'hr-payroll-employees',
    name: 'Employees',
    category: 'hr-payroll',
    categoryName: 'HR Payroll',
    desc: 'Configure basic salary parameters, bank routing settings, and individual tax declarations per employee.',
    icon: 'Users',
    color: '#7C3AED',
    features: ['Basic salary setup', 'Bank account configurations', 'Tax regime selection (Old vs New)']
  },
  'hr-payroll-attendance': {
    slug: 'hr-payroll-attendance',
    name: 'Attendance',
    category: 'hr-payroll',
    categoryName: 'HR Payroll',
    desc: 'Sync attendance data directly into payroll, accounting for loss of pay (LOP), overtime, and leaves.',
    icon: 'CalendarCheck',
    color: '#3B82F6',
    features: ['Automated LOP calculations', 'Overtime multiplier rules', 'Leave balances adjustments']
  },
  'hr-payroll-commissions': {
    slug: 'hr-payroll-commissions',
    name: 'Commissions',
    category: 'hr-payroll',
    categoryName: 'HR Payroll',
    desc: 'Calculate deal-based sales commissions and variable incentives matching targets, integrating directly with payroll.',
    icon: 'TrendingUp',
    color: '#10B981',
    features: ['Sales target commission rules', 'Manager approval loops', 'Payroll payout line items']
  },
  'hr-payroll-deductions': {
    slug: 'hr-payroll-deductions',
    name: 'Deductions',
    category: 'hr-payroll',
    categoryName: 'HR Payroll',
    desc: 'Automate calculations for PF, ESIC, Professional Tax, and employer contributions matching Indian compliance.',
    icon: 'Percent',
    color: '#EF4444',
    features: ['PF/ESIC calculation engine', 'Professional Tax compliance', 'Auto-generated monthly files']
  },
  'hr-payroll-payslips': {
    slug: 'hr-payroll-payslips',
    name: 'Payslips',
    category: 'hr-payroll',
    categoryName: 'HR Payroll',
    desc: 'Generate monthly payslips, issue secure email copies, and enable self-download in the employee portal.',
    icon: 'Receipt',
    color: '#EC4899',
    features: ['Secure PDF auto-generation', 'Automated email dispatches', 'Historical payslip archive']
  },
  'hr-payroll-templates': {
    slug: 'hr-payroll-templates',
    name: 'Payslip templates',
    category: 'hr-payroll',
    categoryName: 'HR Payroll',
    desc: 'Customize payslip headers, logo layouts, earnings/deductions columns, and standard declaration footers.',
    icon: 'Palette',
    color: '#8B5CF6',
    features: ['Drag-and-drop template editor', 'Branding customizations', 'Dynamic field parameters']
  },
  'hr-payroll-taxes': {
    slug: 'hr-payroll-taxes',
    name: 'Income taxes',
    category: 'hr-payroll',
    categoryName: 'HR Payroll',
    desc: 'Run TDS calculations, generate Form 16, and track investment declarations submitted by employees.',
    icon: 'DollarSign',
    color: '#EF4444',
    features: ['Form 16 creation engine', 'Investment proof verification', 'TDS projection calculators']
  },

  // ── Additional Core Services ──
  'additional-expenses': {
    slug: 'additional-expenses',
    name: 'Expenses',
    category: 'additional',
    categoryName: 'Additional Core Services',
    desc: 'Submit travel, food, and utility bills for approval, linking payments to the ledger.',
    icon: 'Receipt',
    color: '#EF4444',
    features: ['Receipt scanner & OCR', 'Manager approval matrices', 'Accounts payable reconciliation']
  },
  'additional-estimate-reqs': {
    slug: 'additional-estimate-reqs',
    name: 'Estimate requests',
    category: 'additional',
    categoryName: 'Additional Core Services',
    desc: 'Collect incoming RFQs and request details from prospective clients, initiating estimates.',
    icon: 'ClipboardList',
    color: '#EC4899',
    features: ['Public custom forms', 'Lead funnel integration', 'RFQ details mapping']
  },
  'additional-lead-finder': {
    slug: 'additional-lead-finder',
    name: 'Lead finder',
    category: 'additional',
    categoryName: 'Additional Core Services',
    desc: 'Identify and fetch potential business prospects using filters for industry, geography, and size.',
    icon: 'Search',
    color: '#3B82F6',
    features: ['Industry-wise prospecting', 'Contact email verification', 'Direct pipeline import']
  },
  'additional-workflow': {
    slug: 'additional-workflow',
    name: 'Workflow Automation',
    category: 'additional',
    categoryName: 'Additional Core Services',
    desc: 'Configure business rules and triggers, automating actions such as alerts or task creation.',
    icon: 'Zap',
    color: '#7C3AED',
    features: ['Visual trigger-action flow builder', 'Slack/Email notifications integrations', 'Status change automated triggers']
  },
  'additional-setup': {
    slug: 'additional-setup',
    name: 'Setup',
    category: 'additional',
    categoryName: 'Additional Core Services',
    desc: 'Setup core company settings, branding assets, custom currency rates, and security configurations.',
    icon: 'Sliders',
    color: '#64748B',
    features: ['Role-based access controls', 'Multi-tenant setups', 'Company profile configs']
  },

  // ── Commission ──
  'commission-main': {
    slug: 'commission-main',
    name: 'Commission',
    category: 'commission',
    categoryName: 'Commission',
    desc: 'Establish commission tiers, sales target triggers, and consultant payout schedules.',
    icon: 'TrendingUp',
    color: '#10B981',
    features: ['Incentive tier matrices', 'Client payment synchronization', 'Sales target logs']
  },
  'commission-receipt': {
    slug: 'commission-receipt',
    name: 'Commission receipt',
    category: 'commission',
    categoryName: 'Commission',
    desc: 'Create, log, and send invoice receipts to commission agents and external consultants.',
    icon: 'Receipt',
    color: '#8B5CF6',
    features: ['Agency payout receipt PDFs', 'Payment history logs', 'Tax TDS deductions integration']
  },
  'commission-program': {
    slug: 'commission-program',
    name: 'Commission Program',
    category: 'commission',
    categoryName: 'Commission',
    desc: 'Launch referral campaigns, track affiliate signups, and manage commission programs.',
    icon: 'Award',
    color: '#F59E0B',
    features: ['Affiliate portal links generator', 'Payout balance tracking', 'Campaign conversion stats']
  },

  // ── Timesheets & Leave ──
  'timesheets-attendance': {
    slug: 'timesheets-attendance',
    name: 'Attendance',
    category: 'timesheets',
    categoryName: 'Timesheets & Leave',
    desc: 'Detailed logs of check-ins, geofenced boundaries, biometric events, and shift status per employee.',
    icon: 'UserCheck',
    color: '#10B981',
    features: ['GPS location punch log', 'Shift timing compliance', 'Attendance records export']
  },
  'timesheets-leave': {
    slug: 'timesheets-leave',
    name: 'Leave',
    category: 'timesheets',
    categoryName: 'Timesheets & Leave',
    desc: 'Submit and approve leaves requests, configure annual allocations, and view company-wide leaves calendars.',
    icon: 'CalendarDays',
    color: '#EF4444',
    features: ['Leave requests workflow', 'Custom policy setups', 'Department leave calendar']
  },
  'timesheets-routes': {
    slug: 'timesheets-routes',
    name: 'Work routes',
    category: 'timesheets',
    categoryName: 'Timesheets & Leave',
    desc: 'Log and review geographical paths, site checkpoints, and travel routes for field representatives.',
    icon: 'Compass',
    color: '#6366F1',
    features: ['Live tracking logs', 'Checkpoint checklist confirmations', 'Travel allowance calculations']
  },
  'timesheets-shift-table': {
    slug: 'timesheets-shift-table',
    name: 'Work Shift Table',
    category: 'timesheets',
    categoryName: 'Timesheets & Leave',
    desc: 'Unified rosters presenting monthly shifts, department schedules, and staff rotations.',
    icon: 'Grid',
    color: '#3B82F6',
    features: ['Department roster grid', 'Roster release notifications', 'Shift swap requests portal']
  },
  'timesheets-shift': {
    slug: 'timesheets-shift',
    name: 'Shift',
    category: 'timesheets',
    categoryName: 'Timesheets & Leave',
    desc: 'Allocate individual employees to specific shifts, tracking maximum hours and compliance.',
    icon: 'Clock',
    color: '#F59E0B',
    features: ['Drag-and-drop shift planner', 'Overtime cap warning triggers', 'Shift override tracking']
  },
  'timesheets-shift-type': {
    slug: 'timesheets-shift-type',
    name: 'Shift type',
    category: 'timesheets',
    categoryName: 'Timesheets & Leave',
    desc: 'Define standard company shifts, including night premiums, holiday rates, and compliance parameters.',
    icon: 'Sliders',
    color: '#64748B',
    features: ['Night shift rate rules', 'Flexible shift setups', 'Holiday premium configs']
  },
  'timesheets-workplace': {
    slug: 'timesheets-workplace',
    name: 'Workplace',
    category: 'timesheets',
    categoryName: 'Timesheets & Leave',
    desc: 'Register office hubs, site areas, and geofence coordinates for biometric check-ins.',
    icon: 'MapPin',
    color: '#06B6D4',
    features: ['Geofence mapping tools', 'IP address whitelist setup', 'Site details records']
  },

  // ── Reports ──
  'reports-main': {
    slug: 'reports-main',
    name: 'Reports',
    category: 'reports',
    categoryName: 'Reports',
    desc: 'Build and export detailed company reports (Sales, HR, Inventory, Profitability) in Excel or PDF.',
    icon: 'BarChart3',
    color: '#8B5CF6',
    features: ['Custom report builder templates', 'Scheduled email reports', 'Cross-module data merge']
  },

  // ── Support ──
  'support-open': {
    slug: 'support-open',
    name: 'Open',
    category: 'support',
    categoryName: 'Support',
    desc: 'View active incoming support tickets from clients, prioritize SLAs, and assign support representatives.',
    icon: 'Inbox',
    color: '#3B82F6',
    features: ['Real-time ticket updates', 'SLA timers display', 'Customer CRM panel details']
  },
  'support-in-progress': {
    slug: 'support-in-progress',
    name: 'In Progress',
    category: 'support',
    categoryName: 'Support',
    desc: 'Track support tickets that are currently undergoing resolution, managing timelines and team notes.',
    icon: 'Activity',
    color: '#F59E0B',
    features: ['Internal conversation logs', 'Associated tasks delegation', 'Escalation warnings']
  },
  'support-answered': {
    slug: 'support-answered',
    name: 'Answered',
    category: 'support',
    categoryName: 'Support',
    desc: 'Review resolved tickets that are awaiting final feedback and client confirmation.',
    icon: 'CheckCircle',
    color: '#10B981',
    features: ['Customer response logs', 'Resolved stats updates', 'Auto-close trigger configurations']
  },
  'support-on-hold': {
    slug: 'support-on-hold',
    name: 'On Hold',
    category: 'support',
    categoryName: 'Support',
    desc: 'Manage tickets waiting on external dependencies, thirdparty vendors, or client clarifications.',
    icon: 'Pause',
    color: '#EF4444',
    features: ['Hold reason tracking', 'Follow-up date planners', 'Client alerts triggers']
  },
  'support-closed': {
    slug: 'support-closed',
    name: 'Closed',
    category: 'support',
    categoryName: 'Support',
    desc: 'Archived records of fully resolved support tickets. Analyze historical logs for CSAT and performance.',
    icon: 'Archive',
    color: '#64748B',
    features: ['CSAT score analytics', 'Resolved tickets archives', 'Resolution search library']
  },

  // ── Documents ──
  'documents-file-mgmt': {
    slug: 'documents-file-mgmt',
    name: 'File management',
    category: 'documents',
    categoryName: 'Documents',
    desc: 'A complete document management system (DMS) supporting folders, version control, metadata, and security.',
    icon: 'FolderOpen',
    color: '#7C3AED',
    features: ['Version history logs', 'Secure metadata configurations', 'Granular access controls']
  },

  // ── Approvify ──
  'approvify-new': {
    slug: 'approvify-new',
    name: 'New Request',
    category: 'approvify',
    categoryName: 'Approvify',
    desc: 'Submit a new approval request (e.g., budget variance, policy override) matching standard company flows.',
    icon: 'PlusCircle',
    color: '#3B82F6',
    features: ['Dynamic approval forms', 'File attachment uploads', 'Multi-stage workflow tracks']
  },
  'approvify-my': {
    slug: 'approvify-my',
    name: 'My Requests',
    category: 'approvify',
    categoryName: 'Approvify',
    desc: 'Monitor the status of your submitted approval requests, checking pending approvers and history.',
    icon: 'ClipboardList',
    color: '#F59E0B',
    features: ['Live tracking dashboard', 'Pending stage alerts', 'Reminders triggers']
  },
  'approvify-review': {
    slug: 'approvify-review',
    name: 'Review Requests',
    category: 'approvify',
    categoryName: 'Approvify',
    desc: 'A dedicated inbox for managers and executives to review, comment on, and approve/reject pending requests.',
    icon: 'FileCheck',
    color: '#10B981',
    features: ['One-click approve/reject actions', 'Comments timeline logs', 'Bulk actions tools']
  },

  // ── Customer Loyalty ──
  'loyalty-users': {
    slug: 'loyalty-users',
    name: 'Users',
    category: 'loyalty',
    categoryName: 'Customer Loyalty',
    desc: 'View your customer membership levels, loyalty points balances, and profile details.',
    icon: 'Users',
    color: '#EC4899',
    features: ['Point ledger charts', 'Tier progress status maps', 'Direct CRM profiles binding']
  },
  'loyalty-transactions': {
    slug: 'loyalty-transactions',
    name: 'Transactions',
    category: 'loyalty',
    categoryName: 'Customer Loyalty',
    desc: 'Detailed ledgers logging points acquisitions, purchases conversions, and program redemptions.',
    icon: 'History',
    color: '#3B82F6',
    features: ['Points accounting logs', 'Redemption audit tables', 'Invoicing integrations']
  },
  'loyalty-memberships': {
    slug: 'loyalty-memberships',
    name: 'Memberships',
    category: 'loyalty',
    categoryName: 'Customer Loyalty',
    desc: 'Establish membership structures (Silver, Gold, Platinum), entry rules, and tier perks.',
    icon: 'Sparkles',
    color: '#F59E0B',
    features: ['Tier entry requirements setups', 'Bonus multiplier grids', 'Tier upgrade notifications']
  },
  'loyalty-programs': {
    slug: 'loyalty-programs',
    name: 'Loyalty Programs',
    category: 'loyalty',
    categoryName: 'Customer Loyalty',
    desc: 'Launch custom points programs, seasonal campaigns, and reward rules for purchases.',
    icon: 'Award',
    color: '#10B981',
    features: ['Incentives rule builders', 'Custom campaign templates', 'Automated trigger rules']
  },
  'loyalty-configs': {
    slug: 'loyalty-configs',
    name: 'Configurations',
    category: 'loyalty',
    categoryName: 'Customer Loyalty',
    desc: 'Define points values, points expiry durations, and general loyalty program configurations.',
    icon: 'Settings',
    color: '#64748B',
    features: ['Conversion rates definition', 'Points expiration rules', 'General switch controls']
  },

  // ── Marketing Automation ──
  'marketing-dashboard': {
    slug: 'marketing-dashboard',
    name: 'Dashboard',
    category: 'marketing',
    categoryName: 'Marketing Automation',
    desc: 'Unified interface tracking campaign performances, email open-rates, and marketing ROI indices.',
    icon: 'Megaphone',
    color: '#7C3AED',
    features: ['ROI tracking dashboards', 'Conversion funnel charts', 'Global campaign stats']
  },
  'marketing-segments': {
    slug: 'marketing-segments',
    name: 'Segments',
    category: 'marketing',
    categoryName: 'Marketing Automation',
    desc: 'Organize customers into automated segments using attributes, purchase histories, and activity levels.',
    icon: 'Split',
    color: '#3B82F6',
    features: ['Dynamic query segmentations', 'Behavioral segment filters', 'Lead list syncing']
  },
  'marketing-components': {
    slug: 'marketing-components',
    name: 'Components',
    category: 'marketing',
    categoryName: 'Marketing Automation',
    desc: 'Build and manage email headers, subscription forms, landing pages, and campaign templates.',
    icon: 'Layers',
    color: '#10B981',
    features: ['Visual HTML drag-and-drop builder', 'Reusable layout components', 'Custom variables bindings']
  },
  'marketing-campaigns': {
    slug: 'marketing-campaigns',
    name: 'Campaigns',
    category: 'marketing',
    categoryName: 'Marketing Automation',
    desc: 'Establish multi-stage marketing campaigns triggered by customer events or scheduled actions.',
    icon: 'Activity',
    color: '#F59E0B',
    features: ['Automation workflow builder', 'A/B testing support', 'Multi-channel trigger rules']
  },
  'marketing-channels': {
    slug: 'marketing-channels',
    name: 'Channels',
    category: 'marketing',
    categoryName: 'Marketing Automation',
    desc: 'Manage output channels for campaigns, including Email, SMS notifications, and browser alerts.',
    icon: 'Share2',
    color: '#06B6D4',
    features: ['Email delivery APIs', 'SMS gateway integrations', 'Push alerts management']
  },
  'marketing-points': {
    slug: 'marketing-points',
    name: 'Points',
    category: 'marketing',
    categoryName: 'Marketing Automation',
    desc: 'Configure scoring points to reward user actions, qualifying prospects for sales handovers.',
    icon: 'PlusCircle',
    color: '#EC4899',
    features: ['Lead score rule configs', 'Sales alerts triggers', 'Lead classification tags']
  },
  'marketing-stages': {
    slug: 'marketing-stages',
    name: 'Stages',
    category: 'marketing',
    categoryName: 'Marketing Automation',
    desc: 'Define and track customer progression stages across your marketing and sales funnels.',
    icon: 'Sliders',
    color: '#64748B',
    features: ['Standard lifecycle stages', 'Conversion rate tracking', 'Pipeline stage rules']
  },

  // ── Fleet ──
  'fleet-dashboard': {
    slug: 'fleet-dashboard',
    name: 'Dashboard',
    category: 'fleet',
    categoryName: 'Fleet',
    desc: 'Manage and coordinate corporate vehicles, maintenance intervals, active drivers, and logs.',
    icon: 'Truck',
    color: '#6366F1',
    features: ['Active logistics vehicle lists', 'Maintenance task schedulers', 'Cost logs dashboards']
  },

  // ── OKR ──
  'okr-dashboard': {
    slug: 'okr-dashboard',
    name: 'Dashboard',
    category: 'okr',
    categoryName: 'OKR',
    desc: 'A workspace summarizing company-wide OKRs status, alignment scores, and progress metrics.',
    icon: 'LayoutDashboard',
    color: '#7C3AED',
    features: ['Progress check-in tracking', 'Headcount target alignments', 'Corporate OKR registers']
  },
  'okr-report': {
    slug: 'okr-report',
    name: 'Report',
    category: 'okr',
    categoryName: 'OKR',
    desc: 'Generate comprehensive progress summaries showing target alignments and team OKR achievements.',
    icon: 'BarChart3',
    color: '#3B82F6',
    features: ['OKR progress dashboards', 'Quarterly goal analyses', 'Goal variance metrics']
  },
  'okr-okrs': {
    slug: 'okr-okrs',
    name: 'OKRs',
    category: 'okr',
    categoryName: 'OKR',
    desc: 'Establish and align corporate Objectives and Key Results (OKR) folders across departments.',
    icon: 'Target',
    color: '#10B981',
    features: ['Objectives alignment maps', 'Key Results trackers', 'Alignment checklists']
  },
  'okr-checkin': {
    slug: 'okr-checkin',
    name: 'Checkin',
    category: 'okr',
    categoryName: 'OKR',
    desc: 'A portal for teams to submit weekly/monthly updates on Key Results, tracking progression.',
    icon: 'CheckSquare',
    color: '#EC4899',
    features: ['Progress check-in logs', 'Associated comments logs', 'Goal status adjusters']
  }
};
