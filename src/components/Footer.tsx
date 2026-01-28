import canopuxLogo from "@/assets/canopux-footer-logo.png";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const companyLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const resourceLinks = [
    { label: "Blog", href: "#blog" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "X (Twitter)" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="relative py-16 lg:py-20 overflow-hidden">
      {/* Gradient background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, hsl(220 25% 8%) 0%, hsl(230 20% 12%) 50%, hsl(220 20% 10%) 100%)'
        }}
      />
      
      {/* Subtle gradient orbs */}
      <div 
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full z-0 opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(260 60% 30% / 0.3) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div 
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full z-0 opacity-25"
        style={{
          background: 'radial-gradient(circle, hsl(215 70% 35% / 0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div 
        className="absolute top-1/2 right-10 w-64 h-64 rounded-full z-0 opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(270 50% 40% / 0.2) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer Content - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Left Column - Logo & Tagline */}
          <div className="text-center md:text-left">
            <img 
              src={canopuxLogo} 
              alt="Canopux" 
              className="h-8 w-auto mb-4 mx-auto md:mx-0" 
            />
            <p className="text-sm text-muted-foreground/80 font-medium mb-4">
              A Builder Collective
            </p>
            {/* Accent line */}
            <div className="w-12 h-0.5 bg-primary/50 mx-auto md:mx-0" />
          </div>

          {/* Center Column - Company */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold text-foreground/90 uppercase tracking-wider mb-5">
              Company
            </h4>
            <div className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground/60 hover:text-muted-foreground/90 transition-colors duration-200 font-normal"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Resources & Social */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold text-foreground/90 uppercase tracking-wider mb-5">
              Resources
            </h4>
            <div className="flex flex-col gap-3 mb-8">
              {resourceLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground/60 hover:text-muted-foreground/90 transition-colors duration-200 font-normal"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Follow Us */}
            <h4 className="text-sm font-semibold text-foreground/90 uppercase tracking-wider mb-4">
              Follow Us
            </h4>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-muted/30 hover:bg-muted/50 flex items-center justify-center transition-colors duration-200"
                >
                  <social.icon className="w-4 h-4 text-muted-foreground/70 hover:text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 mb-8" />

        {/* Bottom Row - Centered */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground/50 font-normal">
            © 2025 Canopux. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
