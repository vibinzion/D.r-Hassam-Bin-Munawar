import { clinicConfig } from '../data/clinicConfig';

/**
 * Generate a WhatsApp URL with a pre-filled message
 */
export function getWhatsAppUrl(message: string, number?: string): string {
  const phone = number || clinicConfig.ACTIVE_WHATSAPP_NUMBER;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

/**
 * Open WhatsApp with a booking message
 */
export function openWhatsAppBooking(data: {
  name: string;
  age: string;
  concern: string;
  timeSlot: string;
}): void {
  const message = `🏥 *Appointment Consultation Request — ${clinicConfig.CLINIC_NAME}*\n\n` +
    `👤 *Patient Name:* ${data.name}\n` +
    `📅 *Age:* ${data.age}\n` +
    `🩺 *Clinical Concern:* ${data.concern}\n` +
    `🕐 *Preferred Time Slot:* ${data.timeSlot}\n\n` +
    `"${clinicConfig.MOTTO_PRIMARY}"\n\n` +
    `Please confirm my clinical appointment with ${clinicConfig.DOCTOR_NAME}.\nThank you!`;
  
  window.open(getWhatsAppUrl(message), '_blank');
}

/**
 * Open WhatsApp for anemia symptom consultation
 */
export function openAnemiaConsultation(symptoms: string[]): void {
  const symptomList = symptoms.join(', ');
  const message = `🩸 *Anemia / Low Hemoglobin Consultation Request*\n\n` +
    `I am experiencing the following clinical indicators:\n` +
    `${symptomList}\n\n` +
    `Early screening & timely evaluation protects cardiovascular and vital organ health.\n\n` +
    `Please schedule a hematology/CBC consultation with ${clinicConfig.DOCTOR_NAME}.`;
  
  window.open(getWhatsAppUrl(message), '_blank');
}

/**
 * Open WhatsApp for general booking
 */
export function openGeneralBooking(): void {
  const message = `🏥 *Appointment Consultation Request*\n\n` +
    `I would like to book a consultation with ${clinicConfig.DOCTOR_NAME}.\n` +
    `📍 ${clinicConfig.CLINIC_LOCATION}\n` +
    `🕐 Clinic Operating Hours: ${clinicConfig.CLINIC_TIMINGS}\n\n` +
    `Please confirm available slots. Thank you!`;
  
  window.open(getWhatsAppUrl(message), '_blank');
}

/**
 * Get doctor image with fallback
 */
export function getDoctorImage(): string {
  return clinicConfig.DOCTOR_IMAGE_URL || clinicConfig.DOCTOR_FALLBACK_IMAGE;
}

/**
 * Smooth scroll to element by ID
 */
export function scrollToSection(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * Format phone number for display
 */
export function formatPhone(phone: string): string {
  return phone.replace(/(\d{4})(\d{7})/, '$1-$2');
}
