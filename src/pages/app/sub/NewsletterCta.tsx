import React from "react";
import { Send } from "lucide-react";

const NewsletterCta: React.FC = () => {
  return (
    <div className="relative w-full mt-10 z-10">
      {/* Container de positionnement */}
      <div className="absolute left-1/2 -bottom-[100px] -translate-x-1/2 w-full px-4">
        
        <div
          className="
            max-w-6xl mx-auto
            bg-[#064E45]
            rounded-3xl
            px-6 md:px-12
            py-10 md:py-14
            flex flex-col md:flex-row
            items-start md:items-center
            justify-between
            gap-6
            shadow-2xl
            overflow-hidden
          "
        >
          {/* Décor lignes (background) */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <svg
              className="w-full h-full"
              viewBox="0 0 800 200"
              fill="none"
            >
              <path
                d="M0 120 C200 40 400 200 800 80"
                stroke="#A3E635"
                strokeWidth="2"
              />
              <path
                d="M0 160 C300 60 500 220 800 120"
                stroke="#22C55E"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Texte */}
          <h3 className="relative z-10 text-white text-xl md:text-3xl font-semibold leading-snug max-w-xl">
            Sign Up today to get the <br />
            latest inspiration & insights
          </h3>

          {/* Input + bouton */}
          <div className="relative z-10 w-full md:w-auto flex items-center gap-3 bg-white rounded-xl px-4 py-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="
                w-full md:w-72
                text-sm
                text-gray-700
                outline-none
                placeholder:text-gray-400
              "
            />

            <button
              className="
                bg-[#064E45]
                text-white
                p-2.5
                rounded-lg
                hover:bg-[#043C35]
                transition
              "
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCta;
