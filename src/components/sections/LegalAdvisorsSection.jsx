import React from 'react';

const LegalAdvisorsSection = () => {
  return (
    <section className="py-14 md:py-20 bg-white overflow-hidden">
      <div className="max-w-wide mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Content from Screenshot */}
          <div className="lg:col-span-7">
            {/* Short Warm Brown Accent Line */}
            <div className="w-14 h-[3px] bg-[#704229] mb-4" />

            <h2 className="font-roboto text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1a1a1a] tracking-tight leading-[1.2] mb-3">
              Legal-Advisors-<br className="hidden sm:inline" />Consultant
            </h2>

            <p className="font-roboto text-base sm:text-lg text-[#555555] italic mb-6">
              Kalpataru Law Firm – Noteworthy Achievements
            </p>

            <div className="font-roboto text-sm sm:text-[14.5px] text-[#4a4a4a] leading-[1.8] font-normal max-w-xl">
              <p>
                Introducing Kalpataru Law Firm, a distinguished professional with an impressive track record of noteworthy achievements, including Supreme Court Judgement regarding valuation of property and actual occupancy charges with Mesne Profit calculation. With years of experience in the legal field, Kalpataru Law Firm has successfully handled complex cases and delivered favourable outcomes for clients. His expertise spans across various domains, including civil and criminal law. Known for his meticulous approach and strong analytical skills, Kalpataru Law Firm has earned a reputation for being a reliable and trustworthy legal advisor.
              </p>
            </div>
          </div>

          {/* Right Column: Exact Desk Consultation Photo with Rounded Corners */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl shadow-md">
              <img 
                src="/assets/images/home-consult.jpg" 
                alt="Legal Advisors Consultant - Kalpataru Law Firm" 
                className="w-full h-auto max-h-[480px] object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LegalAdvisorsSection;

