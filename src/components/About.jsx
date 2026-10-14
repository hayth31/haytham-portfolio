import React from 'react';
import { CheckCircleIcon } from './Icons';

export const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">01 // Profile</div>
          <h2 className="section-title">Bridging Data Insight &amp; Software Systems</h2>
          <p className="section-subtitle">
            I don't just generate reports—I build the automated pipelines and intelligent software systems that power them.
          </p>
        </div>

        <div className="about-grid">
          {/* Narrative Column */}
          <div className="about-story">
            <p className="about-paragraph">
              I am a final-year Computer Science (IoT) undergraduate at <strong>Shiv Nadar University Chennai</strong>. 
              My journey spans the entire data-to-production lifecycle: from diagnosing subtle data anomalies across 
              <strong> 110,000+ transactional records</strong> to deploying production-ready REST integrations and multi-agent 
              autonomous frameworks.
            </p>

            <p className="about-paragraph">
              During my internships at <strong>Sandeza Systems</strong> and <strong>Plugzmart</strong>, I tackled enterprise 
              automation workflows and live telemetry streaming for EV chargers. I believe the best data analysts are developers 
              who understand relational structures, API boundaries, and runtime performance—and the best developers are grounded 
              in analytical evidence.
            </p>

            <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#ccc', fontSize: '0.9rem' }}>
                <CheckCircleIcon size={18} style={{ color: 'var(--accent-cyan)' }} />
                <span><strong>Google Cloud Data Analytics Certified</strong> (Google Cloud Skills Boost)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#ccc', fontSize: '0.9rem' }}>
                <CheckCircleIcon size={18} style={{ color: 'var(--accent-cyan)' }} />
                <span><strong>NPTEL Certified:</strong> Big Data Computing &amp; Responsible Safe AI Systems</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#ccc', fontSize: '0.9rem' }}>
                <CheckCircleIcon size={18} style={{ color: 'var(--accent-cyan)' }} />
                <span><strong>Leadership:</strong> Department Coordinator, INSTINCTS '26 &amp; Deputy Sponsorship Head</span>
              </div>
            </div>
          </div>

          {/* Experience Highlights Column */}
          <div id="experience" className="experience-column">
            <div className="core-badges-title">// Professional Experience</div>
            
            <div className="experience-card-list">
              <div className="experience-card">
                <div className="exp-header">
                  <span className="exp-role">ServiceNow Platform Developer Intern</span>
                  <span className="exp-date">Jun 2025 – Jul 2025</span>
                </div>
                <div className="exp-company">Sandeza Systems Pvt Ltd • Chennai, India</div>
                <p className="exp-summary">
                  Built and automated critical internal workflows using ServiceNow APIs, Script Includes, and GlideRecord. 
                  Engineered REST-based integrations to reliably synchronize data across instances, eliminating manual operational bottlenecks.
                </p>
              </div>

              <div className="experience-card">
                <div className="exp-header">
                  <span className="exp-role">Technical Business Data Analyst Intern</span>
                  <span className="exp-date">May 2024 – Jun 2024</span>
                </div>
                <div className="exp-company">Plugzmart • Chennai, India</div>
                <p className="exp-summary">
                  Integrated embedded C and Python modules controlling EV chargers via UART and Modbus protocols. 
                  Analyzed high-frequency live IoT telemetry data streams to identify and eliminate latency bottlenecks across hardware-software interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
