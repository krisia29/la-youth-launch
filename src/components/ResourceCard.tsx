import type { Resource } from "@/data/resources";
import { Phone, ExternalLink } from "lucide-react";

export function ResourceCard({ resource }: { resource: Resource }) {
  const telHref = resource.phone ? `tel:${resource.phone.replace(/[^\d+]/g, "")}` : undefined;

  return (
    <article className="rounded-3xl border border-border/60 bg-card p-5 shadow-card transition-smooth hover:shadow-glow">
      <h3 className="text-lg font-bold leading-tight text-foreground">{resource.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{resource.description}</p>
      {(telHref || resource.url) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {telHref && (
            <a
              href={telHref}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full gradient-hero px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:scale-[1.02]"
            >
              <Phone className="h-4 w-4" />
              {resource.phone}
            </a>
          )}
          {resource.url && (
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition-smooth hover:bg-secondary"
            >
              <ExternalLink className="h-4 w-4" />
              Visit website
            </a>
          )}
        </div>
      )}
    </article>
  );
}
