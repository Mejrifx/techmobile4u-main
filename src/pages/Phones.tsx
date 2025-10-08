import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { mockProducts } from "@/data/mockProducts";

const Phones = () => {
  const [searchParams] = useSearchParams();
  const brandFilter = searchParams.get('brand');

  const phones = mockProducts.filter(p => {
    const isPhone = p.category === 'phone';
    const brandMatch = !brandFilter || p.brand === brandFilter;
    return isPhone && brandMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-2">
          {brandFilter ? `${brandFilter} Phones` : 'All Phones'}
        </h1>
        <p className="text-muted-foreground mb-8">
          Browse our collection of premium smartphones
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phones.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Phones;
