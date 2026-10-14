import React, { useState, useEffect } from 'react';
import { MailIcon } from './Icons';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#hero" className="brand-logo" onClick={closeMenu}>
          <span className="brand-bracket">&lt;</span>
          <span className="brand-name">HRA</span>
          <span className="brand-bracket"> /&gt;</span>
        </a>

        {/* Mobile Hamburger Button */}
        <button 
          className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
          <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
          <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
          <a href="#experience" className="nav-link" onClick={closeMenu}>Experience</a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          
          <a href="#contact" className="nav-cta-btn" onClick={closeMenu}>
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  );
};
