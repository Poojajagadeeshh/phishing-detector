import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageProvider";

const About = () => {
  const { t, ta } = useLanguage();
  const items = ta("about.aim.items");
  return (
    <div className="container mx-auto px-4 py-10">
      <Card className="border-none shadow-lg">
        <CardHeader>
          <div className="overflow-hidden rounded-md border">
            <img
              src="/placeholder.svg"
              alt="About illustration"
              className="w-full h-40 md:h-56 object-cover"
            />
          </div>
          <CardTitle className="mt-4 text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {t("about.title")}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
          <div className="pt-2">
            <h2 className="text-lg font-semibold text-foreground">{t("about.aim")}</h2>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              {items.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;


