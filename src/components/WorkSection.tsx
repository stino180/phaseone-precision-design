import { useState } from "react";

import workMozze from "@/assets/work-mozze.png";
import workZmove from "@/assets/work-zmove.png";
import workQuotient from "@/assets/work-quotient.png";
import workBitcoinClock from "@/assets/work-bitcoin-clock.png";
import workEols from "@/assets/work-eols.png";
import workStacq from "@/assets/work-stacq.png";

type Category = "all" | "websites" | "apps" | "video";
type Origin = "in-house" | "client";

type Project = {
  category: Exclude<Category, "all">;
  origin: Origin;
  title: string;
  description: string;
  image: string;
  url: string;
};

const projects: Project[] = [
  {
    category: "websites",
    origin: "in-house",
    title: "Mozze",
    description: "Music streaming platform using a currency called Notes for artist-fan transactions",
    image: workMozze,
    url: "https://mozze.xyz",
  },
  {
    category: "websites",
    origin: "in-house",
    title: "zMove",
    description: "Sports clip platform for posting, viewing, and livestreaming grassroots sports events",
    image: workZmove,
    url: "https://zmove.xyz",
  },
  {
    category: "apps",
    origin: "in-house",
    title: "DuoChart",
    description: "Chart-anything app that lets users compare and overlay any two assets together",
    image: workQuotient,
    url: "https://duochart.pages.dev/",
  },
  {
    category: "websites",
    origin: "in-house",
    title: "Bitcoin Clock",
    description: "Live dashboard of Bitcoin stats — halvings, ownership metrics, and network data",
    image: workBitcoinClock,
    url: "https://bitcoin-clock-95y.pages.dev/",
  },
  {
    category: "websites",
    origin: "client",
    title: "EOLS Inc.",
    description: "CDL training platform with live Zoom classes, practice tests, and study guides",
    image: workEols,
    url: "https://eolsinc.org",
  },
  {
    category: "apps",
    origin: "in-house",
    title: "Stacq",
    description: "Decentralized automated DCA app for scheduling buys into crypto and stocks",
    image: workStacq,
    url: "https://stacq.xyz",
  },
  // Commercial video work goes here. Personal / music reels belong on the hub site,
  // not in this portfolio — this grid is for work a client could buy.
  // Add entries as: { category: "video", origin: "client", title, description, image, url }
];

const allFilters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Websites", value: "websites" },
  { label: "Apps", value: "apps" },
  { label: "Video", value: "video" },
];

// Hide a discipline filter until there is at least one project in it.
const filters = allFilters.filter(
  (f) => f.value === "all" || projects.some((p) => p.category === f.value)
);

const originLabel: Record<Origin, string> = {
  "in-house": "In-House Product",
  client: "Client Work",
};

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
          <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed text-[15px]">
            We build and ship our own products alongside client engagements. The
            same team that carried these to production builds your project.
          </p>
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
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
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
                <span className="absolute top-3 left-3 px-2 py-1 bg-background/90 backdrop-blur-sm text-[10px] font-medium tracking-[0.15em] uppercase text-foreground">
                  {originLabel[project.origin]}
                </span>
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
