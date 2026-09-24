import React from 'react';
import { Phone } from 'lucide-react';

const AboutSplit = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-wide mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Exact Lady Justice Bronze Statue + Marble Bust Photo from Screenshot */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl shadow-md">
              <img 
                src="/assets/images/pic3.jpg" 
                alt="Kalpataru Law Firm - Lady Justice and Classical Sculpture" 
                className="w-full h-auto max-h-[640px] object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Exact Content, Typography & Button from Screenshot */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="font-roboto text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1a1a1a] tracking-tight leading-[1.2]">
              We Get It Right The<br className="hidden sm:inline" /> Time
            </h2>

            {/* Warm Brown Accent Divider Line */}
            <div className="w-14 h-[3px] bg-[#704229] my-4" />

            <div className="space-y-5 font-roboto text-sm sm:text-base text-[#4a4a4a] leading-[1.75] font-normal">
              <p>
                Introducing our valuers for land, residential and commercial buildings and factory assets appraisal – a cutting-edge app designed to provide accurate and reliable assessments of your industrial assets. With our variable charging system, we ensure that you only pay for the services you need. Our team of expert valuers utilizes advanced techniques to evaluate the worth of your factory assets, including machinery, equipment, and inventory.
              </p>

              <p>
                With years of consistent services towards justice and deep understanding/ knowledge in this field has made Kalpataru Law Firm, a reliable destination for justice, where the client’s legal right is vehemently and ethically protected with utmost loyalty toward their interest.
              </p>
            </div>

            {/* Consultation Phone Button with exact hover effect from screenshot */}
            <div className="pt-6">
              <a 
                href="tel:+918617757731"
                className="inline-flex items-center space-x-3 bg-[#704229] hover:bg-white text-white hover:text-[#704229] border-2 border-[#704229] font-roboto text-sm font-bold tracking-widest uppercase px-8 py-3.5 transition-all duration-300 shadow-sm group"
              >
                <Phone size={15} className="text-white group-hover:text-[#704229] transition-colors duration-300" />
                <span>CONSULTATION</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSplit;
