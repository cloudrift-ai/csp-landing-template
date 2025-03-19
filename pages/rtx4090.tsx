import { NextSeo } from 'next-seo';
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

const RTX4090Page: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <NextSeo
        title="RTX 4090 | GPU Rental"
        description="Rent NVIDIA RTX 4090 GPUs for AI, ML, and deep learning. High-performance computing with 24GB GDDR6X memory and CUDA cores for maximum efficiency."
        openGraph={{
          url: '',
          title: 'RTX 4090 GPU Rental',
          description: 'Access powerful RTX 4090 GPUs for your AI and ML workloads. 24GB GDDR6X memory, latest CUDA architecture.',
        }}
      />
      <Navbar />
      
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90 z-10" />
        
        <div className="container mx-auto px-4 py-32 relative z-20">
          <div ref={heroRef} className="animate-fadeInUp">
            <h1 className="text-6xl font-bold mb-2">NVIDIA RTX 4090</h1>
            <p className="text-xl text-gray-400 mb-8">Ultimate Performance for AI and Deep Learning</p>
          </div>
          
          {/* Hero Section */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Performance and Specs */}
            <div className="space-y-12 animate-fadeInUp">
              {/* Revolutionary Performance Section */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  Unleash Your AI Potential
                </h2>
                <p className="text-gray-300 text-lg">
                  The NVIDIA GeForce RTX 4090 delivers revolutionary performance for AI workloads, 
                  rendering, and deep learning applications with its Ada Lovelace architecture.
                </p>
               
              </div>

              {/* Technical Specifications Section */}
              <div className="bg-gray-800/80 p-6 rounded-lg border border-gray-700 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Technical Specifications
                </h3>
                <div className="space-y-5">
                  {[
                    ['Architecture', 'NVIDIA Ada Lovelace', 
                      <svg key="arch" className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    ],
                    ['Memory Size', '24 GB GDDR6X',
                      <svg key="memory" className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    ],
                    ['Memory Bandwidth', '1010 GB/s',
                      <svg key="bandwidth" className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ],
                    ['Ray Tracing Cores', '128',
                      <svg key="ray" className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    ],
                    ['Tensor Cores', '512',
                      <svg key="tensor" className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                    ],
                  ].map(([label, value, icon], index) => (
                    <div key={index} className="flex items-center justify-between border-b border-gray-700 pb-2">
                      <span className="text-gray-300 flex items-center">
                        {icon}
                        {label}
                      </span>
                      <span className="font-medium text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column - GPU Image */}
            <div className="relative animate-fadeInUp flex justify-center items-center">
              <div className="relative w-full h-[450px]">
                <Image
                  src="/rtx4090.png"
                  alt="NVIDIA RTX 4090"
                  layout="fill"
                  objectFit="contain"
                  className="z-10"
                />
              </div>
            </div>
          </div>

          {/* Rental Section */}
          <div className="mt-16 animate-fadeInUp">
            <div className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 p-8 rounded-lg border border-gray-700">
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <svg className="w-7 h-7 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Rent RTX 4090 Now
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Access the power of the RTX 4090 for your AI and machine learning projects. Our competitive rental options allow you to leverage high-performance computing without the large capital investment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/console" 
                  className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Go to Console
                </Link>
                <Link 
                  href="/#contactus" 
                  className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>


          {/* Performance Section */}
          <div className="mt-20 animate-fadeInUp">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <svg className="w-7 h-7 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Performance Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Deep Learning Acceleration',
                  description: 'Experience up to 1.9 times higher training throughput compared to the RTX 3090, significantly reducing model training durations.',
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  )
                },
                {
                  title: 'Enhanced Multi-GPU Scaling',
                  description: 'Achieve near-linear performance gains with multi-GPU configurations, optimizing resource utilization for large-scale computations.',
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  title: 'Advanced Memory Bandwidth',
                  description: '1,010 GB/s bandwidth enables 3x faster data transfer than previous generations, reducing bottlenecks in large AI model training and complex data processing workloads.',
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                }
              ].map((metric, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 backdrop-blur-sm">
                  <div className="flex items-center mb-3">
                    {metric.icon}
                    <h3 className="text-xl font-bold ml-2">{metric.title}</h3>
                  </div>
                  <p className="text-gray-400">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mt-20 animate-fadeInUp">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <svg className="w-7 h-7 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Ideal Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'AI Research',
                  description: 'Perfect for training large language models and neural networks',
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2a2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2a2 2 0 104 0a2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: 'Machine Learning',
                  description: 'Accelerated training and inference for ML models',
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  )
                },
                {
                  title: 'Data Science',
                  description: 'Fast processing of large datasets and complex calculations',
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  )
                },
                {
                  title: 'Rendering',
                  description: 'High-speed 3D rendering and visualization',
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                }
              ].map((feature, index) => (
                <div key={index} className="p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-lg backdrop-blur-sm border border-gray-700">
                  <div className="flex items-center mb-3">
                    {feature.icon}
                    <h3 className="text-xl font-bold ml-2">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RTX4090Page; 