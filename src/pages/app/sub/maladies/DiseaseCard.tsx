import React from "react";
import { Link } from "react-router-dom";
import { Disease } from "../../../../types/disease";

interface DiseaseCardProps {
  disease: Disease;
  index: number;
}

export const DiseaseCard: React.FC<DiseaseCardProps> = ({ disease, index }) => {
  return (
    <div
      className="stagger-card group bg-white p-8 rounded-3xl shadow-sm border border-accent flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className="w-[80px] h-[80px] bg-[#f0f4f1] rounded-full flex items-center justify-center text-[2rem] mb-[1.5rem] transition-all duration-500 group-hover:bg-[#2F5D3A] group-hover:text-white group-hover:[transform:rotateY(180deg)]"
        aria-hidden="true"
      >
        <span>{disease.icon}</span>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#2F5D3A] transition-colors font-serif">
        {disease.title}
      </h3>

      <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
        {disease.desc}
      </p>

      <Link
        to={`/maladiePlus/${disease.id}`}
        className="mt-auto bg-[#2F5D3A] text-white px-6 py-[10px] rounded-[12px] text-[0.875rem] font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:bg-[#F7C842] hover:text-[#0C1A2A] hover:scale-[1.05]"
      >
        Lire plus
        <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true"></i>
      </Link>
    </div>
  );
};

export default DiseaseCard;