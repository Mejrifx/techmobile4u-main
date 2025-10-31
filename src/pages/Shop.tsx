import { useState } from "react";
import Navbar from "@/components/Navbar";
import PromoBar from "@/components/PromoBar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { mockProducts } from "@/data/mockProducts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Filter, X } from "lucide-react";

const Shop = () => {
  const maxPrice = Math.max(...mockProducts.map(p => p.price));
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'phone' | 'tablet'>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedModel, setSelectedModel] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const brands = ['all', ...Array.from(new Set(mockProducts.map(p => p.brand)))];
  
  // Get iPhone models grouped by series
  const iphoneModels = mockProducts
    .filter(p => p.brand === 'Apple' && p.category === 'phone')
    .map(p => p.name)
    .sort((a, b) => {
      // Extract numbers for sorting (iPhone 16 > iPhone 15 > iPhone 14, etc.)
      const numA = parseInt(a.match(/\d+/)?.[0] || '0');
      const numB = parseInt(b.match(/\d+/)?.[0] || '0');
      if (numA !== numB) return numB - numA; // Higher number first
      return a.localeCompare(b);
    });

  const filteredProducts = mockProducts.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const brandMatch = selectedBrand === 'all' || product.brand === selectedBrand;
    const modelMatch = selectedModel === 'all' || product.name === selectedModel;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const searchMatch = !searchTerm || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    
    return categoryMatch && brandMatch && modelMatch && priceMatch && searchMatch;
  });

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedBrand('all');
    setSelectedModel('all');
    setPriceRange([0, maxPrice]);
    setSearchTerm('');
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedBrand !== 'all' || 
    selectedModel !== 'all' || priceRange[0] !== 0 || priceRange[1] !== maxPrice || searchTerm !== '';

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PromoBar />
      
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Shop All Devices</h1>
            <p className="text-muted-foreground">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
            </p>
          </div>
          
          {/* Mobile Filter Toggle */}
          <Button
            variant="outline"
            className="md:hidden flex items-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4" />
            Filters
            {hasActiveFilters && (
              <span className="bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">
                {[
                  selectedCategory !== 'all' ? 1 : 0,
                  selectedBrand !== 'all' ? 1 : 0,
                  selectedModel !== 'all' ? 1 : 0,
                  priceRange[0] !== 0 || priceRange[1] !== maxPrice ? 1 : 0,
                  searchTerm ? 1 : 0
                ].reduce((a, b) => a + b, 0)}
              </span>
            )}
          </Button>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <Input
            type="text"
            placeholder="Search for a specific phone or model..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={`w-full md:w-64 space-y-6 ${showFilters ? 'block' : 'hidden md:block'}`}>
            {hasActiveFilters && (
              <Button
                variant="ghost"
                className="w-full justify-start text-muted-foreground"
                onClick={clearFilters}
              >
                <X className="h-4 w-4 mr-2" />
                Clear All Filters
              </Button>
            )}

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
                    onClick={() => {
                      setSelectedBrand(brand);
                      if (brand !== 'Apple') setSelectedModel('all');
                    }}
                  >
                    {brand === 'all' ? 'All Brands' : brand}
                  </Button>
                ))}
              </div>
            </div>

            {selectedBrand === 'Apple' && selectedCategory === 'phone' && (
              <div>
                <h3 className="font-semibold mb-3">iPhone Model</h3>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  <Button
                    variant={selectedModel === 'all' ? 'default' : 'outline'}
                    className="w-full justify-start"
                    onClick={() => setSelectedModel('all')}
                  >
                    All iPhone Models
                  </Button>
                  {iphoneModels.map(model => (
                    <Button
                      key={model}
                      variant={selectedModel === model ? 'default' : 'outline'}
                      className="w-full justify-start text-sm"
                      onClick={() => setSelectedModel(model)}
                    >
                      {model}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="font-semibold mb-3">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </h3>
              <Slider
                value={[priceRange[0], priceRange[1]]}
                onValueChange={(value) => setPriceRange([value[0], value[1]])}
                max={maxPrice}
                min={0}
                step={50}
                className="w-full"
              />
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg mb-4">No products found</p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Shop;