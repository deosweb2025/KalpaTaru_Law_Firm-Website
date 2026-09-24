import React from 'react';
import { Link } from 'react-router-dom';

const services = [
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
    titleFormatted: <>Employment<br />Law</>,
    desc: 'We determine if there is a liability on the part of our client and defend against any payment.'
  },
  {
    title: 'Family Law',
    desc: 'We will be attending court sessions to get the final resolution for the current family case.'
  },
  {
    title: 'Labour Law',
    desc: 'Whether a worker, a union or an employer, you must know when your rights are violated.'
  },
  {
    title: 'Personal Injury Law',
    titleFormatted: <>Personal Injury<br />Law</>,
    desc: 'Claims against employers, general liability claims, subrogation actions, and'
  },
  {
    title: 'Property Law',
    desc: 'Our attorneys are experienced and highly skilled in all aspects of property law trial work.'
  }
];

const PracticeAreasSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="services">
      <div className="max-w-wide mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-roboto text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1a1a1a] tracking-tight">
            Our Services
          </h2>

          {/* Warm Brown Accent Line */}
          <div className="w-14 h-[3px] bg-[#704229] my-4 mx-auto" />

          <p className="font-roboto text-sm sm:text-base text-[#4a4a4a] leading-relaxed mb-2">
            Leveraging years of legal experience, we provide effective solutions tailored to your legal needs—whether it’s litigation, consultation, or documentation.
          </p>
          <p className="font-roboto text-sm sm:text-base text-[#4a4a4a]">
            <strong className="font-bold text-[#1a1a1a]">Explore our services</strong> to learn how we can assist you—
            <Link to="/services" className="text-[#4a4a4a] hover:text-[#704229] transition-colors">
              [Visit Our Services Page]
            </Link>.
          </p>
        </div>

        {/* 8-Card Grid matching exact screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#202125] text-white p-8 sm:p-9 flex flex-col justify-start min-h-[220px] transition-transform duration-300 hover:-translate-y-1 shadow-md"
            >
              <h3 className="font-roboto text-xl sm:text-2xl font-medium text-[#d49a38] mb-4 leading-snug">
                {service.titleFormatted || service.title}
              </h3>
              <p className="font-roboto text-xs sm:text-[13.5px] text-[#e5e7eb] leading-relaxed font-light">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
