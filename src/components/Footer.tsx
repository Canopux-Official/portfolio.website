import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const companyLinks = [
    { label: "People", href: "/people" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];
  const resourceLinks = [
    { label: "Blog", href: "#" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-and-conditions" },
  ];
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61573815500432", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/Canopux_team", label: "X (Twitter)" },
    { icon: Instagram, href: "https://www.instagram.com/canopux_team/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/canopux/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Canopux-Official", label: "GitHub" },
  ];

  return (
    <footer className="py-16 lg:py-20" style={{ backgroundColor: 'rgba(8, 11, 15, 0.95)' }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          <div className="text-center md:text-left">
            <img
              alt="Canopux"
              className="h-8 w-auto mb-4 mx-auto md:mx-0"
              src="/lovable-uploads/4fda1949-fcec-48f2-a02d-12c298e6dbbe.png"
              width="128"
              height="32"
              loading="lazy"
            />
            <p className="text-sm text-muted-foreground/80 font-medium mb-4">A Builder Collective</p>
            <div className="w-12 h-0.5 bg-primary/50 mx-auto md:mx-0" />
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold text-foreground/90 uppercase tracking-wider mb-5">Company</h4>
            <div className="flex flex-col gap-3">
              {companyLinks.map(link => (
                <Link key={link.label} to={link.href} className="text-sm text-muted-foreground/60 hover:text-muted-foreground/90 transition-colors duration-200 font-normal">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold text-foreground/90 uppercase tracking-wider mb-5">Resources</h4>
            <div className="flex flex-col gap-3 mb-8">
              {resourceLinks.map(link =>
                link.href.startsWith("/") ? (
                  <Link key={link.label} to={link.href} className="text-sm text-muted-foreground/60 hover:text-muted-foreground/90 transition-colors duration-200 font-normal">
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.label} href={link.href} className="text-sm text-muted-foreground/60 hover:text-muted-foreground/90 transition-colors duration-200 font-normal">
                    {link.label}
                  </a>
                )
              )}
            </div>

            <h4 className="text-sm font-semibold text-foreground/90 uppercase tracking-wider mb-4">Follow Us</h4>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              {socialLinks.map(social => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="w-9 h-9 rounded-lg bg-muted/30 hover:bg-muted/50 flex items-center justify-center transition-colors duration-200">
                  <social.icon className="w-4 h-4 text-muted-foreground/70 hover:text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 mb-8" />
        <div className="text-center">
          <p className="text-xs text-muted-foreground/50 font-normal">© 2026 Canopux. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
