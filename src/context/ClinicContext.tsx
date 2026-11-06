import React, { createContext, useContext, useState, useEffect } from 'react';
import { clinicConfig } from '../data/clinicConfig';

interface ClinicContextType {
  demoMode: boolean;
  setDemoMode: (val: boolean) => void;
  activeWhatsApp: string;
  setActiveWhatsApp: (num: string) => void;
  doctorImage: string;
  setDoctorImage: (url: string) => void;
  isDiscountModalOpen: boolean;
  openDiscountModal: () => void;
  closeDiscountModal: () => void;
  isDemoControlsOpen: boolean;
  openDemoControls: () => void;
  closeDemoControls: () => void;
  preselectedConcern: string;
  setPreselectedConcern: (concern: string) => void;
  openBookingWithConcern: (concern: string) => void;
  getWhatsAppLink: (msg: string) => string;
  openWhatsApp: (msg: string) => void;
}

const ClinicContext = createContext<ClinicContextType | undefined>(undefined);

export const ClinicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [demoMode, setDemoMode] = useState<boolean>(clinicConfig.DEMO_MODE);
  const [activeWhatsApp, setActiveWhatsApp] = useState<string>(clinicConfig.ACTIVE_WHATSAPP_NUMBER);
  const [doctorImage, setDoctorImage] = useState<string>(clinicConfig.DOCTOR_IMAGE_URL);
  const [isDiscountModalOpen, setIsDiscountModalOpen] = useState<boolean>(false);
  const [isDemoControlsOpen, setIsDemoControlsOpen] = useState<boolean>(false);
  const [preselectedConcern, setPreselectedConcern] = useState<string>('Diabetes Checkup & Sugar Management');

  // Load saved preferences from localStorage in browser environment
  useEffect(() => {
    try {
      const savedPhone = localStorage.getItem('dr_hassam_wa');
      if (savedPhone) setActiveWhatsApp(savedPhone);

      const savedImg = localStorage.getItem('dr_hassam_img');
      if (savedImg) setDoctorImage(savedImg);

      const savedDemo = localStorage.getItem('dr_hassam_demo');
      if (savedDemo !== null) setDemoMode(savedDemo === 'true');
    } catch {
      // Local storage not available or blocked
    }
  }, []);

  const handleSetActiveWhatsApp = (num: string) => {
    const cleaned = num.replace(/[^0-9]/g, '');
    setActiveWhatsApp(cleaned);
    try {
      localStorage.setItem('dr_hassam_wa', cleaned);
    } catch {
      // ignore
    }
  };

  const handleSetDoctorImage = (url: string) => {
    setDoctorImage(url);
    try {
      localStorage.setItem('dr_hassam_img', url);
    } catch {
      // ignore
    }
  };

  const handleSetDemoMode = (val: boolean) => {
    setDemoMode(val);
    try {
      localStorage.setItem('dr_hassam_demo', String(val));
    } catch {
      // ignore
    }
  };

  const openDiscountModal = () => setIsDiscountModalOpen(true);
  const closeDiscountModal = () => setIsDiscountModalOpen(false);

  const openDemoControls = () => setIsDemoControlsOpen(true);
  const closeDemoControls = () => setIsDemoControlsOpen(false);

  const openBookingWithConcern = (concern: string) => {
    setPreselectedConcern(concern);
    const appointmentEl = document.getElementById('appointment');
    if (appointmentEl) {
      appointmentEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getWhatsAppLink = (msg: string) => {
    const phone = activeWhatsApp || clinicConfig.ACTIVE_WHATSAPP_NUMBER;
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  };

  const openWhatsApp = (msg: string) => {
    window.open(getWhatsAppLink(msg), '_blank');
  };

  return (
    <ClinicContext.Provider
      value={{
        demoMode,
        setDemoMode: handleSetDemoMode,
        activeWhatsApp,
        setActiveWhatsApp: handleSetActiveWhatsApp,
        doctorImage,
        setDoctorImage: handleSetDoctorImage,
        isDiscountModalOpen,
        openDiscountModal,
        closeDiscountModal,
        isDemoControlsOpen,
        openDemoControls,
        closeDemoControls,
        preselectedConcern,
        setPreselectedConcern,
        openBookingWithConcern,
        getWhatsAppLink,
        openWhatsApp,
      }}
    >
      {children}
    </ClinicContext.Provider>
  );
};

export const useClinic = () => {
  const context = useContext(ClinicContext);
  if (!context) {
    throw new Error('useClinic must be used within a ClinicProvider');
  }
  return context;
};
