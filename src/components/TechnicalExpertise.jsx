import React from 'react';
import { Smartphone, Server, BrainCircuit } from 'lucide-react';

const TechnicalExpertise = () => {
  const categories = [
    {
      title: "Mobile Core",
      icon: <Smartphone size={24} className="text-accent-blue" />,
      skills: ["React Native", "Native Apps", "TypeScript", "UI Modules"]
    },
    {
      title: "Backend & Ops",
      icon: <Server size={24} className="text-accent-green" />,
      skills: ["Node.js", "Express", "AWS Lambda", "Docker"]
    },
    {
      title: "Specialised AI",
      icon: <BrainCircuit size={24} className="text-text-primary" />,
      skills: ["Face Scan API", "Twilio Video API", "TensorFlow Lite"]
    }
  ];

  return (
    <section className="section container" id="expertise">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="subtitle-caps border-b-2 border-accent-blue inline-block pb-1 text-accent-blue tracking-wideset font-bold">TECHNOLOGICAL PRECISION</span>
        <h2 className="h1 text-primary mt-4">The Precision Stack</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="card flex flex-col gap-6" style={{ padding: '2.5rem 2rem', backgroundColor: '#18181C', borderColor: '#2D2D35' }}>
             <div className="flex items-center gap-4 mb-2">
                <div className="bg-[#1E1E24] p-3 rounded-lg border border-[#2D2D35]">
                  {category.icon}
                </div>
                <h4 className="h3 text-primary">{category.title}</h4>
             </div>
             <div className="flex flex-wrap gap-2 mt-4">
               {category.skills.map((skill, sIndex) => (
                 <span key={sIndex} className="badge" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', fontWeight: '500', backgroundColor: '#1A1A20', color: '#E4E4E7', borderColor: '#2D2D35' }}>
                   {skill}
                 </span>
               ))}
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalExpertise;
