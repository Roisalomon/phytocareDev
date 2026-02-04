import React from "react";
import { AlignRight } from "lucide-react";

interface HamburgerButtonProps {
  onClick?: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="block xl:hidden bg-[#03594E] text-white text-2xl p-2 rounded"
    >
      <span className="sr-only">Open menu</span>
      <AlignRight className="w-6 h-6" />
    </button>
  );
};

export default HamburgerButton;
