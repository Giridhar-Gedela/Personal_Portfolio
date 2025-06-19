import React from 'react';
import { Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-gray-900 dark:via-gray-800 dark:to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 fade-in">
            <div className="mb-6">
              <div className="flex items-center justify-center lg:justify-start mb-2">
                <MapPin className="w-5 h-5 mr-2 text-yellow-400" />
                <span className="text-blue-100">Visakhapatnam, India</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Hi, I'm <span className="text-yellow-400">Giridhar</span>
              </h1>
              <div className="text-xl sm:text-2xl lg:text-3xl font-light mb-6 space-y-2">
                <div className="text-yellow-400">Web Developer</div>
              </div>
            </div>
            
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
              Building scalable solutions with Java and Web technologies. Currently pursuing B.Tech in IT 
              at Vishnu Institute of Technology, passionate about creating accessible and innovative web applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={scrollToContact}
                className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
              >
                Let's Connect!
              </button>
              <a
                href="https://drive.google.com/uc?export=download&id=1Ue8GvcqYC_mRxBTCn3qjHwDDZECWUZA5"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white hover:bg-white hover:text-blue-800 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </a>
            </div>
            
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/GIRIDHAR-GEDELA"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/giridhargedela"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:giridhargedela2908@gmail.com"
                className="p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Right Content - Profile */}
          <div className="lg:w-1/2 flex justify-center fade-in">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-72 h-72 bg-blue-800 rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://i.ibb.co/4Z6fr009/iam-giridhar.png" 
                    alt="Giridhar Gedela - Web Developer"
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-blue-800 px-4 py-2 rounded-lg shadow-lg animate-pulse">
                <div className="text-sm font-semibold">Available for Work</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-8 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;