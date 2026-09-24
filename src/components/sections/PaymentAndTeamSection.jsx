import React from 'react';

const PaymentAndTeamSection = () => {
  return (
    <>
      {/* 1. Make Payment Via QR Code Banner */}
      <section className="bg-[#d9d9d9] py-8 sm:py-10">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Title */}
            <h2 className="font-roboto text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#111111] text-center sm:text-left tracking-tight">
              Make Payment Via QR Code
            </h2>

            {/* PhonePe QR Code */}
            <div className="flex-shrink-0">
              <img
                src="/assets/images/qr-code.png"
                alt="Make Payment Via PhonePe QR Code"
                className="w-32 h-32 sm:w-36 sm:h-36 object-contain bg-white shadow-sm border border-gray-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Advocate Team Photos 3-Column Gallery */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto items-center">
            {/* Photo 1: Female Advocate in Robes */}
            <div className="overflow-hidden shadow-sm flex items-center justify-center">
              <img
                src="/assets/images/IMG-20240701-WA0018.jpg"
                alt="Kalpataru Law Firm Advocate"
                className="w-full h-[300px] sm:h-[340px] md:h-[380px] object-cover object-center"
              />
            </div>

            {/* Photo 2: Male Advocate in Office with Law Books */}
            <div className="overflow-hidden shadow-sm flex items-center justify-center">
              <img
                src="/assets/images/IMG-20240701-WA0015.jpg"
                alt="Kalpataru Law Firm Senior Advocate"
                className="w-full h-[300px] sm:h-[340px] md:h-[380px] object-cover object-center"
              />
            </div>

            {/* Photo 3: Advocate Team in Court Robes */}
            <div className="overflow-hidden shadow-sm flex items-center justify-center">
              <img
                src="/assets/images/IMG-20240701-WA0013.jpg"
                alt="Kalpataru Law Firm Legal Team"
                className="w-full h-[300px] sm:h-[340px] md:h-[380px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentAndTeamSection;

