import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FilterBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [sorting, setSorting] = useState("Default Sorting");

  const options = [
    "Default Sorting",
    "Low to High",
    "High to Low",
    "New Added", 
    "On Sale",
  ];

  return (
    <div className="w-full flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-[10%] ">
      
      {/* 🔹 Left */}
      <p className="text-sm text-gray-700">
        Showing all 11 results
      </p>

      {/* 🔹 Right */}
      <div className="flex items-center gap-4">
        
        {/* Show per page */}
        <div className="text-sm text-gray-700">
          Show&nbsp;
          <span className="font-medium cursor-pointer">9</span> /{" "}
          <span className="cursor-pointer">12</span> /{" "}
          <span className="cursor-pointer">15</span>
        </div>

        {/* Sorting */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 px-4 py-2 text-sm border border-teal-800 rounded-md text-teal-900 hover:bg-teal-50 transition"
          >
            {sorting}
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              <ul className="py-2">
                {options.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        setSorting(item);
                        setOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                        sorting === item
                          ? "font-semibold text-gray-900"
                          : "text-gray-600"
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
