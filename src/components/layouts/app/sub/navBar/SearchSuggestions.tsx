import React from "react";
import { Link } from "react-router-dom";
import { SearchResult } from "../../../../../types/home/search";

interface SearchSuggestionsProps {
  results: SearchResult[];
  query: string;
  onSelect: () => void;
} 

export const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({
  results,
  query,
  onSelect,
}) => {
  if (!query.trim()) return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-50 max-h-80 overflow-y-auto">
      {results.length === 0 ? (
        <p className="px-4 py-3 text-sm text-gray-400">
          Aucun résultat pour « {query} »
        </p>
      ) : (
        <ul>
          {results.map((result) => (
            <li key={`${result.type}-${result.id}`}>
              <Link
                to={result.href}
                onClick={onSelect}
                className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors"
              >
                {result.type === "product" ? (
                  <img
                    src={result.image}
                    alt=""
                    className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://via.placeholder.com/40?text=P";
                    }}
                  />
                ) : (
                  <span
                    className="w-10 h-10 rounded-lg bg-[#f0f4f1] flex items-center justify-center text-lg flex-shrink-0"
                    aria-hidden="true"
                  >
                    {result.icon}
                  </span>
                )}
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">
                    {result.title}
                  </p>
                  <p className="text-xs text-gray-400">
                    {result.type === "product" ? "Produit" : "Maladie"}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchSuggestions;