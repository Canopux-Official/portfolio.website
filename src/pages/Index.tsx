import { useEffect, useState } from "react";
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
  const [saturnOpacity, setSaturnOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Start fading after hero (1 viewport height)
      // Fully faded by ~3.5 viewport heights (before Projects section)
      const fadeStart = viewportHeight * 0.8;
      const fadeEnd = viewportHeight * 3.5;
      
      if (scrollY <= fadeStart) {
        setSaturnOpacity(1);
      } else if (scrollY >= fadeEnd) {
        setSaturnOpacity(0);
      } else {
        // Smooth eased fade between start and end
        const progress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        // Use ease-out curve for more natural fade
        const easedProgress = 1 - Math.pow(1 - progress, 2);
        setSaturnOpacity(1 - easedProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Saturn background with scroll-based fade */}
      <img
        src={saturnBackground}
        alt=""
        className="fixed top-0 left-0 w-screen h-screen object-cover pointer-events-none z-0 transition-opacity duration-100"
        style={{ opacity: saturnOpacity }}
        aria-hidden="true"
      />
      
      {/* Main content */}
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
