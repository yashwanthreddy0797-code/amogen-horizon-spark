import { useLanguage } from "@/i18n/LanguageContext";
import { TYPE, SPACING } from "@/typography";

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = {
    [t.footer.company]: [t.footer.companyAbout, t.footer.companyPipeline, t.footer.companyTherapeutic, t.footer.companyCareers, t.footer.companyContact],
    [t.footer.science]: [t.footer.scienceResearch, t.footer.scienceClinical, t.footer.sciencePublications, t.footer.scienceInnovation],
    [t.footer.legal]: [t.footer.legalPrivacy, t.footer.legalTerms, t.footer.legalCookie, t.footer.legalAccessibility],
  };

  return (
    <footer id="contact" className="bg-footer-bg text-footer-foreground">
      <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx, paddingTop: "80px", paddingBottom: SPACING.sectionPy.desktop }}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <span style={{ ...TYPE.h3, fontSize: "20px" }} className="tracking-tight">AMOGEN</span>
            <p style={{ ...TYPE.bodySm, color: "rgba(255,255,255,0.5)", marginTop: "20px" }} className="max-w-xs">{t.footer.tagline}</p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ ...TYPE.label, color: "rgba(255,255,255,0.4)", marginBottom: "24px" }}>{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" style={{ ...TYPE.bodySm, color: "rgba(255,255,255,0.6)" }} className="hover:text-footer-foreground transition-colors duration-200">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-footer-foreground/10 mt-20 pt-8">
          <p style={{ ...TYPE.bodySm, fontSize: "12px", color: "rgba(255,255,255,0.3)" }} className="mb-4 max-w-4xl">{t.footer.disclaimer}</p>
          <p style={{ ...TYPE.bodySm, fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>© {new Date().getFullYear()} {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
