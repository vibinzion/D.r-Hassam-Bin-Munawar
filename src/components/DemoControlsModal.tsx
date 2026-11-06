import React, { useState } from 'react';
import { X, Settings2, Phone, Image, ToggleLeft, ToggleRight, Check, RefreshCw, Upload, ShieldCheck } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';
import { clinicConfig } from '../data/clinicConfig';

const DemoControlsModal: React.FC = () => {
  const {
    isDemoControlsOpen,
    closeDemoControls,
    demoMode,
    setDemoMode,
    activeWhatsApp,
    setActiveWhatsApp,
    doctorImage,
    setDoctorImage,
  } = useClinic();

  const [phoneInput, setPhoneInput] = useState(activeWhatsApp);
  const [photoInput, setPhotoInput] = useState(doctorImage);
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isDemoControlsOpen) return null;

  const handleSave = () => {
    setActiveWhatsApp(phoneInput);
    setDoctorImage(photoInput);
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      closeDemoControls();
    }, 700);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const dataUrl = event.target.result as string;
          setPhotoInput(dataUrl);
          setDoctorImage(dataUrl);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-up">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-7 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Strip */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-400 via-teal-700 to-[#0F2942]" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <Settings2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0F2942]">Demo Customization Controls</h3>
              <p className="text-xs text-slate-500">Live preview tools for client presentation</p>
            </div>
          </div>

          <button
            onClick={closeDemoControls}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close demo controls"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-5 text-sm">
          {/* Demo Mode Toggle */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-center justify-between">
            <div>
              <p className="font-bold text-[#0F2942]">Live Demo Preview Banner</p>
              <p className="text-xs text-slate-500">Toggle the top demo announcement banner</p>
            </div>
            <button
              onClick={() => setDemoMode(!demoMode)}
              className="text-teal-700 cursor-pointer"
            >
              {demoMode ? (
                <ToggleRight className="w-10 h-10 text-teal-700" />
              ) : (
                <ToggleLeft className="w-10 h-10 text-slate-400" />
              )}
            </button>
          </div>

          {/* Active WhatsApp Number Section */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-teal-700" />
              <span>Active WhatsApp Routing Number</span>
            </label>
            <p className="text-xs text-slate-500">
              Select Dr. Hassam's official numbers or developer pitch test number:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
              <button
                type="button"
                onClick={() => setPhoneInput(clinicConfig.ACTIVE_WHATSAPP_NUMBER)}
                className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                  phoneInput === clinicConfig.ACTIVE_WHATSAPP_NUMBER
                    ? 'border-teal-700 bg-teal-50 text-teal-800 font-bold ring-1 ring-teal-700'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                <span className="block text-[10px] text-slate-400 uppercase">Dr. Hassam Main</span>
                <span className="block font-mono">0333-6922404</span>
              </button>

              <button
                type="button"
                onClick={() => setPhoneInput(clinicConfig.SECONDARY_WHATSAPP_NUMBER)}
                className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                  phoneInput === clinicConfig.SECONDARY_WHATSAPP_NUMBER
                    ? 'border-teal-700 bg-teal-50 text-teal-800 font-bold ring-1 ring-teal-700'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                <span className="block text-[10px] text-slate-400 uppercase">Dr. Hassam Sec.</span>
                <span className="block font-mono">0303-7528713</span>
              </button>

              <button
                type="button"
                onClick={() => setPhoneInput(clinicConfig.DEVELOPER_WHATSAPP_NUMBER)}
                className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                  phoneInput === clinicConfig.DEVELOPER_WHATSAPP_NUMBER
                    ? 'border-amber-500 bg-amber-50 text-amber-900 font-bold ring-1 ring-amber-500'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                <span className="block text-[10px] text-amber-600 uppercase">Developer Pitch</span>
                <span className="block font-mono">{clinicConfig.DEVELOPER_WHATSAPP_NUMBER}</span>
              </button>
            </div>

            <div className="pt-2">
              <input
                type="text"
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
                placeholder="Custom WhatsApp number (e.g. 923336922404)"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20 text-xs font-mono text-[#0F2942]"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                Format: International without + (e.g. 923336922404)
              </p>
            </div>
          </div>

          {/* Doctor Portrait Photo Control */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Image className="w-3.5 h-3.5 text-teal-700" />
              <span>Doctor Portrait Photo (For Booking Pass &amp; Credentials)</span>
            </label>

            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                <img
                  src={photoInput}
                  alt="Doctor Preview"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = clinicConfig.DOCTOR_FALLBACK_IMAGE;
                  }}
                />
              </div>

              <div className="flex-1 space-y-1.5">
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setPhotoInput('/doctor-hassam.jpg')}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  >
                    Default Photo
                  </button>
                  <button
                    type="button"
                    onClick={() => setPhotoInput(clinicConfig.DOCTOR_FALLBACK_IMAGE)}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  >
                    Avatar Preset
                  </button>
                  <label className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-teal-50 text-teal-800 hover:bg-teal-100 cursor-pointer transition-colors">
                    <Upload className="w-3 h-3" />
                    <span>Upload Local</span>
                    <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                  </label>
                </div>
                <input
                  type="text"
                  value={photoInput}
                  onChange={(e) => setPhotoInput(e.target.value)}
                  placeholder="Or enter Image URL"
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-[#0F2942]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Config saved to browser session</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={closeDemoControls}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              {savedNotice ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Applied!</span>
                </>
              ) : (
                <>
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Apply &amp; Close</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoControlsModal;
