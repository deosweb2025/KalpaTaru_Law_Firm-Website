import React from 'react';
import { Briefcase, Users, Award, Shield } from 'lucide-react';

const stats = [
  {
    icon: Briefcase,
    number: '25+',
    label: 'Years of Legal Experience',
    sub: 'Proven courtroom track record'
  },
  {
    icon: Users,
    number: '1,500+',
    label: 'Cases Handled & Advised',
    sub: 'Across High Court & Civil Courts'
  },
  {
    icon: Award,
    number: '98%',
    label: 'Client Satisfaction Rate',
    sub: 'Result-oriented advocacy'
  },
  {
    icon: Shield,
    number: '100%',
    label: 'Ethics & Confidentiality',
    sub: 'Strict client privacy guaranteed'
  }
];

const StatsCounter = () => {
  return (
    <section className="relative bg-[#141318] text-white py-20 border-y border-white/10 overflow-hidden">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-10 bg-repeat pointer-events-none"
        style={{ backgroundImage: "url('/assets/images/pattern-thumb.jpg')" }}
      />

      <div className="relative max-w-boxed mx-auto px-6 lg:px-12 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="text-center p-6 border border-white/5 bg-white/[0.02] hover:border-[#D28C0E]/40 transition-colors"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#D28C0E]/10 flex items-center justify-center text-[#D28C0E]">
                  <Icon size={24} />
                </div>
                
                <div className="font-amiri text-4xl lg:text-5xl font-bold text-[#FFBF3F] mb-2 tracking-tight">
                  {item.number}
                </div>
                
                <h4 className="font-roboto text-sm font-semibold uppercase tracking-wider text-white mb-1">
                  {item.label}
                </h4>

                <p className="font-roboto text-xs text-white/60 font-light">
                  {item.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;

