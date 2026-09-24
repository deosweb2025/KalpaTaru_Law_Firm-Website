import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCareerOpen(false);
  }, [location.pathname]);

  const isCareerActive = 
    location.pathname === '/career' || 
    location.pathname === '/legal-assistant' || 
    location.pathname === '/office-assistant';

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm py-4 md:py-5">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo: Kalpataru Law Firm */}
            <Link to="/" className="flex items-center">
              <span className="font-roboto text-2xl md:text-[28px] font-extrabold text-[#111111] tracking-tight">
                Kalpataru Law Firm
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-roboto text-[15px] font-semibold transition-colors duration-200 ${
                    isActive ? 'text-[#111111] font-bold' : 'text-[#222222] hover:text-[#7F4222]'
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `font-roboto text-[15px] font-semibold transition-colors duration-200 ${
                    isActive ? 'text-[#111111] font-bold' : 'text-[#222222] hover:text-[#7F4222]'
                  }`
                }
              >
                About Us
              </NavLink>

              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `font-roboto text-[15px] font-semibold transition-colors duration-200 ${
                    isActive ? 'text-[#111111] font-bold' : 'text-[#222222] hover:text-[#7F4222]'
                  }`
                }
              >
                Services
              </NavLink>

              {/* Career with Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsCareerOpen(true)}
                onMouseLeave={() => setIsCareerOpen(false)}
              >
                <Link
                  to="/legal-assistant"
                  className={`font-roboto text-[15px] font-semibold transition-colors duration-200 inline-flex items-center py-2 ${
                    isCareerActive ? 'text-[#111111] font-bold' : 'text-[#222222] hover:text-[#7F4222]'
                  }`}
                >
                  Career
                </Link>

                {/* Dropdown Menu */}
                {isCareerOpen && (
                  <div className="absolute left-0 top-full w-40 bg-white border border-gray-200 shadow-lg py-1 z-50 rounded-[2px]">
                    <NavLink
                      to="/legal-assistant"
                      className={({ isActive }) =>
                        `block px-4 py-2.5 text-xs font-medium transition-colors ${
                          isActive
                            ? 'bg-[#3d424b] text-white'
                            : 'text-gray-700 hover:bg-[#3d424b] hover:text-white'
                        }`
                      }
                    >
                      Legal Assistant
                    </NavLink>
                    <NavLink
                      to="/office-assistant"
                      className={({ isActive }) =>
                        `block px-4 py-2.5 text-xs font-medium transition-colors ${
                          isActive
                            ? 'bg-[#3d424b] text-white'
                            : 'text-gray-700 hover:bg-[#3d424b] hover:text-white'
                        }`
                      }
                    >
                      Office Assistant
                    </NavLink>
                  </div>
                )}
              </div>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `font-roboto text-[15px] font-semibold transition-colors duration-200 ${
                    isActive ? 'text-[#111111] font-bold' : 'text-[#222222] hover:text-[#7F4222]'
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#111111] hover:text-[#7F4222] focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Navbar;
