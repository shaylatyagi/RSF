import React, { useState } from 'react';

function GovernanceDashboard() {
  const [dpdpValue, setDpdpValue] = useState("99.98% Passing");
  const [latencyValue, setLatencyValue] = useState("14ms");
  const [isLoading, setIsLoading] = useState(false);

  const triggerSimulation = () => {
    setIsLoading(true);
    setDpdpValue("Evaluating...");
    setLatencyValue("Ping...");
    setTimeout(() => {
      setDpdpValue(`${(99.8 + Math.random() * 0.19).toFixed(2)}% Passing`);
      setLatencyValue(`${Math.floor(10 + Math.random() * 8)}ms`);
      setIsLoading(false);
    }, 750);
  };

  return (
    <section id="governance-dashboard" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-card rounded-2xl p-6 sm:p-8 border-white/[0.08] bg-gradient-to-br from-slate-900/80 via-slate-950/40 to-brand-950/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.06] pb-6 mb-6">
          <div>
            <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Interactive Network Engine Simulation
            </h3>
            <p className="text-xs text-slate-400 mt-1">Live client evaluation model demonstrating institutional data governance pipelines.</p>
          </div>
          <div>
            <button onClick={triggerSimulation} disabled={isLoading} className="px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs rounded-lg flex items-center gap-1.5 transition-colors disabled:opacity-50">
              <svg className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              Run Real-Time Check
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">System Compliance Node</span>
            <div className="text-lg font-semibold text-white mt-1 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> ISO 27001 State</div>
          </div>
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">DPDP Validation Threshold</span>
            <div className="text-xl font-mono font-bold text-brand-400 mt-1">{dpdpValue}</div>
          </div>
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">Active Flow Latency</span>
            <div className="text-xl font-mono font-bold text-white mt-1">{latencyValue}</div>
          </div>
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">Tamper Checksum Logs</span>
            <div className="text-lg font-mono font-semibold text-emerald-400 mt-1 flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              VERIFIED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GovernanceDashboard;