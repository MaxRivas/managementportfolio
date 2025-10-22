export const info = {
  baseUrl: "https://management-portfolio.vercel.app",
  name: "Maximiliano (Max) Rivas",
  jobDescription: "Director of Engineering",
  about: `Visionary engineering leader with 7+ years of experience driving innovation and delivering enterprise-scale, cloud-native software solutions in SaaS environments. Expert in leading multiple agile teams, shaping technical direction, and aligning product delivery with strategic business outcomes. Passionate about mentoring high-performing teams, championing modern engineering practices, and leveraging AI and automation to scale impact. Adept at fostering a culture of accountability, continuous improvement, and customer-centric excellence while managing stakeholder relationships and guiding process transformation.`,

  experience: [
    {
      name: "In Time Tec",
      location: "Meridian, ID",
      startDate: "May 2023",
      endDate: "October 2025",
      jobTitle: "Director of Engineering",
      description: [
        "Spearheaded automation programs for financial accounting, contractual development, RFP responses, and project tracking which improved operational efficiency by 25%.",
        "Managed and delivered two AI projects for Idaho agencies: a financial rule management chatbot and a predictive tool for child safety recommendations using Microsoft AI tools.",
        "Championed a culture of innovation by launching internal incubator programs and cross-functional innovation labs in key business areas such as DevOps, AI, and ML.",
        "Lead recruiting, hiring, and onboarding processes, providing input on merit increases and building a diverse, high-performing team resulting in a 20% escalation reduction and 5% revenue increase.",
        "Increased velocity by 10% of engineering teams by encouraging creation of reusable components.  Projects based on various technologies: React, WordPress, PowerApps, User Interface, Azure Pipelines, and User Experience.",
        "Facilitated seminars with engineers to promote a culture centered on learning, growth, constructive feedback, and transparency.  Seminars helped to identify emerging leaders which support company growth.",
        "Partnered with the Sales team to scope and define deliverables for a new client based in Latin America in accordance with company revenue objectives of $200,000 within 5 months.",
        "Secured a new $1.2 million contract over 18 months by identifying growth opportunities in key accounts focus on Microsoft PowerApps, Dataverse, Power BI."
      ],
    },
    {
      name: "In Time Tec",
      location: "Meridian, ID",
      startDate: "February 2020",
      endDate: "April 2023",
      jobTitle: "Technical Account Manager",
      description: [
        "Oversaw up to 9 enterprise accounts simultaneously with more than 70 engineers in the USA and India utilizing a variety of technologies.",
        "Held monthly and quarterly business reviews with partners to present updates, gather feedback, present progress on road maps, KPI metrics, and recommendations for blockers.",
        "Reduced support escalations by 15% through proactive issue tracking and technical enablement.",
        "Achieved a 95% customer retention rate by fostering strong relationships and delivering consistent value.",
        "Served as the escalation contact for significant incidents, while working with engineering and support teams to coordinate responses."
      ],
    },
    {
      name: "HP Inc.",
      location: "Boise, ID",
      startDate: "January 2018",
      endDate: "January 2019",
      jobTitle: "R&D Manager",
      description: [
        "Scrum master responsible for defining requirements, tracking velocity, identifying and removing roadblocks, and advocating for customers.",
		    "Managed a budget to ensure critical resources and quality are maintained which resulted in $75,000 savings.",
	      "Innovated a test suite to categorize and identify key performance issues.  Analyzed data which translated in a performance increase of 25% while saving $1.5M on infrastructure costs and customer escalations.",
	      "Managed a fully remote team and collaborated with stakeholders to ensure knowledge was absorbed as a SaaS application reached end of life.",
	      "Fostered quality change management by building strong and strategic relationships among the team members, promoting engineers, and coaching a growth mindset across the team. This resulted in a 13% improvement in team morale and quality indicators.",
	      "Influenced and aligned upper management to allocate funding and equipment so each member of the mobile development team can possess cross functional skills. Maximized the team’s overall skills which resulted in faster velocity and supported employees’ career goals."
      ],
    },
    {
      name: "HP Inc.",
      location: "Boise, ID",
      startDate: "February 2010",
      endDate: "December 2017",
      jobTitle: "Senior Software Engineer / Technical Lead",
      description: [
        "Developed a custom printing application for The Church of Latter-Day Saints to gain a contract worth $5M.",
	      "Innovated and executed a plugin framework to support third party vendors for policy management, cloud on-ramps applications, and identity management providers to enable stickiness and revenue of $175,000 annually for 3 years.",
	      "Built a custom solution to utilize the newest SaaS software which won a new contract valued at $825,000 from a competitor.",
	      "Implemented and delivered a custom automation framework for windows print drivers, reducing the time for testing from 6 months to 1 month and increase automated testing by 50%.",
	      "Generated a Device Companion App (DCA) for HP printers to support the new sandbox infrastructure introduced on Windows 8 to ensure drivers will work with new architecture.",
	      "Worked with Technical Architects to design a custom test automation framework which allowed windows print drivers to be tested at business and logic layers.",
	      "Technical leader and Scrum master for 10 engineers distributed across the world."
      ]
    },
  ],

  education: [
    {
      name: "University of California, Los Angeles",
      location: "Westwood, CA",
      startDate: "September 2007",
      endDate: "December 2009",
      description: [
        "Bachelor of Science",
        "Computer Science and Engineering",
      ],
    },
    {
      name: "Los Angeles Valley College",
      location: "Valley Glen, CA",
      startDate: "January 2005",
      endDate: "June 2007",
      description: [
        "Dean's List 2006-2007",
      ],
    },
    {
      name: "Los Angeles Mission College",
      location: "Sylmar, CA",
      startDate: "August 2001",
      endDate: "June 2007",
      description: [
        "ESL Certificate",
        "GED Certification",
        "Dean's List 2005-2006",
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
    linkedin: "https://www.linkedin.com/in/maximiliano-a-rivas/",
    email: "mailto:maxanzor13@gmail.com",
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