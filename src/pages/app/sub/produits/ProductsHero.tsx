import React from "react";
import { Link } from "react-router-dom";

export const ProductsHero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-[40vh] min-h-[300px] flex items-center px-[8%] overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          // src="https://images.pexels.com/photos/4033636/pexels-photo-4033636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          src="assets/img/groupe_produit2.jpg"
          alt="Boutique Phytocare"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 w-full text-white animate-fade-in-up">
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
            <li className="font-semibold">Produits</li>
          </ol>
        </nav>
        <h1 className="text-4xl md:text-6xl font-bold">
          Nos Solutions Naturelles
        </h1>
      </div>
    </section>
  );
};

export default ProductsHero;
