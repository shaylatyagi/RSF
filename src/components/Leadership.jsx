const cards = [
  { num: '01', title: 'AI + Deep Operations', desc: 'Infusing artificial intelligence strictly with real-world purpose to optimize enterprise execution and visibility lines.' },
  { num: '02', title: 'Governance + Infrastructure', desc: 'Treating security and cross-border data protection matrices as foundational building block layers from day one.' },
  { num: '03', title: 'Financial Orchestration + Workflows', desc: 'Embedding complex financial transaction routing seamlessly into high-scale modern industry software systems.' },
];

function Leadership() {
  return (
    <section id="leadership" className="border-b border-slate-900 py-24 px-6 max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <span className="text-xs font-bold text-sky-500 uppercase tracking-widest mono block">05 / Cross-System Expertise</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Leadership Grounded in Real Operations</h2>
        <p className="text-sm text-slate-400 font-light max-w-2xl mx-auto">
          Built and directed by experienced operators with over a decade of deep involvement across enterprise architecture, payment rails, and highly complex regulatory ecosystems.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(c => (
          <div key={c.num} className="border border-slate-900 p-6 bg-slate-950/40 space-y-3">
            <span className="text-xs font-bold text-sky-500 mono uppercase block">Intersection {c.num}</span>
            <h4 className="text-lg font-bold text-white">{c.title}</h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-br from-slate-950 to-black border border-slate-900 p-8 relative">
        <div className="absolute bottom-0 right-0 p-4 font-bold text-slate-900/60 tracking-tighter text-6xl mono select-none">VISION</div>
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mono mb-4">LONG TERM HORIZON MAP</h3>
        <p className="text-slate-300 text-lg font-light leading-relaxed italic max-w-4xl">
          "Our ultimate goal is to become the standard trusted operating infrastructure layer for complex, high-risk industries worldwide—powering seamless transactions, robust automated protection protocols, and intelligent frameworks across the global economy."
        </p>
      </div>
    </section>
  );
}
export default Leadership;