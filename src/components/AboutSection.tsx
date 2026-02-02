import React from "react";
import library from "../assets/library.png";
import grad from "../assets/grad.jpg";
import student from "../assets/student.jpg";
import classroom from "../assets/classroom.png";

export const AboutSection: React.FC = () => {
  const cards = [
    {
      title: "Classroom",
      image: classroom,
    },
    {
      title: "Campus",
      image: student,
    },
    {
      title: "Graduation",
      image: grad,
    },
    {
      title: "Library",
      image: library,
    },
  ];

  return (
    <section className="bg-[#a6192e] py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar & Quote Column */}
        <div className="lg:col-span-5 relative">
          <div className="absolute left-0 top-0">
            <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase [writing-mode:vertical-lr] mb-8">
              ABOUT UNIVERSITY
            </p>
          </div>

          <div className="pl-12 lg:pl-16">
            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-20 max-w-lg">
              EDUCATION IS NOT PREPARATION FOR LIFE; EDUCATION IS LIFE ITSELF
            </h2>

            {/* Abstract Decorative Element */}
            <div className="hidden lg:block">
              <svg
                width="200"
                height="400"
                viewBox="0 0 200 400"
                className="opacity-20 stroke-white fill-none"
              >
                <path
                  d="M10,10 Q100,50 10,100 Q100,150 10,200 Q100,250 10,300 Q100,350 10,390"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Image Grid Column */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`relative group rounded-[2rem] overflow-hidden aspect-[4/5] shadow-lg transform transition-transform duration-300 hover:-translate-y-2 ${idx % 2 !== 0 ? "md:mt-12" : ""}`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <h3 className="text-white text-xl font-semibold tracking-wide">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
