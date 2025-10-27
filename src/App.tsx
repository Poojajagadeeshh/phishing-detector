import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Splash from "./pages/Splash";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <BrowserRouter>
            <header className="border-b border-blue-200/50 bg-white/80 backdrop-blur-sm shadow-sm">
              <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <BrandTitle />
                <LanguageSwitcher />
              </div>
            </header>
            <Routes>
              <Route path="/" element={<Splash />} />
              <Route path="/detect" element={<Index />} />
              <Route path="/about" element={<About />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

function BrandTitle() {
  const { t } = useLanguage();
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center shadow-lg">
          <i className="fas fa-eye text-white text-lg" />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
          <i className="fas fa-check text-white text-xs" />
        </div>
      </div>
      <div className="text-xl md:text-2xl font-[Poppins] font-bold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
        {t("brand.title")}
      </div>
    </div>
  );
}

export default App;
