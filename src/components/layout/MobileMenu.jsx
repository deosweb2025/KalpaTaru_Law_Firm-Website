import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  const [isCareerExpanded, setIsCareerExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose}>
      <div 
        className="fixed inset-x-0 top-0 bg-[#202125] text-white shadow-2xl px-6 py-8 border-b border-[#D28C0E] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div>
            <span className="font-roboto text-2xl font-extrabold text-[#D28C0E] tracking-tight block">
              KALPATARU
            </span>
            <span className="font-roboto text-[10px] uppercase tracking-widest text-white/70">
              Law Firm
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-[#FFA30A] hover:text-white"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col space-y-2 py-6 border-b border-white/10 font-roboto">
          <NavLink
            to="/"
            onClick={onClose}
            className={({ isActive }) =>
              `text-base font-semibold tracking-wide transition-colors py-2 ${
                isActive ? 'text-[#D28C0E]' : 'text-white/90 hover:text-[#D28C0E]'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={onClose}
            className={({ isActive }) =>
              `text-base font-semibold tracking-wide transition-colors py-2 ${
                isActive ? 'text-[#D28C0E]' : 'text-white/90 hover:text-[#D28C0E]'
              }`
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/services"
            onClick={onClose}
            className={({ isActive }) =>
              `text-base font-semibold tracking-wide transition-colors py-2 ${
                isActive ? 'text-[#D28C0E]' : 'text-white/90 hover:text-[#D28C0E]'
              }`
            }
          >
            Services
          </NavLink>

          {/* Career with Submenu */}
          <div>
            <div 
              className="flex items-center justify-between py-2 text-white/90 hover:text-[#D28C0E] cursor-pointer text-base font-semibold"
              onClick={() => setIsCareerExpanded(!isCareerExpanded)}
            >
              <span>Career</span>
              {isCareerExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>

            {isCareerExpanded && (
              <div className="pl-4 space-y-2 pt-1 pb-2">
                <NavLink
                  to="/legal-assistant"
                  onClick={onClose}
                  className="block text-sm text-gray-300 hover:text-[#D28C0E] py-1"
                >
                  Legal Assistant
                </NavLink>
                <NavLink
                  to="/office-assistant"
                  onClick={onClose}
                  className="block text-sm text-gray-300 hover:text-[#D28C0E] py-1"
                >
                  Office Assistant
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/contact"
            onClick={onClose}
            className={({ isActive }) =>
              `text-base font-semibold tracking-wide transition-colors py-2 ${
                isActive ? 'text-[#D28C0E]' : 'text-white/90 hover:text-[#D28C0E]'
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Contact Quick Links */}
        <div className="pt-6 space-y-3 text-xs text-white/80 font-roboto">
          <a href="tel:+918617757731" className="flex items-center space-x-3 text-white/90 hover:text-[#D28C0E]">
            <Phone size={14} className="text-[#D28C0E]" />
            <span>+91 86177 57731</span>
          </a>
          <a href="mailto:kalpatarulawfirm.india@gmail.com" className="flex items-center space-x-3 text-white/90 hover:text-[#D28C0E]">
            <Mail size={14} className="text-[#D28C0E]" />
            <span>kalpatarulawfirm.india@gmail.com</span>
          </a>
          <div className="flex items-center space-x-3">
            <MapPin size={14} className="text-[#D28C0E]" />
            <span>4 Government Place Kolkata , Kolkata, 700001</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
