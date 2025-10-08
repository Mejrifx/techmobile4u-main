import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
  });

  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  const subtotal = cartItems.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear cart
    localStorage.setItem('cart', JSON.stringify([]));
    
    toast({
      title: "Order placed successfully!",
      description: "You'll receive a confirmation email shortly.",
    });
    
    navigate('/account');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <Label>Email</Label>
                  <Input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
              <div className="space-y-4">
                <div>
                  <Label>Full Name</Label>
                  <Input 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <Label>Address</Label>
                  <Input 
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>City</Label>
                    <Input 
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label>ZIP Code</Label>
                    <Input 
                      required
                      value={formData.zipCode}
                      onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Payment</h2>
              <div className="space-y-4">
                <div>
                  <Label>Card Number</Label>
                  <Input 
                    placeholder="1234 5678 9012 3456"
                    required
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Expiry Date</Label>
                    <Input placeholder="MM/YY" required />
                  </div>
                  <div>
                    <Label>CVV</Label>
                    <Input placeholder="123" required />
                  </div>
                </div>
              </div>
            </Card>

            <Button type="submit" size="lg" className="w-full">
              Place Order
            </Button>
          </form>

          <Card className="p-6 h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4 mb-4">
              {cartItems.map((item: any) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.name} x{item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-2 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
