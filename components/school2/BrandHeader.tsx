
import React from 'react';

export const BrandHeader: React.FC = () => {
  return (
    <div className="bg-white py-4 px-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center p-2 border-2 border-blue-900">
          {/* Mock Logo Icon */}
          <svg viewBox="0 0 24 24" className="w-12 h-12 fill-[#002147]">
            <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
          </svg>
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#002147] tracking-tight">JCT INSTITUTIONS</h1>
          <p className="text-[#e31e24] font-bold text-sm tracking-widest">ENGINEERING & POLYTECHNIC</p>
          <p className="text-[9px] text-gray-500 font-medium">APPROVED BY AICTE, NEW DELHI, AFFILIATED TO ANNA UNIVERSITY CHENNAI</p>
          <p className="text-[9px] text-gray-500 font-medium">PICHANUR, COIMBATORE, TAMILNADU, INDIA</p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="bg-[#002147] text-white p-2 px-6 rounded text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider">Counselling Code</p>
          <p className="text-3xl font-black">2769</p>
        </div>
        <div className="flex flex-col items-center">
           <div className="text-[#002147] font-black text-2xl tracking-tighter italic border-b-2 border-[#002147]">NBA</div>
           <p className="text-[8px] font-bold text-gray-700 text-center leading-tight mt-1">
             ACCREDITED<br/>Engineering<br/>PCE | EEE<br/>MECH | CSE
           </p>
        </div>
      </div>
    </div>
  );
};
