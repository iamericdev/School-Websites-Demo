
import React from 'react';

export const Navigation: React.FC = () => {
  const links = [
    { name: 'Home', active: true },
    { name: 'About JCT' },
    { name: 'Admission' },
    { name: 'Departments' },
    { name: 'Research' },
    { name: 'Training & Placement' },
    { name: 'Life@JCT' },
    { name: 'Approvals' },
    { name: 'Quick Links' },
  ];

  return (
    <nav className="bg-[#e31e24] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-start">
        {links.map((link) => (
          <a
            key={link.name}
            href="#"
            className={`px-4 py-3 text-[11px] font-bold uppercase tracking-wide transition-colors duration-200 border-r border-white/10 last:border-0
              ${link.active ? 'bg-[#002147] text-white' : 'text-white hover:bg-white/10'}`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};
