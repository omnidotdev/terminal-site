import {
  Cpu,
  Globe,
  Image,
  Palette,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";

import type { ReactNode } from "react";

const features: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <Cpu className="size-5" />,
    title: "GPU-Accelerated",
    description:
      "Powered by WebGPU via the Sugarloaf rendering engine for blazing-fast, hardware-accelerated terminal output",
  },
  {
    icon: <ShieldCheck className="size-5" />,
    title: "Built with Rust",
    description:
      "Memory-safe, zero-cost abstractions, and native performance without compromise",
  },
  {
    icon: <Globe className="size-5" />,
    title: "Runs Everywhere",
    description:
      "Native builds for macOS, Linux, and Windows, plus WebAssembly for the browser and a native Android app",
  },
  {
    icon: <Image className="size-5" />,
    title: "Rich Graphics",
    description:
      "Sixel and iTerm2 image protocols, hyperlinks, and font ligatures with Nerd Font fallback",
  },
  {
    icon: <Sparkles className="size-5" />,
    title: "Custom Shaders",
    description:
      "Apply RetroArch-compatible shaders for CRT effects, bloom, and other visual customizations",
  },
  {
    icon: <Terminal className="size-5" />,
    title: "Modern Protocols",
    description:
      "Kitty keyboard protocol, bracketed paste, SGR mouse reporting, and vi mode for keyboard-driven navigation",
  },
  {
    icon: <RefreshCw className="size-5" />,
    title: "Live Config Reload",
    description:
      "TOML-based configuration that applies changes instantly without restarting the terminal",
  },
  {
    icon: <Palette className="size-5" />,
    title: "Adaptive Themes",
    description:
      "Themes that respond to your environment with wide color gamut support and runtime opacity controls",
  },
];

/**
 * Landing page features grid.
 */
const Features = () => (
  <section className="border-t bg-muted/30 px-6 py-20 md:py-28">
    <div className="mx-auto max-w-6xl">
      <div className="mb-12 text-center">
        <h2 className="mb-3 font-bold text-3xl tracking-tight md:text-4xl">
          Built for speed, designed for developers
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Every detail is engineered for performance and ergonomics, from the
          GPU-accelerated renderer to the zero-config defaults
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-lg border bg-card p-6 transition-colors hover:border-primary/30"
          >
            <div className="mb-3 flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
              {feature.icon}
            </div>
            <h3 className="mb-1.5 font-semibold">{feature.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
