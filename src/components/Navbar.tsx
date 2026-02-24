import { useState, useEffect, useRef } from "react";
import { Search, Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type NavLinkItem = string | { label: string; href: string };

const menuData: Record<string, { description: string; href?: string; links: NavLinkItem[][] }> = {
  About: {
    description: "Learn about AMOGEN's mission to advance biopharmaceutical innovation worldwide.",
    href: "/about",
    links: [
      ["Who We Are", "What We Do", { label: "Leadership", href: "/about/leadership" }],
      ["Governance", "Sustainability"],
    ],
  },
  Products: {
    description: "Explore our portfolio of innovative medicines and therapeutic solutions.",
    links: [
      ["Pipeline Overview", "Molecule Details"],
      ["Product Labels"],
    ],
  },
  CDMO: {
    description: "World-class contract development and manufacturing capabilities.",
    links: [
      ["Manufacturing Services", "Quality Systems"],
      ["Capacity Dashboard", "RFP Process"],
    ],
  },
  Science: {
    description: "Pioneering research driving the next generation of biopharmaceutical breakthroughs.",
    href: "/science",
    links: [
      ["Technology Stack", "Publications"],
      ["Comparability Data", "Research Capabilities"],
    ],
  },
  News: {
    description: "Stay informed with the latest from AMOGEN Bio Pharma.",
    links: [
      ["Press Releases", "Blog"],
      ["Document Library", "Latest Updates"],
    ],
  },
};

const navItems = Object.keys(menuData);

const languages = [
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
  { code: "es", label: "Español" },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (item: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(item);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4 md:pt-6">
      <div
        ref={navRef}
        className="max-w-7xl mx-auto"
        onMouseLeave={handleMouseLeave}
      >
        {/* Main nav container — dark rounded box like Lilly */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`bg-nav-dark text-nav-dark-foreground transition-all duration-300 ${
            activeMenu ? "rounded-t-[1.5rem]" : "rounded-full"
          } ${scrolled ? "shadow-2xl" : "shadow-lg"}`}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 md:px-8 py-3">
            {/* Logo */}
            <a href="/" className="shrink-0">
              <span className="text-base md:text-lg font-bold tracking-tight text-nav-dark-foreground">
                AMOGEN
              </span>
            </a>

            {/* Center nav items — desktop */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const data = menuData[item];
                return (
                  <div key={item} className="relative">
                    <button
                      onMouseEnter={() => handleMouseEnter(item)}
                      onClick={() => {
                        if (data.href) {
                          window.location.href = data.href;
                        } else {
                          setActiveMenu(activeMenu === item ? null : item);
                        }
                      }}
                      className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                        activeMenu === item
                          ? "bg-nav-dark-foreground/15 text-nav-dark-foreground"
                          : "text-nav-dark-foreground/80 hover:text-nav-dark-foreground hover:bg-nav-dark-foreground/5"
                      }`}
                    >
                      {item}
                    </button>
                  </div>
                );
              })}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-1">
              <button
                className="hidden md:flex items-center justify-center w-9 h-9 rounded-full hover:bg-nav-dark-foreground/10 transition-colors"
                aria-label="Search"
              >
                <Search size={17} />
              </button>
              <div className="relative">
                <button
                  className="hidden md:flex items-center justify-center w-9 h-9 rounded-full hover:bg-nav-dark-foreground/10 transition-colors"
                  aria-label="Language"
                  onClick={() => setLangOpen(!langOpen)}
                >
                  <Globe size={17} />
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full mt-2 bg-nav-dark border border-nav-dark-foreground/15 rounded-xl shadow-xl overflow-hidden min-w-[140px]">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setCurrentLang(lang.code); setLangOpen(false); }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          currentLang === lang.code
                            ? "bg-nav-dark-foreground/15 text-nav-dark-foreground font-medium"
                            : "text-nav-dark-foreground/70 hover:bg-nav-dark-foreground/10 hover:text-nav-dark-foreground"
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <a
                href="#contact"
                className="hidden md:flex items-center text-sm font-medium px-5 py-2 rounded-full hover:bg-nav-dark-foreground/10 transition-colors"
              >
                Partner With Us
              </a>

              {/* Mobile menu toggle */}
              <button
                className="md:hidden flex items-center gap-2 px-3 py-2 rounded-full hover:bg-nav-dark-foreground/10 transition-colors text-sm font-medium"
                onClick={() => setActiveMenu(activeMenu ? null : navItems[0])}
              >
                Menu
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${activeMenu ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>

          {/* Megamenu dropdown — inside the same dark container */}
          <AnimatePresence>
            {activeMenu && menuData[activeMenu] && (
              <motion.div
                key={activeMenu}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                {/* Divider line */}
                <div className="mx-8 border-t border-nav-dark-foreground/15" />

                <div className="px-8 md:px-10 py-8 md:py-10">
                  {/* Section title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-nav-dark-foreground mb-2 italic">
                    {activeMenu}
                  </h3>

                  <div className="flex flex-col md:flex-row gap-8 mt-4">
                    {/* Description */}
                    <p className="text-nav-dark-foreground/60 text-sm md:text-base max-w-xs leading-relaxed">
                      {menuData[activeMenu].description}
                    </p>

                    {/* Link columns */}
                    <div className="flex gap-12 md:gap-16">
                      {menuData[activeMenu].links.map((col, colIndex) => (
                        <div key={colIndex} className="flex flex-col gap-3">
                        {col.map((link) => {
                          const label = typeof link === "string" ? link : link.label;
                          const href = typeof link === "string"
                            ? `#${link.toLowerCase().replace(/\s+/g, "-")}`
                            : link.href;
                          return (
                            <a
                              key={label}
                              href={href}
                              className="text-sm md:text-base text-nav-dark-foreground/90 hover:text-nav-dark-foreground underline underline-offset-4 decoration-nav-dark-foreground/30 hover:decoration-nav-dark-foreground/70 transition-colors"
                              onClick={() => setActiveMenu(null)}
                            >
                              {label}
                            </a>
                          );
                        })}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
