import React from 'react';
import Divider from '../common/Divider';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Advocate and his team at Kalpataru resolved our long-standing family property partition dispute with absolute clarity, precision, and speed. Their courtroom demeanor at Calcutta High Court was exceptional.",
    author: "S. K. Mukherjee",
    designation: "Business Owner, Kolkata",
    rating: 5
  },
  {
    quote: "When we faced unexpected commercial litigation regarding contractual non-performance, Kalpataru provided prompt strategic defense and secured an interim stay order within days. Truly reliable legal counsel.",
    author: "Debabrata Banerjee",
    designation: "Managing Director, Real Estate Developers",
    rating: 5
  },
  {
    quote: "Exceptional integrity and honest guidance. They never overpromised, gave clear practical advice, and guided our family through a complicated estate matter with utmost compassion.",
    author: "Dr. Ananya Roy",
    designation: "Consultant Physician",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-[#f4f4f4]">
      <div className="max-w-boxed mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-roboto text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#7F4222] block mb-2">
            Client Testimonials
          </span>
          <h2 className="font-amiri text-3xl sm:text-4xl lg:text-5xl font-bold text-[#202125]">
            What Our Clients Say
          </h2>
          <Divider width="60px" height="4px" color="#D28C0E" align="center" className="my-3" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 border-t-4 border-[#D28C0E] shadow-sm flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center space-x-1 text-[#D28C0E] mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#D28C0E" />
                  ))}
                </div>

                <Quote size={32} className="text-gray-200 mb-3" />

                <p className="font-didact text-base text-[#3A3A3A] leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-amiri text-xl font-bold text-[#202125] leading-tight">
                  {item.author}
                </h4>
                <span className="font-roboto text-xs text-[#7F4222] font-semibold block mt-0.5">
                  {item.designation}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

