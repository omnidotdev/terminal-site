import { NotFoundPage } from "@omnidotdev/thornberry/not-found";

import app from "@/lib/config/app.config";

/**
 * 404 not found. Renders the shared Omni `<NotFoundPage>` (in-shell,
 * theme-aware, prominent "404"), branded with Omni Terminal's wordmark; the
 * site brands by wordmark only. Home points at the site root.
 */
const NotFound = () => <NotFoundPage appName={app.name} />;

export default NotFound;
