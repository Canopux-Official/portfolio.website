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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
  );
};

export default Index;
