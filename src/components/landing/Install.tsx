import { Apple, Container, Terminal } from "lucide-react";

import app from "@/lib/config/app.config";

import type { ReactNode } from "react";

const platforms: {
  icon: ReactNode;
  name: string;
  method: string;
  command: string;
}[] = [
  {
    icon: <Terminal className="size-5" />,
    name: "Arch Linux",
    method: "AUR",
    command: app.install.arch,
  },
  {
    icon: <Apple className="size-5" />,
    name: "macOS",
    method: "Homebrew",
    command: app.install.macos,
  },
  {
    icon: <Container className="size-5" />,
    name: "Windows",
    method: "WinGet",
    command: app.install.windows,
  },
];

/**
 * Landing page installation section.
 */
const Install = () => (
  <section className="border-t px-6 py-20 md:py-28">
    <div className="mx-auto max-w-4xl">
      <div className="mb-12 text-center">
        <h2 className="mb-3 font-bold text-3xl tracking-tight md:text-4xl">
          Get started in seconds
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Install via your platform's package manager, download a binary from
          GitHub Releases, or build from source
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {platforms.map((platform) => (
          <div key={platform.name} className="rounded-lg border bg-card p-5">
            <div className="mb-3 flex items-center gap-2.5 text-foreground">
              {platform.icon}
              <span className="font-semibold">{platform.name}</span>
              <span className="text-muted-foreground text-xs">
                {platform.method}
              </span>
            </div>
            <code className="block overflow-x-auto rounded-md bg-muted px-3 py-2.5 font-mono text-xs leading-relaxed">
              {platform.command}
            </code>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-lg border bg-card p-5">
        <div className="mb-3 flex items-center gap-2.5 text-foreground">
          <Terminal className="size-5" />
          <span className="font-semibold">Build from source</span>
          <span className="text-muted-foreground text-xs">Cargo</span>
        </div>
        <code className="block overflow-x-auto rounded-md bg-muted px-3 py-2.5 font-mono text-xs leading-relaxed">
          {app.install.cargo}
        </code>
      </div>

      <p className="mt-6 text-center text-muted-foreground text-sm">
        Also available as{" "}
        <a
          href={app.links.releases}
          className="text-primary underline-offset-4 hover:underline"
        >
          Flatpak, .deb, and .msi packages
        </a>
      </p>
    </div>
  </section>
);

export default Install;
