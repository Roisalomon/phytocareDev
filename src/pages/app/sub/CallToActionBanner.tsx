import React from "react";

const CallToActionBanner: React.FC = () => {
  return (
    <section
      className="
        relative min-h-100 w-full
        bg-gradient-to-r from-emerald-800 to-emerald-700
        flex items-center
        px-6 md:px-20
      "
    >
      <div
        className="
          relative w-full max-w-7xl mx-auto
          grid grid-cols-1 md:grid-cols-2
          items-center
          py-16 md:py-24
        "
      >
        {/* Image – Desktop */}
        <div className="hidden md:block absolute right-0 -top-24 z-20">
          <img
            src="/assets/mes/thumb.png"
            alt="Student"
            className="w-[340px] lg:w-[380px] object-contain animate-horizontalBounce"
          />
        </div>

        {/* Image – Mobile */}
        <div className="md:hidden flex justify-center mb-10">
          <img
            src="/assets/mes/thumb.png"
            alt="Student"
            className="w-56"
          />
        </div>


        <div className="hidden md:block absolute right-[20%]  top-[3%] z-10 animate-zoomIn Slow ">
          <img
            src="/assets/about/about-1-1.png"
            alt=""
            className="w-40 lg:w-48 object-contain"
          />
        </div>

        {/* Texte */}
        <div className="relative z-10 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-8">
            Ready To Get{" "}
            <span className="relative inline-block">
              Started?
              <span className="absolute left-0 bottom-2 w-full h-2 bg-yellow-300 -z-10" />
            </span>
            <br />
            Let’s Talk To Us Today
          </h2>

          <a
            href="#"
            className="
              inline-flex items-center gap-2
              bg-white text-gray-900
              px-7 py-3.5
              rounded-lg
              font-medium text-sm
              hover:bg-gray-100 transition
            "
          >
            Start Learning Now →
          </a>
        </div>

        {/* Colonne vide desktop */}
        <div className="hidden md:block" />
      </div>
    </section>
  );
};

export default CallToActionBanner;
