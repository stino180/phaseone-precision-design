import { useState } from "react";

import workWebsite1 from "@/assets/work-website-1.jpg";
import workWebsite2 from "@/assets/work-website-2.jpg";
import workApp1 from "@/assets/work-app-1.jpg";
import workApp2 from "@/assets/work-app-2.jpg";
import workLogo1 from "@/assets/work-logo-1.jpg";
import workLogo2 from "@/assets/work-logo-2.jpg";

type Category = "all" | "websites" | "apps" | "logos";

const projects = [
  {
    category: "websites" as const,
    title: "Mozze",
    description: "Music streaming platform using a currency called Notes for artist-fan transactions",
    image: workWebsite1,
  },
  {
    category: "websites" as const,
    title: "zMove",
    description: "Sports clip platform for posting, viewing, and livestreaming grassroots sports events",
    image: workWebsite2,
  },
  {
    category: "apps" as const,
    title: "Quotient",
    description: "Chart-anything app that lets users compare and overlay any two assets together",
    image: workApp1,
  },
  {
    category: "websites" as const,
    title: "Bitcoin Clock",
    description: "Live dashboard of Bitcoin stats — halvings, ownership metrics, and network data",
    image: workLogo1,
  },
  {
    category: "websites" as const,
    title: "EOLS Inc.",
    description: "CDL training platform with live Zoom classes, practice tests, and study guides",
    image: workLogo2,
  },
  {
    category: "websites" as const,
    title: "Tabby City",
    description: "Preppy college cat-themed apparel site featuring cats in Ivy League merch",
    image: workApp2,
  },
  {
    category: "apps" as const,
    title: "Stacq",
    description: "Decentralized automated DCA app for scheduling buys into crypto and stocks",
    image: workWebsite1,
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Websites", value: "websites" },
  { label: "Apps", value: "apps" },
  { label: "Logos", value: "logos" },
];

const WorkSection = () => {
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="py-24 md:py-32 bg-surface">
      <div className="container">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Portfolio
          </h2>
          <div className="mt-4 w-12 h-px bg-primary" />
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2 text-sm font-medium tracking-wider uppercase transition-colors ${
                active === f.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-background aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
              </div>
              <div className="mt-4">
                <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  {project.category}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-foreground tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
