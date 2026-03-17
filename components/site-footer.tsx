import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="shell flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-text">MovieInfo</p>
          <p className="max-w-md text-sm text-muted">
            映画・ドラマ・アニメの紹介と考察を、静かなダークトーンと読みやすい情報設計でまとめるためのフロントエンド実装サンプルです。
          </p>
        </div>
        <div className="space-y-3 text-sm text-muted md:text-right">
          <div className="flex gap-4 md:justify-end">
            <Link href="/works">Works</Link>
            <Link href="/articles">Articles</Link>
            <Link href="/genres">Genres</Link>
          </div>
          <p>c 2026 MovieInfo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
