const footerLinks = {
  Company: ["About", "Pipeline", "Therapeutic Areas", "Careers", "Contact"],
  Science: ["Research", "Clinical Trials", "Publications", "Innovation"],
  Legal: ["Privacy Policy", "Terms of Use", "Cookie Policy", "Accessibility"],
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-nav-dark text-nav-dark-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 lg:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold tracking-tight">
              AMOGEN
            </span>
            <p className="text-sm text-nav-dark-foreground/50 mt-5 leading-relaxed max-w-xs">
              Dedicated to advancing biopharmaceutical innovation for patients worldwide.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-nav-dark-foreground/40 mb-6">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-nav-dark-foreground/60 hover:text-nav-dark-foreground transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer & Copyright */}
        <div className="border-t border-nav-dark-foreground/10 mt-20 pt-8">
          <p className="text-xs text-nav-dark-foreground/30 leading-relaxed mb-4 max-w-4xl">
            Scientific Disclaimer: The information on this website is intended for informational
            purposes only and does not constitute medical advice. AMOGEN BIO PHARMA products
            are investigational and have not been approved by regulatory authorities unless
            otherwise stated. Always consult your healthcare provider for medical advice.
          </p>
          <p className="text-xs text-nav-dark-foreground/30">
            © {new Date().getFullYear()} AMOGEN BIO PHARMA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
