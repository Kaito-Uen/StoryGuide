import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getWorkBySlug } from "@/lib/site-data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    return { title: "Work Not Found" };
  }

  return {
    title: work.title,
    description: work.description
  };
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="section-space">
        <article className="shell reading-width space-y-8">
          <header className="space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] text-accent">{work.category}</p>
            <h1 className="text-4xl font-semibold sm:text-5xl">{work.title}</h1>
            <p className="text-sm uppercase tracking-[0.18em] text-muted">{work.genre} / {work.year}</p>
            <p className="text-base leading-8 text-muted">{work.description}</p>
          </header>
          <div className="space-y-5 rounded-3xl border border-line bg-surface/70 p-8">
            {work.body.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-muted">{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
