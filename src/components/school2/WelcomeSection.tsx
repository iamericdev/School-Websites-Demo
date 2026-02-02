import React from "react";

export const WelcomeSection: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div>
            <h4 className="text-[#e31e24] text-xl font-medium mb-1">
              Welcome to
            </h4>
            <h2 className="text-[#e31e24] text-3xl font-bold leading-tight">
              UGC College of Engineering and Technology
            </h2>
          </div>

          <h3 className="text-gray-800 text-xl font-bold">
            The Amazing World of Career Oriented Technichal Education
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Shri Jagannath Educational Health and Charitable Trust was
            established by renowned and philanthropic people with an objective
            of providing education to all especially the down trodden and rural
            population.
          </p>

          <button className="bg-[#e31e24] text-white px-8 py-3 text-xs font-bold uppercase rounded shadow-lg hover:bg-red-700 transition-colors">
            Read More
          </button>
        </div>

        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800"
              alt="UGC Building"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
