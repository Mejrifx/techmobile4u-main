import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/data/mockProducts";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { toast } = useToast();

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
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          <img 
            src={product.image} 
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/product/${product.id}`}>
          <p className="text-xs text-muted-foreground mb-1">{product.brand}</p>
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            {product.specs.storage} • {product.specs.color}
          </p>
        </Link>
        <p className="text-2xl font-bold">${product.price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={addToCart} 
          className="w-full"
          disabled={!product.inStock}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
