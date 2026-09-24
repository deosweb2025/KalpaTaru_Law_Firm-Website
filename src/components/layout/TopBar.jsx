import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-[#111111] text-white/90 text-xs sm:text-[13px] font-roboto font-normal py-2 border-b border-white/5 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-4 text-center">
          <a 
            href="tel:+918617757731" 
            className="hover:text-[#D28C0E] transition-colors"
          >
            +91 86177 57731
          </a>
          
          <span className="text-white/40">|</span>
          
          <a 
            href="mailto:kalpatarulawfirm.india@gmail.com" 
            className="hover:text-[#D28C0E] transition-colors"
          >
            kalpatarulawfirm.india@gmail.com
          </a>
          
          <span className="text-white/40">|</span>
          
          <span className="text-white/90">
            4 Government Place Kolkata , Kolkata, 700001
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

