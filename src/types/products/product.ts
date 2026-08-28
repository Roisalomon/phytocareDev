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

export type ProductBadge = "PROMO" | "NON DISPO" | "NOUVEAU"; // Vous pouvez ajouter d'autres badges si besoin

export interface Product {
  id: string;
  name: string;
  shortDesc: string;
  category: string;
  benefits: string[];
  composition?: string;
  posologie?: string;
  warning?: string;
  priceNormal: number;
  pricePromo: number;
  image: string;
  featured: boolean;
  hasFullNotice: boolean;
  badge?: ProductBadge; // 👈 Champ optionnel pour le statut
}