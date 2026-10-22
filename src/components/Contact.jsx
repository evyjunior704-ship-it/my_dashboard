import React from 'react';
import { Mail, ArrowUpRight, MapPin, Globe, Sparkles, Download, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import './Contact.css';

export const Contact = ({ identity }) => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-box glass-primary">
        <div className="contact-content-grid">
          {/* Left Column: Context & Availability */}
          <div className="contact-left-col">
            <span className="section-kicker">
              <Sparkles size={14} className="kicker-icon" />
              <span>05 / Contact</span>
            </span>
            <h2 className="contact-heading">Let's connect</h2>
            <p className="contact-text">
              I'm actively seeking <strong>Summer 2027 Co-op</strong> placements and software development roles across Canada (open to remote or on-site in New Brunswick, Montreal, Ottawa, and beyond).
            </p>
            <p className="contact-subtext">
              Whether you're a recruiter, engineer, or fellow student interested in cybersecurity and software engineering, feel free to reach out—I'd love to chat!
            </p>

            <div className="contact-location-meta">
              <span className="meta-pill glass-secondary">
                <MapPin size={13} />
                <span>Fredericton, New Brunswick</span>
              </span>
              <span className="meta-pill glass-secondary">
                <Globe size={13} />
                <span>Bilingual: English & French</span>
              </span>
            </div>

            {/* Prominent Resume Download Button */}
            <div className="contact-resume-cta">
              <a 
                href={`${import.meta.env.BASE_URL}Resume_Software_Development.docx`}
                download="Resume - Software Development.docx"
                className="btn btn-primary contact-resume-btn"
                title="Download Resume (.docx)"
              >
                <Download size={16} />
                <span>Download Resume (.docx)</span>
              </a>
              <a 
                href={`${import.meta.env.BASE_URL}Resume_Software_Development.pdf`}
                download="Resume - Software Development.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary contact-resume-btn-secondary"
                title="Download or View PDF Version"
              >
                <FileText size={15} />
                <span>PDF Version</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Verified Links (Floating Glass Surfaces) */}
          <div className="contact-right-col">
            <div className="direct-links-deck">
              {/* Direct Mail */}
              <a 
                href={`mailto:${identity.email}`}
                className="direct-link-card glass-floating link-mail"
                title="Send direct email"
              >
                <div className="direct-link-icon-frame mail">
                  <Mail size={19} />
                </div>
                <div className="direct-link-text">
                  <span className="direct-link-label">Email</span>
                  <span className="direct-link-value">{identity.email}</span>
                </div>
                <ArrowUpRight size={17} className="direct-link-arrow" />
              </a>

              {/* LinkedIn */}
              <a 
                href={identity.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="direct-link-card glass-floating link-linkedin"
                title="Visit LinkedIn Profile"
              >
                <div className="direct-link-icon-frame linkedin">
                  <LinkedinIcon size={19} />
                </div>
                <div className="direct-link-text">
                  <span className="direct-link-label">LinkedIn</span>
                  <span className="direct-link-value">{identity.linkedinUser}</span>
                </div>
                <ArrowUpRight size={17} className="direct-link-arrow" />
              </a>

              {/* GitHub */}
              <a 
                href={identity.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="direct-link-card glass-floating link-github"
                title="Explore GitHub Repositories"
              >
                <div className="direct-link-icon-frame github">
                  <GithubIcon size={19} />
                </div>
                <div className="direct-link-text">
                  <span className="direct-link-label">GitHub</span>
                  <span className="direct-link-value">github.com/{identity.githubUser}</span>
                </div>
                <ArrowUpRight size={17} className="direct-link-arrow" />
              </a>

              {/* Resume Download Card */}
              <a 
                href={`${import.meta.env.BASE_URL}Resume_Software_Development.docx`}
                download="Resume - Software Development.docx"
                className="direct-link-card glass-floating link-resume"
                title="Download Resume - Software Development (.docx)"
              >
                <div className="direct-link-icon-frame resume">
                  <FileText size={19} />
                </div>
                <div className="direct-link-text">
                  <span className="direct-link-label">Resume</span>
                  <span className="direct-link-value">Resume - Software Development.docx</span>
                </div>
                <Download size={17} className="direct-link-arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
