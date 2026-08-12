import React from "react";
import  MaladieHero  from "./sub/maladies/MaladieHero";
import  DiseasesGrid  from "./sub/maladies/DiseasesGrid";
const maladiesPage: React.FC = () => {
  
  return (
    <main className="w-full pt-2 pb-10">
        <MaladieHero />
        
        <div className="px-[8%] pt-16">
          <DiseasesGrid />
        </div>
    </main>
  );
};

export default maladiesPage;
