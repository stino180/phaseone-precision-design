import { Globe, Smartphone, PenTool } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description:
      "Bespoke websites engineered for performance, accessibility, and visual impact. From corporate platforms to e-commerce experiences.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Native and cross-platform apps built with precision. Seamless user experiences that perform flawlessly across every device.",
  },
  {
    icon: PenTool,
    title: "Brand & Graphic Design",
    description:
      "Logos, identity systems, and visual assets that communicate authority. Strategic design rooted in clarity and purpose.",
  },
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {services.map((service) => (
            <div key={service.title} className="group">
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
