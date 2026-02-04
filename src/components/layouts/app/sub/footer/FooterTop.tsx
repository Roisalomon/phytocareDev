import React from "react";
import FooterBranding from "./sectionFooter/FooterBranding";
import FooterLinks from "./sectionFooter/FooterLinks";
import FooterCompany from "./sectionFooter/FooterCompany";
import FooterContact from "./sectionFooter/FooterContact";
interface FooterTopProps {
  className?: string;
}

const FooterTop: React.FC<FooterTopProps> = ({ className }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-[8%] ${className || ""}`}
    >
      {/* ✅ Branding + description + CTA + social */}
      <FooterBranding />

      {/* ✅ Useful Links */}
      <FooterLinks />

      {/* ✅ Our Company */}
      <FooterCompany />

      {/* ✅ Get Contact */}
      <FooterContact />
    </div>
  );
};

export default FooterTop;
