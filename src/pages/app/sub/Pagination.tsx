import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-3 mb-[100px] ">
      
      {/* ⬅ Prev */}
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-emerald-700 hover:text-white transition"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Pages */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-12 h-12 rounded-lg border text-sm font-medium transition
            ${
              currentPage === page
                ? "bg-emerald-800 text-white border-emerald-800"
                : "border-gray-200 text-gray-600 hover:bg-emerald-700 hover:text-white"
            }
          `}
        >
          {page}
        </button>
      ))}

      {/* ➡ Next */}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-emerald-700 hover:text-white transition"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;
