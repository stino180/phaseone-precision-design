import heroImage from "@/assets/hero-architecture.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24 pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern architectural space representing precision design"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <p
            className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 text-primary-foreground/70 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Digital Consultancy
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] text-primary-foreground animate-fade-up text-balance"
            style={{ animationDelay: "0.3s" }}
          >
            Precision in Design.
            <br />
            Strategy in Execution.
          </h1>
          <p
            className="mt-6 md:mt-8 text-lg md:text-xl text-primary-foreground/80 max-w-lg font-light leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            We craft digital experiences with the rigor of Swiss design and the edge of modern technology.
          </p>
          <div
            className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            <a
              href="#consultation"
              className="inline-flex items-center justify-center bg-primary-foreground text-foreground px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-primary-foreground/90 transition-colors"
            >
              Schedule a Call
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border border-primary-foreground/40 text-primary-foreground px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-primary-foreground/10 transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
