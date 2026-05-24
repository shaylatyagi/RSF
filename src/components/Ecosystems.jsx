const systems = [
  { name: 'RazorMobility', code: 'SYS-M01', desc: 'AI-native logistics, vehicle leasing tracking, and fleet operational oversight networks.', items: ['Vehicle Lease Core','Recovery Intel','Driver Risk Matrix'] },
  { name: 'RazorLend', code: 'SYS-L02', desc: 'Processing layers for complex corporate debt structures and institutional repayment flows.', items: ['Repayment Chains','Settlement Clearings','Compliance Workflows'] },
  { name: 'RazorEstate', code: 'SYS-E03', desc: 'Embedded transaction software and escrow routing setups for large property management ecosystems.', items: ['Escrow Automation','Billing Network Gates','Yield Performance View'] },
  { name: 'RazorHealth', code: 'SYS-H04', desc: 'Secure financial tracking pipelines for high-volume billing operations across healthcare grids.', items: ['Patient Collection Logs','Vendor Payout Lines','Secure Audit Trails'] },
  { name: 'RazorOps', code: 'SYS-O05', desc: 'Cross-enterprise dashboarding and deep internal workflow orchestration frameworks.', items: ['Vendor Governance AI','Process Automations','Core Node Analytics'] },
];

function Ecosystems() {
  return (
    <section id="ecosystems" className="border-b border-slate-900 bg-slate-950/20">
      <div className="max-w-7xl mx-auto p-6 md:p-12 lg:p-16 space-y-12">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold text-sky-500 uppercase tracking-widest mono block">03 / Target System Implementations</span>
          <h2 className="text-3xl font-bold tracking-tight text-white">Industry Infrastructure Ecosystems</h2>
          <p className="text-sm text-slate-400 font-light">Vertical specialized industrial solutions driven at the core layer by localized RazorCore engines.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {systems.map(s => (
            <div key={s.name} className="border border-slate-900 bg-black/60 p-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex justify-between items-center border-b border-slate-900 pb-2 mb-4">
                  <span className="text-white font-bold text-sm tracking-wide">{s.name}</span>
                  <span className="text-[9px] text-sky-400 mono">{s.code}</span>
                </div>
                <p className="text-[11px] text-slate-500 font-light leading-relaxed mb-4">{s.desc}</p>
              </div>
              <div className="text-[10px] text-slate-400 font-medium mono space-y-1">
                {s.items.map(i => <div key={i}>• {i}</div>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Ecosystems;