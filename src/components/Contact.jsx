import React from 'react';
import { Mail, ArrowUpRight, MapPin, Globe, Sparkles } from 'lucide-react';
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
              <span>05 / Get In Touch</span>
            </span>
            <h2 className="contact-heading">Let's discuss engineering opportunities</h2>
            <p className="contact-text">
              I am actively seeking <strong>Summer 2027 Co-op</strong> placements and software development opportunities across Canada (remote or on-site in New Brunswick, Montreal, Ottawa, and beyond).
            </p>
            <p className="contact-subtext">
              Whether you are an engineering team lead, a technical recruiter, or a fellow developer interested in secure systems and applied AI, I welcome the conversation.
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
                  <span className="direct-link-label">Professional Email</span>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
