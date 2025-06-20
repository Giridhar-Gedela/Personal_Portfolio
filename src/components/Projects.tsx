import React, { useState } from 'react';
import { ExternalLink, Github, Laptop, Smartphone, Globe, Filter } from 'lucide-react';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills, built with React and TypeScript. Features smooth animations, accessibility compliance, dark/light theme, and optimized performance with live GitHub stats integration.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      category: 'Frontend',
      status: 'Live',
      icon: <Smartphone className="w-6 h-6" />,
      color: 'green',
      demoUrl: 'https://papaya-dasik-b2a700.netlify.app',
      githubUrl: 'https://github.com/GIRIDHAR-GEDELA',
      role: 'Full Stack Developer',
      contributions: 'Complete design and development, responsive implementation, performance optimization',
      features: ['Responsive Design', 'Dark/Light Theme', 'Smooth Animations', 'SEO Optimized', 'Accessibility Compliant'],
      metrics: '100% Lighthouse Performance Score'
    },
    {
      title: 'E-Commerce Platform UI',
      description: 'A fully responsive e-commerce platform UI built with modern web technologies, featuring product catalog, shopping cart interface, user authentication UI, and mobile-first responsive design with accessibility standards.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      category: 'Frontend',
      status: 'Completed',
      icon: <Globe className="w-6 h-6" />,
      color: 'blue',
      demoUrl: '#',
      githubUrl: 'https://github.com/GIRIDHAR-GEDELA',
      role: 'Frontend Developer',
      contributions: 'UI/UX implementation, responsive design, accessibility features',
      features: ['Product Catalog', 'Shopping Cart UI', 'User Authentication UI', 'Mobile Responsive', 'Search Functionality'],
      metrics: 'Cross-browser compatibility achieved'
    },
    {
      title: 'Virtual Classroom Platform',
      description: 'An enhanced virtual classroom platform with improved features for online learning, collaboration, and real-time communication. Built with modern web technologies to support educational institutions with user management.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Web APIs'],
      category: 'Full Stack',
      status: 'Completed',
      icon: <Laptop className="w-6 h-6" />,
      color: 'yellow',
      demoUrl: '#',
      githubUrl: 'https://github.com/GIRIDHAR-GEDELA',
      role: 'Full Stack Developer',
      contributions: 'Real-time features implementation, UI enhancement, user experience optimization',
      features: ['Video Conferencing UI', 'Chat System', 'Screen Sharing', 'User Management', 'File Sharing'],
      metrics: 'Supports 50+ concurrent users'
    },
    {
      title: 'MERN Stack Blog Application',
      description: 'A full-stack blog application built with the MERN stack, featuring user authentication, CRUD operations, comment system, and responsive design. Includes admin panel for content management.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      category: 'Full Stack',
      status: 'In Progress',
      icon: <Globe className="w-6 h-6" />,
      color: 'purple',
      demoUrl: '#',
      githubUrl: 'https://github.com/GIRIDHAR-GEDELA',
      role: 'Full Stack Developer',
      contributions: 'Complete MERN stack implementation, database design, API development',
      features: ['User Authentication', 'CRUD Operations', 'Comment System', 'Admin Panel', 'Search & Filter'],
      metrics: 'RESTful API with JWT authentication'
    },
    {
      title: 'Task Management App',
      description: 'A React-based task management application with drag-and-drop functionality, real-time updates, and collaborative features. Built with modern React hooks and context API for state management.',
      technologies: ['React', 'JavaScript', 'CSS3', 'Local Storage'],
      category: 'Frontend',
      status: 'Completed',
      icon: <Smartphone className="w-6 h-6" />,
      color: 'indigo',
      demoUrl: '#',
      githubUrl: 'https://github.com/GIRIDHAR-GEDELA',
      role: 'Frontend Developer',
      contributions: 'React component architecture, state management, UI/UX design',
      features: ['Drag & Drop', 'Real-time Updates', 'Task Categories', 'Progress Tracking', 'Data Persistence'],
      metrics: 'Optimized for mobile and desktop'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard application that fetches real-time weather data from APIs, displays forecasts, and includes location-based services with interactive charts and maps.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API'],
      category: 'Frontend',
      status: 'Completed',
      icon: <Globe className="w-6 h-6" />,
      color: 'cyan',
      demoUrl: '#',
      githubUrl: 'https://github.com/GIRIDHAR-GEDELA',
      role: 'Frontend Developer',
      contributions: 'API integration, responsive design, data visualization',
      features: ['Real-time Weather', 'Location Services', 'Interactive Charts', '7-day Forecast', 'Multiple Cities'],
      metrics: 'Real-time data from OpenWeather API'
    }
  ];

  const filters = ['All', 'React', 'JavaScript', 'HTML5', 'CSS3', 'TypeScript', 'MongoDB', 'Express.js', 'Node.js', 'Frontend', 'Full Stack'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => 
        project.technologies.includes(selectedFilter) || 
        project.category === selectedFilter
      );

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-700',
        icon: 'bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-400',
        status: 'bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200',
        button: 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
      },
      yellow: {
        bg: 'bg-yellow-50 dark:bg-yellow-900/20',
        border: 'border-yellow-200 dark:border-yellow-700',
        icon: 'bg-yellow-100 dark:bg-yellow-800 text-yellow-600 dark:text-yellow-400',
        status: 'bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200',
        button: 'bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-500 dark:hover:bg-yellow-600'
      },
      green: {
        bg: 'bg-green-50 dark:bg-green-900/20',
        border: 'border-green-200 dark:border-green-700',
        icon: 'bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-400',
        status: 'bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200',
        button: 'bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600'
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-200 dark:border-purple-700',
        icon: 'bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-400',
        status: 'bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200',
        button: 'bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600'
      },
      indigo: {
        bg: 'bg-indigo-50 dark:bg-indigo-900/20',
        border: 'border-indigo-200 dark:border-indigo-700',
        icon: 'bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-400',
        status: 'bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200',
        button: 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600'
      },
      cyan: {
        bg: 'bg-cyan-50 dark:bg-cyan-900/20',
        border: 'border-cyan-200 dark:border-cyan-700',
        icon: 'bg-cyan-100 dark:bg-cyan-800 text-cyan-600 dark:text-cyan-400',
        status: 'bg-cyan-100 dark:bg-cyan-800 text-cyan-800 dark:text-cyan-200',
        button: 'bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-yellow-500 to-blue-600"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A showcase of my work spanning MERN stack development, frontend applications, and full-stack solutions. 
            Each project reflects my commitment to quality, modern technologies, and user-centric design.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 fade-in">
          <div className="flex items-center mr-4 text-gray-600 dark:text-gray-400">
            <Filter className="w-5 h-5 mr-2" />
            <span className="font-medium">Filter by:</span>
          </div>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-yellow-500 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 hover:scale-105'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);
            
            return (
              <div
                key={index}
                className={`${colorClasses.bg} ${colorClasses.border} border-2 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 fade-in`}
              >
                {/* Project Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 ${colorClasses.icon} rounded-xl shadow-md`}>
                    {project.icon}
                  </div>
                  <span className={`px-4 py-2 ${colorClasses.status} rounded-full text-sm font-semibold`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Title and Category */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">{project.category} • {project.role}</p>

                {/* Project Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium border dark:border-gray-600 shadow-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 dark:bg-gray-600 text-white rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="mb-6 p-3 bg-white dark:bg-gray-700 rounded-lg border dark:border-gray-600">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-semibold">Achievement:</span> {project.metrics}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 ${colorClasses.button} text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center hover:shadow-lg transform hover:scale-105`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {project.status === 'Live' ? 'Live Demo' : 'View Project'}
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-gray-800 dark:hover:border-gray-400 hover:text-gray-800 dark:hover:text-gray-100 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                    aria-label="View GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Stats */}
        <div className="mt-20 fade-in">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-10 shadow-2xl">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-4">Project Statistics</h3>
              <p className="text-gray-200 text-lg">My development journey in numbers</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">{projects.length}+</div>
                <div className="text-gray-200">Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-gray-200">Technologies Used</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-gray-200">Responsive Design</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-gray-200">Learning & Building</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;