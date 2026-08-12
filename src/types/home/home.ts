export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export interface Category {
  name: string;
  count: string;
  icon: string;
}

export interface Product {
  id: number;
  title: string;
  category: string;
  price: string;
  rating: number;
}

export interface Review {
  name: string;
  comment: string;
  city: string;
}
