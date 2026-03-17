import Image from "next/image";
import { CtaButton } from "@/components/cta-button";
import { siteStats } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section className="section-space pt-14 sm:pt-20">
      <div className="shell grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_440px] lg:items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.26em] text-accent">Curated Story Guide</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              クールに見せて、
              <br className="hidden sm:block" />
              読み心地はやさしく整える。
            </h1>
            <p className="reading-width text-base leading-8 text-muted sm:text-lg">
              映画やドラマの作品紹介、あらすじ解説、登場人物、関連記事まで。Linear のような都市的な静けさと、Notion のような読みやすさを両立した MovieInfo のトップ体験です。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CtaButton href="/works">注目作品を見る</CtaButton>
            <CtaButton href="/articles" variant="secondary">
              解説記事を読む
            </CtaButton>
          </div>
          <ul className="grid gap-3 sm:grid-cols-3">
            {siteStats.map((stat) => (
              <li key={stat.label} className="rounded-2xl border border-white/5 bg-surface/80 px-5 py-4">
                <p className="text-2xl font-semibold text-text">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">{stat.label}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="fade-border panel overflow-hidden p-3 shadow-soft">
          <div className="relative h-[440px] overflow-hidden rounded-[28px] border border-white/5 bg-[#0f141d]">
            <Image
              src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80"
              alt="映画館のスクリーンを思わせる抽象的なビジュアル"
              fill
              className="object-cover opacity-55"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-[#0b0d10]/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-accent">Featured Atmosphere</p>
              <h2 className="mt-3 text-3xl font-semibold text-text">Night screen, quiet tension, clean reading flow.</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                重たすぎないダークトーンと、本文に入った瞬間に疲れない余白設計。トップ画面自体が作品世界の温度を伝えるように構成しています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}