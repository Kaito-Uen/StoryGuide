import Link from "next/link";

export default function NotFound() {
  return (
    <main className="shell flex min-h-screen flex-col items-start justify-center gap-6">
      <p className="text-xs uppercase tracking-[0.24em] text-accent">404</p>
      <h1 className="text-4xl font-semibold sm:text-5xl">ページが見つかりません。</h1>
      <p className="reading-width text-base leading-8 text-muted">
        URL が変更されたか、まだ公開されていないページです。トップか一覧ページから読み進めてください。
      </p>
      <div className="flex gap-3">
        <Link href="/" className="rounded-full border border-white/10 px-5 py-3 text-sm text-text hover:bg-white/[0.04]">
          トップへ戻る
        </Link>
        <Link href="/works" className="rounded-full border border-line px-5 py-3 text-sm text-muted hover:text-text">
          作品一覧へ
        </Link>
      </div>
    </main>
  );
}
