import React from "react";
import { DiseaseCard } from "./DiseaseCard";
import { diseasesData } from "../../../../data/diseasesData";

export const DiseasesGrid: React.FC = () => {
  return (
    <div id="health-grid" className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {diseasesData.map((disease, index) => (
        <DiseaseCard key={disease.id} disease={disease} index={index} />
      ))}
    </div>
  );
};

export default DiseasesGrid;