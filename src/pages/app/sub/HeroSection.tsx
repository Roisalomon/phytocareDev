import React from "react";
import { ArrowRight } from "lucide-react";
import UIButton from "../../../components/ui/elements/UIButton";
import UIStatistiqueDiv from "../../../components/ui/elements/UIStatistiqueDiv";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#0B5C4D] overflow-hidden w-full top-[-1px] left- " id="hero-section">
      <div className="max-w-7xl mx-auto pl-6 grid grid-cols-1 md:grid-cols-2  md:ml-[6%] md:mt-[4%] items-center gap-2">
        <div className="absolute -top-[10%] -left-[10%] w-82 h-82 ">
          <img
            src="/assets/hero/hero-1-2.png"
            alt="back"
            className="relative z-10 w-full md:w-full md:h-full "
          />
        </div>
        {/* ===== Texte ===== */}
        <div className="text-center md:text-left text-white">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Discover, Learn,
            <br />
            and Grow Smarter
            <br />
            with{" "}
            <span className="relative inline-block">
              Educaeet
              <span className="absolute left-0 top-[50%] w-full h-2 bg-yellow-400 opacity-70 transition-all duration-[450ms]"></span>
            </span>
          </h1>

          <p className="text-white/80 max-w-xl mb-10">
            Educaeet offers expert-led courses, modern tools, and a supportive
            environment to help learners grow, achieve success, and build a
            brighter future.
          </p>

          <UIButton
            text={
              <span className="flex items-center gap-2">
                Find Courses <ArrowRight size={16} />
              </span>
            }
            bgColor="#F7C842"
            textColor="#000"
            className="px-8 py-3 rounded-lg text-sm font-semibold hover:bg-[#e6b838] transition"
          />
        </div>

        {/* ===== Image ===== */}
        <div className="relative flex justify-center md:justify-end">
          {/* Cercle décoratif */}
          <div className="absolute top-10 right-[30%] w-82 h-82 ">
            <img
              src="/assets/hero/hero-1-5.png"
              alt="back"
              className="relative z-10 w-full md:w-full md:h-full animate-spinSlower"
            />
          </div>

          <img
            src="/assets/hero/hero-1-1.png"
            alt="Happy student"
            className="relative z-10 -top-10 w-[380px] md:w-[700px] md:h-[110%] object-contain"
          />

          {/* Badge 10k */}
          <div className="absolute top-[37%] right-[20%] px-4 py-3">
            <UIStatistiqueDiv
              icon={
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M4 5h16v14H4z" />
                  <path d="M12 12l4-3v6l-4-3z" />
                </svg>
              }
              iconBg="bg-[#0B5C4D]"
              title="Online Video Courses"
              value="10k"
              Color2="text-yellow"
              Color1="text-black"

            />

          </div>

          {/* Badge 15k */}
          <div className="absolute bottom-[25%] -left-10 ">
            <UIStatistiqueDiv
              icon={
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M4 5h16v14H4z" />
                  <path d="M12 12l4-3v6l-4-3z" />
                </svg>
              }
              iconBg="bg-[#0B5C4D]"
              title="Active Students"
              value="15k"
              Color2="text-yellow"
              Color1="text-black"

            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
