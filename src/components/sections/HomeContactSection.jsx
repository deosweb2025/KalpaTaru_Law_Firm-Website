import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const HomeContactSection = () => {
  return (
    <section className="bg-[#363636] text-white py-14 md:py-20 overflow-hidden" id="contact">
      <div className="max-w-wide mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Contact Us Text & Info */}
          <div className="lg:col-span-6">
            {/* Top Italic Subtitle */}
            <p className="italic text-[#d49a38] text-base sm:text-lg mb-1 font-serif">
              We'd love to hear from you
            </p>

            {/* Main Heading */}
            <h2 className="font-roboto text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight mb-3 leading-tight">
              Contact Us
            </h2>

            {/* Gold Accent Line */}
            <div className="w-12 h-[3px] bg-[#d49a38] mb-5" />

            {/* Intro Description */}
            <p className="font-roboto text-sm sm:text-[15px] text-white/90 leading-relaxed max-w-lg mb-8 font-light">
              Connect immediately if you are facing an emergency situation, connect to get instant experts assistance.
            </p>

            {/* Reach us through Subtitle */}
            <h3 className="italic text-[#d49a38] text-lg sm:text-xl font-serif mb-4">
              Reach us through
            </h3>

            {/* Contact Details List */}
            <div className="space-y-3.5 font-roboto text-sm sm:text-[14.5px]">
              {/* Phone */}
              <a
                href="tel:+918617757731"
                className="flex items-center space-x-3 text-white/95 hover:text-[#d49a38] transition-colors"
              >
                <Phone size={16} className="text-[#d49a38] flex-shrink-0" />
                <span>+91 86177 57731</span>
              </a>

              {/* Email */}
              <a
                href="mailto:kalpatarulawfirm.india@gmail.com"
                className="flex items-center space-x-3 text-white/95 hover:text-[#d49a38] transition-colors"
              >
                <Mail size={16} className="text-[#d49a38] flex-shrink-0" />
                <span>kalpatarulawfirm.india@gmail.com</span>
              </a>

              {/* Address */}
              <div className="flex items-center space-x-3 text-white/95">
                <MapPin size={16} className="text-[#d49a38] flex-shrink-0" />
                <span>4 Government Place Kolkata , Kolkata, 700001</span>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed with Marker at 4 Government Place Kolkata */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden shadow-xl border border-white/10 bg-black/20">
              <iframe
                title="Kalpataru Law Firm Location in Kolkata"
                src="https://maps.google.com/maps?q=Kalpataru%20Law%20Firm%2C%204%2C%20Government%20Place%20Rd%2C%20Lal%20Dighi%2C%20B.B.D.%20Bagh%2C%20Kolkata%2C%20West%20Bengal%20700062&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[320px] sm:h-[360px] md:h-[400px] border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeContactSection;

