'use client';
import { useState } from 'react';
import { 
  TrendingUp, 
  Coins, 
  Building,
  CheckCircle2,
  Briefcase,
  Users
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

  // Project Profitability State
  const [projectRevenue, setProjectRevenue] = useState(1000000);
  const [projectCosts, setProjectCosts] = useState(650000);

  // Employee Productivity State
  const [employeeCost, setEmployeeCost] = useState(600000);
  const [employeeRevenue, setEmployeeRevenue] = useState(1500000);

  // Calculations
  const calculatedSavings = Math.round((revenue * (savingsRate / 100)) * 12);
  
  const gstValue = gstType === 'add' 
    ? Math.round(gstAmount * (gstRate / 100))
    : Math.round(gstAmount - (gstAmount * (100 / (100 + gstRate))));
  const gstTotal = gstType === 'add' ? gstAmount + gstValue : gstAmount - gstValue;

  const valuation = profit * multiplier;

  const projectProfit = projectRevenue - projectCosts;
  const projectMargin = projectRevenue > 0 ? Math.round((projectProfit / projectRevenue) * 100) : 0;

  const productivityRatio = employeeCost > 0 ? (employeeRevenue / employeeCost).toFixed(2) : 0;

  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  });

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--theme-bg)', paddingBottom: '80px' }}>
      {/* Header */}
      <section style={{ padding: '80px 20px', textAlign: 'center', background: 'linear-gradient(180deg, var(--theme-bg-secondary) 0%, var(--theme-bg) 100%)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="tag" style={{ marginBottom: '16px' }}>Interactive calculators</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 950, color: 'var(--theme-text-main)', lineHeight: 1.1, marginBottom: '20px' }}>
            Free Business <br /><span style={{ color: 'var(--purple-500)' }}>Growth &amp; Tax Calculators</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--theme-text-sub)', lineHeight: 1.7 }}>
            Run instant financial audits, calculate payroll overheads, GST filings, and business valuation estimates.
          </p>
        </div>
      </section>

      {/* Main Panel */}
      <section className="responsive-grid-calc" style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', gap: '32px' }}>
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
              backgroundColor: activeTab === 'roi' ? 'var(--purple-600)' : 'var(--theme-card-bg)',
              color: activeTab === 'roi' ? '#ffffff' : 'var(--theme-text-sub)',
              border: '1px solid var(--theme-card-border)',
              boxShadow: 'var(--theme-shadow-card)',
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
              backgroundColor: activeTab === 'gst' ? 'var(--purple-600)' : 'var(--theme-card-bg)',
              color: activeTab === 'gst' ? '#ffffff' : 'var(--theme-text-sub)',
              border: '1px solid var(--theme-card-border)',
              boxShadow: 'var(--theme-shadow-card)',
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
              backgroundColor: activeTab === 'valuation' ? 'var(--purple-600)' : 'var(--theme-card-bg)',
              color: activeTab === 'valuation' ? '#ffffff' : 'var(--theme-text-sub)',
              border: '1px solid var(--theme-card-border)',
              boxShadow: 'var(--theme-shadow-card)',
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
          <button
            onClick={() => setActiveTab('project')}
            style={{
              padding: '14px 18px',
              borderRadius: '12px',
              textAlign: 'left',
              fontWeight: 700,
              fontSize: '0.85rem',
              backgroundColor: activeTab === 'project' ? 'var(--purple-600)' : 'var(--theme-card-bg)',
              color: activeTab === 'project' ? '#ffffff' : 'var(--theme-text-sub)',
              border: '1px solid var(--theme-card-border)',
              boxShadow: 'var(--theme-shadow-card)',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <Briefcase size={16} />
            <span>Project Profitability</span>
          </button>
          <button
            onClick={() => setActiveTab('employee')}
            style={{
              padding: '14px 18px',
              borderRadius: '12px',
              textAlign: 'left',
              fontWeight: 700,
              fontSize: '0.85rem',
              backgroundColor: activeTab === 'employee' ? 'var(--purple-600)' : 'var(--theme-card-bg)',
              color: activeTab === 'employee' ? '#ffffff' : 'var(--theme-text-sub)',
              border: '1px solid var(--theme-card-border)',
              boxShadow: 'var(--theme-shadow-card)',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <Users size={16} />
            <span>Employee Productivity</span>
          </button>

          <div style={{ padding: '20px', background: 'var(--theme-card-bg)', border: '1px solid var(--theme-card-border)', borderRadius: '16px', fontSize: '0.78rem', color: 'var(--theme-text-muted)', marginTop: '16px', boxShadow: 'var(--theme-shadow-card)' }}>
            <strong style={{ color: 'var(--theme-text-main)' }}>Other Tools Included:</strong>
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
        <div style={{ background: 'var(--theme-card-bg)', borderRadius: '24px', padding: '40px', border: '1px solid var(--theme-card-border)', boxShadow: 'var(--theme-shadow-card)' }}>
          {activeTab === 'roi' && (
            <div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--theme-text-main)', marginBottom: '8px' }}>ROI &amp; Savings Calculator</h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--theme-text-muted)', marginBottom: '32px' }}>Estimate how much annual operational overhead your business can save by systemizing processes under Sangoe.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Revenue Input */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 700, color: 'var(--theme-text-main)' }}>
                    <span>Current Monthly Revenue</span>
                    <span style={{ color: 'var(--purple-500)' }}>{formatter.format(revenue)}</span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="5000000"
                    step="50000"
                    value={revenue}
                    onChange={(e) => setRevenue(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--purple-500)' }}
                  />
                </div>

                {/* Overhead savings input */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 700, color: 'var(--theme-text-main)' }}>
                    <span>Expected Process Efficiency Gain</span>
                    <span style={{ color: 'var(--purple-500)' }}>{savingsRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    step="1"
                    value={savingsRate}
                    onChange={(e) => setSavingsRate(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--purple-500)' }}
                  />
                </div>

                {/* Output Display */}
                <div style={{ background: 'rgba(124, 58, 237, 0.06)', borderRadius: '16px', padding: '24px', marginTop: '16px', border: '1px solid var(--theme-border)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.82rem', color: 'var(--purple-500)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Estimated Annual Cash Savings</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--theme-text-main)', margin: '8px 0' }}>{formatter.format(calculatedSavings)}</div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--theme-text-muted)', margin: 0 }}>*Based on processes automation reducing resource leakages and bill collection delays.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gst' && (
            <div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--theme-text-main)', marginBottom: '8px' }}>GST Calculator</h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--theme-text-muted)', marginBottom: '32px' }}>Calculate GST additions or exclusions for pricing estimates and invoices.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* GST Amount input */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 700, color: 'var(--theme-text-main)' }}>
                    <span>Transaction Base Amount</span>
                    <span style={{ color: 'var(--purple-500)' }}>{formatter.format(gstAmount)}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="1000000"
                    step="1000"
                    value={gstAmount}
                    onChange={(e) => setGstAmount(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--purple-500)' }}
                  />
                </div>

                {/* GST Rate selectors */}
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '10px', color: 'var(--theme-text-main)' }}>GST Tax Rate (%)</div>
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
                          backgroundColor: gstRate === rate ? 'var(--purple-600)' : 'var(--theme-bg)',
                          color: gstRate === rate ? '#ffffff' : 'var(--theme-text-sub)',
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
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '10px', color: 'var(--theme-text-main)' }}>GST Type</div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      onClick={() => setGstType('add')}
                      style={{
                        flex: 1,
                        padding: '12px',
                        borderRadius: '8px',
                        fontWeight: 700,
                        backgroundColor: gstType === 'add' ? 'var(--purple-600)' : 'var(--theme-bg)',
                        color: gstType === 'add' ? '#ffffff' : 'var(--theme-text-sub)',
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
                        backgroundColor: gstType === 'remove' ? 'var(--purple-600)' : 'var(--theme-bg)',
                        color: gstType === 'remove' ? '#ffffff' : 'var(--theme-text-sub)',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      Remove GST
                    </button>
                  </div>
                </div>

                {/* Output Grid */}
                <div className="responsive-grid-2" style={{ gap: '16px', marginTop: '16px' }}>
                  <div style={{ background: 'var(--theme-bg)', border: '1px solid var(--theme-card-border)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--theme-text-muted)', fontWeight: 600 }}>Calculated GST Tax</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--theme-text-main)', marginTop: '6px' }}>{formatter.format(gstValue)}</div>
                  </div>
                  <div style={{ background: 'rgba(124, 58, 237, 0.06)', border: '1px solid var(--theme-border)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--purple-500)', fontWeight: 600 }}>Total Final Amount</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--theme-text-main)', marginTop: '6px' }}>{formatter.format(gstTotal)}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'valuation' && (
            <div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--theme-text-main)', marginBottom: '8px' }}>Business Valuation Calculator</h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--theme-text-muted)', marginBottom: '32px' }}>Obtain a quick multiple-based estimation of your business valuation.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Profit input */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 700, color: 'var(--theme-text-main)' }}>
                    <span>Net Annual Profit (EBITDA)</span>
                    <span style={{ color: 'var(--purple-500)' }}>{formatter.format(profit)}</span>
                  </div>
                  <input
                    type="range"
                    min="500000"
                    max="100000000"
                    step="500000"
                    value={profit}
                    onChange={(e) => setProfit(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--purple-500)' }}
                  />
                </div>

                {/* Multiplier input */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 700, color: 'var(--theme-text-main)' }}>
                    <span>Profit Multiplier Range</span>
                    <span style={{ color: 'var(--purple-500)' }}>{multiplier}x</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="15"
                    step="1"
                    value={multiplier}
                    onChange={(e) => setMultiplier(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--purple-500)' }}
                  />
                </div>

                {/* Output Display */}
                <div style={{ background: 'rgba(16, 185, 129, 0.06)', borderRadius: '16px', padding: '24px', marginTop: '16px', border: '1px solid var(--theme-border)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.82rem', color: '#10b981', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Estimated Business Enterprise Value</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--theme-text-main)', margin: '8px 0' }}>{formatter.format(valuation)}</div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--theme-text-muted)', margin: 0 }}>*This is a standard EBITDA-based multiple projection. Real market valuation varies based on sectors.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'project' && (
            <div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--theme-text-main)', marginBottom: '8px' }}>Project Profitability Calculator</h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--theme-text-muted)', marginBottom: '32px' }}>Estimate the net profit margin for any given contract or project delivery.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Revenue input */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 700, color: 'var(--theme-text-main)' }}>
                    <span>Total Project Contract Value</span>
                    <span style={{ color: 'var(--purple-500)' }}>{formatter.format(projectRevenue)}</span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="10000000"
                    step="50000"
                    value={projectRevenue}
                    onChange={(e) => setProjectRevenue(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--purple-500)' }}
                  />
                </div>

                {/* Costs input */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 700, color: 'var(--theme-text-main)' }}>
                    <span>Estimated Project Costs (Labor, Material, Ops)</span>
                    <span style={{ color: '#EF4444' }}>{formatter.format(projectCosts)}</span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="10000000"
                    step="50000"
                    value={projectCosts}
                    onChange={(e) => setProjectCosts(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#EF4444' }}
                  />
                </div>

                {/* Output Grid */}
                <div className="responsive-grid-2" style={{ gap: '16px', marginTop: '16px' }}>
                  <div style={{ background: 'var(--theme-bg)', border: '1px solid var(--theme-card-border)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--theme-text-muted)', fontWeight: 600 }}>Estimated Net Profit</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: projectProfit >= 0 ? '#10b981' : '#ef4444', marginTop: '6px' }}>{formatter.format(projectProfit)}</div>
                  </div>
                  <div style={{ background: 'rgba(124, 58, 237, 0.06)', border: '1px solid var(--theme-border)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--purple-500)', fontWeight: 600 }}>Project Profit Margin</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--theme-text-main)', marginTop: '6px' }}>{projectMargin}%</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'employee' && (
            <div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--theme-text-main)', marginBottom: '8px' }}>Employee Productivity Calculator</h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--theme-text-muted)', marginBottom: '32px' }}>Measure the return on investment for your workforce by calculating the revenue-to-cost ratio.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Employee Revenue input */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 700, color: 'var(--theme-text-main)' }}>
                    <span>Annual Revenue Generated per Employee (Avg)</span>
                    <span style={{ color: 'var(--purple-500)' }}>{formatter.format(employeeRevenue)}</span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="10000000"
                    step="100000"
                    value={employeeRevenue}
                    onChange={(e) => setEmployeeRevenue(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--purple-500)' }}
                  />
                </div>

                {/* Employee Cost input */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 700, color: 'var(--theme-text-main)' }}>
                    <span>Annual Cost per Employee (Salary + Overhead)</span>
                    <span style={{ color: '#EF4444' }}>{formatter.format(employeeCost)}</span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="5000000"
                    step="50000"
                    value={employeeCost}
                    onChange={(e) => setEmployeeCost(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#EF4444' }}
                  />
                </div>

                {/* Output Display */}
                <div style={{ background: 'rgba(245, 158, 11, 0.06)', borderRadius: '16px', padding: '24px', marginTop: '16px', border: '1px solid var(--theme-border)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.82rem', color: '#f59e0b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Revenue-to-Cost Ratio</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--theme-text-main)', margin: '8px 0' }}>{productivityRatio}x</div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--theme-text-muted)', margin: 0 }}>*A healthy business aims for a ratio of 3.0x or higher. If lower, focus on systemizing workflows to improve output.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
