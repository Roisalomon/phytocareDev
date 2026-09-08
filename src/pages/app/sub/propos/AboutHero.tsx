import React from "react";
import { Link } from "react-router-dom";

export const AboutHero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-[40vh] min-h-[300px] flex items-center px-[8%] overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          // src="https://images.unsplash.com/photo-1540340061722-9293d5163008?q=80&w=2071&auto=format&fit=crop"
          src="assets/img/communication.jpg"
          alt="À propos Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#034949]/70" />
      </div>

      <div className="relative z-10 w-full animate-fade-in-up text-white">
        <nav className="flex mb-4 text-sm md:text-base opacity-90">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="hover:text-accent transition">
                Accueil
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="font-semibold">À propos</li>
          </ol>
        </nav>
        <h1 className="text-4xl md:text-6xl font-bold font-serif">
          Notre Histoire
        </h1>
      </div>
    </section>
  );
};

export default AboutHero;