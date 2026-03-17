type GenrePillProps = {
  label: string;
};

export function GenrePill({ label }: GenrePillProps) {
  return (
    <li className="rounded-full border border-line bg-surface/70 px-4 py-2 text-sm text-muted transition-colors duration-200 hover:border-white/15 hover:text-text">
      {label}
    </li>
  );
}
