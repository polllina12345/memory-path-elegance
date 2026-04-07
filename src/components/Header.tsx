import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Главная", path: "/" },
  { label: "Услуги", path: "/services" },
  { label: "Каталог", path: "/catalog" },
  { label: "Заказать", path: "/order" },
  { label: "Контакты", path: "/contacts" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-subtle" style={{ background: "rgba(19,17,16,0.95)", backdropFilter: "blur(12px)" }}>
        <div className="container mx-auto flex h-[68px] items-center gap-8">
          <Link to="/" className="flex-shrink-0 text-left">
            <span className="block text-[11px] tracking-[0.14em] text-bronze">ПОСЛЕДНИЙ ПУТЬ</span>
            <span className="block text-[10px] text-muted-custom mt-0.5">Ритуальное агентство · Новосибирск</span>
          </Link>
          <nav className="hidden md:flex gap-1 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[13px] px-3 py-1.5 rounded transition-colors ${
                  location.pathname === item.path ? "text-bronze" : "text-muted-custom hover:text-ivory"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/order"
            className="hidden md:block bg-bronze text-primary-foreground text-[13px] font-medium px-5 py-2.5 rounded-sm transition-opacity hover:opacity-85 flex-shrink-0"
          >
            Оставить заявку
          </Link>
          <button className="md:hidden text-ivory" onClick={() => setMobileOpen(true)}>
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-2" style={{ background: "rgba(19,17,16,0.98)" }}>
          <button className="absolute top-5 right-6 text-muted-custom" onClick={() => setMobileOpen(false)}>
            <X size={28} />
          </button>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`text-[22px] px-8 py-3 transition-colors ${
                location.pathname === item.path ? "text-bronze" : "text-muted-custom hover:text-bronze"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
