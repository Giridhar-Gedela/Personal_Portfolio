import React from 'react';
import { Code, Server, Terminal, Palette, Database, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-6 h-6" />,
      color: 'blue',
      skills: [
        { name: 'HTML5', level: 90, tag: 'Expert' },
        { name: 'CSS3', level: 85, tag: 'Expert' },
        { name: 'JavaScript', level: 80, tag: 'Medium' },
        { name: 'React', level: 75, tag: 'Medium' }
      ]
    },
    {
      title: 'Backend & Languages',
      icon: <Server className="w-6 h-6" />,
      color: 'yellow',
      skills: [
        { name: 'Node.js', level: 70, tag: 'Medium' },
        { name: 'Express.js', level: 75, tag: 'Medium' },
        { name: 'Java', level: 65, tag: 'Medium' },
        { name: 'Python', level: 60, tag: 'Beginner' }
      ]
    },
    {
      title: 'Database & Cloud',
      icon: <Database className="w-6 h-6" />,
      color: 'green',
      skills: [
        { name: 'MongoDB', level: 80, tag: 'Medium' },
        { name: 'MySQL', level: 75, tag: 'Medium' },
        { name: 'Database Design', level: 70, tag: 'Medium' },
        { name: 'Cloud Basics', level: 50, tag: 'Beginner' }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: <Terminal className="w-6 h-6" />,
      color: 'purple',
      skills: [
        { name: 'Git & GitHub', level: 85, tag: 'Expert' },
        { name: 'Linux', level: 70, tag: 'Medium' },
        { name: 'Command Line', level: 80, tag: 'Medium' },
        { name: 'Docker', level: 45, tag: 'Beginner' }
      ]
    },
    {
      title: 'Web Technologies',
      icon: <Globe className="w-6 h-6" />,
      color: 'indigo',
      skills: [
        { name: 'Responsive Design', level: 90, tag: 'Expert' },
        { name: 'Web Accessibility', level: 85, tag: 'Expert' },
        { name: 'REST APIs', level: 80, tag: 'Medium' },
        { name: 'Progressive Web Apps', level: 60, tag: 'Beginner' }
      ]
    },
    {
      title: 'Design & UI/UX',
      icon: <Palette className="w-6 h-6" />,
      color: 'pink',
      skills: [
        { name: 'UI/UX Principles', level: 75, tag: 'Medium' },
        { name: 'Figma', level: 70, tag: 'Medium' },
        { name: 'Canva', level: 80, tag: 'Medium' },
        { name: 'Wireframing', level: 65, tag: 'Medium' }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-700',
        text: 'text-blue-600 dark:text-blue-400',
        progress: 'bg-blue-500'
      },
      yellow: {
        bg: 'bg-yellow-50 dark:bg-yellow-900/20',
        border: 'border-yellow-200 dark:border-yellow-700',
        text: 'text-yellow-600 dark:text-yellow-400',
        progress: 'bg-yellow-500'
      },
      green: {
        bg: 'bg-green-50 dark:bg-green-900/20',
        border: 'border-green-200 dark:border-green-700',
        text: 'text-green-600 dark:text-green-400',
        progress: 'bg-green-500'
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-200 dark:border-purple-700',
        text: 'text-purple-600 dark:text-purple-400',
        progress: 'bg-purple-500'
      },
      indigo: {
        bg: 'bg-indigo-50 dark:bg-indigo-900/20',
        border: 'border-indigo-200 dark:border-indigo-700',
        text: 'text-indigo-600 dark:text-indigo-400',
        progress: 'bg-indigo-500'
      },
      pink: {
        bg: 'bg-pink-50 dark:bg-pink-900/20',
        border: 'border-pink-200 dark:border-pink-700',
        text: 'text-pink-600 dark:text-pink-400',
        progress: 'bg-pink-500'
      }
    };
    return colors[color as keyof typeof colors];
  };

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'Expert':
        return 'bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200';
      case 'Medium':
        return 'bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200';
      case 'Beginner':
        return 'bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200';
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-yellow-500 to-blue-600"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Skills & Technologies</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and proficiency levels in the MERN stack and modern web development, 
            continuously growing through hands-on projects and learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <div
                key={index}
                className={`${colorClasses.bg} ${colorClasses.border} border-2 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 fade-in`}
              >
                <div className="flex items-center mb-8">
                  <div className={`p-4 bg-white dark:bg-gray-800 rounded-xl mr-6 shadow-md`}>
                    <div className={colorClasses.text}>{category.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-gray-800 dark:text-gray-200 font-semibold">{skill.name}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTagColor(skill.tag)}`}>
                            {skill.tag}
                          </span>
                        </div>
                        <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${colorClasses.progress} transition-all duration-1000 ease-out shadow-sm`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* MERN Stack Highlight */}
        <div className="mt-16 text-center fade-in">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">MERN Stack Developer</h3>
            <p className="text-xl mb-6 opacity-90">
              Specializing in MongoDB, Express.js, React, and Node.js for full-stack web development
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
                <div className="text-2xl mb-2">🍃</div>
                <div className="font-semibold">MongoDB</div>
                <div className="text-sm opacity-75">Database</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
                <div className="text-2xl mb-2">🚀</div>
                <div className="font-semibold">Express.js</div>
                <div className="text-sm opacity-75">Backend</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
                <div className="text-2xl mb-2">⚛️</div>
                <div className="font-semibold">React</div>
                <div className="text-sm opacity-75">Frontend</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
                <div className="text-2xl mb-2">💚</div>
                <div className="font-semibold">Node.js</div>
                <div className="text-sm opacity-75">Runtime</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center fade-in">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Problem Solving',
              'Team Collaboration',
              'Agile Methodology',
              'Technical Documentation',
              'Code Review',
              'Testing & Debugging',
              'Performance Optimization',
              'Cross-browser Compatibility',
              'Version Control',
              'Project Management'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-yellow-500 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;