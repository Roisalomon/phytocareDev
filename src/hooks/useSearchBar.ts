import { useMemo, useState } from "react";
import { searchAll } from "../utils/search";
import { SearchResult } from "../types/home/search";

export function useSearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const results: SearchResult[] = useMemo(() => searchAll(query), [query]);

  const reset = () => {
    setQuery("");
    setIsOpen(false);
  };

  return { query, setQuery, results, isOpen, setIsOpen, reset };
}