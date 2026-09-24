import React, { useState, useEffect } from 'react';

const rotatingWords = ['Experience', 'Justice', 'Results'];

const HomeHero = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[440px] sm:h-[480px] md:h-[500px] lg:h-[520px] overflow-hidden bg-[#111111] text-white flex items-center justify-center isolate">
      {/* 1. Full-Bleed Edge-to-Edge Background Video - No Side Spaces */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Full-Bleed 16:9 YouTube Video Embed */}
        <iframe
          src="https://www.youtube-nocookie.com/embed/omaTcIbwt9c?autoplay=1&mute=1&controls=0&loop=1&playlist=omaTcIbwt9c&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&enablejsapi=1&playsinline=1"
          title="Kalpataru Law Firm Hero Video"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-w-[177.78vh] min-h-full scale-[1.4] opacity-90 hidden md:block"
          allow="autoplay; encrypted-media"
        />

        {/* Full-Bleed HTML5 Video Fallback (100% width & height edge-to-edge) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/images/about-lawyer.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center md:hidden"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-two-businessmen-shaking-hands-in-an-office-43335-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* 2. Balanced Dark Overlay matching screenshot */}
      <div className="absolute inset-0 bg-black/45 z-0" />

      {/* 3. Hero Overlay Content - Centered in Middle */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        {/* Subtitle: Legal Remedy */}
        <p className="italic text-[#c88a2c] text-xl sm:text-2xl md:text-[30px] font-bold mb-1.5 tracking-wide font-sans">
          Legal Remedy
        </p>

        {/* Main Title: Bringing Justice / Experience / Results */}
        <h1 className="text-3xl sm:text-5xl md:text-[62px] lg:text-[68px] font-bold tracking-tight mb-4 sm:mb-5 leading-tight font-sans">
          <span className="text-white">Bringing </span>
          <span className="text-[#c88a2c] transition-all duration-500 inline-block">
            {rotatingWords[wordIndex]}
          </span>
        </h1>

        {/* Paragraph Description with exact 2-line break on desktop */}
        <p className="font-roboto text-sm sm:text-base md:text-[18px] text-white/95 font-normal leading-relaxed max-w-[760px] mx-auto drop-shadow-sm">
          With a deep understanding of the law and a client-first approach, we ensure your legal matters are
          <span className="md:block"> handled with care, precision, and professionalism.</span>
        </p>
      </div>
    </section>
  );
};

export default HomeHero;
