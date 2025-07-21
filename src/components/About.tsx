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
            A passionate full-stack developer on a journey to become a skilled developer, 
            with hands-on experience in modern web technologies and a growing expertise in scalable applications.
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
                To leverage modern web technologies in creating innovative, accessible, and scalable solutions 
                that make a positive impact on people's lives and businesses through full-stack development.
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
                Continuous learning in full-stack development, creating solutions with modern frameworks, 
                and the opportunity to work on projects that challenge me to grow both technically and professionally.
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
                  <p className="text-gray-700 dark:text-gray-300 font-medium">Vishnu Institute of Technology</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Jul 2024 - Jun 2027</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-6 py-2">
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">Diploma in Computer Engineering</h4>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">A.A.N.M & V.V.R.S.R Polytechnic College</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Graduated: 2024</p>
                </div>
                <div className="border-l-4 border-green-500 pl-6 py-2">
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">Secondary Education (SSC)</h4>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">Sri Chaitanya School, Narsipatnam</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Graduated: 2021</p>
                </div>
              </div>
            </div>

          </div>
      </div>
    </section>

  )
}