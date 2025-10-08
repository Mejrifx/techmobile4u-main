export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'phone' | 'tablet';
  price: number;
  image: string;
  description: string;
  specs: {
    storage: string;
    color: string;
    condition: string;
  };
  inStock: boolean;
}

export const mockProducts: Product[] = [
  // Phones - Apple
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    category: 'phone',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop',
    description: 'Latest iPhone with titanium design and A17 Pro chip',
    specs: { storage: '256GB', color: 'Natural Titanium', condition: 'New' },
    inStock: true,
  },
  {
    id: '2',
    name: 'iPhone 14',
    brand: 'Apple',
    category: 'phone',
    price: 799,
    image: 'https://images.unsplash.com/photo-1663499482523-1c0d7c1b185f?w=400&h=400&fit=crop',
    description: 'Powerful iPhone with great camera system',
    specs: { storage: '128GB', color: 'Midnight', condition: 'New' },
    inStock: true,
  },
  // Phones - Samsung
  {
    id: '3',
    name: 'Galaxy S24 Ultra',
    brand: 'Samsung',
    category: 'phone',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
    description: 'Premium Samsung flagship with S Pen',
    specs: { storage: '512GB', color: 'Titanium Gray', condition: 'New' },
    inStock: true,
  },
  {
    id: '4',
    name: 'Galaxy Z Flip 5',
    brand: 'Samsung',
    category: 'phone',
    price: 999,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop',
    description: 'Foldable phone with compact design',
    specs: { storage: '256GB', color: 'Mint', condition: 'New' },
    inStock: true,
  },
  // Phones - Google
  {
    id: '5',
    name: 'Pixel 8 Pro',
    brand: 'Google',
    category: 'phone',
    price: 999,
    image: 'https://images.unsplash.com/photo-1598965675045-15e5f76e4baa?w=400&h=400&fit=crop',
    description: 'Google AI-powered flagship phone',
    specs: { storage: '256GB', color: 'Obsidian', condition: 'New' },
    inStock: true,
  },
  // Tablets - Apple
  {
    id: '6',
    name: 'iPad Pro 12.9"',
    brand: 'Apple',
    category: 'tablet',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
    description: 'Ultimate iPad with M2 chip',
    specs: { storage: '256GB', color: 'Space Gray', condition: 'New' },
    inStock: true,
  },
  {
    id: '7',
    name: 'iPad Air',
    brand: 'Apple',
    category: 'tablet',
    price: 599,
    image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=400&h=400&fit=crop',
    description: 'Versatile iPad with M1 chip',
    specs: { storage: '128GB', color: 'Blue', condition: 'New' },
    inStock: true,
  },
  // Tablets - Samsung
  {
    id: '8',
    name: 'Galaxy Tab S9 Ultra',
    brand: 'Samsung',
    category: 'tablet',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop',
    description: 'Premium Samsung tablet with AMOLED display',
    specs: { storage: '512GB', color: 'Graphite', condition: 'New' },
    inStock: true,
  },
];
