import React, { useState } from 'react';
import Link from "./foundational/Link";
import { FaDiscord } from "react-icons/fa";
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg pb-4 pt-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/">
            <span onClick={closeMenu}>
              <h1>Your Logo</h1>
            </span>
          </Link>
        </div>
        <button
          className="text-white md:text-white lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <nav className={`w-full lg:w-auto ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="mt-4 flex flex-col space-y-2 lg:mt-0 lg:flex-row lg:space-x-8 lg:space-y-0">
            <li>
              <Link href="https://docs.cloudrift.ai/getting_started">
                <span onClick={closeMenu} className="block px-4 py-2 text-white hover:text-gray-300 lg:inline lg:py-0 cursor-pointer">
                  Documentation
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#pricing">
                <span onClick={closeMenu} className="block px-4 py-2 text-white hover:text-gray-300 lg:inline lg:py-0 cursor-pointer">
                  Pricing
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#contactus">
                <span onClick={closeMenu} className="block px-4 py-2 text-white hover:text-gray-300 lg:inline lg:py-0 cursor-pointer">
                  Contact
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span onClick={closeMenu} className="block px-4 py-2 text-white hover:text-gray-300 lg:inline lg:py-0 cursor-pointer">
                  About Us
                </span>
              </Link>
            </li>
            <li>
              <Link href="[[Discord]]">
                <span onClick={closeMenu} className="block px-4 py-2 text-white hover:text-gray-300 lg:py-0 cursor-pointer h-full">
                  <FaDiscord size={26} />
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;