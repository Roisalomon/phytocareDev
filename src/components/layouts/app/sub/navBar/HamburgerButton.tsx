import React from "react";
import { AlignRight } from "lucide-react";


interface HamburgerButtonProps {
  onClick: () => void;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Ouvrir le menu"
      className="xl:hidden bg-[#F7C844] text-white p-2 mr-5 rounded"
    >
      <AlignRight className="w-6 h-6" />
    </button>
  );
};

export default HamburgerButton;
