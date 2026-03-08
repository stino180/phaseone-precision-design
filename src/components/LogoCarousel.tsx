import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const logos = [
  { name: "Acme Corp" },
  { name: "Globex" },
  { name: "Initech" },
  { name: "Umbrella" },
  { name: "Stark Industries" },
  { name: "Wayne Enterprises" },
  { name: "Cyberdyne" },
  { name: "Oscorp" },
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
        // Loop: when we've scrolled past half (the duplicated set), reset
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
    const amount = 200;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  // Duplicate logos for seamless loop
  const allLogos = [...logos, ...logos];

  return (
    <section className="py-16 md:py-24 bg-surface border-t border-border">
      <div className="container">
        <p className="text-center text-sm font-medium text-muted-foreground tracking-widest uppercase mb-10">
          Trusted By
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
                  <div className="h-16 w-16 rounded-lg bg-muted flex items-center justify-center text-muted-foreground text-xs font-bold uppercase tracking-wider">
                    {logo.name.charAt(0)}
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
