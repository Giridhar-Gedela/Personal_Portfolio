import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Web Developer. Tech Enthusiast.';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-gray-900 dark:via-gray-800 dark:to-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 fade-in">
            <div className="mb-6">
              <div className="flex items-center justify-center lg:justify-start mb-4 animate-bounce">
                <MapPin className="w-5 h-5 mr-2 text-yellow-400" />
                <span className="text-blue-100 font-medium">Visakhapatnam, India</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block mb-2">Hi, I'm</span>
                <span className="text-yellow-400 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent animate-pulse">
                  Giridhar
                </span>
              </h1>
              
              <div className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 h-12">
                <span className="typing-text">{typedText}</span>
              </div>
            </div>
            
            <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed opacity-90">
              Building scalable solutions with Java and Web technologies. Currently pursuing B.Tech in IT 
              at Vishnu Institute of Technology, passionate about creating accessible and innovative web applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-10">
              <button
                onClick={scrollToContact}
                className="group bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg hover:animate-pulse"
              >
                <span className="group-hover:animate-bounce">Let's Connect!</span>
              </button>
              <a
                href="https://drive.google.com/uc?export=download&id=1Ue8GvcqYC_mRxBTCn3qjHwDDZECWUZA5"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-white hover:bg-white hover:text-blue-800 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
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
                className="group p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:rotate-12"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6 group-hover:animate-pulse" />
              </a>
              <a
                href="https://linkedin.com/in/giridhargedela"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:rotate-12"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 group-hover:animate-pulse" />
              </a>
              <a
                href="mailto:giridhargedela2908@gmail.com"
                className="group p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:rotate-12"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6 group-hover:animate-pulse" />
              </a>
            </div>
          </div>
          
          {/* Right Content - Profile with Parallax */}
          <div className="lg:w-1/2 flex justify-center fade-in">
            <div className="relative parallax-element" data-speed="0.3">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-105 transition-all duration-500 hover:rotate-3">
                <div className="w-72 h-72 lg:w-88 lg:h-88 bg-blue-800 rounded-full flex items-center justify-center overflow-hidden border-4 border-white/20">
                  <img 
                    src="https://i.postimg.cc/T2nVJC9n/iam-giridhar.png"
                    alt="Giridhar Gedela - Web Developer"
                    className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Floating Status Badge */}
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-xl animate-bounce">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-bold">Available for Work</span>
                </div>
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-md p-3 rounded-full animate-float">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute top-16 -right-12 bg-white/10 backdrop-blur-md p-3 rounded-full animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-2xl">☕</span>
              </div>
              <div className="absolute -bottom-12 left-8 bg-white/10 backdrop-blur-md p-3 rounded-full animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={scrollToAbout}>
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-white/70 text-sm font-medium mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 text-white/70" />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;