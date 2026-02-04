import React from "react";

interface UIAnimatedBackgroundImageProps {
  src: string;
  alt?: string;

  left?: string;
  right?: string;
  top?: string;
  bottom?: string;

  leftMobile?: string;
  rightMobile?: string;
  topMobile?: string;
  bottomMobile?: string;

  width?: string;
  height?: string;

  className?: string;
}

const UIAnimatedBackgroundImage: React.FC<UIAnimatedBackgroundImageProps> = ({
  src,
  alt,

  left = "0",
  right = "auto",
  top = "auto",
  bottom = "auto",

  leftMobile,
  rightMobile,
  topMobile,
  bottomMobile,

  width,
  height,

  className,
}) => {
  // ✅ Détection mobile simple (pas besoin de hook)
  const isMobile = window.innerWidth < 768;

  return (
    <div
      className={`
        absolute pointer-events-none select-none
        animate-floating
        ${className || ""}
      `}
      style={{
        left: isMobile ? leftMobile ?? left : left,
        right: isMobile ? rightMobile ?? right : right,
        top: isMobile ? topMobile ?? top : top,
        bottom: isMobile ? bottomMobile ?? bottom : bottom,
        width,
        height,
      }}
    >
      <img
        src={src}
        alt={alt || "background"}
        className="h-full w-auto "
      />
    </div>
  );
};

export default UIAnimatedBackgroundImage;
