import React, { useState } from 'react';
import { ExternalLink, Github, Laptop, Smartphone, Globe, Filter } from 'lucide-react';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills, built with React and deployed using modern DevOps practices. Features include smooth animations, accessibility compliance, and optimized performance.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      category: 'Web Development',
      status: 'Live',
      icon: <Smartphone className="w-6 h-6" />,
      color: 'green',
      demoUrl: 'https://papaya-dasik-b2a700.netlify.app',
      githubUrl: 'https://github.com/GIRIDHAR-GEDELA',
      role: 'Full Stack Developer',
      contributions: 'Complete design and development, responsive implementation, performance optimization',
      features: ['Responsive Design', 'Smooth Animations', 'SEO Optimized', 'Accessibility Compliant'],
      metrics: '100% Lighthouse Performance Score'
    },
    {
      title: 'Aribin - E-Commerce UI Clone',
      description: 'A fully responsive e-commerce platform UI clone built with accessibility standards in mind, featuring modern design principles, user-friendly navigation, and optimized user experience for online shopping.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      category: 'Web Development',
      status: 'Completed',
      icon: <Globe className="w-6 h-6" />,
      color: 'blue',
      demoUrl: '#',
      githubUrl: 'https://github.com/GIRIDHAR-GEDELA',
      role: 'Frontend Developer',
      contributions: 'UI/UX implementation, responsive design, accessibility features',
      features: ['Product Catalog', 'Shopping Cart UI', 'User Authentication UI', 'Mobile Responsive'],
      metrics: 'Cross-browser compatibility achieved'
    },
    {
      title: 'Virtual Classroom (Zoom Clone - Enhanced)',
      description: 'An enhanced virtual classroom platform with improved features for online learning, collaboration, and real-time communication. Built with modern web technologies to support educational institutions.',
      technologies: ['Web Technologies', 'Real-time Communication', 'UI/UX Design'],
      category: 'Web Application',
      status: 'Completed',
      icon: <Laptop className="w-6 h-6" />,
      color: 'yellow',
      demoUrl: '#',
      githubUrl: 'https://github.com/GIRIDHAR-GEDELA',
      role: 'Full Stack Developer',
      contributions: 'Real-time features implementation, UI enhancement, user experience optimization',
      features: ['Video Conferencing UI', 'Chat System', 'Screen Sharing', 'User Management'],
      metrics: 'Supports 50+ concurrent users'
    }
  ];

  const filters = ['All', 'React', 'JavaScript', 'HTML5', 'CSS3', 'TypeScript', 'Web Technologies'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.technologies.includes(selectedFilter));

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
            A showcase of my work spanning web development, UI/UX design, and accessible applications. 
            Each project reflects my commitment to quality and user-centric solutions.
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
                  ? 'bg-gradient-to-r from-blue-600 to-yellow-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400'
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
                    Live Demo
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

        {/* GitHub Stats Section */}
        <div className="mt-20 fade-in">
          <div className="bg-gray-900 dark:bg-gray-800 text-white rounded-2xl p-10 shadow-2xl">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-4">GitHub Activity</h3>
              <p className="text-gray-300 text-lg">My coding journey in numbers</p>
            </div>

            {/* Live GitHub Stats */}
            <div className="flex flex-col items-center space-y-8">
              <img 
                src="https://github-readme-stats.vercel.app/api?username=GIRIDHAR-GEDELA&show_icons=true&theme=radical&hide_border=true&bg_color=1a1b27&title_color=f7df1e&icon_color=f7df1e&text_color=ffffff"
                alt="Giridhar's GitHub Stats"
                className="rounded-lg shadow-lg max-w-full h-auto"
                loading="lazy"
              />
              
              <img 
                src="https://github-readme-streak-stats.herokuapp.com/?user=GIRIDHAR-GEDELA&theme=radical&hide_border=true&background=1a1b27&stroke=f7df1e&ring=f7df1e&fire=f7df1e&currStreakLabel=ffffff"
                alt="Giridhar's GitHub Streak"
                className="rounded-lg shadow-lg max-w-full h-auto"
                loading="lazy"
              />
              
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=GIRIDHAR-GEDELA&layout=compact&theme=radical&hide_border=true&bg_color=1a1b27&title_color=f7df1e&text_color=ffffff"
                alt="Giridhar's Top Languages"
                className="rounded-lg shadow-lg max-w-full h-auto"
                loading="lazy"
              />
            </div>

            <div className="mt-10 text-center">
              <p className="text-gray-300 mb-6 text-lg">Continuously learning and building amazing projects!</p>
              <a
                href="https://github.com/GIRIDHAR-GEDELA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-gray-900 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Github className="w-5 h-5 mr-2" />
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>

        {/* Certifications & Achievements */}
        <div className="mt-20 fade-in">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl border-2 border-blue-200 dark:border-blue-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Industrial Training Certificate</h4>
              <p className="text-gray-800 dark:text-gray-200 mb-3 font-semibold">BSNL - IT & Networking</p>
              <p className="text-gray-700 dark:text-gray-300">Comprehensive training in telecommunications and network infrastructure</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 p-8 rounded-2xl border-2 border-yellow-200 dark:border-yellow-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Academic Excellence</h4>
              <p className="text-gray-800 dark:text-gray-200 mb-3 font-semibold">Consistent Performance</p>
              <p className="text-gray-700 dark:text-gray-300">Maintaining strong academic performance throughout B.Tech program</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;