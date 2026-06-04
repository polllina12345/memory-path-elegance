import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

interface Option {
  id: string;
  title: string;
  desc: string;
  price: number;
  required?: boolean;
}

const groups: { label: string; options: Option[] }[] = [
  {
    label: "Основное",
    options: [
      { id: "docs", title: "Оформление документов", desc: "Свидетельство о смерти, льготы, справки", price: 0, required: true },
      { id: "transport", title: "Транспорт ритуальный", desc: "Перевозка от места до прощальной", price: 6500 },
      { id: "place", title: "Место на кладбище", desc: "Согласование, оформление участка", price: 12000 },
    ],
  },
  {
    label: "Ритуальные товары",
    options: [
      { id: "coffin_basic", title: "Гроб классический", desc: "Дерево, обивка ткань", price: 14000 },
      { id: "coffin_premium", title: "Гроб премиум", desc: "Массив, лак, фурнитура", price: 38000 },
      { id: "wreath", title: "Венок и оформление", desc: "Живые цветы, ленты", price: 3500 },
    ],
  },
  {
    label: "Церемония",
    options: [
      { id: "host", title: "Ведущий церемонии", desc: "Авторский сценарий прощания", price: 9000 },
      { id: "music", title: "Живая музыка", desc: "Скрипка или фортепиано", price: 7000 },
      { id: "stream", title: "Онлайн-трансляция", desc: "HD-видео для близких в других городах", price: 4500 },
    ],
  },
  {
    label: "Память",
    options: [
      { id: "qr", title: "QR-мемориал на памятнике", desc: "Личная страница, фото, видео, истории", price: 5500 },
      { id: "psy", title: "Сопровождение психолога", desc: "До, во время и после прощания", price: 6000 },
      { id: "subscription", title: "Подписка «Память» (1 год)", desc: "Уход за местом, поддержка сайта памяти", price: 11880 },
    ],
  },
];

const allOptions = groups.flatMap((g) => g.options);

const CostCalculator = () => {
  const [selected, setSelected] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(allOptions.filter((o) => o.required).map((o) => [o.id, true]))
  );

  const toggle = (id: string, required?: boolean) => {
    if (required) return;
    setSelected((s) => ({ ...s, [id]: !s[id] }));
  };

  const { total, count } = useMemo(() => {
    let total = 0;
    let count = 0;
    allOptions.forEach((o) => {
      if (selected[o.id]) {
        total += o.price;
        count += 1;
      }
    });
    return { total, count };
  }, [selected]);

  const format = (n: number) => n.toLocaleString("ru-RU") + " ₽";

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto">
        <p className="text-[10px] tracking-[0.14em] text-bronze mb-3">К А Л Ь К У Л Я Т О Р</p>
        <h2 className="font-display text-[clamp(32px,4vw,48px)] text-ivory mb-3">Соберите свою смету</h2>
        <p className="text-[14px] text-muted-custom leading-relaxed max-w-xl mb-12">
          Открытая стоимость без скрытых платежей. Отметьте нужные услуги — итог пересчитается мгновенно.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
          <div className="flex flex-col gap-8">
            {groups.map((g) => (
              <div key={g.label}>
                <p className="text-[11px] tracking-[0.14em] text-bronze mb-4">{g.label.toUpperCase()}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {g.options.map((o) => {
                    const isOn = !!selected[o.id];
                    return (
                      <button
                        type="button"
                        key={o.id}
                        onClick={() => toggle(o.id, o.required)}
                        className={`text-left bg-card-custom border rounded-lg p-5 transition-all duration-300 ${
                          isOn ? "border-bronze shadow-[0_10px_30px_-18px_hsl(33_35%_57%/0.6)]" : "border-subtle hover:border-[hsla(33,35%,57%,0.55)]"
                        } ${o.required ? "cursor-default" : "cursor-pointer hover:-translate-y-0.5"}`}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-sm border flex items-center justify-center transition-colors ${
                              isOn ? "bg-bronze border-bronze" : "border-[hsla(33,35%,57%,0.4)]"
                            }`}
                          >
                            {isOn && <Check size={13} className="text-primary-foreground" strokeWidth={3} />}
                          </span>
                          <div className="flex-1">
                            <div className="flex items-baseline justify-between gap-3 mb-1">
                              <p className="text-[14px] text-ivory font-medium">{o.title}</p>
                              <p className="text-[13px] text-bronze whitespace-nowrap">
                                {o.price === 0 ? "бесплатно" : format(o.price)}
                              </p>
                            </div>
                            <p className="text-[12px] text-muted-custom leading-relaxed">{o.desc}</p>
                            {o.required && (
                              <p className="text-[10px] text-bronze mt-1.5 tracking-wider">ВКЛЮЧЕНО ВСЕГДА</p>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <aside className="lg:sticky lg:top-24 bg-card-custom border border-bronze rounded-lg p-7 shadow-[0_30px_60px_-30px_hsl(33_35%_57%/0.35)]">
            <p className="text-[11px] tracking-[0.14em] text-bronze mb-3">В А Ш А &nbsp; С М Е Т А</p>
            <p className="font-display text-5xl text-ivory mb-2 tabular-nums">{format(total)}</p>
            <p className="text-[12px] text-muted-custom mb-6">
              {count} {count === 1 ? "услуга" : count < 5 ? "услуги" : "услуг"} · доступна рассрочка 0% на 3–6 мес.
            </p>
            <div className="h-px bg-[hsla(33,35%,57%,0.28)] mb-5" />
            <ul className="flex flex-col gap-2 mb-6 max-h-48 overflow-y-auto pr-1">
              {allOptions
                .filter((o) => selected[o.id])
                .map((o) => (
                  <li key={o.id} className="flex justify-between text-[12px] text-muted-custom gap-3">
                    <span className="truncate">{o.title}</span>
                    <span className="text-ivory whitespace-nowrap tabular-nums">
                      {o.price === 0 ? "—" : format(o.price)}
                    </span>
                  </li>
                ))}
            </ul>
            <Link
              to="/order"
              className="block text-center bg-bronze text-primary-foreground text-sm font-medium py-3.5 rounded-sm hover:opacity-85 hover:-translate-y-0.5 transition-all duration-300"
            >
              Оформить со сметой
            </Link>
            <p className="text-[11px] text-muted-custom text-center mt-3">
              Финальная цена не вырастет — фиксируется в договоре.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;
