import React, { useState } from "react";
import { ChevronDown, School } from "lucide-react";

interface SchoolSwitcherProps {
  current: "school1" | "school2";
  onSelect: (school: "school1" | "school2") => void;
}

export const SchoolSwitcher: React.FC<SchoolSwitcherProps> = ({
  current,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const schools = [
    { id: "school1", name: "American University (School 1)" },
    { id: "school2", name: "UGC Institutions (School 2)" },
  ] as const;

  return (
    <div className="fixed top-4 right-4 z-[9999]">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-white/90 backdrop-blur shadow-2xl border border-gray-200 px-4 py-2 rounded-full text-xs font-bold text-gray-800 hover:bg-white transition-all active:scale-95"
        >
          <School size={14} className="text-indigo-600" />
          <span>{current === "school1" ? "School 1" : "School 2"}</span>
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="p-2">
              <p className="px-3 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Select Design
              </p>
              {schools.map((school) => (
                <button
                  key={school.id}
                  onClick={() => {
                    onSelect(school.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                    current === school.id
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {school.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
