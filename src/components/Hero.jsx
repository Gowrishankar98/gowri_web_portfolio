import React, { useState } from 'react';

const Hero = ({ onOpenArchitectureModal }) => {
  const [activeRuntimePill, setActiveRuntimePill] = useState('TurboModule Bridge');
  const [copiedContext, setCopiedContext] = useState(false);

  const runtimeSpecs = {
    'TurboModule Bridge': 'JSI direct memory bindings bypassing the legacy JSON serialization bridge for C++ and Native Java/Kotlin calls.',
    'Turbo Modules': 'Strongly-typed Codegen specifications generating native C++ interfaces for compile-time safety and zero runtime overhead.',
    'Fabric Renderer': 'New concurrent React 18 architecture with synchronous layout calculations and prioritized UI thread dispatch.',
    'View Specs': 'Architecture notes: Hermes 0.72 bytecode pre-compilation, MMKV key-value memory mapping, 60fps stable render loop.'
  };

  const handleCopyLog = () => {
    navigator.clipboard.writeText('Production context: Bharat Matrimony Multi-Tenant, Twilio Video Integration, TurboModules, MMKV v2, Hermes Core');
    setCopiedContext(true);
    setTimeout(() => setCopiedContext(false), 2000);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto tech-grid-bg">
      {/* Background ambient lighting */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-24 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* ================= LEFT COLUMN: HERO PROFILE & MISSION ================= */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          {/* Top 3 Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-[#0f172a] border border-[#1e293b] text-slate-300 shadow-sm">
              <svg className="w-3.5 h-3.5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
              <span>React Native Engineer</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-[#0f172a] border border-[#1e293b] text-slate-300 shadow-sm">
              <svg className="w-3.5 h-3.5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
              <span>Real-Time Systems Architect</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-[#0f172a] border border-[#1e293b] text-slate-300 shadow-sm">
              <svg className="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>Scale: Multi-Million Users</span>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Gowrishankar K
            </h1>
            <p className="text-lg sm:text-2xl font-medium text-slate-300 tracking-normal pt-1">
              Senior Software Engineer
            </p>
          </div>

          {/* Bio Description */}
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
            Engineering high-concurrency, cross-platform mobile applications across Android &amp; iOS. Specializing in single-codebase unifications for multi-million user ecosystems, high-throughput JS-Native bridges, zero-serialization MMKV storage, and real-time interactive communications for industry-leading consumer flagships.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <button
              onClick={() => {
                if (onOpenArchitectureModal) {
                  onOpenArchitectureModal();
                } else {
                  scrollToSection('architecture');
                }
              }}
              className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-md bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-semibold shadow-lg shadow-blue-600/30 transition-all hover:shadow-blue-600/40 active:scale-95 cursor-pointer w-full sm:w-auto"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              <span>View Architecture Notes</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-md border border-[#23334d] bg-[#0c1322] hover:bg-[#131c30] text-slate-200 text-xs font-semibold transition-all hover:border-slate-500 active:scale-95 cursor-pointer w-full sm:w-auto"
            >
              <svg className="w-4 h-4 text-slate-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>Quick Contact → Direct</span>
            </button>
          </div>

          {/* System Terminal Status Banner */}
          <div className="rounded-lg border border-[#1b273d] bg-[#090e1b] p-3 sm:p-3.5 space-y-2.5 mt-4 shadow-inner">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </span>
                <span className="text-emerald-400 font-semibold tracking-wide">
                  SYSTEM STATUS: NORMAL
                </span>
              </div>
              <span className="self-start sm:self-auto text-amber-400/90 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 text-[10px] font-medium">
                ENV: 4+ PROD APPS IN PRODUCTION
              </span>
            </div>

            <div className="space-y-1.5 text-[11px] font-mono text-slate-400/90 leading-tight">
              <p className="truncate">
                <span className="text-slate-500 select-none">&gt; </span>
                Production context: Bharat Matrimony Multi-Tenant, Twilio Video Integration, TurboModules, MMKV v2, Hermes Core
              </p>
              <div className="flex items-center justify-between text-slate-500 text-[10px]">
                <p className="truncate">
                  platform // cross-platform // native-bridge // android // ios // web // web-view microservices
                </p>
                <button
                  onClick={handleCopyLog}
                  className="text-slate-400 hover:text-blue-400 transition-colors ml-2 shrink-0 cursor-pointer"
                  title="Copy log context"
                >
                  {copiedContext ? 'copied' : 'copy'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: 2x2 BENTO STATS & RUNTIME ================= */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          {/* 2x2 Bento Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Card 1: Time in Field */}
            <div className="glass-card rounded-lg p-4 flex flex-col justify-between min-h-[140px] hover:border-amber-500/40">
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20">
                  TIME IN FIELD
                </span>
              </div>
              <div className="py-2">
                <div className="text-3xl font-heading font-bold text-white tracking-tight">
                  5+ Yrs
                </div>
                <p className="text-[11px] text-slate-400 font-medium leading-tight mt-0.5">
                  Industry Engineering Experience
                </p>
              </div>
              <div className="pt-2 border-t border-[#182338] flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>PROD APPS: <strong className="text-slate-200">4+</strong></span>
                <span>TEAM LEAD: <strong className="text-slate-200">Mentoring</strong></span>
              </div>
            </div>

            {/* Card 2: Core Arch */}
            <div className="glass-card rounded-lg p-4 flex flex-col justify-between min-h-[140px] hover:border-blue-500/40">
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold tracking-wider text-blue-400 bg-blue-400/10 border border-blue-400/20">
                  CORE ARCH
                </span>
              </div>
              <div className="py-2">
                <div className="text-3xl font-heading font-bold text-white tracking-tight">
                  Single-Code
                </div>
                <p className="text-[11px] text-slate-400 font-medium leading-tight mt-0.5">
                  Bharat Matrimony Ecosystem Unification
                </p>
              </div>
              <div className="pt-2 border-t border-[#182338] flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>SHARED CODEBASE: <strong className="text-emerald-400">85%+</strong></span>
              </div>
            </div>

            {/* Card 3: Performance */}
            <div className="glass-card rounded-lg p-4 flex flex-col justify-between min-h-[140px] hover:border-blue-500/40">
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg>
                </div>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold tracking-wider text-blue-400 bg-blue-400/10 border border-blue-400/20">
                  PERFORMANCE
                </span>
              </div>
              <div className="py-2">
                <div className="text-3xl font-heading font-bold text-white tracking-tight">
                  Sub-10ms
                </div>
                <p className="text-[11px] text-slate-400 font-medium leading-tight mt-0.5">
                  TurboModules &amp; MMKV Fast Engine
                </p>
              </div>
              <div className="pt-2 border-t border-[#182338] flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>LATENCY: <strong className="text-emerald-400">&lt;10ms</strong></span>
                <span>MEMORY: <strong className="text-slate-200">Zero Allocation</strong></span>
              </div>
            </div>

            {/* Card 4: Reliability */}
            <div className="glass-card rounded-lg p-4 flex flex-col justify-between min-h-[140px] hover:border-amber-500/40">
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20">
                  RELIABILITY
                </span>
              </div>
              <div className="py-2">
                <div className="text-3xl font-heading font-bold text-white tracking-tight">
                  99.9%
                </div>
                <p className="text-[11px] text-slate-400 font-medium leading-tight mt-0.5">
                  Crash-Free Sessions across Millions
                </p>
              </div>
              <div className="pt-2 border-t border-[#182338] flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>CRASH RATE: <strong className="text-emerald-400">&lt;0.1%</strong></span>
                <span>MONITORING: <strong className="text-slate-200">Sentry</strong></span>
              </div>
            </div>
          </div>

          {/* Bottom Platform Runtime Bar */}
          <div className="rounded-lg border border-[#1b273d] bg-[#090e1b] p-3 space-y-2.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-[10px] font-mono">
              <span className="text-slate-400 tracking-wider">
                CROSS-PLATFORM ARCHITECTURAL RUNTIME
              </span>
              <span className="self-start sm:self-auto text-amber-400 font-semibold bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                HERMES ENGINE v0.72+
              </span>
            </div>

            {/* 4 Interactive Selector Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              {['TurboModule Bridge', 'Turbo Modules', 'Fabric Renderer', 'View Specs'].map((pill) => {
                const isActive = activeRuntimePill === pill;
                return (
                  <button
                    key={pill}
                    onClick={() => {
                      setActiveRuntimePill(pill);
                      if (pill === 'View Specs' && onOpenArchitectureModal) {
                        onOpenArchitectureModal();
                      }
                    }}
                    className={`px-2.5 py-1.5 rounded text-[11px] font-mono text-center transition-all cursor-pointer truncate ${isActive
                        ? 'bg-blue-600 text-white font-semibold shadow-sm shadow-blue-600/30 border border-blue-400/40'
                        : 'bg-[#0f172a] text-slate-400 hover:text-slate-200 border border-[#1e293b] hover:border-slate-600'
                      }`}
                  >
                    {pill}
                  </button>
                );
              })}
            </div>

            {/* Active Pill Insight Tooltip */}
            <div className="text-[10px] font-mono text-slate-400/90 bg-[#0d1424] px-2.5 py-1.5 rounded border border-[#182338]">
              <span className="text-blue-400 font-bold select-none">&gt; </span>
              {runtimeSpecs[activeRuntimePill]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
