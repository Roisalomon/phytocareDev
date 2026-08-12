import React from "react";

export const ServiceClient: React.FC = () => {
  return (
    <div>
      <h4 className="text-white text-base font-semibold mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-8 after:h-0.5 after:bg-[#F7C842]">
        Service Client
      </h4>
      <p className="text-sm text-gray-300 mb-3">
        Notre équipe d'experts est disponible pour vous conseiller.
      </p>
      <div className="bg-white/5 p-4 rounded-xl space-y-2 text-xs text-gray-300">
        <p>
          <span className="text-white font-medium">Lundi - Vendredi:</span>{" "}
          08h00 - 19h00
        </p>
        <p>
          <span className="text-white font-medium">Samedi:</span> 09h00 - 17h00
        </p>
        <p>
          <span className="text-white font-medium">Dimanche:</span> Fermé
        </p>
      </div>
    </div>
  );
};

export default ServiceClient;
