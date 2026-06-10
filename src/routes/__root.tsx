import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouteContext,
} from "@tanstack/react-router";

import { DefaultCatchBoundary, NotFound } from "@/components/layout";
import { Toaster } from "@/components/ui/sonner";
import app from "@/lib/config/app.config";
import { fetchMaintenanceMode } from "@/lib/providers";
import appCss from "@/lib/styles/globals.css?url";
import createMetaTags from "@/lib/util/createMetaTags";
import ThemeProvider from "@/providers/ThemeProvider";
import { getTheme } from "@/server/functions/theme";

import type { QueryClient } from "@tanstack/react-query";
import type { ReactNode } from "react";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
  isMaintenanceMode: boolean;
}>()({
  beforeLoad: async () => {
    try {
      const { isMaintenanceMode } = await fetchMaintenanceMode();

      return { isMaintenanceMode };
    } catch {
      // Graceful degradation: if flags service is unavailable, disable maintenance mode
      return { isMaintenanceMode: false };
    }
  },
  loader: () => getTheme(),
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "apple-mobile-web-app-title",
        content: app.name,
      },
      ...createMetaTags(),
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      { rel: "stylesheet", href: appCss },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      // .ico fallback for surfaces that don't read SVG favicons (link previews, iMessage)
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: NotFound,
  component: RootComponent,
});

function MaintenancePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-900 to-slate-900 p-8 text-white">
      <div className="text-center">
        <h1 className="mb-4 font-bold text-4xl">Under Maintenance</h1>
        <p className="max-w-md text-indigo-200 text-lg">
          We're making improvements. Omni Terminal will be back shortly.
        </p>
      </div>
    </div>
  );
}

function RootComponent() {
  const { isMaintenanceMode } = useRouteContext({ from: "__root__" });

  // Show maintenance page when flag is enabled
  if (isMaintenanceMode) {
    return (
      <RootDocument>
        <MaintenancePage />
      </RootDocument>
    );
  }

  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  const theme = Route.useLoaderData();

  return (
    <html lang="en" className={theme}>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          {children}

          <Toaster position="top-center" richColors />
        </ThemeProvider>

        <Scripts />
      </body>
    </html>
  );
}
