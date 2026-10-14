import React, { useState } from 'react';

export const AnalyticsWidget = () => {
  const [activeTab, setActiveTab] = useState('revenue');
  const [hoveredBar, setHoveredBar] = useState(null);

  // Simulated Monthly Data for Olist E-commerce Pipeline
  const monthlyData = [
    { month: 'Jan', orders: 4800, revenue: 68, active: false },
    { month: 'Feb', orders: 6200, revenue: 84, active: false },
    { month: 'Mar', orders: 8100, revenue: 112, active: false },
    { month: 'Apr', orders: 9400, revenue: 135, active: false },
    { month: 'May', orders: 12400, revenue: 178, active: false },
    { month: 'Jun', orders: 14800, revenue: 215, active: false },
    { month: 'Jul', orders: 17200, revenue: 248, active: true },
    { month: 'Aug', orders: 19600, revenue: 284, active: true },
  ];

  const segments = [
    { name: 'Champions (High RFM)', pct: 28, aov: '$186.40', color: '#00E5FF' },
    { name: 'Loyal Customers', pct: 34, aov: '$124.50', color: '#33EBFF' },
    { name: 'At Risk (Low Frequency)', pct: 26, aov: '$78.20', color: '#888888' },
    { name: 'Dormant Accounts', pct: 12, aov: '$42.10', color: '#555555' }
  ];

  return (
    <div className="analytics-widget">
      {/* Top Header & Tab Switcher */}
      <div className="widget-top-bar">
        <div className="widget-title-area">
          <span className="widget-indicator"></span>
          <span className="widget-title">OLIST_ANALYTICS_V2 // LIVE_PIPELINE</span>
        </div>
        
        <div className="widget-tabs">
          <button 
            className={`widget-tab-btn ${activeTab === 'revenue' ? 'active' : ''}`}
            onClick={() => setActiveTab('revenue')}
            type="button"
          >
            Volume
          </button>
          <button 
            className={`widget-tab-btn ${activeTab === 'segments' ? 'active' : ''}`}
            onClick={() => setActiveTab('segments')}
            type="button"
          >
            RFM Clusters
          </button>
          <button 
            className={`widget-tab-btn ${activeTab === 'logistics' ? 'active' : ''}`}
            onClick={() => setActiveTab('logistics')}
            type="button"
          >
            SLA
          </button>
        </div>
      </div>

      {/* KPI Highlights */}
      <div className="widget-kpi-grid">
        <div className="kpi-card">
          <div className="kpi-label">Records Cleaned</div>
          <div className="kpi-number">110,180</div>
          <div className="kpi-trend">✓ Relational schema verified</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Metric Distortion</div>
          <div className="kpi-number" style={{ color: '#00E5FF' }}>0%</div>
          <div className="kpi-trend">Fixed 400% merge bug</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Delivery SLA</div>
          <div className="kpi-number">94.2%</div>
          <div className="kpi-trend">+3.8% on-time pace</div>
        </div>
      </div>

      {/* Dynamic Tab Body */}
      {activeTab === 'revenue' && (
        <div className="chart-container">
          <svg className="chart-svg" viewBox="0 0 320 120">
            <defs>
              <linearGradient id="cyanGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Subtle grid lines */}
            <line x1="0" y1="20" x2="320" y2="20" stroke="#222" strokeDasharray="3 3" />
            <line x1="0" y1="60" x2="320" y2="60" stroke="#222" strokeDasharray="3 3" />
            <line x1="0" y1="100" x2="320" y2="100" stroke="#333" />

            {/* Trend line behind bars */}
            <path
              d="M 20 95 Q 60 85, 100 75 T 180 50 T 260 25 T 300 15"
              fill="none"
              stroke="#00E5FF"
              strokeWidth="2"
              opacity="0.6"
            />

            {/* Bars */}
            {monthlyData.map((d, i) => {
              const barWidth = 24;
              const x = 14 + i * 38;
              const barHeight = (d.orders / 20000) * 80;
              const y = 100 - barHeight;
              const isHovered = hoveredBar === i;

              return (
                <g key={d.month} onMouseEnter={() => setHoveredBar(i)} onMouseLeave={() => setHoveredBar(null)}>
                  <rect
                    x={x}
                    y={y}
                    width={barWidth}
                    height={barHeight}
                    rx="2"
                    className={`chart-bar ${isHovered || d.active ? 'active' : ''}`}
                    style={{
                      fill: isHovered ? '#00E5FF' : d.active ? 'rgba(0, 229, 255, 0.7)' : '#262626',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer'
                    }}
                  />
                  <text x={x + barWidth / 2} y="114" textAnchor="middle" className="chart-axis-text">
                    {d.month}
                  </text>
                </g>
              );
            })}
          </svg>

          <div className="chart-tooltip-note">
            <span>
              {hoveredBar !== null 
                ? `${monthlyData[hoveredBar].month}: ${monthlyData[hoveredBar].orders.toLocaleString()} orders ($${monthlyData[hoveredBar].revenue}K)` 
                : 'Hover bars: Peak 19.6K monthly orders'}
            </span>
            <span style={{ color: '#00E5FF' }}>Streamlit + SQLite</span>
          </div>
        </div>
      )}

      {activeTab === 'segments' && (
        <div className="segment-list">
          {segments.map((seg) => (
            <div className="segment-item" key={seg.name} style={{ borderLeftColor: seg.color }}>
              <div>
                <div className="segment-name">{seg.name}</div>
                <span style={{ fontSize: '0.68rem', color: '#888' }}>Avg Order: {seg.aov}</span>
              </div>
              <div className="segment-share">{seg.pct}% Share</div>
            </div>
          ))}
          <div style={{ fontSize: '0.72rem', color: '#888', textAlign: 'center', marginTop: '0.4rem', fontFamily: 'var(--font-mono)' }}>
            K-Means algorithm evaluated via Elbow Method & Silhouette Scores
          </div>
        </div>
      )}

      {activeTab === 'logistics' && (
        <div style={{ padding: '0.5rem 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.78rem', color: '#ccc' }}>
            <span>Freight Cost Optimization</span>
            <span style={{ color: '#00E5FF', fontFamily: 'var(--font-mono)' }}>-18.4% Latency</span>
          </div>
          <div style={{ background: '#1c1c1c', height: '6px', borderRadius: '3px', overflow: 'hidden', marginBottom: '1rem' }}>
            <div style={{ background: '#00E5FF', width: '82%', height: '100%', boxShadow: '0 0 8px #00E5FF' }}></div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.78rem', color: '#ccc' }}>
            <span>Customer Review Score Correlation</span>
            <span style={{ color: '#00E5FF', fontFamily: 'var(--font-mono)' }}>r = 0.64 (Delivery Time)</span>
          </div>
          <div style={{ background: '#1c1c1c', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ background: '#00E5FF', width: '64%', height: '100%', boxShadow: '0 0 8px #00E5FF' }}></div>
          </div>

          <p style={{ fontSize: '0.72rem', color: '#888', marginTop: '0.9rem', lineHeight: '1.4' }}>
            Power BI 2-page executive dashboard integrated with live SQLite engine to diagnose supply chain bottlenecks across Brazilian states.
          </p>
        </div>
      )}
    </div>
  );
};
