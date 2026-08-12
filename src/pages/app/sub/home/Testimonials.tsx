import React from "react";
import { reviews } from "../../../../data/homeData";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 px-[8%] max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Ce que disent nos clients
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Leurs expériences avec nos solutions phytothérapeutiques
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4"
          >
            <div className="flex text-yellow-400 gap-1 text-sm" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <i key={i} className="fa-solid fa-star"></i>
              ))}
            </div>
            <p className="text-gray-600 text-sm italic">"{r.comment}"</p>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">{r.name}</h4>
              <span className="text-xs text-gray-400">{r.city}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
