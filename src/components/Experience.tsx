import React from 'react';
import { Calendar, MapPin, Building, BookOpen } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'SkillCraft Technology',
      location: 'Remote',
      duration: 'June 2025 – July 2025',
      type: 'Internship',
      description: 'Working on accessible web applications, focusing on creating inclusive user experiences and implementing modern web development practices.',
      achievements: [
        'Developed responsive web applications with accessibility standards',
        'Collaborated with team on user-centric design implementations',
        'Gained hands-on experience with modern JavaScript frameworks',
        'Contributed to improving web accessibility compliance'
      ],
      color: 'blue'
    },
    {
      title: 'IT Trainee',
      company: 'BSNL (Bharat Sanchar Nigam Limited)',
      location: 'Visakhapatnam, India',
      duration: 'Nov 2023 – Apr 2024',
      type: 'Industrial Training',
      description: 'Comprehensive training in IT infrastructure and networking technologies, gaining practical knowledge of telecommunications and network management.',
      achievements: [
        'Learned network configuration and management',
        'Understanding of telecommunications infrastructure',
        'Hands-on experience with IT support and troubleshooting',
        'Exposure to enterprise-level technology systems'
      ],
      color: 'yellow'
    }
  ];

  const projects = [
    {
      title: 'Portfolio Website',
      type: 'Personal Project',
      duration: '2024',
      description: 'Developed a responsive portfolio website showcasing projects and skills using modern web technologies.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      color: 'green'
    },
    {
      title: 'Aribin - E-Commerce UI Clone',
      type: 'Academic Project',
      duration: '2024',
      description: 'Created a responsive e-commerce user interface clone with modern design principles and user experience focus.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      color: 'purple'
    },
    {
      title: 'Virtual Classroom (Zoom Clone - Enhanced)',
      type: 'Academic Project',
      duration: '2024',
      description: 'Built an enhanced virtual classroom platform with improved features for online learning and collaboration.',
      technologies: ['Web Technologies', 'Real-time Communication', 'UI/UX Design'],
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-700',
        dot: 'bg-blue-500',
        tag: 'bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200'
      },
      yellow: {
        bg: 'bg-yellow-50 dark:bg-yellow-900/20',
        border: 'border-yellow-200 dark:border-yellow-700',
        dot: 'bg-yellow-500',
        tag: 'bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200'
      },
      green: {
        bg: 'bg-green-50 dark:bg-green-900/20',
        border: 'border-green-200 dark:border-green-700',
        dot: 'bg-green-500',
        tag: 'bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200'
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-200 dark:border-purple-700',
        dot: 'bg-purple-500',
        tag: 'bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200'
      },
      indigo: {
        bg: 'bg-indigo-50 dark:bg-indigo-900/20',
        border: 'border-indigo-200 dark:border-indigo-700',
        dot: 'bg-indigo-500',
        tag: 'bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience & Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey includes hands-on experience in web development, IT infrastructure, 
            and various projects that showcase my technical skills and growth.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Professional Experience</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-yellow-500 rounded-full hidden lg:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const colorClasses = getColorClasses(exp.color);
                const isEven = index % 2 === 0;

                return (
                  <div key={index} className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10 hidden lg:block" 
                         style={{ backgroundColor: exp.color === 'blue' ? '#3B82F6' : '#F59E0B' }}></div>
                    
                    {/* Content Card */}
                    <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                      <div className={`${colorClasses.bg} ${colorClasses.border} border-2 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-3 py-1 ${colorClasses.tag} rounded-full text-sm font-medium`}>
                            {exp.type}
                          </span>
                          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.duration}
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                        
                        <div className="flex items-center mb-4 space-x-4">
                          <div className="flex items-center text-gray-600 dark:text-gray-300">
                            <Building className="w-4 h-4 mr-2" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-300">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start">
                                <div className={`w-2 h-2 ${colorClasses.dot} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                                <span className="text-gray-600 dark:text-gray-300 text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Key Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const colorClasses = getColorClasses(project.color);
              
              return (
                <div key={index} className={`${colorClasses.bg} ${colorClasses.border} border-2 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 ${colorClasses.tag} rounded-full text-sm font-medium`}>
                      {project.type}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{project.duration}</span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{project.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="space-y-2">
                    <h5 className="font-semibold text-gray-900 dark:text-white text-sm">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium border dark:border-gray-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready for the Next Challenge</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Looking for opportunities to contribute to innovative projects and continue growing 
              as a developer in a collaborative environment.
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-yellow-500 text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Let's Build Something Together!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;