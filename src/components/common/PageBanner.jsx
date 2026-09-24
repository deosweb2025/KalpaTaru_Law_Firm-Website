import React from 'react';
import { Link } from 'react-router-dom';

const PageBanner = ({ title, subtitle, breadcrumb }) => {
  return (
    <div className="relative overflow-hidden py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#181B1D] to-[#03273F]">
      {/* Background Overlay Image with 0.23 Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-luminosity pointer-events-none"
        style={{ backgroundImage: "url('/assets/images/page-banner-bg.jpg')" }}
      />
      
      <div className="relative max-w-wide mx-auto px-6 lg:px-12 text-center z-10">
        {breadcrumb && (
          <div className="flex items-center justify-center space-x-2 text-xs md:text-sm font-roboto tracking-widest uppercase text-[#D28C0E] mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">{breadcrumb}</span>
          </div>
        )}
        
        <h1 className="font-amiri text-3xl md:text-5xl lg:text-6xl font-medium text-[#FFBF3F] tracking-wide mb-3">
          {title}
        </h1>
        
        {subtitle && (
          <p className="font-didact text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageBanner;

