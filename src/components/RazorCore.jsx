const layers = [
  {
    id: 'RC-LAYER // 01', title: 'Embedded Financial Infrastructure',
    desc: 'The processing baseline powering multi-jurisdictional financial clearing houses and heavy internal account workflows.',
    items: ['Payment Collection Infrastructure','Payout & Disbursement Systems','Settlement Orchestration Engines','End-to-End Reconciliation Automation','Merchant Financial Infrastructure','Virtual Account Networks & Ledger APIs','Fraud Detection & Risk Mapping']
  },
  {
    id: 'RC-LAYER // 02', title: 'AI Operational Intelligence',
    desc: 'Proactive decision intelligence architectures designed to automate workflows and flag multi-system anomalies instantly.',
    items: ['Advanced Workflow Intelligence Engines','AI-Based Constant Operational Monitoring','Enterprise Asset Visibility Dashboards','Deep-Tier Operational Analytics','AI-Driven Governance Oversight','Dynamic Risk Scoring Architecture','Intelligent Escalation Protocol Workflows']
  },
  {
    id: 'RC-LAYER // 03', title: 'Governance Infrastructure',
    desc: 'Strict identity checkpoints and privacy enforcement scripts baked natively into the execution pipeline.',
    items: ['Global Consent Management Platforms','System-Wide Compliance Automation','Unalterable Audit & Accountability Logs','Real-Time Operational Risk Controls','Identity & Granular Access Governance','Data Protection & Sovereignty Controls','Security Governance & Perimeter Shielding']
  }
];

function RazorCore() {
  return (
    <section id="razorcore" className="border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto p-6 md:p-12 lg:p-16 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-sky-500 uppercase tracking-widest mono block">02 / The Core Processor Layer</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">RazorCore Orchestration Engine</h2>
          <p className="text-sm text-slate-400 font-light leading-relaxed">
            A modular, multi-region AI-native orchestration network. RazorCore functions as the standard foundation block powering all modern financial workflows, intelligence gathering arrays, and deep compliance engines across our global ecosystem.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-0 border border-slate-900 divide-y lg:divide-y-0 lg:divide-x divide-slate-900 bg-black/30">
          {layers.map(l => (
            <div key={l.id} className="p-8 space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-widest mono">{l.id}</span>
                <span className="text-[10px] text-slate-600 font-bold mono">ACTIVE_NODE</span>
              </div>
              <h3 className="text-xl font-bold text-white">{l.title}</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">{l.desc}</p>
              <ul className="space-y-1.5 pt-4 border-t border-slate-900 text-[11px] text-slate-400 font-medium mono">
                {l.items.map(i => <li key={i}>▪ {i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default RazorCore;