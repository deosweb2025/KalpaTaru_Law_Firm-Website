import React from 'react';
import AskQueryBanner from '../components/sections/AskQueryBanner';
import LegalAdvisorsSection from '../components/sections/LegalAdvisorsSection';

const About = () => {
  return (
    <div className="bg-white">
      {/* Top Banner: Dark Background with Gold "About Us" */}
      <section className="bg-[#16202c] py-12 md:py-16 border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#e6ad47] tracking-tight">
            About Us
          </h1>
        </div>
      </section>

      {/* Main Section: Lady Justice Image + "We Get It Right The First Time" */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Exact Lady Justice Bronze Statue with Scales */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-xl shadow-md">
                <img 
                  src="/assets/images/view-3d-scales-justice-lawyer-s-day.jpg" 
                  alt="Kalpataru Law Firm - Lady Justice" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Column: "We Get It Right The First Time" Content */}
            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#1f2937] leading-tight mb-5">
                We Get It Right The First Time
              </h2>

              <p className="text-[#4b5563] text-sm sm:text-[15px] leading-relaxed font-normal">
                Introducing our Valuers for Factory Assets Appraisal, a cutting-edge app designed to provide accurate and reliable assessments of your industrial assets. With our variable charging system, we ensure that you only pay for the services you need. Our team of expert valuers utilizes advanced techniques to evaluate the worth of your factory assets, including machinery, equipment, and inventory. Whether you are looking to sell, insure, or make investment decisions, our app offers comprehensive and detailed reports to assist you. Trust our Valuers for Factory Assets Appraisal to deliver precise valuations, helping you make informed business choices. Experience the convenience and professionalism of our app today.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Ask Your Query Banner */}
      <AskQueryBanner />

      {/* Legal-Advisors-Consultant Section */}
      <LegalAdvisorsSection />
    </div>
  );
};

export default About;
