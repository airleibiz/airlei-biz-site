// AIRLÉI BIZ™ Footer Component v5.0 - Apple Minimalist Style
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#d2d2d7] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand Name */}
          <div className="flex items-center gap-2">
            <img 
              src="/images/Logo.png" 
              alt="AIRLÉI logo" 
              className="h-6 w-auto"
            />
          </div>

          
          {/* Brand Slogan */}
          <p className="text-[#86868b] text-sm mb-8">
            AIRLÉI BIZ™ Light, minimalist AICG studio in Malaysia delivering commercial visuals and scalable content.
          </p>
          
          {/* Links */}
          <div className="mb-6">
            <p className="text-[#86868b] text-sm mb-4">Links</p>
            <div className="flex justify-center space-x-4">
              <Link to="/services" className="text-[#1d1d1f] hover:text-[#6aa3ff] transition-colors text-sm">Services</Link>
              <span className="text-[#d2d2d7]">·</span>
              <Link to="/portfolio" className="text-[#1d1d1f] hover:text-[#6aa3ff] transition-colors text-sm">Portfolio</Link>
              <span className="text-[#d2d2d7]">·</span>
              <Link to="/contact-us" className="text-[#1d1d1f] hover:text-[#6aa3ff] transition-colors text-sm">Contact</Link>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="mb-8">
            <p className="text-[#86868b] text-sm mb-4">Follow</p>
            <div className="flex justify-center space-x-4">
              <a href="https://www.instagram.com/airleibiz?igsh=eDFxaDhnank4eHBp&utm_source=qr" className="text-[#1d1d1f] hover:text-[#6aa3ff] transition-colors text-sm">Instagram</a>
              <span className="text-[#d2d2d7]">·</span>
              <a href="https://www.tiktok.com/@airleibiz" className="text-[#1d1d1f] hover:text-[#6aa3ff] transition-colors text-sm">TikTok</a>
            </div>
          </div>
          
          {/* Copyright */}
          <p className="text-[#86868b] text-sm">
            © {new Date().getFullYear()} AIRLÉI BIZ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;