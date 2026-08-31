export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const navCta = { label: "Get in touch", href: "#contact" };

export const hero = {
  greeting: "Hello, I'm",
  firstName: "Darshan",
  lastName: "Desale",
  subtitle:
    "I build exceptional digital experiences that feel fast, cinematic, and unforgettable.",
  primaryCta: { label: "Explore My Work", href: "#projects" },
  secondaryCta: { label: "Download CV", href: "/certifications/DarshanDesale.pdf" },
  chips: ["Full Stack", "React + Spring Boot", "Open for Freelance", "Open to Opportunities"],
  floatingTop: { title: "Next Project", value: "AI Agent's" },
  floatingBottom: { title: "Currently", value: "completed The full stack hospital management system" },
  floatingOpportunity: { title: "", value: "" },
  socialLinks: [
    { label: "in", href: "https://www.linkedin.com/in/darshandesale" },
    { label: "gh", href: "https://github.com/Darshannn007" },
    { label: "lc", href: "https://leetcode.com/u/Darshann_07/" },
  ],
  scrollHint: "Scroll Down",
};

export const stats = [
  { value: "3+", label: "Years of academic Experience" },
  { value: "6+", label: "Projects Completed" },
  { value: "15+", label: "Core Technologies" },
];

export const about = {
  eyebrow: "About Me",
  title: "Full Stack Java Developer Crafting immersive web experiences with REACT & Spring-Boot",
  subtitle:
    "Most of my time goes into making sure the UI feels good to use smooth transitions, no janky loading states but I don't let that distract from the backend. Every animation you see is running on a Spring Boot API I've actually load-tested.",
  cta: { label: "More About Me", href: "#contact" },
  card: {
    title: "Design + Engineering",
    description:
      "I combine strong visual systems with scalable architecture so every pixel feels intentional.",
  },
  badges: ["UI Systems", "Motion Design", "API Integrations","Database Relation"],
};

export const facts = [
  { title: "Problem Solver", detail: "Engineering clarity from complexity" },
  { title: "API Architect", detail: "Building robust RESTful architectures" },
  { title: "Performance Focused", detail: "Every millisecond matters" },
  { title: "Continuous Learner", detail: "Learning. Building. Improving." },
];

export const projectsSection = {
  eyebrow: "My Work",
  title: "Featured Projects",
  subtitle: "A few recent builds that push interaction and storytelling.",
  cta: { label: "View All Projects", href: "#projects" },
};

export const projects = [
  {
    title: "Hospital Management System",
    description:
      "A scalable full stack Hospital Management System designed to streamline hospital operations including patient management, appointment scheduling, doctor workflows, and secure medical record handling through modern UI and robust backend architecture.",
    features: [
      "Secure JWT-based Authentication & Authorization",
      "Role-Based Access for Admins, Doctors, and Patients",
      "Appointment Booking & Scheduling System",
      "Patient Record & Medical History Management",
      "Doctor Dashboard & Schedule Monitoring",
      "RESTful API Architecture",
      "Responsive and Modern User Interface",
      "CRUD Operations for Hospital Resources",
      "Scalable Backend Architecture using Spring Boot",
      "Optimized MySQL Database Integration",
      "Reusable React Component Structure",
      "Protected Routes & Secure API Communication",
    ],
    tags: [
      "Java",
      "Spring Boot",
      "REST API",
      "MySQL",
       "JWT",
       "Spring-Security",
       "React.JS",
       "JavaScript",
       "Tailwind CSS",    
    ],
    // accent: "#20c997",
    liveLink: "https://hospital-management-system-0frk.onrender.com/",
    githubLink: "https://github.com/Darshannn007/Hospital-management-system.git",
  },
  {
  title: "E-Commerce Application",

  description:
    "A scalable full stack E-Commerce platform designed to deliver seamless online shopping experiences with secure authentication, product management, cart functionality, order processing, and responsive modern UI powered by robust backend architecture.",

  features: [
    "Secure JWT-based Authentication & Authorization",
    "Role-Based Access for Admins and Users",
    "Dynamic Product Listing & Category Filtering",
    "Shopping Cart & Checkout Functionality",
    "Order Management & Tracking System",
    "RESTful API Architecture",
    "Responsive and Modern User Interface",
    "CRUD Operations for Products & Categories",
    "Secure Payment Ready Backend Structure",
    "Optimized MySQL Database Integration",
    "Reusable React Component Structure",
    "Protected Routes & Secure API Communication",
  ],

  tags: [
    "Java",
    "Spring Boot",
    "REST API",
    "MySQL",
    "JWT",
    "Spring-Security",
    "React.JS",
    "JavaScript",
    "Tailwind CSS",
  ],

  // accent: "#8B5CF6",

  liveLink: "",

  githubLink: "https://github.com/Darshannn007/E-commerce-Application.git",
}
];

export const skillsSection = {
  eyebrow: "My Expertise",
  title: "Skills & Technologies",
  subtitle: "Tools and stacks I love working with for high-impact products.",
  // tabs: ["All", "Frontend", "Backend", "Databases", "Tools", "Core CS"],
};

export const skills = [
  { name: "React.js", type: "Frontend" },
  { name: "JavaScript", type: "Frontend" },
  { name: "HTML5", type: "Frontend" },
  { name: "CSS3", type: "Frontend" },
  { name: "Tailwind CSS", type: "Frontend" },
  { name: "GSAP", type: "Frontend" },
  { name: "Framer Motion", type: "Frontend" },
  { name: "Responsive Design", type: "Frontend" },
  { name: "Java", type: "Backend" },
  { name: "Spring Boot", type: "Backend" },
  { name: "Spring Security", type: "Backend" },
  { name: "REST APIs", type: "Backend" },
  { name: "JWT Authentication", type: "Backend" },
  { name: "Hibernate / JPA", type: "Backend" },
  { name: "MySQL", type: "Databases" },
  { name: "SQL", type: "Databases" },
  { name: "DBMS", type: "Core CS" },
  { name: "Operating Systems", type: "Core CS" },
  { name: "Computer Networks", type: "Core CS" },
  { name: "System Design", type: "Core CS" },
  { name: "Git", type: "Tools" },
  { name: "GitHub", type: "Tools" },
  { name: "Postman", type: "Tools" },
  { name: "Docker", type: "Tools" },
  { name: "VS Code", type: "Tools" },
  { name: "IntelliJ IDEA", type: "Tools" },
];

export const experienceSection = {
  eyebrow: "Certifications",
  title: "Certification Highlights",
  subtitle:
    "Verified training and hands-on practice. Open to full-time roles, internships, and freelance opportunities.",
  highlight: "Open to Opportunities",
};

export const timeline = [
  {
    year: "Feb 2025 - Aug 2025",
    role: "Full Stack Java Developer",
    company: "Brilliance Foundation",
    details:
      "Completed a structured full-stack program covering Java, Spring Boot, REST APIs, and project delivery.",
    linkLabel: "View Certificate",
    link: "/certifications/FullStackWebDeveloper.pdf",
  },
  {
    year: "14 May 2025",
    role: "Virtual Internship",
    company: "Forage",
    details:
      "Completed a virtual internship experience focused on real-world workflows and deliverables.",
    linkLabel: "View Certificate",
    link: "/certifications/CamscannerIntern.pdf",
  },
];

export const contactSection = {
  eyebrow: "Get In Touch",
  title: "Let's Work Together",
  subtitle:
    "Have a project idea or want to collaborate? Drop a message and let's build something legendary.",
  availability: "Available for Freelance & Full-time Roles",
  details: [
    {
      type: "email",
      label: "Email",
      value: "darshandesale143@gmail.com",
      href: "mailto:darshandesale143@gmail.com",
    },
    {
      type: "phone",
      label: "Phone",
      value: "+91 9157461505",
      href: "tel:+919157461505",
    },
    {
      type: "location",
      label: "Location",
      value: "Maharashtra, India",
      href: "https://maps.google.com/?q=Maharashtra,India",
    },
  ],
};

export const reviewsSection = {
  title: "What people say",
  subtitle: "// from clients & teammates",
};

export const reviews = [
  {
    quote: "Darshan understood the brief in one call and the dashboard he built handles way more data than we expected without slowing down.",
    name: "Adarsh Singh",
    role: "Doctor, Hospital managenent System",
  },
  {
    quote: "He's the rare dev who cares as much about how the UI feels as whether the API is fast. Rare combination on a small team.",
    name: "Jayesh Bagul",
    role: "CO-Engineer",
  },
  {
    quote: "Communicated clearly through the whole project and delivered ahead of the deadline. Would hire again.",
    name: "Shantanu patil",
    role: "Freelance project",
  },
];

export const footerData = {
  brand: "Darshan Desale",
  role: "Full Stack Java Developer",
  tagline: "Building clean, cinematic & scalable web applications with React & Spring Boot.",
  status: "Open to Opportunities",
  copyright: "© 2026 Darshan Desale. All rights reserved.",
  builtWith: "Crafted with React, Vite & Modern CSS",
};

export const footerText = "© 2026 Darshan Desale. All rights reserved.";

