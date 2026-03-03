const steps = [
  { number: "01", title: "Discovery", description: "We listen. Understanding your goals, audience, and competitive landscape." },
  { number: "02", title: "Strategy", description: "A clear roadmap with defined milestones, deliverables, and timelines." },
  { number: "03", title: "Execution", description: "Pixel-perfect design and robust development, delivered iteratively." },
  { number: "04", title: "Launch & Support", description: "Seamless deployment with ongoing optimization and maintenance." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-surface">
      <div className="container">
        <div className="mb-16 md:mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            How We Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Process
          </h2>
          <div className="mt-4 w-12 h-px bg-primary" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="text-4xl md:text-5xl font-bold text-border">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-muted-foreground text-[15px] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
