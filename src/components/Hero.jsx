import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[819px] flex flex-col justify-center px-8 md:px-20 overflow-hidden pt-24">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary blur-[100px] rounded-full opacity-40"></div>
        <div className="grid grid-cols-12 gap-4 h-full w-full font-mono text-[10px] text-primary-dim leading-none select-none">
          {/* Syntax Particle Simulation Mock */}
          <div className="col-span-12 opacity-40 whitespace-pre">
{`import { flow } from 'kinetic-os';
const core = flow.init('vibe_mode');
while(active) {
    core.optimize({ precision: 'max' });
    core.render('Gowrishankar K');
}`}
          </div>
          <div className="col-span-12 opacity-20 whitespace-pre">01001011 01001001 01001110 01000101 01010100 01001001 01000011</div>
        </div>
      </div>
      <div className="relative z-10 space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest/60 border border-primary/20 rounded-full">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          <span className="font-mono text-[10px] uppercase tracking-tighter text-secondary">System Status: Optimized</span>
        </div>
        <h1 className="font-headline text-5xl md:text-8xl font-extrabold tracking-tighter leading-tight">
          GOWRISHANKAR K // <br />
          <span className="text-primary syntax-glow">SENIOR REACT NATIVE DEVELOPER</span>
        </h1>
        <p className="font-mono text-lg md:text-2xl text-on-surface-variant flex flex-wrap md:flex-nowrap items-center gap-3">
          <span className="text-secondary tracking-widest uppercase">4+ Years of Coding</span>
          <span className="hidden md:block h-px w-24 bg-outline-variant"></span>
          <span className="text-on-surface/60 italic w-full md:w-auto mt-2 md:mt-0">Building fluid cross-platform engines.</span>
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="px-8 py-3 bg-primary text-on-primary font-bold rounded-md hover:shadow-[0_0_25px_rgba(191,243,101,0.3)] hover:bg-secondary transition-all flex items-center gap-2 group">
            INITIALIZE_PROJECT
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
          </button>
          <button className="px-8 py-3 border border-outline-variant hover:bg-surface-container-high transition-all font-mono text-sm tracking-widest text-[#dfe4fe]">
            VIEW_RESOURCES.LOG
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
