import { Feature, Category, Product, Review } from "../types/home/home";

export const featuresData: Feature[] = [
  {
    icon: "fa-leaf",
    title: "100% Produits Naturels",
    desc: "Ingrédients sélectionnés et testés sans produits chimiques.",
  },
  {
    icon: "fa-user-md",
    title: "Conseils d'Experts",
    desc: "Une équipe de spécialistes à votre écoute pour vous guider.",
  },
  {
    icon: "fa-truck-fast",
    title: "Livraison Rapide",
    desc: "Recevez vos commandes à domicile en toute sécurité.",
  },
  {
    icon: "fa-shield-halved",
    title: "Paiement Sécurisé",
    desc: "Transactions protégées via nos moyens de paiement locaux.",
  },
];

export const categories: Category[] = [
  { name: "Tisanes & Infusions", count: "12 Produits", icon: "fa-mug-hot" },
  { name: "Complements Alimentaires", count: "24 Produits", icon: "fa-capsules" },
  { name: "Huiles Essentielles", count: "18 Produits", icon: "fa-bottle-droplet" },
  { name: "Soins Naturels", count: "15 Produits", icon: "fa-spa" },
];

export const products: Product[] = [
  {
    id: 1,
    title: "Sirop Phytocare Vitalité",
    category: "Complements",
    price: "8.500 FCFA",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Infusion Bio Digestion",
    category: "Tisanes",
    price: "4.000 FCFA",
    rating: 4.9,
  },
  {
    id: 3,
    title: "Huile de Neem Pure",
    category: "Huiles Essentielles",
    price: "6.500 FCFA",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Baume Apaisant Phyto",
    category: "Soins Naturels",
    price: "5.000 FCFA",
    rating: 5.0,
  },
];

export const reviews: Review[] = [
  {
    name: "Amina K.",
    comment:
      "Les tisanes Phytocare m'ont énormément aidée pour mes problèmes de digestion. Résultats en quelques jours seulement !",
    city: "Cotonou",
  },
  {
    name: "Jean-Marc T.",
    comment:
      "Service client impeccable et livraison très rapide. Les produits sont d'une fraîcheur remarquable.",
    city: "Porto-Novo",
  },
];
