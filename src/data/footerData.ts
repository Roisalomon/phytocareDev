import { FooterLink, SocialLink } from "../types/footer";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";


export const quickLinks: FooterLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Produits", href: "/Produits" },
  { label: "Maladies", href: "/Maladies" },
  { label: "À propos", href: "/Propos" },
  { label: "Contact", href: "/Contact" },
];

export const productCategories: FooterLink[] = [
  { label: "Soins Naturels", href: "/produit?cat=soins" },
  { label: "Complements Alimentaires", href: "/produit?cat=complements" },
  { label: "Tisanes & Infusions", href: "/produit?cat=tisanes" },
  { label: "Huiles Essentielles", href: "/produit?cat=huiles" },
];

export const socialLinks: SocialLink[] = [
  { iconClass: "Facebook", href: "#", label: "Facebook" },
  { iconClass: "Twitter", href: "#", label: "Twitter" },
  { iconClass: "Instagram", href: "#", label: "Instagram" },
  { iconClass: "Linkedin", href: "#", label: "LinkedIn" },
];
