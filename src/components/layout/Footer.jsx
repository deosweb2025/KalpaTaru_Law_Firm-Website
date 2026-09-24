import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white font-sans">
      {/* Main 4-Column Footer */}
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Column 1: Kalpataru Law Firm */}
          <div className="space-y-4">
            <h3 className="font-zilla text-2xl md:text-[26px] font-bold text-[#c88a2c] tracking-tight">
              Kalpataru Law Firm
            </h3>
            <p className="text-white text-sm md:text-[15px] leading-relaxed font-light">
              With years of consistent services towards justice and deep understanding / knowledge on this field has made Kalpataru Law Firm, a reliable destination for justice.
            </p>
          </div>

          {/* Column 2: [ ADDRESS ] */}
          <div className="space-y-4">
            <h4 className="text-[#c88a2c] text-sm md:text-base font-bold tracking-[0.15em] uppercase">
              [ ADDRESS ]
            </h4>
            <ul className="space-y-3.5 text-sm md:text-[14.5px] text-neutral-200">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#c88a2c] shrink-0 mt-0.5" />
                <span>4 Government Place Kolkata , Kolkata, 700001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#c88a2c] shrink-0" />
                <a href="tel:+918617757731" className="hover:text-[#c88a2c] transition-colors">
                  +91 86177 57731
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#c88a2c] shrink-0" />
                <a href="mailto:kalpatarulawfirm.india@gmail.com" className="hover:text-[#c88a2c] transition-colors break-all">
                  kalpatarulawfirm.india@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: [ MENU ] */}
          <div className="space-y-4">
            <h4 className="text-[#c88a2c] text-sm md:text-base font-bold tracking-[0.15em] uppercase">
              [ MENU ]
            </h4>
            <ul className="space-y-2 text-sm md:text-[14.5px]">
              <li>
                <Link to="/" className="text-[#c88a2c] font-medium hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-neutral-400 hover:text-white transition-colors">
                  Career +
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: [ SOCIAL MEDIA ] */}
          <div className="space-y-4">
            <h4 className="text-[#c88a2c] text-sm md:text-base font-bold tracking-[0.15em] uppercase">
              [ SOCIAL MEDIA ]
            </h4>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1c1c1c] text-white flex items-center justify-center rounded-sm hover:bg-white hover:text-black transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={17} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1c1c1c] text-white flex items-center justify-center rounded-sm hover:bg-white hover:text-black transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={17} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1c1c1c] text-white flex items-center justify-center rounded-sm hover:bg-white hover:text-black transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={17} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#141414] py-5 px-4 border-t border-neutral-900">
        <p className="text-center text-xs sm:text-sm text-[#c88a2c] tracking-wide font-normal">
          Copyright © 2026 Kalpataru Law Firm | Powered by{' '}
          <a
            href="https://www.teamdeoskolkata.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-white transition-colors"
          >
            Digital Exposure Online Services
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
