import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import logoBasalt from "@/assets/logo-basalt.png";
import logoDefi from "@/assets/logo-defischoolhouse.jpeg";
import logoSteady from "@/assets/logo-steady.png";
import logoAsetra from "@/assets/logo-asetra.png";
import logoZ from "@/assets/logo-z.png";
import logoStino from "@/assets/logo-stino.png";
import logoEols from "@/assets/logo-eols.png";
import logoExobloc from "@/assets/logo-exobloc.png";
import logoMozze from "@/assets/logo-mozze.png";
import logoTabbyCity from "@/assets/logo-tabbycity.png";

const logos = [
  { name: "Basalt", src: logoBasalt },
  { name: "Defi Schoolhouse", src: logoDefi },
  { name: "Steady", src: logoSteady },
  { name: "Asetra", src: logoAsetra },
  { name: "Z", src: logoZ },
  { name: "Stino", src: logoStino },
  { name: "EOLS Inc.", src: logoEols },
  { name: "Exobloc", src: logoExobloc },
  { name: "Mozze", src: logoMozze },
  { name: "Tabby City", src: logoTabbyCity },
];

const LogoCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let speed = 0.5;

    const step = () => {
      if (!isPaused && el) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    setIsPaused(true);
    const amount = 200;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
    setTimeout(() => setIsPaused(false), 600);
  };

  const allLogos = [...logos, ...logos];

  return (
    <section className="py-16 md:py-24 bg-surface border-t border-border">
      <div className="container">
        <p className="text-center text-sm font-medium text-muted-foreground tracking-widest uppercase mb-10">
          Logos
        </p>

        <div className="relative flex items-center gap-4">
          <button
            onClick={() => scroll("left")}
            className="shrink-0 h-10 w-10 flex items-center justify-center border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            aria-label="Scroll left"
          >
            <ArrowLeft size={16} />
          </button>

          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex-1 overflow-hidden"
          >
            <div className="flex gap-12 items-center w-max">
              {allLogos.map((logo, i) => (
                <div key={i} className="flex flex-col items-center gap-3 min-w-[120px]">
                  <div className="h-20 w-20 rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium tracking-wide">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => scroll("right")}
            className="shrink-0 h-10 w-10 flex items-center justify-center border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            aria-label="Scroll right"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
