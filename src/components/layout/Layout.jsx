import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingCta from './FloatingCta';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#3A3A3A] font-roboto selection:bg-[#D28C0E] selection:text-white">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
};

export default Layout;

