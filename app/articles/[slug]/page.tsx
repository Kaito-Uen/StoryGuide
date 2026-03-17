import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getArticleBySlug } from "@/lib/site-data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.title,
    description: article.excerpt
  };
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="section-space">
        <article className="shell reading-width space-y-8">
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted">
              <span>{article.category}</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>{article.publishedAt}</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>{article.readTime}</span>
            </div>
            <h1 className="text-4xl font-semibold sm:text-5xl">{article.title}</h1>
            <p className="text-base leading-8 text-muted">{article.excerpt}</p>
          </header>
          <div className="space-y-5 rounded-3xl border border-line bg-surface/70 p-8">
            {article.body.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-muted">{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
