import React from 'react';
import {
  Heart,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { clinicConfig } from '../data/clinicConfig';
import { scrollToSection } from '../utils/helpers';
import { useClinic } from '../context/ClinicContext';

const quickLinks = [
  { label: 'Home', section: 'hero' },
  { label: 'Clinical Specialties', section: 'specialties' },
  { label: 'Diabetes Care Center', section: 'diabetes' },
  { label: 'Anemia & Low HB Hub', section: 'anemia' },
  { label: 'Welfare Care & Discounts', section: 'welfare' },
  { label: 'Book Next Appointment', section: 'appointment' },
];

const treatedConditions = [
  { label: 'Type 1 & Type 2 Diabetes Care', section: 'diabetes' },
  { label: 'Hypertension & Preventative Cardiology', section: 'specialties' },
  { label: 'Thyroid & Endocrine Disorders', section: 'specialties' },
  { label: 'Kidney & Diabetic Nephropathy', section: 'diabetes' },
  { label: 'Low Hemoglobin & Anemia Diagnostics', section: 'anemia' },
  { label: 'Free Thalassemia Blood Transfusions', section: 'welfare' },
  { label: 'Medical Weight Loss & Metabolism', section: 'specialties' },
  { label: 'General Outpatient OPD & Family Medicine', section: 'specialties' },
];

const Footer: React.FC = () => {
  const { openWhatsApp, openDiscountModal } = useClinic();

  const handleWhatsAppChat = () => {
    const msg = `Dear Dr. Hassam Bin Munawar,\nI would like to inquire about consulting or booking an appointment at Alfarid Blood Bank Centre, DHQ Road, Sahiwal.\n\nPlease share available consultation slots. Thank you!`;
    openWhatsApp(msg);
  };

  return (
    <footer id="footer" className="bg-[#0F2942] text-white pt-16 pb-12 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Motto Banner (100% Clean English) */}
        <div className="bg-gradient-to-r from-teal-900/60 via-white/5 to-teal-900/60 rounded-3xl p-6 sm:p-8 border border-white/10 mb-14 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center md:text-left space-y-1">
            <span className="text-[11px] uppercase tracking-widest text-teal-300 font-bold block">
              Guiding Medical Philosophy
            </span>
            <p className="text-lg sm:text-xl text-white font-bold tracking-tight">
              "{clinicConfig.MOTTO_PRIMARY}"
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs sm:text-sm font-semibold text-teal-200">
              {clinicConfig.MOTTO_ENGLISH}
            </span>
            <button
              onClick={handleWhatsAppChat}
              className="bg-teal-600 hover:bg-teal-500 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book via WhatsApp</span>
            </button>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Column 1: Brand & Doctor Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center shadow-sm">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <h3 className="font-bold text-base leading-tight text-white">
                  {clinicConfig.DOCTOR_NAME}
                </h3>
                <p className="text-xs text-teal-300 font-medium">
                  General Physician &bull; Diabetologist
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Dedicated to compassionate outpatient clinical care, proactive diabetes organ preservation, and humanitarian community medical relief in Sahiwal.
            </p>

            <button
              onClick={openDiscountModal}
              className="w-full text-left bg-white/5 hover:bg-white/10 rounded-2xl p-4 border border-white/10 text-xs space-y-1 transition-all duration-200 cursor-pointer group"
            >
              <p className="text-teal-300 font-bold flex items-center justify-between">
                <span>✨ Clinic Care Privilege</span>
                <span className="text-amber-300 group-hover:translate-x-1 transition-transform">Claim Voucher &rarr;</span>
              </p>
              <p className="text-slate-300">
                20% discount on all consultations, in-house pharmacy medicines, and diagnostic blood tests.
              </p>
            </button>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-300 mb-5 pb-2 border-b border-white/10">
              Quick Navigation
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.section}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="text-slate-300 hover:text-teal-400 hover:translate-x-2 flex items-center gap-2 transition-all duration-200 group cursor-pointer text-left"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-teal-400 group-hover:text-teal-300 group-hover:translate-x-0.5 transition-transform" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Interactive Key Focus Areas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-300 mb-5 pb-2 border-b border-white/10">
              Key Clinical Focus Areas
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              {treatedConditions.map((condition, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection(condition.section)}
                    className="text-slate-300 hover:text-teal-400 hover:translate-x-2 flex items-center gap-2 transition-all duration-200 group cursor-pointer text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 group-hover:scale-150 transition-transform shrink-0" />
                    <span className="leading-snug">{condition.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & Hours with Exact Google Maps Redirect */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-300 mb-5 pb-2 border-b border-white/10">
              Clinic Location &amp; Hours
            </h4>

            <div className="space-y-3.5 text-xs text-slate-300">
              {/* Clickable Google Maps Address Link */}
              <a
                href={clinicConfig.GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2.5 hover:text-teal-300 transition-colors cursor-pointer"
                title="Open location in Google Maps"
              >
                <MapPin className="w-4 h-4 text-teal-400 group-hover:animate-bounce mt-0.5 shrink-0" />
                <span className="leading-snug underline-offset-2 group-hover:underline">
                  {clinicConfig.CLINIC_LOCATION}
                  <ExternalLink className="w-3 h-3 inline-block ml-1 opacity-70 group-hover:opacity-100" />
                </span>
              </a>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white">{clinicConfig.CLINIC_TIMINGS}</p>
                  <p className="text-teal-300 text-[11px] mt-0.5">{clinicConfig.CLINIC_SUNDAY}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <div className="space-y-0.5">
                  <a
                    href={`tel:${clinicConfig.CLINIC_PHONE_1}`}
                    className="block text-white font-semibold hover:text-teal-300 transition-colors"
                  >
                    {clinicConfig.CLINIC_PHONE_1}
                  </a>
                  <a
                    href={`tel:${clinicConfig.CLINIC_PHONE_2}`}
                    className="block text-white font-semibold hover:text-teal-300 transition-colors"
                  >
                    {clinicConfig.CLINIC_PHONE_2}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={clinicConfig.GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border border-white/15 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Dr. Hassam's Medical Clinic. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built for Dr. Hassam Bin Munawar &bull; Sahiwal, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
