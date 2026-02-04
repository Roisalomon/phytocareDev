// src/components/layouts/app/Footer.tsx
import React from "react";
import FooterTop from "./sub/footer/FooterTop";
import FooterBottom from "./sub/footer/FooterBottom";
import UIAnimatedBackgroundImage from "../../ui/elements/UIAnimatedBackgroundImage";
import { useInView } from "../../../hooks/useInView";

const FooterComponent: React.FC = () => {
  const { ref, isVisible } = useInView(0.2); // 20% visible → animation
  return ( 
    <footer
     ref={ref}
      className={`
        bg-[#ddf5ec]/50 pt-[150px]
        relative overflow-hidden
        transition-all duration-[900ms] ease-out

        ${isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"}
      `}>

      <UIAnimatedBackgroundImage
        src="/assets/mes/footer-3-1.png"
        left="80%"          // ✅ desktop
        leftMobile="50%"    // ✅ mobile (plus centré)

        top="10%"           // ✅ desktop
        topMobile="50%"     // ✅ mobile (remonte l’image)

        width="200px"
        height="200px"
        className="opacity-40"
      />

      {/* ✅ Partie haute : Branding + Links + Company + Contact */}
      <FooterTop className="mb-[100px]" />

      {/* ✅ Partie basse : Mentions légales */}
      <FooterBottom />
    </footer>
  );
};

export default FooterComponent;
