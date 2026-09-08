import React, { useEffect, useState, useCallback } from "react";

interface Slide {
  badge: string;
  titleStart: string;
  titleHighlight: string;
  titleEnd?: string;
  description: string;
  image: string;
  imageAlt: string;
}

const slides: Slide[] = [
  {
    badge: "Bilan de santé naturel",
    titleStart: "Comprenez",
    titleHighlight: "votre corps",
    titleEnd: "en toute simplicité",
    description:
      "Une analyse complète de votre vitalité pour détecter tôt les déséquilibres et recevoir des recommandations claires et personnalisées.",
    image: "/assets/img/scanner_modern.jpg",
    imageAlt: "Bilan de santé Phytocare",
  },
  {
    badge: "Solutions naturelles",
    titleStart: "Votre santé,",
    titleHighlight: "notre priorité",
    titleEnd: "naturelle",
    description:
      "Découvrez l'excellence de la phytothérapie. Des solutions rigoureusement sélectionnées pour votre bien-être quotidien.",
    image: "/assets/img/groupe_produits.jpg",
    imageAlt: "Produits naturels Phytocare",
  },
  {
    badge: "Accompagnement personnalisé",
    titleStart: "Votre bien-être,",
    titleHighlight: "à chaque étape",
    description:
      "Un suivi attentif et régulier, des conseils d'experts en phytothérapie, et une équipe toujours à votre écoute.",
    image: "/assets/img/prise_sang.jpg",
    imageAlt: "Suivi et accompagnement Phytocare",
  },
];

const AUTOPLAY_DELAY = 6000;

export const Hero: React.FC = () => {
  const [active, setActive] = useState(0);

  const goTo = useCallback((index: number) => {
    setActive(((index % slides.length) + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [active]);

  const slide = slides[active];

  return (
    <section
      id="hero"
      className="relative bg-[#28a745] min-h-[95vh] flex items-center overflow-hidden"
    >
      {/* Forme décorative en fond, esprit affiche (dégradé vert clair en diagonale) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-[#7FE6A0]/15 to-transparent -skew-x-12 transform origin-top" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#7FE6A0]/10 rounded-full blur-3xl" />

      <div className="relative z-10 px-[8%] w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Contenu texte qui change avec la slide active */}
        <div key={active} className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-bold tracking-wide uppercase">
              {slide.badge}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {slide.titleStart}{" "}
              <span className="text-accent">{slide.titleHighlight}</span>
              {slide.titleEnd ? ` ${slide.titleEnd}` : ""}
            </h1>

            <p className="text-gray-100 text-lg md:text-xl max-w-xl leading-relaxed opacity-90">
              {slide.description}
            </p>
          </div>

          <div className="flex flex-row gap-2 md:gap-5 items-center">
           <a 
              href="/produits" 
              className="bg-accent text-primary px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-yellow-500 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              Voir Produits 
            </a>

            <a
              href="https://wa.me/22995719898"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center  border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary hover:-translate-y-1 transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>

          {/* Repères de confiance, constants sur les 3 slides */}
          <div className="flex flex-wrap gap-1 pt-4">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <i className="fa-solid fa-circle-check text-accent" aria-hidden="true"></i>
              <span>Produits certifiés</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <i className="fa-solid fa-leaf text-accent" aria-hidden="true"></i>
              <span>100% Naturel</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <i className="fa-solid fa-hand-holding-heart text-accent" aria-hidden="true"></i>
              <span>Accompagnement suivi</span>
            </div>
          </div>
        </div>

        {/* Image à droite, change avec la slide active */}
        <div key={`img-${active}`} className="relative hidden md:block animate-fade-in mb-2">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-white/5 rounded-full blur-3xl" />

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-transparent rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000" />
            <img
              src={slide.image}
              alt={slide.imageAlt}
              className="relative z-10 rounded-[2rem] shadow-2xl border border-white/10 object-cover w-full h-[500px]"
            />
          </div>
        </div>
      </div>

      {/* Indicateurs de slide */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-10 flex gap-3 ">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Aller à la diapositive ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === active ? "w-8 bg-accent" : "w-2.5 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;