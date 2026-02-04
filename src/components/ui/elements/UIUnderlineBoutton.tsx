import React from "react";

interface UIUnderlineBouttonProps {
  children: string;
  className?: string;
}

const UIUnderlineBoutton: React.FC<UIUnderlineBouttonProps> = ({
  children,
  className,
}) => {
  return (
    <button
      className={`
        relative cursor-pointer 
        hover:after:w-full 
        after:absolute after:left-0 after:bottom-0 
        after:w-0 after:h-px after:bg-white 
        after:transition-all after:duration-[450ms]
        ${className || ""}
      `}
    >
      {children}
    </button>
  );
};

export default UIUnderlineBoutton;
