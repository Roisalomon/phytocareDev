import React, { useState } from "react";
import AboutHero  from "./sub/propos/AboutHero";
import AboutStory  from "./sub/propos/AboutStory";
import AboutCommitments  from "./sub/propos/AboutCommitments";

const proposPage: React.FC = () => {
  
  return (
    <main className="w-full pt-2 pb-10">

       <AboutHero />
        <AboutStory />
        <AboutCommitments />

    </main>
  );
};

export default proposPage;
