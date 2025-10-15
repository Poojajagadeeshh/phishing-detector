/// <reference types="https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts" />

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const translations = {
  en: {
    systemPrompt: `You are a cybersecurity expert specializing in phishing detection. Analyze the provided text or URL for phishing indicators.

Consider these factors:
- Suspicious URLs (misspellings, unusual domains, IP addresses)
- Urgent or threatening language
- Requests for personal/financial information
- Grammar and spelling errors
- Suspicious links or attachments
- Impersonation of legitimate organizations
- Too-good-to-be-true offers

Respond with a JSON object containing:
- risk_level: "safe", "low", "medium", or "high"
- confidence: number between 0 and 1
- indicators: array of specific phishing indicators found
- recommendation: brief advice for the user`,
  },
  hi: {
    systemPrompt: `आप फ़िशिंग का पता लगाने में विशेषज्ञता रखने वाले साइबर सुरक्षा विशेषज्ञ हैं। प्रदान किए गए टेक्स्ट या URL का फ़िशिंग संकेतकों के लिए विश्लेषण करें।

इन कारकों पर विचार करें:
- संदिग्ध URLs (गलत वर्तनी, असामान्य डोमेन, IP पते)
- तत्काल या धमकी भरी भाषा
- व्यक्तिगत/वित्तीय जानकारी के लिए अनुरोध
- व्याकरण और वर्तनी की त्रुटियां
- संदिग्ध लिंक या अटैचमेंट
- वैध संगठनों का प्रतिरूपण
- बहुत अच्छे लगने वाले ऑफर

एक JSON ऑब्जेक्ट के साथ जवाब दें जिसमें शामिल हो:
- risk_level: "safe", "low", "medium", या "high"
- confidence: 0 और 1 के बीच संख्या
- indicators: पाए गए विशिष्ट फ़िशिंग संकेतकों की सरणी
- recommendation: उपयोगकर्ता के लिए संक्षिप्त सलाह`,
  },
  kn: {
    systemPrompt: `ನೀವು ಫಿಶಿಂಗ್ ಪತ್ತೆಹಚ್ಚುವಲ್ಲಿ ಪರಿಣತಿ ಹೊಂದಿರುವ ಸೈಬರ್ ಭದ್ರತಾ ತಜ್ಞರು. ಒದಗಿಸಿದ ಪಠ್ಯ ಅಥವಾ URL ಅನ್ನು ಫಿಶಿಂಗ್ ಸೂಚಕಗಳಿಗಾಗಿ ವಿಶ್ಲೇಷಿಸಿ.

ಈ ಅಂಶಗಳನ್ನು ಪರಿಗಣಿಸಿ:
- ಅನುಮಾನಾಸ್ಪದ URL ಗಳು (ತಪ್ಪು ಕಾಗುಣಿತ, ಅಸಾಮಾನ್ಯ ಡೊಮೇನ್‌ಗಳು, IP ವಿಳಾಸಗಳು)
- ತುರ್ತು ಅಥವಾ ಬೆದರಿಕೆಯ ಭಾಷೆ
- ವೈಯಕ್ತಿಕ/ಆರ್ಥಿಕ ಮಾಹಿತಿಗಾಗಿ ವಿನಂತಿಗಳು
- ವ್ಯಾಕರಣ ಮತ್ತು ಕಾಗುಣಿತ ದೋಷಗಳು
- ಅನುಮಾನಾಸ್ಪದ ಲಿಂಕ್‌ಗಳು ಅಥವಾ ಲಗತ್ತುಗಳು
- ನ್ಯಾಯಸಮ್ಮತ ಸಂಸ್ಥೆಗಳ ಸೋಗು
- ತುಂಬಾ ಉತ್ತಮವಾದ ಕೊಡುಗೆಗಳು

JSON ವಸ್ತುವಿನೊಂದಿಗೆ ಪ್ರತಿಕ್ರಿಯಿಸಿ:
- risk_level: "safe", "low", "medium", ಅಥವಾ "high"
- confidence: 0 ಮತ್ತು 1 ರ ನಡುವಿನ ಸಂಖ್ಯೆ
- indicators: ಕಂಡುಬಂದ ನಿರ್ದಿಷ್ಟ ಫಿಶಿಂಗ್ ಸೂಚಕಗಳ ಶ್ರೇಣಿ
- recommendation: ಬಳಕೆದಾರರಿಗೆ ಸಂಕ್ಷಿಪ್ತ ಸಲಹೆ`,
  },
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { text, language = 'en' } = await req.json();
    
    if (!text || text.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: 'Text is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      console.error('LOVABLE_API_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'AI service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const systemPrompt = translations[language as keyof typeof translations]?.systemPrompt || translations.en.systemPrompt;

    console.log('Analyzing text for phishing:', text.substring(0, 100));

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Analyze this for phishing: ${text}` }
        ],
        tools: [{
          type: 'function',
          function: {
            name: 'phishing_analysis',
            description: 'Return phishing analysis results',
            parameters: {
              type: 'object',
              properties: {
                risk_level: {
                  type: 'string',
                  enum: ['safe', 'low', 'medium', 'high']
                },
                confidence: {
                  type: 'number',
                  minimum: 0,
                  maximum: 1
                },
                indicators: {
                  type: 'array',
                  items: { type: 'string' }
                },
                recommendation: {
                  type: 'string'
                }
              },
              required: ['risk_level', 'confidence', 'indicators', 'recommendation'],
              additionalProperties: false
            }
          }
        }],
        tool_choice: { type: 'function', function: { name: 'phishing_analysis' } }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI credits exhausted. Please add credits to continue.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: 'AI analysis failed' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    console.log('AI response received:', JSON.stringify(data).substring(0, 200));
    
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) {
      console.error('No tool call in response');
      return new Response(
        JSON.stringify({ error: 'Invalid AI response format' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const result = JSON.parse(toolCall.function.arguments);
    
    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in detect-phishing function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
