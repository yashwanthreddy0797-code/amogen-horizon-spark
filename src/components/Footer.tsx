import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = {
    [t.footer.company]: [t.footer.companyAbout, t.footer.companyPipeline, t.footer.companyTherapeutic, t.footer.companyCareers, t.footer.companyContact],
    [t.footer.science]: [t.footer.scienceResearch, t.footer.scienceClinical, t.footer.sciencePublications, t.footer.scienceInnovation],
    [t.footer.legal]: [t.footer.legalPrivacy, t.footer.legalTerms, t.footer.legalCookie, t.footer.legalAccessibility],
  };

  return (
    <footer id="contact" className="bg-nav-dark text-nav-dark-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 lg:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <span className="text-xl font-bold tracking-tight">AMOGEN</span>
            <p className="text-sm text-nav-dark-foreground/50 mt-5 leading-relaxed max-w-xs">{t.footer.tagline}</p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-nav-dark-foreground/40 mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-nav-dark-foreground/60 hover:text-nav-dark-foreground transition-colors duration-200">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-nav-dark-foreground/10 mt-20 pt-8">
          <p className="text-xs text-nav-dark-foreground/30 leading-relaxed mb-4 max-w-4xl">{t.footer.disclaimer}</p>
          <p className="text-xs text-nav-dark-foreground/30">© {new Date().getFullYear()} {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
