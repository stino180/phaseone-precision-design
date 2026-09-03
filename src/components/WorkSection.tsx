import { useState } from "react";

import { projects, type ProjectDiscipline } from "@/data/projects";

import workMozze from "@/assets/work-mozze.webp";
import workZmove from "@/assets/work-zmove.webp";
import workQuotient from "@/assets/work-quotient.webp";
import workBitcoinClock from "@/assets/work-bitcoin-clock.webp";
import workEols from "@/assets/work-eols.webp";
import workStacq from "@/assets/work-stacq.webp";

type Filter = "all" | ProjectDiscipline | "video";

/**
 * Screenshots are this site's own, so they're keyed by slug here rather than
 * carried in the shared catalogue. A project with no artwork still renders.
 */
const artwork: Record<string, string> = {
  mozze: workMozze,
  zmove: workZmove,
  duochart: workQuotient,
  "bitcoin-clock": workBitcoinClock,
  eols: workEols,
  stacq: workStacq,
};

const allFilters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Websites", value: "website" },
  { label: "Apps", value: "app" },
  { label: "Video", value: "video" },
];

// Hide a discipline filter until there is at least one project in it.
const filters = allFilters.filter(
  (f) => f.value === "all" || projects.some((p) => p.discipline === f.value)
);

const originLabel = {
  "in-house": "In-House Product",
  client: "Client Work",
} as const;

const disciplineLabel: Record<ProjectDiscipline, string> = {
  website: "Websites",
  app: "Apps",
};

const WorkSection = () => {
  const [active, setActive] = useState<Filter>("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.discipline === active);

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
              key={project.slug}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-background aspect-[4/3]">
                {artwork[project.slug] ? (
                  <img
                    src={artwork[project.slug]}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  /* No screenshot yet — a set plate beats an empty frame. */
                  <div className="w-full h-full flex flex-col items-center justify-center bg-surface border border-border">
                    <span className="text-2xl font-bold tracking-tight text-foreground">
                      {project.name}
                    </span>
                    <span className="mt-2 text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                      {disciplineLabel[project.discipline]}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                <span className="absolute top-3 left-3 px-2 py-1 bg-background/90 backdrop-blur-sm text-[10px] font-medium tracking-[0.15em] uppercase text-foreground">
                  {originLabel[project.origin]}
                </span>
              </div>
              <div className="mt-4">
                <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  {disciplineLabel[project.discipline]}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-foreground tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.blurb}
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
