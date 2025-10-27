import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageProvider";

const About = () => {
  const { t, ta } = useLanguage();
  const items = ta("about.aim.items");
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Hero Section with Gradient Background */}
      <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-12 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center">
          <div className="mb-8">
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center shadow-2xl animate-pulse">
                <i className="fas fa-eye text-white text-5xl" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center animate-bounce">
                <i className="fas fa-check text-white text-sm" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-5 h-5 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce delay-1000">
                <i className="fas fa-search text-white text-xs" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-[Playfair+Display] font-bold mb-4">
              {t("about.title")}
            </h1>
            <p className="text-xl md:text-2xl font-[Source+Sans+Pro] font-light opacity-90">
              Advanced AI-Powered Phishing Detection
            </p>
          </div>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-bounce delay-1000" />
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-2000" />
        <div className="absolute top-1/2 left-4 w-12 h-12 bg-white/10 rounded-full animate-bounce delay-3000" />
      </div>

      {/* Main Content Card */}
      <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-slate-50">
        <CardHeader className="pb-8">
          <CardTitle className="text-3xl md:text-4xl font-[Playfair+Display] font-bold text-center bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            {t("about.title")}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-8">
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
              <i className="fas fa-brain text-4xl text-emerald-600 mb-4" />
              <h3 className="text-lg font-[Poppins] font-semibold text-emerald-800 mb-2">AI-Powered</h3>
              <p className="text-sm text-emerald-700 font-[Source+Sans+Pro]">Advanced machine learning algorithms detect sophisticated phishing attempts</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200">
              <i className="fas fa-globe text-4xl text-amber-600 mb-4" />
              <h3 className="text-lg font-[Poppins] font-semibold text-amber-800 mb-2">Multilingual</h3>
              <p className="text-sm text-amber-700 font-[Source+Sans+Pro]">Supports English, Hindi, and Kannada for global accessibility</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-200">
              <i className="fas fa-bolt text-4xl text-rose-600 mb-4" />
              <h3 className="text-lg font-[Poppins] font-semibold text-rose-800 mb-2">Real-time</h3>
              <p className="text-sm text-rose-700 font-[Source+Sans+Pro]">Instant analysis and protection against emerging threats</p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6 text-lg font-[Source+Sans+Pro] leading-relaxed text-slate-700">
            <p className="text-xl font-medium text-slate-800">{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p className="bg-gradient-to-r from-orange-50 to-pink-50 p-6 rounded-xl border-l-4 border-orange-400">
              <i className="fas fa-exclamation-triangle text-orange-500 mr-2" />
              {t("about.p3")}
            </p>
          </div>

          {/* Aims Section */}
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 border border-violet-200">
            <h2 className="text-2xl font-[Playfair+Display] font-bold text-violet-800 mb-6 text-center">
              <i className="fas fa-target mr-3" />
              {t("about.aim")}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {items.map((it, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white/60 rounded-xl">
                  <i className="fas fa-check-circle text-violet-600 mt-1 flex-shrink-0" />
                  <span className="font-[Source+Sans+Pro] text-violet-800">{it}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;


