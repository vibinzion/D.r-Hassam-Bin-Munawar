import { ClinicProvider } from './context/ClinicContext'
import DemoBanner from './components/DemoBanner'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SpecialtiesSection from './components/SpecialtiesSection'
import DiabetesCareCenter from './components/DiabetesCareCenter'
import AnemiaHub from './components/AnemiaHub'
import WelfareCare from './components/WelfareCare'
import AppointmentBooking from './components/AppointmentBooking'
import Footer from './components/Footer'
import AIChatbot from './components/AIChatbot'
import DiscountModal from './components/DiscountModal'
import DemoControlsModal from './components/DemoControlsModal'

function App() {
  return (
    <ClinicProvider>
      <div className="min-h-screen bg-gradient-to-b from-[#EAF6F3] via-[#F4FBF9] to-[#EBF7F4] text-[#0F2942] relative selection:bg-teal-700 selection:text-white">
        <DemoBanner />
        <Navbar />
        <main>
          <HeroSection />
          <SpecialtiesSection />
          <DiabetesCareCenter />
          <AnemiaHub />
          <WelfareCare />
          <AppointmentBooking />
        </main>
        <Footer />
        <AIChatbot />
        <DiscountModal />
        <DemoControlsModal />
      </div>
    </ClinicProvider>
  )
}

export default App
