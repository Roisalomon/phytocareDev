import React from "react";
import { Product } from "../../../../types/products/product";
import { ProductCard } from "./ProductCard";

interface RelatedProductsProps {
  products: Product[];
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  if (products.length === 0) return null;

  return (
    <div className="mt-20">
      <h3 className="text-2xl font-bold text-[#2F5D3A] font-serif mb-8 text-center">
        Produits similaires
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;