import { useState, useEffect, useRef } from "react";
import { Search, Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, Language } from "@/i18n/LanguageContext";

const languages = [
  { code: "en" as Language, label: "English" },
  { code: "zh" as Language, label: "中文" },
  { code: "ja" as Language, label: "日本語" },
  { code: "es" as Language, label: "Español" },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { language, setLanguage, t } = useLanguage();

  const menuData = {
    [t.nav.about]: {
      description: t.nav.aboutDesc,
      href: "/about",
      links: [
        [t.nav.whoWeAre, t.nav.whatWeDo, { label: t.nav.leadership, href: "/about/leadership" }],
        [t.nav.governance, t.nav.sustainability],
      ],
    },
    [t.nav.products]: {
      description: t.nav.productsDesc,
      links: [
        [t.nav.pipelineOverview, t.nav.moleculeDetails],
        [t.nav.productLabels],
      ],
    },
    [t.nav.cdmo]: {
      description: t.nav.cdmoDesc,
      links: [
        [t.nav.manufacturingServices, t.nav.qualitySystems],
        [t.nav.capacityDashboard, t.nav.rfpProcess],
      ],
    },
    [t.nav.science]: {
      description: t.nav.scienceDesc,
      href: "/science",
      links: [
        [t.nav.technologyStack, t.nav.publications],
        [t.nav.comparabilityData, t.nav.researchCapabilities],
      ],
    },
    [t.nav.news]: {
      description: t.nav.newsDesc,
      links: [
        [t.nav.pressReleases, t.nav.blog],
        [t.nav.documentLibrary, t.nav.latestUpdates],
      ],
    },
  } as Record<string, { description: string; href?: string; links: (string | { label: string; href: string })[][] }>;

  const navItems = Object.keys(menuData);

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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`bg-nav-dark text-nav-dark-foreground transition-all duration-300 ${
            activeMenu ? "rounded-t-[1.5rem]" : "rounded-full"
          } ${scrolled ? "shadow-2xl" : "shadow-lg"}`}
        >
          <div className="flex items-center justify-between px-6 md:px-8 py-3">
            <a href="/" className="shrink-0">
              <span className="text-base md:text-lg font-bold tracking-tight text-nav-dark-foreground">
                AMOGEN
              </span>
            </a>

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

            <div className="flex items-center gap-1">
              <button
                className="hidden md:flex items-center justify-center w-9 h-9 rounded-full hover:bg-nav-dark-foreground/10 transition-colors"
                aria-label={t.nav.search}
              >
                <Search size={17} />
              </button>
              <div className="relative">
                <button
                  className="hidden md:flex items-center justify-center w-9 h-9 rounded-full hover:bg-nav-dark-foreground/10 transition-colors"
                  aria-label={t.nav.language}
                  onClick={() => setLangOpen(!langOpen)}
                >
                  <Globe size={17} />
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full mt-2 bg-nav-dark border border-nav-dark-foreground/15 rounded-xl shadow-xl overflow-hidden min-w-[140px]">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          language === lang.code
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
                {t.nav.partnerWithUs}
              </a>

              <button
                className="md:hidden flex items-center gap-2 px-3 py-2 rounded-full hover:bg-nav-dark-foreground/10 transition-colors text-sm font-medium"
                onClick={() => setActiveMenu(activeMenu ? null : navItems[0])}
              >
                {t.nav.menu}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${activeMenu ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>

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
                <div className="mx-8 border-t border-nav-dark-foreground/15" />
                <div className="px-8 md:px-10 py-8 md:py-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-nav-dark-foreground mb-2 italic">
                    {activeMenu}
                  </h3>
                  <div className="flex flex-col md:flex-row gap-8 mt-4">
                    <p className="text-nav-dark-foreground/60 text-sm md:text-base max-w-xs leading-relaxed">
                      {menuData[activeMenu].description}
                    </p>
                    <div className="flex gap-12 md:gap-16">
                      {menuData[activeMenu].links.map((col, colIndex) => (
                        <div key={colIndex} className="flex flex-col gap-3">
                          {col.map((link) => {
                            const label = typeof link === "string" ? link : link.label;
                            const href = typeof link === "string"
                              ? `#${label.toLowerCase().replace(/\s+/g, "-")}`
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
