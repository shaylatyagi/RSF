import React from 'react';

function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <header id="hero" className="relative pt-40 pb-24 md:pt-48 md:pb-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/30 px-3 py-1.5 rounded-full text-xs font-semibold text-brand-400 tracking-wide uppercase mx-auto lg:mx-0">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
            Infrastructure Architecture 2026
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight leading-[1.1] text-gradient">
            Building Governance-First AI Infrastructure
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            AI-Powered Enterprise Solutions, Operational Intelligence, Security, and Compliance designed for the real world. Scaling Intelligence with Institutional Integrity.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <button onClick={() => scrollTo('contact')} className="w-full sm:w-auto text-center px-8 py-3.5 bg-white text-brand-950 font-bold rounded-xl hover:bg-brand-500 hover:text-white transition-all duration-200 shadow-xl shadow-white/5 cursor-pointer">
              Schedule a Consultation
            </button>
            <button onClick={() => scrollTo('solutions')} className="w-full sm:w-auto text-center px-8 py-3.5 border border-white/10 font-semibold rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
              Explore Solutions
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          <div className="glass-card rounded-2xl p-6 relative z-10 shadow-2xl border-white/[0.08]">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-4 text-xs font-mono tracking-wider uppercase text-slate-500">
              <span>Node Security Token Topology</span>
              <span className="text-emerald-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> SECURE</span>
            </div>
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">DPDP Governance Layer</div>
                    <div className="text-[10px] text-slate-500 font-mono">Status: Native Enforcement Active</div>
                  </div>
                </div>
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">AI Real-Time Audit Engine</div>
                    <div className="text-[10px] text-slate-500 font-mono">Processing: 4,120 transactions/sec</div>
                  </div>
                </div>
                <span className="text-[10px] bg-brand-500/20 text-brand-400 font-mono font-bold px-2 py-0.5 rounded border border-brand-500/30">99.98%</span>
              </div>
            </div>
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-indigo-600 rounded-2xl opacity-20 blur-xl"></div>
        </div>
      </div>
    </header>
  );
}

export default Hero;