import React from 'react';

function Philosophy() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-600 text-white rounded-3xl max-w-7xl mx-auto w-[calc(100%-2rem)] shadow-2xl relative overflow-hidden my-20">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-700 to-indigo-800 -z-10"></div>
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        <div className="lg:col-span-6 space-y-8">
          <h2 className="text-3xl font-heading font-extrabold tracking-tight">Our Core Philosophy</h2>
          <div className="space-y-6">
            <div className="space-y-1">
              <h5 className="font-bold text-base flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> AI with Purpose</h5>
              <p className="text-brand-100 text-sm leading-relaxed">Solving real operational challenges and creating measurable outcomes.</p>
            </div>
            <div className="space-y-1">
              <h5 className="font-bold text-base flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> Security by Design</h5>
              <p className="text-brand-100 text-sm leading-relaxed">Embedded into architecture, workflows, and culture.</p>
            </div>
            <div className="space-y-1">
              <h5 className="font-bold text-base flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Institutional Mindset</h5>
              <p className="text-brand-100 text-sm leading-relaxed">Building long-term value grounded in governance and trust.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 bg-white/10 border border-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur-md space-y-6">
          <h3 className="text-xl font-heading font-bold text-white">Industries We Focus On</h3>
          <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm font-semibold">
            {["Fintech & Payments", "Banking & NBFC", "Mobility & EV", "Enterprise Ops", "SaaS Platforms", "Security & Compliance"].map((industry, idx) => (
              <div key={idx} className="p-3.5 bg-white/10 rounded-xl hover:bg-white/15 transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Philosophy;