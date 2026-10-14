import React from 'react';
import { CodeIcon, DatabaseIcon, ChartIcon, ManagementIcon } from './Icons';

export const Skills = () => {
  const coreBadges = [
    {
      id: '01',
      name: 'Python',
      icon: <CodeIcon />,
      desc: 'Primary language for data manipulation, statistical modeling, machine learning pipelines, and backend automation scripts.',
      highlight: 'NumPy • Pandas • PyTorch • Scikit-learn • FastAPI'
    },
    {
      id: '02',
      name: 'SQL',
      icon: <DatabaseIcon />,
      desc: 'Expertise in relational schema design, complex multi-table joins, window functions, and query optimization for high-volume datasets.',
      highlight: 'MySQL • SQLite • Data Modeling • Query Tuning'
    },
    {
      id: '03',
      name: 'Analytics',
      icon: <ChartIcon />,
      desc: 'Translating noisy transactional data into actionable KPIs, RFM customer segmentation, predictive modeling, and executive dashboards.',
      highlight: 'EDA • K-Means • Power BI • Streamlit • Statistical Testing'
    },
    {
      id: '04',
      name: 'Management',
      icon: <ManagementIcon />,
      desc: 'Agile sprint execution, cross-functional technical communication, sponsorship head, and university department leadership.',
      highlight: 'Agile/Scrum • Jira • Department Coordinator • Tech Strategy'
    }
  ];

  const categories = [
    {
      title: 'Data & Machine Learning',
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'LSTM Time-Series', 'Conditional GANs', 'K-Means Clustering', 'CLIP Text Conditioning']
    },
    {
      title: 'Databases, BI & Cloud',
      skills: ['MySQL', 'MongoDB', 'SQLite', 'Power BI Dashboards', 'Streamlit Apps', 'Google Cloud (GCP Certified)', 'AWS (Basics)', 'Azure (Basics)']
    },
    {
      title: 'Backend, APIs & Embedded Systems',
      skills: ['Node.js', 'REST APIs', 'ServiceNow APIs & GlideRecord', 'Java', 'C', 'UART / Modbus Protocols', 'IoT Streams', 'Git & GitHub']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">02 // Core Competencies</div>
          <h2 className="section-title">The Technical Toolkit</h2>
          <p className="section-subtitle">
            A high-contrast visual badge grid showcasing core pillars alongside specialized data science and software engineering tools.
          </p>
        </div>

        <div className="badge-grid-wrapper">
          {/* Prominent Core Badges: Python, SQL, Analytics, Management */}
          <div className="core-badge-grid">
            {coreBadges.map((badge) => (
              <div className="core-badge" key={badge.id}>
                <div className="badge-top-row">
                  <div className="badge-icon">{badge.icon}</div>
                  <span className="badge-number">KEY_0{badge.id}</span>
                </div>
                <h3 className="badge-name">{badge.name}</h3>
                <p className="badge-desc">{badge.desc}</p>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--accent-cyan)', marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                  {badge.highlight}
                </div>
              </div>
            ))}
          </div>

          {/* Categorized Tool Pills */}
          <div style={{ marginTop: '2.5rem' }}>
            {categories.map((cat, idx) => (
              <div key={idx} style={{ marginBottom: '1.5rem' }}>
                <div className="skills-subgrid-title">// {cat.title}</div>
                <div className="tech-tags-flex">
                  {cat.skills.map((skill) => (
                    <span className="tech-tag-pill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
