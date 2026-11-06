import React, { useState, useEffect } from 'react';
import {
  Calendar,
  User,
  Stethoscope,
  Clock,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  Sparkles,
  CalendarDays,
  FileText,
  BadgeCheck,
  ExternalLink,
} from 'lucide-react';
import { appointmentConcerns, timeSlots } from '../data/clinicData';
import { clinicConfig } from '../data/clinicConfig';
import { useClinic } from '../context/ClinicContext';
import RevealOnScroll from './RevealOnScroll';

interface FormErrors {
  name?: string;
  age?: string;
  concern?: string;
  timeSlot?: string;
}

const AppointmentBooking: React.FC = () => {
  const { openWhatsApp, preselectedConcern, doctorImage } = useClinic();
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [concern, setConcern] = useState<string>(preselectedConcern || 'Diabetes Consultation & Glycemic Control');
  const [timeSlot, setTimeSlot] = useState<string>('5:00 PM');
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (preselectedConcern) {
      setConcern(preselectedConcern);
    }
  }, [preselectedConcern]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Patient name is required';
    }
    if (!age.trim()) {
      newErrors.age = 'Age is required';
    } else if (isNaN(Number(age)) || Number(age) <= 0 || Number(age) > 130) {
      newErrors.age = 'Please enter a valid age (1-130)';
    }
    if (!concern) {
      newErrors.concern = 'Please select a primary concern';
    }
    if (!timeSlot) {
      newErrors.timeSlot = 'Please select a preferred time slot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const dispatchBooking = () => {
    const message = `🏥 *Appointment Consultation Request — ${clinicConfig.CLINIC_NAME}*\n\n` +
      `👤 *Patient Name:* ${name.trim() || 'Patient'}\n` +
      `📅 *Age:* ${age.trim() || 'Not specified'}\n` +
      `🩺 *Clinical Concern:* ${concern}\n` +
      `🕐 *Preferred Time Slot:* ${timeSlot}\n` +
      `📍 *Clinic Location:* ${clinicConfig.CLINIC_LOCATION}\n\n` +
      `"${clinicConfig.MOTTO_PRIMARY}"\n\n` +
      `Please confirm my clinic appointment with ${clinicConfig.DOCTOR_NAME}.\nThank you!`;

    openWhatsApp(message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      dispatchBooking();
    }
  };

  const handleQuickBook = () => {
    if (validate()) {
      dispatchBooking();
    }
  };

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-[#EFF9F6] relative border-b border-[#CDE8E2]">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#13857B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-[#0E6F66]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <RevealOnScroll direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#E6F5F2] text-teal-900 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3 border border-[#CDE8E2]">
              <Calendar className="w-4 h-4 text-[#0E6F66]" />
              <span>Fast &amp; Direct OPD Scheduling</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2942] tracking-tight">
              Book Your Consultation
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Schedule an in-person clinical review with Dr. Hassam Bin Munawar. Instant confirmation delivered directly to your WhatsApp.
            </p>
          </div>
        </RevealOnScroll>

        {/* 2-Column Dashboard Layout (Form + Live Ticket Pass Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* ================= Left: Form (7 cols) ================= */}
          <div className="lg:col-span-7">
            <RevealOnScroll direction="left" delayMs={50}>
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-[#CDE8E2] shadow-xl">
                <div className="flex items-center justify-between pb-6 border-b border-[#E2F1ED] mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#0F2942]">
                      Patient Registration Form
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Enter details to generate your digital clinical booking pass
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 bg-[#E6F5F2] px-3 py-1.5 rounded-full border border-[#CDE8E2]">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" /> 20% Discount Auto-applied
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Patient Name */}
                    <div>
                      <label
                        htmlFor="patient-name"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Patient Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          id="patient-name"
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                          }}
                          placeholder="e.g. Muhammad Ali"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#CDE8E2] bg-[#F8FAF9] focus:bg-white focus:border-[#0E6F66] focus:ring-2 focus:ring-[#0E6F66]/20 outline-none transition-all text-sm text-[#0F2942] placeholder:text-slate-400"
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-xs text-rose-600 font-medium">{errors.name}</p>
                      )}
                    </div>

                    {/* Patient Age */}
                    <div>
                      <label
                        htmlFor="patient-age"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Age (Years) *
                      </label>
                      <div className="relative">
                        <CalendarDays className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          id="patient-age"
                          type="number"
                          value={age}
                          onChange={(e) => {
                            setAge(e.target.value);
                            if (errors.age) setErrors((prev) => ({ ...prev, age: undefined }));
                          }}
                          placeholder="e.g. 45"
                          min="1"
                          max="130"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#CDE8E2] bg-[#F8FAF9] focus:bg-white focus:border-[#0E6F66] focus:ring-2 focus:ring-[#0E6F66]/20 outline-none transition-all text-sm text-[#0F2942] placeholder:text-slate-400"
                        />
                      </div>
                      {errors.age && (
                        <p className="mt-1 text-xs text-rose-600 font-medium">{errors.age}</p>
                      )}
                    </div>
                  </div>

                  {/* Primary Concern */}
                  <div>
                    <label
                      htmlFor="primary-concern"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Primary Health Concern / Specialty *
                    </label>
                    <div className="relative">
                      <Stethoscope className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <select
                        id="primary-concern"
                        value={concern}
                        onChange={(e) => {
                          setConcern(e.target.value);
                          if (errors.concern) setErrors((prev) => ({ ...prev, concern: undefined }));
                        }}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#CDE8E2] bg-[#F8FAF9] focus:bg-white focus:border-[#0E6F66] focus:ring-2 focus:ring-[#0E6F66]/20 outline-none transition-all text-sm text-[#0F2942] appearance-none cursor-pointer"
                      >
                        {appointmentConcerns.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.concern && (
                      <p className="mt-1 text-xs text-rose-600 font-medium">{errors.concern}</p>
                    )}
                  </div>

                  {/* Preferred Time Slot */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#0E6F66]" />
                        Select Preferred Evening Slot (4:00 PM – 10:00 PM) *
                      </span>
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => {
                            setTimeSlot(slot);
                            if (errors.timeSlot) setErrors((prev) => ({ ...prev, timeSlot: undefined }));
                          }}
                          className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                            timeSlot === slot
                              ? 'bg-[#0E6F66] text-white shadow-md scale-102 ring-2 ring-[#0E6F66]/30'
                              : 'bg-[#F4FAF8] text-slate-700 border border-[#CDE8E2] hover:bg-white'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                    {errors.timeSlot && (
                      <p className="mt-1 text-xs text-rose-600 font-medium">{errors.timeSlot}</p>
                    )}
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full bg-[#0E6F66] hover:bg-[#13857B] text-white rounded-xl py-4 text-base font-bold shadow-lg shadow-teal-900/20 transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Confirm via WhatsApp (Instant Booking)</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </RevealOnScroll>
          </div>

          {/* ================= Right: Live Dashboard Pass Card (5 cols) ================= */}
          <div className="lg:col-span-5 space-y-6">
            <RevealOnScroll direction="right" delayMs={100}>
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-7 border border-[#CDE8E2] shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-[#E2F1ED]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-[#E6F5F2] flex items-center justify-center text-[#0E6F66]">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <h4 className="font-extrabold text-base text-[#0F2942]">
                      Your Next Appointment
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
                    ● Confirmed
                  </span>
                </div>

                {/* Doctor Details Row */}
                <div className="py-5 flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={doctorImage}
                      alt={clinicConfig.DOCTOR_NAME}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = clinicConfig.DOCTOR_FALLBACK_IMAGE;
                      }}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-[#0E6F66] shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0E6F66] text-white flex items-center justify-center border-2 border-white">
                      <BadgeCheck className="w-3 h-3" />
                    </div>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0F2942] text-base leading-tight">
                      {clinicConfig.DOCTOR_NAME}
                    </h5>
                    <p className="text-xs text-[#0E6F66] font-semibold mt-0.5">
                      Consultant Diabetologist &amp; Physician
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Alfarid Blood Bank Centre, Sahiwal
                    </p>
                  </div>
                </div>

                {/* Live Ticket Info Box */}
                <div className="bg-[#F8FAF9] rounded-2xl p-4 border border-[#CDE8E2] space-y-3 shadow-xs">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-[#E2F1ED]">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-slate-400" /> Patient:
                    </span>
                    <span className="font-bold text-[#0F2942]">
                      {name.trim() ? `${name} (${age ? `${age} yrs` : ''})` : 'Prospective Patient'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs pb-2 border-b border-[#E2F1ED]">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-slate-400" /> Concern:
                    </span>
                    <span className="font-semibold text-teal-800 text-right truncate max-w-[200px]">
                      {concern}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" /> Slot:
                    </span>
                    <span className="font-bold bg-[#E6F5F2] text-teal-900 px-2.5 py-0.5 rounded-md border border-[#CDE8E2]">
                      Mon - Sat | {timeSlot}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-5">
                  <button
                    type="button"
                    onClick={() => {
                      const currentIndex = timeSlots.indexOf(timeSlot as any);
                      const nextIndex = (currentIndex + 1) % timeSlots.length;
                      setTimeSlot(timeSlots[nextIndex]);
                    }}
                    className="bg-slate-800 hover:bg-slate-900 text-white py-2.5 rounded-xl text-xs font-bold transition-colors text-center cursor-pointer"
                  >
                    Change Slot
                  </button>
                  <button
                    type="button"
                    onClick={handleQuickBook}
                    className="bg-white text-[#0E6F66] border border-[#0E6F66] py-2.5 rounded-xl text-xs font-bold hover:bg-[#E6F5F2] transition-colors text-center cursor-pointer"
                  >
                    Confirm on WhatsApp
                  </button>
                </div>
              </div>
            </RevealOnScroll>

            {/* Timings Quick Card */}
            <RevealOnScroll direction="right" delayMs={150}>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-[#CDE8E2] shadow-sm">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#0E6F66] mt-0.5 shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm text-[#0F2942]">
                      Clinic Operating Schedule
                    </h5>
                    <p className="text-xs text-slate-700 mt-1">
                      <strong className="text-teal-800">Mon – Sat:</strong> 4:00 PM to 10:00 PM
                    </p>
                    <p className="text-xs text-slate-700 mt-0.5">
                      <strong className="text-emerald-700">Sunday:</strong> By Appointment &amp; Free Welfare Camp
                    </p>
                    <p className="text-[11px] text-slate-500 mt-2">
                      Walk-ins are welcomed, but pre-booking ensures prioritized clinical consultation.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Clinic Location & Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#CDE8E2]">
          {/* Card 1: Clickable Address with Exact Google Maps Redirect */}
          <RevealOnScroll direction="up" delayMs={50}>
            <a
              href={clinicConfig.GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/95 backdrop-blur-sm hover:bg-white rounded-3xl p-6 border border-[#CDE8E2] hover:border-[#13857B]/50 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 block text-left cursor-pointer h-full"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E6F5F2] group-hover:bg-[#0E6F66] text-[#0E6F66] group-hover:text-white flex items-center justify-center mb-4 shadow-xs transition-colors">
                <MapPin className="w-5 h-5 group-hover:animate-bounce" />
              </div>
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-bold text-[#0F2942] text-base group-hover:text-[#0E6F66] transition-colors">
                  Clinic Location
                </h4>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#0E6F66] transition-colors" />
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                {clinicConfig.CLINIC_LOCATION}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E6F66] group-hover:underline">
                Open Exact Location in Google Maps &rarr;
              </span>
            </a>
          </RevealOnScroll>

          {/* Card 2: Contact Phones */}
          <RevealOnScroll direction="up" delayMs={100}>
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 border border-[#CDE8E2] shadow-xs hover:shadow-md transition-shadow h-full">
              <div className="w-10 h-10 rounded-xl bg-[#E6F5F2] text-[#0E6F66] flex items-center justify-center mb-4 shadow-xs">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-[#0F2942] text-base mb-1">
                Direct Clinical Helplines
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                Direct telephone &amp; WhatsApp inquiries during clinical hours:
              </p>
              <div className="space-y-1.5">
                <a
                  href={`tel:${clinicConfig.CLINIC_PHONE_1}`}
                  className="block text-sm font-bold text-[#0E6F66] hover:underline"
                >
                  📞 {clinicConfig.CLINIC_PHONE_1}
                </a>
                <a
                  href={`tel:${clinicConfig.CLINIC_PHONE_2}`}
                  className="block text-sm font-bold text-[#0E6F66] hover:underline"
                >
                  📞 {clinicConfig.CLINIC_PHONE_2}
                </a>
              </div>
            </div>
          </RevealOnScroll>

          {/* Card 3: Clinic Mission & Credo */}
          <RevealOnScroll direction="up" delayMs={150}>
            <div className="bg-gradient-to-br from-[#0E6F66] to-[#0F2942] text-white rounded-3xl p-6 shadow-md flex flex-col justify-between h-full">
              <div>
                <span className="text-[11px] font-bold text-teal-200 uppercase tracking-widest block mb-2">
                  Guiding Medical Mission
                </span>
                <p className="text-base sm:text-lg text-white font-bold mb-3 leading-relaxed">
                  "{clinicConfig.MOTTO_PRIMARY}"
                </p>
              </div>
              <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs text-teal-200">
                <span className="font-semibold">{clinicConfig.MOTTO_ENGLISH}</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBooking;
