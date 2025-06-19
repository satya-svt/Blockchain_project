
import React from 'react';

const DNAAnimation = () => {
  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-dna-rotate">
          <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M120 40C153.137 40 180 66.8629 180 100C180 133.137 153.137 160 120 160C86.8629 160 60 133.137 60 100C60 66.8629 86.8629 40 120 40Z" stroke="#9b87f5" strokeWidth="2" strokeDasharray="8 8" />
            <path d="M120 60C142.091 60 160 77.9086 160 100C160 122.091 142.091 140 120 140C97.9086 140 80 122.091 80 100C80 77.9086 97.9086 60 120 60Z" stroke="#33C3F0" strokeWidth="2" strokeDasharray="6 6" />
            
            {/* DNA Strands */}
            <line x1="100" y1="60" x2="140" y2="140" stroke="#9b87f5" strokeWidth="3" />
            <line x1="140" y1="60" x2="100" y2="140" stroke="#9b87f5" strokeWidth="3" />
            <line x1="80" y1="100" x2="160" y2="100" stroke="#33C3F0" strokeWidth="3" />
            
            {/* Base Pairs */}
            <circle cx="100" cy="60" r="6" fill="#9b87f5" />
            <circle cx="140" cy="60" r="6" fill="#33C3F0" />
            <circle cx="80" cy="100" r="6" fill="#9b87f5" />
            <circle cx="160" cy="100" r="6" fill="#33C3F0" />
            <circle cx="100" cy="140" r="6" fill="#9b87f5" />
            <circle cx="140" cy="140" r="6" fill="#33C3F0" />
          </svg>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-transparent to-white/80" />
    </div>
  );
};

export default DNAAnimation;
