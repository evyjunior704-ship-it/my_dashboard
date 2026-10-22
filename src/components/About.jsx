import React, { useState } from 'react';
import { Compass, BookOpen, Database, Shield, Activity, CheckCircle2 } from 'lucide-react';
import './About.css';

export const About = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const pillarsData = [
    {
      id: 'foundation',
      num: '01',
      kicker: '01 STUDIES',
      name: 'CS Studies at UNB',
      accentColor: 'var(--color-cyan-prismatic)',
      className: 'domain-cyan',
      icon: <BookOpen size={18} />,
      items: [
        {
          name: 'University of New Brunswick',
          context: 'Second-year Computer Science student in Fredericton, NB, specializing in cybersecurity.'
        },
        {
          name: 'From Concepts to Code',
          context: 'Applying concepts from data structures, algorithms, and computer systems directly to software projects.'
        },
        {
          name: 'Bilingual',
          context: 'Fluent in both English and French, comfortable collaborating with teams in either language.'
        }
      ]
    },
    {
      id: 'backend',
      num: '02',
      kicker: '02 BACKEND',
      name: 'Backend Development',
      accentColor: 'var(--color-teal-soft)',
      className: 'domain-teal',
      icon: <Database size={18} />,
      items: [
        {
          name: 'Java & Spring Boot',
          context: 'Building REST APIs, connecting relational databases, and handling business logic with Spring Boot.'
        },
        {
          name: 'Database Transactions',
          context: 'Using transactional boundaries and row locks to make sure data stays consistent, even during concurrent requests.'
        },
        {
          name: 'Clean & Maintainable Code',
          context: 'Focusing on readable architecture, clear data flow, and reliable error handling.'
        }
      ]
    },
    {
      id: 'security',
      num: '03',
      kicker: '03 SECURITY',
      name: 'Security-Minded Thinking',
      accentColor: 'var(--color-coral)',
      className: 'domain-coral',
      icon: <Shield size={18} />,
      items: [
        {
          name: 'Session-Based Access',
          context: 'Deriving user permissions directly from authenticated sessions to stop unauthorized access (IDOR).'
        },
        {
          name: 'Password Protection',
          context: 'Hashing passwords with BCrypt and using uniform error messages to protect user credentials.'
        },
        {
          name: 'Finding Root Causes',
          context: 'Taking time to understand why bugs, race conditions, or network glitches happen at the system level.'
        }
      ]
    },
    {
      id: 'discipline',
      num: '04',
      kicker: '04 BEYOND CODING',
      name: 'Sports & Teamwork',
      accentColor: 'var(--color-amber)',
      className: 'domain-amber',
      icon: <Activity size={18} />,
      items: [
        {
          name: 'Soccer & Basketball',
          context: 'Playing competitive soccer and basketball keeps me active, disciplined, and comfortable under pressure.'
        },
        {
          name: 'Team Player',
          context: 'Staying open, communicating clearly, and collaborating smoothly with project teammates.'
        },
        {
          name: 'Always Learning',
          context: 'Constantly exploring new tools, operating systems, and tech topics outside my university classes.'
        }
      ]
    }
  ];

  const totalItemsCount = pillarsData.reduce((acc, p) => acc + p.items.length, 0);

  const filteredPillars = selectedFilter === 'all'
    ? pillarsData
    : pillarsData.filter((p) => p.id === selectedFilter);

  return (
    <section id="about" className="about-fullscreen-showcase">
      {/* Top Header & Segmented Domain Filter Track */}
      <div className="about-stage-header">
        <div className="section-header-block">
          <span className="section-kicker">
            <Compass size={14} className="kicker-icon" />
            <span>01 / About Me</span>
          </span>
          <h2 className="section-heading">Background & Focus Areas</h2>
          <p className="section-subtext">
            Second-year Computer Science student at the University of New Brunswick specializing in cybersecurity. I focus on backend development with Java and Spring Boot, understanding software security, and building practical projects.
          </p>
        </div>

        {/* Domain Filter Pills */}
        <div className="about-filter-track" role="tablist" aria-label="About Pillars Filter">
          <button
            type="button"
            className={`about-pill-btn ${selectedFilter === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('all')}
          >
            <span>All Areas</span>
            <span className="about-pill-count">{totalItemsCount}</span>
          </button>
          {pillarsData.map((pillar) => {
            const isSelected = selectedFilter === pillar.id;
            return (
              <button
                key={pillar.id}
                type="button"
                className={`about-pill-btn ${pillar.className} ${isSelected ? 'active' : ''}`}
                onClick={() => setSelectedFilter(pillar.id)}
              >
                {pillar.icon}
                <span>{pillar.name}</span>
                <span className="about-pill-count">{pillar.items.length}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Screen-Filling Open Architectural Ledger (Zero Cards) */}
      <div className={`about-ledger-canvas ${selectedFilter !== 'all' ? 'single-focus' : 'quad-grid'}`}>
        {filteredPillars.map((pillar) => (
          <div key={pillar.id} className={`about-domain-pillar ${pillar.className}`}>
            {/* Pillar Header */}
            <div className="about-pillar-header">
              <div className="about-pillar-top-meta">
                <span className="about-pillar-index">{pillar.num}</span>
                <span className="about-pillar-kicker">{pillar.kicker}</span>
              </div>
              <div className="about-pillar-title-row">
                <div className="about-pillar-icon-wrap">
                  {pillar.icon}
                </div>
                <h3 className="about-pillar-title">{pillar.name}</h3>
              </div>
            </div>

            {/* Items List without card boxes */}
            <div className="about-pillar-items-deck">
              {pillar.items.map((item) => (
                <div key={item.name} className="about-ledger-row">
                  <div className="about-name-heading">
                    <span className="about-dot" />
                    <strong className="about-item-title">{item.name}</strong>
                  </div>
                  <p className="about-evidence-text">{item.context}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>


      {/* Bottom Verification Ledger */}
      <div className="about-footer-ledger">
        <div className="about-ledger-badge">
          <CheckCircle2 size={15} className="about-ledger-check" />
          <span>Computer Science • University of New Brunswick</span>
        </div>
        <div className="about-ledger-meta-tags">
          <span className="tech-pill">Bilingual (English & French)</span>
          <span className="tech-pill">Java 21</span>
          <span className="tech-pill">Spring Boot</span>
          <span className="tech-pill">Python</span>
          <span className="tech-pill">Fredericton, NB</span>
          <span className="tech-pill">Expected May 2028</span>
        </div>
      </div>
    </section>
  );
};

export default About;
