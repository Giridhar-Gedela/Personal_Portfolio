import React from 'react';
import { Code, Server, Terminal, Palette, Database, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-6 h-6" />,
      color: 'blue',
      skills: [
        { name: 'HTML5', level: 90, proficiency: 'Expert' },
        { name: 'CSS3', level: 85, proficiency: 'Expert' },
        { name: 'JavaScript', level: 80, proficiency: 'Advanced' },
        { name: 'React', level: 75, proficiency: 'Advanced' }
      ]
    },
    {
      title: 'Backend & Languages',
      icon: <Server className="w-6 h-6" />,
      color: 'yellow',
      skills: [
        { name: 'Java', level: 85, proficiency: 'Expert' },
        { name: 'Node.js', level: 70, proficiency: 'Intermediate' },
        { name: 'API Development', level: 75, proficiency: 'Advanced' },
        { name: 'Python', level: 65, proficiency: 'Intermediate' }
      ]
    },
    {
      title: 'Database & Cloud',
      icon: <Database className="w-6 h-6" />,
      color: 'green',
      skills: [
        { name: 'MySQL', level: 80, proficiency: 'Advanced' },
        { name: 'MongoDB', level: 70, proficiency: 'Intermediate' },
        { name: 'Cloud Basics', level: 60, proficiency: 'Intermediate' },
        { name: 'Database Design', level: 75, proficiency: 'Advanced' }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: <Terminal className="w-6 h-6" />,
      color: 'purple',
      skills: [
        { name: 'Git & GitHub', level: 85, proficiency: 'Expert' },
        { name: 'Command Line', level: 80, proficiency: 'Advanced' },
        { name: 'Docker (Learning)', level: 50, proficiency: 'Beginner' },
        { name: 'CI/CD Basics', level: 45, proficiency: 'Beginner' }
      ]
    },
    {
      title: 'Web Technologies',
      icon: <Globe className="w-6 h-6" />,
      color: 'indigo',
      skills: [
        { name: 'Responsive Design', level: 90, proficiency: 'Expert' },
        { name: 'Web Accessibility', level: 85, proficiency: 'Expert' },
        { name: 'REST APIs', level: 80, proficiency: 'Advanced' },
        { name: 'Progressive Web Apps', level: 70, proficiency: 'Intermediate' }
      ]
    },
    {
      title: 'Design & UI/UX',
      icon: <Palette className="w-6 h-6" />,
      color: 'pink',
      skills: [
        { name: 'UI/UX Principles', level: 75, proficiency: 'Advanced' },
        { name: 'Figma', level: 70, proficiency: 'Intermediate' },
        { name: 'Canva', level: 80, proficiency: 'Advanced' },
        { name: 'Wireframing', level: 70, proficiency: 'Intermediate' }
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

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert':
        return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30';
      case 'Advanced':
        return 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30';
      case 'Intermediate':
        return 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30';
      case 'Beginner':
        return 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700';
      default:
        return 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700';
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
            A comprehensive overview of my technical skills and proficiency levels, 
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
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-800 dark:text-gray-200 font-semibold">{skill.name}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getProficiencyColor(skill.proficiency)}`}>
                          {skill.proficiency}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-3">
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

        {/* Additional Skills */}
        <div className="mt-16 text-center fade-in">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Problem Solving',
              'Team Collaboration',
              'Technical Documentation',
              'Code Review',
              'Testing & Debugging',
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

        {/* Certifications & Learning Section */}
        <div className="mt-20 fade-in">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Certifications & Learning</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl border-2 border-blue-200 dark:border-blue-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Industrial Training Certificate</h4>
              <p className="text-gray-800 dark:text-gray-200 mb-3 font-semibold">BSNL - IT & Networking</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Comprehensive training in telecommunications and network infrastructure</p>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                Completed 2024
              </span>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 p-8 rounded-2xl border-2 border-yellow-200 dark:border-yellow-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Web Development Internship</h4>
              <p className="text-gray-800 dark:text-gray-200 mb-3 font-semibold">SkillCraft Technology</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Hands-on experience in accessible web application development</p>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium">
                June - July 2025
              </span>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-2xl border-2 border-green-200 dark:border-green-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Continuous Learning</h4>
              <p className="text-gray-800 dark:text-gray-200 mb-3 font-semibold">Self-Directed Study</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Actively learning React, TypeScript, and modern web development practices</p>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                Ongoing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;