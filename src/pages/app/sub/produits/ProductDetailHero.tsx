import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../../../types/products/product";

interface ProductDetailHeroProps {
  product: Product;
}

export const ProductDetailHero: React.FC<ProductDetailHeroProps> = ({ product }) => {
  return (
    <section
      id="hero"
      className="relative h-[35vh] min-h-[260px] w-full flex items-center px-[8%] overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://via.placeholder.com/1200x600?text=Phytocare";
          }}
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
            <li><span className="mx-2">/</span></li>
            <li>
              <Link to="/Produits" className="hover:text-green-400 transition">
                Produits
              </Link>
            </li>
            <li><span className="mx-2">/</span></li>
            <li className="font-semibold">{product.name}</li>
          </ol>
        </nav>
        <h1 className="text-3xl md:text-5xl font-bold font-serif">{product.name}</h1>
      </div>
    </section>
  );
};

export default ProductDetailHero;