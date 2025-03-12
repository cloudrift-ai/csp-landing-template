// Pricing.tsx
import React from "react";
import GPURentalCard from "./GPURentalCard";
import { NextSeo } from 'next-seo';
import { useLowestPrices } from "./GPUInfoFetch";

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonLabel: string;
  buttonStyleExtras?: string;
  link: string;
}

const Pricing: React.FC = () => {
  const { lowestPrices, loading } = useLowestPrices();

  const getPrice = (type: "rtx4090" | "rtx5090" | "rtx6000" | "l40" | "a100" | "h100" | "h200" | "cpu") => {
    if (loading) return "Loading...";
    if (!lowestPrices || lowestPrices[type] === null) return "Price unavailable";

    if (type === "cpu") {
      const price = lowestPrices.cpu;
      if (price === null) {
        return "Price unavailable";
      }
      return `${price.toFixed(2)}¢ / vcpu hour`;
    }
    else {
      const price = lowestPrices[type];
      if (price === null) {
        return "Price unavailable";
      }
      return `$${(price / 100).toFixed(2)} / per hour`;
    }
  };

  const datacenterPricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: "NVidia H200",
      price: getPrice("h200"),
      description: "Game-changing AI capabilities",
      features: [
        "141GB HBM3e VRAM",
        "NVIDIA Hopper architecture",
      ],
      buttonLabel: "Coming April 2025",
      buttonStyleExtras: "border-[#aaaaaa] text-[#aaaaaa] font-bold",
      link: "#",
    },
    {
      id: 2,
      name: "NVidia H100",
      price: getPrice("h100"),
      description: "Elite performance",
      features: [
        "96GB HBM2e VRAM",
        "NVIDIA Hopper architecture",
      ],
      buttonLabel: "Coming April 2025",
      buttonStyleExtras: "border-[#aaaaaa] text-[#aaaaaa] font-bold",
      link: "#",
    },
    {
      id: 3,
      name: "NVidia A100",
      price: getPrice("a100"),
      description: "Affordable AI model training",
      features: [
        "80GB VRAM",
        "NVIDIA Ampere architecture",
      ],
      buttonLabel: "Contact Us",
      link: "#",
    },
    {
      id: 4,
      name: "NVidia L40S",
      price: getPrice("l40"),
      description: "Cost-effective inference",
      features: [
        "48GB VRAM",
        "NVIDIA Ada architecture",
      ],
      buttonLabel: "Coming April 2025",
      buttonStyleExtras: "border-[#aaaaaa] text-[#aaaaaa] font-bold",
      link: "#",
    },
  ];

  const consumerPricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: "RTX 6000 Ada",
      price: getPrice("rtx6000"),
      description: "Ultimate rendering performance",
      features: [
        "48GB VRAM",
        "Large model inference"
      ],
      buttonLabel: "Coming April 2025",
      buttonStyleExtras: "border-[#aaaaaa] text-[#aaaaaa] font-bold",
      link: "#",
    },
    {
      id: 2,
      name: "GeForce RTX 5090",
      price: getPrice("rtx5090"),
      description: "Ultimate gaming performance",
      features: [
        "32GB GDDR7 VRAM",
        "Ultra-fast AI inference"
      ],
      buttonLabel: "Coming April 2025",
      buttonStyleExtras: "border-[#aaaaaa] text-[#aaaaaa] font-bold",
      link: "#",
    },
    {
      id: 3,
      name: "GeForce RTX 4090",
      price: getPrice("rtx4090"),
      description: "Strong gaming performance",
      features: [
        "24GB VRAM",
        "Best value for AI inference"
      ],
      buttonLabel: "Rent a GPU Now",
      link: "/console",
    }
  ];

  const extraPricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: "On-Demand CPUs",
      price: getPrice("cpu"),
      description: "Scalable compute power for intensive workloads",
      features: [
        "AMD EPYC processors",
        "Up to 192 CPU cores",
        "Optimized for multi-threaded applications"
      ],
      buttonLabel: "Rent a CPU Now",
      link: "/console",
    },
    {
      id: 2,
      name: "Dedicated Solutions",
      price: "Custom pricing",
      description: "Customized configurations for specialized needs",
      features: [
        "Full hardware customization",
        "Bare metal and VDS solutions",
        "Dedicated support and cluster management"
      ],
      buttonLabel: "Contact Us",
      link: "#contactus",
    },
  ];

  return (
    <div className="min-h-4/5 flex items-center justify-center bg-black" id="pricing">
      <NextSeo
        title="GPU Rental Pricing | 85% Less for Datacenter-Hosted GPUs"
        description="Affordable GPU rental pricing for AI, ML, and crypto mining. Rent datacenter-hosted GPUs with no middlemen, no commitment, and no hidden fees. Tier 3 design with high-speed network."
        openGraph={{
          title: 'GPU Rental Pricing | 85% Less for Datacenter-Hosted GPUs',
          description: 'View our affordable GPU rental pricing. 85% less than competitors, no middlemen, no commitment. High-speed network, ideal for AI, ML, and crypto mining.',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'GPU rental pricing, RTX 4090, RTX 5090, datacenter-hosted GPUs, AI computing costs, machine learning hardware pricing, cryptocurrency mining costs, no middlemen, no commitment, Tier 3 design, high-speed network'
          }
        ]}
      />

      <div className="w-full max-w-7xl px-2 py-12 text-white">
        <h2 className="mb-8 text-5xl text-center font-bold text-white sm:text-4xl md:text-5xl">
          High-end <span className="text-blue-400">Datacenter</span> GPUs
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {datacenterPricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`w-90 ${
                index === 2 ? "rounded-xl bg-gradient-to-r from-blue-500 to-blue-400 p-[1px]" : ""
              }`}
            >
              <GPURentalCard
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                buttonLabel={plan.buttonLabel}
                buttonStyleExtras={plan.buttonStyleExtras}
                link={plan.link}
              />
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />
        <h3 className="mb-8 text-5xl text-center font-bold text-white sm:text-4xl md:text-5xl">
          <span className="text-blue-400">Affordable</span> Workstation and Gaming GPUs
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {consumerPricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`w-90 ${
                index === 2 ? "rounded-xl bg-gradient-to-r from-blue-500 to-blue-400 p-[1px]" : ""
              }`}
            >
              <GPURentalCard
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                buttonLabel={plan.buttonLabel}
                buttonStyleExtras={plan.buttonStyleExtras}
                link={plan.link}
              />
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />
        <h3 className="mb-8 text-5xl text-center font-bold text-white sm:text-4xl md:text-5xl">
          CPU Instances and <span className="text-blue-400">Other Services</span>
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {extraPricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`w-90 ${
                index === 1 ? "rounded-xl bg-gradient-to-r from-blue-500 to-blue-400 p-[1px]" : ""
              }`}
            >
              <GPURentalCard
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                buttonLabel={plan.buttonLabel}
                buttonStyleExtras={plan.buttonStyleExtras}
                link={plan.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
