import tomatoesImg from '@/assets/products/tomatoes.jpg';
import tilapiaImg from '@/assets/products/tilapia.jpg';
import riceImg from '@/assets/products/rice.jpg';
import pimentImg from '@/assets/products/piment.jpg';
import bissapImg from '@/assets/products/bissap.jpg';
import gariImg from '@/assets/products/gari.jpg';
import palmOilImg from '@/assets/products/palm-oil.jpg';
import onionsImg from '@/assets/products/onions.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  productCount: number;
}

export const categories: Category[] = [
  { id: "fruits-legumes", name: "Fruits & Légumes", icon: "🥬", productCount: 45 },
  { id: "viandes", name: "Viandes & Poissons", icon: "🐟", productCount: 32 },
  { id: "cereales", name: "Céréales & Grains", icon: "🌾", productCount: 28 },
  { id: "epices", name: "Épices & Condiments", icon: "🌶️", productCount: 56 },
  { id: "boissons", name: "Boissons", icon: "🥤", productCount: 24 },
  { id: "produits-locaux", name: "Produits Locaux", icon: "🏺", productCount: 38 },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Tomates fraîches du marché",
    price: 500,
    originalPrice: 650,
    image: tomatoesImg,
    category: "fruits-legumes",
    description: "Tomates locales cultivées au Bénin, parfaites pour vos sauces et salades. Vendues par kilogramme.",
    inStock: true,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "2",
    name: "Poisson Tilapia frais",
    price: 2500,
    image: tilapiaImg,
    category: "viandes",
    description: "Tilapia frais pêché localement. Idéal pour griller ou préparer en sauce.",
    inStock: true,
    rating: 4.9,
    reviews: 89,
  },
  {
    id: "3",
    name: "Riz local parfumé",
    price: 1800,
    originalPrice: 2000,
    image: riceImg,
    category: "cereales",
    description: "Riz cultivé au Bénin, grain long et parfumé. Sac de 5kg.",
    inStock: true,
    rating: 4.7,
    reviews: 256,
  },
  {
    id: "4",
    name: "Piment rouge séché",
    price: 300,
    image: pimentImg,
    category: "epices",
    description: "Piment séché traditionnel, relevé et savoureux pour tous vos plats.",
    inStock: true,
    rating: 4.6,
    reviews: 78,
  },
  {
    id: "5",
    name: "Jus de bissap naturel",
    price: 800,
    image: bissapImg,
    category: "boissons",
    description: "Jus de bissap (hibiscus) préparé naturellement sans conservateurs. Bouteille de 1L.",
    inStock: true,
    rating: 4.9,
    reviews: 312,
  },
  {
    id: "6",
    name: "Gari blanc premium",
    price: 1200,
    image: gariImg,
    category: "produits-locaux",
    description: "Gari de qualité supérieure, finement moulu. Parfait pour accompagner vos repas.",
    inStock: true,
    rating: 4.8,
    reviews: 167,
  },
  {
    id: "7",
    name: "Huile de palme rouge",
    price: 1500,
    image: palmOilImg,
    category: "produits-locaux",
    description: "Huile de palme artisanale, non raffinée. Idéale pour la cuisine traditionnelle.",
    inStock: true,
    rating: 4.7,
    reviews: 98,
  },
  {
    id: "8",
    name: "Oignons frais",
    price: 400,
    image: onionsImg,
    category: "fruits-legumes",
    description: "Oignons locaux de qualité, vendus par kilogramme.",
    inStock: false,
    rating: 4.5,
    reviews: 45,
  },
];

export interface CartItem extends Product {
  quantity: number;
}

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA';
};
