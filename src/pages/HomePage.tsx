import { Link } from "react-router-dom";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Users, CalendarDays, Clock } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";

const HomePage = () => {
  const services = [
    { title: "Организация похорон", sub: "Полное сопровождение под ключ", price: "от 35 000 ₽" },
    { title: "Цифровой мемориал", sub: "QR-коды, сайт памяти, онлайн-трансляция", price: "в пакете" },
    { title: "Эко-линия", sub: "Биогробы, высадка деревьев, зелёная церемония", price: "от 35 000 ₽" },
    { title: "VIP-персонализация", sub: "Авторский сценарий, ведущий, уникальное прощание", price: "от 90 000 ₽" },
    { title: "Психологическая поддержка", sub: "Штатный психолог до, во время и после", price: "включено" },
    { title: "Документы", sub: "Свидетельство, льготы, справки", price: "бесплатно" },
  ];

  const whyUs = [
    { icon: "◎", title: "Цифровой мемориал", desc: "QR-коды на памятниках, персональные сайты памяти, онлайн-трансляции. Нет ни у одного агентства в НСО." },
    { icon: "◈", title: "Эко-линия", desc: "Первые в регионе: биоразлагаемые гробы, экологичные церемонии, высадка деревьев вместо памятников." },
    { icon: "◇", title: "Психолог в моменте", desc: "Штатный психолог помогает семье принимать решения и поддерживает во время и после прощания." },
    { icon: "◉", title: "Открытые цены", desc: "Честный прайс на сайте. Никаких скрытых доплат, «чёрных агентов» и навязанных услуг." },
  ];

  const reviews = [
    { text: "«Профессионально и с теплотой. Всё взяли на себя — нам не пришлось ни о чём думать в этот тяжёлый момент.»", author: "— Елена М., 2025" },
    { text: "«Очень внимательный персонал. Помогли оформить QR-мемориал, теперь все родственники могут зайти на страницу памяти.»", author: "— Андрей К., 2024" },
    { text: "«Спасибо за деликатное отношение. Психолог поддерживал нас всё время. Такого нигде больше не встретишь.»", author: "— Ирина С., 2025" },
  ];

  const audience = [
    { tag: "30–45 лет", title: "«Ответственный ребёнок»", desc: "Ищет современный удобный сервис: онлайн-трансляция, цифровые решения, дистанционное сопровождение. Ценит скорость и прозрачность." },
    { tag: "50+ лет", title: "«Растерянный супруг»", desc: "Нуждается в полной опеке: решение бюрократии, организация «под ключ», чуткая коммуникация. Главный страх — ошибиться. Мы берём всё на себя." },
    { tag: "20–35 лет", title: "«Креативные родственники»", desc: "Предпочитают персонализацию, эко-похороны и цифровую память. Ищут нестандартную церемонию как отражение жизни." },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-surface">
        <div className="absolute inset-0 hero-bg-pattern pointer-events-none" />
        <div className="relative container mx-auto py-20">
          <p className="text-[11px] tracking-[0.14em] text-bronze mb-6">Новосибирск · Советская, 5 · Звонки 24/7</p>
          <h1 className="font-display text-[clamp(42px,5.5vw,76px)] text-ivory leading-[1.08] mb-6">
            Мы не продаём смерть.<br />Мы помогаем сохранить<br />жизнь в памяти.
          </h1>
          <p className="text-base text-muted-custom leading-relaxed mb-10 max-w-xl">
            Сочетаем классический ритуал, event-менеджмент и психологическую поддержку — деликатно, профессионально, человечно.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <Link to="/order" className="bg-bronze text-primary-foreground text-sm font-medium px-8 py-3.5 rounded-sm hover:opacity-85 transition-opacity text-center">
              Оставить заявку
            </Link>
            <a href="tel:+78005550101" className="inline-flex items-center justify-center border border-subtle text-ivory text-sm px-8 py-3.5 rounded-sm hover:border-bronze transition-colors">
              +7 (800) 555-01-01
            </a>
          </div>
          <p className="text-[11px] text-muted-custom tracking-wider">Бесплатный звонок · Выезд менеджера за 1 час</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto">
          <p className="text-[10px] tracking-[0.14em] text-bronze mb-3">Н А Ш И &nbsp; У С Л У Г И</p>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] text-ivory mb-12">Комплексный подход к прощанию</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link to="/services" key={s.title} className="bg-card-custom border border-subtle rounded-lg p-6 pl-7 relative transition-colors border-subtle-hover cursor-pointer group">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-bronze rounded-l" />
                <p className="font-display text-xl text-ivory mb-2">{s.title}</p>
                <p className="text-xs text-muted-custom mb-4 leading-relaxed">{s.sub}</p>
                <p className="text-[13px] text-bronze">{s.price}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/catalog" className="border border-bronze text-bronze text-[13px] px-7 py-2.5 rounded-sm hover:bg-[hsla(33,35%,57%,0.08)] transition-colors">
              Смотреть каталог товаров →
            </Link>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-surface-alt">
        <div className="container mx-auto">
          <p className="text-[10px] tracking-[0.14em] text-bronze mb-3">П А К Е Т Ы</p>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] text-ivory mb-12">Выберите подходящий формат</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
            {/* Basic */}
            <div className="bg-card-custom border border-subtle rounded-lg p-7 flex flex-col gap-3">
              <p className="font-display text-2xl text-ivory">Базовый</p>
              <p className="text-xl text-bronze font-medium">от 35 000 ₽</p>
              <p className="text-xs text-muted-custom">Традиционные похороны</p>
              <div className="h-px bg-[hsla(33,35%,57%,0.28)]" />
              <ul className="flex flex-col gap-2 flex-1">
                {["Транспорт", "Документы", "Место захоронения", "Ритуальные товары", "Организация церемонии"].map((i) => (
                  <li key={i} className="text-[13px] text-muted-custom pl-3.5 relative before:content-['–'] before:absolute before:left-0 before:text-bronze">{i}</li>
                ))}
              </ul>
              <Link to="/order" className="block text-center border border-bronze text-bronze text-[13px] py-2.5 rounded-sm hover:bg-[hsla(33,35%,57%,0.08)] transition-colors w-full">
                Выбрать
              </Link>
            </div>
            {/* Premium */}
            <div className="bg-[#2a2520] border border-bronze rounded-lg p-7 flex flex-col gap-3 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-bronze text-primary-foreground text-[11px] font-medium px-3.5 py-0.5 rounded-xl whitespace-nowrap">
                Популярный
              </div>
              <p className="font-display text-2xl text-ivory">Премиум</p>
              <p className="text-xl text-bronze font-medium">от 90 000 ₽</p>
              <p className="text-xs text-muted-custom">Авторский сценарий + VIP</p>
              <div className="h-px bg-[hsla(33,35%,57%,0.28)]" />
              <ul className="flex flex-col gap-2 flex-1">
                {["Всё из базового", "Персональный сценарий", "Ведущий церемонии", "Цифровой мемориал", "Психолог сопровождения"].map((i) => (
                  <li key={i} className="text-[13px] text-muted-custom pl-3.5 relative before:content-['–'] before:absolute before:left-0 before:text-bronze">{i}</li>
                ))}
              </ul>
              <Link to="/order" className="block text-center border border-bronze text-bronze text-[13px] py-2.5 rounded-sm hover:bg-[hsla(33,35%,57%,0.08)] transition-colors w-full">
                Выбрать
              </Link>
            </div>
            {/* Subscription */}
            <div className="bg-card-custom border border-subtle rounded-lg p-7 flex flex-col gap-3">
              <p className="font-display text-2xl text-ivory">Подписка «Память»</p>
              <p className="text-xl text-bronze font-medium">990 ₽/мес</p>
              <p className="text-xs text-muted-custom">Долгосрочная забота</p>
              <div className="h-px bg-[hsla(33,35%,57%,0.28)]" />
              <ul className="flex flex-col gap-2 flex-1">
                {["Уход за местом захоронения", "Поддержка сайта памяти", "Обновления цифрового архива", "Памятные мероприятия"].map((i) => (
                  <li key={i} className="text-[13px] text-muted-custom pl-3.5 relative before:content-['–'] before:absolute before:left-0 before:text-bronze">{i}</li>
                ))}
              </ul>
              <Link to="/order" className="block text-center border border-bronze text-bronze text-[13px] py-2.5 rounded-sm hover:bg-[hsla(33,35%,57%,0.08)] transition-colors w-full">
                Выбрать
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto">
          <p className="text-[10px] tracking-[0.14em] text-bronze mb-3">П О Ч Е М У &nbsp; М Ы</p>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] text-ivory mb-12">Агентство нового поколения</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((w) => (
              <div key={w.title} className="bg-card-custom border border-subtle rounded-lg p-7">
                <span className="block text-2xl text-bronze mb-4">{w.icon}</span>
                <p className="font-display text-xl text-ivory mb-2.5">{w.title}</p>
                <p className="text-[13px] text-muted-custom leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 bg-surface-alt">
        <div className="container mx-auto">
          <p className="text-[10px] tracking-[0.14em] text-bronze mb-3">О &nbsp; Н А С</p>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] text-ivory mb-12">Люди, которым можно доверять</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            <div className="bg-card-custom border border-subtle rounded-lg p-7 text-center">
              <Users size={28} className="text-bronze mx-auto mb-4" />
              <p className="font-display text-3xl text-ivory mb-2">500+</p>
              <p className="text-[13px] text-muted-custom">семей, которым мы помогли</p>
            </div>
            <div className="bg-card-custom border border-subtle rounded-lg p-7 text-center">
              <CalendarDays size={28} className="text-bronze mx-auto mb-4" />
              <p className="font-display text-3xl text-ivory mb-2">5 лет</p>
              <p className="text-[13px] text-muted-custom">на рынке Новосибирска</p>
            </div>
            <div className="bg-card-custom border border-subtle rounded-lg p-7 text-center">
              <Clock size={28} className="text-bronze mx-auto mb-4" />
              <p className="font-display text-3xl text-ivory mb-2">24/7</p>
              <p className="text-[13px] text-muted-custom">поддержка без выходных</p>
            </div>
          </div>
          <div className="bg-card-custom border border-subtle rounded-lg p-7">
            <p className="font-display text-xl text-ivory mb-3">Наша миссия</p>
            <p className="text-[13px] text-muted-custom leading-relaxed max-w-3xl">
              Мы верим, что прощание — это не конец, а возможность сохранить память о близком человеке достойно и красиво.
              Наша команда объединяет опыт ритуальных традиций с заботой о каждой детали: от оформления документов
              до создания персонального цифрового мемориала. Мы рядом в самый трудный момент, чтобы вы могли сосредоточиться
              на главном — на памяти о человеке, которого любите.
            </p>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-20 bg-surface-alt">
        <div className="container mx-auto">
          <p className="text-[10px] tracking-[0.14em] text-bronze mb-3">Э М П А Т И Я</p>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] text-ivory mb-12">Мы понимаем, кто к нам приходит</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {audience.map((a) => (
              <div key={a.title} className="bg-card-custom border border-subtle rounded-lg p-6">
                <span className="inline-block text-[10px] text-bronze border border-[hsla(33,35%,57%,0.3)] px-2.5 py-0.5 rounded-xl mb-3 tracking-wider">{a.tag}</span>
                <p className="font-display text-xl text-ivory mb-2.5">{a.title}</p>
                <p className="text-[13px] text-muted-custom leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto">
          <p className="text-[10px] tracking-[0.14em] text-bronze mb-3">О Т З Ы В Ы</p>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] text-ivory mb-12">Нам доверяют</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="bg-card-custom border border-subtle rounded-lg p-6 pl-7 relative">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-bronze rounded-l" />
                <p className="font-display text-base text-ivory leading-relaxed mb-3">{r.text}</p>
                <p className="text-[11px] text-muted-custom">{r.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Нужна помощь прямо сейчас?" subtitle="Выезд менеджера за 1 час. Звоним первыми — приедем и возьмём всё на себя." />
    </>
  );
};

export default HomePage;
