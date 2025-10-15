import { useLanguage } from "@/contexts/LanguageProvider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const LanguageSwitcher = () => {
  const { lang, setLang, t } = useLanguage();
  return (
    <div className="inline-flex items-center gap-2">
      <Select value={lang} onValueChange={(v: string) => setLang(v as any)}>
        <SelectTrigger className="w-[160px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">{t("lang.english")}</SelectItem>
          <SelectItem value="hi">{t("lang.hindi")}</SelectItem>
          <SelectItem value="kn">{t("lang.kannada")}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;


