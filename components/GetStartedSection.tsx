import React from 'react';
import Card from './Card';
import Link from 'next/link';

const GetStartedSection: React.FC = () => {
  const steps = [
    {
      stepNumber: 1,
      title: "Create an Account",
      description: "Sign up using your email address and verify your account."
    },
    {
      stepNumber: 2,
      title: "Choose GPU Configuration",
      description: "Select from our range of GPU options based on your requirements."
    },
    {
      stepNumber: 3,
      title: "Add Credits",
      description: "Set up your preferred payment method for minute-based billing and add credits to your account."
    },
    {
      stepNumber: 4,
      title: "Deploy your Container or VM",
      description: "Launch your container with pre-configured ML frameworks."
    }
  ];

  return (
    <section 
      className="w-full h-auto flex justify-center items-center py-24 relative"
      style={{
        background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.10) 0%, rgba(255, 255, 255, 0.01) 50%, rgba(0, 0, 0, 0.10) 100%)'
      }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get Started in a few Simple Steps
          </h2>
          <p className="text-xl text-foreground">
            Quick and easy setup process to start your AI workload
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {steps.map((step) => (
            <Card
              key={step.stepNumber}
              variant="step"
              {...step}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link 
            href="#"
            className="px-8 py-3 bg-accent text-primary font-semibold rounded-md transition-colors duration-200 text-lg hover:bg-primary hover:text-foreground"
          >
            Start and Rent a GPU Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection; 