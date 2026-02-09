import { useEffect, useState, Suspense, lazy } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { WithContext, ProfessionalService } from "schema-dts";

const ApproachSection = lazy(() => import("@/components/ApproachSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const PeopleSection = lazy(() => import("@/components/PeopleSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

import saturnBackground from "@/assets/saturn-background.png";

const Index = () => {
  const [saturnOpacity, setSaturnOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fadeStart = viewportHeight * 0.8;
      const fadeEnd = viewportHeight * 3.5;

      if (scrollY <= fadeStart) {
        setSaturnOpacity(1);
      } else if (scrollY >= fadeEnd) {
        setSaturnOpacity(0);
      } else {
        const progress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        const easedProgress = 1 - Math.pow(1 - progress, 2);
        setSaturnOpacity(1 - easedProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const jsonLd: WithContext<ProfessionalService> = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Canopux",
    "description": "A developer collective offering Full-stack (MERN), Android, IoT, and AI/ML services.",
    "url": window.location.origin,
    "knowsAbout": ["Software Development", "AI/ML Consulting", "Web Development", "IoT Solutions"]
  };

  return (
    <>
      <SEO
        title="Canopux | Quietly Building What Matters"
        description="Canopux is a developer collective offering Full-stack (MERN), Android, IoT, and AI/ML services. We build web platforms, AI systems, and startup MVPs."
      />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      <div className="min-h-screen bg-background">
        <img
          src={saturnBackground}
          alt=""
          loading="lazy"
          width="1920"
          height="1080"
          className="fixed top-0 left-0 w-screen h-screen object-cover pointer-events-none z-0 transition-opacity duration-100"
          style={{ opacity: saturnOpacity }}
          aria-hidden="true"
        />

        <div className="relative z-[2]">
          <Navigation />
          <main>
            <HeroSection />
            <StatsSection />
            <ServicesSection />
            <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center">Loading...</div>}>
              <ApproachSection />
              <ProjectsSection />
              <PeopleSection />
              <TestimonialsSection />
              <ContactSection />
            </Suspense>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
