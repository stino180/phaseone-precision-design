import { Globe, Smartphone, PenTool, Clapperboard } from "lucide-react";

const services = [
  { icon: Clapperboard, title: "Video & Motion", description: "Show trailers, event recaps, promo spots, and donor videos, cut for every platform." },
  { icon: Globe, title: "Websites & Event Pages", description: "Ticket and event landing pages, season sites, and full websites that load fast and convert." },
  { icon: PenTool, title: "Brand & Graphic Design", description: "Show art, logos, and social assets that match your film and your site." },
  { icon: Smartphone, title: "Apps & Custom Builds", description: "When you need more than a website: booking tools, member portals, custom apps." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Services
          </h2>
          <div className="mt-4 w-12 h-px bg-primary" />
        </div>

        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-12 lg:gap-10">
          {services.map((service) => (
            <div key={service.title} className="group">
              <span className="block text-sm font-medium text-muted-foreground mb-4">
                {String(services.indexOf(service) + 1).padStart(2, "0")}
              </span>
              <service.icon
                size={28}
                strokeWidth={1.2}
                className="text-primary mb-6"
              />
              <h3 className="text-lg font-semibold text-foreground mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                {service.description}
              </p>
              <div className="mt-6 w-0 group-hover:w-full h-px bg-primary transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
