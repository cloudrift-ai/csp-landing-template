import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

// Import the Theme type from the context file
type Theme = 'neuralrack' | 'alt1' | 'alt2' | 'light';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-foreground hover:text-accent transition-colors px-3 py-1.5 rounded-md border border-border-color"
      >
        Theme
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-card-bg border border-border-color rounded-md shadow-lg z-50 p-2">
          <div className="flex flex-col gap-2 w-full">
            <button
              onClick={() => selectTheme('neuralrack')}
              className={`w-full px-3 py-2 rounded-md text-left transition-colors duration-200 ${
                theme === 'neuralrack'
                  ? 'bg-accent text-foreground font-medium'
                  : 'hover:bg-surface text-foreground'
              }`}
            >
              NeuralRack
            </button>
            <button
              onClick={() => selectTheme('alt1')}
              className={`w-full px-3 py-2 rounded-md text-left transition-colors duration-200 ${
                theme === 'alt1'
                  ? 'bg-accent text-foreground font-medium'
                  : 'hover:bg-surface text-foreground'
              }`}
            >
              Alternative 1
            </button>
            <button
              onClick={() => selectTheme('alt2')}
              className={`w-full px-3 py-2 rounded-md text-left transition-colors duration-200 ${
                theme === 'alt2'
                  ? 'bg-accent text-foreground font-medium'
                  : 'hover:bg-surface text-foreground'
              }`}
            >
              Alternative 2
            </button>
            <button
              onClick={() => selectTheme('light')}
              className={`w-full px-3 py-2 rounded-md text-left transition-colors duration-200 ${
                theme === 'light'
                  ? 'bg-accent text-foreground font-medium'
                  : 'hover:bg-surface text-foreground'
              }`}
            >
              Light
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle; 