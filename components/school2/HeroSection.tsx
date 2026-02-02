
import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative">
      <div className="h-[400px] md:h-[550px] w-full relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1600" 
          alt="JCT Students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Overlays */}
        <div className="absolute inset-x-0 bottom-[15%] flex flex-col items-center">
          <div className="bg-[#002147] text-white px-8 md:px-16 py-3 md:py-4 shadow-2xl">
            <h2 className="text-xl md:text-3xl font-bold uppercase tracking-widest text-center">
              Better Career Opportunities
            </h2>
          </div>
          <div className="bg-[#e31e24] text-white px-6 md:px-12 py-2 mt-2 shadow-xl skew-x-[-10deg]">
            <p className="text-xs md:text-base font-bold uppercase tracking-wider skew-x-[10deg] text-center">
              More than 50 companies recruited from JCT in 2018
            </p>
          </div>
        </div>
      </div>

      {/* News Ticker Bar */}
      <div className="bg-[#002147] py-2 px-4 flex items-center overflow-hidden">
        <span className="text-white text-[10px] font-black uppercase whitespace-nowrap border-r border-white/30 pr-4 mr-4">
          Recent Updates:
        </span>
        <div className="flex space-x-4 animate-marquee whitespace-nowrap text-white/80 text-[10px] uppercase font-medium">
          <span>Zoho / Infosys / Wipro / Mahindra Automotives / Tata Motors / Hindustan Unilever / Apollo / Indian Oil Corporation / Bharat</span>
          <span className="opacity-0">. . . . .</span>
          <span>Zoho / Infosys / Wipro / Mahindra Automotives / Tata Motors / Hindustan Unilever / Apollo / Indian Oil Corporation / Bharat</span>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};
