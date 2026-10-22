/**
 * ==============================================================================
 * EVY JUNIOR KEMBOU DONGMO - PORTFOLIO DATA ARCHITECTURE
 * Grounded in verified evidence from academic & technical experience.
 * ==============================================================================
 */

export const profileData = {
  identity: {
    fullName: "Evy Junior Kembou Dongmo",
    shortName: "Evy Kembou Dongmo",
    monogram: "EKD",
    role: "Computer Science Student & Developing Software Engineer",
    institution: "University of New Brunswick",
    degree: "Bachelor of Computer Science (BSc), Cybersecurity Specialization",
    expectedGraduation: "Expected May 2028",
    location: "Fredericton, NB, Canada • Open to Relocation & Remote",
    bilingual: "English (Fluent) • French (Fluent) — Fully Bilingual",
    email: "evyjunior704@gmail.com",
    githubUrl: "https://github.com/evyjunior704-ship-it",
    githubUser: "evyjunior704-ship-it",
    linkedinUrl: "https://www.linkedin.com/in/evy-junior-kembou-dongmo",
    linkedinUser: "Evy Junior Kembou Dongmo",
    statusBadge: "BSc Computer Science (Cybersecurity) • UNB",
    
    // Concise professional intro
    heroIntro: "Computer Science student at the University of New Brunswick specializing in cybersecurity. Building backend services with Java and Spring Boot, researching system security, and developing applied machine learning tools."
  },

  about: {
    lead: "Building backend systems, studying security at the protocol level, and writing clear, dependable code.",
    paragraphs: [
      "I am an undergraduate Computer Science student at the University of New Brunswick with a concentration in cybersecurity. My academic focus centers on algorithms, data structures, and operating systems, which I apply directly to software development.",
      "My primary development work is in Java (Spring Boot) and Python. I build services with an emphasis on data integrity, concurrency controls, and defense against OWASP Top 10 vulnerabilities—handling security at the architecture level rather than as a patch.",
      "Outside the terminal, I am fully bilingual in English and French, and I play competitive soccer and basketball."
    ],
    principles: [
      {
        title: "Secure by Design",
        description: "Enforcing session validation, authentication, and least-privilege access at the controller and database layers before deployment."
      },
      {
        title: "Root-Cause Investigation",
        description: "Diagnosing race conditions, memory bounds, and protocol failures down to the system level rather than treating symptoms."
      },
      {
        title: "Direct Technical Communication",
        description: "Articulating architectural decisions and trade-offs concisely in both English and French for technical and non-technical peers."
      }
    ]
  },

  projects: [
    {
      id: "storems",
      title: "StoreMS — Secure Retail Management Architecture",
      subtitle: "Multi-store inventory management with transactional integrity and OWASP Top 10 mitigation.",
      status: "Completed",
      year: "2025",
      category: "Backend & Secure Software",
      githubUrl: "https://github.com/evyjunior704-ship-it",
      isPublicRepo: true,
      tags: ["Java 21", "Spring Boot", "PostgreSQL", "Spring Data JPA", "Thymeleaf", "BCrypt"],
      summary: "Designed and directed development of a complete retail management system engineered with strict secure-by-design principles, transactional concurrency controls, and store-scoped multi-tenancy.",
      problem: "Small-to-medium retail operations face critical stock race conditions during concurrent checkouts and frequent web vulnerability exposure (account enumeration, privilege escalation, and broken access controls).",
      myRole: "Sole software developer and designer: architected the relational database schema, built Spring Boot service controllers, implemented authentication, and conducted security validation.",
      keyChallenge: "Preventing stock race conditions during simultaneous customer purchases while isolating store data strictly by the authenticated principal—never trusting user-supplied store ID parameters.",
      technicalDecisions: [
        {
          decision: "Store-Scoped Principal Isolation",
          rationale: "All queries derive store scope solely from the authenticated session token, eliminating Insecure Direct Object References (IDOR / OWASP A01 Broken Access Control)."
        },
        {
          decision: "BCrypt Hashing with Work Factor 10",
          rationale: "Resistant to offline rainbow table attacks, paired with generic login error responses to completely prevent user enumeration."
        },
        {
          decision: "ACID Transactional Checkout Service",
          rationale: "Spring @Transactional boundaries with database row locking ensure inventory deductions and order creation succeed atomically or roll back completely."
        },
        {
          decision: "Server-Side Reporting Pipeline",
          rationale: "Engineered an OpenPDF generation routine for managers to export audit logs and daily transaction records securely server-side."
        }
      ],
      learnedAndNext: "Learned the subtleties of Jakarta Bean Validation on composite JPA entities and synchronizer token CSRF defense. Next step is containerizing the stack with Docker and adding automated integration tests."
    },
    {
      id: "concealed",
      title: "Concealed — Neural Network Image Obfuscation",
      subtitle: "Privacy defense tool obscuring biometric facial recognition features against mass surveillance.",
      status: "Hackathon Project",
      year: "2024 - 2025",
      category: "Computer Vision & AI Privacy",
      githubUrl: "https://github.com/evyjunior704-ship-it",
      isPublicRepo: true,
      tags: ["Python", "PyTorch", "Node.js", "Sobel Filter", "Computer Vision"],
      summary: "Co-developed an image obfuscation tool that applies lightweight neural network transformations to hide micro-biometric features targeted by automated surveillance while keeping images pristine to human eyes.",
      problem: "Automated facial recognition systems scrape social media and public web spaces without user consent. Traditional blurring or pixelation makes images unusable for personal sharing.",
      myRole: "Co-created the project concept, led front-end interface development, and researched mathematical image decomposition algorithms to improve model effectiveness.",
      keyChallenge: "Balancing the disruption of convolutional neural network feature maps with human perceptual quality while keeping output image sizes small for rapid web transmission.",
      technicalDecisions: [
        {
          decision: "Sobel Gradient Edge Decomposition",
          rationale: "Studied how Sobel X and Sobel Y gradient edge detection filters disrupt high-frequency biometric landmarks analyzed by facial recognition classifiers."
        },
        {
          decision: "Lightweight Client Architecture",
          rationale: "Kept the processing lightweight so users could obfuscate photos without transmitting uncompressed raw biometric data to an untrusted cloud server."
        }
      ],
      learnedAndNext: "Gained hands-on insight into how computer vision models interpret pixel gradients versus human visual perception. Future improvements include testing against adversarial evasion benchmarks."
    },
    {
      id: "phishing-nlp",
      title: "NLP AI Phishing Email Detection Pipeline",
      subtitle: "Machine learning classifier for proactive email threat triage and desktop hazard scoring.",
      status: "In Progress",
      year: "2025 - Present",
      category: "Threat Intelligence & NLP",
      githubUrl: "https://github.com/evyjunior704-ship-it",
      isPublicRepo: false,
      tags: ["Python", "Natural Language Processing", "Machine Learning", "JavaFX"],
      summary: "Developing an AI-driven email analysis application that tokenizes incoming messages, extracts suspicious header metadata, and scores phishing probability before credential harvesting can occur.",
      problem: "Spear-phishing attacks deceive conventional rule-based spam filters through urgent emotional cues, homoglyph domains, and spoofed routing headers.",
      myRole: "Sole developer: designing data preprocessing pipelines, evaluating text classification models against open phishing corpora, and building a JavaFX desktop dashboard for risk scoring.",
      keyChallenge: "Minimizing false negatives—missing a targeted spear-phishing attack carries vastly higher risk than flagging an ambiguous marketing message.",
      technicalDecisions: [
        {
          decision: "Multi-Feature Header & Body Extraction",
          rationale: "Combining body tokenization (NLP) with header anomaly detection (SPF/DKIM inspection markers and reply-to mismatches)."
        },
        {
          decision: "JavaFX Native Desktop Interface",
          rationale: "Building a standalone desktop alert interface allowing security analysts to inspect token weights and flagged email phrases in real time."
        }
      ],
      learnedAndNext: "Deepening understanding of feature engineering for imbalanced threat datasets. Currently benchmarking classification models to balance inference latency with detection sensitivity."
    }
  ],

  skills: {
    categories: [
      {
        id: "languages",
        name: "Programming Languages",
        items: [
          { name: "Java", context: "Applied in StoreMS (Java 21, Spring Boot), JavaFX UI, and coursework algorithms" },
          { name: "Python", context: "Used for NLP phishing models, computer vision edge detection, and security scripting" },
          { name: "Bash / Shell", context: "Linux server administration, automation scripts, and lab diagnostics" },
          { name: "JavaScript", context: "Front-end interface development, DOM interaction, and web tooling" }
        ]
      },
      {
        id: "backend",
        name: "Backend & Systems",
        items: [
          { name: "Spring Boot", context: "REST controllers, dependency injection, service layer architecture" },
          { name: "Spring Data JPA", context: "Entity modeling, composite keys, foreign-key relationships" },
          { name: "PostgreSQL & MySQL", context: "Relational database schema design, ACID transactions, data isolation" },
          { name: "Linux (Ubuntu)", context: "Command-line navigation, system hardening, service management" }
        ]
      },
      {
        id: "security",
        name: "Security & AppSec Practices",
        items: [
          { name: "OWASP Top 10 Defense", context: "Addressing Broken Access Control (A01), Cryptographic Failures (A02), Auth Failures (A07)" },
          { name: "Authentication & RBAC", context: "BCrypt password hashing, session tokens, store-scoped permission models" },
          { name: "CSRF & Input Validation", context: "Synchronizer token defense, Jakarta Bean Validation, parameterized queries" },
          { name: "Hands-on CTF Labs", context: "Network exploitation, system hardening, and diagnostics via TryHackMe & Hack The Box" }
        ]
      },
      {
        id: "tools",
        name: "Developer Tools",
        items: [
          { name: "Git & GitHub", context: "Version control, branching, code reviews, and project collaboration" },
          { name: "IDEs", context: "IntelliJ IDEA, VS Code, Eclipse for Java and Python development" },
          { name: "AI-Assisted Workflow", context: "Reviewing and refining code with modern tooling (Claude Code, Omniroute)" }
        ]
      }
    ]
  },

  education: {
    institution: "University of New Brunswick",
    degree: "Bachelor of Computer Science (BSc)",
    specialization: "Cybersecurity Specialization",
    timeline: "Expected Graduation: May 2028",
    location: "Fredericton, NB, Canada",
    relevantCoursework: [
      { code: "CS 2413", name: "Information Security", description: "Cryptographic fundamentals, threat modeling, network security protocols, OWASP principles" },
      { code: "CS 2043", name: "Software Engineering", description: "Design patterns, architectural separation, testing methodologies, team collaboration" },
      { code: "CS 1083", name: "Data Structures & Algorithms", description: "Algorithm analysis, trees, graphs, sorting algorithms, memory complexity" },
      { code: "CS 1073", name: "Computer Science I (Java)", description: "Object-oriented programming, inheritance, polymorphism, encapsulation" },
      { code: "MATH 1003", name: "Calculus I", description: "Mathematical foundations and analytical reasoning" }
    ],
    certifications: [
      { name: "CompTIA Security+", status: "In Progress (Targeted 2027)", relevance: "Industry-standard baseline for threat detection, cryptography, and enterprise security posture" },
      { name: "AWS Certified Cloud Practitioner", status: "Planned", relevance: "Cloud infrastructure fundamentals, shared responsibility model, and cloud security" }
    ]
  },

  interests: {
    technicalDirection: [
      "Secure software architecture and building resilient enterprise backend services",
      "Operating system internals, Linux kernel mechanics, and low-level system security",
      "Applied machine learning for threat intelligence and privacy-preserving algorithms"
    ],
    athleticsAndTeamwork: {
      sports: "Competitive Soccer & Basketball",
      summary: "Playing competitive team sports trains rapid tactical decision-making under intense pressure, consistent physical and mental discipline, and the instinct to put team cohesion above personal vanity—qualities that directly translate to incident triage and cross-functional engineering teams."
    }
  }
};

export const NAV_TABS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Technical Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

export default profileData;

