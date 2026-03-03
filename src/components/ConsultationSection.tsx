import { ArrowRight } from "lucide-react";

const ConsultationSection = () => {
  return (
    <section id="consultation" className="py-24 md:py-32 bg-primary">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60 mb-4">
            Let's Talk
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight text-balance">
            Ready to elevate your digital presence?
          </h2>
          <p className="mt-6 text-primary-foreground/70 text-lg leading-relaxed max-w-lg mx-auto">
            Book a free discovery call to discuss your project. No obligations, just clarity.
          </p>
          <a
            href="mailto:hello@phaseone.studio"
            className="mt-10 inline-flex items-center gap-3 bg-primary-foreground text-foreground px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-primary-foreground/90 transition-colors group"
          >
            Schedule a Discovery Call
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
