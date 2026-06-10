import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import Seo from "@/components/Seo";
import { CATALOG } from "@/data/catalog";
import { ChevronDown, ChevronUp } from "lucide-react";

const CatalogPage = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <Seo
        title="Каталог · Гробы, венки, памятники — Последний Путь, Новосибирск"
        description="Ассортимент ритуальных товаров с открытыми ценами: гробы, венки, кресты, памятники. Доставка по Новосибирску включена, оплата после услуги."
        path="/catalog"
      />
      <PageHero
        label="К А Т А Л О Г"
        title="Ассортимент<br/>и цены"
        subtitle="Все цены актуальны. Оплата после оказания услуги. Доставка по Новосибирску включена."
      />
      <section className="py-20 bg-surface">
        <div className="container mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {CATALOG.map((c) => (
              <button
                key={c.id}
                onClick={() => toggle(c.id)}
                className={`text-[13px] px-4 py-2 rounded-sm border transition-all ${
                  openId === c.id
                    ? "text-bronze border-bronze"
                    : "bg-card-custom text-muted-custom border-subtle hover:text-ivory hover:border-[hsla(33,35%,57%,0.5)]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-2">
            {CATALOG.map((c) => {
              const isOpen = openId === c.id;
              return (
                <div key={c.id} className={`border rounded-lg overflow-hidden transition-colors ${isOpen ? "border-[hsla(33,35%,57%,0.5)]" : "border-subtle"}`}>
                  <button
                    onClick={() => toggle(c.id)}
                    className="w-full bg-card-custom px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-[#2e2b28] transition-colors"
                  >
                    <div>
                      <span className="block font-display text-[22px] text-ivory mb-1">{c.label}</span>
                      <span className="text-xs text-muted-custom">{c.desc}</span>
                    </div>
                    <span className="text-bronze flex-shrink-0">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="bg-surface-alt border-t border-subtle overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr>
                            <th className="text-[10px] tracking-wider text-bronze text-left px-5 py-3 border-b border-subtle">Наименование</th>
                            <th className="text-[10px] tracking-wider text-bronze text-left px-5 py-3 border-b border-subtle">Материал</th>
                            <th className="text-[10px] tracking-wider text-bronze text-left px-5 py-3 border-b border-subtle">Цена</th>
                            <th className="px-5 py-3 border-b border-subtle"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {c.items.map((item) => (
                            <tr key={item.name} className="hover:bg-[hsla(33,35%,57%,0.04)]">
                              <td className="text-[13px] text-ivory px-5 py-3 border-b border-[hsla(33,35%,57%,0.07)]">{item.name}</td>
                              <td className="text-xs text-muted-custom px-5 py-3 border-b border-[hsla(33,35%,57%,0.07)]">{item.mat}</td>
                              <td className="text-bronze font-medium text-[13px] px-5 py-3 border-b border-[hsla(33,35%,57%,0.07)] whitespace-nowrap">{item.price}</td>
                              <td className="px-5 py-3 border-b border-[hsla(33,35%,57%,0.07)]">
                                <Link to="/order" className="text-[12px] border border-bronze text-bronze px-4 py-1.5 rounded-sm hover:bg-[hsla(33,35%,57%,0.08)] transition-colors whitespace-nowrap">
                                  Заказать
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <p className="text-[11px] text-[#5a5650] mt-6 leading-relaxed">* Цены ориентировочные. Точная стоимость уточняется при оформлении заказа.</p>
        </div>
      </section>
      <CtaBanner title="Нужна помощь с выбором?" subtitle="Позвоните — поможем подобрать и оформить заказ." />
    </>
  );
};

export default CatalogPage;
