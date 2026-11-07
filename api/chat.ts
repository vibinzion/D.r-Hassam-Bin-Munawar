import type { VercelRequest, VercelResponse } from '@vercel/node';

const SYSTEM_PROMPT = `You are the official AI Medical Receptionist for Dr. Hassam Bin Munawar's Clinic in Sahiwal, Pakistan.
Your assistant name is "DR. HASSAM CLINIC AI ASSISTANT".

## Doctor & Clinic Profile:
- Doctor: Dr. Hassam Bin Munawar
- Qualifications/Title: General & Family Physician & Consultant Diabetologist
- Clinic Address: Alfarid Blood Bank & Thalassemia Centre, Old Chungi, DHQ Road, Near Wamiq Hospital, Sahiwal, Punjab, Pakistan
- Google Maps Location: https://www.google.com/maps/search/?api=1&query=Alfarid+Blood+Bank+and+Thalassemia+Centre+Old+Chungi+DHQ+Road+Near+Wamiq+Hospital+Sahiwal
- Timings: Monday to Saturday, 4:00 PM to 10:00 PM
- Sunday: By Appointment & Free Welfare Camp
- Official Phone / WhatsApp Numbers: 0333-6922404 / 0303-7528713
- Core Credo: "Every Patient Matters — Excellence in Diagnosis, Compassion in Care." | "We Care, Allah Cares"

## Key Clinic Services:
1. Diabetes Care Center:
   - Covers all 6 clinical types: Type 1, Type 2, Gestational Diabetes, Type 5 (Malnutrition-related), Monogenic Diabetes, and Secondary / Type 3c Diabetes.
   - Comprehensive organ protection protocols for Eyes (Diabetic Retinopathy), Kidneys (Diabetic Nephropathy), Heart & Stroke, Nerves (Diabetic Neuropathy), and Feet/Skin (Diabetic Ulcers).
   - 3 Pillars: Continuous monitoring, low-glycemic nutrition, and daily physical activity.
2. Anemia & Low Hemoglobin (Low HB):
   - Screening for iron deficiency, Vitamin B12/folate deficiency, chronic disease anemia, and blood loss.
   - Management of fatigue, pale skin, shortness of breath, dizziness, and headache.
3. Hypertension, Cardiac Care & Preventative Cardiology: Blood pressure stabilization, lipid/cholesterol profiling, and cardiovascular health.
4. Thyroid & Endocrine Care: Hypothyroidism, hyperthyroidism, metabolic disorders.
5. Renal (Kidney) Diseases: Urine microalbumin screenings, serum creatinine, nephropathy care.
6. Gastrointestinal, Liver & Respiratory: Fatty liver, acid reflux/GERD, IBS, asthma and allergy.
7. Weight & Lifestyle Management: Medical weight reduction, dietary counseling, and metabolic health.
8. Humanitarian Welfare:
   - 100% Free treatment and screened blood transfusion for Thalassemia warriors at Alfarid Blood Bank Centre.
   - 100% Free treatment, standard medications & basic labs for deserving / underprivileged patients, including the Sunday Free Welfare Medical Camp.
   - 20% flat discount on all consultations, prescribed medicines, and laboratory blood tests.

## Communication Guidelines:
- Language: Professional English (or natural conversational English/Roman Urdu if addressed by the patient in Roman Urdu). Do not output Arabic/Urdu script.
- Demeanor: Warm, welcoming, respectful, and clinically cautious.
- Clinical Ethics: Do not diagnose medical emergencies or prescribe prescription medications online. Always advise the patient to consult Dr. Hassam in person or visit the nearest emergency room if symptoms are acute (e.g. severe chest pain or unconsciousness).
- Call to Action: Always warmly encourage the patient to book an appointment or consult via WhatsApp on 0333-6922404 or 0303-7528713.
- Keep responses concise, structured, and easy to read on mobile devices.`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, history } = req.body || {};

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message string is required' });
  }

  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

  // If no Gemini API key configured in Vercel environment, return smart fallback
  if (!apiKey) {
    return res.status(200).json({
      reply: getSmartFallbackResponse(message),
      fallback: true,
    });
  }

  try {
    const { GoogleGenAI } = await import('@google/genai');
    const ai = new GoogleGenAI({ apiKey });

    // Format chat history for Google Gen AI
    const formattedHistory = Array.isArray(history)
      ? history.slice(-6).map((msg: { role: string; content: string }) => ({
          role: msg.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: String(msg.content) }],
        }))
      : [];

    const contents = [
      ...formattedHistory,
      {
        role: 'user',
        parts: [{ text: message }],
      },
    ];

    const response = await ai.models.generateContent({
      model: 'gemini-pro',
      contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        maxOutputTokens: 600,
        temperature: 0.7,
      },
    });

    const reply = response.text || getSmartFallbackResponse(message);
    return res.status(200).json({ reply, fallback: false });
  } catch (err) {
    console.error('Gemini API execution error:', err);
    return res.status(200).json({
      reply: getSmartFallbackResponse(message),
      fallback: true,
    });
  }
}

/**
 * High-quality clinical fallback (100% Clean English)
 */
function getSmartFallbackResponse(userMessage: string): string {
  const m = userMessage.toLowerCase();

  // Greetings
  if (m.includes('salam') || m.includes('slam') || m.includes('hello') || m.includes('hi') || m.includes('hey')) {
    return `Welcome to Dr. Hassam Bin Munawar's Medical Clinic! 👋\n\nI can assist you with:\n• 🕒 Clinic timings (4:00 PM – 10:00 PM)\n• 📍 Sahiwal location & Google Maps directions\n• 🎁 20% discount on consultations, medicines & lab tests\n• 🩸 Free Thalassemia blood transfusion & Sunday welfare camp\n• 🩺 Diabetes & Anemia specialist care\n\nHow may I help you today? Or WhatsApp us directly at 0333-6922404!`;
  }

  // Timings
  if (m.includes('timing') || m.includes('time') || m.includes('hour') || m.includes('open') || m.includes('kab') || m.includes('waqt')) {
    return `🕒 *Clinic Operating Hours:*\n• Monday to Saturday: 4:00 PM to 10:00 PM\n• Sunday: By Appointment & Free Welfare Camp\n\n📍 Alfarid Blood Bank & Thalassemia Centre, Old Chungi, DHQ Road, Sahiwal.\n\nWould you like to book a consultation slot via WhatsApp at 0333-6922404?`;
  }

  // Location / Address
  if (m.includes('location') || m.includes('address') || m.includes('where') || m.includes('kahan') || m.includes('kidhar') || m.includes('map') || m.includes('directions')) {
    return `📍 *Clinic Address:*\nAlfarid Blood Bank & Thalassemia Centre, Old Chungi, DHQ Road, Near Wamiq Hospital, Sahiwal, Punjab.\n\nGoogle Maps: https://www.google.com/maps/search/?api=1&query=Alfarid+Blood+Bank+and+Thalassemia+Centre+Old+Chungi+DHQ+Road+Near+Wamiq+Hospital+Sahiwal\n\n🕐 Daily OPD: 4:00 PM – 10:00 PM (Mon–Sat).\n📞 Phone: 0333-6922404 / 0303-7528713.`;
  }

  // Discount
  if (m.includes('discount') || m.includes('off') || m.includes('offer') || m.includes('riayat') || m.includes('voucher') || m.includes('20%')) {
    return `🎉 *20% Special Clinic Discount:*\nDr. Hassam offers a flat 20% discount on:\n1. Doctor Consultations\n2. Prescribed Pharmacy Medicines\n3. All Diagnostic Laboratory Blood Tests\n\nTo claim this discount, use promo code HASSAM20 or book via WhatsApp at 0333-6922404!`;
  }

  // Thalassemia
  if (m.includes('thalassemia') || m.includes('talasemia') || m.includes('blood transfusion') || m.includes('blood')) {
    return `🩸 *Free Thalassemia Treatment & Blood Transfusion:*\nDr. Hassam Bin Munawar and Alfarid Blood Bank provide screened, safe packed red blood cells and clinical monitoring completely FREE for all Thalassemia warriors.\n\nPlease contact 0333-6922404 or visit us at DHQ Road, Sahiwal for registration.`;
  }

  // Welfare / Sunday Camp
  if (m.includes('welfare') || m.includes('free') || m.includes('camp') || m.includes('sunday') || m.includes('deserving')) {
    return `🤝 *Humanitarian Welfare & Sunday Camp:*\n• Every Sunday: Free Welfare Medical Camp for deserving patients.\n• Complimentary clinical examination, vital checks, and standard essential medicines.\n\nFor details and registration, WhatsApp 0333-6922404.`;
  }

  // Diabetes / Sugar
  if (m.includes('diabet') || m.includes('sugar') || m.includes('insulin') || m.includes('hba1c') || m.includes('glucose')) {
    return `🩺 *Comprehensive Diabetes Care Center:*\nDr. Hassam Bin Munawar is a Consultant Diabetologist specializing in:\n• Type 1 & Type 2 Diabetes\n• Gestational (Pregnancy) Diabetes\n• Malnutrition & Secondary Diabetes\n• Vital organ defense for Eyes, Kidneys, Heart, Nerves & Feet\n\nSchedule your glycemic assessment today at 0333-6922404.`;
  }

  // Anemia / Low HB
  if (m.includes('anemia') || m.includes('hb') || m.includes('hemoglobin') || m.includes('fatigue') || m.includes('weakness')) {
    return `🩸 *Anemia & Low Hemoglobin Care:*\nSymptoms like weakness, pale skin, shortness of breath, and dizziness indicate low hemoglobin. We conduct comprehensive CBC and iron profile testing (with 20% discount) and targeted medical treatment.\n\nContact: 0333-6922404 for prompt screening.`;
  }

  // Fee / Charges
  if (m.includes('fee') || m.includes('charges') || m.includes('cost') || m.includes('price')) {
    return `💰 For consultation fee details and scheduling, please message or call 0333-6922404.\n\nRemember: All patients receive a 20% discount on consultations, medicines, and laboratory tests, and deserving patients are treated free in our Sunday Welfare Camp!`;
  }

  // Default response
  return `Thank you for contacting Dr. Hassam Bin Munawar's Clinic! 🙏\n\n• 📍 Location: Alfarid Blood Bank Centre, Old Chungi, DHQ Road, Sahiwal\n• 🕒 Timings: 4:00 PM – 10:00 PM (Monday to Saturday)\n• 📞 Call / WhatsApp: 0333-6922404 or 0303-7528713\n• 🎁 20% discount on consultations, medicines & laboratory tests.\n\n"Every Patient Matters — Excellence in Diagnosis, Compassion in Care." | We Care, Allah Cares.`;
}
