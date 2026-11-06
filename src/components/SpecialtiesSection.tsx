import React, { useState, useMemo } from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { specialties } from '../data/clinicData';
import { scrollToSection } from '../utils/helpers';
import RevealOnScroll from './RevealOnScroll';

const SpecialtiesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = useMemo(() => {
    const unique = Array.from(new Set(specialties.map((s) => s.category)));
    return ['All', ...unique];
  }, []);

  const filteredSpecialties = useMemo(() => {
    if (activeFilter === 'All') return specialties;
    return specialties.filter((s) => s.category === activeFilter);
  }, [activeFilter]);

  const handleCardClick = (specialtyTitle: string) => {
    if (specialtyTitle.toLowerCase().includes('diabet')) {
      scrollToSection('diabetes');
    } else {
      scrollToSection('appointment');
    }
  };

  return (
    <section id="specialties" className="py-20 lg:py-24 bg-gradient-to-b from-[#EBF7F4] via-[#F4FBF9] to-[#EAF6F3] relative border-b border-[#CDE8E2]">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#13857B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <RevealOnScroll direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 pb-4 border-b border-[#CDE8E2]">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 uppercase tracking-wider mb-2 bg-[#E6F5F2] px-3 py-1 rounded-full border border-[#CDE8E2]">
                <Sparkles className="w-3.5 h-3.5 text-[#0E6F66]" />
                <span>Comprehensive Clinical Specialties</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2942] tracking-tight">
                Our Specialties &amp; Conditions We Treat
              </h2>
              <p className="text-slate-600 mt-1.5 text-sm sm:text-base">
                Evidence-based clinical diagnosis and compassionate outpatient management for all age groups.
              </p>
            </div>
            <button
              onClick={() => setActiveFilter('All')}
              className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-[#0E6F66] font-bold text-sm hover:underline cursor-pointer"
            >
              <span>View All ({specialties.length})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </RevealOnScroll>

        {/* Filter Pills Bar */}
        <RevealOnScroll direction="up" delayMs={75}>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === category
                    ? 'bg-[#0E6F66] text-white shadow-md'
                    : 'bg-white/90 text-slate-700 border border-[#CDE8E2] hover:bg-[#E6F5F2]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Specialty Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSpecialties.map((specialty, idx) => {
            const IconComponent = specialty.icon;
            return (
              <RevealOnScroll key={specialty.id} direction="up" delayMs={idx * 50}>
                <div
                  onClick={() => handleCardClick(specialty.title)}
                  className="group bg-white/95 backdrop-blur-sm rounded-3xl border border-[#CDE8E2] p-6 shadow-xs hover:shadow-xl hover:border-[#13857B]/50 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="rounded-2xl bg-[#E6F5F2] p-3.5 w-14 h-14 flex items-center justify-center text-[#0E6F66] group-hover:bg-[#0E6F66] group-hover:text-white transition-all duration-300 shadow-xs">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      {specialty.badge && (
                        <span className="text-[11px] font-semibold text-teal-800 bg-[#EFF9F6] px-2.5 py-1 rounded-full border border-[#CDE8E2]">
                          {specialty.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-[#0F2942] font-bold text-lg group-hover:text-[#0E6F66] transition-colors leading-snug">
                      {specialty.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2.5 leading-relaxed">
                      {specialty.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E2F1ED] flex items-center justify-between text-xs text-[#0E6F66] font-semibold group-hover:translate-x-1 transition-transform">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Book Consultation
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
