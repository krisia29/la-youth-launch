import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-foreground">
          <span className="grid h-9 w-9 place-items-center rounded-xl gradient-hero text-primary-foreground shadow-soft">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="text-base sm:text-lg">
            UNITE-LA <span className="text-muted-foreground font-medium">Youth Hub</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2 text-sm font-medium">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="rounded-full px-3 py-2 text-muted-foreground transition-smooth hover:text-foreground hover:bg-secondary"
            activeProps={{ className: "rounded-full px-3 py-2 text-foreground bg-secondary" }}
          >
            Resources
          </Link>
          <Link
            to="/about"
            className="rounded-full px-3 py-2 text-muted-foreground transition-smooth hover:text-foreground hover:bg-secondary"
            activeProps={{ className: "rounded-full px-3 py-2 text-foreground bg-secondary" }}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center text-sm text-muted-foreground">
        <p className="font-semibold text-foreground">UNITE-LA · Wraparound Resource Hub</p>
        <p className="mt-2">
          Questions? Email{" "}
          <a href="mailto:programs@unitela.com" className="text-primary font-medium hover:underline">
            programs@unitela.com
          </a>{" "}
          with subject "Resource Guide".
        </p>
        <p className="mt-3 text-xs">
          🚨 In a crisis? Call or text <strong>988</strong> for the Suicide & Crisis Lifeline (24/7, free).
        </p>
      </div>
    </footer>
  );
}
