import React from "react";
import { ProductCategory } from "../../../../../types/navigation";

interface MegaMenuProps {
  categories: ProductCategory[];
  isOpen: boolean;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ categories, isOpen }) => {
  return (
    <div
      className={`fixed top-[120px] left-1/2 -translate-x-1/2 w-[1000px] bg-white shadow-xl rounded-xl p-8 z-[1000] transition-all duration-200 ${
        isOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="grid grid-cols-4 gap-8 text-sm">
        {categories.map((cat) => (
          <div key={cat.title || cat.items[0]?.label}>
            {cat.title && <h4 className="font-semibold mb-3">{cat.title}</h4>}
            <ul className="space-y-2">
              {cat.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#034949] hover:text-[1.1rem] transition-all"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
