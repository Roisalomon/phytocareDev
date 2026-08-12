import React from "react";
import CommitmentCard from "./CommitmentCard";
import { commitments } from "../../../../data/aboutData";

export const AboutCommitments: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-10 md:p-16 shadow-inner border border-gray-100">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-[#034949] font-serif">
          Nos Engagements
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {commitments.map((commitment) => (
          <CommitmentCard key={commitment.title} commitment={commitment} />
        ))}
      </div>
    </div>
  );
};

export default AboutCommitments;