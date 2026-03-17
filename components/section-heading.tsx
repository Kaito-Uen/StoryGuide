type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
        <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      </div>
      <p className="reading-width text-sm leading-7 text-muted md:text-right">{description}</p>
    </div>
  );
}
