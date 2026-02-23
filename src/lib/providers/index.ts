import { createServerFn } from "@tanstack/react-start";

import { FLAGS_API_HOST, FLAGS_CLIENT_KEY } from "@/lib/config/env.config";

export const FLAGS = {
  MAINTENANCE: "terminal-site-maintenance",
} as const;

/**
 * Fetch the value of the maintenance mode feature flag.
 * Uses dynamic import to avoid crashing the server if the providers
 * package fails to load (its CJS build is incompatible with ESM).
 */
export const fetchMaintenanceMode = createServerFn({ method: "GET" }).handler(
  async () => {
    if (!FLAGS_API_HOST || !FLAGS_CLIENT_KEY) {
      return { isMaintenanceMode: false };
    }

    try {
      const { createFlagProvider } = await import("@omnidotdev/providers");

      const flags = createFlagProvider({
        provider: "unleash",
        url: FLAGS_API_HOST,
        apiKey: FLAGS_CLIENT_KEY,
        appName: "terminal-site",
      });

      const isMaintenanceMode = await flags.isEnabled(FLAGS.MAINTENANCE);

      return { isMaintenanceMode };
    } catch {
      return { isMaintenanceMode: false };
    }
  },
);
