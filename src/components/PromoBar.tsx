import React from "react";
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
            transform: translateX(calc(-100% / 4));
          }
        }
        .promo-scroll {
          animation: infinite-scroll 30s linear infinite;
          display: flex;
          will-change: transform;
          width: max-content;
        }
        .promo-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 1rem;
          white-space: nowrap;
        }
      `}</style>
      <div className="sticky top-20 z-40 border-b bg-background/90 overflow-hidden">
        {/* Infinite Scroll Carousel - Desktop & Mobile */}
        <div className="py-3 relative overflow-hidden w-full">
          <div className="promo-scroll">
            {scrollingPromos.map((promo, index) => {
              const Icon = promo.icon;
              const isLastInSet = (index + 1) % promos.length === 0;
              return (
                <React.Fragment key={index}>
                  <div className="promo-item text-sm text-foreground/80">
                    <Icon className="h-4 w-4 text-accent flex-shrink-0" aria-hidden="true" style={{ marginRight: '2px' }} />
                    <span className="whitespace-nowrap">{promo.text}</span>
                  </div>
                  {!isLastInSet && (
                    <div className="promo-item text-muted-foreground/40" style={{ padding: '0 0.5rem' }}>
                      <span>|</span>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoBar;