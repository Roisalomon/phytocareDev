import React from "react";
import { LayoutGrid, Search, ChevronDown } from "lucide-react";

const SearchBar: React.FC = () => {
    return (
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
            {/* Category */}
            <button className="flex items-center px-4 py-2.5 text-sm text-gray-700 font-medium border-r border-gray-300 whitespace-nowrap cursor-pointer">
             <LayoutGrid className="text-gray-500 mr-2"/>
                Categories
                <span className="ml-1 text-xs">
                    <ChevronDown className="w-4 h-4"/>
                </span>
            </button>

            {/* Input */}
            <input
                type="text"
                placeholder="Search Course.."
                className="border-0 pl-4 py-2.5 text-sm text-black w-[140px] outline-none placeholder:text-gray-400"
            />

            {/* Search Icon */}
            <button className="pl-0 pr-4 py-2.5 text-gray-500 cursor-pointer hover:text-[#0C1A2A] transition-colors">
                <Search className="w-5 h-5" />
            </button> 
        </div>
    );
}

export default SearchBar;