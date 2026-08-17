import React from "react";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative bg-[#2F5D3A] min-h-[85vh] flex items-center overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 transform origin-top" />

      <div className="px-[8%] w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-bold tracking-wide uppercase">
              Solutions Naturelles
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
              Votre santé, <br />
              <span className="text-accent">notre priorité</span> naturelle
            </h1>

            <p className="text-gray-100 text-lg md:text-xl max-w-xl leading-relaxed opacity-90">
              Découvrez l'excellence de la phytothérapie. Des solutions
              rigoureusement sélectionnées pour votre bien-être quotidien.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 items-center justify-center ">
            <a
              href="#produits"
              className="bg-accent text-primary px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-yellow-500 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              Voir nos produits
            </a>

            <a
              href="https://wa.me/22995719898"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary hover:-translate-y-1 transition-all duration-300"
            >
              <i className="fa-brands fa-whatsapp text-xl" aria-hidden="true"></i>
              WhatsApp
            </a> 
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <i className="fa-solid fa-circle-check text-accent" aria-hidden="true"></i>
              <span>Produits certifiés</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <i className="fa-solid fa-leaf text-accent" aria-hidden="true"></i>
              <span>100% Naturel</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <i className="fa-solid fa-truck-fast text-accent" aria-hidden="true"></i>
              <span>Livraison rapide</span>
            </div>
          </div>
        </div>

        <div className="relative hidden md:block animate-fade-in-right">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl" />

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-transparent rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000" />
            <img
              src="assets/img/heronew.jpg"
              alt="Produits Phytocare"
              className="relative z-10 rounded-[2rem] shadow-2xl border border-white/10 object-cover w-full h-[500px]"
            />
          </div>
        </div>
      </div >
    </section >
  );
};

export default Hero;