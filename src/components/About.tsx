import React from 'react';
import { GraduationCap, Building, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-yellow-500 to-blue-600"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Passionate developer with hands-on experience in web development and modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 fade-in">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-xl mr-6">
                  <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Mission</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                To leverage technology in creating innovative, accessible, and scalable solutions 
                that make a positive impact on people's lives and businesses.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-yellow-100 dark:bg-yellow-900 rounded-xl mr-6">
                  <Award className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">What Drives Me</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                Continuous learning, problem-solving, and the opportunity to work on projects 
                that challenge me to grow both technically and professionally.
              </p>
            </div>
          </div>

          {/* Right Content - Education & Experience Cards */}
          <div className="space-y-8 fade-in">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-xl mr-6">
                  <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6 py-2">
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">B.Tech in Information Technology</h4>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">Vishnu Institute of Technology (Autonomous)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">2024 - 2027 (Expected)</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-6 py-2">
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">Diploma in Computer Science</h4>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">A.A.N.M & V.V.R.S.R Polytechnic</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">2021 - 2024</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-yellow-100 dark:bg-yellow-900 rounded-xl mr-6">
                  <Building className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Key Highlights</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Industrial training at BSNL in IT & Networking</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Web Developer Intern at SkillCraft Technology</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Focus on accessible web applications</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-4"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Portfolio website development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;