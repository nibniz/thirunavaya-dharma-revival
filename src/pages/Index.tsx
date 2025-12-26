import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
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
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <IntroductionSection />
        <DivineRootsSection />
        <TrimurtiSection />
        <MahamaghamSection />
        <ValluvanadSection />
        <DisruptionSection />
        <RevivalSection />
        <MaghaMasamSection />
        <BharathappuzhaSection />
        <CallToDharmaSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
