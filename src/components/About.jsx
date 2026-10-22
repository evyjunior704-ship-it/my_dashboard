import React, { useState } from 'react';
import { Compass, BookOpen, Database, Shield, Activity, CheckCircle2 } from 'lucide-react';
import './About.css';

export const About = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const pillarsData = [
    {
      id: 'foundation',
      num: '01',
      kicker: 'ACADEMIC & SYSTEMS THEORY',
      name: 'Computer Science Foundation',
      accentColor: 'var(--color-cyan-prismatic)',
      className: 'domain-cyan',
      icon: <BookOpen size={18} />,
      items: [
        {
          name: 'University of New Brunswick',
          context: 'Undergraduate Computer Science student in Fredericton, NB, pursuing a specialized concentration in cybersecurity.'
        },
        {
          name: 'Theory to Real Systems',
          context: 'Connecting data structures, discrete algorithms, and operating system concepts directly with hands-on software development.'
        },
        {
          name: 'Bilingual Technical Fluency',
          context: 'Fully fluent in English and French, capable of communicating technical rationale and design trade-offs across diverse teams.'
        }
      ]
    },
    {
      id: 'backend',
      num: '02',
      kicker: 'BACKEND & CONCURRENCY',
      name: 'Backend Architecture',
      accentColor: 'var(--color-teal-soft)',
      className: 'domain-teal',
      icon: <Database size={18} />,
      items: [
        {
          name: 'Java 21 & Spring Boot',
          context: 'Developing transactional REST services, secure database controllers, and JPA persistence schemas with strict encapsulation.'
        },
        {
          name: 'ACID Concurrency Controls',
          context: 'Enforcing database row locks and explicit transaction boundaries to prevent race conditions during high-volume checkouts.'
        },
        {
          name: 'Maintainable Systems Design',
          context: 'Prioritizing clear data flow, readable code, and verifiable test coverage over superficial or ad-hoc pattern copying.'
        }
      ]
    },
    {
      id: 'security',
      num: '03',
      kicker: 'APPLICATION HARDENING',
      name: 'Secure-by-Design Thinking',
      accentColor: 'var(--color-coral)',
      className: 'domain-coral',
      icon: <Shield size={18} />,
      items: [
        {
          name: 'Session-Scoped Authorization',
          context: 'Deriving tenant and user scope exclusively from authenticated session tokens to eliminate IDOR and broken access controls.'
        },
        {
          name: 'Cryptographic Protection',
          context: 'Implementing BCrypt hashing with work factor 10 and uniform error responses to completely prevent user enumeration attacks.'
        },
        {
          name: 'Root-Cause Investigation',
          context: 'Diagnosing protocol failures, buffer limits, and race conditions down to OS and network layers rather than patching symptoms.'
        }
      ]
    },
    {
      id: 'discipline',
      num: '04',
      kicker: 'DISCIPLINE & EXPLORATION',
      name: 'Athletics & Active Direction',
      accentColor: 'var(--color-amber)',
      className: 'domain-amber',
      icon: <Activity size={18} />,
      items: [
        {
          name: 'Competitive Soccer & Basketball',
          context: 'Playing competitive team sports, maintaining steady physical discipline, and fostering collaborative composure under pressure.'
        },
        {
          name: 'Concise Decision-Making',
          context: 'Translating fast-paced sports instincts into rapid, ego-free technical communication during sprint triage and system debugging.'
        },
        {
          name: 'Continuous Investigation',
          context: 'Actively researching computer vision obfuscation, Linux system internals, and applied machine learning security models.'
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
            <span>01 / Background & Engineering Focus</span>
          </span>
          <h2 className="section-heading">Engineering Background & Systems Focus</h2>
          <p className="section-subtext">
            Second-year Computer Science student at the University of New Brunswick specializing in cybersecurity. Focused on backend engineering with Java and Spring Boot, secure systems design, and applied machine learning.
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
          <span>Academic Foundation & Engineering Background • University of New Brunswick</span>
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
