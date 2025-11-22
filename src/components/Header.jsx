import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScheduleVisitModal from './ScheduleVisitModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Master Plan', href: '#master-plan' },
    { name: 'Development', href: '#development' },
    { name: 'Blocks', href: '#blocks' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-dark/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo-hq.png" 
            alt="Ittefaq Residencia Logo" 
            className="h-32 md:h-40 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors no-underline ${
                isScrolled ? 'text-secondary dark:text-white' : 'text-white'
              }`}
              style={{ textDecoration: 'none' }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsScheduleModalOpen(true)}
          className="hidden md:block px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-full text-sm font-semibold uppercase tracking-wide"
        >
          Schedule a Visit
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-dark shadow-lg py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-secondary dark:text-white hover:text-primary transition-colors no-underline"
              style={{ textDecoration: 'none' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <ScheduleVisitModal 
        isOpen={isScheduleModalOpen} 
        onClose={() => setIsScheduleModalOpen(false)} 
      />
    </header>
  );
};

export default Header;
