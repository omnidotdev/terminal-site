import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

import type { NotFoundRouteProps } from "@tanstack/react-router";

/**
 * 404 not found.
 */
const NotFound = (_props: NotFoundRouteProps) => (
  <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 p-2">
    <div className="text-6xl">404</div>

    <div className="text-gray-600 dark:text-gray-400">
      <p>Page Not Found</p>
    </div>

    <p className="flex flex-wrap items-center gap-2">
      <Button onClick={() => window.history.back()}>Go back</Button>

      <Button variant="outline" asChild>
        <Link to="/">Go Home</Link>
      </Button>
    </p>
  </div>
);

export default NotFound;
