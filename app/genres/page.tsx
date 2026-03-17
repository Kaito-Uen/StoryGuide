import type { Metadata } from "next";
import { GenrePill } from "@/components/genre-pill";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { genres } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Genres",
  description: "MovieInfo のジャンル一覧ページ。Crime, Drama, Thriller など主要導線を整理しています。"
};

export default function GenresPage() {
  return (
    <>
      <SiteHeader />
      <main className="section-space">
        <div className="shell">
          <SectionHeading
            eyebrow="Genres"
            title="ジャンル一覧"
            description="作品数が増えたときも横断しやすいよう、ジャンル導線をシンプルなピルUIでまとめています。"
          />
          <ul className="flex flex-wrap gap-3">
            {genres.map((genre) => (
              <GenrePill key={genre} label={genre} />
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
