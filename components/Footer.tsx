
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#a6192e] text-white/50 py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
           <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white/30">
              <path d="M12 2L1 7l11 5 11-5-11-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-xs tracking-widest font-bold">AMERICAN UNIVERSITY</span>
        </div>
        <div className="text-[10px] tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Brookside Education Group. All rights reserved.
        </div>
        <div className="flex space-x-6 text-[10px] tracking-widest">
          <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
          <a href="#" className="hover:text-white transition-colors">TERMS</a>
          <a href="#" className="hover:text-white transition-colors">CONTACT</a>
        </div>
      </div>
    </footer>
  );
};
