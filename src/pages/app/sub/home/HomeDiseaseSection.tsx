import React from "react";
import { DiseaseCard } from "../maladies/DiseaseCard";
import { diseasesData } from "../../../../data/diseasesData";

// import { HealthCard } from "../maladies/HealthCard";
// import { healthIssues } from "../../../../data/healthData";

export const HomeDiseaseSection: React.FC = () => {
  return (
    <section className="py-24 w-full bg-gradient-to-b from-[#FAFBF8] to-white">
      <div className="px-[8%]">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2
            className="text-4xl md:text-5xl font-bold  text-[#2F5D3A] animate-fade-in"
          >
            Problèmes de santé <br />
            <span className=" text-[#2F5D3A]/80 font-medium text-3xl md:text-4xl">
              que nous pouvons vous aider à traiter
            </span>
          </h2>
          <p
            className="text-gray-600 text-lg animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            Découvrez nos solutions naturelles pour traiter les problèmes de
            santé courants avec des produits bio et efficaces.
          </p>
        </div>


        {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {healthIssues.map((issue) => (
            <HealthCard key={issue.id} issue={issue} />
          ))}
        </div> */}


        <div id="health-grid" className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {diseasesData.map((disease, index) => (
            <DiseaseCard key={disease.id} disease={disease} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeDiseaseSection;