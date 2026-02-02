import React from "react";
import { User } from "lucide-react";

export const Header: React.FC = () => {
  const navItems = [
    "NEWS",
    "EVENTS",
    "ACADEMICS",
    "RESEARCH",
    "ALUMNI",
    "CAMPUS LIFE",
    "ADMISSION",
    "ABOUT",
  ];

  return (
    <header className="relative z-50 flex items-stretch">
      {/* Logo Section */}
      <div className="bg-white px-6 py-3 flex items-center rounded-br-[2rem] shadow-md min-w-[200px]">
        <div className="flex items-center gap-2">
          <div className="text-[#a6192e]">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
              <path d="M12 2L1 7l11 5 11-5-11-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[#a6192e] font-bold text-sm leading-tight tracking-tighter">
              Brookside
            </span>
            <span className="text-[#a6192e] font-bold text-sm leading-tight tracking-tighter">
              Academy
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow bg-[#a6192e] flex items-center justify-between px-8">
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-white text-[10px] font-bold tracking-widest hover:text-white/80 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center">
          <button className="bg-white p-1 rounded-full text-[#a6192e] hover:bg-white/90 transition-colors">
            <User size={16} />
          </button>
        </div>
      </nav>
    </header>
  );
};
