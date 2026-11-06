import React from 'react';
import {
  HeartPulse,
  ShieldCheck,
  Target,
  Heart,
  ArrowRight,
  BadgePercent,
  CheckCircle2,
} from 'lucide-react';
import { clinicConfig } from '../data/clinicConfig';
import { useClinic } from '../context/ClinicContext';
import { RevealOnScroll } from './RevealOnScroll';

const clinicalPhotos = [
  {
    url: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1000&q=80',
    title: 'Patient-Centered Clinical Consultation',
    subtitle: 'Evidence-based outpatient diagnosis & empathetic listening',
  },
  {
    url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80',
    title: 'Advanced Glycemic & Metabolic Diagnostics',
    subtitle: 'Accurate HbA1c testing, lipid panels & organ preservation',
  },
  {
    url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80',
    title: 'Comprehensive Preventative Family Care',
    subtitle: 'Lifelong wellness guidance for pediatric & adult patients',
  },
];

const HeroSection: React.FC = () => {
  const { openDiscountModal, openWhatsApp } = useClinic();

  const handleBookAppointment = () => {
    const msg = `🏥 *Appointment Consultation Request — ${clinicConfig.CLINIC_NAME}*\n\nDear Dr. Hassam Bin Munawar,\nI would like to book a consultation at your clinic.\n\n• Location: ${clinicConfig.CLINIC_LOCATION}\n• Clinic Timings: ${clinicConfig.CLINIC_TIMINGS}\n\nPlease confirm availability. Thank you!`;
    openWhatsApp(msg);
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-[#EAF6F3] via-[#F4FBF9] to-[#EBF7F4] border-b border-[#CDE8E2]"
    >
      {/* Soothing Radial Mint-Teal Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-[#13857B]/15 via-teal-200/20 to-emerald-100/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-24 -right-16 w-80 h-80 bg-teal-200/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-36 -left-16 w-80 h-80 bg-emerald-100/30 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ================= Perfectly Centered Column ================= */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
          {/* Top Trust Badge */}
          <RevealOnScroll direction="down" delayMs={50}>
            <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-teal-900 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide border border-[#CDE8E2] shadow-xs mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-600 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600" />
              </span>
              <HeartPulse className="w-4 h-4 text-teal-700" />
              <span className="tracking-wider uppercase font-bold text-[11px] sm:text-xs text-[#0E6F66]">
                YOUR HEALTH, OUR PRIORITY
              </span>
            </div>
          </RevealOnScroll>

          {/* Main Headline */}
          <RevealOnScroll direction="up" delayMs={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F2942] tracking-tight leading-[1.14] mb-4">
              Expert Care for a <br className="hidden sm:inline" />
              <span className="text-[#0E6F66] bg-gradient-to-r from-[#0E6F66] to-[#13857B] bg-clip-text text-transparent">
                Healthier, Longer Life
              </span>
            </h1>
          </RevealOnScroll>

          {/* Doctor Credentials Sub-branding */}
          <RevealOnScroll direction="up" delayMs={150}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0F2942]">
                {clinicConfig.DOCTOR_NAME}
              </h2>
              <span className="hidden sm:inline text-teal-400 font-light">•</span>
              <span className="text-sm sm:text-base font-semibold text-[#0E6F66]">
                {clinicConfig.DOCTOR_TITLE}
              </span>
            </div>
          </RevealOnScroll>

          {/* Clinical Motto Pill */}
          <RevealOnScroll direction="up" delayMs={200}>
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-[#CDE8E2] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#0E6F66] shadow-xs mb-6">
              <CheckCircle2 className="w-4 h-4 text-[#13857B] shrink-0" />
              <span>{clinicConfig.MOTTO_SECONDARY}</span>
            </div>
          </RevealOnScroll>

          {/* Executive Clinical Description */}
          <RevealOnScroll direction="up" delayMs={250}>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Dedicated to delivering comprehensive, patient-centered clinical care with a strict commitment to evidence-based medicine, organ protection protocols, and compassionate family healthcare.
            </p>
          </RevealOnScroll>

          {/* Primary & Secondary Call-to-Actions */}
          <RevealOnScroll direction="up" delayMs={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
              <button
                onClick={handleBookAppointment}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0E6F66] text-white rounded-xl px-8 py-4 font-bold text-base hover:bg-[#13857B] shadow-lg shadow-[#0E6F66]/20 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={openDiscountModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#0E6F66] border-2 border-[#0E6F66] rounded-xl px-8 py-4 font-bold text-base hover:bg-[#EAF6F3] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-xs cursor-pointer group"
              >
                <BadgePercent className="w-5 h-5 text-[#0E6F66] group-hover:rotate-12 transition-transform duration-300" />
                <span>20% Discount Voucher</span>
              </button>
            </div>
          </RevealOnScroll>

          {/* Trust Pillars Bar (Staggered Fade-Up) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mb-14">
            <RevealOnScroll direction="up" delayMs={350} className="w-full">
              <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-[#CDE8E2] hover:border-[#13857B]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 text-left h-full">
                <div className="w-10 h-10 rounded-xl bg-[#E8F6F3] flex items-center justify-center text-[#0E6F66] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0F2942]">Verified Consultant</p>
                  <p className="text-[11px] text-slate-500">Certified Diabetologist &amp; Physician</p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delayMs={450} className="w-full">
              <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-[#CDE8E2] hover:border-[#13857B]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 text-left h-full">
                <div className="w-10 h-10 rounded-xl bg-[#E8F6F3] flex items-center justify-center text-[#0E6F66] shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0F2942]">Accurate Diagnosis</p>
                  <p className="text-[11px] text-slate-500">Targeted organ screenings &amp; lab tests</p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delayMs={550} className="w-full">
              <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-[#CDE8E2] hover:border-[#13857B]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 text-left h-full">
                <div className="w-10 h-10 rounded-xl bg-[#E8F6F3] flex items-center justify-center text-[#0E6F66] shrink-0">
                  <Heart className="w-5 h-5 text-[#0E6F66]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0F2942]">Personalized Family Care</p>
                  <p className="text-[11px] text-slate-500">Holistic treatment for all generations</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* ================= Real Clinical Photography Showcase Banner ================= */}
        <div className="mt-4 pt-8 border-t border-[#CDE8E2]/80">
          <RevealOnScroll direction="up" delayMs={100}>
            <div className="text-center mb-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#0E6F66] bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#CDE8E2] shadow-xs">
                Clinical Excellence &bull; Patient Care In Practice
              </span>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clinicalPhotos.map((photo, idx) => (
              <RevealOnScroll key={idx} direction="up" delayMs={150 + idx * 120} className="w-full">
                <div className="group relative rounded-3xl overflow-hidden bg-white border border-[#CDE8E2] shadow-sm hover:shadow-2xl hover:border-[#13857B]/50 hover:-translate-y-1.5 transition-all duration-500">
                  <div className="h-64 sm:h-72 w-full overflow-hidden relative">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/15 to-transparent" />
                  </div>

                  {/* Glassmorphic Caption Banner */}
                  <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-lg">
                    <p className="text-xs font-bold text-[#0F2942] group-hover:text-[#0E6F66] transition-colors">
                      {photo.title}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      {photo.subtitle}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
