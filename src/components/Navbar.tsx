import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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

interface NavbarProps {
  variant?: "default" | "cdmo" | "about" | "products" | "news" | "partner";
  hideScrolledPills?: boolean;
}

const Navbar = ({ variant = "default", hideScrolledPills = false }: NavbarProps) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { language, setLanguage, t } = useLanguage();

  const isCdmo = variant === "cdmo";
  const isAbout = variant === "about";
  const isProducts = variant === "products";
  const isNews = variant === "news";
  const isPartner = variant === "partner";
  const isBlueText = isCdmo || isAbout || isProducts || isNews;
  const isWhiteText = isPartner;
  const pillColor = isPartner ? "bg-white" : isNews ? "bg-[#D4D8DC]" : isProducts ? "bg-[#D5CDE8]" : isAbout ? "bg-[#b1d5f2]" : isCdmo ? "bg-[#ccc5bd]" : "bg-nav-dark";
  const pillColorExpanded = isPartner ? "bg-white" : isNews ? "bg-[#D4D8DC]" : isProducts ? "bg-[#D5CDE8]" : isAbout ? "bg-[#b1d5f2]" : isCdmo ? "bg-[#ccc5bd]" : "bg-nav-dark";
  // CDMO/About variant: true blue text on transparent bg; Partner: white text; default: white text on dark bg
  const navBg = (isBlueText || isPartner) ? "bg-transparent" : "bg-nav-dark";
  const navBgHover = (isBlueText || isPartner) ? "bg-[#001965] shadow-2xl" : "bg-nav-dark shadow-2xl";
  const isWhiteNavText = isPartner || isAbout;
  const navText = isWhiteNavText ? "text-white" : isBlueText ? "text-[#001965]" : "text-nav-dark-foreground";
  const navTextMuted = isWhiteNavText ? "text-white/70" : isBlueText ? "text-[#001965]/70" : "text-nav-dark-foreground/80";
  const navTextFull = isWhiteNavText ? "text-white" : isBlueText ? "text-[#001965]" : "text-nav-dark-foreground";
  const navHoverBg = isWhiteNavText ? "hover:bg-white/10" : isBlueText ? "hover:bg-[#001965]/10" : "hover:bg-nav-dark-foreground/10";
  const navActiveBg = isWhiteNavText ? "bg-white/15" : isBlueText ? "bg-[#001965]/15" : "bg-nav-dark-foreground/15";
  const navPillBg = pillColor;
  const navBorderColor = (isBlueText || isPartner) ? "border-[#001965]/15" : "border-nav-dark-foreground/15";

  // Expanded scrolled bar: flips to True Blue bg + light text
  const expandedTextColor = isPartner ? "text-white" : isNews ? "text-[#D4D8DC]" : isProducts ? "text-[#D5CDE8]" : isAbout ? "text-[#b1d5f2]" : isCdmo ? "text-[#ccc5bd]" : navText;
  const navPillBgExpanded = (isBlueText || isPartner) ? "bg-[#001965]" : "bg-nav-dark";
  const navTextExpanded = (isBlueText || isPartner) ? "text-white" : navText;
  const navTextFullExpanded = isBlueText ? "text-white" : navTextFull;
  const navTextMutedExpanded = isBlueText ? "text-white/70" : navTextMuted;
  const navHoverBgExpanded = isBlueText ? "hover:bg-white/10" : navHoverBg;
  const navActiveBgExpanded = isBlueText ? "bg-white/15" : navActiveBg;
  const navBorderColorExpanded = isBlueText ? "border-white/15" : navBorderColor;

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
      href: "/products",
      image: { src: productsVials, title: "Our Medicines", subtitle: "Discover our portfolio", href: "/products" },
      links: [
        [{ label: t.nav.pipelineOverview, href: "/products" }, { label: t.nav.moleculeDetails, href: "/products" }],
        [{ label: t.nav.productLabels, href: "/products" }],
      ],
    },
    [t.nav.cdmo]: {
      description: t.nav.cdmoDesc,
      href: "/cdmo",
      image: { src: manufacturing, title: "Manufacturing Excellence", subtitle: "World-class capabilities", href: "/cdmo" },
      links: [
        [{ label: t.nav.manufacturingServices, href: "/cdmo#manufacturing-services" }, { label: t.nav.qualitySystems, href: "/cdmo#quality-systems" }],
        [{ label: t.nav.capacityDashboard, href: "/cdmo#capacity-dashboard" }, { label: t.nav.rfpProcess, href: "/cdmo#rfp-process" }],
      ],
    },
    [t.nav.science]: {
      description: t.nav.scienceDesc,
      href: "/science",
      image: { src: scienceHero, title: "Innovation & Research", subtitle: "Advancing science", href: "/science" },
      links: [
        [{ label: t.nav.technologyStack, href: "/science#technology-stack" }, { label: t.nav.publications, href: "/science#publications" }],
        [{ label: t.nav.comparabilityData, href: "/science#comparability-data" }, { label: t.nav.researchCapabilities, href: "/science#research-capabilities" }],
      ],
    },
    [t.nav.news]: {
      description: t.nav.newsDesc,
      href: "/news",
      image: { src: researchLab, title: "Latest Updates", subtitle: "News & insights", href: "/news" },
      links: [
        [{ label: t.nav.pressReleases, href: "/news#press-releases" }, { label: t.nav.blog, href: "/news#blog" }],
        [{ label: t.nav.documentLibrary, href: "/news#document-library" }, { label: t.nav.latestUpdates, href: "/news#latest-updates" }],
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
    if (scrolled && !mobileMenuOpen) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (scrolledExpandTimeout.current) clearTimeout(scrolledExpandTimeout.current);
    setActiveMenu(item);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (scrolledExpandTimeout.current) clearTimeout(scrolledExpandTimeout.current);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const scrolledExpandTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleScrolledPillEnter = () => {
    if (scrolledExpandTimeout.current) clearTimeout(scrolledExpandTimeout.current);
    setMobileMenuOpen(true);
  };

  const handleScrolledBarLeave = () => {
    scrolledExpandTimeout.current = setTimeout(() => {
      setMobileMenuOpen(false);
      setActiveMenu(null);
    }, 200);
  };

  const handleScrolledBarEnter = () => {
    if (scrolledExpandTimeout.current) clearTimeout(scrolledExpandTimeout.current);
  };

  // Mega menu content (shared between both modes)
  const renderMegaMenu = (overrides?: { borderColor?: string; textFull?: string; textMuted?: string }) => {
    const _borderColor = overrides?.borderColor || navBorderColor;
    const _textFull = overrides?.textFull || navTextFull;
    const _textMuted = overrides?.textMuted || navTextMuted;
    return (
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
          <div className={`mx-8 border-t ${_borderColor}`} />
          <div className="px-8 md:px-10 py-8 md:py-10">
            <h3 className={`text-2xl md:text-3xl font-bold ${_textFull} mb-2 italic`}>
              {activeMenu}
            </h3>
            <div className="flex flex-col md:flex-row gap-8 mt-4">
              <div className="flex flex-col gap-6 md:min-w-[280px]">
                <p className={`${_textMuted} text-sm md:text-base max-w-xs leading-relaxed`}>
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
                            className={`text-sm md:text-base ${_textMuted} hover:${_textFull} underline underline-offset-4 decoration-current/30 hover:decoration-current/70 transition-colors`}
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
  );};

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
              className={`transition-all duration-500 ease-out overflow-hidden rounded-[1.5rem] ${
                hovered || activeMenu
                  ? `${navBgHover} ${isBlueText ? "text-[#ccc5bd]" : navText}`
                  : `${navBg} ${navText} shadow-none`
              }`}
            >
              {(() => {
                const isActive = hovered || !!activeMenu;
                const _text = isBlueText && isActive ? navTextFullExpanded : navTextFull;
                const _textMuted = isBlueText && isActive ? navTextMutedExpanded : navTextMuted;
                const _hoverBg = isBlueText && isActive ? navHoverBgExpanded : navHoverBg;
                const _activeBg = isBlueText && isActive ? navActiveBgExpanded : navActiveBg;
                return (
              <div className="relative flex items-center justify-between px-6 md:px-8 py-2">
                <a href="/" className="shrink-0 z-10">
                  <span className={`text-base md:text-lg font-bold tracking-tight ${_text}`}>
                    AMOGEN
                  </span>
                </a>

                <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
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
                              ? `${_activeBg} ${_text}`
                              : `${_textMuted} ${_hoverBg} hover:${_text}`
                          }`}
                        >
                          {item}
                        </button>
                      </div>
                    );
                  })}
                </nav>

                <div className="flex items-center gap-1 z-10">
                  <button
                    className={`hidden md:flex items-center justify-center w-9 h-9 rounded-full ${_hoverBg} transition-colors`}
                    aria-label={t.nav.search}
                  >
                    <Search size={17} />
                  </button>
                  <div className="relative">
                    <button
                      className={`hidden md:flex items-center justify-center w-9 h-9 rounded-full ${_hoverBg} transition-colors`}
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
                  <Link
                    to="/partner"
                    className={`hidden md:flex items-center text-sm font-medium px-5 py-2 rounded-full ${_hoverBg} transition-colors`}
                  >
                    {t.nav.partnerWithUs}
                  </Link>

                  <button
                    className={`md:hidden flex items-center gap-2 px-3 py-2 rounded-full ${_hoverBg} transition-colors text-sm font-medium`}
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
                );
              })()}

              {renderMegaMenu(isBlueText && (hovered || !!activeMenu) ? { borderColor: navBorderColorExpanded, textFull: navTextFullExpanded, textMuted: navTextMutedExpanded } : undefined)}
            </div>
          </motion.div>

          {/* ===== SCROLLED (split into two separate pills like Lilly) ===== */}
          <motion.div
            key="split-nav"
            className={`max-w-7xl mx-auto ${isPartner ? "text-[#001965]" : navText}`}
            initial={false}
            animate={{ opacity: hideScrolledPills ? 0 : (scrolled ? 1 : 0), y: hideScrolledPills ? -10 : (scrolled ? 0 : -10), visibility: (hideScrolledPills || !scrolled) ? "hidden" as const : "visible" as const }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], visibility: { delay: scrolled ? 0 : 0.4 } }}
            style={{ pointerEvents: scrolled ? "auto" : "none", position: scrolled ? "relative" : "absolute", left: 0, right: 0 }}
          >
            {/* Pills & Expanded share the same space — crossfade with mode="wait" */}
            <AnimatePresence mode="wait">
              {!mobileMenuOpen ? (
                <motion.div
                  key="pills"
                  className="flex items-start justify-between"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  {/* Left pill: Logo + Hamburger */}
                   <div
                    className={`${navPillBg} shadow-2xl rounded-full cursor-pointer`}
                    onMouseEnter={handleScrolledPillEnter}
                  >
                    <div className="flex items-center gap-2 px-4 md:px-5 py-2.5">
                      <a href="/" className="shrink-0">
                         <span className={`text-base font-bold tracking-tight ${isPartner ? "text-[#001965]" : navTextFull}`}>
                          AMOGEN
                        </span>
                      </a>
                      <div
                        className={`flex items-center justify-center w-9 h-9 rounded-full ${navHoverBg} transition-colors`}
                        aria-label={t.nav.menu}
                      >
                        <Menu size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Right pill: Search, Globe, Partner With Us */}
                  <div className={`${navPillBg} shadow-2xl rounded-full`}>
                    <div className="flex items-center gap-1 px-3 md:px-4 py-2.5">
                      <button
                        className={`flex items-center justify-center w-9 h-9 rounded-full ${navHoverBg} transition-colors`}
                        aria-label={t.nav.search}
                      >
                        <Search size={17} />
                      </button>
                      <div className="relative">
                        <button
                          className={`flex items-center justify-center w-9 h-9 rounded-full ${navHoverBg} transition-colors`}
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
                      <Link
                        to="/partner"
                        className={`hidden md:flex items-center text-sm font-medium px-4 py-1.5 rounded-full ${navHoverBg} transition-colors`}
                      >
                        {t.nav.partnerWithUs}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0, width: "200px" }}
                  animate={{ opacity: 1, width: "100%" }}
                  exit={{ opacity: 0, width: "200px" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: "hidden" }}
                  onMouseEnter={handleScrolledBarEnter}
                  onMouseLeave={handleScrolledBarLeave}
                >
                    <div
                      className={`${navPillBgExpanded} shadow-2xl ${navTextExpanded} transition-all duration-300 rounded-[1.5rem] overflow-hidden`}
                  >
                    {/* Top bar with logo, nav items, and close button */}
                    <div className="relative flex items-center justify-between px-6 md:px-8 py-2">
                      <a href="/" className="shrink-0 z-10">
                        <span className={`text-base md:text-lg font-bold tracking-tight ${navTextFullExpanded}`}>
                          AMOGEN
                        </span>
                      </a>

                      <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
                        {navItems.map((item) => {
                          const data = menuData[item];
                          const href = data.href || "/";
                          return (
                            <a
                              key={item}
                              href={href}
                              onClick={() => { setMobileMenuOpen(false); setActiveMenu(null); }}
                              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${navTextMutedExpanded} ${navHoverBgExpanded} hover:${navTextFullExpanded}`}
                            >
                              {item}
                            </a>
                          );
                        })}
                      </nav>

                      <div className="flex items-center gap-1 z-10">
                        <button
                          className={`flex items-center justify-center w-9 h-9 rounded-full ${navHoverBgExpanded} transition-colors`}
                          aria-label={t.nav.search}
                        >
                          <Search size={17} />
                        </button>
                        <div className="relative">
                          <button
                            className={`flex items-center justify-center w-9 h-9 rounded-full ${navHoverBgExpanded} transition-colors`}
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
                        <Link
                          to="/partner"
                          className={`hidden md:flex items-center text-sm font-medium px-5 py-2 rounded-full ${navHoverBgExpanded} transition-colors`}
                        >
                          {t.nav.partnerWithUs}
                        </Link>
                        <button
                          onClick={() => { setMobileMenuOpen(false); setActiveMenu(null); }}
                          className={`flex items-center justify-center w-9 h-9 rounded-full ${navHoverBgExpanded} transition-colors`}
                          aria-label="Close menu"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </div>

                    {/* No mega menu in scrolled state — direct links only */}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
    </header>
  );
};

export default Navbar;
