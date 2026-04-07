import { Link } from "react-router-dom";

interface CtaBannerProps {
  title: string;
  subtitle: string;
}

const CtaBanner = ({ title, subtitle }: CtaBannerProps) => (
  <section className="bg-card-custom border-y border-subtle py-14">
    <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <div>
        <h2 className="font-display text-2xl md:text-4xl text-ivory mb-2">{title}</h2>
        <p className="text-sm text-muted-custom">{subtitle}</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
        <Link to="/order" className="bg-bronze text-primary-foreground text-sm font-medium px-8 py-3.5 rounded-sm hover:opacity-85 transition-opacity text-center">
          Оставить заявку
        </Link>
        <a href="tel:+78005550101" className="inline-flex items-center justify-center border border-subtle text-ivory text-sm px-8 py-3.5 rounded-sm hover:border-bronze transition-colors">
          Позвонить
        </a>
      </div>
    </div>
  </section>
);

export default CtaBanner;
