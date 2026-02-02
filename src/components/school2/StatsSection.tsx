
import React from 'react';

export const StatsSection: React.FC = () => {
  const stats = [
    { value: '1000+', label: 'Campus Placements', subLabel: 'from 2015' },
    { value: '50+', label: 'Recruiters', subLabel: 'Participated in 2018' },
    { value: '13+', label: 'Professional', subLabel: 'Courses offered' },
    { value: '10k+', label: 'Students Successfully', subLabel: 'Graduated' },
  ];

  return (
    <div className="bg-white py-12 px-6 border-b border-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-black text-[#002147] mb-1">
              {stat.value}
            </div>
            <div className="text-xs md:text-sm font-bold text-gray-700 leading-tight">
              {stat.label}
            </div>
            <div className="text-[10px] text-gray-500 font-medium uppercase">
              {stat.subLabel}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
