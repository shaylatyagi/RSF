import React from 'react';

function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-7 space-y-6">
          <div className="text-xs font-bold tracking-widest text-brand-500 uppercase">Core Infrastructure Foundation</div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-white">Building the Future of Intelligent Enterprise Infrastructure</h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            RazorSharpFocus is a Governance-First AI Infrastructure & Enterprise Solutions company focused on helping organizations modernize operations, automate intelligently, and build scalable digital ecosystems.
          </p>
          <div className="relative pl-6 py-3 border-l-2 border-brand-500">
            <p className="text-white font-medium italic text-base">
              "AI must operate with accountability, operational maturity, security, compliance, and institutional trust."
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-2xl relative">
          <h3 className="text-lg font-heading font-bold mb-4 text-brand-400">Our Vision</h3>
          <p className="text-sm text-slate-400 mb-6">Bridging the gap between AI capability and infrastructure maturity. We create systems that are:</p>
          <ul className="space-y-4 text-sm font-medium text-slate-200">
            <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-brand-500/10 border border-brand-500/30 flex items-center justify-center"><svg className="w-3 h-3 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div> Scalable & Secure</li>
            <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-brand-500/10 border border-brand-500/30 flex items-center justify-center"><svg className="w-3 h-3 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div> Operationally Resilient</li>
            <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-brand-500/10 border border-brand-500/30 flex items-center justify-center"><svg className="w-3 h-3 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div> Enterprise-Ready</li>
            <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-brand-500/10 border border-brand-500/30 flex items-center justify-center"><svg className="w-3 h-3 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div> Governance-Led</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;