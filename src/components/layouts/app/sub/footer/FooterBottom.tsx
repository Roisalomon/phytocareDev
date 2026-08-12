import React from "react";

export const FooterBottom: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
      <p>© {currentYear} Phytocare. Tous droits réservés.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-white transition">
          Politique de confidentialité
        </a>
        <a href="#" className="hover:text-white transition">
          Conditions d'utilisation
        </a>
      </div>
    </div>
  );
};

export default FooterBottom;
