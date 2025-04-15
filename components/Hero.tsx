import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaDiscord } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen py-12 md:py-24 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full z-[-1]" style={{ 
        opacity: 0.15, 
        background: 'linear-gradient(90deg, rgba(41, 41, 41, 0.04) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(0, 0, 0, 0.20) 100%)', 
        filter: 'blur(2px)' 
      }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 flex justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32 max-w-7xl w-full">
          {/* Text Content */}
          <div className="flex flex-col gap-10 items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
            <h1 className="text-[3rem] font-bold text-foreground leading-[4rem] tracking-[0.035rem] font-sans">
              Rent <span className="text-accent">[Insert Model]</span> <br />
              GPUs for AI and ML
            </h1>
            
            <p className="text-foreground text-xl font-normal max-w-xl leading-8 font-sans">
              Access cutting-edge <span className="text-accent">[INSERT MODEL]</span> GPUs directly from datacenters, available by the minute. No commitments, hidden fees, or middlemen. Start now and deploy your AI model in minutes.
            </p>
            
            <div className="flex flex-wrap gap-6 mt-8 justify-center lg:justify-start">
              <Link 
                href="/console" 
                className="px-8 py-3 bg-accent text-primary font-semibold rounded-md transition-colors duration-200 text-[1.125rem] text-center hover:bg-primary hover:text-foreground"
              >
                Rent a GPU Now
              </Link>
              
              <Link 
                href="#" 
                className="px-8 py-3 bg-transparent border-2 border-accent text-foreground font-normal rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 hover:bg-accent/10"
              >
                <FaDiscord className="w-5 h-5 text-accent" />
                Join Community
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center py-12 relative">
            <div className="absolute -rotate-[46deg] bg-accent filter blur-[90px] w-[200px] opacity-15 h-[calc(1000vh-100px)] z-0 right-[-30%]"></div>
            <div className="relative w-full max-w-2xl h-[400px] md:h-[500px] lg:h-[550px] rounded-lg overflow-hidden">
              <Image
                src="/gpu-center.jpeg"
                alt="Data center with servers"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 