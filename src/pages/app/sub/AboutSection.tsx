import React from "react";
import { Play, Check, MoveRight } from "lucide-react";
import UIButton from "../../../components/ui/elements/UIButton";
import UIAnimatedBackgroundImage from "../../../components/ui/elements/UIAnimatedBackgroundImage";

const AboutSection: React.FC = () => {
  return (
    <section
      className={`
    relative w-full bg-white overflow-hidden 
    py-20 lg:py-32

    
    `}>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* ===== Bloc images (Composition complexe) ===== */}
        <div className="relative flex  justify-center lg:justify-start">

          {/* Décoration : Cercle jaune avec points violets */}
          <UIAnimatedBackgroundImage
            src="/assets/about/about-1-1.png"
            alt="footer decoration"
            left="-5rem"        // équivalent à left-4
            top="-3rem"      // équivalent à -top-6
            right="auto"
            bottom="auto"
            width="13rem"       // équivalent à w-28
            height="13rem"      // équivalent à h-28
            className="md:-left-6 "
          />


          {/* Image 1 : Groupe d'étudiants (Principale) */}
          <div className="relative z-10 top-10">
            <img
              src="/assets/about/about-1-1 1.jpg"
              alt="Students group"
              className="rounded-[2rem] shadow-2xl w-[200px] md:w-[250px]  "
            />
          </div>

          {/* Image 2 : Vidéo (Décalée) */}
          <div className="relative z-20 ml-[4%]  -mt-[10%]">
            <div className="relative top-0 -translate-y-12">
              <img
                src="/assets/about/about-1-2.jpg"
                alt="Library video"
                className="rounded-[2rem] shadow-2xl w-[200px] md:w-[300px] object-cover border-4 border-white"
              />
              {/* Bouton play */}
              <button className="absolute inset-0 flex items-center justify-center group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl transition-transform group-hover:scale-110">
                  <Play className="w-6 h-6 text-[#0B5C4D] fill-[#0B5C4D]" />
                </div>
              </button>
            </div>

            {/* Badge expérience - Placé sous la 2ème image comme sur le design */}
            <div className="absolute -right-4 md:left-3 md:right-5 bg-[#1A202C] text-white rounded-2xl p-6 shadow-2xl min-w-[160px]">
              <div className="flex flex-row">
                <span className="text-3xl font-bold">25+</span>
                <div className="w-px h-10 bg-white opacity-30 mx-4"></div>
                <span className="text-sm text-gray-400 leading-tight">Years of <br /> Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Texte ===== */}
        <div className="flex flex-col gap-6 z-30">
          <div>
            <span className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-[#FDF8E6] text-[#0B5C4D] mb-4">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A202C] leading-[1.15]">
              Learn and Grow Your Skills <br />
              <span className="relative">
                Anywhere
                {/* SVG de soulignement ondulé */}

              </span>, Anytime
            </h2>
          </div>

          <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
            Enhance your knowledge and grow professionally by learning new skills
            anytime, anywhere. Access expert-led courses designed to help you
            succeed in your career, all from the comfort of your home.
          </p>

          {/* Liste avantages */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 mt-2">
            {[
              "Flexible Classes",
              "Expert Trainers",
              "Lifetime Access",
              "Learn Anywhere",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-[#1A202C] font-semibold">
                <div className="flex-shrink-0 w-5 h-5 bg-[#FFD32B] rounded-full flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-white stroke-[4px]" />
                </div>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <UIButton
              text={
                <span className="flex items-center gap-2">
                  More About US <MoveRight className="w-4 h-4" />
                </span>
              }
              bgColor="#0B5C4D"
              textColor="#ffffff"
              className="px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-[#084a3e] transition-colors"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;