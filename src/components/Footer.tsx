import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-deep border-t border-subtle">
    <div className="container mx-auto py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      <div>
        <p className="text-[11px] tracking-[0.14em] text-bronze mb-1.5">ПОСЛЕДНИЙ ПУТЬ</p>
        <p className="text-[12px] text-muted-custom mb-4">Ритуальное агентство нового поколения · Новосибирск</p>
        <p className="text-[13px] text-muted-custom leading-relaxed">
          Мы не продаём смерть.<br />Мы помогаем сохранить жизнь в памяти.
        </p>
      </div>
      <div>
        <p className="text-[10px] tracking-[0.12em] text-bronze mb-4">РАЗДЕЛЫ</p>
        {[
          { label: "Главная", path: "/" },
          { label: "Услуги", path: "/services" },
          { label: "Каталог", path: "/catalog" },
          { label: "Оформить заказ", path: "/order" },
          { label: "Контакты", path: "/contacts" },
        ].map((item) => (
          <Link key={item.path} to={item.path} className="block text-[13px] text-muted-custom mb-2.5 hover:text-ivory transition-colors">
            {item.label}
          </Link>
        ))}
      </div>
      <div>
        <p className="text-[10px] tracking-[0.12em] text-bronze mb-4">КОНТАКТЫ</p>
        <p className="font-display text-lg text-ivory">+7 (800) 555-01-01</p>
        <p className="text-[11px] text-muted-custom mt-1">Бесплатно, круглосуточно</p>
        <p className="font-display text-lg text-ivory mt-3">info@posledniy-put.ru</p>
        <p className="text-[11px] text-muted-custom mt-1">Советская, 5 · Новосибирск</p>
      </div>
    </div>
    <div className="border-t border-subtle py-5 text-center">
      <p className="text-[11px] text-muted-custom">© 2025 Последний Путь. Все права защищены.</p>
    </div>
  </footer>
);

export default Footer;
