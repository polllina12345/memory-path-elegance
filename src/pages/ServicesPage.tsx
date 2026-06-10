import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import Seo from "@/components/Seo";
import { SERVICES } from "@/data/services";

const ServicesPage = () => (
  <>
    <Seo
      title="Услуги · Последний Путь — похороны, эко-линия, цифровой мемориал"
      description="Полный спектр ритуальных услуг в Новосибирске: традиционные похороны, эко-линия, цифровой мемориал, VIP-персонализация, психологическая поддержка."
      path="/services"
    />
    <PageHero
      label="У С Л У Г И"
      title="Полный спектр<br/>ритуальных услуг"
      subtitle="Традиционные похороны, эко-линия, цифровой мемориал, VIP-персонализация и психологическая поддержка."
    />

    <section className="py-20 bg-surface">
      <div className="container mx-auto flex flex-col gap-4">
        {SERVICES.map((s) => (
          <div key={s.title} className="bg-card-custom border border-subtle rounded-lg p-7 flex flex-col md:flex-row items-start justify-between gap-8 hover:border-[hsla(33,35%,57%,0.5)] transition-colors">
            <div className="flex flex-1 relative pl-5">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-sm" style={{ background: s.color }} />
              <div>
                <span className="inline-block text-[10px] border px-2.5 py-0.5 rounded-xl mb-2 tracking-wider" style={{ color: s.color, borderColor: s.color + "44" }}>
                  {s.tag}
                </span>
                <h3 className="font-display text-[22px] text-ivory mb-2.5">{s.title}</h3>
                <p className="text-[13px] text-muted-custom leading-relaxed mb-3.5 max-w-xl">{s.desc}</p>
                <ul className="flex flex-wrap gap-1.5">
                  {s.incl.map((item) => (
                    <li key={item} className="text-[11px] text-bronze bg-[hsla(33,35%,57%,0.08)] border border-[hsla(33,35%,57%,0.2)] rounded-sm px-2.5 py-0.5">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3 flex-shrink-0">
              <p className="font-display text-[22px] text-bronze whitespace-nowrap">{s.price}</p>
              <Link to="/order" className="text-[12px] border border-bronze text-bronze px-4 py-1.5 rounded-sm hover:bg-[hsla(33,35%,57%,0.08)] transition-colors whitespace-nowrap">
                Заказать
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
    <CtaBanner title="Не нашли нужное?" subtitle="Свяжитесь с нами — подберём решение под вашу ситуацию." />
  </>
);

export default ServicesPage;
