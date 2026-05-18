import { Phone } from "lucide-react";

const MobileCallButton = () => {
  return (
    <a
      href="tel:+78005550101"
      className="fixed bottom-0 left-0 right-0 z-[90] bg-bronze text-primary-foreground flex items-center justify-center gap-2 py-3.5 text-sm font-medium md:hidden"
    >
      <Phone size={18} />
      Позвонить: +7 (800) 555-01-01
    </a>
  );
};

export default MobileCallButton;
