import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import GovernanceDashboard from './components/GovernanceDashboard';
import WhyUs from './components/WhyUs';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.closest('a')?.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="text-slate-300 min-h-screen flex flex-col overflow-x-hidden selection:bg-brand-500/30 selection:text-white bg-brand-950">
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-brand-600 rounded-full glow-orb"></div>
      <div className="fixed top-[1200px] right-1/4 w-[400px] h-[400px] bg-indigo-600 rounded-full glow-orb"></div>
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <GovernanceDashboard />
      <WhyUs />
      <Philosophy />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;