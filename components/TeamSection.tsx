import React from 'react';
import Card from './Card';

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "",
    linkedin: "https://linkedin.com/in/john-smith",
    twitter: "https://twitter.com/johnsmith",
    github: "https://github.com/johnsmith"
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    image: "",
    linkedin: "https://linkedin.com/in/sarah-johnson",
    github: "https://github.com/sarahj"
  },
  {
    name: "Michael Chen",
    role: "Lead Engineer",
    image: "",
    linkedin: "https://linkedin.com/in/michael-chen",
    github: "https://github.com/michaelc"
  },
  {
    name: "Emily Brown",
    role: "Product Manager",
    image: "",
    linkedin: "https://linkedin.com/in/emily-brown",
    twitter: "https://twitter.com/emilyb"
  }
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
          <p className="text-foreground text-lg max-w-2xl mx-auto">
            Experts dedicated to revolutionizing cloud computing
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              variant="team"
              {...member}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 