const Footer = () => {
  return (
    <footer className="py-12 md:py-16 bg-background border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <a href="#" className="text-xl font-bold tracking-tighter text-foreground uppercase">
              Baseline<span className="font-light ml-1">Studio</span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Digital consultancy for the detail-obsessed.
            </p>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#process" className="hover:text-foreground transition-colors">Process</a>
            <a href="#consultation" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Baseline Studio. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Precision in every pixel.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
