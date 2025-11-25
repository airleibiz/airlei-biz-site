// AIRLÉI BIZ™ Navbar Component v5.0 - Apple Minimalist Style
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // v5版导航栏 - 5个核心板块
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/why-us' },
    { name: 'Contact', path: '/contact-us' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white py-6 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img 
              src="/images/Logo.png" 
              alt="AIRLÉI logo" 
              className="h-6 w-auto"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-[16px]">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-[#1d1d1f] hover:text-[#6aa3ff] transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/pricing"
              className="text-[#1d1d1f] hover:text-[#6aa3ff] transition-colors duration-200 text-sm font-medium ml-4"
            >
              Pricing
            </Link>
            <a
              href="https://wa.me/+60166741389"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button px-6 py-2 rounded-full text-white font-medium text-sm ml-6"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <i className="fas fa-times text-2xl text-[#1d1d1f]"></i>
            ) : (
              <i className="fas fa-bars text-2xl text-[#1d1d1f]"></i>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white mt-6 border-t border-[#d2d2d7]">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-[#1d1d1f] hover:text-[#6aa3ff] transition-colors duration-200 py-3 text-center border-b border-[#f3f3f3]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/pricing"
              className="text-[#1d1d1f] hover:text-[#6aa3ff] transition-colors duration-200 py-3 text-center border-b border-[#f3f3f3]"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <a
              href="https://wa.me/+60166741389"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button px-6 py-3 rounded-full text-white font-medium text-center mt-2"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
