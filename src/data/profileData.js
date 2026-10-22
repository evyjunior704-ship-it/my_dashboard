/**
 * EVY JUNIOR KEMBOU DONGMO - PORTFOLIO DATA
 * Computer Science Student (Cybersecurity Specialization) at UNB
 */

export const profileData = {
  identity: {
    fullName: "Evy Junior Kembou Dongmo",
    shortName: "Evy Kembou Dongmo",
    monogram: "EKD",
    role: "Computer Science Student (Cybersecurity)",
    institution: "University of New Brunswick",
    degree: "Bachelor of Computer Science (BSc), Cybersecurity Specialization",
    expectedGraduation: "Expected May 2028",
    location: "Fredericton, NB, Canada • Open to Relocation & Remote",
    bilingual: "English & French — Fully Bilingual",
    email: "evyjunior704@gmail.com",
    githubUrl: "https://github.com/evyjunior704-ship-it",
    githubUser: "evyjunior704-ship-it",
    linkedinUrl: "https://www.linkedin.com/in/evy-junior-kembou-dongmo-451528351/",
    linkedinUser: "Evy Junior Kembou Dongmo",
    resumeUrl: `${import.meta.env.BASE_URL}Resume_Software_Development.docx`,
    statusBadge: "2nd-Year BSc Computer Science • UNB",
    
    // Simple, natural student intro
    heroIntro: "I'm a second-year Computer Science student at the University of New Brunswick focusing on cybersecurity. I enjoy building backend projects with Java and Spring Boot, learning about network and system security, and working on practical machine learning tools."
  },

  about: {
    lead: "Building solid backend projects, learning how software security works under the hood, and writing clean, reliable code.",
    paragraphs: [
      "I'm an undergraduate Computer Science student at the University of New Brunswick in Fredericton with a specialization in cybersecurity. In my courses, I study data structures, algorithms, and computer systems, and I love applying what I learn directly to hands-on software projects.",
      "Most of my coding is in Java (Spring Boot) and Python. When building applications, I focus on solid data flow, handling concurrent transactions, and keeping security in mind from day one—like preventing race conditions during checkout and stopping common web vulnerabilities such as broken access controls and injection attacks.",
      "Outside of classes and coding, I'm completely bilingual in English and French, and you can usually find me playing competitive soccer or basketball."
    ],
    principles: [
      {
        title: "Security from Day One",
        description: "Checking permissions, sanitizing user inputs, and keeping sensitive operations properly authenticated rather than treating security as an afterthought."
      },
      {
        title: "Digging Into the Cause",
        description: "Taking time to understand why bugs, concurrency issues, or errors happen at the system level instead of just applying surface-level fixes."
      },
      {
        title: "Clear Communication",
        description: "Explaining technical choices, design trade-offs, and code clearly and simply in both English and French."
      }
    ]
  },

  projects: [
    {
      id: "storems",
      title: "StoreMS — Store Management System",
      subtitle: "Multi-store inventory and retail management built with Java, Spring Boot, and PostgreSQL.",
      status: "Completed",
      year: "2025",
      category: "Backend & Web Security",
      githubUrl: "https://github.com/evyjunior704-ship-it/store-Management-System",
      isPublicRepo: true,
      tags: ["Java 21", "Spring Boot", "PostgreSQL", "Spring Data JPA", "Thymeleaf", "BCrypt", "OpenPDF"],
      summary: "A store management system built to handle inventory, multiple store locations, and sales checkout safely without stock conflicts or unauthorized access.",
      problem: "Small retail stores often run into inventory errors when multiple customers try to buy the last item in stock at once. In addition, weak web setups can allow users to view other stores' confidential sales simply by modifying IDs in the URL.",
      myRole: "Sole developer: designed the relational PostgreSQL schema, wrote Spring Boot controllers and business services, implemented secure authentication, and tested against common web vulnerabilities.",
      keyChallenge: "Preventing stock count race conditions during simultaneous checkouts and ensuring store managers can only access data belonging to their own store.",
      technicalDecisions: [
        {
          decision: "Session-Based Store Access",
          rationale: "Store IDs are derived strictly from the authenticated login session—never from URL parameters that users could manipulate—preventing broken access control (IDOR)."
        },
        {
          decision: "BCrypt Password Hashing",
          rationale: "Used BCrypt hashing with work factor 10 and consistent login error messages so attackers cannot guess or enumerate valid usernames."
        },
        {
          decision: "Transactional Checkout Flow",
          rationale: "Wrapped checkout in Spring's @Transactional with database row locks so inventory deductions and order creation always complete together safely or roll back."
        },
        {
          decision: "PDF Report Generation",
          rationale: "Built a server-side PDF export with OpenPDF so managers can download daily transaction summaries and audit logs directly."
        }
      ],
      learnedAndNext: "Learned a lot about how database transactions, entity relationships, and form validation work in Spring Boot. Next step is containerizing with Docker and adding integration tests."
    },
    {
      id: "concealed",
      title: "Concealed — Image Privacy Tool",
      subtitle: "A privacy tool that subtly alters images to confuse facial recognition models while looking natural to humans.",
      status: "Hackathon Project",
      year: "2024 - 2025",
      category: "Computer Vision & Privacy",
      githubUrl: "https://github.com/evyjunior704-ship-it",
      isPublicRepo: true,
      tags: ["Python", "PyTorch", "Sobel Filter", "Node.js", "Computer Vision"],
      summary: "Co-developed during a hackathon to explore how targeted mathematical image filters can protect personal photos from automated web scrapers without making them look blurry or distorted.",
      problem: "Facial recognition systems scrape public photos across the web without consent. Traditional privacy fixes like blurring or black bars protect identity, but make photos ugly and unshareable.",
      myRole: "Co-created the project concept with teammates, built the front-end user interface, and researched how edge-detection filters affect facial recognition feature detection.",
      keyChallenge: "Finding the sweet spot where facial recognition classifiers fail to recognize key facial landmarks, while the image still looks clear and natural to friends and family.",
      technicalDecisions: [
        {
          decision: "Sobel Edge Filters",
          rationale: "Researched how applying Sobel gradient edge filters disrupts the high-frequency facial landmark points that facial recognition models rely on."
        },
        {
          decision: "Lightweight Processing",
          rationale: "Kept processing efficient so images could be processed quickly without requiring heavy cloud servers."
        }
      ],
      learnedAndNext: "Gained practical insight into how computer vision models interpret pixel gradients versus human eyesight, and had fun working with a fast-paced hackathon team."
    },
    {
      id: "phishing-nlp",
      title: "Phishing Email Detector",
      subtitle: "Machine learning classifier combining email body text analysis with header inspection to catch phishing attacks.",
      status: "In Progress",
      year: "2025 - Present",
      category: "Machine Learning & Security",
      githubUrl: "https://github.com/evyjunior704-ship-it/Phishing_detector",
      isPublicRepo: true,
      tags: ["Python", "Natural Language Processing", "Scikit-Learn", "JavaFX", "MIME Parsing"],
      summary: "Building an email analysis tool that scans incoming messages, checks email headers for spoofing anomalies, and calculates a phishing risk score before anyone clicks a bad link.",
      problem: "Spear-phishing emails often trick basic spam filters by using emotional language, disguised sender domains, and spoofed routing headers.",
      myRole: "Sole developer: designing the preprocessing pipeline in Python, evaluating classification models on open phishing datasets, and building a JavaFX desktop interface to inspect flagged emails.",
      keyChallenge: "Minimizing false positives while making sure genuine phishing attempts don't slip through unnoticed.",
      technicalDecisions: [
        {
          decision: "Checking Both Body and Headers",
          rationale: "Combining text tokenization (NLP) with header anomaly checks (like SPF/DKIM flags and sender mismatches) provides a much stronger signal."
        },
        {
          decision: "JavaFX Desktop App",
          rationale: "Created a desktop UI so users can view flagged emails, inspect which phrases triggered the warning, and see the risk breakdown in real time."
        }
      ],
      learnedAndNext: "Learning a lot about feature engineering and working with imbalanced security datasets. Currently refining the model's accuracy on newer phishing formats."
    }
  ],

  skills: {
    categories: [
      {
        id: "languages",
        name: "Programming Languages",
        items: [
          { name: "Java", context: "Used in StoreMS (Java 21, Spring Boot), JavaFX desktop tools, and university coursework" },
          { name: "Python", context: "Used for phishing detection models, computer vision edge detection, and security scripts" },
          { name: "Bash / Shell", context: "Linux command line, automation scripts, and server navigation" },
          { name: "JavaScript", context: "Front-end UI development, DOM interaction, and web applications" }
        ]
      },
      {
        id: "backend",
        name: "Backend & Databases",
        items: [
          { name: "Spring Boot", context: "REST APIs, dependency injection, and clean service-layer design" },
          { name: "Spring Data JPA", context: "Database entity modeling, relationships, and queries with Hibernate" },
          { name: "PostgreSQL & MySQL", context: "Database schema design, queries, and transactional data integrity" },
          { name: "Linux (Ubuntu)", context: "Command-line navigation, system administration, and development environment setup" }
        ]
      },
      {
        id: "security",
        name: "Security & AppSec",
        items: [
          { name: "OWASP Top 10 Awareness", context: "Preventing broken access control, SQL injection, and security misconfigurations" },
          { name: "Authentication & Permissions", context: "BCrypt password hashing, session management, and role-based access" },
          { name: "Input Validation & CSRF", context: "Sanitizing user inputs, form validation tokens, and parameterized queries" },
          { name: "Hands-on CTF Labs", context: "Practicing network and system defense fundamentals on TryHackMe and Hack The Box" }
        ]
      },
      {
        id: "tools",
        name: "Developer Tools",
        items: [
          { name: "Git & GitHub", context: "Version control, branching, pull requests, and collaborative code management" },
          { name: "IDEs", context: "IntelliJ IDEA, VS Code, and Eclipse for daily Java and Python development" },
          { name: "Development Workflow", context: "Using modern developer tooling and AI pair-programming to write and review code" }
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
      { code: "CS 2413", name: "Information Security", description: "Cryptography basics, threat modeling, network security, and secure coding" },
      { code: "CS 2043", name: "Software Engineering", description: "Software design, architecture, teamwork, and testing" },
      { code: "CS 1083", name: "Data Structures & Algorithms", description: "Trees, graphs, sorting algorithms, and time/space complexity" },
      { code: "CS 1073", name: "Computer Science I (Java)", description: "Object-oriented programming, classes, inheritance, and polymorphism" },
      { code: "MATH 1003", name: "Calculus I", description: "Analytical problem solving and mathematical foundations" }
    ],
    certifications: [
      { name: "CompTIA Security+", status: "Currently Studying (Targeted 2027)", relevance: "Broad baseline for threat analysis, networking basics, and security concepts" },
      { name: "AWS Certified Cloud Practitioner", status: "Planned", relevance: "Cloud fundamentals, services, and cloud security architecture" }
    ]
  },

  interests: {
    technicalDirection: [
      "Building reliable backend web services and clean APIs",
      "Learning operating system concepts, Linux administration, and network security",
      "Applying machine learning to practical cybersecurity problems like phishing detection"
    ],
    athleticsAndTeamwork: {
      sports: "Competitive Soccer & Basketball",
      summary: "Playing competitive soccer and basketball keeps me active, disciplined, and comfortable making fast decisions under pressure. It also reinforces the value of team chemistry and clear communication—habits that carry directly over into group coding projects and troubleshooting under deadlines."
    }
  }
};

export const NAV_TABS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

export default profileData;
