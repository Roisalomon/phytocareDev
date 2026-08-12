import React, { useState, useMemo } from "react";
import  ProductFilter  from "../produits/ProductFilter";
import  ProductCard  from "../produits/ProductCard";
import { productsData } from "../../../../data/productsData";
import { FilterCategoryId } from "../../../../types/products/product";

export const HomeProductsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FilterCategoryId>("all");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") {
      return productsData.filter((p) => p.featured);
    }
    return productsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="produits" className="py-20 bg-[#FAFBF8]">
      <div className="px-[8%]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F5D3A] mb-4">
            Nos catégories de produits
          </h2>
          <p className="text-gray-600 text-lg">
            Explorez nos produits naturels par catégorie pour répondre à tous
            vos besoins de santé.
          </p>
        </div>

        <ProductFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            Aucun produit disponible dans cette catégorie pour le moment.
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeProductsSection;