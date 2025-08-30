import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail, ExternalLink, Calendar, MapPin, Award, BookOpen, Briefcase, GraduationCap, FileText, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample data - Replace with your actual data from CV
  const profileData = {
    name: "MAATI Manal",
    title: "Data Scientist & Software Engineering Student", // Updated with your actual title
    email: "your.email@email.com", // Update with your actual email
    phone: "+1 234 567 890", // Update with your actual phone
    location: "Rabat, Morocco", // Updated with your actual location
    linkedin: "https://linkedin.com/in/yourprofile", // Update with your actual LinkedIn
    github: "https://github.com/yourusername", // Update with your actual GitHub
    about: "Motivated 3rd year engineering student, specialized in Information Systems and Digital Transformation (ISITD) at the School of Information Sciences (ESI) Rabat (post-CPGE training). Passionate about software engineering, data science, and artificial intelligence, with practical experience in web application development, machine learning model creation, and database system design.",
    cvUrl: "/api/download/cv" // This will be your Spring Boot endpoint
  };

  const experience = [
    {
      id: 1,
      position: "Machine Learning Intern", // Updated with your actual position
      company: "AI Safety Systems", // Update with your actual company name
      period: "2023 - 2024", // Updated with your actual period
      location: "Rabat, Morocco", // Updated with your actual location
      description: [
        "Developed an AI-based detection system for monitoring Personal Protective Equipment (PPE) compliance in production environments",
        "Performed data preprocessing, model training, and performance evaluation using Python and YOLOv8",
        "Contributed to workplace safety improvement through real-time automated detection of PPE compliance"
      ]
    },
    {
      id: 2,
      position: "Full-Stack Development Intern", // Added new position
      company: "Mohammed VI Foundation for the Promotion of Social Works in Education-Training", // Added company name
      period: "2023", // Update with your actual period
      location: "Rabat, Morocco", // Updated with your actual location
      description: [
        "Worked on the ISTIHQAQ scholarship management system within the Digital Transformation Department",
        "Designed and developed web applications using Java and Spring Boot",
        "Implemented user authentication, registration, and login functionalities"
      ]
    },
    {
      id: 3,
      position: "Data Scientist – Virtual Experience", // Added new position
      company: "Forage", // Added company name
      period: "2023", // Update with your actual period
      location: "Virtual", // Virtual experience
      description: [
        "Completed a virtual program in applied data science for business strategy",
        "Built predictive models and performed exploratory data analysis (EDA) with Python",
        "Gained experience in data-driven decision making in strategic consulting context"
      ]
    },
    {
      id: 4,
      position: "Data Analyst – Job Simulation", // Added new position
      company: "Forage", // Added company name
      period: "2023", // Update with your actual period
      location: "Virtual", // Virtual experience
      description: [
        "Performed data analysis and visualizations using Power BI",
        "Designed data models to support decision-making"
      ]
    },
    // Add more experience entries as needed
  ];

  const education = [
    {
      id: 1,
      degree: "Engineering Diploma in Information Systems and Digital Transformation", // Updated with your actual degree
      institution: "School of Information Sciences (ESI), Rabat", // Updated with your actual institution
      period: "2023 - Present", // Updated with your actual period
      description: "Specialized in Information Systems and Digital Transformation (ISITD) - Post-CPGE training" // Updated with your actual description
    },
    {
      id: 2,
      degree: "CPGE - Classes Préparatoires aux Grandes Écoles (MP)", // Added new entry
      institution: "CPGE Moulay Idriss, Fès", // Added institution name
      period: "2021 - 2023", // Added period
      description: "Preparatory Classes for Grandes Écoles - Mathematics and Physics track" // Added description
    },
    {
      id: 3,
      degree: "Baccalauréat in Physical Sciences (French Option)", // Added new entry
      institution: "High School", // Added institution name
      period: "2021", // Added period
      description: "High School Diploma in Physical Sciences with French curriculum" // Added description
    },

    // Add more education entries as needed
  ];

  const projects = [
    {
      id: 1,
      title: "Predictive Modeling and EDA for Strategic Insights", // Updated with your actual project title
      description: "Implementation of exploratory data analysis and construction of predictive models for decision-making", // Updated with your actual description
      technologies: ["Python", "Power BI", "Machine Learning"], // Updated with your actual technologies
      githubUrl: "https://github.com/yourusername/predictive-modeling", // Update with your actual GitHub URL
      liveUrl: "", // Update with your actual live URL if available
      reportUrl: "/api/reports/predictive-modeling-report.pdf", // Update with your actual report URL
      highlights: [
        "Exploratory Data Analysis (EDA) for strategic insights", // Updated with your actual highlights
        "Predictive model construction for decision-making", // Updated with your actual highlights
        "Data visualization and reporting with Power BI" // Updated with your actual highlights
      ]
    },
    {
      id: 2,
      title: "Real-time PPE Detection System", // Added new project
      description: "Development of an AI system to detect personal protective equipment using computer vision", // Added description
      technologies: ["Python", "YOLOv8", "Computer Vision", "AI/ML"], // Added technologies
      githubUrl: "https://github.com/yourusername/ppe-detection", // Update with your actual GitHub URL
      liveUrl: "", // Update with your actual live URL if available
      reportUrl: "/api/reports/ppe-detection-report.pdf", // Update with your actual report URL
      highlights: [
        "Real-time object detection using YOLOv8", // Added highlights
        "AI-powered PPE compliance monitoring", // Added highlights
        "Computer vision implementation for workplace safety" // Added highlights
      ]
    },
    {
      id: 3,
      title: "Power BI Dashboards", // Added new project
      description: "Design of interactive dashboards to support data-driven decision making", // Added description
      technologies: ["Power BI", "Data Visualization", "Business Intelligence"], // Added technologies
      githubUrl: "", // Update with your actual GitHub URL if available
      liveUrl: "", // Update with your actual live URL if available
      reportUrl: "/api/reports/powerbi-dashboards-report.pdf", // Update with your actual report URL
      highlights: [
        "Interactive data visualization dashboards", // Added highlights
        "Business intelligence and analytics", // Added highlights
        "Data-driven decision support systems" // Added highlights
      ]
    },
    {
      id: 4,
      title: "Chhiwat Dar – Mobile Application", // Added new project
      description: "Development of a mobile application offering Moroccan recipes with modern web technologies", // Added description
      technologies: ["React", "Spring Boot", "Mobile Development", "Java"], // Added technologies
      githubUrl: "https://github.com/yourusername/chhiwat-dar", // Update with your actual GitHub URL
      liveUrl: "https://chhiwat-dar.com", // Update with your actual live URL if available
      reportUrl: "/api/reports/chhiwat-dar-report.pdf", // Update with your actual report URL
      highlights: [
        "React frontend for mobile-responsive design", // Added highlights
        "Spring Boot backend with RESTful APIs", // Added highlights
        "Moroccan cuisine recipe management system" // Added highlights
      ]
    },
    {
      id: 5,
      title: "Pac-Man Game in C (SDL2 library)", // Added new project
      description: "Creation of a Pac-Man clone with advanced game development concepts", // Added description
      technologies: ["C", "SDL2", "Game Development", "Data Structures"], // Added technologies
      githubUrl: "https://github.com/yourusername/pacman-c", // Update with your actual GitHub URL
      liveUrl: "", // Update with your actual live URL if available
      reportUrl: "/api/reports/pacman-game-report.pdf", // Update with your actual report URL
      highlights: [
        "Event management and game loop implementation", // Added highlights
        "Graphical rendering with SDL2 library", // Added highlights
        "Advanced data structures and algorithms" // Added highlights
      ]
    },
    // Add more projects as needed
  ];

  const certifications = [
    {
      id: 1,
      name: "Your Certification Name", // Update with your actual certification
      issuer: "Certification Issuer", // Update with your actual issuer
      date: "2023", // Update with your actual date
      credentialUrl: "https://verification.url" // Update with your actual verification URL
    },
    // Add more certifications as needed
  ];

  const skills = {
    "Software Engineering": ["Web Development", "Machine Learning", "AI Solutions"],
    "Programming Languages": ["C", "Python", "Java", "PHP", "SQL", "PL/SQL", "XML", "JavaScript", "R", "Scala", "Prolog"],
    "Data Science & AI": ["Machine Learning", "Deep Learning", "Data Analysis", "Data Visualization", "EDA", "Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    "AI & ML": ["Object Detection", "Real-time Processing", "Predictive Models"],
    "Technologies & Frameworks": ["Spring Boot", "React"],
    "Web Development": ["HTML", "CSS"],
    "Database Systems": ["MySQL", "Microsoft Access", "PostgreSQL"],
    "Tools & Technologies": ["Git", "VS Code", "Database Systems"],
    "Design & UI/UX": ["Figma"]
  };
  
  const languages = [
    {
      id: 1,
      language: "English",
      level: "Fluent",
      flag: "🇺🇸"
    },
    {
      id: 2,
      language: "French", 
      level: "Fluent",
      flag: "🇫🇷"
    },
    {
      id: 3,
      language: "Arabic",
      level: "Fluent", 
      flag: "🇲🇦"
    }
  ];

  const activities = [
    {
      id: 1,
      title: "Datacamp Student",
      role: "Following Data Science and Machine Learning training",
      period: "2024 – 2025",
      organization: "Datacamp"
    },
    {
      id: 2,
      title: "CODE ESI",
      role: "Sponsorship Manager",
      period: "2024 – 2025",
      organization: "CODE ESI"
    },
    {
      id: 3,
      title: "CODE ESI",
      role: "Member of Technical and Events Cell",
      period: "2023 – 2024",
      organization: "CODE ESI"
    }
  ];
  

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV_MAATIMANAL(2).pdf'; // must match public folder
    link.download = 'CV_MAATI_MANAL.pdf'; // name when downloaded
    document.body.appendChild(link); // append to DOM
    link.click(); // trigger download
    document.body.removeChild(link); // clean up
  };
  
  

  const openProjectReport = (reportUrl) => {
    window.open(reportUrl, '_blank');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
         <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800">
      {/* Progress Bar */}
             <div className="fixed top-0 left-0 w-full h-1 bg-blue-200 z-50">
        <div 
           className="h-full bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
             <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-40 border-b border-blue-300/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
                              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  MM
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
               {['home', 'about', 'experience', 'education', 'languages', 'activities', 'projects', 'certifications', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                                       className="capitalize hover:text-blue-600 transition-colors duration-300 text-gray-700"
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
                       <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-blue-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
                {['home', 'about', 'experience', 'education', 'languages', 'activities', 'projects', 'certifications', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                    className="block w-full text-left px-3 py-2 capitalize hover:text-blue-600 transition-colors duration-300 text-gray-700"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-700/10 animate-pulse" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
             <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              {profileData.name}
            </span>
          </h1>
                     <p className="text-2xl md:text-3xl text-gray-600 mb-8">{profileData.title}</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
                         <a href={`mailto:${profileData.email}`} className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition-colors">
              <Mail size={20} />
              <span>{profileData.email}</span>
            </a>
             <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-lg">
              <MapPin size={20} />
              <span>{profileData.location}</span>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" 
                className="p-3 bg-blue-500/20 rounded-full hover:bg-blue-500/30 transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href={profileData.github} target="_blank" rel="noopener noreferrer"
                className="p-3 bg-blue-500/20 rounded-full hover:bg-blue-500/30 transition-all hover:scale-110">
              <Github size={24} />
            </a>
          </div>

          <a
            href="/CV_MAATI_MANAL.pdf"
            download="CV_MAATI_MANAL.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105 text-white"
          >
            <Download size={20} />
            Download CV
          </a>
          
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
           <ChevronDown size={32} className="text-blue-600" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
             <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
           <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-300/50 shadow-lg">
             <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {profileData.about}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                 <div key={category} className="bg-blue-50/80 rounded-xl p-6 border border-blue-200">
                   <h3 className="text-xl font-semibold mb-4 text-blue-700">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, index) => (
                       <span key={index} className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
             <section id="experience" className="py-20 px-4 bg-blue-50/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
             <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
               <div key={exp.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-300/50 hover:border-blue-400/70 transition-all shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                     <h3 className="text-2xl font-semibold text-blue-700">{exp.position}</h3>
                     <p className="text-lg text-gray-700">{exp.company}</p>
                  </div>
                   <div className="flex items-center gap-4 text-gray-600 mt-2 md:mt-0">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, index) => (
                     <li key={index} className="flex items-start gap-2 text-gray-700">
                       <span className="text-blue-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu) => (
                <div key={edu.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-300/50 hover:border-blue-400/70 transition-all shadow-lg">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      <GraduationCap size={24} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                      <h3 className="text-xl font-semibold text-blue-700 mb-1">{edu.degree}</h3>
                      <p className="text-lg text-gray-700 mb-2">{edu.institution}</p>
                      <p className="text-sm text-gray-600 mb-2">{edu.period}</p>
                      <p className="text-gray-700">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-blue-50/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-300/50 hover:border-blue-400/70 transition-all hover:transform hover:scale-105 shadow-lg">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-500/20 rounded text-xs text-blue-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-1 mb-4">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors text-blue-800"
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors text-blue-800"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Live</span>
                      </a>
                    )}
                    <button
                      onClick={() => openProjectReport(project.reportUrl)}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition-colors text-blue-800"
                    >
                      <FileText size={16} />
                      <span className="text-sm">Report</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Extracurricular Activities
            </span>
          </h2>
          <div className="space-y-6">
            {activities.map((activity) => (
              <div key={activity.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-300/50 hover:border-blue-400/70 transition-all shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-700">{activity.title}</h3>
                    <p className="text-lg text-gray-700">{activity.role}</p>
                    <p className="text-gray-600">{activity.organization}</p>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600 mt-2 md:mt-0">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{activity.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 bg-blue-50/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-300/50 hover:border-blue-400/70 transition-all shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Award size={24} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-blue-700 mb-1">{cert.name}</h3>
                    <p className="text-gray-700 mb-1">{cert.issuer}</p>
                    <p className="text-sm text-gray-600 mb-3">{cert.date}</p>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
                    >
                      View Credential
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="py-20 px-4 bg-blue-50/50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center">
      <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
        Languages
      </span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {languages.map((lang) => (
        <div key={lang.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-300/50 hover:border-blue-400/70 transition-all text-center">
          <div className="text-4xl mb-4">{lang.flag}</div>
          <h3 className="text-xl font-semibold text-blue-700 mb-2">{lang.language}</h3>
          <p className="text-lg text-gray-700">{lang.level}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-blue-50/50">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8">
      <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
        Let's Connect
      </span>
    </h2>
    <p className="text-lg text-gray-700 mb-8">
      I'm always interested in new opportunities and collaborations.
    </p>
    <div className="flex justify-center gap-4">
      <a
        href={`mailto:${profileData.email}`}
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 rounded-full font-semibold hover:bg-blue-500/30 transition-all hover:scale-105 text-blue-800"
      >
        <Mail size={20} />
        Get In Touch
      </a>
      <a
            href="/CV_MAATI_MANAL.pdf"
            download="CV_MAATI_MANAL.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105 text-white"
          >
            <Download size={20} />
            Download CV
          </a>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 {profileData.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;////////////still same problem