import React from 'react';
import { Compass, Trophy, ArrowRight, Sparkles } from 'lucide-react';
import './Direction.css';

export const Direction = ({ interests }) => {
  return (
    <section className="direction-section">
      <div className="section-header-block">
        <span className="section-kicker">
          <Sparkles size={14} className="kicker-icon" />
          <span>05 / Exploration & Disciplines</span>
        </span>
        <h2 className="section-heading">Current Interests & Transferable Strengths</h2>
        <p className="section-subtext">
          Areas of active exploration beyond coursework, and athletic disciplines that shape communication under pressure.
        </p>
      </div>

      <div className="direction-grid">
        {/* Technical Direction Card */}
        <div className="direction-card glass-primary theme-lavender">
          <div className="card-kicker-header">
            <Compass size={18} className="card-kicker-icon" />
            <h3 className="card-kicker-title">Where I Am Focusing Next</h3>
          </div>
          <p className="direction-intro">
            Actively reading research papers, testing proof-of-concept labs, and building targeted applications in the following domains:
          </p>
          <ul className="direction-list">
            {interests.technicalDirection.map((item, idx) => (
              <li key={idx} className="direction-item">
                <ArrowRight size={15} className="direction-arrow" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Team Sports & Analytical Rigor Card */}
        <div className="athletics-card glass-primary theme-coral">
          <div className="card-kicker-header">
            <Trophy size={18} className="card-kicker-icon trophy" />
            <h3 className="card-kicker-title">{interests.athleticsAndTeamwork.sports}</h3>
          </div>
          <span className="athletics-subtitle">Communication Under Pressure & Team Discipline</span>
          <p className="athletics-text">
            {interests.athleticsAndTeamwork.summary}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Direction;
