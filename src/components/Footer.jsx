import React from 'react';

function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-brand-950 border-t border-white/[0.04] py-16 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xl font-heading font-extrabold text-white">RazorSharpFocus</div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">Governance-First AI Infrastructure for Modern Enterprises. AI | Governance | Security | Compliance.</p>
          </div>
          <div>
            <h6 className="text-white font-heading font-bold mb-4 text-xs tracking-widest uppercase">Company</h6>
            <ul className="text-slate-500 space-y-2.5 text-xs font-medium">
              <li><button onClick={() => scrollTo('about')} className="hover:text-white transition-colors cursor-pointer">About Us</button></li>
              <li><button onClick={() => scrollTo('solutions')} className="hover:text-white transition-colors cursor-pointer">Solutions</button></li>
              <li><button onClick={() => scrollTo('why-us')} className="hover:text-white transition-colors cursor-pointer">Industries</button></li>
              <li><button onClick={() => scrollTo('governance-dashboard')} className="hover:text-white transition-colors cursor-pointer">Governance</button></li>
            </ul>
          </div>
          <div>
            <h6 className="text-white font-heading font-bold mb-4 text-xs tracking-widest uppercase">Legal</h6>
            <ul className="text-slate-500 space-y-2.5 text-xs font-medium">
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors cursor-pointer">Contact</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-600 text-xs font-medium">
          <div>© 2026 RazorSharpFocus. Building Governance-First AI Infrastructure for Modern Enterprises.</div>
          <div className="flex items-center gap-4 text-[11px] font-mono tracking-wider text-slate-500">
            <span>SOC2 TYPE II</span>
            <span>•</span>
            <span>ISO 27001 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;