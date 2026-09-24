import React from 'react';
import HomeHero from '../components/sections/HomeHero';
import FeatureCards from '../components/sections/FeatureCards';
import AboutSplit from '../components/sections/AboutSplit';
import PracticeAreasSection from '../components/sections/PracticeAreasSection';
import AskQueryBanner from '../components/sections/AskQueryBanner';
import LegalAdvisorsSection from '../components/sections/LegalAdvisorsSection';
import PaymentAndTeamSection from '../components/sections/PaymentAndTeamSection';
import HomeContactSection from '../components/sections/HomeContactSection';

const Home = () => {
  return (
    <>
      {/* 1. Hero with Video Background */}
      <HomeHero />

      {/* 2. 4 Feature Cards */}
      <FeatureCards />

      {/* 3. We Get It Right The First Time Section */}
      <AboutSplit />

      {/* 4. Our Services Grid */}
      <PracticeAreasSection />

      {/* 5. Ask Your Query Banner */}
      <AskQueryBanner />

      {/* 6. Legal-Advisors-Consultant Section */}
      <LegalAdvisorsSection />

      {/* 7. Make Payment Via QR Code & Advocate Team Photos Section */}
      <PaymentAndTeamSection />

      {/* 8. Contact Us & Google Map Section */}
      <HomeContactSection />
    </>
  );
};

export default Home;
