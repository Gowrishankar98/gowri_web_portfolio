import React, { useState, useEffect } from 'react';

const Navbar = ({ onOpenArchitectureModal }) => {
  const [activeTab, setActiveTab] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        { id: 'about', offset: 0 },
        { id: 'experience', offset: 0 },
        { id: 'architecture', offset: 0 },
        { id: 'tech', offset: 0 },
        { id: 'contact', offset: 0 }
      ];

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveTab(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Architecture & Systems', id: 'architecture' },
    { name: 'Tech Stack', id: 'tech' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#080d19]/90 backdrop-blur-md border-b border-[#1b263b] shadow-xl shadow-black/20' 
        : 'bg-[#080d19]/70 backdrop-blur-sm border-b border-[#162033]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#about" 
          onClick={(e) => scrollToSection(e, 'about')}
          className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
        >
          {/* Hexagonal Tech Icon */}
          <div className="w-8 h-8 rounded bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:border-blue-400 group-hover:bg-blue-600/20 transition-all shrink-0">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-xs sm:text-sm tracking-wide text-white group-hover:text-blue-300 transition-colors whitespace-nowrap">
              GOWRISHANKAR K
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium tracking-tight bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              PROD ENGINEER // ARCH
            </span>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-150 ${
                  isActive
                    ? 'text-white bg-blue-600/15 border border-blue-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Download Resume */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/Gowrishankar_K_Resume.pdf"
            download="Gowrishankar_K_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
            title="Download Resume"
            className="inline-flex items-center justify-center gap-2 p-2 sm:px-3.5 sm:py-1.5 rounded-md bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-semibold shadow-md shadow-blue-600/25 transition-all duration-150 hover:shadow-blue-600/40 active:scale-95 shrink-0"
          >
            <svg className="w-4 h-4 sm:w-3.5 sm:h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span className="hidden sm:inline">Download Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none shrink-0"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090e1b] border-b border-[#1b273d] px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800/80 space-y-1">
            <a
              href="/Gowrishankar_K_Resume.pdf"
              download="Gowrishankar_K_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-md text-xs font-mono text-emerald-400 hover:bg-emerald-900/20"
            >
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download Resume (PDF)</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenArchitectureModal) onOpenArchitectureModal();
              }}
              className="w-full text-left px-3 py-2 rounded-md text-xs font-mono text-blue-400 hover:bg-blue-900/20"
            >
              &gt; Open Architecture Specs
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
