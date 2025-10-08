import { Link } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [phonesOpen, setPhonesOpen] = useState(false);
  const [tabletsOpen, setTabletsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/techmobile4u-main-logo.svg" 
              alt="TechMobile4U" 
              className="h-8 w-auto"
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

        <div className="flex items-center gap-4">
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
    </nav>
  );
};

export default Navbar;
