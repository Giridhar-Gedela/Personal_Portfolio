import React from 'react';
import { Heart, Code, Coffee, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full filter blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-400 rounded-full filter blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Left Section - About */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-yellow-400">Giridhar Gedela</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Building scalable solutions with the MERN stack and modern web technologies. 
              Always eager to learn, collaborate, and create meaningful impact through code.
            </p>
            <div className="flex items-center text-gray-400">
              <Code className="w-5 h-5 mr-3" />
              <span className="font-medium">MERN Stack Developer</span>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com/Giridhar-Gedela"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/giridhargedela"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:giridhargedela2908@gmail.com"
                className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-yellow-400">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Experience', href: '#experience' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-left font-medium py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-yellow-400">Let's Connect</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <span className="text-2xl mr-3">📍</span>
                <span className="font-medium">Visakhapatnam, India</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="text-2xl mr-3">📧</span>
                <a 
                  href="mailto:giridhargedela2908@gmail.com"
                  className="font-medium hover:text-yellow-400 transition-colors duration-300"
                >
                  giridhargedela2908@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="text-2xl mr-3">🎓</span>
                <span className="font-medium">B.Tech IT & Developer</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-gray-400 pt-4">
              <Coffee className="w-5 h-5" />
              <span className="font-medium">Fueled by coffee and curiosity</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3 text-gray-400">
              <span className="font-medium">Made with</span>
              <Heart className="w-5 h-5 text-red-500 animate-pulse" />
              <span className="font-medium">and</span>
              <Code className="w-5 h-5 text-blue-400" />
              <span className="font-medium">by Giridhar Gedela</span>
            </div>
            
            <div className="text-gray-400 font-medium">
              © {currentYear} Giridhar Gedela. All rights reserved.
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-500">
              Built with React, TypeScript, and Tailwind CSS | 
              Designed for accessibility and performance
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;