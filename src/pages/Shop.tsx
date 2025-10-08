import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { mockProducts } from "@/data/mockProducts";
import { Button } from "@/components/ui/button";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'phone' | 'tablet'>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');

  const brands = ['all', ...Array.from(new Set(mockProducts.map(p => p.brand)))];

  const filteredProducts = mockProducts.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const brandMatch = selectedBrand === 'all' || product.brand === selectedBrand;
    return categoryMatch && brandMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8">Shop All Devices</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64 space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Category</h3>
              <div className="space-y-2">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory('all')}
                >
                  All Devices
                </Button>
                <Button
                  variant={selectedCategory === 'phone' ? 'default' : 'outline'}
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory('phone')}
                >
                  Phones
                </Button>
                <Button
                  variant={selectedCategory === 'tablet' ? 'default' : 'outline'}
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory('tablet')}
                >
                  Tablets
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Brand</h3>
              <div className="space-y-2">
                {brands.map(brand => (
                  <Button
                    key={brand}
                    variant={selectedBrand === brand ? 'default' : 'outline'}
                    className="w-full justify-start"
                    onClick={() => setSelectedBrand(brand)}
                  >
                    {brand === 'all' ? 'All Brands' : brand}
                  </Button>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            <p className="text-muted-foreground mb-6">
              Showing {filteredProducts.length} products
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Shop;
