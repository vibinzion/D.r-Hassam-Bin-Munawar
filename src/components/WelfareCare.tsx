import React from 'react';
import {
  Heart,
  Droplets,
  Users,
  Calendar,
  Gift,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { clinicConfig } from '../data/clinicConfig';
import { useClinic } from '../context/ClinicContext';
import RevealOnScroll from './RevealOnScroll';

const WelfareCare: React.FC = () => {
  const { openWhatsApp, openDiscountModal } = useClinic();

  const handleThalassemiaWhatsApp = () => {
    const msg = `🩸 *Thalassemia Warrior Care Inquiry — ${clinicConfig.CLINIC_NAME}*\n\nDear Dr. Hassam Bin Munawar,\nI am writing to inquire about the *100% FREE Treatment and Blood Transfusion* program for Thalassemia patients at Alfarid Blood Bank Centre, Sahiwal.\n\nPlease guide me on patient registration. Thank you!`;
    openWhatsApp(msg);
  };

  const handleDeservingWhatsApp = () => {
    const msg = `🤝 *Welfare & Sunday Camp Registration — ${clinicConfig.CLINIC_NAME}*\n\nDear Dr. Hassam Bin Munawar,\nI would like to inquire regarding the *Free Treatment, Labs & Medications for Deserving Patients* (Sunday Free Welfare Camp).\n\nPlease let me know the timing and patient check-in details. Thank you!`;
    openWhatsApp(msg);
  };

  return (
    <section id="welfare" className="py-20 lg:py-28 bg-gradient-to-b from-[#EAF6F3] via-[#F4FBF9] to-[#EBF7F4] relative border-b border-[#CDE8E2]">
      {/* Ambient Mint Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#13857B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0E6F66]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <RevealOnScroll direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#E6F5F2] text-teal-900 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3 border border-[#CDE8E2]">
              <Gift className="w-4 h-4 text-[#0E6F66]" />
              <span>Humanitarian Initiatives &amp; Subsidized Care</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2942] tracking-tight">
              Humanitarian Welfare &amp; Special Care Discounts
            </h2>

            <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed">
              Believing that high-standard healthcare is an inalienable human right, Dr. Hassam Bin Munawar is dedicated to serving chronic patients, underprivileged families, and community members in need.
            </p>
          </div>
        </RevealOnScroll>

        {/* 3 High-Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ================= Card 1: Thalassemia Support ================= */}
          <RevealOnScroll direction="up" delayMs={0}>
            <div className="group bg-white/95 backdrop-blur-sm rounded-3xl border border-[#CDE8E2] shadow-sm hover:shadow-xl hover:border-rose-400 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full">
              <div>
                {/* Photo Header */}
                <div className="h-48 w-full overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80"
                    alt="Blood banking transfusion facility"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-rose-800 text-xs font-bold px-3 py-1 rounded-full border border-rose-200 flex items-center gap-1.5 shadow-xs">
                    <Heart className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
                    <span>Thalassemia Lifeline</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-[#0F2942] mb-3 leading-snug group-hover:text-rose-700 transition-colors">
                    Free Treatment &amp; Blood Transfusion for Thalassemia Patients
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    Dedicated to supporting Thalassemia warriors with free filtered blood transfusions, clinical monitoring, and iron chelation management at Alfarid Blood Bank Centre.
                  </p>

                  {/* English Clean Impact Badge */}
                  <div className="bg-rose-50 border border-rose-200 px-4 py-2.5 rounded-xl text-rose-900 text-xs font-bold flex items-center gap-2 mb-5">
                    <Droplets className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>100% Free Blood Screening &amp; Transfusion Support</span>
                  </div>

                  <div className="space-y-2 mb-6 text-xs text-slate-700">
                    <div className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-rose-600 mr-2 shrink-0" />
                      <span>Screened, cross-matched packed red cells</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-rose-600 mr-2 shrink-0" />
                      <span>Zero fee for transfusion &amp; doctor consultation</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <button
                  onClick={handleThalassemiaWhatsApp}
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Inquire on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </RevealOnScroll>

          {/* ================= Card 2: Welfare Program & Sunday Camp ================= */}
          <RevealOnScroll direction="up" delayMs={100}>
            <div className="group bg-white/95 backdrop-blur-sm rounded-3xl border border-[#CDE8E2] shadow-sm hover:shadow-xl hover:border-emerald-400 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full">
              <div>
                {/* Photo Header */}
                <div className="h-48 w-full overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=800&q=80"
                    alt="Doctor consulting with patient in clinic"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5 shadow-xs">
                    <Users className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Community Relief</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-[#0F2942] mb-3 leading-snug group-hover:text-emerald-700 transition-colors">
                    Free Treatment, Labs &amp; Medications for Deserving Patients
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    Available for deserving, low-income patients, with a specialized medical camp held every Sunday. Essential medicines and basic diagnostics are provided with dignity.
                  </p>

                  {/* English Clean Impact Badge */}
                  <div className="bg-emerald-50 border border-emerald-200 px-4 py-2.5 rounded-xl text-emerald-900 text-xs font-bold flex items-center gap-2 mb-5">
                    <Calendar className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Every Sunday Dedicated Welfare OPD</span>
                  </div>

                  <div className="space-y-2 mb-6 text-xs text-slate-700">
                    <div className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 mr-2 shrink-0" />
                      <span>Free general clinical examination &amp; diagnostics</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 mr-2 shrink-0" />
                      <span>Standard essential pharmaceuticals supplied free</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <button
                  onClick={handleDeservingWhatsApp}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Register for Sunday Welfare Camp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </RevealOnScroll>

          {/* ================= Card 3: 20% Special Discount ================= */}
          <RevealOnScroll direction="up" delayMs={200}>
            <div className="group bg-white/95 backdrop-blur-sm rounded-3xl border border-[#CDE8E2] shadow-sm hover:shadow-xl hover:border-[#13857B]/50 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full">
              <div>
                {/* Photo Header */}
                <div className="h-48 w-full overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                    alt="Modern medical diagnostic laboratory"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-teal-800 text-xs font-bold px-3 py-1 rounded-full border border-[#CDE8E2] flex items-center gap-1.5 shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Universal Clinic Privilege</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full shadow-md">
                    20% OFF
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-[#0F2942] mb-3 leading-snug group-hover:text-[#0E6F66] transition-colors">
                    20% Special Discount on Consultations, Medicines &amp; Lab Tests
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    To ease healthcare expenses for all patients, Dr. Hassam offers a flat 20% discount on doctor consultations, in-house prescribed medicines, and all diagnostic laboratory tests.
                  </p>

                  {/* English Clean Impact Badge */}
                  <div className="bg-[#E6F5F2] border border-[#CDE8E2] px-4 py-2.5 rounded-xl text-teal-950 text-xs font-bold flex items-center gap-2 mb-5">
                    <ShieldCheck className="w-4 h-4 text-[#0E6F66] shrink-0" />
                    <span>Flat 20% Care Privilege on All Services</span>
                  </div>

                  <div className="space-y-2 mb-6 text-xs text-slate-700">
                    <div className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-[#0E6F66] mr-2 shrink-0" />
                      <span>20% off General &amp; Diabetologist Consultation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-[#0E6F66] mr-2 shrink-0" />
                      <span>20% off CBC, HbA1c, Lipid &amp; Renal Profiles</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <button
                  onClick={openDiscountModal}
                  className="w-full bg-[#0E6F66] hover:bg-[#13857B] text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Claim 20% Voucher (HASSAM20)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default WelfareCare;
