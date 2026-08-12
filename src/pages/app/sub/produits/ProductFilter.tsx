import React from "react";
import { FilterCategoryId } from "../../../../types/products/product";
import { categoryFilters } from "../../../../data/productsData";

interface ProductFilterProps {
  activeCategory: FilterCategoryId;
  onSelectCategory: (category: FilterCategoryId) => void;
}

export const ProductFilter: React.FC<ProductFilterProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
      {categoryFilters.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            aria-pressed={isActive}
            className={`px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border-2 ${
              isActive
                ? "bg-[#2F5D3A] text-white border-[#2F5D3A] shadow-lg"
                : "bg-gray-100 text-gray-600 border-transparent hover:bg-white hover:border-[#2F5D3A] hover:text-[#2F5D3A]"
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
};

export default ProductFilter;