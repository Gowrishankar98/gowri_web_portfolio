import React from 'react';
import Hero from './components/Hero';
import BentoStats from './components/BentoStats';
import CaseStudies from './components/CaseStudies';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app-container flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <BentoStats />
        <CaseStudies />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}

export default App;
