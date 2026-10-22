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
      label: 'StoreMS — Secure Retail Management Architecture',
      tagline: 'Multi-store inventory management with transactional concurrency control, BCrypt authentication, and OWASP Top 10 mitigation.',
      category: 'Backend & AppSec Architecture',
      timeline: '2025',
      status: 'Completed',
      statusType: 'completed',
      themeClass: 'theme-cyan',
      repoUrl: 'https://github.com/evyjunior704-ship-it',
      isPublicRepo: true,
      tags: ['Java 21', 'Spring Boot', 'PostgreSQL', 'JPA / Hibernate', 'Thymeleaf', 'BCrypt', 'OpenPDF'],
      problem: 'Retail operations face dual critical failure modes: stock race conditions during peak checkout volumes where multiple customers purchase the last unit simultaneously, and web security vulnerabilities—specifically Broken Access Control (OWASP A01) where users manipulate query parameters to inspect another store\'s confidential ledger.',
      role: 'Sole designer and backend developer: modeled the PostgreSQL relational database schema with composite keys, wrote Spring Data JPA entities and custom repository queries, built the transactional checkout pipeline, and audited the security posture against OWASP Top 10 standards.',
      decisions: [
        {
          title: 'Store-Scoped Principal Isolation',
          detail: 'Store context is extracted strictly from the authenticated security session—never from user-supplied URL or form parameters—completely eliminating Insecure Direct Object References (IDOR).'
        },
        {
          title: 'BCrypt Work Factor 10 & Generic Auth Errors',
          detail: 'Eliminates user enumeration and timing attacks during failed authentication attempts.'
        },
        {
          title: 'Atomic Database Row Locking',
          detail: 'Service operations are wrapped in Spring @Transactional boundaries with database row locks to guarantee zero stock overselling under concurrent checkouts.'
        }
      ],
      learned: 'Gained a deep appreciation for relational database isolation levels and Jakarta Bean validation. Next steps include containerizing the microservices with Docker and adding automated concurrency integration tests.',
      schematic: {
        title: 'TRANSACTIONAL DATA PIPELINE & SECURITY PERIMETER',
        stack: 'Java 21 • Spring Boot • PostgreSQL ACID',
        nodes: [
          { type: 'Client Entry', name: 'Web Checkout Request', detail: 'Form Submission / Cart Payload' },
          { type: 'Security Gate', name: 'CSRF & BCrypt Auth', detail: 'Token Validation & Work Factor 10', connector: 'Principal Resolved' },
          { type: 'Security Perimeter', name: 'Store-Scoped Tenant Session', detail: 'Session-derived Store ID (IDOR Immune)', highlight: true, connector: '@Transactional Boundary' },
          { type: 'Service Layer', name: 'Atomic Stock Check', detail: 'Row-level Pessimistic Lock', connector: 'JPA / Hibernate' },
          { type: 'Persistence', name: 'PostgreSQL Ledger', detail: 'ACID Transactional Commit' }
        ],
        callouts: [
          { label: 'Security Boundary', value: 'Zero IDOR Surface' },
          { label: 'Concurrency', value: 'Atomic Stock Lock' },
          { label: 'Password Hash', value: 'BCrypt (Cost 10)' }
        ]
      }
    },
    {
      id: 'concealed',
      index: '02',
      title: 'Concealed',
      label: 'Concealed — Neural Network Image Obfuscation',
      tagline: 'Privacy defense prototype that obscures biometric features from facial recognition models while preserving perceptual quality for human eyes.',
      category: 'Computer Vision & AI Privacy',
      timeline: '2024 - 2025',
      status: 'Hackathon Prototype',
      statusType: 'prototype',
      themeClass: 'theme-lavender',
      repoUrl: 'https://github.com/evyjunior704-ship-it',
      isPublicRepo: true,
      tags: ['Python', 'Computer Vision', 'Sobel Edge Filters', 'Node.js', 'Neural Networks', 'PyTorch'],
      problem: 'Automated surveillance engines and facial recognition algorithms scrape public social media images without consent. Traditional privacy techniques (black bars or blurring) ruin photos for personal use. Concealed explores targeted mathematical edge disruptions that confuse machine learning classifiers while remaining unnoticeable to human viewers.',
      role: 'Co-created the core concept during a hackathon, led the front-end user experience, and researched mathematical image decomposition algorithms—analyzing how Sobel horizontal and vertical gradient masks alter feature map activations in convolutional networks.',
      decisions: [
        {
          title: 'Sobel X/Y Edge Frequency Analysis',
          detail: 'Investigated how edge detection disrupts high-frequency facial landmark anchors without degrading overall image contrast.'
        },
        {
          title: 'Client-Side Lightweight Processing',
          detail: 'Kept file sizes compact for rapid web transmission without sending uncompressed biometric portraits to third-party cloud servers.'
        },
        {
          title: 'Feature Vector Perturbation',
          detail: 'Targeted mathematical convolution masks that drastically drop facial embedding cosine similarity in facial recognition networks.'
        }
      ],
      learned: 'Learned how convolutional neural networks extract pixel gradient hierarchies versus human optical perception, and the importance of reproducible testing in computer vision research.',
      schematic: {
        title: 'COMPUTER VISION OBFUSCATION PIPELINE',
        stack: 'Python • PyTorch • Sobel Convolution Masks',
        nodes: [
          { type: 'Input Medium', name: 'Raw Portrait RGB', detail: 'High-Resolution Face Image' },
          { type: 'Decomposition', name: '2D Spatial Convolutions', detail: 'Gradient Intensity Matrix', connector: 'Frequency Splitting' },
          { type: 'Obfuscation Core', name: 'Sobel X/Y Edge Mask', detail: 'Disrupts High-Frequency Biometric Anchors', highlight: true, connector: 'Neural Evasion' },
          { type: 'Classifier Attack', name: 'Facial Model Scrambler', detail: 'Embedding Cosine Similarity Drops < 0.4', connector: 'Alpha Composition' },
          { type: 'Visual Output', name: 'Pristine Human Image', detail: 'Visually Natural & Shareable' }
        ],
        callouts: [
          { label: 'Privacy Defense', value: 'Biometric Landmark Evasion' },
          { label: 'Processing', value: 'Client-Side Lightweight' },
          { label: 'Visual Quality', value: 'Perceptually Pristine' }
        ]
      }
    },
    {
      id: 'phishing',
      index: '03',
      title: 'NLP Phishing Detector',
      label: 'NLP AI Phishing Email Detection Pipeline',
      tagline: 'AI-driven email threat detection combining natural language processing on message bodies with anomaly extraction on SMTP routing headers.',
      category: 'Applied AI & Threat Intelligence',
      timeline: '2025 - Present',
      status: 'In Progress',
      statusType: 'in-progress',
      themeClass: 'theme-coral',
      repoUrl: null,
      isPublicRepo: false,
      tags: ['Python', 'NLP', 'Scikit-Learn', 'Machine Learning', 'JavaFX', 'MIME Parsing'],
      problem: 'Spear-phishing attacks craft targeted social engineering contexts that effortlessly bypass static, rule-based signature filters. Modern threat defense requires semantic linguistic analysis of email intent combined with technical validation of transmission headers.',
      role: 'Developing an NLP classification pipeline in Python utilizing Scikit-Learn tokenizers to analyze message semantics, coupled with an anomaly-detection parser for SMTP routing hops. Engineering a responsive JavaFX desktop alert interface for triage analysis.',
      decisions: [
        {
          title: 'Dual-Signal Feature Extraction',
          detail: 'Parsing body semantic tokens alongside MIME header anomalies to minimize false negatives on novel phishing variants.'
        },
        {
          title: 'Local Offline Inference',
          detail: 'Ensuring sensitive corporate email data is triaged locally without external third-party API exposure.'
        },
        {
          title: 'Analyst Triage Queue UI',
          detail: 'Building a standalone desktop alert interface allowing security analysts to inspect token weights and flagged email phrases in real time.'
        }
      ],
      learned: 'Deepening understanding of feature engineering for imbalanced threat datasets, evaluating token weights, and benchmarking model sensitivity against adversarial evasion.',
      schematic: {
        title: 'DUAL-VECTOR THREAT DETECTION ENGINE',
        stack: 'Python • Scikit-Learn • NLP Tokenizers • JavaFX',
        nodes: [
          { type: 'Inbound Stream', name: 'Raw SMTP Email Stream', detail: 'MIME RFC 5322 Data Payload' },
          { type: 'Dual Parser', name: 'Body & Header Splitter', detail: 'Separates Text Body & Routing Hops', connector: 'Dual Signals' },
          { type: 'Semantic Engine', name: 'NLP Tokenizer & Scikit Model', detail: 'Calculates Social Engineering Risk Weights', highlight: true, connector: 'Feature Fusion' },
          { type: 'Header Inspection', name: 'SPF / DKIM / Hop Anomaly', detail: 'Validates Relay Chain Authenticity', connector: 'Unified Score' },
          { type: 'Analyst UI', name: 'JavaFX Triage Alert', detail: 'Interactive Token & Risk Score Dashboard' }
        ],
        callouts: [
          { label: 'Detection Model', value: 'Semantic NLP + Header Hops' },
          { label: 'Privacy Mode', value: 'Zero Cloud Data Leak' },
          { label: 'Interface', value: 'Desktop JavaFX Queue' }
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
            <span>02 / Selected Case Studies</span>
          </span>
          <h2 className="section-heading">Engineered Systems & Technical Architecture</h2>
          <p className="section-subtext">
            In-depth architectural breakdowns of systems I have built and researched—focusing on defensive boundaries, concurrency controls, and real-world trade-offs.
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
              <h3 className="editorial-block-label">The Engineering Problem</h3>
              <p className="editorial-block-prose">{current.problem}</p>
            </div>

            {/* My Role & Architecture Implementation */}
            <div className="editorial-text-block">
              <h3 className="editorial-block-label">Implementation & My Role</h3>
              <p className="editorial-block-prose">{current.role}</p>
            </div>

            {/* Key Technical Decisions (Fine Rule Divider Layout) */}
            <div className="editorial-text-block">
              <h3 className="editorial-block-label">Key Architectural Decisions</h3>
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
                <span>Explore GitHub Repository</span>
              </a>
            ) : (
              <span className="active-development-tag">
                <span className="live-status-dot" />
                <span>Active Research Prototype</span>
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
