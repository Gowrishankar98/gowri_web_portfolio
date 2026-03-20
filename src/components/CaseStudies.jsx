import React from 'react';

const CaseStudies = () => {
  return (
    <section className="py-24 px-8 md:px-20 overflow-hidden" id="projects">
      <div className="mb-16 text-center">
        <h2 className="font-headline text-sm text-secondary uppercase tracking-[0.5em] mb-4">&gt;_ FEATURE_DEEP_DIVE</h2>
      </div>

      {/* Telehealth Console */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="space-y-6">
          <h3 className="text-4xl font-headline font-bold text-primary tracking-tighter">TELEHEALTH CONSOLE</h3>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            A mission-critical Twilio Video implementation featuring low-latency signaling, real-time doctor-patient connection mapping, and encrypted chat channels. Optimized for 4G/LTE stability.
          </p>
          <ul className="space-y-3 font-mono text-sm">
            <li className="flex items-center gap-2"><span className="text-secondary">&gt;</span> Real-time Connection Health Status</li>
            <li className="flex items-center gap-2"><span className="text-secondary">&gt;</span> Socket-based Instant Messaging</li>
            <li className="flex items-center gap-2"><span className="text-secondary">&gt;</span> Dynamic Room Management</li>
          </ul>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative bg-surface-container rounded-xl border border-outline-variant/30 shadow-2xl overflow-hidden aspect-video">
            {/* UI Mockup: Video Call */}
            <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
              <img alt="Telehealth Interface" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYV7F1c3fN9AN3WpfpI99xUI93SON-dQDvXg7ibtFbmUaobm38itzUuR70CNNN_YyKr7id65FsnstJ220Ik7Cdu7vuBzyPBayx6Ku3x46fyf8-FAR9cTye06TLnX68hAMbl5v7IoMod7I0GUWQlUHzo528-F41kc9aIotCRL8Z888ImDsHTnyvOh8iLdXrKbQCSF83RepYqARNpY_ZZqtpmn_RLaYhNxJ1b-390P6sZV-PzRkabQyJsM7pegJR2vlFl4RgCtzMpYo" />
            </div>
            <div className="absolute top-4 left-4 right-4 flex justify-between">
              <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded border border-secondary/20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="text-[10px] font-mono text-secondary">LIVE_SIGNAL: 48ms</span>
              </div>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center border border-white/10">
                  <span className="material-symbols-outlined text-xs" data-icon="mic">mic</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-error-container flex items-center justify-center border border-white/10">
                  <span className="material-symbols-outlined text-xs" data-icon="call_end">call_end</span>
                </div>
              </div>
            </div>
            {/* Picture in Picture */}
            <div className="absolute bottom-4 right-4 w-32 h-20 bg-surface-container rounded-lg border border-white/20 overflow-hidden">
              <img alt="Self View" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB63sSWkaaVtfxD-MFS-O9GeSkB-9JHzMsKdxL2GqhuXFdGMF3G_z6JuFxvD_fgGDkbV7BOK36xVdur502TONI4qpooIUWAD_dE7BmQJzk5VSAdwP_33pFCYXEYR16at7snv3z88sARsikJ-4Q-zLQwNOBrWhufR-y_HNtxPMSfEgXrl9-lxQi7HKwhk8aFa9VPlQy8X1hDI76NqeUq0sd2V4rrdh_9x_cY8YlL5dmZQR7jO0ZJpLBNtLgUT_Nr5QWYsrUCikaAFaQ" />
            </div>
            {/* Floating Chat */}
            <div className="absolute bottom-4 left-4 w-48 space-y-2">
              <div className="px-2 py-1.5 bg-primary/20 backdrop-blur-md border border-primary/30 rounded text-[9px] font-mono max-w-[80%]">
                DR. SHARMA: Symptoms persisting?
              </div>
              <div className="px-2 py-1.5 bg-surface-container-highest/80 backdrop-blur-md border border-white/10 rounded text-[9px] font-mono self-end">
                PATIENT: Yes, since morning.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calorie Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative group">
          <div className="absolute -inset-4 bg-secondary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative bg-surface-container rounded-2xl border border-outline-variant/30 shadow-2xl overflow-hidden aspect-[9/16] max-w-[300px] mx-auto p-6">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="material-symbols-outlined text-secondary" data-icon="menu">menu</span>
                <span className="font-mono text-xs uppercase tracking-widest">NUTRITION_HUB</span>
                <span className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-xs" data-icon="person">person</span>
                </span>
              </div>
              {/* Radial Chart */}
              <div className="relative w-40 h-40 mx-auto">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle className="text-surface-variant" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="8"></circle>
                  <circle className="text-secondary" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeDasharray="210 283" strokeLinecap="round" strokeWidth="8"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold">1,840</span>
                  <span className="text-[8px] font-mono uppercase text-on-surface-variant">KCAL REMAINING</span>
                </div>
              </div>
              {/* Macros */}
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2 bg-surface-variant rounded text-center">
                  <div className="text-[10px] font-bold text-primary">120g</div>
                  <div className="text-[8px] font-mono text-on-surface-variant">PROTEIN</div>
                </div>
                <div className="p-2 bg-surface-variant rounded text-center">
                  <div className="text-[10px] font-bold text-secondary">240g</div>
                  <div className="text-[8px] font-mono text-on-surface-variant">CARBS</div>
                </div>
                <div className="p-2 bg-surface-variant rounded text-center">
                  <div className="text-[10px] font-bold text-error">45g</div>
                  <div className="text-[8px] font-mono text-on-surface-variant">FATS</div>
                </div>
              </div>
              {/* Scanner UI */}
              <div className="p-4 bg-surface-container-highest rounded-xl border border-primary/20 flex items-center gap-4">
                <span className="material-symbols-outlined text-primary" data-icon="barcode_scanner">barcode_scanner</span>
                <div className="text-[10px] font-mono">
                  <p className="text-on-surface">TAP TO SCAN PRODUCT</p>
                  <p className="text-on-surface-variant">UPC/EAN ENGINE READY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-6">
          <h3 className="text-4xl font-headline font-bold text-secondary tracking-tighter">CALORIE ANALYTICS</h3>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            A performance-tuned mobile tracker featuring radial macronutrient visualization, real-time weight trend analysis via regression, and an integrated barcode scanning subsystem.
          </p>
          <ul className="space-y-3 font-mono text-sm">
            <li className="flex items-center gap-2"><span className="text-primary">&gt;</span> Native Barcode/QR processing</li>
            <li className="flex items-center gap-2"><span className="text-primary">&gt;</span> D3-style SVG Data Viz</li>
            <li className="flex items-center gap-2"><span className="text-primary">&gt;</span> Sub-second Nutrition API lookup</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
