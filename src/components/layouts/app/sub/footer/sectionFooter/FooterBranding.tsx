import React from "react";
import ContactBoutton from "./ContactBoutton";

interface FooterBrandingProps {
  className?: string;
}

const FooterBranding: React.FC<FooterBrandingProps> = ({ className }) => {
  return (
    <div className={`flex flex-col items-start ${className || ""}`}>
      {/* ✅ Logo */}
      <img
        src="/assets/mes/logo-black.png"
        alt="Educeet Logo"
        className="w-[160px] mb-5"
      />

      {/* ✅ Description */}
      <p className="text-gray-600 text-[15px] leading-relaxed mb-5 max-w-[300px]">
        Access expert-led courses designed to help you succeed in your career,
        all from the comfort of your home.
      </p>

      {/* ✅ CTA Button */}
      <ContactBoutton />
    </div>
  );
};

export default FooterBranding;
