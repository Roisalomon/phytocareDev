import React from "react";
import { NavMenu } from "./NavMenu";
import { ApplyButton } from "./ApplyButton";
import { HamburgerButton } from "./HamburgerButton";
import MobileSearch from "./MobileSearch";
import { Search, Send, X } from "lucide-react";
import { HeaderSearchBar } from "./HeaderSearchBar";


interface HeaderBottomProps {
  onOpenSearch: () => void;
  onOpenMenu: () => void;
}

export const HeaderBottom: React.FC<HeaderBottomProps> = ({
  onOpenSearch,
  onOpenMenu,
}) => {
  return (
    <div className="bg-white 
        py-3 md:py-[10px] 
        pl-[8%] md:pl-[8%] md:pr-[6%]
        flex items-center justify-between gap-3">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          src="/assets/img/logohorizontale.png"
          alt="Phytocare Logo"
          className="w-[130px] md:w-[140px]"
        />
      </div>

      {/* Navigation Desktop */}
      <NavMenu />

      {/* Action Right Area */}
      <div className="flex items-center gap-3">

        <HeaderSearchBar />

        <ApplyButton />

        <MobileSearch onClick={onOpenSearch} />

        <HamburgerButton onClick={onOpenMenu} />
      </div>
    </div>
  );
};

export default HeaderBottom;
