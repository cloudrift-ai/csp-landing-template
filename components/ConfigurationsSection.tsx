import React from 'react';
import Card from './Card';

interface ConfigurationItem {
  tier?: 'Premium' | 'Professional' | 'Value';
  model: string;
  specs: string;
  price: string;
  features: string[];
  buttonLink?: string;
}

const ConfigurationsSection: React.FC = () => {
  const gpuConfigurations: ConfigurationItem[] = [
    {
      model: '1 x RTX 4090 Server',
      specs: 'NVIDIA',
      price: '$0.40',
      features: [
        '1 x 24.0 GB VRAM',
        '500 GB RAM',
        '500 GB NVMe storage'
      ]
    },
    {
      model: '2 x RTX 4090 Server',
      specs: 'NVIDIA',
      price: '$0.80',
      features: [
        '2 x 24.0 GB VRAM',
        '1000 GB RAM',
        '1000 GB NVMe storage'
      ]
    },
    {
      model: 'NVIDIA RTX 3080',
      specs: 'NVIDIA',
      price: '$0.25',
      features: [
        'ML Development',
        '3D Rendering',
        'DLSS 2.0'
      ]
    },
    {
      model: '1 x RTX 5090 Pro Server',
      specs: 'NVIDIA',
      price: '$0.80',
      features: [
        '1 x 32.0 GB VRAM',
        '1000 GB RAM',
        '1000 GB NVMe storage'
      ]
    },
    {
      model: '2 x RTX 5090 Pro Server',
      specs: 'NVIDIA',
      price: '$1.60',
      features: [
        '2 x 32.0 GB VRAM',
        '2000 GB RAM',
        '2 TB NVMe storage'
      ]
    },
    {
      model: 'NVIDIA RTX 3080',
      specs: '10GB GDDR6X | 8704 CUDA Cores',
      price: '$0.25',
      features: [
        'ML Development',
        '3D Rendering',
        'DLSS 2.0'
      ],
      tier: 'Value'
    }
  ];

  const cpuConfigurations: ConfigurationItem[] = [
    {
      model: 'NVIDIA RTX 4090',
      specs: '24GB GDDR6X | 16384 CUDA Cores',
      price: '$0.40',
      features: [
        'Perfect for AI Training',
        'Ray Tracing Support',
        'DLSS 3.0'
      ],
      tier: 'Premium'
    },
    {
      model: 'NVIDIA A100',
      specs: '80GB HBM2 | 6912 CUDA Cores',
      price: '$1.20',
      features: [
        'Enterprise AI Training',
        'Multi-Instance GPU',
        'TensorFloat-32'
      ],
      tier: 'Professional'
    },
    {
      model: 'NVIDIA RTX 3080',
      specs: '10GB GDDR6X | 8704 CUDA Cores',
      price: '$0.25',
      features: [
        'ML Development',
        '3D Rendering',
        'DLSS 2.0'
      ],
      tier: 'Value'
    }
  ];

  return (
    <section className="py-12 px-6 mt-20 max-w-7xl mx-auto bg-background">
      <div className="container mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-8">GPUs</h2>
          <p className="text-foreground/90 text-xl mb-8">Choose from our wide range of NVIDIA GPUs for any workload</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gpuConfigurations.map((config, index) => (
              <Card
                key={index}
                variant="pricing"
                model={config.model}
                specs={config.specs}
                price={config.price}
                features={config.features}
                tier={config.tier}
                buttonLink={config.buttonLink}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">CPUs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cpuConfigurations.map((config, index) => (
              <Card
                key={index}
                variant="pricing"
                model={config.model}
                specs={config.specs}
                price={config.price}
                features={config.features}
                tier={config.tier}
                buttonLink={config.buttonLink}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfigurationsSection; 