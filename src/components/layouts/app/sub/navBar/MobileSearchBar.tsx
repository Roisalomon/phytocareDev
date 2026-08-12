import React from "react";
import { useNavigate } from "react-router-dom";
import { Send, X } from "lucide-react";
import { useSearchBar } from "../../../../../hooks/useSearchBar";
import { SearchSuggestions } from "./SearchSuggestions";

interface MobileSearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileSearchBar: React.FC<MobileSearchBarProps> = ({
  isOpen,
  onClose,
}) => {
  const { query, setQuery, results, reset } = useSearchBar();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results.length > 0) {
      navigate(results[0].href);
      reset();
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white w-[90%] max-w-md p-6 rounded-xl shadow-xl relative">
        <button
          onClick={handleClose}
          aria-label="Fermer la recherche"
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl transition-colors"
        >
          <X className="w-6 h-6" aria-hidden="true" />
        </button>
        <h3 className="text-lg font-semibold mb-4 text-center">Rechercher</h3>

        <form onSubmit={handleSubmit} className="relative">
          <div className="flex border rounded-lg overflow-hidden">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              placeholder="Rechercher un produit ou une maladie..."
              className="flex-1 px-4 py-3 outline-none text-sm"
            />
            <button
              type="submit"
              aria-label="Lancer la recherche"
              className="px-4 bg-[#0C1A2A] text-white hover:bg-[#034949] transition"
            >
              <Send className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <SearchSuggestions results={results} query={query} onSelect={handleClose} />
        </form>
      </div>
    </div>
  );
};

export default MobileSearchBar;