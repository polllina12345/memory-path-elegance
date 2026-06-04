import { Check, Minus } from "lucide-react";

const rows: { label: string; basic: boolean | string; premium: boolean | string; sub: boolean | string }[] = [
  { label: "Транспорт и логистика", basic: true, premium: true, sub: false },
  { label: "Оформление документов", basic: true, premium: true, sub: false },
  { label: "Место захоронения", basic: true, premium: true, sub: false },
  { label: "Ритуальные товары", basic: "базовые", premium: "премиум", sub: false },
  { label: "Авторский сценарий и ведущий", basic: false, premium: true, sub: false },
  { label: "Цифровой мемориал (QR + сайт)", basic: false, premium: true, sub: true },
  { label: "Психологическое сопровождение", basic: false, premium: true, sub: false },
  { label: "Уход за местом захоронения", basic: false, premium: false, sub: true },
  { label: "Памятные мероприятия в годовщины", basic: false, premium: false, sub: true },
];

const Cell = ({ v }: { v: boolean | string }) => {
  if (v === true) return <Check size={18} className="text-bronze mx-auto" strokeWidth={2.5} />;
  if (v === false) return <Minus size={18} className="text-muted-custom/50 mx-auto" />;
  return <span className="text-[12px] text-ivory">{v}</span>;
};

const PackagesComparison = () => {
  return (
    <section className="pb-20 bg-surface-alt">
      <div className="container mx-auto">
        <div className="bg-card-custom border border-subtle rounded-lg overflow-hidden">
          <div className="px-7 py-5 border-b border-subtle">
            <p className="text-[10px] tracking-[0.14em] text-bronze mb-1.5">С Р А В Н Е Н И Е</p>
            <p className="font-display text-2xl text-ivory">Что входит в каждый пакет</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[560px]">
              <thead>
                <tr className="border-b border-subtle bg-[hsla(33,35%,57%,0.04)]">
                  <th className="px-7 py-4 text-[11px] tracking-wider text-muted-custom font-normal">УСЛУГА</th>
                  <th className="px-4 py-4 text-center">
                    <p className="font-display text-base text-ivory">Базовый</p>
                    <p className="text-[11px] text-bronze">от 35 000 ₽</p>
                  </th>
                  <th className="px-4 py-4 text-center bg-[hsla(33,35%,57%,0.07)]">
                    <p className="font-display text-base text-ivory">Премиум</p>
                    <p className="text-[11px] text-bronze">от 90 000 ₽</p>
                  </th>
                  <th className="px-4 py-4 text-center">
                    <p className="font-display text-base text-ivory">Память</p>
                    <p className="text-[11px] text-bronze">990 ₽/мес</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr
                    key={r.label}
                    className={`border-b border-subtle last:border-0 ${
                      i % 2 === 1 ? "bg-[hsla(33,35%,57%,0.02)]" : ""
                    }`}
                  >
                    <td className="px-7 py-4 text-[13px] text-ivory">{r.label}</td>
                    <td className="px-4 py-4 text-center"><Cell v={r.basic} /></td>
                    <td className="px-4 py-4 text-center bg-[hsla(33,35%,57%,0.05)]"><Cell v={r.premium} /></td>
                    <td className="px-4 py-4 text-center"><Cell v={r.sub} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-7 py-5 border-t border-subtle text-[12px] text-muted-custom">
            Премиум выгоднее на ≈18 000 ₽ против покупки услуг отдельно. Пакеты можно совмещать с подпиской «Память».
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesComparison;
