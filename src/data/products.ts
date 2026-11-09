export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  condition: string;
  location: string;
  timeAgo: string;
  category: 'Apparel' | 'Decor' | 'Electronics' | 'Furniture' | 'Collectibles';
  image: string;
  gallery: string[];
  description: string;
  seller: {
    name: string;
    avatar: string;
    rating: number;
    salesCount: number;
    verified: boolean;
  };
  dealRating: 'Super Deal' | 'Fair Market' | 'Rare Collectible';
  hasDropAlert: boolean;
  geometryType: 'jacket' | 'mug' | 'glass' | 'chair' | 'record';
}

export const PRODUCTS: Product[] = [
  {
    id: 'leather-jacket-01',
    title: 'Vintage Hand-Treated Leather Jacket',
    price: 25,
    originalPrice: 120,
    condition: 'Used - Like New',
    location: 'Brooklyn, NY · 2.4 miles',
    timeAgo: '2h ago',
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=80',
    ],
    description: 'Classic vintage heavyweight moto leather jacket with aged brass hardware. Pristine interior satin lining with zero tear or cracking. Perfectly broken in, tailored relaxed silhouette.',
    seller: {
      name: 'Johnathan Vance',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 4.9,
      salesCount: 42,
      verified: true
    },
    dealRating: 'Super Deal',
    hasDropAlert: true,
    geometryType: 'jacket'
  },
  {
    id: 'ceramic-mug-02',
    title: 'Minimalist Wabi-Sabi Ceramic Mug',
    price: 15,
    originalPrice: 38,
    condition: 'Brand New',
    location: 'Williamsburg, NY · 0.8 miles',
    timeAgo: '4h ago',
    category: 'Decor',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Hand-thrown stoneware mug coated with textured iron-flecked satin matte glaze. Ergonomic weighted handle designed for comfortable heat retention. Food & dishwasher safe.',
    seller: {
      name: 'Maya Lin Studios',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
      rating: 5.0,
      salesCount: 128,
      verified: true
    },
    dealRating: 'Fair Market',
    hasDropAlert: false,
    geometryType: 'mug'
  },
  {
    id: 'vintage-glass-03',
    title: 'Retro 35mm Rangefinder Optical Camera',
    price: 65,
    originalPrice: 180,
    condition: 'Good - Functional',
    location: 'Manhattan, NY · 3.1 miles',
    timeAgo: '1d ago',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'All-metal mechanical film camera with coated 50mm f/1.8 glass lens. Tested shutter curtain, crisp rangefinder patch alignment. Battery-free mechanical operation.',
    seller: {
      name: 'Felix Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 4.8,
      salesCount: 19,
      verified: true
    },
    dealRating: 'Super Deal',
    hasDropAlert: true,
    geometryType: 'glass'
  },
  {
    id: 'danish-chair-04',
    title: 'Mid-Century Danish Teak Dining Chair',
    price: 85,
    originalPrice: 240,
    condition: 'Refurbished',
    location: 'Astoria, Queens · 4.5 miles',
    timeAgo: '1d ago',
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Authentic 1960s Scandinavian molded wood silhouette with freshly reupholstered charcoal wool seat cushion. Hand-oiled natural teak wood grain with rock-solid joinery.',
    seller: {
      name: 'Nordic Collective',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      rating: 4.9,
      salesCount: 88,
      verified: true
    },
    dealRating: 'Rare Collectible',
    hasDropAlert: false,
    geometryType: 'chair'
  },
  {
    id: 'vinyl-record-05',
    title: 'First-Press Jazz Vinyl Record Anthology',
    price: 40,
    originalPrice: 90,
    condition: 'Very Good Plus (VG+)',
    location: 'Lower East Side, NY · 1.5 miles',
    timeAgo: '2d ago',
    category: 'Collectibles',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Original analog master pressing in archival anti-static poly sleeve. Plays clean with deep low-end warmth and zero skips. Outer gatefold jacket shows gorgeous vintage patina.',
    seller: {
      name: 'Sammy Groove',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
      rating: 4.9,
      salesCount: 65,
      verified: true
    },
    dealRating: 'Super Deal',
    hasDropAlert: true,
    geometryType: 'record'
  }
];
