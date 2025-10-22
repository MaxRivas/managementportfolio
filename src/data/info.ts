export const info = {
  baseUrl: "https://management-portfolio.vercel.app",
  name: "Maria Rodriguez",
  jobDescription: "Senior Operations Manager & Strategic Leader",
  about: `I'm an experienced operations manager and strategic leader with over 8 years of experience in driving organizational growth, optimizing processes, and leading high-performing teams. I specialize in digital transformation, change management, and building scalable business operations. My passion lies in turning complex challenges into streamlined solutions that deliver measurable results.`,

  experience: [
    {
      name: "Global Tech Solutions Inc.",
      location: "San Francisco, CA",
      startDate: "Jan 2022",
      endDate: "Present",
      description: [
        "Lead cross-functional teams of 25+ members across product, engineering, and marketing departments",
        "Implemented agile methodologies resulting in 40% faster project delivery and improved team collaboration",
        "Spearheaded digital transformation initiatives that increased operational efficiency by 35%",
        "Managed annual budget of $2.5M and consistently delivered projects under budget and ahead of schedule",
        "Developed and executed strategic plans that contributed to 25% revenue growth year-over-year"
      ],
    },
    {
      name: "Innovation Partners LLC",
      location: "Austin, TX", 
      startDate: "Mar 2019",
      endDate: "Dec 2021",
      description: [
        "Managed operations for a fast-growing startup, scaling from 15 to 75 employees",
        "Established standardized processes and workflows that reduced operational costs by 30%",
        "Led successful implementation of CRM and project management systems across all departments",
        "Coordinated with C-level executives to define company strategy and operational roadmap",
        "Built and mentored management team, with 90% retention rate during rapid growth phase"
      ],
    },
    {
      name: "Strategic Consulting Group",
      location: "Chicago, IL",
      startDate: "Jun 2016",
      endDate: "Feb 2019",
      description: [
        "Consulted with Fortune 500 companies on operational efficiency and change management",
        "Delivered process improvement projects resulting in average cost savings of $500K per client",
        "Facilitated stakeholder workshops and strategic planning sessions",
        "Developed comprehensive business process documentation and standard operating procedures",
        "Trained over 200 employees across multiple organizations on new systems and processes"
      ],
    },
  ],

  education: [
    {
      name: "Stanford University Graduate School of Business",
      location: "Stanford, CA",
      startDate: "2014",
      endDate: "2016", 
      description: [
        "Master of Business Administration (MBA) - Strategy & Operations",
        "Concentration in Organizational Behavior and Leadership",
        "Cumulative GPA: 3.8/4.0"
      ],
    },
    {
      name: "University of California, Berkeley",
      location: "Berkeley, CA",
      startDate: "2010",
      endDate: "2014",
      description: [
        "Bachelor of Science in Industrial Engineering",
        "Minor in Business Administration",
        "Magna Cum Laude, Phi Beta Kappa Honor Society"
      ],
    },
  ],

  skills: [
    { name: "Strategic Planning", level: "Expert", category: "management" },
    { name: "Team Leadership", level: "Expert", category: "management" },
    { name: "Project Management", level: "Expert", category: "management" },
    { name: "Process Improvement", level: "Advanced", category: "management" },
    { name: "Change Management", level: "Advanced", category: "management" },
    { name: "Data Analysis", level: "Advanced", category: "technical" },
    { name: "Agile/Scrum", level: "Advanced", category: "technical" },
    { name: "SQL", level: "Intermediate", category: "technical" },
    { name: "Communication", level: "Expert", category: "soft" },
    { name: "Problem Solving", level: "Expert", category: "soft" },
  ],

  socialMedia: {
    linkedin: "https://www.linkedin.com/in/maria-rodriguez-operations",
    email: "mailto:maria.rodriguez@email.com",
    twitter: "https://twitter.com/mariaops",
    website: "https://mariaoperations.com",
  },

  projects: [
    {
      title: "Digital Transformation Dashboard",
      isFeatured: true,
      thumbnail: "/assets/images/dashboard-project.jpg",
      githubUrl: "https://github.com/mariaops/digital-dashboard",
      liveUrl: "https://digital-dashboard-demo.vercel.app",
      description: "A comprehensive analytics dashboard built to track digital transformation KPIs across multiple business units. Features real-time data visualization and automated reporting.",
      technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"]
    },
    {
      title: "Process Optimization Tool",
      isFeatured: true,
      thumbnail: "/assets/images/process-tool.jpg",
      githubUrl: "https://github.com/mariaops/process-optimizer",
      liveUrl: "https://process-optimizer.netlify.app",
      description: "An interactive tool for mapping and optimizing business processes. Helps teams identify bottlenecks and streamline workflows.",
      technologies: ["Vue.js", "Python", "Flask", "MySQL", "Chart.js"]
    },
    {
      title: "Team Performance Analytics",
      isFeatured: true,
      thumbnail: "/assets/images/analytics-project.jpg",
      githubUrl: "https://github.com/mariaops/team-analytics",
      liveUrl: "https://team-performance-analytics.herokuapp.com",
      description: "A data-driven platform for tracking team productivity, engagement metrics, and performance indicators with predictive analytics.",
      technologies: ["Angular", "TypeScript", "Python", "TensorFlow", "MongoDB"]
    },
    {
      title: "Project Management System",
      isFeatured: false,
      thumbnail: "/assets/images/pm-system.jpg",
      githubUrl: "https://github.com/mariaops/pm-system",
      liveUrl: "https://pm-system-demo.vercel.app",
      description: "Custom project management solution with resource allocation, timeline tracking, and automated progress reporting.",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Redis"]
    },
    {
      title: "Operations KPI Tracker",
      isFeatured: false,
      thumbnail: "/assets/images/kpi-tracker.jpg",
      githubUrl: "https://github.com/mariaops/kpi-tracker",
      liveUrl: "https://ops-kpi-tracker.netlify.app",
      description: "Real-time KPI tracking system for operations teams with customizable metrics and automated alerts.",
      technologies: ["Svelte", "TypeScript", "Firebase", "Chart.js"]
    },
    {
      title: "Change Management Portal",
      isFeatured: false,
      thumbnail: "/assets/images/change-portal.jpg",
      githubUrl: "https://github.com/mariaops/change-portal",
      liveUrl: "https://change-management-portal.herokuapp.com",
      description: "Comprehensive platform for managing organizational changes with stakeholder tracking and communication tools.",
      technologies: ["React", "GraphQL", "Node.js", "MongoDB", "Socket.io"]
    }
  ],
};