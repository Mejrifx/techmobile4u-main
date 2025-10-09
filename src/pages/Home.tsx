import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { mockProducts } from "@/data/mockProducts";
import { Smartphone, Tablet, DollarSign, Shield } from "lucide-react";

const Home = () => {
  const featuredProducts = mockProducts.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground">
        <div className="container py-24 md:py-32">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left side - Text content */}
            <div className="max-w-3xl lg:max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Buy & Sell Premium Devices
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Shop the latest phones and tablets or sell your used devices for instant cash. 
                Trusted, secure, and hassle-free.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/shop">Shop Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20" asChild>
                  <Link to="/sell">Sell Your Device</Link>
                </Button>
              </div>
            </div>
            
            {/* Right side - Logo */}
            <div className="flex items-center justify-start">
              <img 
                src="/techmobile4u-main-logo.svg" 
                alt="TechMobile4U" 
                className="h-32 md:h-40 lg:h-48 w-auto ml-5 opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Smartphone className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Latest Devices</h3>
              <p className="text-sm text-muted-foreground">Shop newest phones and tablets</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Certified Quality</h3>
              <p className="text-sm text-muted-foreground">All devices are tested and verified</p>
            </div>
            <div className="text-center">
              <DollarSign className="h-12 w-12 mx-auto mb-4 text-success" />
              <h3 className="font-semibold mb-2">Instant Quotes</h3>
              <p className="text-sm text-muted-foreground">Get paid for your used devices</p>
            </div>
            <div className="text-center">
              <Tablet className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Wide Selection</h3>
              <p className="text-sm text-muted-foreground">Apple, Samsung, Google & more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Button variant="ghost" asChild>
              <Link to="/shop">View All →</Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-primary">
        <div className="container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Got a Device to Sell?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Get an instant quote and turn your old device into cash today
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/sell">Get Your Quote</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
