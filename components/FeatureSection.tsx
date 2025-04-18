import React from 'react';
import Card from './Card';
import { BsLightningFill, BsHddStackFill, BsHddNetworkFill } from 'react-icons/bs';

const FeatureSection: React.FC = () => {
  return (
    <section className="w-full h-auto py-24 md:max-h-[600px]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Enterprise-Grade Infrastructure
          </h2>
          <p className="text-xl text-foreground">
            Built for performance, reliability, and scalability
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-5xl mx-auto lg:grid lg:grid-cols-3 lg:gap-6">
          <Card 
            title="Pay Per Minute"
            description="No commitments or contracts. Only pay for what you use, billed by the minute."
            icon={<BsLightningFill className="w-10 h-10" />}
            className="border-accent"
          />
          
          <Card 
            title="Tier 3 Design"
            description="Redundant power, cooling, and networking for maximum uptime and reliability."
            icon={<BsHddStackFill className="w-10 h-10" />}
            className="border-accent"
          />
          
          <Card 
            title="High-Speed Network"
            description="Unmetered 10Gb/s internet and 25Gb/s internal network connectivity."
            icon={<BsHddNetworkFill className="w-10 h-10" />}
            className="border-accent"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection; 