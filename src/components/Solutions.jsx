import React from 'react';

const solutions = [
  { icon: "binary", title: "AI & Automation", features: ["AI Workflow Automation", "Operational Dashboards", "Intelligent Analytics", "Document Processing"], color: "brand" },
  { icon: "wallet", title: "Fintech Systems", features: ["Payment Platforms", "Settlement Automation", "Fraud Intelligence", "Compliance Monitoring"], color: "indigo" },
  { icon: "lock", title: "Governance & Security", features: ["DPDP Readiness", "ISO 27001 Frameworks", "Audit Intelligence", "Risk Management"], color: "purple" },
  { icon: "nav", title: "Mobility & EV", features: ["Fleet Management", "Vehicle Rental Ecosystems", "Driver Analytics", "GPS Monitoring"], color: "cyan" }
];

const getIcon = (icon) => {
  if (icon === "binary") return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>;
  if (icon === "wallet") return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round"strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;
  if (icon === "lock") return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>;
};

function Solutions() {
  return (
    <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20 border-y border-white/[0.02]">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs font-bold tracking-widest text-brand-500 uppercase">Modular Services Ecosystem</div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-white">Our Solutions</h2>
          <p className="text-sm sm:text-base text-slate-400">Engineered platforms designed to support modern enterprise operational pipelines perfectly.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl hover:border-brand-500/30 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className={`w-10 h-10 rounded-xl bg-${solution.color}-500/10 border border-${solution.color}-500/20 flex items-center justify-center text-${solution.color}-400 group-hover:bg-${solution.color}-600 group-hover:text-white transition-all`}>
                  {getIcon(solution.icon)}
                </div>
                <h3 className="text-lg font-heading font-bold text-white">{solution.title}</h3>
                <ul className="text-slate-400 text-xs space-y-2.5 pt-2">
                  {solution.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-600"></span>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions;