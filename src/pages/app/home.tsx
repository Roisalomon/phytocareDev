import React from "react";
// import { useNavigate } from "react-router-dom";
import Hero from "./sub/home/Hero";
import Features from "./sub/home/Features";
import DiseaseSearch from "./sub/home/DiseaseSearch";
import HomeProductsSection from "./sub/home/HomeProductsSection";
import HomeDiseaseSection  from "./sub/home/HomeDiseaseSection";
import TestimonialsSection  from "./sub/home/TestimonialsSection";
import TeamSection  from "./sub/home/TeamSection";


const HomePage: React.FC = () => {

  return (
    <main className="min-h-screen bg-background font-poppins flex flex-col justify-center items-center text-center">
      <Hero />
      <Features />
      <HomeProductsSection />
      <HomeDiseaseSection />
      <DiseaseSearch />
      <TestimonialsSection />
      <TeamSection />

    </main>
  );
};

export default HomePage;
