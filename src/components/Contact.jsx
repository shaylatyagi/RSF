import React from 'react';

function Contact() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto space-y-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white">Let's Build the Future Responsibly</h2>
      <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">Whether modernizing operations or building scalable ecosystems, we combine intelligence with institutional trust.</p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
        <button onClick={() => scrollTo('contact')} className="w-full sm:w-auto px-10 py-4 bg-white text-brand-950 font-bold rounded-xl hover:bg-brand-500 hover:text-white transition-all shadow-lg shadow-white/5 cursor-pointer">
          Partner With Us
        </button>
        <button className="w-full sm:w-auto px-10 py-4 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
          Explore Partnership
        </button>
      </div>
    </section>
  );
}

export default Contact;