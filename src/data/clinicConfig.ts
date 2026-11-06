// ============================================================
// DR. HASSAM BIN MUNAWAR — CLINIC CONFIGURATION
// ============================================================
// Modify this file to customize all client details.
// Toggle DEMO_MODE before/after selling the website.
// ============================================================

export const clinicConfig = {
  // ── Demo Mode ──────────────────────────────────────────────
  DEMO_MODE: true,

  // ── Doctor Details ─────────────────────────────────────────
  DOCTOR_NAME: "Dr. Hassam Bin Munawar",
  DOCTOR_TITLE: "General & Family Physician & Consultant Diabetologist",
  DOCTOR_IMAGE_URL: "/doctor-hassam.jpg",
  DOCTOR_FALLBACK_IMAGE: "https://ui-avatars.com/api/?name=Dr+Hassam&background=0E6F66&color=fff&size=400&font-size=0.33&bold=true",

  // ── WhatsApp Configuration ────────────────────────────────
  ACTIVE_WHATSAPP_NUMBER: "923336922404", // Primary clinic number
  SECONDARY_WHATSAPP_NUMBER: "923037528713",
  DEVELOPER_WHATSAPP_NUMBER: "923000000000", // Replace with your dev number

  // ── Clinic Details ────────────────────────────────────────
  CLINIC_NAME: "Dr. Hassam's Medical Clinic",
  CLINIC_LOCATION: "Alfarid Blood Bank & Thalassemia Centre, Old Chungi, DHQ Road, Near Wamiq Hospital, Sahiwal",
  GOOGLE_MAPS_URL: "https://www.google.com/maps/search/?api=1&query=Alfarid+Blood+Bank+and+Thalassemia+Centre+Old+Chungi+DHQ+Road+Near+Wamiq+Hospital+Sahiwal",
  CLINIC_TIMINGS: "4:00 PM to 10:00 PM (Monday to Saturday)",
  CLINIC_SUNDAY: "Sunday by Appointment & Free Welfare Camp",
  CLINIC_PHONE_1: "0333-6922404",
  CLINIC_PHONE_2: "0303-7528713",

  // ── Brand Colors (for reference) ──────────────────────────
  colors: {
    primaryTeal: "#0F766E",
    primaryTealDark: "#0E6F66",
    primaryTealLight: "#14B8A6",
    surfaceSlate: "#F8FAFC",
    cardBorder: "#E2E8F0",
    crimson: "#DC2626",
    emerald: "#16A34A",
    navy: "#0F2942",
  },

  // ── Discount Configuration ────────────────────────────────
  DISCOUNT_PERCENTAGE: 20,
  DISCOUNT_ITEMS: ["Consultations", "Medicines", "Laboratory Tests"],

  // ── Developer / Demo Banner ───────────────────────────────
  DEMO_BANNER_TEXT:
    "⚡ LIVE DEMO PREVIEW — Custom Designed for Dr. Hassam Bin Munawar. Contact Developer to Activate Custom Domain & Remove Watermark",
  DEVELOPER_CONTACT: "Contact Developer",

  // ── Mottos & Credos ───────────────────────────────────────
  MOTTO_PRIMARY: "Every Patient Matters — Excellence in Diagnosis, Compassion in Care.",
  MOTTO_SECONDARY: "Compassionate Family Medicine • Evidence-Based Diabetes & Hematology Care",
  MOTTO_ENGLISH: "We Care, Allah Cares",

  // ── AI Chatbot ────────────────────────────────────────────
  AI_ASSISTANT_NAME: "DR. HASSAM CLINIC AI ASSISTANT",
  AI_MODEL: "gemini-2.0-flash",
} as const;

export type ClinicConfig = typeof clinicConfig;
