import React from 'react';
import Image from 'next/image';

const PhilosophySection: React.FC = () => {
  const philosophies = [
    {
      title: "Innovation First",
      description: "We believe in pushing the boundaries of what's possible in cloud computing and AI infrastructure."
    },
    {
      title: "Accessibility",
      description: "Making high-performance computing accessible to everyone, from startups to enterprises."
    },
    {
      title: "Sustainability",
      description: "Committed to environmental responsibility through energy-efficient infrastructure."
    }
  ];

  return (
    <section className="flex justify-center items-center min-h-[900px] px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/gpu-center.jpeg" 
            alt="Data Center GPU Racks"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Text Column */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Philosophy</h2>
          <div className="space-y-8">
            {philosophies.map((item, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 w-1 bg-accent mr-4"></div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection; 