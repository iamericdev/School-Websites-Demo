import React from "react";
import library from "../assets/library.png";

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[550px] bg-[#a6192e] m-4">
      {/* Background Image Container */}
      <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
        <img
          src={library}
          alt="Student with coffee"
          className="w-full h-full object-cover object-[10px_px] grayscale-[20%] scale-x-[1]"
        />
      </div>

      {/* Branding Overlay */}
      <div className="absolute bottom-0 left-0 w-[45%] bg-[#a6192e] text-white p-12 pr-16 rounded-tr-[2.5rem]">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none mb-6">
          BROOKSIDE
          <br />
          ACADEMY
        </h1>
        <div className="w-16 h-1 bg-white/30 mb-6"></div>
        <p className="text-[10px] md:text-[12px] font-light tracking-[0.2em] leading-relaxed uppercase opacity-90 max-w-md">
          BROOKSIDE ACADEMY IS A LEADING RESEARCH UNIVERSITY PUSHING BOUNDARIES
          AND FRONTIERS EVER SINCE ITS INCEPTION
        </p>
      </div>
    </section>
  );
};
