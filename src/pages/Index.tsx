import { useState, useEffect } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import QuickInfoGrid from "@/components/QuickInfoGrid";
import IntroductionSection from "@/components/IntroductionSection";
import DivineRootsSection from "@/components/DivineRootsSection";
import TrimurtiSection from "@/components/TrimurtiSection";
import MahamaghamSection from "@/components/MahamaghamSection";
import ValluvanadSection from "@/components/ValluvanadSection";
import DisruptionSection from "@/components/DisruptionSection";
import RevivalSection from "@/components/RevivalSection";
import MaghaMasamSection from "@/components/MaghaMasamSection";
import BharathappuzhaSection from "@/components/BharathappuzhaSection";
import CallToDharmaSection from "@/components/CallToDharmaSection";
import EventScheduleSection from "@/components/EventScheduleSection";
import GallerySection from "@/components/GallerySection";
import FooterSection from "@/components/FooterSection";
import RegistrationModal from "@/components/RegistrationModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  // Auto popup after 5 seconds
  useEffect(() => {
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
        setHasShownPopup(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [hasShownPopup]);

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navigation onRegisterClick={handleRegisterClick} />
      <main>
        <HeroSection onRegisterClick={handleRegisterClick} />
        <QuickInfoGrid onRegisterClick={handleRegisterClick} />
        <IntroductionSection />
        <EventScheduleSection onRegisterClick={handleRegisterClick} />
        <GallerySection />
        <DivineRootsSection />
        <TrimurtiSection onRegisterClick={handleRegisterClick} />
        <MahamaghamSection />
        <ValluvanadSection />
        <DisruptionSection />
        <RevivalSection onRegisterClick={handleRegisterClick} />
        <MaghaMasamSection />
        <BharathappuzhaSection />
        <CallToDharmaSection />
        <FooterSection onRegisterClick={handleRegisterClick} />
      </main>
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Index;
