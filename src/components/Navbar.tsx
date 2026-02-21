import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = ["About", "Therapeutic Areas", "Pipeline", "News", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-20 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-lg font-semibold tracking-tight text-foreground">
            AMOGEN <span className="font-light">BIO PHARMA</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide uppercase"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm tracking-wide uppercase px-6">
            Partner With Us
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide py-2"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm tracking-wide uppercase mt-4 w-full">
              Partner With Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
