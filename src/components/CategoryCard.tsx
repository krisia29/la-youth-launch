import { Link } from "@tanstack/react-router";
import type { Category } from "@/data/resources";

const accentMap: Record<Category["accent"], string> = {
  coral: "from-[oklch(0.78_0.18_30)] to-[oklch(0.65_0.22_15)]",
  violet: "from-[oklch(0.7_0.2_310)] to-[oklch(0.55_0.24_290)]",
  teal: "from-[oklch(0.78_0.14_195)] to-[oklch(0.6_0.18_210)]",
  amber: "from-[oklch(0.85_0.16_80)] to-[oklch(0.72_0.2_55)]",
  rose: "from-[oklch(0.78_0.18_5)] to-[oklch(0.62_0.24_345)]",
  lime: "from-[oklch(0.83_0.17_140)] to-[oklch(0.68_0.18_165)]",
};

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to="/category/$slug"
      params={{ slug: category.slug }}
      className="group relative block overflow-hidden rounded-3xl bg-card p-5 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-glow"
    >
      <div
        className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${accentMap[category.accent]} opacity-80 blur-2xl transition-smooth group-hover:opacity-100 group-hover:scale-110`}
        aria-hidden
      />
      <div className="relative">
        <div
          className={`mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${accentMap[category.accent]} text-3xl shadow-soft`}
        >
          <span aria-hidden>{category.emoji}</span>
        </div>
        <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{category.blurb}</p>
        <p className="mt-3 text-xs font-semibold text-primary">
          {category.resources.length} resources →
        </p>
      </div>
    </Link>
  );
}
