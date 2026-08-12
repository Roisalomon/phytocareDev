import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Send } from "lucide-react";
import { useSearchBar } from "../../../../../hooks/useSearchBar";
import { SearchSuggestions } from "./SearchSuggestions";

export const HeaderSearchBar: React.FC = () => {
  const { query, setQuery, results, isOpen, setIsOpen, reset } = useSearchBar();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
 
  // Ferme les suggestions au clic en dehors du composant
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results.length > 0) {
      navigate(results[0].href);
      reset();
    }
  };

  return (
    <div ref={containerRef} className="relative hidden lg:block">
      <form
        onSubmit={handleSubmit}
        className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm"
      >
        <label htmlFor="header-search" className="sr-only">
          Rechercher un produit ou une maladie
        </label>
        <input
          id="header-search"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Rechercher..."
          className="pl-4 py-2.5 text-sm text-black outline-none w-[150px]"
        />
        <button
          type="submit"
          aria-label="Rechercher"
          className="px-3 py-2.5 bg-[#0C1A2A] text-white hover:bg-[#034949] transition"
        >
          <Send className="w-4 h-4" aria-hidden="true" />
        </button>
      </form>

      {isOpen && (
        <SearchSuggestions results={results} query={query} onSelect={reset} />
      )}
    </div>
  );
};

export default HeaderSearchBar;