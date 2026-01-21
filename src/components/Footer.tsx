import canopuxLogo from "@/assets/canopux-footer-logo.png";

const Footer = () => {
  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "How We Work", href: "#approach" },
    { label: "People", href: "#people" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-16 lg:py-20" style={{ backgroundColor: 'rgba(8, 11, 15, 0.95)' }}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Footer Content - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Left Column - Logo & Tagline */}
          <div className="text-center md:text-left">
            <img 
              src={canopuxLogo} 
              alt="Canopux" 
              className="h-7 w-auto mb-4 mx-auto md:mx-0" 
            />
            <p className="text-sm text-muted-foreground/70 font-normal">
              A builder collective.
            </p>
          </div>

          {/* Center Column - Navigation */}
          <div className="flex flex-col items-center gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground/60 hover:text-muted-foreground/90 transition-opacity duration-200 font-normal"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Column - Contact */}
          <div className="text-center md:text-right">
            <a 
              href="mailto:canopus.incglobe@gmail.com"
              className="text-sm text-muted-foreground/60 hover:text-muted-foreground/90 transition-opacity duration-200 block mb-2"
            >
              canopus.incglobe@gmail.com
            </a>
            <p className="text-sm text-muted-foreground/60 mb-4">
              Bhubaneswar, Odisha, India
            </p>
            <p className="text-xs text-muted-foreground/40 font-normal">
              Typically replies within 24 hours
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 mb-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/50 font-normal">
            © 2024 Canopux — Built by builders.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground/40 hover:text-muted-foreground/60 transition-opacity duration-200 font-normal"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground/40 hover:text-muted-foreground/60 transition-opacity duration-200 font-normal"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
