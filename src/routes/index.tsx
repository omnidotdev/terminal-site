import { createFileRoute } from "@tanstack/react-router";

import { ThemeToggle } from "@/components/core";
import { Features, Footer, Hero, Install } from "@/components/landing";
import app from "@/lib/config/app.config";

/**
 * Landing page for Omni Terminal.
 */
const LandingPage = () => (
  <div className="flex min-h-dvh flex-col">
    <header className="flex items-center justify-between px-6 py-4">
      <a href="/" className="font-semibold text-lg">
        {app.name}
      </a>

      <nav className="flex items-center gap-4">
        <a
          href={app.links.docs}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden text-muted-foreground text-sm transition-colors hover:text-foreground sm:block"
        >
          Docs
        </a>
        <a
          href={app.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden text-muted-foreground text-sm transition-colors hover:text-foreground sm:block"
        >
          GitHub
        </a>
        <ThemeToggle />
      </nav>
    </header>

    <main className="flex-1">
      <Hero />
      <Features />
      <Install />
    </main>

    <Footer />
  </div>
);

export const Route = createFileRoute("/")({
  component: LandingPage,
});

export default LandingPage;
