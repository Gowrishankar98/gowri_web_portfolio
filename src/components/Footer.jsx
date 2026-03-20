import React from 'react';

const Footer = () => {
  return (
    <>
      <main>
        {/* CTA Section */}
        <section className="py-24 px-8 md:px-20 text-center" id="contact">
          <div className="bg-surface-container-high rounded-3xl p-16 border border-primary/10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent"></div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-5xl font-headline font-extrabold uppercase tracking-tight">Ready to Initialize?</h2>
              <p className="text-on-surface-variant text-xl max-w-xl mx-auto font-mono">
                // AVAILABLE FOR SENIOR ARCHITECTURAL ROLES &amp; CONSULTING
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a className="px-10 py-4 bg-primary text-on-primary font-bold rounded shadow-[0_10px_30px_rgba(99,102,241,0.2)] hover:scale-105 transition-transform flex items-center gap-3" href="mailto:gowrishankarkrce@gmail.com">
                  <span className="material-symbols-outlined" data-icon="mail">mail</span>
                  GET_IN_TOUCH
                </a>
                <a className="px-10 py-4 border border-outline hover:bg-white/5 transition-colors font-mono uppercase tracking-widest text-sm flex items-center gap-3" href="/Gowrishankar_K_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined" data-icon="download">download</span>
                  GET_MY_RESUME
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-indigo-900/30 bg-[#070d1f]">
        <div className="flex flex-wrap justify-between items-center px-8 py-4 w-full">
          <div className="font-mono text-xs uppercase tracking-tight text-lime-400">
            © 2024 KINETIC_OS v1.0.4 - STATUS: OPTIMIZED
          </div>
          <div className="flex gap-8">
            <a className="text-slate-500 hover:text-lime-300 hover:underline decoration-lime-400 font-mono text-xs uppercase tracking-tight transition-colors" href="https://github.com/Gowrishankar98" target="_blank" rel="noopener noreferrer">GITHUB</a>
            <a className="text-slate-500 hover:text-lime-300 hover:underline decoration-lime-400 font-mono text-xs uppercase tracking-tight transition-colors" href="https://linkedin.com/in/gowrishankar-k-a66305117" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            <a className="text-slate-500 hover:text-lime-300 hover:underline decoration-lime-400 font-mono text-xs uppercase tracking-tight transition-colors" href="#">SOURCE</a>
          </div>
          <div className="hidden lg:block text-slate-700 font-mono text-[10px]">
            LOC: 17.4486° N, 78.3924° E
          </div>
        </div>
      </footer>

      {/* BottomNavBar (Mobile only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-xl border-t border-white/5 z-50">
        <div className="flex justify-around items-center p-4">
          <button className="flex flex-col items-center gap-1 text-indigo-400">
            <span className="material-symbols-outlined" data-icon="code">code</span>
            <span className="text-[8px] font-mono uppercase">Flow</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined" data-icon="layers">layers</span>
            <span className="text-[8px] font-mono uppercase">Stack</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined" data-icon="work">work</span>
            <span className="text-[8px] font-mono uppercase">Logs</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined" data-icon="contact_mail">contact_mail</span>
            <span className="text-[8px] font-mono uppercase">Contact</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
