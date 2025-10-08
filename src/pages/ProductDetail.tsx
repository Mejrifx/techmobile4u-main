import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { mockProducts } from "@/data/mockProducts";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
        </div>
      </div>
    );
  }

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find((item: any) => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="aspect-square overflow-hidden rounded-lg bg-muted">
            <img 
              src={product.image} 
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-primary mb-6">${product.price}</p>
            
            <div className="space-y-4 mb-8">
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Specifications</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Storage: {product.specs.storage}</li>
                  <li>Color: {product.specs.color}</li>
                  <li>Condition: {product.specs.condition}</li>
                </ul>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full md:w-auto"
              onClick={addToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
