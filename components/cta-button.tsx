import type { ReactNode } from "react";
import Link from "next/link";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function CtaButton({ href, children, variant = "primary" }: CtaButtonProps) {
  const styles =
    variant === "primary"
      ? "border-white/10 bg-white/[0.04] text-text hover:border-white/20 hover:bg-white/[0.07]"
      : "border-line bg-transparent text-muted hover:border-white/20 hover:text-text";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-medium transition-all duration-200 ${styles}`}
    >
      {children}
    </Link>
  );
}
