import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'github-stats', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/90 backdrop-blur-lg shadow-2xl border-b border-gray-700/50' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#hero')}
              className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105"
            >
              Giridhar Gedela
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 text-sm font-semibold transition-all duration-300 relative group ${
                    activeSection === item.href.substring(1)
                      ? 'text-yellow-400 scale-105'
                      : 'text-white hover:text-yellow-400 hover:scale-105'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 transform transition-transform duration-300 ${
                    activeSection === item.href.substring(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </button>
              ))}
            </div>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-3 text-white hover:text-yellow-400 transition-all duration-300 hover:scale-110 hover:rotate-12"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            
            {/* Resume Button */}
            <a
              href="https://drive.google.com/uc?export=download&id=1Ue8GvcqYC_mRxBTCn3qjHwDDZECWUZA5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 rounded-lg font-semibold hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-3 text-white hover:text-yellow-400 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 text-white hover:text-yellow-400 transition-all duration-300 hover:scale-110"
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                <X className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-6 pt-4 pb-6 space-y-2 bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-2xl mt-4 border border-gray-700/50">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-3 text-base font-semibold transition-all duration-300 rounded-lg ${
                  activeSection === item.href.substring(1)
                    ? 'text-yellow-400 bg-yellow-400/10'
                    : 'text-white hover:text-yellow-400 hover:bg-yellow-400/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://drive.google.com/uc?export=download&id=1Ue8GvcqYC_mRxBTCn3qjHwDDZECWUZA5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full px-4 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 rounded-lg font-semibold hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 mt-4"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;