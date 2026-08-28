import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../../../types/products/product";
import { formatPrice } from "../../../../utils/formatPrice";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // 1. Déduction automatique ou explicite du badge
  const badge =
    product.badge || (product.pricePromo < product.priceNormal ? "PROMO" : undefined);

  const isUnavailable = badge === "NON DISPO";

  return (
    <div className="animate-fade-up bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100 flex flex-col">
      <div className="relative overflow-hidden bg-white h-56 flex items-center justify-center p-2">
        
        {/* 2. Gestion dynamique du Span/Badge */}
        {badge && (
          <span
            className={`absolute top-3 left-3 z-10 text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm ${
              isUnavailable
                ? "bg-red-500 text-white"
                : "bg-[#F7C842] text-[#0C1A2A]"
            }`}
          >
            {badge}
          </span>
        )}

        {/* 3. Masquer l'image si NON DISPO, afficher un placeholder gris à la place */}
        {isUnavailable ? (
          <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center text-gray-400 gap-2 rounded-xl">
            <i className="fa-solid fa-box-open text-3xl"></i>
            <span className="text-xs font-semibold uppercase tracking-wider">
              Non disponible
            </span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://via.placeholder.com/400x400?text=Phytocare";
            }}
          />
        )}

        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
      </div>

      <div className="p-6 text-center flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-xl text-[#2F5D3A] mb-2 font-serif">
            {product.name}
          </h3>
          <p className="text-gray-500 text-sm mb-4 line-clamp-2">
            {product.shortDesc}
          </p>
          <div className="flex items-center justify-center gap-2 mb-6">
            {product.pricePromo < product.priceNormal && (
              <span className="text-gray-400 text-sm line-through">
                {formatPrice(product.priceNormal)}
              </span>
            )}
            <span className="font-bold text-[#2F5D3A] text-lg">
              {formatPrice(product.pricePromo)}
            </span>
          </div>
        </div>

        {/* Bouton désactivé ou adapté si non disponible */}
        <Link
          to={`/produitPlus/${product.id}`}
          className={`inline-flex items-center justify-center w-full py-3 rounded-xl font-semibold transition-all duration-300 gap-2 shadow-md ${
            isUnavailable
              ? "bg-gray-200 text-gray-500 hover:bg-gray-300"
              : "bg-[#2F5D3A] text-white hover:bg-[#F7C842] hover:text-[#0C1A2A]"
          }`}
        >
          {isUnavailable ? "Voir l'article" : "Voir plus"}
          <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;