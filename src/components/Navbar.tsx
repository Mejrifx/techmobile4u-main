import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, User, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";
import { mockProducts } from "@/data/mockProducts";

const Navbar = () => {
  const [phonesOpen, setPhonesOpen] = useState(false);
  const [tabletsOpen, setTabletsOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Filter products based on search query
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = mockProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered.slice(0, 5));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
    setMobileSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-4 md:gap-8">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/techmobile4u-main-logo.svg" 
              alt="TechMobile4U" 
              className="h-12 w-auto"
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link to="/shop" className="text-sm font-medium hover:text-primary transition-colors">
              Shop
            </Link>
            
            <div 
              className="relative"
              onMouseEnter={() => setPhonesOpen(true)}
              onMouseLeave={() => setPhonesOpen(false)}
            >
              <Link to="/phones" className="text-sm font-medium hover:text-primary transition-colors">
                Phones
              </Link>
              {phonesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-popover border rounded-lg shadow-lg py-2 z-50">
                  <Link to="/phones?brand=Apple" className="block px-4 py-2 text-sm hover:bg-accent transition-colors">
                    Apple
                  </Link>
                  <Link to="/phones?brand=Samsung" className="block px-4 py-2 text-sm hover:bg-accent transition-colors">
                    Samsung
                  </Link>
                  <Link to="/phones?brand=Google" className="block px-4 py-2 text-sm hover:bg-accent transition-colors">
                    Google
                  </Link>
                </div>
              )}
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setTabletsOpen(true)}
              onMouseLeave={() => setTabletsOpen(false)}
            >
              <Link to="/tablets" className="text-sm font-medium hover:text-primary transition-colors">
                Tablets
              </Link>
              {tabletsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-popover border rounded-lg shadow-lg py-2 z-50">
                  <Link to="/tablets?brand=Apple" className="block px-4 py-2 text-sm hover:bg-accent transition-colors">
                    Apple
                  </Link>
                  <Link to="/tablets?brand=Samsung" className="block px-4 py-2 text-sm hover:bg-accent transition-colors">
                    Samsung
                  </Link>
                </div>
              )}
            </div>

            <Link to="/sell" className="text-sm font-medium text-success hover:text-success/80 transition-colors">
              Sell Device
            </Link>
          </div>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden lg:block flex-1 max-w-md mx-4">
          <div ref={searchRef} className="relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 h-10 w-full"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSearchResults([]);
                  }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                </button>
              )}
            </div>
            
            {/* Search Results Dropdown */}
            {searchQuery && searchResults.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-popover border rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
                {searchResults.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleProductClick(product.id)}
                    className="w-full px-4 py-3 text-left hover:bg-accent transition-colors border-b last:border-b-0 flex items-center gap-3"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-sm">{product.name}</p>
                      <p className="text-xs text-muted-foreground">{product.brand} • {product.category}</p>
                    </div>
                    <p className="text-sm font-semibold text-primary">${product.price}</p>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Search Icon - Mobile */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileSearchOpen(true)}
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/account">
              <User className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Mobile Search Modal */}
      {mobileSearchOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center gap-4 p-4 border-b">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="pl-10 pr-10 h-12 text-base"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSearchResults([]);
                    }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    <X className="h-5 w-5 text-muted-foreground" />
                  </button>
                )}
              </div>
              <Button variant="ghost" onClick={() => {
                setMobileSearchOpen(false);
                setSearchQuery("");
                setSearchResults([]);
              }}>
                Cancel
              </Button>
            </div>

            {/* Results */}
            <div className="flex-1 overflow-y-auto">
              {searchQuery ? (
                searchResults.length > 0 ? (
                  <div className="divide-y">
                    {searchResults.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => handleProductClick(product.id)}
                        className="w-full px-4 py-4 text-left hover:bg-accent transition-colors"
                      >
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-muted-foreground">{product.brand} • {product.category}</p>
                        <p className="text-sm font-semibold text-primary mt-1">${product.price}</p>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-64 text-muted-foreground">
                    No products found
                  </div>
                )
              ) : (
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  Start typing to search...
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;