import React from 'react';
import { ArrowRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons';

export const Hero = () => {
  return (
    <section id="hero" className="section hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Hero Content */}
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="status-dot"></span>
              <span>Open to Data Analyst & Developer Roles</span>
            </div>

            <p className="hero-title-prefix">Hello, I'm</p>
            <h1 className="hero-headline">
              Haytham <span className="hero-highlight">R A</span>
            </h1>

            <h2 className="hero-role">
              Entry-Level Data Analyst &amp; Developer
            </h2>

            <p className="hero-bio">
              Computer Science undergraduate at <strong>Shiv Nadar University</strong> specializing in 
              extracting high-impact business intelligence, engineering end-to-end machine learning pipelines, 
              and architecting resilient backend systems with <strong>Python</strong>, <strong>SQL</strong>, and <strong>Multi-Agent AI</strong>.
            </p>

            {/* Core Action CTAs */}
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View My Projects
                <ArrowRightIcon size={18} />
              </a>
              <a 
                href="/Haytham_RA_Resume.pdf" 
                download="Haytham_RA_Resume.pdf"
                className="btn btn-secondary"
                id="hero-resume-btn"
              >
                <DownloadIcon size={18} />
                Download Resume
              </a>
            </div>

            {/* Minimalist Social Links Row */}
            <div className="hero-social-row">
              <span>PROFILES //</span>
              <a 
                href="https://github.com/hayth31" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
              >
                <GitHubIcon size={16} />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/haytham-reeza/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
              >
                <LinkedInIcon size={16} />
                LinkedIn
              </a>
              <a 
                href="mailto:haythamreeza31@gmail.com" 
                className="social-link"
              >
                <MailIcon size={16} />
                Email
              </a>
            </div>
          </div>

          {/* Right Column: High-Tech Geometric Monogram Badge Card */}
          <div className="hero-visual-card">
            <div className="monogram-badge-wrapper">
              <div className="monogram-graphic">
                <span className="monogram-corner corner-tl"></span>
                <span className="monogram-corner corner-tr"></span>
                <span className="monogram-corner corner-bl"></span>
                <span className="monogram-corner corner-br"></span>
                <span className="monogram-text">HRA</span>
              </div>

              <div className="badge-tagline">
                DATA ANALYTICS ✕ SYSTEMS DEV
              </div>

              <div className="badge-metrics-row">
                <div className="badge-metric-item">
                  <div className="metric-val">110K+</div>
                  <div className="metric-label">Records Analyzed</div>
                </div>
                <div className="badge-metric-item">
                  <div className="metric-val">GCP</div>
                  <div className="metric-label">Certified Analyst</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
