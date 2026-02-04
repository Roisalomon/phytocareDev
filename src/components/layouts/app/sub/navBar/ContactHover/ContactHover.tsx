import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { ContactVariants } from "./ContactVariants";
import UIContactHover from "../../../../../ui/elements/navBarUI/UIContactHover";

interface ContactHoverProps {
  mobile?: boolean;
}

const ContactHover: React.FC<ContactHoverProps> = ({ mobile = false }) => {
  const [open, setOpen] = useState(false);

  /* ✅ ✅ VERSION MOBILE (Sidebar) */
  if (mobile) {
    return (
      <div className="flex flex-col gap-4">
        {ContactVariants.map((section) => (
          <UIContactHover
            key={section.title}
            links={section.links}
          />
        ))}
      </div>
    );
  }

  /* ✅ ✅ VERSION DESKTOP (hover) — inchangée */
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to="/contact"
        className="group flex items-center gap-1 px-2 py-1 rounded-sm transition-all hover:text-[#034949]"
      >
        Contact
        <span className="arrow inline-block text-[12px] transition-transform group-hover:-rotate-180 duration-500">
          <ChevronDown className="w-4 h-4" />
        </span>
      </Link>

      {/* ✅ Dropdown compact */}
      <div
        className={`absolute left-1/2 top-full ml-[90%] -translate-x-1/2 w-[250px] bg-white shadow-xl rounded-xl p-5 z-50 transition-all duration-200
        ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
      >
        {ContactVariants.map((section) => (
          <UIContactHover
            key={section.title}
            links={section.links}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactHover;
