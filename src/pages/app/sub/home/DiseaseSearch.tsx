import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchBar } from "../../../../hooks/useSearchBar";
import { SearchSuggestions } from "../../../../components/layouts/app/sub/navBar/SearchSuggestions";

export const DiseaseSearch: React.FC = () => {
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();

    if (results.length > 0) {
      navigate(results[0].href);
      reset();
      return;
    }

    navigate(trimmed ? `/maladie?q=${encodeURIComponent(trimmed)}` : "/maladie");
    reset();
  };

  return (
    <section className="py-16 px-[8%] bg-[#034949] text-white my-12 rounded-3xl max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Trouvez un traitement selon vos symptômes
        </h2>
        <p className="text-gray-200 text-sm">
          Sélectionnez ou recherchez la maladie/affection pour accéder
          directement à nos recommandations végétales.
        </p>

        <form
          onSubmit={handleSearch}
          className="pt-4 max-w-md mx-auto"
        >
          <div ref={containerRef} className="relative flex flex-col sm:flex-row gap-2">
            <label htmlFor="disease-search" className="sr-only">
              Rechercher une maladie ou un symptôme
            </label>
            <input
              id="disease-search"
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsOpen(true);
              }}
              onFocus={() => setIsOpen(true)}
              placeholder="Ex: Insomnie, Digestion, Tension..."
              className="flex-1 px-4 py-3 rounded-xl text-black text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-[#F7C842] hover:bg-yellow-500 text-[#0C1A2A] font-bold px-6 py-3 rounded-xl text-sm transition-all text-center flex-shrink-0"
            >
              Rechercher
            </button>

            {isOpen && (
              <SearchSuggestions results={results} query={query} onSelect={reset} />
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default DiseaseSearch;