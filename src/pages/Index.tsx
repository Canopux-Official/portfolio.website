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
      {/* Upper sections with Saturn background */}
      <div className="relative">
        {/* Saturn background - limited to upper sections */}
        <img
          src={saturnBackground}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
          aria-hidden="true"
        />
        {/* Gradient fade at the bottom */}
        <div 
          className="absolute bottom-0 left-0 w-full h-64 pointer-events-none z-[1]"
          style={{ background: 'linear-gradient(to bottom, transparent, hsl(220 20% 6%))' }}
          aria-hidden="true"
        />
        
        {/* Content above Saturn */}
        <div className="relative z-[2]">
          <Navigation />
          <HeroSection />
          <StatsSection />
          <ServicesSection />
          <ApproachSection />
        </div>
      </div>

      {/* Lower sections without Saturn */}
      <div className="relative bg-background">
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
