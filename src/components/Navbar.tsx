import { useState, useEffect } from "react";
import { Menu, X, Search, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["About", "Therapeutic Areas", "Pipeline", "News", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4 md:pt-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left pill: Logo + Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex items-center gap-3 bg-nav-dark text-nav-dark-foreground rounded-full px-5 py-3 transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}
        >
          <a href="/" className="flex items-center gap-1.5 shrink-0">
            <span className="text-base font-bold tracking-tight text-nav-dark-foreground">
              AMOGEN
            </span>
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-nav-dark-foreground/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </motion.div>

        {/* Right pill: Search + Globe + Partner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`hidden md:flex items-center gap-2 bg-nav-dark text-nav-dark-foreground rounded-full px-3 py-2 transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}
        >
          <button className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-nav-dark-foreground/10 transition-colors" aria-label="Search">
            <Search size={17} />
          </button>
          <button className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-nav-dark-foreground/10 transition-colors" aria-label="Language">
            <Globe size={17} />
          </button>
          <a
            href="#contact"
            className="flex items-center gap-2 text-sm font-medium px-5 py-2 rounded-full hover:bg-nav-dark-foreground/10 transition-colors"
          >
            Partner With Us
          </a>
        </motion.div>
      </div>

      {/* Fullscreen menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 left-0 bg-nav-dark z-40"
          >
            <div className="flex flex-col items-start justify-center h-full px-8 md:px-16 lg:px-24">
              <nav className="flex flex-col gap-2">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.07 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-nav-dark-foreground hover:text-nav-dark-foreground/70 transition-colors duration-200 py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-12"
              >
                <a
                  href="#contact"
                  className="text-lg font-medium text-nav-dark-foreground/60 hover:text-nav-dark-foreground transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Partner With Us →
                </a>
              </motion.div>
            </div>

            {/* Close button in overlay */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 left-8 md:left-12 flex items-center gap-3 bg-nav-dark-foreground/10 text-nav-dark-foreground rounded-full px-5 py-3"
              aria-label="Close menu"
            >
              <span className="text-base font-bold tracking-tight">AMOGEN</span>
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
