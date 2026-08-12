import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../../../types/products/product";
import { formatPrice } from "../../../../utils/formatPrice";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const hasPromo = product.pricePromo < product.priceNormal;

  return (
    <div className="animate-fade-up bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100 flex flex-col">
      <div className="relative overflow-hidden">
        {hasPromo && (
          <span className="absolute top-3 left-3 z-10 bg-[#F7C842] text-[#0C1A2A] text-[10px] font-bold px-2.5 py-1 rounded-md">
            PROMO
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://via.placeholder.com/400x400?text=Phytocare";
          }}
        />
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
            {hasPromo && (
              <span className="text-gray-400 text-sm line-through">
                {formatPrice(product.priceNormal)}
              </span>
            )}
            <span className="font-bold text-[#2F5D3A] text-lg">
              {formatPrice(product.pricePromo)}
            </span>
          </div>
        </div>
        <Link
          to={`/produitPlus/${product.id}`}
          className="inline-flex items-center justify-center w-full bg-[#2F5D3A] text-white py-3 rounded-xl font-semibold hover:bg-[#F7C842] hover:text-[#0C1A2A] transition-all duration-300 gap-2 shadow-md"
        >
          Voir plus
          <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;