import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import PromoBar from "@/components/PromoBar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { mockProducts } from "@/data/mockProducts";
import { Smartphone, Tablet, DollarSign, Shield } from "lucide-react";

const Home = () => {
  const featuredProducts = mockProducts.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PromoBar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white" style={{backgroundColor: '#7bc5f6'}}>
        <div className="container py-8 md:py-16">
          {/* Mobile-first layout */}
          <div className="flex flex-col items-center text-center space-y-8 lg:flex-row lg:items-center lg:justify-between lg:text-left lg:space-y-0 lg:gap-12">
            
            {/* Mobile Logo - Top Center */}
            <div className="lg:hidden flex justify-center">
              <img 
                src="/techmobile4u-main-logo.svg" 
                alt="TechMobile4U" 
                className="h-16 w-auto opacity-95"
              />
            </div>
            
            {/* Content */}
            <div className="max-w-2xl lg:max-w-2xl space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Buy & Sell Premium Devices
              </h1>
              <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed">
                Shop the latest phones and tablets or sell your used devices for instant cash. 
                Trusted, secure, and hassle-free.
              </p>
              
              {/* Mobile-optimized buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base py-3" asChild>
                  <Link to="/shop">Shop Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base py-3 bg-white/10 border-white/30 hover:bg-white/20 text-white" asChild>
                  <Link to="/sell">Sell Your Device</Link>
                </Button>
              </div>
            </div>
            
            {/* Desktop Logo - Right Side */}
            <div className="hidden lg:flex items-center justify-center">
              <img 
                src="/techmobile4u-main-logo.svg" 
                alt="TechMobile4U" 
                className="h-48 md:h-56 lg:h-64 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300 transform -translate-x-16 scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center space-y-3">
              <Smartphone className="h-8 w-8 md:h-12 md:w-12 mx-auto text-primary" />
              <h3 className="font-semibold text-sm md:text-base">Latest Devices</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Shop newest phones and tablets</p>
            </div>
            <div className="text-center space-y-3">
              <Shield className="h-8 w-8 md:h-12 md:w-12 mx-auto text-primary" />
              <h3 className="font-semibold text-sm md:text-base">Certified Quality</h3>
              <p className="text-xs md:text-sm text-muted-foreground">All devices are tested and verified</p>
            </div>
            <div className="text-center space-y-3">
              <DollarSign className="h-8 w-8 md:h-12 md:w-12 mx-auto text-success" />
              <h3 className="font-semibold text-sm md:text-base">Instant Quotes</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Get paid for your used devices</p>
            </div>
            <div className="text-center space-y-3">
              <Tablet className="h-8 w-8 md:h-12 md:w-12 mx-auto text-primary" />
              <h3 className="font-semibold text-sm md:text-base">Wide Selection</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Apple, Samsung, Google & more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 md:mb-8 space-y-2 sm:space-y-0">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
            <Button variant="ghost" className="self-start sm:self-auto" asChild>
              <Link to="/shop">View All →</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 text-white" style={{backgroundColor: '#7bc5f6'}}>
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Got a Device to Sell?
          </h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
            Get an instant quote and turn your old device into cash today
          </p>
          <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base py-3" asChild>
            <Link to="/sell">Get Your Quote</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
