import React, { useEffect, useState } from "react";

interface LoadingProps {
  fullScreen?: boolean;
  /** Durée minimale d'affichage en ms (2000 = 2s, comme demandé). */
  duration?: number;
}

/**
 * Loading unique du site : utilisé à la fois comme écran d'ouverture
 * et comme fallback de <Suspense> entre les pages.
 * Toujours affiché au moins `duration` ms (2s par défaut), avec le logo
 * et un soulignement qui se remplit progressivement.
 */
const Loading: React.FC<LoadingProps> = ({
  fullScreen = true,
  duration = 2000,
}) => {
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setFilled(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const content = (
    <div className="flex flex-col items-center gap-3">
      <img
        src="/assets/img/logo1.png"
        alt="Phytocare"
        className="w-32 md:w-44 object-contain"
      />
      <div className="w-32 md:w-44 h-[3px] bg-white/15 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#7FE6A0] rounded-full"
          style={{
            transform: filled ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transitionProperty: "transform",
            transitionDuration: `${duration}ms`,
            transitionTimingFunction: "linear",
          }}
        />
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        {content}
      </div>
    );
  }

  return <div className="py-10 flex items-center justify-center">{content}</div>;
};

export default Loading;