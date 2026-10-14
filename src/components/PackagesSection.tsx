import { Check } from "lucide-react";

const packages = [
  {
    name: "Show Promo",
    price: "$750",
    items: ["60–90s trailer", "3 vertical social cuts (15–30s)", "1 half-day shoot", "2 revision rounds", "Delivered in 7 days"],
  },
  {
    name: "Film + Site",
    price: "$2,500",
    popular: true,
    items: ["Everything in Show Promo", "Custom event or season landing page", "Ticket links", "Mobile-optimized", "30 days of updates"],
  },
  {
    name: "Event Recap",
    price: "$600",
    items: ["Up to 4 hours of on-site coverage", "60–90s recap film", "3 social cuts", "72-hour turnaround on the first cut"],
  },
];

const PackagesSection = () => (
  <section id="packages" className="py-24 md:py-32 bg-background border-t border-border">
    <div className="container">
      <div className="mb-16 md:mb-20">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Packages</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Clear pricing. No surprises.</h2>
        <div className="mt-4 w-12 h-px bg-primary" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
        {packages.map((p) => (
          <div
            key={p.name}
            className={`relative flex flex-col p-8 md:p-10 border ${
              p.popular ? "bg-primary text-primary-foreground border-primary" : "bg-surface text-foreground border-border"
            }`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-8 px-3 py-1 bg-background text-foreground text-[10px] font-medium tracking-[0.2em] uppercase border border-border">
                Most Popular
              </span>
            )}
            <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
            <p className="mt-4">
              <span className={`text-sm ${p.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>from </span>
              <span className="text-4xl font-bold">{p.price}</span>
            </p>
            <ul className="mt-8 flex flex-col gap-3 flex-1">
              {p.items.map((i) => (
                <li key={i} className={`flex gap-3 text-[15px] ${p.popular ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
                  <Check size={16} className="mt-1 shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
            <a
              href="#consultation"
              className={`mt-10 inline-flex justify-center px-6 py-3.5 text-sm font-medium tracking-wider uppercase transition-colors ${
                p.popular ? "bg-primary-foreground text-foreground hover:bg-primary-foreground/90" : "bg-primary text-primary-foreground hover:bg-navy-light"
              }`}
            >
              Get a Quote
            </a>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-muted-foreground text-[15px]">
        Nonprofit? Ask about grant-friendly payment schedules.
      </p>
    </div>
  </section>
);

export default PackagesSection;
