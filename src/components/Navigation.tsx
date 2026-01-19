import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "How We Work", href: "#approach" },
    { label: "People", href: "#people" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-xl font-semibold text-foreground tracking-tight">
            Canopux
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button key={link.label} variant="nav" size="sm" asChild>
                <a href={link.href}>{link.label}</a>
              </Button>
            ))}
            <Button variant="hero" size="sm" className="ml-4" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button variant="hero" size="default" className="w-full" asChild>
                  <a href="#contact" onClick={() => setIsOpen(false)}>Get in Touch</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
