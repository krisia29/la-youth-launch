import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/data/resources";
import heroImg from "@/assets/hero-youth.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UNITE-LA Youth Hub — Free Resources for LA Youth Ages 16–24" },
      {
        name: "description",
        content:
          "Free and low-cost mental health, housing, food, jobs, legal, and tech resources for young Angelenos. Made by UNITE-LA.",
      },
      { property: "og:title", content: "UNITE-LA Youth Hub" },
      {
        property: "og:description",
        content: "Free resources for LA youth — mental health, housing, food, jobs, and more.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categories;
    return categories
      .map((c) => {
        const matchCat =
          c.title.toLowerCase().includes(q) || c.blurb.toLowerCase().includes(q);
        const matchedResources = c.resources.filter(
          (r) =>
            r.name.toLowerCase().includes(q) || r.description.toLowerCase().includes(q),
        );
        if (matchCat || matchedResources.length > 0) return c;
        return null;
      })
      .filter((c): c is (typeof categories)[number] => c !== null);
  }, [query]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/95 to-background" />

        <div className="mx-auto max-w-6xl px-4 pt-14 pb-20 sm:pt-20 sm:pb-28">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
              For LA Youth · Ages 16–24
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
              You've got this.
              <br />
              <span className="bg-gradient-to-r from-[oklch(0.65_0.24_15)] via-[oklch(0.62_0.24_340)] to-[oklch(0.58_0.24_290)] bg-clip-text text-transparent">
                Here's where to start.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-foreground/80 sm:text-lg">
              Free and low-cost help for your mental health, housing, food, school, jobs,
              tech, and more — all across LA County.
            </p>

            {/* SEARCH */}
            <div className="mt-7 flex items-center gap-2 rounded-full border border-border bg-card p-2 shadow-glow sm:max-w-md">
              <Search className="ml-3 h-5 w-5 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for housing, therapy, food…"
                className="min-h-[44px] flex-1 bg-transparent text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
                aria-label="Search resources"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            {query ? `Results for "${query}"` : "Browse by what you need"}
          </h2>
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-sm font-medium text-primary hover:underline"
            >
              Clear
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border bg-card p-10 text-center">
            <p className="text-foreground font-semibold">No matches yet.</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try a different word, or call <strong>211</strong> — they connect you to
              everything in LA County.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        )}

        {/* CRISIS BANNER */}
        <div className="mt-12 rounded-3xl gradient-ocean p-6 text-primary-foreground shadow-glow sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider opacity-90">
            Need help right now?
          </p>
          <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
            Call or text <span className="underline">988</span>
          </h3>
          <p className="mt-2 text-sm opacity-95 sm:text-base">
            Suicide & Crisis Lifeline · 24/7 · Free · Confidential
          </p>
          <a
            href="tel:988"
            className="mt-4 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-background px-5 py-2 font-semibold text-foreground transition-smooth hover:scale-[1.02]"
          >
            📞 Call 988 now
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
