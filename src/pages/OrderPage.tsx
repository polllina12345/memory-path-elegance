import { useState } from "react";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";

const OrderPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: "", phone: "", service: "", comment: "", urgent: false });

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Введите имя";
    if (!form.phone.trim()) errs.phone = "Введите телефон";
    else if (!/^[\d\s+\-()]{7,}$/.test(form.phone)) errs.phone = "Некорректный номер";
    if (!form.service) errs.service = "Выберите услугу";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };

  return (
    <>
      <Seo
        title="Оформить заявку · Последний Путь — перезвоним за 15 минут"
        description="Оставьте заявку — наш менеджер перезвонит в течение 15 минут. Круглосуточная поддержка, бесплатная консультация по организации похорон в Новосибирске."
        path="/order"
      />
      <PageHero
        label="З А Я В К А"
        title="Оформить заявку"
        subtitle="Заполните форму — мы перезвоним в течение 15 минут. Круглосуточно."
      />
      <section className="py-20 bg-surface">
        <div className="container mx-auto">
          {submitted ? (
            <div className="text-center py-16">
              <p className="text-5xl mb-5">✓</p>
              <h2 className="font-display text-4xl text-ivory mb-3">Заявка отправлена</h2>
              <p className="text-[15px] text-muted-custom leading-relaxed">Мы перезвоним в течение 15 минут.<br />Если вопрос срочный — звоните +7 (800) 555-01-01</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <Field label="Имя" error={errors.name}>
                  <input
                    className={`finp ${errors.name ? "!border-destructive" : ""}`}
                    placeholder="Как к вам обращаться"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </Field>
                <Field label="Телефон" error={errors.phone}>
                  <input
                    className={`finp ${errors.phone ? "!border-destructive" : ""}`}
                    placeholder="+7 (___) ___-__-__"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </Field>
                <Field label="Услуга" error={errors.service}>
                  <select
                    className={`finp ${errors.service ? "!border-destructive" : ""}`}
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="">Выберите услугу</option>
                    <option>Организация похорон (Базовый)</option>
                    <option>Организация похорон (Премиум)</option>
                    <option>Кремация</option>
                    <option>Цифровой мемориал</option>
                    <option>Эко-похороны</option>
                    <option>Памятник / надгробие</option>
                    <option>Подписка «Память»</option>
                    <option>Другое</option>
                  </select>
                </Field>
                <Field label="Комментарий">
                  <textarea
                    className="finp min-h-[100px] resize-y"
                    placeholder="Дополнительная информация, пожелания..."
                    rows={4}
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  />
                </Field>
                <label className="flex items-center gap-2.5 text-[13px] text-muted-custom cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-[hsl(33,35%,57%)]"
                    checked={form.urgent}
                    onChange={(e) => setForm({ ...form, urgent: e.target.checked })}
                  />
                  Срочная заявка — нужна помощь прямо сейчас
                </label>
                <button type="submit" className="bg-bronze text-primary-foreground text-sm font-medium w-full py-4 rounded-sm hover:opacity-85 transition-opacity">
                  Отправить заявку
                </button>
                <p className="text-[11px] text-[#5a5650] text-center leading-relaxed">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                </p>
              </form>

              {/* Sidebar */}
              <div className="flex flex-col gap-4">
                <div className="bg-card-custom border border-subtle rounded-lg p-5">
                  <p className="text-[11px] tracking-wider text-bronze mb-2">РАБОТАЕМ КРУГЛОСУТОЧНО</p>
                  <a href="tel:+78005550101" className="block font-display text-2xl text-ivory mb-1">+7 (800) 555-01-01</a>
                  <p className="text-[11px] text-muted-custom">Бесплатный звонок по России</p>
                </div>
                <div className="bg-card-custom border border-subtle rounded-lg p-5">
                  <p className="text-[11px] tracking-wider text-bronze mb-2">WHATSAPP · TELEGRAM</p>
                  <a href="tel:+78005550102" className="block font-display text-2xl text-ivory mb-1">+7 (800) 555-01-02</a>
                  <p className="text-[11px] text-muted-custom">Ответим в течение 5 минут</p>
                </div>
                <div className="bg-card-custom border border-subtle rounded-lg p-5">
                  <p className="text-[11px] tracking-wider text-bronze mb-4">КАК ЭТО РАБОТАЕТ</p>
                  {["Вы оставляете заявку", "Мы перезваниваем за 15 минут", "Согласовываем детали", "Выезжаем и берём всё на себя"].map((step, i) => (
                    <div key={i} className="flex items-center gap-3.5 mb-3 last:mb-0">
                      <span className="w-[26px] h-[26px] bg-[hsla(33,35%,57%,0.12)] border border-[hsla(33,35%,57%,0.3)] rounded-full flex items-center justify-center text-[11px] text-bronze flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-[13px] text-muted-custom">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs text-muted-custom tracking-wider">{label}</label>
    {children}
    {error && <p className="text-[11px] text-destructive">{error}</p>}
  </div>
);

export default OrderPage;
