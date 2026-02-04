import React from "react";

interface UIStatistiqueDivProps {
  icon?: React.ReactNode;
  title?: string;
  value?: string;
  iconBg?: string; // nouvelle prop pour le fond de l’icône
  Color2?: string;
  Color1?: string;
  className?: string;
}

const UIStatistiqueDiv: React.FC<UIStatistiqueDivProps> = ({
  icon,
  title,
  value,
  iconBg = "bg-green-100", // valeur par défaut
  Color2 ,
  Color1,
  className,
}) => {
  return (
    <div
      className={`
        flex items-center gap-3 
        bg-white rounded-xl px-4 py-3 
        shadow-md 
        animate-horizontalBounce relative z-[20]
        ${className || ""}
      `}
    >
      <div className={`w-10 h-10 rounded-full flex items-center justify-center  ${iconBg}`}>
        {icon}
      </div>
      <div>
        {title && <p className="text-gray-500 text-xs">{title}</p>}
        {value && <p className={`font-bold ${Color1}`}>{value} <span className={`${Color2}`}>+</span></p>}
      </div>
    </div>
  );
};

export default UIStatistiqueDiv;
