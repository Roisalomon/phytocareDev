import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DropdownKey } from "../../../../../types/navigation";
// import {
//   productCategories,
//   diseaseCategories,
// } from "../../../../../types/navigationCategories";
// import { MegaMenu } from "./MegaMenu";

// import { ChevronDown } from "lucide-react";

export const NavMenu: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null);

  return (
    <nav className="hidden xl:flex gap-3 font-serif text-[14px] text-black font-medium">
      <Link
        to="/"
        className="flex items-center gap-1 px-3 py-1 rounded-sm transition-all hover:text-[#034949] hover:text-[1.1rem]"
      >
        Accueil
      </Link>

      {/* PRODUITS */}
      <div
        className="relative group"
        onMouseEnter={() => setActiveDropdown("products")}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <Link
          to="/Produits"
          className="group flex items-center gap-1 px-2 py-1 rounded-sm transition-all hover:text-[#034949] hover:text-[1.1rem]"
        >
          Produits
          {/* <span className="inline-block text-[12px] mt-1 transition-transform duration-500 group-hover:-rotate-180">
           <ChevronDown className="w-4 h-4" />
          </span> */}
        </Link>
        {/* <MegaMenu categories={productCategories} isOpen={activeDropdown === "products"} /> */}
      </div>

      {/* MALADIES */}
      <div
        className="relative group"
        onMouseEnter={() => setActiveDropdown("diseases")}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <Link
          to="/Maladies"
          className="group flex items-center gap-1 px-2 py-1 rounded-sm transition-all hover:text-[#034949] hover:text-[1.1rem]"
        >
          Maladies
          {/* <span className="inline-block text-[12px] mt-1 transition-transform duration-500 group-hover:-rotate-180">
            <ChevronDown className="w-4 h-4" />
          </span> */}
        </Link>
        {/* <MegaMenu categories={diseaseCategories} isOpen={activeDropdown === "diseases"} /> */}
      </div>

      <Link
        to="/Propos"
        className="flex items-center gap-1 px-2 py-1 rounded-sm transition-all hover:text-[#034949] hover:text-[1.1rem]"
      >
        A propos
      </Link>

      <Link
        to="/Contact"
        className="flex items-center gap-1 px-2 py-1 rounded-sm transition-all hover:text-[#034949] hover:text-[1.1rem]"
      >
        Contact
      </Link>
    </nav>
  );
};

export default NavMenu;
