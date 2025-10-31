import { Truck, ShieldCheck, BadgeCheck, Percent } from "lucide-react";

const PromoBar = () => {
  return (
    <div className="border-b bg-background/90">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 py-2 md:py-2.5">
          <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-foreground/80">
            <Truck className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent flex-shrink-0" aria-hidden="true" />
            <span className="leading-tight">Free Delivery On All Orders</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-foreground/80">
            <ShieldCheck className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent flex-shrink-0" aria-hidden="true" />
            <span className="leading-tight">Free 12 Month Warranty</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-foreground/80">
            <BadgeCheck className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent flex-shrink-0" aria-hidden="true" />
            <span className="leading-tight">Quality Assurance On Devices</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-foreground/80">
            <Percent className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent flex-shrink-0" aria-hidden="true" />
            <span className="leading-tight">10% Off On First Orders</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBar;


