import React from 'react';
import Card from './Card';


const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "John Smith",
      role: "AI Researcher at TechCorp",
      testimonial: "Lorem ipsum dolor sit amet consectetur. Accumsan libero massa viverra integer sed non sed at. Feugiat sit nunc id nibh cras libero.",
      avatar: ""
    },
    {
      name: "Sarah Johnson",
      role: "ML Engineer at DataTech",
      testimonial: "Lorem ipsum dolor sit amet consectetur. .",
      avatar: ""
    },
    {
      name: "Michael Chen",
      role: "Data Scientist at AILabs",
      testimonial: "Lorem ipsum dolor sit amet consectetur. Sit justo viverra faucibus adipiscing risus nulla. Convallis morbi adipiscing id scelerisque.",
      avatar: ""
    }
  ];

  return (
    <section className="mt-15 h-auto flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-foreground">
            Join [Number] of satisfied AI researchers and developers
          </p>
        </div>

        <div className="flex flex-col gap-6 mx-auto lg:grid lg:grid-cols-3 lg:gap-6 max-w-[1200px]">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              variant="testimonial"
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 