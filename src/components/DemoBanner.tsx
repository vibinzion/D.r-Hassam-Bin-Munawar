import React, { useState } from 'react';
import { MessageCircle, X, ArrowRight, Settings2 } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';
import { clinicConfig } from '../data/clinicConfig';

const DemoBanner: React.FC = () => {
  const { demoMode, openDemoControls, activeWhatsApp } = useClinic();
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  if (!demoMode || isDismissed) {
    return null;
  }

  const devWhatsAppLink = `https://wa.me/${activeWhatsApp || clinicConfig.ACTIVE_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Salam! I am inquiring about purchasing / activating the Dr. Hassam Bin Munawar Clinic Website template and custom domain setup.'
  )}`;

  return (
    <aside
      aria-label="Demo mode announcement"
      className="relative z-50 w-full bg-gradient-to-r from-[#0F2942] via-[#0E6F66] to-[#0A4F48] text-white shadow-md border-b border-teal-500/30"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8 text-xs sm:text-sm">
        {/* Banner Text with Lightning Sparkle */}
        <div className="flex items-center gap-2 font-medium flex-1 min-w-[280px]">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-[#0F2942] font-black text-xs shrink-0 shadow-xs">
            ⚡
          </span>
          <p className="leading-snug">
            <span className="font-bold text-amber-300 uppercase tracking-wide">
              LIVE DEMO PREVIEW
            </span>{' '}
            — Custom Designed for <strong className="text-white font-semibold">{clinicConfig.DOCTOR_NAME}</strong>.{' '}
            <span className="hidden md:inline text-white/90">
              Contact Developer to Activate Custom Domain &amp; Remove Watermark.
            </span>
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={openDemoControls}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white border border-white/25 hover:bg-white/25 transition-all cursor-pointer"
            title="Open Demo & Routing Settings"
          >
            <Settings2 className="h-3.5 w-3.5" />
            <span>Demo Controls</span>
          </button>

          <a
            href={devWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-3.5 py-1 text-xs font-bold text-[#0F2942] shadow-sm hover:bg-amber-300 transition-colors"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>Contact Developer</span>
            <ArrowRight className="h-3 w-3" />
          </a>

          <button
            onClick={() => setIsDismissed(true)}
            className="rounded-full p-1 text-white/70 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
            aria-label="Dismiss banner"
            title="Dismiss Demo Banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default DemoBanner;
