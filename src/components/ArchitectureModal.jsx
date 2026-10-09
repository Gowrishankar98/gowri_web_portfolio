import React, { useState } from 'react';

const ArchitectureModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('turbomodules');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c1324] border border-[#1e293b] rounded-xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#182338] bg-[#080d19]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="font-heading font-bold text-sm text-white tracking-wide">
              SYSTEM ARCHITECTURE SPECIFICATION LOGS
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
              v0.72-PRODUCTION
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-[#182338] bg-[#090e1b] overflow-x-auto hide-scrollbar">
          {[
            { id: 'turbomodules', label: 'TurboModules & JSI' },
            { id: 'multitenant', label: 'Multi-Tenant Monorepo' },
            { id: 'mmkv', label: 'MMKV v2 Storage' },
            { id: 'twilio', label: 'Twilio Video WebRTC' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 text-xs font-mono tracking-wider transition-colors border-b-2 whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'border-blue-500 text-white font-semibold bg-blue-500/10'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
          {activeTab === 'turbomodules' && (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-[#070b15] border border-[#1e2a40] font-mono text-xs">
                <div className="text-amber-400 mb-2 font-bold">// JSI Direct Memory Execution</div>
                <p className="text-slate-400">
                  Legacy React Native passes JSON strings over an asynchronous queue bridge. TurboModules replace this with JavaScript Interface (JSI) host objects, granting the JavaScript runtime direct C++ pointers to native memory.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#0a0f1d] border border-[#1b273d] space-y-2">
                  <span className="text-blue-400 font-mono font-bold text-xs">Old Bridge Architecture</span>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    <li>• Async JSON string serializing / deserializing</li>
                    <li>• Bridge congestion during high-frequency gestures</li>
                    <li>• Variable latency: 15ms - 45ms per payload</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-[#0a0f1d] border border-blue-500/30 space-y-2">
                  <span className="text-emerald-400 font-mono font-bold text-xs">New JSI TurboModule</span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li>• Direct synchronous &amp; asynchronous C++ invokers</li>
                    <li>• Zero JSON serialization overhead</li>
                    <li>• Sub-1ms invocation latency guaranteed</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'multitenant' && (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-[#070b15] border border-[#1e2a40] font-mono text-xs">
                <div className="text-blue-400 mb-2 font-bold">// 15+ Brands, 1 Codebase</div>
                <p className="text-slate-400">
                  Architected NPM monorepo structure separating core shared business logic from tenant branding configurations. 85%+ code reuse achieved across Tamil Matrimony, Telugu Matrimony, Kerala Matrimony, and specialized portals.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#0a0f1d] border border-[#1b273d] space-y-2 text-xs font-mono">
                <div className="text-slate-200 font-semibold">Tenant Injection Flow:</div>
                <pre className="text-blue-300 p-2 rounded bg-black/40 overflow-x-auto">
{`const currentTenant = TenantRouter.resolve(tenantId);
// Dynamically mounts theme, localized copy, endpoints & custom modules
export const AppTheme = currentTenant.theme;
export const FeatureMatrix = currentTenant.features;`}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'mmkv' && (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-[#070b15] border border-[#1e2a40] font-mono text-xs">
                <div className="text-emerald-400 mb-2 font-bold">// Memory-Mapped Key-Value Storage</div>
                <p className="text-slate-400">
                  Replaced standard SQLite / AsyncStorage with MMKV v2. By leveraging mmap operating-system level memory mapping, read and write operations are instantaneous with zero process context-switching delay.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center font-mono text-xs">
                <div className="p-3 rounded bg-[#0a0f1d] border border-[#1b273d]">
                  <div className="text-slate-400 text-[10px]">READ SPEED</div>
                  <div className="text-emerald-400 font-bold text-base mt-1">30x Faster</div>
                </div>
                <div className="p-3 rounded bg-[#0a0f1d] border border-[#1b273d]">
                  <div className="text-slate-400 text-[10px]">WRITE SPEED</div>
                  <div className="text-emerald-400 font-bold text-base mt-1">100x Faster</div>
                </div>
                <div className="p-3 rounded bg-[#0a0f1d] border border-[#1b273d]">
                  <div className="text-slate-400 text-[10px]">CRASH RISK</div>
                  <div className="text-blue-400 font-bold text-base mt-1">Zero Buffer Loss</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'twilio' && (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-[#070b15] border border-[#1e2a40] font-mono text-xs">
                <div className="text-amber-400 mb-2 font-bold">// Low-Latency Real-Time Match Video</div>
                <p className="text-slate-400">
                  Integrated Twilio Video SDK WebRTC mesh with dynamic bandwidth estimation, background audio session management for incoming calls, and hardware-accelerated HEVC/H.264 rendering on budget Android devices.
                </p>
              </div>

              <ul className="space-y-2 text-xs font-mono text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">&gt;</span>
                  <span>Audio Session Policy: Native AVAudioSession category playback / ambient ducking</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">&gt;</span>
                  <span>Network Recovery: Exponential backoff socket ping with 1.2s auto-reconnect</span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-[#182338] bg-[#080d19]">
          <span className="text-[10px] font-mono text-slate-400">
            Press ESC or click close to dismiss
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold cursor-pointer"
          >
            Close Notes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureModal;
