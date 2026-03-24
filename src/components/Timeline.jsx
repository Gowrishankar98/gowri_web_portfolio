import React from "react";

const Timeline = () => {
  return (
    <section
      className="py-24 px-8 md:px-20 bg-surface-container-lowest relative overflow-hidden"
      id="experience"
    >
      <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
        <span
          className="material-symbols-outlined text-[300px]"
          data-icon="history"
        >
          history
        </span>
      </div>
      <div className="mb-20">
        <h2 className="font-headline text-sm text-primary uppercase tracking-[0.5em] mb-4">
          &gt;_ VIBE_TIMELINE
        </h2>
        <h3 className="text-3xl font-bold font-headline">
          ARCHENTS IT INDIA (2021 - PRESENT)
        </h3>
      </div>
      <div className="relative space-y-16">
        {/* Timeline Stem */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent"></div>

        {/* Event 1 */}
        <div className="relative pl-12">
          <div className="absolute left-2.5 -top-1 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_#a3a6ff]"></div>
          <div className="glass-panel p-8 rounded-lg border border-primary/10 max-w-3xl group hover:border-primary/40 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-xl font-bold text-on-surface uppercase font-headline">
                  CIANACARE &amp; CIANAHEALTH LAUNCH
                </h4>
                <p className="text-secondary font-mono text-xs uppercase mt-1">
                  Status: Zero-to-Production
                </p>
              </div>
              <span className="text-[10px] font-mono text-on-surface-variant bg-surface-container px-2 py-1">
                2021-2022
              </span>
            </div>
            <p className="text-on-surface-variant mb-4 leading-relaxed">
              Orchestrated the architectural blueprint and full-cycle
              development of two flagship healthcare platforms. Handled
              everything from complex state management to secure data
              synchronization.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-[9px] font-mono border border-outline-variant px-2 py-0.5 rounded text-on-surface-variant uppercase">
                Full Deployment
              </span>
              <span className="text-[9px] font-mono border border-outline-variant px-2 py-0.5 rounded text-on-surface-variant uppercase">
                Patient UX
              </span>
              <span className="text-[9px] font-mono border border-outline-variant px-2 py-0.5 rounded text-on-surface-variant uppercase">
                Secure Auth
              </span>
            </div>
          </div>
        </div>

        {/* Event 2 */}
        <div className="relative pl-12">
          <div className="absolute left-2.5 -top-1 w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_#bff365]"></div>
          <div className="glass-panel p-8 rounded-lg border border-secondary/10 max-w-3xl group hover:border-secondary/40 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-xl font-bold text-on-surface uppercase font-headline">
                  PERFORMANCE &amp; OPTIMIZATION
                </h4>
                <p className="text-primary font-mono text-xs uppercase mt-1">
                  Metric: -40% Crash Rate
                </p>
              </div>
              <span className="text-[10px] font-mono text-on-surface-variant bg-surface-container px-2 py-1">
                2023
              </span>
            </div>
            <p className="text-on-surface-variant mb-4 leading-relaxed">
              Deep-dive performance tuning using Firebase Crashlytics and
              Sentry. Optimized bridge communication between JS and Native
              threads to achieve consistent 60FPS on mid-range devices.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-[9px] font-mono border border-outline-variant px-2 py-0.5 rounded text-on-surface-variant uppercase">
                Firebase
              </span>
              <span className="text-[9px] font-mono border border-outline-variant px-2 py-0.5 rounded text-on-surface-variant uppercase">
                Memory Leaks
              </span>
              <span className="text-[9px] font-mono border border-outline-variant px-2 py-0.5 rounded text-on-surface-variant uppercase">
                JSI
              </span>
            </div>
          </div>
        </div>

        {/* Event 3 */}
        <div className="relative pl-12">
          <div className="absolute left-2.5 -top-1 w-3 h-3 rounded-full bg-on-surface-variant"></div>
          <div className="glass-panel p-8 rounded-lg border border-outline-variant/20 max-w-3xl group hover:border-primary/40 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-xl font-bold text-on-surface uppercase font-headline">
                  STORE DEPLOYMENT PIPELINE
                </h4>
                <p className="text-on-surface-variant font-mono text-xs uppercase mt-1">
                  Apps: 60+ Production Versions
                </p>
              </div>
              <span className="text-[10px] font-mono text-on-surface-variant bg-surface-container px-2 py-1">
                Continuous
              </span>
            </div>
            <p className="text-on-surface-variant mb-4 leading-relaxed">
              Managed end-to-end delivery pipelines for Apple App Store and
              Google Play Store. Expertise in provisioning, code signing, and
              Beta testing cycles via TestFlight.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-[9px] font-mono border border-outline-variant px-2 py-0.5 rounded text-on-surface-variant uppercase">
                Code Signing
              </span>
              <span className="text-[9px] font-mono border border-outline-variant px-2 py-0.5 rounded text-on-surface-variant uppercase">
                Release Notes
              </span>
              <span className="text-[9px] font-mono border border-outline-variant px-2 py-0.5 rounded text-on-surface-variant uppercase">
                CI Automation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
