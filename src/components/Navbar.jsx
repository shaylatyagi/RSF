import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-brand-950/75 backdrop-blur-md border-b border-white/[0.06] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        <div className="text-xl font-heading font-extrabold tracking-tight text-white flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center text-sm font-black text-white shadow-lg shadow-brand-600/20">
            RS
          </div>
          RazorSharp<span className="text-brand-500 font-medium">Focus</span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
          <button onClick={() => scrollTo('about')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">About</button>
          <button onClick={() => scrollTo('solutions')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">Solutions</button>
          <button onClick={() => scrollTo('why-us')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">Why Us</button>
          <button onClick={() => scrollTo('governance-dashboard')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">Live Matrix</button>
          <button onClick={() => scrollTo('contact')} className="bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 text-white px-5 py-2.5 rounded-lg font-semibold tracking-normal transition-all duration-200 shadow-md shadow-brand-600/10 cursor-pointer">
            Get Started
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-400 hover:text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-b border-white/[0.06] bg-brand-950/95 backdrop-blur-xl">
          <div className="px-4 pt-2 pb-6 space-y-3 font-medium text-sm">
            <button onClick={() => scrollTo('about')} className="block w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white">About</button>
            <button onClick={() => scrollTo('solutions')} className="block w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white">Solutions</button>
            <button onClick={() => scrollTo('why-us')} className="block w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white">Why Us</button>
            <button onClick={() => scrollTo('governance-dashboard')} className="block w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white">Live Matrix</button>
            <div className="pt-2 border-t border-white/[0.06]">
              <button onClick={() => scrollTo('contact')} className="w-full text-center bg-brand-600 text-white px-4 py-3 rounded-lg font-semibold">Get Started</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;