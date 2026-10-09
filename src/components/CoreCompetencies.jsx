import React from 'react';

const CoreCompetencies = () => {
  const domains = [
    {
      title: 'Core Mobile',
      subtitle: 'Foundation-level expertise across performance-first frameworks',
      icon: (
        <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
      specs: [
        { label: 'React Native', value: 'v0.72+', highlight: 'blue' },
        { label: 'Android SDK', value: '16 / API 36' },
        { label: 'iOS Native', value: 'Swift / Obj-C' },
        { label: 'Architecture', value: 'Clean / Redux' },
        { label: 'Codebase', value: 'Unified (85%+)', highlight: 'emerald' },
        { label: 'Testing', value: 'Jest / Detox' }
      ]
    },
    {
      title: 'Performance Bridge',
      subtitle: 'Hardware-level C/C++ binding and low-latency runtime optimization',
      icon: (
        <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
        </svg>
      ),
      specs: [
        { label: 'TurboModules', value: 'New Arch', highlight: 'blue' },
        { label: 'MMKV Storage', value: 'Zero-Sync Delay', highlight: 'amber' },
        { label: 'JNI Operations', value: 'Memory Tuned' },
        { label: 'Hermes Engine', value: 'Bytecode Opt' },
        { label: 'Memory Profiling', value: 'Flipper / Systrace' }
      ]
    },
    {
      title: 'Tooling & State',
      subtitle: 'Package distribution, workspace management, and deterministic builds',
      icon: (
        <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
      specs: [
        { label: 'NPM Workspaces', value: 'Monorepo', highlight: 'blue' },
        { label: 'Redux Toolkit', value: 'Central State' },
        { label: 'CI/CD Pipelines', value: 'Fastlane / Actions' },
        { label: 'Sentry Telemetry', value: 'Real-time Alerts' },
        { label: 'Git Architecture', value: 'Trunk-Based / PRs' }
      ]
    },
    {
      title: 'Cloud & Real-Time',
      subtitle: 'Real-time communications, streaming, and messaging protocols',
      icon: (
        <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        </svg>
      ),
      specs: [
        { label: 'Twilio Video SDK', value: 'WebRTC Mesh', highlight: 'amber' },
        { label: 'FCM & APNs', value: 'Push Notifications' },
        { label: 'Firebase', value: 'Cloud Messaging' },
        { label: 'REST & GraphQL', value: 'Network Layer' },
        { label: 'WebSockets', value: 'Real-Time Feeds' }
      ]
    }
  ];

  return (
    <section id="tech" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#162033]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-medium tracking-wide bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            <span>TECHNICAL DOMAINS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            Core Competencies &amp; System Capabilities
          </h2>
        </div>
        <p className="text-slate-400 text-xs sm:text-sm max-w-md md:text-right leading-relaxed">
          A rigorous breakdown of languages, frameworks, toolchains, bridge layers, and real-time communication modules mastered in production scale.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {domains.map((domain) => (
          <div
            key={domain.title}
            className="glass-card rounded-xl p-5 space-y-4 border border-[#1b273d] bg-[#0b101f] shadow-md flex flex-col justify-between hover:border-blue-500/30"
          >
            <div className="space-y-2">
              {/* Card Header with Icon */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded bg-[#0f172a] border border-[#1e293b] flex items-center justify-center shrink-0">
                  {domain.icon}
                </div>
                <h3 className="text-base font-heading font-bold text-white tracking-tight">
                  {domain.title}
                </h3>
              </div>

              <p className="text-[11px] text-slate-400 leading-normal min-h-[32px]">
                {domain.subtitle}
              </p>
            </div>

            {/* Spec rows table */}
            <div className="space-y-1.5 pt-2 border-t border-[#182338]">
              {domain.specs.map((spec) => {
                let badgeClass = 'bg-[#0f172a] text-slate-300 border-[#1e293b]';
                if (spec.highlight === 'blue') {
                  badgeClass = 'bg-blue-600/15 text-blue-400 border-blue-500/30 font-semibold';
                } else if (spec.highlight === 'amber') {
                  badgeClass = 'bg-amber-500/10 text-amber-400 border-amber-500/30 font-semibold';
                } else if (spec.highlight === 'emerald') {
                  badgeClass = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-semibold';
                }

                return (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between py-1 px-1.5 rounded hover:bg-white/[0.02] text-xs font-mono"
                  >
                    <span className="text-slate-400 text-[11px]">{spec.label}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] border truncate max-w-[130px] ${badgeClass}`}>
                      {spec.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreCompetencies;
