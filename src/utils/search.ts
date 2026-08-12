import { productsData } from "../data/productsData";
import { diseasesData } from "../data/diseasesData";
import { SearchResult } from "../types/home/search";

// Normalise (minuscules + suppression des accents) pour une recherche plus tolérante
const normalize = (value: string): string =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export const searchAll = (query: string, limit = 6): SearchResult[] => {
  const q = normalize(query.trim());
  if (!q) return [];

  const productResults: SearchResult[] = productsData
    .filter(
      (p) => normalize(p.name).includes(q) || normalize(p.shortDesc).includes(q)
    )
    .map((p) => ({
      type: "product",
      id: p.id,
      title: p.name,
      subtitle: p.shortDesc,
      image: p.image,
      href: `/produitPlus/${p.id}`,
    }));

  const diseaseResults: SearchResult[] = diseasesData
    .filter(
      (d) => normalize(d.title).includes(q) || normalize(d.desc).includes(q)
    )
    .map((d) => ({
      type: "disease",
      id: d.id,
      title: d.title,
      subtitle: d.desc,
      icon: d.icon,
      href: `/maladiePlus/${d.id}`,
    }));

  return [...productResults, ...diseaseResults].slice(0, limit);
};