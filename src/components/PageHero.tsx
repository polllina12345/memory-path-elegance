interface PageHeroProps {
  label: string;
  title: string;
  subtitle: string;
}

const PageHero = ({ label, title, subtitle }: PageHeroProps) => (
  <section className="bg-surface-alt py-16 md:py-20 border-b border-subtle">
    <div className="container mx-auto">
      <p className="text-[10px] tracking-[0.14em] text-bronze mb-3">{label}</p>
      <h1 className="font-display text-4xl md:text-6xl text-ivory leading-tight mb-5" dangerouslySetInnerHTML={{ __html: title }} />
      <p className="text-[15px] text-muted-custom leading-relaxed max-w-xl">{subtitle}</p>
    </div>
  </section>
);

export default PageHero;
