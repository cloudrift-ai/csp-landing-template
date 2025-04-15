import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

type InterestType = 'Custom Build' | 'Long-Term Rental' | 'Other';

const ContactSection: React.FC = () => {
  const [selectedInterest, setSelectedInterest] = useState<InterestType>('Custom Build');

  return (
    <section className="flex justify-center items-center min-h-[900px]" id="contact">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl">
        <div className="flex flex-col justify-center items-center md:items-start">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Get in Touch</h2>
          <p className="text-foreground max-w-xl mb-12 text-center md:text-left">
            Whether you&apos;re interested in custom GPU builds, have general questions, or need
            assistance with something else, we&apos;re here to help.
          </p>
          
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <MdEmail className="w-6 h-6 text-accent" />
              <span className="text-foreground">[YOUR E-MAIL]</span>
            </div>
            
            <div className="flex items-center gap-3">
              <FaPhone className="w-6 h-6 text-accent" />
              <span className="text-foreground">[YOUR PHONE]</span>
            </div>
            
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="w-6 h-6 text-accent" />
              <span className="text-foreground">[Location]</span>
            </div>
          </div>

          <div className="flex gap-4 mt-12">
            <a href="#" className="text-accent hover:text-accent-light">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-accent hover:text-accent-light">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="#" className="text-accent hover:text-accent-light">
              <FaDiscord className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="bg-card-bg rounded-xl border border-border-color p-8">
          <div className="mb-8">
            <h3 className="text-foreground text-sm font-normal mb-4">I&apos;m interested in:</h3>
            <div className="flex flex-wrap gap-3">
              {(['Custom Build', 'Long-Term Rental', 'Other'] as const).map((interest) => (
                <button
                  key={interest}
                  onClick={() => setSelectedInterest(interest)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedInterest === interest
                      ? 'bg-accent text-primary'
                      : 'bg-transparent text-foreground border border-border-color hover:bg-border-color'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-foreground text-sm mb-2">Your name</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full bg-transparent border-b border-border-color text-foreground pb-2 focus:outline-none focus:border-accent placeholder-placeholder-color"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-foreground text-sm mb-2">Your email</label>
              <input
                type="email"
                id="email"
                placeholder="email@gmail.com"
                className="w-full bg-transparent border-b border-border-color text-foreground pb-2 focus:outline-none focus:border-accent placeholder-placeholder-color"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-foreground text-sm mb-2">Your message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-card-bg border border-border-color rounded-lg p-3 text-foreground focus:outline-none focus:border-accent"
              />
            </div>

            <button type="submit" className="w-1/3 py-2 px-4 bg-accent text-primary rounded-lg hover-bg-primary-dark transition-colors">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 