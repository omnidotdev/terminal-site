import { BookOpen, Download, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import app from "@/lib/config/app.config";

/**
 * Landing page hero section.
 */
const Hero = () => (
  <section className="flex flex-col items-center gap-8 px-6 pt-24 pb-20 text-center md:pt-32 md:pb-28">
    <div className="flex flex-col items-center gap-4">
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-16 text-foreground md:size-20"
        aria-hidden="true"
      >
        <circle
          cx="39"
          cy="50"
          r="20"
          stroke="currentColor"
          strokeWidth="4.5"
        />
        <polyline
          points="68,52 81,61 68,70"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-medium text-primary text-sm">
        Open Source &middot; Apache 2.0
      </span>

      <h1 className="max-w-3xl font-bold text-4xl tracking-tight md:text-6xl lg:text-7xl">
        {app.name}
      </h1>

      <p className="max-w-lg font-medium text-lg text-muted-foreground md:text-xl">
        {app.tagline}
      </p>

      <p className="max-w-2xl text-muted-foreground text-sm leading-relaxed md:text-base">
        {app.description}
      </p>
    </div>

    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button size="lg" asChild>
        <a href={app.links.releases} className="gap-2">
          <Download className="size-4" />
          Download
        </a>
      </Button>

      <Button variant="outline" size="lg" asChild>
        <a
          href={app.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="gap-2"
        >
          <Github className="size-4" />
          GitHub
        </a>
      </Button>

      <Button variant="ghost" size="lg" asChild>
        <a
          href={app.links.docs}
          target="_blank"
          rel="noopener noreferrer"
          className="gap-2"
        >
          <BookOpen className="size-4" />
          Docs
        </a>
      </Button>
    </div>
  </section>
);

export default Hero;
