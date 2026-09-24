import React from 'react';

const cards = [
  {
    title: '20+ YEARS OF EXPERIENCE',
    iconSrc: '/assets/images/home1-icon1.png',
    alt: '20+ Years of Experience'
  },
  {
    title: '7 DAYS SERVICES',
    iconSrc: '/assets/images/home1-icon2.png',
    alt: '7 Days Services'
  },
  {
    title: 'RELIABILITY',
    iconSrc: '/assets/images/home1-icon3.png',
    alt: 'Reliability'
  },
  {
    title: 'AFFORDABLE SERVICE',
    iconSrc: '/assets/images/home1-icon4.png',
    alt: 'Affordable Service'
  }
];

const FeatureCards = () => {
  return (
    <section className="relative z-10 bg-white py-12 md:py-16">
      <div className="max-w-wide mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#18181c] text-white py-12 px-6 flex flex-col items-center justify-center text-center shadow-lg transition-transform duration-300 hover:-translate-y-1 min-h-[250px]"
            >
              {/* Exact WordPress Gold Icon Image */}
              <div className="mb-6 flex items-center justify-center h-14">
                <img
                  src={card.iconSrc}
                  alt={card.alt}
                  className="max-h-12 w-auto object-contain brightness-100"
                />
              </div>

              {/* Card Title */}
              <h3 className="font-roboto text-base sm:text-lg font-bold uppercase tracking-wider text-white leading-snug">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
