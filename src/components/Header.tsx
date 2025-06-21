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
    { label: 'GitHub', href: '#github-stats' },
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
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-200 dark:border-gray-700' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#hero')}
              className={`text-2xl font-bold transition-all duration-300 hover:scale-105 ${
                isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
              }`}
            >
              <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
                Giridhar Gedela
              </span>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 relative ${
                    activeSection === item.href.substring(1)
                      ? 'text-yellow-500 bg-yellow-500/10'
                      : isScrolled 
                        ? 'text-gray-700 dark:text-gray-300 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-500' 
                        : 'text-white hover:bg-white/20'
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.substring(1) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-500 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:rotate-12 ${
                isScrolled
                  ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            
            {/* Resume Button */}
            <a
              href="https://drive.google.com/uc?export=download&id=1Ue8GvcqYC_mRxBTCn3qjHwDDZECWUZA5"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                isScrolled
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg'
                  : 'bg-yellow-500 text-blue-900 hover:bg-yellow-400 shadow-lg'
              }`}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-lg transition-all duration-300 ${
                isScrolled ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-3 rounded-lg transition-all duration-300 ${
                isScrolled ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-white hover:bg-white/20'
              }`}
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
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg shadow-xl mt-2 border border-gray-200 dark:border-gray-700">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-yellow-500 bg-yellow-500/10'
                    : 'text-gray-700 dark:text-gray-300 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-500'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://drive.google.com/uc?export=download&id=1Ue8GvcqYC_mRxBTCn3qjHwDDZECWUZA5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 mt-2"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;