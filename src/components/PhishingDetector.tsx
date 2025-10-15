import { useState } from "react";
import { Shield, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const translations = {
  en: {
    title: "Phishing Detector",
    subtitle: "Protect yourself from online scams and phishing attacks",
    inputPlaceholder: "Enter suspicious URL or message text here...",
    analyzeButton: "Analyze",
    analyzingButton: "Analyzing...",
    selectLanguage: "Select Language",
    riskLevels: {
      safe: "Safe",
      low: "Low Risk",
      medium: "Medium Risk",
      high: "High Risk"
    },
    confidence: "Confidence",
    indicators: "Detected Indicators",
    recommendation: "Recommendation"
  },
  hi: {
    title: "फ़िशिंग डिटेक्टर",
    subtitle: "ऑनलाइन घोटालों और फ़िशिंग हमलों से खुद को सुरक्षित रखें",
    inputPlaceholder: "संदिग्ध URL या संदेश यहाँ दर्ज करें...",
    analyzeButton: "विश्लेषण करें",
    analyzingButton: "विश्लेषण हो रहा है...",
    selectLanguage: "भाषा चुनें",
    riskLevels: {
      safe: "सुरक्षित",
      low: "कम जोखिम",
      medium: "मध्यम जोखिम",
      high: "उच्च जोखिम"
    },
    confidence: "विश्वास",
    indicators: "पता लगाए गए संकेतक",
    recommendation: "सिफारिश"
  },
  kn: {
    title: "ಫಿಶಿಂಗ್ ಡಿಟೆಕ್ಟರ್",
    subtitle: "ಆನ್‌ಲೈನ್ ಹಗರಣಗಳು ಮತ್ತು ಫಿಶಿಂಗ್ ದಾಳಿಗಳಿಂದ ನಿಮ್ಮನ್ನು ರಕ್ಷಿಸಿಕೊಳ್ಳಿ",
    inputPlaceholder: "ಅನುಮಾನಾಸ್ಪದ URL ಅಥವಾ ಸಂದೇಶವನ್ನು ಇಲ್ಲಿ ನಮೂದಿಸಿ...",
    analyzeButton: "ವಿಶ್ಲೇಷಿಸಿ",
    analyzingButton: "ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...",
    selectLanguage: "ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ",
    riskLevels: {
      safe: "ಸುರಕ್ಷಿತ",
      low: "ಕಡಿಮೆ ಅಪಾಯ",
      medium: "ಮಧ್ಯಮ ಅಪಾಯ",
      high: "ಹೆಚ್ಚಿನ ಅಪಾಯ"
    },
    confidence: "ವಿಶ್ವಾಸ",
    indicators: "ಪತ್ತೆಯಾದ ಸೂಚಕಗಳು",
    recommendation: "ಶಿಫಾರಸು"
  }
};

type Language = keyof typeof translations;
type RiskLevel = "safe" | "low" | "medium" | "high";

interface AnalysisResult {
  risk_level: RiskLevel;
  confidence: number;
  indicators: string[];
  recommendation: string;
}

const getRiskColor = (risk: RiskLevel) => {
  switch (risk) {
    case "safe": return "text-accent";
    case "low": return "text-warning";
    case "medium": return "text-warning";
    case "high": return "text-destructive";
    default: return "text-muted-foreground";
  }
};

const getRiskIcon = (risk: RiskLevel) => {
  switch (risk) {
    case "safe": return <CheckCircle className="w-8 h-8" />;
    case "low": return <AlertTriangle className="w-8 h-8" />;
    case "medium": return <AlertTriangle className="w-8 h-8" />;
    case "high": return <XCircle className="w-8 h-8" />;
    default: return <Shield className="w-8 h-8" />;
  }
};

const getRiskGradient = (risk: RiskLevel) => {
  switch (risk) {
    case "safe": return "bg-gradient-success";
    case "low": return "bg-gradient-warning";
    case "medium": return "bg-gradient-warning";
    case "high": return "bg-gradient-danger";
    default: return "bg-gradient-primary";
  }
};

export const PhishingDetector = () => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState<Language>("en");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const { toast } = useToast();

  const t = translations[language];

  const handleAnalyze = async () => {
    if (!text.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text to analyze",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke('detect-phishing', {
        body: { text, language }
      });

      if (error) {
        throw error;
      }

      setResult(data as AnalysisResult);
    } catch (error: any) {
      console.error('Analysis error:', error);
      toast({
        title: "Analysis Failed",
        description: error.message || "Failed to analyze the text. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary mb-6 shadow-lg">
            <Shield className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Main Card */}
        <Card className="p-8 shadow-xl border-2 animate-fade-in">
          <div className="space-y-6">
            {/* Language Selector */}
            <div className="flex justify-end">
              <Select value={language} onValueChange={(val) => setLanguage(val as Language)}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder={t.selectLanguage} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="hi">हिंदी (Hindi)</SelectItem>
                  <SelectItem value="kn">ಕನ್ನಡ (Kannada)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Input */}
            <div>
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={t.inputPlaceholder}
                className="min-h-32 text-base resize-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>

            {/* Analyze Button */}
            <Button
              onClick={handleAnalyze}
              disabled={isAnalyzing || !text.trim()}
              className="w-full h-12 text-lg font-semibold bg-gradient-primary hover:opacity-90 transition-all"
              size="lg"
            >
              <Shield className="w-5 h-5 mr-2" />
              {isAnalyzing ? t.analyzingButton : t.analyzeButton}
            </Button>

            {/* Results */}
            {result && (
              <div className="mt-8 space-y-6 animate-fade-in">
                {/* Risk Level Card */}
                <Card className={`p-6 ${getRiskGradient(result.risk_level)} text-white shadow-lg`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {getRiskIcon(result.risk_level)}
                      <div>
                        <h3 className="text-2xl font-bold">
                          {t.riskLevels[result.risk_level]}
                        </h3>
                        <p className="text-sm opacity-90">
                          {t.confidence}: {Math.round(result.confidence * 100)}%
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Indicators */}
                {result.indicators.length > 0 && (
                  <Card className="p-6 border-2">
                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-warning" />
                      {t.indicators}
                    </h4>
                    <ul className="space-y-2">
                      {result.indicators.map((indicator, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-warning mt-1">•</span>
                          <span className="text-sm text-foreground">{indicator}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}

                {/* Recommendation */}
                <Card className="p-6 border-2 bg-muted/50">
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    {t.recommendation}
                  </h4>
                  <p className="text-sm text-foreground leading-relaxed">
                    {result.recommendation}
                  </p>
                </Card>
              </div>
            )}
          </div>
        </Card>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>Powered by AI-based phishing detection</p>
        </div>
      </div>
    </div>
  );
};
