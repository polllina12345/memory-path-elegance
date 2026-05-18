import { Link } from "react-router-dom";
import { MapPin, Clock, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";

const ContactsPage = () => {
  const contacts = [
    { type: "ТЕЛЕФОН", value: "+7 (800) 555-01-01", note: "Бесплатный, круглосуточно", href: "tel:+78005550101" },
    { type: "WHATSAPP · TELEGRAM", value: "+7 (800) 555-01-02", note: "Ответим в течение 5 минут", href: "tel:+78005550102" },
    { type: "E-MAIL", value: "info@posledniy-put.ru", note: "Для нетерочных обращений", href: "mailto:info@posledniy-put.ru" },
    { type: "АДРЕС ОФИСА", value: "Советская, 5", note: "Новосибирск · м. Пл. Ленина · 9:00–21:00" },
  ];

  const partners = ["Нотариальная палата НСО", "Хосписы Новосибирска", "Психологические центры", "4 кладбища-партнёра"];

  return (
    <>
      <PageHero
        label="К О Н Т А К Т Ы"
        title="Мы рядом<br/>круглосуточно"
        subtitle="Звонки принимаются 24 часа в сутки, 7 дней в неделю. Офис работает с 9:00 до 21:00. Выезд менеджера — в течение 1 часа."
      />
      <section className="py-20 bg-surface">
        <div className="container mx-auto">
          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {contacts.map((c) => (
              <div key={c.type} className="bg-card-custom border border-subtle rounded-lg p-5">
                <p className="text-[10px] tracking-wider text-bronze">{c.type}</p>
                <div className="w-10 h-px bg-[hsla(33,35%,57%,0.28)] my-2" />
                {c.href ? (
                  <a href={c.href} className="block font-display text-lg text-ivory">{c.value}</a>
                ) : (
                  <p className="font-display text-lg text-ivory">{c.value}</p>
                )}
                <p className="text-[11px] text-muted-custom mt-1.5">{c.note}</p>
              </div>
            ))}
          </div>

          {/* Address card */}
          <div className="bg-card-custom border border-subtle rounded-lg p-7 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-bronze mt-0.5 shrink-0" />
                  <div>
                    <p className="font-display text-xl text-ivory">Новосибирск, Советская, 5</p>
                    <p className="text-xs text-muted-custom mt-0.5">метро Площадь Ленина</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-bronze mt-0.5 shrink-0" />
                  <div>
                    <p className="font-display text-xl text-ivory">Круглосуточно</p>
                    <p className="text-xs text-muted-custom mt-0.5">Приём заявок и вызовы 24/7</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-bronze mt-0.5 shrink-0" />
                  <div>
                    <p className="font-display text-xl text-ivory">+7 (800) 555-01-01</p>
                    <p className="text-xs text-muted-custom mt-0.5">Бесплатный звонок по России</p>
                  </div>
                </div>
              </div>
              <a
                href="https://yandex.ru/maps/-/CDExYRD~"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-bronze text-bronze text-[13px] px-6 py-2.5 rounded-sm hover:bg-[hsla(33,35%,57%,0.08)] transition-colors shrink-0"
              >
                <MapPin size={16} />
                Построить маршрут
              </a>
            </div>
          </div>

          {/* Partners */}
          <div className="my-8">
            <p className="text-[10px] tracking-[0.12em] text-bronze mb-4">П А Р Т Н Ё Р Ы</p>
            <div className="flex flex-wrap gap-2.5">
              {partners.map((p) => (
                <div key={p} className="bg-card-custom border border-subtle rounded-sm px-4 py-2 text-[13px] text-muted-custom">
                  {p}
                </div>
              ))}
            </div>
          </div>

          {/* Emergency */}
          <div className="bg-[rgba(34,16,16,1)] border border-[rgba(217,107,107,0.3)] rounded-lg px-6 py-4 text-center mb-8">
            <p className="text-xs text-destructive tracking-wider">⚠ ЭКСТРЕННАЯ ПОМОЩЬ · ВСЕГДА НА СВЯЗИ · +7 (800) 555-01-01</p>
          </div>

          <div className="text-center mt-10">
            <Link to="/order" className="bg-bronze text-primary-foreground text-sm font-medium px-8 py-3.5 rounded-sm hover:opacity-85 transition-opacity">
              Оставить заявку онлайн
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactsPage;
