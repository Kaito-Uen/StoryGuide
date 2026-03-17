import Link from "next/link";
import type { Work } from "@/lib/site-data";

export function WorkCard({ work }: { work: Work }) {
  return (
    <article className="fade-border panel group overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className={`mb-6 rounded-2xl border border-white/5 bg-gradient-to-br ${work.accent} p-5`}>
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted">
          <span>{work.category}</span>
          <span>{work.year}</span>
        </div>
        <h3 className="mt-6 text-2xl font-semibold text-text">{work.title}</h3>
        <p className="mt-2 text-sm text-slate-300">{work.genre}</p>
      </div>
      <p className="text-sm leading-7 text-muted">{work.description}</p>
      <Link href={`/works/${work.slug}`} className="mt-5 inline-flex text-sm text-text underline decoration-white/20 underline-offset-4 hover:decoration-white/40">
        詳細を見る
      </Link>
    </article>
  );
}
