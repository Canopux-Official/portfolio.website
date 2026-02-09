import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import saturnBackground from "@/assets/saturn-background.png";

interface PageWrapperProps {
  children: React.ReactNode;
  showSaturn?: boolean;
}

const PageWrapper = ({ children, showSaturn = false }: PageWrapperProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {showSaturn && (
        <img
          src={saturnBackground}
          alt=""
          loading="lazy"
          width="1920"
          height="1080"
          className="fixed top-0 left-0 w-screen h-screen object-cover pointer-events-none z-0"
          aria-hidden="true"
        />
      )}
      <div className="relative z-[2]">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default PageWrapper;
