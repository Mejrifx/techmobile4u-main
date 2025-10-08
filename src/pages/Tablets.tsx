import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { mockProducts } from "@/data/mockProducts";

const Tablets = () => {
  const [searchParams] = useSearchParams();
  const brandFilter = searchParams.get('brand');

  const tablets = mockProducts.filter(p => {
    const isTablet = p.category === 'tablet';
    const brandMatch = !brandFilter || p.brand === brandFilter;
    return isTablet && brandMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-2">
          {brandFilter ? `${brandFilter} Tablets` : 'All Tablets'}
        </h1>
        <p className="text-muted-foreground mb-8">
          Discover powerful tablets for work and play
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tablets.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tablets;
