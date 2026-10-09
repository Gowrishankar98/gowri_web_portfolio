import React, { useState } from 'react';

const CaseStudies = ({ onOpenArchitectureModal }) => {
  const [selectedNode, setSelectedNode] = useState('Brand Configuration');
  const [videoPing, setVideoPing] = useState(144);
  const [isSimulating, setIsSimulating] = useState(false);

  const nodeDetails = {
    'Base Core': 'Unified React Native component library, Redux store, API client, and TurboModule JSI bindings shared across all 15+ brands.',
    'Brand Configuration': 'Dynamic runtime configuration injecting brand theming, typography, language bundles, and custom feature flags without app rebuilds.',
    'Asset Cache': 'MMKV-backed zero-copy caching layer for offline brand assets, matchmaking algorithms, and pre-warmed media pipelines.'
  };

  const simulatePing = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setVideoPing(Math.floor(138 + Math.random() * 14));
      setIsSimulating(false);
    }, 600);
  };

  return (
    <section id="architecture" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#162033]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-medium tracking-wide bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
              <rect x="9" y="9" width="6" height="6"></rect>
              <line x1="9" y1="1" x2="9" y2="4"></line>
              <line x1="15" y1="1" x2="15" y2="4"></line>
              <line x1="9" y1="20" x2="9" y2="23"></line>
              <line x1="15" y1="20" x2="15" y2="23"></line>
              <line x1="20" y1="9" x2="23" y2="9"></line>
              <line x1="20" y1="14" x2="23" y2="14"></line>
              <line x1="1" y1="9" x2="4" y2="9"></line>
              <line x1="1" y1="14" x2="4" y2="14"></line>
            </svg>
            <span>SYSTEM ARCHITECTURE DEEP-DIVES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white tracking-tight">
            Featured Architecture Case Studies
          </h2>
        </div>
        <p className="text-slate-400 text-xs sm:text-sm max-w-md text-left md:text-right leading-relaxed">
          Detailed technical breakdowns addressing distributed mobile challenges, multi-tenancy, ultra-low-latency streaming, and high-concurrency event loops.
        </p>
      </div>

      {/* Grid: 2 Side-by-Side Deep-Dive Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* ================= CARD 1: BHARAT MATRIMONY MULTI-TENANT ================= */}
        <div className="glass-card rounded-xl p-4 sm:p-6 lg:p-7 space-y-6 border border-[#1b273d] bg-[#0b101f] shadow-lg flex flex-col justify-between">
          <div className="space-y-4">
            {/* Top Badges */}
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/30">
                SCALE ARCHITECTURE CASE
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                2023 – Present
              </span>
            </div>

            {/* Title & Description */}
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-white tracking-tight">
                Bharat Matrimony Multi-Tenant Regional Architecture
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Consolidated 15+ independently distributed regional matchmaking brands (Tamil Matrimony, Telugu Matrimony, Kerala Matrimony, etc.) into one unified, dynamic multi-tenant React Native application codebase without code divergence or performance compromises.
              </p>
            </div>

            {/* Architecture Flow Box */}
            <div className="rounded-lg border border-[#1e2a40] bg-[#070b15] p-3 sm:p-4 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10px] font-mono text-slate-400">
                <span>SHARED MONOREPO // REGIONAL ENGINE ROUTER</span>
                <span className="text-blue-400">Click node to inspect</span>
              </div>

              {/* 3 Node Diagram */}
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                <button
                  onClick={() => setSelectedNode('Base Core')}
                  className={`p-2.5 rounded border transition-all cursor-pointer ${
                    selectedNode === 'Base Core'
                      ? 'bg-blue-600/20 border-blue-400 text-white shadow-sm'
                      : 'bg-[#0f172a] border-[#1e293b] text-slate-300 hover:border-slate-500'
                  }`}
                >
                  <div className="font-semibold text-blue-300 mb-0.5">Base Core</div>
                  <div className="text-[9px] text-slate-400">Shared Engine</div>
                </button>

                <button
                  onClick={() => setSelectedNode('Brand Configuration')}
                  className={`p-2.5 rounded border transition-all cursor-pointer ${
                    selectedNode === 'Brand Configuration'
                      ? 'bg-blue-600/20 border-blue-400 text-white shadow-sm'
                      : 'bg-[#0f172a] border-[#1e293b] text-slate-300 hover:border-slate-500'
                  }`}
                >
                  <div className="font-semibold text-blue-300 mb-0.5">Brand Config</div>
                  <div className="text-[9px] text-slate-400">Dynamic Router</div>
                </button>

                <button
                  onClick={() => setSelectedNode('Asset Cache')}
                  className={`p-2.5 rounded border transition-all cursor-pointer ${
                    selectedNode === 'Asset Cache'
                      ? 'bg-blue-600/20 border-blue-400 text-white shadow-sm'
                      : 'bg-[#0f172a] border-[#1e293b] text-slate-300 hover:border-slate-500'
                  }`}
                >
                  <div className="font-semibold text-blue-300 mb-0.5">Local Cache</div>
                  <div className="text-[9px] text-slate-400">MMKV Pipeline</div>
                </button>
              </div>

              {/* Node Detail Bar */}
              <div className="text-[10px] font-mono text-slate-400 bg-[#0d1424] p-2 rounded border border-[#182338]">
                <span className="text-amber-400 font-bold">&gt; {selectedNode}: </span>
                {nodeDetails[selectedNode]}
              </div>
            </div>

            {/* Bullet Points with Check Diamond */}
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 pt-1">
              <li className="flex items-start gap-2.5">
                <span className="text-blue-400 shrink-0 font-bold">◆</span>
                <p>
                  Cut feature release rollout latency by over <strong className="text-emerald-400 font-semibold">60%</strong> across all 15 regional platforms.
                </p>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-blue-400 shrink-0 font-bold">◆</span>
                <p>
                  Reduced total code redundancy and duplicated component overhead by <strong className="text-emerald-400 font-semibold">70%</strong>.
                </p>
              </li>
            </ul>
          </div>

          {/* Footer Tags */}
          <div className="pt-4 border-t border-[#182338] flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              {['NPM Workspaces', 'Redux State Management', 'Hermes Engine'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded text-[11px] font-mono bg-[#0f172a] text-slate-300 border border-[#1e293b]"
                >
                  {tag}
                </span>
              ))}
            </div>
            {onOpenArchitectureModal && (
              <button
                onClick={onOpenArchitectureModal}
                className="text-[11px] font-mono text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Specs Log</span>
                <span>→</span>
              </button>
            )}
          </div>
        </div>

        {/* ================= CARD 2: TWILIO VIDEO & REAL-TIME ================= */}
        <div className="glass-card rounded-xl p-4 sm:p-6 lg:p-7 space-y-6 border border-[#1b273d] bg-[#0b101f] shadow-lg flex flex-col justify-between">
          <div className="space-y-4">
            {/* Top Badges */}
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/30">
                DATA STREAMING REAL-TIME
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                High-P99 SLA
              </span>
            </div>

            {/* Title & Description */}
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-white tracking-tight">
                Twilio Video &amp; Real-Time Match Interaction
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Designed a low-latency video matching communication suite. Addressed critical platform challenges including battery drain, background audio interruptions, and dynamic connection recovery on volatile mobile network bandwidths.
              </p>
            </div>

            {/* Real-Time Metrics & Telemetry Box */}
            <div className="rounded-lg border border-[#1e2a40] bg-[#070b15] p-3 sm:p-4 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  LIVE STREAM TELEMETRY
                </span>
                <button
                  onClick={simulatePing}
                  className="self-start sm:self-auto text-blue-400 hover:text-blue-300 underline cursor-pointer"
                >
                  {isSimulating ? 'Pinging...' : 'Test Connection'}
                </button>
              </div>

              {/* Two Metric Rows */}
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded bg-[#0d1424] border border-[#182338] text-xs font-mono">
                  <span className="text-slate-400">Latency:</span>
                  <span className="text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    &lt; {videoPing}ms Guaranteed
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 rounded bg-[#0d1424] border border-[#182338] text-xs font-mono">
                  <span className="text-slate-400">Connection Success:</span>
                  <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    99.7% Mean Average
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10px] font-mono text-slate-500 pt-1">
                <span>Adaptive Bitrate: Dynamic Opus/H.264</span>
                <span className="text-blue-400">Hardware Codec Ready</span>
              </div>
            </div>

            {/* Bullet Points with Check Diamond */}
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 pt-1">
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 shrink-0 font-bold">◆</span>
                <p>
                  Zero-packet drops on background-app-state transitions with native session keep-alive.
                </p>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 shrink-0 font-bold">◆</span>
                <p>
                  Adaptive bandwidth fallback protocols ensuring seamless continuity on 3G/4G network shifts.
                </p>
              </li>
            </ul>
          </div>

          {/* Footer Tags */}
          <div className="pt-4 border-t border-[#182338] flex flex-wrap items-center gap-2">
            {['Twilio Video SDK', 'Hardware Codecs', 'WebRTC'].map((tag) => (
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

export default CaseStudies;
