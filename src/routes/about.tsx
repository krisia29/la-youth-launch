import { createFileRoute } from "@tanstack/react-router";
import { Mail, Heart } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — UNITE-LA Youth Hub" },
      {
        name: "description",
        content:
          "UNITE-LA empowers LA youth ages 16–24 by connecting them to resources and high-growth career opportunities.",
      },
      { property: "og:title", content: "About UNITE-LA Youth Hub" },
      {
        property: "og:description",
        content: "Empowering LA youth with resources and career pathways.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="gradient-soft">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-soft">
            <Heart className="h-3.5 w-3.5" /> Made with care for LA youth
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Built so you can find help — fast.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            UNITE-LA is a Los Angeles–based nonprofit that empowers young people ages
            16–24 by connecting them to tools, resources, and high-growth career
            opportunities.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            This hub turns our Wraparound Service Resource Guide into something you can
            actually use on your phone — search it, tap to call, and share it with a
            friend who needs it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
          <h2 className="text-2xl font-bold text-foreground">Get in touch</h2>
          <p className="mt-2 text-muted-foreground">
            Questions about a resource, or want to suggest something to add?
          </p>
          <a
            href="mailto:programs@unitela.com?subject=Resource%20Guide"
            className="mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-full gradient-hero px-5 py-2 font-semibold text-primary-foreground shadow-soft transition-smooth hover:scale-[1.02]"
          >
            <Mail className="h-4 w-4" /> programs@unitela.com
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            Last updated 1/23/2026 · Always reach out to organizations directly to confirm
            current services.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
