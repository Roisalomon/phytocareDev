import React from "react";

export const AboutStory: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 py-20 px-[8%]">
      <div className="animate-fade-in-up">
        <span className="text-accent font-bold tracking-widest uppercase text-sm italic">
          Bienvenue chez Phytocare
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#034949] mt-3 mb-6 font-serif">
          L'alliance de la nature et de la science
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Depuis notre création à Cotonou, <strong>Phytocare</strong> s'est
          donné pour mission de redonner ses lettres de noblesse à la
          médecine naturelle. Nous croyons fermement que la flore africaine
          recèle de trésors capables de soigner les maux du quotidien de
          manière durable et sans effets secondaires majeurs.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Nos experts travaillent sans relâche pour sélectionner les
          meilleures plantes, garantissant ainsi des produits d'une pureté
          exceptionnelle pour votre santé et celle de vos proches.
        </p>
      </div>

      <div className="relative group">
        <div className="absolute -inset-4 bg-accent/20 rounded-2xl rotate-3 group-hover:rotate-0 transition duration-500" />
        <img
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop"
          alt="Laboratoire Naturel"
          loading="lazy"
          className="relative rounded-2xl shadow-2xl object-cover h-[400px] w-full"
        />
      </div>
    </div>
  );
};

export default AboutStory;