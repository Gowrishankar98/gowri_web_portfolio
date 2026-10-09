import React from 'react';

const WorkExperience = () => {
  return (
    <section id="experience" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#162033]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-medium tracking-wide bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <span>PRODUCTION LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            Work Experience &amp; Engineering Roles
          </h2>
        </div>
        <p className="text-slate-400 text-xs sm:text-sm max-w-md md:text-right leading-relaxed">
          Proven track record of architecting scalable mobile architectures, leading multi-platform teams, and delivering mission-critical applications.
        </p>
      </div>

      <div className="space-y-6">
        {/* ================= ROLE 1: MATRIMONY.COM ================= */}
        <div className="glass-card rounded-xl p-6 sm:p-8 space-y-6 border border-[#1b273d] bg-[#0b101f] shadow-lg">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[#182338]">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight">
                  Senior Software Engineer
                </h3>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-medium tracking-wide bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  Current Role
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-slate-400">
                <span className="text-slate-200 font-medium">Matrimony.com</span>
                <span>•</span>
                <span>Chennai, India</span>
                <span>•</span>
                <span className="text-slate-300">Aug 2022 – Present</span>
              </div>
            </div>

            <div className="self-start lg:self-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/25">
                Domain: Real-Time Matchmaking / Consumer Tech
              </span>
            </div>
          </div>

          {/* Bullet Points */}
          <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-600/15 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5 text-blue-400">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <p className="leading-relaxed">
                <strong className="text-white font-semibold">Single-Codebase Unification:</strong> Engineered a unified, single-codebase application architecture for Bharat Matrimony and its ecosystem apps servicing long-range platform across Android and iOS using React Native CLI, eliminating fractured regional forks and unifying release velocity.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-600/15 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5 text-blue-400">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <p className="leading-relaxed">
                <strong className="text-white font-semibold">Infrastructure Scalability:</strong> Architected app system infrastructure utilizing NPM workspaces for performant monorepo package isolation and Redux for scalable central and state management across hundreds of thousands of concurrent user interactions.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-600/15 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5 text-blue-400">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <p className="leading-relaxed">
                <strong className="text-white font-semibold">High-Speed Native Performance:</strong> Overhauled application runtime with view and low-path model space by prototyping custom TurboModules for asynchronous cross-language bridge calls and MMKV for high-throughput local key-value storage.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-600/15 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5 text-blue-400">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <p className="leading-relaxed">
                <strong className="text-white font-semibold">Real-Time Video Engine:</strong> Integrated Twilio Video infrastructure for one-to-one, peer-to-peer user communications with dynamic room creation protocol, adaptive bandwidth fallback, and device hardware acceleration.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-600/15 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5 text-blue-400">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <p className="leading-relaxed">
                <strong className="text-white font-semibold">Interactive Notification Pipeline:</strong> Implemented robust cross-platform notification routing utilizing Firebase Cloud Messaging (FCM) and APNs, ensuring zero-packet drops on background-app-state transitions.
              </p>
            </li>
          </ul>

          {/* Tech Badges Footer */}
          <div className="pt-4 border-t border-[#182338] flex flex-wrap items-center gap-2">
            {['React Native CLI', 'Turbo Modules', 'MMKV', 'Redux', 'Twilio Video Engine', 'FCM', 'JavaScript'].map((tag) => (
              <span 
                key={tag}
                className="px-2.5 py-1 rounded text-[11px] font-mono bg-[#0f172a] text-slate-300 border border-[#1e293b]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ================= ROLE 2: ARCHENTS IT INDIA ================= */}
        <div className="glass-card rounded-xl p-6 sm:p-8 space-y-6 border border-[#1b273d] bg-[#0b101f] shadow-lg">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[#182338]">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight">
                  Software Engineer L3
                </h3>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-medium tracking-wide bg-slate-800 text-slate-300 border border-slate-700">
                  Prev Role - 2021–2022
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-slate-400">
                <span className="text-slate-200 font-medium">Archents IT India Pvt Ltd</span>
                <span>•</span>
                <span>Hyderabad, India</span>
                <span>•</span>
                <span className="text-slate-300">Healthcare &amp; Clinical Systems</span>
              </div>
            </div>

            <div className="self-start lg:self-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/25">
                Specialty: Native Android &amp; Healthcare Mobile
              </span>
            </div>
          </div>

          {/* Bullet Points */}
          <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-600/15 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5 text-blue-400">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <p className="leading-relaxed">
                <strong className="text-white font-semibold">Zero-to-Launch Healthcare Engines:</strong> Orchestrated architectural blueprint to drive end-to-end full lifecycle mobile engineering for CianaCare and CianaHealth digital healthcare platforms.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-600/15 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5 text-blue-400">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <p className="leading-relaxed">
                <strong className="text-white font-semibold">Native Bridging &amp; NDK Optimization:</strong> Bridged modern Java/Kotlin and native C/C++ libraries, tuning JNI thread-switching process to reduce runtime communications and crashing issues on budget Android devices.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-600/15 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5 text-blue-400">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <p className="leading-relaxed">
                <strong className="text-white font-semibold">Release Automation &amp; CI/CD:</strong> Managed deployment pipelines and staging configurations across Apple App Store Connect and Google Play Console, successfully navigating 15+ interactive production releases with zero critical rollbacks.
              </p>
            </li>
          </ul>

          {/* Tech Badges Footer */}
          <div className="pt-4 border-t border-[#182338] flex flex-wrap items-center gap-2">
            {['Android SDK', 'Kotlin', 'Java', 'JNI', 'Performance Optimization', 'App Store & Play Store CI/CD'].map((tag) => (
              <span 
                key={tag}
                className="px-2.5 py-1 rounded text-[11px] font-mono bg-[#0f172a] text-slate-300 border border-[#1e293b]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
