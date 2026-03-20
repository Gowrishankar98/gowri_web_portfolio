import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full border-b border-white/10 bg-slate-900/40 backdrop-blur-xl z-50 shadow-[0_0_40px_rgba(99,102,241,0.05)]">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-full">
        <div className="font-mono font-bold text-xl tracking-tighter text-indigo-400 dark:text-indigo-300">
          KINETIC_TERMINAL
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a className="text-indigo-400 border-b-2 border-indigo-400 pb-1 font-bold font-mono uppercase tracking-widest text-sm" href="#">Experience</a>
          <a className="text-slate-400 hover:text-indigo-200 transition-colors font-mono uppercase tracking-widest text-sm" href="#">Projects</a>
          <a className="text-slate-400 hover:text-indigo-200 transition-colors font-mono uppercase tracking-widest text-sm" href="#">Tech Stack</a>
          <a className="text-slate-400 hover:text-indigo-200 transition-colors font-mono uppercase tracking-widest text-sm" href="#">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-surface-container-lowest border border-primary/20 rounded px-3 py-1.5 w-64 group focus-within:border-primary transition-all">
            <span className="material-symbols-outlined text-outline text-sm mr-2" data-icon="terminal">terminal</span>
            <input className="bg-transparent border-none text-xs font-mono focus:ring-0 p-0 placeholder:text-outline/50 w-full uppercase outline-none" placeholder="CMD + K TO SEARCH" type="text" />
          </div>
          <button className="p-2 hover:bg-white/5 transition-all duration-200 cursor-pointer">
            <span className="material-symbols-outlined text-indigo-400" data-icon="settings">settings</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
