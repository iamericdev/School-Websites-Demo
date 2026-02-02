import React, { useState } from "react";
import { SchoolSwitcher } from "./components/SchoolSwitcher";

// School 1 Components (American University)
import { Header as Header1 } from "./components/Header";
import { Hero as Hero1 } from "./components/Hero";
import { AboutSection as About1 } from "./components/AboutSection";
import { Footer as Footer1 } from "./components/Footer";

// School 2 Components (UGC Institutions)
import { TopBar } from "./components/school2/TopBar";
import { BrandHeader } from "./components/school2/BrandHeader";
import { Navigation } from "./components/school2/Navigation";
import { HeroSection } from "./components/school2/HeroSection";
import { StatsSection } from "./components/school2/StatsSection";
import { WelcomeSection } from "./components/school2/WelcomeSection";
import { CoursesSection } from "./components/school2/CoursesSection";

type SchoolType = "school1" | "school2";

// bg-[#a6192e]

function App() {
  const [currentSchool, setCurrentSchool] = useState<SchoolType>("school2");

  const renderSchool1 = () => (
    <div className="flex flex-col min-h-screen bg-[#a6192e]">
      <Header1 />
      <main className="flex-grow">
        <Hero1 />
        <About1 />
      </main>
      <Footer1 />
    </div>
  );

  const renderSchool2 = () => (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBar />
      <BrandHeader />
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <WelcomeSection />
        <CoursesSection />
      </main>
      <footer className="bg-gray-100 py-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} UGC Institutions. All rights reserved.
      </footer>
    </div>
  );

  return (
    <div className="relative">
      <SchoolSwitcher
        current={currentSchool}
        onSelect={(s) => setCurrentSchool(s)}
      />
      {currentSchool === "school1" ? renderSchool1() : renderSchool2()}
    </div>
  );
}

export default App;
