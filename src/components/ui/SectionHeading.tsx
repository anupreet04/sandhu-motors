type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, align = "left", dark = false }: Props) {
  const isCenter = align === "center";
  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""} mb-12`}>
      {eyebrow && (
        <div className={`flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-[0.2em] ${dark ? "text-orange" : "text-orange-dark"} ${isCenter ? "justify-center" : ""}`}>
          <span className="h-px w-6 bg-orange" />
          {eyebrow}
        </div>
      )}
      <h2 className={`font-display font-black text-3xl sm:text-4xl leading-[1.05] text-balance ${dark ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${dark ? "text-white/70" : "text-steel"}`}>{description}</p>
      )}
    </div>
  );
}
