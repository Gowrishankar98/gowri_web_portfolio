import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';
import CaseStudies from './components/CaseStudies';
import CoreCompetencies from './components/CoreCompetencies';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ArchitectureModal from './components/ArchitectureModal';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [isArchitectureModalOpen, setIsArchitectureModalOpen] = useState(false);

  const openArchitectureModal = () => setIsArchitectureModalOpen(true);
  const closeArchitectureModal = () => setIsArchitectureModalOpen(false);

  return (
    <div className="min-h-screen bg-[#080c16] text-[#e2e8f0] flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenArchitectureModal={openArchitectureModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero (Profile & 2x2 Bento Stats) */}
        <Hero onOpenArchitectureModal={openArchitectureModal} />

        {/* Section 2: Work Experience & Engineering Roles */}
        <WorkExperience />

        {/* Section 3: Featured Architecture Case Studies */}
        <CaseStudies onOpenArchitectureModal={openArchitectureModal} />

        {/* Section 4: Core Competencies & System Capabilities */}
        <CoreCompetencies />

        {/* Section 5: Technical Availability & Collaboration Inquiry Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenArchitectureModal={openArchitectureModal} />

      {/* Interactive System Architecture Specification Modal */}
      <ArchitectureModal
        isOpen={isArchitectureModalOpen}
        onClose={closeArchitectureModal}
      />

      <Analytics />
    </div>
  );
}

export default App;
