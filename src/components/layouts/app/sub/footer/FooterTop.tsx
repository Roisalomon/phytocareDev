import React from "react";
import { NewsletterForm } from "./sectionFooter/NewsletterForm";
import { FooterContact } from "./sectionFooter/FooterContact";
import { FooterLinksGroup } from "./sectionFooter/FooterLinksGroup";
import { ServiceClient } from "./sectionFooter/ServiceClient";
import { quickLinks, productCategories } from "../../../../../data/footerData";

export const FooterTop: React.FC = () => {
  return (
    <>
      <NewsletterForm />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
        <FooterContact />
        <FooterLinksGroup title="Navigation" links={quickLinks} />
        <FooterLinksGroup title="Nos Produits" links={productCategories} />
        <ServiceClient />
      </div>
    </>
  );
};

export default FooterTop;
