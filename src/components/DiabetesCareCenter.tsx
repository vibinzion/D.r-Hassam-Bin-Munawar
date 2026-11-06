import React from 'react';
import {
  Droplets,
  AlertTriangle,
  Activity,
  Apple,
  Dumbbell,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck,
  ArrowRight,
  ArrowUpRight,
  Stethoscope,
} from 'lucide-react';
import { diabetesTypes, organWarnings } from '../data/clinicData';
import { useClinic } from '../context/ClinicContext';
import RevealOnScroll from './RevealOnScroll';

const DiabetesCareCenter: React.FC = () => {
  const { openWhatsApp } = useClinic();

  const handleConsultation = () => {
    const msg = `🩺 *Diabetes Management & Organ Defense Consultation*\n\nDear Dr. Hassam Bin Munawar,\nI would like to schedule a comprehensive glycemic evaluation and diabetes review at your clinic in Sahiwal.\n\nPlease share available consultation slots. Thank you!`;
    openWhatsApp(msg);
  };

  return (
    <section id="diabetes" className="py-20 lg:py-28 bg-[#EFF9F6] relative border-b border-[#CDE8E2]">
      {/* Subtle Mint Glow Backdrop */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#BCE2DA]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#13857B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Section Heading */}
        <RevealOnScroll direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#E6F5F2] text-teal-900 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3 border border-[#CDE8E2]">
              <Droplets className="w-4 h-4 text-[#0E6F66] animate-pulse" />
              <span>Specialized Endocrinology &amp; Diabetes Hub</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2942] tracking-tight">
              Comprehensive Diabetes Care Center
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed">
              Evidence-based management of all clinical variations of diabetes with proactive organ protection protocols, continuous monitoring, and individualized glycemic targets.
            </p>
          </div>
        </RevealOnScroll>

        {/* Full-Width Clinical Highlight Card (No Stethoscope Image) */}
        <RevealOnScroll direction="up" delayMs={100}>
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl border border-[#CDE8E2] shadow-sm p-8 sm:p-10 lg:p-12 mb-20 hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Clinical Rationale & Action */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-800 bg-[#E6F5F2] px-3.5 py-1 rounded-full border border-[#CDE8E2]">
                  <Stethoscope className="w-3.5 h-3.5 text-[#0E6F66]" />
                  <span>Clinical Precision &amp; Metabolic Control</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F2942] tracking-tight leading-snug">
                  Targeted Glycemic Goals to Prevent Long-Term Organ Complications
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Diabetes is not merely an elevated blood sugar number—it is a systemic metabolic condition that impacts every vessel in the body. Dr. Hassam utilizes modern pharmacotherapy, quarterly HbA1c profiling, and individualized lifestyle plans to keep glucose stable and protect vital organs.
                </p>

                <div className="pt-2">
                  <button
                    onClick={handleConsultation}
                    className="inline-flex items-center gap-2 bg-[#0E6F66] hover:bg-[#13857B] text-white font-bold px-6 py-3.5 rounded-xl text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    <span>Consult Dr. Hassam for Diabetes Care</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: 2x2 Grid of 4 Glycemic Check Pillars */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'HbA1c & Sugar Profiling',
                    description: 'Continuous quarterly glucose checks & glycemic trend mapping.',
                    delayMs: 75,
                  },
                  {
                    title: 'Renal Microalbumin',
                    description: 'Proactive eGFR evaluation to halt silent kidney stress early.',
                    delayMs: 150,
                  },
                  {
                    title: 'Insulin Optimization',
                    description: 'Precise titration of insulin and modern oral agents.',
                    delayMs: 225,
                  },
                  {
                    title: 'Cardio Protection',
                    description: 'Blood pressure and lipid defense against vascular events.',
                    delayMs: 300,
                  },
                ].map((pillar) => (
                  <RevealOnScroll key={pillar.title} direction="up" delayMs={pillar.delayMs}>
                    <div
                      onClick={handleConsultation}
                      className="group relative overflow-hidden rounded-2xl bg-white p-5 border border-[#CDE8E2] shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-[#0E6F66]/50 cursor-pointer flex flex-col justify-between h-full"
                    >
                      {/* Left-edge teal accent bar that smoothly expands on hover */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0E6F66] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

                      <div>
                        <div className="flex items-center justify-between mb-3.5">
                          <div className="w-11 h-11 rounded-xl bg-[#E8F6F3] text-[#0E6F66] flex items-center justify-center transition-all duration-300 ease-out group-hover:bg-[#0E6F66] group-hover:text-white group-hover:scale-110 group-hover:shadow-md">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-[#0E6F66] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                        </div>

                        <h4 className="font-bold text-[#0F2942] group-hover:text-[#0E6F66] transition-colors duration-300 text-sm mb-1 leading-snug">
                          {pillar.title}
                        </h4>
                        <p className="text-slate-500 text-xs leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Part 1: 6 Types of Diabetes Grid */}
        <div className="mb-24">
          <RevealOnScroll direction="up">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 pb-4 border-b border-[#CDE8E2]">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F2942]">
                  6 Types of Diabetes We Diagnose &amp; Manage
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Precise clinical classification determines the correct pharmacotherapy and lifestyle protocols.
                </p>
              </div>
              <span className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 bg-white/90 px-3.5 py-1.5 rounded-full border border-[#CDE8E2] shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#0E6F66]" /> Full Spectrum Diagnostic Protocol
              </span>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diabetesTypes.map((type, idx) => {
              const IconComponent = type.icon;
              return (
                <RevealOnScroll key={type.id} direction="up" delayMs={idx * 80}>
                  <div className="group bg-white/95 backdrop-blur-sm rounded-3xl border border-[#CDE8E2] p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-[#13857B]/50 hover:-translate-y-1.5 transition-all duration-300 relative flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-start justify-between mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-[#E6F5F2] text-[#0E6F66] flex items-center justify-center group-hover:bg-[#0E6F66] group-hover:text-white transition-all duration-300 shadow-xs">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-semibold text-slate-700 bg-[#EFF9F6] px-3 py-1 rounded-full border border-[#CDE8E2]">
                          {type.badge}
                        </span>
                      </div>

                      <h4 className="font-bold text-[#0F2942] text-lg mb-2.5 group-hover:text-[#0E6F66] transition-colors">
                        {type.title}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                        {type.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#E2F1ED] flex items-center text-xs text-[#0E6F66] font-semibold group-hover:translate-x-1 transition-transform">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-[#0E6F66]" />
                      <span>Evidence-Based Clinical Protocol</span>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>

        {/* Part 2: Organ Protection Hub */}
        <div className="mb-24">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-900 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3 border border-amber-200">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <span>Diabetes: Proactive Complication Prevention</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F2942] tracking-tight">
                Protect Your 5 Vital Organs Before Damage Occurs
              </h3>
              <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
                Uncontrolled blood sugar silently weakens microcapillaries and vital nerve pathways. Regular clinical screening identifies damage in its reversible stages.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {organWarnings.map((warning, idx) => {
              const IconComponent = warning.icon;
              return (
                <RevealOnScroll key={warning.id} direction="up" delayMs={idx * 75}>
                  <div className="group bg-white/95 backdrop-blur-sm rounded-3xl shadow-xs border border-[#CDE8E2] overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:border-[#13857B]/50 transition-all duration-300 flex flex-col justify-between h-full">
                    {/* Subtle Top Accent Line */}
                    <div className="h-1.5 w-full bg-[#0E6F66] group-hover:bg-[#13857B] transition-colors" />

                    <div className="p-5 flex-1 flex flex-col">
                      <div className="w-12 h-12 rounded-2xl bg-[#E6F5F2] text-[#0E6F66] flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-[#0E6F66] group-hover:text-white transition-all duration-300 shadow-xs">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                        Target Area
                      </span>
                      <h4 className="font-extrabold text-[#0F2942] text-base group-hover:text-[#0E6F66] transition-colors">
                        {warning.organ}
                      </h4>
                      <p className="text-[#0E6F66] text-xs font-bold mt-1">
                        {warning.condition}
                      </p>
                      <p className="text-slate-500 text-xs mt-2.5 leading-relaxed flex-1">
                        {warning.description}
                      </p>
                    </div>

                    {/* Bottom Footer Note with NO truncate */}
                    <div className="px-5 py-3 bg-[#F4FAF8] border-t border-[#E2F1ED] text-[11px] font-semibold text-slate-700 flex items-center justify-between gap-2">
                      <span className="text-teal-900 font-medium leading-tight">{warning.clinicalImpact}</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-[#0E6F66] shrink-0" />
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>

        {/* Part 3: 3 Pillars Banner (Soft Mint-Teal Executive Palette) */}
        <RevealOnScroll direction="up" delayMs={100}>
          <div className="rounded-3xl p-8 sm:p-12 text-[#0F2942] shadow-lg relative overflow-hidden bg-gradient-to-br from-[#E2F3EF] via-[#ECF8F5] to-[#DCEEE9] border border-[#BCE2DA]">
            {/* Subtle Graphic Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#13857B]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="inline-block bg-teal-700/10 text-teal-800 border border-teal-700/20 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
                  Comprehensive Management Protocol
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F2942]">
                  The 3 Core Pillars of Diabetes Care
                </h3>
                <p className="text-slate-600 text-sm sm:text-base mt-2">
                  Clinical outcomes are maximized when modern medical therapies are combined with consistent monitoring and lifestyle discipline.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {/* Pillar 1 */}
                <div className="group bg-white rounded-2xl p-6 border border-[#CDE8E2] flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-[#E6F5F2] text-[#0E6F66] group-hover:bg-[#0E6F66] group-hover:text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-all duration-300">
                    <Activity className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-[#0F2942] text-lg mb-2">1. Continuous Monitoring</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Track fasting &amp; postprandial glucose, quarterly HbA1c tests, blood pressure logs, and annual renal microalbumin profiles.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="group bg-white rounded-2xl p-6 border border-[#CDE8E2] flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-[#E6F5F2] text-[#0E6F66] group-hover:bg-[#0E6F66] group-hover:text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-all duration-300">
                    <Apple className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-[#0F2942] text-lg mb-2">2. Low Glycemic Nutrition</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Targeted carbohydrate counting, portion regulation, high dietary fiber, and elimination of rapid glycemic spikes.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="group bg-white rounded-2xl p-6 border border-[#CDE8E2] flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-[#E6F5F2] text-[#0E6F66] group-hover:bg-[#0E6F66] group-hover:text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-all duration-300">
                    <Dumbbell className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-[#0F2942] text-lg mb-2">3. Daily Physical Activity</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    30 minutes of moderate aerobic exercise and resistance movement to stimulate cellular GLUT4 glucose uptake.
                  </p>
                </div>
              </div>

              {/* Bottom Consultation CTA */}
              <div className="mt-10 pt-8 border-t border-[#BCE2DA] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="font-bold text-[#0F2942] text-base">
                    Need a comprehensive glycemic assessment or insulin adjustment?
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    Dr. Hassam provides personalized consultations at Alfarid Centre, Sahiwal.
                  </p>
                </div>
                <button
                  onClick={handleConsultation}
                  className="bg-[#0E6F66] hover:bg-[#13857B] text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 text-sm cursor-pointer whitespace-nowrap"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Schedule Diabetes Checkup</span>
                </button>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default DiabetesCareCenter;
