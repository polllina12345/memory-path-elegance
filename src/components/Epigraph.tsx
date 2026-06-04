interface EpigraphProps {
  text: string;
  author?: string;
}

const Epigraph = ({ text, author }: EpigraphProps) => (
  <section className="py-24 bg-surface-alt">
    <div className="container mx-auto max-w-3xl text-center">
      <span className="block font-display text-bronze text-6xl leading-none mb-4 select-none">“</span>
      <p className="font-display italic text-ivory text-[clamp(22px,2.6vw,34px)] leading-snug mb-6">
        {text}
      </p>
      {author && <p className="text-[12px] tracking-[0.18em] text-bronze uppercase">{author}</p>}
    </div>
  </section>
);

export default Epigraph;
