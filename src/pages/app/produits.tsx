import React, { useState, useMemo } from "react";
import  ProductsHero  from "./sub/produits/ProductsHero";
import  ProductFilter from "./sub/produits/ProductFilter";
import  ProductCard  from "./sub/produits/ProductCard";
import { productsData } from "../../data/productsData";
import { FilterCategoryId } from "../../types/products/product";

const ProduitsPage: React.FC = () => {

  const [selectedCategory, setSelectedCategory] =
    useState<FilterCategoryId>("all");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return productsData.filter((p) => p.featured);
    }
    return productsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);
  
  return (
    <main className="w-full pt-2 pb-10">

      <ProductsHero />

        <section className="py-20 bg-[#FAFBF8]">
          <div className="px-[8%]">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#2F5D3A] mb-4 font-serif">
                Parcourez notre gamme
              </h2>
              <p className="text-gray-600 text-lg italic">
                Une sélection rigoureuse de plantes pour votre équilibre
                naturel.
              </p>
            </div>

            <ProductFilter
              activeCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
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
     
    </main>
  ); 
};

export default ProduitsPage;
