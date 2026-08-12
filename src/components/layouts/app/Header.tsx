import React, { useEffect, useRef, useState } from "react";
import { HeaderTop } from "./sub/navBar/HeaderTop";
import { HeaderBottom } from "./sub/navBar/HeaderBottom";
import { MobileSearchBar } from "./sub/navBar/MobileSearchBar";
import { MobileMenu } from "./sub/navBar/MobileMenu";

export const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const heroHeight = heroSection ? heroSection.offsetHeight : 0;
      setIsSticky(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full">
      {/* Barre supérieure : masquée une fois le header devenu sticky */}
      {!isSticky && <HeaderTop />}

      {/* Placeholder qui évite le "saut" de contenu quand le header passe en fixed */}
      {isSticky && (
        <div style={{ height: headerBottomRef.current?.offsetHeight ?? 0 }} />
      )}

      <div
        ref={headerBottomRef}
        className={`w-full bg-white transition-shadow duration-300 ${
          isSticky ? "fixed top-0 left-0 z-[1000] shadow-md" : "relative"
        }`}
      >
        <HeaderBottom
          onOpenSearch={() => setIsMobileSearchOpen(true)}
          onOpenMenu={() => setIsMobileMenuOpen(true)}
        />
      </div>

      {/* Overlays */}
      <MobileSearchBar
        isOpen={isMobileSearchOpen}
        onClose={() => setIsMobileSearchOpen(false)}
      />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Header;
