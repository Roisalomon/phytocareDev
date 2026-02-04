import React from "react";

interface UIButtonProps {
  text: string | React.ReactNode; 
  bgColor?: string;
  textColor?: string;
  width?: string;
  height?: string;
  className?: string;
}

const UIButton: React.FC<UIButtonProps> = ({
  text,
  bgColor = "#F7C842",
  textColor = "#000000",
  width = "160px",
  height = "50px",
  className,
}) => {
  return (
    <button
      className={`
        relative overflow-hidden font-semibold transition-transform duration-500 ease-out
        group rounded-md
        ${className || ""}
      `}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        width,
        height,
      }}
    >
      {/* ✅ Texte principal (visible au repos) */}
      <span
        className={`
          relative z-10 flex items-center justify-center
          group-hover:hidden
        `}
      >
        {text}
      </span>

      {/* ✅ Texte secondaire (hidden au repos, visible au hover avec animation) */}
      <span
        className={`
          absolute left-0 top-0 w-full h-full flex items-center justify-center
          text-[inherit]
          hidden group-hover:flex
          transform translate-y-full 
          group-hover:translate-y-0 group-hover:rotate-0
          transition-all duration-1000 ease-out
        `}
      >
        {text}
      </span>
    </button>
  );
};

export default UIButton;
