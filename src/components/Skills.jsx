import React, { useState } from 'react';
import { Code2, Database, Shield, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import './Skills.css';

export const Skills = ({ skills }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const domainThemes = {
    languages: {
      id: 'languages',
      num: '01',
      kicker: '01 LANGUAGES',
      accentColor: 'var(--color-cyan-prismatic)',
      className: 'domain-cyan',
      icon: <Code2 size={18} />
    },
    backend: {
      id: 'backend',
      num: '02',
      kicker: '02 BACKEND',
      accentColor: 'var(--color-teal-soft)',
      className: 'domain-teal',
      icon: <Database size={18} />
    },
    security: {
      id: 'security',
      num: '03',
      kicker: '03 SECURITY',
      accentColor: 'var(--color-coral)',
      className: 'domain-coral',
      icon: <Shield size={18} />
    },
    tools: {
      id: 'tools',
      num: '04',
      kicker: '04 TOOLS',
      accentColor: 'var(--color-amber)',
      className: 'domain-amber',
      icon: <Wrench size={18} />
    }
  };

  const totalSkillsCount = skills.categories.reduce((acc, c) => acc + c.items.length, 0);

  const filteredCategories = selectedFilter === 'all'
    ? skills.categories
    : skills.categories.filter((cat) => cat.id === selectedFilter);

  return (
    <section id="skills" className="skills-fullscreen-showcase">
      {/* Top Header & Segmented Domain Filter Track */}
      <div className="skills-stage-header">
        <div className="section-header-block">
          <span className="section-kicker">
            <Sparkles size={14} className="kicker-icon" />
            <span>03 / Skills</span>
          </span>
          <h2 className="section-heading">Technical Skills & Tools</h2>
          <p className="section-subtext">
            Languages, frameworks, and tools I use in my university courses, personal projects, and hands-on labs.
          </p>
        </div>

        {/* Domain Filter Pills */}
        <div className="skills-filter-track" role="tablist" aria-label="Skills Domain Filter">
          <button
            type="button"
            className={`filter-pill-btn ${selectedFilter === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('all')}
          >
            <span>All Domains</span>
            <span className="filter-count">{totalSkillsCount}</span>
          </button>
          {skills.categories.map((cat) => {
            const theme = domainThemes[cat.id] || domainThemes.languages;
            const isSelected = selectedFilter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className={`filter-pill-btn ${theme.className} ${isSelected ? 'active' : ''}`}
                onClick={() => setSelectedFilter(cat.id)}
              >
                {theme.icon}
                <span>{cat.name}</span>
                <span className="filter-count">{cat.items.length}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Screen-Filling Open Architectural Ledger (Zero Cards) */}
      <div className={`skills-ledger-canvas ${selectedFilter !== 'all' ? 'single-focus' : 'quad-grid'}`}>
        {filteredCategories.map((category) => {
          const theme = domainThemes[category.id] || domainThemes.languages;
          return (
            <div key={category.id} className={`skills-domain-pillar ${theme.className}`}>
              {/* Pillar Header */}
              <div className="pillar-header">
                <div className="pillar-top-meta">
                  <span className="pillar-index">{theme.num}</span>
                  <span className="pillar-kicker">{theme.kicker}</span>
                </div>
                <div className="pillar-title-row">
                  <div className="pillar-icon-wrap">
                    {theme.icon}
                  </div>
                  <h3 className="pillar-title">{category.name}</h3>
                </div>
              </div>

              {/* Items List without card boxes */}
              <div className="pillar-items-deck">
                {category.items.map((item) => (
                  <div key={item.name} className="skill-ledger-row">
                    <div className="skill-name-heading">
                      <span className="skill-dot" />
                      <strong className="skill-title">{item.name}</strong>
                    </div>
                    <p className="skill-evidence-text">{item.context}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Verification Ledger */}
      <div className="skills-footer-ledger">
        <div className="ledger-badge">
          <CheckCircle2 size={15} className="ledger-check" />
          <span>Computer Science & Cybersecurity • University of New Brunswick</span>
        </div>
        <div className="ledger-meta-tags">
          <span className="tech-pill">Java 21</span>
          <span className="tech-pill">Spring Boot</span>
          <span className="tech-pill">Python</span>
          <span className="tech-pill">PostgreSQL</span>
          <span className="tech-pill">OWASP Top 10</span>
          <span className="tech-pill">Linux</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
