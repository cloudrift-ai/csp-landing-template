import React from 'react';
import Card from './Card';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "How is billing calculated?",
      answer: "Billing is calculated per minute of GPU usage. You only pay for the time your instance is running."
    },
    {
      question: "What GPU models are available?",
      answer: "We offer latest NVIDIA GPUs including [INSERT MODEL] models."
    },
    {
      question: "Is there a minimum rental period?",
      answer: "No minimum period. You can run your container or VM for as little as a few minutes."
    },
    {
      question: "What about data security?",
      answer: "Our Datacenters are located in [INSERT COUNTRY]. We follow industry-standard security practices and comply with regulations in [INSERT COUNTRY]"
    }
  ];

  return (
    <section className="w-full h-full items-center justify-center py-24" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-foreground">
            Everything you need to know about our GPU rental service
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-5xl mx-auto lg:grid lg:grid-cols-2 lg:gap-10">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              variant="faq"
              {...faq}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 