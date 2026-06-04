import { useState } from "react";
import { Phone, FileText, Users, HeartHandshake } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const steps = [
  { icon: Phone, title: "Позвоните в скорую", desc: "Врач констатирует смерть и оформит медицинское заключение. Это обязательный первый шаг." },
  { icon: HeartHandshake, title: "Позвоните нам", desc: "Линия 24/7: +7 (800) 555-01-01. Расскажем, что делать дальше, бесплатно и без обязательств." },
  { icon: Users, title: "Менеджер приедет за 1 час", desc: "Возьмёт на себя транспортировку, документы, кладбище, церемонию. Вы можете быть рядом с близкими." },
  { icon: FileText, title: "Получите смету", desc: "Открытый расчёт без скрытых платежей. Решение остаётся за вами — давление исключено." },
];

const FirstHoursSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || phone.replace(/\D/g, "").length < 10) {
      toast({ title: "Заполните имя и телефон", description: "Перезвоним в течение 2 минут." });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setName(""); setPhone("");
      toast({ title: "Заявка принята", description: "Менеджер перезвонит в течение 2 минут." });
    }, 600);
  };

  return (
    <section className="py-20 bg-surface-alt border-y border-subtle">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          <div>
            <p className="text-[10px] tracking-[0.14em] text-bronze mb-3">Ч Т О &nbsp; Д Е Л А Т Ь &nbsp; С Е Й Ч А С</p>
            <h2 className="font-display text-[clamp(30px,3.6vw,44px)] text-ivory leading-tight mb-3">
              Если беда случилась в эту минуту
            </h2>
            <p className="text-[14px] text-muted-custom leading-relaxed max-w-xl mb-10">
              Не нужно искать инструкции и метаться по сайтам. Четыре простых шага — мы рядом на каждом.
            </p>
            <ol className="flex flex-col gap-4">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <li key={s.title} className="bg-card-custom border border-subtle rounded-lg card-lift p-5 flex gap-5 items-start">
                    <div className="flex-shrink-0 w-11 h-11 rounded-full border border-bronze flex items-center justify-center text-bronze font-display text-lg">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <Icon size={16} className="text-bronze" />
                        <p className="font-display text-lg text-ivory">{s.title}</p>
                      </div>
                      <p className="text-[13px] text-muted-custom leading-relaxed">{s.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          <aside className="lg:sticky lg:top-24 bg-card-custom border border-bronze rounded-lg p-7 shadow-[0_30px_60px_-30px_hsl(33_35%_57%/0.35)]">
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-bronze opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-bronze" />
              </span>
              <p className="text-[11px] tracking-wider text-bronze">МЕНЕДЖЕР НА СВЯЗИ · ОТВЕТ ЗА 2 МИНУТЫ</p>
            </div>
            <p className="font-display text-2xl text-ivory mb-2">Позвоним вам сами</p>
            <p className="text-[13px] text-muted-custom mb-6 leading-relaxed">
              Оставьте имя и телефон — наберём в течение 2 минут. Бесплатно, без давления.
            </p>
            <form onSubmit={submit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Как к вам обращаться"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="finp"
                aria-label="Имя"
              />
              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="finp"
                aria-label="Телефон"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-bronze text-primary-foreground text-sm font-medium py-3.5 rounded-sm hover:opacity-85 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50"
              >
                {loading ? "Отправка..." : "Перезвоните мне"}
              </button>
              <p className="text-[11px] text-muted-custom text-center mt-1">
                Нажимая кнопку, вы соглашаетесь на обработку данных. Звонок бесплатный.
              </p>
            </form>
            <div className="h-px bg-[hsla(33,35%,57%,0.28)] my-5" />
            <a href="tel:+78005550101" className="block text-center text-ivory hover:text-bronze transition-colors">
              <span className="block text-[11px] text-muted-custom mb-1">или наберите сами</span>
              <span className="font-display text-xl">+7 (800) 555-01-01</span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default FirstHoursSection;
