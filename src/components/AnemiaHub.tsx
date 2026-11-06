import React, { useState } from 'react';
import {
  Droplets,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { anemiaCauses, anemiaSymptoms } from '../data/clinicData';
import { useClinic } from '../context/ClinicContext';
import RevealOnScroll from './RevealOnScroll';

const AnemiaHub: React.FC = () => {
  const { openWhatsApp } = useClinic();
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([
    'Weakness & Fatigue',
    'Dizziness & Lightheadedness',
  ]);

  const toggleSymptom = (symptomName: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptomName)
        ? prev.filter((s) => s !== symptomName)
        : [...prev, symptomName]
    );
  };

  const handleConsultNow = () => {
    const symptomList = selectedSymptoms.length > 0
      ? selectedSymptoms.join(', ')
      : 'General low HB symptoms & fatigue';

    const message = `🩸 *Anemia / Low Hemoglobin (HB) Clinical Consultation*\n\nDear Dr. Hassam Bin Munawar,\nI completed the online Anemia assessment for low hemoglobin:\n\n• Selected Clinical Indicators: ${symptomList}\n• Requested Evaluation: Complete Blood Count (CBC), Serum Ferritin & Clinical Workup at Alfarid Centre, Sahiwal.\n\nPlease share details on timing and available consultation slots. Thank you!`;

    openWhatsApp(message);
  };

  return (
    <section id="anemia" className="py-20 lg:py-28 bg-[#EFF9F6] relative border-b border-[#CDE8E2]">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-[#13857B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-5 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <RevealOnScroll direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3 border border-rose-200">
              <Droplets className="w-4 h-4 text-rose-600 animate-pulse" />
              <span>Hematology &amp; Hemoglobin Optimization</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2942] tracking-tight">
              Anemia &amp; Low Hemoglobin (Low HB) Comprehensive Care
            </h2>

            <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed">
              Anemia occurs when your bloodstream lacks healthy red blood cells or sufficient hemoglobin to carry essential oxygen to vital organs. Timely clinical intervention eliminates chronic exhaustion, cardiac strain, and immunological decline.
            </p>
          </div>
        </RevealOnScroll>

        {/* Part 1: Interactive Microscopic Blood Cell Comparison */}
        <div className="mb-24">
          <RevealOnScroll direction="up">
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F2942]">
                Microscopic Blood Cell Comparison
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Hover over each cellular chamber to examine oxygen-carrying capacity and erythrocyte density.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Normal Red Blood Cells Card */}
            <RevealOnScroll direction="left" delayMs={100}>
              <div className="group bg-white/95 backdrop-blur-sm border-2 border-emerald-300 hover:border-emerald-500 rounded-3xl p-6 sm:p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      Normal Reference Range
                    </span>
                    <span className="text-xs font-bold text-slate-500">13.5 – 17.5 g/dL</span>
                  </div>

                  <h4 className="text-lg font-bold text-[#0F2942] mb-1.5 text-left group-hover:text-emerald-800 transition-colors">
                    Healthy Erythrocytes (Normal Blood)
                  </h4>
                  <p className="text-xs text-slate-500 text-left mb-6">
                    Dense, biconcave erythrocytes packed with iron-rich hemoglobin molecules ensuring optimal tissue oxygenation.
                  </p>

                  {/* Visual RBC Chamber */}
                  <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100 mb-6 shadow-inner min-h-[170px] flex items-center justify-center">
                    <div className="grid grid-cols-6 gap-3">
                      {Array.from({ length: 18 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-rose-700 shadow-xs border border-red-400 flex items-center justify-center text-[9px] text-white font-bold group-hover:scale-110 group-hover:shadow-md transition-transform duration-300"
                        >
                          O₂
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center justify-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-2.5 rounded-xl text-xs font-bold border border-emerald-200">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Optimal Tissue Oxygenation &amp; Peak Physical Stamina</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Anemic (Low HB) Card */}
            <RevealOnScroll direction="right" delayMs={150}>
              <div className="group bg-white/95 backdrop-blur-sm border-2 border-rose-300 hover:border-rose-500 rounded-3xl p-6 sm:p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-800 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                      Deficient Range
                    </span>
                    <span className="text-xs font-bold text-rose-700">&lt; 11.5 g/dL (Critical)</span>
                  </div>

                  <h4 className="text-lg font-bold text-[#0F2942] mb-1.5 text-left group-hover:text-rose-800 transition-colors">
                    Anemic Erythrocytes (Low Hemoglobin)
                  </h4>
                  <p className="text-xs text-slate-500 text-left mb-6">
                    Depleted cell density, microcytic/hypochromic cells, and insufficient oxygen delivery to brain, heart, and muscles.
                  </p>

                  {/* Visual RBC Chamber */}
                  <div className="bg-rose-50/50 rounded-2xl p-5 border border-rose-100 mb-6 shadow-inner min-h-[170px] flex items-center justify-center">
                    <div className="grid grid-cols-6 gap-3 w-full">
                      {Array.from({ length: 18 }).map((_, i) => {
                        const isDeficient = i % 2 === 0 || i % 3 === 0;
                        return (
                          <div
                            key={i}
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-[9px] font-bold transition-all duration-300 ${
                              isDeficient
                                ? 'border border-dashed border-rose-300 bg-rose-100/40 text-rose-400 group-hover:scale-90 group-hover:opacity-60'
                                : 'bg-rose-400 border border-rose-400 text-white/90 group-hover:scale-95'
                            }`}
                          >
                            {isDeficient ? '—' : 'O₂'}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center justify-center gap-2 bg-rose-50 text-rose-800 px-4 py-2.5 rounded-xl text-xs font-bold border border-rose-200">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Tissue Hypoxia &bull; Chronic Fatigue &bull; Cardiac Strain</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Part 2: Root Causes of Hemoglobin Deficiency */}
        <div className="mb-24">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F2942]">
                Root Causes of Hemoglobin Deficiency
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                Dr. Hassam conducts Complete Blood Counts (CBC), serum ferritin, and iron profiles to determine the exact underlying pathology.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {anemiaCauses.map((cause, index) => (
              <RevealOnScroll key={index} direction="up" delayMs={index * 60}>
                <div className="group bg-white/90 backdrop-blur-sm hover:bg-white rounded-2xl p-4 sm:p-5 border border-[#CDE8E2] hover:border-[#13857B]/50 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-3.5 cursor-pointer h-full">
                  <div className="w-8 h-8 rounded-xl bg-[#E6F5F2] text-[#0E6F66] group-hover:bg-[#0E6F66] group-hover:text-white flex items-center justify-center font-bold text-xs shrink-0 transition-all duration-300 shadow-xs">
                    {index + 1}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#0F2942] group-hover:text-[#0E6F66] transition-colors">
                    {cause}
                  </span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Part 3: Interactive Symptoms Checker */}
        <RevealOnScroll direction="up" delayMs={100}>
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-[#CDE8E2] shadow-lg max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-[#E6F5F2] px-3.5 py-1 rounded-full border border-[#CDE8E2] shadow-xs">
                Clinical Self-Assessment Tool
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F2942] mt-3">
                Are You Experiencing Any of These Clinical Symptoms?
              </h3>
              <p className="text-slate-600 text-sm mt-1.5 max-w-xl mx-auto">
                Select any symptoms you are experiencing to generate a structured consultation inquiry for Dr. Hassam.
              </p>
            </div>

            {/* Interactive Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {anemiaSymptoms.map((symptom) => {
                const isSelected = selectedSymptoms.includes(symptom.name);
                const IconComponent = symptom.icon;

                return (
                  <button
                    key={symptom.id}
                    type="button"
                    onClick={() => toggleSymptom(symptom.name)}
                    className={`flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer text-left relative ${
                      isSelected
                        ? 'bg-[#0E6F66] text-white border-[#0E6F66] shadow-lg scale-102 ring-2 ring-[#0E6F66]/30'
                        : 'bg-[#F4FAF8] text-[#0F2942] border-[#CDE8E2] hover:border-[#13857B]/40 hover:bg-white hover:shadow-md'
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#E6F5F2] text-[#0E6F66]'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0 pr-4">
                      <p className="font-bold text-sm leading-snug">
                        {symptom.name}
                      </p>
                      <p
                        className={`text-xs mt-1 leading-relaxed ${
                          isSelected ? 'text-teal-100' : 'text-slate-600'
                        }`}
                      >
                        {symptom.clinicalNote}
                      </p>
                    </div>

                    {isSelected && (
                      <span className="w-5 h-5 bg-white text-[#0E6F66] rounded-full flex items-center justify-center text-xs font-black shrink-0 shadow-xs">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* WhatsApp CTA Bar */}
            <div className="text-center pt-2">
              <button
                onClick={handleConsultNow}
                className="inline-flex items-center gap-3 bg-[#0E6F66] hover:bg-[#13857B] text-white px-8 py-4 rounded-2xl text-base sm:text-lg font-bold shadow-xl shadow-teal-900/15 hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group cursor-pointer"
              >
                <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <span className="block leading-tight">
                    Consult Dr. Hassam via WhatsApp ({selectedSymptoms.length} Selected)
                  </span>
                  <span className="block text-xs text-teal-100 mt-0.5">
                    Early detection &amp; timely workup prevents cardiovascular &amp; immunological complications
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-slate-500 mt-3 flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Diagnostic lab tests (CBC, Serum Ferritin, Iron Profile) are eligible for the clinic 20% discount.</span>
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default AnemiaHub;
