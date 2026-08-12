import React from "react";
import { Link } from "react-router-dom";

export const MaladieHero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-[40vh] min-h-[300px] flex items-center px-[8%] overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/5910965/pexels-photo-5910965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Traitements Naturels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 w-full animate-fade-in-up text-white">
        <nav className="flex mb-4 text-sm md:text-base opacity-90">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="hover:text-green-400 transition">
                Accueil
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="font-semibold">Maladies</li>
          </ol>
        </nav>
        <h1 className="text-4xl md:text-6xl font-bold font-serif">
          Pathologies & Solutions
        </h1>
      </div>
    </section>
  );
};

export default MaladieHero;