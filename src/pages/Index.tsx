import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ApproachSection from "@/components/ApproachSection";
import ProjectsSection from "@/components/ProjectsSection";
import PeopleSection from "@/components/PeopleSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import saturnBackground from "@/assets/saturn-background.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Saturn background layer */}
      <img
        src={saturnBackground}
        alt=""
        className="fixed top-0 left-0 w-screen h-screen object-cover pointer-events-none z-0"
        aria-hidden="true"
      />
      
      {/* Main content wrapper */}
      <div className="relative z-[2]">
        <Navigation />
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <ApproachSection />
        <ProjectsSection />
        <PeopleSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
