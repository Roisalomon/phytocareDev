export type ProductCategoryId =
  | "vision"
  | "immunite"
  | "articulations"
  | "tension-diabete"
  | "digestion"
  | "minceur"
  | "foie"
  | "prostate"
  | "fertilite"
  | "beaute-peau"
  | "circulation"
  | "bien-etre";

export type FilterCategoryId = "all" | ProductCategoryId;

export interface CategoryFilter {
  id: FilterCategoryId;
  label: string;
}

export interface Product {
  id: string;
  name: string;
  shortDesc: string;
  category: ProductCategoryId;
  benefits: string[];
  composition?: string;
  posologie?: string;
  warning?: string;
  priceNormal: number;
  pricePromo: number;
  image: string;
  featured: boolean;
  /** true si la fiche complète (composition, bienfaits détaillés) était disponible dans le PDF fourni */
  hasFullNotice: boolean;
}