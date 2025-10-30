import { Truck, ShieldCheck, BadgeCheck, Percent } from "lucide-react";

const PromoBar = () => {
  return (
    <div className="hidden md:block border-b bg-background/90">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 py-2.5">
          <div className="flex items-center gap-2 text-sm text-foreground/80">
            <Truck className="h-4 w-4 text-accent" aria-hidden="true" />
            <span>Free Delivery On All Orders</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground/80">
            <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
            <span>Free 12 Month Warranty</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground/80">
            <BadgeCheck className="h-4 w-4 text-accent" aria-hidden="true" />
            <span>Quality Assurance On Devices</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground/80">
            <Percent className="h-4 w-4 text-accent" aria-hidden="true" />
            <span>10% Off On First Orders</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBar;


