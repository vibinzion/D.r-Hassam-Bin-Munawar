import React, { useState } from 'react';
import { X, Sparkles, Copy, Check, Calendar, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';
import { clinicConfig } from '../data/clinicConfig';

const DiscountModal: React.FC = () => {
  const { isDiscountModalOpen, closeDiscountModal, openWhatsApp, openBookingWithConcern } = useClinic();
  const [copied, setCopied] = useState(false);
  const voucherCode = 'HASSAM20';

  if (!isDiscountModalOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(voucherCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBookWithVoucher = () => {
    const message = `🎉 *Special 20% Discount Voucher Claim*\n\nDear Dr. Hassam Bin Munawar,\nI would like to book a consultation using the voucher code: *${voucherCode}* (20% OFF on Consultations, Medicines & Laboratory Tests).\n\n• Clinic: ${clinicConfig.CLINIC_LOCATION}\n• Timings: ${clinicConfig.CLINIC_TIMINGS}\n\nPlease confirm availability. Thank you!`;
    openWhatsApp(message);
    closeDiscountModal();
  };

  const handleScrollToForm = () => {
    closeDiscountModal();
    openBookingWithConcern('Claiming 20% Discount Voucher (HASSAM20)');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-up">
      <div
        className="relative w-full max-w-md bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-7 overflow-hidden text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Decorative Arc */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-400 via-teal-700 to-teal-600" />

        {/* Close Button */}
        <button
          onClick={closeDiscountModal}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close voucher modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Badge & Icon */}
        <div className="mx-auto w-16 h-16 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4 shadow-sm border border-teal-200">
          <Sparkles className="w-8 h-8 text-amber-500 animate-pulse" />
        </div>

        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200 mb-2 uppercase tracking-wider">
          <Heart className="w-3.5 h-3.5 fill-teal-700 text-teal-700" /> Official Clinic Voucher
        </span>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F2942] tracking-tight">
          20% Special Care Discount
        </h3>

        <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
          Applicable for Doctor Consultations, Prescribed Medicines, and all Diagnostic &amp; Laboratory Blood Tests at Dr. Hassam's Clinic.
        </p>

        {/* English Clinical Tagline */}
        <div className="text-xs sm:text-sm text-teal-900 font-bold my-3 bg-teal-50/80 py-2.5 px-4 rounded-xl border border-teal-200">
          Flat 20% Care Privilege Across All Outpatient Services
        </div>

        {/* Voucher Code Box */}
        <div className="my-5 p-4 rounded-2xl bg-slate-50 border-2 border-dashed border-teal-600/40 flex items-center justify-between">
          <div className="text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
              Promo Voucher Code
            </span>
            <span className="text-xl sm:text-2xl font-black text-teal-700 tracking-wider font-mono">
              {voucherCode}
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 bg-white text-teal-700 border border-teal-700 px-3 py-1.5 rounded-xl text-xs font-bold shadow-xs hover:bg-teal-700 hover:text-white transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>

        {/* Trust Points */}
        <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-600 mb-6">
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center">
            <ShieldCheck className="w-4 h-4 text-teal-700 mb-1" />
            <span className="font-semibold text-[#0F2942]">Consultation</span>
            <span className="text-emerald-700 font-bold">-20%</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center">
            <ShieldCheck className="w-4 h-4 text-teal-700 mb-1" />
            <span className="font-semibold text-[#0F2942]">Medicines</span>
            <span className="text-emerald-700 font-bold">-20%</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center">
            <ShieldCheck className="w-4 h-4 text-teal-700 mb-1" />
            <span className="font-semibold text-[#0F2942]">Lab Tests</span>
            <span className="text-emerald-700 font-bold">-20%</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-2.5">
          <button
            onClick={handleBookWithVoucher}
            className="w-full bg-teal-700 hover:bg-teal-800 text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-teal-700/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Book Appointment With This Voucher</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleScrollToForm}
            className="w-full bg-slate-50 hover:bg-slate-100 text-teal-800 border border-slate-200 py-2.5 rounded-xl font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Fill Appointment Form On Page</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountModal;
