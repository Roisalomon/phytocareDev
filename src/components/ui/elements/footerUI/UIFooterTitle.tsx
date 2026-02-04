import React from "react";

interface UIFooterTitleProps {
  children: React.ReactNode;
  className?: string;
}

const UIFooterTitle: React.FC<UIFooterTitleProps> = ({ children, className }) => {
  return (
    <h3 className={`text-black text-[18px] font-semibold mb-4 pl-4 ${className || ""}`}>
      {children}
    </h3>
  );
};

export default UIFooterTitle;
