'use client';
import { CheckCircle2, XCircle } from 'lucide-react';
import styles from './WhySangoe.module.css';

const TABLE1_ROWS = [
  { cap: 'CRM', zoho: true, odoo: true, sf: true, monday: 'limited', asana: 'limited', fw: true, sg: true },
  { cap: 'Sales Management', zoho: true, odoo: true, sf: true, monday: 'limited', asana: false, fw: true, sg: true },
  { cap: 'Accounting & Finance', zoho: true, odoo: true, sf: 'limited', monday: false, asana: false, fw: false, sg: true },
  { cap: 'GST, TDS, PF, ESIC', zoho: 'limited', odoo: 'limited', sf: false, monday: false, asana: false, fw: false, sg: true },
  { cap: 'HR & Payroll', zoho: true, odoo: true, sf: 'limited', monday: false, asana: false, fw: false, sg: true },
  { cap: 'Learning & Development', zoho: 'limited', odoo: 'limited', sf: 'limited', monday: false, asana: false, fw: 'limited', sg: true },
  { cap: 'Project Management', zoho: true, odoo: true, sf: 'limited', monday: true, asana: true, fw: 'limited', sg: true },
  { cap: 'Inventory Management', zoho: 'limited', odoo: true, sf: false, monday: false, asana: false, fw: false, sg: true },
  { cap: 'Procurement', zoho: 'limited', odoo: true, sf: false, monday: false, asana: false, fw: false, sg: true },
  { cap: 'Vendor Management', zoho: 'limited', odoo: true, sf: 'limited', monday: false, asana: false, fw: false, sg: true },
  { cap: 'Meeting & Appointment', zoho: true, odoo: 'limited', sf: true, monday: 'limited', asana: 'limited', fw: 'limited', sg: true },
  { cap: 'Email & Collaboration', zoho: true, odoo: 'limited', sf: true, monday: 'limited', asana: 'limited', fw: true, sg: true },
  { cap: 'Contract Management', zoho: 'limited', odoo: 'limited', sf: 'limited', monday: 'limited', asana: false, fw: false, sg: true },
  { cap: 'Support & Ticketing', zoho: true, odoo: 'limited', sf: true, monday: 'limited', asana: false, fw: true, sg: true },
  { cap: 'Knowledge Base', zoho: true, odoo: 'limited', sf: true, monday: 'limited', asana: 'limited', fw: true, sg: true },
  { cap: 'Marketing Automation', zoho: true, odoo: 'limited', sf: true, monday: 'limited', asana: false, fw: 'limited', sg: true },
  { cap: 'Document Management', zoho: 'limited', odoo: 'limited', sf: 'limited', monday: 'limited', asana: 'limited', fw: 'limited', sg: true },
  { cap: 'Workflow Automation', zoho: true, odoo: true, sf: true, monday: true, asana: true, fw: 'limited', sg: true },
  { cap: 'Mobile App', zoho: true, odoo: true, sf: true, monday: true, asana: true, fw: true, sg: true },
  { cap: 'API & Integrations', zoho: true, odoo: true, sf: true, monday: true, asana: 'limited', fw: true, sg: true },
  { cap: 'Reporting & Dashboards', zoho: true, odoo: true, sf: true, monday: 'limited', asana: 'limited', fw: true, sg: true },
  { cap: 'Founder Dashboard', zoho: false, odoo: 'limited', sf: 'limited', monday: false, asana: false, fw: false, sg: true },
  { cap: 'Business Health Score', zoho: false, odoo: false, sf: false, monday: false, asana: false, fw: false, sg: true },
];

const TABLE2_ROWS = [
  { cap: 'Governance Management', zoho: false, odoo: false, sf: false, monday: false, asana: false, fw: false, sg: true },
  { cap: 'Compliance Management', zoho: false, odoo: 'limited', sf: 'limited', monday: false, asana: false, fw: false, sg: true },
  { cap: 'Safety Management (EHS)', zoho: false, odoo: false, sf: false, monday: false, asana: false, fw: false, sg: true },
  { cap: 'ESG Management', zoho: false, odoo: false, sf: false, monday: false, asana: false, fw: false, sg: true },
  { cap: 'Risk Management', zoho: false, odoo: 'limited', sf: 'limited', monday: false, asana: false, fw: false, sg: true },
  { cap: 'Quality Management System', zoho: 'limited', odoo: 'limited', sf: 'limited', monday: false, asana: false, fw: false, sg: true },
  { cap: 'Background Verification', zoho: false, odoo: false, sf: false, monday: false, asana: false, fw: false, sg: true },
  { cap: 'Driver Verification', zoho: false, odoo: false, sf: false, monday: false, asana: false, fw: false, sg: true },
  { cap: 'Transport Management', zoho: false, odoo: 'limited', sf: false, monday: false, asana: false, fw: false, sg: true },
  { cap: 'Fleet Management', zoho: false, odoo: 'limited', sf: false, monday: false, asana: false, fw: false, sg: true },
  { cap: 'Construction Project Management', zoho: false, odoo: 'limited', sf: false, monday: false, asana: false, fw: false, sg: true },
  { cap: 'ISO/CTPAT / AEO / GDP Compliance', zoho: false, odoo: false, sf: false, monday: false, asana: false, fw: false, sg: true },
  { cap: 'IPO Readiness Platform', zoho: false, odoo: false, sf: false, monday: false, asana: false, fw: false, sg: true },
  { cap: 'Due Diligence Management', zoho: false, odoo: false, sf: false, monday: false, asana: false, fw: false, sg: true },
  { cap: 'Board Governance', zoho: false, odoo: false, sf: false, monday: false, asana: false, fw: false, sg: true },
  { cap: 'MSME Transformation Framework', zoho: false, odoo: false, sf: false, monday: false, asana: false, fw: false, sg: true },
  { cap: 'AI Compliance Officer', zoho: false, odoo: false, sf: false, monday: false, asana: false, fw: false, sg: true },
  { cap: 'AI Safety Officer', zoho: false, odoo: false, sf: false, monday: false, asana: false, fw: false, sg: true },
  { cap: 'Complete Business OS', zoho: false, odoo: false, sf: false, monday: false, asana: false, fw: false, sg: true },
];

function Cell({ val }) {
  if (val === true) return <CheckCircle2 size={18} style={{ color: '#10B981', display: 'block', margin: '0 auto' }} />;
  if (val === false) return <XCircle size={18} style={{ color: '#EF4444', display: 'block', margin: '0 auto', opacity: 0.65 }} />;
  return <span className={styles.limited}>Partial</span>;
}

export default function WhySangoe() {
  return (
    <section className={`section ${styles.section}`} id="why">
      <div className="wrap">
        <div className={styles.header} style={{ maxWidth: '820px' }}>
          <span className="tag">Why Sangoe</span>
          <h2 className={styles.heading} style={{ lineHeight: 1.25, marginBottom: '8px' }}>
            Run Your Entire Business.<br />
            <span className={styles.highlightText}>From Lead To IPO.</span>
          </h2>
          <p className={styles.sub} style={{ fontSize: '1.05rem', fontWeight: 650, color: 'var(--theme-text-sub)' }}>
            Sales. Finance. HR. Operations. Compliance. Safety. ESG. Governance. Growth. One Platform.
          </p>
        </div>

        {/* ── Table 1 ── */}
        <div style={{ marginBottom: '56px' }}>
          <div className={styles.tableHeaderRow}>
            <h3 className={styles.tableTitle}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#7C3AED' }} />
              Sangoe vs Traditional CRM &amp; ERP Platforms
            </h3>
            <span className={styles.swipeHint}>
              Swipe Right <span className={styles.swipeArrow}>→</span>
            </span>
          </div>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.capCol}>Capability</th>
                  <th>Zoho One</th>
                  <th>Odoo</th>
                  <th>Salesforce</th>
                  <th>Monday</th>
                  <th>Asana</th>
                  <th>Freshworks</th>
                  <th className={styles.sangoeCol}>
                    <span className={styles.sangoeHeader}>
                      Sangoe
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {TABLE1_ROWS.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? styles.even : ''}>
                    <td className={styles.capCell}>{row.cap}</td>
                    <td><Cell val={row.zoho} /></td>
                    <td><Cell val={row.odoo} /></td>
                    <td><Cell val={row.sf} /></td>
                    <td><Cell val={row.monday} /></td>
                    <td><Cell val={row.asana} /></td>
                    <td><Cell val={row.fw} /></td>
                    <td className={styles.sangoeCell}><Cell val={row.sg} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Table 2 ── */}
        <div>
          <div className={styles.tableHeaderRow}>
            <h3 className={styles.tableTitle}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444' }} />
              Sangoe Exclusive Capabilities
            </h3>
            <span className={styles.swipeHint}>
              Swipe Right <span className={styles.swipeArrow}>→</span>
            </span>
          </div>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.capCol}>Strategic Capability</th>
                  <th>Zoho</th>
                  <th>Odoo</th>
                  <th>Salesforce</th>
                  <th>Monday</th>
                  <th>Asana</th>
                  <th>Freshworks</th>
                  <th className={styles.sangoeCol}>
                    <span className={styles.sangoeHeader}>
                      Sangoe
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {TABLE2_ROWS.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? styles.even : ''}>
                    <td className={styles.capCell}>{row.cap}</td>
                    <td><Cell val={row.zoho} /></td>
                    <td><Cell val={row.odoo} /></td>
                    <td><Cell val={row.sf} /></td>
                    <td><Cell val={row.monday} /></td>
                    <td><Cell val={row.asana} /></td>
                    <td><Cell val={row.fw} /></td>
                    <td className={styles.sangoeCell}><Cell val={row.sg} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
