export interface ProductLink {
  label: string;
  href: string;
}

export interface ProductCategory {
  title: string;
  items: ProductLink[];
}

export type DropdownKey = "products" | "diseases";
