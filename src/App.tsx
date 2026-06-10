import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import SocialButtons from "@/components/SocialButtons";
import MobileCallButton from "@/components/MobileCallButton";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import CatalogPage from "@/pages/CatalogPage";
import OrderPage from "@/pages/OrderPage";
import ContactsPage from "@/pages/ContactsPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pb-14 md:pb-0">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <SocialButtons />
          <MobileCallButton />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
