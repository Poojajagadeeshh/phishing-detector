import { createContext, useContext, useMemo, useState, ReactNode } from "react";

type LanguageCode = "en" | "hi" | "kn";

type Translations = Record<LanguageCode, Record<string, string | string[]>>;

const translations: Translations = {
  en: {
    "about.title": "About Phishing Detector",
    "about.p1":
      "Phishing Detector is a multilingual tool that helps you quickly assess whether links, messages, or prompts may be part of a phishing attempt.",
    "about.p2":
      "It analyzes your input against common phishing indicators—such as suspicious domains, deceptive wording, and urgency cues—and surfaces a simple risk signal.",
    "about.p3":
      "While this tool can help flag risks, it does not replace critical thinking or institutional security measures. Always verify sensitive requests and report suspected scams.",
    "about.aim": "Our Aim",
    "about.aim.items": [
      "Make phishing awareness simple and approachable for everyone.",
      "Support multiple languages to improve access and inclusion.",
      "Provide quick, privacy-conscious checks without friction.",
      "Encourage safer decisions with clear, practical guidance.",
    ],
    "footer.p1":
      "Phishing Detector helps you analyze links and messages for potential phishing risks.",
    "footer.cta": "Read about the project and our aim",
    "brand.title": "Phish Guard",
    "lang.english": "English",
    "lang.hindi": "Hindi",
    "lang.kannada": "Kannada",
  },
  hi: {
    "about.title": "फ़िशिंग डिटेक्टर के बारे में",
    "about.p1":
      "फ़िशिंग डिटेक्टर एक बहुभाषी टूल है जो लिंक, संदेश या अनुरोधों में फ़िशिंग के संकेतों का शीघ्र मूल्यांकन करने में मदद करता है।",
    "about.p2":
      "यह संदिग्ध डोमेन, भ्रामक शब्दावली और तात्कालिकता जैसे सामान्य फ़िशिंग संकेतकों के आधार पर जोखिम संकेत देता है।",
    "about.p3":
      "यह टूल जोखिमों को चिन्हित करने में मदद करता है, लेकिन विवेकपूर्ण निर्णय और संस्थागत सुरक्षा उपायों का स्थान नहीं ले सकता। संवेदनशील अनुरोधों की हमेशा पुष्टि करें और संदिग्ध घोटालों की रिपोर्ट करें।",
    "about.aim": "हमारा उद्देश्य",
    "about.aim.items": [
      "हर किसी के लिए फ़िशिंग जागरूकता को सरल और सहज बनाना।",
      "अधिक पहुंच और समावेशन के लिए कई भाषाओं का समर्थन।",
      "त्वरित, गोपनीयता-सचेत जाँच उपलब्ध कराना।",
      "स्पष्ट और व्यावहारिक मार्गदर्शन से सुरक्षित निर्णय प्रोत्साहित करना।",
    ],
    "footer.p1":
      "फ़िशिंग डिटेक्टर लिंक और संदेशों का विश्लेषण कर संभावित फ़िशिंग जोखिम दिखाता है।",
    "footer.cta": "प्रोजेक्ट और उद्देश्य के बारे में पढ़ें",
    "brand.title": "Phish Guard",
    "lang.english": "English",
    "lang.hindi": "हिन्दी",
    "lang.kannada": "ಕನ್ನಡ",
  },
  kn: {
    "about.title": "ಫಿಶಿಂಗ್ ಡಿಟೆಕ್ಟರ್ ಕುರಿತು",
    "about.p1":
      "ಫಿಶಿಂಗ್ ಡಿಟೆಕ್ಟರ್ ಬಹುಭಾಷಾ ಸಾಧನವಾಗಿದ್ದು, ಲಿಂಕ್‌ಗಳು ಮತ್ತು ಸಂದೇಶಗಳಲ್ಲಿ ಫಿಶಿಂಗ್ ಲಕ್ಷಣಗಳಿರಬಹುದೇ ಎಂದು ಶೀಘ್ರ ಮೌಲ್ಯಮಾಪನ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    "about.p2":
      "ಇದು ಸಂಶಯಾಸ್ಪದ ಡೊಮೇನ್‌, ಮೋಸಗಾರ ಪದಪ್ರಯೋಗ ಮತ್ತು ತುರ್ತುಭಾವನೆ ಸೇರಿದಂತೆ ಸಾಮಾನ್ಯ ಸೂಚಕಗಳ ಆಧಾರದ ಮೇಲೆ ಸರಳ ಅಪಾಯ ಸಂಕೇತವನ್ನು ತೋರಿಸುತ್ತದೆ.",
    "about.p3":
      "ಈ ಸಾಧನವು ಅಪಾಯಗಳನ್ನು ಸೂಚಿಸಬಹುದು, ಆದರೆ ವಿವೇಕಪೂರ್ಣ ನಿರ್ಧಾರ ಅಥವಾ ಸಂಸ್ಥೆಗಳ ಭದ್ರತಾ ಕ್ರಮಗಳನ್ನು ಬದಲಿಸುವುದಿಲ್ಲ. ಸಂವೇದನಶೀಲ ವಿನಂತಿಗಳನ್ನು ಸದಾ ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಅನುಮಾನಾಸ್ಪದ ಮೋಸಗಳನ್ನು ವರದಿ ಮಾಡಿ.",
    "about.aim": "ನಮ್ಮ ಉದ್ದೇಶ",
    "about.aim.items": [
      "ಎಲ್ಲರಿಗೂ ಫಿಶಿಂಗ್ ಜಾಗೃತಿ ಸುಲಭ ಮತ್ತು ಸ್ನೇಹಪರವಾಗಿರಲಿ.",
      "ಅಭಿಗಮ್ಯತೆ ಮತ್ತು ಒಳಗೊಳ್ಳುವಿಕೆಗೆ ಅನೇಕ ಭಾಷೆಗಳ ಬೆಂಬಲ.",
      "ವೇಗದ, ಗೌಪ್ಯತೆಯ ಅರಿವಿನ ಪರಿಶೀಲನೆಗಳನ್ನು ಒದಗಿಸುವುದು.",
      "ಸ್ಪಷ್ಟ ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ಮಾರ್ಗದರ್ಶನದಿಂದ ಸುರಕ್ಷಿತ ನಿರ್ಧಾರಗಳನ್ನು ಉತ್ತೇಜಿಸುವುದು.",
    ],
    "footer.p1":
      "ಫಿಶಿಂಗ್ ಡಿಟೆಕ್ಟರ್ ಲಿಂಕ್‌ಗಳು ಮತ್ತು ಸಂದೇಶಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ ಸಾಧ್ಯವಾದ ಅಪಾಯಗಳನ್ನು ತೋರಿಸುತ್ತದೆ.",
    "footer.cta": "ಯೋಜನೆ ಮತ್ತು ನಮ್ಮ ಉದ್ದೇಶ ಓದಿ",
    "brand.title": "Phish Guard",
    "lang.english": "English",
    "lang.hindi": "हिन्दी",
    "lang.kannada": "ಕನ್ನಡ",
  },
};

type LanguageContextValue = {
  lang: LanguageCode;
  setLang: (code: LanguageCode) => void;
  t: (key: string) => string;
  ta: (key: string) => string[];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LanguageCode>("en");

  const value = useMemo<LanguageContextValue>(() => {
    const t = (key: string) => {
      const v = translations[lang][key];
      return Array.isArray(v) ? "" : (v as string) ?? key;
    };
    const ta = (key: string) => {
      const v = translations[lang][key];
      return Array.isArray(v) ? (v as string[]) : [];
    };
    return { lang, setLang, t, ta };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}


