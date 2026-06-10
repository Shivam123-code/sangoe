'use client';
import { useState } from 'react';
import { 
  TrendingUp, 
  Coins, 
  Building,
  CheckCircle2
} from 'lucide-react';

export default function CalculatorsPage() {
  const [activeTab, setActiveTab] = useState('roi');

  // ROI Calculator State
  const [revenue, setRevenue] = useState(500000);
  const [savingsRate, setSavingsRate] = useState(15); // % overhead saved

  // GST Calculator State
  const [gstAmount, setGstAmount] = useState(10000);
  const [gstRate, setGstRate] = useState(18);
  const [gstType, setGstType] = useState('add'); // add or remove

  // Business Valuation State
  const [profit, setProfit] = useState(1200000);
  const [multiplier, setMultiplier] = useState(5);

  // Calculations
  const calculatedSavings = Math.round((revenue * (savingsRate / 100)) * 12);
  
  const gstValue = gstType === 'add' 
    ? Math.round(gstAmount * (gstRate / 100))
    : Math.round(gstAmount - (gstAmount * (100 / (100 + gstRate))));
  const gstTotal = gstType === 'add' ? gstAmount + gstValue : gstAmount - gstValue;

  const valuation = profit * multiplier;

  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  });

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f9fafb', paddingBottom: '80px' }}>
      {/* Header */}
      <section style={{ padding: '80px 20px', textAlign: 'center', background: 'linear-gradient(180deg, #EFF6FF 0%, #FAF5FF 60%, #F9FAFB 100%)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="tag" style={{ marginBottom: '16px', color: '#3b82f6', background: '#eff6ff', borderColor: '#bfdbfe' }}>Interactive calculators</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 950, color: '#111827', lineHeight: 1.1, marginBottom: '20px' }}>
            Free Business <br /><span style={{ color: '#3B82F6' }}>Growth &amp; Tax Calculators</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#4b5563', lineHeight: 1.7 }}>
            Run instant financial audits, calculate payroll overheads, GST filings, and business valuation estimates.
          </p>
        </div>
      </section>

      {/* Main Panel */}
      <section style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px' }}>
        {/* Left tabs list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            onClick={() => setActiveTab('roi')}
            style={{
              padding: '14px 18px',
              borderRadius: '12px',
              textAlign: 'left',
              fontWeight: 700,
              fontSize: '0.85rem',
              backgroundColor: activeTab === 'roi' ? '#3B82F6' : '#ffffff',
              color: activeTab === 'roi' ? '#ffffff' : '#4b5563',
              border: '1px solid rgba(0,0,0,0.05)',
              boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <TrendingUp size={16} />
            <span>ROI &amp; Savings</span>
          </button>
          <button
            onClick={() => setActiveTab('gst')}
            style={{
              padding: '14px 18px',
              borderRadius: '12px',
              textAlign: 'left',
              fontWeight: 700,
              fontSize: '0.85rem',
              backgroundColor: activeTab === 'gst' ? '#3B82F6' : '#ffffff',
              color: activeTab === 'gst' ? '#ffffff' : '#4b5563',
              border: '1px solid rgba(0,0,0,0.05)',
              boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <Coins size={16} />
            <span>GST Calculator</span>
          </button>
          <button
            onClick={() => setActiveTab('valuation')}
            style={{
              padding: '14px 18px',
              borderRadius: '12px',
              textAlign: 'left',
              fontWeight: 700,
              fontSize: '0.85rem',
              backgroundColor: activeTab === 'valuation' ? '#3B82F6' : '#ffffff',
              color: activeTab === 'valuation' ? '#ffffff' : '#4b5563',
              border: '1px solid rgba(0,0,0,0.05)',
              boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <Building size={16} />
            <span>Business Valuation</span>
          </button>

          <div style={{ padding: '20px', background: '#ffffff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', fontSize: '0.78rem', color: '#6b7280', marginTop: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.01)' }}>
            <strong style={{ color: '#111827' }}>Other Tools Included:</strong>
            <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['PF Calculator', 'ESIC Calculator', 'Payroll Calculator', 'Working Capital', 'Recruitment Cost'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={12} style={{ color: '#10B981' }} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Active Calculator view */}
        <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px', border: '1px solid rgba(0,0,0,0.04)', boxShadow: '0 10px 30px rgba(0,0,0,0.015)' }}>
          {activeTab === 'roi' && (
            <div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#111827', marginBottom: '8px' }}>ROI &amp; Savings Calculator</h2>
              <p style={{ fontSize: '0.88rem', color: '#6b7280', marginBottom: '32px' }}>Estimate how much annual operational overhead your business can save by systemizing processes under Sangoe.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Revenue Input */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 700 }}>
                    <span>Current Monthly Revenue</span>
                    <span style={{ color: '#3B82F6' }}>{formatter.format(revenue)}</span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="5000000"
                    step="50000"
                    value={revenue}
                    onChange={(e) => setRevenue(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#3B82F6' }}
                  />
                </div>

                {/* Overhead savings input */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 700 }}>
                    <span>Expected Process Efficiency Gain</span>
                    <span style={{ color: '#3B82F6' }}>{savingsRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    step="1"
                    value={savingsRate}
                    onChange={(e) => setSavingsRate(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#3B82F6' }}
                  />
                </div>

                {/* Output Display */}
                <div style={{ background: '#EFF6FF', borderRadius: '16px', padding: '24px', marginTop: '16px', border: '1px solid #DBEAFE', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.82rem', color: '#1e40af', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Estimated Annual Cash Savings</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#1e3a8a', margin: '8px 0' }}>{formatter.format(calculatedSavings)}</div>
                  <p style={{ fontSize: '0.8rem', color: '#60a5fa', margin: 0 }}>*Based on processes automation reducing resource leakages and bill collection delays.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gst' && (
            <div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#111827', marginBottom: '8px' }}>GST Calculator</h2>
              <p style={{ fontSize: '0.88rem', color: '#6b7280', marginBottom: '32px' }}>Calculate GST additions or exclusions for pricing estimates and invoices.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* GST Amount input */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 700 }}>
                    <span>Transaction Base Amount</span>
                    <span style={{ color: '#3B82F6' }}>{formatter.format(gstAmount)}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="1000000"
                    step="1000"
                    value={gstAmount}
                    onChange={(e) => setGstAmount(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#3B82F6' }}
                  />
                </div>

                {/* GST Rate selectors */}
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '10px' }}>GST Tax Rate (%)</div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {[5, 12, 18, 28].map(rate => (
                      <button
                        key={rate}
                        onClick={() => setGstRate(rate)}
                        style={{
                          flex: 1,
                          padding: '12px',
                          borderRadius: '8px',
                          fontWeight: 700,
                          backgroundColor: gstRate === rate ? '#3B82F6' : '#f3f4f6',
                          color: gstRate === rate ? '#ffffff' : '#4b5563',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        {rate}%
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add or Remove Toggle */}
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '10px' }}>GST Type</div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      onClick={() => setGstType('add')}
                      style={{
                        flex: 1,
                        padding: '12px',
                        borderRadius: '8px',
                        fontWeight: 700,
                        backgroundColor: gstType === 'add' ? '#3B82F6' : '#f3f4f6',
                        color: gstType === 'add' ? '#ffffff' : '#4b5563',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      Add GST
                    </button>
                    <button
                      onClick={() => setGstType('remove')}
                      style={{
                        flex: 1,
                        padding: '12px',
                        borderRadius: '8px',
                        fontWeight: 700,
                        backgroundColor: gstType === 'remove' ? '#3B82F6' : '#f3f4f6',
                        color: gstType === 'remove' ? '#ffffff' : '#4b5563',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      Remove GST
                    </button>
                  </div>
                </div>

                {/* Output Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '16px' }}>
                  <div style={{ background: '#f9fafb', border: '1px solid rgba(0,0,0,0.04)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280', fontWeight: 600 }}>Calculated GST Tax</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#111827', marginTop: '6px' }}>{formatter.format(gstValue)}</div>
                  </div>
                  <div style={{ background: '#EFF6FF', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.75rem', color: '#1e40af', fontWeight: 600 }}>Total Final Amount</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#1e3a8a', marginTop: '6px' }}>{formatter.format(gstTotal)}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'valuation' && (
            <div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#111827', marginBottom: '8px' }}>Business Valuation Calculator</h2>
              <p style={{ fontSize: '0.88rem', color: '#6b7280', marginBottom: '32px' }}>Obtain a quick multiple-based estimation of your business valuation.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Profit input */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 700 }}>
                    <span>Net Annual Profit (EBITDA)</span>
                    <span style={{ color: '#3B82F6' }}>{formatter.format(profit)}</span>
                  </div>
                  <input
                    type="range"
                    min="500000"
                    max="100000000"
                    step="500000"
                    value={profit}
                    onChange={(e) => setProfit(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#3B82F6' }}
                  />
                </div>

                {/* Multiplier input */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 700 }}>
                    <span>Profit Multiplier Range</span>
                    <span style={{ color: '#3B82F6' }}>{multiplier}x</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="15"
                    step="1"
                    value={multiplier}
                    onChange={(e) => setMultiplier(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#3B82F6' }}
                  />
                </div>

                {/* Output Display */}
                <div style={{ background: '#ECFDF5', borderRadius: '16px', padding: '24px', marginTop: '16px', border: '1px solid #A7F3D0', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.82rem', color: '#065f46', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Estimated Business Enterprise Value</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#064e3b', margin: '8px 0' }}>{formatter.format(valuation)}</div>
                  <p style={{ fontSize: '0.8rem', color: '#059669', margin: 0 }}>*This is a standard EBITDA-based multiple projection. Real market valuation varies based on sectors.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
