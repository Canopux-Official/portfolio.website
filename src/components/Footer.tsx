const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50" style={{ backgroundColor: 'rgba(11, 15, 20, 0.85)' }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted-foreground text-sm">
            © {currentYear} Canopux. Built with focus.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href="#approach"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How We Work
            </a>
            <a
              href="#people"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              People
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
