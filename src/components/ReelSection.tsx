import { useState } from "react";
import { Play, X } from "lucide-react";

/** ▼ SWAP IN YOUR SHOWREEL: any YouTube or Vimeo *embed* URL. */
const REEL_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ";

/** ▼ EDIT YOUR VIDEOS HERE. `embed` is a YouTube/Vimeo embed URL; `thumbnail` is any image URL. */
const videos = [
  {
    title: "Spring Season Trailer",
    client: "Placeholder Theater Co.",
    description: "A 60-second trailer cut for web, Instagram, and lobby screens.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Festival Recap 2026",
    client: "Placeholder Arts Festival",
    description: "Two days of music and art, delivered as a 90-second recap.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Annual Gala Donor Film",
    client: "Placeholder Nonprofit",
    description: "A short story-driven piece that opened the evening's appeal.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const ReelSection = () => {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="reel" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="mb-12 md:mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Showreel</p>
          <div className="mt-4 w-12 h-px bg-primary" />
        </div>

        <div className="relative w-full aspect-video bg-foreground">
          <iframe
            src={REEL_URL}
            title="Inpoint Studio showreel"
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videos.map((v) => (
            <button key={v.title} onClick={() => setOpen(v.embed)} className="group text-left">
              <div className="relative aspect-video overflow-hidden bg-surface">
                <img src={v.thumbnail} alt={v.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 group-hover:bg-foreground/30 transition-colors">
                  <span className="h-14 w-14 rounded-full bg-background/90 flex items-center justify-center">
                    <Play size={20} className="text-foreground ml-0.5" />
                  </span>
                </div>
              </div>
              <p className="mt-4 text-xs tracking-[0.2em] uppercase text-muted-foreground">{v.client}</p>
              <h3 className="mt-1 text-lg font-semibold text-foreground tracking-tight">{v.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{v.description}</p>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] bg-foreground/90 flex items-center justify-center p-4" onClick={() => setOpen(null)}>
          <button className="absolute top-4 right-4 text-background" aria-label="Close video" onClick={() => setOpen(null)}>
            <X size={28} />
          </button>
          <div className="w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe src={`${open}?autoplay=1`} title="Video" className="w-full h-full" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
          </div>
        </div>
      )}
    </section>
  );
};

export default ReelSection;
