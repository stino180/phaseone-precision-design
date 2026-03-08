import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import LogoCarousel from "@/components/LogoCarousel";
import ProcessSection from "@/components/ProcessSection";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <LogoCarousel />
      <ProcessSection />
      <ConsultationSection />
      <Footer />
    </div>
  );
};

export default Index;
