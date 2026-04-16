import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { ResourceCard } from "@/components/ResourceCard";
import { getCategory } from "@/data/resources";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.category;
    if (!c) return {};
    return {
      meta: [
        { title: `${c.title} — UNITE-LA Youth Hub` },
        { name: "description", content: c.blurb },
        { property: "og:title", content: `${c.title} — UNITE-LA Youth Hub` },
        { property: "og:description", content: c.blurb },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">Category not found</h1>
        <Link to="/" className="mt-6 inline-block text-primary hover:underline">
          ← Back to all resources
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">Something went wrong</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
        <Link to="/" className="mt-6 inline-block text-primary hover:underline">
          ← Back to all resources
        </Link>
      </div>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden gradient-soft">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All resources
          </Link>
          <div className="mt-4 flex items-center gap-4">
            <div className="grid h-16 w-16 place-items-center rounded-2xl gradient-hero text-4xl shadow-glow">
              <span aria-hidden>{category.emoji}</span>
            </div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                {category.title}
              </h1>
              <p className="mt-1 text-muted-foreground">{category.blurb}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <p className="mb-5 text-sm text-muted-foreground">
          {category.resources.length} resources · Tap a phone number to call.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {category.resources.map((r) => (
            <ResourceCard key={r.name} resource={r} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
