import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingCta = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Exact WhatsApp Pill Button from WordPress Screenshots */}
      <a
        href="https://wa.me/918617757731?text=Hello%2C%20I%20would%20like%20to%20consult%20an%20advocate%20at%20Kalpataru%20Law%20Firm"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2.5 bg-[#59c869] hover:bg-[#4eb35d] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group font-roboto text-[15px] font-medium tracking-normal select-none cursor-pointer"
        aria-label="How can I help you?"
      >
        <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center bg-white/20">
          <MessageCircle size={15} fill="white" className="text-white" />
        </div>
        <span>How can I help you?</span>
      </a>
    </div>
  );
};

export default FloatingCta;
