import React, { useState } from 'react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.email || !formState.name) return;

    // Build mailto URI
    const subject = encodeURIComponent(`Engineering Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Name / Entity: ${formState.name}\nEmail: ${formState.email}\n\nSystem Context:\n${formState.message}`
    );
    window.open(`mailto:gowrishankarkrce@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  const copyEmailAddress = () => {
    navigator.clipboard.writeText('gowrishankarkrce@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#162033]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* ================= LEFT COLUMN: COLLABORATION INFO ================= */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-medium tracking-wide bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>TECHNICAL AVAILABILITY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Let's Collaborate on High-Scale Mobile Systems
            </h2>
          </div>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Open to technical consultations, engineering advisory, and executive mobile engineering leadership opportunities. Whether unifying fragmented codebases or accelerating systems to Sub-10ms, let's connect.
          </p>

          {/* Key Availability Bullet Points */}
          <div className="space-y-3 font-mono text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                ✓
              </span>
              <span>Location: India (Open to remote and international travel)</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                ✓
              </span>
              <span>Response Time: &lt; 24h for Executive &amp; Technical Enquiries</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                ✓
              </span>
              <span>NDA &amp; Technical Portfolio Walkthrough Available Upon Request</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://linkedin.com/in/gowrishankar-k-a66305117"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-md border border-[#23334d] bg-[#0c1322] hover:bg-[#131c30] text-slate-200 text-xs font-semibold transition-all hover:border-slate-500 active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
              </svg>
              <span>LinkedIn Profile</span>
            </a>

            <button
              onClick={copyEmailAddress}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-md border border-[#23334d] bg-[#0c1322] hover:bg-[#131c30] text-slate-200 text-xs font-semibold transition-all hover:border-slate-500 active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>{copiedEmail ? 'Email Copied!' : 'Direct Line'}</span>
            </button>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: TECHNICAL INQUIRY FORM ================= */}
        <div className="lg:col-span-6">
          <div className="glass-card rounded-xl p-6 sm:p-7 space-y-5 border border-[#1b273d] bg-[#0c1324] shadow-xl">
            {/* Form Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#182338]">
              <span className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
                Technical Inquiry Form
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/25">
                P1 / HIGH PRIORITY
              </span>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto text-xl">
                  ✓
                </div>
                <h4 className="text-lg font-heading font-bold text-white">Inquiry Dispatched</h4>
                <p className="text-xs font-mono text-slate-400 max-w-sm mx-auto">
                  Your mail client was triggered. You can also directly reach Gowrishankar at{' '}
                  <span className="text-blue-400 select-all">gowrishankarkrce@gmail.com</span>
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-4 py-1.5 rounded text-xs font-mono text-slate-300 hover:text-white bg-slate-800"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Field 1: Name */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono font-semibold tracking-wider text-slate-400 uppercase">
                    YOUR NAME OR ENTITY
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Engineering VP, Founder, Lead Recruiter"
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#070b15] border border-[#1e2a40] text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors font-mono"
                  />
                </div>

                {/* Field 2: Email */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono font-semibold tracking-wider text-slate-400 uppercase">
                    YOUR WORK EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#070b15] border border-[#1e2a40] text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors font-mono"
                  />
                </div>

                {/* Field 3: Message / Context */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono font-semibold tracking-wider text-slate-400 uppercase">
                    SYSTEM CONTEXT OR MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe app architecture, scale requirements, or role specs..."
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#070b15] border border-[#1e2a40] text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors font-mono resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-md bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-semibold shadow-lg shadow-blue-600/30 transition-all hover:shadow-blue-600/40 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  <span>Connect with Principal Engineer</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
