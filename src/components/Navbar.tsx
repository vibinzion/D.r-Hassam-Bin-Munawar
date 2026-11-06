import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Heart, Search, Menu, X, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { clinicConfig } from '../data/clinicConfig';
import { useClinic } from '../context/ClinicContext';

interface NavLink {
  label: string;
  sectionId: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', sectionId: 'hero' },
  { label: 'Specialties', sectionId: 'specialties' },
  { label: 'Diabetes Center', sectionId: 'diabetes' },
  { label: 'Anemia Hub', sectionId: 'anemia' },
  { label: 'Welfare Care', sectionId: 'welfare' },
  { label: 'About & Timing', sectionId: 'footer' },
];

interface SearchItem {
  title: string;
  category: string;
  sectionId: string;
  icon?: string;
}

const searchableCatalog: SearchItem[] = [
  { title: 'Diabetes Care Center (Type 1, Type 2, Gestational)', category: 'Specialty', sectionId: 'diabetes' },
  { title: 'Type 5 Malnutrition & Secondary Diabetes', category: 'Diabetes Hub', sectionId: 'diabetes' },
  { title: 'Diabetic Organ Defense (Eyes, Kidneys, Heart, Nerves, Feet)', category: 'Protection', sectionId: 'diabetes' },
  { title: 'Anemia & Low Hemoglobin (Low HB) Comprehensive Care', category: 'Specialty', sectionId: 'anemia' },
  { title: 'Anemia Symptoms Checker (Weakness, Pale Skin, Dizziness)', category: 'Self Tool', sectionId: 'anemia' },
  { title: 'Hypertension & High Blood Pressure Care', category: 'Specialty', sectionId: 'specialties' },
  { title: 'Cardiac Care, Cholesterol & ECG Health', category: 'Specialty', sectionId: 'specialties' },
  { title: 'Thyroid & Hormonal Disorders (TSH & Endocrine)', category: 'Specialty', sectionId: 'specialties' },
  { title: 'Renal (Kidney) Diseases & Nephropathy Monitoring', category: 'Specialty', sectionId: 'specialties' },
  { title: 'Liver, Stomach Acidity (GERD), IBS & Chest Allergy', category: 'Specialty', sectionId: 'specialties' },
  { title: 'Weight & Lifestyle Management & Obesity', category: 'Specialty', sectionId: 'specialties' },
  { title: 'General & Family Medicine OPD & Screenings', category: 'Specialty', sectionId: 'specialties' },
  { title: 'Free Treatment & Blood Transfusion for Thalassemia', category: 'Welfare', sectionId: 'welfare' },
  { title: 'Free Sunday Welfare Medical Camp & Free Medicines', category: 'Welfare', sectionId: 'welfare' },
  { title: '20% Special Discount on Consultations, Medicines & Labs', category: 'Discount', sectionId: 'welfare' },
  { title: 'Clinic Timings: Mon-Sat 4:00 PM – 10:00 PM', category: 'Timing', sectionId: 'footer' },
  { title: 'Clinic Location: Alfarid Blood Bank, DHQ Road, Sahiwal', category: 'Address', sectionId: 'appointment' },
  { title: 'Book Appointment & Consultation Pass', category: 'Booking', sectionId: 'appointment' },
];

const Navbar: React.FC = () => {
  const { openDiscountModal } = useClinic();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Scroll listener for sticky styles & active section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const scrollPosition = window.scrollY + 140;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].sectionId);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close search dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, []);

  const filteredItems = searchQuery.trim()
    ? searchableCatalog.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSelectSearchItem = (sectionId: string) => {
    scrollToSection(sectionId);
    setSearchQuery('');
    setIsSearchOpen(false);
  };

  const handleBookClick = () => {
    scrollToSection('appointment');
  };

  return (
    <nav
      className={`sticky top-0 z-40 w-full bg-[#F4FBF9]/95 backdrop-blur-md transition-all duration-300 border-b ${
        isScrolled ? 'shadow-md border-[#CDE8E2] bg-white/95' : 'border-[#CDE8E2] shadow-xs'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Left: Brand Identity */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex flex-shrink-0 items-center gap-3 text-left group cursor-pointer focus:outline-none"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#0E6F66] to-[#13857B] text-white shadow-md shadow-[#0E6F66]/20 group-hover:scale-105 transition-transform">
              <Heart className="h-6 w-6 text-white fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold leading-tight text-[#0F2942] group-hover:text-[#0E6F66] transition-colors">
                {clinicConfig.DOCTOR_NAME}
              </span>
              <span className="text-[11px] sm:text-xs font-semibold leading-tight text-[#0E6F66]">
                General &amp; Family Physician &bull; Diabetologist
              </span>
            </div>
          </button>

          {/* Center: Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => scrollToSection(link.sectionId)}
                className={`rounded-xl px-3 py-2 text-xs font-bold transition-all duration-200 cursor-pointer ${
                  activeSection === link.sectionId
                    ? 'bg-[#E8F6F3] text-[#0E6F66]'
                    : 'text-[#0F2942] hover:bg-gray-100 hover:text-[#0E6F66]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right: Live Search + CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Live Search Input with Autocomplete Dropdown */}
            <div className="relative" ref={searchContainerRef}>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  onFocus={() => {
                    if (searchQuery.trim()) setIsSearchOpen(true);
                  }}
                  placeholder="Search treatments, symptoms, specialties..."
                  className="w-64 lg:w-72 xl:w-80 rounded-full border border-gray-200 bg-[#F2FAF8] py-2 pl-9 pr-4 text-xs font-medium text-[#0F2942] placeholder-gray-400 transition-all duration-200 focus:border-[#0E6F66] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E6F66]/20"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setIsSearchOpen(false);
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Live Search Autocomplete Popup */}
              {isSearchOpen && searchQuery.trim().length > 0 && (
                <div className="absolute right-0 mt-2 w-80 lg:w-96 rounded-2xl bg-white p-2 shadow-2xl border border-[#D5ECE8] z-50 max-h-80 overflow-y-auto animate-fade-in-up">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-100 flex items-center justify-between">
                    <span>Clinical Matches ({filteredItems.length})</span>
                    <span className="text-[#0E6F66]">Click to Jump</span>
                  </div>

                  {filteredItems.length === 0 ? (
                    <div className="p-4 text-center text-xs text-gray-500">
                      <p>No exact match for "{searchQuery}".</p>
                      <button
                        onClick={handleBookClick}
                        className="mt-2 text-xs font-bold text-[#0E6F66] hover:underline"
                      >
                        Ask directly in appointment form &rarr;
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-1 pt-1">
                      {filteredItems.map((item, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSelectSearchItem(item.sectionId)}
                          className="w-full text-left p-2.5 rounded-xl hover:bg-[#F2FAF8] transition-colors flex items-start gap-2.5 group cursor-pointer"
                        >
                          <div className="w-6 h-6 rounded-lg bg-[#E8F6F3] text-[#0E6F66] flex items-center justify-center shrink-0 text-xs mt-0.5">
                            🔍
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold text-[#0F2942] group-hover:text-[#0E6F66] transition-colors truncate">
                              {item.title}
                            </p>
                            <span className="text-[10px] font-semibold text-gray-400">
                              {item.category}
                            </span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#0E6F66] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Book Appointment Teal CTA Button */}
            <button
              onClick={handleBookClick}
              className="inline-flex items-center gap-2 rounded-full bg-[#0E6F66] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-[#0E6F66]/20 transition-all duration-200 hover:bg-[#13857B] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu & Search Icon Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={handleBookClick}
              className="bg-[#0E6F66] text-white text-xs font-bold px-3 py-2 rounded-xl flex items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5" /> Book
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-xl p-2.5 text-[#0F2942] bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-[#D5ECE8] bg-white px-4 pt-3 pb-6 space-y-4 md:hidden animate-fade-in-up shadow-xl">
          {/* Mobile Search */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatments, symptoms..."
              className="w-full bg-[#F2FAF8] border border-[#D5ECE8] rounded-xl py-2.5 pl-10 pr-4 text-xs font-medium text-[#0F2942]"
            />
          </div>

          {searchQuery.trim() && (
            <div className="bg-[#F2FAF8] rounded-2xl p-2 border border-[#D5ECE8] space-y-1 max-h-48 overflow-y-auto">
              {filteredItems.slice(0, 5).map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectSearchItem(item.sectionId)}
                  className="w-full text-left p-2 rounded-lg text-xs font-semibold text-[#0F2942] hover:bg-white flex items-center justify-between"
                >
                  <span className="truncate">{item.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0E6F66] shrink-0" />
                </button>
              ))}
            </div>
          )}

          {/* Navigation links */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => scrollToSection(link.sectionId)}
                className={`p-3 rounded-xl text-xs font-bold text-left transition-colors cursor-pointer ${
                  activeSection === link.sectionId
                    ? 'bg-[#E8F6F3] text-[#0E6F66]'
                    : 'bg-gray-50 text-[#0F2942] hover:bg-gray-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* 20% discount shortcut */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              openDiscountModal();
            }}
            className="w-full bg-gradient-to-r from-amber-400/20 to-teal-50 border border-amber-300 rounded-xl p-3 text-xs font-bold text-[#0F2942] flex items-center justify-between"
          >
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Claim 20% Discount Voucher
            </span>
            <span className="text-[#0E6F66] font-bold">HASSAM20 &rarr;</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
