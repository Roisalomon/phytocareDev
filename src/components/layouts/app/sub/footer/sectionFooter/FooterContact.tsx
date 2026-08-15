import React from "react";
import { socialLinks } from "../../../../../../data/footerData";

export const FooterContact: React.FC = () => {
  return (
    <div className="space-y-4">
      <img
        src="/assets/img/logohorizontale.png"
        alt="Phytocare Logo"
        className="w-[140px] "
      />
      <p className="text-gray-300 text-sm leading-relaxed">
        Votre partenaire de confiance pour des solutions phytothérapeutiques
        et des produits de santé 100% naturels.
      </p>

      <ul className="space-y-2 text-sm text-gray-300">
        <li className="flex items-center gap-3">
          <i className="fa-solid fa-location-dot text-[#F7C842]" aria-hidden="true"></i>
          <span>Cotonou, Bénin</span>
        </li>
        <li className="flex items-center gap-3">
          <i className="fa-solid fa-phone text-[#F7C842]" aria-hidden="true"></i>
          <a
            href="https://wa.me/2290166414894"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            +229 97 00 00 00
          </a>
        </li>
        <li className="flex items-center gap-3">
          <i className="fa-solid fa-envelope text-[#F7C842]" aria-hidden="true"></i>
          <a href="mailto:contact@phytocare.com" className="hover:text-white transition">
            contact@phytocare.com
          </a>
        </li>
      </ul>

      {/* Réseaux Sociaux */}
      <div className="flex items-center gap-3 pt-2">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F7C842] hover:text-[#0C1A2A] text-white flex items-center justify-center transition-all duration-300"
          >
            <i className={social.iconClass} aria-hidden="true"></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterContact;
