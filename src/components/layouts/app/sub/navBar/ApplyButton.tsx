import React from "react";

interface ApplyButtonProps {
  className?: string;
}

export const ApplyButton: React.FC<ApplyButtonProps> = ({ className = "" }) => {
  return (
    <a
      href="https://wa.me/2290166414894"
      target="_blank"
      rel="noopener noreferrer"
      className={`hidden md:inline-flex items-center bg-[#F7C842] text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-600 transition text-sm font-semibold ${className}`}
    >
      Commander
      <i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
    </a>
  );
};

export default ApplyButton;
