import React from "react";
import UIFooterTitle from "../../../../../ui/elements/footerUI/UIFooterTitle";
import UIFooterLink from "../../../../../ui/elements/footerUI/UIFooterLink";

interface FooterCompanyProps {
  className?: string;
}

const FooterCompany: React.FC<FooterCompanyProps> = ({ className }) => {
  return (
    <div className={className || ""}>
      {/* ✅ Titre */}
      <UIFooterTitle className="mb-7" >Our Company</UIFooterTitle>

      {/* ✅ Liens */}
      <div className="flex flex-col gap-y-5">
        <UIFooterLink to="/contact" label="Contact Us" />
        <UIFooterLink to="/become-teacher" label="Become Teacher" />
        <UIFooterLink to="/blog" label="Blog" />
        <UIFooterLink to="/instructor" label="Instructor" />
        <UIFooterLink to="/events" label="Events" />
      </div>
    </div>
  );
};

export default FooterCompany;
