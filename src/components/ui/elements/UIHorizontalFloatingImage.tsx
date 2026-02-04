import React from "react";

interface UIHorizontalFloatingImageProps {
  src: string;
  className?: string;
}

const UIHorizontalFloatingImage: React.FC<UIHorizontalFloatingImageProps> = ({
  src,
  className = "",
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover opacity-20 blur-sm scale-110 animate-horizontalFloat"
      />
    </div>
  );
};

export default UIHorizontalFloatingImage;
