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

  // Create 4 duplicates for truly seamless infinite scroll (16 items total)
  const scrollingPromos = [...promos, ...promos, ...promos, ...promos];

  return (
    <>
      <style>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        .promo-scroll {
          animation: infinite-scroll 20s linear infinite;
          display: flex;
          will-change: transform;
          width: max-content;
        }
        .promo-item {
          width: 100vw;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }
      `}</style>
      <div className="border-b bg-background/90 overflow-hidden">
        {/* Desktop Grid */}
        <div className="hidden lg:block">
          <div className="container">
            <div className="grid grid-cols-4 gap-3 py-2.5">
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

        {/* Mobile Carousel - Infinite Scroll */}
        <div className="lg:hidden py-3 relative overflow-hidden w-full">
          <div className="promo-scroll">
            {scrollingPromos.map((promo, index) => {
              const Icon = promo.icon;
              return (
                <div
                  key={index}
                  className="promo-item gap-1.5 text-sm text-foreground/80"
                >
                  <Icon className="h-4 w-4 text-accent flex-shrink-0" aria-hidden="true" />
                  <span className="whitespace-nowrap">{promo.text}</span>
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