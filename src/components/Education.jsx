import React from 'react';
import { GraduationCap, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import './Education.css';

export const Education = ({ education = {} }) => {
  const {
    institution = 'University of New Brunswick',
    degree = 'BSc in Computer Science',
    specialization = 'Cybersecurity Specialization',
    timeline = 'Expected May 2028',
    location = 'Fredericton, New Brunswick'
  } = education || {};

  return (
    <section id="education" className="education-simple-section">
      {/* Header */}
      <div className="education-simple-header">
        <span className="section-kicker">
          <GraduationCap size={14} className="kicker-icon" />
          <span>04 / Education</span>
        </span>
        <h2 className="section-heading">Education & Studies</h2>
        <p className="section-subtext">
          Undergraduate student at {institution} specializing in Cybersecurity, taking courses in software engineering, data structures, and computer security.
        </p>
      </div>

      {/* Main Layout: Joint Horizontal Panes + Section Vibe Image Placeholder */}
      <div className="education-joint-layout">
        {/* Joint Horizontal Panes Deck */}
        <div className="education-joint-panes">
          {/* Pane 1: Degree & Program */}
          <div className="education-pane pane-degree">
            <div className="pane-header">
              <div className="pane-icon-wrap amber">
                <GraduationCap size={16} />
              </div>
              <div className="pane-title-group">
                <span className="pane-kicker">DEGREE</span>
                <h3 className="pane-title">{degree}</h3>
              </div>
            </div>
            <div className="pane-meta-strip">
              <span>{institution}</span>
              <span className="pane-meta-dot">•</span>
              <span>{timeline}</span>
            </div>
            <ul className="education-bullets">
              <li>{specialization}</li>
              <li>{location} campus</li>
              <li>Focus in software development & cybersecurity</li>
              <li>Bilingual study (English & French)</li>
            </ul>
          </div>

          {/* Pane 2: Core Coursework (Simple bulleted list, zero verbose paragraphs) */}
          <div className="education-pane pane-courses">
            <div className="pane-header">
              <div className="pane-icon-wrap cyan">
                <BookOpen size={16} />
              </div>
              <div className="pane-title-group">
                <span className="pane-kicker">COURSEWORK</span>
                <h3 className="pane-title">Core Courses</h3>
              </div>
            </div>
            <div className="pane-meta-strip">
              <span>Key Computer Science Courses</span>
            </div>
            <ul className="education-bullets coursework-bullets">
              <li><strong>Security & Systems</strong> — CS 2413 (InfoSec), CS 2253 (Machine Org)</li>
              <li><strong>Software Engineering</strong> — CS 2043 (SE), CS 1083 (Data Structures)</li>
              <li><strong>Core Programming</strong> — CS 1073 (Computer Science I — Java)</li>
              <li><strong>Math & Logic</strong> — CS 1303 (Discrete Structures), MATH 1003 (Calculus I)</li>
            </ul>
          </div>

          {/* Pane 3: Certifications & Status */}
          <div className="education-pane pane-certs">
            <div className="pane-header">
              <div className="pane-icon-wrap coral">
                <Award size={16} />
              </div>
              <div className="pane-title-group">
                <span className="pane-kicker">CREDENTIALS</span>
                <h3 className="pane-title">Certifications & Status</h3>
              </div>
            </div>
            <div className="pane-meta-strip">
              <span>Certifications & Work Eligibility</span>
            </div>
            <ul className="education-bullets">
              <li><strong>CompTIA Security+</strong> — Currently Studying (Targeted 2027)</li>
              <li><strong>AWS Cloud Practitioner</strong> — Planned</li>
              <li><strong>Canadian Work Authorization</strong> — Summer 2027 Co-op Eligible</li>
              <li><strong>Fredericton Base</strong> — Open to relocation & remote roles</li>
            </ul>
          </div>
        </div>

        {/* Section Vibe Image */}
        <div className="education-vibe-column">
          <div className="vibe-image-frame">
            <img 
              src={`${import.meta.env.BASE_URL}campus.jpeg`} 
              alt="University of New Brunswick Campus" 
              className="vibe-img"
              loading="lazy"
            />
            <div className="vibe-glass-overlay" />
            <div className="vibe-caption-chip">
              <span className="live-status-dot" />
              <span>UNB Fredericton • Campus & Academics</span>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Bottom Summary Bar */}
      <div className="education-simple-footer">
        <div className="education-footer-badge">
          <CheckCircle2 size={15} className="footer-check-icon" />
          <span>Faculty of Computer Science • University of New Brunswick</span>
        </div>
        <div className="education-footer-tags">
          <span className="tech-pill">BSc Computer Science</span>
          <span className="tech-pill">Cybersecurity</span>
          <span className="tech-pill">Expected May 2028</span>
          <span className="tech-pill">Fredericton, NB</span>
        </div>
      </div>
    </section>
  );
};

export default Education;
