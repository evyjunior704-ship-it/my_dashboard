import React from 'react';
import { ArrowUp } from 'lucide-react';
import { NAV_TABS } from '../data/profileData';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = ({ identity, activeTab = 'about', onTabChange }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer">
      <div className="portfolio-container footer-inner">
        <div className="footer-top-row">
          <div className="footer-brand-block">
            <span className="footer-brand-name">{identity.fullName}</span>
            <p className="footer-brand-sub">
              {identity.degree} • {identity.institution}
            </p>
          </div>

          <div className="footer-tabs-links">
            {NAV_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`footer-tab-link ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => onTabChange && onTabChange(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button 
            type="button" 
            onClick={scrollToTop} 
            className="footer-top-btn"
            title="Scroll to top of current section"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        <div className="footer-bottom-row">
          <span className="footer-copyright">
            © {CURRENT_YEAR} {identity.fullName} • Computer Science @ UNB
          </span>
          <span className="footer-bilingual">
            {identity.bilingual}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
