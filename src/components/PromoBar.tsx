import { Truck, ShieldCheck, BadgeCheck, Percent } from "lucide-react";

const PromoBar = () => {
  const promos = [
    {
      icon: Truck,
      text: "Free Delivery On All Orders",
    },
    {
      icon: ShieldCheck,
      text: "Free 12 Month Warranty",
    },
    {
      icon: BadgeCheck,
      text: "Quality Assurance On Devices",
    },
    {
      icon: Percent,
      text: "10% Off On First Orders",
    },
  ];

  // Duplicate promos for seamless infinite scroll
  const scrollingPromos = [...promos, ...promos];

  return (
    <>
      <style>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .promo-scroll {
          animation: infinite-scroll 20s linear infinite;
          display: flex;
        }
      `}</style>
      <div className="border-b bg-background/90 overflow-hidden">
        <div className="container relative">
          {/* Mobile Carousel - Infinite Scroll */}
          <div className="lg:hidden py-3 relative overflow-hidden">
            <div className="promo-scroll whitespace-nowrap">
              {scrollingPromos.map((promo, index) => {
                const Icon = promo.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-foreground/80 flex-shrink-0 px-8"
                  >
                    <Icon className="h-4 w-4 text-accent flex-shrink-0" aria-hidden="true" />
                    <span>{promo.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-3 py-2.5">
            {promos.map((promo, index) => {
              const Icon = promo.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-foreground/80"
                >
                  <Icon className="h-4 w-4 text-accent flex-shrink-0" aria-hidden="true" />
                  <span>{promo.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoBar;