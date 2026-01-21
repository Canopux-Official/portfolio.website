import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Label */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-border bg-secondary/50 mb-8 opacity-0 animate-fade-in">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-normal">A Builder Collective</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-6 opacity-0 animate-fade-in animation-delay-200">
            Quietly building what matters.
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in animation-delay-400 leading-relaxed font-normal">
            A small group of builders crafting web platforms, AI systems, and startup MVPs.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in animation-delay-400">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                Let's Build Together
                <ArrowRight size={18} />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
