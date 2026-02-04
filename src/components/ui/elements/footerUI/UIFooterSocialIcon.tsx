import React from "react";
import { Link } from "react-router-dom";

interface UIFooterSocialIconProps {
  to: string;
  icon: React.ReactNode;
  label?: string;
  className?: string;
}

const UIFooterSocialIcon: React.FC<UIFooterSocialIconProps> = ({
  to,
  icon,
  label,
  className,
}) => {
  return (
    <Link
      to={to}
      aria-label={label}
      className={`ml-3 w-4 h-4 sm:w-5 sm:h-5 cursor-pointer transition-colors hover:text-[#F7C842] ${className || ""}`}
    >
      {icon}
    </Link>
  );
};

export default UIFooterSocialIcon;
