import React from "react";
import {MoveRight, MoveLeft } from "lucide-react";

interface UITestimonialCardProps {
  image: string;
  quote: string;
  name: string;
  title: string;
  logo?: string;
  onPrev: () => void;
  onNext: () => void;
}

const UITestimonialCard: React.FC<UITestimonialCardProps> = ({
  image,
  quote,
  name,
  title,
  logo,
  onPrev,
  onNext,
}) => {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Card */}
      <div className="relative flex bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        
        {/* Image */}
        <div className="w-[280px] flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-l-2xl"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between p-10 flex-1">
          <div>
            <div className="text-5xl text-gray-300 leading-none mb-4">“</div>
            <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
              {quote}
            </p>
          </div>

          <div className="flex items-end justify-between mt-8">
            <div>
              <p className="font-semibold text-gray-900 text-lg">
                {name}
              </p>
              <p className="text-sm text-gray-500">
                {title}
              </p>
            </div>

            {logo && (
              <img
                src={logo}
                alt="Logo"
                className="h-10 object-contain"
              />
            )}
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={onPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6
                   w-12 h-12 rounded-full border border-gray-300 bg-white
                   flex items-center justify-center text-gray-600
                   hover:bg-gray-100 transition"
      >
        <MoveLeft/>
      </button>

      <button
        onClick={onNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6
                   w-12 h-12 rounded-full border border-[#0B5C4D] bg-white
                   flex items-center justify-center text-[#0B5C4D]
                   hover:bg-[#0B5C4D] transition"
      >
        <MoveRight/>
      </button>
    </div>
  );
};

export default UITestimonialCard;
