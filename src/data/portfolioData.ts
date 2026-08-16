import { Project, SkillCategory, ExperienceItem, CertificationItem, AchievementItem, GithubRepo } from '../types';

export const personalInfo = {
  name: "Randhir Gupta",
  role: "Cybersecurity Engineer in Progress. Builder. Researcher. Developer.",
  titleSignature: "Cybersecurity • Cloud • AI/ML • Web Development",
  status: "Open to internships & technical opportunities",
  email: "randhirgupta9876@gmail.com",
  github: "https://github.com/randhirrauniyar",
  linkedin: "https://www.linkedin.com/in/randheer-gupta-668935330?",
  resumePath: "/resume.pdf",
  bio: "Third-year B.Tech Computer Science and Business Systems (CSBS) student with a passion for proactive cybersecurity defense, cloud infrastructure security, and applied machine learning in network threat detection. Constantly building real-world projects and researching encrypted traffic classification.",
  education: {
    degree: "B.Tech in Computer Science and Business Systems (CSBS)",
    status: "3rd Year Undergraduate",
    focus: "Cybersecurity, Cloud Architectures, and Applied Intelligence",
  },
  metrics: [
    { label: "Academic Standing", value: "3rd Year", subtitle: "B.Tech CSBS" },
    { label: "Primary Domain", value: "Cybersecurity", subtitle: "Defensive & Network Sec" },
    { label: "Technical Focus", value: "Cloud + AI", subtitle: "AWS & Applied ML" },
    { label: "Research Vector", value: "TLS Fingerprinting", subtitle: "JA3 / JA4 Analysis" },
  ],
};

export const projectsData: Project[] = [
  {
    id: "tls-fingerprinting",
    title: "TLS Fingerprinting for Malicious Traffic Detection",
    category: ["Cybersecurity", "AI/ML"],
    featured: true,
    shortDescription:
      "Research-focused cybersecurity project exploring TLS fingerprinting techniques such as JA3 and JA4 to identify malicious encrypted network traffic without decrypting the traffic.",
    fullDescription:
      "Modern malware and Command & Control (C2) servers utilize encrypted TLS channels to bypass perimeter firewalls and intrusion detection systems. This research develops a non-intrusive threat classification pipeline using Zeek network logs, extracting JA3/JA4 cryptographic fingerprints and TLS extension vectors, and feeding engineered features into gradient boosted trees to classify malicious vs benign flows with high precision without breaking payload privacy.",
    technologies: [
      "Python",
      "Zeek",
      "JA3",
      "JA4",
      "Machine Learning",
      "LightGBM",
      "Random Forest",
      "Network Security",
      "Wireshark",
    ],
    problemSolved:
      "Over 90% of web traffic is encrypted, blinding traditional Deep Packet Inspection (DPI). TLS Fingerprinting inspects the cryptographic negotiation parameters during the unencrypted Client Hello phase to identify the client application fingerprint without requiring SSL/TLS interception or private keys.",
    keyFeatures: [
      "Automated extraction of JA3, JA3S, and JA4 hash representations from live PCAP and Zeek flow logs",
      "Vectorized cipher suite ordering, TLS extensions, supported elliptic curves, and point formats",
      "Supervised ML classification pipeline using LightGBM and Random Forest for zero-day malware variant clustering",
      "High-throughput analysis without decrypting sensitive user payloads",
    ],
    architecture: [
      "Client Initiates TLS Handshake",
      "Zeek Captures Client Hello & Server Hello Metadata",
      "JA3 / JA4 Extractor Generates Cryptographic Hash",
      "Feature Engineering Pipeline Formats Vector Matrix",
      "LightGBM / Random Forest Classifier Infers Threat Likelihood",
      "Real-time Telemetry & Security Alert Dispatch",
    ],
    githubUrl: "https://github.com/randhirrauniyar/TLS-Cyber-Dashboard",
    liveDemoUrl: "#research",
    image: "/images/projects/tls-research.svg",
    securityFocus: "Network Threat Intelligence & Encrypted Flow Classification",
  },
  {
    id: "enc-cloud-storage",
    title: "ENC Cloud Storage",
    category: ["Cloud", "Web Development", "Cybersecurity"],
    shortDescription:
      "A cloud-oriented secure file storage project designed around modern web technologies and cloud concepts.",
    fullDescription:
      "A robust, scalable cloud storage architecture designed to secure user assets. Implements secure client-side and transit encryption protocols, granular access control, AWS S3 backend object storage partitioning, and an intuitive web management dashboard for seamless file uploads and permission management.",
    technologies: [
      "AWS S3",
      "React",
      "TypeScript",
      "Node.js",
      "CloudFront",
      "Encryption",
      "Tailwind CSS",
    ],
    problemSolved:
      "Centralized cloud data storage often suffers from unsecured transfer channels and weak access isolation. ENC Cloud Storage enforces strict multi-tenant bucket policies and authenticated pre-signed URL architectures.",
    keyFeatures: [
      "Secure pre-signed URL generation for direct-to-S3 encrypted uploads",
      "Granular file access control and shareable tokenized URLs",
      "Responsive file explorer with real-time preview and metadata inspection",
      "Integrated AWS cloud storage principles with fast asset distribution",
    ],
    githubUrl: "https://github.com/randhirrauniyar/enc-cloud-storage",
    liveDemoUrl: "https://github.com/randhirgupta/enc-cloud-storage",
    image: "/images/projects/enc-cloud.svg",
    securityFocus: "Data Protection, Object Storage & Cloud Access Management",
  },
  {
    id: "ai-market-demand-predictor",
    title: "AI Market Demand Predictor",
    category: ["AI/ML"],
    shortDescription:
      "Machine-learning project designed to analyze data and predict market demand patterns.",
    fullDescription:
      "A predictive analytics system leveraging machine learning time-series decomposition and regression algorithms to forecast inventory and market demand variations based on multidimensional economic indicators.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Jupyter",
    ],
    problemSolved:
      "Eliminates supply chain inefficiencies and stock shortages through algorithmic demand forecasting.",
    keyFeatures: [
      "Data preprocessing, normalization, and lag-feature extraction",
      "Multi-model evaluation (Random Forest Regressor, Gradient Boosting)",
      "Interactive evaluation metrics (RMSE, MAE, R² score visualizers)",
    ],
    githubUrl: "https://github.com/randhirrauniyar/AI-Market-Demand-Predictor",
    image: "/images/projects/market-demand.svg",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Cybersecurity & Defenses",
    iconName: "ShieldCheck",
    description: "Hands-on defensive security, packet inspection, and framework compliance.",
    skills: [
      { name: "TLS Fingerprinting (JA3 / JA4)", level: "Research Focus" },
      { name: "Zeek Network Security Monitor", level: "Practitioner" },
      { name: "Wireshark Packet Analysis", level: "Practitioner" },
      { name: "Kali Linux", level: "Practitioner" },
      { name: "Nmap Network Scanning", level: "Practitioner" },
      { name: "Burp Suite", level: "Exploring" },
      { name: "OWASP Top 10", level: "Core" },
      { name: "NIST Cybersecurity Framework", level: "Core" },
      { name: "ISO 27001 Fundamentals", level: "Core" },
    ],
  },
  {
    title: "Cloud Infrastructure",
    iconName: "Cloud",
    description: "Cloud architecture, storage partitions, and network routing on AWS.",
    skills: [
      { name: "AWS S3", level: "Practitioner" },
      { name: "AWS EBS", level: "Practitioner" },
      { name: "AWS EFS", level: "Practitioner" },
      { name: "AWS CloudFront", level: "Practitioner" },
      { name: "AWS Route 53", level: "Practitioner" },
      { name: "AWS Direct Connect", level: "Exploring" },
      { name: "Cloud Security Best Practices", level: "Core" },
    ],
  },
  {
    title: "Programming Languages",
    iconName: "Code2",
    description: "Core languages for systems, scripting, automation, and data processing.",
    skills: [
      { name: "Python", level: "Practitioner" },
      { name: "Java", level: "Practitioner" },
      { name: "JavaScript", level: "Practitioner" },
      { name: "TypeScript", level: "Practitioner" },
      { name: "C", level: "Core" },
      { name: "R", level: "Exploring" },
      { name: "SQL", level: "Core" },
    ],
  },
  {
    title: "Web Development",
    iconName: "Globe",
    description: "Modern component-driven web applications and client engineering.",
    skills: [
      { name: "React", level: "Practitioner" },
      { name: "Angular", level: "Exploring" },
      { name: "Vite", level: "Practitioner" },
      { name: "HTML5 & Semantic UI", level: "Core" },
      { name: "CSS3 & Tailwind CSS", level: "Practitioner" },
      { name: "RESTful API Integration", level: "Core" },
    ],
  },
  {
    title: "Data Science & AI/ML",
    iconName: "Cpu",
    description: "Machine learning workflows for classification, modeling, and analytics.",
    skills: [
      { name: "Scikit-learn", level: "Practitioner" },
      { name: "Pandas & NumPy", level: "Practitioner" },
      { name: "LightGBM & Random Forest", level: "Research Focus" },
      { name: "Matplotlib & Seaborn", level: "Practitioner" },
      { name: "Supervised Learning", level: "Core" },
      { name: "Anomaly Detection", level: "Exploring" },
    ],
  },
  {
    title: "Developer Tools & Environment",
    iconName: "Terminal",
    description: "Version control, shell scripting, and engineering toolchains.",
    skills: [
      { name: "Git & GitHub", level: "Core" },
      { name: "Linux / Bash Shell", level: "Practitioner" },
      { name: "VS Code", level: "Core" },
      { name: "Jupyter Notebooks", level: "Practitioner" },
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-servicenow",
    role: "ServiceNow University Virtual Internship",
    organization: "ServiceNow",
    period: "2026",
    type: "Virtual Internship",
    description: [
      "Completed comprehensive virtual training in enterprise workflow automation, IT service management (ITSM), and platform governance.",
      "Gained hands-on exposure to cloud application configuration, security controls, and enterprise system integration patterns.",
    ],
    technologies: ["ServiceNow Platform", "ITSM", "Cloud Workflows", "Enterprise Security"],
    highlight: "Enterprise Cloud & Automation",
  },
  {
    id: "exp-netrinix",
    role: "Cybersecurity & AI Campus Ambassador",
    organization: "Netrinix Academy",
    period: "2026",
    type: "Ambassadorship",
    description: [
      "Representing the institution to promote cybersecurity awareness, student-led tech initiatives, and AI adoption best practices.",
      "Coordinating peer workshops on practical network defense, safe computing habits, and modern artificial intelligence applications.",
    ],
    technologies: ["Cybersecurity Evangelism", "Community Leadership", "AI Literacy", "Threat Awareness"],
    highlight: "Leadership & Community Outreach",
  },
  {
    id: "exp-reccsar",
    role: "Web Development Internship",
    organization: "Reccsar Pvt Ltd",
    period: "Practical Experience",
    type: "Internship",
    description: [
      "Contributed to frontend web application development, building responsive UI components and ensuring cross-browser compatibility.",
      "Collaborated with the engineering team to optimize client performance, semantic structure, and interactive web modules.",
    ],
    technologies: ["JavaScript", "HTML5/CSS3", "Responsive UI", "Web Standards"],
    highlight: "Production Web Development",
  },
  {
    id: "exp-beeskilled",
    role: "Cloud Computing with AWS Internship",
    organization: "Beeskilled",
    period: "Practical Experience",
    type: "Internship",
    description: [
      "Gained structured practical experience across foundational Amazon Web Services architecture, cloud storage paradigms, and virtual networking.",
      "Configured secure S3 buckets, evaluated EBS and EFS storage tiers, and explored CloudFront content delivery and Route 53 domain management.",
    ],
    technologies: ["AWS S3", "AWS EC2/EBS", "CloudFront", "Route 53", "Cloud Security"],
    highlight: "AWS Cloud Infrastructure",
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-cisco",
    title: "Junior Cybersecurity Analyst Career Path",
    issuer: "Cisco Networking Academy",
    date: "Credential Verified",
    skills: ["Network Security", "Threat Intelligence", "Incident Response", "Packet Analysis"],
    credentialId: "CISCO-JRCYBER-VERIFIED",
    credentialUrl: "https://www.netacad.com/profile",
    image: "/images/certificates/cisco-cyber.svg",
  },
  {
    id: "cert-servicenow",
    title: "ServiceNow Platform Fundamentals",
    issuer: "ServiceNow University",
    date: "Credential Verified",
    skills: ["Enterprise Workflows", "ITSM", "System Administration"],
    credentialId: "SNOW-UNIV-CRED",
    credentialUrl: "https://profile.servicenow.com/now/cuam/user-profile-detail/myProfile/NL",
    image: "/images/certificates/servicenow.svg",
  },
  {
    id: "cert-google",
    title: "Google Learning & Cloud Technical Credentials",
    issuer: "Google Skills Program",
    date: "Credential Verified",
    skills: ["Cloud Concepts", "Data Fundamentals", "Applied Technology"],
    credentialId: "GOOGLE-SKILL-CRED",
    credentialUrl: "https://www.skills.google/",
    image: "/images/certificates/google-cert.svg",
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: "ach-research",
    title: "TLS Encrypted Traffic Classification Research",
    category: "Research",
    description: "Conducting active independent research on JA3 and JA4 fingerprint extraction for privacy-preserving malware detection in encrypted streams.",
    tags: ["Zeek", "JA3/JA4", "LightGBM", "Network Security"],
    iconName: "Microscope",
  },
  {
    id: "ach-sdg13",
    title: "SDG 13 Climate Technology Initiative",
    category: "Initiative",
    description: "Designed a data-driven web portal mapping environmental telemetry and UN Climate Action metrics to promote sustainability awareness.",
    tags: ["UN SDG 13", "Data Science", "Web Development"],
    iconName: "Globe2",
  },
  {
    id: "ach-community",
    title: "Technical Community & Open Source Exploration",
    category: "Community",
    description: "Active participant in student developer communities, cybersecurity labs, CTF challenges, and open-source software building.",
    tags: ["Open Source", "CTF Practice", "Developer Network"],
    iconName: "Users",
  },
];

export const githubReposData: GithubRepo[] = [
  {
    name: "tls-fingerprinting-malicious-traffic",
    description: "Non-decrypting malicious TLS traffic classification pipeline utilizing Zeek, JA3/JA4 extraction, and gradient boosting.",
    language: "Python",
    stars: 18,
    forks: 4,
    topics: ["cybersecurity", "ja3-fingerprinting", "zeek", "network-security", "machine-learning"],
    updatedAt: "Active Research",
    url: "https://github.com/randhirrauniyar/TLS-Cyber-Dashboard",
  },
  {
    name: "enc-cloud-storage",
    description: "Secure multi-tenant cloud storage platform with AWS S3 integration, pre-signed upload security, and modern React dashboard.",
    language: "TypeScript",
    stars: 12,
    forks: 3,
    topics: ["aws-s3", "cloud-security", "react", "typescript", "secure-storage"],
    updatedAt: "Recent Build",
    url: "https://github.com/randhirrauniyar/enc-cloud-storage",
  },
  {
    name: "market-demand-predictor",
    description: "Time-series predictive analytics system for economic and product demand forecasting.",
    language: "Jupyter / Python",
    stars: 7,
    forks: 1,
    topics: ["machine-learning", "forecasting", "pandas", "data-science"],
    updatedAt: "Updated",
    url: "https://github.com/randhirrauniyar/AI-Market-Demand-Predictor",
  },
];
