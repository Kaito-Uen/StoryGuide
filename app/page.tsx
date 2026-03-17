import { ArticleCard } from "@/components/article-card";
import { GenrePill } from "@/components/genre-pill";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkCard } from "@/components/work-card";
import { featuredWorks, genres, latestArticles } from "@/lib/site-data";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(circle_at_top_right,rgba(124,140,255,0.16),transparent_32%)]" />
      <SiteHeader />
      <main>
        <HeroSection />

        <section className="section-space">
          <div className="shell">
            <SectionHeading
              eyebrow="Featured Works"
              title="作品紹介に向いたシャープなカードUI"
              description="タイトル、ジャンル、説明を余白で整理し、カードを並べても視線が散らからないように設計しています。"
            />
            <div className="grid gap-5 lg:grid-cols-3">
              {featuredWorks.map((work) => (
                <WorkCard key={work.slug} work={work} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-space border-y border-white/5 bg-surface/50">
          <div className="shell">
            <SectionHeading
              eyebrow="Latest Articles"
              title="読み疲れしにくい記事一覧"
              description="記事一覧はLPの飾りではなく、読む体験の入口です。縦方向のリズムを重視し、説明文も十分に置ける形にしています。"
            />
            <div className="grid gap-4">
              {latestArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Genres"
                title="Crime, Drama, Thriller から静かに探す"
                description="ジャンル導線は目立ちすぎず、でも探しやすく。アクセントカラーは一色に絞り、全体のトーンを崩さないようにしています。"
              />
              <ul className="flex flex-wrap gap-3">
                {genres.map((genre) => (
                  <GenrePill key={genre} label={genre} />
                ))}
              </ul>
            </div>
            <aside className="fade-border panel p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-accent">Reading First</p>
              <h3 className="mt-4 text-2xl font-semibold text-text">見た目は都会的、本文はやわらかく。</h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                本文の横幅を絞り、見出し階層を明確にし、カードUIでもノイズを抑える。レビュー、紹介、考察、人物紹介のどれにも転用しやすい基盤を想定しています。
              </p>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}