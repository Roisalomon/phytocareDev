import React from "react";
import { Link } from "react-router-dom";
import { HealthIssue } from "../../../../types/health";

interface HealthCardProps {
  issue: HealthIssue;
}

export const HealthCard: React.FC<HealthCardProps> = ({ issue }) => {
  return (
    <Link
      to={`/maladie?q=${encodeURIComponent(issue.id)}`}
      className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all text-center flex flex-col items-center"
    >
      <div className="w-full h-24 rounded-full bg-slate-50 group-hover:bg-primary group-hover:text-white text-primary flex items-center justify-center text-xl transition-all mb-4">
        <i className={`fa-solid ${issue.icon}`} aria-hidden="true"></i>
      </div>
      <h3 className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm">
        {issue.name}
      </h3>
    </Link>
  );
};

export default HealthCard;