import React from 'react';
import Card from './Card';
import { FaQuestionCircle, FaServer, FaDesktop } from 'react-icons/fa';

const InstanceTypes: React.FC = () => {
  return (
    <section className="w-full h-auto py-24 lg:max-h-[600px]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Flexible Instance Types
          </h2>
          <p className="text-xl text-foreground">
            Choose the deployment mode that best suits your needs
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-5xl mx-auto lg:grid lg:grid-cols-3 lg:gap-6">
          <Card 
            title="Container Mode"
            description="Quickly deploy applications using Docker containers for streamlined operations."
            icon={<FaQuestionCircle className="w-10 h-10" />}
          />
          
          <Card 
            title="VM Mode"
            description="Customize your environment with a virtual machine, complete with your choice of OS and SSH access."
            icon={<FaDesktop className="w-10 h-10" />}
          />
          
          <Card 
            title="Bare Metal - Coming Soon"
            description="Gain full control with dedicated hardware, offering maximum performance and flexibility."
            icon={<FaServer className="w-10 h-10" />}
          />
        </div>
      </div>
    </section>
  );
};

export default InstanceTypes; 