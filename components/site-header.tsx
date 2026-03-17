import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/articles", label: "Articles" },
  { href: "/genres", label: "Genres" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-canvas/80 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-6">
        <Link href="/" className="text-sm font-semibold tracking-[0.24em] text-text uppercase">
          MovieInfo
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted hover:text-text">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/works"
          className="rounded-full border border-white/10 px-4 py-2 text-sm text-text hover:border-white/20 hover:bg-white/[0.03]"
        >
          Browse Archive
        </Link>
      </div>
    </header>
  );
}
