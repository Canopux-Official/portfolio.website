import canopuxLogo from "@/assets/canopux-footer-logo.png";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
const Footer = () => {
  const companyLinks = [{
    label: "About",
    href: "#about"
  }, {
    label: "Projects",
    href: "#projects"
  }, {
    label: "Services",
    href: "#services"
  }, {
    label: "Contact",
    href: "#contact"
  }];
  const resourceLinks = [{
    label: "Blog",
    href: "#blog"
  }, {
    label: "Privacy Policy",
    href: "#privacy"
  }, {
    label: "Terms of Service",
    href: "#terms"
  }];
  const socialLinks = [{
    icon: Facebook,
    href: "#",
    label: "Facebook"
  }, {
    icon: Twitter,
    href: "#",
    label: "X (Twitter)"
  }, {
    icon: Instagram,
    href: "#",
    label: "Instagram"
  }, {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn"
  }, {
    icon: Github,
    href: "#",
    label: "GitHub"
  }];
  return <footer className="py-16 lg:py-20" style={{
    backgroundColor: 'rgba(8, 11, 15, 0.95)'
  }}>

      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Footer Content - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Left Column - Logo & Tagline */}
          <div className="text-center md:text-left">
            <img alt="Canopux" className="h-8 w-auto mb-4 mx-auto md:mx-0" src="/lovable-uploads/4fda1949-fcec-48f2-a02d-12c298e6dbbe.png" />
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
              {companyLinks.map(link => <a key={link.label} href={link.href} className="text-sm text-muted-foreground/60 hover:text-muted-foreground/90 transition-colors duration-200 font-normal">
                  {link.label}
                </a>)}
            </div>
          </div>

          {/* Right Column - Resources & Social */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold text-foreground/90 uppercase tracking-wider mb-5">
              Resources
            </h4>
            <div className="flex flex-col gap-3 mb-8">
              {resourceLinks.map(link => <a key={link.label} href={link.href} className="text-sm text-muted-foreground/60 hover:text-muted-foreground/90 transition-colors duration-200 font-normal">
                  {link.label}
                </a>)}
            </div>

            {/* Follow Us */}
            <h4 className="text-sm font-semibold text-foreground/90 uppercase tracking-wider mb-4">
              Follow Us
            </h4>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              {socialLinks.map(social => <a key={social.label} href={social.href} aria-label={social.label} className="w-9 h-9 rounded-lg bg-muted/30 hover:bg-muted/50 flex items-center justify-center transition-colors duration-200">
                  <social.icon className="w-4 h-4 text-muted-foreground/70 hover:text-muted-foreground" />
                </a>)}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 mb-8" />

        {/* Bottom Row - Centered */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground/50 font-normal">
            © 2026 Canopux. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;