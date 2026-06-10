'use client';
import { CheckCircle2, XCircle } from 'lucide-react';
import styles from './WhySangoe.module.css';

const ROWS = [
  { cap: 'Sales & Revenue', crm: true, erp: true, sg: true },
  { cap: 'HR & Recruitment', crm: 'limited', erp: true, sg: true },
  { cap: 'Compliance', crm: false, erp: 'limited', sg: true },
  { cap: 'Safety Management', crm: false, erp: false, sg: true },
  { cap: 'ESG Platform', crm: false, erp: 'limited', sg: true },
  { cap: 'Background Verification', crm: false, erp: false, sg: true },
  { cap: 'IPO Readiness', crm: false, erp: false, sg: true },
  { cap: 'Founder Dashboard', crm: 'limited', erp: 'limited', sg: true },
  { cap: 'MSME Transformation', crm: false, erp: false, sg: true },
];

function Cell({ val }) {
  if (val === true) return <CheckCircle2 size={16} style={{ color: '#10B981', display: 'block', margin: '0 auto' }} />;
  if (val === false) return <XCircle size={16} style={{ color: '#EF4444', display: 'block', margin: '0 auto' }} />;
  return <span className={styles.limited}>Limited</span>;
}

export default function WhySangoe() {
  return (
    <section className={`section ${styles.section}`} id="why">
      <div className="wrap">
        <div className={styles.header}>
          <span className="tag">Why Sangoe</span>
          <h2 className={styles.heading}>
            Not A CRM. Not An ERP.<br />
            <span className={styles.highlightText}>A Complete Business OS.</span>
          </h2>
          <p className={styles.sub}>
            See how Sangoe compares to traditional software solutions.
          </p>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.capCol}>Capability</th>
                <th>CRM</th>
                <th>ERP</th>
                <th className={styles.sangoeCol}>
                  <span className={styles.sangoeHeader}>
                    <svg width="18" height="18" viewBox="0 0 28 28" fill="none" style={{ marginRight: '6px', verticalAlign: 'middle' }}>
                      <rect width="28" height="28" rx="8" fill="#6D28D9"/>
                      <path d="M7 14L11 10L14 13L17 8L21 14L17 20L14 17L11 20L7 14Z" fill="white" />
                    </svg>
                    Sangoe
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? styles.even : ''}>
                  <td className={styles.capCell}>{row.cap}</td>
                  <td><Cell val={row.crm} /></td>
                  <td><Cell val={row.erp} /></td>
                  <td className={styles.sangoeCell}><Cell val={row.sg} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
