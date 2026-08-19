/**
 * Application configuration.
 */
const app = {
  name: "Omni Terminal",
  // Catalog symbol, mirrors the omni-api catalog SSOT (`products.ts` `icon`)
  icon: "⎉",
  tagline: "Your Aperture to the Universe",
  description:
    "A GPU-accelerated terminal emulator built in Rust, designed for developers who demand speed and extensibility.",
  keywords: [
    "terminal",
    "terminal emulator",
    "GPU",
    "rust",
    "developer tools",
    "devtools",
    "open source",
  ],
  organization: {
    name: "Omni",
    website: "https://omni.dev",
    url: "https://omni.dev",
  },
  links: {
    docs: "https://docs.omni.dev/products/omni-terminal",
    github: "https://github.com/omnidotdev/terminal",
    discord: "https://discord.gg/omnidotdev",
    threads: "https://www.threads.com/@omnidotdev",
    releases: "https://github.com/omnidotdev/terminal/releases",
    feedback: "https://backfeed.omni.dev/workspaces/omni/projects/terminal",
  },
  // Legal links mirror the omni-api catalog SSOT
  legal: {
    privacy: "https://omni.dev/legal/privacy",
    terms: "https://omni.dev/legal/terms",
    cookies: "https://omni.dev/legal/cookies",
  },
  install: {
    macos: "brew install --cask omnidotdev/tap/omni-terminal",
    windows: "winget install Omni.Terminal",
    arch: "yay -S omni-terminal-bin",
    cargo:
      "cargo install --git https://github.com/omnidotdev/terminal -p omni-terminal",
  },
};

export default app;
