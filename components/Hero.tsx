
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[550px] bg-[#a6192e] m-4">
      {/* Background Image Container */}
      <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
        <img 
          // src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1600" 
          src="https://images.unsplash.com/photo-1662858557337-48c9ecf07ee0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Student with coffee"
          className="w-full h-full object-cover grayscale-[20%] scale-x-[-1]"
        />
      </div>

      {/* Branding Overlay */}
      <div className="absolute bottom-0 left-0 w-[45%] bg-[#a6192e] text-white p-12 pr-16 rounded-tr-[2.5rem]">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none mb-6">
          AMERICAN<br />UNIVERSITY
        </h1>
        <div className="w-16 h-1 bg-white/30 mb-6"></div>
        <p className="text-[10px] md:text-[12px] font-light tracking-[0.2em] leading-relaxed uppercase opacity-90 max-w-md">
          BROOKSIDE UNIVERSITY IS A LEADING RESEARCH UNIVERSITY PUSHING BOUNDARIES AND FRONTIERS EVER SINCE ITS INCEPTION
        </p>
      </div>
    </section>
  );
};
