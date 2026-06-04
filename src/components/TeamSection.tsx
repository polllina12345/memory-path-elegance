const team = [
  { initials: "АМ", name: "Анна Маркова", role: "Старший менеджер церемоний", years: "8 лет в профессии" },
  { initials: "ИП", name: "Игорь Петров", role: "Координатор и логист", years: "6 лет в профессии" },
  { initials: "СВ", name: "Светлана Власова", role: "Штатный психолог", years: "Кандидат психол. наук" },
  { initials: "ДК", name: "Дмитрий Костин", role: "Цифровой мемориал, IT", years: "QR, сайты памяти" },
];

const TeamSection = () => (
  <section className="py-20 bg-surface">
    <div className="container mx-auto">
      <p className="text-[10px] tracking-[0.14em] text-bronze mb-3">К О М А Н Д А</p>
      <h2 className="font-display text-[clamp(32px,4vw,48px)] text-ivory mb-3">Лица, а не «агенты»</h2>
      <p className="text-[14px] text-muted-custom max-w-xl mb-12 leading-relaxed">
        У нас нет посредников и «чёрных» обзвонщиков. С вами работают конкретные люди — каждый отвечает за свою часть.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {team.map((m) => (
          <div key={m.name} className="bg-card-custom border border-subtle rounded-lg card-lift p-7 text-center">
            <div className="w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center font-display text-2xl text-bronze border border-bronze bg-[hsla(33,35%,57%,0.06)]">
              {m.initials}
            </div>
            <p className="font-display text-lg text-ivory mb-1">{m.name}</p>
            <p className="text-[12px] text-bronze mb-2">{m.role}</p>
            <p className="text-[12px] text-muted-custom">{m.years}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
