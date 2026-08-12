import React from "react";
import { Commitment } from "../../../../types/about";

interface CommitmentCardProps {
  commitment: Commitment;
}

export const CommitmentCard: React.FC<CommitmentCardProps> = ({ commitment }) => {
  return (
    <div className="text-center p-6 hover:bg-gray-50 rounded-xl transition">
      <div className="w-16 h-16 bg-green-100 text-[#034949] flex items-center justify-center rounded-full mx-auto mb-6">
        <i className={`fas ${commitment.icon} text-2xl`} aria-hidden="true"></i>
      </div>
      <h3 className="font-bold text-xl mb-3 text-[#034949]">{commitment.title}</h3>
      <p className="text-gray-500 text-sm italic">{commitment.desc}</p>
    </div>
  );
};

export default CommitmentCard;