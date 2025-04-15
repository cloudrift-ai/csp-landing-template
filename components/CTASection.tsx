import React from 'react';
import Link from 'next/link';
import { FaDiscord } from 'react-icons/fa';

const CTASection: React.FC = () => {
  return (
    <section 
      className="text-center flex items-center justify-center min-h-[520px] gap-y-12"
      style={{

        background: 'linear-gradient(94deg, var(--color-drop-shadow, rgba(33, 33, 33, 0.30)) 0.29%, var(--color-card-bg, rgba(32, 32, 36, 0.30)) 75.52%, var(--color-card-bg, rgba(32, 32, 36, 0.30)) 97.47%), var(--color-background)'
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Ready to Accelerate Your AI Projects?
        </h2>
        <p className="text-foreground text-xl mb-8 max-w-2xl mx-auto">
          Get instant access to high-performance GPUs and start training your
          models today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="#"
            className="px-8 py-3 bg-accent text-primary font-semibold rounded-md transition-colors duration-200 text-[1.125rem] text-center hover:bg-primary hover:text-foreground"
          >
            Rent a GPU Now
          </Link>
          <Link 
            href="#"
            className="px-8 py-3 bg-transparent border-2 border-accent text-foreground font-normal rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 hover:bg-accent/10"
          >
            <FaDiscord className="w-5 h-5 text-accent" />
            Join Our Discord
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 