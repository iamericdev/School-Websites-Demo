import React from "react";
import { Phone, Mail } from "lucide-react";

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#f2f2f2] border-b border-gray-300 py-1.5 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center text-[11px] font-medium text-gray-600">
      <div className="flex items-center space-x-4">
        <div className="flex items-center gap-1">
          <Phone size={12} className="text-[#002147]" />
          <span>+25472 263 900</span>
        </div>
        <div className="flex items-center gap-1">
          <Mail size={12} className="text-[#002147]" />
          <span>info@ugc.ac.ke</span>
        </div>
      </div>
      <div className="flex items-center divide-x divide-gray-400 space-x-3 mt-2 md:mt-0">
        <a href="#" className="pl-3 hover:text-red-600 uppercase">
          Events
        </a>
        <a href="#" className="pl-3 hover:text-red-600 uppercase">
          Sports
        </a>
        <a href="#" className="pl-3 hover:text-red-600 uppercase">
          Jobs
        </a>
        <a href="#" className="pl-3 hover:text-red-600 uppercase">
          Anti Ragging
        </a>
        <a href="#" className="pl-3 hover:text-red-600 uppercase">
          Our Campus
        </a>
      </div>
    </div>
  );
};
