import React from 'react';
import Card from './Card';

type PricingTier = 'Premium' | 'Professional' | 'Value';

interface PricingItem {
  tier: PricingTier;
  model: string;
  specs: string;
  price: string;
  features: string[];
  buttonLabel: string;
  buttonLink?: string;
}

const PricingSection: React.FC = () => {
  const pricingData: PricingItem[] = [
    {
      tier: 'Premium',
      model: '[INSERT MODEL]',
      specs: '24GB GDDR6X | 16384 CUDA Cores',
      price: '$0.40',
      features: [
        'Perfect for AI Training',
        'Ray Tracing Support',
        'DLSS 3.0'
      ],
      buttonLabel: 'Rent Now'
    },
    {
      tier: 'Professional',
      model: '[INSERT MODEL]',
      specs: '80GB HBM2 | 6912 CUDA Cores',
      price: '$1.20',
      features: [
        'Enterprise AI Training',
        'Multi-Instance GPU',
        'TensorFloat-32'
      ],
      buttonLabel: 'Rent Now'
    },
    {
      tier: 'Value',
      model: '[INSERT MODEL]',
      specs: '10GB GDDR6X | 8704 CUDA Cores',
      price: '$0.25',
      features: [
        'ML Development',
        '3D Rendering',
        'DLSS 2.0'
      ],
      buttonLabel: 'Rent Now'
    }
  ];

  return (
    <section className="py-20" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">High-End GPUs and Affordable Workstation GPUs</h2>
          <p className="text-foreground/60 text-xl">Choose from our wide range of NVIDIA GPUs for any workload</p>
        </div>
        <div className="flex flex-col gap-6 max-w-[68rem] mx-auto lg:grid lg:grid-cols-3 lg:gap-5">
          {pricingData.map((pricing, index) => (
            <Card
              key={index}
              variant="pricing"
              {...pricing}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 