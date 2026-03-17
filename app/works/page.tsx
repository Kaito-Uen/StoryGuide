import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkCard } from "@/components/work-card";
import { featuredWorks } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Works",
  description: "MovieInfo の作品一覧ページ。映画・ドラマ・アニメをジャンル別に拡張しやすい構成です。"
};

export default function WorksPage() {
  return (
    <>
      <SiteHeader />
      <main className="section-space">
        <div className="shell">
          <SectionHeading
            eyebrow="Works"
            title="作品一覧"
            description="将来的にはカテゴリ別、ジャンル別、シリーズ別に絞り込みを追加できるよう、一覧UIもトップと同じトーンで統一しています。"
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {featuredWorks.map((work) => (
              <WorkCard key={work.slug} work={work} />
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
