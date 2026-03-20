import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('init');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef(null);

  const searchItems = [
    { name: 'Init (Hero)', id: 'init' },
    { name: 'Tech Stack (Skills)', id: 'tech' },
    { name: 'Projects (Case Studies)', id: 'projects' },
    { name: 'Experience (Timeline)', id: 'experience' },
    { name: 'Contact (Email)', id: 'contact' },
  ];

  const filteredItems = searchItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      // CMD+K or CTRL+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setShowSearch(false);
        setSearchQuery('');
        searchInputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearchSelect = (e, id) => {
    scrollToSection(e, id);
    setSearchQuery('');
    setShowSearch(false);
    searchInputRef.current?.blur();
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed navbar
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['init', 'tech', 'projects', 'experience', 'contact'];
      let currentSection = activeTab;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the element is within the upper half of the screen
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      }
      
      if (currentSection !== activeTab) {
        setActiveTab(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state based on scroll position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  const getLinkClasses = (tabName) => {
    const baseClasses = "font-mono uppercase tracking-widest text-sm transition-colors pb-1";
    if (activeTab === tabName) {
      return baseClasses + " text-indigo-400 border-b-2 border-indigo-400 font-bold";
    }
    return baseClasses + " text-slate-400 hover:text-indigo-200";
  };
  return (
    <nav className="fixed top-0 w-full border-b border-white/10 bg-slate-900/40 backdrop-blur-xl z-50 shadow-[0_0_40px_rgba(99,102,241,0.05)]">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-full">
        <div className="font-mono font-bold text-xl tracking-tighter text-indigo-400 dark:text-indigo-300">
          KINETIC_TERMINAL
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a className={getLinkClasses('init')} href="#init" onClick={(e) => scrollToSection(e, 'init')}>Init</a>
          <a className={getLinkClasses('tech')} href="#tech" onClick={(e) => scrollToSection(e, 'tech')}>Tech Stack</a>
          <a className={getLinkClasses('projects')} href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
          <a className={getLinkClasses('experience')} href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experience</a>
          <a className={getLinkClasses('contact')} href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
        </div>
        <div className="flex items-center gap-4 relative">
          <div className="hidden lg:flex items-center bg-surface-container-lowest border border-primary/20 rounded px-3 py-1.5 w-64 group focus-within:border-primary transition-all relative">
            <span className="material-symbols-outlined text-outline text-sm mr-2" data-icon="terminal">terminal</span>
            <input 
              ref={searchInputRef}
              className="bg-transparent border-none text-xs font-mono focus:ring-0 p-0 placeholder:text-outline/50 w-full uppercase outline-none" 
              placeholder="CMD + K TO SEARCH" 
              type="text" 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearch(true);
              }}
              onFocus={() => setShowSearch(true)}
              onBlur={() => setTimeout(() => setShowSearch(false), 200)}
            />
            {/* Search Dropdown */}
            {showSearch && searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-surface-container-highest border border-primary/20 rounded-md shadow-2xl z-50 overflow-hidden">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, idx) => (
                    <button
                      key={idx}
                      className="w-full text-left px-4 py-3 text-xs font-mono uppercase text-on-surface-variant hover:bg-white/5 hover:text-primary transition-colors flex items-center gap-2 border-b border-white/5 last:border-b-0 cursor-pointer"
                      onClick={(e) => handleSearchSelect(e, item.id)}
                    >
                      <span className="text-secondary">&gt;_</span>
                      {item.name}
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-3 text-xs font-mono uppercase text-error-dim opacity-70">
                    ERR: NO_MATCHES_FOUND
                  </div>
                )}
              </div>
            )}
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
