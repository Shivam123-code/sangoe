'use client';
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import { SERVICES_DATA } from '../servicesData';
import styles from './serviceDetail.module.css';

// Dynamic Icon Component
const LucideIcon = ({ name, ...props }) => {
  const IconComponent = Icons[name] || Icons.HelpCircle;
  return <IconComponent {...props} />;
};

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const mobileDropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const service = SERVICES_DATA[slug];

  // If service doesn't exist, show 404
  if (!service) {
    return (
      <div className={styles.notFoundContainer}>
        <LucideIcon name="AlertTriangle" size={48} color="#EF4444" />
        <h1 className={styles.notFoundTitle}>Service Not Found</h1>
        <p className={styles.notFoundDesc}>The CRM service module "{slug}" you are looking for does not exist.</p>
        <Link href="/" className="btn btn-purple">
          Back to Homepage
        </Link>
      </div>
    );
  }

  // Helper to render interactive CSS mockups based on module type
  const renderVisualMockup = () => {
    const color = service.color || '#7c3aed';
    const activeMenu = service.category;

    // Get real services belonging to the current category for the sidebar
    const categoryServices = Object.values(SERVICES_DATA).filter(s => s.category === service.category);

    // Get the module layout type based on slug
    const getModuleType = () => {
      const parts = slug.split('-');
      const sub = parts.slice(1).join('-');

      if (sub === 'dashboard' || sub === 'reports' || sub === 'okr' || slug.includes('report') || slug.includes('okr')) {
        return 'dashboard';
      }
      if (sub === 'mailbox' || sub === 'support' || slug.includes('mailbox')) {
        return 'mailbox';
      }
      if (sub === 'leads' || sub === 'sales' || sub === 'pipeline') {
        return 'kanban';
      }
      if (sub === 'projects' || sub === 'tasks' || sub === 'calendar' || sub === 'schedule' || sub === 'meeting' || sub === 'timesheets' || sub === 'attendance' || sub === 'leave') {
        return 'calendar';
      }
      if (sub === 'accounting' || sub === 'ledger' || sub === 'checks' || sub === 'convert' || sub === 'coa' || sub === 'bills' || sub === 'estimates' || sub === 'credit-notes' || sub === 'purchase' || sub === 'orders' || sub === 'invoice' || sub === 'tax') {
        return 'ledger';
      }
      if (sub === 'recruitment' || sub === 'candidates' || sub === 'onboarding') {
        return 'recruitment';
      }
      if (sub === 'workflow' || sub === 'automation' || sub === 'approvify' || sub === 'kickoff') {
        return 'workflow';
      }
      if (sub === 'customers' || sub === 'vendor' || sub === 'partners' || sub === 'client') {
        return 'directory';
      }
      return 'general';
    };

    const moduleType = getModuleType();

    // Get custom KPIs tailored to the active service
    const getModuleKPIs = () => {
      if (slug.includes('mailbox')) {
        return [
          { label: 'Unread Emails', val: '3', growth: '-12.4% vs yesterday', growthBg: '#fff0f6', growthColor: '#e64980', icon: 'Mail' },
          { label: 'Avg Response Time', val: '8.4m', growth: '-1.2m vs last week', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'Clock' },
          { label: 'Deliverability', val: '99.9%', growth: 'Optimal Status', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'CheckCircle' }
        ];
      }
      if (slug.includes('leads')) {
        return [
          { label: 'Pipeline Value', val: '₹39.2L', growth: '+15.2% vs target', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'TrendingUp' },
          { label: 'Deals Won', val: '8', growth: '+3 this month', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'Award' },
          { label: 'Average Win Rate', val: '74.2%', growth: '+4.8% vs industry', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'PieChart' }
        ];
      }
      if (slug === 'sales-sales') {
        return [
          { label: 'Sales Targets', val: '₹45L', growth: '82% Achieved', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'Target' },
          { label: 'Active Reps', val: '12', growth: '100% capacity', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'Users' },
          { label: 'Monthly Commission', val: '₹1.8L', growth: 'Calculated', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'DollarSign' }
        ];
      }
      if (slug.includes('proposals')) {
        return [
          { label: 'Sent Proposals', val: '24', growth: '18 accepted', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'FileSpreadsheet' },
          { label: 'Pending Signature', val: '4', growth: '-2 this week', growthBg: '#fff0f6', growthColor: '#e64980', icon: 'Clock' },
          { label: 'Estimated Value', val: '₹14.2L', growth: 'Pipeline synced', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'TrendingUp' }
        ];
      }
      if (slug.includes('estimates')) {
        return [
          { label: 'Active Estimates', val: '15', growth: '12 converted', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'Calculator' },
          { label: 'Tax Calculations', val: '100%', growth: 'SLA compliant', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'Percent' },
          { label: 'Unbilled Value', val: '₹8.4L', growth: 'Pending invoicing', growthBg: '#fff0f6', growthColor: '#e64980', icon: 'Clock' }
        ];
      }
      if (slug.includes('credit-notes')) {
        return [
          { label: 'Issued Notes', val: '6', growth: '4 reconciled', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'MinusSquare' },
          { label: 'Adjusted Balance', val: '₹1.2L', growth: 'Net zero matching', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'RefreshCw' },
          { label: 'Pending Approvals', val: '0', growth: 'All clear', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'CheckCircle' }
        ];
      }
      if (slug.includes('dashboard') || slug.includes('report') || slug.includes('okr')) {
        return [
          { label: 'Profit Total', val: '₹64,981', growth: '+7.2% vs last month', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'TrendingUp' },
          { label: 'Expense Total', val: '₹18,158', growth: '-2% vs last month', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'TrendingDown' },
          { label: 'Active Customers', val: '10,369', growth: '-9% this week', growthBg: '#fff0f6', growthColor: '#e64980', icon: 'Users' }
        ];
      }
      if (slug.includes('accounting') || slug.includes('ledger') || slug.includes('coa')) {
        return [
          { label: 'Monthly Revenue', val: '₹84.2L', growth: '+15% vs target', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'Wallet' },
          { label: 'Pending Bills', val: '5', growth: '-12.4% this month', growthBg: '#fff0f6', growthColor: '#e64980', icon: 'FileText' },
          { label: 'Reconciliation', val: '100%', growth: 'Auto-synced', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'CheckCircle' }
        ];
      }
      if (slug.includes('checks')) {
        return [
          { label: 'Issued Checks', val: '18', growth: '15 cleared', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'CreditCard' },
          { label: 'Bounced Alert', val: '0', growth: 'No alerts', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'AlertTriangle' },
          { label: 'Pending Clearing', val: '3', growth: 'In process', growthBg: '#fcf8e3', growthColor: '#8a6d3b', icon: 'Clock' }
        ];
      }
      if (slug.includes('convert')) {
        return [
          { label: 'Forex Traded', val: '$12.4k', growth: 'Real-time rates', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'RefreshCw' },
          { label: 'Supported Coins', val: '14', growth: 'Live feed', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'Globe' },
          { label: 'Exchange Variance', val: '0.12%', growth: 'Minimal deviation', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'Activity' }
        ];
      }
      if (slug.includes('recruitment') || slug.includes('candidate') || slug.includes('onboarding')) {
        return [
          { label: 'Open Positions', val: '6', growth: '3 filled this week', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'Briefcase' },
          { label: 'Applied Candidates', val: '45', growth: '+24% this month', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'UserPlus' },
          { label: 'Avg Interview Score', val: '4.6/5', growth: 'Excellent benchmark', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'Star' }
        ];
      }
      if (slug.includes('project') || slug.includes('task')) {
        return [
          { label: 'Active Projects', val: '8', growth: '6 on track', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'Briefcase' },
          { label: 'Total Tasks', val: '112', growth: '85 completed', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'CheckSquare' },
          { label: 'Task Velocity', val: '92%', growth: 'Optimal speed', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'Activity' }
        ];
      }
      if (slug.includes('timesheets') || slug.includes('attendance') || slug.includes('leave')) {
        return [
          { label: 'Logged Hours', val: '142h', growth: '+12h this week', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'Clock' },
          { label: 'Attendance Rate', val: '98.6%', growth: 'High performance', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'UserCheck' },
          { label: 'Active Leaves', val: '2', growth: 'Approved', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'Calendar' }
        ];
      }
      if (slug.includes('customers') || slug.includes('vendor') || slug.includes('partners')) {
        return [
          { label: 'Total Records', val: '1,248', growth: '+36 this month', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'Users' },
          { label: 'Active Profiles', val: '984', growth: 'Syncing live', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'UserCheck' },
          { label: 'Engagement Score', val: '92.4%', growth: 'Highly active', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'Activity' }
        ];
      }
      if (slug.includes('workflow') || slug.includes('automation') || slug.includes('approvify') || slug.includes('kickoff')) {
        return [
          { label: 'Workflow Rules', val: '12', growth: 'All active', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'Settings' },
          { label: 'Total Triggers', val: '1,420', growth: '+15.2% this week', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'Zap' },
          { label: 'Execution Success', val: '100%', growth: 'SLA compliant', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'CheckCircle' }
        ];
      }
      return [
        { label: 'Active Records', val: '24', growth: 'Synchronized live', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'Database' },
        { label: 'Operational KPI', val: '98.2%', growth: '+1.2% vs target', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'Activity' },
        { label: 'Pending Alerts', val: '0', growth: 'All systems clear', growthBg: '#e6fcf5', growthColor: '#0ca678', icon: 'AlertTriangle' }
      ];
    };

    const kpiItems = getModuleKPIs();

    // Helper to get feed items related to the service/category
    const getMockFeed = () => {
      const mappings = {
        sales: [
          { time: 'Just now', icon: 'TrendingUp', text: 'Lead Vardhman Builders won', color: '#10B981' },
          { time: '12m ago', icon: 'Mail', text: 'Email proposal sent to Rajesh Mehta', color: '#3B82F6' },
          { time: '1h ago', icon: 'Users', text: 'New lead synced: Apex Engineering', color: '#8B5CF6' }
        ],
        core: [
          { time: 'Just now', icon: 'TrendingUp', text: 'Lead Vardhman Builders won', color: '#10B981' },
          { time: '12m ago', icon: 'Mail', text: 'Email reply sent to Rajesh Mehta', color: '#3B82F6' },
          { time: '1h ago', icon: 'Users', text: 'New contact added: Apex Engineering', color: '#8B5CF6' }
        ],
        accounting: [
          { time: 'Just now', icon: 'Calculator', text: 'Mehta Construction TXN cleared', color: '#10B981' },
          { time: '45m ago', icon: 'RefreshCw', text: 'Converted USD invoice INV-902', color: '#6366F1' },
          { time: '3h ago', icon: 'FileText', text: 'Chart of Accounts rebalanced', color: '#F59E0B' }
        ],
        purchase: [
          { time: 'Just now', icon: 'Calculator', text: 'Mehta Construction TXN cleared', color: '#10B981' },
          { time: '45m ago', icon: 'RefreshCw', text: 'Converted USD invoice INV-902', color: '#6366F1' },
          { time: '3h ago', icon: 'FileText', text: 'Chart of Accounts rebalanced', color: '#F59E0B' }
        ],
        recruitment: [
          { time: '5m ago', icon: 'UserPlus', text: 'Amit Sharma offer released', color: '#10B981' },
          { time: '2h ago', icon: 'CheckSquare', text: 'Background check passed for Karan', color: '#10B981' },
          { time: 'Yesterday', icon: 'Calendar', text: 'Payroll release scheduled for June 30', color: '#F59E0B' }
        ],
        timesheets: [
          { time: '5m ago', icon: 'UserPlus', text: 'Amit Sharma offer released', color: '#10B981' },
          { time: '2h ago', icon: 'CheckSquare', text: 'Background check passed for Karan', color: '#10B981' },
          { time: 'Yesterday', icon: 'Calendar', text: 'Payroll release scheduled for June 30', color: '#F59E0B' }
        ]
      };
      return mappings[activeMenu] || [
        { time: 'Just now', icon: 'Zap', text: 'Trigger: Deal Won executed', color: '#10B981' },
        { time: '15m ago', icon: 'CheckCircle', text: 'Approvify contract SLA validated', color: '#3B82F6' },
        { time: '2h ago', icon: 'Activity', text: 'System status: 100% SLA compliant', color: '#10B981' }
      ];
    };

    const feedItems = getMockFeed();

    // RENDER CORE CONTENT OF THE SPECIFIC MODULE
    const renderModuleContent = () => {
      if (moduleType === 'mailbox') {
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
            <div className={styles.crmMailbox}>
              <div className={styles.mailListHeader}>
                <span className={styles.mailCount}>Inbox Messages</span>
                <button className={styles.miniCompose} style={{ background: color }}>Compose</button>
              </div>
              <div className={styles.mailItems}>
                <div className={styles.mailItemActive} style={{ borderLeftColor: color }}>
                  <div className={styles.mailMeta}>
                    <strong className={styles.mailSender}>Rajesh Mehta</strong>
                    <span className={styles.mailTime}>10:42 AM</span>
                  </div>
                  <div className={styles.mailSubj}>Re: Project SLA Agreement</div>
                  <div className={styles.mailBody}>Hi team, I reviewed the draft agreement. Let's proceed with execution...</div>
                </div>
                <div className={styles.mailItem}>
                  <div className={styles.mailMeta}>
                    <strong className={styles.mailSender}>QuickVerification Bot</strong>
                    <span className={styles.mailTime}>9:15 AM</span>
                  </div>
                  <div className={styles.mailSubj}>Background check complete: Karan Patel</div>
                  <div className={styles.mailBody}>The background check report for accounts manager is ready for review...</div>
                </div>
                <div className={styles.mailItem}>
                  <div className={styles.mailMeta}>
                    <strong className={styles.mailSender}>FounderOS Alert</strong>
                    <span className={styles.mailTime}>Yesterday</span>
                  </div>
                  <div className={styles.mailSubj}>Weekly profit scorecard ready</div>
                  <div className={styles.mailBody}>Your corporate KPI scorecards have been compiled for this week...</div>
                </div>
              </div>
            </div>
          </div>
        );
      }

      if (moduleType === 'kanban') {
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
            <div className={styles.crmKanban}>
              <div className={styles.kanbanCol}>
                <div className={styles.kanbanColHeader}>
                  <span>Prospects</span>
                  <span className={styles.kanbanCount}>2</span>
                </div>
                <div className={styles.kanbanCard}>
                  <div className={styles.kanbanCardTitle}>Vardhman Builders</div>
                  <div className={styles.kanbanCardVal} style={{ color }}>₹15,00,000</div>
                  <div className={styles.kanbanCardTags}>
                    <span className={styles.kanbanTag} style={{ background: color + '15', color }}>Inbound</span>
                  </div>
                </div>
                <div className={styles.kanbanCard}>
                  <div className={styles.kanbanCardTitle}>Acme Tech Ltd</div>
                  <div className={styles.kanbanCardVal} style={{ color }}>₹6,40,000</div>
                  <div className={styles.kanbanCardTags}>
                    <span className={styles.kanbanTag}>Referral</span>
                  </div>
                </div>
              </div>
              <div className={styles.kanbanCol}>
                <div className={styles.kanbanColHeader}>
                  <span>Proposal Sent</span>
                  <span className={styles.kanbanCount}>1</span>
                </div>
                <div className={styles.kanbanCard}>
                  <div className={styles.kanbanCardTitle}>Apex Engineering</div>
                  <div className={styles.kanbanCardVal} style={{ color }}>₹24,00,000</div>
                  <div className={styles.kanbanCardTags}>
                    <span className={styles.kanbanTag} style={{ background: '#3b82f615', color: '#3b82f6' }}>High Value</span>
                  </div>
                </div>
              </div>
              <div className={styles.kanbanCol}>
                <div className={styles.kanbanColHeader}>
                  <span>Closed Won</span>
                  <span className={styles.kanbanCount}>1</span>
                </div>
                <div className={styles.kanbanCard} style={{ borderLeft: '3.5px solid #10B981' }}>
                  <div className={styles.kanbanCardTitle}>Hindustan Chemical</div>
                  <div className={styles.kanbanCardVal} style={{ color: '#10B981' }}>₹8,00,000</div>
                  <div className={styles.kanbanCardTags}>
                    <span className={styles.kanbanTag} style={{ background: '#10b98115', color: '#10b981' }}>Contract signed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }

      if (moduleType === 'dashboard') {
        return (
          <div className={styles.crmDashboard}>
            <div className={styles.crmChartContainer}>
              <div className={styles.crmChartHeader}>
                <span>Sales Overview (Gross Profit vs Expenses)</span>
                <div className={styles.crmChartLegend}>
                  <span className={styles.legendColor} style={{ background: color }} />
                  <span>Profit</span>
                  <span className={styles.legendColor} style={{ background: '#cbd5e1', marginLeft: '8px' }} />
                  <span>Expenses</span>
                </div>
              </div>

              <div className={styles.crmChartMain}>
                <div className={styles.crmChartGridLine} style={{ bottom: '60%' }}>
                  <span className={styles.crmChartLineTag}>Target Avg: ₹30L</span>
                </div>

                <div className={styles.crmChartBars}>
                  {[
                    { m: 'Jan', p: 30, e: 15 },
                    { m: 'Feb', p: 45, e: 20 },
                    { m: 'Mar', p: 35, e: 18 },
                    { m: 'Apr', p: 55, e: 25 },
                    { m: 'May', p: 40, e: 22 },
                    { m: 'Jun', p: 75, e: 30, active: true },
                    { m: 'Jul', p: 50, e: 24 },
                    { m: 'Aug', p: 48, e: 20 },
                    { m: 'Sep', p: 62, e: 28 },
                    { m: 'Oct', p: 58, e: 26 },
                    { m: 'Nov', p: 70, e: 32 },
                    { m: 'Dec', p: 85, e: 35 }
                  ].map((d, i) => (
                    <div key={i} className={styles.crmChartBarCol}>
                      {d.active && (
                        <div className={styles.crmChartTooltip}>
                          <div>Profit: ₹{d.p * 10}k</div>
                          <div>Expense: ₹{d.e * 10}k</div>
                        </div>
                      )}
                      <div className={styles.crmDoubleBars}>
                        <div 
                          className={styles.crmBarFill} 
                          style={{ 
                            height: `${d.p}%`, 
                            background: d.active ? color : `${color}80` 
                          }} 
                        />
                        <div 
                          className={styles.crmBarFillExpense} 
                          style={{ 
                            height: `${d.e}%`, 
                            background: '#cbd5e1' 
                          }} 
                        />
                      </div>
                      <span className={styles.crmChartLabel}>{d.m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      }

      if (moduleType === 'calendar') {
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
            <div className={styles.crmCalendarSection}>
              {/* Mini Calendar Card */}
              <div className={styles.crmCalendar}>
                <div className={styles.crmCalHeader}>
                  <strong className={styles.crmCalTitle}>January 2026</strong>
                  <div className={styles.crmCalActions}>
                    <span>&lt;</span> <span>&gt;</span>
                  </div>
                </div>
                <div className={styles.crmCalGrid}>
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                    <div key={d} className={styles.crmCalDayHeader}>{d}</div>
                  ))}
                  {[8, 9, 10, 11, 12, 13, 14].map(day => {
                    const isHighlighted = day === 11;
                    return (
                      <div 
                        key={day} 
                        className={`${styles.crmCalCell} ${isHighlighted ? styles.crmCalCellActive : ''}`}
                        style={isHighlighted ? { background: color, color: '#ffffff' } : {}}
                      >
                        <span className={styles.crmCalDayNum} style={isHighlighted ? { color: '#ffffff' } : {}}>{day}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Upcoming Schedule Card */}
              <div className={styles.crmScheduleCard}>
                <div className={styles.scheduleHeader}>
                  <strong>Upcoming Schedule</strong>
                  <span className={styles.scheduleDots}>•••</span>
                </div>
                <div className={styles.scheduleList}>
                  {[
                    { time: '09:30 AM', title: 'Business Analytics Review', sub: 'David McGuire and 12+ more', checked: true },
                    { time: '10:35 AM', title: 'Weekly Sprint Kickoff', sub: 'Jonas Kahnwald and 5+ more', checked: false },
                    { time: '01:15 PM', title: 'Customer Review Meeting', sub: 'Natashia Bahroff and 8+ more', checked: false },
                    { time: '02:45 PM', title: 'Daily Office Sync', sub: 'Alexa Martha and 32+ more', checked: false }
                  ].map((item, idx) => (
                    <div key={idx} className={`${styles.scheduleItem} ${item.checked ? styles.scheduleItemActive : ''}`}>
                      <span 
                        className={styles.scheduleCheck} 
                        style={{ 
                          background: item.checked ? color : 'transparent', 
                          borderColor: item.checked ? color : '#cbd5e1' 
                        }}
                      >
                        {item.checked && <LucideIcon name="Check" size={10} color="#ffffff" />}
                      </span>
                      <div className={styles.scheduleMeta}>
                        <span className={styles.scheduleTime}>{item.time}</span>
                        <div className={styles.scheduleMainInfo}>
                          <div className={styles.scheduleTitle}>{item.title}</div>
                          <div className={styles.scheduleSub}>{item.sub}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      }

      if (moduleType === 'ledger') {
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
            <div className={styles.crmLedger}>
              <div className={styles.crmLedgerHeader}>
                <span>ERP Transaction Ledger</span>
                <span className={styles.crmLedgerSubtitle}>Auto-synchronized with Bank Feed</span>
              </div>
              <table className={styles.crmLedgerTable}>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Transaction ID</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>20-06-2026</td>
                    <td>Mehta Construction Payout</td>
                    <td className={styles.mono}>TXN-902148</td>
                    <td style={{ fontWeight: 800 }}>-₹4,20,000</td>
                    <td><span className={styles.crmStatusBadge} style={{ background: '#10b98115', color: '#10b981' }}>Cleared</span></td>
                  </tr>
                  <tr>
                    <td>18-06-2026</td>
                    <td>CRM Subscription Revenue</td>
                    <td className={styles.mono}>TXN-884021</td>
                    <td style={{ color: '#10B981', fontWeight: 800 }}>+₹64,000</td>
                    <td><span className={styles.crmStatusBadge} style={{ background: '#10b98115', color: '#10b981' }}>Cleared</span></td>
                  </tr>
                  <tr>
                    <td>15-06-2026</td>
                    <td>Recruitment Commission</td>
                    <td className={styles.mono}>TXN-876129</td>
                    <td style={{ fontWeight: 800 }}>-₹12,500</td>
                    <td><span className={styles.crmStatusBadge} style={{ background: '#f59e0b15', color: '#f59e0b' }}>Processing</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      }

      if (moduleType === 'recruitment') {
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
            <div className={styles.crmRecruitment}>
              <div className={styles.recCol}>
                <div className={styles.recColHeader}>Applied</div>
                <div className={styles.recCard}>
                  <div className={styles.recProfile}>
                    <div className={styles.recAv} style={{ background: color }}>AS</div>
                    <div>
                      <div className={styles.recName}>Amit Sharma</div>
                      <div className={styles.recRole}>Senior Lead Architect</div>
                    </div>
                  </div>
                </div>
                <div className={styles.recCard}>
                  <div className={styles.recProfile}>
                    <div className={styles.recAv} style={{ background: '#94a3b8', color: '#ffffff' }}>KP</div>
                    <div>
                      <div className={styles.recName}>Karan Patel</div>
                      <div className={styles.recRole}>HR Coordinator</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.recCol}>
                <div className={styles.recColHeader}>Interviewing</div>
                <div className={styles.recCard}>
                  <div className={styles.recProfile}>
                    <div className={styles.recAv} style={{ background: '#f59e0b' }}>ND</div>
                    <div>
                      <div className={styles.recName}>Neha Dixit</div>
                      <div className={styles.recRole}>Frontend Lead</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.recCol}>
                <div className={styles.recColHeader}>Offer Sent</div>
                <div className={styles.recCard}>
                  <div className={styles.recProfile}>
                    <div className={styles.recAv} style={{ background: '#10b981' }}>VR</div>
                    <div>
                      <div className={styles.recName}>Vikram Rao</div>
                      <div className={styles.recRole}>ERP Project Lead</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }

      if (moduleType === 'workflow') {
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
            <div className={styles.crmWorkflow}>
              <div className={styles.flowNode} style={{ borderLeftColor: color }}>
                <div className={styles.flowNodeBadge} style={{ background: color }}>Trigger</div>
                <div className={styles.flowNodeText}><strong>When:</strong> Deal marked as Closed Won in Sales Cloud</div>
              </div>
              <div className={styles.flowLine} style={{ background: color }} />
              <div className={styles.flowNode} style={{ borderLeftColor: '#10b981' }}>
                <div className={styles.flowNodeBadge} style={{ background: '#10b981' }}>Action</div>
                <div className={styles.flowNodeText}><strong>Then:</strong> Generate Ledger Entry &amp; Invoice Payout</div>
              </div>
              <div className={styles.flowLine} style={{ background: '#10b981' }} />
              <div className={styles.flowNode} style={{ borderLeftColor: '#3b82f6' }}>
                <div className={styles.flowNodeBadge} style={{ background: '#3b82f6' }}>Action</div>
                <div className={styles.flowNodeText}><strong>Then:</strong> Invite contacts to Project Kickoff Meeting</div>
              </div>
            </div>
          </div>
        );
      }

      if (moduleType === 'directory') {
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
            <div className={styles.crmDirectoryGrid}>
              {[
                { name: 'Rajesh Mehta', company: 'Mehta Construction Ltd', email: 'rajesh@mehtaconstruct.in', status: 'Active', tags: ['Enterprise', 'High Value'] },
                { name: 'Karan Patel', company: 'Apex Tech Solutions', email: 'karan.patel@apextech.com', status: 'Active', tags: ['SMB', 'Partner'] },
                { name: 'Amit Sharma', company: 'Vardhman Builders Group', email: 'amit.sharma@vardhman.in', status: 'Pending', tags: ['Lead', 'Negotiating'] },
                { name: 'Neha Dixit', company: 'Hindustan Chemicals', email: 'neha.dixit@hindustanchem.in', status: 'Active', tags: ['Enterprise', 'Referred'] }
              ].map((profile, i) => (
                <div key={i} className={styles.directoryCard}>
                  <div className={styles.directoryAv} style={{ background: color + '15', color }}>
                    {profile.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className={styles.directoryMeta}>
                    <strong className={styles.directoryName}>{profile.name}</strong>
                    <div className={styles.directoryCompany}>{profile.company}</div>
                    <div className={styles.directoryEmail}>{profile.email}</div>
                    <div className={styles.directoryTags}>
                      <span className={styles.directoryStatusBadge} style={{ background: profile.status === 'Active' ? '#e6fcf5' : '#fff0f6', color: profile.status === 'Active' ? '#0ca678' : '#e64980' }}>
                        {profile.status}
                      </span>
                      {profile.tags.map((t, idx) => (
                        <span key={idx} className={styles.directoryTag} style={{ background: color + '08', color }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }

      // Default (general cockpit)
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
          <div className={styles.crmGeneral}>
            <div className={styles.crmGenHeader}>
              <span>Module Console Workspace</span>
              <span className={styles.connectionStatus}><span className={styles.greenLight} style={{ background: color }} /> Database Syncing</span>
            </div>
            <div className={styles.crmGenDetails}>
              <div className={styles.genDetailsRow}>
                <span>Associated Category:</span> <strong style={{ color }}>{service.categoryName}</strong>
              </div>
              <div className={styles.genDetailsRow}>
                <span>Status:</span> <span className={styles.activeTag} style={{ color: color }}>Production Ready</span>
              </div>
              <div className={styles.genDetailsRow}>
                <span>Auto-reporting:</span> <span>Enabled (SLA logs)</span>
              </div>
            </div>
          </div>
        </div>
      );
    };

    return (
      <div className={styles.dashboardShell} style={{ '--service-color': color }}>
        
        {/* Left Side Sidebar - Light Mode Styled (inspired by Emitly reference) */}
        <aside className={styles.dashboardSidebar}>
          <div className={styles.sidebarBrand}>
            <span className={styles.brandIcon} style={{ background: color }}>S</span>
            <span className={styles.brandName}>
              SangoeOS
              <span className={styles.brandNameSub}>{service.categoryName}</span>
            </span>
          </div>

          <div className={styles.sidebarSearchWrap}>
            <LucideIcon name="Search" size={11} color="#64748b" />
            <input type="text" placeholder="Search here..." className={styles.sidebarSearchInput} disabled />
            <span className={styles.searchShortcut}>⌘K</span>
          </div>

          <div className={styles.sidebarSectionTitle}>ACTIVE SERVICES</div>
          <nav className={styles.sidebarNav}>
            {categoryServices.map(s => {
              const isActive = s.slug === slug;
              return (
                <Link 
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
                  style={isActive ? { background: 'var(--service-color)', color: '#ffffff', fontWeight: 800, boxShadow: `0 4px 12px ${color}35` } : {}}
                >
                  <LucideIcon name={s.icon} size={13} />
                  <span>{s.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className={styles.sidebarSectionTitle} style={{ marginTop: '16px' }}>SYSTEM EVENT</div>
          <div className={styles.sidebarEventCard}>
            <div className={styles.eventTime}>10:35 AM - 11:30 AM</div>
            <div className={styles.eventTitle}>{service.name} Sync</div>
            <span className={styles.eventStatus} style={{ color }}>ACTIVE</span>
          </div>

          <div className={styles.sidebarProfile}>
            <div className={styles.profileAvatar} style={{ background: color + '15', color }}>JD</div>
            <div className={styles.profileMeta}>
              <strong className={styles.profileName}>John Doe</strong>
              <span className={styles.profileRole}>Admin / Founder</span>
            </div>
          </div>
        </aside>

        {/* Right Side Workspace Container */}
        <div className={styles.dashboardWorkspace}>
          
          {/* Top Bar inside mockup */}
          <header className={styles.dashboardTopbar}>
            <div className={styles.topbarLeft}>
              <LucideIcon name="Search" size={12} color="#94a3b8" />
              <input type="text" placeholder="Search database..." className={styles.topbarSearch} disabled />
            </div>
            <div className={styles.topbarRight}>
              <button className={styles.themeToggleBtn} aria-label="Toggle Theme">
                <LucideIcon name="Moon" size={14} color="#64748b" />
              </button>
              <div className={styles.topbarNotify}>
                <LucideIcon name="Bell" size={14} color="#64748b" />
                <span className={styles.notifyBadge} />
              </div>
              <div className={styles.topbarProfile}>
                <div className={styles.profileMetaText}>
                  <span className={styles.profileUserName}>John Doe</span>
                  <span className={styles.profileUserEmail}>john.doe@sangoe.in</span>
                </div>
                <div className={styles.profileUserAv} style={{ background: color }}>JD</div>
              </div>
            </div>
          </header>

          {/* Greeting Header */}
          <div className={styles.greetingHeader}>
            <div className={styles.greetingTextContainer}>
              <h2 className={styles.greetingTitle}>Hello, Founder!</h2>
              <p className={styles.greetingSub}>Here is your {service.categoryName} overview for today.</p>
            </div>

            {/* Mobile Dropdown Switcher */}
            <div className={styles.mobileDropdownWrap} ref={mobileDropdownRef}>
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)} 
                className={styles.mobileDropdownBtn}
                style={{ borderLeft: `3px solid ${color}` }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <LucideIcon name={service.icon} size={14} color={color} />
                  <strong>{service.name}</strong>
                </div>
                <LucideIcon name="ChevronDown" size={14} color="#64748b" />
              </button>
              {dropdownOpen && (
                <div className={styles.mobileDropdownMenu}>
                  {categoryServices.map(s => {
                    const isActive = s.slug === slug;
                    return (
                      <Link 
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className={`${styles.mobileDropdownItem} ${isActive ? styles.mobileDropdownItemActive : ''}`}
                        onClick={() => setDropdownOpen(false)}
                      >
                        <LucideIcon name={s.icon} size={13} color={isActive ? '#ffffff' : '#64748b'} />
                        <span>{s.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Module Inner Body */}
          <div className={styles.workspaceBody}>
            
            {/* Primary View Panel */}
            <main className={styles.workspacePrimary}>
              <div className={styles.primaryHeader}>
                <h3 className={styles.moduleHeading}>{service.name} Console</h3>
                <span className={styles.syncStatus} style={{ background: color + '12', color }}>
                  <span className={styles.pulseGreen} style={{ background: color }} /> Live Sync Active
                </span>
              </div>

              {/* Specific KPIs */}
              <div className={styles.crmKPIs}>
                {kpiItems.map((kpi, idx) => (
                  <div key={idx} className={styles.crmKPIBox}>
                    <div className={styles.kpiMeta}>
                      <span className={styles.kpiBoxLabel}>{kpi.label}</span>
                      <h4 className={styles.kpiBoxVal}>{kpi.val}</h4>
                      <span className={styles.kpiBoxGrowth} style={{ background: kpi.growthBg, color: kpi.growthColor }}>
                        {kpi.growth}
                      </span>
                    </div>
                    <div className={styles.kpiIconCircle} style={{ background: color + '12', color }}>
                      <LucideIcon name={kpi.icon} size={14} />
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.primaryContent}>
                {renderModuleContent()}
              </div>
            </main>

            {/* Right Activity Feed Panel */}
            <aside className={styles.workspaceFeed}>
              <div className={styles.feedHeader}>
                <span>Operations Feed</span>
                <span className={styles.liveTag}>LIVE</span>
              </div>
              <div className={styles.feedList}>
                {feedItems.map((item, idx) => (
                  <div key={idx} className={styles.feedItem}>
                    <div className={styles.feedIconWrap} style={{ background: item.color + '12', color: item.color }}>
                      <LucideIcon name={item.icon} size={11} />
                    </div>
                    <div className={styles.feedContent}>
                      <span className={styles.feedText}>{item.text}</span>
                      <span className={styles.feedTime}>{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </aside>

          </div>

        </div>

      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className="wrap">
        
        {/* Breadcrumbs & Back Button */}
        <div className={styles.topBar}>
          <Link href="/" className={styles.backBtn}>
            <LucideIcon name="ArrowLeft" size={14} /> Back to Homepage
          </Link>
          <div className={styles.breadcrumbs}>
            <span>Home</span> / <span>Services</span> / <span style={{ color: service.color }}>{service.name}</span>
          </div>
        </div>

        {/* Dedicated Service Header */}
        <header className={styles.header}>
          <div className={styles.titleArea}>
            <span className={styles.categoryBadge} style={{ background: service.color + '12', color: service.color }}>
              {service.categoryName}
            </span>
            <h1 className={styles.title}>{service.name}</h1>
          </div>
          <div className={styles.headerAction} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-purple" style={{ background: service.color }}>
              Start Free Trial
            </Link>
            <Link href="/contact" className="btn" style={{ border: `1px solid ${service.color}`, color: service.color, background: 'transparent', boxShadow: 'none' }}>
              Schedule Demo
            </Link>
          </div>
        </header>

        {/* Dashboard Visual Placeholder Area */}
        <section className={styles.visualArea}>
          <div className={styles.visualWrapper}>
            <div className={styles.mockupHeader}>
              <div className={styles.dots}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
              </div>
              <span className={styles.mockupURL}>https://os.sangoe.in/modules/{service.slug}</span>
            </div>
            <div className={styles.mockupBody}>
              {renderVisualMockup()}
            </div>
          </div>
        </section>

        {/* Detailed Description Text Section */}
        <section className={styles.textSection}>
          <div className={styles.textLeft}>
            <h2 className={styles.sectionH2}>Module Functionality &amp; Capabilities</h2>
            <p className={styles.descriptionText}>{service.desc}</p>
            <p className={styles.descriptionSecondary}>
              As a core component of the Sangoe Business Growth Operating System, this service runs on a unified relational database. Data logged here automatically updates your financial ledger, team tasks checklist, customer CRM records, and founder cockpit dashboards in real-time, eliminating manual duplicate entries.
            </p>
          </div>

          <div className={styles.textRight}>
            <div className={styles.featuresCard}>
              <h3 className={styles.featuresTitle} style={{ color: service.color }}>Key System Capabilities</h3>
              <ul className={styles.featuresList}>
                {service.features.map((feat, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <LucideIcon name="CheckCircle2" size={16} className={styles.checkIcon} style={{ color: service.color }} />
                    <span>{feat}</span>
                  </li>
                ))}
                <li className={styles.featureItem}>
                  <LucideIcon name="CheckCircle2" size={16} className={styles.checkIcon} style={{ color: service.color }} />
                  <span>Real-time multi-tenant data sync</span>
                </li>
                <li className={styles.featureItem}>
                  <LucideIcon name="CheckCircle2" size={16} className={styles.checkIcon} style={{ color: service.color }} />
                  <span>Comprehensive role-based access control</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bottom Call to Action */}
        <section className={styles.bottomCTA}>
          <div className={styles.ctaCard} style={{ borderLeft: `4px solid ${service.color}` }}>
            <div className={styles.ctaInfo}>
              <h4 className={styles.ctaTitle}>Ready to systemize your operations?</h4>
              <p className={styles.ctaDesc}>Get a custom walkthrough of the {service.name} module tailored for your specific industry.</p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-purple" style={{ background: service.color }}>
                Start Free Trial
              </Link>
              <Link href="/contact" className="btn" style={{ border: `1px solid ${service.color}`, color: service.color, background: 'transparent', boxShadow: 'none' }}>
                Talk to Our Experts
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
