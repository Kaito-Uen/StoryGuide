export type Work = {
  slug: string;
  title: string;
  category: "Movie" | "Drama" | "Anime";
  genre: string;
  year: string;
  description: string;
  accent: string;
  body: string[];
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
  body: string[];
};

export const featuredWorks: Work[] = [
  {
    slug: "peaky-blinders",
    title: "Peaky Blinders",
    category: "Drama",
    genre: "Crime / Period Drama",
    year: "2013",
    description:
      "戦後バーミンガムを舞台に、シェルビー家の野心と崩壊を静かな緊張感で描くシリーズ。紹介、人物、背景考察まで横断して読める導線を用意。",
    accent: "from-[#7C8CFF]/20 to-transparent",
    body: [
      "Peaky Blinders は、犯罪ドラマとしての緊張感だけでなく、家族劇としてのほころびや政治との接続が魅力の作品です。",
      "詳細ページでは、作品概要、人物整理、シーズン別の流れ、関連記事へのリンクを束ねる想定です。"
    ]
  },
  {
    slug: "the-dark-knight",
    title: "The Dark Knight",
    category: "Movie",
    genre: "Thriller / Crime",
    year: "2008",
    description:
      "秩序と混沌のせめぎ合いを、キャラクターの思想と都市の空気から読み解くための作品紹介テンプレート例。",
    accent: "from-cyan-400/20 to-transparent",
    body: [
      "都市そのものをキャラクターとして読むとき、作品紹介ページは情報の多さよりも視線誘導のよさが重要になります。",
      "映画ページでは、あらすじ、主題、人物関係、関連記事を一貫したトーンで見せる設計を想定しています。"
    ]
  },
  {
    slug: "monster",
    title: "MONSTER",
    category: "Anime",
    genre: "Mystery / Suspense",
    year: "2004",
    description:
      "長編でも疲れず追えるよう、人物の変化と事件の連なりをやわらかい読み心地で整理する想定のサンプル。",
    accent: "from-violet-400/20 to-transparent",
    body: [
      "長編アニメは読むガイドの粒度が重要です。ネタバレを抑えた導入と、深読みのための別導線を分けると体験が安定します。",
      "この実装では、作品詳細ページへもそのまま広げられるよう共通パーツを再利用しています。"
    ]
  }
];

export const latestArticles: Article[] = [
  {
    slug: "power-map",
    title: "Peaky Blinders の勢力図をどう読むか",
    category: "Explained",
    excerpt:
      "家族、警察、政治勢力がどの地点で交差するのかを、物語の温度感を残したまま整理するための記事設計例。",
    readTime: "6 min",
    publishedAt: "2026.03.17",
    body: [
      "勢力図の記事は情報量が増えやすいため、本文幅と見出し階層を抑えるだけで読み心地が大きく変わります。",
      "一覧では短く、詳細では静かに深くというリズムを作るのが今回の設計方針です。"
    ]
  },
  {
    slug: "antihero-design",
    title: "アンチヒーロー作品を紹介するときの視線の置き方",
    category: "Editorial",
    excerpt:
      "善悪のラベルではなく、選択の積み重ねで人物を読む。紹介文と考察文の距離感を整えるUIサンプル。",
    readTime: "4 min",
    publishedAt: "2026.03.14",
    body: [
      "作品を断定しすぎず、読む余白を残す。そうした文体に合わせてUIも静かにしておく必要があります。",
      "カードと本文の落差を小さくすることで、一覧から詳細へ自然に入れるようにします。"
    ]
  },
  {
    slug: "slow-burn-thrillers",
    title: "スローバーン作品に向いた記事一覧レイアウト",
    category: "Guide",
    excerpt:
      "テンポの遅い作品こそ、一覧画面の可読性が重要になる。ノイズを抑えたカードUIの考え方をまとめた例。",
    readTime: "5 min",
    publishedAt: "2026.03.09",
    body: [
      "スローバーン作品は一覧の時点で雰囲気を壊さないことが大切です。派手なサムネイルよりも、タイポグラフィと余白で魅せる方が向いています。",
      "今回のカードUIはその前提で、ボーダーと背景差を主役にしています。"
    ]
  }
];

export const genres = [
  "Crime",
  "Drama",
  "Thriller",
  "Mystery",
  "Psychological",
  "Historical"
];

export const siteStats = [
  { label: "Featured Works", value: "12" },
  { label: "Explained Articles", value: "48" },
  { label: "Curated Genres", value: "16" }
];

export function getWorkBySlug(slug: string) {
  return featuredWorks.find((work) => work.slug === slug);
}

export function getArticleBySlug(slug: string) {
  return latestArticles.find((article) => article.slug === slug);
}