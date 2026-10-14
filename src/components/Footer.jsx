import React from 'react';
import { UpArrowIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-top-row">
          <div>
            <a href="#hero" className="brand-logo">
              <span className="brand-bracket">&lt;</span>
              <span className="brand-name">HRA</span>
              <span className="brand-bracket"> /&gt;</span>
            </a>
            <p className="footer-tagline">
              Haytham R A • Data Analyst &amp; Developer
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div className="hero-social-row" style={{ border: 'none', padding: 0 }}>
              <a 
                href="https://github.com/hayth31" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="GitHub"
              >
                <GitHubIcon size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/haytham-reeza/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
              <a 
                href="mailto:haythamreeza31@gmail.com" 
                className="social-link"
                aria-label="Email"
              >
                <MailIcon size={18} />
              </a>
            </div>

            <button 
              onClick={scrollToTop} 
              className="back-to-top-btn" 
              type="button"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <UpArrowIcon size={14} />
            </button>
          </div>
        </div>

        <div className="footer-bottom-row">
          <div>
            © {new Date().getFullYear()} Haytham R A. Crafted with precision in React &amp; Pure CSS.
          </div>
          
          <div className="footer-nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
