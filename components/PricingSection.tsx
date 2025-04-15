import React from 'react';
import Card from './Card';
import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/cloudrift";

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

interface InstanceTypeInfo {
  name: string;
  brand_short: string;
  variants: {
    cost_per_hour: number;
    gpu_count: number;
    cpu_count: number;
    available_nodes: number;
  }[];
}

interface ListInstanceTypeResponse {
  instance_types: InstanceTypeInfo[];
}

interface LowestPrices {
  rtx4090: number | null;
  rtx5090: number | null;
  cpu: number | null;
}

const fetchInstanceTypes = async (): Promise<ListInstanceTypeResponse> => {
  const response = await apiRequest<{ data: ListInstanceTypeResponse }>(
    "/api/v1/instance-types/list",
    { selector: "All" }
  );
  return response.data;
};

const calculateLowestPrices = (data: ListInstanceTypeResponse): LowestPrices => {
  const rtx4090Prices = data.instance_types
    .filter((instance: InstanceTypeInfo) => instance.brand_short.includes('4090'))
    .map((instance: InstanceTypeInfo) => instance.variants[0].cost_per_hour / instance.variants[0].gpu_count);

  const rtx5090Prices = data.instance_types
    .filter((instance: InstanceTypeInfo) => instance.brand_short.includes('5090'))
    .map((instance: InstanceTypeInfo) => instance.variants[0].cost_per_hour / instance.variants[0].gpu_count);

  const cpuPrices = data.instance_types
    .filter((instance: InstanceTypeInfo) => instance.variants.find(variant => variant.gpu_count === 0) !== undefined)
    .map((instance: InstanceTypeInfo) => instance.variants[0].cost_per_hour / instance.variants[0].cpu_count);

  return {
    rtx4090: rtx4090Prices.length > 0 ? Math.min(...rtx4090Prices) : null,
    rtx5090: rtx5090Prices.length > 0 ? Math.min(...rtx5090Prices) : null,
    cpu: cpuPrices.length > 0 ? Math.min(...cpuPrices) : null
  };
};

const useLowestPrices = () => {
  const { data, isLoading } = useQuery<ListInstanceTypeResponse>({
    queryKey: ['instanceTypes'],
    queryFn: fetchInstanceTypes
  });

  const lowestPrices = data ? calculateLowestPrices(data) : {
    rtx4090: null,
    rtx5090: null,
    cpu: null
  };

  return { lowestPrices, loading: isLoading };
};

const PricingSection: React.FC = () => {
  const { lowestPrices, loading } = useLowestPrices();

  const formatPrice = (price: number | null): string => {
    if (price === null) return 'Price unavailable';
    return `$${price.toFixed(2)}`;
  };

  const pricingData: PricingItem[] = [
    {
      tier: 'Value',
      model: 'RTX 4090',
      specs: '10GB GDDR6X | 8704 CUDA Cores',
      price: formatPrice(lowestPrices.rtx4090),
      features: [
        'ML Development',
        '3D Rendering',
        'DLSS 2.0'
      ],
      buttonLabel: loading ? 'Loading...' : 'Rent Now'
    },
    {
      tier: 'Premium',
      model: 'RTX 5090',
      specs: '24GB GDDR6X | 16384 CUDA Cores',
      price: formatPrice(lowestPrices.rtx5090),
      features: [
        'Perfect for AI Training',
        'Ray Tracing Support',
        'DLSS 3.0'
      ],
      buttonLabel: loading ? 'Loading...' : 'Rent Now'
    },
    {
      tier: 'Professional',
      model: '[INSERT MODEL]',
      specs: '80GB HBM2 | 6912 CUDA Cores',
      price: formatPrice(lowestPrices.cpu), 
      features: [
        'Enterprise AI Training',
        'Multi-Instance GPU',
        'TensorFloat-32'
      ],
      buttonLabel: loading ? 'Loading...' : 'Rent Now'
    }
  ];

  return (
    <section className="py-20" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">High-End GPUs and Affordable Workstation GPUs</h2>
          <p className="text-foreground/60 text-xl">Choose from our wide range of NVIDIA GPUs for any workload</p>
        </div>
        <div className="flex flex-col gap-6 max-w-7xl mx-auto lg:grid lg:grid-cols-3 lg:gap-7">
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