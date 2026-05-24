const govItems = ['Governance Architecture','Security Governance','Compliance Automation','Loss Prevention Centre','Justice Readiness Hubs','Operational Risk Controls','Policy & SOP Governance','Enterprise Visibility','Regulatory Frameworks','Data Protection Infra','Audit Readiness Hubs','Compliance-Led Governance'];
const tags = ['Financial Institutions','Fintech Systems','NBFC Frameworks','Mobility Networks'];

function Governance() {
  return (
    <section id="governance" className="border-b border-slate-900 py-20 bg-slate-950/40">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start px-6">
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-bold text-sky-500 uppercase tracking-widest mono block">04 / Regulatory Enforcements</span>
          <h2 className="text-3xl font-bold tracking-tight text-white">Global Governance & Regulatory Readiness</h2>
          <p className="text-sm text-slate-400 font-light leading-relaxed">
            RazorSharpFocus provides enterprises with unified system perimeters that translate highly complex, multi-country regulatory mandates directly into structural technical constraints.
          </p>
          <div className="border border-slate-900 bg-black p-5 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mono block">APPROVED FOR DEPLOYMENT WITHIN:</span>
            <div className="flex flex-wrap gap-2 text-[10px] mono">
              {tags.map(t => (
                <span key={t} className="px-2.5 py-1 bg-slate-900 border border-slate-800 text-white font-medium">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-semibold tracking-wider text-slate-300 mono">
          {govItems.map(g => (
            <div key={g} className="border border-slate-900 bg-black/40 p-4 hover:border-sky-500/40 transition">{g}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Governance;