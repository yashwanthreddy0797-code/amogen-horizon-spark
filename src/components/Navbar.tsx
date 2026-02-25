import { useState, useEffect, useRef } from "react";
import { Search, Globe, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, Language } from "@/i18n/LanguageContext";
import aboutHero from "@/assets/about-hero.jpg";
import productsVials from "@/assets/products-vials.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import scienceHero from "@/assets/science-hero.jpg";
import researchLab from "@/assets/research-lab.jpg";

const languages = [
  { code: "en" as Language, label: "English" },
  { code: "zh" as Language, label: "中文" },
  { code: "ja" as Language, label: "日本語" },
  { code: "es" as Language, label: "Español" },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { language, setLanguage, t } = useLanguage();

  const menuData = {
    [t.nav.about]: {
      description: t.nav.aboutDesc,
      href: "/about",
      image: { src: aboutHero, title: "A Medicine Company", subtitle: "Explore who we are", href: "/about" },
      links: [
        [t.nav.whoWeAre, t.nav.whatWeDo, { label: t.nav.leadership, href: "/about/leadership" }],
        [t.nav.governance, t.nav.sustainability],
      ],
    },
    [t.nav.products]: {
      description: t.nav.productsDesc,
      image: { src: productsVials, title: "Our Medicines", subtitle: "Discover our portfolio", href: "#products" },
      links: [
        [t.nav.pipelineOverview, t.nav.moleculeDetails],
        [t.nav.productLabels],
      ],
    },
    [t.nav.cdmo]: {
      description: t.nav.cdmoDesc,
      image: { src: manufacturing, title: "Manufacturing Excellence", subtitle: "World-class capabilities", href: "#cdmo" },
      links: [
        [t.nav.manufacturingServices, t.nav.qualitySystems],
        [t.nav.capacityDashboard, t.nav.rfpProcess],
      ],
    },
    [t.nav.science]: {
      description: t.nav.scienceDesc,
      href: "/science",
      image: { src: scienceHero, title: "Innovation & Research", subtitle: "Advancing science", href: "/science" },
      links: [
        [t.nav.technologyStack, t.nav.publications],
        [t.nav.comparabilityData, t.nav.researchCapabilities],
      ],
    },
    [t.nav.news]: {
      description: t.nav.newsDesc,
      image: { src: researchLab, title: "Latest Updates", subtitle: "News & insights", href: "#news" },
      links: [
        [t.nav.pressReleases, t.nav.blog],
        [t.nav.documentLibrary, t.nav.latestUpdates],
      ],
    },
  } as Record<string, { description: string; href?: string; image: { src: string; title: string; subtitle: string; href: string }; links: (string | { label: string; href: string })[][] }>;

  const navItems = Object.keys(menuData);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const footer = document.getElementById("contact");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        setHidden(footerTop <= window.innerHeight);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus when transitioning between scrolled states
  const prevScrolled = useRef(scrolled);
  useEffect(() => {
    if (prevScrolled.current !== scrolled) {
      prevScrolled.current = scrolled;
      // Defer state resets to after the animation frame to avoid mid-transition re-renders
      requestAnimationFrame(() => {
        setActiveMenu(null);
        setMobileMenuOpen(false);
        setLangOpen(false);
      });
    }
  }, [scrolled]);

  const handleMouseEnter = (item: string) => {
    if (scrolled) return; // No hover menus in scrolled mode
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

  const toggleScrolledMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setActiveMenu(null);
    }
  };

  // Mega menu content (shared between both modes)
  const renderMegaMenu = () => (
    <AnimatePresence>
      {activeMenu && menuData[activeMenu] && (
        <motion.div
          key={activeMenu}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="overflow-hidden"
          onMouseEnter={!scrolled ? handleDropdownEnter : undefined}
          onMouseLeave={!scrolled ? handleDropdownLeave : undefined}
        >
          <div className="mx-8 border-t border-nav-dark-foreground/15" />
          <div className="px-8 md:px-10 py-8 md:py-10">
            <h3 className="text-2xl md:text-3xl font-bold text-nav-dark-foreground mb-2 italic">
              {activeMenu}
            </h3>
            <div className="flex flex-col md:flex-row gap-8 mt-4">
              {/* Left side: description + links */}
              <div className="flex flex-col gap-6 md:min-w-[280px]">
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
                            onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}
                          >
                            {label}
                          </a>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side: Featured image card (Lilly-style) */}
              <a
                href={menuData[activeMenu].image.href}
                className="relative ml-auto flex-shrink-0 w-full md:w-[420px] h-[200px] md:h-[220px] rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}
              >
                <img
                  src={menuData[activeMenu].image.src}
                  alt={menuData[activeMenu].image.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {menuData[activeMenu].image.title}
                    </h4>
                    <p className="text-white/70 text-sm mt-0.5">
                      {menuData[activeMenu].image.subtitle}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors">
                    <ArrowRight size={18} className="text-white" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Scrolled menu items list (shown when hamburger is clicked)
  const renderScrolledMenuPanel = () => (
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="mx-6 border-t border-nav-dark-foreground/15" />
          <div className="px-6 py-6">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const data = menuData[item];
                return (
                  <button
                    key={item}
                    onClick={() => {
                      if (activeMenu === item) {
                        setActiveMenu(null);
                      } else {
                        setActiveMenu(item);
                      }
                    }}
                    className={`flex items-center justify-between w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-colors duration-200 ${
                      activeMenu === item
                        ? "bg-nav-dark-foreground/10 text-nav-dark-foreground"
                        : "text-nav-dark-foreground/80 hover:text-nav-dark-foreground hover:bg-nav-dark-foreground/5"
                    }`}
                  >
                    {item}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${activeMenu === item ? "rotate-180" : ""}`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Expanded sub-menu inside scrolled panel */}
            <AnimatePresence>
              {activeMenu && menuData[activeMenu] && (
                <motion.div
                  key={activeMenu}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 py-4 mt-2 rounded-xl bg-nav-dark-foreground/5">
                    <h3 className="text-lg font-bold text-nav-dark-foreground mb-1 italic">
                      {activeMenu}
                    </h3>
                    <p className="text-nav-dark-foreground/60 text-sm mb-4 leading-relaxed">
                      {menuData[activeMenu].description}
                    </p>
                    <div className="flex gap-10 mb-4">
                      {menuData[activeMenu].links.map((col, colIndex) => (
                        <div key={colIndex} className="flex flex-col gap-2.5">
                          {col.map((link) => {
                            const label = typeof link === "string" ? link : link.label;
                            const href = typeof link === "string"
                              ? `#${label.toLowerCase().replace(/\s+/g, "-")}`
                              : link.href;
                            return (
                              <a
                                key={label}
                                href={href}
                                className="text-sm text-nav-dark-foreground/90 hover:text-nav-dark-foreground underline underline-offset-4 decoration-nav-dark-foreground/30 hover:decoration-nav-dark-foreground/70 transition-colors"
                                onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}
                              >
                                {label}
                              </a>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                    {/* Featured image card */}
                    <a
                      href={menuData[activeMenu].image.href}
                      className="relative block w-full h-[140px] rounded-xl overflow-hidden group cursor-pointer"
                      onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}
                    >
                      <img
                        src={menuData[activeMenu].image.src}
                        alt={menuData[activeMenu].image.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                        <div>
                          <h4 className="text-sm font-semibold text-white">{menuData[activeMenu].image.title}</h4>
                          <p className="text-white/70 text-xs mt-0.5">{menuData[activeMenu].image.subtitle}</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors">
                          <ArrowRight size={14} className="text-white" />
                        </div>
                      </div>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4 md:pt-6 transition-all duration-700 ease-out ${hidden ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Both navs render simultaneously; opacity crossfade avoids unmount blink */}
      <motion.div
        key="full-nav"
        ref={navRef}
        className="max-w-7xl mx-auto"
        onMouseLeave={handleMouseLeave}
        initial={false}
        animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -10 : 0, scale: scrolled ? 0.97 : 1, visibility: scrolled ? "hidden" as const : "visible" as const }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], visibility: { delay: scrolled ? 0.4 : 0 } }}
        style={{ pointerEvents: scrolled ? "none" : "auto", position: scrolled ? "absolute" : "relative", left: 0, right: 0 }}
      >
            <div
              className={`text-nav-dark-foreground transition-all duration-500 ease-out ${
                activeMenu ? "rounded-t-[1.5rem]" : "rounded-full"
              } ${
                hovered || activeMenu
                  ? "bg-nav-dark shadow-2xl"
                  : "bg-transparent shadow-none"
              }`}
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

              {renderMegaMenu()}
            </div>
          </motion.div>

          {/* ===== SCROLLED (split into two separate pills like Lilly) ===== */}
          <motion.div
            key="split-nav"
            className="max-w-7xl mx-auto flex items-start justify-between text-nav-dark-foreground"
            initial={false}
            animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : -10, visibility: scrolled ? "visible" as const : "hidden" as const }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], visibility: { delay: scrolled ? 0 : 0.4 } }}
            style={{ pointerEvents: scrolled ? "auto" : "none", position: scrolled ? "relative" : "absolute", left: 0, right: 0 }}
          >
            {/* Left pill: Logo + Hamburger */}
            <motion.div
              initial={false}
              animate={{ x: scrolled ? 0 : -20, scale: scrolled ? 1 : 0.95 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`bg-nav-dark shadow-2xl transition-all duration-300 ${
                mobileMenuOpen ? "rounded-t-[1.5rem] rounded-br-[1.5rem]" : "rounded-full"
              }`}
            >
              <div className="flex items-center gap-2 px-4 md:px-5 py-2.5">
                <a href="/" className="shrink-0">
                  <span className="text-base font-bold tracking-tight text-nav-dark-foreground">
                    AMOGEN
                  </span>
                </a>
                <button
                  onClick={toggleScrolledMenu}
                  className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-nav-dark-foreground/10 transition-colors"
                  aria-label={t.nav.menu}
                >
                  <AnimatePresence mode="wait">
                    {mobileMenuOpen ? (
                      <motion.span
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X size={18} />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu size={18} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              {renderScrolledMenuPanel()}
            </motion.div>

            {/* Right pill: Search, Globe, Partner With Us */}
            <motion.div
              initial={false}
              animate={{ x: scrolled ? 0 : 20, scale: scrolled ? 1 : 0.95 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-nav-dark shadow-2xl rounded-full"
            >
              <div className="flex items-center gap-1 px-3 md:px-4 py-2.5">
                <button
                  className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-nav-dark-foreground/10 transition-colors"
                  aria-label={t.nav.search}
                >
                  <Search size={17} />
                </button>
                <div className="relative">
                  <button
                    className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-nav-dark-foreground/10 transition-colors"
                    aria-label={t.nav.language}
                    onClick={() => setLangOpen(!langOpen)}
                  >
                    <Globe size={17} />
                  </button>
                  {langOpen && (
                    <div className="absolute right-0 top-full mt-2 bg-nav-dark border border-nav-dark-foreground/15 rounded-xl shadow-xl overflow-hidden min-w-[140px] z-50">
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
                  className="hidden md:flex items-center text-sm font-medium px-4 py-1.5 rounded-full hover:bg-nav-dark-foreground/10 transition-colors"
                >
                  {t.nav.partnerWithUs}
                </a>
              </div>
            </motion.div>
          </motion.div>
    </header>
  );
};

export default Navbar;
