import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import PromoBar from "@/components/PromoBar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { mockProducts } from "@/data/mockProducts";
import { Smartphone, Tablet, DollarSign, Shield } from "lucide-react";
import { useTypewriter } from "@/hooks/use-typewriter";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const featuredProducts = mockProducts.slice(0, 4);
  const desktopHeadingRef = useTypewriter({ 
    text: "Buy & Sell\nPremium Devices", 
    speed: 0.05,
    delay: 0.3
  });
  const mobileHeadingRef = useTypewriter({ 
    text: "Buy & Sell\nPremium Devices", 
    speed: 0.05,
    delay: 0.3
  });

  // Animation refs
  const desktopLogoRef = useRef<HTMLImageElement>(null);
  const mobileLogoRef = useRef<HTMLImageElement>(null);
  const desktopDescRef = useRef<HTMLParagraphElement>(null);
  const mobileDescRef = useRef<HTMLParagraphElement>(null);
  const desktopButtonsRef = useRef<HTMLDivElement>(null);
  const mobileButtonsRef = useRef<HTMLDivElement>(null);
  
  // Features section refs
  const feature1Ref = useRef<HTMLDivElement>(null);
  const feature2Ref = useRef<HTMLDivElement>(null);
  const feature3Ref = useRef<HTMLDivElement>(null);
  const feature4Ref = useRef<HTMLDivElement>(null);

  // Desktop animations
  useEffect(() => {
    // Calculate typewriter completion time: delay (0.3) + text length * speed (0.05)
    // "Buy & Sell\nPremium Devices" = 25 chars = 1.25s + 0.3s delay = 1.55s total
    const tl = gsap.timeline({ delay: 1.6 }); // Start immediately after typewriter completes

    // Logo glides in from right with fade
    if (desktopLogoRef.current) {
      gsap.set(desktopLogoRef.current, { x: 300, opacity: 0 });
      tl.to(desktopLogoRef.current, {
        x: 0,
        opacity: 0.9,
        duration: 1.2,
        ease: "power2.out"
      });
    }

    // Description slides in from left
    if (desktopDescRef.current) {
      gsap.set(desktopDescRef.current, { x: -100, opacity: 0 });
      tl.to(desktopDescRef.current, {
        x: 0,
        opacity: 0.9,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5");
    }

    // Buttons slide in from left
    if (desktopButtonsRef.current) {
      gsap.set(desktopButtonsRef.current, { x: -100, opacity: 0 });
      tl.to(desktopButtonsRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5");
    }
  }, []);

  // Mobile animations
  useEffect(() => {
    // Calculate typewriter completion time: delay (0.3) + text length * speed (0.05)
    // "Buy & Sell\nPremium Devices" = 25 chars = 1.25s + 0.3s delay = 1.55s total
    const tl = gsap.timeline({ delay: 1.6 }); // Start immediately after typewriter completes

    // Description slides in from left
    if (mobileDescRef.current) {
      gsap.set(mobileDescRef.current, { x: -100, opacity: 0 });
      tl.to(mobileDescRef.current, {
        x: 0,
        opacity: 0.9,
        duration: 0.8,
        ease: "power3.out"
      });
    }

    // Logo glides in from right with fade
    if (mobileLogoRef.current) {
      gsap.set(mobileLogoRef.current, { x: 300, opacity: 0 });
      tl.to(mobileLogoRef.current, {
        x: 0,
        opacity: 0.95,
        duration: 1.2,
        ease: "power2.out"
      }, "-=0.3");
    }

    // Buttons slide in from left
    if (mobileButtonsRef.current) {
      gsap.set(mobileButtonsRef.current, { x: -100, opacity: 0 });
      tl.to(mobileButtonsRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5");
    }
  }, []);

  // Features section animations
  useEffect(() => {
    const features = [feature1Ref, feature2Ref, feature3Ref, feature4Ref];
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: feature1Ref.current?.parentElement?.parentElement,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    features.forEach((ref, index) => {
      if (ref.current) {
        gsap.set(ref.current, {
          opacity: 0,
          y: 50,
          scale: 0.8,
          rotation: -5
        });

        tl.to(ref.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.2)"
        }, index * 0.15);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar and PromoBar - Fixed at top */}
      <Navbar />
      <PromoBar />
      
      {/* Hero Background Section - Full Top Section */}
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Background Image - Desktop */}
        <div 
          className="hidden lg:block absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/techmobile4u Background.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        {/* Background Image - Mobile */}
        <div 
          className="lg:hidden absolute inset-0 z-0 w-full h-full"
          style={{
            backgroundImage: `url('/Techmobile4u Background (mobile2).png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh'
          }}
        ></div>
        {/* Overlay for text readability - Minimal on mobile, normal on desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent z-[1] lg:from-black/20 lg:via-black/10 lg:to-black/20"></div>
        
        {/* Hero Content Section */}
        <section className="relative text-white flex items-center justify-center min-h-[calc(100vh-160px)] pt-32">
          <div className="container py-8 md:py-16 relative z-10">
          {/* Desktop layout */}
          <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:text-left lg:gap-12">
            {/* Desktop Content */}
            <div className="max-w-2xl space-y-6">
              <h1 
                ref={desktopHeadingRef}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-berthold"
              ></h1>
              <p 
                ref={desktopDescRef}
                className="text-lg sm:text-xl md:text-2xl opacity-90 leading-relaxed"
              >
                Shop the latest phones and tablets or sell your used devices for instant cash. 
                Trusted, secure, and hassle-free.
              </p>
              
              <div 
                ref={desktopButtonsRef}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
              >
                <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg py-4 px-8" asChild>
                  <Link to="/shop">Shop Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg py-4 px-8 bg-white/10 border-white/30 hover:bg-white/20 text-white" asChild>
                  <Link to="/sell">Sell Your Device</Link>
                </Button>
              </div>
            </div>
            
            {/* Desktop Logo - Right Side */}
            <div className="flex items-center justify-center">
              <img 
                ref={desktopLogoRef}
                src="/Techmobile4u Logo.png" 
                alt="TechMobile4U" 
                className="h-64 md:h-72 lg:h-80 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Mobile layout */}
          <div className="flex flex-col items-center justify-center text-center space-y-4 lg:hidden min-h-[60vh]">
            {/* Text at top */}
            <h1 
              ref={mobileHeadingRef}
              className="text-4xl sm:text-5xl font-bold leading-tight max-w-md mx-auto" 
              style={{ fontFamily: "'Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', sans-serif" }}
            ></h1>
            
            {/* Description text above logo */}
            <p 
              ref={mobileDescRef}
              className="text-lg sm:text-xl opacity-90 leading-relaxed max-w-lg px-4"
            >
              Shop the latest phones and tablets or sell your used devices for instant cash. 
              Trusted, secure, and hassle-free.
            </p>
            
            {/* Logo in middle - Dominant */}
            <div className="flex justify-center py-4">
              <img 
                ref={mobileLogoRef}
                src="/Techmobile4u Logo.png" 
                alt="TechMobile4U" 
                className="h-48 sm:h-56 w-auto opacity-95"
              />
            </div>
            
            {/* Mobile-optimized buttons */}
            <div 
              ref={mobileButtonsRef}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
            >
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg py-4 px-8" asChild>
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg py-4 px-8 bg-white/10 border-white/30 hover:bg-white/20 text-white" asChild>
                <Link to="/sell">Sell Your Device</Link>
              </Button>
            </div>
          </div>
        </div>
        </section>
      </div>

      {/* Features */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div ref={feature1Ref} className="text-center space-y-3">
              <Smartphone className="h-8 w-8 md:h-12 md:w-12 mx-auto text-primary" />
              <h3 className="font-semibold text-sm md:text-base">Latest Devices</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Shop newest phones and tablets</p>
            </div>
            <div ref={feature2Ref} className="text-center space-y-3">
              <Shield className="h-8 w-8 md:h-12 md:w-12 mx-auto text-primary" />
              <h3 className="font-semibold text-sm md:text-base">Certified Quality</h3>
              <p className="text-xs md:text-sm text-muted-foreground">All devices are tested and verified</p>
            </div>
            <div ref={feature3Ref} className="text-center space-y-3">
              <DollarSign className="h-8 w-8 md:h-12 md:w-12 mx-auto text-success" />
              <h3 className="font-semibold text-sm md:text-base">Instant Quotes</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Get paid for your used devices</p>
            </div>
            <div ref={feature4Ref} className="text-center space-y-3">
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
      <section className="py-12 md:py-20 text-white" style={{backgroundColor: 'hsl(221, 83%, 22%)'}}>
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
