import React from "react";
import { Search } from "lucide-react";

interface MobileSearchProps {
  onClick?: () => void;
}

const MobileSearch: React.FC<MobileSearchProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p2 block lg:hidden bg-[#03594E] text-white text-2xl p-2 rounded"
    >
      <Search className="w-6 h-6" />
    </button>
  );
};

export default MobileSearch;
