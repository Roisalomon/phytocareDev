// src/components/layouts/app/Header.tsx
import React, { useEffect, useState } from "react";
import HeaderTop from "./sub/navBar/HeaderTop";
import HeaderBottom from "./sub/navBar/HeaderBottom";

const HeaderComponent: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");

    if (!hero) return;

    const heroHeight = hero.offsetHeight;

    const onScroll = () => {
      if (window.scrollY > heroHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // exécuter une fois au chargement

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Header normal */}
      {!isSticky && (
        <header className="relative w-full z-40 shadow-md">
          <HeaderTop />
          <HeaderBottom />
        </header>
      )}

      {/* Header sticky */}
      {isSticky && (
        <header
          className="
            fixed top-0 left-0 w-full z-50
            bg-white shadow-md
            animate-slideDown
          "
        >
          <HeaderBottom />
        </header>
      )}
    </>
  );
};

export default HeaderComponent;
