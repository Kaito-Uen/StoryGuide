import Link from "next/link";
import type { Article } from "@/lib/site-data";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="fade-border panel p-6 transition-colors duration-300 hover:border-white/10">
      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted">
        <span>{article.category}</span>
        <span className="h-1 w-1 rounded-full bg-white/20" />
        <span>{article.publishedAt}</span>
        <span className="h-1 w-1 rounded-full bg-white/20" />
        <span>{article.readTime}</span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold leading-tight text-text">{article.title}</h3>
      <p className="mt-3 reading-width text-sm leading-7 text-muted">{article.excerpt}</p>
      <Link href={`/articles/${article.slug}`} className="mt-5 inline-flex text-sm text-text underline decoration-white/20 underline-offset-4 hover:decoration-white/40">
        記事を読む
      </Link>
    </article>
  );
}
