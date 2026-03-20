import React from 'react';

const BentoStats = () => {
  return (
    <section className="py-24 px-8 md:px-20 bg-surface-container-low" id="tech">
      <div className="mb-16">
        <h2 className="font-headline text-sm text-secondary uppercase tracking-[0.5em] mb-4">&gt;_ CORE_TECH_ENGINE</h2>
        <p className="text-3xl font-light text-on-surface max-w-2xl">High-performance stacks designed for scalability and low-latency interaction.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Terminal Card 1 */}
        <div className="bg-surface-container rounded-lg border border-outline-variant/20 overflow-hidden flex flex-col h-full group hover:border-primary/40 transition-all">
          <div className="bg-surface-container-high px-4 py-2 flex items-center gap-1.5 border-b border-outline-variant/20">
            <div className="w-2.5 h-2.5 rounded-full bg-error-dim"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-primary-dim"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
            <span className="ml-auto font-mono text-[10px] text-on-surface-variant opacity-60">mobile_stack.yml</span>
          </div>
          <div className="p-6 space-y-4">
            <div className="p-3 bg-surface-container-lowest rounded border border-primary/10">
              <span className="material-symbols-outlined text-primary text-3xl mb-2">smartphone</span>
              <h3 className="font-headline text-lg uppercase font-bold text-on-surface">React Native</h3>
              <p className="text-sm text-on-surface-variant font-mono">Cross-platform ecosystem</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-surface-variant text-[10px] font-mono text-on-surface-variant uppercase">Redux Saga</span>
              <span className="px-2 py-1 bg-surface-variant text-[10px] font-mono text-on-surface-variant uppercase">TypeScript</span>
              <span className="px-2 py-1 bg-surface-variant text-[10px] font-mono text-on-surface-variant uppercase">Native Modules</span>
            </div>
          </div>
        </div>

        {/* Terminal Card 2 */}
        <div className="bg-surface-container rounded-lg border border-outline-variant/20 overflow-hidden flex flex-col h-full group hover:border-primary/40 transition-all">
          <div className="bg-surface-container-high px-4 py-2 flex items-center gap-1.5 border-b border-outline-variant/20">
            <div className="w-2.5 h-2.5 rounded-full bg-error-dim"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-primary-dim"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
            <span className="ml-auto font-mono text-[10px] text-on-surface-variant opacity-60">backend_engine.js</span>
          </div>
          <div className="p-6 space-y-4">
            <div className="p-3 bg-surface-container-lowest rounded border border-primary/10">
              <span className="material-symbols-outlined text-primary text-3xl mb-2">dns</span>
              <h3 className="font-headline text-lg uppercase font-bold text-on-surface">Backend &amp; Realtime</h3>
              <p className="text-sm text-on-surface-variant font-mono">Robust server architecture</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-surface-variant text-[10px] font-mono text-on-surface-variant uppercase">Node.js</span>
              <span className="px-2 py-1 bg-surface-variant text-[10px] font-mono text-on-surface-variant uppercase">Socket.io</span>
              <span className="px-2 py-1 bg-surface-variant text-[10px] font-mono text-on-surface-variant uppercase">Twilio API</span>
            </div>
          </div>
        </div>

        {/* Terminal Card 3 */}
        <div className="bg-surface-container rounded-lg border border-outline-variant/20 overflow-hidden flex flex-col h-full group hover:border-secondary/40 transition-all">
          <div className="bg-surface-container-high px-4 py-2 flex items-center gap-1.5 border-b border-outline-variant/20">
            <div className="w-2.5 h-2.5 rounded-full bg-error-dim"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-primary-dim"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
            <span className="ml-auto font-mono text-[10px] text-on-surface-variant opacity-60">payment_gateways.json</span>
          </div>
          <div className="p-6 space-y-4">
            <div className="p-3 bg-surface-container-lowest rounded border border-secondary/10">
              <span className="material-symbols-outlined text-secondary text-3xl mb-2">payments</span>
              <h3 className="font-headline text-lg uppercase font-bold text-on-surface">Integrations</h3>
              <p className="text-sm text-secondary font-mono">98% Payment Success Rate</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-surface-variant text-[10px] font-mono text-on-surface-variant uppercase">Razorpay</span>
              <span className="px-2 py-1 bg-surface-variant text-[10px] font-mono text-on-surface-variant uppercase">PhonePe SDK</span>
              <span className="px-2 py-1 bg-surface-variant text-[10px] font-mono text-on-surface-variant uppercase">Firebase Auth</span>
            </div>
          </div>
        </div>

        {/* Terminal Card 4 */}
        <div className="bg-surface-container rounded-lg border border-outline-variant/20 overflow-hidden flex flex-col h-full group hover:border-primary/40 transition-all">
          <div className="bg-surface-container-high px-4 py-2 flex items-center gap-1.5 border-b border-outline-variant/20">
            <div className="w-2.5 h-2.5 rounded-full bg-error-dim"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-primary-dim"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
            <span className="ml-auto font-mono text-[10px] text-on-surface-variant opacity-60">perf_monitoring.py</span>
          </div>
          <div className="p-6 space-y-4">
            <div className="p-3 bg-surface-container-lowest rounded border border-primary/10">
              <span className="material-symbols-outlined text-primary text-3xl mb-2">speed</span>
              <h3 className="font-headline text-lg uppercase font-bold text-on-surface">Optimization</h3>
              <p className="text-sm text-on-surface-variant font-mono">Zero jank principles</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-surface-variant text-[10px] font-mono text-on-surface-variant uppercase">Crashlytics</span>
              <span className="px-2 py-1 bg-surface-variant text-[10px] font-mono text-on-surface-variant uppercase">Hermes Engine</span>
              <span className="px-2 py-1 bg-surface-variant text-[10px] font-mono text-on-surface-variant uppercase">Render Profiling</span>
            </div>
          </div>
        </div>

        {/* Terminal Card 5 */}
        <div className="bg-surface-container rounded-lg border border-outline-variant/20 overflow-hidden flex flex-col h-full group hover:border-primary/40 transition-all">
          <div className="bg-surface-container-high px-4 py-2 flex items-center gap-1.5 border-b border-outline-variant/20">
            <div className="w-2.5 h-2.5 rounded-full bg-error-dim"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-primary-dim"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
            <span className="ml-auto font-mono text-[10px] text-on-surface-variant opacity-60">system_design.md</span>
          </div>
          <div className="p-6 space-y-4">
            <div className="p-3 bg-surface-container-lowest rounded border border-primary/10">
              <span className="material-symbols-outlined text-primary text-3xl mb-2">architecture</span>
              <h3 className="font-headline text-lg uppercase font-bold text-on-surface">Architecture</h3>
              <p className="text-sm text-on-surface-variant font-mono">Clean &amp; Maintainable</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-surface-variant text-[10px] font-mono text-on-surface-variant uppercase">MVC/MVVM</span>
              <span className="px-2 py-1 bg-surface-variant text-[10px] font-mono text-on-surface-variant uppercase">Microservices</span>
              <span className="px-2 py-1 bg-surface-variant text-[10px] font-mono text-on-surface-variant uppercase">Design Patterns</span>
            </div>
          </div>
        </div>

        {/* Terminal Card 6 */}
        <div className="bg-surface-container rounded-lg border border-outline-variant/20 overflow-hidden flex flex-col h-full group hover:border-primary/40 transition-all">
          <div className="bg-surface-container-high px-4 py-2 flex items-center gap-1.5 border-b border-outline-variant/20">
            <div className="w-2.5 h-2.5 rounded-full bg-error-dim"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-primary-dim"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
            <span className="ml-auto font-mono text-[10px] text-on-surface-variant opacity-60">release_pipeline.sh</span>
          </div>
          <div className="p-6 space-y-4">
            <div className="p-3 bg-surface-container-lowest rounded border border-primary/10">
              <span className="material-symbols-outlined text-primary text-3xl mb-2">rocket_launch</span>
              <h3 className="font-headline text-lg uppercase font-bold text-on-surface">Release</h3>
              <p className="text-sm text-on-surface-variant font-mono">End-to-end delivery</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-surface-variant text-[10px] font-mono text-on-surface-variant uppercase">CI/CD</span>
              <span className="px-2 py-1 bg-surface-variant text-[10px] font-mono text-on-surface-variant uppercase">App Store</span>
              <span className="px-2 py-1 bg-surface-variant text-[10px] font-mono text-on-surface-variant uppercase">Play Store</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default BentoStats;
