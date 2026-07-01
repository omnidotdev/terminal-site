import { Github, MessageCircle } from "lucide-react";

import app from "@/lib/config/app.config";

/**
 * Landing page footer.
 */
const Footer = () => (
  <footer className="border-t px-6 py-10">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
      <div className="flex items-center gap-2 text-muted-foreground text-sm">
        <span>&copy; {new Date().getFullYear()}</span>
        <a
          href={app.organization.website}
          className="transition-colors hover:text-foreground"
        >
          {app.organization.name}
        </a>
      </div>

      <nav className="flex items-center gap-5">
        <a
          href={app.links.docs}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground text-sm transition-colors hover:text-foreground"
        >
          Docs
        </a>
        <a
          href={app.links.feedback}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground text-sm transition-colors hover:text-foreground"
        >
          Feedback
        </a>
        <a
          href={app.legal.privacy}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground text-sm transition-colors hover:text-foreground"
        >
          Privacy
        </a>
        <a
          href={app.legal.terms}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground text-sm transition-colors hover:text-foreground"
        >
          Terms
        </a>
        <a
          href={app.legal.cookies}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground text-sm transition-colors hover:text-foreground"
        >
          Cookies
        </a>
        <a
          href={app.links.discord}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Discord"
        >
          <MessageCircle className="size-4" />
        </a>
        <a
          href={app.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-foreground"
          aria-label="GitHub"
        >
          <Github className="size-4" />
        </a>
      </nav>
    </div>
  </footer>
);

export default Footer;
