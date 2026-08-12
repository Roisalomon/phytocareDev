import React from "react";
import { Link } from "react-router-dom";
import { Disease } from "../../../../types/disease";

interface DiseaseDetailHeroProps {
  disease: Disease;
}

export const DiseaseDetailHero: React.FC<DiseaseDetailHeroProps> = ({ disease }) => {
  return (
    <section
      id="hero"
      className="relative h-[35vh] min-h-[260px] flex items-center px-[8%] overflow-hidden bg-[#2F5D3A]"
    >
      <div className="relative z-10 w-full animate-fade-in-up text-white">
        <nav className="flex mb-4 text-sm md:text-base opacity-90">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="hover:text-green-300 transition">
                Accueil
              </Link>
            </li>
            <li><span className="mx-2">/</span></li>
            <li>
              <Link to="/maladies" className="hover:text-green-300 transition">
                Maladies
              </Link>
            </li>
            <li><span className="mx-2">/</span></li>
            <li className="font-semibold">{disease.title}</li>
          </ol>
        </nav>
        <h1 className="text-3xl md:text-5xl font-bold font-serif flex items-center gap-4">
          <span aria-hidden="true">{disease.icon}</span>
          {disease.title}
        </h1>
      </div>
    </section>
  );
};

export default DiseaseDetailHero;