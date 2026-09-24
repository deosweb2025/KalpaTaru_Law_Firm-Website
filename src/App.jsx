import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Career from './pages/Career';
import Contact from './pages/Contact';

const FAVICON_SVG_DATA_URI = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij4KICA8Y2lyY2xlIGN4PSI2NCIgY3k9IjY0IiByPSI2MiIgZmlsbD0iIzQxNkU5QiIgLz4KICA8Y2lyY2xlIGN4PSI2NCIgY3k9IjY0IiByPSI1NiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQuNSIgLz4KICA8ZyBmaWxsPSIjZmZmZmZmIj4KICAgIDxwYXRoIGQ9Ik0xOS41IDY0YzAgMTcuNSA5LjcgMzIuNyAyNC4xIDQwLjVMMjMuNCA0OC42QzIwLjkgNTMuMyAxOS41IDU4LjUgMTkuNSA2NHoiLz4KICAgIDxwYXRoIGQ9Ik04Ni4xIDYxLjZjMC02LjEtMi4yLTEwLjMtNC4xLTEzLjYtMi41LTQuNC00LjgtOC4xLTQuOC0xMi41IDAtMy45IDMtNy41IDcuMi03LjUuMyAwIC42IDAgLjkuMS02LjEtNS43LTE0LjMtOS4xLTIzLjMtOS4xLTEyLjMgMC0yMy4zIDYuMy0yOS44IDE1LjggMS40LjEgMi44LjEgMy45LjEgNi4zIDAgMTYuMS0uOCAxNi4xLS44IDMuMy0uMiAzLjcgNC42LjQgNC45IDAgMC0zLjMuNC03IDAuNmwyMi4yIDY2LjEgMTMuMy0zOS45LTkuNS0yNi4yYy0zLjMtLjItNi41LS42LTYuNS0uNi0zLjMtLjItMy01IC40LTQuOSAwIDAgMTAuMS44IDE2LjEuOCA2LjMgMCAxNi4xLS44IDE2LjEtLjggMy4zLS4yIDMuNyA0LjYuNCA0LjkgMCAwLTMuMy40LTcgLjZsMjEuOCA2ND45IDYuMS0yMC40YzIuOC04LjggNC45LTE1LjEgNC45LTIwLjV6Ii8+CiAgICA8cGF0aCBkPSJNNjUuNCA2OS44bC0xOC4yIDUyLjhjNS40IDEuNiAxMS4xIDIuNCAxNi44IDIuNCA3IDAgMTMuNi0xLjMgMTkuOC0zLjYtMC4zLS40LS41LS45LS44LTEuNUw2NS40IDY5Ljh6Ii8+CiAgICA8cGF0aCBkPSJNMTAzLjcgNDcuOWMuNSAyLjUuOCA1LjMuOCA4LjQgMCA4LjMtMS42IDE3LjYtNi4zIDI5LjVsLTE4LjcgNTQuMWMxNi4xLTguMSAyNi45LTI0LjggMjYuOS00My45IDAtMTAuNy0zLjQtMjAuNy05LjMtMjguOS4xLjMuNC42LjYuOHoiLz4KICA8L2c+Cjwvc3ZnPg==";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Force set favicon on every mount and route change
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.type = 'image/svg+xml';
    link.href = FAVICON_SVG_DATA_URI;
  }, [location.pathname]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/practice-areas" element={<Services />} />
        <Route path="/career" element={<Career defaultRole="Legal Assistant" />} />
        <Route path="/legal-assistant" element={<Career defaultRole="Legal Assistant" />} />
        <Route path="/office-assistant" element={<Career defaultRole="Office Assistant" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-us" element={<Contact />} />
        {/* Fallback route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
