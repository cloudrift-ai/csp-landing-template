import React from 'react';
import Card from './Card';
import { RiRocketLine, RiShieldLine, RiCustomerService2Line, RiLineChartLine, RiMoneyDollarCircleLine, RiDashboard3Fill } from 'react-icons/ri';

const whyUsFeatures = [
  {
    title: "Reliability Focus",
    description: "Access to the latest GPU hardware and cloud infrastructure for optimal performance.",
    icon: <RiRocketLine className="w-6 h-6" />
  },
  {
    title: "Enterprise Security",
    description: "Industry-leading security measures to protect your data and applications.",
    icon: <RiShieldLine className="w-6 h-6" />
  },
  {
    title: "Proactive Support",
    description: "Proactive technical support, ready to assist you with expert guidance whenever you need it.",
    icon: <RiCustomerService2Line className="w-6 h-6" />
  },
  {
    title: "Scalable Solutions",
    description: "Flexible infrastructure that grows with your needs and workload demands.",
    icon: <RiLineChartLine className="w-6 h-6" />
  },
  {
    title: "Cost Effective",
    description: "Transparent pricing with no hidden fees and pay-per-use billing model.",
    icon: <RiMoneyDollarCircleLine className="w-6 h-6" />
  },
  {
    title: "High Performance",
    description: "Optimized infrastructure for maximum speed and computational power.",
    icon: <RiDashboard3Fill className="w-6 h-6" />
  }
];

const WhyUsSection: React.FC = () => {
  return (
    <section className="py-24 px-4" id="features">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
          <p className="text-foreground text-lg max-w-2xl mx-auto">
            Delivering excellence in cloud computing solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsFeatures.map((feature, index) => (
            <Card
              key={index}
              variant="feature"
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection; 