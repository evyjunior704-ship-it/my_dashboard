import React from 'react';
import { ArrowRight, Mail, MapPin, Globe, Shield, Code2 } from 'lucide-react';
import { LiquidGlass } from './LiquidGlass';
import './Hero.css';

export const Hero = ({ identity, onTabChange }) => {
  const handleExploreProjects = (e) => {
    e.preventDefault();
    if (onTabChange) {
      onTabChange('projects');
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    if (onTabChange) {
      onTabChange('contact');
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-split-layout">
        {/* Left Column: Headline, Bio & Actions */}
        <div className="hero-text-column">
          {/* Soft Prismatic Atmospheric Back-glow behind Hero */}
          <div className="hero-prismatic-aura" aria-hidden="true" />

          {/* Status Kicker */}
          <div className="hero-kicker-row">
            <span className="hero-status-pill">
              <span className="live-status-dot" />
              <span>BSc Computer Science • Cybersecurity Specialization</span>
            </span>
            <span className="hero-location-tag">
              <MapPin size={13} />
              <span>Fredericton, NB, Canada</span>
            </span>
          </div>

          {/* Main Editorial Headline */}
          <div className="hero-headline-wrapper">
            <h1 className="hero-headline">
              Building secure software, exploring systems, and understanding problems beneath the surface.
            </h1>
          </div>

          {/* Concise Grounded Introduction */}
          <p className="hero-intro-text">
            {identity.heroIntro}
          </p>

          {/* Primary & Secondary Actions (Tab Navigation) */}
          <div className="hero-action-row">
            <button 
              type="button"
              onClick={handleExploreProjects}
              className="btn btn-primary"
              title="View Projects"
            >
              <span>View Projects</span>
              <ArrowRight size={15} />
            </button>

            <button 
              type="button"
              onClick={handleContactClick}
              className="btn btn-secondary"
              title="Contact"
            >
              <Mail size={15} />
              <span>Contact</span>
            </button>
          </div>
        </div>

        {/* Right Column: Welcoming Circular Portrait Frame */}
        <div className="hero-portrait-column">
          <div className="portrait-glow-halo" aria-hidden="true" />
          <div className="hero-portrait-wrapper">
            <div className="hero-portrait-frame circular">
              <img 
                src={`${import.meta.env.BASE_URL}avatar.jpeg`} 
                alt={identity.fullName}
                className="hero-portrait-img"
                loading="eager"
              />
              <div className="portrait-specular-overlay" />
            </div>
            <div className="portrait-caption-chip-holder">
              <LiquidGlass 
                tint="crystal" 
                cornerRadius={9999} 
                displacementScale={24} 
                aberrationIntensity={1.5}
                className="portrait-liquid-chip"
              >
                <div className="chip-content">
                  <span className="live-status-dot" />
                  <span>Evy Junior • CS @ UNB</span>
                </div>
              </LiquidGlass>
            </div>
          </div>
        </div>
      </div>

        {/* Open Editorial Datum Bar (Zero Card Panels) */}
        <div className="hero-telemetry-datum-bar">
          <div className="datum-cell">
            <div className="datum-icon-wrap datum-cyan">
              <Code2 size={16} />
            </div>
            <div className="datum-meta">
              <span className="datum-label">PRIMARY STACK</span>
              <span className="datum-value">Java 21, Spring Boot, Python</span>
            </div>
          </div>

          <div className="datum-divider" />

          <div className="datum-cell">
            <div className="datum-icon-wrap datum-coral">
              <Shield size={16} />
            </div>
            <div className="datum-meta">
              <span className="datum-label">CORE FOCUS</span>
              <span className="datum-value">Secure Software & System Hardening</span>
            </div>
          </div>

          <div className="datum-divider" />

          <div className="datum-cell">
            <div className="datum-icon-wrap datum-amber">
              <Globe size={16} />
            </div>
            <div className="datum-meta">
              <span className="datum-label">LANGUAGES</span>
              <span className="datum-value">Bilingual (English & French)</span>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;
