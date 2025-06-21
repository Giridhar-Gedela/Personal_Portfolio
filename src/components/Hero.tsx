import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, MapPin, Download, ChevronDown, Code } from 'lucide-react';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          'MERN Stack Developer.',
          'Full Stack Engineer.',
          'Web Developer.',
          'Tech Enthusiast.'
        ],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      });

      return () => typed.destroy();
    }
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
    <section className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="animated-bg"></div>
      
      {/* Floating Shapes */}
      <div className="floating-shape w-32 h-32 bg-white rounded-full"></div>
      <div className="floating-shape w-24 h-24 bg-yellow-400 rounded-lg"></div>
      <div className="floating-shape w-20 h-20 bg-blue-400 triangle"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0" data-aos="fade-right">
            <div className="mb-6">
              <div className="flex items-center justify-center lg:justify-start mb-4" data-aos="fade-up" data-aos-delay="200">
                <MapPin className="w-5 h-5 mr-2 text-yellow-400" />
                <span className="text-white/90 font-medium">Visakhapatnam, India</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white" data-aos="fade-up" data-aos-delay="400">
                <span className="block mb-2">Hi, I'm</span>
                <span className="text-yellow-400 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                  Giridhar
                </span>
              </h1>
              
              <div className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 h-16 text-white" data-aos="fade-up" data-aos-delay="600">
                <span ref={typedRef}></span>
              </div>
            </div>
            
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed" data-aos="fade-up" data-aos-delay="800">
              Building scalable solutions with the MERN stack. Currently pursuing B.Tech in IT 
              at Vishnu Institute of Technology, passionate about creating innovative web applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-10" data-aos="fade-up" data-aos-delay="1000">
              <button
                onClick={scrollToContact}
                className="group bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                <span className="group-hover:animate-pulse">Let's Connect!</span>
              </button>
              <a
                href="https://drive.google.com/uc?export=download&id=1Ue8GvcqYC_mRxBTCn3qjHwDDZECWUZA5"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-white hover:bg-white hover:text-blue-800 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center text-white"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </a>
            </div>
            
            <div className="flex justify-center lg:justify-start space-x-6" data-aos="fade-up" data-aos-delay="1200">
              <a
                href="https://github.com/GIRIDHAR-GEDELA"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-md"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6 text-white group-hover:animate-pulse" />
              </a>
              <a
                href="https://linkedin.com/in/giridhargedela"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-md"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 text-white group-hover:animate-pulse" />
              </a>
              <a
                href="mailto:giridhargedela2908@gmail.com"
                className="group p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-md"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6 text-white group-hover:animate-pulse" />
              </a>
            </div>
          </div>
          
          {/* Right Content - Profile with Enhanced Effects */}
          <div className="lg:w-1/2 flex justify-center" data-aos="fade-left" data-aos-delay="600">
            <div className="relative parallax-element" data-speed="0.3">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-105 transition-all duration-500">
                <div className="w-72 h-72 lg:w-88 lg:h-88 bg-white rounded-full flex items-center justify-center overflow-hidden border-4 border-white/20 profile-glow">
                  <img 
                    src="https://i.ibb.co/4Z6fr009/iam-giridhar.png" 
                    alt="Giridhar Gedela - MERN Stack Developer"
                    className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Floating Status Badge */}
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-xl animate-bounce backdrop-blur-md">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-bold">Available for Work</span>
                </div>
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-md p-3 rounded-full animate-bounce" style={{ animationDelay: '0s' }}>
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-16 -right-12 bg-white/10 backdrop-blur-md p-3 rounded-full animate-bounce" style={{ animationDelay: '1s' }}>
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute -bottom-12 left-8 bg-white/10 backdrop-blur-md p-3 rounded-full animate-bounce" style={{ animationDelay: '2s' }}>
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={scrollToAbout} data-aos="fade-up" data-aos-delay="1400">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-white/70 text-sm font-medium mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 text-white/70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;