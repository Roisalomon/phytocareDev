export interface Disease {
  id: string;
  title: string;
  desc: string;
  icon: string; // émoji
  cause: string;
  consequence: string;
  solution: string;
  relatedProductIds: string[];
}