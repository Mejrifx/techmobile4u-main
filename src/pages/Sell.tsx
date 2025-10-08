import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Sell = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: '',
    brand: '',
    model: '',
    condition: '',
    storage: '',
    name: '',
    email: '',
    phone: '',
  });
  const [quote, setQuote] = useState(0);

  const calculateQuote = () => {
    const baseValue = 500;
    const conditionMultiplier = {
      'Excellent': 0.9,
      'Good': 0.7,
      'Fair': 0.5,
      'Poor': 0.3,
    }[formData.condition] || 0.5;
    
    const storageBonus = {
      '64GB': 0,
      '128GB': 50,
      '256GB': 100,
      '512GB': 200,
      '1TB': 350,
    }[formData.storage] || 0;

    return Math.round(baseValue * conditionMultiplier + storageBonus);
  };

  const handleContinue = () => {
    if (step === 1 && formData.category && formData.brand && formData.model && formData.condition && formData.storage) {
      const calculatedQuote = calculateQuote();
      setQuote(calculatedQuote);
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Sell request submitted!",
      description: `We'll contact you at ${formData.email} within 24 hours.`,
    });
    // Reset form
    setStep(1);
    setFormData({
      category: '',
      brand: '',
      model: '',
      condition: '',
      storage: '',
      name: '',
      email: '',
      phone: '',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8 max-w-2xl">
        <h1 className="text-4xl font-bold mb-2">Sell Your Device</h1>
        <p className="text-muted-foreground mb-8">Get an instant quote for your used device</p>

        <Card className="p-6">
          {step === 1 ? (
            <div className="space-y-6">
              <div>
                <Label>Device Category</Label>
                <Select value={formData.category} onValueChange={(v) => setFormData({...formData, category: v})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phone">Phone</SelectItem>
                    <SelectItem value="tablet">Tablet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Brand</Label>
                <Select value={formData.brand} onValueChange={(v) => setFormData({...formData, brand: v})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Apple">Apple</SelectItem>
                    <SelectItem value="Samsung">Samsung</SelectItem>
                    <SelectItem value="Google">Google</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Model</Label>
                <Input 
                  placeholder="e.g., iPhone 14 Pro"
                  value={formData.model}
                  onChange={(e) => setFormData({...formData, model: e.target.value})}
                />
              </div>

              <div>
                <Label>Storage</Label>
                <Select value={formData.storage} onValueChange={(v) => setFormData({...formData, storage: v})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select storage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="64GB">64GB</SelectItem>
                    <SelectItem value="128GB">128GB</SelectItem>
                    <SelectItem value="256GB">256GB</SelectItem>
                    <SelectItem value="512GB">512GB</SelectItem>
                    <SelectItem value="1TB">1TB</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Condition</Label>
                <Select value={formData.condition} onValueChange={(v) => setFormData({...formData, condition: v})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Excellent">Excellent - Like new</SelectItem>
                    <SelectItem value="Good">Good - Minor wear</SelectItem>
                    <SelectItem value="Fair">Fair - Visible wear</SelectItem>
                    <SelectItem value="Poor">Poor - Heavy wear</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleContinue} className="w-full">
                Get Quote
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-success/10 border border-success rounded-lg p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">Your device is worth</p>
                <p className="text-4xl font-bold text-success">${quote}</p>
              </div>

              <div>
                <Label>Full Name</Label>
                <Input 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <Label>Email</Label>
                <Input 
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <Label>Phone</Label>
                <Input 
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="flex gap-4">
                <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                  Back
                </Button>
                <Button type="submit" className="flex-1">
                  Submit Request
                </Button>
              </div>
            </form>
          )}
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Sell;
