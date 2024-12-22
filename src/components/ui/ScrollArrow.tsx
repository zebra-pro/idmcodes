import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollArrowProps {
  onClick: () => void;
}

export default function ScrollArrow({ onClick }: ScrollArrowProps) {
  return (
    <button
      onClick={onClick}
      className="group relative p-4"
      aria-label="Scroll to services"
    >
      <div className="flex flex-col items-center animate-bounce">
        <ChevronDown className="w-8 h-8 text-white opacity-60 group-hover:text-blue-400 
          transition-all duration-300 transform group-hover:scale-110" />
        <ChevronDown className="w-8 h-8 text-white opacity-40 group-hover:text-blue-400 
          transition-all duration-300 transform group-hover:scale-110 -mt-4" />
      </div>
    </button>
  );
}