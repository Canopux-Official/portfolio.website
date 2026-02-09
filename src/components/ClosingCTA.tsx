import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ClosingCTA = () => {
  return (
    <section className="py-24" style={{ backgroundColor: 'rgba(11, 15, 20, 0.85)' }}>
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <p className="text-2xl md:text-3xl font-medium text-foreground mb-8">
          One solid conversation can change everything.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">
            Contact
            <ArrowRight size={18} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ClosingCTA;
