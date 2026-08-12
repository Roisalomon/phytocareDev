import React, { useState, useMemo } from "react";
import { testimonialsData } from "../../../../data/testimonialsData";

const VISIBLE_COUNT = 3;

export const TestimonialsSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const total = testimonialsData.length;

  const visibleTestimonials = useMemo(() => {
    return Array.from({ length: Math.min(VISIBLE_COUNT, total) }, (_, i) =>
      testimonialsData[(startIndex + i) % total]
    );
  }, [startIndex, total]);

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  return (
    <section className="relative w-full py-24 overflow-hidden min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?auto=format&fit=crop&q=80"
          className="w-full h-full object-cover"
          alt="Zen Background"
        />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
      </div>

      <div className="px-[8%] relative z-10 w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F5D3A] mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-gray-600 italic">
            Découvrez les avis authentiques de nos clients satisfaits.
          </p>
        </div>

        <div className="relative  mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500">
            {visibleTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md space-y-3"
              >
                <div className="flex text-yellow-400 gap-1 text-sm" aria-hidden="true">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic">"{t.comment}"</p>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                  <span className="text-xs text-gray-400">{t.city}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Témoignage précédent"
              className="w-12 h-12 rounded-full border-2 border-[#2F5D3A] text-[#2F5D3A] hover:bg-[#2F5D3A] hover:text-white transition-all duration-300"
            >
              <i className="fas fa-chevron-left" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Témoignage suivant"
              className="w-12 h-12 rounded-full border-2 border-[#2F5D3A] text-[#2F5D3A] hover:bg-[#2F5D3A] hover:text-white transition-all duration-300"
            >
              <i className="fas fa-chevron-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;