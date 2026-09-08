import React from "react";
import { featuresData } from "../../../../data/homeData";

export const Features: React.FC = () => {
  return (
    <section className="py-12 bg-white px-[8%] border-b border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {featuresData.map((item) => (
          <div
            key={item.title}
            className="flex bg-red items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-[#034949]/10 text-[#034949] flex items-center justify-center text-xl flex-shrink-0">
              <i className={`fa-solid ${item.icon}`} aria-hidden="true"></i>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
