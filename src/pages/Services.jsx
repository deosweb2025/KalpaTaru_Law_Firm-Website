import React from 'react';

const serviceCards = [
  {
    title: 'Business Law',
    desc: 'Dealing with public and private business relations is easier with our professional help'
  },
  {
    title: 'Criminal Law',
    desc: 'We work with top executives to help them make better decisions regarding criminal cases.'
  },
  {
    title: 'DUI Law',
    desc: 'We have the training and technology to bring your case to court, or to defend your rights.'
  },
  {
    title: 'Employment Law',
    desc: 'We determine if there is a liability on the part of our client and defend against any payment.'
  },
  {
    title: 'Family Law',
    desc: 'We will be attending court sessions to get the final resolution for the current family case.'
  },
  {
    title: 'Labor Law',
    desc: 'Whether a worker, a union or an employer, you must know when your rights are violated.'
  },
  {
    title: 'Personal Injury Law',
    desc: 'Claims against employers, general liability claims, subrogation actions, and compensations.'
  },
  {
    title: 'Property Law',
    desc: 'Our attorneys are experienced and highly skilled in all aspects of property law trial work'
  }
];

const Services = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner: Dark Background with Gold "Services" */}
      <section className="bg-[#16202c] py-12 md:py-16 border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#e6ad47] tracking-tight">
            Services
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-12 md:py-16">
        {/* Intro Paragraph */}
        <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed mb-10 max-w-4xl font-normal">
          Utilizing advanced techniques to evaluate the worth of your factory assets, including machinery, equipment, and inventory. Explore our services and to know more – visit our services page.
        </p>

        {/* 8 Services Grid (4 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {serviceCards.map((service, index) => (
            <div
              key={index}
              className="bg-[#222226] text-white p-7 md:p-8 flex flex-col justify-start rounded-none shadow-sm hover:translate-y-[-2px] transition-transform duration-300"
            >
              <h3 className="text-[#d49a38] text-xl font-bold mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-light">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
