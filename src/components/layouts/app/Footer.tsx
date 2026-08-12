import React from "react";
import { FooterTop } from "./sub/footer/FooterTop";
import { FooterBottom } from "./sub/footer/FooterBottom";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0C1A2A] text-white pt-12 pb-6 px-[8%] relative">
      <FooterTop />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
