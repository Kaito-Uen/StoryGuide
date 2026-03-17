import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { latestArticles } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Articles",
  description: "MovieInfo の解説記事一覧ページ。長文を前提にした読みやすいカードUIの例です。"
};

export default function ArticlesPage() {
  return (
    <>
      <SiteHeader />
      <main className="section-space">
        <div className="shell">
          <SectionHeading
            eyebrow="Articles"
            title="解説記事一覧"
            description="考察、人物分析、勢力図、時代背景など、物語理解を助ける記事群を縦に気持ちよく読める一覧へ。"
          />
          <div className="grid gap-4">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
