import React from 'react';

const Footer = ({ onOpenArchitectureModal }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full border-t border-[#162033] bg-[#070b15] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Subtitle */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-heading font-bold text-sm tracking-wide text-white">
              GOWRISHANKAR K
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-xs font-mono text-slate-400">
              Senior Software Engineer
            </span>
          </div>
          <p className="text-[11px] font-mono text-slate-500">
            High-concurrency systems, cross-platform mobile architecture &amp; real-time engines.
          </p>
        </div>

        {/* Footer Nav Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[10px] sm:text-[11px] font-mono tracking-wider text-slate-400 uppercase">
          <a
            href="https://linkedin.com/in/gowrishankar-k-a66305117"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            LINKEDIN PROFILE
          </a>

          <button
            onClick={() => {
              if (onOpenArchitectureModal) onOpenArchitectureModal();
              else scrollTo('architecture');
            }}
            className="hover:text-blue-400 transition-colors cursor-pointer"
          >
            ARCHITECTURE SPECS
          </button>

          <button
            onClick={() => scrollTo('about')}
            className="hover:text-blue-400 transition-colors cursor-pointer"
          >
            PERFORMANCE METRICS
          </button>

          <button
            onClick={() => scrollTo('experience')}
            className="hover:text-blue-400 transition-colors cursor-pointer"
          >
            INDUSTRY HONORS
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="hover:text-blue-400 transition-colors cursor-pointer"
          >
            EXPERT ADVISORY
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
