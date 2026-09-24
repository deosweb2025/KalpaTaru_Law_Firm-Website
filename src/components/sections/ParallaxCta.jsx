import React from 'react';
import Button from '../common/Button';
import Divider from '../common/Divider';

const ParallaxCta = () => {
  return (
    <section className="relative bg-parallax py-24 md:py-32 text-white overflow-hidden"
      style={{
        backgroundImage: "url('/assets/images/parallax-cta-bg.jpg')"
      }}
    >
      {/* Dark Overlay with 0.85 opacity */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#181617]/85 to-[#272425]/90" />

      <div className="relative max-w-boxed mx-auto px-6 lg:px-12 text-center z-10">
        <div className="max-w-3xl mx-auto">
          <span className="font-roboto text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-[#FFA400] block mb-3">
            Confidential Legal Guidance
          </span>

          <h2 className="font-amiri text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Looking For A Reliable & Dedicated Legal Partner?
          </h2>

          <Divider width="60px" height="4px" color="#D28C0E" align="center" className="my-4" />

          <p className="font-didact text-base md:text-lg text-white/85 leading-relaxed mb-8 max-w-2xl mx-auto">
            Get in touch with our senior legal practitioners for an initial confidential case evaluation and strategic roadmap.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5">
            <Button to="/contact" variant="primary">
              Contact Us Today
            </Button>
            <a 
              href="tel:+919830000000"
              className="inline-flex items-center justify-center font-roboto font-semibold text-sm uppercase tracking-wider text-white border-2 border-white/40 hover:border-white px-8 py-4 transition-colors"
            >
              Call +91 98300 00000
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxCta;

