export const personalInfo = {
  name: 'Vivaan Sandeep Ojha',
  shortName: 'Vivaan Ojha',
  title: 'Senior Software Engineer',
  tagline: 'Building scalable, secure, cloud-native full-stack applications',
  location: 'Mumbai, India',
  phone: '+91 8097690289',
  email: 'vivaanojha33@gmail.com',
  availability: 'Immediate Joiner',
  linkedin: 'https://www.linkedin.com/in/vivaan-ojha-23b850136/',
  github: 'https://github.com/vivaanojha33-sys',
  resumeUrl: '/resume.pdf',
  yearsOfExperience: 7,
};

export const summary = `Senior Software Engineer with 7+ years of experience designing and developing scalable, secure, and high-performance full-stack applications across Insurance, Banking, and Pharmaceutical domains. Proficient in Node.js, TypeScript, React.js, React Native, Express.js, NestJS, and microservices architecture, with expertise in REST API development, enterprise integrations, and distributed systems. Experienced in building cloud-native solutions on AWS and Azure, implementing secure authentication, encryption, messaging, and containerized deployments. Passionate about delivering production-grade applications with a strong focus on performance, scalability, reliability, and clean architecture in Agile environments.`;

export const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'React Native', 'Redux', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Material-UI', 'Hooks', 'Axios'],
    icon: 'layout',
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'NestJS', 'Microservices', 'REST APIs', 'JWT Auth', 'Middleware', 'TypeORM'],
    icon: 'server',
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'BigQuery', 'Mongoose', 'Aggregation Framework'],
    icon: 'database',
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS (EC2, ECS, S3, Lambda)', 'Azure (AKS, Blob, APIM)', 'Docker', 'Kubernetes', 'CI/CD', 'Serverless'],
    icon: 'cloud',
  },
  {
    title: 'Security & Integration',
    skills: ['AES-256 Encryption', 'GCP KMS', 'MSAL / Azure AD', 'Apigee', 'API Security', 'Token-based Auth'],
    icon: 'shield',
  },
  {
    title: 'Tools & Languages',
    skills: ['Git', 'Postman', 'Prometheus', 'Swagger', 'ESLint', 'Husky', 'JavaScript', 'TypeScript', 'Python'],
    icon: 'wrench',
  },
];

export const experiences = [
  {
    id: 'neosoft-ageas',
    company: 'NeoSOFT Technologies',
    client: 'Ageas Federal',
    role: 'Senior Software Engineer',
    period: 'May 2026 – Present',
    location: 'Remote / Mumbai',
    project: 'ACE (OTG Next)',
    description:
      'Enterprise cross-platform insurance sales platform enabling lead management, Financial Needs Analysis, policy onboarding, underwriting, premium collection, document management, and servicing across Android, iOS, and Web through Azure-based microservices.',
    highlights: [
      'Led full-stack development of ACE (OTG Next) with shared React Native codebase across Android, iOS, and Web',
      'Designed Node.js + TypeScript microservices for Core, Opportunity, New Business, and Payment domains',
      'Implemented Azure AD (MSAL) authentication with JWT, refresh tokens, and RBAC authorization',
      'Integrated enterprise services via APIM — payment gateways, eKYC, OCR, CRM, and document management',
      'Built secure document workflows with Azure Blob Storage, SAS URLs, and PDF generation',
      'Automated background jobs on AKS with Helm, Docker, Swagger/OpenAPI, and Application Insights',
    ],
    tech: ['React Native', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Azure', 'Docker', 'Kubernetes'],
  },
  {
    id: 'neosoft-hdfc',
    company: 'NeoSOFT Technologies',
    client: 'HDFC Life',
    role: 'Senior Software Engineer',
    period: 'May 2025 – May 2026',
    location: 'Remote / Mumbai',
    project: 'InstaPRL',
    description:
      "HDFC Life's digital agent recruitment and onboarding platform supporting PRL, Digital FC, PoSP, and PTE journeys with complete lifecycle management from registration to appointment kit generation.",
    highlights: [
      'Built secure REST APIs with Node.js, Express.js, MongoDB, and PostgreSQL',
      'Implemented AES-256 encryption with GCP KMS and integrated CIBIL, Sinch SMS, Apigee, and Payment Gateway',
      'Architected Non-CIBIL Scoring Engine using weighted algorithms and MongoDB Aggregation Pipelines',
      'Designed event-driven microservices with AWS SNS/SQS, DLQ, and Lambda scheduled jobs',
      'Engineered RBAC with JWT tokens and AWS S3 pre-signed URL document workflows',
      'Built React.js admin dashboards with Redux, Material-UI for operational reporting',
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Redis', 'Material-UI'],
  },
  {
    id: 'accenture-merck',
    company: 'Accenture',
    client: 'MERCK',
    role: 'Web Developer Analyst',
    period: 'Nov 2020 – May 2024',
    location: 'Mumbai',
    project: 'Pharmaceutical Enterprise Applications',
    description:
      'Contributed to enterprise pharmaceutical applications by developing responsive React.js frontends and integrating Node.js-based backend services for desktop, iPad, and mobile platforms.',
    highlights: [
      'Built React.js applications with Hooks, Redux, custom hooks, HOCs, lazy loading, and code splitting',
      'Developed responsive cross-platform interfaces for desktop, iPad, and mobile devices',
      'Integrated secure REST APIs and built Node.js/Express.js/MongoDB backend services',
      'Delivered end-to-end features including CRUD modules and Razorpay payment gateway integration',
      'Created dynamic enterprise templates using Veeva Vault and Pug (Jade)',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'JavaScript'],
  },
  {
    id: 'sutherland',
    company: 'Sutherland Global Services',
    client: null,
    role: 'Tech Associate',
    period: 'Jan 2018 – Apr 2020',
    location: 'Mumbai',
    project: 'Enterprise Production Support',
    description:
      'Provided L2 production support for enterprise applications, ensuring high system availability within SLA timelines.',
    highlights: [
      'Troubleshot production incidents and resolved application issues within SLA',
      'Executed PostgreSQL/SQL queries for data validation and production data fixes',
      'Performed RCA through log analysis and collaborated with development teams',
      'Supported Salesforce CRM operations and created technical documentation',
    ],
    tech: ['PostgreSQL', 'Salesforce', 'SQL', 'Production Support'],
  },
];

export const projects = [
  {
    id: 'loan-management',
    title: 'Loan Management System',
    description:
      'Full-stack loan management application with role-based access for admin and users. Handles authentication, loan workflows, and dashboard operations with a modern responsive UI deployed on Vercel.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    liveUrl: 'https://loan-management-green.vercel.app/',
    githubUrl: 'https://github.com/vivaanojha33-sys/loan_management',
    tags: ['React', 'Node.js', 'Authentication', 'Vercel', 'Full-Stack'],
    featured: true,
    priority: 1,
  },
  {
    id: 'the-breaktime',
    title: 'The Break Time',
    description:
      'Interactive web application with secure sign-in, polished UI, and seamless user experience. Built for engagement and deployed on Netlify with production-ready performance.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    liveUrl: 'https://thebreaktime.netlify.app/',
    githubUrl: 'https://github.com/vivaanojha33-sys/TheBreakTime',
    tags: ['React', 'Netlify', 'Authentication', 'Responsive UI'],
    featured: true,
    priority: 2,
  },
  {
    id: 'priya-astro',
    title: 'Priya Astro Wide — Astrology & Numerology',
    description:
      'Expert Vedic astrology, numerology, tarot, and Reiki guidance platform with personalized spiritual consultations. Fast, mobile-optimized experience with elegant cosmic UI deployed on Vercel.',
    image: 'https://images.unsplash.com/photo-1419242902214-272b403eb451?w=800&q=80',
    liveUrl: 'https://priya-astro-wide.vercel.app/',
    githubUrl: 'https://github.com/vivaanojha33-sys/AstroWorld',
    tags: ['React', 'Vercel', 'Responsive UI', 'Spiritual Tech'],
    featured: true,
    priority: 3,
  },
  {
    id: 'melodia',
    title: 'Melodia — Musical Instrument Marketplace',
    description:
      'Dynamic musical instrument marketplace with React, Express, and MongoDB. Features PayPal integration, Redux state management, customizable price sliders, and secure checkout with intuitive navigation.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
    liveUrl: 'https://melodia-instruments.onrender.com',
    githubUrl: 'https://github.com/vivaanojha33/melodia',
    tags: ['React', 'Express.js', 'MongoDB', 'Redux', 'PayPal'],
    featured: true,
  },
  {
    id: 'blogsphere',
    title: 'BlogSphere — MERN Blog Platform',
    description:
      'Secure MERN stack blog application with user authentication, responsive CRUD for blogs and comments, form validation, and optimized state management for a seamless reading and writing experience.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
    liveUrl: 'https://blogsphere-mern.onrender.com',
    githubUrl: 'https://github.com/vivaanojha33/blogsphere',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    featured: true,
  },
  {
    id: 'stylehub',
    title: 'StyleHub — Clothing E-Commerce',
    description:
      'Innovative clothing e-commerce platform harnessing React for dynamic UIs, Express for server-side operations, MongoDB for scalable storage, and PayPal for secure transactions with Redux-powered cart management.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    liveUrl: 'https://stylehub-ecommerce.onrender.com',
    githubUrl: 'https://github.com/vivaanojha33/stylehub',
    tags: ['React', 'Express.js', 'MongoDB', 'Redux', 'PayPal'],
    featured: true,
  },
  {
    id: 'ace-platform',
    title: 'ACE (OTG Next) — Insurance Sales Platform',
    description:
      'Enterprise cross-platform insurance sales platform with lead management, FNA, policy onboarding, underwriting, premium collection, and document management across mobile and web via Azure microservices.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    liveUrl: null,
    githubUrl: null,
    tags: ['React Native', 'Node.js', 'TypeScript', 'Azure', 'PostgreSQL'],
    featured: false,
    enterprise: true,
  },
  {
    id: 'instaprl',
    title: 'InstaPRL — Agent Onboarding Platform',
    description:
      "HDFC Life's digital agent recruitment platform managing PRL, Digital FC, PoSP, and PTE journeys with scoring engines, payment processing, and operational reporting.",
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    liveUrl: null,
    githubUrl: null,
    tags: ['React.js', 'Node.js', 'AWS', 'MongoDB', 'PostgreSQL'],
    featured: false,
    enterprise: true,
  },
];

export const education = [
  {
    degree: "Master's in Information Technology",
    institution: 'Mumbai University',
    period: '2022 – 2024',
    highlight: 'Graduated with Distinction',
  },
  {
    degree: "Bachelor's in Information Technology",
    institution: 'Mumbai University',
    period: '2013 – 2016',
    highlight: null,
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const stats = [
  { label: 'Years Experience', value: '7+' },
  { label: 'Domains', value: '3' },
  { label: 'Tech Stack', value: '25+' },
  { label: 'Enterprise Projects', value: '5+' },
];
