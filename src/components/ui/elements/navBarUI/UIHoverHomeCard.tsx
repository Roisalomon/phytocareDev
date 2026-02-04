import React from "react";
import { Link } from "react-router-dom";

interface UIHoverHomeCardProps {
  title: string;
  image: string;
  to?: string; 
}

const UIHoverHomeCard: React.FC<UIHoverHomeCardProps> = ({ title, image, to }) => {
  const content = (
    <div className="w-full flex flex-col items-center gap-2 hover:bg-gray-100 p-3 rounded-lg transition cursor-pointer ">
      <img
        src={image}
        alt={title}
        className="w-100 h-200 object-cover rounded-md mb-5"
      />
      <h4 className="text-sm font-medium text-[#0F172B] text-center">{title}</h4>
    </div>
  );

  return to ? <Link to={to}>{content}</Link> : content;
};

export default UIHoverHomeCard;
