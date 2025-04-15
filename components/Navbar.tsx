import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { HiChip } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full flex justify-center px-4 absolute top-4 z-50">
      <nav className="w-full max-w-7xl rounded-2xl backdrop-filter backdrop-blur-[2px] bg-gradient-to-r from-[rgba(34,34,34,0.4)] via-[rgba(64,64,64,0.4)] to-[rgba(55,55,55,0.4)]">
        <div className="flex items-center justify-between gap-6 px-6 py-4">
          {/* Logo (left) */}
          <div className="flex items-center gap-2">
            <div className="text-accent">
              <HiChip className="w-6 h-6" />
            </div>
            <Link href="/" className="text-foreground font-bold text-xl">
              [INSERT LOGO]
            </Link>
          </div>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex gap-8">
              <Link href="/#pricing" className="text-foreground hover:text-accent transition-colors">
                Pricing
              </Link>
              <Link href="/about#features" className="text-foreground hover:text-accent transition-colors">
                Features
              </Link>
              <Link href="/#faq" className="text-foreground hover:text-accent transition-colors">
                FAQ
              </Link>
              <Link href="/offerings" className="text-foreground hover:text-accent transition-colors">
                Offerings
              </Link>
              <Link href="/about" className="text-foreground hover:text-accent transition-colors">
                About
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            
            <Link href="/#contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
            <Link
              href="/console"
              className="bg-accent text-primary px-4 py-2 rounded-md hover:bg-primary-dark hover:text-foreground transition-colors"
            >
              Rent GPU
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground hover:text-accent focus:outline-none"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 mb-4 mx-4 py-2 px-4 rounded-md backdrop-filter">
            <div className="flex flex-col gap-3">
              <Link
                href="#pricing"
                className="text-foreground hover:text-accent py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/about#features"
                className="text-foreground hover:text-accent py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#faq"
                className="text-foreground hover:text-accent py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/offerings"
                className="text-foreground hover:text-accent py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Offerings
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-accent py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#contact"
                className="text-foreground hover:text-accent py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <Link
                href="/console"
                className="bg-accent text-foreground px-4 py-2 rounded-md hover:bg-primary-dark hover:text-foreground transition-colors inline-block w-fit"
                onClick={() => setMobileMenuOpen(false)}
              >
                Rent GPU
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar; 