import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../../../data/homeData";

export const CategoryList: React.FC = () => {
  return (
    <section className="py-16 px-[8%]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Explorez par Catégories
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Trouvez rapidement ce dont votre organisme a besoin
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to="/produit"
              className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#034949]/20 transition-all text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-slate-50 group-hover:bg-[#034949] group-hover:text-white text-[#034949] flex items-center justify-center text-2xl transition-all mb-4">
                <i className={`fa-solid ${cat.icon}`} aria-hidden="true"></i>
              </div>
              <h3 className="font-semibold text-gray-800 group-hover:text-[#034949] transition-colors">
                {cat.name}
              </h3>
              <span className="text-xs text-gray-400 mt-1">{cat.count}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
