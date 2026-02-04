import React, { useState } from "react";
import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";
import ApplyButton from "./ApplyButton";
import HamburgerButton from "./HamburgerButton";
import MobileSearch from "./MobileSearch";
import Sidebar from "./Sidebar";
import MobileSearchBar from "./MobileSearchBar";

const HeaderBottom: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div
      className="
        bg-white 
        py-3 md:py-[10px] 
        pl-[8%] md:pl-[8%] md:pr-[6%]
        flex items-center justify-between gap-3
      "
    >
      {/* Logo */}
      <div className="mr-0 sm:mr-[40px] flex-shrink-0">
        <img
          src="/assets/mes/logo-black.png"
          alt="Logo"
          className="w-[100px] sm:w-[150px] h-auto"
        />
      </div>

      {/* Menu desktop */}
      <div className="hidden xl:flex flex-1 justify-center">
        <NavMenu />
      </div>

      {/* Zone droite */}
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="hidden lg:block">
          <SearchBar />
        </div>

        <ApplyButton />

        <MobileSearch onClick={() => setSearchOpen(true)} />
        <HamburgerButton onClick={() => setMenuOpen(true)} />

        {/* Sidebar mobile */}
        <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

        {/* Search mobile */}
        <MobileSearchBar
          isOpen={searchOpen}
          onClose={() => setSearchOpen(false)}
        />
      </div>
    </div>
  );
};

export default HeaderBottom;
