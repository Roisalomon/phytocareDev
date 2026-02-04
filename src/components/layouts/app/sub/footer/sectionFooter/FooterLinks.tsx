import React from "react";
import UIFooterTitle from "../../../../../ui/elements/footerUI/UIFooterTitle";
import UIFooterLink from "../../../../../ui/elements/footerUI/UIFooterLink";

interface FooterLinksProps {
  className?: string;
}

const FooterLinks: React.FC<FooterLinksProps> = ({ className }) => {
  return (
    <div className={className || ""}>
      {/* ✅ Titre */}
      <UIFooterTitle className="mb-7" >Useful Links</UIFooterTitle>

      {/* ✅ Liens */}
      <div className="flex flex-col gap-y-5">
        <UIFooterLink to="/marketplace" label="Marketplace" />
        <UIFooterLink to="/kindergarten" label="Kindergarten" />
        <UIFooterLink to="/university" label="University" />
        <UIFooterLink to="/gym-coaching" label="GYM Coaching" />
        <UIFooterLink to="/cooking" label="Cooking" />
      </div>
    </div>
  );
};

export default FooterLinks;
