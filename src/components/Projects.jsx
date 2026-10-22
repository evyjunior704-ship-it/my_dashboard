import React, { useState } from 'react';
import { GithubIcon } from './BrandIcons';
import { ShieldCheck, Eye, Sparkles, Terminal, ArrowRight, ArrowLeft } from 'lucide-react';
import './Projects.css';

export const Projects = () => {
  const [activeProject, setActiveProject] = useState('storems');

  const projectsList = [
    {
      id: 'storems',
      index: '01',
      title: 'StoreMS',
      label: 'StoreMS — Store Management System',
      tagline: 'Multi-store inventory and retail management built with Java, Spring Boot, and PostgreSQL.',
      category: 'Backend & Web Security',
      timeline: '2025',
      status: 'Completed',
      statusType: 'completed',
      themeClass: 'theme-cyan',
      repoUrl: 'https://github.com/evyjunior704-ship-it/store-Management-System',
      isPublicRepo: true,
      tags: ['Java 21', 'Spring Boot', 'PostgreSQL', 'JPA / Hibernate', 'Thymeleaf', 'BCrypt', 'OpenPDF'],
      problem: 'Small retail stores often run into inventory errors when multiple customers try to buy the last item in stock at once. In addition, weak web setups can allow users to view other stores\' confidential sales simply by modifying IDs in the URL.',
      role: 'Sole developer: designed the relational PostgreSQL schema, wrote Spring Boot controllers and business services, implemented secure authentication, and tested against common web vulnerabilities.',
      decisions: [
        {
          title: 'Session-Based Store Access',
          detail: 'Store context is derived strictly from the authenticated login session—never from URL parameters—preventing unauthorized access (IDOR).'
        },
        {
          title: 'BCrypt Password Hashing',
          detail: 'Used BCrypt with work factor 10 and consistent login error messages so attackers cannot guess valid usernames.'
        },
        {
          title: 'Transactional Checkout Flow',
          detail: 'Wrapped checkout operations in Spring\'s @Transactional with database row locks so inventory deductions always stay consistent.'
        }
      ],
      learned: 'Learned how database transactions and entity relationships work under concurrent requests. Next steps include containerizing with Docker and adding integration tests.',
      schematic: {
        title: 'CHECKOUT FLOW & SECURITY BOUNDARY',
        stack: 'Java 21 • Spring Boot • PostgreSQL',
        nodes: [
          { type: 'Client Request', name: 'Checkout Request', detail: 'Cart & Payment Form' },
          { type: 'Auth & CSRF', name: 'BCrypt & Session Check', detail: 'Token Verified & Principal Resolved', connector: 'Principal Resolved' },
          { type: 'Store Boundary', name: 'Session-Derived Store ID', detail: 'Scoped strictly to logged-in user', highlight: true, connector: '@Transactional Boundary' },
          { type: 'Service Layer', name: 'Atomic Stock Check', detail: 'Database Row Lock', connector: 'Spring Data JPA' },
          { type: 'Database', name: 'PostgreSQL Commit', detail: 'Safe Transaction Completed' }
        ],
        callouts: [
          { label: 'Access Control', value: 'Session-Scoped ID' },
          { label: 'Concurrency', value: 'Database Row Lock' },
          { label: 'Password Security', value: 'BCrypt (Cost 10)' }
        ]
      }
    },
    {
      id: 'concealed',
      index: '02',
      title: 'Concealed',
      label: 'Concealed — Image Privacy Tool',
      tagline: 'A privacy prototype that subtly alters photos to confuse facial recognition models while looking natural to human eyes.',
      category: 'Computer Vision & Privacy',
      timeline: '2024 - 2025',
      status: 'Hackathon Prototype',
      statusType: 'prototype',
      themeClass: 'theme-lavender',
      repoUrl: 'https://github.com/evyjunior704-ship-it',
      isPublicRepo: true,
      tags: ['Python', 'Computer Vision', 'Sobel Edge Filters', 'Node.js', 'Neural Networks', 'PyTorch'],
      problem: 'Facial recognition models scrape photos from public web pages without user consent. Traditional privacy fixes like blurring protect identity, but make photos unusable to share. Concealed explores small edge-filter adjustments that confuse models while keeping photos looking natural.',
      role: 'Co-developed the project concept during a hackathon, built the front-end user interface, and researched how edge-detection filters affect facial recognition feature detection.',
      decisions: [
        {
          title: 'Sobel Edge Filters',
          detail: 'Researched how applying Sobel gradient edge filters disrupts the facial landmark points that automated face detectors search for.'
        },
        {
          title: 'Fast Client Processing',
          detail: 'Kept the processing lightweight and client-friendly so users don\'t need to send uncompressed photos to third-party servers.'
        },
        {
          title: 'Preserving Visual Quality',
          detail: 'Balanced landmark disruption so human viewers still see a clear, high-quality photo.'
        }
      ],
      learned: 'Learned how computer vision networks extract pixel gradient features versus human vision, and enjoyed collaborating quickly with teammates under hackathon deadlines.',
      schematic: {
        title: 'IMAGE OBFUSCATION FLOW',
        stack: 'Python • PyTorch • Sobel Convolution',
        nodes: [
          { type: 'Input Image', name: 'Portrait Photo', detail: 'Original image' },
          { type: 'Decomposition', name: 'Gradient Analysis', detail: 'Intensity calculations', connector: 'Frequency Mask' },
          { type: 'Obfuscation Core', name: 'Sobel Edge Filter', detail: 'Disrupts facial landmark points', highlight: true, connector: 'Feature Perturbation' },
          { type: 'Model Test', name: 'Face Detector Evaluation', detail: 'Recognition confidence drops', connector: 'Blended Output' },
          { type: 'Final Image', name: 'Natural Output Photo', detail: 'Looks clear to people' }
        ],
        callouts: [
          { label: 'Privacy Goal', value: 'Landmark Evasion' },
          { label: 'Execution', value: 'Lightweight & Fast' },
          { label: 'Visual Quality', value: 'Natural to Humans' }
        ]
      }
    },
    {
      id: 'phishing',
      index: '03',
      title: 'Phishing Detector',
      label: 'Phishing Email Detector',
      tagline: 'Machine learning tool that analyzes email body text and inspects routing headers to catch phishing attempts.',
      category: 'Applied ML & Security',
      timeline: '2025 - Present',
      status: 'In Progress',
      statusType: 'in-progress',
      themeClass: 'theme-coral',
      repoUrl: 'https://github.com/evyjunior704-ship-it/Phishing_detector',
      isPublicRepo: true,
      tags: ['Python', 'NLP', 'Scikit-Learn', 'Machine Learning', 'JavaFX', 'MIME Parsing'],
      problem: 'Modern phishing emails often slip past standard spam filters by using convincing wording and disguised sender headers. Catching them requires analyzing the email message intent along with the technical sender headers.',
      role: 'Sole developer: building the data preprocessing pipeline in Python, testing classification models against open phishing datasets, and building a JavaFX desktop interface to inspect flagged emails.',
      decisions: [
        {
          title: 'Text & Header Analysis',
          detail: 'Analyzing both the body message (using NLP) and verifying routing headers (like SPF/DKIM flags and reply-to mismatches) gives a much stronger signal.'
        },
        {
          title: 'Local Processing',
          detail: 'Runs email triage locally so sensitive email data does not need to be sent to external cloud APIs.'
        },
        {
          title: 'JavaFX Desktop Dashboard',
          detail: 'Built a desktop interface so users can view flagged emails, inspect which phrases triggered the warning, and see the risk score.'
        }
      ],
      learned: 'Gained practical experience with feature engineering on imbalanced security datasets. Currently working on model accuracy across newer phishing templates.',
      schematic: {
        title: 'EMAIL THREAT DETECTION FLOW',
        stack: 'Python • Scikit-Learn • NLP • JavaFX',
        nodes: [
          { type: 'Incoming Email', name: 'Email Message Stream', detail: 'MIME RFC 5322 payload' },
          { type: 'Parser', name: 'Body & Header Splitter', detail: 'Extracts message text and headers', connector: 'Dual Signals' },
          { type: 'NLP Classifier', name: 'Text Semantics Model', detail: 'Scores urgency and suspicious wording', highlight: true, connector: 'Combined Score' },
          { type: 'Header Check', name: 'SPF / DKIM / Sender Validation', detail: 'Checks relay chain and reply-to', connector: 'Risk Aggregator' },
          { type: 'Desktop App', name: 'JavaFX Alert UI', detail: 'Shows risk score and highlighted phrases' }
        ],
        callouts: [
          { label: 'Detection Method', value: 'NLP Text + Header Flags' },
          { label: 'Privacy', value: 'Runs Locally on Device' },
          { label: 'Interface', value: 'JavaFX Desktop App' }
        ]
      }
    }
  ];

  const current = projectsList.find((p) => p.id === activeProject) || projectsList[0];
  const currentIndex = projectsList.findIndex((p) => p.id === current.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projectsList.length;
    setActiveProject(projectsList[nextIndex].id);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + projectsList.length) % projectsList.length;
    setActiveProject(projectsList[prevIndex].id);
  };

  return (
    <section id="projects" className="projects-section-fullscreen">
      {/* Editorial Section Header & Segmented Project Switcher */}
      <div className="projects-stage-header">
        <div className="section-header-block">
          <span className="section-kicker">
            <Sparkles size={14} className="kicker-icon" />
            <span>02 / Projects</span>
          </span>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subtext">
            Projects I've built and worked on—focusing on backend services, application security, and applied machine learning.
          </p>
        </div>

        {/* Tactile Liquid-Glass Project Selector Bar */}
        <div className="project-selector-track" role="tablist" aria-label="Project Case Studies">
          {projectsList.map((p) => {
            const isSelected = p.id === current.id;
            return (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`project-selector-btn ${isSelected ? 'active' : ''} ${p.themeClass}`}
                onClick={() => setActiveProject(p.id)}
              >
                <span className="selector-index">{p.index}</span>
                <span className="selector-title">{p.title}</span>
                <span className={`selector-badge ${p.statusType}`}>{p.status}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Screen-Filling Expansive Editorial Spread (Zero Card Wrapper) */}
      <div className={`project-immersive-spread ${current.themeClass}`} key={current.id}>
        {/* Left Column: Generous Editorial Narrative */}
        <div className="project-editorial-column">
          <div className="project-meta-kicker">
            <span className={`project-status-pill ${current.statusType}`}>
              {current.statusType === 'completed' && <ShieldCheck size={12} />}
              {current.statusType === 'prototype' && <Eye size={12} />}
              {current.statusType === 'in-progress' && <span className="live-status-dot" />}
              <span>{current.status}</span>
            </span>
            <span className="project-category-text">{current.category}</span>
            <span className="project-timeline-mono">{current.timeline}</span>
          </div>

          <h1 className="project-editorial-title">{current.label}</h1>
          <p className="project-editorial-subtitle">{current.tagline}</p>

          <div className="project-narrative-sections">
            {/* The Engineering Problem */}
            <div className="editorial-text-block">
              <h3 className="editorial-block-label">The Problem</h3>
              <p className="editorial-block-prose">{current.problem}</p>
            </div>

            {/* My Role & Architecture Implementation */}
            <div className="editorial-text-block">
              <h3 className="editorial-block-label">My Role & Implementation</h3>
              <p className="editorial-block-prose">{current.role}</p>
            </div>

            {/* Key Technical Decisions (Fine Rule Divider Layout) */}
            <div className="editorial-text-block">
              <h3 className="editorial-block-label">Key Decisions</h3>
              <div className="editorial-decisions-stack">
                {current.decisions.map((dec, idx) => (
                  <div key={idx} className="editorial-decision-item">
                    <span className="decision-num">0{idx + 1}</span>
                    <div className="decision-body">
                      <strong className="decision-title">{dec.title}</strong>
                      <p className="decision-detail">{dec.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What Was Learned */}
            <div className="editorial-text-block">
              <h3 className="editorial-block-label">What I Learned & Next Steps</h3>
              <p className="editorial-block-prose">{current.learned}</p>
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="project-tech-tags-deck">
            {current.tags.map((t) => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>

          {/* Action Row */}
          <div className="project-bottom-action-bar">
            {current.isPublicRepo ? (
              <a
                href={current.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <GithubIcon size={16} />
                <span>View on GitHub</span>
              </a>
            ) : (
              <span className="active-development-tag">
                <span className="live-status-dot" />
                <span>Active Project</span>
              </span>
            )}

            {/* Pagination Controls to Browse All 3 Projects */}
            <div className="project-paging-controls">
              <button
                type="button"
                onClick={handlePrev}
                className="btn btn-secondary paging-btn"
                title="View previous project"
              >
                <ArrowLeft size={14} />
                <span>Prev</span>
              </button>
              <span className="paging-indicator">{currentIndex + 1} / {projectsList.length}</span>
              <button
                type="button"
                onClick={handleNext}
                className="btn btn-secondary paging-btn"
                title="View next project"
              >
                <span>Next</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Expansive Architecture & Pipeline Stage */}
        <div className="project-architecture-stage glass-primary">
          <div className="stage-header">
            <div className="stage-title-wrap">
              <Terminal size={14} className="stage-terminal-icon" />
              <span className="stage-title">{current.schematic.title}</span>
            </div>
            <span className="stage-stack-tag">{current.schematic.stack}</span>
          </div>

          {/* Visual Vertical Node Pipeline */}
          <div className="stage-pipeline-flow">
            {current.schematic.nodes.map((node, idx) => (
              <React.Fragment key={idx}>
                <div className={`pipeline-node ${node.highlight ? 'highlight-node' : 'glass-floating'}`}>
                  <div className="pipeline-node-top">
                    <span className="node-index-badge">0{idx + 1}</span>
                    <span className="node-kind-label">{node.type}</span>
                  </div>
                  <h4 className="node-headline">{node.name}</h4>
                  <p className="node-detail-text">{node.detail}</p>
                </div>

                {node.connector && (
                  <div className="pipeline-flow-connector">
                    <span className="flow-line" />
                    <span className="flow-tag">{node.connector}</span>
                    <span className="flow-line" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Bottom Telemetry Callout Strip */}
          <div className="stage-telemetry-callouts">
            {current.schematic.callouts.map((callout, idx) => (
              <div key={idx} className="callout-pill glass-secondary">
                <span className="callout-label">{callout.label}</span>
                <span className="callout-val">{callout.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
