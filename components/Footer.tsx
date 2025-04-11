import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { BiChip } from 'react-icons/bi';

const Footer: React.FC = () => {
  return (
    <footer className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <BiChip className="w-8 h-8 text-accent" />
              <span className="text-foreground font-bold">[INSERT LOGO]</span>
            </div>
            <p className="text-foreground text-sm">
              High-performance GPU infrastructure for AI and machine learning.
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-bold mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/offerings" className='text-foreground hover:text-accent transition-colors'>
                  GPUs
                </Link>
              </li>
              <li>
              <Link href="/offerings" className='text-foreground hover:text-accent transition-colors'>
              [INSERT MODEL]
                </Link>
              </li>
              <li>
              <Link href="/offerings" className='text-foreground hover:text-accent transition-colors'>
              [INSERT MODEL]
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-foreground hover:text-accent transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <Link href="#" className='text-accent hover:text-foreground transition-colors'>
                <FaTwitter className="w-5 h-5" />
              </Link>
              <Link href="#" className='text-accent hover:text-foreground transition-colors'>
                <FaGithub className="w-5 h-5" />
              </Link>
              <Link href="#" className='text-accent hover:text-foreground transition-colors'>
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className='text-accent hover:text-foreground transition-colors'>
                <FaDiscord className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-border-color">
          <p className="font-bold text-foreground/80">
            © 2025 [INSERT NAME]. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 