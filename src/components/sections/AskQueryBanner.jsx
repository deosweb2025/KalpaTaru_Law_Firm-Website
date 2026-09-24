import React from 'react';
import { Link } from 'react-router-dom';

const AskQueryBanner = () => {
  return (
    <section className="bg-[#1c1510] text-white py-10 md:py-12">
      <div className="max-w-wide mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0">
          
          {/* Left: Ask Your Query Title & Timings from Screenshot 4 */}
          <div>
            <h2 className="font-roboto text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
              Ask Your Query
            </h2>
            <p className="font-roboto text-base sm:text-lg text-white/90 font-light">
              Everyday 09:00am - 10:30pm
            </p>
          </div>

          {/* Right: Brown CONTACT US Button with exact hover outline effect from screenshot */}
          <div>
            <Link
              to="/contact"
              className="inline-block bg-[#704229] hover:bg-transparent text-white border-2 border-[#704229] px-10 py-4 font-roboto text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-md text-center"
            >
              CONTACT US
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AskQueryBanner;

