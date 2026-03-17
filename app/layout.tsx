import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://story-explained.com"),
  title: {
    default: "MovieInfo | 映画・ドラマの紹介と考察",
    template: "%s | MovieInfo"
  },
  description:
    "映画・ドラマ・アニメの紹介、あらすじ解説、登場人物、関連記事を静かで読みやすいUIで届ける MovieInfo。",
  openGraph: {
    title: "MovieInfo | 映画・ドラマの紹介と考察",
    description:
      "映画・ドラマ・アニメの紹介、あらすじ解説、登場人物、関連記事を静かで読みやすいUIで届ける MovieInfo。",
    url: "https://story-explained.com",
    siteName: "MovieInfo",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "MovieInfo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MovieInfo | 映画・ドラマの紹介と考察",
    description:
      "映画・ドラマ・アニメの紹介、あらすじ解説、登場人物、関連記事を静かで読みやすいUIで届ける MovieInfo。",
    images: ["/ogp.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="bg-canvas text-text">
      <body className={`${inter.variable} min-h-screen bg-canvas font-sans text-text antialiased`}>
        {children}
      </body>
    </html>
  );
}