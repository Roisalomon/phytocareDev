import React from "react";
import { Link } from "react-router-dom";

interface UIFooterLinkProps {
  to: string;
  label: string;
  className?: string;
}

const UIFooterLink: React.FC<UIFooterLinkProps> = ({ to, label, className }) => {

      return (
          <Link
              to={to}
              className="group flex items-center text-[14px] text-gray-700 hover:text-[#034949] transition-all duration-300"
          >
              {/* Barre gauche */}
              <span
                  className="
                      block w-[20px] h-[1px] bg-[#034949] rounded-full
                      opacity-0 scale-x-0 origin-left
                      group-hover:opacity-100 group-hover:scale-x-100
                      transition-all duration-500 
                  "
              ></span>
  
              {/* Texte */}
              <span className="transition-all duration-300 group-hover:translate-x-2">
                  {label}
              </span>
          </Link>
      );
  
};

export default UIFooterLink;
