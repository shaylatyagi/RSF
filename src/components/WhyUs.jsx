import React from 'react';

function WhyUs() {
  return (
    <section id="why-us" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-3xl font-heading font-extrabold text-white">Why RazorSharpFocus</h2>
        <p className="text-slate-400 text-sm sm:text-base">Sustainable growth through operational discipline.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-3 p-4 border-l border-white/10 hover:border-brand-500 transition-colors">
          <h4 className="text-lg font-heading font-bold text-white">Governance Before Scale</h4>
          <p className="text-slate-400 text-sm leading-relaxed">We believe growth is built on transparency, security, and institutional trust. Governance is baked into our core.</p>
        </div>
        <div className="space-y-3 p-4 border-l border-white/10 hover:border-brand-500 transition-colors">
          <h4 className="text-lg font-heading font-bold text-white">Real-World Experience</h4>
          <p className="text-slate-400 text-sm leading-relaxed">Our foundation spans fintech, payments, and enterprise infrastructure. We understand institutional realities.</p>
        </div>
        <div className="space-y-3 p-4 border-l border-white/10 hover:border-brand-500 transition-colors">
          <h4 className="text-lg font-heading font-bold text-white">Infrastructure-First</h4>
          <p className="text-slate-400 text-sm leading-relaxed">We don't just build software; we build reusable ecosystems and scalable digital foundations.</p>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;