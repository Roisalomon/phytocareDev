export type SearchResultType = "product" | "disease";

export interface SearchResult {
  type: SearchResultType;
  id: string;
  title: string;
  subtitle: string;
  href: string;
  image?: string;
  icon?: string;
}