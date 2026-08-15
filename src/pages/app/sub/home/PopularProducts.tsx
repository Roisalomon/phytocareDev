import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../../../data/homeData";

export const PopularProducts: React.FC = () => {
  return (
    <section className="py-16 bg-slate-100/60 px-[8%]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Nos Produits Vedettes
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Sélectionnés pour leur efficacité reconnue
            </p>
          </div>
          <Link
            to="/produit"
            className="text-[#034949] font-semibold text-sm hover:underline flex items-center gap-1"
          >
            Voir tout le catalogue{" "}
            <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div className="relative h-48 bg-slate-50 flex items-center justify-center p-4">
                <span className="absolute top-3 left-3 bg-[#F7C842] text-[#0C1A2A] text-[10px] font-bold px-2.5 py-1 rounded-md">
                  TOP
                </span>
                <i
                  className="fa-solid fa-box-open text-5xl text-gray-300 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                ></i>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-gray-400 uppercase font-medium">
                    {p.category}
                  </span>
                  <h3 className="font-semibold text-gray-800 text-base mt-1 hover:text-[#034949] transition-colors cursor-pointer">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-2 text-yellow-500 text-xs">
                    <i className="fa-solid fa-star" aria-hidden="true"></i>
                    <span className="font-medium text-gray-600">
                      {p.rating}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="font-bold text-[#034949] text-base">
                    {p.price}
                  </span>
                  <a
                    href="https://wa.me/2290166414894"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Commander ${p.title} sur WhatsApp`}
                    className="w-9 h-9 rounded-lg bg-[#0C1A2A] text-white hover:bg-[#F7C842] hover:text-[#0C1A2A] flex items-center justify-center transition-colors"
                  >
                    <i
                      className="fa-solid fa-cart-shopping text-xs"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
