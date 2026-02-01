
import React from 'react';
import { Car, HardHat, Monitor, Cpu, Zap, Utensils } from 'lucide-react';

export const CoursesSection: React.FC = () => {
  const courses = [
    { icon: <Car size={24} />, name: 'Automobile Engineering' },
    { icon: <HardHat size={24} />, name: 'Civil Engineering' },
    { icon: <Monitor size={24} />, name: 'Computer Science and Engineering' },
    { icon: <Cpu size={24} />, name: 'Electronics and Communication Engineering' },
    { icon: <Zap size={24} />, name: 'Electrical and Electronics Engineering' },
    { icon: <Utensils size={24} />, name: 'Food Technology' },
  ];

  return (
    <div className="bg-[#002147] text-white py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Abstract Background element */}
      <div className="absolute left-[-100px] top-[-50px] w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="flex flex-col justify-center">
          <h2 className="text-8xl font-black opacity-90 leading-none">13</h2>
          <p className="text-xl font-medium mt-4 max-w-[200px] text-gray-300">
            Under Graduate and Post Graduate Courses
          </p>
        </div>
        
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-bold whitespace-nowrap">UG Courses</h3>
            <div className="h-[1px] bg-gray-600 w-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
            {courses.map((course, idx) => (
              <div key={idx} className="flex items-start gap-4 group cursor-pointer">
                <div className="text-white bg-white/10 p-2 rounded group-hover:bg-red-600 transition-colors">
                  {course.icon}
                </div>
                <div className="text-sm font-medium leading-tight text-gray-300 group-hover:text-white transition-colors pt-1">
                  {course.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
