import React, { useState, useEffect } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { LiquidGlass } from './LiquidGlass';
import { NAV_TABS } from '../data/profileData';
import './Navbar.css';

export const Navbar = ({ identity, activeTab = 'about', onTabChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabSelect = (tabId) => {
    setMobileMenuOpen(false);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <header className={`portfolio-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="portfolio-container header-inner">
        {/* Brand Mark & Identity */}
        <button
          type="button"
          className="brand-lockup-btn"
          onClick={() => handleTabSelect('about')}
          title="Return to About overview"
        >
          <div className="brand-monogram-tile">
            <span>{identity.monogram}</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">{identity.fullName}</span>
            <span className="brand-sub">Computer Science @ UNB</span>
          </div>
        </button>

        {/* Desktop Liquid-Glass Segmented Tab Bar */}
        <nav className="desktop-nav" aria-label="Portfolio Sections Tab Bar">
          <div className="nav-tabs-track" role="tablist">
            {NAV_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`tab-btn-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  className={`nav-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => handleTabSelect(tab.id)}
                >
                  {isActive ? (
                    <LiquidGlass 
                      tint="cyan" 
                      cornerRadius={9999} 
                      displacementScale={24} 
                      aberrationIntensity={1.4}
                      enableTilt={false}
                      reflectionStyle="sleek-glint"
                      className="nav-active-liquid-glass"
                    >
                      <span className="nav-tab-label">{tab.label}</span>
                    </LiquidGlass>
                  ) : (
                    <span className="nav-tab-label">{tab.label}</span>
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Header External Links & Primary Contact CTA */}
        <div className="header-actions">
          <a
            href={identity.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="header-icon-link"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href={identity.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="header-icon-link"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={17} />
          </a>

          <button
            type="button"
            onClick={() => handleTabSelect('contact')}
            className={`btn btn-primary header-cta-btn ${activeTab === 'contact' ? 'is-active-tab' : ''}`}
          >
            <Mail size={15} />
            <span>Contact</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer glass-primary" role="tablist">
          <div className="mobile-nav-list">
            {NAV_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`mobile-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => handleTabSelect(tab.id)}
                >
                  <span className="mobile-tab-name">{tab.label}</span>
                  {isActive && <span className="mobile-active-pill">Active</span>}
                </button>
              );
            })}
          </div>

          <div className="mobile-nav-actions">
            <button
              type="button"
              className="btn btn-primary w-full"
              onClick={() => handleTabSelect('contact')}
            >
              <Mail size={15} />
              <span>Contact: {identity.email}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
