import { PhishingDetector } from "@/components/PhishingDetector";
import { useLanguage } from "@/contexts/LanguageProvider";

const Index = () => {
  const { t } = useLanguage();
  return (
    <div className="container mx-auto px-4 py-6">
      <PhishingDetector />
      <footer className="mt-12 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/50">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="relative">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                <i className="fas fa-eye text-white text-xs" />
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full"></div>
            </div>
            <span className="text-sm font-medium text-slate-700">{t("footer.p1")}</span>
          </div>
          <a 
            href="/about" 
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            <i className="fas fa-info-circle" />
            {t("footer.cta")}
            <i className="fas fa-arrow-right text-xs" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
