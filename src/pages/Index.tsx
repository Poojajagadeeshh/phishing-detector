import { PhishingDetector } from "@/components/PhishingDetector";
import { useLanguage } from "@/contexts/LanguageProvider";

const Index = () => {
  const { t } = useLanguage();
  return (
    <div className="container mx-auto px-4 py-6">
      <PhishingDetector />
      <footer className="mt-8 text-center text-sm text-muted-foreground">
        <p>{t("footer.p1")}</p>
        <p className="mt-3">
          <a href="/about" className="underline">{t("footer.cta")}</a>
        </p>
      </footer>
    </div>
  );
};

export default Index;
