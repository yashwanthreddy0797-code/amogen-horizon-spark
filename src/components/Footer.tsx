const footerLinks = {
  Company: ["About", "Pipeline", "Therapeutic Areas", "News", "Contact"],
  Legal: ["Privacy Policy", "Terms of Use", "Cookie Policy"],
};

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <span className="text-lg font-semibold tracking-tight">
              AMOGEN <span className="font-light">BIO PHARMA</span>
            </span>
            <p className="text-sm text-primary-foreground/60 mt-4 leading-relaxed max-w-xs">
              Dedicated to advancing biopharmaceutical innovation for patients worldwide.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary-foreground/50 mb-6">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
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
        <div className="border-t border-primary-foreground/10 mt-16 pt-8">
          <p className="text-xs text-primary-foreground/40 leading-relaxed mb-4">
            Scientific Disclaimer: The information on this website is intended for informational
            purposes only and does not constitute medical advice. AMOGEN BIO PHARMA products
            are investigational and have not been approved by regulatory authorities unless
            otherwise stated.
          </p>
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} AMOGEN BIO PHARMA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
